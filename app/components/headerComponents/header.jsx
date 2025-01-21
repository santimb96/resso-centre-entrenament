import Image from 'next/image'
import HamburguerMenu from './hamburguerMenu'

export default function Header () {
  return (
    <header className='w-full flex flex-col items-center justify-center h-[10dvh] pl-2.5 pr-2.5'>
      <section className='w-full md:w-[75vw] lg:w-[60vw] flex flex-row items-center justify-start'>
        <Image
          src='/img/pfisicLogo.png'
          alt='PfisicMario logo'
          width={70}
          height={70}
        />
        {/* <h1>PfisicMario</h1> */}
        <HamburguerMenu />
        {/* <nav className='w-full flex flex-row justify-start gap-2.5'>
        </nav> */}
      </section>
    </header>
  )
}
