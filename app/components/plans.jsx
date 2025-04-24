import PackList from './packList'

export default function Plans() {
  return (
    <section id='planes' className='scrollAppear flex flex-col gap-5 scroll-m-24'>
      <div className='w-full'>
        <h2>Planes</h2>
      </div>
      <PackList />
    </section>
  )
}