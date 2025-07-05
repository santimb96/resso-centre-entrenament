import Footer from '@/components/footer'
import ScrollToTop from '@/components/scrollToTop'
import { notoSans } from '../lib/fonts'

export const metadata = {
  title: {
    default: 'Política de cookies'
  },
}

export default function CookiesLayout({ children }) {
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
