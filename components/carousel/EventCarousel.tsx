import React, { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Aos from 'aos'
import 'aos/dist/aos.css'

//components
import CarouselIndicatorBar from './CarouselIndicatorBar'

interface EventCarouselProps {
  title: string
  eventData: Array<JSX.Element>
}

export default function EventCarousel(props: EventCarouselProps):JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  const onEventChange = function (currentIndex: number) {
    setCurrentCarouselIndex(currentIndex)
  }
  const carouselWidth = 10 / 12 //of screen width
  return (
    <div
      data-aos="fade-up"
      className="flex px-5 py-14 md:py-24 items-center justify-center flex-col"
    >
      <h1 className="title-font sm:text-4xl text-3xl mb-14 font-medium text-gray-900">
        {props.title}
      </h1>
      <Carousel
        className="shadow-xl hover:shadow-2xl rounded-3xl transition ease-in duration-200"
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
        width={(carouselWidth * 100).toString() + 'vw'}
        onChange={onEventChange}
      >
        {props.eventData}
      </Carousel>
      <CarouselIndicatorBar
        eventCount={props.eventData.length}
        currentIndex={currentCarouselIndex}
      />
    </div>
  )
}
