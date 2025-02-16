import { ArrowRightHamMenu, Calendar, Location } from '@/components/icons'
import Image from 'next/image'
import Link from 'next/link'

export default function WorkshopCard({workshop}){
  const {id, title, description, location, date, img} = workshop
  return (
    <aside className="w-full rounded-lg flex flex-col justify-start items-start gap-2.5 bg-var[--color-primary] shadow-md overflow-hidden">
      <picture className='relative w-full h-[250px] block rounded-t-lg'>
        <Image
          className='object-cover rounded-t-lg'
          src={img}
          alt={title}
          fill
          priority
          sizes="500px"
        />
      </picture>
      <div className='w-full flex flex-col justify-start items-start gap-2.5 p-2.5 '>
        <h4 className='w-full'>{title}</h4>
        <div className='w-full flex flex-row items-center justify-start gap-2.5 opacity-80 overflow-hidden'>
          <p className='text-sm flex flex-row justify-start items-center gap-1 whitespace-nowrap'><span className='min-w-[18px]'><Calendar size={18} /></span>{date}</p>
          <p className='text-sm flex flex-row justify-start items-center gap-1 overflow-hidden'><span className='min-w-[18px]'><Location size={18} /></span><span className='whitespace-nowrap text-ellipsis overflow-hidden'>{location}</span></p>
        </div>
        <p className='line-clamp-4'>{description}</p>
        <Link href={`/workshop/${id}`} className='font-semibold flex flex-row justify-center items-center gap-2.5 py-2.5 px-5 border border-[var(--color-secondary)] rounded-md hover:bg-secondary hover:text-primary transition-all duration-200 ease-in-out'><ArrowRightHamMenu />Más información</Link>
      </div>
    </aside>
  )
}