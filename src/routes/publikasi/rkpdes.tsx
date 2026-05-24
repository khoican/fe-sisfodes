import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import Title from '#/components/ui/title'
import { publicationQueryOptions } from '#/services/publication.service'
import { createFileRoute } from '@tanstack/react-router'
import {
    FileText,
    Download,
    Eye,
    Calendar,
    FileDown,
    Info,
    ExternalLink,
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/publikasi/rkpdes')({
    head: () => ({
        meta: [
            {
                title: 'RKPDes | Desa Sumberkejayan',
            },
            {
                name: 'description',
                content:
                    'Rencana Kerja Pemerintah Desa (RKPDes) Sumberkejayan. Dokumen perencanaan tahunan desa.',
            },
        ],
    }),
    loader: async ({ context }) => {
        const publication = await context.queryClient.ensureQueryData(
            publicationQueryOptions('rkpdes'),
        )
        return {
            publication: publication.response,
        }
    },
    component: RkpdesPage,
})

function RkpdesPage() {
    const { publication } = Route.useLoaderData()
    const [selectedDoc, setSelectedDoc] = useState(publication.documents[0])

    if (!publication) return null

    return (
        <main className="w-full">
            {/* Header */}
            <section className="bg-background px-4 lg:px-12 py-12 rounded-b-3xl border-b shadow-sm">
                <div className="max-w-4xl">
                    <Badge
                        variant="primary"
                        className="mb-4 uppercase tracking-widest"
                    >
                        Dokumen Perencanaan
                    </Badge>
                    <h1 className="text-5xl font-extrabold leading-tight">
                        RKP<span className="text-primary">Des</span>
                    </h1>
                    <p className="text-muted-foreground mt-6 text-lg">
                        Rencana Kerja Pemerintah Desa (RKPDes) merupakan dokumen
                        penjabaran dari RPJM Desa untuk jangka waktu 1 (satu)
                        tahun yang memuat rancangan kerangka ekonomi desa.
                    </p>
                </div>
            </section>

            <section className="px-4 lg:px-12 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Document List */}
                    <div className="lg:col-span-1 space-y-6">
                        <Title title="Daftar Dokumen" />
                        <div className="flex flex-col gap-4 mt-8">
                            {publication.documents.map((doc) => (
                                <button
                                    key={doc.id}
                                    onClick={() => setSelectedDoc(doc)}
                                    className={`flex items-start gap-4 p-4 rounded-2xl border transition-all text-left group ${
                                        selectedDoc.id === doc.id
                                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                            : 'bg-card border-border hover:border-primary/50 text-foreground'
                                    }`}
                                >
                                    <div
                                        className={`p-3 rounded-xl ${selectedDoc.id === doc.id ? 'bg-white/20' : 'bg-primary/10 text-primary'}`}
                                    >
                                        <FileText size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-sm leading-tight">
                                            {doc.title}
                                        </h3>
                                        <div
                                            className={`flex items-center gap-2 mt-2 text-[10px] ${selectedDoc.id === doc.id ? 'text-white/70' : 'text-muted-foreground'}`}
                                        >
                                            <Calendar size={10} />
                                            <span>
                                                {new Date(
                                                    doc.created_at,
                                                ).toLocaleDateString('id-ID', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                })}
                                            </span>
                                            <span className="mx-1">•</span>
                                            <span>{doc.file_size}</span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-2xl flex gap-4 mt-8">
                            <Info
                                className="shrink-0 text-amber-600"
                                size={20}
                            />
                            <p className="text-xs text-amber-700 leading-relaxed">
                                Dokumen yang diunggah adalah salinan resmi.
                                Untuk mendapatkan salinan fisik bertanda tangan
                                basah, silakan hubungi Sekretariat Desa.
                            </p>
                        </div>
                    </div>

                    {/* Viewer & Detail */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground">
                                    {selectedDoc.title}
                                </h2>
                                <p className="text-muted-foreground text-sm mt-1">
                                    {selectedDoc.description}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" asChild>
                                    <a
                                        href={selectedDoc.file_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Download className="mr-2 h-4 w-4" />{' '}
                                        Unduh PDF
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* PDF Viewer Placeholder/Iframe */}
                        <Card className="border-none shadow-xl shadow-muted/10 rounded-3xl overflow-hidden bg-muted min-h-[600px] flex flex-col">
                            <div className="bg-primary/5 p-4 border-b flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                                    <Eye size={14} /> Pratinjau Dokumen
                                </div>
                                <Badge
                                    variant="outline"
                                    className="text-[10px]"
                                >
                                    {selectedDoc.file_type.toUpperCase()}
                                </Badge>
                            </div>
                            <div className="flex-1 relative bg-muted flex items-center justify-center p-8">
                                {/* In a real scenario, we might use an iframe or a PDF worker */}
                                <div className="text-center max-w-sm">
                                    <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border">
                                        <FileDown
                                            size={32}
                                            className="text-primary"
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg">
                                        Siap untuk Dibaca
                                    </h3>
                                    <p className="text-muted-foreground text-sm mt-2 mb-8">
                                        Dokumen dapat dilihat langsung atau
                                        diunduh untuk dibaca secara luring.
                                        Pratinjau interaktif akan terbuka di
                                        jendela baru.
                                    </p>
                                    <Button asChild className="rounded-xl px-8">
                                        <a
                                            href={selectedDoc.file_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />{' '}
                                            Buka Dokumen Penuh
                                        </a>
                                    </Button>
                                </div>

                                {/* Optional: If actually want to show PDF in iframe */}
                                {/* <iframe 
                    src={`${selectedDoc.file_url}#toolbar=0`} 
                    className='w-full h-full border-none absolute inset-0'
                    title={selectedDoc.title}
                  /> */}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    )
}
