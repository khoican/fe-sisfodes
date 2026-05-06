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
  Heart 
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/layanan/domisili')({
  head: () => ({
    meta: [
      {
        title: 'Surat Keterangan Domisili | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Permohonan Surat Keterangan Domisili secara online untuk warga Desa Sumberkejayan.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const profil = await context.queryClient.ensureQueryData(profileQueryOptions())
    return {
      profil: profil.response
    }
  },
  component: DomisiliPage
})

function DomisiliPage() {
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
            Surat Keterangan <span className='text-primary'>Domisili</span>
          </h1>
          <p className='text-muted-foreground mt-6 text-lg'>
            Silakan lengkapi formulir di bawah ini untuk mengajukan permohonan Surat Keterangan Domisili. 
            Pastikan data yang Anda masukkan sesuai dengan KTP/KK yang berlaku.
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
              Terima kasih. Permohonan Surat Keterangan Domisili Anda telah kami terima dan akan segera diproses 
              oleh staf desa. Kami akan menghubungi Anda melalui nomor yang terdaftar.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant='outline' 
              className='mt-8 border-green-200 dark:border-green-500/30 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-500/20'
            >
              Ajukan Permohonan Lain
            </Button>
          </div>
        ) : (
          <Card className='border-none shadow-xl shadow-muted/10 rounded-3xl overflow-hidden'>
            <div className='bg-primary h-2 w-full'></div>
            <CardContent className='p-8'>
              <div className='flex items-center gap-3 mb-8'>
                <FileText className='text-primary' size={24} />
                <Title title='Formulir Permohonan' />
              </div>

              <form onSubmit={handleSubmit} className='space-y-8'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='name' className='flex items-center gap-2'>
                      <User size={14} /> Nama Lengkap
                    </Label>
                    <Input id='name' placeholder='Masukkan nama sesuai KTP' required />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='nik' className='flex items-center gap-2'>
                      <IdCard size={14} /> NIK
                    </Label>
                    <Input 
                      id='nik' 
                      type='number' 
                      placeholder='16 digit nomor induk kependudukan' 
                      required 
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (target.value.length > 16) target.value = target.value.slice(0, 16);
                      }}
                    />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='pob' className='flex items-center gap-2'>
                      <MapPin size={14} /> Tempat Lahir
                    </Label>
                    <Input id='pob' placeholder='Contoh: Jember' required />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='dob' className='flex items-center gap-2'>
                      <CalendarIcon size={14} /> Tanggal Lahir
                    </Label>
                    <Input id='dob' type='date' required className='block w-full' />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='gender'>Jenis Kelamin</Label>
                    <Select required>
                      <SelectTrigger id='gender'>
                        <SelectValue placeholder='Pilih jenis kelamin' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='Laki-laki'>Laki-laki</SelectItem>
                        <SelectItem value='Perempuan'>Perempuan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='status' className='flex items-center gap-2'>
                      <Heart size={14} /> Status Perkawinan
                    </Label>
                    <Select required>
                      <SelectTrigger id='status'>
                        <SelectValue placeholder='Pilih status' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='Belum Kawin'>Belum Kawin</SelectItem>
                        <SelectItem value='Kawin'>Kawin</SelectItem>
                        <SelectItem value='Cerai Hidup'>Cerai Hidup</SelectItem>
                        <SelectItem value='Cerai Mati'>Cerai Mati</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='citizenship' className='flex items-center gap-2'>
                      <Globe size={14} /> Kewarganegaraan
                    </Label>
                    <Input id='citizenship' defaultValue='WNI' placeholder='Contoh: WNI' required />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='religion'>Agama</Label>
                    <Select required>
                      <SelectTrigger id='religion'>
                        <SelectValue placeholder='Pilih agama' />
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

                <div className='space-y-2'>
                  <Label htmlFor='job' className='flex items-center gap-2'>
                    <Briefcase size={14} /> Pekerjaan
                  </Label>
                  <Input id='job' placeholder='Contoh: Petani / Karyawan Swasta' required />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='address' className='flex items-center gap-2'>
                    <MapPin size={14} /> Alamat Lengkap
                  </Label>
                  <Input id='address' placeholder='Nama jalan, RT/RW, Dusun' required />
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
