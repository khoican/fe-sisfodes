import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card'
import Title from '#/components/ui/title'
import { idmQueryOptions } from '#/services/idm.service'
import { createFileRoute } from '@tanstack/react-router'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts'
import { 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Leaf, 
  Target,
  Search,
  Info
} from 'lucide-react'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/statistik/idm')({
  head: () => ({
    meta: [
      {
        title: 'Indeks Desa Membangun (IDM) | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Data perkembangan kemajuan desa berdasarkan Indeks Desa Membangun (IDM) yang mencakup dimensi sosial, ekonomi, dan lingkungan.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const idm = await context.queryClient.ensureQueryData(idmQueryOptions())
    return {
      idm: idm.response
    }
  },
  component: IdmPage
})

function IdmPage() {
  const { idm } = Route.useLoaderData()
  const [searchQuery, setSearchQuery] = useState('')

  if (!idm) return null

  const summary = idm.SUMMARIES
  const rows = idm.ROW

  // Ekstrak skor dimensi untuk chart
  const dimensionData = useMemo(() => {
    const iks = rows.find(r => r.INDIKATOR.startsWith('IKS'))?.SKOR as number || 0
    const ike = rows.find(r => r.INDIKATOR.startsWith('IKE'))?.SKOR as number || 0
    const ikl = rows.find(r => r.INDIKATOR.startsWith('IKL'))?.SKOR as number || 0
    
    return [
      { name: 'Sosial (IKS)', score: iks, fullMark: 1, color: '#3b82f6', icon: Users },
      { name: 'Ekonomi (IKE)', score: ike, fullMark: 1, color: '#10b981', icon: Briefcase },
      { name: 'Lingkungan (IKL)', score: ikl, fullMark: 1, color: '#f59e0b', icon: Leaf },
    ]
  }, [rows])

  // Filter baris indikator (yang memiliki nomor)
  const indicatorRows = useMemo(() => {
    return rows.filter(r => r.NO !== null && r.KETERANGAN !== null)
      .filter(r => r.INDIKATOR.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [rows, searchQuery])

  const getStatusColor = (status: string) => {
    switch (status.toUpperCase()) {
      case 'MANDIRI': return 'text-primary bg-primary/10 border-primary/20'
      case 'MAJU': return 'text-green-600 bg-green-50 border-green-100'
      case 'BERKEMBANG': return 'text-blue-600 bg-blue-50 border-blue-100'
      default: return 'text-gray-600 bg-gray-50 border-gray-100'
    }
  }

  return (
    <main className='w-full'>
      {/* Hero Header */}
      <section className='bg-white px-4 lg:px-12 py-12 rounded-b-3xl shadow-sm border-b'>
        <div className='flex flex-col lg:flex-row gap-12 items-center'>
          <div className='flex-1'>
            <Badge variant='primary' className='mb-4 uppercase tracking-widest'>Statistik Desa</Badge>
            <h1 className='text-5xl font-extrabold leading-tight'>
              Indeks Desa <span className='text-primary'>Membangun</span>
            </h1>
            <p className='text-gray-600 mt-6 text-lg max-w-2xl'>
              IDM adalah potret kemajuan kemandirian desa yang diukur dari ketahanan sosial, 
              ekonomi, dan lingkungan. Desa kami terus berkomitmen meningkatkan kualitas hidup warga.
            </p>
            
            <div className='flex flex-wrap gap-4 mt-8'>
              <div className={`px-6 py-4 rounded-2xl border flex flex-col gap-1 ${getStatusColor(summary.STATUS)}`}>
                <span className='text-[10px] font-bold uppercase tracking-wider opacity-70'>Status Saat Ini</span>
                <span className='text-2xl font-black'>{summary.STATUS}</span>
              </div>
              <div className='px-6 py-4 rounded-2xl border bg-gray-50 flex flex-col gap-1'>
                <span className='text-[10px] font-bold uppercase tracking-wider text-gray-400'>Skor IDM {summary.TAHUN}</span>
                <span className='text-2xl font-black text-gray-800'>{Number(summary.SKOR_SAAT_INI).toFixed(4)}</span>
              </div>
              <div className='px-6 py-4 rounded-2xl border bg-primary/5 flex flex-col gap-1 border-primary/10'>
                <span className='text-[10px] font-bold uppercase tracking-wider text-primary/70'>Target Status</span>
                <span className='text-2xl font-black text-primary'>{summary.TARGET_STATUS}</span>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-96 h-64 bg-primary/5 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden'>
             <TrendingUp className='absolute -bottom-10 -right-10 w-40 h-40 text-primary/10 -rotate-12' />
             <div className='relative z-10 text-center'>
                <div className='w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-xl shadow-primary/30'>
                   <ShieldCheck size={40} />
                </div>
                <h3 className='text-xl font-bold text-gray-800'>Desa Mandiri</h3>
                <p className='text-sm text-gray-500 mt-1 italic'>Berdasarkan Keputusan Menteri Desa</p>
             </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className='px-4 lg:px-12 py-16 grid lg:grid-cols-2 gap-12'>
        <div>
          <Title title='Capaian Dimensi' />
          <p className='text-sm text-gray-500 mb-8'>Perbandingan nilai antara dimensi ketahanan sosial, ekonomi, dan lingkungan.</p>
          
          <div className='h-[350px] w-full'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dimensionData} layout="vertical" margin={{ left: 40, right: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.3} />
                <XAxis type="number" domain={[0, 1]} hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false}
                  width={120}
                  tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="score" radius={[0, 10, 10, 0]} barSize={40}>
                  {dimensionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className='grid grid-cols-3 gap-4 mt-8'>
             {dimensionData.map((dim) => (
               <div key={dim.name} className='p-4 bg-white rounded-2xl border text-center'>
                  <dim.icon className='w-6 h-6 mx-auto mb-2' style={{ color: dim.color }} />
                  <p className='text-[10px] font-bold text-gray-400 uppercase'>{dim.name.split(' ')[0]}</p>
                  <p className='text-xl font-black text-gray-800'>{dim.score.toFixed(4)}</p>
               </div>
             ))}
          </div>
        </div>

        <div>
           <Title title='Informasi Skor IDM' />
           <div className='space-y-6 mt-8'>
              <Card className='border-none shadow-sm bg-blue-50/50'>
                 <CardHeader className='pb-2'>
                    <div className='flex items-center gap-3'>
                       <div className='p-2 bg-blue-500 rounded-lg text-white'>
                          <Target size={18} />
                       </div>
                       <CardTitle className='text-lg'>Skor Minimal Mandiri</CardTitle>
                    </div>
                 </CardHeader>
                 <CardContent>
                    <p className='text-3xl font-black text-blue-700'>{summary.SKOR_MINIMAL}</p>
                    <p className='text-sm text-blue-600/70 mt-1'>Ambang batas untuk mempertahankan status Desa Mandiri.</p>
                 </CardContent>
              </Card>

              <Card className='border-none shadow-sm bg-green-50/50'>
                 <CardHeader className='pb-2'>
                    <div className='flex items-center gap-3'>
                       <div className='p-2 bg-green-500 rounded-lg text-white'>
                          <TrendingUp size={18} />
                       </div>
                       <CardTitle className='text-lg'>Pertumbuhan</CardTitle>
                    </div>
                 </CardHeader>
                 <CardContent>
                    <p className='text-3xl font-black text-green-700'>{summary.PENAMBAHAN > 0 ? '+' : ''}{summary.PENAMBAHAN.toFixed(4)}</p>
                    <p className='text-sm text-green-600/70 mt-1'>Perubahan skor dibandingkan dengan periode penilaian sebelumnya.</p>
                 </CardContent>
              </Card>

              <div className='bg-white p-6 rounded-2xl border border-dashed border-gray-300 flex items-start gap-4'>
                 <Info className='text-primary shrink-0' />
                 <div>
                    <h4 className='font-bold text-gray-800'>Apa itu IDM?</h4>
                    <p className='text-sm text-gray-500 leading-relaxed mt-1'>
                       Indeks Desa Membangun (IDM) meletakkan prakarsa dan kuatnya modal sosial masyarakat 
                       sebagai dasar dalam proses pembangunan desa yang berkelanjutan.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Detailed Indicators */}
      <section className='px-4 lg:px-12 py-16 bg-gray-50/50'>
         <div className='flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8'>
            <Title title='Rincian Indikator' />
            
            <div className='relative w-full md:w-80'>
               <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
               <input
                 type='text'
                 placeholder='Cari indikator...'
                 className='w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm'
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
            </div>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {indicatorRows.map((row, idx) => (
              <Card key={idx} className='border-none shadow-sm hover:shadow-md transition-shadow group overflow-hidden bg-white'>
                 <div className='h-1 w-full bg-primary/20 group-hover:bg-primary transition-colors'></div>
                 <CardHeader className='pb-2'>
                    <div className='flex justify-between items-start mb-2'>
                       <Badge variant='outline' className='text-[10px] font-bold py-0'>NO. {row.NO}</Badge>
                       <div className='flex items-baseline gap-1'>
                          <span className='text-2xl font-black text-gray-800'>{row.SKOR}</span>
                          <span className='text-[10px] text-gray-400 font-bold'>/ 5</span>
                       </div>
                    </div>
                    <CardTitle className='text-sm leading-tight text-gray-700'>{row.INDIKATOR}</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className='text-xs text-gray-500 leading-relaxed line-clamp-2 italic'>"{row.KETERANGAN}"</p>
                    {row.KEGIATAN && row.KEGIATAN !== '-' && (
                       <div className='mt-4 pt-3 border-t border-gray-50'>
                          <p className='text-[9px] font-bold text-primary uppercase mb-1'>Rekomendasi Kegiatan:</p>
                          <p className='text-[10px] text-gray-600'>{row.KEGIATAN}</p>
                       </div>
                    )}
                 </CardContent>
              </Card>
            ))}
         </div>

         {indicatorRows.length === 0 && (
           <div className='text-center py-20'>
              <p className='text-gray-400'>Tidak ada indikator yang cocok dengan pencarian Anda.</p>
           </div>
         )}
      </section>

      {/* Identity Footer */}
      <section className='px-4 lg:px-12 py-12 bg-white flex flex-col items-center text-center'>
         <div className='max-w-2xl'>
            <p className='text-xs font-bold text-primary uppercase tracking-widest mb-2'>Lokasi Penilaian</p>
            <h3 className='text-2xl font-bold text-gray-800'>
              {idm.IDENTITAS[0].nama_desa}, Kec. {idm.IDENTITAS[0].nama_kecamatan}
            </h3>
            <p className='text-sm text-gray-500 mt-2'>
              Kabupaten {idm.IDENTITAS[0].nama_kab_kota}, Provinsi {idm.IDENTITAS[0].nama_provinsi}
            </p>
            <div className='mt-8 pt-8 border-t w-full flex justify-center gap-12'>
               <div>
                  <p className='text-[10px] font-bold text-gray-400 uppercase'>Kode Desa</p>
                  <p className='text-sm font-bold'>{idm.IDENTITAS[0].id_desa}</p>
               </div>
               <div>
                  <p className='text-[10px] font-bold text-gray-400 uppercase'>Tahun Data</p>
                  <p className='text-sm font-bold'>{summary.TAHUN}</p>
               </div>
            </div>
         </div>
      </section>
    </main>
  )
}
