import { ENDPOINTS } from '#/constant/endpoint.constant'
import { api } from '#/lib/api/axios'
import type { Agenda } from '#/types/agenda'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const agendaQueryKey = 'agenda' as const

/**
 * Mengambil data agenda desa dari API.
 * 
 * @returns {Promise<ApiResponse<Agenda[]>>} Data agenda desa.
 */
export const fetchAgenda = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const data = await api.get<Agenda[]>(ENDPOINTS.agenda)
      return data
    } catch (error) {
      console.error('Error fetching agenda:', error)
      throw error
    }
  }
)

/**
 * Options untuk TanStack Query guna mengambil data agenda desa.
 * 
 * @returns {QueryOptions} Query options object.
 */
export const agendaQueryOptions = () =>
  queryOptions({
    queryKey: [agendaQueryKey],
    queryFn: () => fetchAgenda()
  })
