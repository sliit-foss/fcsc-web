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

export default function Event(props: EventProps): JSX.Element {
  return (
    <a>
      <div className="flex flex-col md:flex-row p-8 md:p-12">
        <div className="relative group flex items-center justify-end ">
          <Image
            className="rounded-2xl group-hover:opacity-80 transition-all ease-out duration-500"
            src={props.image}
            alt="SLIIT FCSC"
            quality={90}
            layout="intrinsic"
            placeholder="blur"
          />
        </div>
        <div className="p-10 px-0 md:px-10 w-full justify-items-center md:justify-items-start ">
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
