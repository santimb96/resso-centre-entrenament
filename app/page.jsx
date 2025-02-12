import InfiniteSlider from '@/components/infiniteSlider'
import JapanHeader from '@/components/japanHeader'
import PackList from '@/components/packList'
import Presentation from '@/components/presentation'
import WhoIAm from '@/components/whoIAm'
import Workshops from '@/components/workshopComponents/workshops'

export default function Home() {
  return (
    <main className='flex flex-col gap-10 mt-20'>
      <Presentation />
      <WhoIAm />
      <section id='planes' className='flex flex-col gap-5 scroll-m-24'>
        <div className='w-full'>
          <JapanHeader text='パック' />
          <h2>Planes</h2>
        </div>
        <PackList />
      </section>
      <section id='workshops' className='flex flex-col gap-5 scroll-m-24'>
        <div className='w-full'>
          <JapanHeader text='ワークショップ' />
          <h2>Workshops</h2>
        </div>
        <Workshops />
      </section>
      <section id='patrocinadores' className='flex flex-col gap-5 scroll-m-24'>
        <div className='w-full'>
          <JapanHeader text='スポンサー' />
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
    </main>
  )
}
