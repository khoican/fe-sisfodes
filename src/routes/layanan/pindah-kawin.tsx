import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select'
import Title from '#/components/ui/title'
import { profileQueryOptions } from '#/services/profile.service'
import { createFileRoute } from '@tanstack/react-router'
import { 
  CheckCircle2, 
  FileText, 
  Send, 
  User, 
  IdCard, 
  MapPin, 
  Calendar as CalendarIcon, 
  Briefcase, 
  Globe, 
  Heart,
  ExternalLink
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/layanan/pindah-kawin')({
  head: () => ({
    meta: [
      {
        title: 'Surat Keterangan Pindah Kawin | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Permohonan Surat Keterangan Pindah Kawin / Numpang Nikah secara online untuk warga Desa Sumberkejayan.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const profil = await context.queryClient.ensureQueryData(profileQueryOptions())
    return {
      profil: profil.response
    }
  },
  component: PindahKawinPage
})

function PindahKawinPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <main className='w-full'>
      <section className='bg-background px-4 lg:px-12 py-12 rounded-b-3xl border-b shadow-sm'>
        <div className='max-w-4xl'>
          <Badge variant='primary' className='mb-4 uppercase tracking-widest'>Layanan Administrasi</Badge>
          <h1 className='text-5xl font-extrabold leading-tight'>
            Surat Keterangan <span className='text-primary'>Pindah Kawin</span>
          </h1>
          <p className='text-muted-foreground mt-6 text-lg'>
            Layanan permohonan surat keterangan untuk keperluan pernikahan di luar wilayah Desa Sumberkejayan 
            (Pindah Nikah atau Numpang Nikah).
          </p>
        </div>
      </section>

      <section className='px-4 lg:px-12 py-16 max-w-5xl mx-auto'>
        {isSubmitted ? (
          <div className='bg-green-500/10 border border-green-500/20 rounded-3xl p-12 text-center animate-in zoom-in duration-300'>
            <div className='w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/20'>
              <CheckCircle2 size={40} aria-hidden='true' />
            </div>
            <h2 className='text-2xl font-bold text-green-600 dark:text-green-400'>Permohonan Berhasil Dikirim!</h2>
            <p className='text-green-600/70 dark:text-green-400/70 mt-4 max-w-md mx-auto'>
              Terima kasih. Permohonan surat keterangan pindah kawin Anda telah kami terima. 
              Silakan lengkapi berkas fisik di kantor desa untuk proses penandatanganan lebih lanjut.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant='outline' 
              className='mt-8 border-green-200 dark:border-green-500/30 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-500/20'
            >
              Ajukan Permohonan Baru
            </Button>
          </div>
        ) : (
          <Card className='border-none shadow-xl shadow-muted/10 rounded-3xl overflow-hidden'>
            <div className='bg-primary h-2 w-full'></div>
            <CardContent className='p-8'>
              <div className='flex items-center gap-3 mb-8'>
                <Heart className='text-primary' size={24} />
                <Title title='Formulir Pindah / Numpang Nikah' />
              </div>

              <form onSubmit={handleSubmit} className='space-y-8'>
                {/* Data Pribadi */}
                <div className='space-y-6'>
                  <h3 className='text-lg font-bold flex items-center gap-2 border-b pb-2'>
                    <User size={18} className='text-primary' /> Data Pribadi
                  </h3>
                  
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='name'>Nama Lengkap</Label>
                      <Input id='name' placeholder='Sesuai KTP' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='nik'>NIK</Label>
                      <Input 
                        id='nik' 
                        type='number' 
                        placeholder='16 digit NIK' 
                        required 
                        onInput={(e) => {
                          const target = e.target as HTMLInputElement;
                          if (target.value.length > 16) target.value = target.value.slice(0, 16);
                        }}
                      />
                    </div>
                  </div>

                  <div className='grid md:grid-cols-3 gap-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='gender'>Jenis Kelamin</Label>
                      <Select required>
                        <SelectTrigger id='gender'>
                          <SelectValue placeholder='Pilih' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='Laki-laki'>Laki-laki</SelectItem>
                          <SelectItem value='Perempuan'>Perempuan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='pob'>Tempat Lahir</Label>
                      <Input id='pob' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='dob'>Tanggal Lahir</Label>
                      <Input id='dob' type='date' required />
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='citizenship'>Kewarganegaraan</Label>
                      <Input id='citizenship' defaultValue='WNI' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='religion'>Agama</Label>
                      <Select required>
                        <SelectTrigger id='religion'>
                          <SelectValue placeholder='Pilih' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='Islam'>Islam</SelectItem>
                          <SelectItem value='Kristen'>Kristen</SelectItem>
                          <SelectItem value='Katolik'>Katolik</SelectItem>
                          <SelectItem value='Hindu'>Hindu</SelectItem>
                          <SelectItem value='Budha'>Budha</SelectItem>
                          <SelectItem value='Konghucu'>Konghucu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='job'>Pekerjaan</Label>
                      <Input id='job' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='address'>Alamat Sekarang</Label>
                      <Input id='address' placeholder='Alamat di Desa Sumberkejayan' required />
                    </div>
                  </div>
                </div>

                {/* Data Tujuan */}
                <div className='space-y-6 pt-6'>
                  <h3 className='text-lg font-bold flex items-center gap-2 border-b pb-2'>
                    <ExternalLink size={18} className='text-primary' /> Informasi Tujuan & Pelaksanaan
                  </h3>

                  <div className='space-y-2'>
                    <Label htmlFor='destination'>Alamat Tujuan (Tempat Menikah)</Label>
                    <Input id='destination' placeholder='Desa/Kel, Kec, Kab/Kota tujuan' required />
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='purpose'>Keperluan</Label>
                      <Select required>
                        <SelectTrigger id='purpose'>
                          <SelectValue placeholder='Pilih keperluan' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='pindah nikah'>Pindah Nikah</SelectItem>
                          <SelectItem value='numpang nikah'>Numpang Nikah</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='event_date'>Tanggal Pelaksanaan</Label>
                      <Input id='event_date' type='date' required />
                    </div>
                  </div>
                </div>

                <div className='pt-4 border-t'>
                  <Button type='submit' className='w-full md:w-auto px-10 h-12 text-lg' disabled={loading}>
                    {loading ? 'Mengirim...' : 'Ajukan Permohonan'}
                    {!loading && <Send className='ml-2 w-4 h-4' />}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </section>
    </main>
  )
}
