'use client'

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

export default function PlaceMap() {
  const position = { lat: 39.574979872981274, lng: 2.6579112512360803 }

  return (
    <div className='w-[95vw] sm:w-[75vw] lg:w-[60vw] h-[50vh] md:h-[60vh] lg:h-[70vh] flex justify-center items-center'>
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        language='es'
        region='es'
      >
        <Map
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
            height: '100%'
          }}
        >
          <Marker
            position={position}
            title="Ressò - Centre d'entrenament"
            onClick={() => window.open('https://maps.app.goo.gl/XFQZdjuTjio2sp7r8', '_blank')}
            animation={2}
            icon={{
              url: '/img/logo-resso-fn-azul-blanco-resized.png',
              scaledSize: { width: 100, height: 50 }
            }}
          />
        </Map>
      </APIProvider>
    </div>
  )
}
