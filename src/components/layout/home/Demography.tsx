import PopulationCard from '#/components/shared/card/population'
import { Badge } from '#/components/ui/badge'
import type { IPopulation } from '#/types/IPopulation'
import { IoIosMan, IoIosWoman } from 'react-icons/io'
import { MdOutlineFamilyRestroom, MdOutlineGroups } from 'react-icons/md'
import { Link } from '@tanstack/react-router'

interface DemographyProps {
    population: IPopulation
}

/**
 * Seksi Demografi yang menampilkan ringkasan statistik kependudukan.
 *
 * @param {DemographyProps} props - Properti komponen berisi data kependudukan.
 * @returns {JSX.Element} Elemen seksi demografi.
 */
export default function Demography({ population }: DemographyProps) {
    const totalGender = population.by_gender.male + population.by_gender.female
    const malePercentage = totalGender > 0 ? ((population.by_gender.male / totalGender) * 100).toFixed(1) : '0'
    const femalePercentage = totalGender > 0 ? ((population.by_gender.female / totalGender) * 100).toFixed(1) : '0'

    return (
        <div className="bg-card rounded-lg drop-shadow p-6 lg:col-span-2 flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-semibold text-primary">
                        Demografi Desa
                    </h2>

                    <Badge variant={'primary'} className="px-3 py-1 uppercase">
                        statistik {new Date(population.last_updated).getFullYear()}
                    </Badge>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 h-fit">
                    <PopulationCard
                        icon={MdOutlineGroups}
                        label="Jumlah Penduduk"
                        value={population.total_residents}
                    />
                    <PopulationCard
                        icon={MdOutlineFamilyRestroom}
                        label="Keluarga"
                        value={population.total_households}
                    />
                    <PopulationCard
                        icon={IoIosMan}
                        label="Laki-laki"
                        value={population.by_gender.male}
                    />
                    <PopulationCard
                        icon={IoIosWoman}
                        label="Perempuan"
                        value={population.by_gender.female}
                    />
                </div>

                {/* Rasio Gender Bar */}
                <div className="mt-8 bg-muted/50 p-4 rounded-xl border">
                    <div className="flex justify-between text-xs font-semibold text-muted-foreground mb-2">
                        <span className="flex items-center gap-1 text-blue-600">
                            <IoIosMan size={16} /> Laki-laki ({malePercentage}%)
                        </span>
                        <span className="flex items-center gap-1 text-pink-600">
                            <IoIosWoman size={16} /> Perempuan ({femalePercentage}%)
                        </span>
                    </div>
                    <div className="w-full h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden flex shadow-inner">
                        <div 
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500" 
                            style={{ width: `${malePercentage}%` }} 
                        />
                        <div 
                            className="h-full bg-gradient-to-r from-pink-400 to-pink-600 transition-all duration-500" 
                            style={{ width: `${femalePercentage}%` }} 
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-end">
                <Link 
                    to="/statistik/kependudukan" 
                    className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5"
                >
                    Lihat Statistik Lengkap &rarr;
                </Link>
            </div>
        </div>
    )
}
