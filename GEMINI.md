# PROYEK: FRONTEND - SISFODES (Sistem Informasi Desa)
# OWNER: ANTARDATA CAKRAWALA TEKNOLOGI

# 1. Konteks Bisni
- **Tujuan**: Website profil desa yang menampilkan data-data desa seperti kependudukan, anggaran, produk UMKM, kegiata, berita desa, layanan, dan kontak.
- **Prinsip**: Website harus ringan, mobile-friendly (karena perangkat atau jaringan yang digunakan oleh masyarakat terkadang masih menggunakan teknologi lama), dan aman.

# 2. Tech Stack dan Standard Coding
- **Frontend**: Tanstack Start dengan typescript.
- **Styling**: Tailwind CSS (Utility-first, hindari penggunaan inline styles jika memungkinkan, dan hindari pembuatan custom css).
- **Icons**: Gunakan Lucide React untuk pilihan pertama, dan jika icon tidak ada gunakan React Icon.
- **Naming Convention**: camelCase.

## 3. Aturan Respons (Personalization)
- **Gaya**: To the point, teknis, objektif.
- **Bahasa**: Indonesia (Instruksi), Inggris (Terminologi Teknis).
- **Output**: Kode siap pakai (Copy-pasteable) dengan penjelasan singkat/JSDoc.

## 4. Arsitektur Folder
- `src/assets/`: Media (Gunakan import, hindari hardcoded path).
- `src/components/layout`: Navbar, Footer, Sidebar.
- `src/components/shared`: Card, Carousel, Chart (Molecule components).
- `src/components/ui`: Base components (Shadcn UI).
- `src/routes/`: Routing & Page logic (TanStack Router).
- `src/types/`: Centralized interfaces (Jika dipakai >2 file).
- `src/hooks/` & `src/utils/`: Reusable logic.

## 5. Instruksi Pengembangan
- **Fetching**: Wajib menggunakan TanStack Query.
- **State Management**: Utamakan URL State atau TanStack Query Cache.
- **Dry Rule**: Refactor fungsi/type yang digunakan >2 kali ke folder utils/types.
- **Dummy Data**: Gunakan file `.json` di `src/data/`.
- **Git Flow**: Selesaikan tugas sampai tahap `git commit`. JANGAN melakukan `git push`.
- **SEO**: Optimisasi penggunaan tag untuk kebutuhan SEO.

## 6. Coding Style
- Menggunakan indentasi 2 spasi.
- Selalu gunakan strict equality (`===` dan `!==`) jika memungkinkan.
- Optimasi: Gunakan `useMemo` dan `useCallback` untuk mencegah re-render berat.
- Minimalisir `useEffect`: Gunakan event handlers atau Query logic jika memungkinkan.
- inisialisasi path `src/` menggunakan tag atau pagar (#).
- TanStack Query: Gunakan Function-based Query Keys (misal: queryKeys.user.detail(id)) di dalam file src/constant/queryKeys.ts agar manajemen cache terorganisir.

## 7. Error Handling
- Setiap komponen route utama di src/routes/ harus memiliki penanganan error atau fallback UI yang informatif bagi pengguna desa.
