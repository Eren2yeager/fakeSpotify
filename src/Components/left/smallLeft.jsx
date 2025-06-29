import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import { Link } from "react-router-dom";
import { playlists } from "../../Contexts/contexts";

const PlayCard = (props) => {
  return (
    <div className="playlist-card flex bg-zinc-800  h-[50px] m-1  rounded-xl group">
      <div className="relative w-[50px] h-[50x] bg-zinc-900 rounded-xl">
        <img
          src={`${props.imageUrl}`}
          className=" w-full h-full object-cover rounded-xl group-hover:opacity-40"
          alt=""
        />
        <IoIosPlay className="absolute bottom-1/4 left-1/4 text-2xl hidden group-hover:block active:transform-[scale(0.9)]" />
      </div>
    </div>
  );
};

const SmallLeft = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ContextPlaylists =  React.useContext(playlists)

  // for scrolling effect

  const leftNavRef = React.useRef(null);
  const handleScroll = (e) => {
    const target = e.target;
    if (target.scrollTop > 0) {
      leftNavRef.current.classList.add("shadow-xl", "shadow-gray-900");
      leftNavRef.current.classList.remove("bg-transparent");
    } else {
      leftNavRef.current.classList.remove("shadow-xl", "shadow-gray-900");
      leftNavRef.current.classList.add("bg-transparent");
    }
  };

  return (
    <div
      className={`small-left  w-95px h-[100%] bg-zinc-900 rounded-xl relative overflow-clip `}
    >
      <div
        className=" flex flex-col  justify-center  items-center  gap-3  w-[100%] h-[100px] p-2 transition-all duration-300 sticky top-0 z-30 overflow-hidden "
        ref={leftNavRef}
      >
        <div
          className="toggle-playlists-button-1 cursor-pointer"
          onClick={() => {
            props.setShowPlaylists(!props.showPlaylist);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e3e3e3"
          >
            <path d="M500-640v320l160-160-160-160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-80v-560H200v560h120Zm80 0h360v-560H400v560Zm-80 0H200h120Z" />
          </svg>
        </div>

        <div
          title="Create new Playlist"
          className="w-8 h-8 flex justify-center items-center  px-2 py-2  rounded-full bg-zinc-800"
        >
          <GrAdd size={15} />
        </div>
      </div>

      <div
        className="relative w-full h-[85%] overflow-y-auto shadow- pb-5"
        onScroll={handleScroll}
      >
        {ContextPlaylists?.map((playlist, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveIndex(index);
              console.log(playlists[index]);
            }}
          >
            <Link to={`/playlists/${index}`}>
              <PlayCard
                key={index}
                imageUrl={playlist.imageUrl || "/images/notfound.png"}
              ></PlayCard>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallLeft;
