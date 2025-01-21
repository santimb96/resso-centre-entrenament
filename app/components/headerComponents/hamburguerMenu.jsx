'use client'

import { Close, Hamburguer } from '@/components/icons'
import Link from 'next/link'
import { useState } from 'react'

export default function HamburguerMenu () {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button className='colNav min-w-6 ml-auto cursor-pointer relative animate-fade animate-once animate-duration-300 animate-ease-in-out' onClick={handleMenu}>
        {isOpen ? <Close /> : <Hamburguer />}
      </button>
      {isOpen && (
        <aside className='hamburgerMenu min-w-max w-[25vw] shadow-md border rounded-lg absolute top-[10vh] right-2.5 md:right-[20vw] bg-[var(--color-primary)]'>
          <nav className='p-5 flex flex-col items-end gap-5'>
            <Link href='#quien-soy'>¿Quién soy?</Link>
            <Link href='#workshops'>Workshops</Link>
            <Link href='#patrocinadores'>Patrocinadores</Link>
          </nav>
        </aside>
      )}
    </>
  )
}