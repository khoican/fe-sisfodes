import type { MenuItem } from "#/constant/menu.constant"
import { Button } from "@/components/ui/button"
import { FaBarsStaggered } from "react-icons/fa6"
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger
} from "../ui/drawer"

interface MobileMenuProps {
    menus: MenuItem[]
}

export function MobileMenu( { menus }: MobileMenuProps) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild className="flex lg:hidden">
        <Button variant="outline"><FaBarsStaggered /></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="no-scrollbar overflow-y-auto px-4 py-6 flex flex-col gap-4">
          {menus.map(menu => (
            <Button key={menu.path} variant="ghost" className="w-full justify-start text-gray-600 hover:text-primary">
              {menu.name}
            </Button>
          ))}
        </div>
        <DrawerFooter>
          <Button>Kontak</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
