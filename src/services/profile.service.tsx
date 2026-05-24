import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { Profile } from '#/types/profile'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const fetchProfile = createServerFn({ method: 'GET' }).handler(
    async () => {
        try {
            const data = await api.get<Profile>(ENDPOINTS.profil)
            return data
        } catch (error) {
            console.error('Error fetching profile:', error)
            throw error
        }
    },
)

export const profileQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.profile(),
        queryFn: () => fetchProfile(),
    })
