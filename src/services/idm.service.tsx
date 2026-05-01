import { ENDPOINTS } from '#/constant/endpoint.constant';
import { api } from '#/lib/api/axios';
import type { Idm } from '#/types/idm';
import { queryOptions } from '@tanstack/react-query';
import { createServerFn } from '@tanstack/react-start';

export const idmQueryKey = 'idm' as const

/**
 * Mengambil data Indeks Desa Membangun (IDM) dari API.
 * 
 * @returns {Promise<ApiResponse<Idm>>} Data IDM.
 */
export const fetchIdm = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const data = await api.get<Idm>(ENDPOINTS.idm)
      return data
    } catch (error) {
      console.error('Error fetching IDM:', error)
      throw error
    }
  }
)

/**
 * Options untuk TanStack Query guna mengambil data IDM.
 * 
 * @returns {QueryOptions} Query options object.
 */
export const idmQueryOptions = () =>
  queryOptions({
    queryKey: [idmQueryKey],
    queryFn: () => fetchIdm()
  })
