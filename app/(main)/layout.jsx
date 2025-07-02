import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/headerComponents/header'
import ScrollToTop from '@/components/scrollToTop'

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <section className='w-full flex flex-col items-start gap-5 md:px-0'>
        {children}
      </section>
      {/* <CookiesMessage /> */}
      <ScrollToTop />
      <Contact />
      <Footer />
    </>
  )
}
