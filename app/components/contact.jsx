import { Facebook, Instagram, Mail } from './icons'
import JapanHeader from './japanHeader'

export default function Contact () {
  return (
    <section id='contacto' className='scrollAppear w-full flex flex-col gap-5 scroll-m-24'>
      <div className='w-full'>
        <JapanHeader text='接触' />
        <h2>Contacto</h2>
      </div>
      <p className='m-w-[75ch]'>¡No dudes en ponerte en contacto conmigo por la vía que prefieras!</p>
      <div className='w-full flex flex-row max-sm:flex-wrap gap-5'>
        {/* https://wa.me/673467364673 --> uses WhatsApp API and opens a new tab with the chat*/}
        <a href='' target='_blank' className='font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 border border-gradient-to-r rounded-md text-white text-primary bg-gradient-to-r from-instagramStart to-instagramEnd hover:scale-105 hover:shadow-lg duration-200 ease-in-out'>
          <span className='min-w-8 min-h-8 flex items-center'>
            <Instagram size={32} />
          </span>
          <span>Contáctame por Instagram</span>
        </a>
        <a href='' target='_blank' className='font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 border border-[#1877F2] rounded-md text-white text-primary bg-facebook hover:scale-105 hover:shadow-lg duration-200 ease-in-out'>
          <span className='min-w-8 min-h-8 flex items-center'>
            <Facebook size={32} />
          </span>
          <span>Contáctame por Facebook</span>
        </a>
        <a href='' target='_blank' className='font-bold w-full flex flex-row gap-2.5 items-center justify-center lg:min-w-min px-5 py-2.5 border border-green-600 rounded-md text-white text-primary bg-green-600 hover:scale-105 hover:shadow-lg duration-200 ease-in-out'>
          <span className='min-w-8 min-h-8 flex items-center'>
            <Mail size={32} />
          </span>
          <span>Contáctame por correo</span>
        </a>
      </div>
    </section>
  )
}