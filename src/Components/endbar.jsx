import React, { useState, useRef, useEffect, useContext } from "react";
import { isPlayingContext, audioRefContext } from "../Contexts/contexts";
import { NavLink ,useNavigate} from "react-router-dom";

import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";

import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { RiSearchEyeFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { IoLibraryOutline } from "react-icons/io5";
import { IoLibrary } from "react-icons/io5";

import { GrAdd } from "react-icons/gr";

import EndLeft from "./endbars/endLeft";
import RectangularSongCard from "./endbars/RectangularSongCard";

import EndRight from "./endbars/endRight";
import EndMiddle from "./endbars/endMiddle";

export const Endbar = (props) => {
  return (
    <>
      <footer className="text-amber-50 sm:h-[75px] w-[100%] sticky bottom-0 ">
        <div className={`${props.className}`}>
          <div
            className={`text-white flex justify-between bg-cover h-[75px] w-[100%]`}
          >
            <div className="endbar-left max-w-[25%] h-[100%] flex items-center">
              <EndLeft
                imageUrl={props.imageUrl}
                songName={props.songName}
                artistName={props.artistName}
                setShowRight={props.setShowRight}
              />
            </div>

            <div className="endbar-middle min-w-[50%] h-[100%] ">
              <EndMiddle />
            </div>
            <div className="endbar-right max-w-[25%] h-[100%]">
              <EndRight />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export const SmallEndbar = (props) => {

  const navigate = useNavigate();
  return (
    <footer
      className={`backdrop-blur-xs z-10 rounded-t-3xl text-amber-50 sm:h-[75px] w-[100%] flex flex-col  justify-start  h-[150px] fixed bottom-0 bg-gradient-to-t from-black to-transparent pb-15 px-2 ${props.className} `}
    >
      <div onClick={()=>{navigate("/currentlyPlaying")}}>

      <RectangularSongCard
        marquee={{ show: true, fadeColor: props.fromGradient }}
        showPlayButton={true}
        showAddTolibraryButton={true}
        showAudioComponent={true}
        fromGradient={props.fromGradient}
        songName={props.songName}
        artistName={props.artistName}
        imageUrl={props.imageUrl}
        showRightButton={true}
        className="justify-between"
        />
        </div>

      <NavLink to="/currentlyPlaying">
      </NavLink>


      <div className=" w-[100%]  flex justify-around items-start  pt-3">
        <NavLink to="/home">
        {({isActive}) =>isActive ? (
            <GoHomeFill className="text-3xl font-bold " />
          ) : (
            <GoHome className="text-3xl font-bold " />
          )}
        </NavLink>
        
        <NavLink to="/search">
        {({isActive}) =>isActive ? (
            <RiSearchEyeFill className="text-3xl font-bold " />
          ) : (
            <RiSearchLine className="text-3xl font-bold " />
          )}
        </NavLink>

        <NavLink to="/playlists">
          {({isActive}) =>isActive ? (
            <IoLibrary className="text-2xl font-bold " />
          ) : (
            <IoLibraryOutline className="text-2xl font-bold" />
          )}
        </NavLink>

        <GrAdd className="text-2xl font-bold" />
      </div>
    </footer>
  );
};
