import CookiesMessage from '@/components/cookiesMessage'
import './globals.css'
import { notoSans } from './lib/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Ressò - Centre d&apos;entrenament</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${notoSans.className} flex flex-col items-center justify-start relative`}>
        {children}
        <CookiesMessage />
      </body>
    </html>
  )
}
