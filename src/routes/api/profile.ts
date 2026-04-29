import { profileData } from '#/data/profile.data'
import { ApiResponse } from '#/utils/apiResponse.util'
import { createFileRoute } from '@tanstack/react-router'

/**
 * Endpoint API untuk mendapatkan profil desa
 * GET /api/profile
 */
export const Route = createFileRoute('/api/profile')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const data = profileData

          return ApiResponse.success(data, 'Berhasil mengambil profil desa')
        } catch (error) {
          console.error('API Error [/api/profile]:', error)
          return ApiResponse.error('Gagal mengambil data profil desa', 500)
        }
      }
    }
  }
})
