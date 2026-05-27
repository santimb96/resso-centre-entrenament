
import { RESSO_INFO, WIDTH_LAYOUT } from '@/constants/vars'
import TextComponent from './common/TextComponent'
import TitleSection from './common/TitleSection'
import { Instagram, Whatsapp } from './icons'
import PlaceMap from './placeMap'

export default function Contact () {
  return (
    <section id='contacto' className='w-full flex flex-col justify-center items-center bg-primary py-8 px-4'>
      <div className={`${WIDTH_LAYOUT} flex flex-col items-center gap-8`}>
        <div className='flex flex-col items-center gap-4'>
          <TitleSection title='Contacto' color='accent' />
          <TextComponent text='Pregúntanos lo que quieras sin compromiso' textColor='accent' margin='my-0' textAlign='text-center' />
          <div className='flex justify-center items-center gap-10 pt-2'>
            <a aria-label='Instagram' href={RESSO_INFO.instagram} target='_blank' rel='noopener noreferrer' className='hover:scale-110 text-accent duration-150 ease-in-out'>
              <Instagram size={40} />
            </a>
            <a aria-label='Whatsapp' href={RESSO_INFO.whatsapp} target='_blank' rel='noopener noreferrer' className='hover:scale-110 text-accent duration-150 ease-in-out'>
              <Whatsapp size={40} />
            </a>
          </div>
        </div>
        <PlaceMap mapsLink={RESSO_INFO.mapsLink} coordinates={RESSO_INFO.coordinates} locationName={RESSO_INFO.locationName} />
      </div>
    </section>
  )
}
