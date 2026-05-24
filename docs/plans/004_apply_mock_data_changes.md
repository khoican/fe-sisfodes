# Plan: Penyesuaian Data Mock dengan Perubahan Interface (PLAN_004)

## Plan ID: PLAN_004 - Penyesuaian Data Mock dengan Perubahan Interface

---

## 1. Metadata

- **Author**: Antigravity
- **Created Date**: 2026-05-25
- **Target Area**: Mock Data (`src/data/`)
- **Status**: `[ ] Draft / [ ] Ready / [ ] In Progress / [ ] Completed`
- **Dependencies**: None

---

## 2. Objective & Goal

Menyesuaikan seluruh data mock yang terdapat di folder `src/data/` agar sesuai dengan struktur tipe (*type interface*) terbaru di folder `src/types/` yang telah diubah oleh pengguna. Hal ini penting untuk memastikan tidak ada kesalahan tipe (*type errors*) pada saat kompilasi data mock.

---

## 3. Specifications & Requirements

Berikut adalah spesifikasi perubahan yang perlu diterapkan pada setiap data mock berdasarkan perbedaan tipe/interface terbaru:

1. **`src/data/agenda.data.ts`** (Sesuai `IAgenda`):
   - Hapus properti `location`, `is_national`, `is_holiday`, dan `last_updated`.

2. **`src/data/facility.data.ts`** (Sesuai `IFacility`):
   - Hapus properti `category`, `coordinates`, `image`, `status`, `metadata`, dan `last_updated`.
   - Tambahkan properti `images: string[]` (menggunakan URL gambar lama sebagai elemen array).

3. **`src/data/gallery.data.ts`** (Sesuai `IGalleryItem`):
   - Hapus properti `category`, `description`, dan `date`.
   - Tambahkan properti `uploaded_at: string` (menggunakan nilai dari properti `date` lama).

4. **`src/data/geography.data.ts`** (Sesuai `IGeography`):
   - Pastikan kecocokan tipe (properti `area` dan `altitude` tetap berupa angka tanpa komentar satuan di tipe data).

5. **`src/data/institution.data.ts`** (Sesuai `IInstitution`):
   - Hapus properti `full_name`, `tasks`, `functions`, `members`, dan `last_updated`.
   - Ubah properti `mission` yang sebelumnya berupa array dari string (`string[]`) menjadi string tunggal (`string`).
   - Tambahkan properti `images: string[]` (misalnya menggunakan array kosong atau URL gambar demo).

6. **`src/data/news.data.ts`** (Sesuai `INews`):
   - Ubah properti `image: string` menjadi `images: string[]` (mengemas URL gambar tunggal ke dalam array).

7. **`src/data/profile.data.ts`** (Sesuai `IProfile`):
   - Hapus properti `address.country`.

8. **`src/data/sdgs.data.ts`** (Sesuai `ISdgs`):
   - Ubah struktur `sdgsData` agar properti `average`, `data`, dan `total_desa` berada di tingkat teratas (*root level*).
   - Hapus pembungkus (*nesting*) `score`.
   - Hapus properti `chart` karena tidak ada lagi di dalam interface `ISdgs`.

---

## 4. Proposed File Changes

Identifikasi file data mock yang akan diubah:

- `[MODIFY]` [agenda.data.ts](file:///E:/PROJECT/sisfodes/src/data/agenda.data.ts)
- `[MODIFY]` [facility.data.ts](file:///E:/PROJECT/sisfodes/src/data/facility.data.ts)
- `[MODIFY]` [gallery.data.ts](file:///E:/PROJECT/sisfodes/src/data/gallery.data.ts)
- `[MODIFY]` [institution.data.ts](file:///E:/PROJECT/sisfodes/src/data/institution.data.ts)
- `[MODIFY]` [news.data.ts](file:///E:/PROJECT/sisfodes/src/data/news.data.ts)
- `[MODIFY]` [profile.data.ts](file:///E:/PROJECT/sisfodes/src/data/profile.data.ts)
- `[MODIFY]` [sdgs.data.ts](file:///E:/PROJECT/sisfodes/src/data/sdgs.data.ts)

---

## 5. Step-by-Step Checklist

Langkah-langkah yang akan dieksekusi:

- `[ ]` **Step 1: Update agenda.data.ts**
    - Hapus `location`, `is_national`, `is_holiday`, dan `last_updated` dari semua item.
- `[ ]` **Step 2: Update facility.data.ts**
    - Hapus `category`, `coordinates`, `image`, `status`, `metadata`, dan `last_updated`.
    - Tambahkan `images: string[]` untuk semua item.
- `[ ]` **Step 3: Update gallery.data.ts**
    - Hapus `category`, `description`, dan `date`.
    - Tambahkan `uploaded_at: string` untuk semua item.
- `[ ]` **Step 4: Update institution.data.ts**
    - Hapus `full_name`, `tasks`, `functions`, `members`, dan `last_updated`.
    - Ubah `mission` dari `string[]` menjadi `string` (gabungkan jika ada beberapa poin misi menggunakan newline atau spasi).
    - Tambahkan properti `images: string[]` (misalnya menggunakan array berisi logo institusi atau array kosong `[]`).
- `[ ]` **Step 5: Update news.data.ts**
    - Ubah `image` menjadi `images` dengan tipe array string.
- `[ ]` **Step 6: Update profile.data.ts**
    - Hapus `address.country`.
- `[ ]` **Step 7: Update sdgs.data.ts**
    - Ubah struktur `sdgsData` dengan memindahkan properti dari `score` ke root level.
    - Hapus properti `chart`.
- `[ ]` **Step 8: Update image**
- `[ ]` **Step 8: Verifikasi Awal**
    - Pastikan semua file di `src/data/` terbebas dari kesalahan tipe TypeScript (*TypeScript compilation errors*).
    - *Catatan*: Perubahan ini mungkin memicu kesalahan tipe di komponen UI atau layanan (*services*) yang membaca properti yang dihapus. Penyesuaian pada file UI/layanan akan dikerjakan pada rencana terpisah.

---

## 6. Verification & Testing Plan

### Automated Tests
- Menjalankan `npx tsc --noEmit` untuk memverifikasi keselarasan tipe data mock dengan interface terbaru.

### Manual Verification
- Memastikan file data mock berhasil di-compile tanpa error tipe TypeScript pada level deklarasi data mock itu sendiri.
