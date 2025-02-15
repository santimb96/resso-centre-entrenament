import JapanHeader from '../japanHeader'
import Workshops from './workshops'

export default function WorkshopsSection () {
  return (
    <section id='workshops' className='scrollAppear flex flex-col gap-5 scroll-m-24'>
      <div className='w-full'>
        <JapanHeader text='ワークショップ' />
        <h2>Workshops</h2>
      </div>
      <Workshops />
    </section>
  )
}