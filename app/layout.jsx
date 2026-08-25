import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { notoSans } from './lib/fonts'


export const jsonLD = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'GymAndFitnessClub', 'HealthClub'],
  '@id': 'https://ressocentre.es',
  'name': 'Ressò - Centre d\'entrenament',
  'description': 'Centro de entrenamiento en Pont d\'Inca, Mallorca. Planes personalizados, talleres de fitness y servicios de nutrición y fisioterapia.',
  'url': 'https://ressocentre.es',
  'logo': {
    '@type': 'ImageObject',
    'url': 'https://ressocentre.es/img/logo-resso-fn-azul-blanco-resized.webp',
    'width': 100,
    'height': 50
  },
  'image': 'https://ressocentre.es/img/logo-resso-og-image.jpg',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Avinguda d\'Antoni Maura, 69, Cas Miot',
    'addressLocality': 'Pont d\'Inca',
    'addressRegion': 'Illes Balears',
    'postalCode': '07141',
    'addressCountry': 'ES'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 39.598915606336604,
    'longitude': 2.694483325041169
  },
  'hasMap': 'https://maps.app.goo.gl/A3Gnwu5uknGrvUpAA',
  'telephone': '+34604845184',
  'email': 'mario@ressocentre.es',
  'openingHours': ['Tu,We,Th 08:00-12:00', 'Mo,Tu,We,Th,Fr 16:00-20:00', 'Sa 09:00-13:00'],
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Tuesday', 'Wednesday', 'Thursday'],
      'opens': '08:00',
      'closes': '12:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '16:00',
      'closes': '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Saturday'],
      'opens': '09:00',
      'closes': '13:00'
    }
  ],
  'priceRange': '€€',
  'currenciesAccepted': 'EUR',
  'paymentAccepted': 'Cash, Credit Card',
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '5',
    'reviewCount': '18',
    'bestRating': '5',
    'worstRating': '1',
  },
  'inLanguage': ['es-ES', 'ca-ES'],
  'knowsLanguage': ['Spanish', 'Catalan'],
  'sameAs': [
    'https://www.instagram.com/resso_ct/'
  ],
  'areaServed': {
    '@type': 'City',
    'name': 'Pont d\'Inca'
  },
  'employee': [
    {
      '@type': 'Person',
      'name': 'Mario Martín',
      'jobTitle': 'Entrenador Personal',
      'description': 'Entrenador personal con experiencia en entrenamiento funcional',
      'sameAs': ['https://www.instagram.com/resso_ct/']
    }
  ],
}

export const metadata = {
  metadataBase: new URL('https://ressocentre.es'),
  title: {
    default: 'Ressò - Centre d\'Entrenament | Pont d\'Inca, Mallorca',
    template: '%s | Ressò - Centre d\'Entrenament',
  },
  description: 'Centro de entrenamiento en Pont d\'Inca, Mallorca. Planes personalizados, talleres de fitness y servicios de nutrición y fisioterapia. ¡Empieza hoy en Ressò!',
  keywords: [
    'Ressò',
    'centre entrenament',
    'centro entrenamiento Mallorca',
    'entrenamiento personal',
    'gym Pont d\'Inca',
    'planes entrenamiento',
    'talleres fitness',
    'workshops',
    'talleres',
    'open box',
    'simulacros',
    'nutrición deportiva',
    'fisioterapia',
    'Mallorca',
    'Pont d\'Inca',
    'Palma',
    'bienestar',
    'salud',
    'rendimiento deportivo',
    'readaptación',
    'recuperación deportiva',
  ],
  authors: [{ name: 'Ressò - Centre d\'entrenament', url: 'https://ressocentre.es' }],
  creator: 'Ressò - Centre d\'entrenament',
  publisher: 'Ressò - Centre d\'entrenament',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: '7OWtrRiaW9jNkUZytFaR7s8dWmSqsvMweaChbeqMWRw',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['ca_ES'],
    url: 'https://ressocentre.es',
    title: 'Ressò - Centre d\'Entrenament | Pont d\'Inca, Mallorca',
    description: 'Centro de entrenamiento en Pont d\'Inca, Mallorca. Planes personalizados, talleres de fitness y servicios de nutrición y fisioterapia. ¡Empieza hoy en Ressò!',
    images: [
      {
        url: 'https://ressocentre.es/img/logo-resso-og-image.jpg?v=1',
        width: 1200,
        height: 630,
        alt: 'Ressò - Centre d\'Entrenament, Pont d\'Inca, Mallorca',
      },
    ],
    siteName: 'Ressò - Centre d\'entrenament',
  },
  alternates: {
    canonical: 'https://ressocentre.es',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=1', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg?v=1', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico?v=1',
    apple: '/apple-icon.png?v=1'
  },
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: 'Ressò - Centre d\'Entrenament | Pont d\'Inca, Mallorca',
    description: 'Centro de entrenamiento en Pont d\'Inca, Mallorca. Planes personalizados, talleres de fitness y servicios de nutrición y fisioterapia. ¡Empieza hoy en Ressò!',
    images: ['https://ressocentre.es/img/logo-resso-og-image.jpg?v=1'],
  },
  other: {
    'geo.region': 'ES-PM',
    'geo.placename': 'Pont d\'Inca, Illes Balears',
    'geo.position': '39.598915606336604;2.694483325041169',
    'ICBM': '39.598915606336604;2.694483325041169',
    'apple-mobile-web-app-title': 'Ressò - Centre d\'entrenament',
    'color-scheme': 'only light',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'only light',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${notoSans.className} flex flex-col items-center justify-start relative`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />
      </body>
    </html>
  )
}
