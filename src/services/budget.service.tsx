import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { IVillageBudget } from '#/types/IVillageBudget'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

/**
 * Mengambil data anggaran desa dari API.
 *
 * @returns {Promise<ApiResponse<IVillageBudget>>} Data anggaran desa.
 */
export const fetchBudget = createServerFn({ method: 'GET' }).handler(
    async () => {
        try {
            const data = await api.get<IVillageBudget>(ENDPOINTS.budget)
            return data
        } catch (error) {
            console.error('Error fetching budget:', error)
            throw error
        }
    },
)

/**
 * Options untuk TanStack Query guna mengambil data anggaran desa.
 *
 * @returns {QueryOptions} Query options object.
 */
export const budgetQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.budget(),
        queryFn: () => fetchBudget(),
    })
