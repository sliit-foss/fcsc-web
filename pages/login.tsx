import Head from 'next/head'
import LoginSignup from '../components/login/LoginSignup'

const Loginpage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Login | FCSC</title>
        <meta name="description" content="FCSC website login" />
      </Head>
      <div
        className="flex p-3 lg:p-0 min-h-95vh"
        style={{
          background: 'url(/shapes/1.svg) no-repeat center center ',
          backgroundSize: 'cover',
        }}
      >
        <LoginSignup />
      </div>
    </div>
  )
}

export default Loginpage
