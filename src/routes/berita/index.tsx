import { Badge } from '#/components/ui/badge'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/berita/')({
  component: Berita
})

function Berita () {
  return (
    <main className='px-4 lg:px-12 py-8'>
      <section className='w-full lg:w-1/2 flex flex-col gap-2 mt-10'>
        <Badge variant='primary' className='mb-4'>
          Pilar Informasi Desa
        </Badge>

        <h1 className='text-3xl md:text-6xl font-bold'>Warta Desa Terkini</h1>
        <p className='text-gray-600 mt-4'>
          Menyajikan kabar terpercaya, kebijakan terbaru, dan cerita inspiratif
          dari jantung Desa Sumberkejayan untuk masyarakat yang lebih berdaya.
        </p>
      </section>
    </main>
  )
}
