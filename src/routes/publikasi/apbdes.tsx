import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import Title from '#/components/ui/title'
import { budgetQueryOptions } from '#/services/budget.service'
import { createFileRoute } from '@tanstack/react-router'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  Cell
} from 'recharts'
import { 
  TrendingUp, 
  Wallet, 
  PieChart as PieChartIcon, 
  ArrowUpRight, 
  ArrowDownRight,
  Info,
  Calendar
} from 'lucide-react'
import { useMemo } from 'react'

export const Route = createFileRoute('/publikasi/apbdes')({
  head: () => ({
    meta: [
      {
        title: 'APBDes | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Transparansi Anggaran Pendapatan dan Belanja Desa (APBDes) Sumberkejayan tahun anggaran berjalan.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const budget = await context.queryClient.ensureQueryData(budgetQueryOptions())
    return {
      budget: budget.response
    }
  },
  component: ApbdesPage
})

function ApbdesPage() {
  const { budget } = Route.useLoaderData()

  if (!budget) return null

  // Data untuk chart perbandingan Pendapatan vs Belanja
  const comparisonData = useMemo(() => [
    { name: 'Pendapatan', direncanakan: budget.income.total_planned, terealisasi: budget.income.total_realized },
    { name: 'Belanja', direncanakan: budget.expenditure.total_planned, terealisasi: budget.expenditure.total_realized }
  ], [budget])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(value)
  }

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 100) return 'text-green-600'
    if (percentage >= 75) return 'text-blue-600'
    if (percentage >= 50) return 'text-amber-600'
    return 'text-red-600'
  }

  return (
    <main className='w-full'>
      {/* Header Transparansi */}
      <section className='bg-white px-4 lg:px-12 py-12 rounded-b-3xl border-b shadow-sm'>
        <div className='flex flex-col lg:flex-row gap-12 items-center'>
          <div className='flex-1'>
            <Badge variant='primary' className='mb-4 uppercase tracking-widest'>Transparansi Anggaran</Badge>
            <h1 className='text-5xl font-extrabold leading-tight'>
              APBDes <span className='text-primary'>Tahun {budget.year}</span>
            </h1>
            <p className='text-gray-600 mt-6 text-lg max-w-2xl'>
              Wujud keterbukaan informasi publik Pemerintah Desa Sumberkejayan dalam pengelolaan 
              keuangan desa untuk pembangunan dan pemberdayaan masyarakat.
            </p>
            
            <div className='flex flex-wrap gap-4 mt-8 text-xs text-gray-400'>
               <div className='flex items-center gap-2'>
                  <Calendar size={14} className='text-primary' />
                  <span>Update: {new Date(budget.last_updated).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
               </div>
               <div className='flex items-center gap-2'>
                  <Info size={14} className='text-primary' />
                  <span>Sumber Data: Sistem Informasi Keuangan Desa (Siskeudes)</span>
               </div>
            </div>
          </div>

          <div className='w-full lg:w-96 flex flex-col gap-4'>
             <Card className='bg-primary border-none shadow-xl shadow-primary/20 text-white'>
                <CardContent className='pt-6'>
                   <p className='text-[10px] font-bold uppercase tracking-wider opacity-70 mb-1'>Total Belanja Desa</p>
                   <p className='text-2xl font-black'>{formatCurrency(budget.expenditure.total_planned)}</p>
                   <div className='mt-4 pt-4 border-t border-white/10 flex justify-between items-center'>
                      <span className='text-[10px] opacity-70'>Realisasi: {Math.round((budget.expenditure.total_realized / budget.expenditure.total_planned) * 100)}%</span>
                      <ArrowUpRight size={20} className='opacity-50' />
                   </div>
                </CardContent>
             </Card>
             <Card className='bg-white border shadow-sm'>
                <CardContent className='pt-6'>
                   <p className='text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1'>Total Pendapatan Desa</p>
                   <p className='text-2xl font-black text-gray-800'>{formatCurrency(budget.income.total_planned)}</p>
                </CardContent>
             </Card>
          </div>
        </div>
      </section>

      {/* Analytics Chart */}
      <section className='px-4 lg:px-12 py-16 bg-gray-50/50'>
         <Title title='Grafik Perbandingan' />
         <div className='mt-8 h-[450px] bg-white p-8 rounded-3xl shadow-sm border'>
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={comparisonData} barGap={12}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `Rp${(value / 1e9).toFixed(1)}M`}
                  />
                  <Tooltip 
                    cursor={{ fill: '#f3f4f6' }}
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend iconType='circle' wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="direncanakan" name="Anggaran (RPP)" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="terealisasi" name="Realisasi (RKP)" fill="#10b981" radius={[6, 6, 0, 0]} />
               </BarChart>
            </ResponsiveContainer>
         </div>
      </section>

      {/* Detailed Budget Sections */}
      <section className='px-4 lg:px-12 py-16 space-y-20'>
         {/* Pendapatan */}
         <div>
            <div className='flex items-center gap-3 mb-8'>
               <div className='p-3 bg-blue-500 rounded-2xl text-white'>
                  <Wallet size={24} />
               </div>
               <div>
                  <h2 className='text-3xl font-bold text-gray-800'>Pendapatan Desa</h2>
                  <p className='text-sm text-gray-500'>Sumber-sumber penerimaan keuangan desa.</p>
               </div>
            </div>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {budget.income.items.map((item) => (
                  <Card key={item.id} className='border-none shadow-md overflow-hidden bg-white group'>
                     <div className='h-1.5 w-full bg-blue-500'></div>
                     <CardHeader className='pb-2'>
                        <CardTitle className='text-lg leading-tight'>{item.label}</CardTitle>
                     </CardHeader>
                     <CardContent className='space-y-4'>
                        <div>
                           <p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Anggaran</p>
                           <p className='text-lg font-black text-gray-800'>{formatCurrency(item.planned)}</p>
                        </div>
                        <div className='pt-4 border-t border-dashed'>
                           <div className='flex justify-between items-center mb-1'>
                              <p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Realisasi</p>
                              <span className={`text-xs font-bold ${getPercentageColor(item.percentage)}`}>{item.percentage}%</span>
                           </div>
                           <p className='text-md font-bold text-green-600'>{formatCurrency(item.realized)}</p>
                           <div className='w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden'>
                              <div className='bg-green-500 h-full transition-all duration-1000' style={{ width: `${item.percentage}%` }}></div>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>

         {/* Belanja */}
         <div>
            <div className='flex items-center gap-3 mb-8'>
               <div className='p-3 bg-emerald-500 rounded-2xl text-white'>
                  <TrendingUp size={24} />
               </div>
               <div>
                  <h2 className='text-3xl font-bold text-gray-800'>Belanja Desa</h2>
                  <p className='text-sm text-gray-500'>Alokasi pengeluaran untuk pembangunan dan pelayanan.</p>
               </div>
            </div>
            
            <div className='grid md:grid-cols-2 gap-6'>
               {budget.expenditure.items.map((item) => (
                  <Card key={item.id} className='border-none shadow-md bg-white hover:border-emerald-500/30 transition-all'>
                     <CardHeader className='pb-4 border-b border-gray-50'>
                        <CardTitle className='text-lg font-bold flex gap-3'>
                           <div className='w-6 h-6 shrink-0 bg-emerald-100 rounded text-emerald-600 flex items-center justify-center text-xs font-black'>
                              {item.id}
                           </div>
                           {item.label}
                        </CardTitle>
                     </CardHeader>
                     <CardContent className='pt-6 grid grid-cols-2 gap-8'>
                        <div>
                           <p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Anggaran</p>
                           <p className='text-lg font-black text-gray-800'>{formatCurrency(item.planned)}</p>
                        </div>
                        <div>
                           <div className='flex justify-between items-center mb-1'>
                              <p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Realisasi</p>
                              <span className={`text-xs font-bold ${getPercentageColor(item.percentage)}`}>{item.percentage}%</span>
                           </div>
                           <p className='text-lg font-black text-emerald-600'>{formatCurrency(item.realized)}</p>
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>

      {/* Footer Info */}
      <section className='w-full bg-primary p-12 lg:p-20 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden mt-16'>
         <PieChartIcon className='absolute -bottom-10 -right-10 w-64 h-64 text-white/5' />
         <div className='flex-1 z-10'>
            <h3 className='text-3xl font-bold text-white'>Pengawasan Masyarakat</h3>
            <p className='text-white/80 mt-4 leading-relaxed max-w-2xl'>
               Masyarakat berhak mengetahui, mengawasi, dan memberikan masukan terkait pengelolaan 
               keuangan desa. Jika Anda menemukan ketidaksesuaian atau memiliki pertanyaan, silakan 
               hubungi kami melalui layanan pengaduan resmi.
            </p>
         </div>
         <button className='px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:scale-105 transition-transform shadow-2xl'>
            Sampaikan Pengaduan
         </button>
      </section>
    </main>
  )
}
