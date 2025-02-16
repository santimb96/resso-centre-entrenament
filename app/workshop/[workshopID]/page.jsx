import { Calendar, Location } from '@/components/icons'
import { WORKSHOPS } from '@/constants/vars'
import Image from 'next/image'

function getWorkshopById(workshopID) {
  const getData = () => {
    const data = WORKSHOPS
    const workshop = data.find(workshop => workshop.id === parseInt(workshopID))
    if (!workshop) {
      return { code: 500, error: `Workshop with id ${workshopID} not found` , data: null }
    }
    return { code: 200, error: null, data: workshop }
  }

  return getData()
}

export default async function WorkshopInfo(props) {
  const params = await props.params
  const { workshopID } = params
  const data = getWorkshopById(workshopID)
  const { error, data: workshop } = data
  if (error !== null) {
    return <p className='text-red-500'>Error: {JSON.stringify(error)}</p>
  }
  const { title, description, date, location, img } = workshop
  return (
    <section className='w-full mt-32 flex flex-col justify-start items-center gap-5 lg:flex-row lg:items-start mb-5'>
      <picture className='relative w-full h-[40vh] block rounded-md'>
        <Image
          className='object-cover rounded-md'
          src={img}
          alt={title}
          fill
          sizes="500px"
        />
      </picture>
      <div className='w-full flex flex-col justify-start items-start gap-2.5'>
        <h2>{title}</h2>
        <div className='flex flex-row justify-center items-center gap-5'>
          <p className='flex flex-row justify-center items-center gap-2.5 opacity-60 font-bold'><span className='min-w-6'><Calendar size={20} /></span>{date}</p>
          <p className='flex flex-row justify-center items-center gap-2.5 opacity-60 font-bold'><span className='min-w-6'><Location size={20} /></span>{location}</p>
        </div>
        <p className='whitespace-pre-wrap'>{description}</p>
      </div>
    </section>
  )
}