'use client'
import { Whatsapp } from '@/components/icons'
import { MENU, RESSO_INFO } from '@/constants/vars'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function RowMenu() {
  const pathname = usePathname()
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
      <div className='flex flex-row justify-center items-center ml-5 gap-5'>
        {MENU.map((menuItem, index) => {
          const isActive = activeSection === menuItem.href.replace('#', '')
          return (
            <Link
              key={`menu-${index}`}
              title={`Ir a la sección ${menuItem.name}`}
              href={pathname !== '/' ? `/${menuItem.href}` : menuItem.href}
              className={`text-sm font-bold hover:text-accent duration-150 ease-in-out ${isActive ? 'text-accent' : ''}`}
            >
              {menuItem.name}
            </Link>
          )
        })}
        <Link href={RESSO_INFO.whatsapp} rel='noopener noreferrer' target='_blank' title="¡Contáctanos por WhatsApp!" className="flex flex-row items-center justify-center gap-2 text-sm py-2 px-4 bg-accent rounded-lg font-bold hover:shadow-[0_0_8px_rgba(85,179,183,0.5)] duration-150 ease-in-out">
          ¡Contáctanos sin compromiso!
          <span className={'min-w-[20px] text-white'}><Whatsapp size={20} /></span>
        </Link>
      </div>
    </nav>
  )
}
