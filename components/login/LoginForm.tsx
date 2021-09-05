import { useState } from 'react'
import { useRouter } from 'next/router'
import SignInFormFields from './FormFields/SignInFormFields'
import SignUpFormFields from './FormFields/SignUpFormFields'
import { AuthEndpoints } from '../../pages/api/auth'
import LoadingOverlay from '../common/LoadingOverlay'
import Swal from 'sweetalert2'

interface LoginFormProps {
  login: boolean
  loginToggleHandler: () => void
}

const LoginForm = ({
  login,
  loginToggleHandler,
}: LoginFormProps): JSX.Element => {
  const [showLoading, setShowLoading] = useState(false)
  const [rememberMeValue, setRememberMeValue] = useState(false)

  const router = useRouter()

  const onSignInSubmitAction = (event: any) => {
    event.preventDefault()
    setShowLoading(true)

    const formData = {
      username: event.target.username.value,
      password: event.target.password.value,
    }

    AuthEndpoints.signInUser(formData)
      .then(() => {
        setShowLoading(false)
        window.localStorage.setItem('RememberMe', rememberMeValue.toString())
        window.localStorage.setItem('LoggedIn', 'true')
        let timerInterval: any
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          title: 'Signed in sucessfully!',
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            clearInterval(timerInterval)
          },
        }).then(() => {
          router.push({
            pathname: '/admin',
          })
        })
      })
      .catch((e) => {
        console.log(e)
        setShowLoading(false)
        Swal.fire({
          icon: 'error',
          heightAuto: false,
          title: 'Failed to sign in!',
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  const onSignUpSubmitAction = (event: any) => {
    event.preventDefault()
    setShowLoading(true)

    const formData = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }

    AuthEndpoints.signUpUser(formData)
      .then(() => {
        setShowLoading(false)
        let timerInterval: any
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          title: 'Signed up sucessfully!',
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            clearInterval(timerInterval)
          },
        }).then(() => {
          loginToggleHandler()
        })
      })
      .catch((error) => {
        console.error(error)
        setShowLoading(false)
        Swal.fire({
          icon: 'error',
          heightAuto: false,
          title: 'Failed to sign up!',
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  const handleCheck = () => setRememberMeValue(!rememberMeValue)

  return (
    <>
      <LoadingOverlay show={showLoading} />
      <div className="flex flex-col order-1 lg:order-none items-center lg:w-6/12 lg:justify-center lg:transform lg:scale-90">
        <h2 className="font-inter font-extrabold text-fcsc-blue text-3xl lg:text-2xl mb-2">
          {login ? 'LOGIN' : 'Sign Up'}
        </h2>
        <p className="font-inter text-textBlackSecondary font-medium mb-6 text-sm">
          {login ? 'Login' : 'Sign up'} to access the best things!
        </p>
        <p
          className="text-sm border-b-2 w-full lg:w-4/5 text-center mb-2"
          style={{
            color: '#D2D2D2',
            lineHeight: '0.1rem',
            borderColor: '#D2D2D2',
          }}
        ></p>
        {login ? (
          <SignInFormFields
            onSubmit={onSignInSubmitAction}
            handleCheck={handleCheck}
          />
        ) : (
          <SignUpFormFields onSubmit={onSignUpSubmitAction} />
        )}
        <button
          className="w-full lg:w-4/5 bg-fcsc-orange filter hover:brightness-110 shadow-md hover:shadow-lg rounded-lg outline-none font-inter text-sm leading-6 text-white font-semibold h-10 mt-4 mb-10 transition ease-in duration-150"
          form={login ? 'loginForm' : 'signUpForm'}
        >
          {login ? 'Login' : 'Sign Up'}
        </button>
      </div>
    </>
  )
}

export default LoginForm
