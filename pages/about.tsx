import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { TiArrowSortedDown } from 'react-icons/ti'
import background from '../public/shapes/1.png'
import image from '../public/aboutUs/aboutUs.png'
import photo from '../public/aboutUs/photo.png'

const board = [
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
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

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
      <div className="justify-items-center ">
        <h1
          className="title-font sm:text-4xl text-3xl font-medium text-white w-3/4 absolute ml-auto mr-auto left-0 right-0 p-0 md:py-14 z-20"
          style={{ marginTop: '8%', width: '88%' }}
        >
          ABOUT US
        </h1>
        <Image
          className="transition-all ease-out duration-500"
          src={background}
          alt="SLIIT FCSC"
          quality={90}
          layout="responsive"
          placeholder="blur"
          height="500"
        />

        <div className="flex flex-col-reverse md:flex-row pb-0 md:pb-6 place-content-center items-center">
          <div className="flex flex-col w-full md:w-1/2 place-content-center p-14 px-10 md:px-14">
            <h1 className="font-bold text-2xl text-center md:text-left">
              Who We Are
            </h1>
            <p className="mt-2 text-center md:text-left">
              <span className="text-3xl font-semibold">L</span>orem ipsum dolor
              sit amet, consectetur adipiscing elit, sed modtur adipiscing elit,
              sed modo consequat. Duis nulla pariatur. Eident, sunt intur
              adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident,
              sunt intur adipiscing elit, sed modo consequat. Duis nulla
              pariatur. Eident, sunt ino consequat. Duis nulla pariatur. Eident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              ipiscing elit, sed modtur adipiscing elit, sed modo consequat.
              Duis nulla pariatur. Eident, sunt intur adipiscing elit, sed modo
              consequat. Duis nulla pariatur. Eident, sunt intur adipiscing
              elit, sed modo consequat. Duis nulla pariatur. Eident, sunt ino
              consequat. Duis nulla pariatur. Eident
            </p>
          </div>
          <div className="w-3/4 md:w-4/12">
            <Image
              className=""
              src={image}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
              placeholder="blur"
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
              className="border border-gray-300 rounded-md shadow-md text-gray-400 font-medium h-10 pl-5 pr-28 bg-white hover:border-gray-400 focus:outline-none appearance-none"
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
              className="m-10 w-full md:w-4/12 lg:w-1/4 aspect-w-1.25 aspect-h-1 md:aspect-w-3 md:aspect-h-1 lg:aspect-w-4 lg:aspect-h-1 relative rounded-3xl shadow-md flex justify-center items-center"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
