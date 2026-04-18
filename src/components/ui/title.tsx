import { Link } from '@tanstack/react-router'
import type { IconType } from 'react-icons/lib'

interface TitleProps {
  title: string
  link?: {
    to: string
    label: string
    icon?: IconType
  }
}

export default function Title ({ title, link }: TitleProps) {
  const IconRender = link?.icon

  return (
    <div className='flex items-center justify-between mb-4'>
      <div>
        <h1 className='text-2xl font-semibold font-poppins mb-1'>{title}</h1>

        <div className='bg-primary rounded-full h-2 w-20'></div>
      </div>
      {link && (
        <Link
          to={link.to}
          className='group flex items-center gap-1 text-primary font-medium text-sm'
        >
          <span className='transition-transform duration-150 group-hover:-translate-x-1 group-hover:underline motion-reduce:transition-none motion-reduce:transform-none'>
            {link.label}
          </span>

          {IconRender && <IconRender />}
        </Link>
      )}
    </div>
  )
}
