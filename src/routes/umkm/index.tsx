import UmkmCard from '#/components/shared/card/umkm'
import { Badge } from '#/components/ui/badge'
import Title from '#/components/ui/title'
import { umkm } from '#/data/umkm.data'
import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'

export const Route = createFileRoute('/umkm/')({
  head: () => ({
    meta: [
      {
        title: 'UMKM Unggulan | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Jelajahi berbagai produk unggulan dan usaha mikro masyarakat Desa Sumberkejayan.',
      },
    ],
  }),
  component: RouteComponent
})

function RouteComponent () {
  const headData = [
    {
      label: 'UMKM Terdaftar',
      value: 4
    },
    {
      label: 'Produk Tersedia',
      value: 12
    },
    {
      label: 'Produk Asli Desa',
      value: '100%'
    }
  ]

  return (
    <main className='w-full px-4 lg:px-12 py-8'>
      <section className='relative rounded-4xl overflow-hidden w-full h-[80vh] lg:h-[50vh]'>
        <div className='w-full h-full absolute top-0 left-0 bg-linear-to-r from-primary to-primary/20 z-1 p-16 flex flex-col gap-6 items-start justify-center'>
          <Badge variant='warning' className='uppercase text-[10px]'>
            EKSPLOR UMKM
          </Badge>
          <h1 className='text-6xl font-bold max-w-2xl text-white'>
            Produk Unggulan Desa Sumberkejayan
          </h1>
          <p className='text-white/80 max-w-md'>
            Dukung pertumbuhan ekonomi lokal dengan berbelanja produk
            berkualitas langsung dari tangan pengrajin dan pengusaha mikro desa
            kami.
          </p>
        </div>

        <Image
          src={`https://images.unsplash.com/photo-1572402123736-c79526db405a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          alt='UMKM'
          className='w-full h-full object-cover'
          layout='fullWidth'
        />
      </section>

      <section className='mt-16 w-full grid md:grid-cols-3 gap-6'>
        {headData.map((item, index) => (
          <div
            key={index}
            className={`w-full rounded-lg p-6 flex flex-col items-start gap-2 ${
              index === headData.length - 1 ? 'bg-red-200' : 'bg-gray-100'
            }`}
          >
            <h2
              className={`text-6xl font-extrabold ${
                index === headData.length - 1 ? 'text-red-950' : 'text-primary'
              }`}
            >
              {item.value}
            </h2>
            <p
              className={`text-sm ${
                index === headData.length - 1 ? 'text-red-950' : 'text-gray-600'
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </section>

      <section className='mt-16 w-full'>
        <Title title='Katalog Produk' />
        <p className='text-gray-600'>
          Temukan berbagai produk berkualitas karya warga Desa Sumberkejayan.
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 w-full gap-6 mt-6'>
          {umkm.map((item, index) => (
            <UmkmCard key={index} {...item} />
          ))}
        </div>
      </section>
    </main>
  )
}
