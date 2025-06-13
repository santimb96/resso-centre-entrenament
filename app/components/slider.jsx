'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'

export default function Slider ({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slides: {
      perView: 1,
      spacing: 5,
    },
    slideChanged (slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created () {
      setLoaded(true)
    },
  })

  return (
    <div className='w-full flex-col justify-center items-center gap-2.5'>
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>
      {loaded && instanceRef.current && (
        
        <div className='mt-5 flex justify-center items-center h-min gap-10'>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} />

          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  title={`Ir al workshop ${idx + 1}`}
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  } }
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                ></button>
              )
            })}
          </div>
          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()} />
        </div>  
      )
      }
    </div>
  )
}

function Arrow (props) {
  const disabled = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={`arrow textShadow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}