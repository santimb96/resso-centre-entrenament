import Image from 'next/image'
import TextComponent from '../common/TextComponent'

export default function EmptyWorkshopsMessage({ text, color }) {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center md:gap-10">
      <Image title='No hay talleres disponibles' src='/img/workshops/workshopDefault.webp' className='grayscale contrast-125 rounded-xl md:w-[750px]' width={500} height={500} alt='No hay talleres disponibles' />
      <div className='w-full md:w-1/2'>
        <TextComponent text={text} textColor={color} textAlign='text-center md:text-left' />
      </div>
    </div>
  )
}