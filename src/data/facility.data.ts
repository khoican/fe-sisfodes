import type { Facility } from "#/types/facility";

export const facilityData: Facility[] = [
  {
    id: "FAC-001",
    name: "SDN Sumberkejayan 01",
    category: "Pendidikan",
    address: "Jl. Pendidikan No. 12, Sumberkejayan",
    coordinates: { lat: -8.123456, lng: 113.654321 },
    description: "Sekolah Dasar Negeri utama di desa dengan fasilitas perpustakaan digital dan laboratorium komputer.",
    image: "https://images.unsplash.com/photo-1577891729319-663092288981?q=80&w=1000&auto=format&fit=crop",
    status: "Aktif",
    metadata: {
      "Akreditasi": "A",
      "Jumlah Guru": 18,
      "Jumlah Siswa": 245,
      "Luas Bangunan": "1200 m2"
    },
    last_updated: "2025-01-15"
  },
  {
    id: "FAC-002",
    name: "Puskesmas Pembantu (Pustu) Sehat Utama",
    category: "Kesehatan",
    address: "Jl. Kesehatan No. 5, Sumberkejayan",
    coordinates: { lat: -8.124567, lng: 113.655432 },
    description: "Pusat kesehatan pembantu yang melayani pemeriksaan rutin, imunisasi, dan layanan KIA.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
    status: "Aktif",
    metadata: {
      "Tenaga Medis": 4,
      "Layanan Utama": "Umum & KIA",
      "Jam Operasional": "08:00 - 14:00",
      "Ambulans": "Tersedia"
    },
    last_updated: "2025-01-20"
  },
  {
    id: "FAC-003",
    name: "Masjid Agung Baitul Makmur",
    category: "Peribadatan",
    address: "Jl. Utama Desa, RT 02/RW 03, Sumberkejayan",
    coordinates: { lat: -8.125678, lng: 113.656543 },
    description: "Masjid utama desa yang juga berfungsi sebagai pusat kegiatan keagamaan dan sosial kemasyarakatan.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1000&auto=format&fit=crop",
    status: "Aktif",
    metadata: {
      "Kapasitas Jemaah": 800,
      "Luas Area": "2500 m2",
      "Fasilitas": "TPQ, Aula Serbaguna",
      "Tahun Berdiri": 1985
    },
    last_updated: "2025-01-10"
  },
  {
    id: "FAC-004",
    name: "Stadion Mini Desa Sumberkejayan",
    category: "Olahraga",
    address: "Jl. Pemuda No. 1, Sumberkejayan",
    coordinates: { lat: -8.126789, lng: 113.657654 },
    description: "Fasilitas olahraga terbuka yang terdiri dari lapangan sepak bola, lintasan lari, dan lapangan voli.",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1000&auto=format&fit=crop",
    status: "Renovasi",
    metadata: {
      "Fasilitas Utama": "Lapangan Sepak Bola",
      "Kapasitas Tribun": 200,
      "Penerangan Malam": "Tersedia",
      "Biaya Sewa": "Gratis untuk Warga"
    },
    last_updated: "2025-02-01"
  },
  {
    id: "FAC-005",
    name: "Pasar Tradisional Desa",
    category: "Ekonomi",
    address: "Jl. Niaga No. 8, Sumberkejayan",
    coordinates: { lat: -8.127890, lng: 113.658765 },
    description: "Pusat ekonomi warga desa yang menyediakan kebutuhan pokok dan hasil pertanian lokal.",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1000&auto=format&fit=crop",
    status: "Aktif",
    metadata: {
      "Jumlah Kios": 45,
      "Hari Pasaran": "Senin & Kamis",
      "Luas Area": "1500 m2",
      "Pengelola": "BUMDes"
    },
    last_updated: "2025-01-25"
  },
  {
    id: "FAC-006",
    name: "Balai Desa Sumberkejayan",
    category: "Layanan Publik",
    address: "Jl. Raya Pusat No. 1, Sumberkejayan",
    coordinates: { lat: -8.123000, lng: 113.654000 },
    description: "Kantor pusat pemerintahan desa dan pusat administrasi kependudukan.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    status: "Aktif",
    metadata: {
      "Layanan Utama": "Administrasi & Umum",
      "Jam Layanan": "08:00 - 16:00",
      "Fasilitas": "Free Wi-Fi, Ruang Tunggu AC",
      "Tahun Renovasi": 2023
    },
    last_updated: "2025-01-05"
  },
  {
    id: "FAC-007",
    name: "Taman Ramah Anak Sumberkejayan",
    category: "Ruang Terbuka Hijau",
    address: "Kompleks Perumahan Desa, Sumberkejayan",
    coordinates: { lat: -8.128000, lng: 113.659000 },
    description: "Ruang terbuka hijau yang dilengkapi dengan wahana permainan anak dan area santai keluarga.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000&auto=format&fit=crop",
    status: "Aktif",
    metadata: {
      "Luas Taman": "500 m2",
      "Wahana": "Perosotan, Ayunan, Jungkat-jungkit",
      "Fasilitas Umum": "Toilet, Gazebo",
      "Keamanan": "CCTV 24 Jam"
    },
    last_updated: "2025-01-30"
  }
];
