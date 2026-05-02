import ProductCard from '#/components/shared/card/product'
import { Badge } from '#/components/ui/badge'
import Title from '#/components/ui/title'
import { productDetailQueryOptions, productQueryOptions } from '#/services/product.service'
import type { Product } from '#/types/product'
import { ClientOnly, createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { IoIosArrowForward } from 'react-icons/io'
import { MdStorefront } from 'react-icons/md'

export const Route = createFileRoute('/produk/$slug')({
  head: ({ loaderData }) => {
    const produk = loaderData?.produk
    const title = produk ? `${produk.name} | Desa Sumberkejayan` : 'Produk | Desa Sumberkejayan'
    const description = produk?.description.replace(/<[^>]*>?/gm, '').slice(0, 160) || 'Detail produk Desa Sumberkejayan.'
    const image = produk?.image[0] || ''

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
      ],
    }
  },
  loader: async ({ context, params }) => {
    const [products, produk] = await Promise.all([
      context.queryClient.ensureQueryData(productQueryOptions()),
      context.queryClient.ensureQueryData(productDetailQueryOptions(params.slug))
    ])

    return {
      products: products.response,
      produk: produk.response
    }
  },
  component: DetailProduk
})

function DetailProduk () {
  const { produk, products } = Route.useLoaderData()

  const onClickContact = () => {
    const whatsappUrl = `https://wa.me/${produk?.contact.replace('0', '62')}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <main className='w-full px-4 lg:px-12 py-8'>
      <section className='grid lg:grid-cols-2 gap-12 mt-8'>
        <div className='flex flex-col gap-4'>
          <div className='relative overflow-hidden rounded-xl bg-muted aspect-square'>
            <Image
              src={produk?.image[0] || ''}
              alt={produk?.name || ''}
              layout='fullWidth'
              className='w-full h-full object-center object-cover'
            />
          </div>
          <div className='grid grid-cols-4 gap-4'>
            {produk?.image.slice(1).map((img, idx) => (
              <div key={idx} className='rounded-lg overflow-hidden bg-muted aspect-square'>
                <Image
                  src={img}
                  alt={`${produk.name} ${idx + 1}`}
                  layout='fullWidth'
                  className='w-full h-full object-center object-cover'
                />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <Badge variant='primary' className='w-fit uppercase text-xs tracking-widest'>
              {produk?.category.name}
            </Badge>
            <h1 className='text-5xl font-bold'>{produk?.name}</h1>
            <div className='flex items-center gap-2 text-muted-foreground'>
              <MdStorefront size={18} />
              <p className='text-lg font-medium'>{produk?.store}</p>
            </div>
          </div>

          <p className='text-4xl font-bold text-primary'>
            Rp {produk?.price.toLocaleString('id-ID')}
          </p>

          <div className='h-[1px] w-full bg-border my-2'></div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-xl font-semibold'>Deskripsi Produk</h3>
            <article
              className='text-muted-foreground leading-relaxed'
              dangerouslySetInnerHTML={{ __html: produk?.description || '' }}
            ></article>
          </div>

          <button
            onClick={onClickContact}
            className='mt-4 w-full lg:w-fit px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2'
          >
            Hubungi Penjual (WhatsApp)
          </button>
        </div>
      </section>

      <section className='w-full mt-24'>
        <Title
          title='Produk Lainnya'
          link={{
            to: '/produk',
            label: 'Eksplor Produk',
            icon: IoIosArrowForward
          }}
        />

        <div className='grid md:grid-cols-2 lg:grid-cols-4 w-full gap-6 mt-12'>
          <ClientOnly>
            {products
              .filter(p => p.slug !== produk?.slug)
              .slice(0, 4)
              .map((item: Product, index: number) => (
                <ProductCard key={index} {...item} />
              ))}
          </ClientOnly>
        </div>
      </section>
    </main>
  )
}
