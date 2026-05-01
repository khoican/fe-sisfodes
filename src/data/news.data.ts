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
      'https://ik.imagekit.io/rulls/sisfodes/demo/news/Pembangunan%20Jembatan%20Penghubung%202%20Desa%20Selesai%20Lebih%20Cepat.png?tr-f=webp',
    category: { id: 2, name: 'Infrastruktur' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'Admin Desa',
    created_at: new Date('2026-04-10T09:00:00')
  },
  {
    id: 2,
    slug: 'pelatihan-digital-marketing-untuk-pemuda-dan-umkm-desa',
    title: 'Pelatihan Digital Marketing Untuk Pemuda dan UMKM Desa',
    description: 'Meningkatkan daya saing ekonomi desa melalui penguasaan teknologi pemasaran digital terkini.',
    content: `
      <p>Pemerintah Desa Sumberkejayan bekerja sama dengan praktisi IT menyelenggarakan pelatihan Digital Marketing yang ditujukan khusus bagi pemuda karang taruna dan pelaku UMKM desa. Pelatihan ini mencakup materi pembuatan konten kreatif, optimasi media sosial, hingga dasar-dasar periklanan digital.</p>
      <p>Tujuan utama dari kegiatan ini adalah agar produk-produk unggulan desa dapat dipasarkan secara lebih luas dan profesional. Para pemuda desa diharapkan menjadi motor penggerak transformasi digital bagi usaha mikro yang ada di lingkungan mereka masing-masing.</p>
      <p>Dengan bekal keterampilan ini, diharapkan angka penjualan UMKM desa meningkat dan tercipta ekosistem ekonomi digital yang mandiri di Desa Sumberkejayan.</p>
    `,
    image: 'https://ik.imagekit.io/rulls/sisfodes/demo/news/Pelatihan%20Digital%20Marketing%20Untuk%20Pemuda%20dan%20UMKM%20Desa.png?tr-f=webp',
    category: { id: 3, name: 'Ekonomi' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'Bidang Pemberdayaan',
    created_at: new Date('2026-04-12T10:00:00')
  },
  {
    id: 3,
    slug: 'berkah-desa-panen-raya-terbesar-setelah-20-tahun',
    title: 'Berkah Desa - Panen Raya Terbesar Setelah 20 Tahun',
    description: 'Kesejahteraan petani meningkat drastis berkat hasil panen padi yang melimpah tahun ini.',
    content: `
      <p>Sektor pertanian Desa Sumberkejayan mencatatkan rekor baru dengan hasil panen padi terbesar dalam dua dekade terakhir. Keberhasilan ini didorong oleh cuaca yang mendukung serta penerapan teknik pengairan dan pemupukan organik yang intensif oleh kelompok tani desa.</p>
      <p>Kepala Desa beserta perangkat desa turut serta dalam acara syukuran panen raya bersama warga. Beliau menyampaikan bahwa keberhasilan ini merupakan buah dari kerja keras dan kesabaran para petani dalam mengikuti arahan penyuluh pertanian lapangan.</p>
      <p>Pemerintah desa berkomitmen untuk terus mendukung ketersediaan sarana produksi pertanian guna menjaga ketahanan pangan dan stabilitas ekonomi warga desa.</p>
    `,
    image: 'https://ik.imagekit.io/rulls/sisfodes/demo/news/%20Berkah%20Desa%20-%20Panen%20Raya%20Terbesar%20Setelah%2020%20Tahun.png?tr-f=webp',
    category: { id: 1, name: 'Pertanian' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'Ketua Gapoktan',
    created_at: new Date('2026-04-15T08:30:00')
  },
  {
    id: 4,
    slug: 'sosialisasi-keamanan-digital-oleh-kapolsek',
    title: 'Sosialisasi Keamanan Digital Oleh Kapolsek',
    description: 'Memberikan pemahaman kepada warga tentang bahaya kejahatan siber dan cara melindungi data pribadi.',
    content: `
      <p>Menanggapi maraknya penipuan online, Kapolsek setempat menyelenggarakan sosialisasi keamanan digital di Balai Desa Sumberkejayan. Acara ini dihadiri oleh berbagai lapisan masyarakat, mulai dari orang tua hingga remaja desa yang aktif menggunakan media sosial.</p>
      <p>Dalam pemaparannya, Kapolsek menekankan pentingnya waspada terhadap tautan mencurigakan dan tidak sembarangan memberikan kode OTP kepada siapapun. Beliau juga menjelaskan prosedur pelaporan jika warga menjadi korban tindak pidana siber.</p>
      <p>Diharapkan melalui kegiatan ini, tingkat literasi digital dan keamanan warga desa meningkat, sehingga potensi kerugian akibat kejahatan siber dapat diminimalisir.</p>
    `,
    image: 'https://ik.imagekit.io/rulls/sisfodes/demo/news/Sosialisasi%20Keamanan%20Digital%20Oleh%20Kapolsek.png?tr-f=webp',
    category: { id: 6, name: 'Keamanan' },
    source: { id: 2, name: 'Humas Polsek' },
    author: 'Humas Polsek',
    created_at: new Date('2026-04-18T14:00:00')
  },
  {
    id: 5,
    slug: 'pembangunan-pabrik-pengolahan-sampah-organik-menjadi-pupuk-dimulai',
    title: 'Pembangunan Pabrik Pengolahan Sampah Organik Menjadi Pupuk Telah dimulai',
    description: 'Langkah nyata desa dalam menangani masalah sampah sekaligus memproduksi pupuk berkualitas.',
    content: `
      <p>Pemerintah Desa Sumberkejayan resmi memulai proyek pembangunan pabrik pengolahan sampah organik menjadi pupuk kompos. Proyek ini bertujuan untuk menyelesaikan masalah pembuangan sampah di lingkungan pemukiman warga sekaligus memberikan nilai tambah ekonomi.</p>
      <p>Pabrik ini nantinya akan dikelola oleh BUMDes dan melibatkan tenaga kerja lokal. Sampah organik yang dikumpulkan dari warga akan diproses menggunakan mesin modern untuk menghasilkan pupuk yang nantinya dapat digunakan kembali oleh para petani desa.</p>
      <p>Inovasi ini diharapkan menjadikan Desa Sumberkejayan sebagai desa percontohan dalam pengelolaan lingkungan hidup yang berkelanjutan dan berbasis ekonomi kerakyatan.</p>
    `,
    image: 'https://ik.imagekit.io/rulls/sisfodes/demo/news/Pembangunan%20Pabrik%20Pengolahan%20Sampah%20Organik%20Menjadi%20Pupuk%20Telah%20dimulai.png?tr-f=webp',
    category: { id: 4, name: 'Lingkungan' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'Dinas Kebersihan',
    created_at: new Date('2026-04-20T11:00:00')
  },
  {
    id: 6,
    slug: 'pelepasan-siswa-siswi-berprestasi-untuk-belajar-di-nus-singapura',
    title: 'Pelepasan Siswa-Siswi Berprestasi Untuk Belajar Di NUS Singapura',
    description: 'Kebanggaan desa melepas putra-putri terbaik untuk menempuh pendidikan di universitas kelas dunia.',
    content: `
      <p>Desa Sumberkejayan kembali mengukir prestasi melalui sepuluh putra-putri terbaiknya yang berhasil mendapatkan beasiswa pendidikan di National University of Singapore (NUS). Acara pelepasan berlangsung khidmat diiringi doa dari orang tua dan tokoh masyarakat.</p>
      <p>Program beasiswa ini merupakan hasil kerja sama desa dengan yayasan pendidikan internasional. Kepala Desa berpesan agar para siswa tetap rendah hati dan belajar dengan tekun agar ilmu yang didapat bisa bermanfaat untuk kemajuan desa di masa depan.</p>
      <p>Prestasi ini membuktikan bahwa anak-anak desa memiliki potensi besar yang mampu bersaing di tingkat internasional jika diberikan kesempatan dan dukungan yang tepat.</p>
    `,
    image: 'https://ik.imagekit.io/rulls/sisfodes/demo/news/Pelepasan%20Siswa-Siswi%20Berprestasi%20Untuk%20Belajar%20Di%20UNS%20Singapura.png?tr-f=webp',
    category: { id: 8, name: 'Pendidikan' },
    source: { id: 3, name: 'Info Pendidikan' },
    author: 'Kader Pendidikan',
    created_at: new Date('2026-04-22T09:00:00')
  },
  {
    id: 7,
    slug: 'program-imunisasi-rutin-di-posyandu',
    title: 'Program Imunisasi Rutin di Posyandu',
    description: 'Menjaga kesehatan generasi masa depan melalui pemberian vaksin rutin bagi balita desa.',
    content: `
      <p>Posyandu Desa Sumberkejayan melaksanakan program imunisasi rutin serentak untuk memastikan anak-anak terlindungi dari berbagai penyakit menular. Petugas kesehatan dari Puskesmas memberikan layanan vaksinasi dasar lengkap serta pemeriksaan gizi bagi balita.</p>
      <p>Kesadaran ibu-ibu di desa terhadap pentingnya imunisasi terlihat dari tingginya angka kehadiran di setiap pos. Selain imunisasi, warga juga mendapatkan penyuluhan mengenai pola makan sehat untuk mencegah stunting sejak dini.</p>
      <p>Pemerintah desa terus berupaya menyediakan fasilitas kesehatan yang memadai dan mudah diakses demi menjamin tumbuh kembang anak yang optimal di lingkungan desa.</p>
    `,
    image: 'https://ik.imagekit.io/rulls/sisfodes/demo/news/Program%20Imunisasi%20Rutin%20di%20Posyandu.png?tr-f=webp',
    category: { id: 7, name: 'Kesehatan' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'Bidan Desa',
    created_at: new Date('2026-04-25T08:00:00')
  },
  {
    id: 8,
    slug: 'kegiatan-kerja-bakti-merekatkan-hubungan-sosial-antar-warga-desa',
    title: 'Kegiatan Kerja Bakti Merekatkan Hubungan Sosial Antar Warga Desa',
    description: 'Menjaga kebersihan lingkungan sekaligus memperkuat tali silaturahmi melalui gotong royong.',
    content: `
      <p>Warga Desa Sumberkejayan secara serentak melaksanakan kegiatan kerja bakti untuk membersihkan lingkungan sekitar rumah dan fasilitas umum. Kegiatan ini tidak hanya bertujuan untuk kebersihan, tetapi juga menjadi ajang mempererat hubungan sosial antar tetangga.</p>
      <p>Suasana penuh keakraban terlihat saat warga bahu-membahu membersihkan selokan dan merapikan taman desa. Budaya gotong royong yang masih kental menjadi identitas kuat masyarakat Desa Sumberkejayan yang harus terus dilestarikan.</p>
      <p>Melalui kegiatan rutin ini, diharapkan lingkungan desa tetap asri, sehat, dan nyaman untuk ditinggali oleh seluruh lapisan masyarakat.</p>
    `,
    image: 'https://ik.imagekit.io/rulls/sisfodes/demo/news/Kegiatan%20Kerja%20Bakti%20Merekatkan%20Hubungan%20Sosial%20Antar%20Warga%20Desa.png?tr-f=webp',
    category: { id: 6, name: 'Sosial' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'Ketua RW',
    created_at: new Date('2026-04-28T07:00:00')
  },
  {
    id: 9,
    slug: 'desa-sumberkejayan-memenangkan-penghargaan-desa-terbersih',
    title: 'Desa Sumberkejayan Memenangkan Penghargaan Desa Terbersih',
    description: 'Apresiasi atas komitmen kolektif warga dalam menjaga kebersihan dan kelestarian lingkungan hidup.',
    content: `
      <p>Prestasi membanggakan diraih oleh Desa Sumberkejayan yang dinobatkan sebagai Desa Terbersih tingkat Kabupaten tahun 2026. Penghargaan ini merupakan pengakuan atas upaya konsisten warga dan pemerintah desa dalam mengelola sampah dan menjaga keasrian wilayah.</p>
      <p>Penilaian meliputi aspek kebersihan drainase, pengelolaan limbah rumah tangga, hingga partisipasi aktif warga dalam program penghijauan. Kepala Desa menyampaikan rasa terima kasih yang mendalam kepada seluruh warga atas dedikasinya dalam menjaga lingkungan.</p>
      <p>Piala penghargaan ini diharapkan menjadi motivasi tambahan bagi warga untuk terus mempertahankan gaya hidup bersih dan sehat di Desa Sumberkejayan.</p>
    `,
    image: 'https://ik.imagekit.io/rulls/sisfodes/demo/news/Desa%20Sumberkejayan%20Memenangkan%20Penghargaan%20Desa%20Terbersih.png?tr-f=webp',
    category: { id: 4, name: 'Lingkungan' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'Admin Desa',
    created_at: new Date('2026-04-29T16:00:00')
  },
  {
    id: 10,
    slug: 'pesta-rakyat-dan-bazar-kuliner-tradisional',
    title: 'Pesta Rakyat dan Bazar Kuliner Tradisional',
    description: 'Merayakan kebersamaan warga dengan aneka hiburan rakyat dan promosi masakan lokal.',
    content: `
      <p>Desa Sumberkejayan menggelar acara Pesta Rakyat yang dimeriahkan dengan Bazar Kuliner Tradisional dari berbagai dusun. Acara ini menjadi pusat perhatian warga dan pengunjung dari luar desa yang ingin mencicipi masakan khas yang jarang ditemui di tempat lain.</p>
      <p>Selain kuliner, panggung hiburan rakyat juga menyajikan berbagai atraksi seni lokal yang menghibur seluruh keluarga. Kegiatan ini juga menjadi sarana promosi yang efektif bagi para pelaku usaha makanan di desa.</p>
      <p>Kegiatan yang berlangsung meriah ini sukses meningkatkan perputaran ekonomi lokal dan memperkuat rasa memiliki warga terhadap warisan budaya desa mereka sendiri.</p>
    `,
    image: 'https://ik.imagekit.io/rulls/sisfodes/demo/news/Pesta%20Rakyat%20dan%20Bazar%20Kuliner%20Tradisional.png?tr-f=webp',
    category: { id: 6, name: 'Sosial' },
    source: { id: 1, name: 'Warta Desa' },
    author: 'Panitia Pesta',
    created_at: new Date('2026-04-30T19:00:00')
  }
]
