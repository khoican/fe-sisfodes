import UmkmCard from '#/components/shared/card/umkm'
import Title from '#/components/ui/title'
import type { Umkm } from '#/types/umkm'
import { MdStorefront } from 'react-icons/md'

interface UmkmProps {
  umkm: Umkm[]
}

/**
 * Seksi UMKM yang menampilkan daftar produk UMKM unggulan desa.
 * 
 * @param {UmkmProps} props - Properti komponen berisi daftar UMKM.
 * @returns {JSX.Element} Elemen seksi UMKM.
 */
export default function Umkm({ umkm }: UmkmProps) {
  return (
    <div className='w-full mt-16'>
      <Title
        title='UMKM Unggulan'
        link={{
          to: '/umkm',
          label: 'Eksplor UMKM',
          icon: MdStorefront
        }}
      />

      <div className='grid md:grid-cols-2 lg:grid-cols-4 w-full gap-6'>
        {umkm.slice(0, 4).map((item, index) => (
          <UmkmCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
