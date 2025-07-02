import { SPONSORS_LIST } from '@/constants/vars'
import Image from 'next/image'
import Link from 'next/link'
import TextComponent from './common/TextComponent'
import TitleSection from './common/TitleSection'

export default function Sponsors() {

  return (
    <section id='patrocinadores' className=' flex flex-col justify-center items-center gap-5 scroll-m-10 px-2.5'>
      <div className='w-full flex flex-col justify-center items-center mt-5 md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]'>
        <TitleSection title='Patrocinadores' color='accent' />
        <TextComponent text='Colaboran con nosotros:' textColor='accent'  />
        <div className='w-full flex flex-wrap justify-center items-center gap-10 mb-5'>
          {SPONSORS_LIST.map((sponsor, index) => (
            sponsor.href === '#' ? (
              <Image title={sponsor.name} className='opacity-60 grayscale max-w-[100px] md:max-w-[150px] lg:max-w-none' key={index + sponsor.name} src={sponsor.image} alt={sponsor.name} width={sponsor.width} height={sponsor.height} />
            ) : (
              <Link key={index + sponsor.name} href={sponsor.href} target='_blank'>
                <Image title={sponsor.name} className='opacity-60 grayscale max-w-[100px] md:max-w-[150px] lg:max-w-none' src={sponsor.image} alt={sponsor.name} width={sponsor.width} height={sponsor.height} />
              </Link>
            )
          ))}
        </div>
        {/* <div className='w-full hidden lg:!flex justify-center items-center'>
          <div className='w-full'>
            <InfiniteSlider sponsors={SPONSORS_LIST} />
          </div>
        </div> */}
      </div>
    </section>
  )
}