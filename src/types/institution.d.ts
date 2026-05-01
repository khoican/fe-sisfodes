import type { Official } from "./official";

/**
 * Representasi data lembaga desa (BPD, LPM, PKK, Karang Taruna, dll).
 */
export interface Institution {
  id: string;
  slug: string;
  name: string;
  full_name: string;
  description: string;
  logo: string;
  vision?: string;
  mission?: string[];
  tasks?: string[];
  functions?: string[];
  /**
   * Daftar pengurus lembaga.
   */
  members: Official[];
  last_updated: string;
}

/**
 * List semua lembaga desa untuk kebutuhan navigasi/statistik.
 */
export interface InstitutionSummary {
  id: string;
  name: string;
  slug: string;
  logo: string;
  member_count: number;
}
