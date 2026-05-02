"use client"

import { cn } from '#/lib/utils'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin } from 'lucide-react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

// Perbaikan icon Leaflet default untuk menghindari error 404 pada marker images
// @ts-ignore - Leaflet's private property access required for icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MarkerData {
  id: string
  name: string
  category: string
  position: [number, number]
  address: string
}

interface MapsProps {
    center: [number, number]
    zoom?: number
    className?: string
    markers?: MarkerData[]
}

/**
 * Komponen Peta Interaktif menggunakan React Leaflet.
 * Menampilkan peta dasar dengan marker kustom untuk fasilitas desa.
 */
export default function Maps ({ center, zoom = 15, className, markers = [] }: MapsProps) {
  
  // Membuat icon kustom menggunakan Lucide React
  const createCustomIcon = (category: string) => {
    const iconHtml = renderToStaticMarkup(
      <div className="bg-primary p-2 rounded-full border-2 border-white shadow-lg text-white">
        <MapPin size={20} />
      </div>
    )
    
    return L.divIcon({
      html: iconHtml,
      className: 'custom-div-icon',
      iconSize: [36, 36],
      iconAnchor: [18, 36],
    })
  }

  return (
    <div className={cn('relative w-full h-full rounded-2xl overflow-hidden border shadow-inner', className)}>
      <MapContainer 
        className='w-full h-full z-0' 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        
        {markers.map((marker) => (
          <Marker 
            key={marker.id} 
            position={marker.position}
            icon={createCustomIcon(marker.category)}
          >
            <Popup className="custom-popup">
              <div className="p-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">{marker.category}</p>
                <h4 className="font-bold text-sm text-foreground">{marker.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{marker.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
