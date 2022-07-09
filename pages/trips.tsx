import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Trips: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yeehaw Trips</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Trips
        </h1>
      </main>
    </div>
  )
}

export default Trips