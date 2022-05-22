import React, { useEffect, useState } from 'react'
import Content from './Content'

export default function LaunchButton(): JSX.Element {
  const [visibility, setVisibility] = useState(false)
  const toggleVisibility = function () {
    setVisibility(!visibility)
  }

  useEffect(() => {
    document.getElementById('contact-launch-button')?.addEventListener('click', toggleVisibility)
  },[])

  return (
    <div>
      {visibility ? (
        <div className="w-100vw bg-black opacity-70 fixed w-screen h-screen top-0 left-0 z-20 "></div>
      ) : (
        <div></div>
      )}

      <div
        className={`w-10/12 md:w-3/4 fixed z-50 top-1/2 left-1/2 md:left-6/10 transform -translate-x-1/2 -translate-y-1/2 max-h-100vh overflow-auto scrollbar-hide ${
          visibility ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Content show={visibility} toggleFunction={toggleVisibility} />
      </div>
      <div data-aos="fade-up">
        <div className="transform hover:scale-105 shadow-lg hover:shadow-xl transition ease-in duration-200">
          <div
            id="contact-launch-button"
            className="bg-fcsc-orange px-10 py-3 mt-8 mb-36 rounded-lg transform hover:scale-105 text-white cursor-pointer w-full transition ease-in duration-200"
            onClick={toggleVisibility}
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  )
}
