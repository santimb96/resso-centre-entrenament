import Footer from '@/components/footer'
import Header from '@/components/headerComponents/header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='flex flex-col items-center relative'>
        <Header />
        <section className='w-full md:w-[75vw] lg:w-[60vw] flex flex-col items-start gap-2.5 p-2.5'>
          {children}
        </section>
        <Footer />
      </body>
    </html>
  )
}
