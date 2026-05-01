import { ENDPOINTS } from '#/constant/endpoint.constant'
import { api } from '#/lib/api/axios'
import type { GalleryItem } from '#/types/gallery'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const galleryQueryKey = 'gallery' as const

/**
 * Mengambil list galeri dari API.
 * 
 * @returns {Promise<ApiResponse<GalleryItem[]>>} List galeri.
 */
export const fetchGallery = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const data = await api.get<GalleryItem[]>(ENDPOINTS.gallery)
      return data
    } catch (error) {
      console.error('Error fetching gallery:', error)
      throw error
    }
  }
)

/**
 * Options untuk TanStack Query guna mengambil data galeri.
 * 
 * @returns {QueryOptions} Query options object.
 */
export const galleryQueryOptions = () =>
  queryOptions({
    queryKey: [galleryQueryKey],
    queryFn: () => fetchGallery()
  })
