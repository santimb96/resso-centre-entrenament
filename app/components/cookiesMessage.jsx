'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CheckCircle, Cookie } from './icons'

export default function CookiesMessage() {
  const [cookiesAllowed, setCookiesAllowed] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const cookiesPreference = JSON.parse(localStorage.getItem('cookiesPreference'))
    if (cookiesPreference) {
      setCookiesAllowed(cookiesPreference)
    }
    setIsMounted(true)

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleOutsideClick = (e) => {
        if (e.target?.id !== 'cookiesMessage' && e.target.parentNode?.id !== 'cookiesModalButton') {
          setIsOpen(false)
          document.body.style.overflow = 'auto'
        }
      }
      window.addEventListener('click', handleOutsideClick)
      return () => {
        window.removeEventListener('click', handleOutsideClick)
        document.body.style.overflow = 'auto'
      }
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const saveCookiesPreference = (preference) => {
    const cookiesPreference = {areAllowed: preference}
    localStorage.setItem('cookiesPreference', JSON.stringify(cookiesPreference))
    setCookiesAllowed(cookiesPreference)
  }

  if (!isMounted) {
    return null
  }

  return (
    !cookiesAllowed && (
      <>
        <button
          title='Política de cookies'
          onClick={() => setIsOpen(true)}
          id='cookiesModalButton'
          className='z-50 fixed bottom-36 right-5 bg-primary shadow-custom rounded-full block border border-secondary p-1 animate-swing animate-once animate-duration-500 animate-ease-in-out hover:scale-110 duration-150 ease-in-out'
        >
          <Cookie size={36} />
        </button>
        {isOpen && (
          <CookiesModal saveCookiesPreference={saveCookiesPreference} />
        )}
      </>
    )
  )
}

function CookiesModal({ saveCookiesPreference }) {
  return (
    <div
      id='cookiesModal'
      role='dialog'
      aria-modal='true'
      aria-labelledby='cookiesModalTitle'
      className='z-[9999] top-0 h-[100dvh] w-full fixed bg-black/25 backdrop-blur-[2px] flex flex-col items-center justify-center'
    >
      <div className='bg-primary shadow-custom px-5 py-2.5 rounded-md border border-secondary w-[80%] md:w-[50%] lg:w-[25%]'>
        <h4 id='cookiesModalTitle' className='text-[1.5rem] font-bold mb-2.5'>Política de cookies</h4>
        <p>Este sitio usa cookies. Para obtener más información, consulta nuestra <Link href="/politica-de-cookies" className='text-accent hover:brightness-90 hover:underline duration-150 ease-in-out' target='_blank' rel='noopener noreferrer'>política de cookies</Link></p>
        <div className='flex flex-col items-center justify-center gap-2.5 mt-2.5'>
          <CookiesButton accept={true} saveCookiesPreference={saveCookiesPreference} />
          <CookiesButton accept={false} saveCookiesPreference={saveCookiesPreference} />
        </div>
      </div>
    </div>
  )
}

function CookiesButton({ accept = true, saveCookiesPreference }) {
  return (
    <button title={accept ? 'Aceptar cookies' : 'Rechazar cookies'} onClick={() => saveCookiesPreference(accept)} className={`min-w-8 ${accept ? 'bg-accent border-accent' : 'bg-secondary border-secondary'} hover:border-accent text-primary rounded-md flex justify-center items-center gap-2.5 border px-5 py-2.5 w-full duration-150 ease-in-out hover:text-accent hover:bg-primary hover:text-accent`}><CheckCircle size={24} /> {accept ? 'Aceptar cookies' : 'Rechazar cookies'}</button>
  )
}
