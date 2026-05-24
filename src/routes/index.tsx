import Hero from '#/components/layout/home/Hero'
import { agendaQueryOptions } from '#/services/agenda.service'
import { budgetQueryOptions } from '#/services/budget.service'
import { heroQueryOptions } from '#/services/hero.service'
import { newsQueryOptions } from '#/services/news.service'
import { officialQueryOptions } from '#/services/official.service'
import { populationQueryOptions } from '#/services/population.service'
import { productQueryOptions } from '#/services/product.service'
import { profileQueryOptions } from '#/services/profile.service'
import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

// Lazy loaded components for better initial performance
const Demography = lazy(() => import('#/components/layout/home/Demography'))
const Budget = lazy(() => import('#/components/layout/home/Budget'))
const Welcome = lazy(() => import('#/components/layout/home/Welcome'))
const AnnouncementAgenda = lazy(
    () => import('#/components/layout/home/AnnouncementAgenda'),
)
const OrganizationCarousel = lazy(() =>
    import('#/components/shared/carousel/organization').then((m) => ({
        default: m.OrganizationCarousel,
    })),
)
const News = lazy(() => import('#/components/layout/home/News'))
const ProductSection = lazy(() => import('#/components/layout/home/Product'))
const Location = lazy(() => import('#/components/layout/home/Location'))

/**
 * @description Renders a skeleton placeholder for the home page sections during loading.
 * @returns {JSX.Element} The skeleton UI element.
 */
const HomeSkeleton = () => (
    <div
        className="w-full h-40 bg-muted animate-pulse rounded-xl mt-8"
        aria-busy="true"
        aria-label="Loading content"
    />
)

export const Route = createFileRoute('/')({
    head: () => ({
        meta: [
            {
                title: 'Beranda | Desa Sumberkejayan',
            },
            {
                name: 'description',
                content:
                    'Selamat datang di portal resmi Desa Sumberkejayan. Temukan informasi terkini, layanan publik, dan potensi desa kami.',
            },
        ],
    }),
    loader: async ({ context }) => {
        // Prioritize essential data for faster initial page render
        const [profile, hero] = await Promise.all([
            context.queryClient.ensureQueryData(profileQueryOptions()),
            context.queryClient.ensureQueryData(heroQueryOptions()),
        ])

        // Load secondary data concurrently but without blocking the initial render if not strictly needed
        const [official, population, budget, agenda, news, products] =
            await Promise.all([
                context.queryClient.ensureQueryData(officialQueryOptions()),
                context.queryClient.ensureQueryData(populationQueryOptions()),
                context.queryClient.ensureQueryData(budgetQueryOptions()),
                context.queryClient.ensureQueryData(agendaQueryOptions()),
                context.queryClient.ensureQueryData(newsQueryOptions()),
                context.queryClient.ensureQueryData(productQueryOptions()),
            ])

        return {
            profile: profile.metadata,
            hero: hero.metadata,
            official: official.metadata,
            population: population.metadata,
            budget: budget.metadata,
            agenda: agenda.metadata,
            newsData: news.metadata.filter(
                (item) => item.category?.name !== 'Pengumuman',
            ),
            products: products.metadata,
        }
    },
    component: App,
})

/**
 * @description The main Home page component that displays various village information sections.
 * @returns {JSX.Element} The rendered Home page.
 */
function App() {
    const {
        newsData,
        official,
        agenda,
        products,
        profile,
        hero,
        population,
        budget,
    } = Route.useLoaderData()

    const leader = official.find((item) => item.position === 'Kepala Desa')

    return (
        <main className="px-4 lg:px-12 pb-8 pt-8 bg-background text-foreground">
            <Hero hero={hero} />

            <Suspense fallback={<HomeSkeleton />}>
                <div className="grid lg:grid-cols-3 gap-y-8 gap-x-0 lg:gap-y-0 lg:gap-x-8 mt-8 w-full">
                    <Demography population={population} />
                    <Budget budget={budget} />
                </div>
            </Suspense>

            <Suspense fallback={<HomeSkeleton />}>
                <Welcome greeting={profile.greeting} leader={leader} />
            </Suspense>

            <Suspense fallback={<HomeSkeleton />}>
                <AnnouncementAgenda agenda={agenda} />
            </Suspense>

            <Suspense fallback={<HomeSkeleton />}>
                <OrganizationCarousel
                    title="Struktur Organisasi"
                    className="mt-16 h-full"
                    official={official}
                />
            </Suspense>

            <Suspense fallback={<HomeSkeleton />}>
                <News newsData={newsData} />
            </Suspense>

            <Suspense fallback={<HomeSkeleton />}>
                <ProductSection products={products} />
            </Suspense>

            <Suspense fallback={<HomeSkeleton />}>
                <Location
                    address={`${profile.address.address}, ${profile.address.village}, ${profile.address.district}, ${profile.address.regency}`}
                    latitude={profile.coordinates.latitude}
                    longitude={profile.coordinates.longitude}
                />
            </Suspense>
        </main>
    )
}
