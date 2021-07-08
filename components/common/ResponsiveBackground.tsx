import Image from 'next/image'

//images
import background1 from '../../public/shapes/1.png'

export default function ResponsiveBackground(): JSX.Element {
  return (
    <div>
      <div className="absolute h-full opacity-100 sm:opacity-0">
        <Image
          src={background1}
          alt="SLIIT FCSC"
          quality={90}
          layout="intrinsic"
          placeholder="blur"
          height="1300"
        />
      </div>
      <div className="absolute h-full opacity-0 sm:opacity-100 md:opacity-0">
        <Image
          src={background1}
          alt="SLIIT FCSC"
          quality={90}
          layout="intrinsic"
          placeholder="blur"
          height="1200"
        />
      </div>
      <div className="absolute h-full opacity-0 md:opacity-100 xl:opacity-0">
        <Image
          src={background1}
          alt="SLIIT FCSC"
          quality={90}
          layout="intrinsic"
          placeholder="blur"
          height="900"
        />
      </div>
      <div className="absolute h-full opacity-0 xl:opacity-100">
        <Image
          src={background1}
          alt="SLIIT FCSC"
          quality={90}
          layout="intrinsic"
          placeholder="blur"
          height="700"
        />
      </div>
    </div>
  )
}
