export interface MenuItem {
  name: string
  path?: string
  subMenu?: MenuItem[]
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
    subMenu: [
      {
        name: 'Profil Desa',
        path: '/profil/desa'
      },
      {
        name: 'Struktur Pemerintahan',
        path: '/profil/struktur-pemerintahan'
      },
      {
        name: 'Geografis Desa',
        path: '/profil/geografis-desa'
      },
      {
        name: 'Fasilitas Umum',
        path: '/profil/fasilitas-umum'
      },
      {
        name: 'Peta Desa',
        path: '/profil/peta-desa'
      }
    ]
  },
  lembaga: {
    name: 'Lembaga',
    subMenu: [
      {
        name: 'Badan Permusyawaratan Desa (BPD)',
        path: '/lembaga/bpd'
      },
      {
        name: 'Lembaga Pemberdayaan Masyarakat (LPM)',
        path: '/lembaga/lpm'
      },
      {
        name: 'Pemberdayaan dan Kesejateraan Keluarga (PKK)',
        path: '/lembaga/pkk'
      },
      {
        name: 'Karang Taruna',
        path: '/lembaga/karang-taruna'
      },
      {
        name: 'Posyandu',
        path: '/lembaga/posyandu'
      },
      {
        name: 'Badan Usaha Milik Desa (BUMDes)',
        path: '/lembaga/bumdes'
      },
      {
        name: 'Perlindungan Masyarakat (Linmas)',
        path: '/lembaga/linmas'
      },
      {
        name: 'Lembaga Adat Desa (LAD)',
        path: '/lembaga/lad'
      },
      {
        name: 'Koperasi Merah Putih ',
        path: '/lembaga/koperasi-merah-putih'
      },
      {
        name: 'Satuan Pelayanan Pemenuhan Gizi (SPPG)',
        path: '/lembaga/sppg'
      },
      {
        name: 'Pendidikan',
        path: '/lembaga/pendidikan'
      },
      {
        name: 'Kesehatan',
        path: '/lembaga/kesehatan'
      }
    ]
  },
  statistik: {
    name: 'Statistik',
    subMenu: [
      {
        name: 'Indeks Desa Membangun (IDM)',
        path: '/statistik/idm'
      },
      {
        name: 'Kependudukan',
        path: '/statistik/kependudukan'
      },
      {
        name: 'SDGS',
        path: '/statistik/sdgs'
      }
    ]
  },
  layanan: {
    name: 'Layanan',
    subMenu: [
      {
        name: 'Surat Keterangan Domisili',
        path: '/layanan/surat-keterangan-domisili'
      },
      {
        name: 'Surat Keterangan Kehilangan',
        path: '/layanan/surat-keterangan-kehilangan'
      },
      {
        name: 'Surat Keterangan Tidak Mampu',
        path: '/layanan/surat-keterangan-tidak-mampu'
      },
      {
        name: 'Surat Keterangan Pindah Kawin',
        path: '/layanan/surat-keterangan-pindah-kawin'
      }
    ]
  },
  informasi: {
    name: 'Infromasi',
    subMenu: [
      {
        name: 'Berita',
        path: '/informasi/berita'
      },
      {
        name: 'Artikel',
        path: '/informasi/artikel'
      },
      {
        name: 'Agenda',
        path: '/informasi/agenda'
      },
      {
        name: 'Penghargaan',
        path: '/informasi/penghargaan'
      }
    ]
  },
  potensi: {
    name: 'Potensi',
    subMenu: [
      {
        name: 'Produk Desa',
        path: '/produk'
      },
      {
        name: 'Wisata',
        path: '/potensi/wisata'
      },
      {
        name: 'Budaya',
        path: '/potensi/budaya'
      },
      {
        name: 'Komoditas Unggulan',
        path: '/potensi/komoditas-unggulan'
      }
    ]
  },
  publikasi: {
    name: 'Publikasi',
    subMenu:[
      {
        name: 'APBDes',
        path: '/publikasi/apbdes'
      },
      {
        name: 'RPJMDes',
        path: '/publikasi/rpjmdes'
      },
      {
        name: 'RKPDes',
        path: '/publikasi/rkpdes'
      },
      {
        name: 'RAPBDes',
        path: '/publikasi/apbdes'
      },
      {
        name: 'Dana Desa',
        path: '/publikasi/dana-desa'
      },
      {
        name: 'Bank Data',
        path: '/publikasi/bank-data'
      }
    ]
  },
  galeri: {
    name: 'Galeri',
    path: '/galeri'
  },
  pengaduan: {
    name: 'Pengaduan',
    path: '/pengaduan'
  }
}

export const DISPLAY_MENU = [
  MENU.beranda,
  MENU.profil,
  MENU.lembaga,
  MENU.statistik,
  MENU.layanan,
  MENU.informasi,
  MENU.potensi,
  MENU.publikasi,
  MENU.galeri,
]
