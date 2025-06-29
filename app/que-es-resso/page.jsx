import Link from 'next/link'

export default function AboutUs() {
  return (
    <div className="min-h-[50dvh] w-full flex justify-center items-center flex-col gap-2.5">
      <h1 className="mt-40 text-2xl font-bold">Página en construcción</h1>
      <p className="text-lg">Estamos trabajando en esta página para que puedas conocer más sobre nosotros. En breve estarás informado.</p>
      <Link href='/' className='mt-5 text-secondary font-semibold hover:border-accent hover:text-accent border border-secondary rounded-full py-2.5 px-5 duration-150 ease-in-out'>Volver al inicio</Link> 
    </div>
  )
}
