import { Badge } from '#/components/ui/badge'
import { institutionDetailQueryOptions } from '#/services/institution.service'
import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { ShieldCheck, Target } from 'lucide-react'

export const Route = createFileRoute('/lembaga/$slug')({
    loader: async ({ context, params }) => {
        const institution = await context.queryClient.ensureQueryData(
            institutionDetailQueryOptions(params.slug),
        )
        return {
            institution: institution.metadata,
        }
    },
    head: ({ loaderData }) => {
        const institution = loaderData?.institution
        const title = institution
            ? `${institution.name} | Desa Sumberkejayan`
            : 'Lembaga Desa | Desa Sumberkejayan'
        const description =
            institution?.description || 'Informasi lembaga Desa Sumberkejayan.'

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
    component: InstitutionDetail,
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
        <main className="w-full">
            {/* Hero Section */}
            <section className="grid md:grid-cols-8 gap-10 items-center bg-background px-4 lg:px-12 pb-8 pt-8 rounded-b-xl border-b border-border shadow-sm">
                <div className="w-full md:col-span-5">
                    <Badge
                        variant="primary"
                        className="w-fit uppercase tracking-wider px-4 mb-4"
                    >
                        Lembaga Desa
                    </Badge>
                    <h1 className="text-5xl font-extrabold leading-tight">
                        {institution.name}
                    </h1>
                    <p className="text-sm md:text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
                        {institution.description}
                    </p>
                </div>

                <div className="w-full md:col-span-3 flex justify-center items-center">
                    <div className="w-64 h-64 relative bg-muted rounded-3xl p-8 border border-border shadow-inner flex items-center justify-center">
                        <Image
                            src={institution.logo}
                            alt={institution.name}
                            className="w-full h-full object-contain"
                            layout="fullWidth"
                        />
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            {(institution.vision || institution.mission) && (
                <section className="px-4 lg:px-12 bg-primary mt-12 relative overflow-hidden py-16 rounded-3xl mx-4 lg:mx-12">
                    <div className="h-[300%] bg-white/10 -rotate-25 w-40 absolute -top-30 -right-10 z-0"></div>

                    <div className="text-white grid lg:grid-cols-2 gap-12 relative z-10">
                        {institution.vision && (
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Target
                                        className="text-white/80"
                                        size={24}
                                    />
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/80">
                                        Visi
                                    </p>
                                </div>
                                <p className="text-xl md:text-3xl font-bold italic leading-relaxed">
                                    "{institution.vision}"
                                </p>
                            </div>
                        )}

                        {institution.mission && (
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <ShieldCheck
                                        className="text-white/80"
                                        size={24}
                                    />
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/80">
                                        Misi
                                    </p>
                                </div>
                                <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                                    {institution.mission}
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Footer Call to Action */}
            <section className="w-full bg-primary/5 p-12 lg:p-20 flex flex-col items-center text-center gap-6 rounded-t-3xl mt-20">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
                    <ShieldCheck size={32} />
                </div>
                <h3 className="text-3xl font-bold">Peran Serta Lembaga</h3>
                <p className="max-w-2xl text-muted-foreground leading-relaxed">
                    Lembaga ini bekerja sama dengan Pemerintah Desa dan elemen
                    masyarakat lainnya untuk mewujudkan Desa Sumberkejayan yang
                    lebih maju dan sejahtera.
                </p>
            </section>
        </main>
    )
}
