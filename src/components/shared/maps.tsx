'use client'

import { cn } from '#/lib/utils'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

// Perbaikan icon Leaflet default untuk menghindari error 404 pada marker images
// @ts-ignore - Leaflet's private property access required for icon fix
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

interface MapsProps {
    center: [number, number]
    zoom?: number
    className?: string
}

/**
 * Komponen Peta Interaktif menggunakan React Leaflet.
 * Menampilkan peta dasar dengan marker kustom untuk fasilitas desa.
 */
export default function Maps({
    center,
    zoom = 15,
    className,
}: MapsProps) {

    return (
        <div
            className={cn(
                'relative w-full h-full rounded-2xl overflow-hidden border shadow-inner',
                className,
            )}
        >
            <MapContainer
                className="w-full h-full z-0"
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                    position={center}
                >
                    <Popup className="custom-popup">
                        <div className="p-1">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                                Kantor Desa
                            </p>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
