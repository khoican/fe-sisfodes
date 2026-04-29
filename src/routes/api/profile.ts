import profile from '#/data/profile.json'
import { createFileRoute } from '@tanstack/react-router'

/**
 * Endpoint API untuk mendapatkan profil desa
 * GET /api/profile
 */
export const Route = createFileRoute('/api/profile')({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({
          metadata: {
            code: 200,
            message: 'Success'
          },
          response: profile
        })
      }
    }
  }
})
