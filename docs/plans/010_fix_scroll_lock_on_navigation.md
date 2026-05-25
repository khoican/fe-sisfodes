# PLAN_010: Perbaikan Bug Kunci Scroll Halaman Saat Navigasi Mobile

## 1. Metadata

- **Author**: Antigravity Agent
- **Created Date**: 2026-05-25
- **Target Area**: Layout components (`src/components/layout/MobileMenu.tsx`)
- **Status**: `[x] Completed`
- **Dependencies**: None

---

## 2. Objective & Goal

Memperbaiki bug di mana halaman web terkunci (tidak bisa di-scroll) setelah pengguna berpindah halaman menggunakan menu navigasi seluler (Mobile Menu). Bug ini terjadi karena komponen penampung menu mobile (`Drawer` dari library `vaul`) berstatus uncontrolled dan tidak menutup secara otomatis saat terjadi perpindahan rute klien (*client-side routing*), sehingga gaya pengunci scroll (`overflow: hidden` / `pointer-events: none`) yang disuntikkan ke elemen `<body>` tetap tertinggal.

---

## 3. Specifications & Requirements

- **Controlled Drawer State**: Mengontrol status buka/tutup (`open` dan `onOpenChange`) dari komponen `Drawer` di [MobileMenu.tsx](file:///E:/PROJECT/sisfodes/src/components/layout/MobileMenu.tsx).
- **Route Change Detection**: Mendeteksi perubahan rute halaman menggunakan router hook dari `@tanstack/react-router` (misal: memantau properti `pathname` dari `useLocation()` atau `useRouterState()`).
- **Auto-Close on Navigation**: Menutup drawer menu secara otomatis (mengubah status `open` menjadi `false`) setiap kali pengguna mengklik link menu navigasi seluler dan berhasil berpindah rute.
- **Scroll Lock Reset Fallback (Optional)**: Menambahkan efek pembersih (*cleanup effect*) global pada level root atau utilitas jika diperlukan untuk memastikan tag `style` body dibersihkan dari sisa properti `overflow` atau `pointer-events`.

---

## 4. Proposed File Changes

- `[MODIFY]` [MobileMenu.tsx](file:///E:/PROJECT/sisfodes/src/components/layout/MobileMenu.tsx)
- `[MODIFY]` [orchestrator.md](file:///E:/PROJECT/sisfodes/docs/plans/orchestrator.md)

---

## 5. Step-by-Step Checklist

- `[ ]` **Step 1: Analisis Detail & Deteksi Masalah**
    - Periksa struktur penutupan komponen `Drawer` saat perpindahan halaman.
- `[ ]` **Step 2: Implementasi Kontrol State Drawer**
    - Tambahkan state `open` dan `onOpenChange` pada komponen `MobileMenu`.
    - Gunakan hook `useLocation` dari `@tanstack/react-router` untuk memantau perubahan rute.
    - Sinkronkan `useEffect` untuk mengubah `open` menjadi `false` saat rute berubah.
- `[ ]` **Step 3: Verifikasi Fungsionalitas**
    - Jalankan aplikasi secara lokal dan uji navigasi mobile menu berulang kali untuk memastikan body scroll tidak terkunci lagi.
- `[ ]` **Step 4: Pemeriksaan Kompilasi & Pengujian**
    - Jalankan `npx tsc --noEmit` untuk verifikasi tipe data.
    - Jalankan `npm run test:run` untuk memastikan test suite aman.

---

## 6. Verification & Testing Plan

### Automated Tests
- Menjalankan kompilasi TypeScript: `npx tsc --noEmit`.
- Menjalankan test suite: `npm run test:run`.

### Manual Verification
- Buka antarmuka mobile menu, klik beberapa menu tautan, pastikan setelah halaman terbuka scroll body berfungsi normal tanpa perlu merefresh halaman.
