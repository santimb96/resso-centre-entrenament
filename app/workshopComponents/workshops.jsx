import { promises as fs } from 'fs'
import Link from 'next/link'
import { Suspense } from 'react'
import { ArrowRightHamMenu } from '../components/icons'
import Slider from '../components/slider'
import Workshop from './workshop'

async function WorkshopsList (){
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
  
  const getData = async () => {
    try {
      await delay(2000)
      const res = await fs.readFile(process.cwd() + '/app/db/workshops.json')
      const data = JSON.parse(res)
      return { code: 200, error: null, data }
    } catch (error) {
      return { code: 500, error, data: null }
    }
  }
  const data = await getData()
  console.log(data)
  return (
    <div className='w-full flex flex-col justify-start items-start gap-5'>
      <div className='sliderWrapper w-full flex justify-center items-center'>
        <Slider>
          {data.data.map((workshop, index) => (
            <Workshop key={index} {...workshop} />
          ))}
        </Slider>
      </div>
      <div className='w-full workshopList md:grid md:grid-cols-2 lg:grid-cols-3 items-center gap-2.5'>
        {data.data.map((workshop, index) => (
          <Workshop key={index} {...workshop} />
        ))}
      </div>
      <Link href='/workshops' className='ml-2.5 font-bold flex justify-center gap-2.5 pb-1 border-b-2 border-[var(--color-detail)]'><ArrowRightHamMenu/> Ver todos los workshops</Link>
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
