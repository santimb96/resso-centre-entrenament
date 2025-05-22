'use client'
import { AdvancedMarker, APIProvider, InfoWindow, Map } from '@vis.gl/react-google-maps'
import Image from 'next/image'

export default function PlaceMap() {
  const position = { lat: 39.574979872981274, lng: 2.6579112512360803 }

  return (
    <div className='w-full px-2.5 md:px-0 md:w-3/4 lg:w-full h-[40vh] md:h-[60vh] lg:h-[70vh] flex justify-center items-start lg:justify-start lg:items-start'>
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        language='es'
        region='es'
      >
        <Map
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          defaultCenter={position}
          defaultZoom={18}
          defaultMapTypeId='roadmap'
          defaultOptions={{
            disableDefaultUI: true,
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
          }}
          style={{
            width: '100%',
            height: '75%',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <AdvancedMarker
            position={position}
            title="Ressò - Centre d'entrenament"
            zIndex={1}
            onClick={() => window.open('https://maps.app.goo.gl/XFQZdjuTjio2sp7r8', '_blank')}
          />
          <InfoWindow
            position={position}
            zIndex={1}
            onClick={() => window.open('https://maps.app.goo.gl/XFQZdjuTjio2sp7r8', '_blank')}
            maxWidth={200}
            headerContent={
              <div>
                <Image src='/img/logo-resso-fn-azul-blanco-resized.webp' alt='Logo Ressò' width={50} height={50} />
              </div>
            }
          >
            <div className='mt-5 flex flex-col justify-start items-start gap-1'>
              <h5 className='font-bold mb-1'>Ressò - Centre d&apos;entrenament</h5>
              <p>Avda. de la Font, 12</p>
              <p>08005 Barcelona</p>
            </div>
          </InfoWindow>
        </Map>
      </APIProvider>
    </div>
  )
}
