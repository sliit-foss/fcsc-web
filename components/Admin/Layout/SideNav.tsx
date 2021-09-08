import NextImage from '../../common/NextImage'
import image from '../../../public/admin/sideNav/image.svg'
import React from 'react'

interface props {
  onMenuItemSelect: any
}

const SideNav = ({ onMenuItemSelect }: props): JSX.Element => {
  const menuItems = ['Notices']
  return (
    <div
      className="md:col-span-2 md:flex flex-col w-full bg-gradient-to-b from-fcsc-blue to-fcsc-blue_light hidden p-4">
      <div className="md:flex flex-col">
        <div className="text-3xl text-white font-semibold text-center my-16 cursor-default">
          Management
        </div>

        {menuItems.map((menuOption, index) => (
          <div
            key={index}
            onClick={onMenuItemSelect.bind(this, menuOption)}
            className={`w-full filter hover:brightness-110 bg-fcsc-blue_light shadow-lg hover:shadow-xl cursor-pointer flex flex-col justify-center items-center transition ease-in duration-200 text-xl text-white font-medium text-center p-4 my-2`}
          >
            {menuOption}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <NextImage
          classnames="flex items-center justify-center w-full my-20vh"
          src={image}
          alt="image"
          layout="intrinsic"
          quality={90}
        />
      </div>
    </div>
  )
}

export default SideNav
