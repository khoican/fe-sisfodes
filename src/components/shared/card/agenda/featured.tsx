import { Badge } from '#/components/ui/badge'
import type { Agenda } from '#/types/agenda'
import { dateFormat } from '#/utils/date.util'
import { ClientOnly } from '@tanstack/react-router'
import { Calendar, Clock, MapPin } from 'lucide-react'
import type { CountdownParts } from '#/utils/agenda.util'

interface FeaturedAgendaCardProps {
  agenda: Agenda
  countdown: CountdownParts | null
}

export function FeaturedAgendaCard({ agenda, countdown }: FeaturedAgendaCardProps) {
  return (
    <div className='bg-primary text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden group'>
      <div className='absolute -right-10 -top-10 bg-white/10 w-40 h-40 rounded-full blur-2xl group-hover:bg-white/20 transition-colors' />
      <div className='absolute -left-10 -bottom-10 bg-white/10 w-32 h-32 rounded-full blur-xl' />

      <div className='relative z-10'>
        <Badge
          variant='outline'
          className='text-white border-white/30 bg-white/10 mb-4 px-3 py-1'
        >
          Agenda Desa Terdekat
        </Badge>
        <h3 className='text-2xl md:text-3xl font-bold mb-3 leading-tight'>
          {agenda.title}
        </h3>

        <div className='flex flex-wrap items-center gap-4 text-white/80 text-sm mb-8'>
          <div className='flex items-center gap-2'>
            <Calendar className='size-4' />
            <span>
              {dateFormat({
                date: new Date(agenda.date.start)
              })}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Clock className='size-4' />
            <span>
              {agenda.time.start} - {agenda.time.end} WIB
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <MapPin className='size-4' />
            <span className='line-clamp-1'>
              {agenda.location}
            </span>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4 max-w-sm'>
          <div className='bg-white/20 backdrop-blur-md rounded-xl p-3 text-center border border-white/10'>
            <ClientOnly>
              <div className='text-2xl md:text-3xl font-bold tabular-nums'>
                {countdown?.days || 0}
              </div>
            </ClientOnly>
            <div className='text-[10px] md:text-xs uppercase tracking-wider font-medium opacity-80'>
              Hari
            </div>
          </div>
          <div className='bg-white/20 backdrop-blur-md rounded-xl p-3 text-center border border-white/10'>
            <ClientOnly>
              <div className='text-2xl md:text-3xl font-bold tabular-nums'>
                {String(countdown?.hours || 0).padStart(2, '0')}
              </div>
            </ClientOnly>
            <div className='text-[10px] md:text-xs uppercase tracking-wider font-medium opacity-80'>
              Jam
            </div>
          </div>
          <div className='bg-white/20 backdrop-blur-md rounded-xl p-3 text-center border border-white/10'>
            <ClientOnly>
              <div className='text-2xl md:text-3xl font-bold tabular-nums'>
                {String(countdown?.minutes || 0).padStart(2, '0')}
              </div>
            </ClientOnly>
            <div className='text-[10px] md:text-xs uppercase tracking-wider font-medium opacity-80'>
              Menit
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
