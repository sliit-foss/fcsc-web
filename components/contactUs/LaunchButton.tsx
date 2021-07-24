import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Content from './Content'

export default function LaunchButton(): JSX.Element {
  const [visibility, setVisibility] = useState(false)
  const toggleVisibility = function () {
    setVisibility(!visibility)
  }

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div>
      {visibility ? (
        <div
          className="bg-black opacity-70 fixed w-screen h-screen top-0 left-0 z-20 "
          style={{ width: '100vw' }}
        ></div>
      ) : (
        <div></div>
      )}

      <div
        className="w-10/12 md:w-3/4 fixed top-full md:top-1/2 sm:top-full left-1/2 transform -translate-x-2/4 -translate-y-full md:-translate-y-2/4 z-30 scrollbar-hide"
        style={{
          pointerEvents: !visibility ? 'none' : 'all',
          overflow: 'auto',
          maxHeight: '100vh',
          opacity: visibility ? 100 : 0,
        }}
      >
        <Content show={visibility} toggleFunction={toggleVisibility} />
      </div>
      <div
        className="transform hover:scale-105 shadow-lg hover:shadow-xl transition ease-in duration-200"
        data-aos="fade-up"
      >
        <div
          className="bg-fcsc-orange px-10 py-3 mt-8 mb-36 rounded-lg transform hover:scale-105 text-white cursor-pointer w-full transition ease-in duration-200"
          onClick={toggleVisibility}
        >
          Contact Us
        </div>
      </div>
    </div>
  )
}
