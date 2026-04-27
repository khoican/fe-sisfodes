import { Image } from '@unpic/react'

export default function WelcomeSection() {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-3 mt-16 gap-y-8 gap-x-0 md:gap-y-0 md:gap-x-8 items-center p-6 rounded-lg'>
      <div className='col-span-2 flex flex-col gap-2 max-sm:order-2'>
        <h3 className='text-4xl text-primary font-semibold mb-4'>
          Sambutan Kepala Desa
        </h3>
        <p className='italic text-gray-600'>
          "Selamat datang di portal informasi resmi Desa Sumberkejayan. Kami
          berkomitmen untuk mewujudkan tata kelola desa yang transparan,
          akuntabel, dan inovatif demi kesejahteraan seluruh lapisan
          masyarakat"
        </p>
        <p className='font-semibold'>- Sugeng Purnomo</p>
      </div>

      <div className='relative max-sm:order-1'>
        <div className='w-20 h-20 rounded-full bg-primary/10 absolute -top-6 -left-6 -z-10'></div>
        <div className='w-40 h-40 rounded-full bg-primary/5 absolute -bottom-10 -right-10 -z-10'></div>
        <Image
          src='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Potret Kepala Desa Sumberkejayan Sugeng Purnomo'
          className='w-full max-h-[50vh] object-cover object-top rounded-lg'
          layout='fullWidth'
        />
      </div>
    </section>
  )
}
