import Link from 'next/link'
import { CheckCircle, CloseCircle, Cookie } from './icons'

export default function CookiesMessage() {
  return (
    <div className='z-50 border border-secondary fixed bottom-5 bg-primary shadow-custom rounded-md px-5 py-2.5 flex justify-start items-center gap-2.5'>
      <span className='min-w-6'><Cookie /></span>
      <p>Este sitio usa cookies. Para obtener más información, consulta nuestra <Link href="/cookies-policy" className='text-sky-500 hover:text-sky-600 hover:underline duration-150 ease-in-out' target='_blank'>política de cookies</Link></p>
      <div className='flex justify-center items-center'>
        <button className='min-w-8 rounded-full duration-150 ease-in-out text-green-400 hover:text-green-600'><CheckCircle size={32} /></button>
        <button className='min-w-8 rounded-full duration-150 ease-in-out text-red-400 hover:text-red-600'><CloseCircle size={32} /></button>
      </div>
    </div>
  )
}
