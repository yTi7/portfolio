import Head from 'next/head'
import { Space_Grotesk } from '@next/font/google'

const space = Space_Grotesk({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>YashTi7</title>
        <meta name="description" content="My portfolio app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`flex items-center justify-center w-full`}>
        <h1 className={`text-5xl ${space.className}`}>Welcome to my portfolio.</h1>
      </main>
    </>
  )
}
