import CookiesMessage from '@/components/cookiesMessage'
import './globals.css'
import { notoSans } from './lib/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* <icon href="/img/" /> */}
        <title>Ressò - Centre d&apos;entrenament</title>
        <meta name="description" content="Ressò - Centre d&apos;entrenament es un centro de entrenamiento situado en el Pont d'Inca, Mallorca. En él puedes encontrar servicios de entrenamiento mediante planes, así como talleres y servicios complementarios para obtener la mejor versión posible de uno mismo." />
        <meta name="keywords" content="Ressò, Centre d'entrenament, entrenamiento, planes, talleres, workshops, servicios complementarios, Mallorca, Pont d'Inca, Palma, bienestar, salud, entrenamiento, rendimiento, nutrición" />
        <meta name="author" content="Ressò - Centre d&apos;entrenament" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="7OWtrRiaW9jNkUZytFaR7s8dWmSqsvMweaChbeqMWRw" />
        {/* <meta name="google-site-verification" content={`${process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}`} /> */}
        <meta property='og:title' content='Ressò - Centre d&apos;entrenament' />
        <meta property='og:description' content='¡Entra y mira todo lo que podemos ofrecerte para sacar la mejor versión de ti mismo!' />
        <meta property='og:image' content='https://www.ressocentredentrenament.com/img/logo-resso-og-image.jpg?v=1' />
        <meta property='og:url' content='https://www.ressocentredentrenament.com' />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.ressocentredentrenament.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${notoSans.className} flex flex-col items-center justify-start relative`}>
        {children}
        <CookiesMessage />
      </body>
    </html>
  )
}
