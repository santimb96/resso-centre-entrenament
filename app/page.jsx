import Presentation from '@/components/presentation'
import Workshops from '@/components/workshopComponents/workshops'
import JapanHeader from './components/japanHeader'
import PackList from './components/packList'

export default function Home() {
  return (
    <main className='flex flex-col gap-5'>
      <Presentation />
      <section className='flex flex-col gap-5'>
        <div className='w-full'>
          <JapanHeader text='私は誰?' />
          <h2 id='quien-soy'>¿Quién soy?</h2>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus molestias deserunt minima at officiis ex rem quia voluptatum minus. Possimus, magnam ea molestias et maiores inventore rerum suscipit quas assumenda?
        </p>
      </section>
      <section className='flex flex-col gap-5'>
        <div className='w-full'>
          <JapanHeader text='パック' />
          <h2 id='planes'>Planes</h2>
        </div>
        <PackList />
      </section>
      <section className='flex flex-col gap-5'>
        <div className='w-full'>
          <JapanHeader text='ワークショップ' />
          <h2 id='workshops'>Workshops</h2>
        </div>
        <Workshops />
      </section>
      <section className='flex flex-col gap-5'>
        <div className='w-full'>
          <JapanHeader text='スポンサー' />
          <h2 id='patrocinadores'>Patrocinadores</h2>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus molestias deserunt minima at officiis ex rem quia voluptatum minus. Possimus, magnam ea molestias et maiores inventore rerum suscipit quas assumenda?
        </p>
      </section>
    </main>
  )
}
