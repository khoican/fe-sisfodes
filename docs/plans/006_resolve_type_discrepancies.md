# PLAN_006: Penyelarasan Kode dan Komponen UI dengan Perubahan Type Baru

Rencana ini dibuat untuk menyelaraskan seluruh kode program, service, dan layout komponen/halaman yang terdampak oleh pembaruan type atau interface pada folder `src/types`. Modifikasi ini bertujuan agar seluruh kode sesuai dengan tipe data yang baru dan memperbaiki error kompilasi TypeScript (`tsc`).

## 1. Analisis Dampak Perubahan Type

Berdasarkan hasil log kompilasi `tsc`, terdapat beberapa area utama yang terdampak:

1. **Format API Response (`src/lib/api/axios.ts`)**:
   - Struktur `ApiResponse` ditukar: `response` kini berisi `{ code: number, message: string }`, sedangkan data payload bertipe `T` dipindahkan ke properti `metadata`.
   - Hal ini membuat semua route loader dan service yang mengakses `.response` untuk mendapatkan payload data mengalami error type. Seluruh akses ini harus diarahkan ke `.metadata`.

2. **Perubahan Field pada Tipe Data**:
   - **`INews`**: Properti `image` (string) diubah menjadi `images` (array string).
   - **`IGalleryItem`**: Properti `category`, `description`, dan `date` dihapus. Properti tanggal baru adalah `uploaded_at`.
   - **`IAgenda`**: Properti `is_holiday` dan `location` dihapus. `date` dan `time` distrukturisasi menjadi object `{ start, end }`.
   - **`IInstitution`**: Properti `full_name`, `last_updated`, `tasks`, `functions`, dan `members` dihapus. Properti `vision` dan `mission` berubah menjadi opsional bertipe `string` (bukan array).
   - **`IFacility`**: Properti `category`, `status`, dan `coordinates` dihapus.
   - **`ISdgs`**: Properti `score` dan `chart` pada objek utama ditiadakan. Properti baru pada objek utama adalah `average` (string), `data` (`ISdgsGoal[]`), dan `total_desa` (number).

---

## 2. Rincian Perubahan yang Diusulkan

### A. Core & Services

#### [MODIFY] [axios.ts](file:///E:/PROJECT/sisfodes/src/lib/api/axios.ts)
- Sesuaikan Response Interceptor agar memeriksa properti `response.code` (bukan `metadata.code`).
- Sesuaikan Error Interceptor agar mengambil pesan error dari `data.response.message`.

#### [MODIFY] [artikel.service.tsx](file:///E:/PROJECT/sisfodes/src/services/artikel.service.tsx)
#### [MODIFY] [news.service.tsx](file:///E:/PROJECT/sisfodes/src/services/news.service.tsx)
#### [MODIFY] [penghargaan.service.tsx](file:///E:/PROJECT/sisfodes/src/services/penghargaan.service.tsx)
#### [MODIFY] [product.service.tsx](file:///E:/PROJECT/sisfodes/src/services/product.service.tsx)
- Ganti pengecekan `data.response` dan operasi sorting di dalamnya agar membaca dari `data.metadata`.

#### [MODIFY] [sdgs.service.tsx](file:///E:/PROJECT/sisfodes/src/services/sdgs.service.tsx)
- Ganti return value `response.response` pada fungsi `getSdgs()` menjadi `response.metadata`.

---

### B. Route Loaders (Update dari `.response` ke `.metadata`)

