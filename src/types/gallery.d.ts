/**
 * Representasi item dalam galeri foto/video desa.
 */
export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: 'Kegiatan' | 'Infrastruktur' | 'Alam' | 'Budaya' | 'Sosial';
  description?: string;
  date: string;
}

/**
 * Metadata untuk galeri.
 */
export interface Gallery {
  items: GalleryItem[];
  last_updated: string;
}
