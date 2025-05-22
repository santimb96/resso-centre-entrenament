/* eslint-disable react/no-unescaped-entities */
import { Facebook, Instagram, Location, Mail, Tiktok, Youtube } from '@/components/icons'
import Image from 'next/image'
import Link from 'next/link'
import { MENU } from '../constants/vars'
import { workSans } from '../lib/fonts'

export default function Footer() {
  return (
    <footer className='w-full flex flex-col items-center mt-auto'>
      <div className='w-full md:w-[75vw] lg:w-[60vw] flex flex-col items-center gap-2.5 py-5 px-2.5 md:px-0 lg:!flex-row lg:justify-between lg:items-start'>
        <div className='flex flex-col justify-center items-center gap-2.5'>
          <Link href='/'>
            <picture>
              <Image
                src='/img/logo-resso-fn-azul-blanco-resized.webp'
                alt='Ressò fn azul logo'
                width={150}
                height={150}
              />
            </picture>
          </Link>
          <div className='flex flex-col items-center lg:items-start gap-2.5 font-thin mt-5'>
            <a className='flex justify-center items-center gap-2.5 hover:text-accent duration-150 ease-in-out text-[0.75rem] lg:text-[1rem]' href='' target='_blank'>
              <span className='max-w-4 lg:min-w-6'><Location /></span>
              Calle de Sant Fiol 21, Marratxí, Islas Baleares, España
            </a>
            <a className='flex justify-center items-center gap-2.5 hover:text-accent duration-150 ease-in-out text-[0.75rem] lg:text-[1rem]' href='mailto:info@resso.fn.es'>
              <span className='max-w-4 lg:min-w-6'><Mail /></span>
              info@resso.fn.es
            </a>
            <div className='w-full flex justify-center items-center gap-2.5 mt-5'>
              <a className='hover:text-accent duration-150 ease-in-out' href='' title='Instagram' target='_blank'><span className='max-w-4 lg:min-w-9'><Instagram size={32} /></span></a>
              <a className='hover:text-accent duration-150 ease-in-out' href='' title='Facebook' target='_blank'><span className='max-w-4 lg:min-w-9'><Facebook size={32} /></span></a>
              <a className='hover:text-accent duration-150 ease-in-out' href='' title='TikTok' target='_blank'><span className='max-w-4 lg:min-w-9'><Tiktok size={28} /></span></a>
              <a className='hover:text-accent duration-150 ease-in-out' href='' title='YouTube' target='_blank'><span className='max-w-4 lg:min-w-9'><Youtube size={32} /></span></a>
            </div>
          </div>
        </div>
        <div className={`${workSans.className} flex flex-col justify-center items-center lg:items-start gap-2.5 mt-5`}>
          <h4 className='text-accent text-[1.5rem]'>Secciones</h4>
          {MENU.map((menuItem, index) => (
            <Link className='hover:text-accent duration-150 ease-in-out' key={index + menuItem.name} href={`/${menuItem.href}`}>
              <span>{menuItem.name}</span>
            </Link>
          ))}

        </div>
      </div>
      <p className='text-pretty text-center font-normal my-2.5 text-[0.75rem] lg:text-[1rem]'>Accede a nuestra <Link href='/cookies-policy' target='_blank' className='text-sky-500 hover:text-sky-400 duration-150 ease-in-out hover:underline'>política de cookies</Link></p>
      <p className='text-pretty text-center font-bold mb-2.5 text-[0.75rem] lg:text-[1rem]'>2025 | Ressò - Centre d'entrenament</p>
      <small className='text-pretty text-center font-thin text-[0.75rem] lg:text-[1rem] mb-5'>Hecho con ♥️ por <Link className='underline hover:text-accent ease-in-out duration-150' href='https://github.com/santimb96' target='_blank'>Santiago Martínez</Link></small>
    </footer>
  )
}
