import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightHamMenu, Calendar, Location } from '../icons'

export default function Workshop ({ id, title, date, location, img, coordinates}) {
  return (
    <picture className='relative w-full h-[400px] lg:h-[500px] block keen-slider__slide lg:rounded-2xl lg:hover:brightness-150 lg:transition-all lg:duration-150 lg:ease-in-out'>
      <Image
        className='object-cover md:rounded-2xl'
        src={img}
        alt={title}
        sizes='500px'
        fill
      />
      <div className="md:rounded-2xl absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      <div className='pr-5 pl-5 w-full absolute flex flex-col justify-start items-start gap-2.5 bottom-5 text-primary'>
        <h4 className='drop-shadow-md text-[1.5rem] mb-2.5 textShadow'>{title}</h4>
        <div className='flex flex-col items-start justify-start gap-2.5'>
          <p className='text-[1rem] flex flex-row justify-start items-center gap-2.5 font-bold'><span className='min-w-6'><Calendar size={24} /></span>{date}</p>
          <a href={coordinates} target='_blank' className='text-[1rem] flex flex-row justify-start items-center gap-2.5 font-bold hover:text-accent hover:brightness-110 hover:underline'><span className='min-w-6'><Location size={24} /></span><span className='whitespace-wrap'>{location}</span></a>
        </div>
        <Link href={`/workshop/${id}`} className='font-bold flex items-center gap-2.5 border border-primary/20 hover:bg-accent hover:text-secondary px-5 py-2.5 rounded-md duration-150 ease-in-out'><ArrowRightHamMenu size={24} />Más información</Link>
      </div>
    </picture>
  )
}
