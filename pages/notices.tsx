import Head from 'next/head'
import Image from 'next/image'
import NoticeCarousel from '../components/carousel/notice/NoticeCarousel'
import HeaderImage from '../components/common/HeaderImage'
import noticeboard from '../public/notices/noticeboard.svg'
import Announcements from '../components/announcements/Announcements'
import { QAProps } from '../components/common/QA/QAComponent'
import { useGetNotices } from '../queries/useGetNotice'
import { getFilteredNotices } from '../utils/noticeFilter'

export default function Notices(): JSX.Element {
  const { data: noticeList = [], isSuccess } = useGetNotices()

  let latestNotices: Array<QAProps> = []
  let olderNotices: Array<QAProps> = []
  const noticeImages = getFilteredNotices(isSuccess, noticeList)

  if (isSuccess && noticeList) {
    latestNotices = noticeList.filter((notice) => {
      return notice.category == 'Latest'
    })

    latestNotices = latestNotices.slice(0, 5)

    olderNotices = noticeList.filter((notice) => {
      return notice.category == 'Older'
    })

    olderNotices = olderNotices.slice(0, 5)
  }

  const pageDescription = `Being the Faculty
  of Computings main and governing student committee, the committee
  dedicates itself to providing the students with the necessary
  direction they need to carry out their academic and non-academic
  activities without much hassle or confusion. Their guidance
  includes the sharing of notices which extends to all aspects of
  studentship like semester registrations, exam procedures to name a
  few.`

  return (
    <div>
      <Head>
        <title>Notices | FCSC</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <div className="justify-items-center">
        <HeaderImage position="absolute top-14" />
        <div
          className="title-font sm:text-4xl text-3xl font-medium text-white relative top-20 left-6 sm2:left-10 sm:left-12 z-20 flex md:hidden"
          data-aos="fade-right"
        >
          NOTICE
        </div>
        <div className="flex flex-col-reverse md:flex-row pb-0 md:pb-6 mt-44 md:mt-0 place-content-center items-center relative top-0 z-20">
          <div className="flex flex-col w-full md:w-1/2 place-content-center p-14 px-10 md:px-14">
            <div
              className="title-font sm:text-4xl text-3xl font-medium text-white mt-24 xl:mt-40 mb-64 xl:mb-96 hidden md:flex"
              data-aos="fade-down"
            >
              NOTICES
            </div>
            <div
              className="font-bold text-2xl text-center md:text-left mt-0 lg:mt-16"
              data-aos="fade-right"
            >
              FCSC Notices
            </div>
            <p className="mt-2 text-center md:text-left" data-aos="fade-right">
              <span className="text-3xl font-semibold">B</span>{pageDescription.slice(1)}
            </p>
          </div>
          <div className="w-3/4 md:w-4/12" data-aos="fade-left">
            <Image
              className=""
              src={noticeboard}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
        </div>
        <NoticeCarousel noticeData={noticeImages} />
        {isSuccess && noticeList ? (
          <>
            {latestNotices.length != 0 ? (
              <div>
                <Announcements
                  title="Latest announcements"
                  announcments={latestNotices}
                />
                <div className="mb-10"></div>
              </div>
            ) : (
              <div></div>
            )}
            {olderNotices.length != 0 ? (
              <div>
                <Announcements
                  title="Older Topics"
                  announcments={olderNotices}
                />
                <div className="mb-10"></div>
              </div>
            ) : (
              <div></div>
            )}
          </>
        ) : (
          <div
            className=" flex justify-center items-center"
            style={{ height: '90vh' }}
          >
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-fcsc-orange_light" />
          </div>
        )}
      </div>
    </div>
  )
}
