import './globals.css'
import { notoSans } from './lib/fonts'
import { Analytics } from '@vercel/analytics/next'


export const jsonLD = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'GymAndFitnessClub', 'HealthClub'],
  '@id': 'https://ressocentredentrenament.com',
  'name': 'Ressò - Centre d\'entrenament',
  'description': 'Centro de entrenamiento en Pont d\'Inca, Mallorca. Planes personalizados, talleres de fitness y servicios de nutrición y fisioterapia.',
  'url': 'https://ressocentredentrenament.com',
  'logo': {
    '@type': 'ImageObject',
    'url': 'https://ressocentredentrenament.com/img/logo-resso-fn-azul-blanco-resized.webp',
    'width': 100,
    'height': 50
  },
  'image': 'https://ressocentredentrenament.com/img/logo-resso-og-image.jpg',
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
  'email': 'mario@ressocentredentrenament.com',
  'openingHours': ['Tu,We,Fr 08:00-13:00', 'Tu,We,Fr 16:00-21:00'],
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Tuesday', 'Wednesday', 'Friday'],
      'opens': '08:00',
      'closes': '13:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Tuesday', 'Wednesday', 'Friday'],
      'opens': '16:00',
      'closes': '21:00'
    }
  ],
  'priceRange': '€€',
  'currenciesAccepted': 'EUR',
  'paymentAccepted': 'Cash, Credit Card',
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
  metadataBase: new URL('https://ressocentredentrenament.com'),
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
  authors: [{ name: 'Ressò - Centre d\'entrenament', url: 'https://ressocentredentrenament.com' }],
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
    url: 'https://ressocentredentrenament.com',
    title: 'Ressò - Centre d\'Entrenament | Pont d\'Inca, Mallorca',
    description: 'Centro de entrenamiento en Pont d\'Inca, Mallorca. Planes personalizados, talleres de fitness y servicios de nutrición y fisioterapia. ¡Empieza hoy en Ressò!',
    images: [
      {
        url: 'https://ressocentredentrenament.com/img/logo-resso-og-image.jpg?v=1',
        width: 1200,
        height: 630,
        alt: 'Ressò - Centre d\'Entrenament, Pont d\'Inca, Mallorca',
      },
    ],
    siteName: 'Ressò - Centre d\'entrenament',
  },
  alternates: {
    canonical: 'https://ressocentredentrenament.com',
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
    images: ['https://ressocentredentrenament.com/img/logo-resso-og-image.jpg?v=1'],
  },
  other: {
    'geo.region': 'ES-PM',
    'geo.placename': 'Pont d\'Inca, Illes Balears',
    'geo.position': '39.598915606336604;2.694483325041169',
    'ICBM': '39.598915606336604;2.694483325041169',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" /> */}
        <meta name="apple-mobile-web-app-title" content="Ressò - Centre d'entrenament" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />
      </head>
      <body className={`${notoSans.className} flex flex-col items-center justify-start relative`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
