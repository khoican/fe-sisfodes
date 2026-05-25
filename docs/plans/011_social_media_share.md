# PLAN_011: Fitur Berbagi Halaman ke Media Sosial (Share Feature)

## 1. Metadata

- **Author**: Antigravity Agent
- **Created Date**: 2026-05-25
- **Target Area**: UI Components, Pages (`src/routes/informasi/berita/$slug.tsx`, `src/routes/produk/$slug.tsx`)
- **Status**: `[x] Completed`
- **Dependencies**: None

---

## 2. Objective & Goal

Menambahkan fitur **Share (Bagikan)** ke media sosial pada halaman detail berita/artikel (`/informasi/berita/$slug`) dan detail produk (`/produk/$slug`). Pengguna dapat dengan mudah membagikan berita atau produk desa ke platform:
1. **WhatsApp**: Membuka WhatsApp dengan pesan berisi judul dan link halaman.
2. **Facebook**: Membuka Facebook Sharer untuk membagikan tautan halaman.
3. **Instagram & Lainnya**: 
   - Di perangkat seluler: Memanfaatkan **Web Share API** browser (`navigator.share`) untuk memicu dialog berbagi bawaan OS yang mendukung langsung pengunggahan ke Story/Postingan Instagram.
   - Di desktop / Fallback: Menyediakan tombol **Salin Tautan (Copy Link)** ke clipboard disertai umpan balik visual (*toast* / pesan sukses) agar pengguna bisa menempelkan tautan secara mandiri di Instagram.

---

## 3. Specifications & Requirements

- **Reusable Component**: Buat komponen baru [ShareButtons.tsx](file:///E:/PROJECT/sisfodes/src/components/shared/ShareButtons.tsx) yang dapat menerima properti `title` (judul berita/produk) dan `url` (jika berbeda, default menggunakan URL aktif halaman berjalan).
- **Web Share API Integration**: Memeriksa ketersediaan `navigator.share` untuk mendukung fitur berbagi asli OS (khususnya untuk Instagram Stories/Posts di perangkat mobile).
- **Clipboard Fallback**: Menggunakan `navigator.clipboard.writeText` untuk menyalin tautan halaman berjalan lengkap dengan animasi status sukses ("Tautan Berhasil Disalin!").
- **Aesthetic UI**: Tombol berbagi menggunakan ikon dari `lucide-react` / `react-icons` (WhatsApp, Facebook, Share/Link) dengan styling melayang (*floating*), hover effects, dan penyesuaian warna brand yang harmonis.
- **SSR Safety**: Menghindari penggunaan langsung variabel global `window` atau `navigator` selama rendering server (SSR) dengan membungkus logic di event handlers atau `useEffect`.

---

## 4. Proposed File Changes

- `[NEW]` [ShareButtons.tsx](file:///E:/PROJECT/sisfodes/src/components/shared/ShareButtons.tsx)
- `[MODIFY]` [$slug.tsx](file:///E:/PROJECT/sisfodes/src/routes/informasi/berita/%24slug.tsx)
- `[MODIFY]` [$slug.tsx](file:///E:/PROJECT/sisfodes/src/routes/produk/%24slug.tsx)
- `[MODIFY]` [orchestrator.md](file:///E:/PROJECT/sisfodes/docs/plans/orchestrator.md)

---

## 5. Step-by-Step Checklist

- `[ ]` **Step 1: Pembuatan Komponen ShareButtons**
    - Buat berkas baru [ShareButtons.tsx](file:///E:/PROJECT/sisfodes/src/components/shared/ShareButtons.tsx).
    - Desain antarmuka tombol berbagi secara horizontal/vertikal yang elegan.
    - Implementasikan fungsi `handleShare` (WhatsApp API, Facebook Sharer API, Clipboard Copy, dan Web Share API).
    - Gunakan `useState` untuk mengontrol notifikasi "Berhasil Disalin" sementara (durasi 2 detik).
- `[ ]` **Step 2: Integrasi di Detail Berita & Artikel**
    - Impor `<ShareButtons />` di [berita/$slug.tsx](file:///E:/PROJECT/sisfodes/src/routes/informasi/berita/$slug.tsx).
    - Letakkan komponen di bawah judul berita atau di akhir konten artikel.
- `[ ]` **Step 3: Integrasi di Detail Produk**
    - Impor `<ShareButtons />` di [produk/$slug.tsx](file:///E:/PROJECT/sisfodes/src/routes/produk/$slug.tsx).
    - Letakkan komponen di samping tombol hubungi WhatsApp penjual atau di bawah deskripsi produk.
- `[ ]` **Step 4: Verifikasi & Kompilasi**
    - Jalankan `npx tsc --noEmit` untuk validasi tipe.
    - Jalankan `npm run test:run` untuk memastikan test suite aman.

---

## 6. Verification & Testing Plan

### Automated Tests
- Menjalankan pemeriksaan kompilasi TypeScript: `npx tsc --noEmit`.
- Menjalankan suite pengujian unit & integrasi: `npm run test:run`.

### Manual Verification
- Buka detail berita dan detail produk, pastikan tombol bagikan muncul secara estetik.
- Klik tombol WhatsApp/Facebook dan pastikan rujukan URL terbuka dengan benar.
- Klik tombol bagikan umum pada mobile untuk menguji Web Share API, atau klik Salin Tautan pada desktop untuk memverifikasi fungsionalitas clipboard dan efek notifikasinya.
