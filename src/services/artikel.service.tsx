import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { INews } from '#/types/INews'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

/**
 * Mengambil data artikel desa dari API.
 *
 * @returns {Promise<ApiResponse<INews[]>>} Data artikel desa.
 */
export const fetchArtikel = createServerFn({ method: 'GET' }).handler(
    async () => {
        try {
            const data = await api.get<INews[]>(ENDPOINTS.artikel)

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
    },
)

/**
 * Options untuk TanStack Query guna mengambil data artikel desa.
 *
 * @returns {QueryOptions} Query options object.
 */
export const artikelQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.artikel(),
        queryFn: () => fetchArtikel(),
    })
