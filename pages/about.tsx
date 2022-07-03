import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { TiArrowSortedDown } from 'react-icons/ti'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import HeaderImage from '../components/common/HeaderImage'
import image from '../public/aboutUs/aboutUs.svg'
import President from '../public/whoWeAre/2021/President - Pasan Nethsara.jpeg'
import VicePresident from '../public/whoWeAre/2021/DSC_0951.jpg'
import Secretary from '../public/whoWeAre/2021/Secretary - Kaveesha Gimhana.jpeg'
import AsstSecretary from '../public/whoWeAre/2021/DSC_0041.jpg'
import Treasurer from '../public/whoWeAre/2021/Treasurer - Chathura Bhagya.jpg'
import AsstTreasurer from '../public/whoWeAre/2021/Assistant Treasurer - Ranul Deelaka.jpeg'
import Editor from '../public/whoWeAre/2021/Editor - Udara Jayasekara.jpg'
import ComMem01 from '../public/whoWeAre/2021/Committee Member - Dulitha Sachinthana.jpg'
import ComMem02 from '../public/whoWeAre/2021/Committee Member - Chalana Sandaruwan.jpg'
import ComMem03 from '../public/whoWeAre/2021/Committee Member - Kolitha Dasanayaka.jpeg'
import ComMem04 from '../public/whoWeAre/2021/Committee Member - Saveendra Perera.jpg'
import ComMem05 from '../public/whoWeAre/2021/Committee Member - Amila Perera.jpg'
import ComMem06 from '../public/whoWeAre/2021/Committee Member - Ruwin Rathnayake.jpeg'
import ComMem07 from '../public/whoWeAre/2021/Committee Member - Nuwantha Perera.jpg'
import ComMem08 from '../public/whoWeAre/2021/DSC_0036.jpg'
import President22 from '../public/whoWeAre/2022/President _Ranul.png'
import VicePresident22 from '../public/whoWeAre/2022/VicePresident_IsuriArachchige.jpg'
import Secretary22 from '../public/whoWeAre/2022/Secretary_Anujitha Fernando.jpg'
import AsstSecretary22 from '../public/whoWeAre/2022/Assistant_Secretary_Vihan_Udawela.jpg'
import Treasurer22 from '../public/whoWeAre/2022/Treasurer_Prabodha Aththanayake.jpeg'
import AsstTreasurer22 from '../public/whoWeAre/2022/AssistantTreasurer_Kavindu Lakshan.jpg'
import Editor22 from '../public/whoWeAre/2022/Editor _ Amila Perera.jpg'

type boardData = {
  [key: string]: Array<any>
}

