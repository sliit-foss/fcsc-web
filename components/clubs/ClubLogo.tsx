import Image from 'next/image'

interface logoProps {
  image: StaticImageData
}

export default function ClubLogo(props: logoProps): JSX.Element {
  return (
  
      <Image
        className="hover:opacity-80 transition-all ease-out duration-500"
        src={props.image}
        alt="SLIIT FCSC"
        quality={90}
        layout="intrinsic"
        placeholder="blur"
      />
 
  )
}
