'use client'

import { Close, Github, Hamburger, Whatsapp } from '@/components/icons'
import { MENU, RESSO_INFO } from '@/constants/vars'
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
    const next = !isOpen
    setIsOpen(next)
    body.style.overflow = next ? 'hidden' : 'auto'
  }

  return (
    <>
      <button title='Abrir menú de navegación' className='relative colNav min-w-6 ml-auto cursor-pointer duration-150 ease-in-out mt-2' onClick={handleMenu}>
        <Hamburger size={24} />
      </button>

      <div className={`hamburgerMenu ${isOpen ? 'hamOpen' : ''}`} aria-hidden={!isOpen}>
        <div className='w-full flex justify-end items-center mt-10 px-2.5'>
          <button title='Cerrar menú de navegación' className='cursor-pointer min-w-6' onClick={handleMenu}>
            <Close />
          </button>
        </div>

        <nav className='p-2.5 flex flex-col items-center gap-2.5'>
          <picture>
            <Image
              src='/img/logo-resso-fn-azul-blanco-resized.webp'
              alt='Ressò logo'
              width={150}
              height={100}
            />
          </picture>
          <Divider />
          {MENU.map((menuItem, index) => (
            <Link
              className='my-2.5 !text-[1.5rem] hover:text-accent duration-150 ease-in-out'
              onClick={handleMenu}
              key={index + menuItem.name}
              href={location !== '/' ? `/${menuItem.href}` : menuItem.href}
            >
              <span>{menuItem.name}</span>
            </Link>
          ))}
          <Link
            href={RESSO_INFO.whatsapp}
            rel='noopener noreferrer'
            target='_blank'
            onClick={handleMenu}
            title='¡Contáctanos por WhatsApp!'
            className='flex flex-row items-center justify-center gap-2 text-sm py-2.5 px-6 bg-accent rounded-lg font-bold mt-2.5 hover:shadow-[0_0_8px_rgba(85,179,183,0.5)] duration-150 ease-in-out'
          >
            ¡Contáctanos sin compromiso!
            <span className='min-w-[20px] text-white'><Whatsapp size={20} /></span>
          </Link>
        </nav>

        <Divider />
        <h4 className={`${workSans.className} text-center my-2.5 text-[2rem] text-accent`}>¡Sígueme en redes!</h4>
        <div className='flex justify-center items-center gap-5 my-5'>
          <Rrss />
        </div>
        <p className='text-pretty text-center font-bold mb-2.5 text-[0.75rem] lg:text-[1rem]'>2025 | Ressò - Centre d&apos;entrenament</p>
        <div className='w-full text-pretty text-center font-thin text-[0.75rem] flex justify-center items-center gap-2.5 my-5'>
          <p>Hecho con ♥️ por <Link className='underline hover:text-accent ease-in-out duration-150' href='https://smartinezdev.com' target='_blank'>Santiago Martínez</Link></p>
          <Link href='https://github.com/santimb96' target='_blank' className='hover:text-accent ease-in-out duration-150'><Github size={20} /></Link>
        </div>
      </div>
    </>
  )
}
