
import { PACK_LIST } from '@/constants/vars'
import { workSans } from '@/lib/fonts'
import TextComponent from './common/TextComponent'

export default function PackList () {
  return (
    <>
      <TextComponent text={'Estos son los planes que están a disposición: <b>Iniciación</b>, <b>Avanzado</b> y <b>Élite</b>'} textColor='accent' />
      <div className='mt-10 pt-5 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-center'>
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
      <div className={`flex justify-start items-end gap-2.5 ${premium && '!text-primary'} ${popular ? 'text-accent' : 'text-secondary'}`}>
        <div className='flex justify-start items-end'>
          <h2 className={`text-6xl ${workSans.className} font-extrabold`}>
            {price}
          </h2>
          <span className='text-3xl font-bold mb-1'>€</span>
        </div>
        <div className='flex flex-col justify-start items-start gap-0.5'>
          {discount && <span className='line-through decoration-red-700 opacity-70 text-[1.5rem]'>{originalPrice}</span>}
          <span className='text-sm mb-1.5'>Pago mensual</span>
        </div>
      </div>
      <a
        aria-label={`Apúntate al plan ${title}`}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className={
          popular
            ? 'bg-accent text-primary text-xl font-extrabold hover:shadow-[0_0_8px_rgba(85,179,183,0.5)] duration-150 ease-in-out py-2.5 rounded-full text-center w-full'
            : `bg-primary text-xl font-extrabold hover:bg-accent hover:text-primary transition-all duration-200 ease-in-out border py-2.5 rounded-full text-center w-full ${premium ? 'border-primary text-secondary' : 'border-secondary text-secondary'}`
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
                  <p className='opacity-50 font-medium'>{notInclude}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
