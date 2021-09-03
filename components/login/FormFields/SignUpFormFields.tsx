import { useState } from 'react'

interface props {
  onSubmit: any
}

const SignUpFormFields = ({ onSubmit }: props): JSX.Element => {
  const inputfieldClasses =
    'shadow-ds2 mt-4 border-none text-xs font-semibold h-10 rounded-lg'

  const [password, setPassword] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)

  const passwordCheck = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value
    const valid = password === confirmPassword
    setPasswordMatch(valid)
    return valid
  }

  const handlePasswordChange =
    () => (e: React.ChangeEvent<HTMLInputElement>) => {
      const password = e.target.value
      setPassword(password)
      return true
    }

  return (
    <form
      id="signUpForm"
      className="flex flex-col w-full lg:w-4/5"
      onSubmit={
        passwordMatch
          ? onSubmit
          : (event: any) => {
              event.preventDefault()
            }
      }
    >
      <input
        id="username"
        type="text"
        placeholder="Username"
        className={inputfieldClasses}
        required
      />

      <input
        id="email"
        type="email"
        placeholder="Email"
        className={inputfieldClasses}
        required
      />

      <input
        id="password"
        type="password"
        placeholder="Password"
        className={inputfieldClasses}
        onChange={handlePasswordChange()}
        required
        style={
          passwordMatch
            ? { border: '1px solid #ffffff00' }
            : { border: '1px solid #ff0022' }
        }
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className={inputfieldClasses}
        onChange={passwordCheck()}
        required
        style={
          passwordMatch
            ? { border: '1px solid #ffffff00' }
            : { border: '1px solid #ff0022' }
        }
      />
    </form>
  )
}

export default SignUpFormFields
