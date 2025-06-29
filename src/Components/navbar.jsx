import React, { memo, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { IoAddOutline } from "react-icons/io5";

const Navbar = () => {
  const [searchedText, setSearchedText] = useState("");
  const inputRef = useRef(null);
  return (
    <>
      {console.log("its navbar")}
      <header className="w-[100%] flex  justify-center sm:justify-between items-center  sm:px-5 pt-2 ">
        <img
          title="Fake Spotify 🤗"
          src="/images/spotifyImage.svg"
          alt="site-icon"
          className="site-iocn max-w-8 max-h-8 invert hidden sm:block cursor-pointer"
        />

        <div className="w-full sm:w-[500px] flex flex-row sm:gap-3  p-2.5">
          <NavLink to="/home">
            <span className="home-icon   p-1.5 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-[border] duration-300 hidden sm:block hover:transform-[scale(1.05)]">
              {/* <img title="Home 🏡" src="/images/home.svg" alt="home-icon" className="home-icon invert w-10 h-10 py-2.5 px-2.5 bg-zinc-300 rounded-2xl hover:bg-zinc-400 transition-[border] duration-300 hidden sm:block"/>
               */}
              <GoHomeFill className="text-3xl text-white object-fit text-center" />
            </span>
          </NavLink>
          <div className="relative w-[100%] flex justify-start items-center bg-zinc-800 gap-2  rounded-2xl h-10 border-3 border-transparent focus-within:border-gray-400 transition-all duration-300">
            <img
              src="/images/search.svg"
              alt="search-icon"
              className="search-icon my-3 ml-3 w-5 h-5 invert text-white "
            />
            <input
              value={searchedText}
              onChange={(e) => {
                setSearchedText(e.target.value);
              }}
              type="text"
              className="input_button w-full sm:w-[100%]  text-amber-50  outline-none  "
              placeholder="What do you want to listen to?"
              ref={inputRef}
            />
            <div
              className={`${
                searchedText.length > 0 ? "visible" : "invisible"
              }  z-10 h-[100%] w-[35px] rounded-r-2xl  ml-auto cursor-pointer transition-all duration-200 `}
            >
              <div
                className="transform rotate-45 active:scale-90 p-0.5 hover:scale-125"
                onClick={() => {
                  setSearchedText("");
                  inputRef.current?.focus();
                }}
              >
                <IoAddOutline className="text-3xl text-white " />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <img
            title="Updates 🔔"
            src="/images/notification.svg"
            alt="notification-icon"
            className="notification-icon w-7 h-7 py-1 px-1 invert  rounded-3xl cursor-pointer  hover:bg-zinc-300 transition-[border] duration-300 hidden sm:block"
          />
          <div
            title="Profile 👤"
            className="profile-logo w-[30px] h-[30px] sm:flex justify-center items-center rounded-full outline-0  outline-zinc-500 hover:outline-4 bg-blue-500 cursor-pointer transition-all duration-300 hidden sm:block"
          >
            <div className="mx-auto font-bold">S</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Navbar);
