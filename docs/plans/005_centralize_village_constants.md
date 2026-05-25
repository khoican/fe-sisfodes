# Plan: Data Konstanta Informasi Desa Multi-Domain (PLAN_005)

## Plan ID: PLAN_005 - Sentralisasi Konstanta Informasi Desa untuk Multi-Domain

---

## 1. Metadata

- **Author**: Antigravity
- **Created Date**: 2026-05-25
- **Target Area**: Constants (`src/constant/`), Utilities (`src/utils/`), Layouts & Routes
- **Status**: `[ ] Draft / [x] Ready / [x] In Progress / [x] Completed`
- **Dependencies**: None

---

## 2. Objective & Goal

Membuat sistem data konstanta terpusat untuk informasi administratif desa (seperti nama desa, logo, alamat, lokasi geografis/koordinat, akun sosial media, dan email) yang bersifat statis dan tidak memerlukan fetching data API. Konstanta ini dirancang secara multi-tenant (*multi-domain*) agar satu proyek induk ini dapat digunakan oleh beberapa domain desa yang berbeda secara dinamis berdasarkan hostname/domain penilai request (*host-based routing*).

---

## 3. Specifications & Requirements

### 1. Struktur Interface Konfigurasi (`IVillageConfig`)
Mendefinisikan tipe data kontrak untuk setiap konfigurasi desa. Properti yang dibutuhkan meliputi:
- `id`: Identifier unik (misal: `'sumberkejayan'`).
- `hostnames`: Array domain/hostname yang terasosiasi (misal: `['sumberkejayan.desa.id', 'localhost']`).
- `name`: Nama resmi desa (misal: `'Desa Sumberkejayan'`).
- `tagline`: Slogan desa.
- `logo`: Path ke file logo desa di aset lokal/CDN.
- `address.street`, `address.hamlet`, `address.district`, `address.regency`, `address.province`, `address.postal_code`: Struktur alamat lengkap (jalan, dusun, kecamatan, kabupaten, provinsi, kode pos).
- `map`: mengarah ke dalam `https://ik.imagekit.io/rulls/sisfodes/demo/peta-desa.webp?updatedAt=1777648884236?tr=f-webp`
- `location.longitude` dan `location.latitude`: Koordinat titik peta default (lat, lng) untuk widget peta desa.
- `contacts.phone`, `contacts.whatsapp`, `contacts.email`: Kontak desa (nomor telepon, WhatsApp, email).
- `socials.facebook`, `socials.instagram`, `socials.youtube`, `socials.twitter`: Tautan media sosial (Facebook, Instagram, YouTube, Twitter) (opsional).
- `theme`: Warna primer Tailwind (`primary`, `green`, `pink`, `purple`, dan `yellow`).

### 2. File Konstanta Terpusat (`src/constant/village.constant.ts`)
Mengandung daftar konfigurasi desa terdaftar menggunakan struktur Key-Value (Record).
- Menyediakan data lengkap untuk desa utama (`sumberkejayan`).
- Menyediakan minimal 1 data desa dummy tambahan (misal: `'desademo'`) untuk mensimulasikan kegunaan proyek induk multi-domain.

### 3. Utilitas Resolver Tenant (`src/utils/tenant.util.ts`)
Fungsi pendeteksi domain aktif yang aman digunakan baik di sisi server (SSR) maupun sisi klien (CSR).
- Mengambil hostname dari request URL (atau `window.location.hostname` jika di browser).
- Mencocokkan hostname dengan konfigurasi desa yang terdaftar di `VILLAGES_CONFIG`.
- Memiliki mekanisme *fallback* ke konfigurasi desa utama jika hostname tidak terdaftar.

### 4. Refaktorisasi Layout & Metadata
- **Layouts (`Header`, `Footer`)**: Membaca nama desa, logo, kontak, alamat, dan link sosmed dari hasil resolver tenant, bukan berupa string hardcode.
- **Routes Meta (`head` function)**: Menjadikan judul halaman dinamis (misal: `"Beranda | " + activeVillage.name`).

---

## 4. Proposed File Changes

- `[NEW]` [village.constant.ts](file:///E:/PROJECT/sisfodes/src/constant/village.constant.ts) (Menampung interface `IVillageConfig` dan data konstanta multi-desa)
- `[NEW]` [tenant.util.ts](file:///E:/PROJECT/sisfodes/src/utils/tenant.util.ts) (Utilitas pendeteksi desa aktif berdasarkan domain)
- `[MODIFY]` [Header.tsx](file:///E:/PROJECT/sisfodes/src/components/layout/Header.tsx) (Dinamisasi logo dan nama desa)
- `[MODIFY]` [Footer.tsx](file:///E:/PROJECT/sisfodes/src/components/layout/Footer.tsx) (Dinamisasi alamat, kontak, dan link sosial media)
- `[MODIFY]` [__root.tsx](file:///E:/PROJECT/sisfodes/src/routes/__root.tsx) (Dinamisasi meta global dan title)
- `[MODIFY]` [index.tsx](file:///E:/PROJECT/sisfodes/src/routes/index.tsx) (Dinamisasi title halaman utama)

---

## 5. Step-by-Step Checklist

- `[x]` **Step 1: Pembuatan Konstanta & Tipe Data**
    - Buat file `src/constant/village.constant.ts`.
    - Deklarasikan interface `IVillageConfig`.
    - Buat objek `VILLAGES_CONFIG` yang berisi konfigurasi Desa Sumberkejayan dan Desa Demo.
- `[x]` **Step 2: Pembuatan Resolver Tenant**
    - Buat file `src/utils/tenant.util.ts`.
    - Implementasikan logika deteksi hostname yang aman untuk SSR (menggunakan context request/headers jika di server) dan CSR (`window.location.hostname`).
- `[x]` **Step 3: Integrasi pada Layout Utama**
    - Refaktor `Header` untuk menampilkan logo dan nama dari config desa aktif.
    - Refaktor `Footer` untuk menampilkan alamat lengkap, sosial media, dan kontak desa aktif.
- `[x]` **Step 4: Integrasi pada Metadata Halaman**
    - Perbarui fungsi `head` pada rute utama dan rute global agar menggunakan data nama desa dari resolver secara dinamis.
- `[x]` **Step 5: Verifikasi Kode & Uji Coba Multi-Domain**
    - Jalankan `code-analyzer` untuk memastikan kepatuhan terhadap aturan arsitektur.
    - Lakukan uji simulasi dengan mengubah hostname target secara manual untuk melihat perubahan seluruh konfigurasi visual dan teks desa di halaman web.

---

## 6. Verification & Testing Plan

### Automated Tests
- Menjalankan `npx tsc --noEmit` untuk memastikan tidak ada kesalahan kompilasi tipe.
- Menjalankan unit test `npm run test:run` untuk memastikan tidak terjadi regresi kode.

### Manual Verification
- Uji coba dengan menyimulasikan hostname yang berbeda di resolver, lalu verifikasi bahwa nama desa, logo, alamat, koordinat peta dasar, dan link media sosial di UI berubah secara otomatis tanpa melakukan fetching data API tambahan.
