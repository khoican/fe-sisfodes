export interface Umkm {
    id?: number
    slug: string
    name: string
    price: number
    description: string
    store: string
    image: string
    category: {
        id: number
        name: string
    }
    contact: string
    created_at: Date
}