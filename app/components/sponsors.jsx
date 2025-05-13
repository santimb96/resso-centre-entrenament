import TextComponent from './common/TextComponent'
import TitleSection from './common/TitleSection'
import InfiniteSlider from './infiniteSlider'
export default function Sponsors() {
  return (
    <section id='patrocinadores' className='scrollAppear flex flex-col justify-center items-center gap-5 scroll-m-24 px-2.5'>
      <div className='w-full flex flex-col justify-center items-center mt-5 md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]'>
        <TitleSection title='Patrocinadores' color='accent' />
        <TextComponent text='Colaboran con nosotros:' textColor='accent'  />
        <div className='w-full flex justify-center items-center'> 
          <div className='w-full'>
            <InfiniteSlider />
          </div>
        </div>
      </div>
    </section>
  )
}