import Image from 'next/image'

export default function Presentation () {
  return (
    <section className='flex flex-col items-center justify-start gap-5 min-h-[90vh]'>
      <picture className='relative'>
        <Image className='profileImg' src='/img/test.webp' alt='Mario Martín, preparador físico' width={400} height={400} />
      </picture>
      <picture className='absolute top-[60vh] bg-[var(--color-primary)] rounded-full'>
        <Image src='/img/pfisicLogo.png' alt='Logo' width={180} height={180} />
      </picture>
    </section>
  )
}