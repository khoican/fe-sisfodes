import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { Population } from '#/types/population'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

/**
 * Mengambil data kependudukan dari API.
 *
 * @returns {Promise<ApiResponse<Population>>} Data kependudukan.
 */
export const fetchPopulation = createServerFn({ method: 'GET' }).handler(
    async () => {
        try {
            const data = await api.get<Population>(ENDPOINTS.population)
            return data
        } catch (error) {
            console.error('Error fetching population:', error)
            throw error
        }
    },
)

/**
 * Options untuk TanStack Query guna mengambil data kependudukan.
 *
 * @returns {QueryOptions} Query options object.
 */
export const populationQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.population(),
        queryFn: () => fetchPopulation(),
    })
