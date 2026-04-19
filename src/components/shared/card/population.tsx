import { cn } from "#/lib/utils"

interface PopulationProps {
    label: string
    value: number | string
    note: string
    className?: {
        root?: string
        label?: string
        value?: string
        note?: string
    }
}

export default function PopulationCard ({ label, value, note, className }: PopulationProps) {
  return (
    <div className={cn('bg-white rounded-2xl p-6 flex flex-col gap-2', className?.root)}>
      <h2 className={cn('text-xs font-medium tracking-wider text-gray-500', className?.label)}>{label}</h2>
      <p className={cn('text-4xl tracking-wider text-primary font-extrabold', className?.value)}>{value}</p> 
      <p className={cn('text-xs text-gray-800', className?.note)}>{note}</p>
    </div>
  )
}