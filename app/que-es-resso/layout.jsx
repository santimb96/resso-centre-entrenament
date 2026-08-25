import Footer from '@/components/footer'
import ScrollToTop from '@/components/scrollToTop'
import { notoSans } from '../lib/fonts'

export const metadata = {
  title: 'Sobre Ressò - Centro de Entrenamiento en Pont d\'Inca, Mallorca',
  description: 'Conoce Ressò, centro de entrenamiento personal en Pont d\'Inca, Mallorca. Nuestra filosofía, equipo de entrenadores certificados y enfoque personalizado para alcanzar tus objetivos.',
  keywords: [
    'sobre Ressò',
    'centro entrenamiento Pont d\'Inca',
    'equipo entrenadores Mallorca',
    'filosofía entrenamiento',
    'entrenadores certificados Mallorca',
    'gimnasio Pont d\'Inca historia',
  ],
}

export default function AboutUsLayout({ children }){
  return (
    <div className={`${notoSans.className} w-full flex flex-col items-center justify-start relative`}>
      <section className='w-full flex flex-col items-start gap-5 md:px-0'>
        {children}
      </section>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
