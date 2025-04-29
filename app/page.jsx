import Plans from '@/components/plans'
import Presentation from '@/components/presentation'
import WhoIAm from '@/components/whoIAm'
import WorkshopsSection from '@/components/workshopComponents/workshopsSection'
export default function Home() {
  return (
    <section className='flex flex-col w-full'>
      <Presentation />
      <WhoIAm />
      <Plans />
      <WorkshopsSection />
      {/* <Sponsors /> */}
      {/* <Contact /> */}
    </section>
  )
}
