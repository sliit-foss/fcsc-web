interface EventProps {
  key: string
  image: string
}

export default function Notice(props: EventProps): JSX.Element {
  return (
    <a>
      <div className="flex flex-col md:flex-row h-45vh mx-5 my-10 shadow-noOffset_thicker rounded-3xl">
        <div className="w-full h-45vh relative group flex items-center justify-end ">
          <img
            src={props.image}
            alt="Notice Image"
            className="w-full h-45vh object-cover rounded-3xl group-hover:opacity-80 transition-all ease-out duration-500"
          ></img>
        </div>
      </div>
    </a>
  )
}
