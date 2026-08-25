import Image from 'next/image'
import { workSans } from '../lib/fonts'
import { CaretDown, Mouse } from './icons'

export default function Presentation () {
  return (
    <div className={`${workSans.className} font-black h-[600px] md:h-[750px] relative w-full`}>
      <Image
        src='/img/headerImg.webp'
        alt='Imagen de cabecera de la zona de entrenamiento'
        fill
        priority
        fetchPriority='high'
        sizes='100vw'
        className='object-cover object-center grayscale-100 contrast-150 brightness-115 z-[-1]'
      />
      <div className='w-full absolute top-[200px] md:top-[300px] flex flex-col justify-center items-center px-2.5'>
        <h1 className='textShadow text-center text-primary text-[3rem] sm:text-[3.75rem] lg:text-[4.25rem] xl:text-[5.75rem]'>NO SOMOS UN GIMNASIO</h1>
        <p className='textShadow text-center text-accent text-[3rem] sm:text-[3.75rem] lg:text-[4.25rem] xl:text-[5.75rem] mb-5 font-black'>SOMOS TU EQUIPO</p>
      </div>
      <div className='absolute -bottom-10 md:-bottom-36 w-full'>
        <h2 className='text-primary text-[2.25rem] sm:text-[2.75rem] lg:text-[3rem] xl:text-[4rem] w-full text-center textShadow'>¿NO SABES POR DÓNDE EMPEZAR?</h2>
        <div className='mt-8 hidden md:flex flex-col items-center justify-center text-primary'>
          <Mouse size={40} />
          <span className='animate-bouncing animate-infinite duration-150 ease-in-out'>
            <CaretDown size={40} />
          </span>
        </div>
      </div>
    </div>
  )
}
