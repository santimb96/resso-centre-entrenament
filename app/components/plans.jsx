import TitleSection from './common/TitleSection'
import PackList from './packList'

export default function Plans() {
  return (
    <section id='planes' className='scrollAppear flex flex-col justify-center items-center gap-5 scroll-m-24 px-2.5 py-5'>
      <div className='w-full md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]'>
        <TitleSection title='Planes' color='accent' />
        <div className='mt-5'>
          <PackList />
        </div>
      </div>
    </section>
  )
}