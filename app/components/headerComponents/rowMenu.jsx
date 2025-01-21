import Link from 'next/link'

export default function RowMenu () {
  return (
    <nav className='rowNav w-full'>
      <div className='flex flex-row justify-end gap-5'>
        <Link href='#quien-soy'>¿Quién soy?</Link>
        <Link href='#workshops'>Workshops</Link>
        <Link href='#patrocinadores'>Patrocinadores</Link>
      </div>
    </nav>
  )
}