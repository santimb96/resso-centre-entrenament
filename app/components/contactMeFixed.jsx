import { RESSO_INFO } from '@/constants/vars'
import Link from 'next/link'
import { Whatsapp } from './icons'

export default function ContactMeFixed() {
  return (
    <Link title='¡Contáctame por Whatsapp!' href={RESSO_INFO.whatsapp} className={'z-50 fixed bottom-20 right-5 bg-primary shadow-custom rounded-full block border border-secondary p-2 hover:scale-110 duration-150 ease-in-out'}>
      <span className={'min-w-8 text-whatsapp'}><Whatsapp size={30} /></span>
    </Link>
  )
}