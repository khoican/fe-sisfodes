import { announcements } from '#/data/announcement.data'
import { budgetData } from '#/data/budget.data'
import { events } from '#/data/event.data'
import { holidays } from '#/data/holiday.data'
import { members } from '#/data/member.data'
import { news } from '#/data/news.data'
import { population } from '#/data/population.data'
import { umkm } from '#/data/umkm.data'
import { createFileRoute } from '@tanstack/react-router'

/**
 * Mapping endpoint ke data source
 */
const dataMap: Record<string, any> = {
  announcement: announcements,
  news: news,
  umkm: umkm,
  event: events,
  population: population,
  budget: budgetData,
  member: members,
  holiday: holidays
}

/**
 * API Route Catch-all untuk simulasi backend
 * Menangani request list dan detail berdasarkan id/slug
 *
 * @example
 * GET /api/news -> Mengambil semua berita
 * GET /api/news/slug-berita -> Mengambil detail berita
 */
export const Route = createFileRoute('/api/$')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const path = params._splat ?? ''
        const [resource, identifier] = path.split('/')

        const data = dataMap[resource]

        // 1. Handling Resource Not Found
        if (!data) {
          return Response.json(
            {
              metadata: {
                code: 404,
                message: `Resource '${resource}' tidak ditemukan.`
              },
              response: null
            },
            { status: 404 }
          )
        }

        // 2. Handling Detail Request (ID atau Slug)
        if (identifier) {
          if (!Array.isArray(data)) {
            return Response.json(
              {
                metadata: {
                  code: 400,
                  message: `Resource '${resource}' bukan merupakan list data.`
                },
                response: null
              },
              { status: 400 }
            )
          }

          const item = data.find(
            (i: any) => i.id?.toString() === identifier || i.slug === identifier
          )

          if (!item) {
            return Response.json(
              {
                metadata: {
                  code: 404,
                  message: `Data dengan identifier '${identifier}' tidak ditemukan di '${resource}'.`
                },
                response: null
              },
              { status: 404 }
            )
          }

          return Response.json({
            metadata: { code: 200, message: 'Success' },
            response: item
          })
        }

        // 3. Handling List Request
        return Response.json({
          metadata: { code: 200, message: 'Success' },
          response: data
        })
      }
    }
  }
})
