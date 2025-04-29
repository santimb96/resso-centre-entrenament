import { Marquee } from '@devnomic/marquee'
// if you copy ala shadcn, no need import css.
import '@devnomic/marquee/dist/index.css'
import SVGTest from './common/SVGTest'

export default function InfiniteSlider () {
  return (
    <Marquee fade={true} pauseOnHover={true}>
      <SVGTest />
      <SVGTest />
      <SVGTest />
      <SVGTest />
      {/* <div className='w-10 h-10 bg-slate-500'></div>
      <div className='w-10 h-10 bg-slate-500'></div>
      <div className='w-10 h-10 bg-slate-500'></div>
      <div className='w-10 h-10 bg-slate-500'></div>
      <div className='w-10 h-10 bg-slate-500'></div>
      <div className='w-10 h-10 bg-slate-500'></div>
      <div className='w-10 h-10 bg-slate-500'></div> */}
    </Marquee>
  )
}