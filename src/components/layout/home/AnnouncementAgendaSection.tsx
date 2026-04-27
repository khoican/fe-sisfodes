import EventCard from '#/components/shared/card/event'
import NewsCard from '#/components/shared/card/news'
import Title from '#/components/ui/title'
import type { News } from '#/types/news'
import type { Holiday } from '#/types/holiday'
import type { Event } from '#/types/event'
import { ClientOnly } from '@tanstack/react-router'
import { dateFormat } from '#/utils/date.util'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

interface AnnouncementAgendaSectionProps {
  announcements: News[]
  holidays: Holiday[]
  events: Event[]
}

export default function AnnouncementAgendaSection({
  announcements,
  holidays,
  events
}: AnnouncementAgendaSectionProps) {
  return (
    <section className='mt-16'>
      <Title
        title='Pengumuman dan Agenda'
        link={{
          to: '/berita/pengumuman',
          label: 'Lihat Semua',
          icon: IoIosArrowForward
        }}
      />
      <section className='w-full grid md:grid-cols-2 gap-6 mt-6'>
        {announcements.slice(0, 1).map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}

        <section className='flex flex-col w-full gap-12'>
          <section className='bg-primary rounded-lg p-6 flex flex-col justify-between gap-6'>
            <h3 className='text-2xl font-semibold text-white'>
              Hari Besar Nasional
            </h3>

            {holidays.slice(0, 1).map((item, index) => (
              <div
                key={index}
                className='flex items-center gap-6 text-white bg-white/10 p-4 rounded-lg'
              >
                <FaRegCalendarAlt className='text-4xl' aria-hidden="true" />
                <div key={index} className='flex flex-col gap-2 w-full'>
                  <p className='text-md text-white'>{item.name}</p>
                  <ClientOnly>
                    <p className='text-sm text-white/80'>
                      {dateFormat({ date: item.date })}
                    </p>
                  </ClientOnly>
                </div>
              </div>
            ))}
          </section>

          <section className='grid gap-4'>
            <Title title='Agenda Desa' />

            <div className='grid gap-8'>
              {events.slice(0, 3).map((item, index) => (
                <EventCard key={index} {...item} />
              ))}
            </div>
          </section>
        </section>
      </section>
    </section>
  )
}
