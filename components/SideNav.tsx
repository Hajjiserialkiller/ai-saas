"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {
    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/settings'
        },
    ]

    const path = usePathname();
    useEffect(()=>{
        
    }, [])
  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
            <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
        </div>
        <hr className='my-6 border' />
        <div className='mt-3'>
            {MenuList.map((menu, index) => (
                <Link href={menu.path} key={index}>
                    <div className={`flex gap-2 mb-2 p-3 items-center hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path==menu.path && 'bg-primary text-white'}`} key={index}>
                        <menu.icon className='h-6 w-6' />
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SideNav