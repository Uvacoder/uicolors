import Head from 'next/head'
import { useState } from 'react';
import SideBar from '../components/SideBar';

const colors = {
  tw: require('../colors/tailwind'),
  chakra: require('../colors/chakra-ui')
}

const heroImages = {
  tw: '/tailwindcss-logo.svg',
  chakra: '/chakra-logomark.svg',
  mui: '/mui-logo.svg',
  vuetify: 'vuetify-logo.svg'
}

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
        <main className="pb-24 min-h-screen sm:pl-16 sm:pb-12 dark:bg-black">
          <div className="flex justify-center py-10">
            <img className="h-14 sm:h-24" src={heroImages[currentTab]} alt=""/>
          </div>
          <div className="px-10 space-y-8">
            {
            currentTab === 'mui' || currentTab === 'vuetify' ?
            <p className="font-bold text-gray-800 text-center dark:text-white">Coming Soon ...</p> :
            colors[currentTab].map(([key, value], index) => (
              <section key={index}>
              <h2 className="text-center uppercase text-sm font-bold text-gray-800 dark:text-white">{key}</h2>
              <div className="mt-2 flex flex-wrap justify-center text-gray-700">
                {
                Object.entries(value).map(([key, value], index) => (
                <div className="mr-4" key={index}>
                  <div className="flex justify-between">
                    <div className="text-xs dark:text-gray-500">{key}</div>
                    <div className="text-xs dark:text-gray-500">{value}</div>
                  </div>
                  <div className="h-8 w-20 rounded shadow" style={{backgroundColor: value}}></div>
                </div>
                ))
                }
              </div>
              </section>
            ))
            }
          </div>
        </main>
      </div>
    </div>
  )
}
