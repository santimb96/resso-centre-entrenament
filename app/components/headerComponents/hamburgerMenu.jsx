/* eslint-disable react/no-unescaped-entities */
'use client'

import { Close, Hamburger } from '@/components/icons'
import { MENU } from '@/constants/vars'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { workSans } from '../../lib/fonts'
import Divider from '../divider'
import Rrss from '../rrss'

export default function HamburgerMenu () {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = () => {
    const body = document.getElementsByTagName('body')[0]
    setIsOpen(!isOpen)
    if (isOpen) {
      body.style.overflow = 'auto'
    } else {
      body.style.overflow = 'hidden'
    }
  }
  return (
    <>
      <button className='relative colNav min-w-6 ml-auto cursor-pointer transition-all animate-fade animate-once animate-duration-150 animate-ease-in-out' onClick={handleMenu}>
        <Hamburger size={24} />
      </button>
      {isOpen && (
        <div className={`hamburgerMenu ${isOpen && 'hamOpen'}`}>
          <aside className='w-full flex justify-end items-center mt-7 px-2.5'>
            <button className='cursor-pointer min-w-6' onClick={handleMenu}>
              <Close />
            </button>
          </aside>
          <nav className='p-2.5 flex flex-col items-center gap-2.5'>
            <picture>
              <Image
                src='/img/logo-resso-fn-azul-blanco-resized.png'
                alt='Ressò logo'
                width={150}
                height={100}
              />
            </picture>
            <Divider />
            {MENU.map((menuItem, index) => (
              <Link className='my-2.5 !text-[1.5rem] hover:text-accent duration-150 ease-in-out' onClick={handleMenu} key={index + menuItem.name} href={location !== '/' ? `/${menuItem.href}`: menuItem.href}>
                <span>{menuItem.name}</span>
              </Link>
            ))}
          </nav>
          <Divider />
          <h4 className={`${workSans.className} text-center my-2.5 text-[2rem] text-accent`}>¡Sígueme en redes!</h4>
          <div className='flex justify-center items-center gap-5 my-2.5'>
            <Rrss />
          </div>
          <Divider />
          <div className='mt-10 w-full flex flex-col items-center gap-2.5'>
            <h6 className='text-pretty text-center opacity-80'>2025 | Ressò - Centre d'entrenament</h6>
            <small className='text-pretty text-center opacity-80'>Hecho con ♥️ por <Link className='underline hover:text-accent ease-in-out duration-300 text-[12px]' href='https://github.com/santimb96' target='_blank'>Santiago Martínez</Link></small>
          </div>
        </div>
      )}
    </>
  )
}