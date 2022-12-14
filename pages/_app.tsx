import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Trolley Friend</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <div className={styles.container}>
        <header className="border-b-2 pb-3">
          <h1 className={styles.branding}>TrolleyFriend</h1>
        </header>

        <Component {...pageProps} />
      </div>
      <div className="h-20 bg-slate-800 w-screen absolute justify-center bottom-0 flex">
        <div className="flex justify-between items-center w-9/12">
          <Link href="/" className="text-white">Storage</Link>
          <Link href="#" className="text-white font-bold">ADD</Link>
          <Link href="shopping" className="text-white">Shopping List</Link>
        </div>
      </div>
    </>
  )
}
