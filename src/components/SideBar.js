import clb from 'clb';

const tabClasses = ({isActive, isExpanded}) => {
  isExpanded = Boolean(isExpanded);
  return `h-10 px-2 flex items-center rounded cursor-pointer transition-width overflow-hidden relative focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-900 ${isActive && 'bg-gray-200 dark:bg-gray-900'} ${isExpanded ? 'w-30' : 'w-10' }`
}

const btnCls = clb({
  base: 'h-10 px-2 flex items-center rounded cursor-pointer transition-width overflow-x-hidden relative focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-900',
  variants: {
    active: {
      true:'bg-gray-200 dark:bg-gray-900'
    },
    expanded: (props) => ({
      'sm:w-30': props.isExpanded,
      'w-10': !props.isExpanded
    })
  }
});

function SideBar({ isDark, setIsDark, currentTab, setCurrentTab, showRGB, setShowRGB, isExpanded, setIsExpanded }) {
  return (
    <nav className={`flex fixed bottom-0 h-16 w-screen bg-gray-100 transition-width sm:flex-col ${isExpanded ? 'sm:w-36': 'sm:w-16'} sm:h-screen sm:left-0 dark:bg-gray-800`}>
      <div onClick={() => setIsExpanded(!isExpanded)} className="px-3 cursor-pointer sm:bg-gradient-to-r sm:from-purple-400 sm:to-purple-700 hidden sm:block">
        <button className={`hidden group sm:h-16 sm:flex sm:focus:outline-none sm:items-center sm:px-2 sm:cursor-pointer transition-width overflow-hidden relative ${isExpanded ? 'w-30' : 'w-10'}`}>
          <svg className={`h-6 w-6 select-none text-gray-200 group-hover:text-white transition-transform ${isExpanded && 'transform rotate-180'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
          {isExpanded && <span className="absolute select-none left-10 text-gray-200 text-sm font-bold whitespace-nowrap group-hover:text-white">Shrink</span>}
        </button>

      </div>

      <div className="flex w-full px-4 sm:px-3 sm:flex-col sm:flex-grow sm:justify-between sm:items-center sm:py-4">
        <div className="flex justify-around items-center w-4/6 sm:w-auto sm:block sm:space-y-2">
          <button onClick={() => setCurrentTab('tw')} className={btnCls({active: currentTab === 'tw', isExpanded})}>
            <img className="h-6 w-6 select-none" src="/tailwindcss-logo.svg" alt="Tailwind CSS Logo"/>
            {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">Tailwind</span>}
          </button>
          <button onClick={() => setCurrentTab('chakra')} className={btnCls({active: currentTab === 'chakra', isExpanded})}>
            <img className="h-6 w-6 select-none" src="/chakra-logomark.svg" alt="Chakra UI Logo"/>
            {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">Chakra UI</span>}
          </button>
          <button onClick={() => setCurrentTab('mui')} className={btnCls({active: currentTab === 'mui', isExpanded})}>
            <img className="h-6 w-6 select-none" src="/mui-logo.svg" alt="Material UI Logo"/>
            {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">Material UI</span>}
          </button>
          <button onClick={() => setCurrentTab('ant')} className={btnCls({active: currentTab === 'ant', isExpanded})}>
            <img className="h-6 w-6 select-none" src="/vuetify-logo.svg" alt="ant Logo"/>
            {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">ant</span>}
          </button>
        </div>
        <div className="flex justify-around items-center w-2/6 sm:w-auto sm:block sm:space-y-2">
          <button onClick={() => setShowRGB(!showRGB)} className={`${btnCls({active: false, isExpanded })} text-xss`}>
            <span className="select-none dark:text-white">{showRGB ? 'RGB' : 'HEX'}</span>
            {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-xss whitespace-nowrap dark:text-gray-400">IS ACTIVE</span>}
          </button>
          <button onClick={() => setIsDark(!isDark)} className={btnCls({active: isDark, isExpanded})}>
            <svg className="h-6 w-6 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">Dark Mode</span>}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default SideBar;