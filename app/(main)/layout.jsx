import Contact from '@/components/contact'
import ContactMeFixed from '@/components/contactMeFixed'
import Footer from '@/components/footer'
import Header from '@/components/headerComponents/header'
import ScrollToTop from '@/components/scrollToTop'

export const metadata = {
  title: 'Centro de Entrenamiento Personal en Pont d\'Inca, Mallorca | Ressò',
  description: 'Centro de entrenamiento personal en Pont d\'Inca, Mallorca. Planes desde 90€/mes con nutricionista y fisioterapeuta incluidos. Grupos reducidos de 4 personas. ¡Reserva tu evaluación gratuita!',
  keywords: [
    'entrenamiento personal Mallorca',
    'gimnasio Pont d\'Inca',
    'centro entrenamiento Palma',
    'entrenamiento funcional Mallorca',
    'entrenador personal cerca de mí',
    'gimnasio con nutricionista Mallorca',
    'entrenamiento en grupo reducido',
    'planes entrenamiento personalizados',
    'talleres fitness Mallorca',
    'workshops entrenamiento',
    'readaptación deportiva',
    'fisioterapia deportiva',
  ],
}

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <section className='w-full flex flex-col items-start gap-5 md:px-0'>
        {children}
      </section>
      <ContactMeFixed />
      <ScrollToTop />
      <Contact />
      <Footer />
    </>
  )
}
