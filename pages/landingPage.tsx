import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

//icons
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

//images
import background2 from '../public/shapes/2.png'
import people from '../public/landing/people.png'
import notice from '../public/notices/notice.png'

//components
import LaunchButton from '../components/contactUs/LaunchButton'
import NoticeCalendar from '../components/common/buttons/noticeCalendar'
import Notice from '../components/carousel/notice/Notice'
import NoticeCarousel from '../components/carousel/notice/NoticeCarousel'
import FAQ from '../components/faq/FAQ'
import Event from '../components/carousel/event/Event'
import foss from '../public/events/foss.png'
import EventCarousel from '../components/carousel/event/EventCarousel'
import WhoWeAre from '../components/whoWeAre/WhoWeAre'
import Clubs from '../components/clubs/Clubs'
import ResponsiveBackground from '../components/common/ResponsiveBackground'

const events = [
  <Event
    key=""
    image={foss}
    title="SEMESTER FINAL EXAMINATION - 2021"
    subtitle="Study Support Sessions IWT"
    date="03-06-2021"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  />,
  <Event
    key=""
    image={foss}
    title="Event 2 Title"
    subtitle="Event 2 Subtitle"
    date="08-08-2021"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  />,
  <Event
    key=""
    image={foss}
    title="Event 3 Title"
    subtitle="Event 3 Subtitle"
    date="15-09-2021"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  />,
  <Event
    key=""
    image={foss}
    title="Event 4 Title"
    subtitle="Event 4 Subtitle"
    date="19-09-2021"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt in culpa qui officia deserunt mollit tur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt inanim id est laborum"
  />,
  <Event
    key=""
    image={foss}
    title="Event 5 Title"
    subtitle="Event 5 Subtitle"
    date="10-10-2021"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modtur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt ino consequat. Duis nulla pariatur. Eident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  />,
  <Event
    key=""
    image={foss}
    title="Event 5 Title"
    subtitle="Event 5 Subtitle"
    date="10-10-2021"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modtur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident, sunt ino consequat. Duis nulla pariatur. Eident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  />,
]

const notices = [
  <Notice key="" image={notice} />,
  <Notice key="" image={notice} />,
  <Notice key="" image={notice} />,
  <Notice key="" image={notice} />,
]

export default function LandingPage(): JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className="justify-items-center ">
      <div
        className="w-1/2 absolute ml-auto mr-auto left-0 right-0 p-0 md:py-14 z-20"
        style={{
          marginLeft: '5%',
          marginTop: '4%',
          marginRight: '10%',
          width: '40%',
        }}
      >
        <div className="sm:mb-3 md:mb-3 flex flex-row">
          <FaFacebook className="fill-current text-white mb-3 mr-3" size="22" />
          <FaInstagram
            className="fill-current text-white mb-3  mr-3"
            size="22"
          />
          <FaLinkedin
            className="fill-current text-white mb-3  mr-3"
            size="22"
          />
          <FaTwitter className="fill-current text-white mb-3  mr-3" size="22" />
        </div>
        <h1 className="title-font lg:text-4xl  text-xl font-medium text-white ">
          Faculty of Computing Students Community
        </h1>
        <p className="my-5 text-white text-left text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed modtur
          adipiscing elit.
        </p>
        <a href="#faq">
          <div className="bg-fcsc-orange px-5 py-1 w-2 w-24 lg:w-32 my-5 justify-center rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 text-white text-md md:text-lg font-semibold cursor-pointer transition ease-in duration-200 flex flex-row items-center">
            <div>FAQs</div>
            <AiOutlineArrowDown size={22} className="ml-1 animate-bounce"/>
          </div>
        </a>
      </div>
      <ResponsiveBackground />
      <div className="absolute" style={{ top: '300vh' }}>
        <Image
          className="transition-all ease-out duration-500"
          src={background2}
          alt="SLIIT FCSC"
          quality={90}
          layout="intrinsic"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col pb-0 md:pb-6 items-center md:items-end md:mr-36">
        <div className="w-3/4 md:w-4/12 mt-96 md:mt-64">
          <Image
            className=""
            src={people}
            alt="SLIIT FCSC"
            quality={90}
            layout="intrinsic"
            placeholder="blur"
          />
        </div>
      </div>
      <div
        className="text-3xl sm:text-4xl font-bold text-center my-14"
        data-aos="fade-up"
      >
        LATEST NOTICES
      </div>
      <div className="">
        <NoticeCalendar />
      </div>
      <NoticeCarousel noticeData={notices} />
      <div className="w-full flex justify-center" id="faq">
        <div className="w-10/12 md:px-4">
          <FAQ />
        </div>
      </div>

      <EventCarousel title="UPCOMING EVENTS" eventData={events} />
      <WhoWeAre />
      <Clubs />
      <div className="flex justify-center">
        <LaunchButton />
      </div>
    </div>
  )
}
