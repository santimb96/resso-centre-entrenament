import Contact from '@/components/contact'
import Plans from '@/components/plans'
import Presentation from '@/components/presentation'
import Sponsors from '@/components/sponsors'
import WorkshopsSection from '@/components/workshopComponents/workshopsSection'
import GoToPlans from './components/goToPlans'
import Services from './components/servicesComponents/services'
export default function Home() {
  return (
    <section className='relative flex flex-col w-full'>
      <Presentation />
      <Services />
      <Plans />
      <WorkshopsSection />
      <Sponsors />
      <Contact />
      <GoToPlans />
    </section>
  )
}
