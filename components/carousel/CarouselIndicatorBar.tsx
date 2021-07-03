import Image from 'next/image'
import { ImCalendar } from 'react-icons/im'

interface IndicatorProps {
  eventCount: number
  currentIndex: number
}

export default function CarouselIndicatorBar(props: IndicatorProps) {
  const selectedIndicatorCSS =
    'w-10 h-10 m-2 rounded-full hover:bg-orange-dark shadow hover:shadow-lg transition ease-in duration-200 bg-orange-dark'
  const unSelectedIndicatorCSS =
    'w-10 h-10 m-2 rounded-full hover:bg-orange-dark shadow hover:shadow-lg transition ease-in duration-200 bg-orange-light'

  function renderIndicator(isSelected: boolean,index:number) {
    return (
      <div
        className={isSelected ? selectedIndicatorCSS : unSelectedIndicatorCSS}
        key={index}
      ></div>
    )
  }

  //build indicator row
  let indicators = []
  for (let i = 0; i < props.eventCount; i++) {
    indicators.push(renderIndicator(i == props.currentIndex,i))
  }

  return <div className="flex flex-relative flex-wrap justify-center mt-6">{indicators}</div>
}
