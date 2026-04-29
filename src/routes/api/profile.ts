import profile from '#/data/profile.json'
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
          const data = profile

          if (!data) {
            return ApiResponse.error('Data profil desa tidak ditemukan', 404)
          }

          return ApiResponse.success(data, 'Berhasil mengambil profil desa')
        } catch (error) {
          console.error('API Error [/api/profile]:', error)
          return ApiResponse.error('Gagal mengambil data profil desa', 500)
        }
      }
    }
  }
})
