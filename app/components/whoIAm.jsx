import { PERSONAL_INFO } from '@/constants/vars'
import JapanHeader from './japanHeader'

export default function WhoIAm() {
  return (
    <section id='quien-soy' className='flex flex-col gap-5 scroll-m-24'>
      <div className='w-full'>
        <JapanHeader text='私は誰?' />
        <h2>¿Quién soy?</h2>
      </div>
      <p 
        className='m-w-[75ch] whitespace-pre-wrap'
        dangerouslySetInnerHTML={{ __html: PERSONAL_INFO.description }}
      >
      </p>
    </section>
  )
}