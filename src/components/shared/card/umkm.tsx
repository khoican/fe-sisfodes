import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardHeader } from '#/components/ui/card'
import type { Umkm } from '#/types/umkm'
import { Image } from '@unpic/react'

export default function UmkmCard ({
  name,
  store,
  image,
  category
}: Umkm) {
  return (
    <Card className='p-0 gap-0 h-full'>
      <CardHeader className='p-0'>
        <Image
          src={image}
          alt={name}
          layout='fullWidth'
          className='aspect-16/10 rounded-t-lg object-center'
        />
      </CardHeader>
      <CardContent className='flex flex-col gap-1.5 p-4'>
        <Badge variant={'primary'} className='uppercase text-[10px]'>
          {category}
        </Badge>
        <h3 className='text-md font-semibold'>{name}</h3>
        <p className='text-xs text-gray-500'>{store}</p>
      </CardContent>
    </Card>
  )
}
