import EventCard from '#/components/shared/card/event'
import Title from '#/components/ui/title'
import type { Agenda } from '#/types/agenda'
import { dateFormat } from '#/utils/date.util'
import { ClientOnly } from '@tanstack/react-router'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

interface AnnouncementAgendaProps {
  agenda: Agenda[]
}

/**
 * Komponen untuk menampilkan Agenda Desa dan Hari Libur Nasional.
 * 
 * @param {AnnouncementAgendaProps} props - Properti komponen berisi data agenda.
 * @returns {JSX.Element} Elemen seksi agenda.
 */
export default function AnnouncementAgenda({
  agenda,
}: AnnouncementAgendaProps) {
  const holidays = agenda.filter(item => item.is_holiday)
  const villageAgenda = agenda.filter(item => !item.is_holiday)

  return (
    <section className='mt-16'>
      <Title
        title='Agenda Desa'
        link={{
          to: '/agenda',
          label: 'Lihat Semua',
          icon: IoIosArrowForward
        }}
      />
      <section className='w-full grid md:grid-cols-2 gap-10 mt-6'>
        <section className='flex flex-col w-full gap-8'>
          <h3 className='text-xl font-bold text-gray-800 border-l-4 border-primary pl-4'>
            Kegiatan Mendatang
          </h3>
          <div className='grid gap-8'>
            {villageAgenda.slice(0, 4).map((item, index) => (
              <EventCard 
                key={index} 
                title={item.title}
                date={new Date(item.date.start)}
                time={`${item.time.start} - ${item.time.end}`}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section className='bg-primary rounded-xl p-8 flex flex-col gap-8 h-fit shadow-xl shadow-primary/20'>
          <div className='flex items-center justify-between'>
            <h3 className='text-2xl font-bold text-white'>
              Hari Libur Nasional
            </h3>
            <FaRegCalendarAlt className='text-white/20 text-4xl' />
          </div>

          <div className='flex flex-col gap-6'>
            {holidays.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className='flex items-center gap-6 text-white bg-white/10 p-5 rounded-xl border border-white/5 hover:bg-white/20 transition-all cursor-default'
              >
                <div className='flex flex-col items-center justify-center bg-white text-primary rounded-lg p-2 min-w-15 h-15 shadow-lg'>
                  <span className='text-xl font-bold leading-none'>
                    {new Date(item.date.start).getDate()}
                  </span>
                  <span className='text-[10px] font-bold uppercase'>
                    {new Intl.DateTimeFormat('id-ID', { month: 'short' }).format(new Date(item.date.start))}
                  </span>
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-lg font-semibold text-white leading-tight'>{item.title}</p>
                  <ClientOnly>
                    <p className='text-sm text-white/60 font-medium'>
                      {dateFormat({ date: new Date(item.date.start) })}
                    </p>
                  </ClientOnly>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  )
}
