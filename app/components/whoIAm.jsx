import { PERSONAL_INFO } from '@/constants/vars'

export default function WhoIAm() {
  return (
    <section id='quien-soy' className='scrollAppear flex flex-col gap-5 scroll-m-24'>
      <div className='w-full'>
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