import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from './hamburgerMenu'
import RowMenu from './rowMenu'

export default function Header () {
  return (
    <header className='w-full flex flex-col items-center min-h-min px-2.5 py-1 mb-0 fixed top-0 z-50 text-primary pr-6'>
      <section className='w-full flex flex-row items-center justify-center'>
        <Link href='/'>
          <picture>
            <Image
              src='/img/logo-resso-fn-azul-blanco-resized.png'
              alt='Ressò fn azul logo'
              width={150}
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
