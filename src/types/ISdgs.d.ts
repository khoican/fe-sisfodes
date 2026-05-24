export interface ISdgsGoal {
    goals: number
    title: string
    image: string
    score: number
}

export interface ISdgsScore {
    average: string
    data: ISdgsGoal[]
    total_desa: number
}

export interface ISdgsChart {
    label: string
    score: number
}

export interface ISdgs {
    score: ISdgsScore
    chart: ISdgsChart[]
}
