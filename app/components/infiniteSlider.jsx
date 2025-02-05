import { Marquee } from '@devnomic/marquee'
// if you copy ala shadcn, no need import css.
import '@devnomic/marquee/dist/index.css'

export default function InfiniteSlider () {
  return (
    <Marquee fade={true} pauseOnHover={true}>
      <div className='w-10 h-10 bg-slate-500'></div>
      <div className='w-10 h-10 bg-slate-500'></div>
      <div className='w-10 h-10 bg-slate-500'></div>
      <div className='w-10 h-10 bg-slate-500'></div>
      <div className='w-10 h-10 bg-slate-500'></div>
      <div className='w-10 h-10 bg-slate-500'></div>
      <div className='w-10 h-10 bg-slate-500'></div>
    </Marquee>
  )
}