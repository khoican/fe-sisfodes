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
    <div className='rounded-lg bg-muted p-6 flex flex-col items-center gap-1 border'>
      <div className='text-3xl mb-2 text-primary'>{<IconRender />}</div>
      <p className='text-2xl font-bold text-foreground' suppressHydrationWarning>
        {new Intl.NumberFormat('id-ID').format(value)}
      </p>
      <h3 className='text-xs text-muted-foreground text-center font-semibold'>{title}</h3>
    </div>
  )
}
