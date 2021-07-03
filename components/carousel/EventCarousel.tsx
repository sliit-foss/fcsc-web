import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

//components
import Event from './Event'
import CarouselIndicatorBar from './CarouselIndicatorBar'

//images
import foss from '../../public/foss.png'

const events = [
  <Event
    image={foss}
    title="SEMESTER FINAL EXAMINATION - 2021"
    subtitle="Study Support Sessions IWT"
    date="03-06-2021"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  />,
  <Event
    image={foss}
    title="Event 2 Title"
    subtitle="Event 2 Subtitle"
    date="08-08-2021"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  />,
  <Event
    image={foss}
    title="Event 3 Title"
    subtitle="Event 3 Subtitle"
    date="15-09-2021"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  />,
  <Event
    image={foss}
    title="Event 4 Title"
    subtitle="Event 4 Subtitle"
    date="19-09-2021"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt in culpa qui officia deserunt mollit tur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt inanim id est laborum"
  />,
  <Event
    image={foss}
    title="Event 5 Title"
    subtitle="Event 5 Subtitle"
    date="10-10-2021"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modtur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt ino consequat. Duis nulla pariatur. Eident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  />,
  <Event
    image={foss}
    title="Event 5 Title"
    subtitle="Event 5 Subtitle"
    date="10-10-2021"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modtur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt ino consequat. Duis nulla pariatur. Eident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  />,
]
export default function EventCarousel() {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  const onEventChange = function (currentIndex: number) {
    setCurrentCarouselIndex(currentIndex)
  }

  return (
    <div className="flex px-5 py-24 items-center justify-center flex-col">
      <h1 className="title-font sm:text-4xl text-3xl mb-14 font-medium text-gray-900">
        UPCOMING EVENTS
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
        width="75vw"
        onChange={onEventChange}
      >
        {events}
      </Carousel>
      <CarouselIndicatorBar
        eventCount={events.length}
        currentIndex={currentCarouselIndex}
      />
    </div>
  )
}
