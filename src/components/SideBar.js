function SideBar() {

    return (
        <nav className="flex fixed bottom-0 h-16 w-screen bg-gray-100 sm:flex-col sm:w-16 sm:h-screen sm:left-0">
          <div className="hidden sm:h-16 sm:text-white sm:font-bold sm:bg-gradient-to-r sm:from-purple-400 sm:to-purple-700 sm:flex sm:justify-center sm:items-center">
              UI
          </div>
          <div className="flex w-full px-4 sm:px-0 sm:flex-col sm:flex-grow sm:justify-between sm:items-center sm:py-4">
            <div className="flex justify-between items-center w-4/6 sm:w-auto sm:block sm:space-y-2">
              <div className="h-10 w-10 hover:bg-gray-200 rounded cursor-pointer flex justify-center items-center">
                <svg className="bright-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clipPath="url(#prefix__clip0)"><path fill="#06B6D4" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>
              </div>
              <div className="h-10 w-10 hover:bg-gray-200 rounded cursor-pointer flex justify-center items-center">
                <svg className="bright-0 h-8 w-8" viewBox="0 0 257 257" xmlns="http://www.w3.org/2000/svg"><path d="M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z" fill="#fff"></path><defs><linearGradient id="mark" x1="128.5" x2="128.5" y2="257" gradientUnits="userSpaceOnUse"><stop stopColor="#7BCBD4"></stop><stop offset="1" stopColor="#29C6B7"></stop></linearGradient></defs></svg>
              </div>
              <div className="h-10 w-10 hover:bg-gray-200 rounded cursor-pointer flex justify-center items-center">
                <svg className="bright-0 h-6 w-6" viewBox="0 0 600 476.6" xmlns="http://www.w3.org/2000/svg"><path d="m0 259.8v-259.8l225 129.9v86.6l-150-86.6v173.2z" fill="#00b0ff"/><path d="m225 129.9 225-129.9v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z" fill="#0081cb"/><path d="m225 303.1v86.6l150 86.6v-86.6z" fill="#00b0ff"/><path d="m375 476.3 225-129.9v-173.2l-75 43.3v86.6l-150 86.6zm150-346.4v-86.6l75-43.3v86.6z" fill="#0081cb"/></svg>
              </div>
              <div className="h-10 w-10 hover:bg-gray-200 rounded cursor-pointer flex justify-center items-center">
                <svg className="bright-0 h-6 w-6" width="344" height="393" viewBox="0 0 344 393" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M171.723 189.485L91.4878 0.00793457H171.723V189.485Z" fill="#1697F6"/>
                <path d="M89.9495 57.1976H0L171.723 392.158V245.107L89.9495 57.1976Z" fill="#7BC6FF"/>
                <path d="M171.723 0L171.723 189.485L251.955 0.00795277H171.723" fill="#1867C0"/>
                <path d="M253.487 57.1976H343.436L171.723 392.158V245.107L253.487 57.1976Z" fill="#AEDDFF"/>
                </svg>
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