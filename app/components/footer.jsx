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
                src='/img/logo-resso-sf-negro-azul.png'
                alt='Ressò fn azul logo'
                width={100}
                height={100}
              />
            </picture>
          </Link>
          <h6 className='text-pretty text-center opacity-80'>2025 | Ressò - Centre de entrenament</h6>
        </div>
        <div className='w-full xl:hidden'>
          <Divider />
        </div>
        <small className='text-pretty text-center opacity-80 text-[12px] lg:text-[14px]'>Hecho con ♥️ por <Link className='underline hover:text-accent ease-in-out duration-100 text-[12px] lg:text-[14px] hover:brightness-125' href='https://github.com/santimb96' target='_blank'>Santiago Martínez</Link></small>
      </div>
    </footer>  
  )
}