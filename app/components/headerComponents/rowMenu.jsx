'use client'

import { MENU } from '@/constants/vars'
import Link from 'next/link'
import { Facebook, Instagram } from '../icons'
export default function RowMenu () {
  const location = window.location.pathname
  return (
    <nav className='rowNav'>
      <div className='flex flex-row justify-start ml-5 gap-5'>
        {MENU.map((menuItem, index) => (
          <Link key={index + menuItem.href} href={location !== '/' ? `/${menuItem.href}`: menuItem.href}>{menuItem.name}</Link>
        ))}
      </div>
      <div className='flex justify-center items-center gap-2.5'>
        <span className='min-w-8 p-1 hover:text-blue-900 duration-200 ease-in-out cursor-pointer'><Instagram size={32}/></span>
        <span className='min-w-8 p-1 hover:text-blue-900 duration-200 ease-in-out cursor-pointer'><Facebook size={32} /></span>
      </div>
    </nav>
  )
}