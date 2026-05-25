import type { IOfficial } from '#/types/IOfficial'
import { Image } from '@unpic/react'
import { Link } from '@tanstack/react-router'
import { Quote } from 'lucide-react'

interface WelcomeProps {
    greeting: string
    leader?: IOfficial
}

/**
 * Komponen Welcome untuk menampilkan sambutan Kepala Desa.
 *
 * @param {Object} props - Properti komponen.
 * @param {string} props.greeting - Teks sambutan Kepala Desa.
 * @param {IOfficial} [props.leader] - Data Kepala Desa.
 * @returns {JSX.Element | null} Elemen Greeting atau null jika leader tidak ada.
 */
export default function Welcome({ greeting, leader }: WelcomeProps) {
    if (!leader) return null

    // Deteksi paragraf sambutan (dipisahkan oleh baris baru)
    const paragraphs = greeting.split(/\n+/).filter(Boolean)
    const isMultiParagraph = paragraphs.length > 1

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-3 mt-16 gap-y-8 gap-x-0 md:gap-y-0 md:gap-x-8 items-center p-8 md:p-12 bg-card border border-border shadow-sm rounded-3xl relative overflow-hidden">
            <div className="absolute top-6 left-6 text-primary/10 select-none">
                <Quote size={80} />
            </div>

            <div className="col-span-2 flex flex-col gap-3 max-sm:order-2 relative z-10">
                <span className="w-fit px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                    {leader.position}
                </span>
                <h2 className="text-3xl md:text-4xl text-foreground font-bold leading-tight">
                    Sambutan Kepala Desa
                </h2>
                
                <div className="space-y-4 mt-2">
                    {paragraphs.map((para, index) => (
                        <p key={index} className="italic text-muted-foreground leading-relaxed text-sm md:text-base">
                            "{para}"
                        </p>
                    ))}
                </div>
                
                <p className="font-bold text-foreground mt-4 text-sm md:text-base">- {leader.name}</p>

                {isMultiParagraph && (
                    <div className="mt-4">
                        <Link
                            to="/profil/profil-desa"
                            className="text-xs font-bold uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
                        >
                            Baca Selengkapnya Tentang Desa &rarr;
                        </Link>
                    </div>
                )}
            </div>

            <div className="relative max-sm:order-1 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 absolute -top-4 -left-4 -z-10 animate-pulse"></div>
                <div className="w-40 h-40 rounded-full bg-primary/5 absolute -bottom-8 -right-8 -z-10"></div>
                <div className="relative p-1 rounded-2xl ring-4 ring-primary/20 bg-background overflow-hidden max-w-[280px]">
                    <Image
                        src={leader.image}
                        alt={`Foto ${leader.name}`}
                        className="w-full max-h-[45vh] object-cover object-top rounded-xl"
                        layout="fullWidth"
                    />
                </div>
            </div>
        </section>
    )
}
