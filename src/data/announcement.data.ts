import type { Announcement } from "#/types/announcement";

export const announcements: Announcement[] = [
  {
    id: 1,
    title: 'Kerja Bakti Massal Kebersihan Lingkungan',
    description:
      '<p>Dalam rangka menyambut musim penghujan dan menjaga kesehatan lingkungan, Pemerintah Desa mengundang seluruh warga untuk berpartisipasi dalam kegiatan kerja bakti massal. Fokus utama kegiatan ini adalah pembersihan saluran irigasi dan pemangkasan dahan pohon yang berisiko tumbang di sepanjang jalan utama desa.</p><p>Kegiatan akan dilaksanakan pada hari Minggu besok mulai pukul 07.00 WIB. Warga diharapkan membawa peralatan kebersihan masing-masing dari rumah. Mari kita wujudkan desa yang bersih, sehat, dan nyaman untuk ditinggali bersama keluarga.</p>',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop',
    created_by: 'Admin Desa',
    created_at: new Date('2026-04-18T08:00:00Z')
  },
  {
    id: 2,
    title: 'Pendaftaran Program Bantuan Modal UMKM',
    description:
      '<p>Pemerintah Desa secara resmi membuka pendaftaran bagi para pelaku usaha mikro, kecil, dan menengah (UMKM) untuk mendapatkan bantuan modal usaha tahap kedua tahun 2026. Program ini bertujuan untuk mendorong pertumbuhan ekonomi lokal dan meningkatkan daya saing produk-produk asli desa di pasar yang lebih luas.</p><p>Para pelaku usaha yang berminat wajib mengumpulkan berkas persyaratan berupa fotokopi KTP, KK, dan foto produk usaha ke kantor Balai Desa pada jam kerja. Pendaftaran akan ditutup secara otomatis setelah kuota terpenuhi atau paling lambat akhir bulan ini.</p>',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    created_by: 'Sekretaris Desa',
    created_at: new Date('2026-04-17T10:30:00Z')
  },
  {
    id: 3,
    title: 'Sosialisasi Pencegahan Stunting bagi Ibu Hamil',
    description:
      '<p>Kesehatan ibu dan anak adalah prioritas utama kita. Puskesmas Pembantu desa akan mengadakan sesi sosialisasi mengenai pentingnya pemenuhan gizi seimbang selama masa kehamilan guna mencegah risiko stunting pada anak sejak dini. Acara ini juga akan disertai dengan pemeriksaan kesehatan gratis dan pemberian suplemen tambahan.</p><p>Acara ini sangat disarankan bagi pasangan muda dan ibu hamil di lingkungan desa. Melalui pengetahuan yang tepat, kita dapat memastikan generasi penerus desa tumbuh dengan cerdas, kuat, dan sehat secara jasmani maupun rohani.</p>',
    image:
      'https://images.unsplash.com/photo-1584362946444-1e6632490530?q=80&w=800&auto=format&fit=crop',
    created_by: 'Kader Posyandu',
    created_at: new Date('2026-04-16T14:15:00Z')
  },
  {
    id: 4,
    title: 'Pembaruan Sistem Administrasi Kependudukan Digital',
    description:
      '<p>Untuk meningkatkan kualitas pelayanan publik, Desa kini mulai menerapkan sistem administrasi kependudukan berbasis digital. Dengan sistem baru ini, warga dapat mengurus surat pengantar, pembuatan KTP, dan dokumen lainnya secara lebih cepat melalui aplikasi atau website resmi desa tanpa perlu mengantre lama di loket.</p><p>Bagi warga yang masih kesulitan menggunakan perangkat digital, petugas administrasi di Balai Desa siap memberikan panduan dan bantuan langsung. Inovasi ini diharapkan dapat menciptakan transparansi dan efisiensi dalam setiap urusan birokrasi di lingkungan pemerintahan desa kita.</p>',
    image:
      'https://images.unsplash.com/photo-1554224155-16974398755d?q=80&w=800&auto=format&fit=crop',
    created_by: 'Admin IT',
    created_at: new Date('2026-04-15T09:00:00Z')
  },
  {
    id: 5,
    title: 'Lomba Desain Logo Desa Menuju Desa Mandiri',
    description:
      '<p>Kami mengajak seluruh pemuda kreatif di desa untuk menyumbangkan ide terbaiknya melalui lomba desain logo resmi desa. Logo yang terpilih nantinya akan digunakan dalam berbagai materi branding desa, mulai dari website, produk UMKM unggulan, hingga dokumen resmi pemerintahan sebagai simbol identitas desa mandiri.</p><p>Kriteria penilaian meliputi orisinalitas, keterkaitan dengan filosofi sejarah desa, serta estetika visual yang modern. Pemenang utama akan mendapatkan penghargaan serta insentif menarik yang akan diserahkan langsung oleh Kepala Desa pada acara perayaan kemerdekaan mendatang.</p>',
    image:
      'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=800&auto=format&fit=crop',
    created_by: 'Karang Taruna',
    created_at: new Date('2026-04-14T11:45:00Z')
  },
  {
    id: 6,
    title: 'Informasi Penyaluran Pupuk Subsidi Musim Tanam',
    description:
      '<p>Diberitahukan kepada seluruh kelompok tani desa bahwa penyaluran pupuk subsidi untuk periode musim tanam kali ini akan mulai didistribusikan melalui Koperasi Desa mulai Senin depan. Distribusi dilakukan berdasarkan data Rencana Definitif Kebutuhan Kelompok (RDKK) yang telah diverifikasi sebelumnya oleh petugas lapangan.</p><p>Para ketua kelompok tani diharapkan segera melakukan koordinasi untuk pengambilan jatah pupuk agar tidak terjadi penumpukan di gudang. Pastikan setiap petani menerima haknya sesuai dengan luas lahan yang terdaftar guna mengoptimalkan hasil panen desa tahun ini.</p>',
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop',
    created_by: 'Ketua Gapoktan',
    created_at: new Date('2026-04-13T16:20:00Z')
  }
]
