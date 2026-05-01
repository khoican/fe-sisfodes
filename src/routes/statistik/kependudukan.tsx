import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card'
import Title from '#/components/ui/title'
import { populationQueryOptions } from '#/services/population.service'
import { createFileRoute } from '@tanstack/react-router'
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts'
import { 
  Users, 
  Home, 
  Maximize2, 
  Venus, 
  Mars,
  GraduationCap,
  Briefcase,
  MapPin,
  Clock
} from 'lucide-react'
import { useMemo } from 'react'

export const Route = createFileRoute('/statistik/kependudukan')({
  head: () => ({
    meta: [
      {
        title: 'Statistik Kependudukan | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Data kependudukan Desa Sumberkejayan yang mencakup total penduduk, komposisi usia, tingkat pendidikan, dan persebaran wilayah.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const population = await context.queryClient.ensureQueryData(populationQueryOptions())
    return {
      population: population.response
    }
  },
  component: KependudukanPage
})

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']

function KependudukanPage() {
  const { population } = Route.useLoaderData()

  if (!population) return null

  const genderData = useMemo(() => [
    { name: 'Laki-laki', value: population.by_gender.male, color: '#3b82f6', icon: Mars },
    { name: 'Perempuan', value: population.by_gender.female, color: '#ec4899', icon: Venus }
  ], [population])

  const religionData = useMemo(() => [
    { name: 'Islam', value: population.by_religion.islam },
    { name: 'Kristen', value: population.by_religion.christianity },
    { name: 'Katolik', value: population.by_religion.catholicism },
    { name: 'Hindu', value: population.by_religion.hinduism },
    { name: 'Budha', value: population.by_religion.buddhism },
    { name: 'Lainnya', value: population.by_religion.other }
  ].filter(item => item.value > 0), [population])

  const stats = [
    { label: 'Total Penduduk', value: population.total_residents, icon: Users, unit: 'Jiwa' },
    { label: 'Total KK', value: population.total_households, icon: Home, unit: 'Keluarga' },
    { label: 'Kepadatan', value: population.population_density, icon: Maximize2, unit: 'Jiwa/Km²' }
  ]

  return (
    <main className='w-full'>
      {/* Header */}
      <section className='bg-white px-4 lg:px-12 py-12 rounded-b-3xl border-b'>
        <div className='max-w-4xl'>
          <Badge variant='primary' className='mb-4 uppercase tracking-widest'>Demografi</Badge>
          <h1 className='text-5xl font-extrabold leading-tight'>
            Statistik <span className='text-primary'>Kependudukan</span>
          </h1>
          <p className='text-gray-600 mt-6 text-lg'>
            Data kependudukan yang akurat adalah fondasi perencanaan pembangunan desa yang tepat sasaran. 
            Informasi di bawah ini mencerminkan kondisi riil masyarakat Desa Sumberkejayan.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
          {stats.map((stat, idx) => (
            <Card key={idx} className='border-none bg-primary/5 shadow-sm'>
              <CardContent className='pt-6'>
                <div className='flex items-center gap-4'>
                  <div className='p-3 bg-white rounded-2xl shadow-sm text-primary'>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className='text-xs font-bold text-gray-400 uppercase tracking-wider'>{stat.label}</p>
                    <p className='text-2xl font-black text-gray-800'>
                      {stat.value} <span className='text-sm font-normal text-gray-500'>{stat.unit}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gender & Age Section */}
      <section className='px-4 lg:px-12 py-16 grid lg:grid-cols-2 gap-12'>
        <Card className='border-none shadow-md overflow-hidden bg-white'>
          <CardHeader className='pb-0'>
            <CardTitle>Distribusi Jenis Kelamin</CardTitle>
            <CardDescription>Perbandingan jumlah penduduk laki-laki dan perempuan.</CardDescription>
          </CardHeader>
          <CardContent className='pt-0'>
            <div className='h-80 w-full'>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-4'>
               {genderData.map((g) => (
                 <div key={g.name} className='p-4 rounded-2xl border text-center' style={{ borderColor: `${g.color}20`, backgroundColor: `${g.color}05` }}>
                    <g.icon className='w-6 h-6 mx-auto mb-2' style={{ color: g.color }} />
                    <p className='text-xs font-bold text-gray-500 uppercase'>{g.name}</p>
                    <p className='text-xl font-black' style={{ color: g.color }}>{g.value} Jiwa</p>
                 </div>
               ))}
            </div>
          </CardContent>
        </Card>

        <Card className='border-none shadow-md overflow-hidden bg-white'>
          <CardHeader className='pb-0'>
            <CardTitle>Komposisi Usia</CardTitle>
            <CardDescription>Pengelompokan penduduk berdasarkan rentang usia (Tahun).</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='h-80 w-full mt-4'>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={population.by_age}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                  <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    cursor={{ fill: '#f3f4f6' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Education & Administration */}
      <section className='px-4 lg:px-12 py-16 bg-gray-50/50 grid lg:grid-cols-2 gap-12'>
        <div>
          <Title title='Tingkat Pendidikan' />
          <p className='text-sm text-gray-500 mb-8'>Data jenjang pendidikan terakhir yang ditempuh oleh penduduk desa.</p>
          <div className='space-y-6'>
            {population.by_education.map((item, idx) => (
              <div key={idx} className='bg-white p-5 rounded-2xl shadow-sm border flex items-center justify-between group hover:border-primary/30 transition-colors'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary'>
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800'>{item.label}</h4>
                    <p className='text-xs text-gray-400'>Jenjang Pendidikan</p>
                  </div>
                </div>
                <div className='text-right'>
                  <p className='text-xl font-black text-primary'>{item.count}</p>
                  <p className='text-[10px] font-bold text-gray-400 uppercase'>Jiwa</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Title title='Persebaran Wilayah' />
          <p className='text-sm text-gray-500 mb-8'>Distribusi penduduk berdasarkan wilayah dusun atau administratif desa.</p>
          <div className='h-[400px] w-full bg-white p-6 rounded-3xl shadow-sm border'>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={population.by_administration}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="count"
                  nameKey="label"
                  label
                >
                  {population.by_administration.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-6'>
             {population.by_administration.map((item, idx) => (
                <div key={idx} className='flex items-center gap-2'>
                   <div className='w-3 h-3 rounded-full' style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                   <span className='text-sm text-gray-600 font-medium'>{item.label}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className='w-full bg-white p-12 lg:px-24 flex flex-col md:flex-row items-center justify-between border-t gap-8'>
        <div className='flex items-center gap-6'>
           <div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary'>
              <Clock size={32} />
           </div>
           <div>
              <h3 className='text-xl font-bold'>Pembaruan Terakhir</h3>
              <p className='text-gray-500 text-sm'>Data kependudukan diperbarui secara otomatis setiap semester.</p>
           </div>
        </div>
        <div className='px-8 py-4 bg-gray-50 border border-dashed border-gray-300 rounded-2xl'>
           <p className='text-xs font-bold text-gray-400 uppercase tracking-widest'>Status Data</p>
           <p className='text-xl font-black text-gray-800'>{population.last_updated}</p>
        </div>
      </section>
    </main>
  )
}
