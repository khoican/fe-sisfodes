# PLAN_008: Integrasi Gambar Peta ke Halaman Geografi & Penghapusan Peta Desa

## 1. Metadata

- **Author**: Antigravity Agent
- **Created Date**: 2026-05-25
- **Target Area**: types, data, routes, constants
- **Status**: `[x] Completed`
- **Dependencies**: None

---

## 2. Objective & Goal

Memindahkan tampilan visual peta desa dari halaman interaktif terpisah (`/profil/peta-desa`) menjadi sebuah section gambar statis di dalam halaman Geografi Desa (`/profil/geografi-desa`). Rencana ini bertujuan untuk:
1. Menyederhanakan navigasi dengan menggabungkan informasi spasial dan fisik desa ke dalam satu halaman terpadu (Geografi Desa).
2. Menghapus rute halaman `/profil/peta-desa` yang tidak lagi digunakan.
3. Memperbarui tipe data `IGeography` dan data mock `src/data/geography.data.ts` untuk menyertakan URL gambar peta wilayah (`image_map`).

---

## 3. Specifications & Requirements

- **Type Definition Update**: Tambahkan properti `image_map: string` ke dalam interface `IGeography` pada [IGeography.d.ts](file:///E:/PROJECT/sisfodes/src/types/IGeography.d.ts).
- **Mock Data Update**: Perbarui data mock di [geography.data.ts](file:///E:/PROJECT/sisfodes/src/data/geography.data.ts) dengan menambahkan URL gambar peta wilayah desa (menggunakan URL aset imagekit dari config atau placeholder Unsplash bertema peta wilayah).
- **Rute Penghapusan**: Hapus file rute peta desa di [peta-desa.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/peta-desa.tsx).
- **Menu & Footer Cleanup**:
  - Hapus item menu "Peta Desa" di [menu.constant.ts](file:///E:/PROJECT/sisfodes/src/constant/menu.constant.ts).
  - Hapus tautan "Peta Desa" di [footer.data.ts](file:///E:/PROJECT/sisfodes/src/data/footer.data.ts).
- **Geografi Page Enhancement**:
  - Di [geografi-desa.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/geografi-desa.tsx), tambahkan section baru yang menampilkan gambar peta wilayah desa menggunakan `@unpic/react` `Image` secara responsif.
  - Berikan sentuhan desain yang premium dengan card layout, bayangan lembut, hover zoom effect, serta penjelasan deskriptif visual mengenai batas wilayah administratif.

---

## 4. Proposed File Changes

- `[MODIFY]` [IGeography.d.ts](file:///E:/PROJECT/sisfodes/src/types/IGeography.d.ts)
- `[MODIFY]` [geography.data.ts](file:///E:/PROJECT/sisfodes/src/data/geography.data.ts)
- `[DELETE]` [peta-desa.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/peta-desa.tsx)
- `[MODIFY]` [geografi-desa.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/geografi-desa.tsx)
- `[MODIFY]` [menu.constant.ts](file:///E:/PROJECT/sisfodes/src/constant/menu.constant.ts)
- `[MODIFY]` [footer.data.ts](file:///E:/PROJECT/sisfodes/src/data/footer.data.ts)

---

## 5. Step-by-Step Checklist

- `[ ]` **Step 1: Update Tipe Data & Mock Data**
  - Edit [IGeography.d.ts](file:///E:/PROJECT/sisfodes/src/types/IGeography.d.ts) untuk menambahkan field `image_map: string`.
  - Edit [geography.data.ts](file:///E:/PROJECT/sisfodes/src/data/geography.data.ts) untuk menyertakan nilai `image_map` dengan value = `https://ik.imagekit.io/rulls/sisfodes/demo/peta-desa.webp?updatedAt=1777648884236`.
- `[ ]` **Step 2: Bersihkan Navigasi & Hapus File Peta Desa**
  - Hapus file rute [peta-desa.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/peta-desa.tsx).
  - Edit [menu.constant.ts](file:///E:/PROJECT/sisfodes/src/constant/menu.constant.ts) untuk menghapus menu `Peta Desa`.
  - Edit [footer.data.ts](file:///E:/PROJECT/sisfodes/src/data/footer.data.ts) untuk menghapus tautan `Peta Desa`.
- `[ ]` **Step 3: Tambahkan Section Peta di Halaman Geografi**
  - Edit [geografi-desa.tsx](file:///E:/PROJECT/sisfodes/src/routes/profil/geografi-desa.tsx).
  - Tambahkan section visual peta wilayah menggunakan komponen `<Image />` dari `@unpic/react` di bawah section batas wilayah / tata guna lahan.
  - Tambahkan styling hover zoom effect, frame card premium, dan deskripsi keterangannya.
- `[ ]` **Step 4: Verifikasi Kode & Tipe**
  - Jalankan `npx tsc --noEmit` untuk memastikan tidak ada kesalahan tipe program.
  - Jalankan test suite `npm run test:run` untuk memastikan tidak ada pengujian yang rusak/terpengaruh.

---

## 6. Verification & Testing Plan

### Automated Tests
- Menjalankan pemeriksaan TypeScript: `npx tsc --noEmit`.
- Menjalankan test suite: `npm run test:run`.

### Manual Verification
- Jalankan aplikasi secara lokal dan buka `/profil/geografi-desa` untuk memverifikasi tampilan gambar peta baru yang responsif dan berpenampilan premium.
- Pastikan tautan "Peta Desa" sudah tidak ada lagi di menu navigasi header/mobile menu maupun footer.
