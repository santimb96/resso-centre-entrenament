import { WIDTH_LAYOUT } from '@/constants/vars'
import TitleSection from './common/TitleSection'
import { Facebook, Instagram, Mail } from './icons'

export default function Contact () {
  return (
    <section id='contacto' className='scrollAppear w-full flex flex-col justify-center items-center gap-5 scroll-m-24 bg-accent py-10'>
      <div className={WIDTH_LAYOUT}>
        <TitleSection title='Contacto' />
        <p className='text-primary text-[0.75rem] md:text-[1.75rem] m-w-[75ch] my-10'>¡No dudes en ponerte en contacto conmigo por la vía que prefieras!</p>
        <div className='w-full flex flex-row max-sm:flex-wrap gap-5'>
          {/* https://wa.me/673467364673 --> uses WhatsApp API and opens a new tab with the chat*/}
          <a href='https://www.instagram.com/pfisic_mario/' target='_blank' className='font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 border border-gradient-to-r rounded-md text-white text-primary bg-gradient-to-r from-instagramStart to-instagramEnd hover:scale-105 hover:shadow-lg duration-200 ease-in-out'>
            <span className='min-w-8 min-h-8 flex items-center'>
              <Instagram size={32} />
            </span>
            <span>Contáctame por Instagram</span>
          </a>
          <a href='https://www.instagram.com/pfisic_mario/' target='_blank' className='font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 border border-[#1877F2] rounded-md text-white text-primary bg-facebook hover:scale-105 hover:shadow-lg duration-200 ease-in-out'>
            <span className='min-w-8 min-h-8 flex items-center'>
              <Facebook size={32} />
            </span>
            <span>Contáctame por Facebook</span>
          </a>
          <a href='mailto:pfisicmario@gmail.com' target='_blank' className='font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 border border-green-600 rounded-md text-white text-primary bg-green-600 hover:scale-105 hover:shadow-lg duration-200 ease-in-out'>
            <span className='min-w-8 min-h-8 flex items-center'>
              <Mail size={32} />
            </span>
            <span>Contáctame por correo</span>
          </a>
        </div>
      </div>
    </section>
  )
}