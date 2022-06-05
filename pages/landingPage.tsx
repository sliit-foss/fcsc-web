import Image from 'next/image'
// import { AiOutlineArrowDown } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import background2 from '../public/shapes/2.svg'
import people from '../public/landing/people.svg'
import HeaderImage from '../components/common/HeaderImage'
import NoticeCarousel from '../components/carousel/notice/NoticeCarousel'
// import FAQ from '../components/faq/FAQ'
import Event from '../components/carousel/event/Event'
import EventCarousel from '../components/carousel/event/EventCarousel'
import WhoWeAre from '../components/whoWeAre/WhoWeAre'
import Clubs from '../components/clubs/Clubs'
import { useGetLatestEvents } from '../queries/useGetEvent'
import { useGetNotices } from '../queries/useGetNotice'
import { getFilteredNotices } from '../utils/noticeFilter'

export default function LandingPage(): JSX.Element {
  const { data: latestEvents = [], isSuccess: isSuccessLatest = false } =
    useGetLatestEvents()

  const { data: noticeList = [], isSuccess } = useGetNotices()

  let latestEventsList: Array<JSX.Element> = []
  if (isSuccessLatest && latestEvents) {
    latestEventsList = latestEvents.map((event, index) => (
      <Event
        key={index.toString()}
        id={event._id}
        image={event.headerImage}
        title={event.name}
        subtitle={event.name}
        date={new Date(event ? event.startTime : 0)
          .toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })
          .replaceAll(',', ' ')}
        description={event.description}
      />
    ))
    latestEventsList = latestEventsList.slice(0, 5)
  }

  let noticeImages = getFilteredNotices(isSuccess, noticeList)
  noticeImages = noticeImages.slice(0, 5)

  const openContact = () => {
    const btn = document.getElementById('contact-launch-button') as HTMLElement
    btn.click()
  }

  return (
    <div className="justify-items-center ">
      <div className="w-40% absolute ml-5% mr-10% mt-16 xl:mt-5% left-0 right-0 p-0 md:py-14 z-20">
        <div className="sm:mb-3 md:mb-3 flex flex-row z-0" data-aos="fade-down">
          <a href="https://www.facebook.com/sliit.fcsc/">
            <FaFacebook
              className="mb-3 mr-3 fill-current-color text-white hover:text-fcsc-orange transition ease-in duration-200"
              size="22"
            />
          </a>
          <a href="https://www.instagram.com/sliit.fcsc/?hl=en">
            <FaInstagram
              className="mb-3  mr-3 fill-current-color text-white hover:text-fcsc-orange transition ease-in duration-200"
              size="22"
            />
          </a>
          <a href="https://www.linkedin.com/company/fcsc-sliit/">
            <FaLinkedin
              className="mb-3  mr-3 fill-current-color text-white hover:text-fcsc-orange transition ease-in duration-200"
              size="22"
            />
          </a>
        </div>
        <div
          className="title-font lg:text-4xl  text-xl font-medium text-white z-0"
          data-aos="fade-down"
        >
          Faculty of Computing Students Community
        </div>
        <p className="my-5 text-white text-left text-sm" data-aos="fade-up">
          The Faculty of Computing Student Community also known as the FCSC is
          the largest student body of the Faculty of Computing.
        </p>
        <a href="#faq">
          <div data-aos="fade-up">
            {/* <div
              className="bg-fcsc-orange px-5 py-1 w-2 w-24 lg:w-32 my-5 justify-center rounded-md shadow-lg
          hover:shadow-xl transform hover:scale-105 text-white text-md md:text-lg font-semibold cursor-pointer
          transition ease-in duration-200 flex flex-row items-center z-0"
            >
              FAQs
              <AiOutlineArrowDown size={22} className="ml-1 animate-bounce" />
            </div> */}
          </div>
        </a>
      </div>
      <HeaderImage height="h-500 xl:h-600" position="absolute top-14" />
      <div className="absolute" style={{ top: '200vh' }}>
        <Image
          className="transition-all ease-out duration-500"
          src={background2}
          alt="SLIIT FCSC"
          quality={90}
          layout="intrinsic"
        />
      </div>
      <div
        className="flex flex-col pb-0 md:pb-6 items-center md:items-end md:mr-36"
        data-aos="fade-left"
      >
        <div className="w-3/4 md:w-4/12 mt-96 md:mt-64">
          <Image
            className=""
            src={people}
            alt="SLIIT FCSC"
            quality={90}
            layout="intrinsic"
          />
        </div>
      </div>
      <div
        className="text-3xl sm:text-4xl font-bold text-center my-14"
        data-aos="fade-up"
      >
        LATEST NOTICES
      </div>
      <NoticeCarousel noticeData={noticeImages} />
      {/* <div className="w-full flex justify-center" id="faq">
        <div className="w-10/12 md:px-4">
          <FAQ />
        </div>
      </div> */}
      {isSuccessLatest && latestEvents ? (
        latestEvents.length != 0 ? (
          <EventCarousel title="LATEST EVENTS" eventData={latestEventsList} />
        ) : (
          <div></div>
        )
      ) : (
        <div
          className=" flex justify-center items-center"
          style={{ height: '90vh' }}
        >
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-fcsc-orange_light" />
        </div>
      )}
      <WhoWeAre />
      <Clubs />
      <div className="flex justify-center">
        <div data-aos="fade-up">
          <div className="transform hover:scale-105 shadow-lg hover:shadow-xl transition ease-in duration-200">
            <div
              id="contact-launch-button"
              className="bg-fcsc-orange px-10 py-3 mt-8 mb-36 rounded-lg transform hover:scale-105 text-white cursor-pointer w-full transition ease-in duration-200"
              onClick={openContact}
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
