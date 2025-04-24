import Workshops from './workshops'

export default function WorkshopsSection () {
  return (
    <section id='workshops' className='scrollAppear flex flex-col gap-5 scroll-m-24'>
      <div className='w-full'>
        <h2>Workshops</h2>
      </div>
      <Workshops />
    </section>
  )
}