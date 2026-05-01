import { ENDPOINTS } from '#/constant/endpoint.constant'
import { api } from '#/lib/api/axios'
import type { News } from '#/types/news'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const newsQueryKey = 'news' as const

/**
 * Mengambil data berita desa dari API.
 * 
 * @returns {Promise<ApiResponse<News[]>>} Data berita desa.
 */
export const fetchNews = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const data = await api.get<News[]>(ENDPOINTS.berita)
      // Sort dari yang terbaru
      data.response.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      return data
    } catch (error) {
      console.error('Error fetching news:', error)
      throw error
    }
  }
)

/**
 * Mengambil detail berita berdasarkan slug.
 * 
 * @param {string} slug - Slug berita.
 * @returns {Promise<ApiResponse<News>>} Detail berita.
 */
export const fetchNewsDetail = createServerFn({ method: 'GET' })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    try {
      const data = await api.get<News>(`${ENDPOINTS.berita}/${slug}`)
      return data
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
    queryKey: [newsQueryKey],
    queryFn: () => fetchNews()
  })

/**
 * Options untuk TanStack Query guna mengambil detail berita desa.
 * 
 * @param {string} slug - Slug berita.
 * @returns {QueryOptions} Query options object.
 */
export const newsDetailQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: [newsQueryKey, slug],
    queryFn: () => fetchNewsDetail({ data: slug })
  })
