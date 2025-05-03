'use client'
import { MENU } from '@/constants/vars'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { workSans } from '../../lib/fonts'

export default function RowMenu() {
  const pathname = usePathname()

  return (
    <nav className='rowNav'>
      <div className='flex flex-row justify-start items-end ml-5 gap-5 textShadow'>
        {MENU.map((menuItem, index) => (
          <Link 
            key={`menu-${index}`}
            href={pathname !== '/' ? `/${menuItem.href}` : menuItem.href}
            className='text-[1rem] font-bold hover:text-accent duration-150 ease-in-out'
          >
            {menuItem.name}
          </Link>
        ))}
      </div>
      <span className={`${workSans.className} text-[1rem] ml-5 font-extrabold italic clipPathHashtag py-1.5 px-10 min-w-max flex justify-center items-center bg-primary text-secondary`}>#BERESSÒ</span>
      {/* <div className='flex gap-2.5'>
        <Rrss />
      </div> */}
    </nav>
  )
}
