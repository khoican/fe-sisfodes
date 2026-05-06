import { ENDPOINTS } from '#/constant/endpoint.constant'
import type { ApiResponse } from '#/lib/api/axios'
import { api } from '#/lib/api/axios'
import type { News } from '#/types/news'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const artikelQueryKey = 'artikel' as const

/**
 * Mengambil data artikel desa dari API.
 *
 * @returns {Promise<ApiResponse<News[]>>} Data artikel desa.
 */
export const fetchArtikel = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    const data = await api.get<News[]>(ENDPOINTS.artikel)

    if (Array.isArray(data.response)) {
      data.response.sort((a, b) => {
        const timeA = new Date(a.created_at).getTime()
        const timeB = new Date(b.created_at).getTime()
        return timeB - timeA
      })
    }

    return data
  } catch (error) {
    console.error('Error fetching artikel:', error)
    throw error
  }
})

/**
 * Options untuk TanStack Query guna mengambil data artikel desa.
 *
 * @returns {QueryOptions} Query options object.
 */
export const artikelQueryOptions = () =>
  queryOptions({
    queryKey: [artikelQueryKey],
    queryFn: () => fetchArtikel()
  })
