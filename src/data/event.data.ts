import type { Event } from '#/types/event'

export const events: Event[] = [
  {
    id: 1,
    title: 'Festival Budaya Bersih Desa',
    description:
      '<p>Festival tahunan ini merupakan bentuk rasa syukur warga atas hasil panen yang melimpah. Acara akan dimeriahkan dengan kirab tumpeng raksasa, pertunjukan seni tradisional lokal, dan doa bersama yang melibatkan seluruh elemen masyarakat desa dari berbagai dusun.</p><p>Kegiatan ini bertujuan untuk mempererat tali silaturahmi antarwarga sekaligus melestarikan adat istiadat yang telah turun-temurun. Seluruh warga diharapkan hadir dengan mengenakan pakaian adat atau batik khas daerah untuk menambah kekhidmatan acara.</p>',
    image:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
    date: new Date('2026-05-10T08:00:00Z'),
    time: '08.00 - 12.00 WIB',
    location: 'Lapangan Desa',
    created_by: 'Panitia Budaya',
    created_at: new Date('2026-04-18T09:00:00Z')
  },
  {
    id: 2,
    title: 'Musyawarah Perencanaan Pembangunan (Musrenbang)',
    description:
      '<p>Forum ini merupakan wadah bagi warga untuk menyalurkan aspirasi dan usulan pembangunan desa untuk tahun anggaran mendatang. Pembahasan akan fokus pada perbaikan infrastruktur jalan, drainase, serta program pemberdayaan ekonomi masyarakat yang menjadi skala prioritas desa.</p><p>Kehadiran tokoh masyarakat, ketua RT/RW, dan perwakilan pemuda sangat diharapkan agar rencana pembangunan yang disusun benar-benar mencerminkan kebutuhan riil di lapangan. Hasil musyawarah ini akan menjadi dasar penyusunan RKP Desa tahun depan.</p>',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    date: new Date('2026-05-15T13:00:00Z'),
    time: '13.00 - 15.00 WIB',
    location: 'Balai Desa',
    created_by: 'Sekretariat Desa',
    created_at: new Date('2026-04-18T10:30:00Z')
  },
  {
    id: 3,
    title: 'Pelatihan IT untuk Perangkat Desa',
    description:
      '<p>Dalam rangka mendukung transformasi digital, desa menyelenggarakan pelatihan intensif penggunaan perangkat lunak perkantoran dan manajemen sistem informasi desa. Pelatihan ini bertujuan untuk mempercepat proses pelayanan surat-menyurat dan pengelolaan data kependudukan secara digital.</p><p>Materi akan dibawakan oleh tenaga ahli IT yang berpengalaman di bidang administrasi publik. Dengan peningkatan kapasitas ini, diharapkan perangkat desa dapat bekerja lebih efisien, transparan, dan responsif terhadap kebutuhan layanan administrasi warga.</p>',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    date: new Date('2026-05-20T09:00:00Z'),
    time: '09.00 - 11.00 WIB',
    location: 'Ruang Latihan Desa',
    created_by: 'Divisi Pemberdayaan',
    created_at: new Date('2026-04-17T14:15:00Z')
  },
  {
    id: 4,
    title: 'Jalan Sehat dan Cek Kesehatan Gratis',
    description:
      '<p>Kegiatan jalan sehat ini diadakan untuk mempromosikan gaya hidup aktif bagi seluruh kelompok usia, mulai dari anak-anak hingga lansia. Rute perjalanan akan menyusuri area persawahan dan pemukiman warga yang asri, diikuti dengan pembagian doorprize menarik di garis finish.</p><p>Selain olahraga, tersedia pula stand cek kesehatan gratis yang bekerja sama dengan Puskesmas setempat. Warga dapat melakukan pengecekan tekanan darah, kadar gula darah, dan konsultasi kesehatan singkat tanpa dipungut biaya apapun.</p>',
    image:
      'https://images.unsplash.com/photo-1461891211039-496a921c7395?q=80&w=800&auto=format&fit=crop',
    date: new Date('2026-05-24T06:00:00Z'),
    time: '06.00 - 08.00 WIB',
    location: 'Pusat Kesehatan',
    created_by: 'Kader Kesehatan',
    created_at: new Date('2026-04-16T08:00:00Z')
  },
  {
    id: 5,
    title: 'Sosialisasi Keamanan Lingkungan (Siskamling)',
    description:
      '<p>Mengingat pentingnya menjaga kondusifitas wilayah, Polsek setempat bersama Babinsa akan mengadakan pertemuan sosialisasi mengenai revitalisasi sistem keamanan lingkungan. Fokus utama adalah pengaktifan kembali jadwal ronda malam dan koordinasi pelaporan jika ditemukan hal-hal mencurigakan.</p><p>Warga akan diberikan edukasi mengenai langkah-langkah preventif dalam menghadapi gangguan ketertiban umum. Partisipasi aktif seluruh kepala keluarga sangat krusial agar lingkungan desa tetap aman, tenang, dan terhindar dari tindak kriminalitas.</p>',
    image:
      'https://images.unsplash.com/photo-1541872703-74c5e443d1fe?q=80&w=800&auto=format&fit=crop',
    date: new Date('2026-06-02T19:30:00Z'),
    time: '19.30 - 21.30 WIB',
    location: 'Balai Desa',
    created_by: 'Keamanan Desa',
    created_at: new Date('2026-04-15T11:00:00Z')
  },
  {
    id: 6,
    title: 'Lomba Masak Olahan Pangan Lokal',
    description:
      '<p>Lomba ini diselenggarakan untuk menggali kreativitas ibu-ibu PKK dalam mengolah potensi pangan lokal seperti singkong, jagung, dan talas menjadi hidangan bergizi yang modern. Kriteria penilaian mencakup inovasi resep, penyajian (plating), serta kandungan nilai gizi dalam setiap porsi.</p><p>Hasil karya para peserta nantinya akan dipromosikan melalui katalog UMKM desa untuk membantu pemasaran produk pangan kreatif lokal. Acara ini diharapkan dapat meningkatkan ketahanan pangan keluarga sekaligus menambah nilai ekonomi bahan baku hasil pertanian desa.</p>',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    date: new Date('2026-06-10T10:00:00Z'),
    time: '10.00 - 12.00 WIB',
    location: 'Lapangan Desa',
    created_by: 'Penggerak PKK',
    created_at: new Date('2026-04-14T16:20:00Z')
  }
]
