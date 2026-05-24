import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { IOfficial } from '#/types/IOfficial'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

/**
 * Mengambil data perangkat desa dari API.
 *
 * @returns {Promise<ApiResponse<IOfficial[]>>} Data perangkat desa.
 */
export const fetchOfficial = createServerFn({ method: 'GET' }).handler(
    async () => {
        try {
            const data = await api.get<IOfficial[]>(ENDPOINTS.official)
            return data
        } catch (error) {
            console.error('Error fetching official:', error)
            throw error
        }
    },
)

/**
 * Options untuk TanStack Query guna mengambil data perangkat desa.
 *
 * @returns {QueryOptions} Query options object.
 */
export const officialQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.official(),
        queryFn: () => fetchOfficial(),
    })
