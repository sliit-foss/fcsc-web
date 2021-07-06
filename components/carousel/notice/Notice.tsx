import Image from 'next/image'

interface EventProps {
  key: string
  image: StaticImageData
}

export default function Notice(props: EventProps): JSX.Element {
  return (
    <a>
      <div className="flex flex-col md:flex-row mx-5 my-10 shadow-noOffset_thicker rounded-3xl">
        <div className="relative group flex items-center justify-end ">
          <Image
            className="rounded-3xl group-hover:opacity-80 transition-all ease-out duration-500"
            src={props.image}
            alt="SLIIT FCSC"
            quality={90}
            layout="intrinsic"
            placeholder="blur"
          />
        </div>
      </div>
    </a>
  )
}
