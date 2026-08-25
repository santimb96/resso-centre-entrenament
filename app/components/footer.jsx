'use client'

import { Github, Instagram, Location, Whatsapp } from '@/components/icons'
import { MENU, RESSO_INFO } from '@/constants/vars'
import Image from 'next/image'
import Link from 'next/link'
import { workSans } from '../lib/fonts'

export default function Footer() {
  return (
    <footer id='footer' className='w-full flex flex-col items-center mt-auto'>
      <div className='w-full md:w-[75vw] lg:w-[60vw] flex flex-col items-center gap-2.5 py-5 px-2.5 md:px-0 lg:flex-row! lg:justify-between lg:items-start'>
        <div className='flex flex-col justify-center items-center gap-2.5'>
          <Link href='/'>
            <Image
              src='/img/logo-resso-fn-azul-blanco-resized.webp'
              alt='Ressò fn azul logo'
              width={150}
              height={150}
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
          <div className='flex flex-col lg:items-start gap-2.5 font-thin mt-5'>
            <a aria-label='Dirección' className='flex justify-center items-center gap-1.5 lg:gap-2.5 hover:text-accent duration-150 ease-in-out text-[0.75rem] lg:text-[1rem]' href={RESSO_INFO.mapsLink} target='_blank' rel='noopener noreferrer'>
              <span className='shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 lg:[&>svg]:w-6 lg:[&>svg]:h-6'><Location /></span>
              <span className='text-pretty text-left'>{RESSO_INFO.locationName}</span>
            </a>
            <div className='w-full flex justify-center items-center gap-2.5 mt-5'>
              <a aria-label='Instagram' className='hover:text-accent duration-150 ease-in-out' href={RESSO_INFO.instagram} title='Instagram' target='_blank' rel='noopener noreferrer'><span className='max-w-4 lg:min-w-9'><Instagram size={32} /></span></a>
              <a aria-label='Whatsapp' className='hover:text-accent duration-150 ease-in-out' href={RESSO_INFO.whatsapp} title='Whatsapp' target='_blank' rel='noopener noreferrer'><span className='max-w-4 lg:min-w-9'><Whatsapp size={32} /></span></a>
            </div>
          </div>
        </div>
        <div className={`${workSans.className} flex flex-col justify-center items-center lg:items-start gap-2.5 mt-5`}>
          <h4 className='text-accent text-[1.5rem]'>Secciones</h4>
          {MENU.map((menuItem, index) => (
            <Link aria-label={menuItem.name} className='hover:text-accent duration-150 ease-in-out' key={index + menuItem.name} href={`/${menuItem.href}`} prefetch={false}>
              <span>{menuItem.name}</span>
            </Link>
          ))}

        </div>
      </div>
      <p className='text-pretty text-center font-bold text-[0.75rem] lg:text-[1rem] mt-5'>2025 | Ressò - Centre d&apos;entrenament</p>
      <div className='w-full text-pretty text-center font-thin text-[0.75rem] flex justify-center items-center gap-2.5 mt-2.5 mb-5'>
        <p>Web desarrollada por <Link aria-label='Github' title='Portafolio de Santiago Martínez' className='underline hover:text-accent ease-in-out duration-150' href='https://smartinezdev.com' target='_blank' rel='noopener noreferrer'>Santiago Martínez</Link></p>
        <Link aria-label='Github' title='Github de Santiago Martínez' href='https://github.com/santimb96' target='_blank' rel='noopener noreferrer' className='hover:text-accent ease-in-out duration-150'><Github size={14} /></Link>
      </div>
    </footer>
  )
}
