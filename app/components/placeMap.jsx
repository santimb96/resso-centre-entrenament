export default function PlaceMap({ mapsLink }) {
  return (
    <div className='w-full md:w-3/4 lg:w-full'>
      <a
        href={mapsLink}
        target='_blank'
        rel='noopener noreferrer'
        aria-label="Ver ubicación de Ressò en Google Maps"
        className='block rounded-xl overflow-hidden group'
      >
        <iframe
          src='https://maps.google.com/maps?q=Ress%C3%B2+Centre+d%27Entrenament,+Avinguda+Antoni+Maura+69,+Pont+d%27Inca&z=17&hl=es&iwloc=B&output=embed'
          title="Ubicación de Ressò - Centre d'entrenament"
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full h-[280px] md:h-[400px] grayscale-0 brightness-90 md:grayscale md:group-hover:grayscale-0 transition-[filter] md:group-hover:brightness-100 duration-150 ease-in-out'
          style={{ border: 0, display: 'block' }}
        />
      </a>
    </div>
  )
}
