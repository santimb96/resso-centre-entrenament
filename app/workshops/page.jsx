import TitleSection from '@/components/common/TitleSection'
import { WIDTH_LAYOUT } from '@/constants/vars'
import { getWorkshops } from '@/services/getData'
import Link from 'next/link'
import { Suspense } from 'react'
import WorkshopCard from './workshopCard'

async function WorkshopsList (){
  const fullData = await getWorkshops()
  const data = fullData.data

  return (
    <div className='w-full grid grid-cols-1 place-items-start sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-5 mt-5'>
      {
        data.map(workshop => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))
      }
    </div>
  )
}

export default async function Workshops() {
  return (
    <section className='w-full flex justify-center items-center mt-32 px-2.5 mb-10'>
      <div className={`${WIDTH_LAYOUT} flex flex-col justify-start items-start gap-2.5`}>
        <div className='w-full flex justify-start items-center gap-2.5 text-[1rem] font-thin mb-5'>
          <Link href='/' className='hover:underline duration-150 ease-in-out'>Inicio</Link>
        /
          <p className='font-bold text-accent cursor-not-allowed'>Workshops</p>
        </div>
        <TitleSection title='Workshops' color='accent' />
        <Suspense fallback={<p>Loading...</p>}>
          <WorkshopsList />
        </Suspense>
      </div>
    </section>
  )
}
