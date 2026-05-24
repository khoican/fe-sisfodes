import { Badge } from '#/components/ui/badge'
import Maps from '#/components/shared/maps'
import { facilityQueryOptions } from '#/services/facility.service'
import { createFileRoute } from '@tanstack/react-router'
import { MapPin, Info, Layers, Maximize } from 'lucide-react'
import { useMemo } from 'react'

export const Route = createFileRoute('/profil/peta-desa')({
    head: () => ({
        meta: [
            {
                title: 'Peta Desa | Desa Sumberkejayan',
            },
            {
                name: 'description',
                content:
                    'Peta interaktif Desa Sumberkejayan yang menampilkan sebaran fasilitas umum, infrastruktur, dan batas wilayah desa.',
            },
        ],
    }),
    loader: async ({ context }) => {
        const facilities = await context.queryClient.ensureQueryData(
            facilityQueryOptions(),
        )
        return {
            facilities: facilities.response,
        }
    },
    component: PetaDesa,
})

function PetaDesa() {
    const { facilities } = Route.useLoaderData()

    // Transformasi data fasilitas ke format marker peta
    const markers = useMemo(() => {
        return facilities.map((f) => ({
            id: f.id,
            name: f.name,
            category: f.category,
            position: [f.coordinates.lat, f.coordinates.lng] as [
                number,
                number,
            ],
            address: f.address,
        }))
    }, [facilities])

    // Center peta di Balai Desa atau fasilitas pertama
    const centerPosition: [number, number] = useMemo(() => {
        const balaiDesa = facilities.find((f) => f.name.includes('Balai Desa'))
        if (balaiDesa)
            return [balaiDesa.coordinates.lat, balaiDesa.coordinates.lng]
        if (facilities.length > 0)
            return [
                facilities[0].coordinates.lat,
                facilities[0].coordinates.lng,
            ]
        return [-8.123, 113.654] // Fallback koordinat
    }, [facilities])

    return (
        <main className="w-full bg-background">
            {/* Header Section */}
            <section className="bg-card px-4 lg:px-12 py-8 rounded-b-xl border-b border-border shadow-sm">
                <div className="max-w-4xl">
                    <Badge
                        variant="primary"
                        className="w-fit uppercase tracking-wider px-4 mb-4"
                    >
                        Geospasial
                    </Badge>
                    <h1 className="text-5xl font-extrabold leading-tight text-foreground">
                        Peta <span className="text-primary">Interaktif</span>{' '}
                        Wilayah
                    </h1>
                    <p className="text-sm md:text-lg text-muted-foreground mt-4">
                        Visualisasi spasial Desa Sumberkejayan yang memudahkan
                        Anda menemukan berbagai titik penting, sarana publik,
                        dan infrastruktur desa dalam satu tampilan terintegrasi.
                    </p>
                </div>
            </section>

            {/* Map Section */}
            <section className="px-4 lg:px-12 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar Info */}
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                            <div className="flex items-center gap-2 mb-4 text-primary">
                                <Info size={20} aria-hidden="true" />
                                <h2 className="font-bold text-foreground">
                                    Panduan Peta
                                </h2>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-sm text-muted-foreground">
                                    <div className="shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <MapPin size={14} aria-hidden="true" />
                                    </div>
                                    <span>
                                        Klik pada marker untuk melihat detail
                                        fasilitas.
                                    </span>
                                </li>
                                <li className="flex gap-3 text-sm text-muted-foreground">
                                    <div className="shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Layers size={14} aria-hidden="true" />
                                    </div>
                                    <span>
                                        Gunakan kontrol zoom untuk melihat lebih
                                        detail atau luas.
                                    </span>
                                </li>
                                <li className="flex gap-3 text-sm text-muted-foreground">
                                    <div className="shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Maximize
                                            size={14}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <span>
                                        Peta mencakup seluruh wilayah
                                        administratif desa.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                            <h2 className="font-bold mb-3 text-foreground">
                                Daftar Titik
                            </h2>
                            <div className="max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                                {facilities.map((f) => (
                                    <div
                                        key={f.id}
                                        className="py-3 border-b border-border last:border-none"
                                    >
                                        <p className="text-[10px] font-bold text-primary uppercase">
                                            {f.category}
                                        </p>
                                        <p className="text-xs font-semibold text-foreground line-clamp-1">
                                            {f.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Map Canvas */}
                    <div className="lg:col-span-3 h-[70vh] min-h-[500px]">
                        <Maps
                            center={centerPosition}
                            markers={markers}
                            zoom={15}
                        />
                        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground/70">
                            <Info size={14} aria-hidden="true" />
                            <span>
                                Data lokasi diperbarui secara berkala melalui
                                koordinat GPS resmi pemerintah desa.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Info */}
            <section className="w-full bg-card border-t border-border p-12 lg:px-24 mt-8">
                <div className="grid md:grid-cols-3 gap-12">
                    <div>
                        <h2 className="font-bold text-lg mb-4 text-foreground">
                            Akurasi Data
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Koordinat yang ditampilkan telah diverifikasi
                            menggunakan perangkat GPS lapangan untuk memastikan
                            akurasi posisi fasilitas umum di wilayah Desa
                            Sumberkejayan.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-4 text-foreground">
                            Integrasi Sistem
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Peta ini terhubung langsung dengan sistem basis data
                            fasilitas desa, sehingga setiap perubahan status
                            fasilitas akan segera tercermin pada tampilan peta.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-4 text-foreground">
                            Penggunaan Publik
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Warga dapat menggunakan peta ini untuk mencari rute
                            tercepat ke sarana pelayanan publik atau sekadar
                            mengenali batas wilayah administratif desa.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
