import { http, HttpResponse, delay } from 'msw'
import { news } from '#/data/news.data'
import { announcements } from '#/data/announcement.data'
import { umkm } from '#/data/umkm.data'
import { events } from '#/data/event.data'
import { population } from '#/data/population.data'
import { budgetData } from '#/data/budget.data'

// Helper untuk format response standar
const createResponse = (data: any, code = 200, message = 'Success') => {
  return HttpResponse.json({
    metadata: { code, message },
    response: data
  }, { status: code })
}

export const handlers = [
  // Handler untuk Berita
  http.get('/api/news', async () => {
    await delay(500)
    return createResponse(news)
  }),

  http.get('/api/news/:slug', async ({ params }) => {
    await delay(500)
    const item = news.find(n => n.slug === params.slug)
    if (!item) return createResponse(null, 404, 'Berita tidak ditemukan')
    return createResponse(item)
  }),

  // Handler untuk UMKM
  http.get('/api/umkm', async () => {
    await delay(500)
    return createResponse(umkm)
  }),

  http.get('/api/umkm/:slug', async ({ params }) => {
    await delay(500)
    const item = umkm.find(u => u.slug === params.slug)
    if (!item) return createResponse(null, 404, 'Produk UMKM tidak ditemukan')
    return createResponse(item)
  }),

  // Handler untuk Statistik & Budget
  http.get('/api/population', () => createResponse(population)),
  http.get('/api/budget', () => createResponse(budgetData)),

  // Tambahkan handler lainnya sesuai kebutuhan...
]
