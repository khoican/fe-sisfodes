import type { CarouselApi } from '#/components/ui/carousel'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '#/components/ui/carousel'
import type { IHero } from '#/types/IHero'
import { Image } from '@unpic/react'
import * as React from 'react'
import { Button } from '#/components/ui/button'
import { Link } from '@tanstack/react-router'
import { cn } from '#/lib/utils'

/**
 * Komponen Hero untuk menampilkan banner utama dengan fitur auto-slide.
 *
 * @param {Object} props - Properti komponen.
 * @param {IHero[]} props.hero - Array data banner hero.
 * @returns {JSX.Element} Elemen Hero.
 */
export default function Hero({ hero }: { hero: IHero[] }) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    /**
     * Mengatur auto-slide setiap 5 detik.
     */
    React.useEffect(() => {
        if (!api) return

        const intervalId = setInterval(() => {
            api.scrollNext()
        }, 5000)

        return () => clearInterval(intervalId)
    }, [api])

    return (
        <div className="relative rounded-xl overflow-hidden h-[60vh] md:h-[70vh]">
            <Carousel
                setApi={setApi}
                opts={{
                    align: 'start',
                    loop: true,
                }}
            >
                <CarouselContent>
                    {hero.map((h, index) => (
                        <CarouselItem
                            key={`${h.title}-${index}`}
                            className="w-full h-[60vh] md:h-[70vh]"
                        >
                            <Image
                                src={h.image}
                                alt={h.title}
                                className="w-full h-full object-center rounded-xl object-cover brightness-50"
                                layout="fullWidth"
                                priority={index === 0}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 via-black/35 to-black/80 p-8 md:p-12 flex items-end justify-start pointer-events-none">
                <div className="w-full lg:w-2/3 pointer-events-auto">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white capitalize leading-tight">
                        membangun masa depan dari akar desa
                    </h1>
                    <p className="text-sm lg:text-lg text-white/90 mt-4 leading-relaxed max-w-xl">
                        Portal resmi informasi dan pelayanan publik. Akuntabel, Transparan, dan Mandiri.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Button 
                            asChild 
                            variant="default" 
                            size="lg" 
                            className="bg-primary text-white hover:bg-primary/95 transition-all shadow-lg shadow-primary/20"
                        >
                            <Link to="/profil/profil-desa">
                                Profil Desa
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 right-6 flex gap-2 pointer-events-auto z-20">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                            "w-2.5 h-2.5 rounded-full transition-all duration-300",
                            current === index 
                                ? "bg-white w-6" 
                                : "bg-white/40 hover:bg-white/70"
                        )}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
