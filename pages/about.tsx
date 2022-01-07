import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { TiArrowSortedDown } from 'react-icons/ti'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import HeaderImage from '../components/common/HeaderImage'
import image from '../public/aboutUs/aboutUs.svg'
import photo from '../public/aboutUs/photo.png'

const board = [
  {
    name: 'Pasan',
    post: 'President',
    image: 'www.abc.com',
    socialLinks: {
      fb: 'fbLink',
      twitter: 'twitterLink',
      insta: 'instaLink',
      linkedln: 'linkedlnLink',
    },
  },
  {
    name: 'name',
    post: 'post',
    image: 'www.abc.com',
    socialLinks: {
      fb: 'fbLink',
      twitter: 'twitterLink',
      insta: 'instaLink',
      linkedln: 'linkedlnLink',
    },
  },
  {
    name: 'name',
    post: 'post',
    image: 'www.abc.com',
    socialLinks: {
      fb: 'fbLink',
      twitter: 'twitterLink',
      insta: 'instaLink',
      linkedln: 'linkedlnLink',
    },
  },
  {
    name: 'name',
    post: 'post',
    image: 'www.abc.com',
    socialLinks: {
      fb: 'fbLink',
      twitter: 'twitterLink',
      insta: 'instaLink',
      linkedln: 'linkedlnLink',
    },
  },
  {
    name: 'name',
    post: 'post',
    image: 'www.abc.com',
    socialLinks: {
      fb: 'fbLink',
      twitter: 'twitterLink',
      insta: 'instaLink',
      linkedln: 'linkedlnLink',
    },
  },
  {
    name: 'name',
    post: 'post',
    image: 'www.abc.com',
    socialLinks: {
      fb: 'fbLink',
      twitter: 'twitterLink',
      insta: 'instaLink',
      linkedln: 'linkedlnLink',
    },
  },
  {
    name: 'name',
    post: 'post',
    image: 'www.abc.com',
    socialLinks: {
      fb: 'fbLink',
      twitter: 'twitterLink',
      insta: 'instaLink',
      linkedln: 'linkedlnLink',
    },
  },
  {
    name: 'name',
    post: 'post',
    image: 'www.abc.com',
    socialLinks: {
      fb: 'fbLink',
      twitter: 'twitterLink',
      insta: 'instaLink',
      linkedln: 'linkedlnLink',
    },
  },
]
export default function AboutUs(): JSX.Element {
  const currentTime = new Date()
  const currentYear = currentTime.getFullYear()
  const years: Array<string> = []
  for (let year = 2016; year <= currentYear; year++) {
    years.push(year.toString())
  }

  const [selectedYear, setSelectedYear] = useState(years[years.length - 1])

  const toggleYear = () => (e: any) => {
    if (e.target.value != 'Select Year') {
      setSelectedYear(e.target.value)
    }
  }

  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div className="justify-items-center">
        <HeaderImage position="absolute top-14" />
        <h1
          className="title-font sm:text-4xl text-3xl font-medium text-white relative top-20 left-6 sm2:left-10 sm:left-12 z-20 flex md:hidden"
          data-aos="fade-right"
        >
          ABOUT US
        </h1>
        <div className="flex flex-col-reverse md:flex-row pb-0 md:pb-6 mt-44 md:mt-0 place-content-center items-center relative top-0 z-20">
          <div className="flex flex-col w-full md:w-1/2 place-content-center p-14 px-10 md:px-14">
            <h1
              className="title-font sm:text-4xl text-3xl font-medium text-white mt-24 xl:mt-40 mb-64 xl:mb-96 hidden md:flex"
              data-aos="fade-down"
            >
              ABOUT US
            </h1>
            <h1
              className="font-bold text-2xl text-center md:text-left mt-0 lg:mt-16"
              data-aos="fade-right"
            >
              Who We Are
            </h1>
            <p
              className="mt-2 text-center md:text-left lg:text-justify"
              data-aos="fade-right"
            >
              <span className="text-3xl font-semibold">T</span>he Faculty of
              Computing Student Community also known as the FCSC is the largest
              student body of the Faculty of Computing. The Faculty of Computing
              Student Community was established under the Faculty of Computing
              and consists of Computing undergraduates.
            </p>
            <p
              className="mt-2 text-center md:text-left lg:text-justify"
              data-aos="fade-right"
            >
              Since there is a growing competition in the Sri Lankan job market
              in relation to this field of knowledge, we focus on nurturing the
              hard and soft skills which would improve their employability after
              the successful completion of the degree, as well as organizing
              events for the Student Community to grow academically as well as
              to get in touch with their creative senses, to promote a stress
              free and memorable University experience. The following are some
              of the main events organized by our Student Community,
            </p>
          </div>
          <div className="w-3/4 md:w-4/12" data-aos="fade-left">
            <Image
              className=""
              src={image}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
        </div>
        <div
          className="text-3xl sm:text-4xl font-bold text-center my-14 px-6"
          data-aos="fade-up"
        >
          BOARD OF OFFICIALS - {selectedYear}
        </div>
        <div className="flex justify-center items-center">
          <div className="relative inline-flex mb-14" data-aos="fade-up">
            <TiArrowSortedDown
              size={25}
              className="w-6 h-6 absolute top-0 right-0 m-4 mt-2 pointer-events-none fill-current-color text-gray-400 "
            />

            <select
              className="border border-gray-300 rounded-md shadow text-gray-400 font-medium h-10 pl-5 pr-28 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              onChange={toggleYear()}
            >
              <option>Select Year</option>
              {years.map((year) => {
                return <option key={year}>{year}</option>
              })}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap px-6 justify-center items-center mb-16">
          {board.map((member) => (
            <div
              key={member.socialLinks.fb}
              className="relative group m-10 w-full md:w-4/12 lg:w-1/4 aspect-w-1.25 aspect-h-1 md:aspect-w-3 md:aspect-h-1 lg:aspect-w-4 lg:aspect-h-1 relative rounded-3xl shadow-md flex justify-center items-center"
              data-aos="fade-up"
            >
              <Image
                src={photo}
                alt="SLIIT FCSC"
                className="rounded-3xl hover:opacity-80 transition-all ease-out duration-500"
                quality={90}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
              <div className="absolute bottom-0 h-0 w-full group-hover:h-full transition-all ease-out duration-500 flex flex-col items-center justify-center bg-gradient-to-t from-fcsc-orange to-fcsc-orange_light rounded-xl md:group-hover:p-4">
                <h2 className="text-base sm:text-2xl md:text-3xl font-bold text-white group-hover:text-opacity-100 text-opacity-0 text-center mb-4">
                  <div className="flex flex-col w-full relative -top-6">
                    <h1 className="text-white font-bold text-2xl">
                      {member.post}
                    </h1>
                    <div
                      className="sm:mb-3 md:mb-3 flex flex-row z-0"
                      data-aos="fade-down"
                    >
                      <a href={member.socialLinks.fb}>
                        <FaFacebook
                          className="mb-3 mr-6 fill-current-color text-white hover:text-gray-600 transition ease-in duration-200"
                          size="30"
                        />
                      </a>
                      <a href={member.socialLinks.insta}>
                        <FaInstagram
                          className="mb-3 mr-6 fill-current-color text-white hover:text-gray-600 transition ease-in duration-200"
                          size="30"
                        />
                      </a>
                      <a href={member.socialLinks.linkedln}>
                        <FaLinkedin
                          className="mb-3 mr-6 fill-current-color text-white hover:text-gray-600 transition ease-in duration-200"
                          size="30"
                        />
                      </a>
                      <a href={member.socialLinks.twitter}>
                        <FaTwitter
                          className="mb-3 mr-3 fill-current-color text-white hover:text-gray-600 transition ease-in duration-200"
                          size="30"
                        />
                      </a>
                    </div>
                  </div>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
