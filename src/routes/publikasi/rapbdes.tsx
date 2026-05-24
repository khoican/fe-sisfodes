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

export const Route = createFileRoute('/publikasi/rapbdes')({
    head: () => ({
        meta: [
            {
                title: 'RAPBDes | Desa Sumberkejayan',
            },
            {
                name: 'description',
                content:
                    'Rancangan Anggaran Pendapatan dan Belanja Desa (RAPBDes) Sumberkejayan.',
            },
        ],
    }),
    loader: async ({ context }) => {
        const publication = await context.queryClient.ensureQueryData(
            publicationQueryOptions('rapbdes'),
        )
        return {
            publication: publication.response,
        }
    },
    component: RapbdesPage,
})

function RapbdesPage() {
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
                        Transparansi Anggaran
                    </Badge>
                    <h1 className="text-5xl font-extrabold leading-tight">
                        RAPB<span className="text-primary">Des</span>
                    </h1>
                    <p className="text-muted-foreground mt-6 text-lg">
                        Rancangan Anggaran Pendapatan dan Belanja Desa (RAPBDes)
                        adalah dokumen draf usulan anggaran desa sebelum
                        ditetapkan menjadi APBDes resmi tahunan.
                    </p>
                </div>
            </section>

            <section className="px-4 lg:px-12 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Document List */}
                    <div className="lg:col-span-1 space-y-6">
                        <Title title="Berkas Rancangan" />
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

                        <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl flex gap-4 mt-8">
                            <Info
                                className="shrink-0 text-blue-600"
                                size={20}
                            />
                            <p className="text-xs text-blue-700 leading-relaxed">
                                RAPBDes ini sedang dalam tahap pembahasan atau
                                konsultasi publik. Masukan dari warga sangat
                                kami harapkan untuk penyempurnaan anggaran desa.
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
                                        Unduh Rancangan
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Viewer */}
                        <Card className="border-none shadow-xl shadow-muted/10 rounded-3xl overflow-hidden bg-muted min-h-[600px] flex flex-col">
                            <div className="bg-primary/5 p-4 border-b flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                                    <Eye size={14} /> Pratinjau Rancangan
                                </div>
                                <Badge
                                    variant="outline"
                                    className="text-[10px]"
                                >
                                    {selectedDoc.file_type.toUpperCase()}
                                </Badge>
                            </div>
                            <div className="flex-1 relative bg-muted flex items-center justify-center p-8">
                                <div className="text-center max-w-sm">
                                    <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border">
                                        <FileDown
                                            size={32}
                                            className="text-primary"
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg">
                                        Tinjau RAPBDes
                                    </h3>
                                    <p className="text-muted-foreground text-sm mt-2 mb-8">
                                        Anda dapat memeriksa draf anggaran
                                        melalui pratinjau ini. Pastikan Anda
                                        memiliki aplikasi pembaca PDF untuk
                                        kenyamanan terbaik.
                                    </p>
                                    <Button asChild className="rounded-xl px-8">
                                        <a
                                            href={selectedDoc.file_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />{' '}
                                            Buka di Jendela Baru
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    )
}
