import type { Event } from '#/types/event'
import { dateFormat } from '#/utils/date.util'
import { ClientOnly } from '@tanstack/react-router'
import { FaClock } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

export default function EventCard ({ title, date, time, location }: Event) {
  return (
    <div className='flex items-start gap-6 w-full'>
      <ClientOnly>
        <div className='w-3/12 md:w-1/12 text-center'>
          <p className='text-primary text-2xl font-extrabold'>
            {dateFormat({ date, options: { format: 'dd' } })}
          </p>
          <p className='text-primary text-xs font-light tracking-widest'>
            {dateFormat({ date, options: { format: 'MMM' } })}
          </p>
        </div>
      </ClientOnly>

      <div className='w-9/12 md:w-11/12'>
        <h3 className='text-lg text-gray-800 font-semibold mb-1'>{title}</h3>

        <div className='flex items-center gap-16 text-gray-500 text-xs md:text-sm'>
          <p className='flex items-center gap-2'>
            <FaClock /> {time}
          </p>
          <p className='flex items-center gap-2'>
            <FaLocationPin /> {location}
          </p>
        </div>
      </div>
    </div>
  )
}
