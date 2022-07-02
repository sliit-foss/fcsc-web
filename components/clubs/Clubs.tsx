import ClubLogo from './ClubLogo'
import foss from '../../public/clubs/foss.png'
import ms from '../../public/clubs/ms.png'
import fcscMedia from '../../public/clubs/fcscMedia.png'
import cs2 from '../../public/clubs/cs2.png'
import sesc from '../../public/clubs/sesc.png'

export default function Clubs(): JSX.Element {
  return (
    <div className="flex justify-center mt-5 lg:mt-12">
      <div className="flex flex-col w-10/12 px-5 mb-16 justify-between">
        <div className="flex h-full w-full justify-between items-center">
          <div className="flex flex-col  w-full transition-all ease-out duration-500">
            <h2
              className="text-3xl font-bold text-center mb-10 lg:mx-4"
              data-aos="fade-right"
            >
              Our Clubs And Communities
            </h2>
            <div className="flex justify-center" data-aos="fade-left">
              <p className="w-full md:w-10/12 lg: lg:w-5/12 text-center text-gray-700">
                A very big thank you to all our partners for their continued
                partnership. If you are interested in being showcased
                throughout, contact SLIIT FCSC to discuss sponsorship
                opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center mt-5">
          <div className="flex  justify-center mt-6">
            <a href="https://sliitfoss.org" target="_blank" rel="noreferrer" data-aos="fade-up">
              <ClubLogo image={foss} />
            </a>
            <a href="https://www.facebook.com/msclubsliit/" target="_blank" rel="noreferrer" data-aos="fade-up">
              <ClubLogo image={ms} />
            </a>
            <a href="https://www.facebook.com/sliit.fcmu/" target="_blank" rel="noreferrer" data-aos="fade-down">
              <ClubLogo image={fcscMedia} />
            </a>
            <a href="https://www.facebook.com/sliit.cscs/" target="_blank" rel="noreferrer" data-aos="fade-down">
              <ClubLogo image={cs2} />
            </a>
            <a href="https://www.facebook.com/sliitsecommunity/" target="_blank" rel="noreferrer" data-aos="fade-up">
              <ClubLogo image={sesc} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
