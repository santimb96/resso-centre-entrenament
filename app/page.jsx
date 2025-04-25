import Contact from '@/components/contact'
import Plans from '@/components/plans'
import Sponsors from '@/components/sponsors'
import WhoIAm from '@/components/whoIAm'
import WorkshopsSection from '@/components/workshopComponents/workshopsSection'

export default function Home() {
  return (
    <main className='flex flex-col gap-10 w-full'>
      {/* <Presentation /> */}
      <WhoIAm />
      <Plans />
      <WorkshopsSection />
      <Sponsors />
      <Contact />
    </main>
  )
}
