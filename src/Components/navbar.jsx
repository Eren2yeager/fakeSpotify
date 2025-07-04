import React, { memo, useState, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { IoAddOutline } from "react-icons/io5";
import { BiSolidArchive } from "react-icons/bi";
import { BiArchive } from "react-icons/bi";
import { ToggleFullScreenContext } from "../Contexts/contexts";
import { RiSearchLine } from "react-icons/ri";
import { RiSearchEyeFill } from "react-icons/ri";

const Navbar = () => {
  const ContextFullScreen = useContext(ToggleFullScreenContext);
  const [searchedText, setSearchedText] = useState("");
  const inputRef = useRef(null);
  return (
    <>
      <header className="w-[100%] sm:flex  justify-center sm:justify-between items-center  sm:px-5 pt-2 p-1 ">
        <img
          title="Fake Spotify 🤗"
          src="/images/spotifyImage.svg"
          alt="site-icon"
          className="site-iocn max-w-8 max-h-8 invert hidden sm:block cursor-pointer"
        />

        <div className="w-full sm:w-[500px] flex flex-row sm:gap-3 my-auto  ">
          <NavLink to="/home">
            {({ isActive }) =>
              isActive ? (
                <span
                  className="home-icon   p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-[border] duration-300 hidden sm:block hover:transform-[scale(1.05)]"
                  onClick={(e) => {
                    ContextFullScreen.settoggleFullScreen(false);
                  }}
                >
                  <GoHomeFill className="text-2xl text-white object-fit text-center" />
                </span>
              ) : (
                <span
                  className="home-icon   p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-[border] duration-300 hidden sm:block hover:transform-[scale(1.05)]"
                  onClick={(e) => {
                    ContextFullScreen.settoggleFullScreen(false);
                  }}
                >
                  <GoHome className="text-2xl text-white object-fit text-center" />
                </span>
              )
            }
          </NavLink>
          <div className="relative w-[100%] flex justify-start items-center bg-white sm:bg-zinc-800  gap-2  rounded-lg sm:rounded-2xl h-10 border-3 border-transparent focus-within:border-gray-400 transition-all duration-300">
            {document.activeElement == inputRef.current && searchedText.length > 0 ? 
              <RiSearchEyeFill className="search-icon my-3 ml-3  text-2xl sm:text-white text-black " />
             : 
              <RiSearchLine className="search-icon my-3 ml-3  text-2xl sm:text-white text-black " />
            }
            <input
              value={searchedText}
              onChange={(e) => {
                setSearchedText(e.target.value);
              }}
              type="text"
              className="input_button w-full sm:w-[100%] text-black sm:text-amber-50  outline-none  "
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
                <IoAddOutline className="text-3xl text-black sm:text-white " />
              </div>
            </div>
            <div className="my-3 px-2 border-l-2 border-zinc-500 hidden sm:block">
              <NavLink to="/search">
                {({ isActive }) =>
                  isActive ? (
                    <BiSolidArchive
                      className="text-2xl font-bold text-white"
                      onClick={(e) => {
                        ContextFullScreen.settoggleFullScreen(false);
                      }}
                    />
                  ) : (
                    <BiArchive
                      className="text-2xl font-bold text-white"
                      onClick={(e) => {
                        ContextFullScreen.settoggleFullScreen(false);
                      }}
                    />
                  )
                }
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2  items-center">
          <img
            title="Updates 🔔"
            src="/images/notification.svg"
            alt="notification-icon"
            className="notification-icon w-7 h-7 py-1 px-1 invert  rounded-3xl cursor-pointer   hover:bg-zinc-300 transition-[border] duration-300 hidden sm:block"
          />
<div className="relative w-10 h-10 flex items-center justify-center">
  {/* Outer transparent dark ring */}
  <div className="absolute inset-0 rounded-full bg-gray-600 opacity-40 "></div>

  {/* Inner blue circle */}
  <div className="relative z-10 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
    <span className="text-black font-bold">S</span>
  </div>
</div>
        </div>
      </header>
    </>
  );
};

export default memo(Navbar);
