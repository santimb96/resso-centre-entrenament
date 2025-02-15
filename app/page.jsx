import Contact from '@/components/contact'
import Plans from '@/components/plans'
import Presentation from '@/components/presentation'
import Sponsors from '@/components/sponsors'
import WhoIAm from '@/components/whoIAm'
import WorkshopsSection from '@/components/workshopComponents/workshopsSection'

export default function Home() {
  return (
    <main className='flex flex-col gap-10 mt-20'>
      <Presentation />
      <WhoIAm />
      <Plans />
      <WorkshopsSection />
      <Sponsors />
      <Contact />
    </main>
  )
}
