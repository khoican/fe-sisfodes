import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '#/components/ui/card'
import type { Umkm } from '#/types/umkm'
import { Link } from '@tanstack/react-router'
import { Image } from '@unpic/react'

export default function UmkmCard ({
  slug,
  name,
  store,
  image,
  category,
  price,
  contact
}: Umkm) {
  const onClickContact = () => {
    const whatsappUrl = `https://wa.me/${contact.replace('0', '62')}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Card className='p-0 gap-0 h-full group'>
      <CardHeader className='p-0'>
        <Link to='/umkm/$slug' params={{ slug }} className='block'>
          <div className='relative overflow-hidden w-full h-full'>
            <Image
              src={image}
              alt={name}
              layout='fullWidth'
              className='aspect-16/10 rounded-t-lg object-center transition-transform duration-300 ease-out group-hover:scale-105'
            />
            <Badge className='uppercase text-[10px] absolute top-2 left-2'>
              {category.name}
            </Badge>
          </div>
        </Link>
      </CardHeader>
      <CardContent className='flex flex-col gap-1.5 p-4 w-full h-full'>
        <Link
          to='/umkm/$slug'
          params={{ slug }}
          className='text-md font-semibold group-hover:text-primary'
        >
          {name}
        </Link>
        <p className='text-xs text-gray-500'>{store}</p>
      </CardContent>

      <CardFooter className='p-4 pt-0 grid grid-cols-2 items-center'>
        <p className='text-md text-primary font-bold'>
          Rp {price.toLocaleString('id-ID')}
        </p>
        <Button
          className='w-full text-xs bg-primary/80 hover:bg-primary cursor-pointer'
          size={'sm'}
          onClick={onClickContact}
        >
          Hubungi Penjual
        </Button>
      </CardFooter>
    </Card>
  )
}
