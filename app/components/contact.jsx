
import { RESSO_INFO, WIDTH_LAYOUT } from '@/constants/vars'
import TextComponent from './common/TextComponent'
import TitleSection from './common/TitleSection'
import { Instagram, Whatsapp } from './icons'
import PlaceMap from './placeMap'

export default function Contact () {
  return (
    <section id='contacto' className='w-full flex flex-col justify-center items-center gap-5 scroll-m-10 bg-primary pt-5'>
      <div className={`${WIDTH_LAYOUT} flex flex-col justify-center items-center gap-5`}>
        <div className='w-full flex flex-col items-center justify-start gap-2.5'>
          <TitleSection title='Contacto' color='accent' />
          <div className='p-2.5 w-full flex flex-col justify-center items-center gap-2.5'>
            <div className='w-full text-center'>
              <TextComponent text='Pregúntanos lo que quieras sin compromiso' textColor='accent' margin='mb-5' textAlign='text-center' />
            </div>
            <div className='w-full flex flex-row justify-center items-center gap-10'>
              <a aria-label='Instagram' href={RESSO_INFO.instagram} target='_blank' rel='noopener noreferrer' className='font-bold hover:scale-110 text-accent duration-150 ease-in-out'>
                <span className='min-w-10'>
                  <Instagram size={40} />
                </span>
              </a>
              <a aria-label='Whatsapp' href={RESSO_INFO.whatsapp} target='_blank' rel='noopener noreferrer' className='font-bold hover:scale-110 text-accent duration-150 ease-in-out'>
                <span className='min-w-10'>
                  <Whatsapp size={40} />
                </span>
              </a>
            </div>
          </div>
        </div>
        <PlaceMap mapsLink={RESSO_INFO.mapsLink} coordinates={RESSO_INFO.coordinates} locationName={RESSO_INFO.locationName} />
      </div>
    </section>
  )
}
