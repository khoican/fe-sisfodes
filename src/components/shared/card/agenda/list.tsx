import { Badge } from '#/components/ui/badge'
import type { Agenda } from '#/types/agenda'
import { Calendar } from 'lucide-react'
import { AgendaListItem } from './list-item'

interface AgendaListProps {
  events: Agenda[]
}

export function AgendaList({ events }: AgendaListProps) {
  return (
    <div className='bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col'>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-lg font-bold text-foreground'>
          Agenda Mendatang
        </h3>
        <Badge variant='secondary' className='bg-muted text-muted-foreground'>
          {events.length} Kegiatan
        </Badge>
      </div>

      <div className='space-y-5 overflow-y-auto max-h-[400px] pr-2'>
        {events.length > 0 ? (
          events.slice(0, 6).map(item => (
            <AgendaListItem key={item.id} item={item} />
          ))
        ) : (
          <div className='flex flex-col items-center justify-center py-10 text-muted-foreground/70'>
            <Calendar className='size-12 mb-2 opacity-20' />
            <p>Belum ada jadwal lainnya</p>
          </div>
        )}
      </div>
    </div>
  )
}
