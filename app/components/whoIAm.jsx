import { PERSONAL_INFO } from '@/constants/vars'
import TitleSection from './common/TitleSection'

export default function WhoIAm() {
  return (
    <section id='quien-soy' className='-z-50 scrollAppear flex flex-col justify-center items-center gap-5 scroll-m-24 bg-accent px-2.5'>
      <div className='w-full mt-20 md:mt-40 md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]'>
        <TitleSection title='¿Quién soy?' />
      </div>
      <p 
        className='text-primary text-[1rem] md:text-[1.75rem] max-w-[75ch] whitespace-pre-wrap md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw] pb-10'
        dangerouslySetInnerHTML={{ __html: PERSONAL_INFO.description }}
      >
      </p>
    </section>
  )
}