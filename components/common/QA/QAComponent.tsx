import React, { useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

export interface QAProps {
  title: string
  body: string
  createdAt: string
}

export default function QAComponent(props: QAProps): JSX.Element {
  const [visibility, setVisibility] = useState(false)
  const toggleVisibility = function () {
    setVisibility(!visibility)
  }
  const visibleAnsCSS =
    'mt-4 px-8 py-10 shadow-noOffset rounded-lg transition-height ease-in duration-200 bg-fcsc-orange'
  const inVisibleAnsCSS =
    'mt-4 px-8 py-0 shadow-noOffset rounded-lg transition-height ease-in duration-200 h-0'

  return (
    <div className="flex flex-col w-full py-2">
      <div
        className="group px-8 py-4 bg-gray-200 shadow-md rounded-lg cursor-pointer"
        onClick={toggleVisibility}
      >
        <div className="flex flex-row items-center justify-between content-between">
          <div>
          <div className="text-lg font-semibold group-hover:text-fcsc-orange">
            {props.title}
          </div>
          <div className="text-xs font-normal group-hover:text-fcsc-orange mt-2">
            {new Date(
              new Date(props.createdAt).getTime() +
                new Date().getTimezoneOffset() * -60 * 1000
            ).toLocaleString()}
          </div>
          </div>
          

          <TiArrowSortedDown
            size={25}
            className={
              visibility
                ? 'transform rotate-180 transition ease-in duration-200'
                : 'transform rotate-0 transition ease-in duration-200'
            }
          />
        </div>
      </div>
      <div className={visibility ? visibleAnsCSS : inVisibleAnsCSS}>
        <div
          className={
            visibility
              ? 'text-white opacity-100 transition ease-in duration-200'
              : `text-white opacity-0 pointer-events-none select-none transition ease-in duration-200`
          }
        >
          {props.body}
        </div>
      </div>
    </div>
  )
}
