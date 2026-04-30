import { cn } from "#/lib/utils"
import type { ElementType } from "react"

interface PopulationCardProps {
    label: string
    value: number | string
    note?: string
    icon?: ElementType
    className?: {
        root?: string
        label?: string
        value?: string
        note?: string
        icon?: string
    }
}

/**
 * Komponen kartu untuk menampilkan statistik kependudukan tunggal.
 * 
 * @param {PopulationCardProps} props - Properti komponen.
 * @returns {JSX.Element} Elemen kartu kependudukan.
 */
export default function PopulationCard ({ label, value, note, icon: Icon, className }: PopulationCardProps) {
  return (
    <div className={cn('bg-gray-50 rounded-lg p-4 flex flex-col items-center gap-4', className?.root)}>
      {Icon && (
        <div className={cn('p-2 rounded-full text-primary', className?.icon)}>
          <Icon size={32} />
        </div>
      )}
      <div className="flex flex-col flex-1 text-center">
        <p className={cn('text-2xl font-bold text-primary', className?.value)}>
          {typeof value === 'number' ? new Intl.NumberFormat('id-ID').format(value) : value}
        </p> 
        <h3 className={cn('text-[10px] font-bold tracking-wider text-gray-500 uppercase', className?.label)}>{label}</h3>
        {note && <p className={cn('text-[10px] text-gray-400', className?.note)}>{note}</p>}
      </div>
    </div>
  )
}
