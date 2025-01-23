'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Slider ({ children }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {children}
    </div>
  )
}