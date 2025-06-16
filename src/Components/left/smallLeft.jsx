import React, { useState } from "react";

const PlayCard = (props) => {
  return (
    <div className="playlist-card flex bg-zinc-800  h-[50px] m-1  rounded-xl ">
      <div className=" w-[50px] h-[50x] bg-zinc-900 rounded-xl">
        <img
          src={`${props.imageUrl}`}
          className=" w-full h-full object-cover rounded-xl"
          alt=""
        />
      </div>
    </div>
  );
};

const SmallLeft = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const playlists = props.playlists || [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    // for scrolling effect

      const leftNavRef = React.useRef(null)
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
    <div className={`small-left flex flex-col items-center justify-center w-95px h-[100%] bg-zinc-900 rounded-xl relative hidden xl:block  overflow-clip `} >
      <div className="flex flex-col  justify-center  items-center  gap-3 sticky top-0 max-h-[100px] py-3 transition-all duration-300" ref={leftNavRef}>
        <div className="toggle-playlists-button-1 cursor-pointer" onClick={props.function}>
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
          className="w-7 h-7 flex justify-center items-center ml-1 px-2 py-2  rounded-full bg-zinc-700"
        >
          <span className="material-symbols-outlined">add</span>
        </div>
      </div>

      <div className="relative w-full max-h-[82%] overflow-y-auto " onScroll={handleScroll} >
        {playlists.map((playlist, index) => (
          <div  key={index} onClick={() =>{ setActiveIndex(index);console.log(playlists[index]);}}>
          <PlayCard
            key={index}
            imageUrl={playlist.imageUrl || "./src/images/notfound.png"}
            ></PlayCard>
            </div>
        ))}
      </div>
    </div>
  );
};

export default SmallLeft;
