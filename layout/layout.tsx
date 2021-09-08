import Head from 'next/head'
import Navbar from '../components/common/navbar/Navbar'
import Footer from '../components/common/footer/Footer'

export default function Layout({ children }: any): JSX.Element {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  )
}
