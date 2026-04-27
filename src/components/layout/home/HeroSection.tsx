import { Image } from '@unpic/react'
import hero from '#/assets/images/hero.jpg'

export default function HeroSection() {
  return (
    <div className='relative rounded-xl overflow-hidden h-[50vh]'>
      <Image
        src={hero}
        alt='Pemandangan udara Desa Sumberkejayan'
        className='w-full h-full object-center object-cover brightness-60'
        layout='fullWidth'
        priority
      />

      <div className='absolute top-0 left-0 w-full h-full bg-linear-to-b from-primary/10 to-primary/70 p-8 flex items-end justify-start'>
        <div className='w-full lg:w-2/3'>
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