Ubah loader pada file-file berikut agar mengambil payload dari `.metadata`:
- **[MODIFY]** [galeri.tsx](file:///E:/PROJECT/sisfodes/src/routes/galeri.tsx)
- **[MODIFY]** [index.tsx](file:///E:/PROJECT/sisfodes/src/routes/index.tsx)
- **[MODIFY]** [agenda.tsx](file:///E:/PROJECT/sisfodes/src/routes/informasi/agenda.tsx)
- **[MODIFY]** [artikel.tsx](file:///E:/PROJECT/sisfodes/src/routes/informasi/artikel.tsx)
- **[MODIFY]** [index.tsx](file:///E:/PROJECT/sisfodes/src/routes/informasi/berita/index.tsx)
- **[MODIFY]** [$slug.tsx](file:///E:/PROJECT/sisfodes/src/routes/informasi/berita/$slug.tsx)
- **[MODIFY]** [penghargaan.tsx](file:///E:/PROJECT/sisfodes/src/routes/informasi/penghargaan.tsx)
- **[MODIFY]** [$slug.tsx](file:///E:/PROJECT/sisfodes/src/routes/lembaga/$slug.tsx)
- **[MODIFY]** [pengaduan.tsx](file:///E:/PROJECT/sisfodes/src/routes/pengaduan.tsx)
- **[MODIFY]** [index.tsx](file:///E:/PROJECT/sisfodes/src/routes/produk/index.tsx)
- **[MODIFY]** [fasilitas-umum.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/fasilitas-umum.tsx)
- **[MODIFY]** [geografi-desa.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/geografi-desa.tsx)
- **[MODIFY]** [peta-desa.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/peta-desa.tsx)
- **[MODIFY]** [profil-desa.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/profil-desa.tsx)
- **[MODIFY]** [struktur-organisasi.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/struktur-organisasi.tsx)
- **[MODIFY]** [apbdes.tsx](file:///E:/PROJECT/sisfodes/src/routes/publikasi/apbdes.tsx)
- **[MODIFY]** [bank-data.tsx](file:///E:/PROJECT/sisfodes/src/routes/publikasi/bank-data.tsx)
- **[MODIFY]** [rapbdes.tsx](file:///E:/PROJECT/sisfodes/src/routes/publikasi/rapbdes.tsx)
- **[MODIFY]** [rkpdes.tsx](file:///E:/PROJECT/sisfodes/src/routes/publikasi/rkpdes.tsx)
- **[MODIFY]** [rpjmdes.tsx](file:///E:/PROJECT/sisfodes/src/routes/publikasi/rpjmdes.tsx)
- **[MODIFY]** [idm.tsx](file:///E:/PROJECT/sisfodes/src/routes/statistik/idm.tsx)
- **[MODIFY]** [kependudukan.tsx](file:///E:/PROJECT/sisfodes/src/routes/statistik/kependudukan.tsx)

---

### C. Komponen & Penyesuaian UI

#### 1. Artikel & Berita (`INews`)
- **[MODIFY]** [news.tsx](file:///E:/PROJECT/sisfodes/src/components/shared/card/news.tsx): 
  - Destrukturisasi properti `images` (bukan `image`) lalu ambil `images?.[0]` sebagai gambar utama.
  - Image dari array index 1 dan seterusnya ditampilkan pada bagian bawah `content`. bukan sebuah carousel, namun image stack (3 image kecil).
- **[MODIFY]** [$slug.tsx](file:///E:/PROJECT/sisfodes/src/routes/informasi/berita/$slug.tsx): Ganti akses `berita.image` menjadi `berita.images?.[0]`.
- **[MODIFY]** [artikel.data.ts](file:///E:/PROJECT/sisfodes/src/data/artikel.data.ts) & [penghargaan.data.ts](file:///E:/PROJECT/sisfodes/src/data/penghargaan.data.ts): Perbaiki mock data agar properti gambar menggunakan array `images` bukan `image`.

#### 2. Galeri (`IGalleryItem`)
- **[MODIFY]** [galeri.tsx](file:///E:/PROJECT/sisfodes/src/routes/galeri.tsx): 
  - Hapus bagian filter kategori (karena properti `category` sudah tidak ada di data).
  - Tampilkan galeri dalam satu masonry grid tanpa pembagian tab kategori.
  - Ganti `item.date` menjadi `item.uploaded_at`.
  - Hapus referensi ke `category` dan `description` pada UI card galeri maupun lightbox modal.

#### 3. Agenda (`IAgenda`)
- **[MODIFY]** [agenda.util.ts](file:///E:/PROJECT/sisfodes/src/utils/agenda.util.ts):
  - Hapus properti `is_holiday` dalam penyortiran dan pemrosesan.
  - Sederhanakan `getNextVillageAgenda` agar mengembalikan agenda terdekat tanpa membedakan hari libur. Hapus method `getNextHoliday`.
- **[MODIFY]** [featured.tsx](file:///E:/PROJECT/sisfodes/src/components/shared/card/agenda/featured.tsx):
  - Hapus ikon dan teks lokasi karena properti `location` tidak ada.
- **[MODIFY]** [list-item.tsx](file:///E:/PROJECT/sisfodes/src/components/shared/card/agenda/list-item.tsx):
  - Hapus styling opsional `is_holiday` (gunakan gaya default).
  - Tampilkan jam agenda secara langsung tanpa pengkondisian libur.

#### 4. Lembaga (`IInstitution`)
- **[MODIFY]** [institution.data.ts](file:///E:/PROJECT/sisfodes/src/data/institution.data.ts):
  - mock data untuk visi menggunakan format tag html.
  - mock data untuk misi menggunakan format tag html dan berupa daftar berurutan atau ordered list (ol).
- **[MODIFY]** [$slug.tsx](file:///E:/PROJECT/sisfodes/src/routes/lembaga/$slug.tsx):
  - Ganti `full_name` menjadi `name`.
  - Hapus bagian "Terakhir diperbarui" (`last_updated`).
  - Hapus section tugas pokok dan fungsi. 

#### 5. Fasilitas & Peta (`IFacility`)
- **[MODIFY]** [fasilitas-umum.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/fasilitas-umum.tsx):
  - Hapus filter kategori karena properti `category` dan `status` sudah ditiadakan di tipe baru.
  - Ganti akses `facility.image` menjadi `facility.images?.[0]`.
  - Hapus metadata rendering block (karena properti `metadata` sudah tidak ada di tipe baru).
- **[REMOVE]** [peta-desa.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/peta-desa.tsx):
  - Hapus halaman karena sudah tidak digunakan.
- **[NEW]** [geografi-desa.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/geografi-desa.tsx):
  - Tambahkan sebuah section baru berada paling bawah (sebelum footer) yang menampilkan peta desa.
  - Peta desa berupa gambar yang tersimpan pada file `village.constant.ts` pada key `map`
  - Layout nya mirip seperti pada halaman `peta-desa.tsx` namun dalam bentuk gambar (bukan map interaktif).
  - Pastikan memiliki heading yang jelas dan interaktif.

#### 6. SDGs (`ISdgs`)
- **[MODIFY]** [sdgs.tsx](file:///E:/PROJECT/sisfodes/src/routes/statistik/sdgs.tsx):
  - Ganti `sdgs.score.data` menjadi `sdgs.data` dan `sdgs.score.average` menjadi `sdgs.average`.
  - Buat data chart lokal dengan me-map `sdgs.data` ke format `ISdgsChart[]` sebelum dilewatkan ke komponen `<SdgsChart />`.

---

## 3. Rencana Verifikasi

1. **Kompilasi TypeScript**:
   - Jalankan `npx tsc --noEmit` untuk memastikan tidak ada lagi error tipe data di seluruh codebase.
2. **Pengujian Unit**:
   - Jalankan `npm test` atau `npm run test:run` untuk memastikan test suite tidak mengalami kerusakan akibat perubahan tipe data.
3. **Pengujian Visual**:
   - Jalankan server development (`npm run dev`) dan verifikasi halaman-halaman berikut:
     - Beranda (mengecek budget, kependudukan, agenda, berita)
     - Galeri (mengecek masonry grid tanpa filter kategori)
     - Lembaga Detail (mengecek tampilan visi-misi baru)
     - Fasilitas Umum & Peta (mengecek rendering fasilitas dan sebaran marker peta)
     - SDGs (mengecek chart capaian global dan skor rata-rata)
