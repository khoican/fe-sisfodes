import PersonCard from '#/components/shared/card/person'
import { Badge } from '#/components/ui/badge'
import { officialQueryOptions } from '#/services/official.service'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profil/struktur-organisasi')({
  head: () => ({
    meta: [
      {
        title: 'Struktur Organisasi | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Mengenal perangkat desa dan struktur organisasi Pemerintah Desa Sumberkejayan periode berjalan.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const official = await context.queryClient.ensureQueryData(officialQueryOptions())
    return {
      official: official.response
    }
  },
  component: StrukturOrganisasi
})

function StrukturOrganisasi() {
  const { official } = Route.useLoaderData()

  // Pisahkan berdasarkan jabatan untuk layout hierarkis
  const kepalaDesa = official.find(item => item.position === 'Kepala Desa')
  const sekretaris = official.find(item => item.position === 'Sekretaris')
  const staffLainnya = official.filter(item => 
    item.position !== 'Kepala Desa' && item.position !== 'Sekretaris'
  )

  return (
    <main className='w-full px-4 lg:px-12 py-8'>
      <section className='w-full lg:w-1/2 py-16 flex flex-col gap-4'>
        <Badge variant='primary' className='w-fit uppercase tracking-wider px-4'>
          Pemerintahan Desa
        </Badge>
        <h1 className='text-6xl font-bold'>Struktur Organisasi</h1>
        <p className='text-gray-600 mt-2'>
          Susunan organisasi Pemerintah Desa Sumberkejayan yang bertugas melayani masyarakat 
          dan menjalankan roda pemerintahan desa dengan penuh integritas.
        </p>
      </section>

      <section className='w-full flex flex-col gap-12 items-center mb-16'>
        {/* Kepala Desa */}
        {kepalaDesa && (
          <div className='w-full max-w-sm'>
             <h2 className='text-center text-xl font-bold mb-6 text-primary uppercase tracking-widest'>Kepala Desa</h2>
             <PersonCard {...kepalaDesa} />
          </div>
        )}

        {/* Separator Line */}
        <div className='w-px h-12 bg-gray-200'></div>

        {/* Sekretaris */}
        {sekretaris && (
          <div className='w-full max-w-sm'>
             <h2 className='text-center text-xl font-bold mb-6 text-primary uppercase tracking-widest'>Sekretaris Desa</h2>
             <PersonCard {...sekretaris} />
          </div>
        )}

        {/* Separator Line */}
        <div className='w-px h-12 bg-gray-200'></div>

        {/* Staff Lainnya Grid */}
        <div className='w-full'>
          <h2 className='text-center text-xl font-bold mb-12 text-primary uppercase tracking-widest'>Perangkat Desa</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {staffLainnya.map((item) => (
              <PersonCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className='w-full bg-primary/5 rounded-2xl p-12 mt-16 flex flex-col items-center text-center gap-6'>
        <h3 className='text-2xl font-bold'>Visi & Misi Pelayanan</h3>
        <p className='max-w-2xl text-gray-600 leading-relaxed'>
          "Mewujudkan tata kelola pemerintahan desa yang transparan, akuntabel, dan mengutamakan 
          kepentingan masyarakat dalam setiap proses pembangunan dan pelayanan."
        </p>
      </section>
    </main>
  )
}
