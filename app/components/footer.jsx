import Image from 'next/image'
import Link from 'next/link'
import Divider from './divider'
export default function Footer() {
  return (
    <footer className='w-full flex flex-col items-center mt-auto'>
      <div className='w-full md:w-[75vw] lg:w-[60vw] flex flex-col items-center gap-2.5 py-5 px-2.5 md:px-0 xl:flex-row xl:justify-between'>
        <div className='flex flex-col justify-center items-center gap-2.5'>
          <Link href='/'>
            <picture>
              <Image
                className='bg-[var(--color-primary)] rounded-full'
                src='/img/pfisicLogo.png'
                alt='PfisicMario logo'
                width={100}
                height={100}
              />
            </picture>
          </Link>
          <h6 className='text-pretty text-center opacity-80'>2025 - Mario Martín</h6>
        </div>
        <div className='w-full xl:hidden'>
          <Divider />
        </div>
        <small className='text-pretty text-center opacity-80'>Hecho con ♥️ por <Link className='underline hover:text-[var(--color-detail)] ease-in-out duration-300' href='https://github.com/santimb96' target='_blank'>Santiago Martínez</Link></small>
      </div>
    </footer>  
  )
}