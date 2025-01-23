'use client'

import Image from 'next/image'
// import Link from 'next/link'
import { Link } from 'next-view-transitions'
import { ArrowRightHamMenu, Calendar, Location } from '../icons'

export default function Workshop ({ id, title, description, date, location, img}) {
  return (
    <picture className='relative w-[100%] h-[400px] block keen-slider__slide md:rounded-lg'>
      <Image
        className='object-cover md:rounded-lg'
        src={img}
        alt={title}
        fill
        sizes="500px"
      />
      <div className="md:rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      <div className='pr-5 pl-5 w-full absolute flex flex-col justify-start items-start gap-2.5 bottom-10 text-[var(--color-primary)]'>
        <h2>{title}</h2>
        <div className='flex flex-row items-start justify-center gap-5'>
          <small className='flex flex-row justify-center items-center gap-2.5'><Calendar size={16} />{date}</small>
          <small className='flex flex-row justify-center items-center gap-2.5'><Location size={16} />{location}</small>
        </div>
        <p className='line-clamp-2'>{description}</p>
        <Link className='flex justify-center gap-2.5 pb-1 border-b-2 border-[var(--color-detail)]' href={`/workshop/${id}`}><ArrowRightHamMenu/>Más información</Link>
      </div>
    </picture>
  )
}
