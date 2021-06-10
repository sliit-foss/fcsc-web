import Head from "next/head";
import Footer from "../components/common/footer/footer";
import Navbar from "../components/common/navbar/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>SLIIT Faculty of Students' Community | Official Website</title>
        <meta
          name="description"
          content="SLIIT Faculty of Students' Community | Official Website"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/@primer/css@^16.0.0/dist/primer.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar/>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br/> <a href="https://nextjs.org">SLIIT Faculty of Students' Community</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
