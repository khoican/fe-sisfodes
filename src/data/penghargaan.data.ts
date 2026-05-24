import type { INews } from '#/types/INews'

export const penghargaanData: INews[] = [
    {
        id: 1,
        slug: 'desa-mandiri-terbaik-tingkat-provinsi',
        title: 'Desa Mandiri Terbaik Tingkat Provinsi',
        description:
            'Penghargaan atas keberhasilan Desa Sumberkejayan dalam mengelola potensi lokal secara mandiri.',
        content: `
      <p>Pemerintah Provinsi memberikan penghargaan kepada Desa Sumberkejayan sebagai Desa Mandiri Terbaik tahun 2026. Penghargaan ini didasarkan pada keberhasilan desa dalam meningkatkan Pendapatan Asli Desa (PADes) melalui optimalisasi BUMDes dan pemberdayaan UMKM lokal.</p>
      <p>Selain itu, tingkat swadaya masyarakat yang tinggi dalam pembangunan infrastruktur desa juga menjadi poin penilaian utama. Kepala Desa menyampaikan bahwa piala ini adalah milik seluruh warga yang telah bekerja keras membangun desa.</p>
      <p>Diharapkan prestasi ini menjadi pemacu semangat bagi desa-desa lain untuk terus berinovasi dan mandiri dalam mengelola wilayahnya.</p>
    `,
        images: ['https://ik.imagekit.io/rulls/sisfodes/demo/news/lomba-desa-bersih-tingkat-kabupaten.jpg?tr-f=webp'],
        category: { id: 1, name: 'Prestasi' },
        author: 'Admin Desa',
        created_at: new Date('2026-04-20T10:00:00'),
    },
    {
        id: 2,
        slug: 'juara-1-lomba-desa-wisata-budaya',
        title: 'Juara 1 Lomba Desa Wisata Budaya',
        description:
            'Apresiasi terhadap upaya pelestarian budaya tradisional yang dikemas dalam paket wisata edukasi.',
        content: `
      <p>Desa Sumberkejayan berhasil meraih juara pertama dalam Lomba Desa Wisata Budaya tingkat Kabupaten. Keberhasilan ini diraih berkat konsistensi desa dalam melestarikan seni pertunjukan tradisional dan kuliner khas yang menjadi daya tarik wisatawan.</p>
      <p>Program "Sabtu Berbudaya" yang melibatkan seluruh lapisan masyarakat dalam kegiatan seni menjadi kunci utama kemenangan ini. Juri mengapresiasi bagaimana budaya asli desa tetap eksis di tengah arus modernisasi.</p>
      <p>Penghargaan ini diharapkan mampu meningkatkan kunjungan wisatawan dan berdampak positif pada ekonomi kreatif warga desa.</p>
    `,
        images: ['https://ik.imagekit.io/rulls/sisfodes/demo/news/pesta-rakyat-dan-bazar-kuliner-tradisional.jpg?tr-f=webp'],
        category: { id: 1, name: 'Prestasi' },
        author: 'Panitia Wisata',
        created_at: new Date('2026-04-25T11:00:00'),
    },
]
