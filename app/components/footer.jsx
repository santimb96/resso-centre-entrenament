import Link from 'next/link'
export default function Footer() {
  return (
    <footer className='w-full flex flex-col items-center'>
      <div className='md:w-[75vw] lg:w-[60vw] flex flex-col items-center gap-5 p-2.5'>
        <small className='text-pretty text-center'>Hecho con mucho ♥️ por <Link className='underline hover:text-[var(--color-detail)] ease-in-out duration-300' href='https://github.com/santimb96' target='_blank'>Santiago Martínez</Link>. Todos los derechos reservados</small>
      </div>
    </footer>  
  )
}