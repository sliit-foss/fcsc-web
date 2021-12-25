import Head from 'next/head'
import Navbar from '../components/common/navbar/Navbar'
import Footer from '../components/common/footer/Footer'

export default function Layout({ children }: any): JSX.Element {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"
        />
      </Head>
      <main className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  )
}
