import { Badge } from '#/components/ui/badge'
import { Card, CardContent } from '#/components/ui/card'
import Title from '#/components/ui/title'
import { agendaQueryOptions } from '#/services/agenda.service'
import { createFileRoute } from '@tanstack/react-router'
import { Calendar as CalendarIcon, MapPin, Clock, Bell, Info } from 'lucide-react'
import { useMemo } from 'react'

export const Route = createFileRoute('/informasi/agenda')({
  head: () => ({
    meta: [
      {
        title: 'Agenda Desa | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Daftar kegiatan, acara, dan hari libur nasional di Desa Sumberkejayan.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const agenda = await context.queryClient.ensureQueryData(agendaQueryOptions())
    return {
      agenda: agenda.response
    }
  },
  component: AgendaPage
})

function AgendaPage() {
  const { agenda } = Route.useLoaderData()

  // Mengelompokkan agenda berdasarkan bulan
  const groupedAgenda = useMemo(() => {
    const groups: Record<string, typeof agenda> = {}
    
    // Urutkan berdasarkan tanggal mulai
    const sortedAgenda = [...agenda].sort((a, b) => 
      new Date(a.date.start).getTime() - new Date(b.date.start).getTime()
    )

    sortedAgenda.forEach(item => {
      const date = new Date(item.date.start)
      const monthYear = date.toLocaleString('id-ID', { month: 'long', year: 'numeric' })
      if (!groups[monthYear]) groups[monthYear] = []
      groups[monthYear].push(item)
    })

    return groups
  }, [agenda])

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString('id-ID', { day: 'numeric' })
  }

  const formatDay = (dateStr: string) => {
    return new Date(dateStr).toLocaleString('id-ID', { weekday: 'short' })
  }

  return (
    <main className='w-full'>
      {/* Header */}
      <section className='bg-background px-4 lg:px-12 py-12 rounded-b-3xl border-b border-border shadow-sm'>
        <div className='max-w-4xl'>
          <Badge variant='primary' className='mb-4 uppercase tracking-widest'>Kalender Kegiatan</Badge>
          <h1 className='text-5xl font-extrabold leading-tight'>
            Agenda <span className='text-primary'>Desa</span>
          </h1>
          <p className='text-muted-foreground mt-6 text-lg'>
            Ikuti berbagai kegiatan kemasyarakatan, rapat desa, dan perayaan hari besar. 
            Pastikan Anda tetap terinformasi dengan jadwal terbaru kami.
          </p>
        </div>
      </section>

      {/* Agenda List */}
      <section className='px-4 lg:px-12 py-16'>
        <div className='grid lg:grid-cols-3 gap-12'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-12'>
            {Object.entries(groupedAgenda).map(([month, items]) => (
              <div key={month} className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <h3 className='text-2xl font-bold text-foreground'>{month}</h3>
                  <div className='flex-grow h-px bg-border'></div>
                </div>

                <div className='space-y-4'>
                  {items.map((item) => (
                    <Card key={item.id} className={`border-none shadow-sm hover:shadow-md transition-all overflow-hidden ${item.is_holiday ? 'bg-destructive/10' : 'bg-card'}`}>
                      <CardContent className='p-0 flex flex-col md:flex-row'>
                        {/* Date Box */}
                        <div className={`w-full md:w-32 p-6 flex flex-col items-center justify-center text-center ${item.is_holiday ? 'bg-destructive text-white' : 'bg-primary text-white'}`}>
                          <span className='text-sm font-bold uppercase tracking-widest opacity-80'>{formatDay(item.date.start)}</span>
                          <span className='text-4xl font-black'>{formatDate(item.date.start)}</span>
                        </div>

                        {/* Info Content */}
                        <div className='flex-1 p-6 flex flex-col justify-between'>
                          <div>
                            <div className='flex items-center gap-2 mb-2'>
                              {item.is_holiday && <Badge variant='destructive' className='text-[10px]'>Libur Nasional</Badge>}
                              <Badge variant='outline' className='text-[10px] border-primary/20 text-primary uppercase'>{item.is_national ? 'Nasional' : 'Lokal'}</Badge>
                            </div>
                            <h4 className='text-xl font-bold text-foreground mb-2'>{item.title}</h4>
                            <p className='text-sm text-muted-foreground line-clamp-2'>{item.description}</p>
                          </div>

                          <div className='mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground/70'>
                            <div className='flex items-center gap-1.5'>
                              <Clock size={14} className='text-primary' />
                              <span>{item.time.start} - {item.time.end} WIB</span>
                            </div>
                            <div className='flex items-center gap-1.5'>
                              <MapPin size={14} className='text-primary' />
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar / Notice */}
          <div className='lg:col-span-1 space-y-8'>
            <div className='bg-primary text-white p-8 rounded-3xl shadow-xl shadow-primary/20 relative overflow-hidden'>
               <Bell className='absolute -bottom-10 -right-10 w-40 h-40 text-white/10 -rotate-12' />
               <div className='relative z-10'>
                  <h3 className='text-2xl font-bold mb-4'>Langganan Info</h3>
                  <p className='text-white/80 text-sm leading-relaxed mb-6'>
                    Dapatkan notifikasi langsung ke WhatsApp Anda untuk setiap agenda desa terbaru.
                  </p>
                  <button className='w-full py-3 bg-white text-primary font-bold rounded-xl hover:bg-muted transition-colors'>
                    Daftar Sekarang
                  </button>
               </div>
            </div>

            <div className='bg-card p-6 rounded-2xl border border-border shadow-sm'>
               <div className='flex items-center gap-2 mb-4 text-primary font-bold'>
                  <Info size={20} />
                  <span>Keterangan</span>
               </div>
               <ul className='space-y-4'>
                  <li className='flex items-start gap-3 text-sm text-muted-foreground'>
                     <div className='w-4 h-4 rounded bg-primary shrink-0 mt-0.5'></div>
                     <span>Agenda Lokal: Kegiatan rutin atau khusus desa.</span>
                  </li>
                  <li className='flex items-start gap-3 text-sm text-muted-foreground'>
                     <div className='w-4 h-4 rounded bg-destructive shrink-0 mt-0.5'></div>
                     <span>Libur Nasional: Kalender resmi pemerintah RI.</span>
                  </li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
