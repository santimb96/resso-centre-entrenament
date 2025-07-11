import { Calendar, Clock, Facebook, Instagram, Location, Tiktok, Whatsapp, Youtube } from '@/components/icons'
import { TEACHERS, WORKSHOPS } from '@/constants/vars'
import { workSans } from '@/lib/fonts'
import NotFound from '@/not-found'
import Image from 'next/image'
import Link from 'next/link'

function getWorkshopById(workshopID) {
  const getData = () => {
    const data = WORKSHOPS
    const workshop = data.find(workshop => workshop.id === parseInt(workshopID))
    if (!workshop) {
      return new Error(JSON.stringify({ code: 404, error: `Workshop with id ${workshopID} not found`, data: null }))
    }
    return workshop
  }

  return getData()
}

export async function generateMetadata(props) {
  const params = await props.params
  const { workshopID } = params
  const data = getWorkshopById(workshopID)
  if (data instanceof Error) {
    return {
      title: {
        default: '404 | Ressò - Centre d\'entrenament | Taller no encontrado',
      },
      description: '404 | Ressò - Centre d\'entrenament | Taller no encontrado',
    }
  } else {
    const { title, description } = data
    return {
      title: {
        default: title + ' | Ressò - Centre d\'entrenament',
      },
      description: description,
    }
  }

}

export default async function WorkshopInfo(props) {
  const params = await props.params
  const { workshopID } = params
  const data = getWorkshopById(workshopID)
  if (data instanceof Error) {
    // if workshop doesn't exist, return not found page
    return <NotFound />
  }
  const { title, description, date, startTime, location, img, coordinates, teacherId } = data

  const teacher = TEACHERS.find(teacher => teacher.id === teacherId)

  const { profileImg, fullname, occupation, resume, rrss } = teacher

  return (
    <section className='w-full flex flex-col justify-center items-center gap-5 scroll-m-10 pb-10 bg-accent'>
      <div className='w-full pt-28 text-primary md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw] flex justify-start items-center gap-2.5 text-[1rem] font-thin px-2.5 md:px-0'>
        <Link href='/' className='hover:underline duration-150 ease-in-out'>Inicio</Link>
        /
        <Link href='/workshops' className='hover:underline duration-150 ease-in-out'>Workshops</Link>
        /
        <p title={title} className='font-bold line-clamp-1 italic'>{title}</p>
      </div>
      <div className='w-full md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw] grid grid-cols-1 lg:place-items-start px-2.5 md:px-0 lg:grid-cols-3 lg:grid-rows-1 gap-5'>
        <div className='lg:col-span-2 lg:row-span-2 flex flex-col justify-start items-start gap-2.5 w-full text-primary'>
          <picture className='relative w-full h-[40vh] lg:h-[60vh] block'>
            <Image
              className='object-cover rounded-3xl shadow-md'
              src={img}
              alt={title}
              fill
              sizes="500px"
            />
          </picture>
          <h3 className={`${workSans.className} text-[1.75rem] lg:text-[2.25rem] my-5 font-extrabolds`}>{title}</h3>
          <p className='text-[1rem] lg:text-[1.25rem] font-medium'>{description}</p>
        </div>
        <div className='lg:col-span-1 lg:row-span-1 flex flex-col justify-start items-start gap-2.5'>
          <div className='rounded-xl p-5 bg-primary flex flex-col justify-start items-start gap-2.5 border border-secondary/20 w-full shadow-md'>
            <h4 className='text-[1rem] lg:text-[1.25rem] font-bold'>Información del taller</h4>
            <div className='font-bold flex flex-row justify-start items-center gap-2.5 whitespace-nowrap'><span className='min-w-6'><Calendar size={22} /></span>Fecha: <span className='font-normal'>{date}</span></div>
            <div className='font-bold flex flex-row justify-start items-center gap-2.5 whitespace-nowrap'><span className='min-w-6'><Clock size={22} /></span>Hora: <span className='font-normal'>{startTime}</span></div>
            <Link href={coordinates} className='font-bold flex flex-row justify-start items-start gap-2.5 overflow-hidden w-full hover:text-accent duration-150 ease-in-out'><span className='min-w-6'><Location size={26} /></span><span className='font-bold'>Lugar: <span className='font-normal'>{location}</span></span></Link>
            <h6 className='my-2.5 text-[1rem] lg:text-[1.25rem] font-bold'>Ponente</h6>
            <div className='flex justify-start items-center gap-2.5'>
              <Image
                className='object-cover rounded-full'
                src={profileImg}
                alt={`${fullname - occupation}`}
                width={75}
                height={75}
              />
              <div className='flex flex-col justify-center items-start'>
                <span className='text-[1rem] text-accent'>{fullname}</span>
                <span className='text-[1rem] font-medium'>{occupation}</span>
              </div>
            </div>
            <p className='font-normal'>{resume}</p>
            <div className='flex items-center gap-2.5 w-full'>
              {rrss.map((socialProfile, index) => {
                const { name, link } = socialProfile
                return (
                  <a aria-label={name} key={name + index} className='hover:text-accent hover:cursor-pointer duration-150 ease-in-out' href={link} title={name} target='_blank'>
                    <span className='max-w-4 lg:min-w-9'>
                      {
                        name === 'Instagram' ? <Instagram size={32} /> :
                          name === 'Facebook' ? <Facebook size={32} /> :
                            name === 'TikTok' ? <Tiktok size={28} /> :
                              name === 'YouTube' ? <Youtube size={32} /> :
                                name === 'Whatsapp' ? <Whatsapp size={32} /> :
                                  null
                      }
                    </span>
                  </a>
                )
              })}
              {/* <a className='hover:text-accent duration-150 ease-in-out' href='' title='Instagram' target='_blank'><span className='max-w-4 lg:min-w-9'><Instagram size={32} /></span></a>
              <a className='hover:text-accent duration-150 ease-in-out' href='' title='Facebook' target='_blank'><span className='max-w-4 lg:min-w-9'><Facebook size={32} /></span></a>
              <a className='hover:text-accent duration-150 ease-in-out' href='' title='TikTok' target='_blank'><span className='max-w-4 lg:min-w-9'><Tiktok size={28} /></span></a>
              <a className='hover:text-accent duration-150 ease-in-out' href='' title='YouTube' target='_blank'><span className='max-w-4 lg:min-w-9'><Youtube size={32} /></span></a> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className='w-full flex flex-col justify-start items-start gap-2.5'>
        <h2>{title}</h2>
        <div className='flex flex-row justify-center items-center gap-5'>
          <p className='flex flex-row justify-center items-center gap-2.5 opacity-60 font-bold'><span className='min-w-6'><Calendar size={20} /></span>{date}</p>
          <p className='flex flex-row justify-center items-center gap-2.5 opacity-60 font-bold'><span className='min-w-6'><Location size={20} /></span>{location}</p>
        </div>
        <p className='whitespace-pre-wrap'>{description}</p>
      </div> */}
    </section>
  )
}
