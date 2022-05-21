import Head from 'next/head'
import LandingPage from './landingPage'

export default function Home(): JSX.Element {
  const title = `SLIIT Faculty of Students' Community | Official Website`
  return (
    <div>
      <Head>
        <title>
          {title}
        </title>
        <meta name="description" content={title} />
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
