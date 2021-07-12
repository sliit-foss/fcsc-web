import Link from 'next/link'
import Image from 'next/image'
import fcscLogo from '../../../public/logo/fcsc.png'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// animations
import {
  mobileNavVariants,
  navElementsVariants,
} from '../../../animations/index'

// icons
import { HiMenuAlt2 } from 'react-icons/hi'
import { RiCloseFill } from 'react-icons/ri'

function Navbar(): JSX.Element {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen((prev) => !prev)
  }

  const navs = [
    { text: 'Home', href: '/' },
    { text: 'Community', href: '/community' },
    { text: 'Event', href: '/events' },
    { text: 'Notice', href: '/notices' },
    { text: 'About', href: '/about' },
  ]

  return (
    <header className="sticky top-0 flex flex-row w-full h-14 justify-between items-center shadow-noOffset z-10">
      <div className="w-28 h-12 flex flex-row items-center ml-9">
        <Image src={fcscLogo} alt="FCSC Logo" className="w-max" />
      </div>
      <div className="flex flex-row justify-end  items-center w-4/6 h-14 bg-white">
        <div className="flex flex-row mr-2">
          {navs.map((nav, key) => (
            <div
              key={key}
              className={`flex flex-row hidden lg:block  items-center justify-center mr-10 h-7 rounded-md text-center font-semibold 
              ${
                router.pathname == nav.href ? 'bg-fcsc-orange w-16' : 'bg-white'
              } ${nav.text == 'Community' ? 'w-28' : ' w-16'}
              `}
            >
              <Link href={nav.href}>
                <a
                  className={`${
                    router.pathname == nav.href
                      ? 'text-white w-28'
                      : 'text-fcsc-blue'
                  }`}
                >
                  {nav.text}
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div
          className="block lg:hidden z-20 cursor-pointer transition ease-in  sm:mr-3  md:mr-3 lg:mr-0"
          onClick={toggleNav}
        >
          {!isOpen ? (
            <HiMenuAlt2 className="h-6 w-6 hover:text-gray-default transition ease-in" />
          ) : (
            ''
          )}
        </div>
        <AnimatePresence exitBeforeEnter>
          {isOpen ? (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={mobileNavVariants}
              className={`fixed bg-white top-0 left-0 bottom-0 z-10 min-h-screen ${
                isOpen ? `w-full` : `w-0`
              } bg-blue flex flex-col items-center justify-center`}
            >
              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={toggleNav}
              >
                {isOpen ? (
                  <RiCloseFill className="h-6 w-6 hover:text-gray-light text-fcsc-blue transition ease-in" />
                ) : (
                  ''
                )}
              </div>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={navElementsVariants}
                className="h-32 w-48 flex items-center mb-5"
              >
                <Image
                  src={fcscLogo}
                  alt="foss logo"
                  layout="intrinsic"
                  quality={90}
                />
              </motion.div>
              <motion.ul
                initial="initial"
                animate="animate"
                exit="exit"
                variants={navElementsVariants}
                className="flex flex-col items-center justify-center space-y-6"
              >
                <li
                  className="font-medium text-2xl hover:text-gray-light text-fcsc-blue  transition ease-in"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li
                  className="font-medium text-2xl hover:text-gray-light text-fcsc-blue  transition ease-in"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/community">
                    <a>Community</a>
                  </Link>
                </li>
                <li
                  className="font-medium text-2xl hover:text-gray-light text-fcsc-blue  transition ease-in"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/events">
                    <a>Event</a>
                  </Link>
                </li>
                <li
                  className="font-medium text-2xl hover:text-gray-light text-fcsc-blue  transition ease-in"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/notices">
                    <a>Notice</a>
                  </Link>
                </li>
                <li
                  className="font-medium text-2xl hover:text-gray-light text-fcsc-blue  transition ease-in"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
              </motion.ul>
            </motion.div>
          ) : (
            ''
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
