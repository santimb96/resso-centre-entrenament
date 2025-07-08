import './globals.css'
import { notoSans } from './lib/fonts'
export const jsonLD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.ressocentredentrenament.com',
  'name': 'Ressò - Centre d\'entrenament',
  'description': 'Ressò - Centre d\'entrenament es un centro de entrenamiento situado en el Pont d\'Inca, Mallorca. En él puedes encontrar servicios de entrenamiento mediante planes, así como talleres y servicios complementarios de nutrición y fisioterapia.',
  'url': 'https://www.ressocentredentrenament.com',
  '@publisher': {
    '@id': 'https://www.ressocentredentrenament.com',
  },
  'inLanguage': 'es-ES',
}

export const metadata = {
  metadataBase: new URL('https://www.ressocentredentrenament.com'),
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
    google: 'google'
    // google: '7OWtrRiaW9jNkUZytFaR7s8dWmSqsvMweaChbeqMWRw',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.ressocentredentrenament.com',
    title: 'Ressò - Centre d\'entrenament',
    description: 'Ressò - Centre d\'entrenament es un centro de entrenamiento situado en el Pont d\'Inca, Mallorca. En él puedes encontrar servicios de entrenamiento mediante planes, así como talleres y servicios complementarios de nutrición y fisioterapia.',
    images: [
      {
        url: 'https://www.ressocentredentrenament.com/img/logo-resso-og-image.jpg?v=1',
        width: 1200,
        height: 630,
        alt: 'Ressò - Centre d\'entrenament',
      },
    ],
    siteName: 'Ressò - Centre d\'entrenament',
  },
  alternates: {
    canonical: 'https://www.ressocentredentrenament.com',
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
        <meta name="apple-mobile-web-app-title" content="Ressò - Centre d'entrenament" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Ressò - Centre d'entrenament" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />
      </head>
      <body className={`${notoSans.className} flex flex-col items-center justify-start relative`}>
        {children}
      </body>
    </html>
  )
}
