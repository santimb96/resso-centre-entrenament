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
        <body>
          <main className='flex flex-col items-center justify-start relative'>
            <div className='headerContainer bg-secondary relative'>
              <Header />
              <div className='w-full absolute top-[200px] md:top-[300px] flex flex-col justify-center items-center gap-10 px-2.5'>
                <h1 className='text-primary text-[3rem] sm:text-[4.25rem] lg:text-[5.75rem] font-bold textStrokeSecondary'>TRANSFORMA TU CUERPO.</h1>
                <h1 className='text-accent text-[3rem] sm:text-[4.25rem] lg:text-[5.75rem] font-bold mb-10 textStrokePrimary'>SUPERA TUS LÍMITES.</h1>
                <div className='w-full flex flex-col md:max-w-max md:!flex-row justify-center items-center gap-5 text-xl md:text-2xl lg:text-4xl'>
                  <button className='whitespace-nowrap w-full pt-3.5 py-2.5 px-5 bg-primary rounded-full border text-secondary border-transparent hover:bg-accent hover:border-primary duration-150'>HAZTE MIEMBRO #BERESSÒ</button>
                  <button className='whitespace-nowrap w-full pt-3.5 py-2.5 px-5 rounded-full border border-primary text-primary hover:bg-accent duration-150'>DESCUBRE NUESTROS SERVICIOS</button>
                </div>
              </div>
              <div className='absolute -bottom-10 md:-bottom-36 w-full'>
                <h2 className='text-primary text-[2.25rem] sm:text-[3rem] lg:text-[4rem] font-bold textStrokeSecondary w-full text-center'>¿NO SABES POR DÓNDE EMPEZAR?</h2>
                <div className='mt-8 hidden md:flex flex-col items-center justify-center text-primary'>
                  <Mouse size={40} />
                  <span className='animate-bounce'>
                    <CaretDown size={40} />
                  </span>
                </div>
              </div>
            </div>
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
