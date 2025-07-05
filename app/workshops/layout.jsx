import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/headerComponents/header'
import ScrollToTop from '@/components/scrollToTop'
import { notoSans } from '../lib/fonts'

export const metadata = {
  title: {
    default: 'Workshops',
  },
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
