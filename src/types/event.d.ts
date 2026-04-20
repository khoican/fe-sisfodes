import type { News } from '#/types/news'

export interface Event extends News {
    date: Date
    time: string
    location: string
}