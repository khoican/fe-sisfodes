import type { Institution } from '#/types/institution'

export const institutionData: Institution[] = [
  {
    id: 'INST-001',
    slug: 'bpd',
    name: 'BPD',
    full_name: 'Badan Permusyawaratan Desa',
    description:
      'Lembaga yang melaksanakan fungsi pemerintahan yang anggotanya merupakan wakil dari penduduk desa berdasarkan keterwakilan wilayah.',
    logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/official/bpd-logo.png?tr-f=webp',
    vision: 'Terwujudnya BPD yang aspiratif, transparan, dan akuntabel.',
    mission: [
      'Menggali dan menampung aspirasi masyarakat.',
      'Melakukan pengawasan kinerja Kepala Desa.',
      'Membahas dan menyepakati rancangan Peraturan Desa.'
    ],
    functions: ['Fungsi Legislasi', 'Fungsi Pengawasan', 'Fungsi Aspirasi'],
    members: [
      {
        id: 101,
        name: 'H. Ahmad Subarjo',
        position: 'Ketua',
        nip: '-',
        image:
          'https://ik.imagekit.io/rulls/sisfodes/demo/official/member-1.png?tr-f=webp',
        period: '2021-2027'
      },
      {
        id: 102,
        name: 'Slamet Raharjo',
        position: 'Wakil Ketua',
        nip: '-',
        image:
          'https://ik.imagekit.io/rulls/sisfodes/demo/official/member-2.png?tr-f=webp',
        period: '2021-2027'
      }
    ],
    last_updated: '2025-01-10'
  },
  {
    id: 'INST-002',
    slug: 'lpm',
    name: 'LPM',
    full_name: 'Lembaga Pemberdayaan Masyarakat',
    description:
      'Mitra Pemerintah Desa dalam menampung dan menyalurkan aspirasi masyarakat dalam pembangunan.',
    logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/official/lpm-logo.png?tr-f=webp',
    vision: 'Pemberdayaan masyarakat yang mandiri dan berkelanjutan.',
    mission: [
      'Meningkatkan partisipasi gotong royong.',
      'Menyusun rencana pembangunan partisipatif.'
    ],
    tasks: [
      'Menyusun rencana pembangunan.',
      'Menggerakkan swadaya masyarakat.'
    ],
    members: [
      {
        id: 201,
        name: 'Bambang Wijanarko',
        position: 'Ketua',
        nip: '-',
        image:
          'https://ik.imagekit.io/rulls/sisfodes/demo/official/member-4.png?tr-f=webp',
        period: '2022-2027'
      }
    ],
    last_updated: '2025-02-05'
  },
  {
    id: 'INST-003',
    slug: 'pkk',
    name: 'PKK',
    full_name: 'Pemberdayaan dan Kesejahteraan Keluarga',
    description:
      'Gerakan pembangunan masyarakat yang tumbuh dari bawah dengan wanita sebagai penggeraknya.',
    logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/official/pkk-logo.png?tr-f=webp',
    vision:
      'Terwujudnya keluarga sehat, cerdas, berdaya, beriman dan bertaqwa.',
    mission: [
      'Meningkatkan mental spiritual.',
      'Meningkatkan pendidikan dan keterampilan.',
      'Meningkatkan ekonomi keluarga.'
    ],
    members: [
      {
        id: 301,
        name: 'Ny. Sugeng Purnomo',
        position: 'Ketua',
        nip: '-',
        image:
          'https://ik.imagekit.io/rulls/sisfodes/demo/official/staff.png?tr-f=webp',
        period: '2019-2028'
      }
    ],
    last_updated: '2025-01-20'
  },
  {
    id: 'INST-004',
    slug: 'karang-taruna',
    name: 'Karang Taruna',
    full_name: 'Karang Taruna Desa Sumberkejayan',
    description:
      'Wadah pengembangan generasi muda yang tumbuh atas dasar kesadaran dan tanggung jawab sosial.',
    logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/official/karang-taruna-logo.png?tr-f=webp',
    members: [
      {
        id: 401,
        name: 'Rizky Pratama',
        position: 'Ketua',
        nip: '-',
        image:
          'https://ik.imagekit.io/rulls/sisfodes/demo/official/official-3.png?tr-f=webp',
        period: '2023-2028'
      }
    ],
    last_updated: '2025-01-15'
  },
  {
    id: 'INST-005',
    slug: 'posyandu',
    name: 'Posyandu',
    full_name: 'Pos Pelayanan Terpadu',
    description:
      'Kegiatan kesehatan dasar yang diselenggarakan dari, oleh dan untuk masyarakat.',
    logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/official/posyandu-logo.png?tr-f=webp',
    members: [
      {
        id: 501,
        name: 'Siti Maryam',
        position: 'Koordinator',
        nip: '-',
        image:
          'https://ik.imagekit.io/rulls/sisfodes/demo/official/official-5.png?tr-f=webp',
        period: '2025-2026'
      }
    ],
    last_updated: '2025-01-15'
  },
  {
    id: 'INST-006',
    slug: 'bumdes',
    name: 'BUMDes',
    full_name: 'Badan Usaha Milik Desa',
    description:
      'Lembaga ekonomi desa yang mengelola potensi desa untuk kesejahteraan masyarakat.',
    logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/official/bumdes-logo.png?tr-f=webp',
    members: [
      {
        id: 601,
        name: 'Dedi Kurniawan',
        position: 'Direktur',
        nip: '-',
        image:
          'https://ik.imagekit.io/rulls/sisfodes/demo/official/official-4.png?tr-f=webp',
        period: '2024-2029'
      }
    ],
    last_updated: '2025-01-15'
  },
  {
    id: 'INST-007',
    slug: 'linmas',
    name: 'Linmas',
    full_name: 'Perlindungan Masyarakat',
    description:
      'Satuan tugas yang membantu dalam penanggulangan bencana dan keamanan desa.',
    logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/official/linmas-logo.png?tr-f=webp',
    members: [
      {
        id: 701,
        name: 'Supriyadi',
        position: 'Danton',
        nip: '-',
        image:
          'https://ik.imagekit.io/rulls/sisfodes/demo/official/official-1.png?tr-f=webp',
        period: '2025-2026'
      }
    ],
    last_updated: '2025-01-15'
  },
  {
    id: 'INST-008',
    slug: 'lad',
    name: 'LAD',
    full_name: 'Lembaga Adat Desa',
    description:
      'Lembaga yang bertugas melestarikan adat istiadat dan nilai budaya lokal.',
    logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/official/lad-logo.png?tr-f=webp',
    members: [],
    last_updated: '2025-01-15'
  },
  {
    id: 'INST-009',
    slug: 'koperasi-merah-putih',
    name: 'Koperasi',
    full_name: 'Koperasi Merah Putih',
    description:
      'Koperasi desa yang menyediakan layanan simpan pinjam dan kebutuhan pokok warga.',
    logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/official/koperasi-logo.png?tr-f=webp',
    members: [],
    last_updated: '2025-01-15'
  },
  {
    id: 'INST-010',
    slug: 'sppg',
    name: 'SPPG',
    full_name: 'Satuan Pelayanan Pemenuhan Gizi',
    description: 'Layanan khusus desa untuk pemenuhan gizi anak dan lansia.',
    logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/official/sppg-logo.png?tr-f=webp',
    members: [],
    last_updated: '2025-01-15'
  },
  {
    id: 'INST-011',
    slug: 'pendidikan',
    name: 'Pendidikan',
    full_name: 'Lembaga Pendidikan Desa',
    description: 'Pengelola PAUD, TK, dan pusat belajar masyarakat desa.',
    logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/official/education-logo.png?tr-f=webp',
    members: [],
    last_updated: '2025-01-15'
  },
  {
    id: 'INST-012',
    slug: 'kesehatan',
    name: 'Kesehatan',
    full_name: 'Lembaga Kesehatan Desa',
    description:
      'Kader kesehatan desa yang aktif dalam pencegahan penyakit dan pola hidup sehat.',
    logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/official/health-logo.png?tr-f=webp',
    members: [],
    last_updated: '2025-01-15'
  }
]
