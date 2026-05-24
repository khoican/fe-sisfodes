import { Badge } from '#/components/ui/badge'
import { artikelQueryOptions } from '#/services/artikel.service'
import type { INews } from '#/types/INews'
import { ClientOnly, createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const NewsCard = lazy(() => import('#/components/shared/card/news'))
const CardSkeleton = () => (
    <div className="w-full h-64 bg-muted animate-pulse rounded-xl" />
)

export const Route = createFileRoute('/informasi/artikel')({
    head: () => ({
        meta: [
            {
                title: 'Artikel Desa | Desa Sumberkejayan',
            },
            {
                name: 'description',
                content:
                    'Kumpulan artikel edukasi, panduan, dan opini seputar perkembangan dan potensi Desa Sumberkejayan.',
            },
        ],
    }),
    loader: async ({ context }) => {
        const artikel = await context.queryClient.ensureQueryData(
            artikelQueryOptions(),
        )
        return {
            artikel: artikel.metadata,
        }
    },
    component: Artikel,
})

function Artikel() {
    const { artikel } = Route.useLoaderData()

    const latestArtikel = artikel.slice(0, 4)
    const artikelData = artikel

    return (
        <main className="w-full px-4 lg:px-12 py-8 bg-background">
            <section className="w-full lg:w-1/2 py-16 flex flex-col gap-6">
                <Badge variant="primary">EDUKASI & LITERASI</Badge>
                <h1 className="text-6xl font-bold text-foreground">
                    Artikel & Opini
                </h1>
                <p className="text-muted-foreground text-lg">
                    Berbagi pengetahuan, pengalaman, dan pemikiran untuk
                    membangun masyarakat Desa Sumberkejayan yang lebih cerdas
                    dan informatif.
                </p>
            </section>

            {artikel.length > 0 && (
                <ClientOnly>
                    <section className="w-full grid md:grid-cols-2 gap-6 mt-6">
                        <Suspense fallback={<CardSkeleton />}>
                            {latestArtikel.slice(0, 1).map((item, index) => (
                                <NewsCard
                                    key={index}
                                    {...item}
                                    className={{
                                        root: 'w-full border-none shadow-none p-0 bg-transparent rounded-sm',
                                        content: 'p-0 py-4',
                                    }}
                                />
                            ))}
                        </Suspense>

                        <div className="w-full flex flex-col gap-8 lg:gap-0">
                            <Suspense
                                fallback={
                                    <div className="space-y-4">
                                        <CardSkeleton />
                                        <CardSkeleton />
                                    </div>
                                }
                            >
                                {latestArtikel
                                    .slice(1, 4)
                                    .map((item, index) => (
                                        <NewsCard
                                            key={index}
                                            {...item}
                                            layout="horizontal"
                                            className={{
                                                root: 'w-full border-none shadow-none p-0 bg-transparent rounded-none',
                                                meta: 'text-xs',
                                                content:
                                                    'text-xs w-4/5 py-0 h-fit',
                                                title: 'text-sm lg:text-lg',
                                                description:
                                                    'line-clamp-1 lg:line-clamp-2 text-xs lg:text-sm',
                                                header: 'w-1/5 h-full',
                                                image: 'rounded-md h-full object-center object-cover',
                                            }}
                                            options={{
                                                showLink: false,
                                            }}
                                        />
                                    ))}
                            </Suspense>
                        </div>
                    </section>
                </ClientOnly>
            )}

            <section className="w-full mt-16">
                <h2 className="text-2xl font-bold text-foreground">
                    Semua Artikel
                </h2>
                <p className="text-muted-foreground mt-2">
                    Jelajahi berbagai topik menarik yang kami sajikan khusus
                    untuk warga Desa Sumberkejayan.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-6 mt-12">
                    <ClientOnly>
                        <Suspense
                            fallback={
                                <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <CardSkeleton />
                                    <CardSkeleton />
                                    <CardSkeleton />
                                </div>
                            }
                        >
                            {artikelData
                                .slice(
                                    artikelData.length > 4 ? 4 : 0,
                                    artikelData.length,
                                )
                                .map((item: INews, index: number) => (
                                    <NewsCard
                                        key={index}
                                        {...item}
                                        className={{ root: 'shadow-none' }}
                                    />
                                ))}
                        </Suspense>
                    </ClientOnly>
                </div>
            </section>
        </main>
    )
}
