'use client'

import { Close, Hamburger } from '@/components/icons'
import { MENU } from '@/constants/vars'
import Link from 'next/link'
import { useState } from 'react'
import Divider from '../divider'
import { ArrowRightHamMenu } from '../icons'

export default function HamburgerMenu () {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button className='colNav min-w-6 ml-auto cursor-pointer relative animate-fade animate-once animate-duration-300 animate-ease-in-out' onClick={handleMenu}>
        {isOpen ? <Close /> : <Hamburger />}
      </button>
      {isOpen && (
        <aside className='hamburgerMenu z-50 min-w-max w-[25vw] shadow-md border rounded-lg absolute top-[10vh] right-2.5 md:right-[20vw] bg-[var(--color-primary)]'>
          <nav className='p-5 flex flex-col items-center gap-2.5'>
            <h5>Menú</h5>
            <Divider />
            {MENU.map((menuItem, index) => (
              <Link onClick={handleMenu} key={index + menuItem.href} href={menuItem.href}>
                <ArrowRightHamMenu />
                <span>{menuItem.name}</span>
              </Link>
            ))}
          </nav>
        </aside>
      )}
    </>
  )
}