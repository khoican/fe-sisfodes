export interface IAgenda {
    id: string
    title: string
    description: string
    date: {
        start: string
        end: string
    }
    time: {
        start: string
        end: string
    }
}
