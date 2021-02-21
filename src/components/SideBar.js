function SideBar() {

    return (
        <nav className="flex fixed bottom-0 h-16 w-screen bg-gray-100 sm:flex-col sm:w-16 sm:h-screen sm:left-0">
          <div className="hidden sm:h-16 sm:text-white sm:font-bold sm:bg-gradient-to-r sm:from-purple-400 sm:to-purple-700 sm:flex sm:justify-center sm:items-center">
              UI
          </div>
          <div className="flex w-full px-4 sm:px-0 sm:flex-col sm:flex-grow sm:justify-between sm:items-center sm:py-4">
            <div className="flex justify-between items-center w-4/6 sm:w-auto sm:block sm:space-y-2">
              <div className="h-10 w-10 hover:bg-gray-200 rounded cursor-pointer flex justify-center items-center">
                <img className="h-6 w-6 bright-0" src="/tailwindcss-logo.svg" alt="Tailwind CSS Logo"/>
              </div>
              <div className="h-10 w-10 hover:bg-gray-200 rounded cursor-pointer flex justify-center items-center">
                <img className="h-6 w-6" style={{filter: 'saturate(0) contrast(1.8)'}} src="/chakra-logomark-black.svg" alt="Chakra UI Logo"/>
              </div>
              <div className="h-10 w-10 hover:bg-gray-200 rounded cursor-pointer flex justify-center items-center">
                <img className="h-7 w-7 bright-0" src="/mui-logo.svg" alt="Material UI Logo"/>
              </div>
              <div className="h-10 w-10 hover:bg-gray-200 rounded cursor-pointer flex justify-center items-center">
                <img className="h-6 w-6 bright-0" src="/vuetify-logo.svg" alt="Vuetify Logo"/>
              </div>
            </div>
            <div className="flex justify-between items-center w-2/6 sm:w-auto sm:block sm:space-y-2">
              <div style={{fontSize: '10px'}} className="h-10 w-10 mx-auto cursor-pointer rounded flex justify-center items-center hover:bg-gray-200">RGB</div>
              <div className="h-10 w-10 flex justify-center items-center rounded cursor-pointer hover:bg-gray-200">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default SideBar;