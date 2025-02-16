'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Slider ({ children }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 5,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {children}
    </div>
  )
}