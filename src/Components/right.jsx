import React, { useContext, useRef } from "react";
import {
  ToggleFullScreenContext,
  showRightContext,
} from "../Contexts/contexts";
import MarqueeDiv from "./Helper/marqueediv";
import { BsThreeDots } from "react-icons/bs";
import { GoScreenFull } from "react-icons/go";
import { GoScreenNormal } from "react-icons/go";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import ShowMoreShowLess from "./Helper/showMoreShowLess";
import ImagePreviewer from "./Helper/ImagePreviewer";
import EndMiddle from "./endbars/endMiddle";
import AudioComponent from "./audioComponent";

const PlayCard = (props) => {
  return (
    <div className="playlist-card flex  justify-between items-center  bg-zinc-800 h-[75px] p-2  rounded-xl hover:bg-zinc-700 group/playcard my-2">
      <div className="flex  justify-start items-center max-w-[90%]">
        <div className="group max-w-[60px] max-h-[60x] bg-zinc-800 rounded-xl relative">
          <img
            src={props.imageUrl || "/images/notfound.png"}
            className=" w-[100%] h-[100%] object-contain rounded-xl group-hover/playcard:opacity-60"
            alt=""
          />
          <IoIosPlay className="absolute bottom-1/4 left-1/4 text-3xl hidden group-hover/playcard:block active:transform-[scale(0.9)] hover:animate-pulse" />
        </div>

        <div className="max-w-[100%] flex-col justify-start items-start flex  px-2 truncate">
          <MarqueeDiv
            text={props.songName || "prop not provided"}
            className="font-bold "
            containerWidth={`max-w-[100%]`}
          />
          <MarqueeDiv
            text={props.artistName || "prop not provided"}
            className="text-[0.8em] opacity-70 "
            containerWidth={`max-w-[100%]`}
          />
        </div>
      </div>

      <div className="flex justify-center gap-3 items-center p-2 hover:animate-pulse active:transform-[scale(0.9)] invisible group-hover/playcard:visible">
        <TiTick
          className="bg-pink-400 rounded-full invert animate-pulse cursor-pointer"
          size={20}
        />
        <BsThreeDots className="text-xl" />
      </div>
    </div>
  );
};

