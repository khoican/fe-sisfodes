import Maps from '#/components/shared/maps'
import Title from '#/components/ui/title'
import { ClientOnly } from '@tanstack/react-router'
import { FaRegClock } from 'react-icons/fa6'
import { MdOutlineLocationOn } from 'react-icons/md'

interface LocationProps {
  address: string
  latitude: string
  longitude: string
}


/**
 * Komponen Location untuk menampilkan informasi lokasi desa.
 * 
 * @param {Object} props - Properti komponen.
 * @param {LocationProps} props.location - Data lokasi desa.
 * @returns {JSX.Element} Elemen Location.
 */

export default function Location({ address, latitude, longitude }: LocationProps) {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 items-center w-full mt-16 relative bg-white rounded-lg p-8'>
      <section className='col-span-1'>
        <Title title='Lokasi Kami' />

        <div className='mt-8 text-sm text-gray-600'>
          <p className=''>
            Kunjungi kantor pelayanan kami untuk mendapatkan bantuan informasi
            dan layanan administrasi desa secara langsung.
          </p>

          <div className='flex items-center mt-4 gap-2 font-medium'>
            <MdOutlineLocationOn className='w-1/12' size={20} />
            <p className='text-sm w-11/12'>
              {address}
            </p>
          </div>
          <div className='flex items-center mt-4 gap-2 font-medium'>
            <FaRegClock className='w-1/12' size={14} />
            <p className='text-sm w-11/12'>
              08.00 - 15.00 WIB (Senin - Jumat)
            </p>
          </div>
        </div>
      </section>

      <ClientOnly>
        <Maps
          position={[parseFloat(latitude), parseFloat(longitude)]}
          className='w-full h-[35vh] rounded-lg col-span-2'
        />
      </ClientOnly>
    </div>
  )
}
