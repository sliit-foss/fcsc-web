import Wave from 'react-wavify'
import Link from 'next/link'
import Image from 'next/image'
import fcscLogo from '../../../public/logo/fcsc.png'
import fossLogo from '../../../public/clubs/foss_dark.svg'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
} from 'react-icons/fa'
import { SubscriptionEndpoints } from '../../../pages/api/subscription'
import Swal from 'sweetalert2'

const Footer = (): JSX.Element => {
  const onSubscribe = (e: any) => {
    e.preventDefault()
    const payload = {
      email: e.target.email.value,
    }
    SubscriptionEndpoints.subscribe(payload)
      .then(() => {
        let timerInterval: any
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          title: `<div class="text-2xl">Subscribed to FCSC!</div>`,
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            clearInterval(timerInterval)
          },
        }).then(() => {
          e.target.email.value = ''
        })
      })
      .catch((e) => {
        const error = e.response.data.message
        let errorMessage = 'Failed to add notice'
        if (error) {
          switch (true) {
            case error.includes('duplicate key'):
              errorMessage = 'You have already subscribed to this service'
              break
            default:
              errorMessage = error
              break
          }
        }
        Swal.fire({
          icon: 'error',
          heightAuto: false,
          title: `<div class="text-2xl">${errorMessage}</div>`,
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  return (
    <div className="relative">
      <Wave
        className="opacity-40 absolute bottom-0 h-1/2 pointer-events-none"
        fill="#1c1364"
        paused={false}
        options={{
          height: 50,
          amplitude: 40,
          speed: 0.25,
          points: 3,
        }}
      />
      <Wave
        className="opacity-40 absolute bottom-0 h-1/2 pointer-events-none"
        fill="#1c1364"
        paused={false}
        options={{
          height: 40,
          amplitude: 40,
          speed: 0.25,
          points: 3,
        }}
      />
      <div className="lg:flex lg:flex-col bg-fcsc-blue_light">
        <div className="lg:flex lg:flex-row bg-fcsc-blue_light lg:h-60">
          <div className="sm:w-full lg:w-1/3 ">
            <div className="h-24 flex flex-row items-center">
              <div className="bg-white w-56 ml-10 h-16 flex flex-row justify-around items-center rounded-lg text-white shadow-lg hover:shadow-xl transition-all ease-out duration-500">
                <a className="mt-1 ml-1">
                  <Image
                    className=""
                    src={fcscLogo}
                    alt="fcscLogo"
                    width="100"
                    height="40"
                  />
                </a>
                <a className="mr-1">
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
                <h4 className="text-xl font-bold mb-3">Follow Us</h4>
                <div className="sm:mb-3 md:mb-3 flex flex-row">
                  <a href="https://www.facebook.com/sliit.fcsc/">
                    <FaFacebook
                      className="colorIcon mb-3 mr-3 fill-current-color hover:text-fcsc-orange transition ease-in duration-200"
                      size="22"
                    />
                  </a>
                  <a href="https://www.instagram.com/sliit.fcsc/?hl=en">
                    <FaInstagram
                      className="colorIcon mb-3  mr-3 fill-current-color hover:text-fcsc-orange transition ease-in duration-200"
                      size="22"
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/fcsc-sliit/">
                    <FaLinkedin
                      className="colorIcon mb-3  mr-3 fill-current-color hover:text-fcsc-orange transition ease-in duration-200"
                      size="22"
                    />
                  </a>
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
                <span className="absolute left-10 w-16 bg-white h-1 rounded-xl" />
              </div>
            </div>
            <div className="w-full h-4/6">
              <div className="flex flex-row w-full text-white pl-10 pr-10">
                <div className="sm:mt-5 sm:mb-5 md:mt-5 md:mb-5 w-1/2">
                  <ul>
                    <li className="pt-5 pb-1">
                      <Link href="/community">
                        <a className="hover:text-fcsc-orange transition ease-in duration-200">
                          Community
                        </a>
                      </Link>
                    </li>
                    <li className="pt-1 pb-1">
                      <Link href="/events">
                        <a className="hover:text-fcsc-orange transition ease-in duration-200">
                          Events
                        </a>
                      </Link>
                    </li>
                    <li className="pt-1 pb-1">
                      <Link href="/notices">
                        <a className="hover:text-fcsc-orange transition ease-in duration-200">
                          Notices
                        </a>
                      </Link>
                    </li>
                    <li className="pt-1 pb-1">
                      <Link href="/about">
                        <a className="hover:text-fcsc-orange transition ease-in duration-200">
                          About
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative sm:w-full lg:w-1/3">
            <div className="w-full h-1/4 md:mb-4 lg:mb-3">
              <div className="lg:pt-5 pb-5">
                <h4 className="relative left-10 w-1/2 sm:w-1/2 md:w-1/2 text-xl font-bold mb-1 text-white">
                  Subscribe
                </h4>
                <span className="absolute left-10 bg-white w-16 h-1 rounded-xl" />
              </div>
            </div>
            <div className="w-full h-4/6 sm:mt-5 md:mt-5">
              <div className="flex flex-row w-full text-white pl-10 pr-10">
                <div className="sm:mt-5 sm:mb-5 md:mt-5 md:mb-5 w-full">
                  <p>
                    Don’t forget to subscribe to our news letters, enter your
                    e-mail here.
                  </p>
                  <form
                    className="flex flex-row item-center mb-4 sm:mb-3"
                    onSubmit={onSubscribe}
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      className="p-2 pl-3 mt-5 w-3/4 rounded-lg block text-black shadow-md focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="w-11 h-11 bg-fcsc-orange mt-5 shadow-md hover:bg-fcsc-blue_light duration-150 transition ease-in font-medium rounded-lg focus:outline-none block relative -left-10"
                    >
                      <FaRegEnvelope
                        className="transform -rotate-12  relative top-0 left-0 right-0 bottom-0 m-auto"
                        size="25"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-col justify-around lg:items-center text-center bg-fcsc-blue">
          <span className="md:absolute md:mb-2 md:-mt-3 md:left-9 sm:absolute lg:-mt-10 left-5 absolute w-11/12 bg-fcsc-orange h-1 rounded-md" />
          <h5 className="pt-3 mt-3 md:pb-3 lg:mt-2 lg:pb-2 pb-2 text-white font-semibold relative z-10">
            Copyright © 2021 - All Rights Reserved | Powered By{' '}
            <a href="https://sliitfoss.org/">SLIIT FOSS Community</a>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Footer
