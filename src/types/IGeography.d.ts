export interface IGeographyBorder {
    north: string
    south: string
    east: string
    west: string
}

export interface ILandUse {
    label: string
    area: number
    percentage: number
}

export interface IGeography {
    total_area: number
    topography: string
    altitude: number
    climate: string
    borders: IGeographyBorder
    land_use: ILandUse[]
    last_updated: string
}
