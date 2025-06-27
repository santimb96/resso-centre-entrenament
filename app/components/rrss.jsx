import { RESSO_INFO } from '../constants/vars'
import { Instagram, Mail } from './icons'

export default function Rrss () {
  return (
    <>
      <span className='min-w-6 p-1 hover:text-accent duration-200 ease-in-out cursor-pointer'><a aria-label='Instagram' href={RESSO_INFO.instagram} target='_blank'><Instagram size={32}/></a></span>
      <span className='min-w-6 p-1 hover:text-accent duration-200 ease-in-out cursor-pointer'><a aria-label='Correo electrónico' href={`mailto:${RESSO_INFO.email}`} target='_blank'><Mail size={32}/></a></span>
    </>
  )
}