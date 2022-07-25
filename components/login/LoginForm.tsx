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
        document.dispatchEvent(new Event('login'))
        let timerInterval: any
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          title: `<div class="text-2xl">Signed in sucessfully!</div>`,
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
      .catch(() => {
        setShowLoading(false)
        Swal.fire({
          icon: 'error',
          heightAuto: false,
          title: `<div class="text-2xl">Failed to sign in!</div>`,
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
          title: `<div class="text-2xl">Signed up sucessfully!</div>`,
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            clearInterval(timerInterval)
          },
        }).then(() => {
          loginToggleHandler()
        })
      })
      .catch(() => {
        setShowLoading(false)
        Swal.fire({
          icon: 'error',
          heightAuto: false,
          title: `<div class="text-2xl">Failed to sign up!</div>`,
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
        <h2 className="font-extrabold text-fcsc-blue text-3xl mb-2">
          {login ? 'LOGIN' : 'Sign Up'}
        </h2>
        <p className="text-textBlackSecondary font-medium mb-6 text-sm">
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
          className="w-full lg:w-4/5 bg-fcsc-orange filter hover:brightness-110 shadow-md hover:shadow-lg rounded-lg outline-none text-sm leading-6 text-white font-semibold h-10 mt-4 mb-12 transition ease-in duration-150"
          form={login ? 'loginForm' : 'signUpForm'}
        >
          {login ? 'Login' : 'Sign Up'}
        </button>
      </div>
    </>
  )
}

export default LoginForm
