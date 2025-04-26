'use client'
import { MENU } from '@/constants/vars'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function RowMenu() {
  const pathname = usePathname()

  return (
    <nav className='rowNav pt-6'>
      <div className='flex flex-row justify-start items-end ml-5 gap-2.5'>
        {MENU.map((menuItem, index) => (
          <Link 
            key={`menu-${index}`}
            href={pathname !== '/' ? `/${menuItem.href}` : menuItem.href}
          >
            {menuItem.name}
          </Link>
        ))}
      </div>
      <span className='ml-2.5 border border-black py-1 px-2.5 rounded-3xl min-w-max flex justify-center items-center pt-1.5 bg-primary text-secondary'>#BERESSÒ</span>
      {/* <div className='flex gap-2.5'>
        <Rrss />
      </div> */}
    </nav>
  )
}
