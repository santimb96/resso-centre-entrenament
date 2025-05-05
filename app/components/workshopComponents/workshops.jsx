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
      <Link href='/workshops' className='mt-5 font-bold flex justify-center items-center gap-2.5 text-[1rem] md:text-[1.5rem] flex justify-center gap-2.5 border border-secondary bg-primary text-secondary py-2.5 px-5 rounded-md hover:text-primary hover:border-primary hover:bg-accent duration-150 ease-in-out'><span className='max-w-4 md:mix-w-6'><ArrowRightHamMenu size={24} /></span> Ver todos los workshops</Link>
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
