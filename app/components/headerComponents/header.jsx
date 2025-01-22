import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from './hamburgerMenu'
import RowMenu from './rowMenu'

export default function Header () {
  return (
    <header className='w-full flex flex-col items-center justify-center h-[10dvh] pl-2.5 pr-2.5'>
      <section className='w-full md:w-[75vw] lg:w-[60vw] flex flex-row items-center justify-start'>
        <Link href='/'>
          <Image
            src='/img/pfisicLogo.png'
            alt='PfisicMario logo'
            width={70}
            height={70}
          />
        </Link>
        {/* <h1>PfisicMario</h1> */}
        <HamburgerMenu />
        <RowMenu />
      </section>
    </header>
  )
}
