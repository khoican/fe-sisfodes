
/**
 * Representasi data lembaga desa (BPD, LPM, PKK, Karang Taruna, dll).
 */
export interface IInstitution {
    id: string
    slug: string
    name: string
    logo: string
    description: string
    vision?: string
    mission?: string
    images: string[]
}

/**
 * List semua lembaga desa untuk kebutuhan navigasi/statistik.
 */
export interface IInstitutionSummary {
    id: string
    name: string
    slug: string
    logo: string
    member_count: number
}
