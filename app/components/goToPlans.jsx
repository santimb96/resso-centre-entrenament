'use client'

import { useEffect } from 'react'
import { ArrowUp } from './icons'

export default function GoToPlans () {

  const handleGoToPlans = () => {
    const goToPlans = document.querySelector('#goToPlans')
    // hardcoded min and max interval and it needs to be optimized/dynamic
    const minHeight = 1750
    const maxHeight = 3350
    if (window.scrollY > minHeight && window.scrollY < maxHeight) {
      goToPlans?.classList.add('goToPlansVisible')
    } else {
      goToPlans?.classList.remove('goToPlansVisible')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleGoToPlans()
    })

    return () => {
      window.removeEventListener('scroll', () => {
        handleGoToPlans()
      })
    }
  }, [])

  return (
    <a aria-label='Ver planes' href='#planes' id='goToPlans' className='z-10 opacity-0 duration-150 ease-in-out fixed bottom-5 bg-primary text-secondary py-2.5 px-5 rounded-lg left-5 flex justify-center items-center gap-2.5 group border border-secondary hover:scale-105 shadow-custom'>
      <span className='hidden lg:block'>¿Aún no has visto nuestros planes?</span>
      <span className='block lg:hidden'>Ver planes</span>
      <span className='min-w-6'>
        <ArrowUp size={16} />
      </span>
    </a>
  )
}
