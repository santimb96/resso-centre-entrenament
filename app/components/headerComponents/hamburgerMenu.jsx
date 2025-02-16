'use client'

import { Close, Hamburger } from '@/components/icons'
import { MENU } from '@/constants/vars'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
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
      <button className='relative colNav min-w-6 ml-auto cursor-pointer transition-all animate-fade animate-once animate-duration-300 animate-ease-in-out' onClick={handleMenu}>
        <Hamburger />
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
                src='/img/pfisicLogo.png'
                alt='PfisicMario logo'
                width={75}
                height={75}
              />
            </picture>
            <Divider />
            {MENU.map((menuItem, index) => (
              <Link className='my-2.5' onClick={handleMenu} key={index + menuItem.name} href={location !== '/' ? `/${menuItem.href}`: menuItem.href}>
                <span>{menuItem.name}</span>
              </Link>
            ))}
          </nav>
          <Divider />
          <h4 className='text-center my-2.5'>Sígueme en redes!</h4>
          <div className='flex justify-center items-center gap-5 my-2.5'>
            <Rrss />
          </div>
          <Divider />
          <div className='mt-5 w-full flex flex-col items-center gap-2.5'>
            <h6 className='text-pretty text-center opacity-80'>2025 - Mario Martín</h6>
            <small className='text-pretty text-center opacity-80'>Hecho con ♥️ por <Link className='underline hover:text-accent ease-in-out duration-300 text-[12px]' href='https://github.com/santimb96' target='_blank'>Santiago Martínez</Link></small>
          </div>
        </div>
      )}
    </>
  )
}