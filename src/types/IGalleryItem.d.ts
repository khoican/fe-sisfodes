/**
 * Representasi item dalam galeri foto/video desa.
 */
export interface IGalleryItem {
    id: string
    title: string
    image: string
    category: 'Kegiatan' | 'Infrastruktur' | 'Alam' | 'Budaya' | 'Sosial'
    description?: string
    date: string
}

/**
 * Metadata untuk galeri.
 */
export interface IGallery {
    items: IGalleryItem[]
    last_updated: string
}
