import { getWorkshops } from '@/services/getData'
import Link from 'next/link'
import { Suspense } from 'react'
import { ExternalLink } from '../icons'
import Slider from '../slider'
import EmptyWorkshopsMessage from './emptyWorkshopsMessage'
import Workshop from './workshop'

async function WorkshopsList (){
  const fullData = await getWorkshops()
  let data = fullData.data
  if (data.length === 0) {
    return (
      <EmptyWorkshopsMessage />
    )
  }
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
        Ver todos los workshops
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
