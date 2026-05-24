import type { IPublicationCategory } from '#/types/IPublicationCategory'

export const publicationData: IPublicationCategory[] = [
    {
        slug: 'rpjmdes',
        name: 'RPJMDes',
        documents: [
            {
                id: 'rpjmdes-2020-2026',
                title: 'Rencana Pembangunan Jangka Menengah Desa (RPJMDes) 2020-2026',
                description:
                    'Dokumen perencanaan strategis desa untuk jangka waktu 6 tahun.',
                file_url: 'https://example.com/documents/rpjmdes-2020-2026.pdf',
                file_type: 'pdf',
                file_size: '5.2 MB',
                created_at: '2020-03-12',
            },
        ],
    },
    {
        slug: 'rkpdes',
        name: 'RKPDes',
        documents: [
            {
                id: 'rkpdes-2026',
                title: 'Rencana Kerja Pemerintah Desa (RKPDes) Tahun 2026',
                description:
                    'Dokumen perencanaan pembangunan desa untuk periode tahun anggaran 2026.',
                file_url: 'https://example.com/documents/rkpdes-2026.pdf',
                file_type: 'pdf',
                file_size: '2.4 MB',
                created_at: '2026-01-15',
            },
            {
                id: 'rkpdes-2025',
                title: 'Rencana Kerja Pemerintah Desa (RKPDes) Tahun 2025',
                description:
                    'Dokumen perencanaan pembangunan desa untuk periode tahun anggaran 2025.',
                file_url: 'https://example.com/documents/rkpdes-2025.pdf',
                file_type: 'pdf',
                file_size: '2.1 MB',
                created_at: '2025-01-10',
            },
        ],
    },
    {
        slug: 'rapbdes',
        name: 'RAPBDes',
        documents: [
            {
                id: 'rapbdes-2026',
                title: 'Rancangan APBDes Tahun Anggaran 2026',
                description:
                    'Rancangan peraturan desa tentang Anggaran Pendapatan dan Belanja Desa tahun 2026.',
                file_url: 'https://example.com/documents/rapbdes-2026.pdf',
                file_type: 'pdf',
                file_size: '1.8 MB',
                created_at: '2025-12-20',
            },
        ],
    },
    {
        slug: 'bank-data',
        name: 'Bank Data',
        documents: [
            {
                id: 'regulasi-desa-01',
                title: 'Peraturan Desa No. 1 Tahun 2024 tentang Ketertiban Umum',
                description:
                    'Pedoman norma dan aturan ketertiban bagi seluruh warga desa.',
                file_url: 'https://example.com/documents/perdes-01-2024.pdf',
                file_type: 'pdf',
                file_size: '1.2 MB',
                created_at: '2024-02-01',
            },
            {
                id: 'form-layanan-01',
                title: 'Formulir Permohonan KTP Baru',
                description:
                    'Formulir resmi untuk pengajuan pencetakan KTP baru.',
                file_url: 'https://example.com/documents/form-ktp.pdf',
                file_type: 'pdf',
                file_size: '450 KB',
                created_at: '2023-05-10',
            },
            {
                id: 'laporan-tahunan-2024',
                title: 'Laporan Penyelenggaraan Pemerintahan Desa (LPPD) 2024',
                description:
                    'Laporan pertanggungjawaban kinerja pemerintah desa selama tahun 2024.',
                file_url: 'https://example.com/documents/lppd-2024.pdf',
                file_type: 'pdf',
                file_size: '3.5 MB',
                created_at: '2025-03-30',
            },
        ],
    },
]
