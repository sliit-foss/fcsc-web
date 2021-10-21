import Image from 'next/image'
import image from '../../public/whoWeAre/image.png'

export default function WhoWeAre(): JSX.Element {
  return (
    <div className="flex justify-center mt-24">
      <div className="flex flex-col lg:flex-row w-11/12 md:w-10/12 px-5 mb-24 justify-between">
        <div
          className="flex h-full w-full justify-between items-center"
          data-aos="fade-right"
        >
          <div className="flex flex-col bg-white py-10 px-6 md:px-8 ml-0 lg:mr-24 mb-28 lg:mb-0  w-full h-auto rounded-3xl shadow-xl hover:shadow-2xl transition-all ease-out duration-500">
            <h2 className="text-3xl font-bold lg:text-left text-center mb-10 lg:mx-4">
              Who We Are
            </h2>
            <p className="mx-2 lg:mx-4 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              modtur adipiscing elit, sed modo consequat. Duis nulla pariatur.
              Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla
              pariatur. Eident, sunt intur adipiscing elit, sed modo consequat.
              Duis nulla pariatur. Eident, sunt ino consequat. Duis nulla
              pariatur. Eident, sunt in culpa qui officia deserunt mollit anim
              id est laborum ipiscing elit, sed modtur adipiscing elit.
            </p>
            <div className="bg-fcsc-orange xl:mx-4 my-10 mb-5 w-full xl:w-3/12 px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 text-white font-semibold cursor-pointer transition ease-in duration-200 flex justify-center ">
              <div>Find More</div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center w-full xl:w-1/2"
          data-aos="fade-left"
        >
          <div
            className="shadow-lg hover:shadow-xl filter hover:brightness-110 rounded-2xl transition-all ease-out duration-500"
            style={{ lineHeight: 0 }}
          >
            <Image
              className="rounded-2xl transition-all ease-out duration-500 h-full"
              src={image}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
