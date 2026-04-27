import NewsCard from '#/components/shared/card/news'
import Title from '#/components/ui/title'
import type { News } from '#/types/news'
import { IoIosArrowForward } from 'react-icons/io'

interface NewsSectionProps {
  newsData: News[]
}

export default function NewsSection({ newsData }: NewsSectionProps) {
  return (
    <div className='w-full mt-16'>
      <Title
        title='Berita Terkini'
        link={{
          to: '/berita',
          label: 'Lihat Semua',
          icon: IoIosArrowForward
        }}
      />

      <div className='grid lg:grid-cols-3 w-full gap-6'>
        {newsData.slice(0, 3).map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
