import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { IHero } from '#/types/IHero'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const fetchHero = createServerFn({ method: 'GET' }).handler(async () => {
    try {
        const data = await api.get<IHero[]>(ENDPOINTS.hero)
        return data
    } catch (error) {
        console.error('Error fetching hero:', error)
        throw error
    }
})

export const heroQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.hero(),
        queryFn: () => fetchHero(),
    })
