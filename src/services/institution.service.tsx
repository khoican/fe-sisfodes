import { ENDPOINTS } from '#/constant/endpoint.constant'
import { api } from '#/lib/api/axios'
import type { Institution } from '#/types/institution'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const institutionQueryKey = 'institutions' as const

/**
 * Mengambil list semua lembaga desa.
 */
export const fetchInstitutions = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const data = await api.get<Institution[]>(ENDPOINTS.institutions)
      return data
    } catch (error) {
      console.error('Error fetching institutions:', error)
      throw error
    }
  }
)

/**
 * Mengambil detail lembaga berdasarkan slug.
 */
export const fetchInstitutionDetail = createServerFn({ method: 'GET' })
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    try {
      const data = await api.get<Institution>(`${ENDPOINTS.institutions}/${slug}`)
      return data
    } catch (error) {
      console.error(`Error fetching institution detail [${slug}]:`, error)
      throw error
    }
  })

/**
 * Options untuk TanStack Query guna mengambil data list lembaga.
 */
export const institutionQueryOptions = () =>
  queryOptions({
    queryKey: [institutionQueryKey],
    queryFn: () => fetchInstitutions()
  })

/**
 * Options untuk TanStack Query guna mengambil detail lembaga.
 */
export const institutionDetailQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: [institutionQueryKey, slug],
    queryFn: () => fetchInstitutionDetail({ data: slug })
  })
