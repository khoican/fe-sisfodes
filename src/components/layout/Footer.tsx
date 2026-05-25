import { footerData } from '#/data/footer.data'
import { ClientOnly, Link, useLoaderData } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { getYear } from 'date-fns'
import {
    FaFacebook,
    FaInstagram,
    FaTiktok,
} from 'react-icons/fa6'
import Socmed from '../shared/socmed'
import { VILLAGES_CONFIG } from '#/constant/village.constant'

/**
 * @description The main Footer component, dynamically rendered based on the active village tenant.
 * Uses a dark premium background, provides semantic HTML tags, a11y labels, and ACT developer credits.
 * @returns {JSX.Element} The rendered Footer component.
 * @example
 * <Footer />
 */
export default function Footer() {
    const year = getYear(new Date())
    const rootData = useLoaderData({ from: '__root__' }) as any
    const activeVillage = rootData?.activeVillage || VILLAGES_CONFIG.sumberkejayan
    
    const logo = activeVillage.logo
    const name = activeVillage.name
    const tagline = activeVillage.tagline
    const address = activeVillage.address
    const addressText = `${address.street}, ${address.hamlet}, Kec. ${address.district}, Kabupaten ${address.regency}, ${address.province} ${address.postal_code}`
    const contacts = activeVillage.contacts
    const socials = activeVillage.socials

    return (
        <footer 
            aria-label="Footer navigasi" 
            className="mt-20 bg-neutral-950 text-neutral-200 border-t border-white/10"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-12 max-w-7xl mx-auto">
                <div className="flex flex-col gap-6">
                    <Image
                        src={logo}
                        alt={`Logo ${name}`}
                        layout="fullWidth"
                        className="w-1/2 brightness-0 invert"
                    />

                    <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                        {tagline}
                    </p>

                    <div className="space-y-3 text-xs text-neutral-400">
                        <p className="font-semibold text-white uppercase tracking-wider">Kontak Kami</p>
                        <p className="leading-relaxed">{addressText}</p>
                        <p>Telp/WA: {contacts.phone}</p>
                        <p>Email: {contacts.email}</p>
                    </div>

                    <div className="w-full flex items-center gap-4 mt-2">
                        <Socmed
                            icon={FaFacebook}
                            link={socials?.facebook || 'https://www.facebook.com/'}
                            label={`Kunjungi Facebook ${name}`}
                        />
                        <Socmed
                            icon={FaInstagram}
                            link={socials?.instagram || 'https://www.instagram.com/'}
                            label={`Kunjungi Instagram ${name}`}
                        />
                        <Socmed
                            icon={FaTiktok}
                            link="https://www.tiktok.com/"
                            label={`Kunjungi Tiktok ${name}`}
                        />
                    </div>
                </div>

                {footerData.map((item) => (
                    <div key={item.title} className="flex flex-col gap-4">
                        <FooterTitle title={item.title} />
                        <div className="flex flex-col gap-2">
                            {item.links.map((link) => (
                                <FooterLink key={link.to} {...link} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <ClientOnly>
                        <p className="text-xs text-neutral-400">
                            &copy; {year} {name}. Hak Cipta Dilindungi.
                        </p>
                    </ClientOnly>
                    <p className="text-xs text-neutral-500">
                        Dikembangkan oleh ANTARDATA CAKRAWALA TEKNOLOGI
                    </p>
                </div>
            </div>
        </footer>
    )
}

/**
 * @description Renders the section title in the footer.
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title text.
 * @returns {JSX.Element} The title element.
 */
function FooterTitle({ title }: { title: string }) {
    return (
        <h3 className="text-sm text-white font-semibold tracking-wider uppercase mb-2">
            {title}
        </h3>
    )
}

/**
 * @description Renders a single navigation link in the footer.
 * @param {Object} props - Component properties.
 * @param {string} props.label - Clickable text.
 * @param {string} props.to - Destination path.
 * @returns {JSX.Element} The link component.
 */
function FooterLink({ label, to }: { label: string; to: string }) {
    return (
        <Link
            to={to}
            className="text-sm text-neutral-400 hover:text-white font-medium transition-colors py-1"
        >
            {label}
        </Link>
    )
}
