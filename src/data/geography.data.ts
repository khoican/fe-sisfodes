import type { Geography } from "#/types/geography";

export const geographyData: Geography = {
  total_area: 125.5,
  topography: "Dataran Rendah",
  altitude: 150,
  climate: "Tropis (24°C - 32°C)",
  borders: {
    north: "Desa Sukomaju",
    south: "Desa Sumberasri",
    east: "Kecamatan Rejoagung",
    west: "Hutan Lindung Perhutani"
  },
  land_use: [
    { label: "Lahan Pertanian", area: 75.2, percentage: 60 },
    { label: "Pemukiman", area: 30.1, percentage: 24 },
    { label: "Fasilitas Umum", area: 12.5, percentage: 10 },
    { label: "Hutan Desa/Lainnya", area: 7.7, percentage: 6 }
  ],
  last_updated: "2025-01-01"
};
