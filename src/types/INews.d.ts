export interface INews {
    id?: number
    slug?: string
    title: string
    description?: string
    content?: string
    images: string[]
    category?: {
        id: number
        name: string
    }
    source?: {
        id: number
        name: string
    }
    author?: string
    created_at: Date
}
