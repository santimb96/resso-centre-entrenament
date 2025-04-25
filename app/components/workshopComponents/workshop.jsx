import { Link } from 'next-view-transitions'
import Image from 'next/image'
import { ArrowRightHamMenu, Calendar, Location } from '../icons'

export default function Workshop ({ id, title, date, location, img}) {
  return (
    <picture className='relative w-[100%] h-[450px] lg:h-[500px] block keen-slider__slide lg:rounded-xl lg:hover:brightness-110 lg:transition-all lg:duration-200 lg:ease-in-out'>
      <Image
        className='object-cover md:rounded-xl'
        src={img}
        alt={title}
        fill
        sizes="600px"
      />
      <div className="md:rounded-xl absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      <div className='pr-5 pl-5 w-full absolute flex flex-col justify-start items-start gap-2.5 bottom-5 text-primary'>
        <h4 className='drop-shadow-md text-[2rem]'>{title}</h4>
        <div className='flex flex-col items-start justify-start gap-2.5'>
          <p className='text-[0.75rem] lg:text-[1rem] flex flex-row justify-start items-center gap-1 font-bold opacity-80 min-w-max'><span className='min-w-6'><Calendar size={24} /></span>{date}</p>
          <p className='text-[0.75rem] lg:text-[1rem] flex flex-row justify-start items-center gap-1 font-bold'><span className='min-w-6'><Location size={24} /></span><span className='whitespace-wrap'>{location}</span></p>
        </div>
        <Link href={`/workshop/${id}`} className='flex items-center gap-2.5 border border-primary/20 hover:bg-accent font-semibold px-5 pb-2.5 pt-3 rounded-md duration-150 ease-in-out'><span className='min-w-6'><ArrowRightHamMenu /></span>Más información</Link>
      </div>
    </picture>
  )
}
