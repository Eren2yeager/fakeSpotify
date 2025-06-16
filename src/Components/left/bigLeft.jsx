import React, { useState } from "react";
import ListRender from "../Helper/listRender";

const PlayCard = (props) => {









  return (
    <div className="playlist-card flex bg-zinc-800 h-[60px] p-1 my-1 rounded-xl ">
      <div className=" w-[60px] h-[60x] bg-zinc-900 rounded-xl">
        <img
          src={props.imageUrl0 || "./src/images/notfound.png"}
          className=" w-full h-full object-cover rounded-xl"
          alt=""
        />
      </div>
      <div className="w-full flex-col justify-center items-start flex  px-2 truncate">
        <div className="max-w-[100%] justify-start text-[14px] truncate">
          {props.playlistName || "Playlist-Name"}
        </div>
        <div className="flex text-xs max-w-[100%] truncate justify-start opacity-50">
          <div>Playlist</div>
          <div className="px-1">•</div>
          <div className="total-songs px-1">{props.totalSongs || 0} songs</div>
        </div>
      </div>
    </div>
  );
};

const BigLeft = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const playlists = props.playlists || [{},{},{},{},{},{},{},{},{},{}];



  // for scrolling effect
    const leftNavRef = React.useRef(null);
    
     const handleScroll = (e) => {
      const target = e.target;
      if (target.scrollTop > 0) {
        leftNavRef.current.classList.add("shadow-xl", "shadow-gray-950");
        leftNavRef.current.classList.remove( "bg-transparent");
      } else {
        leftNavRef.current.classList.remove("shadow-xl", "shadow-gray-950");
        leftNavRef.current.classList.add( "bg-transparent");
      }
    }

  return (
    <div className="left w-[320px] h-[100%]  bg-zinc-900 rounded-xl   pb-1 hidden 2xl:block overflow-clip" >
      <div className="flex flex-row justify-between items-center px-3 my-3 gap-3 ">
        <div className="flex gap-2 justify-center items-center">
          <div className="toggle-playlists-button-2 cursor-pointer" onClick={props.function}>
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
          <div className="font-bold text-xl hidden 2xl:block">Your Library</div>
        </div>
        <div
          title="Create new Playlist"
          className="w-auto flex justify-center items-center ml-1  py-1 px-2 rounded-full hover:bg-zinc-700 transition-all duration-500 bg-zinc-800 "
        >
          <span className="material-symbols-outlined">add</span>
          <p className="font-bold hidden 2xl:block">Create</p>
        </div>
      </div>

      <div className="flex justify-start gap-2 px-3 pb-2 max-h-[50px] transition-all duration-500" ref={leftNavRef} >
        <ListRender
          listItems={["Playlists", "Albums", "Artists"]}
          className="flex gap-2"
        />
      </div>

      <div className="playlist-container w-full max-h-[83%] px-3 overflow-y-auto" onScroll={handleScroll}>
        {playlists.map((playlist, index) => (
          <div key={index} onClick={() => {setActiveIndex(index);console.log(playlist);}}>
          <PlayCard
 
            imageUrl0={playlist.imageUrl || "./src/images/notfound.png"}
            playlistName={playlist.playlistName || "Playlist Name"}
            totalSongs={playlist.totalSongs || 0}
            onClick={() => {
              setActiveIndex(index);
              console.log(activeIndex);
            }}
            ></PlayCard>
            </div>
        ))}
      </div>
    </div>
  );
};
export default BigLeft;
