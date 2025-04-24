import InfiniteSlider from './infiniteSlider'
export default function Sponsors() {
  return (
    <section id='patrocinadores' className='scrollAppear flex flex-col gap-5 scroll-m-24'>
      <div className='w-full'>
        <h2>Patrocinadores</h2>
      </div>
      <p className='max-w-[75ch]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus molestias deserunt minima at officiis ex rem quia voluptatum minus. Possimus, magnam ea molestias et maiores inventore rerum suscipit quas assumenda?
      </p>
      <div className='w-full flex justify-center items-center'> 
        <div className='max-w-[75vw]'>
          <InfiniteSlider />
        </div>
      </div>
    </section>
  )
}