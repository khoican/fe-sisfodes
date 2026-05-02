import Title from '#/components/ui/title'
import { FeaturedAgendaCard } from '#/components/shared/card/agenda/featured'
import { HolidayAgendaCard } from '#/components/shared/card/agenda/holiday'
import { AgendaList } from '#/components/shared/card/agenda/list'
import { useAgenda } from '#/hooks/agenda.hook'
import type { Agenda } from '#/types/agenda'
import { IoIosArrowForward } from 'react-icons/io'

interface AnnouncementAgendaProps {
  agenda: Agenda[]
}

/**
 * Komponen utama untuk menampilkan Agenda Desa dan Hari Libur Nasional di halaman Beranda.
 * Menggunakan hook useAgenda untuk manajemen state dan AgendaHelper (OOP) untuk pemrosesan data.
 * 
 * @param {AnnouncementAgendaProps} props - Properti berisi data mentah agenda.
 * @returns {JSX.Element} Section agenda yang sudah direfaktor.
 */
export default function AnnouncementAgenda ({
  agenda
}: AnnouncementAgendaProps) {
  const { 
    nextVillageAgenda, 
    nextHoliday, 
    listEvents, 
    countdown 
  } = useAgenda(agenda)

  return (
    <section className='mt-16'>
      <Title
        title='Agenda Desa'
        link={{
          to: '/agenda',
          label: 'Lihat Semua',
          icon: IoIosArrowForward
        }}
      />

      <div className='grid lg:grid-cols-2 gap-8 mt-6'>
        {/* Kolom Kiri: Agenda Terdekat & Libur Nasional Terdekat */}
        <div className='flex flex-col gap-6'>
          {nextVillageAgenda ? (
            <FeaturedAgendaCard 
              agenda={nextVillageAgenda} 
              countdown={countdown} 
            />
          ) : (
            <div className='bg-muted rounded-2xl p-8 text-center text-muted-foreground'>
              Tidak ada agenda desa mendatang.
            </div>
          )}

          {nextHoliday && <HolidayAgendaCard agenda={nextHoliday} />}
        </div>

        {/* Kolom Kanan: List Agenda & Hari Libur yang akan datang */}
        <AgendaList events={listEvents} />
      </div>
    </section>
  )
}
