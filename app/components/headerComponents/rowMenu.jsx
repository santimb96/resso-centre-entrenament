'use client'

import { MENU } from '@/constants/vars'
import Link from 'next/link'
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
        <div className='w-7 h-7 bg-slate-300 rounded-md'></div>
        <div className='w-7 h-7 bg-slate-300 rounded-md'></div>
      </div>
    </nav>
  )
}