# PLAN_009: Audit Kode & Perbaikan Bug Terpadu (Auditor & Bug Fixer)

## 1. Metadata

- **Author**: Antigravity Agent
- **Created Date**: 2026-05-25
- **Target Area**: Codebase-wide (Routes, Components, Services, Charts)
- **Status**: `[ ] Ready`
- **Dependencies**: None

---

## 2. Objective & Goal

Rencana ini berfungsi untuk menjalankan proses **audit kode** secara mendalam sekaligus melakukan **perbaikan bug (bug fixing)** langsung di seluruh codebase proyek SISFODES. Fokus utama mencakup:
1. **Pengecekan Kode Bersih (Clean Code)**: Menemukan dan membersihkan *code smell* (impor yang tidak terpakai, deklarasi mati, `console.log` yang tertinggal, serta penggunaan operator perbandingan non-strict).
2. **Pengujian Skenario Logika Bisnis**: Memastikan seluruh alur logika bisnis (termasuk *happy path* hingga skenario *error/exception handling*) berjalan aman tanpa menyebabkan *crash* pada aplikasi (SSR Safety).
3. **Audit Komponen & Halaman**: Memverifikasi responsivitas tata letak, aksesibilitas dasar (ARIA), serta efisiensi render (penggunaan `useMemo` / `useCallback` jika diperlukan).
4. **Audit Konfigurasi Chart**: Memastikan pustaka grafik (Recharts & Shadcn Chart) terkonfigurasi dengan benar (axis tick formatter, tooltip custom, aspect ratio, data key matching) untuk menghindari visual bug atau warning di konsol browser.
5. **Bug Fixing Otomatis**: Memperbaiki secara langsung setiap bug atau kode rentan yang ditemukan selama proses audit agar sistem memenuhi standar industri.

---

## 3. Specifications & Requirements

- **Strict Code Standards**: Mengikuti aturan `GEMINI.md` secara ketat (penggunaan strict equality `===` & `!==`, path alias `#`, dokumentasi JSDoc lengkap).
- **SSR Safety**: Menjamin tidak ada kebocoran kode sisi klien (`window`, `document`, atau API browser lainnya) langsung di tingkat server/loader TanStack Start tanpa pembungkus/kondisi pengecekan yang tepat.
- **Chart Verification**: Mengaudit file `src/components/shared/chart/population.tsx` dan `src/components/shared/chart/sdgs.tsx` untuk memastikan fungsionalitas rendering grafik.
- **Error Boundaries & Loaders**: Memeriksa penanganan error di rute utama agar menampilkan fallback UI yang informatif bagi pengguna.

---

## 4. Proposed File Changes

- `[MODIFY]` Berkas apa pun di bawah `src/` yang terdeteksi memiliki *code smell*, bug potensial, tipe data yang tidak konsisten, atau konfigurasi grafik yang keliru selama proses audit.
- `[MODIFY]` [orchestrator.md](file:///E:/PROJECT/sisfodes/docs/plans/orchestrator.md) untuk memperbarui status audit.

---

## 5. Step-by-Step Checklist

- `[ ]` **Step 1: Audit Sisi Klien & Sisi Server (SSR Safety)**
    - Periksa berkas rute (`src/routes/*`) dari adanya akses langsung terhadap API browser global di luar blok `useEffect` atau kondisi `typeof window !== 'undefined'`.
    - Pastikan semua pemanggilan API Axios dibungkus dengan penanganan error (`try/catch`) yang memadai.
- `[ ]` **Step 2: Audit Komponen Visual & Chart**
    - Audit berkas `src/components/shared/chart/` (grafik kependudukan & SDGs).
    - Pastikan komponen grafik responsif, penamaan `dataKey` sinkron dengan interface, dan tidak memicu warning Recharts di konsol.
    - Cek responsivitas layout visual halaman profil, statistik, dan publikasi pada viewport mobile.
- `[ ]` **Step 3: Pengecekan Code Smell & Struktur Kode**
    - Deteksi impor redundan, variabel yang dideklarasikan tapi tidak digunakan, serta penggunaan operator `==` yang harus diubah ke `===`.
    - Pastikan standar JSDoc terpenuhi untuk setiap modul atau utilitas yang dimodifikasi.
- `[ ]` **Step 4: Eksekusi Bug Fixing**
    - Perbaiki langsung kesalahan logika, tipe data, serta bug layout yang ditemukan pada langkah audit sebelumnya.
- `[ ]` **Step 5: Verifikasi Akhir Codebase**
    - Jalankan `npx tsc --noEmit` untuk memastikan tidak ada error tipe data baru.
    - Jalankan `npm run test:run` untuk memastikan semua test suite berjalan lancar.

---

## 6. Verification & Testing Plan

### Automated Tests
- Menjalankan pemeriksaan compiler TypeScript: `npx tsc --noEmit`.
- Menjalankan suite pengujian otomatis: `npm run test:run`.

### Manual Verification
- Menjalankan aplikasi secara lokal dan memeriksa konsol browser dari adanya error rendering atau Recharts warning.
