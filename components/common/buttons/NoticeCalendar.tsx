import { MdPermContactCalendar } from 'react-icons/md'

export default function NoticeCalendar(): JSX.Element {
  return (
    <div
      className="w-full md:w-11/12 flex flex-row justify-center md:justify-end"
      data-aos="fade-left"
    >
      <div className="bg-fcsc-orange mr-0 md:mr-4 px-5 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 text-white font-semibold cursor-pointer transition ease-in duration-200 flex flex-row items-center">
        <MdPermContactCalendar size={28} className="mr-3" />
        <div>Notice Calendar</div>
      </div>
    </div>
  )
}
