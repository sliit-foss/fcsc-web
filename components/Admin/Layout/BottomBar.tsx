interface props {
  onMenuItemSelect: any
}

const BottomBar = ({ onMenuItemSelect }: props): JSX.Element => {
  const menuItems = ['Notices']
  return (
    <div
      className="sticky bottom-0 left-0 right-0 md:hidden bg-gradient-to-b from-fcsc-blue to-fcsc-blue_light inline-flex items-center justify-between px-3 py-2">
      <div className=" sm:text-lg text-white font-medium cursor-default">
        Management
      </div>
      <div className="inline-flex items-center space-x-2 sm:space-x-3">
        {menuItems.map((menuOption, index) => (
          <button
            key={index}
            onClick={onMenuItemSelect.bind(this, menuOption)}
            className={`filter hover:brightness-110 bg-fcsc-blue_light cursor-pointer rounded-md shadow-lg hover:shadow-xl flex flex-col justify-center items-center transition ease-in duration-200 text-white font-medium text-center px-2 py-3`}
          >
            {menuOption}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BottomBar
