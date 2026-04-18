import { MENU } from '#/constant/menu.constant'
import { Link } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import logo from '../../assets/images/logo/logo.png'
import { Button } from '../ui/button'
import { MobileMenu } from './MobileMenu'

export default function Header () {
  const menus = [
    MENU.beranda,
    MENU.profil,
    MENU.statistik,
    MENU.layanan,
    MENU.berita,
    MENU.potensi,
    MENU.umkm,
    MENU.galeri
  ]

  return (
    <header className='sticky top-0 z-50 border-b px-4 backdrop-blur-lg bg-white/80'>
      <nav className='w-full flex items-center justify-between gap-x-3 gap-y-2 py-3 sm:py-4 px-0 lg:px-8'>
        <h2 className='m-0 shrink-0 text-base font-semibold tracking-tight'>
          <Link to='/'>
            <Image src={logo} alt='Logo' width={100} height={40} />
          </Link>
        </h2>

        <menu className='hidden lg:flex items-center gap-8 w-fit'>
          {menus.map(menu => (
            <li key={menu.path} className='list-none'>
              <Link
                to={menu.path}
                className='text-sm font-medium text-gray-500 hover:text-primary hover:underline underline-offset-4 data-active:text-primary data-active:underline'
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </menu>

        <Button variant='default' size='lg' className='hidden lg:inline-flex'>
          {MENU.kontak.name}
        </Button>

        <MobileMenu menus={menus} />
      </nav>
    </header>
  )
}
