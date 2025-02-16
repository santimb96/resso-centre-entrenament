'use client'

import { Calendar, Location } from '@/components/icons'
import { promises as fs } from 'fs'
import Image from 'next/image'

async function getWorkshopById(workshopID) {
  // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  const getData = async () => {
    try {
      // await delay(2000)
      const res = await fs.readFile(process.cwd() + '/app/db/workshops.json')
      const data = JSON.parse(res)
      
      // find the specific workshop by id
      const workshop = data.find(workshop => workshop.id === parseInt(workshopID))
      if (!workshop) {
        throw new Error(`Workshop with id ${workshopID} not found`)
      }

      return { code: 200, error: null, data: workshop }
    } catch (error) {
      return { code: 500, error, data: null }
    }
  }

  return await getData()
}

export default async function WorkshopInfo(props) {
  const params = await props.params
  const { workshopID } = params
  const data = await getWorkshopById(workshopID)
  const { error, data: workshop } = data
  if (error !== null) {
    return <p className='text-red-500'>Error: {JSON.stringify(error)}</p>
  }
  const { title, description, date, location, img } = workshop
  return (
    <section className='w-full flex flex-col justify-start items-center gap-5 xl:flex-row xl:items-start mb-5'>
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
          <h6 className='flex flex-row justify-center items-center gap-2.5 opacity-60'><Calendar size={20} />{date}</h6>
          <h6 className='flex flex-row justify-center items-center gap-2.5 opacity-60'><Location size={22} />{location}</h6>
        </div>
        <p className='whitespace-pre-wrap'>{description}</p>
      </div>
    </section>
  )
}