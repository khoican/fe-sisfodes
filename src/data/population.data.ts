import type { Population } from "#/types/population";

export const population: Population = {
  population: 3250,
  family: 980,
  density: 450,
  male: 1610,
  female: 1640,
  religion: {
    islam: 2850,
    kristen: 180,
    katolik: 120,
    hindu: 65,
    buddha: 30,
    konghucu: 5
  },
  age: [
    { age: "0-5", population: 280 },
    { age: "6-12", population: 350 },
    { age: "13-17", population: 310 },
    { age: "18-25", population: 450 },
    { age: "26-45", population: 980 },
    { age: "46-65", population: 650 },
    { age: "65+", population: 230 }
  ],
  administrative: [
    { dusun: "Krajan", population: 1100 },
    { dusun: "Sukomaju", population: 850 },
    { dusun: "Sumberasri", population: 700 },
    { dusun: "Tanjungsari", population: 600 }
  ]
};