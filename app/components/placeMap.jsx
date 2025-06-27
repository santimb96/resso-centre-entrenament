'use client'
import { AdvancedMarker, APIProvider, InfoWindow, Map } from '@vis.gl/react-google-maps'
import Image from 'next/image'

export default function PlaceMap({ mapsLink, coordinates, locationName}) {

  return (
    <div className='w-full px-2.5 md:px-0 md:w-3/4 lg:w-full h-[40vh] md:h-[60vh] lg:h-[70vh] flex justify-center items-start lg:justify-start lg:items-start'>
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        language='es'
        region='es'
      >
        <Map
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          defaultCenter={coordinates}
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
            position={coordinates}
            title="Ressò - Centre d'entrenament"
            zIndex={1}
            onClick={() => window.open(mapsLink, '_blank')}
          />
          <InfoWindow
            position={coordinates}
            zIndex={1}
            onClick={() => window.open(mapsLink, '_blank')}
            maxWidth={250}
            headerContent={
              <div className='flex justify-start items-start'>
                <Image src='/img/logo-resso-sf-azul-negro.webp' alt='Logo Ressò' width={75} height={75} />
              </div>
            }
          >
            <div className='flex flex-col justify-start items-start gap-1'>
              <h5 className='font-bold mb-1'>Ressò - Centre d&apos;entrenament</h5>
              <p>{locationName}</p>
            </div>
          </InfoWindow>
        </Map>
      </APIProvider>
    </div>
  )
}
