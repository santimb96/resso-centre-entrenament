import { getWorkshops } from '@/services/getData'
import { Suspense } from 'react'
import TitleSection from '../components/common/TitleSection'
import WorkshopCard from './workshopCard'

async function WorkshopsList (){
  const fullData = await getWorkshops()
  const data = fullData.data

  return (
    <div className='w-full grid grid-cols-1 place-items-start md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
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
    <section className='w-full mt-32 px-2.5'>
      <TitleSection title='Workshops' color='accent' />
      <Suspense fallback={<p>Loading...</p>}>
        <WorkshopsList />
      </Suspense>
    </section>
  )
}
