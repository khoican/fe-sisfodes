export interface ISdgsGoal {
    goals: number
    title: string
    image: string
    score: number
}

export interface ISdgs {
    average: string
    data: ISdgsGoal[]
    total_desa: number
}

export interface ISdgsChart {
    label: string
    score: number
}
