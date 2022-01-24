import Link from 'next/link'
import Image from 'next/image'
import fcscLogo from '../../../public/logo/fcsc.png'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { mobileNavVariants, navElementsVariants } from '../../../animations'
import { HiMenuAlt2 } from 'react-icons/hi'
import { RiCloseFill } from 'react-icons/ri'

function Navbar(): JSX.Element {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  let loginStatus = false
  if (process.browser) {
    loginStatus = window.localStorage.getItem('LoggedIn') === 'true'
  }
  const toggleNav = () => {
    setIsOpen((prev) => !prev)
  }

  const logOut = () => {
    window.localStorage.clear()
    router.replace({
      pathname: '/',
    })
  }

  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Community', href: '/community' },
    { text: 'Events', href: '/events' },
    { text: 'Notices', href: '/notices' },
    { text: 'Login', href: '/login' },
  ]

  if (loginStatus) {
    navs.splice(navs.length - 1, 0, { text: 'Management', href: '/admin' })
  }

  return (
    <header className="sticky top-0 flex flex-row w-full h-14 justify-between items-center shadow-noOffset z-30 bg-white">
      <div className="w-28 h-12 flex flex-row items-center ml-9 z-10 bg-white">
        <Image src={fcscLogo} alt="FCSC Logo" className="w-max" />
      </div>
      <div className="flex flex-row justify-end  items-center w-4/6 h-14 bg-white">
        <div className="flex flex-row mr-2">
          {navs.map((nav, key) => (
            <div
              key={key}
              className={`flex flex-row hidden lg:block  items-center justify-center mr-10 h-8 rounded-md text-center font-semibold transition ease-in duration-150 
              ${
                router.pathname == nav.href
                  ? 'bg-fcsc-orange filter hover:brightness-110 w-16'
                  : 'bg-white'
              } ${
                nav.text == 'Community' || nav.text == 'Management'
                  ? 'w-28'
                  : 'w-20'
              }
              `}
            >
              {' '}
              {key == navs.length - 1 && loginStatus ? (
                <div
                  className={`h-full flex items-center justify-center cursor-pointer ${
                    router.pathname == nav.href
                      ? 'text-white'
                      : 'text-fcsc-blue'
                  }`}
                  onClick={logOut}
                >
                  Logout
                </div>
              ) : (
                <Link href={nav.href}>
                  <a
                    className={`h-full flex items-center justify-center ${
                      router.pathname == nav.href
                        ? 'text-white'
                        : 'text-fcsc-blue'
                    }`}
                  >
                    {nav.text}
                  </a>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div
          className="block lg:hidden z-10 cursor-pointer transition ease-in  mr-3  md:mr-3 lg:mr-0"
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
                  <Link href="/about">
                    <a>About</a>
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
                    <a>Events</a>
                  </Link>
                </li>
                <li
                  className="font-medium text-2xl hover:text-gray-light text-fcsc-blue  transition ease-in"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/notices">
                    <a>Notices</a>
                  </Link>
                </li>
                {loginStatus ? (
                  <li
                    className="font-medium text-2xl hover:text-gray-light text-fcsc-blue  transition ease-in"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/admin">
                      <a>Management</a>
                    </Link>
                  </li>
                ) : (
                  <div></div>
                )}

                <button
                  onClick={
                    loginStatus
                      ? logOut
                      : () => {
                          router.push({
                            pathname: '/login',
                          })
                        }
                  }
                >
                  <li
                    className="font-medium text-2xl bg-fcsc-blue hover:bg-fcsc-blue_light py-1.5 px-8 text-white shadow hover:shadow-md transform hover:scale-105 transition duration-400 rounded-lg cursor-pointer "
                    onClick={() => setIsOpen(false)}
                  >
                    {loginStatus ? 'Logout' : 'Login'}
                  </li>
                </button>
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
