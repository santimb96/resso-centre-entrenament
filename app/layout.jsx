import Footer from '@/components/footer'
import Header from '@/components/headerComponents/header'
import { ViewTransitions } from 'next-view-transitions'
import ScrollToTop from './components/scrollToTop'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="es">
        <body>
          <main className='flex flex-col items-center justify-start relative'>
            <Header />
            <section className='w-full flex flex-col items-start gap-5 md:px-0'>
              {children}
            </section>
            <ScrollToTop />
            <Footer />
          </main>
        </body>
      </html>
    </ViewTransitions>
  )
}
