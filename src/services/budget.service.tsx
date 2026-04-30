import { ENDPOINTS } from '#/constant/endpoint.constant'
import { api } from '#/lib/api/axios'
import type { VillageBudget } from '#/types/budget'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const budgetQueryKey = 'budget' as const

/**
 * Mengambil data anggaran desa dari API.
 * 
 * @returns {Promise<ApiResponse<VillageBudget>>} Data anggaran desa.
 */
export const fetchBudget = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const data = await api.get<VillageBudget>(ENDPOINTS.budget)
      return data
    } catch (error) {
      console.error('Error fetching budget:', error)
      throw error
    }
  }
)

/**
 * Options untuk TanStack Query guna mengambil data anggaran desa.
 * 
 * @returns {QueryOptions} Query options object.
 */
export const budgetQueryOptions = () =>
  queryOptions({
    queryKey: [budgetQueryKey],
    queryFn: () => fetchBudget()
  })
