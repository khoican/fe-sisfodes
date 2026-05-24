export interface PublicationDocument {
    id: string
    title: string
    description?: string
    file_url: string
    file_type: 'pdf' | 'doc' | 'xls' | 'zip'
    file_size: string
    created_at: string
}

export interface PublicationCategory {
    slug: string
    name: string
    documents: PublicationDocument[]
}
