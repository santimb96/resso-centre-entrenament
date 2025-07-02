import { workSans } from '../lib/fonts'
import { CaretDown, Mouse } from './icons'
export default function Presentation () {
  return (
    <div className={`${workSans.className} font-[900] h-[600px] md:h-[750px] headerContainer`}>
      <div className='w-full absolute top-[200px] md:top-[300px] flex flex-col justify-center items-center px-2.5'>
        <h1 className='textShadow text-center text-primary text-[3rem] sm:text-[3.75rem] lg:text-[4.25rem] xl:text-[5.75rem]'>TRANSFORMA TU CUERPO.</h1>
        <h1 className='textShadow text-center text-accent text-[3rem] sm:text-[3.75rem] lg:text-[4.25rem] xl:text-[5.75rem] mb-5'>SUPERA TUS LÍMITES.</h1>
        <div className='w-full flex flex-col md:max-w-max md:!flex-row justify-center items-center gap-5 text-xl sm:text-2xl lg:text-4xl'>
          {/* <Link href='/que-es-resso'  className='whitespace-nowrap w-full py-2.5 px-5 bg-accent hover:border-accent hover:text-accent border border-transparent rounded-full text-primary shadow-custom hover:bg-primary duration-150 text-center'>TE CUENTO NUESTRA HISTORIA</Link> */}
        </div>
      </div>
      <div className='absolute -bottom-10 md:-bottom-36 w-full'>
        <h2 className='text-primary text-[2.25rem] sm:text-[2.75rem] lg:text-[3rem] xl:text-[4rem] w-full text-center textShadow'>¿NO SABES POR DÓNDE EMPEZAR?</h2>
        <div className='mt-8 hidden md:flex flex-col items-center justify-center text-primary'>
          <Mouse size={40} />
          <span className='animate-bouncing animate-infinite duration-150 ease-in-out'>
            <CaretDown size={40} />
          </span>
        </div>
      </div>
    </div>
  )
}
