import './globals.css'
import { notoSans } from './lib/fonts'
import { Analytics } from '@vercel/analytics/next'


export const jsonLD = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'GymAndFitnessClub', 'HealthClub'],
  '@id': 'https://ressocentredentrenament.com',
  'name': 'Ressò - Centre d\'entrenament',
  'description': 'Ressò - Centre d\'entrenament es un centro de entrenamiento situado en el Pont d\'Inca, Mallorca. En él puedes encontrar servicios de entrenamiento mediante planes, así como talleres y servicios complementarios de nutrición y fisioterapia.',
  'url': 'https://ressocentredentrenament.com',
  'logo': 'https://ressocentredentrenament.com/img/logo-resso.png',
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
  'telephone': '604845184',
  'email': 'mario@ressocentredentrenament.com',
  'openingHours': ['Mo-Fr 16:00-21:00'],
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '16:00',
      'closes': '21:00'
    }
  ],
  'priceRange': '€€',
  'currenciesAccepted': 'EUR',
  'inLanguage': ['es-ES', 'ca-ES'],
  'knowsLanguage': ['Spanish', 'Catalan'],
  'employee': [
    {
      '@type': 'Person',
      'name': 'Mario Martín',
      'jobTitle': 'Entrenador Personal',
      'description': 'Entrenador personal con experiencia en entrenamiento funcional'
    }
  ],
}

export const metadata = {
  metadataBase: new URL('https://ressocentredentrenament.com'),
  title: {
    default: 'Ressò - Centre d\'entrenament',
    template: '%s | Ressò - Centre d\'entrenament',
  },
  description: 'Ressò - Centre d\'entrenament es un centro de entrenamiento situado en el Pont d\'Inca, Mallorca. En él puedes encontrar servicios de entrenamiento mediante planes, así como talleres y servicios complementarios de nutrición y fisioterapia.',
  keywords: [
    'Ressò',
    'Centre d\'entrenament',
    'entrenamiento',
    'planes',
    'talleres',
    'workshops',
    'servicios complementarios',
    'Mallorca',
    'Pont d\'Inca',
    'Palma',
    'bienestar',
    'salud',
    'entrenamiento',
    'rendimiento',
    'nutrición',
    'fisioterapia',
    'calistenia',
    'crossfit',
    'readaptación',
    'recuperación',
  ],
  authors: [{name: 'Ressò - Centre d\'entrenament'}],
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
    url: 'https://ressocentredentrenament.com',
    title: 'Ressò - Centre d\'entrenament',
    description: 'Ressò - Centre d\'entrenament es un centro de entrenamiento situado en el Pont d\'Inca, Mallorca. En él puedes encontrar servicios de entrenamiento mediante planes, así como talleres y servicios complementarios de nutrición y fisioterapia.',
    images: [
      {
        url: 'https://ressocentredentrenament.com/img/logo-resso-og-image.jpg?v=1',
        width: 1200,
        height: 630,
        alt: 'Ressò - Centre d\'entrenament',
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
    title: 'Ressò - Centre d\'entrenament',
    description: 'Centro de entrenamiento en Pont d\'Inca, Mallorca',
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
