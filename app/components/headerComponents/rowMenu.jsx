'use client'
import { MENU } from '@/constants/vars'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function RowMenu() {
  const pathname = usePathname()

  return (
    <nav className='rowNav py-6'>
      <div className='flex flex-row justify-start items-end ml-5 gap-2.5 textShadow'>
        {MENU.map((menuItem, index) => (
          <Link 
            key={`menu-${index}`}
            href={pathname !== '/' ? `/${menuItem.href}` : menuItem.href}
          >
            {menuItem.name}
          </Link>
        ))}
      </div>
      <span className='ml-2.5 border border-black py-1.5 px-3 rounded-3xl min-w-max flex justify-center items-center bg-primary text-secondary'><i>#BERESSÒ</i></span>
      {/* <div className='flex gap-2.5'>
        <Rrss />
      </div> */}
    </nav>
  )
}
