'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from './icons'

export default function ScrollToTop () {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button 
      title='Volver al inicio de la página' 
      className={`fixed bottom-5 right-5 z-50 bg-primary p-2.5 rounded-full border border-secondary duration-150 ease-in-out hover:scale-110 cursor-pointer ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={24} />
    </button>
  )
}
