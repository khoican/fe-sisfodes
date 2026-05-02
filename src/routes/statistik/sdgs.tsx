import { SdgsChart } from '#/components/shared/chart/sdgs'
import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import Title from '#/components/ui/title'
import { sdgsQueryOptions } from '#/services/sdgs.service'
import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { CheckCircle2, Globe, Search, TrendingUp } from 'lucide-react'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/statistik/sdgs')({
  head: () => ({
    meta: [
      {
        title: 'SDGS Desa | Desa Sumberkejayan'
      },
      {
        name: 'description',
        content:
          'Capaian 18 tujuan pembangunan berkelanjutan (SDGS) Desa Sumberkejayan untuk mewujudkan kemandirian dan kesejahteraan masyarakat.'
      }
    ]
  }),
  loader: async ({ context }) => {
    const sdgs = await context.queryClient.ensureQueryData(sdgsQueryOptions())
    return {
      sdgs: sdgs
    }
  },
  component: SdgsPage
})

function SdgsPage () {
  const { sdgs } = Route.useLoaderData()
  const [searchQuery, setSearchQuery] = useState('')

  if (!sdgs) return null

  const filteredGoals = useMemo(() => {
    return sdgs.score.data.filter(goal =>
      goal.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [sdgs, searchQuery])

  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-green-600'
    if (score >= 50) return 'text-blue-600'
    if (score >= 25) return 'text-amber-600'
    return 'text-red-600'
  }

  const getProgressColor = (score: number) => {
    if (score >= 75) return 'bg-green-500'
    if (score >= 50) return 'bg-blue-500'
    if (score >= 25) return 'bg-amber-500'
    return 'bg-red-500'
  }

  return (
    <main className='w-full'>
      {/* Header */}
      <section className='bg-background px-4 lg:px-12 py-12 rounded-b-3xl border-b border-border shadow-sm'>
        <div className='flex flex-col lg:flex-row gap-12 items-center'>
          <div className='flex-1'>
            <Badge variant='primary' className='mb-4 uppercase tracking-widest'>
              Sustainability
            </Badge>
            <h1 className='text-5xl font-extrabold leading-tight'>
              SDGs <span className='text-primary'>Desa</span>
            </h1>
            <p className='text-muted-foreground mt-6 text-lg max-w-2xl'>
              Sustainable Development Goals (SDGs) Desa adalah upaya terpadu
              untuk mewujudkan desa tanpa kemiskinan, tanpa kelaparan, dan desa
              ekonomi tumbuh merata.
            </p>

            <div className='flex gap-4 mt-8'>
              <div className='px-8 py-4 bg-primary/5 rounded-2xl border border-primary/10 flex flex-col'>
                <span className='text-[10px] font-bold text-primary/70 uppercase tracking-wider'>
                  Skor Rata-rata
                </span>
                <span className='text-4xl font-black text-primary'>
                  {sdgs.score.average}
                </span>
              </div>
              <div className='px-8 py-4 bg-muted rounded-2xl border border-border flex flex-col justify-center'>
                <span className='text-[10px] font-bold text-muted-foreground/70 uppercase tracking-wider'>
                  Total Tujuan
                </span>
                <span className='text-2xl font-black text-foreground'>
                  {sdgs.score.data.length} Goals
                </span>
              </div>
            </div>
          </div>

          <div className='hidden lg:flex w-80 h-80 bg-primary/5 rounded-full items-center justify-center p-8 relative overflow-hidden'>
            <Globe className='w-48 h-48 text-primary/10 absolute animate-spin-slow' />
            <div className='relative z-10 text-center'>
              <TrendingUp className='w-16 h-16 text-primary mx-auto mb-4' />
              <h3 className='text-xl font-bold text-foreground'>
                Capaian Global
              </h3>
              <p className='text-xs text-muted-foreground mt-2'>
                Aksi lokal untuk tujuan global
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className='px-4 lg:px-12 py-16'>
        <Title title='Visualisasi Capaian' />
        <div className='h-140 w-full bg-card p-6 rounded-3xl shadow-sm border border-border mt-8'>
          <SdgsChart data={sdgs.chart} />
        </div>
      </section>

      {/* Grid Goals */}
      <section className='px-4 lg:px-12 py-16 bg-muted/50'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12'>
          <Title title='18 Tujuan SDGs Desa' />

          <div className='relative w-full md:w-80'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70' />
            <input
              type='text'
              placeholder='Cari tujuan SDGS...'
              className='w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm text-foreground'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {filteredGoals.map(goal => (
            <Card
              key={goal.goals}
              className='group border-none shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden bg-card flex flex-col py-0 pb-6 gap-4'
            >
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={goal.image}
                  alt={goal.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0'
                  layout='fullWidth'
                />
                <div className='absolute top-3 left-3'>
                  <div className='w-8 h-8 bg-black/50 backdrop-blur-md text-white rounded-lg flex items-center justify-center font-black text-sm border border-white/20'>
                    {goal.goals}
                  </div>
                </div>
              </div>

              <CardHeader className='grow'>
                <CardTitle className='text-sm group-hover:text-primary transition-colors leading-snug h-10 line-clamp-2'>
                  {goal.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className='flex items-center justify-between mb-2'>
                  <span
                    className={`text-xl font-black ${getScoreColor(
                      goal.score
                    )}`}
                  >
                    {goal.score}
                  </span>
                  <span className='text-[10px] font-bold text-muted-foreground/70 uppercase'>
                    Capaian
                  </span>
                </div>

                <div className='w-full bg-muted rounded-full h-1.5 overflow-hidden'>
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${getProgressColor(
                      goal.score
                    )}`}
                    style={{ width: `${goal.score}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredGoals.length === 0 && (
          <div className='text-center py-20 bg-card rounded-3xl border border-dashed border-border'>
            <p className='text-muted-foreground/70'>
              Tujuan SDGs yang Anda cari tidak ditemukan.
            </p>
          </div>
        )}
      </section>

      {/* Action Footer */}
      <section className='px-4 lg:px-12 py-16 bg-background border-t border-border'>
        <div className='bg-primary rounded-[2rem] p-12 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden'>
          <CheckCircle2 className='absolute -bottom-10 -left-10 w-48 h-48 text-white/10' />
          <div className='flex-1 z-10'>
            <h3 className='text-3xl font-bold mb-4'>Komitmen Keberlanjutan</h3>
            <p className='text-white/80 leading-relaxed max-w-2xl'>
              Pemerintah Desa Sumberkejayan terus berupaya mengintegrasikan
              tujuan-tujuan SDGs dalam setiap kebijakan pembangunan desa. Kami
              percaya bahwa masa depan yang lebih baik dimulai dari aksi nyata
              di tingkat desa.
            </p>
          </div>
          <div className='shrink-0 z-10'>
            <div className='bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30'>
              <p className='text-xs font-bold uppercase tracking-widest mb-2 opacity-80'>
                Target Rata-rata
              </p>
              <p className='text-4xl font-black'>100.00</p>
              <p className='text-xs mt-2 opacity-60 italic'>
                Tujuan Akhir 2030
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
