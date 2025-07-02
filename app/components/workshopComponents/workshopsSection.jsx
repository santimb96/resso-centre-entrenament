import { WIDTH_LAYOUT } from '@/constants/vars'
import TitleSection from '../common/TitleSection'
import Workshops from './workshops'

export default function WorkshopsSection () {
  return (
    <section id='workshops' className=' flex flex-col justify-center items-center gap-5 scroll-m-10 bg-accent py-5 px-2.5'>
      <div className={WIDTH_LAYOUT}>
        <TitleSection title='Workshops' />
        {/* <TextComponent text='Aquí podrás encontrar los próximos talleres que tendrán lugar en el centro' textColor='primary' /> */}
        <div className='my-10'>
          <Workshops />
        </div>
      </div>
    </section>
  )
}
