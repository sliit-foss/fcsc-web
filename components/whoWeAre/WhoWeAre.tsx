import Link from 'next/link'
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
            <p className="mx-2 lg:mx-4 text-center lg:text-justify lg:mb-3">
              The Faculty of Computing Student Community also known as the FCSC
              is the largest student body of the Faculty of Computing. The
              Faculty of Computing Student Community was established under the
              Faculty of Computing and consists of Computing undergraduates.
            </p>
            <p className="mx-2 lg:mx-4 text-center lg:text-justify">
              Since there is a growing competition in the Sri Lankan job market
              in relation to this field of knowledge, we focus on nurturing the
              hard and soft skills which would improve their employability after
              the successful completion of the degree, as well as organizing
              events for the Student Community to grow academically as well as
              to get in touch with their creative senses, to promote a stress
              free and memorable University experience.
            </p>
            <Link href="/community">
              <div className="bg-fcsc-orange xl:mx-4 my-10 mb-5 w-full xl:w-3/12 px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 text-white font-semibold cursor-pointer transition ease-in duration-200 flex justify-center ">
                <div>Find More</div>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="flex justify-center items-center w-full xl:w-1/2"
          data-aos="fade-left"
        >
          <Link href="/about">
          <div
            className="shadow-lg hover:shadow-xl filter hover:brightness-110 rounded-2xl transition-all ease-out duration-500 cursor-pointer"
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
          </Link>
        </div>
      </div>
    </div>
  )
}
