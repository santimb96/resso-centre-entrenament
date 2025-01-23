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
    <picture className='relative w-[100%] h-[400px] block md:rounded-md'>
      <Image
        className='object-cover md:rounded-md'
        src={img}
        alt={title}
        fill
        sizes="500px"
      />
    </picture>
  )
}