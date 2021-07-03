import Image from 'next/image'
import { ImCalendar } from 'react-icons/im'

interface EventProps {
  key: string
  image: StaticImageData
  title: string
  subtitle: string
  date: string
  description: string
}

export default function Footer(props: EventProps) {
  return (
    <a>
      <div className="flex flex-col md:flex-row p-12">
        <div className="relative group flex items-center justify-end max-w-md mx-auto overflow-hidden shadow-md rounded-2xl ">
          <Image
            className="rounded-2xl"
            src={props.image}
            alt="SLIIT FOSS"
            quality={90}
            layout="intrinsic"
            placeholder="blur"
          />
          <div className="absolute bottom-0 h-full w-full opacity-0 group-hover:opacity-20 transition-all ease-out duration-500 bg-gradient-to-r from-blue_fcsc via-orange to-blue_fcsc"></div>
        </div>
        <div className="p-10 px-0 md:px-10 w-full md:w-3/4  justify-items-center md:justify-items-start ">
          <h1 className="font-semibold text-3xl text-center md:text-left px-0">
            {props.title}
          </h1>
          <h1 className="my-5 mb-5 md:mb-3 font-semibold text-xl text-center md:text-left">
            {props.subtitle}
          </h1>
          <div className="flex flex-row items-center place-content-center md:place-content-start">
            <ImCalendar />
            <h1 className="ml-2 font-semibold text-lg text-center md:text-left">
              {props.date}
            </h1>
          </div>
          <p className="my-10 text-center md:text-left">{props.description}</p>
          <div className="flex flex-col md:flex-row items-center place-content-center md:place-content-between">
            <h1 className="font-semibold text-lg text-center md:text-left">
              BY SLIIT FCSC COMMUNITY
            </h1>
            <h1 className="font-semibold text-lg text-center md:text-left">
              FCSC
            </h1>
          </div>
        </div>
      </div>
    </a>
  )
}
