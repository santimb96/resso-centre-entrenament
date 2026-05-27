import { WIDTH_LAYOUT } from '@/constants/vars'
import TitleSection from '../common/TitleSection'
import Workshops from './workshops'

export default function WorkshopsSection () {
  return (
    <section id='workshops' className='flex flex-col justify-center items-center bg-accent py-8 px-4'>
      <div className={`${WIDTH_LAYOUT} flex flex-col items-center gap-8`}>
        <TitleSection title='Workshops' />
        <Workshops />
      </div>
    </section>
  )
}
