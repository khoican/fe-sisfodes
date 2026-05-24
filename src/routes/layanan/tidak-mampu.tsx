import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '#/components/ui/select'
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
    Upload,
    AlertCircle,
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/layanan/tidak-mampu')({
    head: () => ({
        meta: [
            {
                title: 'Surat Keterangan Tidak Mampu | Desa Sumberkejayan',
            },
            {
                name: 'description',
                content:
                    'Permohonan Surat Keterangan Tidak Mampu (SKTM) secara online untuk warga Desa Sumberkejayan.',
            },
        ],
    }),
    loader: async ({ context }) => {
        const profil = await context.queryClient.ensureQueryData(
            profileQueryOptions(),
        )
        return {
            profil: profil.response,
        }
    },
    component: TidakMampuPage,
})

function TidakMampuPage() {
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
        <main className="w-full">
            <section className="bg-background px-4 lg:px-12 py-12 rounded-b-3xl border-b shadow-sm">
                <div className="max-w-4xl">
                    <Badge
                        variant="primary"
                        className="mb-4 uppercase tracking-widest"
                    >
                        Layanan Administrasi
                    </Badge>
                    <h1 className="text-5xl font-extrabold leading-tight">
                        Surat Keterangan{' '}
                        <span className="text-primary">Tidak Mampu</span>
                    </h1>
                    <p className="text-muted-foreground mt-6 text-lg">
                        Layanan ini diperuntukkan bagi warga Desa Sumberkejayan
                        yang membutuhkan Surat Keterangan Tidak Mampu (SKTM)
                        untuk keperluan pendidikan, kesehatan, atau bantuan
                        sosial lainnya.
                    </p>
                </div>
            </section>

            <section className="px-4 lg:px-12 py-16 max-w-5xl mx-auto">
                {isSubmitted ? (
                    <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-12 text-center animate-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/20">
                            <CheckCircle2 size={40} aria-hidden="true" />
                        </div>
                        <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">
                            Permohonan Berhasil Dikirim!
                        </h2>
                        <p className="text-green-600/70 dark:text-green-400/70 mt-4 max-w-md mx-auto">
                            Terima kasih. Permohonan SKTM Anda telah kami
                            terima. Tim verifikasi desa akan melakukan
                            peninjauan data sebelum surat dapat diterbitkan.
                        </p>
                        <Button
                            onClick={() => setIsSubmitted(false)}
                            variant="outline"
                            className="mt-8 border-green-200 dark:border-green-500/30 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-500/20"
                        >
                            Ajukan Permohonan Baru
                        </Button>
                    </div>
                ) : (
                    <Card className="border-none shadow-xl shadow-muted/10 rounded-3xl overflow-hidden">
                        <div className="bg-primary h-2 w-full"></div>
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <FileText className="text-primary" size={24} />
                                <Title title="Formulir Permohonan SKTM" />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="name"
                                            className="flex items-center gap-2"
                                        >
                                            <User size={14} /> Nama Lengkap
                                        </Label>
                                        <Input
                                            id="name"
                                            placeholder="Masukkan nama sesuai KTP"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="nik"
                                            className="flex items-center gap-2"
                                        >
                                            <IdCard size={14} /> NIK
                                        </Label>
                                        <Input
                                            id="nik"
                                            type="number"
                                            placeholder="16 digit NIK"
                                            required
                                            onInput={(e) => {
                                                const target =
                                                    e.target as HTMLInputElement
                                                if (target.value.length > 16)
                                                    target.value =
                                                        target.value.slice(
                                                            0,
                                                            16,
                                                        )
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="gender">
                                            Jenis Kelamin
                                        </Label>
                                        <Select required>
                                            <SelectTrigger id="gender">
                                                <SelectValue placeholder="Pilih jenis kelamin" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Laki-laki">
                                                    Laki-laki
                                                </SelectItem>
                                                <SelectItem value="Perempuan">
                                                    Perempuan
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="pob"
                                            className="flex items-center gap-2"
                                        >
                                            <MapPin size={14} /> Tempat Lahir
                                        </Label>
                                        <Input
                                            id="pob"
                                            placeholder="Contoh: Jember"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="dob"
                                            className="flex items-center gap-2"
                                        >
                                            <CalendarIcon size={14} /> Tanggal
                                            Lahir
                                        </Label>
                                        <Input id="dob" type="date" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="religion">Agama</Label>
                                        <Select required>
                                            <SelectTrigger id="religion">
                                                <SelectValue placeholder="Pilih agama" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Islam">
                                                    Islam
                                                </SelectItem>
                                                <SelectItem value="Kristen">
                                                    Kristen
                                                </SelectItem>
                                                <SelectItem value="Katolik">
                                                    Katolik
                                                </SelectItem>
                                                <SelectItem value="Hindu">
                                                    Hindu
                                                </SelectItem>
                                                <SelectItem value="Budha">
                                                    Budha
                                                </SelectItem>
                                                <SelectItem value="Konghucu">
                                                    Konghucu
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="job"
                                            className="flex items-center gap-2"
                                        >
                                            <Briefcase size={14} /> Pekerjaan
                                        </Label>
                                        <Input
                                            id="job"
                                            placeholder="Pekerjaan saat ini"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="address"
                                            className="flex items-center gap-2"
                                        >
                                            <MapPin size={14} /> Alamat
                                        </Label>
                                        <Input
                                            id="address"
                                            placeholder="Alamat lengkap sesuai KTP"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-6 pt-6 border-t">
                                    <div className="flex items-center gap-2 text-primary font-bold">
                                        <Upload size={20} />
                                        <h3 className="text-lg">
                                            Dokumen Pendukung
                                        </h3>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="document">
                                                Surat Pernyataan Tidak Mampu
                                            </Label>
                                            <Input
                                                id="document"
                                                type="file"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                required
                                                className="cursor-pointer file:cursor-pointer file:bg-primary file:text-white file:rounded-md file:px-4 file:py-1 file:mr-4 file:border-none file:hover:bg-primary/90"
                                            />
                                            <p className="text-xs text-muted-foreground">
                                                Format file: PDF, JPG, atau PNG.
                                                Maksimal 2MB.
                                            </p>
                                        </div>

                                        <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex gap-3 text-amber-600 dark:text-amber-400 text-xs">
                                            <AlertCircle
                                                className="shrink-0"
                                                size={16}
                                            />
                                            <p>
                                                Unggah surat pernyataan tidak
                                                mampu yang telah ditandatangani
                                                oleh pemohon dan diketahui oleh
                                                Ketua RT/RW setempat sebagai
                                                syarat verifikasi.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full md:w-auto px-10 h-12 text-lg"
                                        disabled={loading}
                                    >
                                        {loading
                                            ? 'Mengirim...'
                                            : 'Kirim Permohonan'}
                                        {!loading && (
                                            <Send className="ml-2 w-4 h-4" />
                                        )}
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
