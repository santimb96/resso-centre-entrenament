import TextComponent from '../common/TextComponent'
import ServicesList from './servicesList'
export default function Services () {
  return (
    <section id='quien-soy' className='-z-50  flex flex-col justify-center items-center gap-5 scroll-m-24 bg-accent px-2.5 pb-5'>
      <div className='w-full mt-20 md:mt-40 md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]'>
        <div className='w-full flex items-center justify-center mb-5'>
          <div className='w-full md:w-3/4 lg:w-2/4 text-center text-pretty'>
            <TextComponent text='Ofrecemos una variedad de servicios diseñados para adaptarse a tus necesidades y ayudarte a alcanzar tus <strong className="font-extrabold">objetivos</strong>.' textColor='primary' />
          </div>
        </div>
        <ServicesList />
      </div>
    </section>
  )
}