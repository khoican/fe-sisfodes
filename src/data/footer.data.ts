interface LinkItem {
    label: string
    to: string
}

interface FooterData {
    title: string
    links: LinkItem[]
}

/**
 * @description Static footer navigation menu data.
 * Contains valid links for Quick Links, Public Services, and Transparency.
 */
export const footerData: FooterData[] = [
    {
        title: 'Tautan Cepat',
        links: [
            { label: 'Beranda', to: '/' },
            { label: 'Profil Desa', to: '/profil/profil-desa' },
            { label: 'Struktur Organisasi', to: '/profil/struktur-organisasi' },
            { label: 'Fasilitas Umum', to: '/profil/fasilitas-umum' },
            { label: 'Peta Desa', to: '/profil/peta-desa' },
        ],
    },
    {
        title: 'Layanan',
        links: [
            { label: 'Pengaduan', to: '/pengaduan' },
            { label: 'Surat Domisili', to: '/layanan/domisili' },
            { label: 'Surat Kehilangan', to: '/layanan/kehilangan' },
            { label: 'Surat Tidak Mampu', to: '/layanan/tidak-mampu' },
            { label: 'Surat Pindah Kawin', to: '/layanan/pindah-kawin' },
        ],
    },
]
