/* eslint-disable react/no-unescaped-entities */
import { WIDTH_LAYOUT } from '@/constants/vars'
import TextComponent from './common/TextComponent'
import TitleSection from './common/TitleSection'
import { Instagram, Mail, Whatsapp } from './icons'
import PlaceMap from './placeMap'

export default function Contact () {
  return (
    <section id='contacto' className='scrollAppear w-full flex flex-col justify-center items-center gap-5 scroll-m-24 bg-accent py-10'>
      <div className={`${WIDTH_LAYOUT} flex flex-col justify-center items-center gap-5`}>
        <TitleSection title='Contacto' />
        <div className='w-full h-full flex flex-col items-center justify-start gap-2.5'>
          <div className='p-2.5 w-full sm:w-3/4 lg:w-2/4 flex flex-col justify-start items-start gap-2.5'>
            <div className='w-full text-center'>
              <TextComponent text='Puedes contactarme por las siguientes vías:' textColor='primary' margin='mb-5' />
            </div>
            <a href='https://www.instagram.com/pfisic_mario/' target='_blank' className='text-[1rem] md:text-[1.25rem] border border-primary rounded-md font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 text-accent bg-primary hover:shadow-md duration-150 hover:text-primary hover:bg-accent ease-in-out'>
              <span className='min-w-6 w-6 min-h-6 h-6 md:min-w-8 md:min-h-8 flex items-center'>
                <Instagram size={40} />
              </span>
              <span>@ressocentreentrenament</span>
            </a>
            <a href='https://wa.me/673467364' target='_blank' className='text-[1rem] md:text-[1.25rem] border border-primary rounded-md font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 text-accent bg-primary hover:shadow-md duration-150 hover:text-primary hover:bg-accent ease-in-out'>
              <span className='min-w-6 w-6 min-h-6 h-6 md:min-w-8 md:min-h-8 flex items-center'>
                <Whatsapp size={40} />
              </span>
              <span>Ressò - Centre d'entrenament</span>
            </a>
            <a href='https://www.instagram.com/pfisic_mario/' target='_blank' className='text-[1rem] md:text-[1.25rem] border border-primary rounded-md font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 text-accent bg-primary hover:shadow-md duration-150 hover:text-primary hover:bg-accent ease-in-out'>
              <span className='min-w-6 w-6 min-h-6 h-6 md:min-w-8 md:min-h-8 flex items-center'>
                <Mail size={40} />
              </span>
              <span>atencion@ressocentreentrenament.com</span>
            </a>
          </div>
        </div>
        <PlaceMap />
      </div>
    </section>
  )
}