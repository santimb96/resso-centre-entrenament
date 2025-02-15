import JapanHeader from './japanHeader'
import PackList from './packList'

export default function Plans() {
  return (
    <section id='planes' className='scrollAppear flex flex-col gap-5 scroll-m-24'>
      <div className='w-full'>
        <JapanHeader text='パック' />
        <h2>Planes</h2>
      </div>
      <PackList />
    </section>
  )
}