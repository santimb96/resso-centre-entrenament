import Footer from '@/components/footer'
import ScrollToTop from '@/components/scrollToTop'
import { notoSans } from '../lib/fonts'

export default function CookiesLayout({ children }) {
  console.log('cookies')
  return (
    <div className={`${notoSans.className} flex flex-col items-center justify-start relative bg-red-500`}>
      <section className='w-full flex flex-col items-start gap-5 md:px-0'>
        {children}
      </section>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
