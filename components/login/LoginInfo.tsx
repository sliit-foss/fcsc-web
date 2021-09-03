import NextImage from '../common/NextImage'
import image from '../../public/login/login.svg'

interface LoginInfoProps {
  login: boolean
}

const LoginInfo = (props: LoginInfoProps): JSX.Element => {
  const outerContainerClass =
    'flex flex-col items-center justify-center lg:justify-center lg:w-6/12 lg:items-center'
  const paragraphClass =
    'text-center text-textBlackTertiary mb-6 lg:text-left lg:w-5/6 lg:text-sm lg:p-6'
  const imageClass = 'mb-6 lg:mb-0 w-3/4 lg:w-5/6 transform scale-115'

  if (props.login) {
    return (
      <div className={outerContainerClass}>
        <p className={paragraphClass}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam
          vitae non elementum tincidunt.{' '}
        </p>
        <NextImage
          classnames={imageClass}
          src={image}
          alt="sign up"
          layout="intrinsic"
          quality={90}
        />
      </div>
    )
  } else {
    return (
      <div className={outerContainerClass}>
        <p className={paragraphClass}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam
          vitae non elementum tincidunt.{' '}
        </p>
        <NextImage
          classnames={imageClass}
          src={image}
          alt="sign up"
          layout="intrinsic"
          quality={90}
        />
      </div>
    )
  }
}

export default LoginInfo
