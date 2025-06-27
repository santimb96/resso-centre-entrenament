
import { PACK_LIST } from '@/constants/vars'
import { workSans } from '@/lib/fonts'
import TextComponent from './common/TextComponent'
import { CheckCircle, CloseCircle } from './icons'

export default function PackList () {
  return (
    <>
      <TextComponent text={'Estos son los planes que están a disposición: <i>iniciación, avanzado y profesional</i>'} textColor='accent' />
      <div className='mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-center'>
        {PACK_LIST.map((pack, index) => (
          <Pack key={index + pack.title} pack={pack} />
        ))}
      </div>
    </>
  )
}

function Pack ({pack}) {
  const { title, includes, notIncludes, price, link, discount, originalPrice, popular, premium } = pack
  return (
    <div className={`${premium ? 'text-primary' : 'text-secondary'} rounded-xl h-full shadow-custom min-h-content w-full flex flex-col gap-5 px-5 py-10 ${premium ? 'bg-secondary' : 'bg-primary'}`}>
      <div className='flex justify-between items-center'>
        <h3 className={`${popular && 'text-accent'} ${workSans.className} font-extrabold text-[2rem]`}>{title}</h3>
        {popular && <div className='text-[1rem] py-1.5 px-5 rounded-full border border-accent text-accent bg-green-100/25 font-bold'>Popular</div>}
      </div>
      <div className={`flex justify-start items-end gap-2.5 ${premium && '!text-primary'} ${popular ? 'text-accent' : 'text-secondary'}`}>
        <div className='flex justify-start items-start'>
          <h2 className={`text-6xl ${workSans.className} font-extrabold`}>
            {price}
          </h2>
          <span className='text-xl font-bold'>€</span>
        </div>
        <div className='flex flex-col justify-start items-start gap-0.5'>
          {discount && <span className='line-through decoration-red-700 opacity-70 text-[1.5rem]'>{originalPrice}</span>}
          <span className='text-[0.75rem] mb-1.5'>Pago mensual</span>
        </div>
      </div>
      <a aria-label={`Apúntate al plan ${title}`} href={link} target='_blank' className={`bg-primary ${popular ? 'hover:bg-accent border !border-accent hover:!border-secondary text-accent' : 'hover:bg-accent border border-secondary'} ${premium && 'text-secondary hover:border-primary'}text-xl font-extrabold hover:text-primary transition-all duration-200 ease-in-out border border-secondary py-2.5 rounded-full text-center w-full`}>Elegir plan</a>
      <div className='flex flex-col justify-start items-start gap-2.5'>
        <div className='flex flex-col justify-start items-start gap-2.5'>
          {includes.map((include, index) => {
            return (
              <div key={index + include} className='flex justify-start items-start gap-2.5'>
                <span className='text-green-400 min-w-5 mt-0.5'>
                  <CheckCircle size={20}/>
                </span>
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
                  <span className='text-red-400 min-w-5 mt-0.5'>
                    <CloseCircle size={20}/>
                  </span>
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