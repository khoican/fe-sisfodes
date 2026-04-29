import { profileData } from '#/data/profile.data'
import { heroData } from '#/data/hero.data'
import { announcementData } from '#/data/announcement.data'
import { budgetData } from '#/data/budget.data'
import { eventData } from '#/data/event.data'
import { footerData } from '#/data/footer.data'
import { newsData } from '#/data/news.data'
import { populationData } from '#/data/population.data'
import { umkmData } from '#/data/umkm.data'
import { ApiResponse } from '#/utils/apiResponse.util'
import { createFileRoute } from '@tanstack/react-router'

/**
 * Endpoint API Dinamis
 * Menangani permintaan ke /api/* dan mengembalikan data yang sesuai berdasarkan parameter path.
 * 
 * @example
 * GET /api/profile -> Mengembalikan data profil desa
 * GET /api/hero -> Mengembalikan data hero/banner
 */
export const Route = createFileRoute('/api/$')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const path = params._
        
        // Mapping data berdasarkan path/nama file yang diminta
        const dataMap: Record<string, any> = {
          profile: profileData,
          hero: heroData,
          announcement: announcementData,
          budget: budgetData,
          event: eventData,
          footer: footerData,
          news: newsData,
          population: populationData,
          umkm: umkmData
        }

        try {
          const data = dataMap[path]

          if (!data) {
            return ApiResponse.error(`Data '${path}' tidak ditemukan`, 404)
          }

          return ApiResponse.success(data, `Berhasil mengambil data ${path}`)
        } catch (error) {
          console.error(`API Error [/api/${path}]:`, error)
          return ApiResponse.error(`Gagal mengambil data ${path}`, 500)
        }
      }
    }
  }
})
