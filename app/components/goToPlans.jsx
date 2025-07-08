'use client'
import { useEffect } from 'react'
import { ArrowUp } from './icons'

export default function GoToPlans() {
  const handleGoToPlans = () => {
    const goToPlans = document.querySelector('#goToPlans')
    const planesSection = document.querySelector('#planes')
    const footer = document.querySelector('footer')
    
    if (!planesSection || !footer) return
    
    const planesSectionEnd = planesSection.offsetTop + planesSection.offsetHeight
    
    const footerStart = footer.offsetTop
    
    const currentScrollY = window.scrollY + window.innerHeight
    
    if (currentScrollY > planesSectionEnd && window.scrollY < footerStart - window.innerHeight) {
      goToPlans?.classList.add('goToPlansVisible')
    } else {
      goToPlans?.classList.remove('goToPlansVisible')
    }
  }

  useEffect(() => {
    const scrollHandler = () => {
      handleGoToPlans()
    }
    window.addEventListener('scroll', scrollHandler)
    
    handleGoToPlans()

    return () => {
      window.removeEventListener('scroll', scrollHandler)
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
