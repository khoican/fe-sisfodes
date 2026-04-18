import type { IconType } from 'react-icons/lib'

interface DemographyCardProps {
  icon: IconType
  title: string
  value: number
}

export default function DemographyCard ({
  icon,
  title,
  value
}: DemographyCardProps) {
  const IconRender = icon

  return (
    <div className='rounded-lg bg-gray-100 p-6 flex flex-col items-center gap-1'>
      <div className='text-3xl mb-2 text-primary'>{<IconRender />}</div>
      <p className='text-2xl font-bold'>
        {value.toLocaleString()}
      </p>
      <h3 className='text-xs text-gray-600 text-center font-semibold'>{title}</h3>
    </div>
  )
}
