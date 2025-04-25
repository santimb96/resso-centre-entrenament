import TitleSection from './common/TitleSection'
import InfiniteSlider from './infiniteSlider'
export default function Sponsors() {
  return (
    <section id='patrocinadores' className='scrollAppear flex flex-col justify-center items-center gap-5 scroll-m-24'>
      <div className='w-full mt-10 md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]'>
        <TitleSection title='Patrocinadores' color='accent' />
        <p className='text-accent text-[0.75rem] md:text-[1.75rem] max-w-[75ch] my-10'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus molestias deserunt minima at officiis ex rem quia voluptatum minus. Possimus, magnam ea molestias et maiores inventore rerum suscipit quas assumenda?
        </p>
        <div className='w-full flex justify-center items-center'> 
          <div className='max-w-[75vw]'>
            <InfiniteSlider />
          </div>
        </div>
      </div>
    </section>
  )
}