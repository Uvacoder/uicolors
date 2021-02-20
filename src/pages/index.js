import Head from 'next/head'
import SideBar from '../components/SideBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Get UI Colors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <SideBar />
        <main></main>
      </div>
    </div>
  )
}
