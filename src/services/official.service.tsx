import { ENDPOINTS } from '#/constant/endpoint.constant'
import { api } from '#/lib/api/axios'
import type { Official } from '#/types/official'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const officialQueryKey = 'official' as const

/**
 * Mengambil data perangkat desa dari API.
 * 
 * @returns {Promise<ApiResponse<Official[]>>} Data perangkat desa.
 */
export const fetchOfficial = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const data = await api.get<Official[]>(ENDPOINTS.official)
      return data
    } catch (error) {
      console.error('Error fetching official:', error)
      throw error
    }
  }
)

/**
 * Options untuk TanStack Query guna mengambil data perangkat desa.
 * 
 * @returns {QueryOptions} Query options object.
 */
export const officialQueryOptions = () =>
  queryOptions({
    queryKey: [officialQueryKey],
    queryFn: () => fetchOfficial()
  })
