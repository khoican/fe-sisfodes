import type { Population } from "#/types/population";

export const populationData: Population = {
  total_residents: 3250,
  total_households: 980,
  population_density: 450,
  by_gender: {
    male: 1610,
    female: 1640,
  },
  by_religion: {
    islam: 2850,
    christianity: 180,
    catholicism: 120,
    hinduism: 65,
    buddhism: 30,
    other: 5,
  },
  by_age: [
    { label: "0-5", count: 280 },
    { label: "6-12", count: 350 },
    { label: "13-17", count: 310 },
    { label: "18-25", count: 450 },
    { label: "26-45", count: 980 },
    { label: "46-65", count: 650 },
    { label: "65+", count: 230 },
  ],
  by_education: [
    { label: "Tidak/Belum Sekolah", count: 450 },
    { label: "SD/Sederajat", count: 850 },
    { label: "SMP/Sederajat", count: 620 },
    { label: "SMA/Sederajat", count: 880 },
    { label: "Diploma/Sarjana", count: 450 },
  ],
  by_administration: [
    { label: "Dusun Krajan", count: 1100 },
    { label: "Dusun Sukomaju", count: 850 },
    { label: "Dusun Sumberasri", count: 700 },
    { label: "Dusun Tanjungsari", count: 600 },
  ],
  last_updated: "2025-01-01",
};
