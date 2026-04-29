import type { MenuItem } from '#/constant/menu.constant'
import { Link } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '../ui/collapsible'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '../ui/dropdown-menu'

export function NavMenu ({ name, path, subMenu }: MenuItem) {
  const isSubmenu = subMenu && subMenu.length > 0 && !path

  const style = {
    base: 'text-sm font-medium text-gray-500 hover:text-primary hover:underline underline-offset-4 data-active:text-primary data-active:underline',
    menu: 'h-9 px-4 py-2 inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap'
  }

  return (
    <li className='list-none'>
      {!isSubmenu ? (
        <Link to={path} className={`${style.base} ${style.menu}`}>
          {name}
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'ghost'} className={`${style.base}`}>
              {name}
              <ChevronDown className='' size={8} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {subMenu.map(sub => (
              <DropdownMenuItem key={sub.name} asChild>
                <Link to={sub.path}>{sub.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </li>
  )
}

export function NavMenuMobile ({ name, path, subMenu }: MenuItem) {
  const [open, setOpen] = useState(false)
  const isSubmenu = subMenu && subMenu.length > 0 && !path

  return (
    <div>
      {!isSubmenu ? (
        <Link
          key={path}
          to={path}
          className='w-full justify-start text-gray-600 hover:text-primary'
        >
          {name}
        </Link>
      ) : (
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger asChild>
            <p className='w-full text-gray-600 hover:text-primary flex items-center justify-between'>{name} <ChevronDown size={12}/></p>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className='flex flex-col gap-2 pl-4 mt-2 border-l'>
              {subMenu.map(sub => (
                <Link
                  key={sub.name}
                  to={sub.path}
                  className='w-full justify-start text-gray-600 hover:text-primary'
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  )
}
