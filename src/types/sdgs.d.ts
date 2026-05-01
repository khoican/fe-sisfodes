export interface SdgsGoal {
  goals: number
  title: string
  image: string
  score: number
}

export interface SdgsScore {
  average: string
  data: SdgsGoal[]
  total_desa: number
}

export interface SdgsChart {
  label: string
  score: number
}

export interface Sdgs {
  score: SdgsScore
  chart: SdgsChart[]
}
