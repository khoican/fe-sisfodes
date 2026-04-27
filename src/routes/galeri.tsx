import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/galeri')({
  head: () => ({
    meta: [
      {
        title: 'Galeri | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Koleksi foto dan dokumentasi kegiatan serta keindahan Desa Sumberkejayan.',
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/galeri"!</div>
}
