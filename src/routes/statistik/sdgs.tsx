import PopulationCard from '#/components/shared/card/population'
import { SdgsChart } from '#/components/shared/chart/sdgs'
import { Badge } from '#/components/ui/badge'
import { sdgsQueryOptions } from '#/services/sdgs.service'
import { ClientOnly, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/statistik/sdgs')({
  head: () => ({
    meta: [
      {
        title: 'SDGs Desa | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Data Sustainable Development Goals (SDGs) Desa Sumberkejayan, menampilkan capaian 18 tujuan pembangunan berkelanjutan di tingkat desa.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const sdgs = await context.queryClient.ensureQueryData(sdgsQueryOptions())
    return {
      sdgs: sdgs.response
    }
  },
  component: StatistikSdgs
})

function StatistikSdgs() {
  const { sdgs } = Route.useLoaderData()
  const score = sdgs.score

  return (
    <main className='px-4 lg:px-12 py-8'>
      <section className='w-full lg:w-1/2 mt-10'>
        <Badge variant='primary' className='mb-4 text-xs tracking-widest uppercase'>
          Capaian SDGs Desa
        </Badge>

        <h1 className='text-5xl md:text-6xl font-bold'>
          SDGs <span className='text-primary'>Desa</span>
        </h1>
        <p className='text-gray-600 mt-4'>
          Sustainable Development Goals (SDGs) Desa adalah upaya terpadu mewujudkan Desa tanpa kemiskinan dan kelaparan, Desa ekonomi tumbuh merata, Desa peduli kesehatan, Desa peduli lingkungan, Desa peduli pendidikan, Desa ramah perempuan, Desa berjejaring, dan Desa tanggap budaya.
        </p>
      </section>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-16 gap-4'>
        <PopulationCard
          label='SKOR RATA-RATA'
          value={score.average}
          note='Poin Capaian'
          className={{
            root: 'border-l-4 border-primary'
          }}
        />
        <PopulationCard
          label='TOTAL GOALS'
          value={score.data.length}
          note='Tujuan Pembangunan'
        />
        <PopulationCard
          label='STATUS DATA'
          value="Terverifikasi"
          note='Sistem Informasi Desa'
          className={{
            root: 'bg-primary border-primary',
            label: 'text-blue-100',
            value: 'text-white text-3xl mt-1',
            note: 'text-blue-200'
          }}
        />
      </div>

      <section className='mt-16 p-6 bg-white rounded-xl border'>
        <h3 className='text-lg font-semibold mb-6'>Grafik Capaian SDGs</h3>
        <ClientOnly>
          <SdgsChart data={sdgs.chart} />
        </ClientOnly>
      </section>

      <section className='mt-16 w-full'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h3 className='text-2xl font-bold'>Rincian Capaian SDGs</h3>
            <p className='text-gray-500 text-sm mt-1'>Detail skor untuk setiap tujuan pembangunan berkelanjutan desa.</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {score.data.map((item, index) => (
            <div key={index} className='bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow'>
              <div className='aspect-video relative overflow-hidden'>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
                <div className='absolute top-2 left-2'>
                  <Badge variant='secondary' className='bg-white/90 backdrop-blur-sm text-primary font-bold'>
                    GOALS {item.goals}
                  </Badge>
                </div>
              </div>
              <div className='p-4'>
                <h4 className='font-bold text-gray-800 line-clamp-2 min-h-[3rem]'>{item.title}</h4>
                <div className='mt-4 flex items-center justify-between'>
                  <div className='w-full bg-gray-100 h-2 rounded-full overflow-hidden mr-4'>
                    <div 
                      className='bg-primary h-full' 
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <span className='text-sm font-bold text-primary'>{item.score}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
