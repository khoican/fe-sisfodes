import { DISPLAY_MENU, MENU } from '#/constant/menu.constant'
import { ClientOnly, Link } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { Button } from '../ui/button'
import { MobileMenu } from './MobileMenu'

export default function Header () {
  const logo = 'https://ik.imagekit.io/rulls/sisfodes/demo/logo/logo.svg?updatedAt=1777281903061'

  return (
    <header className='sticky top-0 z-50 border-b px-4 backdrop-blur-lg bg-white/80'>
      <nav className='w-full flex items-center justify-between gap-x-3 gap-y-2 py-3 sm:py-4 px-0 lg:px-8'>
        <h2 className='m-0 shrink-0 text-base font-semibold tracking-tight'>
          <Link to='/'>
            <Image src={logo} alt='Logo' layout='fullWidth' className='w-full h-10 object-cover' />
          </Link>
        </h2>

        <menu className='hidden lg:flex items-center gap-8 w-fit'>
          {DISPLAY_MENU.map(menu => (
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

        <ClientOnly>
          <MobileMenu menus={DISPLAY_MENU} />
        </ClientOnly>
      </nav>
    </header>
  )
}
