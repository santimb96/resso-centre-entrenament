import Footer from '@/components/footer'
import Header from '@/components/headerComponents/header'
import { ViewTransitions } from 'next-view-transitions'
import { CaretDown, Mouse } from './components/icons'
import ScrollToTop from './components/scrollToTop'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="es">
        <body className='flex flex-col items-center justify-start relative -z-50'>
          <div className='headerContainer bg-secondary relative'>
            <Header />
            <div className='w-full absolute top-[300px] flex flex-col justify-center items-center gap-10'>
              <h1 className='text-primary text-[4rem] md:text-[5.75rem] font-bold textStrokeSecondary'>TRANSFORMA TU CUERPO.</h1>
              <h1 className='text-accent text-[4rem] md:text-[5.75rem] font-bold mb-10 textStrokePrimary'>SUPERA TUS LÍMITES.</h1>
              <div className='flex flex-col md:!flex-row justify-center items-center gap-5 text-4xl'>
                <button className='pt-3.5 py-2.5 px-5 bg-primary rounded-full border text-secondary border-transparent hover:bg-accent hover:border-primary duration-150'>HAZTE MIEMBRO #BERESSÒ</button>
                <button className='pt-3.5 py-2.5 px-5 rounded-full border border-primary text-primary hover:bg-accent duration-150'>DESCUBRE NUESTROS SERVICIOS</button>
              </div>
            </div>
            <div className='absolute -bottom-36 w-full'>
              <h2 className='text-primary text-[2.25rem] md:text-[4rem] font-bold textStrokeSecondary w-full text-center'>¿NO SABES POR DÓNDE EMPEZAR?</h2>
              <div className='mt-8 hidden md:flex flex-col items-center justify-center text-primary'>
                <Mouse size={40} />
                <span className='animate-bounce'>
                  <CaretDown size={40} />
                </span>
              </div>
            </div>
          </div>
          <section className='w-full flex flex-col items-start gap-5 px-2.5 md:px-0'>
            {children}
          </section>
          <ScrollToTop />
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  )
}
