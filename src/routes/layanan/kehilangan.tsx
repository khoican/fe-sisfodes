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
import { Textarea } from '#/components/ui/textarea'
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
    AlertTriangle,
    Clock,
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/layanan/kehilangan')({
    head: () => ({
        meta: [
            {
                title: 'Surat Keterangan Kehilangan | Desa Sumberkejayan',
            },
            {
                name: 'description',
                content:
                    'Permohonan Surat Keterangan Kehilangan secara online untuk warga Desa Sumberkejayan.',
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
    component: KehilanganPage,
})

function KehilanganPage() {
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
                        <span className="text-primary">Kehilangan</span>
                    </h1>
                    <p className="text-muted-foreground mt-6 text-lg">
                        Silakan lengkapi formulir di bawah ini untuk melaporkan
                        kehilangan dokumen atau barang berharga. Surat ini
                        digunakan sebagai pengantar ke Kepolisian.
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
                            Laporan Berhasil Dikirim!
                        </h2>
                        <p className="text-green-600/70 dark:text-green-400/70 mt-4 max-w-md mx-auto">
                            Terima kasih. Laporan kehilangan Anda telah kami
                            terima. Silakan datang ke kantor desa untuk
                            mengambil surat fisik dengan membawa dokumen
                            pendukung (jika ada).
                        </p>
                        <Button
                            onClick={() => setIsSubmitted(false)}
                            variant="outline"
                            className="mt-8 border-green-200 dark:border-green-500/30 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-500/20"
                        >
                            Buat Laporan Baru
                        </Button>
                    </div>
                ) : (
                    <Card className="border-none shadow-xl shadow-muted/10 rounded-3xl overflow-hidden">
                        <div className="bg-primary h-2 w-full"></div>
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <FileText className="text-primary" size={24} />
                                <Title title="Formulir Laporan Kehilangan" />
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
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="citizenship"
                                            className="flex items-center gap-2"
                                        >
                                            <Globe size={14} /> Kewarganegaraan
                                        </Label>
                                        <Input
                                            id="citizenship"
                                            defaultValue="WNI"
                                            required
                                        />
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
                                        <AlertTriangle size={20} />
                                        <h3 className="text-lg">
                                            Detail Kehilangan
                                        </h3>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="loss_item">
                                            Barang / Dokumen yang Hilang
                                        </Label>
                                        <Textarea
                                            id="loss_item"
                                            placeholder="Contoh: KTP asli atas nama sendiri, STNK Motor Nopol P 1234 AB, dll"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="loss_date"
                                            className="flex items-center gap-2"
                                        >
                                            <Clock size={14} /> Perkiraan Waktu
                                            Hilang
                                        </Label>
                                        <Input
                                            id="loss_date"
                                            placeholder="Contoh: Senin, 12 Mei 2024 sekitar pukul 10:00 WIB"
                                            required
                                        />
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
                                            : 'Kirim Laporan'}
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
