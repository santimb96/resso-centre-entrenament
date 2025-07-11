'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import HamburgerMenu from './hamburgerMenu'
import RowMenu from './rowMenu'

export default function Header ({ isMain = true }) {
  let prevScrollPos = 0
  
  const handleHeaderScroll = () => {
    if (window === undefined) return

    const header = document.getElementById('headerId')
    const currentScrollPos = window.pageYOffset

    if (prevScrollPos === currentScrollPos || prevScrollPos > currentScrollPos){
      setTimeout(() => {
        header.classList.remove('headerDissapear')
        header.classList.add('headerAppear')
      }, 500)
    } else {
      setTimeout(() => {
        header.classList.remove('headerAppear')
        header.classList.add('headerDissapear')
      }, 500)
    }
    prevScrollPos = currentScrollPos

    if (window.scrollY > 100) {
      header.classList.add('headerScroll')
    } else {
      header.classList.remove('headerScroll')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderScroll)
    return () => {
      window.removeEventListener('scroll', handleHeaderScroll)
    }
  }, [])

  return (
    <header id='headerId' className={`${!isMain ? 'bg-secondary' : ''} py-2.5 w-full flex flex-col items-center min-h-min px-2.5 md:px-10 mb-0 fixed top-0 z-50 text-primary transition-all duration-300 ease-in-out`}>
      <section className='w-full flex flex-row items-center justify-center'>
        <Link href='/'>
          <picture>
            <Image
              src='/img/logo-resso-fn-azul-blanco-resized.webp'
              alt='Ressò fn azul logo'
              width={100}
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
