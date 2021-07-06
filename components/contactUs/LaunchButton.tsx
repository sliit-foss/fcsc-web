import React, { useState } from 'react'
import Content from './Content'

export default function LaunchButton(): JSX.Element {
  const [visibility, setVisibility] = useState(false)
  const toggleVisibility = function () {
    setVisibility(!visibility)
  }

  return (
    <div>
      <div
        className="w-10/12 md:w-3/4 absolute top-2/3 md:top-1/2 left-1/2 z-10"
        style={{
          transform: 'translate(-50%, -50%)',
          pointerEvents: !visibility ? 'none' : 'all',
        }}
      >
        <Content show={visibility} toggleFunction={toggleVisibility} />
      </div>

      <div
        className="bg-fcsc-orange px-10 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 text-white cursor-pointer transition ease-in duration-200"
        onClick={toggleVisibility}
      >
        Contact Us
      </div>
    </div>
  )
}
