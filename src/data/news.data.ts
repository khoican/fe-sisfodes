import type { News } from '#/types/news'

export const news: News[] = [
  {
    id: 1,
    slug: 'pembangunan-jembatan-desa-selesai-lebih-cepat',
    title: 'Pembangunan Jembatan Desa Selesai Lebih Cepat',
    description:
      'Proyek jembatan utama penghubung antar dusun resmi beroperasi dua minggu mendahului target.',
    content: `
      <p>Proyek pembangunan jembatan utama yang menghubungkan Dusun Krajan dan Dusun Sumber akhirnya resmi selesai dua minggu lebih awal dari jadwal yang ditentukan. Jembatan beton dengan panjang 12 meter ini kini sudah bisa dilalui oleh kendaraan roda empat maupun kendaraan berat pengangkut hasil tani warga setempat.</p>
      <p>Kepala Desa menyatakan bahwa percepatan pembangunan ini terjadi berkat gotong royong warga yang membantu para pekerja konstruksi setiap akhir pekan. Selain itu, suplai material dari vendor lokal yang stabil juga menjadi faktor pendukung utama lancarnya proyek ini tanpa kendala teknis yang berarti.</p>
      <p>Dengan beroperasinya jembatan ini, akses ekonomi warga diprediksi akan meningkat signifikan karena waktu tempuh menuju pasar induk kini terpangkas hingga 30 menit. Pemerintah desa berharap warga dapat menjaga fasilitas ini dengan baik agar manfaatnya bisa dirasakan hingga generasi mendatang.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1696332865227-904a004c9c0c?w=800&auto=format&fit=crop',
    category: { id: 2, name: 'Infrastruktur' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'John Doe',
    created_at: new Date('2026-04-10T09:00:00')
  },
  {
    id: 2,
    slug: 'pelatihan-digital-marketing-umkm-desa',
    title: 'Pelatihan Digital Marketing untuk UMKM Desa',
    description:
      'RULLSTUDIO berkolaborasi dengan desa memberikan pelatihan strategi online bagi pelaku usaha lokal.',
    content: `
      <p>Dalam upaya digitalisasi ekonomi pedesaan, RULLSTUDIO berkolaborasi dengan perangkat desa sukses menyelenggarakan pelatihan pemasaran digital bagi pelaku UMKM lokal. Pelatihan ini diikuti oleh puluhan peserta yang didominasi oleh pengusaha kerajinan tangan dan produk makanan olahan khas desa.</p>
      <p>Materi yang disampaikan meliputi teknik fotografi produk menggunakan smartphone, cara mengelola akun bisnis di media sosial, hingga dasar-dasar pembuatan landing page sederhana untuk branding produk. Para peserta terlihat antusias saat mempraktikkan langsung cara mengunggah konten yang menarik audiens luas.</p>
      <p>Pemerintah desa berkomitmen untuk terus memantau perkembangan UMKM pasca-pelatihan ini melalui pendampingan berkala. Diharapkan dengan hadirnya platform digital, produk unggulan desa tidak hanya dikenal di lingkup lokal, tetapi juga mampu menjangkau pasar nasional bahkan internasional.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
    category: { id: 3, name: 'Ekonomi' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'John Doe',
    created_at: new Date('2026-04-12T10:30:00')
  },
  {
    id: 3,
    slug: 'pesta-rakyat-dan-bazar-kuliner-tradisional',
    title: 'Pesta Rakyat dan Bazar Kuliner Tradisional',
    description:
      'Perayaan hari jadi desa ke-50 dimeriahkan dengan kuliner langka dan pertunjukan budaya.',
    content: `
      <p>Peringatan hari jadi desa yang ke-50 tahun ini berlangsung sangat meriah dengan digelarnya Pesta Rakyat di lapangan utama desa. Acara dibuka dengan pawai budaya yang menampilkan pakaian adat dari berbagai daerah serta pertunjukan kesenian barongsai dan kuda lumping yang memukau penonton.</p>
      <p>Salah satu daya tarik utama acara ini adalah Bazar Kuliner Tradisional yang menyajikan masakan-masakan langka khas desa yang sudah sulit ditemukan sehari-hari. Puluhan stan kuliner milik warga ludes terjual hanya dalam waktu beberapa jam saja karena tingginya minat pengunjung dari luar daerah.</p>
      <p>Selain hiburan, acara ini juga menjadi ajang silaturahmi akbar bagi seluruh warga desa, baik yang menetap maupun yang sedang pulang dari perantauan. Pesta rakyat ini ditutup dengan pagelaran wayang kulit semalam suntuk sebagai bentuk pelestarian nilai-nilai luhur budaya nusantara.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1621590648846-72dbd5119a83?w=800&auto=format&fit=crop',
    category: { id: 6, name: 'Sosial' },
    source: { id: 2, name: 'Berita Lokal' },
    author: 'John Doe',
    created_at: new Date('2026-04-14T15:00:00')
  },
  {
    id: 4,
    slug: 'program-imunisasi-serentak-posyandu-melati',
    title: 'Program Imunisasi Serentak di Posyandu Melati',
    description:
      'Upaya preventif stunting dan penyakit menular melalui vaksinasi dan pemantauan gizi anak.',
    content: `
      <p>Dinas Kesehatan setempat melalui Puskesmas pembantu melaksanakan program imunisasi serentak bagi balita di Posyandu Melati pada Rabu pagi. Program ini bertujuan untuk memastikan setiap anak mendapatkan perlindungan maksimal dari penyakit-penyakit menular yang dapat dicegah dengan vaksinasi.</p>
      <p>Selain pemberian vaksin, petugas medis juga melakukan penimbangan berat badan dan pengukuran tinggi badan anak sebagai bagian dari pemantauan gizi rutin. Hal ini dilakukan untuk mendeteksi secara dini potensi stunting pada anak dan memberikan intervensi gizi jika ditemukan kasus yang memerlukan perhatian khusus.</p>
      <p>Para ibu yang hadir juga diberikan penyuluhan mengenai pentingnya pemberian ASI eksklusif dan menu MPASI sehat berbasis bahan lokal yang murah namun bergizi tinggi. Kesadaran masyarakat akan kesehatan anak di desa ini terus meningkat seiring dengan intensifnya program kunjungan rumah oleh kader kesehatan.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1576766125535-b04e15fd0273?w=800&auto=format&fit=crop',
    category: { id: 7, name: 'Kesehatan' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'John Doe',
    created_at: new Date('2026-04-15T08:00:00')
  },
  {
    id: 5,
    slug: 'kerja-bakti-massal-antisipasi-musim-hujan',
    title: 'Kerja Bakti Massal Antisipasi Musim Hujan',
    description:
      'Warga bahu-membahu membersihkan saluran irigasi guna mencegah banjir di area persawahan.',
    content: `
      <p>Menghadapi datangnya musim hujan dengan intensitas tinggi, pemerintah desa menginstruksikan seluruh warga untuk melakukan kerja bakti massal di lingkungan masing-masing. Fokus utama dari kegiatan ini adalah pembersihan saluran irigasi yang tersumbat sampah dan pendangkalan drainase di area pemukiman.</p>
      <p>Kegiatan yang dimulai sejak pukul tujuh pagi ini diikuti oleh bapak-bapak, pemuda, hingga anak-anak yang membantu mengumpulkan sampah plastik dan dedaunan kering. Semangat gotong royong terlihat sangat kental saat warga bahu-membahu memperbaiki tanggul kecil yang mulai retak di pinggiran sungai.</p>
      <p>Langkah preventif ini diharapkan dapat meminimalisir risiko banjir yang sering melanda area persawahan saat debit air meningkat drastis. Kepala desa juga mengingatkan warga untuk tidak lagi membuang sampah sembarangan ke sungai demi kelestarian ekosistem dan keamanan desa bersama.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop',
    category: { id: 4, name: 'Lingkungan' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'John Doe',
    created_at: new Date('2026-04-15T07:00:00')
  },
  {
    id: 6,
    slug: 'beasiswa-pendidikan-untuk-anak-berprestasi',
    title: 'Beasiswa Pendidikan untuk Anak Berprestasi',
    description:
      'Pemerintah desa meluncurkan program Desa Cerdas guna mencetak SDM unggul di perguruan tinggi.',
    content: `
      <p>Pemerintah desa secara resmi meluncurkan program 'Desa Cerdas' yang memberikan beasiswa penuh bagi anak-anak desa yang berhasil menembus perguruan tinggi negeri. Dana beasiswa ini bersumber dari alokasi khusus dana desa tahun anggaran 2026 yang telah disetujui dalam musyawarah perencanaan pembangunan desa.</p>
      <p>Seleksi beasiswa dilakukan secara transparan dengan mempertimbangkan prestasi akademik serta kondisi ekonomi keluarga calon penerima. Untuk tahap pertama, terpilih sepuluh mahasiswa yang mendapatkan bantuan biaya kuliah hingga lulus serta uang saku bulanan untuk menunjang kegiatan perkuliahan mereka.</p>
      <p>Program ini merupakan investasi jangka panjang desa untuk mencetak sumber daya manusia yang unggul dan kompetitif di masa depan. Diharapkan setelah lulus nanti, para penerima beasiswa ini dapat kembali ke desa untuk membantu membangun daerahnya masing-masing dengan ilmu yang telah didapat.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1542315099045-93937d70c67a?w=800&auto=format&fit=crop',
    category: { id: 8, name: 'Pendidikan' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'John Doe',
    created_at: new Date('2026-04-16T11:45:00')
  },
  {
    id: 7,
    slug: 'inovasi-pengolahan-sampah-menjadi-pupuk-organik',
    title: 'Inovasi Pengolahan Sampah Menjadi Pupuk Organik',
    description:
      'Kelompok tani kembangkan sistem fermentasi limbah dapur guna tekan biaya produksi pertanian.',
    content: `
      <p>Kelompok Tani Muda Desa Maju Jaya berhasil mengembangkan inovasi baru berupa sistem pengolahan sampah organik rumah tangga menjadi pupuk cair dan kompos. Inovasi ini berawal dari kegelisahan warga akan menumpuknya limbah dapur yang mencemari lingkungan jika hanya dibuang begitu saja.</p>
      <p>Proses pengolahan menggunakan metode fermentasi dengan bantuan mikroorganisme lokal yang dikembangkan secara mandiri oleh tim kreatif desa. Hasilnya, pupuk yang dihasilkan telah diuji coba pada lahan percontohan dan terbukti mampu meningkatkan kualitas tanaman sayuran serta menekan biaya produksi pertanian hingga 40%.</p>
      <p>Ke depannya, unit pengolahan sampah ini akan dikelola secara profesional melalui Badan Usaha Milik Desa (BUMDes) agar produksinya bisa dilakukan dalam skala lebih besar. Inovasi ini tidak hanya menyelesaikan masalah lingkungan, tetapi juga menciptakan lapangan kerja baru bagi warga desa.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1717667745830-de42bb75a4fa?w=800&auto=format&fit=crop',
    category: { id: 4, name: 'Lingkungan' },
    source: { id: 2, name: 'Berita Lokal' },
    author: 'John Doe',
    created_at: new Date('2026-04-17T13:20:00')
  },
  {
    id: 8,
    slug: 'lomba-desa-bersih-tingkat-kabupaten',
    title: 'Lomba Desa Bersih Tingkat Kabupaten',
    description:
      'Desa terpilih mewakili kecamatan dalam evaluasi sanitasi dan partisipasi sehat lingkungan.',
    content: `
      <p>Desa kita terpilih mewakili kecamatan dalam ajang tahunan Lomba Desa Bersih dan Sehat tingkat kabupaten tahun 2026. Penilaian lomba meliputi berbagai aspek, mulai dari kebersihan infrastruktur publik, pengelolaan sanitasi lingkungan, hingga partisipasi aktif warga dalam menjaga keasrian taman desa.</p>
      <p>Tim juri dari tingkat kabupaten melakukan kunjungan mendadak untuk memverifikasi kesesuaian laporan dengan kondisi riil di lapangan. Mereka sangat mengapresiasi inovasi 'Rumah Bibit' dan sistem pengelolaan air limbah mandiri yang telah diterapkan oleh warga di setiap lingkungan rukun tetangga.</p>
      <p>Kemenangan bukan merupakan tujuan utama dari keikutsertaan lomba ini, melainkan sebagai pemicu semangat warga untuk tetap konsisten menjaga pola hidup sehat. Pengumuman pemenang akan dilaksanakan pada malam puncak peringatan Hari Lingkungan Hidup sedunia bulan depan.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1647184223407-ef8273a6822c?w=800&auto=format&fit=crop',
    category: { id: 4, name: 'Lingkungan' },
    source: { id: 3, name: 'Suara Rakyat' },
    author: 'John Doe',
    created_at: new Date('2026-04-17T16:00:00')
  },
  {
    id: 9,
    slug: 'sosialisasi-keamanan-digital-bagi-remaja',
    title: 'Sosialisasi Keamanan Digital bagi Remaja',
    description:
      'Edukasi etika berinternet dan pencegahan siber bagi generasi muda di lingkungan desa.',
    content: `
      <p>Merespons tingginya penggunaan media sosial di kalangan remaja desa, Karang Taruna menyelenggarakan seminar sehari bertema keamanan digital dan etika berinternet. Seminar ini bertujuan untuk memberikan pemahaman kepada generasi muda agar terhindar dari bahaya perundungan siber dan penyebaran informasi palsu.</p>
      <p>Narasumber yang hadir menjelaskan pentingnya menjaga kerahasiaan data pribadi dan cara memverifikasi kebenaran sebuah berita sebelum membagikannya ke orang lain. Para remaja juga diajarkan bagaimana memanfaatkan internet secara produktif, seperti belajar keahlian baru atau membangun jejaring positif.</p>
      <p>Kegiatan ini mendapat dukungan penuh dari para orang tua yang merasa khawatir akan dampak negatif dunia maya terhadap perilaku anak-anak mereka. Seminar diakhiri dengan deklarasi bersama para remaja desa untuk berkomitmen menciptakan lingkungan digital yang sehat, aman, dan inspiratif.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop',
    category: { id: 8, name: 'Pendidikan' },
    source: { id: 2, name: 'Berita Lokal' },
    author: 'John Doe',
    created_at: new Date('2026-04-18T09:15:00')
  },
  {
    id: 10,
    slug: 'panen-raya-padi-organik-desa-sukamaju',
    title: 'Panen Raya Padi Organik Desa Sukamaju',
    description:
      'Kualitas beras organik meningkat seiring revitalisasi irigasi dan penggunaan pupuk mandiri.',
    content: `
      <p>Musim panen tahun ini menjadi momen yang sangat membahagiakan bagi para petani padi di Desa Sukamaju karena hasil panen meningkat drastis. Penggunaan pupuk organik secara konsisten selama dua tahun terakhir mulai menunjukkan hasil nyata dengan kualitas butiran padi yang lebih bersih dan bernas.</p>
      <p>Sistem pengairan subak yang telah direvitalisasi tahun lalu juga berperan penting dalam memastikan pasokan air yang merata bahkan saat cuaca tidak menentu. Harga jual padi organik di tingkat tengkulak pun terpantau stabil, memberikan keuntungan yang lebih baik dibandingkan dengan hasil tani konvensional.</p>
      <p>Pemerintah desa berencana untuk mematenkan beras organik Sukamaju sebagai produk unggulan daerah agar memiliki nilai tawar yang lebih tinggi di pasar retail modern. Dengan keberhasilan panen raya ini, kesejahteraan para petani diharapkan dapat terus meningkat secara berkelanjutan.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1599385108614-86b8fce547ef?w=800&auto=format&fit=crop',
    category: { id: 1, name: 'Pertanian' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'John Doe',
    created_at: new Date('2026-04-18T10:00:00')
  },
  {
    id: 11,
    slug: 'kerja-bakti-massal-kebersihan-lingkungan',
    title: 'Kerja Bakti Massal Kebersihan Lingkungan',
    description:
      'Pemerintah Desa mengundang warga untuk kerja bakti massal membersihkan saluran irigasi dan memangkas dahan berisiko.',
    content:
      '<p>Dalam rangka menyambut musim penghujan dan menjaga kesehatan lingkungan, Pemerintah Desa mengundang seluruh warga untuk berpartisipasi dalam kegiatan kerja bakti massal. Fokus utama kegiatan ini adalah pembersihan saluran irigasi dan pemangkasan dahan pohon yang berisiko tumbang di sepanjang jalan utama desa.</p><p>Kegiatan akan dilaksanakan pada hari Minggu besok mulai pukul 07.00 WIB. Warga diharapkan membawa peralatan kebersihan masing-masing dari rumah. Mari kita wujudkan desa yang bersih, sehat, dan nyaman untuk ditinggali bersama keluarga.</p>',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop',
    category: { id: 9, name: 'Pengumuman' },
    source: { id: 4, name: 'Pemerintah Desa' },
    author: 'Admin Desa',
    created_at: new Date('2026-04-18T08:00:00Z')
  },
  {
    id: 12,
    slug: 'pendaftaran-program-bantuan-modal-umkm',
    title: 'Pendaftaran Program Bantuan Modal UMKM',
    description:
      'Pendaftaran bantuan modal UMKM tahap kedua 2026 dibuka di Balai Desa pada jam kerja hingga kuota terpenuhi.',
    content:
      '<p>Pemerintah Desa secara resmi membuka pendaftaran bagi para pelaku usaha mikro, kecil, dan menengah (UMKM) untuk mendapatkan bantuan modal usaha tahap kedua tahun 2026. Program ini bertujuan untuk mendorong pertumbuhan ekonomi lokal dan meningkatkan daya saing produk-produk asli desa di pasar yang lebih luas.</p><p>Para pelaku usaha yang berminat wajib mengumpulkan berkas persyaratan berupa fotokopi KTP, KK, dan foto produk usaha ke kantor Balai Desa pada jam kerja. Pendaftaran akan ditutup secara otomatis setelah kuota terpenuhi atau paling lambat akhir bulan ini.</p>',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    category: { id: 9, name: 'Pengumuman' },
    source: { id: 4, name: 'Pemerintah Desa' },
    author: 'Sekretaris Desa',
    created_at: new Date('2026-04-17T10:30:00Z')
  },
  {
    id: 13,
    slug: 'sosialisasi-pencegahan-stunting-bagi-ibu-hamil',
    title: 'Sosialisasi Pencegahan Stunting bagi Ibu Hamil',
    description:
      'Sosialisasi gizi ibu hamil untuk mencegah stunting disertai pemeriksaan kesehatan gratis dan suplemen.',
    content:
      '<p>Kesehatan ibu dan anak adalah prioritas utama kita. Puskesmas Pembantu desa akan mengadakan sesi sosialisasi mengenai pentingnya pemenuhan gizi seimbang selama masa kehamilan guna mencegah risiko stunting pada anak sejak dini. Acara ini juga akan disertai dengan pemeriksaan kesehatan gratis dan pemberian suplemen tambahan.</p><p>Acara ini sangat disarankan bagi pasangan muda dan ibu hamil di lingkungan desa. Melalui pengetahuan yang tepat, kita dapat memastikan generasi penerus desa tumbuh dengan cerdas, kuat, dan sehat secara jasmani maupun rohani.</p>',
    image:
      'https://images.unsplash.com/photo-1584362946444-1e6632490530?q=80&w=800&auto=format&fit=crop',
    category: { id: 9, name: 'Pengumuman' },
    source: { id: 4, name: 'Pemerintah Desa' },
    author: 'Kader Posyandu',
    created_at: new Date('2026-04-16T14:15:00Z')
  },
  {
    id: 14,
    slug: 'pembaruan-sistem-administrasi-kependudukan-digital',
    title: 'Pembaruan Sistem Administrasi Kependudukan Digital',
    description:
      'Desa menerapkan sistem administrasi kependudukan digital agar layanan dokumen lebih cepat dan efisien.',
    content:
      '<p>Untuk meningkatkan kualitas pelayanan publik, Desa kini mulai menerapkan sistem administrasi kependudukan berbasis digital. Dengan sistem baru ini, warga dapat mengurus surat pengantar, pembuatan KTP, dan dokumen lainnya secara lebih cepat melalui aplikasi atau website resmi desa tanpa perlu mengantre lama di loket.</p><p>Bagi warga yang masih kesulitan menggunakan perangkat digital, petugas administrasi di Balai Desa siap memberikan panduan dan bantuan langsung. Inovasi ini diharapkan dapat menciptakan transparansi dan efisiensi dalam setiap urusan birokrasi di lingkungan pemerintahan desa kita.</p>',
    image:
      'https://images.unsplash.com/photo-1554224155-16974398755d?q=80&w=800&auto=format&fit=crop',
    category: { id: 9, name: 'Pengumuman' },
    source: { id: 4, name: 'Pemerintah Desa' },
    author: 'Admin IT',
    created_at: new Date('2026-04-15T09:00:00Z')
  },
  {
    id: 15,
    slug: 'lomba-desain-logo-desa-menuju-desa-mandiri',
    title: 'Lomba Desain Logo Desa Menuju Desa Mandiri',
    description:
      'Lomba desain logo resmi desa untuk berbagai kebutuhan branding; pemenang mendapat penghargaan dan insentif.',
    content:
      '<p>Kami mengajak seluruh pemuda kreatif di desa untuk menyumbangkan ide terbaiknya melalui lomba desain logo resmi desa. Logo yang terpilih nantinya akan digunakan dalam berbagai materi branding desa, mulai dari website, produk UMKM unggulan, hingga dokumen resmi pemerintahan sebagai simbol identitas desa mandiri.</p><p>Kriteria penilaian meliputi orisinalitas, keterkaitan dengan filosofi sejarah desa, serta estetika visual yang modern. Pemenang utama akan mendapatkan penghargaan serta insentif menarik yang akan diserahkan langsung oleh Kepala Desa pada acara perayaan kemerdekaan mendatang.</p>',
    image:
      'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=800&auto=format&fit=crop',
    category: { id: 9, name: 'Pengumuman' },
    source: { id: 4, name: 'Pemerintah Desa' },
    author: 'Karang Taruna',
    created_at: new Date('2026-04-14T11:45:00Z')
  },
  {
    id: 16,
    slug: 'informasi-penyaluran-pupuk-subsidi-musim-tanam',
    title: 'Informasi Penyaluran Pupuk Subsidi Musim Tanam',
    description:
      'Penyaluran pupuk subsidi musim tanam dimulai Senin melalui Koperasi Desa berdasarkan data RDKK.',
    content:
      '<p>Diberitahukan kepada seluruh kelompok tani desa bahwa penyaluran pupuk subsidi untuk periode musim tanam kali ini akan mulai didistribusikan melalui Koperasi Desa mulai Senin depan. Distribusi dilakukan berdasarkan data Rencana Definitif Kebutuhan Kelompok (RDKK) yang telah diverifikasi sebelumnya oleh petugas lapangan.</p><p>Para ketua kelompok tani diharapkan segera melakukan koordinasi untuk pengambilan jatah pupuk agar tidak terjadi penumpukan di gudang. Pastikan setiap petani menerima haknya sesuai dengan luas lahan yang terdaftar guna mengoptimalkan hasil panen desa tahun ini.</p>',
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop',
    category: { id: 9, name: 'Pengumuman' },
    source: { id: 4, name: 'Pemerintah Desa' },
    author: 'Ketua Gapoktan',
    created_at: new Date('2026-04-13T16:20:00Z')
  }
]
