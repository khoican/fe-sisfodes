import UmkmCard from '#/components/shared/card/umkm'
import Title from '#/components/ui/title'
import type { Umkm } from '#/types/umkm'
import { MdStorefront } from 'react-icons/md'

interface UmkmSectionProps {
  umkm: Umkm[]
}

export default function UmkmSection({ umkm }: UmkmSectionProps) {
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
