import Head from "next/head";
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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br />{" "}
          <a href="https://nextjs.org">SLIIT Faculty of Students' Community</a>
        </h1>
      </main>
    </div>
  );
}
