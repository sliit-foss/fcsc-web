interface IndicatorProps {
  count: number
  currentIndex: number
}

export default function CarouselIndicatorBar(
  props: IndicatorProps
): JSX.Element {
  const selectedIndicatorCSS =
    'w-8 h-8 m-2 rounded-full hover:bg-fcsc-orange shadow hover:shadow-lg transition ease-in duration-200 bg-fcsc-orange'
  const unSelectedIndicatorCSS =
    'w-8 h-8 m-2 rounded-full hover:bg-fcsc-orange shadow hover:shadow-lg transition ease-in duration-200 bg-fcsc-orange_light'

  function renderIndicator(isSelected: boolean, index: number) {
    return (
      <div
        className={isSelected ? selectedIndicatorCSS : unSelectedIndicatorCSS}
        key={index}
      />
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
