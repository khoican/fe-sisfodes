# PLAN_007: Refaktor Layout Beranda & Footer

## 1. Metadata

- **Author**: Antigravity Agent
- **Created Date**: 2025-05-25
- **Target Area**: UI Components, Layout, Data
- **Status**: `[ ] Ready`
- **Dependencies**: Plan 006 (selesai — type discrepancies telah diselesaikan)

---

## 2. Objective & Goal

Melakukan **moderate improvement** pada halaman Beranda (`src/routes/index.tsx`) dan Footer (`src/components/layout/footer.tsx`). Tujuan utama:

1. **Memperbaiki visual** setiap section beranda agar lebih premium dan konsisten dengan design system.
2. **Mengganti mekanisme `HolidayAgendaCard`** yang sebelumnya bergantung pada `IAgenda.is_holiday` (sudah dihapus) dengan sumber data statis hari libur nasional.
3. **Memperbaiki bug** pada `Location.tsx` yang menggunakan prop `as any` pada komponen `Maps`.
4. **Memperbaiki semua link** di footer yang mengarah ke route yang salah atau tidak ada.
5. **Meningkatkan informasi** yang ditampilkan di beberapa section (CTA, nominal APBDes, rasio gender, dll).

Sesuai PRD section 2 (Transparency, Information Hub) dan SRS section 6.3 (Performance), refaktor ini tidak mengubah arsitektur komponen namun memperkuat visual hierarchy dan aksesibilitas konten.

---

## 3. Specifications & Requirements

- **Req 1**: Skala perubahan adalah *moderate* — struktur komponen dipertahankan, visual dan konsistensi ditingkatkan.
- **Req 2**: `HolidayAgendaCard` tetap dipertahankan namun menerima tipe `IHoliday` dari data statis, bukan `IAgenda`.
- **Req 3**: Semua link pada footer harus mengarah ke route yang valid dalam aplikasi.
- **Req 4**: Komponen `Maps` pada `Location.tsx` harus menerima prop `center` dan `zoom` yang benar (tidak menggunakan `as any`).
- **Req 5**: Seluruh perubahan harus tetap type-safe (`tsc --noEmit` bersih).
- **Req 6**: Semua komponen dan hook baru/yang dimodifikasi harus memiliki JSDoc lengkap (`@description`, `@param`, `@returns`, `@example`).
- **Req 7**: Layout responsif mobile-first tetap terjaga di setiap section.

---

## 4. Proposed File Changes

### Data & Logika

