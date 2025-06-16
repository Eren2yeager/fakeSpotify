import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className="w-[100%] flex  justify-center sm:justify-between items-center  sm:px-5 ">
            <img title="Fake Spotify 🤗" src="./src/images/spotifyImage.svg" alt="site-icon" className="site-iocn max-w-8 max-h-8 invert hidden sm:block"/>
    
        <div className="w-full sm:w-[500px] flex flex-row  py-2.5 px-2.5 space-x-3">
            <img title="Home 🏡" src="./src/images/home.svg" alt="home-icon" className="home-icon  invert w-10 h-10 py-2.5 px-2.5 bg-zinc-300 rounded-2xl hover:bg-zinc-400 transition-[border] duration-300 hidden sm:block"/>
            <div className="w-[100%] flex justify-center items-center bg-zinc-800 gap-2  rounded-2xl h-10 border-3 border-transparent focus-within:border-gray-400 transition-all duration-300">
                <img src="./src/images/search.svg" alt="search-icon" className="search-icon my-3 ml-3 w-5 h-5 invert text-white "/>
                <input type="text" className="input_button w-full sm:w-[100%]]  text-amber-50 pr-3 outline-none  " placeholder='What do you want to listen to?'/>
            </div>
        </div>
        <div className="flex flex-row gap-3 items-center">
            <img title="Updates 🔔" src="./src/images/notification.svg" alt="notification-icon" className="notification-icon w-7 h-7 py-1 px-1 invert  rounded-3xl   hover:bg-zinc-300 transition-[border] duration-300 hidden sm:block"/>
            <div title="Profile 👤" className="profile-logo w-[30px] h-[30px] sm:flex justify-center items-center rounded-full border-3 border-transparent bg-blue-500 hover:border-zinc-200 transition-[border] duration-300 hidden sm:block">
                <div className="mx-auto font-bold">S</div>
            </div>
        </div>
    </header>
    </>

  )
}

export default Navbar
