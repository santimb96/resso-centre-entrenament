import { Marquee } from '@devnomic/marquee'
// if you copy ala shadcn, no need import css.
import '@devnomic/marquee/dist/index.css'
import Image from 'next/image'

export default function InfiniteSlider ({ sponsors }) {
  return (
    <Marquee fade={true} pauseOnHover={true}>
      {sponsors.map((sponsor, index) => (
        <Image key={index} src={sponsor.image} alt={sponsor.name} width={sponsor.width} height={sponsor.height} />
      ))}
    </Marquee>
  )
}