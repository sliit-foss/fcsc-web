import QAComponent, { QAProps } from '../common/QA/QAComponent'

import { GiSpeaker } from 'react-icons/gi'

interface AnnouncementProps {
  title: string
  announcments: Array<QAProps>
}

export default function Announcements(props: AnnouncementProps): JSX.Element {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center ">
      <div className="flex flex-col py-10 w-10/12 px-3">
        <div className="flex flex-col md:flex-row pb-4 md:pb-0 items-center text-2xl font-semibold md:text-left text-center mb-10 bg-gray-lighter rounded-lg shadow-noOffset_lighter">
          <GiSpeaker size={70} className="mx-5" />
          <div>
            <span className="underline">{props.title.split(' ')[0]}</span>
            <span>{' ' + props.title.split(' ')[1]}</span>
          </div>
        </div>
        <div className="bg-gray-lighter px-12 md:px-24 py-4 pt-7 rounded-lg shadow-noOffset_lighter">
          <div className="w-full md:w-1/2">
            {props.announcments.map((announcement) => {
              return (
                <QAComponent
                  title={announcement.title}
                  body={announcement.body}
                  key={announcement.title + announcement.body}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
