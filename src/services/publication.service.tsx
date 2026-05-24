import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import type { ApiResponse } from '#/lib/api/axios'
import { api } from '#/lib/api/axios'
import type { PublicationCategory } from '#/types/publication'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

/**
 * Mengambil data publikasi desa dari API berdasarkan slug kategori.
 *
 * @param {string} slug - Slug kategori publikasi (rkpdes, rapbdes, bank-data).
 * @returns {Promise<ApiResponse<PublicationCategory>>} Data publikasi desa.
 */
export const fetchPublication = createServerFn({ method: 'GET' })
    .inputValidator((data: { slug: string }) => data)
    .handler(async ({ data }) => {
        const { slug } = data
        try {
            const res = await api.get<PublicationCategory>(
                `${ENDPOINTS.publikasi}/${slug}`,
            )
            return res
        } catch (error) {
            console.error(`Error fetching publication [${slug}]:`, error)
            throw error
        }
    })

/**
 * Options untuk TanStack Query guna mengambil data publikasi desa.
 *
 * @param {string} slug - Slug kategori publikasi.
 * @returns {QueryOptions} Query options object.
 */
export const publicationQueryOptions = (slug: string) =>
    queryOptions({
        queryKey: queryKeys.publication.detail(slug),
        queryFn: () => fetchPublication({ data: { slug } }),
    })
