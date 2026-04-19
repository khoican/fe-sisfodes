import PersonCard from '#/components/shared/card/person'
import Title from '#/components/ui/title'
import { members } from '#/data/member.data'
import { history, mission, vision } from '#/data/profile.data'
import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'

export const Route = createFileRoute('/profil')({
  component: Profil
})

function Profil () {
  const leader = members.find(item => item.position === 'Kepala Desa')

  return (
    <main className=''>
      <section className='grid md:grid-cols-8 gap-10 items-center bg-white px-4 lg:px-12 pb-8 pt-8'>
        <div className='w-full md:col-span-5'>
          <h1 className='text-6xl font-extrabold'>
            Mengenal <span className='text-primary'>Luhurnya</span> Sejarah Kami
          </h1>
          <p className='text-sm md:text-lg text-gray-600 mt-4'>
            Desa Sumberkejayan bukan sekadar titik geografis, melainkan warisan
            peradaban yang terus tumbuh dalam harmoni antara nilai leluhur dan
            modernitas digital.
          </p>
        </div>

        <div className='w-full md:col-span-3 h-[60vh] relative rounded-2xl overflow-hidden'>
          <Image
            src='https://images.unsplash.com/photo-1584773920278-4ada215dbe93?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Desa Sumberkejayan'
            className='w-full h-full object-cover brightness-85'
            layout='fullWidth'
          />

          <div className='absolute inset-0 bg-linear-to-t from-primary/50 to-transparent'></div>
        </div>
      </section>

      <section className='mt-16 px-4 lg:px-12'>
        <Title title='Sejarah Desa' />

        <div className='grid md:grid-cols-3 gap-6 mt-6'>
          <Image
            src='https://images.unsplash.com/photo-1716731049987-c5ec344a9c80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzYSUyMGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D'
            alt='Desa Sumberkejayan'
            className='w-full h-full object-cover rounded-2xl brightness-85'
            layout='fullWidth'
          />

          <div className='w-full md:col-span-2 bg-white rounded-2xl shadow p-8 border-b-6 border-primary'>
            <h3 className='text-xl font-semibold text-primary'>Sejarah Awal</h3>
            <p
              className='flex flex-col gap-4 text-gray-500 mt-4 leading-relaxed'
              dangerouslySetInnerHTML={{ __html: history.content }}
              suppressHydrationWarning
            ></p>
          </div>
        </div>
      </section>

      <section className='px-4 lg:px-12 bg-primary mt-24 relative h-full overflow-hidden py-12'>
        <div className='h-[300%] bg-white/20 -rotate-25 w-40 absolute -top-30 -right-10 z-0'></div>

        <div className='text-white grid lg:grid-cols-2 gap-8'>
          <div>
            <p className='text-xs tracking-wider text-white/80'>
              Cita-Cita Luhur
            </p>

            <h3 className='text-4xl lg:text-8xl font-extrabold tracking-wider mt-8'>
              VISI
            </h3>

            <p className='text-lg md:text-2xl italic mt-6'>"{vision.content}"</p>
          </div>
          <div>
            <h3 className='text-4xl font-extrabold tracking-wider'>MISI</h3>
            
            {mission.map((item, index) => (
              <div key={index} className='text-md mt-4 flex items-start gap-4'>
                <div className='bg-white/30 p-4 rounded-md'>
                  <p className='text-md font-bold'>
                    {new Intl.NumberFormat('id-ID', {
                      minimumIntegerDigits: 2,
                      useGrouping: false
                    }).format(index + 1)}
                  </p>
                </div>

                <p className='text-sm'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='mt-16 px-4 lg:px-12 py-8 lg:py-16'>
        <h1 className='text-4xl font-semibold text-center'>
          Struktur Organisasi
        </h1>
        <p className='text-center text-gray-600 mt-4 text-sm w-full md:w-1/3 mx-auto'>
          Sinergi antara pemimpin berpengalaman dan tenaga muda progresif untuk
          melayani masyarakat Sumberkejayan.
        </p>

        <div className='w-full md:w-1/3 mx-auto mt-16'>
          {leader && <PersonCard {...leader} />}
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
            {members.filter(item => item.position !== 'Kepala Desa').map((item, index) => (
              <PersonCard key={index} {...item} />
            ))}
        </div>
      </section>
    </main>
  )
}
