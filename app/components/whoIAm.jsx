import { PERSONAL_INFO } from '@/constants/vars'
import TextComponent from './common/TextComponent'
import TitleSection from './common/TitleSection'

export default function WhoIAm() {
  return (
    <section id='quien-soy' className='-z-50 scrollAppear flex flex-col justify-center items-center gap-5 scroll-m-24 bg-accent px-2.5 pb-5'>
      <div className='w-full mt-20 md:mt-40 md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]'>
        <TitleSection title='¿Qué es <i class="underline" >Ressò</i>?' />
        <TextComponent text={PERSONAL_INFO.description} textColor='primary' />
      </div>
    </section>
  )
}