export interface Agenda {
    id: string,
    title: string,
    description: string,
    date: {
        start: string,
        end: string
    }
    time: {
        start: string,
        end: string
    },
    location: string,
    is_national: boolean,
    is_holiday: boolean,
    last_updated: string
}