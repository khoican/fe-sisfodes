import PopulationCard from '#/components/shared/card/population'
import { Badge } from '#/components/ui/badge'
import type { Population } from '#/types/population'
import { IoIosMan, IoIosWoman } from 'react-icons/io'
import { MdOutlineFamilyRestroom, MdOutlineGroups } from 'react-icons/md'

interface DemographyProps {
  population: Population
}

/**
 * Seksi Demografi yang menampilkan ringkasan statistik kependudukan.
 * 
 * @param {DemographyProps} props - Properti komponen berisi data kependudukan.
 * @returns {JSX.Element} Elemen seksi demografi.
 */
export default function Demography({ population }: DemographyProps) {
  return (
    <div className='bg-white rounded-lg drop-shadow p-6 lg:col-span-2'>
      <div className='flex items-center justify-between mb-8'>
        <h2 className='text-2xl font-semibold text-primary'>
          Demografi Desa
        </h2>

        <Badge variant={'primary'} className='px-3 py-1 uppercase'>
          statistik {new Date(population.last_updated).getFullYear()}
        </Badge>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 h-fit'>
        <PopulationCard
          icon={MdOutlineGroups}
          label='Jumlah Penduduk'
          value={population.total_residents}
        />
        <PopulationCard
          icon={MdOutlineFamilyRestroom}
          label='Keluarga'
          value={population.total_households}
        />
        <PopulationCard 
          icon={IoIosMan} 
          label='Laki-laki' 
          value={population.by_gender.male} 
        />
        <PopulationCard 
          icon={IoIosWoman} 
          label='Perempuan' 
          value={population.by_gender.female} 
        />
      </div>
    </div>
  )
}