const board: boardData = {
  '2021': [
    {
      name: 'Pasan Nethsara',
      post: 'President',
      image: President,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Ranula Gihara',
      post: 'Vice President',
      image: VicePresident,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Kaveesha Gimhana',
      post: 'Secretary',
      image: Secretary,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Isuri Devlini',
      post: 'Asst.Secretary',
      image: AsstSecretary,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Chathura Bhagya',
      post: 'Treasurer',
      image: Treasurer,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Ranul Deelaka',
      post: 'Asst.Treasurer',
      image: AsstTreasurer,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Udara Jayasekara',
      post: 'Editor',
      image: Editor,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Dulitha Sachinthana',
      post: 'Committee Member',
      image: ComMem01,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Chalana Sandaruwan',
      post: 'Committee Member',
      image: ComMem02,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Kolitha Dasanayaka',
      post: 'Committee Member',
      image: ComMem03,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Shaveendra Perera',
      post: 'Committee Member',
      image: ComMem04,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Amila Perera',
      post: 'Committee Member',
      image: ComMem05,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Ruwin Rathnayake',
      post: 'Committee Member',
      image: ComMem06,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Nuwantha perera',
      post: 'Committee Member',
      image: ComMem07,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Prabodha Athhanayake',
      post: 'Committee Member',
      image: ComMem08,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
  ],
  '2022': [
    {
      name: 'Ranul Deelaka',
      post: 'President',
      image: President22,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Isuri Devlini',
      post: 'Vice President',
      image: VicePresident22,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Anujitha Fernando',
      post: 'Secretary',
      image: Secretary22,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Vihan Udawela',
      post: 'Asst.Secretary',
      image: AsstSecretary22,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Prabodha Athhanayake',
      post: 'Treasurer',
      image: Treasurer22,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Kavindu Lakshan',
      post: 'Asst.Treasurer',
      image: AsstTreasurer22,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
    {
      name: 'Amila Perera',
      post: 'Editor',
      image: Editor22,
      socialLinks: {
        fb: '',
        twitter: '',
        insta: '',
        linkedln: '',
      },
    },
  ],
}
export default function AboutUs(): JSX.Element {
  const currentTime = new Date()
  const currentYear = currentTime.getFullYear()
  const years: Array<string> = []
  for (let year = 2016; year <= currentYear; year++) {
    if (!board[year.toString()]) {
      board[year.toString()] = []
    }
    years.push(year.toString())
  }

  const [selectedYear, setSelectedYear] = useState<string>('2022')

  const toggleYear = () => (e: any) => {
    if (e.target.value != 'Select Year') {
      setSelectedYear(e.target.value)
    }
  }

  const pageDescription = `The Faculty of
  Computing Student Community also known as the FCSC is the largest
  student body of the Faculty of Computing. The Faculty of Computing
  Student Community was established under the Faculty of Computing
  and consists of Computing undergraduates.`

  return (
    <div>
      <Head>
        <title>About | FCSC</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <div className="justify-items-center">
        <HeaderImage position="absolute top-14" />
        <div
          className="title-font sm:text-4xl text-3xl font-medium text-white relative top-20 left-6 sm2:left-10 sm:left-12 z-20 flex md:hidden"
          data-aos="fade-right"
        >
          ABOUT US
        </div>
        <div className="flex flex-col-reverse md:flex-row pb-0 md:pb-6 mt-44 md:mt-0 place-content-center items-center relative top-0 z-20">
          <div className="flex flex-col w-full md:w-1/2 place-content-center p-14 px-10 md:px-14">
            <div
              className="title-font sm:text-4xl text-3xl font-medium text-white mt-24 xl:mt-40 mb-64 xl:mb-96 hidden md:flex"
              data-aos="fade-down"
            >
              ABOUT US
            </div>
            <div
              className="font-bold text-2xl text-center md:text-left mt-0 lg:mt-16"
              data-aos="fade-right"
            >
              Who We Are
            </div>
            <p
              className="mt-2 text-center md:text-left lg:text-justify"
              data-aos="fade-right"
            >
              <span className="text-3xl font-semibold">T</span>{pageDescription.slice(1)}
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

              free and memorable University experience. The following are our
              Board Members who enabled these dreams to sprout into fruition.
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
                return (
                  <option key={year} selected={year == selectedYear}>
                    {year}
                  </option>
                )
              })}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap px-6 justify-center items-center mb-16">
          {board[selectedYear].length > 0 ? (
            board[selectedYear].map((member) => (
              <div
                key={member.socialLinks.fb}
                className="relative group m-10 w-90vw h-70vw md:w-30vw md:h-30vw xl:w-20vw xl:h-20vw  rounded-3xl shadow-md flex justify-center items-center"
                data-aos="fade-up"
              >
                <Image
                  src={member.image}
                  alt="SLIIT FCSC"
                  className="rounded-3xl hover:opacity-80 transition-all ease-out duration-500"
                  quality={90}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
                <div className="absolute bottom-0 h-0 w-full group-hover:h-full opacity-0 group-hover:opacity-100 transition-all ease-out duration-500 flex flex-col items-center justify-center bg-gradient-to-t from-fcsc-orange to-fcsc-orange_light rounded-xl md:group-hover:p-4">
                  <h2 className="text-base sm:text-2xl md:text-3xl font-bold text-white group-hover:text-opacity-100 text-opacity-0 text-center">
                    <div className="flex flex-col w-full relative">
                      <div className="text-white font-bold text-2xl 2xl:text-3xl">
                        {member.name}
                      </div>
                      <div className="text-white font-bold text-xl 2xl:text-2xl mb-3">
                        {member.post}
                      </div>
                      <div
                        className="flex flex-row justify-center"
                        data-aos="fade-down"
                      >
                        {member.socialLinks.fb ? (
                          <a
                            href={member.socialLinks.fb}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaFacebook className="mb-3 mr-6 fill-current-color text-white hover:text-gray-600 transition ease-in duration-200 w-6 h-6 2xl:w-7 2xl:h-7" />
                          </a>
                        ) : (
                          <div></div>
                        )}
                        {member.socialLinks.insta ? (
                          <a
                            href={member.socialLinks.insta}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaInstagram className="mb-3 mr-6 fill-current-color text-white hover:text-gray-600 transition ease-in duration-200 w-6 h-6 2xl:w-7 2xl:h-7" />
                          </a>
                        ) : (
                          <div></div>
                        )}
                        {member.socialLinks.linkedln ? (
                          <a
                            href={member.socialLinks.linkedln}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaLinkedin className="mb-3 mr-6 fill-current-color text-white hover:text-gray-600 transition ease-in duration-200 w-6 h-6 2xl:w-7 2xl:h-7" />
                          </a>
                        ) : (
                          <div></div>
                        )}
                        {member.socialLinks.twitter ? (
                          <a
                            href={member.socialLinks.twitter}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaTwitter className="mb-3 mr-3 fill-current-color text-white hover:text-gray-600 transition ease-in duration-200 w-6 h-6 2xl:w-7 2xl:h-7" />
                          </a>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <div className="font-semibold text-2xl my-3 text-center">
              Data for the year {selectedYear} has not been uploaded yet
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
