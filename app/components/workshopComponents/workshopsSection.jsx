import TitleSection from '../common/TitleSection'
import Workshops from './workshops'

export default function WorkshopsSection () {
  return (
    <section id='workshops' className='scrollAppear flex flex-col justify-center items-center gap-5 scroll-m-24 bg-accent pb-10'>
      <div className='w-full mt-10 md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]'>
        <TitleSection title='Workshops' />
        <div className='mt-10'>
          <Workshops />
        </div>
      </div>
    </section>
  )
}