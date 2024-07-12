"use client"
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'

const SideNavMob = () => {
  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard'
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history'
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing'
    },
    {
      name: 'Setting',
      icon: Settings,
      path: '/dashboard/settings'
    },
  ]

  const path = usePathname();

  return (
    <Sheet>
      <SheetTrigger className='hover:bg-gray-200 p-2 rounded-lg cursor-pointer'>
        <GiHamburgerMenu />
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Content X</SheetTitle>
        </SheetHeader>
        <div className='mt-3'>
          {MenuList.map((menu, index) => (
            <SheetClose asChild key={index}>
              <Link href={menu.path}>
                <div className={`flex gap-2 mb-2 p-3 items-center hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path === menu.path ? 'bg-primary text-white' : ''}`}>
                  <menu.icon className='h-6 w-6' />
                  <h2 className='text-lg'>{menu.name}</h2>
                </div>
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SideNavMob
