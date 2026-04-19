export interface Population {
  population: number
  family: number
  density: number
  male: number
  female: number
  religion: {
    islam: number
    kristen: number
    katolik: number
    hindu: number
    buddha: number
    konghucu: number
  }
  age: {
    age: string
    population: number
  }[]
  administrative: {
    dusun: string
    population: number
  }[]
}
