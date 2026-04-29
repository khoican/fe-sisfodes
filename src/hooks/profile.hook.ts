import { api } from "#/lib/api/axios"
import type { Profile } from "#/types/profile.d.ts"
import { useQuery } from "@tanstack/react-query"

/**
 * Fungsi fetch murni tanpa React Hook
 * Bisa dipanggil di loader atau komponen
 */
export const fetchProfile = () => api.get<Profile>('/profile')

/**
 * Hook untuk sinkronisasi data profil secara reaktif
 */
export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile
  })
}