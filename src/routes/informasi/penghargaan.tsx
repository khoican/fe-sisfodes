import { Badge } from '#/components/ui/badge'
import { penghargaanQueryOptions } from '#/services/penghargaan.service'
import type { News } from '#/types/news'
import { ClientOnly, createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const NewsCard = lazy(() => import('#/components/shared/card/news'))
const CardSkeleton = () => (
    <div className="w-full h-64 bg-muted animate-pulse rounded-xl" />
)

export const Route = createFileRoute('/informasi/penghargaan')({
    head: () => ({
        meta: [
            {
                title: 'Penghargaan Desa | Desa Sumberkejayan',
            },
            {
                name: 'description',
                content:
                    'Daftar prestasi dan penghargaan yang berhasil diraih oleh Desa Sumberkejayan atas komitmen dalam pembangunan dan pelayanan.',
            },
        ],
    }),
    loader: async ({ context }) => {
        const penghargaan = await context.queryClient.ensureQueryData(
            penghargaanQueryOptions(),
        )
        return {
            penghargaan: penghargaan.response,
        }
    },
    component: Penghargaan,
})

function Penghargaan() {
    const { penghargaan } = Route.useLoaderData()

    const latestPenghargaan = penghargaan.slice(0, 4)
    const penghargaanData = penghargaan

    return (
        <main className="w-full px-4 lg:px-12 py-8 bg-background">
            <section className="w-full lg:w-1/2 py-16 flex flex-col gap-6">
                <Badge variant="primary">PRESTASI & APRESIASI</Badge>
                <h1 className="text-6xl font-bold text-foreground">
                    Kebanggaan Desa
                </h1>
                <p className="text-muted-foreground text-lg">
                    Rekam jejak prestasi dan penghargaan yang menjadi bukti
                    nyata dedikasi seluruh elemen masyarakat dalam memajukan
                    Desa Sumberkejayan.
                </p>
            </section>

            {penghargaan.length > 0 && (
                <ClientOnly>
                    <section className="w-full grid md:grid-cols-2 gap-6 mt-6">
                        <Suspense fallback={<CardSkeleton />}>
                            {latestPenghargaan
                                .slice(0, 1)
                                .map((item, index) => (
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
                                {latestPenghargaan
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
                    Daftar Penghargaan
                </h2>
                <p className="text-muted-foreground mt-2">
                    Apresiasi yang telah diterima oleh Desa Sumberkejayan dari
                    berbagai instansi dan tingkatan.
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
                            {penghargaanData
                                .slice(
                                    penghargaanData.length > 4 ? 4 : 0,
                                    penghargaanData.length,
                                )
                                .map((item: News, index: number) => (
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
