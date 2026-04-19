import { Progress as ProgressComponent } from '#/components/ui/progress'
import { cn } from '#/lib/utils'

interface ProgressProps {
    label: {
        title: string
        value: string
    }
    progress: number
    className?: {
        label?: string
        indicator?: string
        value?: string
        root?: string
    }
}

export default function Progress ({ label, progress, className }: ProgressProps) {
  return (
    <div className='w-full'>
      <div className={cn('flex items-center mb-2', className?.label)}>
        <span>{label.title}</span>
        <span className={cn('ml-auto', className?.value)}>{label.value}</span>
      </div>
      <ProgressComponent value={progress} id='progress-upload' className={className?.root} indicatorClassName={className?.indicator} />
    </div>
  )
}
