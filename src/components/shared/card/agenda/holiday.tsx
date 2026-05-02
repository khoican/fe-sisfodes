import { Badge } from '#/components/ui/badge'
import type { Agenda } from '#/types/agenda'
import { dateFormat } from '#/utils/date.util'
import { Calendar, Timer } from 'lucide-react'

interface HolidayAgendaCardProps {
  agenda: Agenda
}

export function HolidayAgendaCard({ agenda }: HolidayAgendaCardProps) {
  return (
    <div className='bg-red-500 text-white rounded-2xl p-6 shadow-lg relative overflow-hidden group'>
      <div className='absolute right-4 top-1/2 -translate-y-1/2 text-white/10 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-500'>
        <Calendar className='size-24' />
      </div>
      <div className='relative z-10'>
        <Badge
          variant='outline'
          className='text-white border-white/30 bg-white/10 mb-3'
        >
          Libur Nasional Terdekat
        </Badge>
        <h3 className='text-xl font-bold mb-2'>{agenda.title}</h3>
        <div className='flex items-center gap-2 text-white/80 text-sm'>
          <Timer className='size-4' />
          <span>
            {dateFormat({ date: new Date(agenda.date.start) })}
          </span>
        </div>
      </div>
    </div>
  )
}
