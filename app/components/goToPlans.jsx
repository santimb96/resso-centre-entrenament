'use client'
import { useEffect, useState } from 'react'
import { ArrowUp } from './icons'

export default function GoToPlans() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleGoToPlans = () => {
      const planesSection = document.querySelector('#planes')
      const footer = document.querySelector('footer')
      
      if (!planesSection || !footer) return
      
      const planesSectionEnd = planesSection.offsetTop + planesSection.offsetHeight
      const footerStart = footer.offsetTop
      const currentScrollY = window.scrollY + window.innerHeight
      
      setVisible(currentScrollY > planesSectionEnd && window.scrollY < footerStart - window.innerHeight)
    }

    window.addEventListener('scroll', handleGoToPlans)
    handleGoToPlans()

    return () => {
      window.removeEventListener('scroll', handleGoToPlans)
    }
  }, [])

  return (
    <a aria-label='Ver planes' href='#planes' className={`z-10 duration-150 ease-in-out fixed bottom-5 bg-primary text-secondary py-2.5 px-5 rounded-lg left-5 flex justify-center items-center gap-2.5 group border border-secondary hover:scale-105 font-semibold hover:bg-secondary hover:text-primary hover:border-primary ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <span className='hidden lg:block'>¿Aún no has visto nuestros planes?</span>
      <span className='block lg:hidden'>Ver planes</span>
      <span className='min-w-6'>
        <ArrowUp size={16} />
      </span>
    </a>
  )
}
