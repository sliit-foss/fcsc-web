interface props {
  onSubmit: any
  handleCheck: () => void
}

const SignInFormFields = ({ onSubmit, handleCheck }: props): JSX.Element => {
  const inputfieldClasses =
    'shadow-ds2 mt-4 px-3 border-none text-xs font-semibold h-10 rounded-lg'

  return (
    <form
      id="loginForm"
      className="flex flex-col w-full lg:w-4/5"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        id="username"
        placeholder="Username"
        className={inputfieldClasses}
        required
      />

      <input
        id="password"
        type="password"
        placeholder="Password"
        className={inputfieldClasses}
        required
      />

      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <input
            className="w-3 h-3 mr-2"
            type="checkbox"
            onChange={handleCheck}
          />
          <p className="text-xs text-blue">Remember</p>
        </div>
        <a className="text-xs text-blue cursor-pointer">Forgot Password</a>
      </div>
    </form>
  )
}

export default SignInFormFields
