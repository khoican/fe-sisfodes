export interface GeographyBorder {
  north: string
  south: string
  east: string
  west: string
}

export interface LandUse {
  label: string
  area: number // in hectares
  percentage: number
}

export interface Geography {
  total_area: number // in hectares
  topography: string
  altitude: number // in meters above sea level
  climate: string
  borders: GeographyBorder
  land_use: LandUse[]
  last_updated: string
}
