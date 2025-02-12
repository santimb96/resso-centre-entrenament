import { Link } from 'next-view-transitions'
import Image from 'next/image'
import { Calendar, Location } from '../icons'

export default function Workshop ({ id, title, description, date, location, img}) {
  return (
    <Link href={`/workshop/${id}`}>
      <picture className='relative w-[100%] h-[400px] block keen-slider__slide md:rounded-xl hover:brightness-110 md:transition-all md:duration-200 md:ease-in-out'>
        <Image
          className='object-cover md:rounded-xl'
          src={img}
          alt={title}
          fill
          sizes="500px"
        />
        <div className="md:rounded-xl absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className='pr-5 pl-5 w-full absolute flex flex-col justify-start items-start gap-2.5 bottom-10 text-[var(--color-primary)]'>
          <h2 className='drop-shadow-md'>{title}</h2>
          <div className='flex flex-row items-center justify-start gap-2.5'>
            <small className='flex flex-row justify-start items-center gap-1 min-w-max'><span className='min-w-[18px]'><Calendar size={16} /></span>{date}</small>
            <small className='flex flex-row justify-start items-center gap-1 max-w-[65%]'><span className='min-w-[18px]'><Location size={16} /></span><span className='text-ellipsis whitespace-nowrap overflow-hidden'>{location}</span></small>
          </div>
          <p className='line-clamp-2'>{description}</p>
        </div>
      </picture>
    </Link>
  )
}
