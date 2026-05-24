import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { IProfile } from '#/types/IProfile.d.ts'
import { useQuery } from '@tanstack/react-query'

/**
 * Fungsi fetch murni tanpa React Hook
 * Bisa dipanggil di loader atau komponen
 */
export const fetchProfile = () => api.get<IProfile>('/profile')

/**
 * Hook untuk sinkronisasi data profil secara reaktif
 */
export const useProfile = () => {
    return useQuery({
        queryKey: queryKeys.profile(),
        queryFn: fetchProfile,
    })
}
