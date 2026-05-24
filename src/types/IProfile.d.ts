export interface IProfile {
    name: string
    vision: string
    mission: string[]
    history: string
    address: {
        province: string
        regency: string
        district: string
        village: string
        address: string
    }
    contact: {
        email: string
        phone: string
        instagram?: string
        whatsapp?: string
        tiktok?: string
    }
    coordinates: {
        latitude: string
        longitude: string
    }
    greeting: string
    map_embed_url?: string
}
