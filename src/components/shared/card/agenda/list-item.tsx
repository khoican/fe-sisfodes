import { cn } from '#/lib/utils'
import type { Agenda } from '#/types/agenda'
import { dateFormat } from '#/utils/date.util'
import { Calendar, Clock } from 'lucide-react'

interface AgendaListItemProps {
  item: Agenda
}

export function AgendaListItem({ item }: AgendaListItemProps) {
  return (
    <div className='flex gap-4 group cursor-default'>
      <div
        className={cn(
          'w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-105',
          item.is_holiday
            ? 'bg-destructive/5 border-destructive/20 text-destructive'
            : 'bg-muted border-border text-muted-foreground'
        )}
      >
        <span className='text-xl font-bold leading-none'>
          {new Date(item.date.start).getDate()}
        </span>
        <span className='text-[10px] font-bold uppercase'>
          {new Intl.DateTimeFormat('id-ID', {
            month: 'short'
          }).format(new Date(item.date.start))}
        </span>
      </div>

      <div className='flex flex-col justify-center min-w-0'>
        <h4
          className={cn(
            'font-semibold line-clamp-1 transition-colors group-hover:text-primary',
            item.is_holiday ? 'text-destructive' : 'text-foreground'
          )}
        >
          {item.title}
        </h4>
        <div className='flex items-center gap-3 mt-1'>
          <p className='text-xs text-muted-foreground flex items-center gap-1'>
            <Calendar className='size-3 text-muted-foreground/70' />
            {dateFormat({
              date: new Date(item.date.start),
              options: { format: 'dd MMM yyyy' }
            })}
          </p>
          {!item.is_holiday && (
            <p className='text-xs text-muted-foreground flex items-center gap-1'>
              <Clock className='size-3 text-muted-foreground/70' />
              {item.time.start}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
