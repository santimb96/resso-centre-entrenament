import { getWorkshops } from '@/services/getData'
import { Suspense } from 'react'
import WorkshopCard from './workshopCard'

async function WorkshopsList (){
  const fullData = await getWorkshops()
  const data = fullData.data

  return (
    <div className='w-full grid grid-cols-1 place-items-start md:grid-cols-2 gap-5'>
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
    <section className='w-full mt-32'>
      <h2 className='mb-5'>Workshops</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <WorkshopsList />
      </Suspense>
    </section>
  )
}
