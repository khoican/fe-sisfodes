import { DISPLAY_MENU, MENU } from '#/constant/menu.constant'
import { ClientOnly, Link } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { NavMenu } from '../shared/navmenu'
import { Button } from '../ui/button'
import { MobileMenu } from './MobileMenu'

export default function Header () {
  const logo =
    'https://ik.imagekit.io/rulls/sisfodes/demo/logo/logo.svg?updatedAt=1777281903061'

  return (
    <header className='sticky top-0 z-50 border-b px-4 backdrop-blur-lg bg-background/80'>
      <nav className='w-full flex items-center justify-between gap-x-3 gap-y-2 py-3 sm:py-4 px-0 lg:px-8'>
        <h2 className='m-0 shrink-0 text-base font-semibold tracking-tight'>
          <Link to='/'>
            <Image
              src={logo}
              alt='Logo'
              layout='fullWidth'
              className='w-full h-8 object-cover'
            />
          </Link>
        </h2>

        <menu className='hidden lg:flex items-center gap-0 w-fit'>
          {DISPLAY_MENU.map(menu => (
            <NavMenu key={menu.name} {...menu} />
          ))}
          <Button variant='default' className='hidden lg:inline-flex ml-4'>
            <Link to={MENU.pengaduan.path}>{MENU.pengaduan.name}</Link>
          </Button>
        </menu>

        <ClientOnly>
          <MobileMenu menus={DISPLAY_MENU} />
        </ClientOnly>
      </nav>
    </header>
  )
}
