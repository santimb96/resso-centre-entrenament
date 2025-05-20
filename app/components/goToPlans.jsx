'use client'

import { useEffect } from 'react'
import { ExternalLink } from './icons'

export default function GoToPlans () {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const goToPlans = document.querySelector('#goToPlans')
      const minHeight = 2000
      if (window.scrollY > minHeight) {
        goToPlans.classList.add('goToPlansVisible')
      } else {
        goToPlans.classList.remove('goToPlansVisible')
      }
    })
  }, [])

  return (
    <a href='#planes' id='goToPlans' className='z-10 opacity-0 duration-300 ease-in-out fixed bottom-5 bg-primary text-secondary py-2.5 px-5 rounded-lg left-5 flex justify-center items-center gap-2.5 group border border-secondary hover:scale-105 shadow-custom'>
      <span className='hidden md:block'>¿Aún no has visto nuestros planes?</span>
      <span className='block md:hidden'>Ver planes</span>
      <span className='min-w-6 animate-swing group-hover:animate-stop duration-500 ease-in-out hover:text-accent hover:brightness-75 md:animate-infinite md:animate-duration-700 md:animate-ease-in-out'><ExternalLink /></span>
    </a>
  )
}
