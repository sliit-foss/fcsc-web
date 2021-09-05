import LoginSignup from '../components/login/LoginSignup'

const Loginpage = (): JSX.Element => {
  return (
    <div title="Login | FCSC">
      <div
        className="flex p-3 lg:p-0 min-h-95vh"
        style={{
          background: 'url(/shapes/1.png) no-repeat center center ',
          backgroundSize: 'cover',
        }}
      >
        <LoginSignup />
      </div>
    </div>
  )
}

export default Loginpage
