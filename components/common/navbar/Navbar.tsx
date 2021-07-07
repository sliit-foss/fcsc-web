import Link from 'next/link'
import Image from 'next/image'
import fcscLogo from '../../../public/logo/fcsc.png'
import { withRouter } from 'next/router'

interface NavbarProps {
  router: any
}

function Navbar({ router }: NavbarProps): JSX.Element {
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
              className={`flex flex-row items-center justify-center mr-10 h-7 rounded-md bg-fcsc-orange text-center font-semibold ${
                nav.text == 'Community' ? 'w-28' : ' w-16'
              }`}
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
        <label className="md:block sm :block lg:hidden" htmlFor="toggle">
          &#9776;
        </label>
        <input className="hidden" type="checkbox" id="toggle" />
      </div>
    </header>
  )
}

export default withRouter(Navbar)
