import Image from 'next/image'
import { MdPermContactCalendar } from 'react-icons/md'

//components
import Notice from '../components/carousel/notice/Notice'
import NoticeCarousel from '../components/carousel/notice/NoticeCarousel'

//images
import background from '../public/events/BG.png'
import noticeboard from '../public/notices/noticeboard.png'
import notice from '../public/notices/notice.png'
import Announcements from '../components/announcements/Announcements'
import { QAProps } from '../components/common/QA/QAComponent'

const notices = [
  <Notice key="" image={notice} />,
  <Notice key="" image={notice} />,
  <Notice key="" image={notice} />,
  <Notice key="" image={notice} />,
]

const announcements: Array<QAProps> = [
  {
    title: 'Lorem ipsum dolor sit amet,',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae. Fusce sed commodo purus, at tempus turpis.',
  },
  {
    title: 'Nunc maximus, magna at ultricies elementum',

    body: 'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
  },
  {
    title: 'Curabitur laoreet, mauris vel blandit fringilla',

    body: 'Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncusnunc, ac sagittis leo elit vel lorem. Fusce tempor lacus ut liberoposuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreetvel quam. Sed dolor urna, lobortis in arcu auctor, tincidunt mattisante. Vivamus venenatis ultricies nibh in volutpat. Cras eu metusquis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcused massa euismod dignissim.',
  },
  {
    title: 'risus turpis vulputate quam, vitae convallis',

    body: 'current version is 1.2.1',
  },
]

export default function Notices(): JSX.Element {
  return (
    <div className="justify-items-center">
      <h1
        className="title-font sm:text-4xl text-3xl mb-14 font-medium text-white   absolute ml-auto mr-auto left-0 right-0 p-0 md:py-14 z-20"
        style={{ marginTop: '8%', width: '77%' }}
      >
        NOTICE
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
        <div className="flex flex-col w-full md:w-1/2 place-content-center p-14">
          <h1 className="font-bold text-2xl text-center md:text-left">
            What Are Notices
          </h1>
          <p className="mt-2 text-center md:text-left">
            <span className="text-3xl font-semibold">L</span>orem ipsum dolor
            sit amet, consectetur adipiscing elit, sed modtur adipiscing elit,
            sed modo consequat. Duis nulla pariatur. Eident, sunt intur
            adipiscing elit, sed modo consequat. Duis nulla pariatur. Eident,
            sunt intur adipiscing elit, sed modo consequat. Duis nulla pariatur.
            Eident, sunt ino consequat. Duis nulla pariatur. Eident, sunt in
            culpa qui officia deserunt mollit anim id est laborum ipiscing elit,
            sed modtur adipiscing elit, sed modo consequat. Duis nulla pariatur.
            Eident, sunt intur adipiscing elit, sed modo consequat. Duis nulla
            pariatur. Eident, sunt intur adipiscing elit, sed modo consequat.
            Duis nulla pariatur. Eident, sunt ino consequat. Duis nulla
            pariatur. Eident
          </p>
        </div>
        <div className="w-3/4 md:w-4/12">
          <Image
            className=""
            src={noticeboard}
            alt="SLIIT FCSC"
            quality={90}
            layout="intrinsic"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="w-full md:w-11/12 flex flex-row justify-center md:justify-end">
        <div className="bg-orange-dark mr-0 md:mr-4 px-5 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 text-white font-semibold cursor-pointer transition ease-in duration-200 flex flex-row items-center">
          <MdPermContactCalendar size={28} className="mr-3" />

          <div>Notice Calendar</div>
        </div>
      </div>
      <NoticeCarousel noticeData={notices} />
      <div>
        <Announcements
          title="Latest announcements"
          announcments={announcements}
        />
        <Announcements title="Older Topics" announcments={announcements} />
        <div className="mb-10"></div>
      </div>
    </div>
  )
}
