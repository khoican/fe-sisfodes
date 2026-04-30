import type { CarouselApi } from '#/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '#/components/ui/carousel';
import type { Hero } from '#/types/hero';
import { Image } from '@unpic/react';
import * as React from 'react';

/**
 * Komponen Hero untuk menampilkan banner utama dengan fitur auto-slide.
 * 
 * @param {Object} props - Properti komponen.
 * @param {Hero[]} props.hero - Array data banner hero.
 * @returns {JSX.Element} Elemen Hero.
 */
export default function Hero ({ hero }: { hero: Hero[] }) {
  const [api, setApi] = React.useState<CarouselApi>()

  /**
   * Mengatur auto-slide setiap 5 detik.
   */
  React.useEffect(() => {
    if (!api) return

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [api])

  return (
    <div className='relative rounded-xl overflow-hidden h-[50vh]'>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true
        }}
      >
        <CarouselContent>
          {hero.map((h, index) => (
            <CarouselItem key={`${h.title}-${index}`} className='w-full h-[50vh]'>
              <Image
                src={h.image}
                alt={h.title}
                className='w-full h-full object-center rounded-xl object-cover brightness-60'
                layout='fullWidth'
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className='absolute top-0 left-0 w-full h-full bg-linear-to-b from-primary/10 to-primary/70 p-8 flex items-end justify-start pointer-events-none'>
        <div className='w-full lg:w-2/3 pointer-events-auto'>
          <h1 className='text-4xl lg:text-6xl font-bold text-white capitalize'>
            membangun masa depan dari akar desa
          </h1>
          <p className='text-sm lg:text-lg text-white mt-4'>
            Portal resmi informasi dan pelayanan publik Desa Sumberkejayan.
            Akuntabel, Transparan, dan Mandiri.
          </p>
        </div>
      </div>
    </div>
  )
}
