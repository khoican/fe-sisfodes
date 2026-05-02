import PersonCard from '#/components/shared/card/person'
import { Badge } from '#/components/ui/badge'
import Title from '#/components/ui/title'
import { institutionDetailQueryOptions } from '#/services/institution.service'
import type { Institution } from '#/types/institution'
import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { Calendar, ShieldCheck, Target, ListChecks } from 'lucide-react'

export const Route = createFileRoute('/lembaga/$slug')({
  loader: async ({ context, params }) => {
    const institution = await context.queryClient.ensureQueryData(
      institutionDetailQueryOptions(params.slug)
    )
    return {
      institution: institution.response
    }
  },
  head: ({ loaderData }) => {
    const institution = loaderData?.institution
    const title = institution
      ? `${institution.full_name} | Desa Sumberkejayan`
      : 'Lembaga Desa | Desa Sumberkejayan'
    const description = institution?.description || 'Informasi lembaga Desa Sumberkejayan.'

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: institution?.logo || '' },
      ],
    }
  },
  component: InstitutionDetail
})

/**
 * Komponen halaman detail lembaga desa.
 * Menampilkan informasi lengkap lembaga mulai dari deskripsi, visi-misi, hingga struktur kepengurusan.
 * 
 * @returns {JSX.Element} Elemen halaman detail lembaga.
 */
function InstitutionDetail() {
  const { institution } = Route.useLoaderData()

  if (!institution) return null

  return (
    <main className='w-full'>
      {/* Hero Section */}
      <section className='grid md:grid-cols-8 gap-10 items-center bg-background px-4 lg:px-12 pb-8 pt-8 rounded-b-xl border-b border-border shadow-sm'>
        <div className='w-full md:col-span-5'>
          <Badge variant='primary' className='w-fit uppercase tracking-wider px-4 mb-4'>
            Lembaga Desa
          </Badge>
          <h1 className='text-5xl font-extrabold leading-tight'>
            {institution.full_name} <span className='text-primary'>({institution.name})</span>
          </h1>
          <p className='text-sm md:text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed'>
            {institution.description}
          </p>
          
          <div className='flex items-center gap-2 mt-8 text-xs text-muted-foreground/70'>
             <Calendar size={14} className='text-primary' />
             <span>Terakhir diperbarui: {new Date(institution.last_updated).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
        </div>

        <div className='w-full md:col-span-3 flex justify-center items-center'>
          <div className='w-64 h-64 relative bg-muted rounded-3xl p-8 border border-border shadow-inner flex items-center justify-center'>
            <Image
              src={institution.logo}
              alt={institution.name}
              className='w-full h-full object-contain'
              layout='fullWidth'
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      {(institution.vision || (institution.mission && institution.mission.length > 0)) && (
        <section className='px-4 lg:px-12 bg-primary mt-12 relative overflow-hidden py-16 rounded-3xl mx-4 lg:mx-12'>
          <div className='h-[300%] bg-white/10 -rotate-25 w-40 absolute -top-30 -right-10 z-0'></div>
          
          <div className='text-white grid lg:grid-cols-2 gap-12 relative z-10'>
            {institution.vision && (
              <div>
                <div className='flex items-center gap-2 mb-4'>
                  <Target className='text-white/80' size={24} />
                  <p className='text-xs font-bold uppercase tracking-widest text-white/80'>Visi</p>
                </div>
                <p className='text-xl md:text-3xl font-bold italic leading-relaxed'>"{institution.vision}"</p>
              </div>
            )}
            
            {institution.mission && institution.mission.length > 0 && (
              <div>
                <div className='flex items-center gap-2 mb-4'>
                  <ShieldCheck className='text-white/80' size={24} />
                  <p className='text-xs font-bold uppercase tracking-widest text-white/80'>Misi</p>
                </div>
                <div className='flex flex-col gap-4'>
                  {institution.mission.map((item, index) => (
                    <div key={index} className='flex items-start gap-4 bg-white/10 p-4 rounded-xl border border-white/10'>
                      <span className='font-bold text-lg opacity-50'>{index + 1}</span>
                      <p className='text-sm leading-relaxed'>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Tasks/Functions Section */}
      {((institution.tasks && institution.tasks.length > 0) || (institution.functions && institution.functions.length > 0)) && (
        <section className='px-4 lg:px-12 mt-16 mb-16'>
          <Title title={institution.tasks ? 'Tugas Pokok' : 'Fungsi Lembaga'} />
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {(institution.tasks || institution.functions || []).map((item, index) => (
              <div key={index} className='bg-card p-6 rounded-2xl border border-border shadow-sm flex gap-4 hover:border-primary/30 transition-colors'>
                <div className='w-10 h-10 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary'>
                  <ListChecks size={20} />
                </div>
                <p className='text-sm text-muted-foreground font-medium leading-relaxed'>{item}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Members Section */}
      <section className='px-4 lg:px-12 mt-16 mb-20'>
        <Title title='Struktur Kepengurusan' />
        <p className='text-muted-foreground mt-2 mb-10'>Daftar pengurus {institution.full_name} yang aktif saat ini.</p>
        
        {institution.members && institution.members.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {institution.members.map((member) => (
              <PersonCard key={member.id} {...member} />
            ))}
          </div>
        ) : (
          <div className='w-full py-12 bg-muted rounded-2xl border border-dashed border-border flex flex-col items-center justify-center text-muted-foreground/70'>
             <p>Data kepengurusan belum tersedia atau sedang diperbarui.</p>
          </div>
        )}
      </section>

      {/* Footer Call to Action */}
      <section className='w-full bg-primary/5 p-12 lg:p-20 flex flex-col items-center text-center gap-6 rounded-t-3xl'>
         <div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2'>
            <ShieldCheck size={32} />
         </div>
         <h3 className='text-3xl font-bold'>Peran Serta Lembaga</h3>
         <p className='max-w-2xl text-muted-foreground leading-relaxed'>
           Lembaga ini bekerja sama dengan Pemerintah Desa dan elemen masyarakat lainnya 
           untuk mewujudkan Desa Sumberkejayan yang lebih maju dan sejahtera.
         </p>
      </section>
    </main>
  )
}
