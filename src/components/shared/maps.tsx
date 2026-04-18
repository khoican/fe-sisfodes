"use client"

import { cn } from '#/lib/utils'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

interface MapsProps {
    position: [number, number]
    zoom?: number
    className?: string
}

export default function Maps ({ position, zoom = 16, className }: MapsProps) {
  return (
    <MapContainer className={cn('w-full h-full z-0', className)} center={position} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
