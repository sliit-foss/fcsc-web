import Head from 'next/head'
import Image from 'next/image'
import HeaderImage from '../components/common/HeaderImage'
import Event from '../components/carousel/event/Event'
import EventCarousel from '../components/carousel/event/EventCarousel'
import calendar from '../public/events/eventCalendar.svg'
import { useGetEvents } from '../queries/useGetEvent'
import { useGetLatestEvents } from '../queries/useGetEvent'

export default function Events(): JSX.Element {
  const { data: allEvents = [], isSuccess: isSuccessAll = false } =
    useGetEvents()
  const { data: latestEvents = [], isSuccess: isSuccessLatest = false } =
    useGetLatestEvents()

  let allEventsList: Array<JSX.Element> = []
  let latestEventsList: Array<JSX.Element> = []
  if (isSuccessAll && allEvents) {
    allEventsList = allEvents.map((event, index) => (
      <Event
        key={index.toString()}
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
  }

  if (isSuccessLatest && latestEvents) {
    latestEventsList = latestEvents.map((event, index) => (
      <Event
        key={index.toString()}
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
  }

  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>
      <div className="justify-items-center ">
        <HeaderImage position="absolute top-14" />
        <h1
          className="title-font sm:text-4xl text-3xl font-medium text-white relative top-20 left-6 sm2:left-10 sm:left-12 z-20 flex md:hidden"
          data-aos="fade-right"
        >
          EVENTS
        </h1>
        <div className="flex flex-col-reverse md:flex-row pb-0 md:pb-6 mt-44 md:mt-0 place-content-center items-center relative top-0 z-20">
          <div className="flex flex-col w-full md:w-1/2 place-content-center p-14 px-10 md:px-14">
            <h1
              className="title-font sm:text-4xl text-3xl font-medium text-white mt-24 xl:mt-40 mb-64 xl:mb-96 hidden md:flex"
              data-aos="fade-down"
            >
              EVENTS
            </h1>
            <h1
              className="font-bold text-2xl text-center md:text-left mt-0 lg:mt-16"
              data-aos="fade-right"
            >
              What Are Events
            </h1>
            <p className="mt-2 text-center md:text-left" data-aos="fade-right">
              <span className="text-3xl font-semibold">S</span>ince its
              inception, SLIIT has always been offering adequate importance to
              both academics and extracurricular activities. FCSC being a prime
              potent force within the university has contributed immensely in
              realizing the aforesaid objective. Accordingly, throughout its
              legacy, FCSC has brought an array of events into light forging a
              firm platform for the student community to unlock their potentials
              and unleash them effectively. <b>Virayama</b> the premier
              classical musical extravaganza annually held in the university is
              yet another event proudly presented by the FCSC in its calendar of
              events that spans a wide range of events. Furthermore, in spite of
              the difficulties caused by the global pandemic, FCSC resiliently
              organized a variety of virtual events to enrich students with both
              productive and positive experiences no less than before. The
              ultimate motive behind them has always been to infuse an equal
              blend and balance between studies and civic life of students and
              help them groom into wholesome personalities by successfully
              managing the friction of exams, peer pressure, deadlines, and
              tight timelines. Thus over the years it is evident how they have
              enabled improving both social and life skills of the students.
            </p>
          </div>
          <div className="w-3/4 md:w-4/12" data-aos="fade-left">
            <Image
              className=""
              src={calendar}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
        </div>
        {isSuccessLatest && latestEvents && isSuccessAll && allEvents ? (
          latestEvents.length != 0 ? (
            <>
              <EventCarousel
                title="LATEST EVENTS"
                eventData={latestEventsList}
              />
              <EventCarousel title="ALL EVENTS" eventData={allEventsList} />
            </>
          ) : (
            <div></div>
          )
        ) : (
          <div
            className=" flex justify-center items-center mb-32"
            style={{ height: '50vh' }}
          >
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-fcsc-orange_light" />
          </div>
        )}
      </div>
    </div>
  )
}