const Right = (props) => {
  const ContextFullScreen = useContext(ToggleFullScreenContext);
  const ContextShowRight = useContext(showRightContext);
  const rightNavRef = React.useRef(null);
  const SongImageRef = useRef(null);
  const ArtistImageRef = useRef(null);
  const ArtistInfoRef = useRef(null);

  const handleScroll = (e) => {
    const target = e.target;
    if (target.scrollTop > 0) {
      rightNavRef.current.classList.add("shadow-xl", "shadow-gray-950");
      rightNavRef.current.classList.remove("bg-transparent");

      if (ContextFullScreen.toggleFullScreen) {
        SongImageRef.current.classList.add("transform", "scale-90", "blur-xs");
        ArtistImageRef.current.classList.add(
          "transform",
          "translate-y-[-100px]"
        );
      } else {
        SongImageRef.current.classList.remove(
          "transform",
          "scale-90",
          "blur-xs"
        );
        ArtistImageRef.current.classList.remove(
          "transform",
          "translate-y-[-100px]"
        );
      }
    } else {
      rightNavRef.current.classList.remove("shadow-xl", "shadow-gray-950");
      rightNavRef.current.classList.add("bg-transparent");

      SongImageRef.current.classList.remove("transform", "scale-90", "blur-xs");
      ArtistImageRef.current.classList.remove(
        "transform",
        "translate-y-[-100px]"
      );
    }
  };
  const handleClick = (e) => {
    if (ContextFullScreen.toggleFullScreen) {
      ContextFullScreen.settoggleFullScreen(false);
      ContextShowRight.setShowRight(false);
    } else {
      ContextShowRight.setShowRight(!ContextShowRight.showRight);
    }
  };

  return (
    <div
      className={`text-white right group/right flex flex-col  justify-start ${
        ContextFullScreen.toggleFullScreen ? `min-w-[100%]` : `w-[100%] `
      }  h-[100%] bg-gradient-to-b ${
        props.fromGradient || `bg-zinc-900`
      }   to-zinc-900 rounded-xl    relative  overflow-clip ${
        ContextShowRight.showRight ? "block" : "hidden"
      }  `}
      id="right"
    >
      <div
        className=" flex gap-3 justify-between items-center  h-[60px] py-3 sticky t-0 px-3 transition-all duration-200"
        ref={rightNavRef}
      >
        <div
          className="transition-all duration-100 cursor-pointer hidden sm:block transform translate-x-[-40px] group-hover/right:translate-x-[0px]"
          id="toggle-right"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25px"
            viewBox="0 -960 960 960"
            width="25px"
            fill="#e3e3e3"
          >
            <path d="M500-640v320l160-160-160-160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-80v-560H200v560h120Zm80 0h360v-560H400v560Zm-80 0H200h120Z" />
          </svg>
        </div>

        <p className="font-bold transform sm:translate-x-[-35px] group-hover/right:translate-x-[-0px] transition-all duration-150 mr-auto max-w-[100%] truncate">
          Playlist-Name
        </p>
        <div className="justify-center items-center rounded-full flex font-bold invisible group-hover/right:visible transition-all duration-100  gap-1">
          <span className=" transition-all duration-300 hover:backdrop-blur-lg hover:bg-white/8  p-2 rounded-full cursor-pointer">
            <BsThreeDots className="text-xl" />
          </span>
          <span
            className=" transition-all duration-300 hover:backdrop-blur-lg hover:bg-white/8 p-2 rounded-full "
            onClick={() => {
              ContextFullScreen.settoggleFullScreen(
                !ContextFullScreen.toggleFullScreen
              );
            }}
          >
            {ContextFullScreen.toggleFullScreen ? (
              <GoScreenNormal className="text-xl" title="FullScreen" />
            ) : (
              <GoScreenFull className="text-xl" title="FullScreen" />
            )}
          </span>
        </div>
      </div>

      <div
        className="relative  overflow-auto w-[100%]   flex flex-col items-center justify-between  px-3 transition-all duration-500 pb-40 sm:pb-0"
        onScroll={handleScroll}
      >
        <div
          className={`song-image  max-w-[100%] ${ContextFullScreen.toggleFullScreen && "min-h-[60vh] flex flex-col justify-center"} rounded-xl transition-all duration-500 `}
          ref={SongImageRef}
        ><div className="max-w-[100%] ">

            <img
              className="max-w-[100%] max-h-[400px] object-cover rounded-xl transition-all duration-500 shadow-xl shadow-gray-950"
              src={`${props.imageUrl || `/images/notfound.png`}`}
              alt=""
              />
              </div>
          <div
            className={`song-info max-w-[100%] overflow-clip py-4 ${
              ContextFullScreen.toggleFullScreen ? `hidden` : ``
            }`}
          >
            <div className="max-w-[100%]  flex-col justify-center items-start flex  truncate mr-auto">

            <MarqueeDiv text={props.songName || "prop not provided"} textClassName="font-sans font-bold text-xl"/>

            <MarqueeDiv
              text={props.artistName || "prop not provided"}
              textClassName="font-sans font-bold text-[0.9em] opacity-70"
            />
            </div>

            {/* <dir className='w-[100%] mt-10 sm:hidden'>
             <EndMiddle />
              </dir>  */}
          </div>
        </div>

        <div
          className="w-[100%] mt-auto rounded-xl mb-2 relative transition-all duration-500 flex justify-center gap-5 "
          ref={ArtistImageRef}
        >
          <div
            className={`flex flex-col relative  max-w-[100%]   rounded-xl  bg-zinc-800 mb-1 pb-1 transition-all duration-500 mt-10 shadow-xl shadow-gray-950`}
          >
            <div className="font-bold w-[100%] p-3  absolute text-shadow-xl text-shadow-gray-900 flex">
              About the Artist
            </div>
            <div className="song-image max-w-[400px] transition-all duration-500  max-h-[250px] flex flex-col  bg-zinc-500  rounded-t-xl">
              <img
                className="max-w-[100%] h-[100%] transition-all duration-500 object-cover rounded-t-xl"
                src={`${props.artistImageUrl || `/images/notfound.png `}`}
              />
            </div>
            <div className="max-w-[400px]">
              <p className="px-3 pt-2 font-bold max-w-[100%] truncate">
                {props.artistName || "Prop not found"}
              </p>
              <article className="p-3 text-sm   max-h-[calc(16*5)] transition-all duration-300">
                <ShowMoreShowLess
                  text={props.artistInfo}
                  maxLength={`80`}
                  className="text-white/50"
                />
              </article>
            </div>
          </div>

          {ContextFullScreen.toggleFullScreen && (
            <div
              className={`artist-article max-w-[400px] h-fit rounded-xl  bg-zinc-800 mb-1 pb-1 transition-all duration-500 mt-10 shadow-xl shadow-gray-950 p-3 `}
            >
              <h1 className="text-2xl font-bold px-2">Next in queue</h1>
              <PlayCard />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Right;
