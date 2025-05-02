import { ArrowRightHamMenu, Calendar, Location } from '@/components/icons'
import { Link } from 'next-view-transitions'
import Image from 'next/image'

export default function WorkshopCard({workshop}){
  const {id, title, description, location, date, img} = workshop
  return (
    <aside className="w-full rounded-lg flex flex-col justify-start items-start gap-2.5 bg-primary shadow-md overflow-hidden h-full min-h-min">
      <picture className='relative w-full h-[400px] block rounded-t-lg'>
        <Image
          className='object-cover rounded-t-lg'
          src={img}
          alt={title}
          fill
          priority
          sizes="500px"
        />
      </picture>
      <div className='w-full flex flex-col justify-start items-start gap-2.5 p-5 bg-primary'>
        <h4 title={title} className='w-full text-[1.25rem] md:text-[1.5rem] font-bold min-h-[75px] line-clamp-2'>{title}</h4>
        <div className='w-full flex flex-col items-start justify-start gap-2.5 overflow-hidden'>
          <p className='font-bold flex flex-row justify-start items-center gap-1 whitespace-nowrap'><span className='min-w-6'><Calendar size={24} /></span>{date}</p>
          <a href='' className='font-bold flex flex-row justify-start items-center gap-1 overflow-hidden hover:text-accent duration-150 ease-in-out'><span className='min-w-6'><Location size={24} /></span><span className='font-bold whitespace-nowrap text-ellipsis overflow-hidden'>{location}</span></a>
        </div>
        <p className='line-clamp-3'>{description}</p>
        <Link href={`/workshop/${id}`} className='font-bold flex flex-row justify-center items-center gap-2.5 py-2.5 px-5 border border-[var(--color-secondary)] rounded-md hover:bg-accent hover:text-primary hover:border-secondary duration-150 ease-in-out'><ArrowRightHamMenu />Más información</Link>
      </div>
    </aside>
  )
}