import type { IOfficial } from './IOfficial'

/**
 * Representasi data lembaga desa (BPD, LPM, PKK, Karang Taruna, dll).
 */
export interface IInstitution {
    id: string
    slug: string
    name: string
    full_name: string
    description: string
    logo: string
    vision?: string
    mission?: string[]
    tasks?: string[]
    functions?: string[]
    /**
     * Daftar pengurus lembaga.
     */
    members: IOfficial[]
    last_updated: string
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
