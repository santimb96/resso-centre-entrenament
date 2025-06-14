import CookiesMessage from '@/components/cookiesMessage'
import './globals.css'
import { notoSans } from './lib/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Ressò - Centre d&apos;entrenament</title>
        {/* <icon href="/img/" /> */}
        <meta name="description" content="Ressò - Centre d&apos;entrenament es un centro de entrenamiento situado en el Pont d'Inca, Mallorca. En él puedes encontrar servicios de entrenamiento mediante planes, así como talleres y servicios complementarios para obtener la mejor versión posible de uno mismo." />
        <meta name="keywords" content="Ressò, Centre d'entrenament, entrenamiento, planes, talleres, workshops, servicios complementarios, Mallorca, Pont d'Inca, Palma, bienestar, salud, entrenamiento, rendimiento, nutrición" />
        <meta name="author" content="Ressò - Centre d&apos;entrenament" />
        <meta name="robots" content="index, follow" />
        <meta property='og:title' content='Ressò - Centre d&apos;entrenament' />
        <meta property='og:description' content='¡Entra y mira todo lo que podemos ofrecerte para sacar la mejor versión de ti mismo!' />
        <meta property='og:url' content='https://ressocentredentrenament.com' />
        <meta property='og:image' itemProp='image' content='/img/logo-resso-fn-azul-blanco.webp' />      
        <meta property='og:image:secure_url' itemProp='image' content='/img/logo-resso-fn-azul-blanco.webp' />
        <meta property='og:image:type' itemProp='image' content='image/webp' />
        <meta property='og:image:width' itemProp='image' content='256' />
        <meta property='og:image:height' itemProp='image' content='256' /> 
        <link itemProp='thumbnailUrl' href='/img/logo-resso-fn-azul-blanco.webp' /> 
        <span itemprop="thumbnail" itemscope itemtype="http://schema.org/ImageObject"> 
          <link itemprop="url" href="/img/logo-resso-fn-azul-blanco.webp" />
        </span>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${notoSans.className} flex flex-col items-center justify-start relative`}>
        {children}
        <CookiesMessage />
      </body>
    </html>
  )
}
