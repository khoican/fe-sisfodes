import DemographyCard from '#/components/shared/card/demography'
import { Badge } from '#/components/ui/badge'
import { population } from '#/data/population.data'
import { IoIosMan, IoIosWoman } from 'react-icons/io'
import { MdOutlineFamilyRestroom, MdOutlineGroups } from 'react-icons/md'

export default function DemographySection() {
  return (
    <div className='bg-white rounded-lg drop-shadow p-6 lg:col-span-2'>
      <div className='flex items-center justify-between mb-8'>
        <h2 className='text-2xl font-semibold text-primary'>
          Demografi Desa
        </h2>

        <Badge variant={'primary'} className='px-3 py-1 uppercase'>
          statistik 2025
        </Badge>
      </div>

      <div className='grid md:grid-cols-4 gap-4 h-fit'>
        <DemographyCard
          icon={MdOutlineGroups}
          title='Jumlah Penduduk'
          value={population.population}
        />
        <DemographyCard
          icon={MdOutlineFamilyRestroom}
          title='Keluarga'
          value={population.family}
        />
        <DemographyCard icon={IoIosMan} title='Laki-laki' value={population.male} />
        <DemographyCard icon={IoIosWoman} title='Perempuan' value={population.female} />
      </div>
    </div>
  )
}
