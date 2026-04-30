import PopulationCard from '#/components/shared/card/population'
import { PopulationChart } from '#/components/shared/chart/population'
import Progress from '#/components/shared/progress'
import { Badge } from '#/components/ui/badge'
import { populationQueryOptions } from '#/services/population.service'
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
  loader: async ({ context }) => {
    const population = await context.queryClient.ensureQueryData(populationQueryOptions())
    return {
      population: population.response
    }
  },
  component: Statistik
})

function Statistik () {
  const { population } = Route.useLoaderData()

  const gender = {
    male: {
      value: population.by_gender.male,
      percentage: (population.by_gender.male / population.total_residents) * 100
    },
    female: {
      value: population.by_gender.female,
      percentage: (population.by_gender.female / population.total_residents) * 100
    }
  }

  const religion = {
    islam: {
      icon: MdOutlineMosque,
      name: 'Islam',
      value: population.by_religion.islam,
      percentage: (population.by_religion.islam / population.total_residents) * 100
    },
    kristen: {
      icon: MdOutlineChurch,
      name: 'Kristen',
      value: population.by_religion.christianity,
      percentage: (population.by_religion.christianity / population.total_residents) * 100
    },
    other: {
      icon: GiGreekTemple,
      name: 'Lainnya',
      value:
        population.by_religion.catholicism +
        population.by_religion.hinduism +
        population.by_religion.buddhism +
        population.by_religion.other,
      percentage:
        ((population.by_religion.catholicism +
          population.by_religion.hinduism +
          population.by_religion.buddhism +
          population.by_religion.other) /
          population.total_residents) *
        100
    }
  }

  return (
    <main className='px-4 lg:px-12 py-8'>
      <section className='w-full lg:w-1/2 mt-10'>
        <Badge variant='primary' className='mb-4'>
          Data Tahun {new Date(population.last_updated).getFullYear()}
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
          value={population.total_residents}
          note='Total jiwa'
          className={{
            root: 'border-l-4 border-primary'
          }}
        />
        <PopulationCard
          label='KEPALA KELUARGA'
          value={population.total_households}
          note='KK terdaftar'
        />
        <PopulationCard
          label='KEPADATAN PENDUDUK'
          value={population.population_density}
          note='Jiwa / km²'
        />
        <PopulationCard
          label='UPDATE TERAKHIR'
          value={new Date(population.last_updated).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
          note='Sistem Informasi Desa'
          className={{
            root: 'bg-primary border-primary',
            label: 'text-blue-100',
            value: 'text-white text-xl mt-1',
            note: 'text-blue-200'
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
            <p className='text-sm text-primary font-bold'>LAKI-LAKI</p>
            <Progress
              label={{
                title: `${new Intl.NumberFormat('id-ID').format(gender.male.value)} Jiwa`,
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
            <p className='text-sm text-primary font-bold'>PEREMPUAN</p>
            <Progress
              label={{
                title: `${new Intl.NumberFormat('id-ID').format(gender.female.value)} Jiwa`,
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
          <div className='md:col-span-3 p-4 bg-white rounded-xl border'>
            <h3 className='text-lg font-semibold mb-6'>Kelompok Usia</h3>
            <PopulationChart data={population.by_age} />
          </div>
        </ClientOnly>
      </section>

      <section className='w-full grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6'>
        <div className='rounded-xl bg-gray-100 p-6 md:col-span-1 flex flex-col w-full gap-10'>
          <h3 className='text-lg font-semibold'>Agama</h3>

          <ClientOnly>
            <div>
              {Object.entries(religion).map(([key, value]) => (
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

        <div className='w-full md:col-span-1 lg:col-span-2 p-6 bg-white rounded-xl border'>
          <h3 className='text-lg font-semibold'>Wilayah Administrasi</h3>
          <p className='text-gray-600 text-xs'>
            Distribusi penduduk berdasarkan dusun
          </p>

          <div className='mt-4 grid lg:grid-cols-2 gap-4'>
            {population.by_administration.map((item, index) => (
              <div
                key={index}
                className='flex items-center justify-between gap-4 w-full p-4 bg-gray-50 rounded-lg border border-gray-100'
              >
                <div className='w-2/3'>
                  <p className='text-[10px] text-gray-500 uppercase font-bold'>Wilayah</p>
                  <p className='text-md font-semibold text-gray-800'>{item.label}</p>
                </div>

                <div className='w-1/3'>
                  <p className='text-lg font-bold text-gray-800 text-end'>
                    {new Intl.NumberFormat('id-ID').format(item.count)}
                  </p>
                  <p className='text-[10px] text-gray-500 text-end uppercase font-bold'>Jiwa</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
