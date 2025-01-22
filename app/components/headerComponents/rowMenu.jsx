import { MENU } from '@/constants/vars'
import Link from 'next/link'
export default function RowMenu () {
  return (
    <nav className='rowNav w-full'>
      <div className='flex flex-row justify-end gap-5'>
        {MENU.map((menuItem, index) => (
          <Link key={index + menuItem.href} href={menuItem.href}>{menuItem.name}</Link>
        ))}
      </div>
    </nav>
  )
}