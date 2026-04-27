import NewsCard from '#/components/shared/card/news'
import Countdown from '#/components/shared/countdown'
import Title from '#/components/ui/title'
import { events } from '#/data/event.data'
import { holidays } from '#/data/holiday.data'
import { news } from '#/data/news.data'
import type { News } from '#/types/news'
import { ClientOnly, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/berita/pengumuman')({
  head: () => ({
    meta: [
      {
        title: 'Pengumuman Resmi | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Daftar pengumuman resmi dan informasi penting dari Pemerintah Desa Sumberkejayan.',
      },
    ],
  }),
  component: RouteComponent
})

function RouteComponent () {
  const announcements = news
    .filter(item => item.category?.name === 'Pengumuman')
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )

  return (
    <main className='w-full px-4 lg:px-12 py-8'>
      <section className='w-full lg:w-1/2 py-16 flex flex-col gap-4'>
        <h1 className='text-6xl font-bold'>
          <span className='text-primary'>Pengumuman</span> Desa
        </h1>
        <p className='text-gray-600 mt-2'>
          Informasi penting dan pengumuman resmi dari Pemerintah Desa
          Sumberkejayan untuk masyarakat.
        </p>
      </section>

      <ClientOnly>
        <Countdown
          holidays={holidays}
          className={{
            root: 'w-full bg-primary p-6 rounded-xl',
            name: 'text-white text-lg text-center text',
            items: 'mt-6 w-full grid grid-cols-3',
            item: 'flex flex-col items-center gap-2 p-6 rounded-lg bg-white/20',
            value: 'text-white text-4xl font-bold tabular-nums',
            label: 'text-white/80 text-xs uppercase'
          }}
        />
      </ClientOnly>

      <section className=' grid md:grid-cols-2 lg:grid-cols-3 w-full gap-6 mt-16'>
        <ClientOnly>
          {announcements.map((item: News, index: number) => (
            <NewsCard
              key={index}
              {...item}
              className={{ root: 'shadow-none' }}
            />
          ))}
        </ClientOnly>
      </section>

      <section className='w-full mt-24'>
        <Title title='Kegiatan Desa' />
        <section className=' grid md:grid-cols-2 lg:grid-cols-3 w-full gap-6 mt-8'>
          <ClientOnly>
            {events.map((item: News, index: number) => (
              <NewsCard
                key={index}
                {...item}
                className={{ root: 'shadow-none' }}
              />
            ))}
          </ClientOnly>
        </section>
      </section>
    </main>
  )
}
