import { Badge } from '#/components/ui/badge'
import Title from '#/components/ui/title'
import type { Agenda } from '#/types/agenda'
import { dateFormat } from '#/utils/date.util'
import { ClientOnly } from '@tanstack/react-router'
import { Calendar, Clock, MapPin, Timer } from 'lucide-react'
import * as React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { cn } from '#/lib/utils'

interface AnnouncementAgendaProps {
  agenda: Agenda[]
}

interface CountdownParts {
  days: number
  hours: number
  minutes: number
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
  const [now, setNow] = React.useState<Date>(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  const sortedAgenda = React.useMemo(() => {
    return [...agenda].sort((a, b) => new Date(a.date.start).getTime() - new Date(b.date.start).getTime())
  }, [agenda])

  const upcoming = React.useMemo(() => {
    return sortedAgenda.filter(item => new Date(item.date.end) >= now)
  }, [sortedAgenda, now])

  const nextVillageAgenda = upcoming.find(item => !item.is_holiday)
  const nextHoliday = upcoming.find(item => item.is_holiday)

  // List of upcoming events excluding the featured village agenda (if we want to show everything else on the right)
  const listEvents = upcoming.filter(item => item.id !== nextVillageAgenda?.id)

  const getCountdown = (targetDate: string): CountdownParts => {
    const target = new Date(targetDate)
    const diff = target.getTime() - now.getTime()
    
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    return { days, hours, minutes }
  }

  const countdown = nextVillageAgenda ? getCountdown(nextVillageAgenda.date.start) : null

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
      
      <div className='grid lg:grid-cols-2 gap-8 mt-6'>
        {/* Kolom Kiri: Agenda Terdekat & Libur Nasional Terdekat */}
        <div className='flex flex-col gap-6'>
          {/* Agenda Desa Terdekat dengan Countdown */}
          {nextVillageAgenda ? (
            <div className='bg-primary text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden group'>
              <div className='absolute -right-10 -top-10 bg-white/10 w-40 h-40 rounded-full blur-2xl group-hover:bg-white/20 transition-colors' />
              <div className='absolute -left-10 -bottom-10 bg-white/10 w-32 h-32 rounded-full blur-xl' />
              
              <div className='relative z-10'>
                <Badge variant='outline' className='text-white border-white/30 bg-white/10 mb-4 px-3 py-1'>
                  Agenda Desa Terdekat
                </Badge>
                <h3 className='text-2xl md:text-3xl font-bold mb-3 leading-tight'>
                  {nextVillageAgenda.title}
                </h3>
                
                <div className='flex flex-wrap items-center gap-4 text-white/80 text-sm mb-8'>
                  <div className='flex items-center gap-2'>
                    <Calendar className='size-4' />
                    <span>{dateFormat({ date: new Date(nextVillageAgenda.date.start) })}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock className='size-4' />
                    <span>{nextVillageAgenda.time.start} - {nextVillageAgenda.time.end} WIB</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <MapPin className='size-4' />
                    <span className='line-clamp-1'>{nextVillageAgenda.location}</span>
                  </div>
                </div>

                <div className='grid grid-cols-3 gap-4 max-w-sm'>
                  <div className='bg-white/20 backdrop-blur-md rounded-xl p-3 text-center border border-white/10'>
                    <ClientOnly>
                      <div className='text-2xl md:text-3xl font-bold tabular-nums'>{countdown?.days || 0}</div>
                    </ClientOnly>
                    <div className='text-[10px] md:text-xs uppercase tracking-wider font-medium opacity-80'>Hari</div>
                  </div>
                  <div className='bg-white/20 backdrop-blur-md rounded-xl p-3 text-center border border-white/10'>
                    <ClientOnly>
                      <div className='text-2xl md:text-3xl font-bold tabular-nums'>{String(countdown?.hours || 0).padStart(2, '0')}</div>
                    </ClientOnly>
                    <div className='text-[10px] md:text-xs uppercase tracking-wider font-medium opacity-80'>Jam</div>
                  </div>
                  <div className='bg-white/20 backdrop-blur-md rounded-xl p-3 text-center border border-white/10'>
                    <ClientOnly>
                      <div className='text-2xl md:text-3xl font-bold tabular-nums'>{String(countdown?.minutes || 0).padStart(2, '0')}</div>
                    </ClientOnly>
                    <div className='text-[10px] md:text-xs uppercase tracking-wider font-medium opacity-80'>Menit</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='bg-gray-100 rounded-2xl p-8 text-center text-gray-500'>
              Tidak ada agenda desa mendatang.
            </div>
          )}

          {/* Hari Libur Nasional Terdekat */}
          {nextHoliday && (
            <div className='bg-destructive text-white rounded-2xl p-6 shadow-lg relative overflow-hidden group'>
              <div className='absolute right-4 top-1/2 -translate-y-1/2 text-white/10 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-500'>
                <Calendar className='size-24' />
              </div>
              <div className='relative z-10'>
                <Badge variant='outline' className='text-white border-white/30 bg-white/10 mb-3'>
                  Libur Nasional Terdekat
                </Badge>
                <h3 className='text-xl font-bold mb-2'>{nextHoliday.title}</h3>
                <div className='flex items-center gap-2 text-white/80 text-sm'>
                  <Timer className='size-4' />
                  <span>{dateFormat({ date: new Date(nextHoliday.date.start) })}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Kolom Kanan: List Agenda & Hari Libur yang akan datang */}
        <div className='bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col'>
          <div className='flex items-center justify-between mb-6'>
            <h3 className='text-lg font-bold text-gray-800'>Agenda Mendatang</h3>
            <Badge variant='secondary' className='bg-gray-100 text-gray-600'>
              {listEvents.length} Kegiatan
            </Badge>
          </div>
          
          <div className='space-y-5 overflow-y-auto max-h-[400px] pr-2'>
            {listEvents.length > 0 ? (
              listEvents.slice(0, 6).map((item) => (
                <div key={item.id} className='flex gap-4 group cursor-default'>
                  <div className={cn(
                    'w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-105',
                    item.is_holiday 
                      ? 'bg-destructive/5 border-destructive/20 text-destructive' 
                      : 'bg-gray-50 border-gray-100 text-gray-600'
                  )}>
                    <span className='text-xl font-bold leading-none'>
                      {new Date(item.date.start).getDate()}
                    </span>
                    <span className='text-[10px] font-bold uppercase'>
                      {new Intl.DateTimeFormat('id-ID', { month: 'short' }).format(new Date(item.date.start))}
                    </span>
                  </div>
                  
                  <div className='flex flex-col justify-center min-w-0'>
                    <h4 className={cn(
                      'font-semibold line-clamp-1 transition-colors group-hover:text-primary',
                      item.is_holiday ? 'text-destructive' : 'text-gray-800'
                    )}>
                      {item.title}
                    </h4>
                    <div className='flex items-center gap-3 mt-1'>
                      <p className='text-xs text-gray-500 flex items-center gap-1'>
                        <Calendar className='size-3 text-gray-400' />
                        {dateFormat({ date: new Date(item.date.start), options: { format: 'dd MMM yyyy' } })}
                      </p>
                      {!item.is_holiday && (
                        <p className='text-xs text-gray-500 flex items-center gap-1'>
                          <Clock className='size-3 text-gray-400' />
                          {item.time.start}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='flex flex-col items-center justify-center py-10 text-gray-400'>
                <Calendar className='size-12 mb-2 opacity-20' />
                <p>Belum ada jadwal lainnya</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
