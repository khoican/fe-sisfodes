import { agendaData } from '#/data/agenda.data'
import { budgetData } from '#/data/budget.data'
import { footerData } from '#/data/footer.data'
import { heroData } from '#/data/hero.data'
import { news } from '#/data/news.data'
import { officialData } from '#/data/official.data'
import { populationData } from '#/data/population.data'
import { product } from '#/data/product.data'
import { profileData } from '#/data/profile.data'
import { ApiResponse } from '#/utils/apiResponse.util'
import { createFileRoute } from '@tanstack/react-router'

/**
 * Endpoint API Dinamis
 * Menangani permintaan ke /api/* untuk list data maupun detail data.
 * Format: /api/{collection} atau /api/{collection}/{slug|id}
 * 
 * @example
 * GET /api/news -> Mengembalikan list berita
 * GET /api/news/judul-berita -> Mengembalikan detail berita berdasarkan slug
 */
export const Route = createFileRoute('/api/$')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const splat = params._splat ?? ''
        const [collection, slug] = splat.split('/')
        
        // Mapping data berdasarkan nama koleksi
        const dataMap: Record<string, any> = {
          profile: profileData,
          hero: heroData,
          official: officialData,
          budget: budgetData,
          footer: footerData,
          news: news,
          product: product,
          population: populationData,
          agenda: agendaData
        }

        try {
          const rawData = dataMap[collection]

          if (!rawData) {
            return ApiResponse.error(`Koleksi '${collection}' tidak ditemukan`, 404)
          }

          // Jika ada slug, cari detail data dalam array
          if (slug && Array.isArray(rawData)) {
            const detail = rawData.find(
              (item: any) => 
                String(item.slug) === slug || 
                String(item.id) === slug
            )

            if (!detail) {
              return ApiResponse.error(`Data dengan identifier '${slug}' tidak ditemukan di ${collection}`, 404)
            }

            return ApiResponse.success(detail, `Berhasil mengambil detail ${collection}`)
          }

          // Jika tidak ada slug, kembalikan seluruh data koleksi
          return ApiResponse.success(rawData, `Berhasil mengambil list ${collection}`)
        } catch (error) {
          console.error(`API Error [/api/${splat}]:`, error)
          return ApiResponse.error(`Gagal memproses permintaan ${splat}`, 500)
        }
      }
    }
  }
})
