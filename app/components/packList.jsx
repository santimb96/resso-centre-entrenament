
import { PACK_LIST } from '@/constants/vars'
import { CheckCircle, CloseCircle } from './icons'

export default function PackList () {
  return (
    <>
      <p className='mb-5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nesciunt laboriosam obcaecati, eius iste ratione, esse similique ab autem quibusdam animi id quidem fugit ducimus repellat! Ullam fugit in deleniti.</p>
      <div className='grid grid-cols-1 gap-5 2xl:grid-cols-3 2xl:items-center'>
        {PACK_LIST.map((pack, index) => (
          <Pack key={index + pack.title} pack={pack} />
        ))}
      </div>
    </>
  )
}

function Pack ({pack}) {
  const { title, description, includes, notIncludes, price, link, discount, popular } = pack
  return (
    <div className={`rounded-xl h-full shadow-sm border border-[var(--color-secondary)]/50 min-h-content w-full flex flex-col gap-5 p-5 bg-primary ${popular && 'xl:scale-105 '}`}>
      <div className='flex justify-between items-center'>
        <h3 className={`${popular && 'text-purple-600'}`}>{title}</h3>
        {popular && <div className='text-[14px] py-1 px-5 rounded-full border border-purple-800 text-purple-800 bg-purple-100 font-bold animate-pulse'>Popular</div>}
      </div>
      <div className={`flex justify-start items-end gap-2.5 ${popular ? 'text-purple-800' : 'text-blue-900'}`}>
        <div className='flex justify-start items-start'>
          <h1 className='!text-6xl'>
            {price}
          </h1>
          <span className='text-xl font-bold'>€</span>
        </div>
        <span className='text-[12px] mb-1.5 opacity-50'>*Pago mensual</span>
      </div>
      <p className='opacity-80'>{description}</p>
      {discount && <h6 className='line-through'>{price - price/2}</h6>}
      <a href={link} target='_blank' className={`mt-auto bg-primary ${popular ? 'hover:bg-purple-600 hover:border-purple-600 border border-purple-600 text-purple-700' : 'hover:bg-blue-900 hover:border-blue-900 border border-[var(--color-secondary)]'}  hover:text-primary transition-all duration-200 ease-in-out border border-[var(--color-secondary)] py-2.5 px-5 rounded-full text-center w-full font-semibold`}>Únete ahora</a>
      <div className='flex flex-col justify-start items-start gap-2.5'>
        <div className='flex flex-col justify-start items-start gap-2.5'>
          {includes.map((include, index) => {
            return (
              <div key={index + include} className='flex justify-start items-center gap-2.5'>
                <span className='text-green-400 min-w-5'>
                  <CheckCircle size={18}/>
                </span>
                <p className='opacity-80'>{include}</p>
              </div>
            )
          })}
        </div>
        {notIncludes.length !== 0 && (
          <div className='flex flex-col justify-start items-start gap-2.5'>
            {notIncludes.map((notInclude, index) => {
              return (
                <div key={index + notInclude} className='flex justify-start items-center gap-2.5'>
                  <span className='text-red-400 min-w-5'>
                    <CloseCircle size={18}/>
                  </span>
                  <p className='opacity-20'>{notInclude}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}