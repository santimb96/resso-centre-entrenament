import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from './hamburgerMenu'
import RowMenu from './rowMenu'

export default function Header () {
  return (
    <header className='bg-secondary py-2.5 w-full flex flex-col items-center min-h-min px-2.5 md:px-10 mb-0 fixed top-0 z-50 text-primary'>
      <section className='w-full flex flex-row items-center justify-center'>
        <Link href='/'>
          <Image
            src='/img/logo-resso-fn-azul-blanco-resized.webp'
            alt='Ressò fn azul logo'
            width={100}
            height={50}
          />
        </Link>
        <HamburgerMenu />
        <RowMenu />
      </section>
    </header>
  )
}
