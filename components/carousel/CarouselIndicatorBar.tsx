interface IndicatorProps {
  count: number
  currentIndex: number
}

export default function CarouselIndicatorBar(
  props: IndicatorProps
): JSX.Element {
  const selectedIndicatorCSS =
    'w-10 h-10 m-2 rounded-full hover:bg-orange-dark shadow hover:shadow-lg transition ease-in duration-200 bg-orange-dark'
  const unSelectedIndicatorCSS =
    'w-10 h-10 m-2 rounded-full hover:bg-orange-dark shadow hover:shadow-lg transition ease-in duration-200 bg-orange-light'

  function renderIndicator(isSelected: boolean, index: number) {
    return (
      <div
        className={isSelected ? selectedIndicatorCSS : unSelectedIndicatorCSS}
        key={index}
      ></div>
    )
  }

  //build indicator row
  const indicators: JSX.Element[] = []
  for (let i = 0; i < props.count; i++) {
    indicators.push(renderIndicator(i == props.currentIndex, i))
  }

  return (
    <div className="flex flex-relative flex-wrap justify-center mt-6">
      {indicators}
    </div>
  )
}
