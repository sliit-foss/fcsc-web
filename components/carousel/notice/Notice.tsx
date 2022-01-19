interface EventProps {
  key: string
  image: string
  description: string
  createdAt: string
}

export default function Notice(props: EventProps): JSX.Element {
  return (
    <a>
      <div className="flex flex-col md:flex-row h-45vh mx-5 my-10 shadow-noOffset_lighter rounded-3xl">
        <div className="w-full h-45vh relative group flex items-center justify-end ">
          <img
            src={props.image}
            alt="Notice Image"
            className="w-full h-45vh object-cover rounded-3xl group-hover:opacity-80 transition-all ease-out duration-500"
          ></img>
          <div className="w-full absolute bottom-0 z-40 font-semibold text-white text-2xl rounded-b-3xl py-4 text-center bg-gray-900 opacity-70">
            <div className="text-lg md:text-xl mx-3">{props.description}</div>
            <div className="text-xs font-normal group-hover:text-fcsc-orange mt-1">
              {new Date(
                new Date(props.createdAt).getTime() +
                  new Date().getTimezoneOffset() * -60 * 1000
              ).toLocaleString()}
            </div>
          </div>
          <div className="w-full absolute bottom-0 z-40 font-semibold text-white text-2xl rounded-b-3xl py-4 text-center">
            <div className="text-lg md:text-xl mx-3">{props.description}</div>
            <div className="text-xs font-normal group-hover:text-fcsc-orange mt-1">
              {new Date(
                new Date(props.createdAt).getTime() +
                  new Date().getTimezoneOffset() * -60 * 1000
              ).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
