interface FooterData {
    title: string
    links: {
        label: string
        to: string
    }[]
}

export const footerData: FooterData[] = [
    {
        title: "Tautan Cepat",
        links: [
            { label: "Beranda", to: "/" },
            { label: "Profil", to: "/profil" },
            { label: "Statistik", to: "/statistik" },
            { label: "Berita", to: "/berita" },
            { label: "UMKM", to: "/umkm" },
            { label: "Kontak", to: "/kontak" },
        ]
    },
    {
        title: "Layanan",
        links: [
            { label: "Pengaduan", to: "/pengaduan" },
            { label: "Permohonan Surat", to: "/permohonan-surat" },
            { label: "Pendaftaran UMKM", to: "/pendaftaran-umkm" },
            { label: "Pendaftaran Acara", to: "/pendaftaran-acara" },
        ]
    },
] 