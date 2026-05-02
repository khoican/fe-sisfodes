import NewsCard from '#/components/shared/card/news'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { newsQueryOptions } from '#/services/news.service'
import type { News } from '#/types/news'
import { ClientOnly, Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/berita/')({
  head: () => ({
    meta: [
      {
        title: 'Berita Desa | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Baca berita terbaru, kabar terkini, dan informasi penting seputar kegiatan di Desa Sumberkejayan.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const news = await context.queryClient.ensureQueryData(newsQueryOptions())
    return {
      news: news.response
    }
  },
  component: Berita
})

function Berita () {
  const { news } = Route.useLoaderData()

  const latestNews = news
    .filter(item => item.category?.name !== 'Pengumuman')
    .slice(0, 4)
    
  const newsData = news
    .filter(item => item.category?.name !== 'Pengumuman')

  return (
    <main className='w-full px-4 lg:px-12 py-8 bg-background'>
      <section className='w-full lg:w-1/2 py-16 flex flex-col gap-6'>
        <Badge variant='primary'>PILAR INFORMASI DESA</Badge>
        <h1 className='text-6xl font-bold text-foreground'>Warta Desa Terkini</h1>
        <p className='text-muted-foreground'>
          Menyajikan kabar terpercaya, kebijakan terbaru, dan cerita inspiratif
          dari jantung Desa Sumberkejayan untuk masyarakat yang lebih berdaya.
        </p>
      </section>

      <ClientOnly>
        <section className='w-full grid md:grid-cols-2 gap-6 mt-6'>
          {latestNews.slice(0, 1).map((item, index) => (
            <NewsCard
              key={index}
              {...item}
              className={{
                root: 'w-full border-none shadow-none p-0 bg-transparent rounded-sm',
                content: 'p-0 py-4'
              }}
            />
          ))}

          <div className='w-full flex flex-col gap-8 lg:gap-0'>
            {latestNews.slice(1, 4).map((item, index) => (
              <NewsCard
                key={index}
                {...item}
                layout='horizontal'
                className={{
                  root: 'w-full border-none shadow-none p-0 bg-transparent rounded-none',
                  meta: 'text-xs',
                  content: 'text-xs w-4/5 py-0 h-fit',
                  title: 'text-sm lg:text-lg',
                  description: 'line-clamp-1 lg:line-clamp-2 text-xs lg:text-sm',
                  header: 'w-1/5 h-full',
                  image: 'rounded-md h-full object-center object-cover'
                }}
                options={{
                  showLink: false
                }}
              />
            ))}
          </div>
        </section>
      </ClientOnly>

      <section className='relative w-full bg-primary mt-12 p-12 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
        <div className='w-40 h-40 rounded-full bg-white/10 absolute -top-10 -left-12'></div>
        <div className='w-20 h-20 rounded-full bg-white/10 absolute -bottom-10 -right-4'></div>

        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-semibold text-white'>Butuh info resmi desa?</h3>
          <p className='text-white/80 text-sm max-w-xl'>
            Untuk melihat pengumuman terbaru dari Pemerintah Desa Sumberkejayan,
            silakan klik tombol <span className='font-semibold'>Lihat Pengumuman</span>.
          </p>
        </div>

        <Button asChild variant='secondary' size='lg' className='text-primary'>
          <Link to='/berita/pengumuman'>Lihat Pengumuman</Link>
        </Button>
      </section>

      <section className='w-full mt-16'>
        <h2 className='text-2xl font-bold'>Semua Berita</h2>
        <p className='text-gray-600 mt-2'>
          Temukan berita terbaru dari Desa Sumberkejayan yang akan membantu Anda
          tetap informasi.
        </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 w-full gap-6 mt-12'>
          <ClientOnly>
            {newsData
              .slice(4, newsData.length)
              .map((item: News, index: number) => (
                <NewsCard
                  key={index}
                  {...item}
                  className={{ root: 'shadow-none' }}
                />
              ))}
          </ClientOnly>
        </div>
      </section>
    </main>
  )
}
on>
    </main>
  )
}
