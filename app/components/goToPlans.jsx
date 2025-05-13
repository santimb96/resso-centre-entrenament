import { CheckBag } from './icons'

export default function GoToPlans() {
  return (
    <a href='#planes' className='z-50 fixed bottom-5 self-center bg-green-100 border border-secondary rounded-full px-5 py-2.5 text-secondary hover:scale-110 duration-150 ease-in-out hover:bg-accent hover:text-primary hover:border-primary flex justify-center items-center gap-2.5 group'>
      {/* <div className="min-h-2.5 min-w-2.5 rounded-full bg-red-700 absolute top-2.5 left-4 border border-primary" /> */}
      <span className='group-hover:animate-bouncing group-hover:animate-infinite duration-150 ease-in-out min-w-6'><CheckBag /></span>
      Ver planes
    </a>
  )
}