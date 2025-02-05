export default function Divider () {
  return (
    <div className='flex min-h-2 w-full items-center'>
      <hr className='h-[2px] w-full border-t-0' style={{ background: 'linear-gradient(to right, transparent 0%, var(--color-secondary) 50%, transparent 100%)'}} />
    </div>
  )
} 