import AnnouncementAgendaSection from '#/components/layout/home/AnnouncementAgendaSection'
import Budget from '#/components/layout/home/Budget'
import Demography from '#/components/layout/home/Demography'
import Hero from '#/components/layout/home/Hero'
import Location from '#/components/layout/home/Location'
import NewsSection from '#/components/layout/home/NewsSection'
import UmkmSection from '#/components/layout/home/UmkmSection'
import Welcome from '#/components/layout/home/Welcome'
import { OrganizationCarousel } from '#/components/shared/carousel/organization'
import { events } from '#/data/event.data'
import { holidays } from '#/data/holiday.data'
import { news } from '#/data/news.data'
import { umkm } from '#/data/umkm.data'
import { budgetQueryOptions } from '#/services/budget.service'
import { heroQueryOptions } from '#/services/hero.service'
import { officialQueryOptions } from '#/services/official.service'
import { populationQueryOptions } from '#/services/population.service'
import { profileQueryOptions } from '#/services/profile.service'
import type { Official } from '#/types/official'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Beranda | Desa Sumberkejayan'
      },
      {
        name: 'description',
        content:
          'Selamat datang di portal resmi Desa Sumberkejayan. Temukan informasi terkini, layanan publik, dan potensi desa kami.'
      }
    ]
  }),
  loader: async ({ context }) => {
    const [profile, hero, official, population, budget] = await Promise.all([
      context.queryClient.ensureQueryData(profileQueryOptions()),
      context.queryClient.ensureQueryData(heroQueryOptions()),
      context.queryClient.ensureQueryData(officialQueryOptions()),
      context.queryClient.ensureQueryData(populationQueryOptions()),
      context.queryClient.ensureQueryData(budgetQueryOptions())
    ])

    return {
      profile: profile.response,
      hero: hero.response,
      official: official.response,
      population: population.response,
      budget: budget.response,
      announcements: news.filter(item => item.category?.name === 'Pengumuman'),
      newsData: news.filter(item => item.category?.name !== 'Pengumuman'),
      holidays: holidays,
      events: events,
      umkm: umkm
    }
  },
  component: App
})

function App () {
  const {
    announcements,
    newsData,
    official,
    holidays,
    events,
    umkm,
    profile,
    hero,
    population,
    budget
  } = Route.useLoaderData()

  return (
    <main className='px-4 lg:px-12 pb-8 pt-8'>
      <Hero hero={hero} />

      <div className='grid lg:grid-cols-3 gap-y-8 gap-x-0 lg:gap-y-0 lg:gap-x-8 mt-8 w-full'>
        <Demography population={population} />
        <Budget budget={budget} />
      </div>

      <Welcome
        greeting={profile.greeting}
        leader={
          official.find(item => item.position === 'Kepala Desa') as Official
        }
      />

      <AnnouncementAgendaSection
        announcements={announcements}
        holidays={holidays}
        events={events}
      />

      <OrganizationCarousel
        title='Struktur Organisasi'
        className='mt-16 h-full'
        official={official}
      />

      <NewsSection newsData={newsData} />

      <UmkmSection umkm={umkm} />

      <Location
        address={`${profile.address.address}, ${profile.address.village}, ${profile.address.district}, ${profile.address.regency}`}
        latitude={profile.coordinates.latitude}
        longitude={profile.coordinates.longitude}
      />
    </main>
  )
}
