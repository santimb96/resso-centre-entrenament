import Footer from '@/components/footer'
import Header from '@/components/headerComponents/header'
import Contact from './components/contact'
import ScrollToTop from './components/scrollToTop'
import './globals.css'
import { notoSans } from './lib/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${notoSans.className} flex flex-col items-center justify-start relative`}>
        <Header />
        <section className='w-full flex flex-col items-start gap-5 md:px-0'>
          {children}
        </section>
        <ScrollToTop />
        <Contact />
        <Footer />
      </body>
    </html>
  )
}
