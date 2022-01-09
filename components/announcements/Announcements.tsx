import { GiSpeaker } from 'react-icons/gi'
import QAComponent, { QAProps } from '../common/QA/QAComponent'

interface AnnouncementProps {
  title: string
  announcments: Array<QAProps>
}

export default function Announcements(props: AnnouncementProps): JSX.Element {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center">
      <div
        className="flex flex-col py-10 w-10/12 px-1 md:px-3"
        data-aos="fade-left"
      >
        <div className="flex flex-col md:flex-row pb-4 md:pb-0 items-center text-2xl font-semibold md:text-left text-center mb-10 bg-gray-100 rounded-lg shadow-noOffset_lighter">
          <GiSpeaker size={70} className="mx-5" />
          <div>
            <span>{props.title}</span>
          </div>
        </div>
        <div
          className="bg-gray-100 px-8 md:px-12 md:px-24 py-4 pt-7 rounded-lg shadow-noOffset_lighter"
          data-aos="fade-right"
        >
          <div className="w-full md:w-1/2">
            {props.announcments.map((announcement, index) => {
              return (
                <div
                  key={announcement.title + announcement.body}
                  data-aos={index % 2 == 1 ? 'fade-left' : 'fade-right'}
                >
                  <QAComponent
                    title={announcement.title}                    
                    body={announcement.body}
                    createdAt={announcement.createdAt}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
