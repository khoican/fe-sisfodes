import { Card, CardContent, CardHeader } from '#/components/ui/card'
import { cn } from '#/lib/utils'
import type { News } from '#/types/news.d'
import { dateFormat } from '#/utils/date.util'
import { Link } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { IoIosArrowForward } from 'react-icons/io'

interface NewsCardProps extends News {
  layout?: 'horizontal' | 'vertical'
  className?: {
    root?: string
    header?: string
    image?: string
    content?: string
    meta?: string
    title?: string
    description?: string
  }
  options?: {
    showLink?: boolean
  }
}

export default function NewsCard ({
  title,
  description,
  image,
  category,
  created_at,
  layout = 'vertical',
  className,
  slug,
  options
}: NewsCardProps) {
  const { showLink = true } = options || {}
  const isHorizontal = layout === 'horizontal'
  const hasDetail = Boolean(slug)
  const detailSlug = slug

  return (
    <Card
      className={cn(
        'p-0 gap-0 h-full group overflow-hidden',
        isHorizontal ? 'flex-row' : 'flex-col',
        className?.root
      )}
    >
      <CardHeader
        className={cn(
          'p-0',
          isHorizontal ? 'w-1/3 shrink-0' : '',
          className?.header
        )}
      >
        {hasDetail ? (
          <Link
            to='/berita/$slug'
            params={{ slug: detailSlug! }}
            className='block'
          >
            <div
              className={cn(
                'overflow-hidden',
                isHorizontal ? 'h-full' : '',
                className?.image
              )}
            >
              <Image
                src={image}
                alt={title}
                layout='fullWidth'
                className={cn(
                  'w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105',
                  isHorizontal ? 'h-full w-full' : 'aspect-16/10'
                )}
              />
            </div>
          </Link>
        ) : (
          <div
            className={cn(
              'overflow-hidden',
              isHorizontal ? 'h-full' : '',
              className?.image
            )}
          >
            <Image
              src={image}
              alt={title}
              layout='fullWidth'
              className={cn(
                'w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105',
                isHorizontal ? 'h-full w-full' : 'aspect-16/10'
              )}
            />
          </div>
        )}
      </CardHeader>
      <CardContent
        className={cn(
          'flex flex-col justify-between h-full gap-1.5 p-6 text-sm',
          isHorizontal ? 'flex-1' : '',
          className?.content
        )}
      >
        <div>
          <div
            className={cn('flex items-center gap-4 text-xs', className?.meta)}
          >
            <p className='text-primary uppercase'>
              {category?.name ?? 'Pengumuman'}
            </p>
            <p className='text-gray-500'>{dateFormat({ date: created_at })}</p>
          </div>
          <h3>
            {hasDetail ? (
              <Link
                to='/berita/$slug'
                params={{ slug: detailSlug! }}
                className={cn(
                  'text-lg font-semibold group-hover:text-primary cursor-pointer',
                  className?.title
                )}
              >
                {title}
              </Link>
            ) : (
              <span
                className={cn(
                  'text-lg font-semibold group-hover:text-primary cursor-pointer',
                  className?.title
                )}
              >
                {title}
              </span>
            )}
          </h3>
          <p
            className={cn('text-gray-600 mt-2 text-sm', className?.description)}
            dangerouslySetInnerHTML={{ __html: description ?? '' }}
          ></p>
        </div>
        {showLink &&
          (hasDetail ? (
            <Link
              to='/berita/$slug'
              params={{ slug: detailSlug! }}
              className='flex items-center gap-1 text-primary font-medium mt-4'
            >
              Baca Selengkapnya
              <IoIosArrowForward />
            </Link>
          ) : (
            <Link
              to='/berita'
              className='flex items-center gap-1 text-primary font-medium mt-4'
            >
              Baca Selengkapnya
              <IoIosArrowForward />
            </Link>
          ))}
      </CardContent>
    </Card>
  )
}
