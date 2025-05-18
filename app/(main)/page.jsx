import GoToPlans from '@/components/goToPlans'
import Plans from '@/components/plans'
import Presentation from '@/components/presentation'
import Services from '@/components/servicesComponents/services'
import Sponsors from '@/components/sponsors'
import WorkshopsSection from '@/components/workshopComponents/workshopsSection'

export default function Home() {
  return (
    <section className='relative flex flex-col w-full'>
      <Presentation />
      <Services />
      <Plans />
      <WorkshopsSection />
      <Sponsors />
      <GoToPlans />
    </section>
  )
}
