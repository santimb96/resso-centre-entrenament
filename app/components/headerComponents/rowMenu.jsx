'use client'
import { MENU } from '@/constants/vars'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Rrss from '../rrss'

export default function RowMenu() {
  const pathname = usePathname()

  return (
    <nav className='rowNav'>
      <div className='flex flex-row justify-start items-center ml-5 gap-5'>
        {MENU.map((menuItem, index) => (
          <Link 
            key={`menu-${index}`}
            href={pathname !== '/' ? `/${menuItem.href}` : menuItem.href}
          >
            {menuItem.name}
          </Link>
        ))}
      </div>
      <div className='flex gap-2.5'>
        <Rrss />
      </div>
    </nav>
  )
}
