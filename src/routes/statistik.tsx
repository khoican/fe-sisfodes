import PopulationCard from '#/components/shared/card/population'
import { PopulationChart } from '#/components/shared/chart/population'
import Progress from '#/components/shared/progress'
import { Badge } from '#/components/ui/badge'
import { population } from '#/data/population.data'
import { ClientOnly, createFileRoute } from '@tanstack/react-router'
import { GiGreekTemple } from 'react-icons/gi'
import {
  MdOutlineChurch,
  MdOutlineGroup,
  MdOutlineMosque
} from 'react-icons/md'

export const Route = createFileRoute('/statistik')({
  head: () => ({
    meta: [
      {
        title: 'Statistik Kependudukan | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Transparansi data kependudukan Desa Sumberkejayan, termasuk jumlah penduduk, demografi, dan sebaran wilayah.',
      },
    ],
  }),
  component: Statistik
})

function Statistik () {
  const gender = {
    male: {
      value: population.male,
      percentage: (population.male / population.population) * 100
    },
    female: {
      value: population.female,
      percentage: (population.female / population.population) * 100
    }
  }

  const relgion = {
    islam: {
      icon: MdOutlineMosque,
      name: 'Islam',
      value: population.religion.islam,
      percentage: (population.religion.islam / population.population) * 100
    },
    kristen: {
      icon: MdOutlineChurch,
      name: 'Kristen',
      value: population.religion.kristen,
      percentage: (population.religion.kristen / population.population) * 100
    },
    other: {
      icon: GiGreekTemple,
      name: 'Lainnya',
      value:
        population.religion.katolik +
        population.religion.hindu +
        population.religion.buddha +
        population.religion.konghucu,
      percentage:
        ((population.religion.katolik +
          population.religion.hindu +
          population.religion.buddha +
          population.religion.konghucu) /
          population.population) *
        100
    }
  }

  return (
    <main className='px-4 lg:px-12 py-8'>
      <section className='w-full lg:w-1/2 mt-10'>
        <Badge variant='primary' className='mb-4'>
          Data Tahun 2025
        </Badge>

        <h1 className='text-5xl md:text-6xl font-bold'>
          Statistik <span className='text-primary'>Kependudukan</span>
        </h1>
        <p className='text-gray-600 mt-4'>
          Transparansi data kependudukan Desa Sumberkejayan sebagai fondasi
          perencanaan pembangunan yang inklusif dan berkelanjutan.
        </p>
      </section>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-16 gap-4'>
        <PopulationCard
          label='JUMLAH PENDUDUK'
          value={population.population}
          note='Total jiwa'
          className={{
            root: 'border-l-4 border-primary'
          }}
        />
        <PopulationCard
          label='KEPALA KELUARGA'
          value={population.family}
          note='KK terdaftar'
        />
        <PopulationCard
          label='KEPADATAN PENDUDUK'
          value={population.density}
          note='Jiwa / km²'
        />
        <PopulationCard
          label='UPDATE TERAKHIR'
          value={'Oktober 2025'}
          note='Sistem Informasi Desa'
          className={{
            root: 'bg-primary',
            label: 'text-blue-200',
            value: 'text-white text-xl mt-2',
            note: 'text-blue-100'
          }}
        />
      </div>

      <section className='mt-16 grid w-full md:grid-cols-5 gap-6'>
        <div className='rounded-xl bg-gray-100 p-6 w-full md:col-span-2 flex flex-col gap-10'>
          <div className='flex w-full items-center justify-between text-lg font-semibold'>
            <h3>Jenis Kelamin</h3>
            <MdOutlineGroup className='text-gray-600' />
          </div>

          <div className=''>
            <p className='text-sm text-primary'>LAKI-LAKI</p>
            <Progress
              label={{
                title: `${gender.male.value}`,
                value: `${gender.male.percentage.toFixed(1)}%`
              }}
              progress={gender.male.percentage}
              className={{
                label: 'text-2xl font-bold text-gray-800',
                root: 'h-4 bg-gray-300',
                value: 'text-primary text-sm font-medium'
              }}
            />
          </div>

          <div className=''>
            <p className='text-sm text-primary'>PEREMPUAN</p>
            <Progress
              label={{
                title: `${gender.female.value}`,
                value: `${gender.female.percentage.toFixed(1)}%`
              }}
              progress={gender.female.percentage}
              className={{
                label: 'text-2xl font-bold text-gray-800',
                root: 'h-4 bg-gray-300',
                indicator: 'bg-primary/30',
                value: 'text-primary text-sm font-medium'
              }}
            />
          </div>
        </div>

        <ClientOnly>
          <div className='md:col-span-3 p-4 bg-white rounded-xl'>
            <PopulationChart />
          </div>
        </ClientOnly>
      </section>

      <section className='w-full grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6'>
        <div className='rounded-xl bg-gray-100 p-6 md:col-span-1 flex flex-col w-full gap-10'>
          <h3 className='text-lg font-semibold'>Agama</h3>

          <ClientOnly>
            <div>
              {Object.entries(relgion).map(([key, value]) => (
                <div key={key} className='flex items-center gap-4 mb-8 w-full'>
                  <div className='p-2 bg-gray-200 rounded-xl'>
                    <value.icon className='text-gray-600 text-xl' />
                  </div>
                  <div className='w-full'>
                    <Progress
                      label={{
                        title: `${value.name}`,
                        value: `${value.percentage.toFixed(1)}%`
                      }}
                      progress={value.percentage}
                      className={{
                        root: 'h-2 bg-gray-300 text-sm font-semibold',
                        value: 'text-primary text-xs',
                        label: 'font-semibold text-gray-800',
                        indicator: 'bg-primary/30'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ClientOnly>
        </div>

        <div className='w-full md:col-span-1 lg:col-span-2 p-6 bg-white rounded-xl'>
          <h3 className='text-lg font-semibold'>Wilayah Administrasi</h3>
          <p className='text-gray-600 text-xs'>
            Distribusi penduduk berdasarkan dusun
          </p>

          <div className='mt-4 grid lg:grid-cols-2 gap-4'>
            {population.administrative.map((item, index) => (
              <div
                key={index}
                className='flex items-center justify-between gap-4 w-full p-6 bg-gray-50 rounded-lg'
              >
                <div className='w-2/3'>
                  <p className='text-xs text-gray-500 uppercase'>Dusun</p>
                  <p className='text-md font-semibold text-gray-800'>{item.dusun}</p>
                </div>

                <div className='w-1/3'>
                  <p className='text-lg font-bold text-gray-800 text-end'>
                    {new Intl.NumberFormat('id-ID').format(item.population)}
                  </p>
                  <p className='text-[10px] text-gray-500 text-end uppercase'>Jiwa</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
