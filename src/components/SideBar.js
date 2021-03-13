import { useState } from 'react';
import clb from 'clb';

const btnCls = clb({
  base: 'h-10 px-2 flex items-center rounded cursor-pointer transition-width overflow-x-hidden relative focus:outline-none group',
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

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

function SideBar({ isDark, setIsDark, currentTab, setCurrentTab, showRGB, setShowRGB, isExpanded, setIsExpanded, isOldView, setIsOldView, showSettings, setShowSettings }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({name: '', email: '', message: ''});

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("/", {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded"},
      body: encode({"form-name": "contact", ...formData})
    })
    .then(() => console.log('success'))
    .catch((err) => console.log(err))
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value});
  }

  return (
    <nav className={`flex fixed bottom-0 h-16 w-screen bg-gray-100 transition-width sm:flex-col ${isExpanded ? 'sm:w-36': 'sm:w-16'} sm:h-screen sm:left-0 dark:bg-gray-800`}>
      <div onClick={() => setIsExpanded(!isExpanded)} className="px-3 cursor-pointer hidden sm:block sm:bg-gray-400 sm:dark:bg-gray-700">
        <button className={`hidden group sm:h-16 sm:flex sm:focus:outline-none sm:items-center sm:px-2 sm:cursor-pointer transition-width overflow-hidden relative ${isExpanded ? 'w-30' : 'w-10'}`}>
          <svg className={`h-6 w-6 select-none text-gray-100 group-hover:text-white transition-transform ${isExpanded && 'transform rotate-180'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
          {isExpanded && <span className="absolute select-none left-10 text-gray-100 text-sm font-bold whitespace-nowrap group-hover:text-white">Shrink</span>}
        </button>

      </div>

<div className="w-full flex justify-center items-center sm:h-full">
      <div className="flex px-4 space-x-3 sm:space-x-0 sm:px-3 sm:h-full sm:flex-col sm:flex-grow sm:justify-between sm:items-center sm:py-4">
        <div className="flex justify-around items-center w-4/5 space-x-3 sm:space-x-0 sm:w-auto sm:block sm:space-y-2">
          <button onClick={() => setCurrentTab('tw')} className={btnCls({active: currentTab === 'tw', isExpanded})}>
            <img className={`h-6 w-6 select-none transform-gpu scale-90 opacity-90 group-hover:scale-100 group-hover:opacity-100 ${currentTab === 'tw' ? 'scale-100 opacity-100' : ''}`} src="/tailwindcss-logo.svg" alt="Tailwind CSS Logo"/>
            {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">Tailwind</span>}
          </button>
          <button onClick={() => setCurrentTab('chakra')} className={btnCls({active: currentTab === 'chakra', isExpanded})}>
            <img className={`h-6 w-6 select-none transform-gpu scale-90 opacity-90 group-hover:scale-100 group-hover:opacity-100 ${currentTab === 'chakra' ? 'scale-100 opacity-100' : ''}`} src="/chakra-logomark.svg" alt="Chakra UI Logo"/>
            {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">Chakra UI</span>}
          </button>
          <button onClick={() => setCurrentTab('mui')} className={btnCls({active: currentTab === 'mui', isExpanded})}>
            <img className={`h-6 w-6 select-none transform-gpu scale-90 opacity-90 group-hover:scale-110 group-hover:opacity-100 ${currentTab === 'mui' ? 'scale-110 opacity-100' : ''}`} src="/mui-logo.svg" alt="Material UI Logo"/>
            {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">Material UI</span>}
          </button>
          <button onClick={() => setCurrentTab('ant')} className={btnCls({active: currentTab === 'ant', isExpanded})}>
            <img className={`h-6 w-6 select-none transform-gpu scale-90 opacity-90 group-hover:scale-100 group-hover:opacity-100 ${currentTab === 'ant' ? 'scale-100 opacity-100' : ''}`} src="/antdesign-logo.svg" alt="Ant Logo"/>
            {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">Ant Design</span>}
          </button>
        </div>
        <div className="flex justify-around items-center w-1/5 sm:w-auto sm:block sm:space-y-2">
          <div className={`${showSettings ? 'flex' : 'hidden'} justify-around items-center absolute bottom-16 left-1/2 transform -translate-x-1/2 space-x-3 sm:space-x-0 sm:transform-none px-3 py-2 rounded-t-md sm:p-0 bg-gray-100 dark:bg-gray-800 sm:static sm:w-auto ${showSettings ? 'sm:block' : 'hidden'} sm:space-y-2`}>
            <div onClick={(e) => {e.target === e.currentTarget && setShowForm(false)}} className={`${showForm ? 'flex' : 'hidden'} justify-center items-center fixed z-20 inset-0 h-screen w-screen bg-gray-700 bg-opacity-70`}>
              <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" className="w-full max-w-lg bg-white rounded px-10 py-8">
                <input type="hidden" name="form-name" value="contact" />
                <label>
                  <div className="text-gray-600 font-bold">Name<span className="text-red-500 ml-1 text-sm">*</span></div>
                  <input onChange={handleChange} value={formData.name} className="mt-1 w-full border rounded px-4 py-2 focus:outline-none focus:border-gray-500 text-gray-700" type="text" name="name" required/>
                </label>
                <label className="mt-4 block">
                  <div className="text-gray-600 font-bold">Email<span className="text-red-500 ml-1 text-sm">*</span></div>
                  <input onChange={handleChange} value={formData.email} className="mt-1 w-full border rounded px-4 py-2 focus:outline-none focus:border-gray-500 text-gray-700" type="email" name="email" required/>
                </label>
                <label className="mt-4 block">
                  <div className="text-gray-600 font-bold">Message<span className="text-red-500 ml-1 text-sm">*</span></div>
                  <textarea onChange={handleChange} value={formData.message} className="mt-1 w-full border rounded px-4 py-2 focus:outline-none focus:border-gray-500 text-gray-700" type="text" name="message" rows="3"/>
                </label>
                <input className="block mt-4 w-full bg-gray-600 py-3 rounded font-bold text-white cursor-pointer hover:bg-gray-800" type="submit" value="Submit"/>
              </form>
            </div>
            <button onClick={() => setShowForm(true)} className={`${btnCls({active: false, isExpanded})} hidden sm:flex`}>
              <svg className="bi bi-grid-3x2-gap-fill w-6 h-6 dark:text-gray-400 text-gray-500 dark:group-hover:text-white group-hover:text-gray-700 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">Contact</span>}
            </button>
            <button onClick={() => setIsOldView(!isOldView)} className={btnCls({active: false, isExpanded})}>
              {!isOldView && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-grid-3x2-gap-fill dark:text-gray-400 text-gray-500 dark:group-hover:text-white group-hover:text-gray-700 transition-colors" viewBox="0 0 16 16">
                <path d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z"/>
              </svg>}
              {isOldView && <svg className="bi bi-grid-3x2-gap-fill dark:text-gray-400 text-gray-500 dark:group-hover:text-white group-hover:text-gray-700 transition-colors transform scale-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"/></svg>}
              {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">{isOldView ? 'Col' : 'Row'} View</span>}
            </button>
            <button onClick={() => setShowRGB(!showRGB)} className={`${btnCls({active: false, isExpanded })}`}>
              <span className="select-none dark:text-gray-400 text-gray-500 dark:group-hover:text-white group-hover:text-gray-900 transition-colors font-bold text-xss">{!showRGB ? 'RGB' : 'HEX'}</span>
              {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 whitespace-nowrap text-sm dark:text-gray-400">{showRGB ? 'Copy Hex' : 'Copy Rgb'}</span>}
            </button>
            {/* <button onClick={() => setIsDark(!isDark)} className={btnCls({active: isDark, isExpanded})}> */}
            <button onClick={() => setIsDark(!isDark)} className={btnCls({active: false, isExpanded})}>
              {isDark && <svg className="h-6 w-6 dark:text-gray-400 text-gray-500 dark:group-hover:text-white group-hover:text-gray-700 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>}
              {!isDark && <svg className="h-6 w-6 dark:text-gray-400 text-gray-500 dark:group-hover:text-white group-hover:text-gray-700 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>}
              {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">{isDark ? 'Light':'Dark'} Mode</span>}
            </button>

          </div>
          <button onClick={() => setShowSettings(!showSettings)} className={btnCls({active: showSettings, isExpanded})}>
            <svg className={`h-6 w-6 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-white transition-colors ${showSettings ? 'dark:text-white text-gray-700' : 'dark:text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {isExpanded && <span className="hidden sm:block absolute select-none left-10 text-gray-700 text-sm whitespace-nowrap dark:text-gray-400">Settings</span>}
          </button>
        </div>
      </div>

    </div>
    </nav>
  )
}

export default SideBar;