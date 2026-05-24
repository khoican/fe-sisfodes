/**
 * Kategori fasilitas umum yang tersedia di desa.
 */
export type IFacilityCategory =
    | 'Pendidikan'
    | 'Kesehatan'
    | 'Peribadatan'
    | 'Olahraga'
    | 'Transportasi'
    | 'Layanan Publik'
    | 'Ruang Terbuka Hijau'
    | 'Ekonomi'

/**
 * Status operasional fasilitas.
 */
export type IFacilityStatus =
    | 'Aktif'
    | 'Renovasi'
    | 'Dalam Pembangunan'
    | 'Non-Aktif'

/**
 * Koordinat geografis untuk pemetaan.
 */
export interface ICoordinates {
    lat: number
    lng: number
}

/**
 * Representasi data fasilitas umum desa.
 */
export interface IFacility {
    id: string
    name: string
    category: IFacilityCategory
    address: string
    coordinates: ICoordinates
    description: string
    image: string
    status: IFacilityStatus
    /**
     * Data tambahan spesifik kategori.
     * Contoh: { "Jumlah Ruang Kelas": 6 } atau { "Tipe Layanan": "Puskesmas Pembantu" }
     */
    metadata: Record<string, string | number>
    last_updated: string
}

/**
 * Statistik ringkasan fasilitas umum.
 */
export interface IFacilityStats {
    total: number
    by_category: Record<IFacilityCategory, number>
}
