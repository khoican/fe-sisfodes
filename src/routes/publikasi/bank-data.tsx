import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import Title from '#/components/ui/title'
import { publicationQueryOptions } from '#/services/publication.service'
import { createFileRoute } from '@tanstack/react-router'
import { 
  Database, 
  Download, 
  Search, 
  FileText, 
  Calendar, 
  ArrowRight
} from 'lucide-react'
import { useState } from 'react'
import { Input } from '#/components/ui/input'

export const Route = createFileRoute('/publikasi/bank-data')({
  head: () => ({
    meta: [
      {
        title: 'Bank Data | Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Pusat data dan dokumen publik Desa Sumberkejayan. Download peraturan desa, formulir, dan laporan resmi.',
      },
    ],
  }),
  loader: async ({ context }) => {
    const publication = await context.queryClient.ensureQueryData(publicationQueryOptions('bank-data'))
    return {
      publication: publication.response
    }
  },
  component: BankDataPage
})

function BankDataPage() {
  const { publication } = Route.useLoaderData()
  const [searchTerm, setSearchTerm] = useState('')

  if (!publication) return null

  const filteredDocs = publication.documents.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    doc.description?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className='w-full'>
      {/* Header */}
      <section className='bg-background px-4 lg:px-12 py-12 rounded-b-3xl border-b shadow-sm'>
        <div className='max-w-4xl'>
          <Badge variant='primary' className='mb-4 uppercase tracking-widest'>Arsip Publik</Badge>
          <h1 className='text-5xl font-extrabold leading-tight'>
            Bank <span className='text-primary'>Data</span>
          </h1>
          <p className='text-muted-foreground mt-6 text-lg'>
            Pusat penyimpanan dokumen digital Desa Sumberkejayan. Temukan dan unduh berbagai 
            regulasi, formulir layanan, dan laporan publik secara mudah.
          </p>
        </div>
      </section>

      <section className='px-4 lg:px-12 py-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12'>
          <Title title='Semua Dokumen' />
          <div className='relative w-full md:w-96'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground' size={18} />
            <Input 
              placeholder='Cari dokumen...' 
              className='pl-10 rounded-xl bg-card border-border'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className='grid gap-6'>
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc) => (
              <Card key={doc.id} className='border-none shadow-sm hover:shadow-md transition-all overflow-hidden group'>
                <CardContent className='p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
                  <div className='flex items-start gap-5 flex-1'>
                    <div className='p-4 bg-primary/5 rounded-2xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors'>
                      <FileText size={28} />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-foreground mb-1'>{doc.title}</h3>
                      <p className='text-muted-foreground text-sm line-clamp-2 max-w-2xl'>{doc.description}</p>
                      <div className='flex items-center gap-4 mt-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60'>
                         <span className='flex items-center gap-1.5'><Calendar size={12} /> {new Date(doc.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                         <span className='flex items-center gap-1.5'>UKURAN: {doc.file_size}</span>
                         <span className='flex items-center gap-1.5 text-primary'>FORMAT: {doc.file_type.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className='flex items-center gap-3 w-full md:w-auto border-t md:border-none pt-4 md:pt-0'>
                    <Button variant='outline' className='flex-1 md:flex-none rounded-xl' asChild>
                       <a href={doc.file_url} target='_blank' rel='noopener noreferrer'>
                          <Download className='mr-2 h-4 w-4' /> Unduh Berkas
                       </a>
                    </Button>
                    <Button variant='primary' size='icon' className='shrink-0 rounded-xl group-hover:translate-x-1 transition-transform hidden md:flex' asChild>
                       <a href={doc.file_url} target='_blank' rel='noopener noreferrer'>
                          <ArrowRight size={18} />
                       </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className='py-20 text-center bg-muted/30 rounded-3xl border border-dashed border-border'>
               <Database className='mx-auto text-muted-foreground/30 mb-4' size={48} />
               <p className='text-muted-foreground font-medium'>Tidak ada dokumen yang ditemukan untuk kata kunci tersebut.</p>
               <Button variant='ghost' className='mt-4' onClick={() => setSearchTerm('')}>Bersihkan Pencarian</Button>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className='px-4 lg:px-12 py-16 bg-muted/30'>
        <div className='max-w-4xl mx-auto text-center'>
           <h2 className='text-3xl font-bold mb-6'>Keterbukaan Informasi</h2>
           <p className='text-muted-foreground leading-relaxed'>
              Seluruh dokumen yang dipublikasikan di Bank Data merupakan informasi terbuka yang dapat 
              diakses oleh publik sesuai dengan Undang-Undang Keterbukaan Informasi Publik. Jika Anda 
              membutuhkan informasi lain yang belum tersedia di sini, silakan ajukan permohonan informasi 
              melalui formulir pengaduan atau datang langsung ke kantor desa.
           </p>
        </div>
      </section>
    </main>
  )
}
