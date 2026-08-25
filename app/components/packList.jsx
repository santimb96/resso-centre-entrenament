
import { PACK_LIST } from '@/constants/vars'
import { workSans } from '@/lib/fonts'
import TextComponent from './common/TextComponent'

export default function PackList () {
  return (
    <>
      <TextComponent text={'Estos son los planes que están a disposición: <b>Iniciación</b>, <b>Avanzado</b> y <b>Élite</b>'} textColor='accent' textAlign='text-center' margin='my-0' />
      <div className='w-full mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-center'>
        {PACK_LIST.map((pack, index) => (
          <Pack key={index + pack.title} pack={pack} />
        ))}
      </div>
    </>
  )
}

function Pack ({pack}) {
  const { title, includes, notIncludes, price, link, discount, originalPrice, popular, premium } = pack

  const borderClass = popular
    ? 'border-accent'
    : premium
      ? 'border-transparent'
      : 'border-gray-200'

  return (
    <div className={`relative ${premium ? 'text-primary bg-secondary' : 'text-secondary bg-primary'} rounded-xl h-full min-h-content w-full flex flex-col gap-5 px-5 py-10 border ${borderClass}`}>
      {popular && (
        <div className='absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.8rem] py-1 px-4 rounded-full border border-accent text-accent bg-primary font-bold'>
          Popular
        </div>
      )}
      <div className='flex items-center'>
        <h3 className={`${popular && 'text-accent'} ${workSans.className} font-extrabold text-[2rem]`}>{title}</h3>
      </div>
      <div className={`flex justify-start items-end gap-2.5 ${premium && 'text-primary!'} ${popular ? 'text-accent' : 'text-secondary'}`}>
        <div className='flex justify-start items-end'>
          <div className={`text-6xl ${workSans.className} font-extrabold`} aria-hidden='true'>
            {price}
          </div>
          <span className='text-3xl font-bold pb-[8.5px]'>€</span>
        </div>
        <div className='flex flex-col justify-end items-start gap-0.5'>
          {discount && <span className='line-through decoration-red-700 opacity-70 text-[1.5rem]'>{originalPrice}</span>}
          <span className='text-sm pb-3'>Pago mensual</span>
        </div>
      </div>
      <a
        aria-label={`Apúntate al plan ${title}`}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className={
          popular
            ? 'bg-accent text-primary text-xl font-extrabold py-2.5 px-5 rounded-lg text-center w-full border border-accent hover:scale-105 duration-150 ease-in-out'
            : `bg-primary text-xl font-extrabold py-2.5 px-5 rounded-lg text-center w-full border border-secondary hover:scale-105 hover:bg-secondary hover:text-primary hover:border-primary duration-150 ease-in-out ${premium ? 'border-primary text-secondary' : 'text-secondary'}`
        }
      >
        Elegir plan
      </a>
      <div className='flex flex-col justify-start items-start gap-2.5'>
        <div className='flex flex-col justify-start items-start gap-2.5'>
          {includes.map((include, index) => {
            return (
              <div key={index + include} className='flex justify-start items-start gap-2.5'>
                <p className='font-medium'>{include}</p>
              </div>
            )
          })}
        </div>
        {notIncludes.length !== 0 && (
          <div className='flex flex-col justify-start items-start gap-2.5'>
            {notIncludes.map((notInclude, index) => {
              return (
                <div key={index + notInclude} className='flex justify-start items-start gap-2.5'>
                  <p className='opacity-50 font-medium line-through'>{notInclude}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
