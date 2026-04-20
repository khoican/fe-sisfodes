import UmkmCard from '#/components/shared/card/umkm'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import Title from '#/components/ui/title'
import { umkm } from '#/data/umkm.data'
import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { MdStorefront } from 'react-icons/md'

export const Route = createFileRoute('/umkm/$slug')({
  component: DetailUmkm
})

function DetailUmkm () {
  const { slug } = Route.useParams()
  const produk = umkm.find(item => item.slug === slug)

  return (
    <main className='w-full px-4 lg:px-12 py-8'>
      <section className='w-full grid md:grid-cols-2 gap-8'>
        <Image
          src={produk?.image || ''}
          alt={produk?.name || 'Gambar Produk'}
          layout='fullWidth'
          className='w-full h-auto rounded-xl object-cover'
        />

        <article>
          <section className='flex flex-col gap-2'>
            <Badge variant='primary' className='uppercase text-[10px] mb-2'>
              {produk?.category.name}
            </Badge>

            <h1 className='text-4xl font-bold'>{produk?.name}</h1>

            <p className='text-xl text-primary font-bold'>
              Rp {produk?.price.toLocaleString('id-ID')}
            </p>
          </section>

          <div className='flex items-center gap-2 mt-10'>
            <div className='w-2 h-8 rounded-lg bg-primary'></div>
            <h2 className='text-xl font-semibold tracking-wide'>
              Deskripsi Produk
            </h2>
          </div>

          <section
            className='w-full flex flex-col gap-6 text-md text-gray-600 leading-relaxed md:col-span-1 lg:col-span-2 mt-6'
            dangerouslySetInnerHTML={{ __html: produk?.description || '' }}
          ></section>

          <Button
            className='w-full bg-green-600 hover:bg-green-700 cursor-pointer mt-6'
            onClick={() => {
              const whatsappUrl = `https://wa.me/${produk?.contact.replace(
                '0',
                '62'
              )}`
              window.open(whatsappUrl, '_blank')
            }}
          >
            Hubungi Penjual
          </Button>
        </article>
      </section>

      <section className='mt-16 w-full border-t border-t-gray-200 pt-16'>
        <Title title='Produk Lainnya' link={{
          to: '/umkm',
          label: 'Eksplor Produk',
          icon: MdStorefront
        }}/>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 w-full gap-6'>
          {umkm
            .filter(item => item.id !== produk?.id)
            .slice(0, 4)
            .map((item, index) => (
              <UmkmCard key={index} {...item} />
            ))}
        </div>
      </section>
    </main>
  )
}
