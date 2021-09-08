import Head from 'next/head'
import LandingPage from './landingPage'

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>
          SLIIT Faculty of Students&apos; Community | Official Website
        </title>
        <meta
          name="description"
          content="SLIIT Faculty of Students' Community | Official Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPage />
      </main>
    </div>
  )
}
