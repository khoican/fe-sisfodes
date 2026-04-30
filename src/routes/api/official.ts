import { officialData } from '#/data/official.data'
import { ApiResponse } from '#/utils/apiResponse.util'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/official')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const data = officialData

          return ApiResponse.success(data, 'Berhasil mengambil data perangkat desa')
        } catch (error) {
          console.error('API Error [/api/official]:', error)
          return ApiResponse.error('Gagal mengambil data perangkat desa', 500)
        }
      }
    }
  }
})
