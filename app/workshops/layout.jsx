import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/headerComponents/header'
import ScrollToTop from '@/components/scrollToTop'
import { notoSans } from '../lib/fonts'

export const metadata = {
  title: 'Talleres de Fitness y Entrenamiento Funcional en Mallorca | Workshops Ressò',
  description: 'Talleres prácticos de fitness y entrenamiento funcional en Mallorca. Simulacros de carrera, charlas con profesionales y entrenamientos especializados. ¡Reserva tu plaza!',
  keywords: [
    'talleres fitness Mallorca',
    'workshops entrenamiento',
    'entrenamiento funcional talleres',
    'simulacros carrera Mallorca',
    'charlas fitness',
    'formación deportiva Mallorca',
    'eventos fitness Palma',
  ],
}

export default function WorkshopLayout({ children }) {
  return (
    <div className={`${notoSans.className} w-full flex flex-col items-center justify-start relative`}>
      <Header isMain={false} />
      <section className='w-full flex flex-col items-start gap-5 md:px-0'>
        {children}
      </section>
      <ScrollToTop />
      <Contact />
      <Footer />
    </div>
  )
}
