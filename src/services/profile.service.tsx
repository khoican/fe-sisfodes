import { ENDPOINTS } from '#/constant/endpoint.constant'
import { api } from '#/lib/api/axios'
import type { Profile } from '#/types/profile.d.ts'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const profileQueryKey = 'profile' as const

export const fetchProfile = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const data = await api.get<Profile>(ENDPOINTS.profil)
      return data.response
    } catch (error) {
      console.error('Error fetching profile:', error)
      throw error // Lemparkan error agar ditangkap oleh TanStack Query
    }
  }
)

export const profileQueryOptions = () =>
  queryOptions({
    queryKey: [profileQueryKey],
    queryFn: () => fetchProfile()
  })
