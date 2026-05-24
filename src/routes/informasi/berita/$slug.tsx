import NewsCard from '#/components/shared/card/news'
import { Avatar, AvatarFallback } from '#/components/ui/avatar'
import { Badge } from '#/components/ui/badge'
import Title from '#/components/ui/title'
import {
    newsDetailQueryOptions,
    newsQueryOptions,
} from '#/services/news.service'
import type { News } from '#/types/news'
import { dateFormat } from '#/utils/date.util'
import { ClientOnly, createFileRoute, Link } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { Calendar } from 'lucide-react'
import { IoIosArrowForward } from 'react-icons/io'

export const Route = createFileRoute('/informasi/berita/$slug')({
    loader: async ({
        context,
        params,
    }): Promise<{ news: News[]; berita: News }> => {
        const [newsResponse, detailResponse] = await Promise.all([
            context.queryClient.ensureQueryData(newsQueryOptions()),
            context.queryClient.ensureQueryData(
                newsDetailQueryOptions(params.slug),
            ),
        ])

        return {
            news: newsResponse.response,
            berita: detailResponse.response,
        }
    },
    head: ({ loaderData }) => {
        const berita = loaderData?.berita || null
        const title = berita
            ? `${berita.title} | Desa Sumberkejayan`
            : 'Berita | Desa Sumberkejayan'
        const description =
            berita?.description ||
            'Baca berita terbaru dari Desa Sumberkejayan.'
        const image = berita?.image || ''

        const jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: berita?.title,
            description: berita?.description,
            image: [image],
            datePublished: berita?.created_at,
            author: [
                {
                    '@type': 'Person',
                    name: berita?.author,
                },
            ],
        }

        return {
            meta: [
                {
                    title,
                },
                {
                    name: 'description',
                    content: description,
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: description,
                },
                {
                    property: 'og:image',
                    content: image,
                },
                {
                    property: 'og:type',
                    content: 'article',
                },
            ],
            scripts: [
                {
                    type: 'application/ld+json',
                    children: JSON.stringify(jsonLd),
                },
            ],
        }
    },
    component: DetailBerita,
})

function DetailBerita() {
    const { berita, news } = Route.useLoaderData()

    const author = berita.author?.split(' ')[0].charAt(0).toUpperCase() || 'U'

    return (
        <main className="w-full px-4 lg:px-12 py-8 bg-background">
            <section className="w-full flex flex-col gap-8">
                <Badge variant="primary" className="w-fit">
                    {berita.category?.name}
                </Badge>

                <h1 className="text-3xl lg:text-7xl font-bold text-foreground leading-tight">
                    {berita.title}
                </h1>

                <div className="flex items-center gap-8 md:gap-16 text-sm py-6 border-y border-y-border">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarFallback className="bg-primary/80 text-white">
                                {author}
                            </AvatarFallback>
                        </Avatar>

                        <p className="text-primary font-semibold">
                            {berita.author}
                        </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="size-4" aria-hidden="true" />
                        <span>{dateFormat({ date: berita.created_at })}</span>
                    </div>
                </div>
            </section>

            <section className="w-full h-full mt-16">
                <Image
                    src={berita.image || ''}
                    alt={berita.title || 'Gambar Berita'}
                    layout="fullWidth"
                    className="w-full h-auto rounded-xl object-cover shadow-lg"
                    priority
                />

                <p className="text-sm text-muted-foreground/70 italic mt-4 text-center max-w-3xl mx-auto">
                    {berita.description}
                </p>
            </section>

            <section className="grid lg:grid-cols-3 gap-16 mt-16 pb-16 border-b border-b-border">
                <article
                    className="w-full flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed lg:col-span-2"
                    dangerouslySetInnerHTML={{ __html: berita.content || '' }}
                ></article>

                <aside className="space-y-8">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-8 rounded-lg bg-primary"></div>
                        <h2 className="text-xl font-bold tracking-wide text-foreground">
                            Berita Populer
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {news.slice(0, 3).map((item: News, index: number) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 group cursor-pointer"
                            >
                                <div className="p-3 bg-muted text-muted-foreground/70 text-center group-hover:text-white group-hover:bg-primary/80 rounded-lg transition-colors w-14 shrink-0">
                                    <p className="text-lg font-black">
                                        {new Intl.NumberFormat('id-ID', {
                                            minimumIntegerDigits: 2,
                                            useGrouping: false,
                                        }).format(index + 1)}
                                    </p>
                                </div>

                                <div className="flex-1">
                                    <Link
                                        to={'/informasi/berita'}
                                        params={{ slug: item.slug! }}
                                        className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                    <p className="text-xs text-muted-foreground/70 mt-2 flex items-center gap-1">
                                        <Calendar className="size-3" />
                                        {dateFormat({ date: item.created_at })}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
            </section>

            <section className="w-full mt-16">
                <Title
                    title="Berita Terkait"
                    link={{
                        to: '/berita',
                        label: 'Berita Lainnya',
                        icon: IoIosArrowForward,
                    }}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-6 mt-12">
                    <ClientOnly>
                        {news.slice(4, 10).map((item: News, index: number) => (
                            <NewsCard
                                key={index}
                                {...item}
                                className={{ root: 'shadow-none' }}
                            />
                        ))}
                    </ClientOnly>
                </div>
            </section>
        </main>
    )
}
