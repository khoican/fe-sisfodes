import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { IAgenda } from '#/types/IAgenda'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

/**
 * Mengambil data agenda desa dari API.
 *
 * @returns {Promise<ApiResponse<IAgenda[]>>} Data agenda desa.
 */
export const fetchAgenda = createServerFn({ method: 'GET' }).handler(
    async () => {
        try {
            const data = await api.get<IAgenda[]>(ENDPOINTS.agenda)
            return data
        } catch (error) {
            console.error('Error fetching agenda:', error)
            throw error
        }
    },
)

/**
 * Options untuk TanStack Query guna mengambil data agenda desa.
 *
 * @returns {QueryOptions} Query options object.
 */
export const agendaQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.agenda(),
        queryFn: () => fetchAgenda(),
    })
