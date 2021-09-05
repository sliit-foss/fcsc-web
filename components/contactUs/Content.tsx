import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { MailEndpoints } from '../../pages/api/mail'
import LoadingOverlay from '../common/LoadingOverlay'
import Swal from 'sweetalert2'

interface ContentProps {
  show: boolean
  toggleFunction: () => void
}

export default function Content(props: ContentProps): JSX.Element {
  const [showLoading, setShowLoading] = useState(false)

  const sendMail = (event: any) => {
    event.preventDefault()
    setShowLoading(true)
    const mailData = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      text: event.target.body.value,
      receiver: 'students.foc@sliit.lk',
    }
    MailEndpoints.sendMail(mailData)
      .then(() => {
        setShowLoading(false)
        let timerInterval: any
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          title: `<div class="text-2xl">Message sent sucessfully</div>`,
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            clearInterval(timerInterval)
          },
        }).then(() => {
          props.toggleFunction()
          const form = document.getElementById('contactForm') as HTMLFormElement
          if (form) {
            form.reset()
          }
        })
      })
      .catch((e) => {
        const error = JSON.parse(e).data.error
        setShowLoading(false)
        Swal.fire({
          icon: 'error',
          heightAuto: false,
          title: `<div class="text-2xl">${error}</div>`,
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  return (
    <>
      <LoadingOverlay show={showLoading} />
      <section
        className={
          props.show
            ? 'opacity-100 transition ease-in duration-200'
            : 'opacity-0 transition ease-in duration-200'
        }
      >
        <section
          style={{ backgroundImage: 'url(/shapes/2.png)' }}
          className="bg-no-repeat bg-right-top bg-cover bg-white rounded-2xl shadow-xl px-10 md:px-16 py-10 pb-0 md:pb-10 w-full justify-center items-center"
        >
          <form onSubmit={sendMail} id="contactForm">
            <div className="w-full flex flex-row justify-end">
              <div
                className="mr-0 md:mr-5 m-5 my-2 mt-0 cursor-pointer transform hover:scale-105 transition ease-in duration-100 fill-current text-fcsc-orange hover:text-gray-800"
                onClick={props.toggleFunction}
              >
                <AiOutlineClose size={40} />
              </div>
            </div>
            <div className="">
              <div className="text-3xl font-bold md:text-left text-center mb-5 ">
                Contact Us
              </div>
              <div className="text-base font-bold md:text-left text-center mb-5 ">
                Fill up the form and our Team will get back to you within 24
                hours.
              </div>
            </div>
            <div className="container flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="w-full rounded-lg flex flex-row  ">
                  <div className="flex flex-col w-full md:mr-16 ">
                    <div className="group bg-gray-200 hover:bg-fcsc-orange_light transition ease-in duration-200  flex flex-col my-6 py-6  rounded-lg shadow-lg ">
                      <ImLocation2
                        size={30}
                        className="w-full my-3 mt-2 fill-current text-fcsc-orange group-hover:text-black transition ease-in duration-200"
                      />
                      <h2 className="text-base font-bold text-center">
                        Our Address
                      </h2>
                      <h2 className="text-base font-medium text-center">
                        SLIIT Malabe
                      </h2>
                    </div>
                    <div className="group bg-gray-200 hover:bg-fcsc-orange_light transition ease-in duration-200 flex flex-col my-6 py-6  rounded-lg shadow-lg">
                      <MdEmail
                        size={30}
                        className="w-full my-3 mt-2 fill-current text-fcsc-orange group-hover:text-black transition ease-in duration-200"
                      />
                      <h2 className="text-base font-bold text-center">
                        Email Us
                      </h2>
                      <p className="text-base font-medium text-center truncate">
                        students.foc@sliit.lk
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-3/4  flex flex-col justify-center">
                <div className="flex flex-col md:flex-row mt-2 mb-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-fcsc-orange focus:ring-2 focus:ring-fcsc-orange_light  text-base outline-none text-gray-700 py-1 px-3 mb-5 md:mb-0 mr-0 md:mr-5 leading-8 shadow-lg transition-colors duration-200 ease-in-out"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-fcsc-orange focus:ring-2 focus:ring-fcsc-orange_light text-base outline-none text-gray-700 py-1 px-3 leading-8 shadow-lg transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-6">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full bg-white rounded border border-gray-300 focus:border-fcsc-orange focus:ring-2 focus:ring-fcsc-orange_light text-base outline-none text-gray-700 py-1 px-3 shadow-lg leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-0">
                  <textarea
                    id="body"
                    name="body"
                    placeholder="Message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-fcsc-orange focus:ring-2 focus:ring-fcsc-orange_light h-52 text-base outline-none text-gray-700 py-1 pt-2 px-3 resize-none leading-6 shadow-lg transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mt-5 mb-10 md:mb-0 pb-10 md:pb-0 justify-end">
              <button
                className="text-white bg-fcsc-blue border-0 py-2 px-14 focus:outline-none shadow-md hover:shadow-lg hover:bg-fcsc-blue_light rounded text-lg mb-6 md:mb-0 mr-0 md:mr-5 transition ease-in duration-200"
                type="submit"
                form="contactForm"
              >
                Send
              </button>
              <button
                className="text-white bg-fcsc-orange border-0 py-2 px-14 focus:outline-none shadow-md hover:shadow-lg hover:bg-fcsc-orange_light rounded text-lg transition ease-in duration-200"
                onClick={props.toggleFunction}
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  )
}
