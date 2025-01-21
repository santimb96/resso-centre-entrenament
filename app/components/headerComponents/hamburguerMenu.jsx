'use client'

import { Close, Hamburguer } from '@/components/icons'
import { useState } from 'react'

export default function HamburguerMenu () {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button className='min-w-6 ml-auto cursor-pointer relative' onClick={handleMenu}>
        {isOpen ? <Close /> : <Hamburguer />}
      </button>
      {isOpen && (
        <div className='min-w-max w-[50vw] shadow-md border rounded-lg absolute top-[10vh] right-2.5 bg-[var(--color-primary)]'>
          <ul className='p-5 flex flex-col items-end gap-5'>
            <li>¿Quién soy?</li>
            <li>Workshops</li>
            <li>Patrocinadores</li>
            <li>Section</li>
          </ul>
        </div>
      )}
    </>
  )
}