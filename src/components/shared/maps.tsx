import { cn } from '#/lib/utils'
import { lazy, Suspense, useEffect, useMemo, useState } from 'react'

interface MapsProps {
  position: [number, number]
  zoom?: number
  className?: string
}

export default function Maps({ position, zoom = 16, className }: MapsProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const Map = useMemo(() => {
    if (typeof window === 'undefined') return null

    return {
      Container: lazy(() => import('react-leaflet').then((m) => ({ default: m.MapContainer }))),
      Tile: lazy(() => import('react-leaflet').then((m) => ({ default: m.TileLayer }))),
      Marker: lazy(() => import('react-leaflet').then((m) => ({ default: m.Marker }))),
      Popup: lazy(() => import('react-leaflet').then((m) => ({ default: m.Popup }))),
    }
  }, [])

  if (!isClient || !Map) {
    return (
      <div className={cn('w-full h-full bg-slate-200 animate-pulse flex items-center justify-center', className)}>
        <span className="text-sm text-slate-500 font-poppins">Memuat Peta Desa...</span>
      </div>
    )
  }

  return (
    <Suspense fallback={<div className={cn('w-full h-full bg-slate-100', className)} />}>
      <Map.Container 
        className={cn('w-full h-full', className)} 
        center={position} 
        zoom={zoom} 
        scrollWheelZoom={false}
      >
        <Map.Tile
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Map.Marker position={position}>
          <Map.Popup>
            Kantor Desa Sumberkejayan. <br /> Lokasi Layanan Publik.
          </Map.Popup>
        </Map.Marker>
      </Map.Container>
    </Suspense>
  )
}