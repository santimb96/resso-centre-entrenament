import { WIDTH_LAYOUT } from '@/constants/vars'
import TitleSection from './common/TitleSection'
import PackList from './packList'

export default function Plans() {
  return (
    <section id='planes' className='flex flex-col justify-center items-center py-8 px-4'>
      <div className={`${WIDTH_LAYOUT} flex flex-col items-center gap-8`}>
        <TitleSection title='Planes' color='accent' />
        <PackList />
      </div>
    </section>
  )
}
