import type { Official } from '#/types/official'
import { Image } from '@unpic/react'

interface WelcomeProps {
  greeting: string,
  leader: Official
}

/**
 * Komponen Welcome untuk menampilkan banner utama dengan fitur auto-slide.
 * 
 * @param {Object} props - Properti komponen.
 * @param {greeting} props.greeting - Array data banner greeting.
 * @returns {JSX.Element} Elemen Greeting.
 */
export default function Welcome({ greeting, leader }: WelcomeProps) {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-3 mt-16 gap-y-8 gap-x-0 md:gap-y-0 md:gap-x-8 items-center p-6 rounded-lg'>
      <div className='col-span-2 flex flex-col gap-2 max-sm:order-2'>
        <h3 className='text-4xl text-primary font-semibold mb-4'>
          Sambutan Kepala Desa
        </h3>
        <p className='italic text-muted-foreground'>
          "{greeting}"
        </p>
        <p className='font-semibold'>- {leader.name}</p>
      </div>

      <div className='relative max-sm:order-1'>
        <div className='w-20 h-20 rounded-full bg-primary/10 absolute -top-6 -left-6 -z-10'></div>
        <div className='w-40 h-40 rounded-full bg-primary/5 absolute -bottom-10 -right-10 -z-10'></div>
        <Image
          src={leader.image}
          alt={`${leader.name}`}
          className='w-full max-h-[50vh] object-cover object-top rounded-lg'
          layout='fullWidth'
        />
      </div>
    </section>
  )
}
