import { ENDPOINTS } from '#/constant/endpoint.constant'
import type { ApiResponse } from '#/lib/api/axios'
import { api } from '#/lib/api/axios'
import type { News } from '#/types/news'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const penghargaanQueryKey = 'penghargaan' as const

/**
 * Mengambil data penghargaan desa dari API.
 *
 * @returns {Promise<ApiResponse<News[]>>} Data penghargaan desa.
 */
export const fetchPenghargaan = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    const data = await api.get<News[]>(ENDPOINTS.penghargaan)

    if (Array.isArray(data.response)) {
      data.response.sort((a, b) => {
        const timeA = new Date(a.created_at).getTime()
        const timeB = new Date(b.created_at).getTime()
        return timeB - timeA
      })
    }

    return data
  } catch (error) {
    console.error('Error fetching penghargaan:', error)
    throw error
  }
})

/**
 * Options untuk TanStack Query guna mengambil data penghargaan desa.
 *
 * @returns {QueryOptions} Query options object.
 */
export const penghargaanQueryOptions = () =>
  queryOptions({
    queryKey: [penghargaanQueryKey],
    queryFn: () => fetchPenghargaan()
  })
