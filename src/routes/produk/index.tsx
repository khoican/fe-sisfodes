import { productQueryOptions } from '#/services/product.service'
import type { Product } from '#/types/product'
import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const ProductCard = lazy(() => import('#/components/shared/card/product'))
const CardSkeleton = () => <div className='w-full h-80 bg-muted animate-pulse rounded-xl' />

export const Route = createFileRoute('/produk/')({
  head: () => ({
    meta: [
      {
        title: 'Produk Unggulan | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Jelajahi berbagai produk unggulan dan potensi UMKM dari Desa Sumberkejayan.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const products = await context.queryClient.ensureQueryData(productQueryOptions())
    return {
      products: products.response
    }
  },
  component: ProdukIndex
})

function ProdukIndex () {
  const { products } = Route.useLoaderData()

  return (
    <main className='w-full px-4 lg:px-12 py-8 bg-background'>
      <section className='w-full lg:w-1/2 py-16 flex flex-col gap-4'>
        <div className='bg-primary/10 text-primary px-4 py-1 rounded-full w-fit text-sm font-semibold uppercase tracking-wider'>
          PRODUK UNGGULAN
        </div>
        <h1 className='text-6xl font-bold text-foreground'>Produk Desa</h1>
        <p className='text-muted-foreground mt-2 text-lg'>
          Mendukung ekonomi lokal melalui produk-produk berkualitas hasil karya
          masyarakat Desa Sumberkejayan.
        </p>
      </section>

      <section className='grid md:grid-cols-2 lg:grid-cols-4 w-full gap-6 mt-12 mb-16'>
        <Suspense fallback={
          <div className='col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton />
          </div>
        }>
          {products.map((item: Product, index: number) => (
            <ProductCard key={index} {...item} />
          ))}
        </Suspense>
      </section>
    </main>
  )
}
