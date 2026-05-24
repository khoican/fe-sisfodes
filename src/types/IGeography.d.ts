export interface IGeographyBorder {
    north: string
    south: string
    east: string
    west: string
}

export interface ILandUse {
    label: string
    area: number // in hectares
    percentage: number
}

export interface IGeography {
    total_area: number // in hectares
    topography: string
    altitude: number // in meters above sea level
    climate: string
    borders: IGeographyBorder
    land_use: ILandUse[]
    last_updated: string
}
