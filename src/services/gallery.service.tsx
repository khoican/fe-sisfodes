import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { IGalleryItem } from '#/types/IGalleryItem'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

/**
 * Mengambil list galeri dari API.
 *
 * @returns {Promise<ApiResponse<IGalleryItem[]>>} List galeri.
 */
export const fetchGallery = createServerFn({ method: 'GET' }).handler(
    async () => {
        try {
            const data = await api.get<IGalleryItem[]>(ENDPOINTS.gallery)
            return data
        } catch (error) {
            console.error('Error fetching gallery:', error)
            throw error
        }
    },
)

/**
 * Options untuk TanStack Query guna mengambil data galeri.
 *
 * @returns {QueryOptions} Query options object.
 */
export const galleryQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.gallery(),
        queryFn: () => fetchGallery(),
    })
