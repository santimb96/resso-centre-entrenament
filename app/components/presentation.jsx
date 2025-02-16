import Image from 'next/image'
import { CaretDown, Mouse } from './icons'
export default function Presentation () {
  return (
    <section className='min-h-[90vh] flex flex-col items-center justify-center gap-5'>
      <div className='relative flex flex-col items-center justify-start gap-5 h-full'>
        <picture>
          <Image className='profileImg' src='/img/test.webp' alt='Mario Martín, preparador físico' width={400} height={400} />
        </picture>
        <picture className='absolute bottom-0 landscape:bottom-0 bg-primary rounded-full'>
          <Image src='/img/pfisicLogo.png' alt='Logo' width={180} height={180} />
        </picture>
      </div>
      <div className='hidden md:flex flex-col items-center justify-center gap-1 mt-10'>
        <Mouse />
        <span className='animate-bounce'>
          <CaretDown />
        </span>
      </div>
    </section>
  )
}