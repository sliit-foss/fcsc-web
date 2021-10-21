interface props {
  position?: string
}
const HeaderImage = ({ position }: props): JSX.Element => {
  return (
    <div
      className={`w-full h-200 sm:h-300 md:h-400 xl:h-600 ${position}`}
      style={{
        background:
          'url("/shapes/1.svg#svgView(preserveAspectRatio(none))") center center no-repeat',
        backgroundSize: '100vw 100%',
      }}
    ></div>
  )
}

export default HeaderImage
