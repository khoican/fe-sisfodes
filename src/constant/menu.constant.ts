export interface MenuItem {
  name: string
  path: string
}

export interface Menu {
  [key: string]: MenuItem
}

export const MENU: Menu = {
  beranda: {
    name: 'Beranda',
    path: '/'
  },
  profil: {
    name: 'Profil',
    path: '/profil'
  },
  statistik: {
    name: 'Statistik',
    path: '/statistik'
  },
  layanan: {
    name: 'Layanan',
    path: '/layanan'
  },
  berita: {
    name: 'Berita',
    path: '/berita'
  },
  potensi: {
    name: 'Potensi',
    path: '/potensi'
  },
  umkm: {
    name: 'UMKM',
    path: '/umkm'
  },
  galeri: {
    name: 'Galeri',
    path: '/galeri'
  },
  kontak: {
    name: 'Kontak',
    path: '/kontak'
  }
}

export const DISPLAY_MENU = [
  MENU.beranda,
  MENU.profil,
  MENU.statistik,
  MENU.layanan,
  MENU.berita,
  MENU.potensi,
  MENU.umkm,
  MENU.galeri
]
