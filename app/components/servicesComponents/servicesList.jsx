import { SERVICES } from '@/constants/vars'
import ServiceCard from './serviceCard'
export default function ServicesList () {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5'>
      {SERVICES.map((service, index) => (
        <ServiceCard key={index} props={service} />
      ))}
    </div>   
  )
}