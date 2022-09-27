import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* this is for my portfolio */}
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="frontend developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>Hi</main>

      <footer className={styles.footer}>I am Victoria Banjo</footer>

      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  );
}
