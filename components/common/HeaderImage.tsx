interface props {
  height: string
  position?: string
}
const HeaderImage = ({ height,position }: props): JSX.Element => {
  return (
    <div
      className={`w-full ${height} ${position}`}
      style={{
        background:
          'url("/shapes/1.svg#svgView(preserveAspectRatio(none))") center center no-repeat',
        backgroundSize: '100vw 100%',
      }}
    ></div>
  )
}

export default HeaderImage
