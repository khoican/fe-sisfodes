
import { cn } from '#/lib/utils'
import type { Official } from '#/types/official'
import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../../ui/carousel'
import Title from '../../ui/title'
import PersonCard from '../card/person'

interface CarouselProps {
  title: string
  className?: string
  official: Official[]
}

export function OrganizationCarousel ({ title, className, official }: CarouselProps) {
  return (
    <CarouselComponent className={cn('w-full', className)}>
      <div className='flex items-center justify-between px-1'>
        <Title title={title} />

        <div className='relative flex gap-2'>
          <CarouselPrevious className={cn('static translate-y-0')} />
          <CarouselNext className={cn('static translate-y-0')} />
        </div>
      </div>

      <CarouselContent>
        {official.map((member, index) => (
          <CarouselItem key={index} className={cn('basis-1/1 md:basis-1/2 lg:basis-1/4 h-full')}>
            <div className='p-1'>
              <PersonCard 
                {...member}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselComponent>
  )
}
