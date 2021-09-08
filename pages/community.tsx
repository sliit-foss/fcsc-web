import Image from 'next/image'
import background from '../public/shapes/1.png'
import communityVector from '../public/community/communityHeroSectVector.svg'
import sliitImage from '../public/community/smallImage.svg'
import sliitImageLarge from '../public/community/largeImage.svg'

export default function Community(): JSX.Element {
  return (
    <div className="justify-items-center ">
      <h1 className="title-font sm:text-2xl lg:text-4xl md:text-3xl md:ml-10 font-medium text-white w-77% absolute ml-auto mr-auto mt-8% left-0 right-0 p-0 md:py-14 z-20">
        Faculty of Computing <br />
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

      <div
        className="lg:absolute lg:top-48 lg:left-1/2
    md:absolute md:top-96 md:left-96 relative ml-10 mb-8 w-3/4 md:w-4/12"
      >
        <Image
          src={communityVector}
          alt="SLIIT FCSC"
          quality={90}
          layout="intrinsic"
        />
      </div>

      <div className="grid grid-rows-1 pl-10 pr-10 pb-5">
        <div className="grid-cols-1 lg:w-1/2 md:w-1/2">
          <h1 className="font-bold text-2xl text-center md:text-left">
            History
          </h1>
          <p className="mt-2 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modtur
            adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident,
            sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur.
            Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla
            pariatur. Eident, sunt ino consequat. Duis nulla pariatur. Eident,
            sunt in culpa qui officia deserunt mollit anim id est laborum
            ipiscing elit, sed modtur adipiscing elit, sed modo consequat. Duis
            nulla pariatur. Eident, sunt intur adipiscing elit, sed modo
            consequat. Duis nulla pariatur. Eident, sunt intur adipiscing elit,
            sed modo consequat. Duis nulla pariatur. Eident, sunt ino consequat.
            Duis nulla pariatur. Eident
          </p>
        </div>
      </div>

      <div className="grid grid-rows-1 pl-10 pr-10 pb-8">
        <div className="grid-cols-1 w-full">
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modtur
            adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident,
            sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur.
            Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla
            pariatur. Eident, sunt ino consequat. Duis nulla pariatur. Eident,
            sunt in culpa qui officia deserunt mollit anim id est laborum
            ipiscing elit, sed modtur adipiscing elit, sed modo consequat. Duis
            nulla pariatur. Eident, sunt intur adipiscing elit, sed modo
            consequat. Duis nulla pariatur. Eident, sunt intur adipiscing elit,
            sed modo consequat. Duis nulla pariatur. Eident, sunt ino consequat.
            Duis nulla pariatur. Eident
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 pl-10 pr-10 pb-8">
        <div className="lg:flex lg:flex-row md:flex md:flex-col w-full">
          <div className="lg:w-1/2 md:w-full">
            <Image
              src={sliitImage}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>

          <div className="sm:pt-8 lg:pl-10 lg:w-1/2 md:w-full">
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              modtur adipiscing elit, sed modo consequat. Duis nulla pariatur.
              Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla
              pariatur. Eident, sunt intur adipiscing elit, sed modo consequat.
              Duis nulla pariatur. Eident, sunt ino consequat. Duis nulla
              pariatur. Eident, sunt in culpa qui officia deserunt mollit anim
              id est laborum ipiscing elit, sed modtur adipiscing elit, sed modo
              consequat. Duis nulla pariatur. Eident, sunt intur adipiscing
              elit, sed modo consequat. Duis nulla pariatur. Eident, sunt intur
              adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident,
              sunt ino consequat. Duis nulla pariatur. Eident
            </p>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              modtur adipiscing elit, sed modo consequat. Duis nulla pariatur.
              Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla
              pariatur. Eident, sunt intur adipiscing elit, sed modo consequat.
              Duis nulla pariatur. Eident, sunt ino consequat. Duis nulla
              pariatur. Eident, sunt in culpa qui officia deserunt mollit anim
              id est laborum ipiscing elit, sed modtur adipiscing elit, sed modo
              consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 pl-10 pr-10 pb-8">
        <div className="grid-cols-1 w-full">
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modtur
            adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident,
            sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur.
            Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla
            pariatur. Eident, sunt ino consequat. Duis nulla pariatur. Eident,
            sunt in culpa qui officia deserunt mollit anim id est laborum
            ipiscing elit, sed modtur adipiscing elit, sed modo consequat. Duis
            nulla pariatur. Eident, sunt intur adipiscing elit, sed modo
            consequat. Duis nulla pariatur. Eident, sunt intur adipiscing elit,
            sed modo consequat. Duis nulla pariatur. Eident, sunt ino consequat.
            Duis nulla pariatur. Eident
          </p>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modtur
            adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident,
            sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur.
            Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla
            pariatur. Eident, sunt ino consequat. Duis nulla pariatur. Eident,
            sunt in culpa qui officia deserunt mollit anim id est laborum
            ipiscing elit, sed modtur adipiscing elit, sed modo consequat. Duis
            nulla pariatur. Eident, sunt intur adipiscing elit, sed modo
            consequat. Duis nulla pariatur. Eident, sunt intur adipiscing elit,
            sed modo consequat. Duis nulla pariatur. Eident, sunt ino consequat.
            Duis nulla pariatur. Eident
          </p>
        </div>
      </div>

      <div className="grid grid-rows-1 pl-10 pr-10 pb-8">
        <div className="grid-cols-1 w-full">
          <Image
            src={sliitImageLarge}
            alt="SLIIT FCSC"
            quality={90}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  )
}
