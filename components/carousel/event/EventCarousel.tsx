import React, { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Aos from 'aos'
import 'aos/dist/aos.css'

import CarouselIndicatorBar from '../CarouselIndicatorBar'

interface EventCarouselProps {
  title: string
  eventData: Array<JSX.Element>
}

export default function EventCarousel(props: EventCarouselProps): JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  const onEventChange = function (currentIndex: number) {
    setCurrentCarouselIndex(currentIndex)
  }
  return (
    <div
      data-aos="fade-up"
      className="flex px-5 py-14 md:py-24 items-center justify-center flex-col"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        {props.title}
      </h1>
      <Carousel
        className="shadow-xl hover:shadow-2xl rounded-3xl transition ease-in duration-200 w-10/12 bg-white"
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
        infiniteLoop={true}
        emulateTouch={true}
        swipeable={true}
        onChange={onEventChange}
      >
        {props.eventData}
      </Carousel>
      <CarouselIndicatorBar
        count={props.eventData.length}
        currentIndex={currentCarouselIndex}
      />
    </div>
  )
}
