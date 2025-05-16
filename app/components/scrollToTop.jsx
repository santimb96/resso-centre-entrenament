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
    <div id='scrollToTop' className='hover:scale-110' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ArrowUp size={30} />
    </div>
  )
}