- `[NEW]` [holiday.data.ts](file:///E:/PROJECT/sisfodes/src/data/holiday.data.ts)
  - Interface `IHoliday { title: string; date: string }` dan `NATIONAL_HOLIDAYS: IHoliday[]` (hari libur nasional Indonesia 2025).
- `[MODIFY]` [agenda.util.ts](file:///E:/PROJECT/sisfodes/src/utils/agenda.util.ts)
  - Tambahkan static method `getNextHolidayFromList(holidays: IHoliday[], now: Date): IHoliday | undefined`.
- `[MODIFY]` [agenda.hook.ts](file:///E:/PROJECT/sisfodes/src/hooks/agenda.hook.ts)
  - Import `NATIONAL_HOLIDAYS` dan ganti `nextHoliday` dari stub `undefined` ke `AgendaHelper.getNextHolidayFromList(NATIONAL_HOLIDAYS, now)`.
- `[MODIFY]` [footer.data.ts](file:///E:/PROJECT/sisfodes/src/data/footer.data.ts)
  - Perbaiki semua link yang salah route dan tambahkan kolom ketiga "Transparansi".

### Komponen Agenda

- `[MODIFY]` [holiday.tsx](file:///E:/PROJECT/sisfodes/src/components/shared/card/agenda/holiday.tsx)
  - Update props dari `{ agenda: IAgenda }` → `{ holiday: IHoliday }`.
  - Sesuaikan field: `agenda.title` → `holiday.title`, `agenda.date.start` → `holiday.date`.
- `[MODIFY]` [AnnouncementAgenda.tsx](file:///E:/PROJECT/sisfodes/src/components/layout/home/AnnouncementAgenda.tsx)
  - Sesuaikan import & passing prop ke `HolidayAgendaCard` dengan tipe `IHoliday` yang baru.

### Section Beranda

- `[MODIFY]` [Hero.tsx](file:///E:/PROJECT/sisfodes/src/components/layout/home/Hero.tsx)
  - Tingkatkan tinggi hero: `h-[50vh]` → `h-[60vh] md:h-[70vh]`.
  - Perkuat gradient overlay: `from-black/10 via-black/30 to-black/80`.
  - Tambahkan 2 CTA button: "Profil Desa" → `/profil/profil-desa` dan "Ajukan Layanan" → `/layanan`.
  - Tambahkan slide indicator dots untuk menunjukkan posisi slide aktif.
- `[MODIFY]` [Demography.tsx](file:///E:/PROJECT/sisfodes/src/components/layout/home/Demography.tsx)
  - Tambahkan rasio gender bar (progress bar laki-laki vs perempuan).
  - Tambahkan `Link` ke `/statistik/kependudukan` di bawah card.
- `[MODIFY]` [Budget.tsx](file:///E:/PROJECT/sisfodes/src/components/layout/home/Budget.tsx)
  - Perbaiki Button "Lihat Laporan Lengkap" menggunakan `<Link to="/publikasi/apbdes">`.
  - Tambahkan total nominal APBDes (`budget.income.total_planned`) sebagai angka headline.
- `[MODIFY]` [Welcome.tsx](file:///E:/PROJECT/sisfodes/src/components/layout/home/Welcome.tsx)
  - Tambahkan background card dengan subtle gradient (`from-card to-primary/5`).
  - Tambahkan badge jabatan di atas nama pemimpin.
  - Tambahkan tanda kutip dekoratif (typographic quote mark `❝`) pada teks sambutan.
  - Beri foto pemimpin styling `ring-4 ring-primary/20`.
- `[MODIFY]` [News.tsx](file:///E:/PROJECT/sisfodes/src/components/layout/home/News.tsx)
  - Ubah dari 3-column uniform ke asymmetric layout: berita pertama besar (span 2 col, `layout="horizontal"`), 2 berita berikutnya kecil di kolom kanan.
- `[MODIFY]` [Location.tsx](file:///E:/PROJECT/sisfodes/src/components/layout/home/Location.tsx)
  - **Fix bug**: Ganti prop `position as any` menjadi `center={[parseFloat(latitude), parseFloat(longitude)]} zoom={15}`.
  - Tambahkan link "Buka di Google Maps" menggunakan koordinat.
  - Ganti import icon dari `react-icons` ke `lucide-react` untuk konsistensi.

### Footer

- `[MODIFY]` [footer.tsx](file:///E:/PROJECT/sisfodes/src/components/layout/footer.tsx)
  - Ubah background dari `bg-card` ke dark footer (gunakan `bg-foreground text-background` atau warna gelap dari token).
  - Tambahkan `aria-label="Footer navigasi"` pada elemen `<footer>`.
  - Tambahkan separator (`border-t border-white/10`) antara main content dan copyright bar.
  - Update copyright bar: tampilkan kredit "Dikembangkan oleh ANTARDATA CAKRAWALA TEKNOLOGI".
  - Update grid dari `lg:grid-cols-4` — logo + 3 kolom link (setelah penambahan kolom Transparansi).

---

## 5. Step-by-Step Checklist

- `[ ]` **Step 1: Data & Logika Holiday**
  - Buat `src/data/holiday.data.ts` dengan interface `IHoliday` dan data `NATIONAL_HOLIDAYS` (hari libur nasional 2025).
  - Tambahkan method `static getNextHolidayFromList` ke `AgendaHelper` di `agenda.util.ts`.
  - Update `agenda.hook.ts` agar `nextHoliday` menggunakan data statis tersebut.
  - Update `holiday.tsx` agar menerima prop `IHoliday`.
  - Update `AnnouncementAgenda.tsx` agar meneruskan `IHoliday` ke `HolidayAgendaCard`.

- `[ ]` **Step 2: Footer Data & Layout**
  - Update `footer.data.ts`: perbaiki semua link, tambahkan kolom "Transparansi".
  - Update `footer.tsx`: dark background, separator, copyright bar, `aria-label`, grid 4 kolom.

- `[ ]` **Step 3: Hero Section**
  - Update `Hero.tsx`: tinggi baru, gradient overlay baru, CTA buttons, slide indicator dots.

- `[ ]` **Step 4: Section Demography & Budget**
  - Update `Demography.tsx`: rasio gender bar, link ke statistik.
  - Update `Budget.tsx`: fix link `<Link>`, tambah total nominal headline.

- `[ ]` **Step 5: Welcome Section**
  - Update `Welcome.tsx`: background card, badge jabatan, quote dekoratif, foto ring styling.

- `[ ]` **Step 6: News & Location Section**
  - Update `News.tsx`: asymmetric layout featured + 2 kecil.
  - Update `Location.tsx`: fix bug `as any`, link Google Maps, ganti icon ke lucide.

- `[ ]` **Step 7: JSDoc & Code Analyzer**
  - Pastikan semua file yang dimodifikasi memiliki JSDoc lengkap (`@description`, `@param`, `@returns`, `@example`).
  - Jalankan skill `code-analyzer` untuk verifikasi konsistensi arsitektur.

- `[ ]` **Step 8: Verifikasi**
  - Jalankan `node node_modules/typescript/bin/tsc --noEmit` — pastikan 0 errors.
  - Jalankan `node node_modules/vitest/vitest.mjs run` — pastikan semua test pass.
  - Lakukan git commit dengan pesan yang deskriptif.

---

## 6. Verification & Testing Plan

### Automated Tests

```bash
node node_modules/typescript/bin/tsc --noEmit
node node_modules/vitest/vitest.mjs run
```

### Manual Verification

- **Hero**: CTA button muncul di atas teks, slide dots tampil di pojok kanan bawah, tinggi visual lebih besar.
- **HolidayAgendaCard**: Muncul di beranda jika hari libur nasional terdekat tersedia dari data statis.
- **Budget**: Button "Lihat Laporan Lengkap" bernavigasi ke `/publikasi/apbdes`.
- **News**: Berita pertama tampil besar di kiri, 2 berikutnya kecil di kanan pada desktop.
- **Location**: Peta tampil tanpa error (tidak ada `as any`), link Google Maps berfungsi.
- **Footer**: Link navigasi mengarah ke route yang benar, tampilan dark dan ada separator sebelum copyright.
