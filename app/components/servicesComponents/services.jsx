import TextComponent from '../common/TextComponent'
import ServicesList from './servicesList'
export default function Services () {
  return (
    <section id='servicios' className='-z-50 flex flex-col justify-center items-center bg-accent px-4 pb-8'>
      <div className='w-full mt-20 md:mt-40 md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw] flex flex-col items-center gap-8'>
        <div className='w-full md:w-3/4 lg:w-1/2 text-center text-pretty'>
          <TextComponent text='Ofrecemos una variedad de servicios diseñados para adaptarse a tus necesidades y ayudarte a alcanzar tus <strong className="font-extrabold">objetivos</strong>.' textColor='primary' textAlign='text-center' margin='my-0' />
        </div>
        <ServicesList />
      </div>
    </section>
  )
}