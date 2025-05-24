
import { PACK_LIST } from '@/constants/vars'
import { workSans } from '../lib/fonts'
import TextComponent from './common/TextComponent'
import { CheckCircle, CloseCircle } from './icons'

export default function PackList () {
  return (
    <>
      <TextComponent text={'Aquí podrás encontrar los que tengo a disposición: <i className="underline">iniciación, avanzado y profesional</i>'} textColor='accent' />
      <div className='mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-center'>
        {PACK_LIST.map((pack, index) => (
          <Pack key={index + pack.title} pack={pack} />
        ))}
      </div>
    </>
  )
}

function Pack ({pack}) {
  const { title, includes, notIncludes, price, link, discount, popular, premium } = pack
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
        <span className='text-[0.75rem] mb-1.5'>Pago mensual</span>
      </div>
      {discount && <h6 className='line-through'>{price - price/2}</h6>}
      <a href={link} target='_blank' className={`bg-primary ${popular ? 'hover:bg-accent border !border-accent hover:!border-secondary text-accent' : 'hover:bg-accent border border-secondary'} ${premium && 'text-secondary hover:border-primary'} ${workSans.className} text-xl font-extrabold hover:text-primary transition-all duration-200 ease-in-out border border-secondary py-2.5 rounded-full text-center w-full`}>¡APÚNTATE!</a>
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