'use client'
import { MENU } from '@/constants/vars'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function RowMenu() {
  const { asPath } = useRouter()
  const [activeSection, setActiveSection] = useState('')
  const sectionsIds = MENU.map(section => section.href.replace('#', ''))

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      let currentSection = ''

      for (const sectionId of sectionsIds) {
        const section = document.getElementById(sectionId)
        if (section) {
          const offsetTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + sectionHeight) {
            currentSection = sectionId
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className='rowNav mt-1'>
      <div className='flex flex-row justify-start items-end ml-5 gap-5 textShadow'>
        {MENU.map((menuItem, index) => {
          const isActive = activeSection === menuItem.href.replace('#', '')
          return (
            <Link
              key={`menu-${index}`}
              href={asPath !== '/' ? `/${menuItem.href}` : menuItem.href}
              className={`text-[1rem] font-bold hover:text-accent duration-150 ease-in-out ${isActive ? 'text-accent' : ''}`}
            >
              {menuItem.name}
            </Link>
          )
        })}
      </div>
      {/* <span className={`${workSans.className} text-[1rem] ml-5 font-extrabold italic clipPathHashtag py-1.5 px-10 min-w-max flex justify-center items-center bg-primary text-secondary`}>#BERESSÒ</span> */}
    </nav>
  )
}
