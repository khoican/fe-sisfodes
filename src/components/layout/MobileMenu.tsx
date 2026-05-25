'use client'

import type { MenuItem } from '#/constant/menu.constant'
import { Button } from '#/components/ui/button'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavMenuMobile } from '../shared/navmenu'
import { useLocation } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from '../ui/drawer'

interface MobileMenuProps {
    menus: MenuItem[]
}

/**
 * @description Komponen menu navigasi seluler (mobile menu) yang menggunakan Drawer controlled dan menutup otomatis saat rute berubah.
 * @param {MobileMenuProps} props - Properti komponen.
 * @returns {React.ReactElement} Elemen JSX menu mobile.
 * @example
 * <MobileMenu menus={DISPLAY_MENU} />
 */
export function MobileMenu({ menus }: MobileMenuProps) {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setOpen(false)
    }, [location.pathname])

    return (
        <Drawer direction="right" open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild className="flex lg:hidden">
                <Button variant="outline" aria-label="Buka menu">
                    <FaBarsStaggered />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="no-scrollbar overflow-y-auto px-4 py-6 flex flex-col gap-4">
                    {menus.map((menu) => (
                        <NavMenuMobile key={menu.name} {...menu} />
                    ))}
                </div>
                <DrawerFooter>
                    <Button>Kontak</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
