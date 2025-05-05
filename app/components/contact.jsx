/* eslint-disable react/no-unescaped-entities */
import { WIDTH_LAYOUT } from '@/constants/vars'
import TextComponent from './common/TextComponent'
import TitleSection from './common/TitleSection'
import { Facebook, Instagram, Mail, Tiktok, Tlf, Whatsapp } from './icons'

export default function Contact () {
  return (
    <section id='contacto' className='scrollAppear w-full flex flex-col justify-center items-center gap-5 scroll-m-24 bg-accent py-10'>
      <div className={`${WIDTH_LAYOUT} flex flex-col justify-center items-center gap-5`}>
        <TitleSection title='Contacto' />
        <div className='w-full h-full flex flex-col items-start justify-start md:!flex-row gap-2.5'>
          <div className='p-2.5 w-full flex flex-col justify-start items-start gap-2.5'>
            <div className='w-full text-center'>
              <TextComponent text='Contáctame por redes o...' textColor='primary' margin='mb-5' />
            </div>
            <a href='https://www.instagram.com/pfisic_mario/' target='_blank' className='text-[1rem] md:text-[1.25rem] border border-primary rounded-md font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 text-accent bg-primary hover:shadow-md duration-150 hover:text-primary hover:bg-accent ease-in-out'>
              <span className='min-w-8 min-h-8 flex items-center'>
                <Instagram size={40} />
              </span>
              <span>@ressocentreentrenament</span>
            </a>
            <a href='https://www.instagram.com/pfisic_mario/' target='_blank' className='text-[1rem] md:text-[1.25rem] border border-primary rounded-md font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 text-accent bg-primary hover:shadow-md duration-150 hover:text-primary hover:bg-accent ease-in-out'>
              <span className='min-w-8 min-h-8 flex items-center'>
                <Facebook size={40} />
              </span>
              <span>Ressò - Centre d'entrenament</span>
            </a>
            <a href='https://www.instagram.com/pfisic_mario/' target='_blank' className='text-[1rem] md:text-[1.25rem] border border-primary rounded-md font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 text-accent bg-primary hover:shadow-md duration-150 hover:text-primary hover:bg-accent ease-in-out'>
              <span className='min-w-8 min-h-8 flex items-center'>
                <Tiktok size={40} />
              </span>
              <span>@ressocentreentrenament</span>
            </a>
          </div>
          <hr className='w-full h-full md:w-[2px] md:min-h-[50vh] bg-primary opacity-50 rounded-full' />
          <div className='p-2.5 w-full flex flex-col justify-start items-center gap-2.5'>
            <div className='w-full text-center'>
              <TextComponent text='¡por otras vías si lo prefieres!' textColor='primary' margin='mb-5' />
            </div>
            <a href='https://wa.me/673467364' target='_blank' className='text-[1rem] md:text-[1.25rem] border border-primary rounded-md font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 text-accent bg-primary hover:shadow-md duration-150 hover:text-primary hover:bg-accent ease-in-out'>
              <span className='min-w-8 min-h-8 flex items-center'>
                <Whatsapp size={40} />
              </span>
              <span>Mario | Ressò - Centre d'entrenament</span>
            </a>
            <a href='tel:+34673467364' target='_blank' className='text-[1rem] md:text-[1.25rem] border border-primary rounded-md font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 text-accent bg-primary hover:shadow-md duration-150 hover:text-primary hover:bg-accent ease-in-out'>
              <span className='min-w-8 min-h-8 flex items-center'>
                <Tlf size={40} />
              </span>
              <span>+34 673 46 73 64</span>
            </a>
            <a href='https://www.instagram.com/pfisic_mario/' target='_blank' className='text-[1rem] md:text-[1.25rem] border border-primary rounded-md font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 text-accent bg-primary hover:shadow-md duration-150 hover:text-primary hover:bg-accent ease-in-out'>
              <span className='min-w-8 min-h-8 flex items-center'>
                <Mail size={40} />
              </span>
              <span>atencion@ressocentreentrenament.com</span>
            </a>
          </div>
        </div>
        {/* <p className='text-primary text-[0.75rem] md:text-[1.75rem] m-w-[75ch] my-10'>¡No dudes en ponerte en contacto conmigo por la vía que prefieras!</p>
        <div className='w-full flex flex-row max-sm:flex-wrap gap-5'>
          {/* https://wa.me/673467364673 --> uses WhatsApp API and opens a new tab with the chat*/}
        {/* <a href='https://www.instagram.com/pfisic_mario/' target='_blank' className='font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 border border-gradient-to-r rounded-md text-white text-primary bg-gradient-to-r from-instagramStart to-instagramEnd hover:scale-105 hover:shadow-lg duration-200 ease-in-out'>
            <span className='min-w-8 min-h-8 flex items-center'>
              <Instagram size={4} />
            </span>
            <span>Contáctame por Instagram</span>
          </a>
          <a href='https://www.instagram.com/pfisic_mario/' target='_blank' className='font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 border border-[#1877F2] rounded-md text-white text-primary bg-facebook hover:scale-105 hover:shadow-lg duration-200 ease-in-out'>
            <span className='min-w-8 min-h-8 flex items-center'>
              <Facebook size={40} />
            </span>
            <span>Contáctame por Facebook</span>
          </a>
          <a href='mailto:pfisicmario@gmail.com' target='_blank' className='font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 border border-green-600 rounded-md text-white text-primary bg-green-600 hover:scale-105 hover:shadow-lg duration-200 ease-in-out'>
            <span className='min-w-8 min-h-8 flex items-center'>
              <Mail size={40} />
            </span>
            <span>Contáctame por correo</span>
          </a>
        </div> */}
      </div>
    </section>
  )
}