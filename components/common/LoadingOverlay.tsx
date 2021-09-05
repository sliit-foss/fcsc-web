interface overlayProps {
  show: boolean
}

const LoadingOverlay = ({ show }: overlayProps): JSX.Element => {
  return (
    <div
      className={
        show
          ? 'w-full h-full flex justify-center items-center fixed top-0 left-0 bg-black z-50 transition duration-200 ease-in-out opacity-20'
          : 'w-full h-full flex justify-center items-center fixed top-0 left-0 bg-black z-50 transition duration-200 ease-in-out opacity-0 pointer-events-none'
      }
    >
      <div className="animate-spin rounded-full h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32 border-t-2 border-b-2"></div>
    </div>
  )
}

export default LoadingOverlay
