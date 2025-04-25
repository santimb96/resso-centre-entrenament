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
      <Link href='/workshops' className='flex justify-center items-center gap-2.5 text-[2rem] bg-primary font-semibold flex justify-center gap-2.5 px-5 pb-2.5 pt-3.5 border border-primary rounded-md hover:bg-accent text-secondary hover:text-primary transition-all duration-150 ease-in-out'><ArrowRightHamMenu size={32} /> Ver todos los workshops</Link>
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
