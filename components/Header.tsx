import { UserButton } from '@clerk/nextjs'
import React from 'react'
import SideNavMob from './SideNavMob'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
      <div className='block md:hidden'>
        <SideNavMob />
      </div>
      <h2 className='bg-primary p-1 rounded-full text-white px-2 text-xs sm:text-base mx-auto'>🔥 Join Us for $9.99/Month 🔥</h2>
      <div>
        <UserButton />
      </div>

    </div>
  )
}

export default Header