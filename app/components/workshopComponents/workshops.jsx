import { getWorkshops } from '@/services/getData'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { ArrowDown, ArrowRight, ExternalLink } from '../icons'
import Slider from '../slider'
import Workshop from './workshop'

async function WorkshopsList (){
  const fullData = await getWorkshops()
  if (fullData instanceof Error) {
    return (
      <div className='w-full flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-8 items-center'>
        <div className='w-full grid grid-cols-2 grid-rows-[65%_35%] gap-2.5 h-[350px]'>
          <div className='col-span-1 row-span-2 relative rounded-xl overflow-hidden'>
            <Image
              src='/img/workshops/charla.webp'
              alt='Charlas y formaciones'
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover grayscale'
            />
          </div>
          <div className='col-span-1 relative rounded-xl overflow-hidden'>
            <Image
              src='/img/workshops/simulacro.webp'
              alt='Simulacros de carrera'
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover grayscale'
            />
          </div>
          <div className='col-span-1 relative rounded-xl overflow-hidden'>
            <Image
              src='/img/workshops/crono.webp'
              alt='Cronometrando'
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover grayscale'
            />
          </div>
        </div>
        <div className='w-full flex flex-col items-center'>
          <div className='w-full md:w-auto'>
            <h3 className='text-primary text-[1.5rem] md:text-[2rem] font-extrabold leading-tight mb-4 text-center md:text-left'>
              Los sábados subimos de nivel
            </h3>
            <ul className='space-y-3 text-primary text-[1.125rem] md:text-[1.25rem] font-medium mb-6'>
              <li className='flex items-center justify-center md:justify-start gap-3'>
                <ArrowRight size={20} className='shrink-0 text-primary' />
                Simulacros de carrera y competiciones para medir tu progreso.
              </li>
              <li className='flex items-center justify-center md:justify-start gap-3'>
                <ArrowRight size={20} className='shrink-0 text-primary' />
                Talleres prácticos con profesionales de la salud y el entrenamiento.
              </li>
            </ul>
          </div>
          <a
            href='#horarios'
            className='bg-primary text-secondary py-2.5 px-5 rounded-lg flex justify-center items-center gap-2.5 border border-secondary hover:scale-105 font-semibold hover:bg-secondary hover:text-primary hover:border-primary duration-150 ease-in-out group'
          >
            Ver horarios
            <ArrowDown size={16} className='group-hover:translate-y-0.5 duration-150 ease-in-out' />
          </a>
        </div>
      </div>
    )
  }
  let data = fullData
  if (data.length > 3){
    data = data.slice(0, 3)
  }

  return (
    <div className='w-full flex flex-col justify-start items-start gap-5'>
      <div className='sliderWrapper'>
        <Slider>
          {data.map((workshop, index) => (
            <Workshop key={index} {...workshop} />
          ))}
        </Slider>
      </div>
      <div className='w-full workshopList md:grid md:grid-cols-2 xl:grid-cols-3 items-center gap-2.5'>
        {data.map((workshop, index) => (
          <Workshop key={index} {...workshop} />
        ))}
      </div>
      <Link href='/workshops' className='mt-5 font-semibold items-center text-[1.25rem] md:text-[1.5rem] flex justify-center gap-2.5 border border-primary py-2.5 px-5 rounded-md text-primary hover:bg-accent hover:contrast-125 duration-150 ease-in-out'>
        Ver todos los talleres
        <span className='max-w-4 md:max-w-8'>
          <ExternalLink size={28} />
        </span>
      </Link>
    </div>
  )
}

export default async function Workshops() {
  return (
    <div>
      <Suspense fallback={<p>Cargando contenido...</p>}>
        <WorkshopsList />
      </Suspense>
    </div>
  )
}
