import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { IFacility } from '#/types/IFacility'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

/**
 * Mengambil list fasilitas umum dari API.
 *
 * @returns {Promise<ApiResponse<IFacility[]>>} List fasilitas umum.
 */
export const fetchFacilities = createServerFn({ method: 'GET' }).handler(
    async () => {
        try {
            const data = await api.get<IFacility[]>(ENDPOINTS.facilities)
            return data
        } catch (error) {
            console.error('Error fetching facilities:', error)
            throw error
        }
    },
)

/**
 * Options untuk TanStack Query guna mengambil data fasilitas umum.
 *
 * @returns {QueryOptions} Query options object.
 */
export const facilityQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.facility(),
        queryFn: () => fetchFacilities(),
    })
