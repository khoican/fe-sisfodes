import logo from '#/assets/images/logo/logo.png'
import { footerData } from '#/data/footer.data'
import { ClientOnly, Link } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { getYear } from 'date-fns'
import {
  FaClock,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTiktok
} from 'react-icons/fa6'
import Socmed from '../shared/socmed'

export default function Footer () {
  const year = getYear(new Date())

  return (
    <footer className='mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-12 bg-card text-card-foreground border-t'>
      <div>
        <Image src={logo} alt='logo' layout='fullWidth' className='w-1/2 dark:brightness-0 dark:invert' />

        <p className='mt-8 text-sm text-muted-foreground font-medium tracking-wider'>
          Melayani warga dengan sepenuh hati, membangun kemandirian ekonomi dari
          potensi lokal yang berkelanjutan.
        </p>

        <div className='w-full flex items-center gap-4 mt-6'>
          <Socmed icon={FaFacebook} link='https://www.facebook.com/' label='Kunjungi Facebook Desa' />
          <Socmed icon={FaInstagram} link='https://www.instagram.com/' label='Kunjungi Instagram Desa' />
          <Socmed icon={FaTiktok} link='https://www.tiktok.com/' label='Kunjungi Tiktok Desa' />
        </div>
      </div>

      {footerData.map(item => (
        <div key={item.title} className='flex flex-col gap-4'>
          <FooterTitle title={item.title} />
          {item.links.map(link => (
            <FooterLink key={link.to} {...link} />
          ))}
        </div>
      ))}

      <div>
        <FooterTitle title='Kontak Kami' />

        <p className='text-sm text-muted-foreground font-medium tracking-wider'>
          Jl. Banyuwangi No.6, Tegalan, Sumber Kejayan, Kec. Mayang, Kabupaten
          Jember
        </p>

        <div className='flex items-center gap-2 text-primary text-sm font-medium tracking-wider mt-4'>
          <FaClock />
          <span className='text-sm text-muted-foreground font-medium tracking-wider'>
            08.00 - 15.00 WIB (Senin - Jumat)
          </span>
        </div>

        <div className='flex items-center gap-2 text-primary text-sm font-medium tracking-wider mt-4'>
          <FaPhone />
          <span className='text-sm text-muted-foreground font-medium tracking-wider'>
            08123456789
          </span>
        </div>
      </div>

      <ClientOnly>
        <div className='col-span-full text-center text-sm text-muted-foreground mt-12'>
          &copy; {year} Desa Sumberkejayan.
        </div>
      </ClientOnly>
    </footer>
  )
}

function FooterTitle ({ title }: { title: string }) {
  return (
    <h3 className='text-sm text-primary font-medium tracking-wider uppercase mb-6'>
      {title}
    </h3>
  )
}

function FooterLink ({ label, to }: { label: string; to: string }) {
  return (
    <Link
      to={to}
      className='text-sm text-muted-foreground hover:text-primary font-medium transition-colors'
    >
      {label}
    </Link>
  )
}
