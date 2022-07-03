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
        <div id="contact-modal-overlay" className="w-screen bg-black opacity-70 fixed h-screen top-0 left-0 z-20 "></div>
      ) : (
        <div id="contact-modal-overlay"></div>
      )}

      <div
        id="contact-modal"
        className={`w-10/12 md:w-3/4 fixed z-50 top-1/2 left-1/2 md:left-6/10 transform -translate-x-1/2 -translate-y-1/2 max-h-100vh overflow-auto scrollbar-hide ${
          visibility ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Content show={visibility} toggleFunction={toggleVisibility} />
      </div>
      <button id ="contact-launch-button" className="hidden" onClick={toggleVisibility}></button>
    </div>
  )
}
