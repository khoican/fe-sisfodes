import AnnouncementAgendaSection from '#/components/layout/home/AnnouncementAgendaSection'
import BudgetSection from '#/components/layout/home/BudgetSection'
import DemographySection from '#/components/layout/home/DemographySection'
import HeroSection from '#/components/layout/home/HeroSection'
import LocationSection from '#/components/layout/home/LocationSection'
import NewsSection from '#/components/layout/home/NewsSection'
import UmkmSection from '#/components/layout/home/UmkmSection'
import WelcomeSection from '#/components/layout/home/WelcomeSection'
import { OrganizationCarousel } from '#/components/shared/carousel/organization'
import { events } from '#/data/event.data'
import { holidays } from '#/data/holiday.data'
import { news } from '#/data/news.data'
import { umkm } from '#/data/umkm.data'
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
  loader: async () => {
    return {
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
  const { announcements, newsData, holidays, events, umkm } =
    Route.useLoaderData()

  return (
    <main className='px-4 lg:px-12 pb-8 pt-8'>
      <HeroSection />

      <div className='grid lg:grid-cols-3 gap-y-8 gap-x-0 lg:gap-y-0 lg:gap-x-8 mt-8 w-full'>
        <DemographySection />
        <BudgetSection />
      </div>

      <WelcomeSection />

      <AnnouncementAgendaSection
        announcements={announcements}
        holidays={holidays}
        events={events}
      />

      <OrganizationCarousel title='Struktur Organisasi' className='mt-16' />

      <NewsSection newsData={newsData} />

      <UmkmSection umkm={umkm} />

      <LocationSection />
    </main>
  )
}
