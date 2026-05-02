import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select'
import { Textarea } from '#/components/ui/textarea'
import Title from '#/components/ui/title'
import { profileQueryOptions } from '#/services/profile.service'
import { createFileRoute } from '@tanstack/react-router'
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck
} from 'lucide-react'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export const Route = createFileRoute('/pengaduan')({
  head: () => ({
    meta: [
      {
        title: 'Layanan Pengaduan | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Sampaikan aspirasi, keluhan, atau laporan Anda secara resmi melalui sistem pengaduan masyarakat Desa Sumberkejayan.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const profil = await context.queryClient.ensureQueryData(profileQueryOptions())
    return {
      profil: profil.response
    }
  },
  component: PengaduanPage
})

function PengaduanPage() {
  const { profil } = Route.useLoaderData()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulasi pengiriman data
    setTimeout(() => {
      setLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const complaintFlow = [
    {
      title: 'Kirim Laporan',
      description: 'Isi formulir pengaduan dengan data yang valid dan sampaikan keluhan Anda secara jelas.',
      icon: MessageSquare
    },
    {
      title: 'Verifikasi',
      description: 'Tim admin desa akan memverifikasi laporan Anda untuk memastikan validitas data.',
      icon: ShieldCheck
    },
    {
      title: 'Tindak Lanjut',
      description: 'Laporan akan diteruskan ke pihak terkait untuk segera mendapatkan penanganan.',
      icon: Send
    },
    {
      title: 'Selesai',
      description: 'Status pengaduan akan diinformasikan kembali kepada pelapor melalui kontak yang terdaftar.',
      icon: CheckCircle2
    }
  ]

  return (
    <main className='w-full'>
      {/* Hero Header */}
      <section className='bg-background px-4 lg:px-12 py-12 rounded-b-3xl border-b shadow-sm'>
        <div className='max-w-4xl'>
          <Badge variant='primary' className='mb-4 uppercase tracking-widest'>Suara Masyarakat</Badge>
          <h1 className='text-5xl font-extrabold leading-tight'>
            Layanan <span className='text-primary'>Pengaduan</span>
          </h1>
          <p className='text-muted-foreground mt-6 text-lg'>
            Pemerintah Desa Sumberkejayan berkomitmen untuk mendengar dan menindaklanjuti setiap aspirasi 
            serta keluhan warga demi pelayanan publik yang lebih baik.
          </p>
        </div>
      </section>

      <section className='px-4 lg:px-12 py-16'>
        <div className='grid lg:grid-cols-3 gap-12'>
          {/* Form Section */}
          <div className='lg:col-span-2'>
            <Title title='Formulir Pengaduan' />
            
            {isSubmitted ? (
              <div className='mt-8 bg-green-500/10 border border-green-500/20 rounded-3xl p-12 text-center animate-in zoom-in duration-300'>
                <div className='w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/20'>
                  <CheckCircle2 size={40} />
                </div>
                <h3 className='text-2xl font-bold text-green-600 dark:text-green-400'>Laporan Berhasil Terkirim!</h3>
                <p className='text-green-600/70 dark:text-green-400/70 mt-4 max-w-md mx-auto'>
                  Terima kasih atas laporan Anda. Tim kami akan segera meninjau dan menindaklanjuti 
                  pengaduan tersebut. Nomor tiket laporan telah dikirim ke kontak Anda.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant='outline' 
                  className='mt-8 border-green-200 dark:border-green-500/30 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-500/20'
                >
                  Kirim Laporan Lainnya
                </Button>
              </div>
            ) : (
              <Card className='mt-8 border-none shadow-xl shadow-muted/10 rounded-3xl overflow-hidden'>
                <div className='bg-primary h-2 w-full'></div>
                <CardContent className='p-8'>
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='name'>Nama Lengkap</Label>
                        <Input id='name' placeholder='Masukkan nama lengkap Anda' required />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='contact'>Nomor WhatsApp / Email</Label>
                        <Input id='contact' placeholder='Contoh: 081234567890' required />
                      </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6 w-full'>
                      <div className='space-y-2'>
                        <Label htmlFor='category'>Kategori Pengaduan</Label>
                        <Select required >
                          <SelectTrigger id='category' className='w-full'>
                            <SelectValue placeholder='Pilih kategori' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='infrastruktur'>Infrastruktur & Jalan</SelectItem>
                            <SelectItem value='pelayanan'>Pelayanan Administrasi</SelectItem>
                            <SelectItem value='kamtibmas'>Keamanan & Ketertiban</SelectItem>
                            <SelectItem value='sosial'>Sosial & Kesejahteraan</SelectItem>
                            <SelectItem value='lainnya'>Lainnya</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='title'>Judul Laporan</Label>
                        <Input id='title' placeholder='Judul singkat laporan Anda' required />
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='message'>Isi Laporan / Keluhan</Label>
                      <Textarea 
                        id='message' 
                        placeholder='Jelaskan secara detail keluhan atau laporan yang ingin Anda sampaikan...' 
                        className='min-h-[150px]'
                        required 
                      />
                    </div>

                    <div className='bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex gap-3 text-amber-600 dark:text-amber-400 text-sm'>
                      <AlertCircle className='shrink-0 mt-0.5' size={18} />
                      <p>
                        Pastikan data yang Anda masukkan benar. Laporan palsu atau penyalahgunaan layanan 
                        dapat dikenakan sanksi sesuai ketentuan yang berlaku.
                      </p>
                    </div>

                    <Button type='submit' className='w-full md:w-auto px-10 h-12 text-lg' disabled={loading}>
                      {loading ? 'Mengirim...' : 'Kirim Pengaduan'}
                      {!loading && <Send className='ml-2 w-4 h-4' />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* FAQ / Help */}
            <div className='mt-20'>
               <div className='flex items-center gap-3 mb-8'>
                  <div className='p-3 bg-primary/10 rounded-2xl text-primary'>
                     <HelpCircle size={24} />
                  </div>
                  <h2 className='text-3xl font-bold'>Alur Pengaduan</h2>
               </div>
               
               <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                  {complaintFlow.map((step, idx) => (
                    <div key={idx} className='relative group'>
                       {idx < complaintFlow.length - 1 && (
                         <div className='hidden lg:block absolute top-10 left-full w-full h-px border-t border-dashed border-primary/30 -z-0'></div>
                       )}
                       <div className='bg-card p-6 rounded-2xl border border-border shadow-sm relative z-10 h-full hover:border-primary/50 transition-colors'>
                          <div className='w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform'>
                             <step.icon size={24} />
                          </div>
                          <h4 className='font-bold text-lg mb-2'>{step.title}</h4>
                          <p className='text-xs text-muted-foreground leading-relaxed'>{step.description}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Sidebar / Contact Info */}
          <div className='space-y-8'>
            <div className='bg-primary text-white p-8 rounded-3xl shadow-xl shadow-primary/20 relative overflow-hidden'>
               <MessageSquare className='absolute -bottom-10 -right-10 w-40 h-40 text-white/10 -rotate-12' />
               <div className='relative z-10'>
                  <h3 className='text-2xl font-bold mb-4'>Layanan Darurat</h3>
                  <p className='text-white/80 text-sm leading-relaxed mb-8'>
                    Untuk situasi darurat yang membutuhkan penanganan segera, silakan hubungi nomor di bawah ini:
                  </p>
                  
                  <div className='space-y-4'>
                    <a 
                      href={`https://wa.me/${profil.contact.phone.replace(/[^0-9]/g, '')}`} 
                      target='_blank' 
                      className='flex items-center gap-4 bg-white/20 hover:bg-white/30 p-4 rounded-2xl backdrop-blur-md transition-all border border-white/10'
                    >
                       <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white'>
                          <FaWhatsapp size={20} />
                       </div>
                       <div>
                          <p className='text-[10px] uppercase font-bold opacity-70'>WhatsApp Desa</p>
                          <p className='font-bold'>{profil.contact.phone}</p>
                       </div>
                    </a>
                    
                    <div className='flex items-center gap-4 bg-white/20 p-4 rounded-2xl backdrop-blur-md border border-white/10'>
                       <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white'>
                          <Phone size={18} />
                       </div>
                       <div>
                          <p className='text-[10px] uppercase font-bold opacity-70'>Call Center</p>
                          <p className='font-bold'>112 (Bebas Pulsa)</p>
                       </div>
                    </div>
                  </div>
               </div>
            </div>

            <div className='bg-card p-8 rounded-3xl border shadow-sm space-y-8'>
               <h3 className='text-xl font-bold flex items-center gap-2'>
                  <InfoIcon size={20} className='text-primary' />
                  Informasi Kontak
               </h3>
               
               <div className='space-y-6'>
                  <div className='flex gap-4'>
                     <MapPin className='shrink-0 text-primary mt-1' size={20} />
                     <div>
                        <p className='text-xs font-bold text-muted-foreground/70 uppercase tracking-widest mb-1'>Alamat Kantor</p>
                        <p className='text-sm text-muted-foreground leading-relaxed'>
                           {profil.address.address}, {profil.address.village}, Kec. {profil.address.district}, {profil.address.regency}
                        </p>
                     </div>
                  </div>

                  <div className='flex gap-4'>
                     <Mail className='shrink-0 text-primary mt-1' size={20} />
                     <div>
                        <p className='text-xs font-bold text-muted-foreground/70 uppercase tracking-widest mb-1'>Email Resmi</p>
                        <p className='text-sm text-muted-foreground'>{profil.contact.email}</p>
                     </div>
                  </div>

                  <div className='flex gap-4'>
                     <Clock className='shrink-0 text-primary mt-1' size={20} />
                     <div>
                        <p className='text-xs font-bold text-muted-foreground/70 uppercase tracking-widest mb-1'>Jam Operasional</p>
                        <p className='text-sm text-muted-foreground'>Senin - Jumat: 08:00 - 15:00 WIB</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className='bg-muted p-6 rounded-2xl border border-dashed border-border'>
               <p className='text-xs text-muted-foreground leading-relaxed'>
                  <strong>Catatan:</strong> Pengaduan Anda akan diproses dalam waktu maksimal 3x24 jam kerja 
                  sejak laporan diverifikasi oleh admin.
               </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function InfoIcon({ size, className }: { size?: number, className?: string }) {
  return (
    <div className={className}>
      <HelpCircle size={size} />
    </div>
  )
}
