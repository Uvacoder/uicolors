import Head from 'next/head'
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@chakra-ui/react';
import hexToRGB from '../utils/hexToRGB';
import SideBar from '../components/SideBar';

const colors = {
  tw: require('../colors/tailwind'),
  chakra: require('../colors/chakra-ui'),
  mui: require('../colors/mui')
}

console.log(Array.isArray(colors.mui))

const heroImages = {
  tw: '/tailwindcss-logo.svg',
  chakra: '/chakra-logomark.svg',
  mui: '/mui-logo.svg',
  vuetify: 'vuetify-logo.svg'
}

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [currentTab, setCurrentTab] = useState('tw');
  const [showRGB, setShowRGB] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const isInitialRender = useRef(true);

  useEffect(() => {
    if(isInitialRender.current) {
      const item = window.localStorage.getItem('isDark');
      if(item) {
        const bool = item === 'true' ? true : false;
        setIsDark(bool);
      } else {
        window.localStorage.setItem('isDark', isDark);
      }
      isInitialRender.current = false;
    } else {
      const item = window.localStorage.setItem('isDark', isDark);
    }

  }, [isDark])

  const toast = useToast();

  let rgb;

  function copyToClipboard(color) {
    const obj = hexToRGB(color);
    rgb = `rgb(${obj.r}, ${obj.g}, ${obj.b})`;
    if(showRGB) {
      window.navigator.clipboard.writeText(rgb);
      return;
    }
    window.navigator.clipboard.writeText(color);
  }

  return (
    <div>
      <Head>
        <title>Expertly-crafted color palettes in one place.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${isDark && 'dark'}`}>
        <SideBar isDark={isDark} setIsDark={setIsDark} currentTab={currentTab} setCurrentTab={setCurrentTab} showRGB={showRGB} setShowRGB={setShowRGB} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <main className={`pb-24 min-h-screen sm:pl-16 sm:pb-16 dark:bg-black`}>
          <div className="flex justify-center py-10">
            <img className="h-14 sm:h-24" src={heroImages[currentTab]} alt=""/>
          </div>
          <div className="px-10 space-y-8">
            {
            // currentTab === 'mui' || currentTab === 'vuetify' ?
            currentTab === 'vuetify' ?
            <p className="font-bold text-gray-800 text-center dark:text-white">Coming Soon ...</p> :
            colors[currentTab].map(([key, value], index) => (
              <section key={index}>
              <h2 className="text-center uppercase text-sm font-bold text-gray-800 dark:text-white">{key}</h2>
              <div className="flex flex-wrap justify-center text-gray-700">
                {
                Object.entries(value).map(([key, value], index) => (
                <div className="mr-4 mt-2" key={index}>
                  <div className="flex justify-between">
                    <div className="text-xs dark:text-gray-500">{key}</div>
                    <div className="text-xs dark:text-gray-500">{value.toUpperCase()}</div>
                  </div>
                  <div 
                    onClick={() => {
                      copyToClipboard(value);
                      toast({
                        title: `Color ${showRGB ? rgb : value.toUpperCase()} copied to clipboard`,
                        description: `To copy ${showRGB ? 'hex' : 'rgb'} values click the ${showRGB ? 'RGB' : 'HEX'} button in sidebar`,
                        status: "success",
                        duration: 6000,
                        isClosable: true,
                        position: 'top-right',
                      })
                    }} 
                    className="h-8 w-20 rounded shadow cursor-pointer" style={{backgroundColor: value}}
                    >
                    </div>
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
