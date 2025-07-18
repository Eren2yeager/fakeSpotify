import React, { useState, useRef, useEffect, useContext } from "react";
import {
  ToggleFullScreenContext,
  showRightContext,
  isPlayingContext,
  audioRefContext,
} from "../../Contexts/contexts";

import { IoMdAddCircleOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { CiCircleChevDown } from "react-icons/ci";
import { CiCircleChevUp } from "react-icons/ci";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import SmartMarquee from "../Helper/SmartMarquee";

import MarqueeDiv from "/src/Components/Helper/marqueeDiv";
import AudioComponent from "../audioComponent";

const RectangularSongCard = (props) => {
  const [addToLibrary, setaddToLibrary] = useState(false);
  const ContextFullScreen = useContext(ToggleFullScreenContext);
  const ContextShowRight = useContext(showRightContext);
  const ContextisPlaying = useContext(isPlayingContext);
  const ContextAudioRef = useContext(audioRefContext);

  const handlePlayPause = (event) => {
    
    if (ContextisPlaying.isPlaying) {
      ContextAudioRef.current.pause();
    } else {
      ContextAudioRef.current.play();
    }
    ContextisPlaying.setisPlaying(!ContextisPlaying.isPlaying);
    event.stopProgation();
  };
  
  const handleClick = () => {

    ContextFullScreen.toggleFullScreen
      ? ContextFullScreen.settoggleFullScreen(false) &&
        ContextShowRight.setShowRight(true)
      : ContextShowRight.setShowRight(!ContextShowRight.showRight);
  };

  return (
    <div className="flex flex-col items- justify-center w-[100%]">
      <div
        className={`relative flex flex-col  justify-center  rounded-xl h-[90px] sm:h-[70px] px-1  bg-gradient-to-tr  ${
          props.fromGradient || `bg-black`
        } to-transparent`}
      >
        <div
          className={`playlist-card flex ${props.className} items-center bg-gradient-to-tr w-[100%] p-1 `}
        >
          <div className="max-w-[80%] flex justify-start items-center">
            <div className="group min-w-[50px] h-[50px] bg-zinc-900 rounded-xl relative">
              <img
                src={props.imageUrl || "/images/notfound.png"}
                className=" w-[100%] h-[100%] object-cover rounded-xl"
                alt=""
              />

              {/* // show right button */}
              {props.showRightButton && (
                <div className="hidden sm:block invisible group-hover:visible transition-all duration-300 hover:animate-pulse ">
                  {ContextShowRight.showRight ? (
                    <CiCircleChevDown
                      className="absolute bottom-1/3 right-1/4 bg-zinc-700 rounded-full text-3xl cursor-pointer"
                      onClick={handleClick}
                    />
                  ) : (
                    <CiCircleChevUp
                      className="absolute bottom-1/3 right-1/4 bg-zinc-700 rounded-full text-3xl cursor-pointer"
                      onClick={handleClick}
                    />
                  )}
                </div>
              )}
            </div>

            <div className="max-w-[100%] flex-col justify-center items-start flex  px-2 truncate">
              {/* // want marquee or elipsis */}
              {props.marquee?.show ? (
                <>

                  <MarqueeDiv text={props.songName || "props not found"} />

                  <MarqueeDiv
                    text={props.artistName || "prop not provided"}
                    className="text-[0.8em] opacity-70 "
                  />
                </>
              ) : (
                <>
                  <div className="max-w-[100%] justify-start text-[14px] truncate">
                    {props.songName || "prop not provided"}
                  </div>
                  <div className="max-w-[100%] justify-start text-[14px] truncate">
                    {props.artistName || "prop not provided"}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="min-w-[100px]  flex gap-5 justify-center items-center p-3">
            {/* show add to library button */}
            {props.showAddTolibraryButton &&
              (addToLibrary ? (
                <TiTick
                  className="bg-pink-400 rounded-full invert animate-pulse cursor-pointer"
                  size={20}
                  onClick={() => {
                    setaddToLibrary(!addToLibrary); 
                  }}
                />
              ) : (
                <IoMdAddCircleOutline
                  className="cursor-pointer"
                  size={20}
                  onClick={() => {
                    setaddToLibrary(!addToLibrary);
                  }}
                />
              ))}

            {/* show play button */}
            {props.showPlayButton && (
              <div className="block sm:hidden">
                <span className="cursor-pointer" onClick={handlePlayPause}>
                  {ContextisPlaying.isPlaying ? (
                    <IoIosPause
                      className=" text-white self-center text-4xl "
                      title="Pause"
                    />
                  ) : (
                    <IoIosPlay
                      className=" text-white self-center text-4xl pl-[2px]"
                      title="Play"
                    />
                  )}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* show audio component */}
        {props.showAudioComponent && (
          <div className="sticky bottom-0 w-[98%] block sm:hidden flex pt-2 justify-start self-center">
            <AudioComponent showTime={false} width={`w-[100%]`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RectangularSongCard;

// props to give
// 1. imageUrl
// 2. songName
// 3. artistName
// 4. marquee - {show:true/false, fadeColor:"from-color"}
// 5. showAddTolibraryButton
// 6. showPlayButton
// 7. showAudioComponent
// 8. showRightButton
// 9.fromGradient
