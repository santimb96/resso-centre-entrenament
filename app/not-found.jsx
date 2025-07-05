import Image from 'next/image'
import Link from 'next/link'

export function generateMetadata() {
  return {
    title: {
      default: '404 | Ressò - Centre d\'entrenament',
    },
    description: '404 | Ressò - Centre d\'entrenament',
  }
}

export default function NotFound() {
  return (
    <div className="w-full h-[100dvh] bg-primary p-10 flex flex-col justify-center items-center gap-5">
      <Link href='/' className='mb-5'>
        <Image src='/img/logo-resso-fb-negro-azul.webp' width={100} height={100} alt='logo Ressò - Centre d&apos;entrenament' />
      </Link>
      <h1 className='text-9xl text-accent'>404</h1>
      <h2 className='text-2xl text-accent text-center font-bold text-pretty'>Oops! No se ha encontrado la página que buscas</h2>
      <p className='text-pretty text-center font-medium text-[1rem] text-accent lg:text-[1.25rem]'>Parece que la página que buscas no existe o ha sido movida. Prueba a recargar la página o volver al inicio.</p>   
      <Link href='/' className='border border-accent rounded-md px-5 py-2.5 text-accent font-semibold hover:bg-accent hover:text-primary duration-150 ease-in-out'>Volver al inicio</Link>
    </div>
  )
}
