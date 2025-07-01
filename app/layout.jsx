import './globals.css'
import { notoSans } from './lib/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Ressò - Centre d&apos;entrenament</title>
        <meta name="description" content="Ressò - Centre d&apos;entrenament es un centro de entrenamiento situado en el Pont d'Inca, Mallorca. En él puedes encontrar servicios de entrenamiento mediante planes, así como talleres y servicios complementarios de nutrición y fisioterapia." />
        <meta name="keywords" content="Ressò, Centre d'entrenament, entrenamiento, planes, talleres, workshops, servicios complementarios, Mallorca, Pont d'Inca, Palma, bienestar, salud, entrenamiento, rendimiento, nutrición, fisioterapia, calistenia, crossfit, readaptación, recuperación" />
        <meta name="author" content="Ressò - Centre d&apos;entrenament" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="7OWtrRiaW9jNkUZytFaR7s8dWmSqsvMweaChbeqMWRw" />
        <meta property='og:title' content='Ressò - Centre d&apos;entrenament' />
        <meta property='og:description' content='Entrenamientos grupales, talleres y servicios de nutrición y fisioterapia.' />
        <meta property='og:image' content='https://www.ressocentredentrenament.com/img/logo-resso-og-image.jpg?v=1' />
        <meta property='og:url' content='https://www.ressocentredentrenament.com' />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.ressocentredentrenament.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="50x50" />
      </head>
      <body className={`${notoSans.className} flex flex-col items-center justify-start relative`}>
        {children}
      </body>
    </html>
  )
}
