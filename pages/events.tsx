import Head from 'next/head'
import Image from 'next/image'
import Event from '../components/carousel/event/Event'
import EventCarousel from '../components/carousel/event/EventCarousel'
import background from '../public/shapes/1.png'
import calendar from '../public/events/eventCalendar.png'
import foss from '../public/events/foss.png'

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

export default function Events(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>
      <div className="justify-items-center ">
        <h1
          className="title-font sm:text-4xl text-3xl font-medium text-white w-85% absolute ml-auto mr-auto mt-8% left-0 right-0 p-0 md:py-14 z-20"
        >
          EVENTS
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
              What Are Events
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
              src={calendar}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
              placeholder="blur"
            />
          </div>
        </div>
        <EventCarousel title="UPCOMING EVENTS" eventData={events} />
        <EventCarousel title="MAIN EVENTS" eventData={events} />
      </div>
    </div>
  )
}
