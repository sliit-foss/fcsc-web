import Image from 'next/image'
import fcscLogo from '../../../public/logo/fcsc.png'
import fossLogo from '../../../public/clubs/foss_dark.svg'
import { FaFacebook, FaInstagram, FaLinkedin, FaRegEnvelope, FaTwitter } from 'react-icons/fa'

const Footer = (): JSX.Element => {
  return (
    <div className="lg:flex lg:flex-col bg-fcsc-blue">
      <div className="lg:flex lg:flex-row bg-fcsc-blue lg:h-60">
        <div className="sm:w-full lg:w-1/3">
          <div className="h-24 flex flex-row items-center">
            <div className="bg-white w-56 ml-10 h-16 flex flex-row justify-around items-center rounded-lg text-white">
              <a>
                <Image
                  className="justify-self-center mt-1"
                  src={fcscLogo}
                  alt="fossLogo"
                  width="100"
                  height="40"
                />
              </a>
              <a>
                <Image
                  className="justify-self-center"
                  src={fossLogo}
                  alt="fossLogo"
                  width="100"
                />
              </a>
            </div>
          </div>
          <div>
            <div className="pl-10 pr-10 text-white mb-3 ">
              <h4 className="text-xl font-bold mb-3">Foloow Us</h4>
              <div className="sm:mb-3 md:mb-3 flex flex-row">
                <FaFacebook className="colorIcon mb-3 mr-3" size="22"/>
                <FaInstagram className="colorIcon mb-3  mr-3" size="22"/>
                <FaLinkedin className="colorIcon mb-3  mr-3" size="22"/>
                <FaTwitter className="colorIcon mb-3  mr-3" size="22"/>
              </div>
            </div>
          </div>
        </div>

        <div className="relative sm:w-full lg:w-1/3 flex flex-col">
          <div className="w-full h-1/4">
            <div className="lg:pt-5">
              <h4 className="relative left-10 w-1/2 sm:w-1/2 md:w-1/2 text-xl font-bold mb-1 text-white">
                Quick Links
              </h4>
              <span className="absolute left-10 w-16 bg-white h-1 rounded-xl"/>
            </div>
          </div>
          <div className="w-full h-4/6">
            <div className="flex flex-row w-full text-white pl-10 pr-10">
              <div className="sm:mt-5 sm:mb-5 md:mt-5 md:mb-5 w-1/2">
                <ul>
                  <li className="pt-5 pb-1">Community</li>
                  <li className="pt-1 pb-1">Event</li>
                  <li className="pt-1 pb-1">Notice</li>
                  <li className="pt-1 pb-1">About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative sm:w-full lg:w-1/3">
          <div className="w-full h-1/4 md:mb-4 lg:mb-3">
            <div className="lg:pt-5 pb-5">
              <h4 className="relative left-10 w-1/2 sm:w-1/2 md:w-1/2 text-xl font-bold mb-1 text-white">
                Subcribe
              </h4>
              <span className="absolute left-10 bg-white w-16 h-1 rounded-xl"/>
            </div>
          </div>
          <div className="w-full h-4/6 sm:mt-5 md:mt-5">
            <div className="flex flex-row w-full text-white pl-10 pr-10">
              <div className="sm:mt-5 sm:mb-5 md:mt-5 md:mb-5 w-full">
                <p>
                  Don’t forget to subscribe to our news letters, enter your
                  e-mail here.
                </p>
                <div className="flex flex-row item-center sm:mb-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="p-2 mt-5 w-3/4 rounded-lg block text-black shadow-md"
                  />
                  <button
                    className="w-11 h-11  bg-fcsc-orange mt-5 shadow-md hover:bg-gradientPurple duration-150 transition ease-in font-medium rounded-lg block relative -left-7">
                    <FaRegEnvelope
                      className="transform -rotate-12  relative top-0 left-0 right-0 bottom-0 m-auto"
                      size="25"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-col justify-around lg:items-center text-center bg-fcsc-blue">
        <span
          className="md:absolute md:mb-2 md:-mt-3 md:left-9 sm:absolute lg:-mt-10 left-5 absolute w-11/12 bg-fcsc-orange h-1 rounded-md"/>
        <h5 className="pt-3 mt-3 md:pb-3 lg:mt-2 lg:pb-2 pb-2 text-white font-semibold">
          Copyright © 2021 - All Rights Reserved | Powered By <a href="https://sliitfoss.org/">SLIIT FOSS
          Community</a>
        </h5>
      </div>
    </div>
  )
}

export default Footer
