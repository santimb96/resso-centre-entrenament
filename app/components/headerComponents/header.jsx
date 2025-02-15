import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from './hamburgerMenu'
import RowMenu from './rowMenu'

export default function Header () {
  return (
    <header className='w-full flex flex-col items-center min-h-min px-2.5 py-1 mb-0 fixed top-0 z-50 bg-primary'>
      <section className='w-full md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw] flex flex-row items-center justify-start'>
        <Link href='/'>
          <picture>
            <Image
              src='/img/pfisicLogo.png'
              alt='PfisicMario logo'
              width={70}
              height={70}
            />
          </picture>
        </Link>
        <HamburgerMenu />
        <RowMenu />
      </section>
    </header>
  )
}
