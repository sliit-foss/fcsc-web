import LoginForm from './LoginForm'
import LoginInfo from './LoginInfo'
import NextImage from '../common/NextImage'
import { motion } from 'framer-motion'
import lineBreak from '../../public/patterns/linebreak.svg'
import { useState } from 'react'

const LoginSignup = (): JSX.Element => {
  const animationDisplacement = 3000
  const [selectLogin, setSelectLogin] = useState(true)
  const [animateXInitial, setAnimateXInitial] = useState(-animationDisplacement)
  const [animateXDestination, setAnimateXDestination] = useState(0)
  const [opacity, setOpacity] = useState(true)

  const loginToggler = () => {
    setSelectLogin(!selectLogin)
    animateAcrossScreen()
  }

  const animateAcrossScreen = () => {
    setAnimateXInitial(0)
    setAnimateXDestination(animationDisplacement)
    setTimeout(function () {
      setOpacity(false)
      setAnimateXDestination(-animationDisplacement)
    }, 150)
    setTimeout(function () {
      setOpacity(true)
      setAnimateXDestination(0)
    }, 300)
  }

  const lineBreakClass = 'hidden lg:block lg:w-3.5 lg:h-full'
  const layoutClass = 'flex flex-col lg:flex lg:flex-row'
  const titleClass = `text-fcsc-blue text-3xl font-extrabold text-center mb-4`
  const titleWrapper = 'flex justify-center items-center lg:grid lg:grid-cols-2'

  const loginTitle = (
    <div className={titleWrapper}>
      <div className={titleClass}>FCSC WEB PORTAL</div>
      <div></div>
    </div>
  )

  const signupTitle = (
    <div className={titleWrapper}>
      <div></div>
      <div className={titleClass}>FCSC WEB PORTAL</div>
    </div>
  )

  const loginLayout = (
    <div className={layoutClass}>
      <LoginInfo login={true} />
      <div className="lg:my-auto">
        <NextImage
          classnames={lineBreakClass}
          src={lineBreak}
          alt="sign up"
          layout="intrinsic"
          quality={90}
        />
      </div>
      <LoginForm login={true} loginToggleHandler={loginToggler} />
    </div>
  )

  const signupLayout = (
    <div className={layoutClass}>
      <LoginForm login={false} loginToggleHandler={loginToggler} />
      <div className="lg:my-auto">
        <NextImage
          classnames={lineBreakClass}
          src={lineBreak}
          alt="sign up"
          layout="intrinsic"
          quality={90}
        />
      </div>
      <LoginInfo login={false} />
    </div>
  )

  return (
    <motion.div
      className={
        opacity
          ? 'w-full h-full bg-white px-5 pt-10 my-auto lg:p-6 lg:pt-16 lg:pb-6 lg:mx-auto lg:my-auto lg:w-4/6 lg:h-5/6 rounded-3xl shadow-ds2 grid row-span-1 opacity-100'
          : 'w-full h-full bg-white px-5 pt-10 my-auto lg:p-6 lg:pt-16 lg:pb-6 lg:mx-auto lg:my-auto lg:w-4/6 lg:h-5/6 rounded-3xl shadow-ds2 grid row-span-1 opacity-0 pointer-events-none'
      }
      initial={{ x: animateXInitial }}
      animate={{ x: animateXDestination }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
      }}
    >
      {selectLogin ? loginTitle : signupTitle}
      {selectLogin ? loginLayout : signupLayout}
    </motion.div>
  )
}

export default LoginSignup
