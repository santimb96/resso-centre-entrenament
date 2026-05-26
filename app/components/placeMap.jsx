export default function PlaceMap({ mapsLink }) {
  return (
    <div className='w-full px-2.5 md:px-0 md:w-3/4 lg:w-full h-[40vh] md:h-[60vh] lg:h-[70vh] flex justify-center items-start'>
      <a
        href={mapsLink}
        target='_blank'
        rel='noopener noreferrer'
        aria-label="Ver ubicación de Ressò en Google Maps"
        className='w-full h-[75%] block rounded-[10px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] group'
      >
        <iframe
          src='https://maps.google.com/maps?q=39.598915606336604,2.694483325041169&z=18&hl=es&output=embed'
          title="Ubicación de Ressò - Centre d'entrenament"
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full h-full grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-[filter] duration-500'
          style={{ border: 0 }}
        />
      </a>
    </div>
  )
}
