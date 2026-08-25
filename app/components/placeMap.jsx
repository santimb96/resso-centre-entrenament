'use client'

import { useState, useEffect } from 'react'

export default function PlaceMap({ mapsLink }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    const mapContainer = document.getElementById('map-placeholder')
    if (mapContainer) observer.observe(mapContainer)

    return () => observer.disconnect()
  }, [])

  return (
    <div className='w-full md:w-3/4 lg:w-full'>
      <a
        href={mapsLink}
        target='_blank'
        rel='noopener noreferrer'
        aria-label="Ver ubicación de Ressò en Google Maps"
        className='block rounded-xl overflow-hidden group'
      >
        <div id='map-placeholder' className='relative w-full h-[280px] md:h-[400px]'>
          {!isLoaded && (
            <div className='absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center'>
              <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
            </div>
          )}
          {isLoaded && (
            <iframe
              src='https://maps.google.com/maps?q=Ress%C3%B2+Centre+d%27Entrenament,+Avinguda+Antoni+Maura+69,+Pont+d%27Inca&z=17&hl=es&iwloc=B&output=embed'
              title="Ubicación de Ressò - Centre d'entrenament"
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='w-full h-full grayscale-0 brightness-90 md:grayscale md:group-hover:grayscale-0 transition-[filter] md:group-hover:brightness-100 duration-150 ease-in-out'
              style={{ border: 0, display: 'block' }}
            />
          )}
        </div>
      </a>
    </div>
  )
}
