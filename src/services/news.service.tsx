import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { INews } from '#/types/INews'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

/**
 * Mengambil data berita desa dari API.
 *
 * @returns {Promise<ApiResponse<INews[]>>} Data berita desa.
 */
export const fetchNews = createServerFn({ method: 'GET' }).handler(async () => {
    try {
        const data = await api.get<INews[]>(ENDPOINTS.berita)

        // Sort dari yang terbaru jika response merupakan array
        if (Array.isArray(data.response)) {
            data.response.sort((a, b) => {
                const timeA = new Date(a.created_at).getTime()
                const timeB = new Date(b.created_at).getTime()
                return timeB - timeA
            })
        }

        return data
    } catch (error) {
        console.error('Error fetching news:', error)
        throw error
    }
})

/**
 * Mengambil detail berita berdasarkan slug.
 *
 * @param {string} slug - Slug berita.
 * @returns {Promise<ApiResponse<INews>>} Detail berita.
 */
export const fetchNewsDetail = createServerFn({ method: 'GET' })
    .inputValidator((data: { slug: string }) => data)
    .handler(async ({ data }) => {
        const { slug } = data
        try {
            const res = await api.get<INews>(`${ENDPOINTS.berita}/${slug}`)
            return res
        } catch (error) {
            console.error(`Error fetching news detail [${slug}]:`, error)
            throw error
        }
    })

/**
 * Options untuk TanStack Query guna mengambil data berita desa.
 *
 * @returns {QueryOptions} Query options object.
 */
export const newsQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.news.all(),
        queryFn: () => fetchNews(),
    })

/**
 * Options untuk TanStack Query guna mengambil detail berita desa.
 *
 * @returns {QueryOptions} Query options object.
 */
export const newsDetailQueryOptions = (slug: string) =>
    queryOptions({
        queryKey: queryKeys.news.detail(slug),
        queryFn: () => fetchNewsDetail({ data: { slug } }),
    })
