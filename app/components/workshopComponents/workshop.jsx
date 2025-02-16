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
        <h2 className='drop-shadow-md'>{title}</h2>
        <div className='flex flex-row items-center justify-start gap-2.5'>
          <p className='!text-[12px] lg:!text-[16px] flex flex-row justify-start items-center gap-1 font-bold opacity-80 min-w-max'><span className='min-w-6'><Calendar size={20} /></span>{date}</p>
          <p className='!text-[12px] lg:!text-[16px] flex flex-row justify-start items-center gap-1 font-bold max-w-[55%] lg:max-w-[60%]'><span className='min-w-6'><Location size={20} /></span><span className='text-ellipsis whitespace-nowrap overflow-hidden'>{location}</span></p>
        </div>
        <Link href={`/workshop/${id}`} className='flex items-center border border-primary/20 hover:bg-primary hover:text-secondary font-semibold px-5 py-2.5 rounded-md duration-200 ease-in-out'><span className='min-w-6'><ArrowRightHamMenu /></span>Más información</Link>
      </div>
    </picture>
  )
}
