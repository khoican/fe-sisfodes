import { ENDPOINTS } from '#/constant/endpoint.constant'
import { api } from '#/lib/api/axios'
import type { Hero } from '#/types/hero'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const heroQueryKey = 'hero' as const

export const fetchHero = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const data = await api.get<Hero[]>(ENDPOINTS.hero)
      return data
    } catch (error) {
      console.error('Error fetching hero:', error)
      throw error
    }
  }
)

export const heroQueryOptions = () =>
  queryOptions({
    queryKey: [heroQueryKey],
    queryFn: () => fetchHero()
  })
