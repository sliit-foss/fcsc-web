import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Layout from '../layout/layout'

function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
