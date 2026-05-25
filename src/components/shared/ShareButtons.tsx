'use client'

import { useState } from 'react'
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import { Share2, Link as LinkIcon, Check } from 'lucide-react'
import { Button } from '#/components/ui/button'

interface ShareButtonsProps {
    title: string
    url?: string
}

/**
 * @description Komponen reusable untuk membagikan halaman ke media sosial (WhatsApp, Facebook, Instagram/Web Share) dan menyalin tautan.
 * @param {ShareButtonsProps} props - Properti komponen.
 * @param {string} props.title - Judul halaman/konten yang dibagikan.
 * @param {string} [props.url] - URL halaman yang dibagikan. Jika dikosongkan, akan menggunakan window.location.href secara dinamis.
 * @returns {React.ReactElement} Elemen JSX tombol berbagi sosial.
 * @example
 * <ShareButtons title="Detail Berita Keren" url="https://sumberkejayan.desa.id/berita/keren" />
 */
export function ShareButtons({ title, url }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false)

    const getShareUrl = () => {
        if (url) return url
        if (typeof window !== 'undefined') {
            return window.location.href
        }
        return ''
    }

    const shareToWhatsApp = () => {
        const shareUrl = getShareUrl()
        const text = `${title}\n\nBaca selengkapnya di: ${shareUrl}`
        const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`
        window.open(waUrl, '_blank', 'noopener,noreferrer')
    }

    const shareToFacebook = () => {
        const shareUrl = getShareUrl()
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        window.open(fbUrl, '_blank', 'noopener,noreferrer')
    }

    const shareNative = async () => {
        const shareUrl = getShareUrl()
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: `Bagikan: ${title}`,
                    url: shareUrl,
                })
            } catch (err) {
                console.error('Error sharing:', err)
            }
        } else {
            copyToClipboard()
        }
    }

    const copyToClipboard = async () => {
        const shareUrl = getShareUrl()
        try {
            await navigator.clipboard.writeText(shareUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <div className="flex flex-col gap-3 py-6 border-t border-b border-border my-6">
            <h4 className="text-sm font-bold text-foreground/80 tracking-wide uppercase">
                Bagikan Konten Ini
            </h4>
            <div className="flex flex-wrap items-center gap-3 relative">
                {/* WhatsApp */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={shareToWhatsApp}
                    className="rounded-full w-10 h-10 border-border hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 shadow-xs"
                    aria-label="Bagikan ke WhatsApp"
                >
                    <FaWhatsapp size={18} />
                </Button>

                {/* Facebook */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={shareToFacebook}
                    className="rounded-full w-10 h-10 border-border hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300 shadow-xs"
                    aria-label="Bagikan ke Facebook"
                >
                    <FaFacebookF size={16} />
                </Button>

                {/* Native Share / Instagram / Lainnya (Hanya muncul jika mobile browser / navigator.share didukung) */}
                {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={shareNative}
                        className="rounded-full w-10 h-10 border-border hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent transition-all duration-300 shadow-xs"
                        aria-label="Bagikan ke Media Sosial Lainnya"
                    >
                        <Share2 size={16} />
                    </Button>
                )}

                {/* Copy Link */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={copyToClipboard}
                    className={`rounded-full w-10 h-10 border-border transition-all duration-300 shadow-xs ${
                        copied
                            ? 'bg-green-100 border-green-500 text-green-700 dark:bg-green-950/40 dark:text-green-400'
                            : 'hover:bg-slate-700 hover:text-white hover:border-slate-700'
                    }`}
                    aria-label="Salin Tautan Halaman"
                >
                    {copied ? <Check size={16} /> : <LinkIcon size={16} />}
                </Button>

                {/* Toast Notification */}
                {copied && (
                    <div className="absolute left-0 -top-8 bg-green-500 text-white text-xs px-3 py-1 rounded-md shadow-md animate-fade-in flex items-center gap-1">
                        <Check size={12} />
                        <span>Tautan berhasil disalin!</span>
                    </div>
                )}
            </div>
        </div>
    )
}
