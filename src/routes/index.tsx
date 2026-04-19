import DemographyCard from '#/components/shared/card/demography'
import EventCard from '#/components/shared/card/event'
import NewsCard from '#/components/shared/card/news'
import UmkmCard from '#/components/shared/card/umkm'
import { OrganizationCarousel } from '#/components/shared/carousel/organization'
import Maps from '#/components/shared/maps'
import Progress from '#/components/shared/progress'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import Title from '#/components/ui/title'
import { announcements } from '#/data/announcement.data'
import { events } from '#/data/event.data'
import { holidays } from '#/data/holiday.data'
import { news } from '#/data/news.data'
import { population } from '#/data/population.data'
import { umkm } from '#/data/umkm.data'
import type { News } from '#/types/news'
import { dateFormat } from '#/utils/date.util'
import { ClientOnly, createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa6'
import { IoIosArrowForward, IoIosMan, IoIosWoman } from 'react-icons/io'
import {
  MdOutlineFamilyRestroom,
  MdOutlineGroups,
  MdOutlineLocationOn,
  MdStorefront
} from 'react-icons/md'
import hero from '../assets/images/hero.jpg'

export const Route = createFileRoute('/')({ component: App })

function App () {
  return (
    <main className='px-4 lg:px-12 pb-8 pt-8'>
      {/* hero */}
      <div className='relative rounded-xl overflow-hidden h-[50vh]'>
        <Image
          src={hero}
          alt='Hero'
          className='w-full h-full object-center object-cover brightness-70'
          layout='fullWidth'
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

      <div className='grid lg:grid-cols-3 gap-y-8 gap-x-0 lg:gap-y-0 lg:gap-x-8 mt-8 w-full'>
        {/* demografi desa */}
        <div className='bg-white rounded-lg drop-shadow p-6 lg:col-span-2'>
          <div className='flex items-center justify-between mb-8'>
            <h2 className='text-2xl font-semibold text-primary'>
              Demografi Desa
            </h2>

            <Badge variant={'primary'} className='px-3 py-1 uppercase'>
              statistik 2025
            </Badge>
          </div>

          <div className='grid md:grid-cols-4 gap-4 h-fit'>
            <DemographyCard
              icon={MdOutlineGroups}
              title='Jumlah Penduduk'
              value={population.population}
            />
            <DemographyCard
              icon={MdOutlineFamilyRestroom}
              title='Keluarga'
              value={population.family}
            />
            <DemographyCard icon={IoIosMan} title='Laki-laki' value={population.male} />
            <DemographyCard icon={IoIosWoman} title='Perempuan' value={population.female} />
          </div>
        </div>

        {/* transparansi dana */}
        <div className='bg-primary rounded-lg shadow p-6 w-full'>
          <h2 className='text-2xl font-semibold mb-8 text-white'>
            Transparasi Dana
          </h2>

          <p className='text-white/90 text-md mb-6'>
            Realisasi Anggaran Pendapatan dan Belanja Desa (APBDes) periode
            berjalan
          </p>

          <div className='flex flex-col w-full gap-4 mb-6'>
            <Progress
              label={{ title: 'Pendapatan Desa', value: '4.354.312.980' }}
              progress={70}
              className={{
                label: 'text-white/80 text-sm',
                root: 'bg-white/30 h-3',
                indicator: 'bg-yellow-400'
              }}
            />
            <Progress
              label={{ title: 'Belanja Desa', value: '1.542.312.980' }}
              progress={89}
              className={{
                label: 'text-white/80 text-sm',
                root: 'bg-white/30 h-3',
                indicator: 'bg-yellow-400'
              }}
            />
          </div>

          <Button
            variant='secondary'
            size='lg'
            className='w-full mt-6 text-primary text-xs font-semibold'
          >
            Lihat Laporan Lengkap
          </Button>
        </div>
      </div>

      {/* sambutan kepala desa */}
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
            alt='Kepala Desa'
            className='w-full max-h-[50vh] object-cover object-top rounded-lg'
            layout='fullWidth'
          />
        </div>
      </section>

      {/* pengumuman dan agenda */}
      <section className='mt-16'>
        <Title
          title='Pengumuman dan Agenda'
          link={{
            to: '/pengumuman',
            label: 'Lihat Semua',
            icon: IoIosArrowForward
          }}
        />
        <section className='w-full grid md:grid-cols-2 gap-6 mt-6'>
          <ClientOnly>
            {announcements.slice(0, 1).map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </ClientOnly>

          <section className='flex flex-col w-full gap-12'>
            <section className='bg-primary rounded-lg p-6 flex flex-col justify-between gap-6'>
              <h3 className='text-2xl font-semibold text-white'>
                Hari Besar Nasional
              </h3>

              {holidays.slice(0, 1).map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-6 text-white bg-white/10 p-4 rounded-lg'
                >
                  <FaRegCalendarAlt className='text-4xl' />
                  <div key={index} className='flex flex-col gap-2 w-full'>
                    <p className='text-md text-white'>{item.name}</p>
                    <ClientOnly>
                      <p className='text-sm text-white/80'>
                        {dateFormat({ date: item.date })}
                      </p>
                    </ClientOnly>
                  </div>
                </div>
              ))}
            </section>

            <section className='grid gap-4'>
              <Title title='Agenda Desa' />

              <div className='grid gap-8'>
                <ClientOnly>
                  {events.slice(0, 3).map((item, index) => (
                    <EventCard key={index} {...item} />
                  ))}
                </ClientOnly>
              </div>
            </section>
          </section>
        </section>
      </section>

      {/* struktur organisasi */}
      <OrganizationCarousel title='Struktur Organisasi' className='mt-16' />

      {/* berita terkini*/}
      <div className='w-full mt-16'>
        <Title
          title='Berita Terkini'
          link={{
            to: '/berita',
            label: 'Lihat Semua',
            icon: IoIosArrowForward
          }}
        />

        <div className='grid lg:grid-cols-3 w-full gap-6'>
          <ClientOnly>
            {news.slice(0, 3).map((item: News, index: number) => (
              <NewsCard key={index} {...item} />
            ))}
          </ClientOnly>
        </div>
      </div>

      {/* umkm unggulan */}
      <div className='w-full mt-16'>
        <Title
          title='UMKM Unggulan'
          link={{
            to: '/umkm',
            label: 'Eksplor UMKM',
            icon: MdStorefront
          }}
        />

        <div className='grid md:grid-cols-2 lg:grid-cols-4 w-full gap-6'>
          {umkm.slice(0, 4).map((item, index) => (
            <UmkmCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* maps */}

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 items-center w-full mt-16 relative bg-white rounded-lg p-8'>
        <section className='col-span-1'>
          <Title title='Lokasi Kami' />

          <div className='mt-8 text-sm text-gray-600'>
            <p className=''>
              Kunjungi kantor pelayanan kami untuk mendapatkan bantuan informasi
              dan layanan administrasi desa secara langsung.
            </p>

            <div className='flex items-center mt-4 gap-2 font-medium'>
              <MdOutlineLocationOn className='w-1/12' size={20} />
              <p className='text-sm w-11/12'>
                Jl. Banyuwangi No.6, Tegalan, Sumber Kejayan, Kec. Mayang,
                Kabupaten Jember
              </p>
            </div>
            <div className='flex items-center mt-4 gap-2 font-medium'>
              <FaRegClock className='w-1/12' size={14} />
              <p className='text-sm w-11/12'>
                08.00 - 15.00 WIB (Senin - Jumat)
              </p>
            </div>
          </div>
        </section>

        <ClientOnly>
          <Maps
            position={[-8.176801402877157, 113.8329968231125]}
            className='w-full h-[35vh] rounded-lg col-span-2'
          />
        </ClientOnly>
      </div>
    </main>
  )
}
