import { getWorkshops } from '@/services/getData'
import Link from 'next/link'
import { Suspense } from 'react'
import { ArrowRightHamMenu } from '../icons'
import Slider from '../slider'
import Workshop from './workshop'

async function WorkshopsList (){
  const fullData = await getWorkshops()
  let data = fullData.data
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
      <Link href='/workshops' className='font-semibold flex justify-center gap-2.5 px-5 py-2.5 border border-[var(--color-secondary)] rounded-md hover:bg-blue-900 hover:text-primary transition-all duration-200 ease-in-out'><ArrowRightHamMenu/> Ver todos los workshops</Link>
    </div>
  )
}

export default async function Workshops() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <WorkshopsList />
      </Suspense>
    </div>
  )
}
