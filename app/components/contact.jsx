
import { RESSO_INFO, WIDTH_LAYOUT } from '@/constants/vars'
import TextComponent from './common/TextComponent'
import TitleSection from './common/TitleSection'
import { Clock, Instagram, Mail, Whatsapp } from './icons'
import PlaceMap from './placeMap'

export default function Contact () {
  return (
    <section id='contacto' className='w-full flex flex-col justify-center items-center gap-5 scroll-m-10 bg-accent pt-5'>
      <div className={`${WIDTH_LAYOUT} flex flex-col justify-center items-center lg:!flex-row lg:items-start lg:justify-start gap-5`}>
        <div className='w-full h-full flex flex-col items-center justify-start gap-2.5'>
          <TitleSection title='Contacto' />
          <div className='p-2.5 w-full flex flex-col justify-center items-center gap-2.5'>
            <div className='w-full text-center'>
              <TextComponent text='Pregúntanos lo que quieras sin compromiso' textColor='primary' margin='mb-5' />
            </div>
            <div className='w-full flex flex-row justify-center items-center gap-10'>
              <a aria-label='Instagram' href={RESSO_INFO.instagram} target='_blank' className='font-bold hover:scale-110 text-primary duration-150 ease-in-out'>
                <span className='min-w-10'>
                  <Instagram size={40} />
                </span>
              </a>
              <a aria-label='Whatsapp' href={RESSO_INFO.whatsapp} target='_blank' className='font-bold hover:scale-110 text-primary duration-150 ease-in-out'>
                <span className='min-w-10'>
                  <Whatsapp size={40} />
                </span>
              </a>
              <a aria-label='Correo electrónico' href={`mailto:${RESSO_INFO.email}`} target='_blank' className='font-bold hover:scale-110 text-primary duration-150 ease-in-out'>
                <span className='min-w-10'>
                  <Mail size={40} />
                </span>
              </a>
            </div>
            <div className='bg-primary rounded-lg w-full md:w-3/4 lg:w-full px-5 lg:px-10 py-5 flex flex-row justify-start items-center gap-2.5 mt-5 text-accent shadow-custom'>
              <span className='min-w-20'><Clock size={80} /></span>
              <div className='flex flex-col justify-center items-start ml-5'>
                <h5 className='text-[1.25rem] md:text-[1.5rem] mb-1'>Horarios</h5>
                <p className='font-normal'><span className='font-bold mr-2.5'>Lunes a viernes:</span>16h - 21h</p>
                <p className='font-normal'><span className='font-bold mr-2.5'>Sábados:</span>Apertura próximamente</p>
                <p className='font-normal'><span className='font-bold mr-2.5'>Domingos:</span>Cerrado</p>
              </div>
            </div>
          </div>
        </div>
        <PlaceMap mapsLink={RESSO_INFO.mapsLink} coordinates={RESSO_INFO.coordinates} locationName={RESSO_INFO.locationName} />
      </div>
    </section>
  )
}
