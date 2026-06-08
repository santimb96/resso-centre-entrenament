'use client'

import { useEffect } from 'react'
import { ArrowUp } from './icons'

export default function ScrollToTop () {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollToTop = document.querySelector('#scrollToTop')
      if (window.scrollY > 250) {
        scrollToTop.classList.add('scrollToTopActive')
      } else {
        scrollToTop.classList.remove('scrollToTopActive')
      }
    })
  }, [])
  return (
    <button id='scrollToTop' title='Volver al inicio de la página' className='fixed bottom-5 right-5 z-50 bg-primary p-2.5 rounded-full opacity-0 border border-secondary duration-150 ease-in-out hover:scale-110 cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ArrowUp size={24} />
    </button>
  )
}
