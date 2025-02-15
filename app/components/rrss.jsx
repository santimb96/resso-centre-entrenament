import { Facebook, Instagram, Mail } from './icons'

export default function Rrss () {
  return (
    <>
      <span className='min-w-8 h-min p-1 hover:scale-105 hover:text-instagramEnd duration-200 ease-in-out cursor-pointer'><a href='https://www.instagram.com/pfisic_mario/' target='_blank'><Instagram size={32}/></a></span>
      <span className='min-w-8 h-min p-1 hover:scale-105 hover:text-facebook duration-200 ease-in-out cursor-pointer'><a href='https://www.instagram.com/pfisic_mario/' target='_blank'><Facebook size={32}/></a></span>
      <span className='min-w-8 h-min p-1 hover:scale-105 hover:text-green-600 duration-200 ease-in-out cursor-pointer'><a href='mailto:pfisicmario@gmail.com' target='_blank'><Mail size={32}/></a></span>
    </>
  )
}