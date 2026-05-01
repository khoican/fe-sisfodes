import { Badge } from '#/components/ui/badge'
import { galleryQueryOptions } from '#/services/gallery.service'
import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { useState, useMemo } from 'react'
import { Camera, Maximize2, X, Filter, Calendar } from 'lucide-react'
import type { GalleryItem } from '#/types/gallery'

export const Route = createFileRoute('/galeri')({
  head: () => ({
    meta: [
      {
        title: 'Galeri | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Koleksi dokumentasi visual kegiatan, pembangunan, dan pesona alam Desa Sumberkejayan.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const gallery = await context.queryClient.ensureQueryData(galleryQueryOptions())
    return {
      gallery: gallery.response
    }
  },
  component: GaleriPage
})

function GaleriPage() {
  const { gallery } = Route.useLoaderData()
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const categories = useMemo(() => {
    return ['Semua', ...Array.from(new Set(gallery.map(item => item.category)))]
  }, [gallery])

  const filteredGallery = useMemo(() => {
    if (selectedCategory === 'Semua') return gallery
    return gallery.filter(item => item.category === selectedCategory)
  }, [gallery, selectedCategory])

  return (
    <main className='w-full'>
      {/* Hero Header */}
      <section className='bg-white px-4 lg:px-12 py-12 rounded-b-3xl border-b shadow-sm'>
        <div className='max-w-4xl'>
          <Badge variant='primary' className='mb-4 uppercase tracking-widest'>Dokumentasi Visual</Badge>
          <h1 className='text-5xl font-extrabold leading-tight'>
            Galeri <span className='text-primary'>Desa</span>
          </h1>
          <p className='text-gray-600 mt-6 text-lg'>
            Menyaksikan jejak perkembangan dan keindahan Desa Sumberkejayan melalui 
            lensa kamera. Dokumentasi kegiatan masyarakat, pembangunan infrastruktur, dan pesona alam.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className='mt-12 px-4 lg:px-12'>
        <div className='flex flex-wrap items-center gap-3 bg-white p-4 rounded-2xl border shadow-sm'>
          <div className='flex items-center gap-2 mr-4 text-gray-400'>
             <Filter size={18} />
             <span className='text-sm font-medium'>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className='mt-12 px-4 lg:px-12 mb-20'>
        <div className='columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'>
          {filteredGallery.map((item) => (
            <div 
              key={item.id} 
              className='relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border bg-white'
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
                layout='fullWidth'
              />
              
              <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                 <Badge className='w-fit mb-3 bg-primary border-none'>{item.category}</Badge>
                 <h3 className='text-white font-bold text-lg leading-tight'>{item.title}</h3>
                 <div className='flex items-center gap-2 text-white/70 text-xs mt-2'>
                    <Calendar size={12} />
                    <span>{new Date(item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                 </div>
                 <div className='absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
                    <Maximize2 size={18} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div className='fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300'>
          <button 
            className='absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full'
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <div className='relative max-w-6xl w-full h-full flex flex-col items-center justify-center gap-6'>
            <div className='relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                className='w-full h-full object-contain'
                layout='fullWidth'
              />
            </div>
            
            <div className='text-center max-w-3xl'>
               <Badge variant='primary' className='mb-3'>{selectedImage.category}</Badge>
               <h2 className='text-2xl md:text-3xl font-bold text-white'>{selectedImage.title}</h2>
               {selectedImage.description && (
                 <p className='text-white/60 mt-3 text-sm md:text-base leading-relaxed'>{selectedImage.description}</p>
               )}
               <div className='flex items-center justify-center gap-2 text-white/40 text-xs mt-4'>
                  <Calendar size={14} />
                  <span>Diambil pada: {new Date(selectedImage.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Info */}
      <section className='w-full bg-primary/5 p-12 lg:p-20 flex flex-col items-center text-center gap-6 rounded-t-3xl'>
         <div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2'>
            <Camera size={32} />
         </div>
         <h3 className='text-3xl font-bold'>Kontribusi Dokumentasi</h3>
         <p className='max-w-2xl text-gray-600 leading-relaxed'>
           Punya foto atau video menarik tentang kegiatan di Desa Sumberkejayan? 
           Kirimkan karya Anda ke tim admin desa untuk ditampilkan di halaman galeri ini.
         </p>
         <button className='px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-primary/20'>
            Kirim Dokumentasi
         </button>
      </section>
    </main>
  )
}
