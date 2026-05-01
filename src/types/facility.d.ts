/**
 * Kategori fasilitas umum yang tersedia di desa.
 */
export type FacilityCategory = 
  | 'Pendidikan' 
  | 'Kesehatan' 
  | 'Peribadatan' 
  | 'Olahraga' 
  | 'Transportasi' 
  | 'Layanan Publik' 
  | 'Ruang Terbuka Hijau'
  | 'Ekonomi';

/**
 * Status operasional fasilitas.
 */
export type FacilityStatus = 'Aktif' | 'Renovasi' | 'Dalam Pembangunan' | 'Non-Aktif';

/**
 * Koordinat geografis untuk pemetaan.
 */
export interface Coordinates {
  lat: number;
  lng: number;
}

/**
 * Representasi data fasilitas umum desa.
 */
export interface Facility {
  id: string;
  name: string;
  category: FacilityCategory;
  address: string;
  coordinates: Coordinates;
  description: string;
  image: string;
  status: FacilityStatus;
  /**
   * Data tambahan spesifik kategori.
   * Contoh: { "Jumlah Ruang Kelas": 6 } atau { "Tipe Layanan": "Puskesmas Pembantu" }
   */
  metadata: Record<string, string | number>;
  last_updated: string;
}

/**
 * Statistik ringkasan fasilitas umum.
 */
export interface FacilityStats {
  total: number;
  by_category: Record<FacilityCategory, number>;
}
