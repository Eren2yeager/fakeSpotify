import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MarqueeDiv from "./Helper/marqueediv";

const Right = (props) => {
  const rightNavRef = React.useRef(null);

  const handleScroll = (e) => {
    const target = e.target;
    if (target.scrollTop > 0) {
      rightNavRef.current.classList.add("shadow-xl", "shadow-gray-950");
      rightNavRef.current.classList.remove("bg-transparent");
    } else {
      rightNavRef.current.classList.remove("shadow-xl", "shadow-gray-950");
      rightNavRef.current.classList.add("bg-transparent");
    }
  };

  return (
    <div
      className="right group flex flex-col item-center justify-between w-[315px] h-[100%] bg-zinc-900 bg-gradient-to-b from-purple-900 to-transparent rounded-xl  hidden xl:block relative  overflow-clip"
      id="right"
    >
      <div
        className=" flex gap-3 justify-between items-center w-full max-h-[50px] py-3 sticky t-0 px-3 transition-all duration-200"
        ref={rightNavRef}
      >
        <div className="flex gap-2 justify-center items-center translate-x-[-25%] group-hover:translate-x-[0%] transition-transform duration-500">
          <div className="transition-all duration-500">
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

          <p className="font-bold">Playlist-Name</p>
        </div>
        <div className="w-[30px] h-[30px] bg-zinc-700 justify-center rounded-full flex font-bold invisible group-hover:visible transition-all duration-100 animate-pulse-">
          <p className="">...</p>
        </div>
      </div>

      <div
        className="relative overflow-auto  w-full h-[91%] flex flex-col items-center justify-start px-3 scroll-"
        onScroll={handleScroll}
      >
        <div className="song-image w-[100%] h-[280px]  bg-zinc-500  rounded-xl ">
          <img
            className="w-[100%] h-[100%] object-cover rounded-xl"
            src={`${props.imageUrl || `./src/images/notfound.png`}`}
            alt=""
          />
        </div>
        <div className="song-info w-[100%] h-[7em]  p-3 mb-5 lg:px-0 overflow-clip">
          <div className="song-name font-bold  text-2xl">
            <MarqueeDiv text={props.songName} />
          </div>
          <div className="song-artist opacity-70">
            <MarqueeDiv text={props.artistName} />
          </div>
        </div>

        <div className="w-[100%] min-h-[20%] rounded-xl  relative my-2">
          <p className="font-bold p-3 absolute ">About the artist</p>

          {props.artistImageUrl != null ? (
            <>
              <div className="flex flex-col justify-center w-[100%] min-h-[220px] rounded-xl  bg-zinc-700">
                <div className="song-image w-[100%] h-[220px] flex flex-col  bg-zinc-500  rounded-t-xl">
                  <img
                    className="w-[100%] h-[100%] object-cover rounded-t-xl"
                    src={`${props.artistImageUrl}`}
                    alt=""
                  />
                </div>
                <p className="px-3 font-bold">{props.artistName}</p>
              </div>
            </>
          ) : (
            <div className="opacity-50">No data found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Right;
