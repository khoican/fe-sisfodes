import Maps from '#/components/shared/maps'
import Title from '#/components/ui/title'
import { ClientOnly } from '@tanstack/react-router'
import { MapPin, Clock } from 'lucide-react'

interface LocationProps {
    address: string
    latitude: string
    longitude: string
}

/**
 * Komponen Location untuk menampilkan informasi lokasi desa.
 *
 * @param {Object} props - Properti komponen.
 * @param {LocationProps} props.location - Data lokasi desa.
 * @returns {JSX.Element} Elemen Location.
 */
export default function Location({
    address,
    latitude,
    longitude,
}: LocationProps) {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 items-center w-full mt-16 relative bg-card rounded-lg p-8 border">
            <section className="col-span-1">
                <Title title="Lokasi Kami" />

                <div className="mt-8 text-sm text-muted-foreground">
                    <p className="">
                        Kunjungi kantor pelayanan kami untuk mendapatkan bantuan
                        informasi dan layanan administrasi desa secara langsung.
                    </p>

                    <div className="flex items-start mt-6 gap-3 font-medium">
                        <MapPin className="text-primary shrink-0 mt-1" size={18} />
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-semibold text-foreground">Alamat Kantor</p>
                            <p className="text-xs leading-relaxed">{address}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start mt-4 gap-3 font-medium">
                        <Clock className="text-primary shrink-0 mt-1" size={18} />
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-semibold text-foreground">Jam Pelayanan</p>
                            <p className="text-xs">08.00 - 15.00 WIB (Senin - Jumat)</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground font-bold text-xs uppercase tracking-wider rounded-lg transition-colors border"
                        >
                            <MapPin size={14} />
                            Buka di Google Maps
                        </a>
                    </div>
                </div>
            </section>

            <ClientOnly>
                <Maps
                    center={[parseFloat(latitude), parseFloat(longitude)]}
                    zoom={15}
                    className="w-full h-[35vh] rounded-lg col-span-2"
                />
            </ClientOnly>
        </div>
    )
}
