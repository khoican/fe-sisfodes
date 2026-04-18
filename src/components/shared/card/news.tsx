import { Card, CardContent, CardHeader } from '#/components/ui/card'
import type { News } from '#/types/news.d'
import { dateFormat } from '#/utils/date.util'
import { Link } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { IoIosArrowForward } from 'react-icons/io'

export default function NewsCard ({
  title,
  description,
  image,
  created_at
}: News) {
  return (
    <Card className='p-0 gap-0 h-full'>
      <CardHeader className='p-0'>
        <Image
          src={image}
          alt={title}
          layout='fullWidth'
          className='aspect-16/10 rounded-t-lg object-center'
        />
      </CardHeader>
      <CardContent className='flex flex-col gap-1.5 p-6'>
        <p className='text-xs text-gray-500'>{dateFormat({ date: created_at })}</p>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p
          className='text-sm text-gray-400 line-clamp-2'
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>

        <Link
          to='/'
          className='flex items-center gap-1 text-primary font-medium text-sm mt-4'
        >
          Baca Selengkapnya
          <IoIosArrowForward />
        </Link>
      </CardContent>
    </Card>
  )
}
