import type { VillageBudget } from "#/types/budget";

export const budgetData: VillageBudget = {
  year: 2025,
  last_updated: "2025-01-15T08:00:00Z",
  income: {
    title: "APBDes Pendapatan",
    total_planned: 4354312980,
    total_realized: 3048019086,
    items: [
      {
        id: "1",
        label: "Pendapatan Asli Desa",
        planned: 500000000,
        realized: 350000000,
        percentage: 70,
      },
      {
        id: "2",
        label: "Pendapatan Transfer",
        planned: 3854312980,
        realized: 2698019086,
        percentage: 70,
      },
    ],
  },
  expenditure: {
    title: "APBDes Belanja",
    total_planned: 4354312980,
    total_realized: 3875338552,
    items: [
      {
        id: "1",
        label: "Bidang Penyelenggaraan Pemerintahan Desa",
        planned: 1500000000,
        realized: 1350000000,
        percentage: 90,
      },
      {
        id: "2",
        label: "Bidang Pelaksanaan Pembangunan Desa",
        planned: 1854312980,
        realized: 1650000000,
        percentage: 89,
      },
      {
        id: "3",
        label: "Bidang Pembinaan Kemasyarakatan",
        planned: 500000000,
        realized: 475338552,
        percentage: 95,
      },
      {
        id: "4",
        label: "Bidang Pemberdayaan Masyarakat",
        planned: 500000000,
        realized: 400000000,
        percentage: 80,
      },
    ],
  },
  financing: {
    title: "APBDes Pembiayaan",
    total_planned: 100000000,
    total_realized: 85000000,
    items: [
      {
        id: "1",
        label: "Penerimaan Pembiayaan",
        planned: 100000000,
        realized: 85000000,
        percentage: 85,
      },
    ],
  },
};
