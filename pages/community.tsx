import Image from 'next/image'
import background from '../public/shapes/1.png'
import calendar from '../public/community/communityHeroSectVector.svg'

export default function Community(): JSX.Element {

  return <div className="justify-items-center ">
    <h1
      className="title-font sm:text-4xl text-3xl font-medium text-white w-3/4 absolute ml-auto mr-auto left-0 right-0 p-0 md:py-14 z-20"
      style={{ marginTop: '8%', width: '77%' }}
    >
      Faculty of Computing <br/>
      Students Community
    </h1>
    <Image
      className="transition-all ease-out duration-500"
      src={background}
      alt="SLIIT FCSC"
      quality={90}
      layout="responsive"
      placeholder="blur"
      height="700"
    />

    {/*<div className="flex flex-col-reverse md:flex-row pb-0 md:pb-6 place-content-center items-center">
      <div className="flex flex-col w-full md:w-1/2 place-content-center">
        <h1 className="font-bold text-2xl text-center md:text-left">
          History
        </h1>
        <p className="mt-2 text-center md:text-left">
          Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed modtur adipiscing elit,
          sed modo consequat. Duis nulla pariatur. Eident, sunt intur
          adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident,
          sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur.
          Eident, sunt ino consequat. Duis nulla pariatur. Eident, sunt in
          culpa qui officia deserunt mollit anim id est laborum ipiscing elit,
          sed modtur adipiscing elit, sed modo consequat. Duis nulla pariatur.
          Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla
          pariatur. Eident, sunt intur adipiscing elit, sed modo consequat.
          Duis nulla pariatur. Eident, sunt ino consequat. Duis nulla
          pariatur. Eident
        </p>
      </div>
      <div className="lg:absolute lg:top-48 lg:right-48 w-3/4 md:w-4/12">
        <Image
          className=""
          src={calendar}
          alt="SLIIT FCSC"
          quality={90}
          layout="intrinsic"
        />
      </div>
    </div>*/}
  </div>
}