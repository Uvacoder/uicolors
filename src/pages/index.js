import Head from 'next/head'
import { useState } from 'react';
import SideBar from '../components/SideBar';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [currentTab, setCurrentTab] = useState('tw');
  const [showRGB, setShowRGB] = useState(false);

  return (
    <div>
      <Head>
        <title>Get UI Colors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${isDark && 'dark'}`}>
        <SideBar isDark={isDark} setIsDark={setIsDark} currentTab={currentTab} setCurrentTab={setCurrentTab} showRGB={showRGB} setShowRGB={setShowRGB} />
        <main></main>
      </div>
    </div>
  )
}
