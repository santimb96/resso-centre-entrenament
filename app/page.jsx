import Presentation from '@/components/presentation'
import Workshops from '@/components/workshopComponents/workshops'

export default function Home() {
  return (
    <main className='flex flex-col gap-5'>
      <Presentation />
      <section className='flex flex-col gap-5'>
        <h2 id='quien-soy'>¿Quién soy?</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus molestias deserunt minima at officiis ex rem quia voluptatum minus. Possimus, magnam ea molestias et maiores inventore rerum suscipit quas assumenda?
        </p>
      </section>
      <section className='flex flex-col gap-5'>
        <h2 id='workshops'>Workshops</h2>
        <Workshops />
        {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus molestias deserunt minima at officiis ex rem quia voluptatum minus. Possimus, magnam ea molestias et maiores inventore rerum suscipit quas assumenda?
        </p> */}
      </section>
      <section className='flex flex-col gap-5'>
        <h2 id='patrocinadores'>Patrocinadores</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus molestias deserunt minima at officiis ex rem quia voluptatum minus. Possimus, magnam ea molestias et maiores inventore rerum suscipit quas assumenda?
        </p>
      </section>
    </main>
  )
}
