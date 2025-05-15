'use client'

import { useEffect } from 'react'
import { ExternalLink } from './icons'

// import { useEffect } from 'react'
// import { CheckBag } from './icons'

// export default function GoToPlans() {
//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       const goToPlans = document.querySelector('#goToPlans')
//       const minHeight = 2000
//       if (window.scrollY > minHeight) {
//         goToPlans.classList.add('goToPlansVisible')
//       } else {
//         goToPlans.classList.remove('goToPlansVisible')
//       }
//     })
//   }, [])
//   return (
//     <a href='#planes' id='goToPlans' className='z-10 opacity-0 fixed bottom-5 self-center bg-green-100 border border-secondary rounded-full px-5 py-2.5 text-secondary hover:scale-110 duration-150 ease-in-out hover:bg-accent hover:text-primary hover:border-primary flex justify-center items-center gap-2.5 group'>
//       <span className='group-hover:animate-bouncing group-hover:animate-infinite duration-150 ease-in-out min-w-6'><CheckBag /></span>
//       Ver planes
//     </a>
//   )
// }

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
    <a href='#planes' id='goToPlans' className='z-10 opacity-0 duration-300 ease-in-out fixed bottom-5 bg-primary text-secondary py-2.5 px-5 rounded-lg left-5 flex justify-center items-center gap-2.5 group border border-secondary hover:scale-105'>
      ¿Aún no has visto nuestros planes?
      <span className='min-w-6 animate-swing group-hover:animate-stop group-hover:!scale-125 duration-500 ease-in-out group-hover:text-accent animate-infinite animate-duration-700 animate-ease-in-out'><ExternalLink /></span>
    </a>
  )
}