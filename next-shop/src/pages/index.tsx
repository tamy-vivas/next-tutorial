import Head from 'next/head'
import { Inter } from 'next/font/google'
import Title from '../components/Title';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
      </main>
    </>
  )
}
