import Image from 'next/image'

export default function InfiniteSlider({ sponsors }) {
  return (
    <div className='marquee-container'>
      <div className='marquee-track'>
        {sponsors.map((sponsor, index) => (
          <Image key={index} src={sponsor.image} alt={sponsor.name} width={sponsor.width} height={sponsor.height} />
        ))}
        {sponsors.map((sponsor, index) => (
          <Image key={`dup-${index}`} src={sponsor.image} alt={sponsor.name} width={sponsor.width} height={sponsor.height} />
        ))}
      </div>
    </div>
  )
}