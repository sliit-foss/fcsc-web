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
      <div className="flex flex-col xl:flex-row p-8 xl:p-12">
        <div className="relative group flex items-center justify-center xl:justify-end ">
          <Image
            className="rounded-2xl group-hover:opacity-80 transition-all ease-out duration-500"
            src={props.image}
            alt="SLIIT FCSC"
            quality={90}
            layout="intrinsic"
            placeholder="blur"
          />
        </div>
        <div className="p-10 pb-0 px-0 xl:px-10 w-full justify-items-center xl:justify-items-start">
          <h1 className="font-semibold text-3xl text-center xl:text-left px-0">
            {props.title}
          </h1>
          <h1 className="my-5 mb-5 xl:mb-3 font-semibold text-xl text-center xl:text-left">
            {props.subtitle}
          </h1>
          <div className="flex flex-row items-center place-content-center xl:place-content-start">
            <ImCalendar />
            <h1 className="ml-2 font-semibold text-lg text-center xl:text-left">
              {props.date}
            </h1>
          </div>
          <p className="my-10 text-center xl:text-left">{props.description}</p>
          <div className="flex flex-col xl:flex-row items-center place-content-center xl:place-content-between">
            <h1 className="font-semibold text-lg text-center xl:text-left">
              BY SLIIT FCSC COMMUNITY
            </h1>
            <h1 className="font-semibold text-lg text-center xl:text-left">
              FCSC
            </h1>
          </div>
        </div>
      </div>
    </a>
  )
}
