import TextComponent from '../common/TextComponent'
import TitleSection from '../common/TitleSection'
import Workshops from './workshops'

export default function WorkshopsSection () {
  return (
    <section id='workshops' className='scrollAppear flex flex-col justify-center items-center gap-5 scroll-m-24 bg-accent py-5 px-2.5'>
      <div className='w-full md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]'>
        <TitleSection title='Workshops' />
        <TextComponent text='Aquí se detallan los próximos talleres que tendrán lugar en <i class="underline">#BeRessò</i>' textColor='primary' />
        <div className='mt-10'>
          <Workshops />
        </div>
      </div>
    </section>
  )
}