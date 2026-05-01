import { ENDPOINTS } from '#/constant/endpoint.constant'
import { api } from '#/lib/api/axios'
import type { Facility } from '#/types/facility'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const facilityQueryKey = 'facilities' as const

/**
 * Mengambil list fasilitas umum dari API.
 * 
 * @returns {Promise<ApiResponse<Facility[]>>} List fasilitas umum.
 */
export const fetchFacilities = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const data = await api.get<Facility[]>(ENDPOINTS.facilities)
      return data
    } catch (error) {
      console.error('Error fetching facilities:', error)
      throw error
    }
  }
)

/**
 * Options untuk TanStack Query guna mengambil data fasilitas umum.
 * 
 * @returns {QueryOptions} Query options object.
 */
export const facilityQueryOptions = () =>
  queryOptions({
    queryKey: [facilityQueryKey],
    queryFn: () => fetchFacilities()
  })
