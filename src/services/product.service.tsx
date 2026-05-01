import { ENDPOINTS } from '#/constant/endpoint.constant';
import { api } from '#/lib/api/axios';
import type { Product } from '#/types/product';
import { queryOptions } from '@tanstack/react-query';
import { createServerFn } from '@tanstack/react-start';

export const productQueryKey = 'product' as const

/**
 * Mengambil data produk desa (UMKM) dari API.
 *
 * @returns {Promise<ApiResponse<Product[]>>} Data produk desa.
 */
export const fetchProducts = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const data = await api.get<Product[]>(ENDPOINTS.produk)
      // Sort dari yang terbaru
      if (Array.isArray(data.response)) {
        data.response.sort((a, b) => {
          const timeA = new Date(a.created_at).getTime()
          const timeB = new Date(b.created_at).getTime()
          return timeB - timeA
        })
      }
      return data
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }
)

/**
 * Mengambil detail produk berdasarkan slug.
 *
 * @param {string} slug - Slug produk.
 * @returns {Promise<ApiResponse<Product>>} Detail produk.
 */
export const fetchProductDetail = createServerFn({ method: 'GET' })
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    try {
      const data = await api.get<Product>(`${ENDPOINTS.produk}/${slug}`)
      return data
    } catch (error) {
      console.error(`Error fetching product detail [${slug}]:`, error)
      throw error
    }
  })

/**
 * Options untuk TanStack Query guna mengambil data produk desa.
 *
 * @returns {QueryOptions} Query options object.
 */
export const productQueryOptions = () =>
  queryOptions({
    queryKey: [productQueryKey],
    queryFn: () => fetchProducts()
  })

/**
 * Options untuk TanStack Query guna mengambil detail produk desa.
 *
 * @param {string} slug - Slug produk.
 * @returns {QueryOptions} Query options object.
 */
export const productDetailQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: [productQueryKey, slug],
    queryFn: () => fetchProductDetail({ data: slug })
  })
