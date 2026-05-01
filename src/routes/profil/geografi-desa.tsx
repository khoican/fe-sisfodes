import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import Title from '#/components/ui/title'
import { geographyQueryOptions } from '#/services/geography.service'
import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { Map, Mountain, CloudSun, Navigation, PieChart } from 'lucide-react'

export const Route = createFileRoute('/profil/geografi-desa')({
  head: () => ({
    meta: [
      {
        title: 'Geografi Desa | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Informasi mengenai letak geografis, luas wilayah, topografi, dan tata guna lahan Desa Sumberkejayan.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const geography = await context.queryClient.ensureQueryData(geographyQueryOptions())
    return {
      geography: geography.response
    }
  },
  component: GeografiDesa
})

function GeografiDesa() {
  const { geography } = Route.useLoaderData()

  if (!geography) return null

  const stats = [
    {
      label: 'Luas Wilayah',
      value: `${geography.total_area} Ha`,
      icon: Map,
      description: 'Total luas wilayah administratif desa'
    },
    {
      label: 'Topografi',
      value: geography.topography,
      icon: Mountain,
      description: 'Karakteristik bentuk permukaan tanah'
    },
    {
      label: 'Ketinggian',
      value: `${geography.altitude} mdpl`,
      icon: Mountain,
      description: 'Ketinggian rata-rata dari permukaan laut'
    },
    {
      label: 'Iklim',
      value: geography.climate,
      icon: CloudSun,
      description: 'Kondisi cuaca dan suhu rata-rata'
    }
  ]

  return (
    <main className='w-full'>
      {/* Hero Section */}
      <section className='grid md:grid-cols-8 gap-10 items-center bg-white px-4 lg:px-12 pb-8 pt-8 rounded-b-xl'>
        <div className='w-full md:col-span-5'>
          <Badge variant='primary' className='w-fit uppercase tracking-wider px-4 mb-4'>
            Profil Desa
          </Badge>
          <h1 className='text-6xl font-extrabold leading-tight'>
            Bentang <span className='text-primary'>Alam</span> & Geografi
          </h1>
          <p className='text-sm md:text-lg text-gray-600 mt-4 max-w-2xl'>
            Eksplorasi karakteristik fisik Desa Sumberkejayan, mulai dari luas wilayah, 
            kondisi topografi yang subur, hingga pembagian tata guna lahan yang mendukung keberlanjutan.
          </p>
        </div>

        <div className='w-full md:col-span-3 h-[50vh] relative rounded-2xl overflow-hidden shadow-2xl'>
          <Image
            src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1332&auto=format&fit=crop'
            alt='Geografi Desa Sumberkejayan'
            className='w-full h-full object-cover brightness-90'
            layout='fullWidth'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/40 to-transparent'></div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className='mt-16 px-4 lg:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
            <Card key={index} className='border-none shadow-md hover:shadow-lg transition-shadow duration-300'>
              <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
                <CardTitle className='text-sm font-medium text-gray-500'>
                  {stat.label}
                </CardTitle>
                <stat.icon className='w-5 h-5 text-primary opacity-70' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold text-gray-900'>{stat.value}</div>
                <p className='text-xs text-gray-400 mt-1'>
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className='grid lg:grid-cols-2 gap-12 mt-16 px-4 lg:px-12 mb-16'>
        {/* Batas Wilayah */}
        <section>
          <Title title='Batas Wilayah' />
          <div className='relative mt-8 h-80 bg-primary/5 rounded-3xl p-8 flex items-center justify-center'>
             {/* North */}
             <div className='absolute top-6 left-1/2 -translate-x-1/2 text-center'>
                <Badge variant='outline' className='bg-white mb-2'>Utara</Badge>
                <p className='font-semibold text-gray-700'>{geography.borders.north}</p>
             </div>
             
             {/* South */}
             <div className='absolute bottom-6 left-1/2 -translate-x-1/2 text-center'>
                <p className='font-semibold text-gray-700 mb-2'>{geography.borders.south}</p>
                <Badge variant='outline' className='bg-white'>Selatan</Badge>
             </div>

             {/* East */}
             <div className='absolute right-6 top-1/2 -translate-y-1/2 text-right'>
                <Badge variant='outline' className='bg-white mb-2'>Timur</Badge>
                <p className='font-semibold text-gray-700'>{geography.borders.east}</p>
             </div>

             {/* West */}
             <div className='absolute left-6 top-1/2 -translate-y-1/2 text-left'>
                <Badge variant='outline' className='bg-white mb-2'>Barat</Badge>
                <p className='font-semibold text-gray-700'>{geography.borders.west}</p>
             </div>

             <div className='w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center border-4 border-white shadow-inner'>
                <Navigation className='w-10 h-10 text-primary animate-pulse' />
             </div>
          </div>
        </section>

        {/* Tata Guna Lahan */}
        <section>
          <Title title='Tata Guna Lahan' />
          <div className='bg-white rounded-3xl shadow-sm border p-8 mt-6'>
            <div className='flex items-center gap-4 mb-8'>
               <div className='p-3 bg-primary/10 rounded-2xl'>
                  <PieChart className='w-6 h-6 text-primary' />
               </div>
               <div>
                  <h4 className='font-bold text-xl'>Pemanfaatan Lahan</h4>
                  <p className='text-sm text-gray-500'>Distribusi penggunaan wilayah desa</p>
               </div>
            </div>

            <div className='space-y-6'>
              {geography.land_use.map((item, index) => (
                <div key={index} className='space-y-2'>
                  <div className='flex justify-between text-sm font-medium'>
                    <span className='text-gray-700'>{item.label}</span>
                    <span className='text-primary'>{item.percentage}% ({item.area} Ha)</span>
                  </div>
                  <div className='w-full bg-gray-100 rounded-full h-2.5 overflow-hidden'>
                    <div 
                      className='bg-primary h-full rounded-full transition-all duration-1000 ease-out' 
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className='mt-8 pt-6 border-t border-dashed text-xs text-gray-400 flex justify-between items-center'>
               <span>* Data berdasarkan pembaruan terakhir</span>
               <Badge variant='secondary' className='text-[10px]'>{geography.last_updated}</Badge>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Info */}
      <section className='w-full bg-primary/5 rounded-t-3xl p-12 flex flex-col items-center text-center gap-6'>
        <h3 className='text-2xl font-bold'>Potensi Wilayah</h3>
        <p className='max-w-2xl text-gray-600 leading-relaxed'>
          Kondisi geografis yang strategis dengan dominasi lahan pertanian {geography.land_use.find(l => l.label === 'Lahan Pertanian')?.percentage}% 
          menjadikan Desa Sumberkejayan sebagai lumbung pangan potensial yang terus dikembangkan melalui modernisasi tata kelola lahan.
        </p>
      </section>
    </main>
  )
}
