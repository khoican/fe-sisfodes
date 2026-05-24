import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { Geography } from '#/types/geography'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

/**
 * Mengambil data geografi desa dari API.
 *
 * @returns {Promise<ApiResponse<Geography>>} Data geografi desa.
 */
export const fetchGeography = createServerFn({ method: 'GET' }).handler(
    async () => {
        try {
            const data = await api.get<Geography>(ENDPOINTS.geography)
            return data
        } catch (error) {
            console.error('Error fetching geography:', error)
            throw error
        }
    },
)

/**
 * Options untuk TanStack Query guna mengambil data geografi desa.
 *
 * @returns {QueryOptions} Query options object.
 */
export const geographyQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.geography(),
        queryFn: () => fetchGeography(),
    })
