import { WIDTH_LAYOUT } from '@/constants/vars'
import TitleSection from './common/TitleSection'
import PackList from './packList'

export default function Plans() {
  return (
    <section id='planes' className='flex flex-col justify-center items-center gap-5 scroll-m-24 px-2.5 py-5'>
      <div className={WIDTH_LAYOUT}>
        <TitleSection title='Planes' color='accent' />
        <div className='mt-5'>
          <PackList />
        </div>
      </div>
    </section>
  )
}
