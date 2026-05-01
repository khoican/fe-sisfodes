import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card'
import Title from '#/components/ui/title'
import { facilityQueryOptions } from '#/services/facility.service'
import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { useState, useMemo } from 'react'
import { 
  School, 
  Stethoscope, 
  Church, 
  Trophy, 
  MapPin, 
  Building2, 
  Trees, 
  ShoppingBag,
  Search,
  CheckCircle2,
  Clock,
  Hammer,
  XCircle
} from 'lucide-react'
import type { FacilityCategory, FacilityStatus } from '#/types/facility'

export const Route = createFileRoute('/profil/fasilitas-umum')({
  head: () => ({
    meta: [
      {
        title: 'Fasilitas Umum | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Daftar fasilitas umum yang tersedia di Desa Sumberkejayan mulai dari pendidikan, kesehatan, hingga sarana olahraga.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const facilities = await context.queryClient.ensureQueryData(facilityQueryOptions())
    return {
      facilities: facilities.response
    }
  },
  component: FasilitasUmum
})

const CATEGORY_ICONS: Record<FacilityCategory, any> = {
  'Pendidikan': School,
  'Kesehatan': Stethoscope,
  'Peribadatan': Church,
  'Olahraga': Trophy,
  'Layanan Publik': Building2,
  'Ruang Terbuka Hijau': Trees,
  'Ekonomi': ShoppingBag,
  'Transportasi': MapPin
}

const STATUS_CONFIG: Record<FacilityStatus, { color: string; icon: any }> = {
  'Aktif': { color: 'text-green-600 bg-green-50', icon: CheckCircle2 },
  'Renovasi': { color: 'text-amber-600 bg-amber-50', icon: Hammer },
  'Dalam Pembangunan': { color: 'text-blue-600 bg-blue-50', icon: Clock },
  'Non-Aktif': { color: 'text-red-600 bg-red-50', icon: XCircle }
}

function FasilitasUmum() {
  const { facilities } = Route.useLoaderData()
  const [selectedCategory, setSelectedCategory] = useState<FacilityCategory | 'Semua'>('Semua')
  const [searchQuery, setSearchQuery] = useState('')

  const categories: (FacilityCategory | 'Semua')[] = ['Semua', ...Array.from(new Set(facilities.map(f => f.category)))]

  const filteredFacilities = useMemo(() => {
    return facilities.filter(f => {
      const matchCategory = selectedCategory === 'Semua' || f.category === selectedCategory
      const matchSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.address.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [facilities, selectedCategory, searchQuery])

  return (
    <main className='w-full'>
      {/* Hero Section */}
      <section className='grid md:grid-cols-8 gap-10 items-center bg-white px-4 lg:px-12 pb-8 pt-8 rounded-b-xl'>
        <div className='w-full md:col-span-5'>
          <Badge variant='primary' className='w-fit uppercase tracking-wider px-4 mb-4'>
            Layanan & Sarana
          </Badge>
          <h1 className='text-6xl font-extrabold leading-tight'>
            Fasilitas <span className='text-primary'>Publik</span> Kami
          </h1>
          <p className='text-sm md:text-lg text-gray-600 mt-4 max-w-2xl'>
            Pemerintah Desa Sumberkejayan berkomitmen menyediakan sarana dan prasarana yang memadai 
            untuk mendukung produktivitas, kesehatan, dan kesejahteraan seluruh warga.
          </p>
        </div>

        <div className='w-full md:col-span-3 h-[40vh] relative rounded-2xl overflow-hidden shadow-xl'>
          <Image
            src='https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop'
            alt='Fasilitas Umum Desa'
            className='w-full h-full object-cover'
            layout='fullWidth'
          />
          <div className='absolute inset-0 bg-linear-to-t from-primary/30 to-transparent'></div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className='mt-12 px-4 lg:px-12'>
        <div className='flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-2xl shadow-sm border'>
          <div className='flex flex-wrap gap-2'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className='relative w-full md:w-72'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
            <input
              type='text'
              placeholder='Cari fasilitas...'
              className='w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className='mt-8 px-4 lg:px-12 mb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredFacilities.map((facility) => {
            const Icon = CATEGORY_ICONS[facility.category] || Building2
            const statusStyle = STATUS_CONFIG[facility.status]

            return (
              <Card key={facility.id} className='group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300'>
                <div className='relative h-56 overflow-hidden'>
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    layout='fullWidth'
                  />
                  <div className='absolute top-4 left-4'>
                    <Badge className='bg-white/90 text-primary hover:bg-white backdrop-blur-sm'>
                      <Icon className='w-3 h-3 mr-1' />
                      {facility.category}
                    </Badge>
                  </div>
                  <div className='absolute bottom-4 left-4'>
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusStyle.color}`}>
                      <statusStyle.icon className='w-3 h-3' />
                      {facility.status}
                    </div>
                  </div>
                </div>

                <CardHeader className='pb-2'>
                  <CardTitle className='text-xl group-hover:text-primary transition-colors'>
                    {facility.name}
                  </CardTitle>
                  <CardDescription className='flex items-start gap-1 text-xs'>
                    <MapPin className='w-3 h-3 mt-0.5 shrink-0 text-primary' />
                    {facility.address}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className='text-sm text-gray-500 line-clamp-2 mb-6'>
                    {facility.description}
                  </p>

                  <div className='grid grid-cols-2 gap-3 pt-4 border-t border-dashed'>
                    {Object.entries(facility.metadata).slice(0, 4).map(([key, value]) => (
                      <div key={key}>
                        <p className='text-[10px] uppercase text-gray-400 font-semibold tracking-wider'>{key}</p>
                        <p className='text-xs font-bold text-gray-700'>{value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredFacilities.length === 0 && (
          <div className='w-full py-20 flex flex-col items-center text-center'>
            <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
              <Search className='w-10 h-10 text-gray-300' />
            </div>
            <h3 className='text-xl font-bold text-gray-800'>Tidak ditemukan</h3>
            <p className='text-gray-500 mt-2'>Maaf, fasilitas yang Anda cari tidak tersedia dalam kategori ini.</p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className='w-full bg-primary p-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='text-white'>
          <h3 className='text-3xl font-bold'>Butuh Informasi Lebih Lanjut?</h3>
          <p className='text-white/80 mt-2 max-w-xl'>
            Jika Anda memiliki pertanyaan mengenai penggunaan fasilitas desa atau ingin melaporkan 
            kerusakan sarana publik, silakan hubungi kantor desa.
          </p>
        </div>
        <button className='px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-gray-100 transition-colors shadow-lg'>
          Hubungi Kami
        </button>
      </section>
    </main>
  )
}
