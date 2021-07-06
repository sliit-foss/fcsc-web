import Link from 'next/link'

export default function Navbar(): JSX.Element {
  return (
    <header className="text-white body-font bg-gradient-to-r from-blue_fcsc via-orange to-blue_fcsc">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">FCSC</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-gray-900"> Home</a>
          </Link>
          <Link href="/">
            <a className="mr-5 hover:text-gray-900">Community</a>
          </Link>
          <Link href="/events">
            <a className="mr-5 hover:text-gray-900">Event</a>
          </Link>
          <Link href="/notices">
            <a className="mr-5 hover:text-gray-900">Notice</a>
          </Link>
          <Link href="/">
            <a className="mr-5 hover:text-gray-900">About</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
