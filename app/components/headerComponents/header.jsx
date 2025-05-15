'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import HamburgerMenu from './hamburgerMenu'
import RowMenu from './rowMenu'

export default function Header () {
  const pathname = usePathname()
  const [path, setPath] = useState('/')

  useEffect(() => {
    setPath(pathname)
    console.log(pathname, path)
  }, [pathname])

  return (
    <header className={`${path !== '/' && 'bg-secondary'} py-5 w-full flex flex-col items-center min-h-min px-2.5 md:px-10 mb-0 fixed top-0 z-50 text-primary`}>
      <section className='w-full flex flex-row items-center justify-center'>
        <Link href='/'>
          <picture>
            <Image
              src='/img/logo-resso-fn-azul-blanco-resized.png'
              alt='Ressò fn azul logo'
              width={125}
              height={50}
            />
          </picture>
        </Link>
        <HamburgerMenu />
        <RowMenu />
      </section>
    </header>
  )
}
