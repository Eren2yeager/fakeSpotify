import React, { useState ,useContext} from "react";
import ListRender from "../Helper/listRender";
import { GrAdd } from "react-icons/gr";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import { Link } from "react-router-dom";
import { playlists } from "../../Contexts/contexts";

const PlayCard = (props) => {
  return (
    <div className="playlist-card flex bg-zinc-800 hover:bg-zinc-700 h-[60px] p-1 my-1 rounded-xl cursor-pointer group">
      <div className="relative min-w-[50px] min-h-[50x] bg-zinc-900 rounded-xl">
        <img
          src={props.imageUrl || "/images/notfound.png"}
          className=" w-full h-full object-cover rounded-xl group-hover:opacity-40"
          alt=""
        />
        <IoIosPlay className="absolute bottom-1/4 left-1/4 text-3xl hidden group-hover:block active:transform-[scale(0.9)]" />
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
  const ContextPlaylists = useContext(playlists);


  // for scrolling effect
  const leftNavRef = React.useRef(null);

  const handleScroll = (e) => {
    const target = e.target;
    if (target.scrollTop > 0) {
      leftNavRef.current.classList.add("shadow-xl", "shadow-gray-950");
      leftNavRef.current.classList.remove("bg-transparent");
    } else {
      leftNavRef.current.classList.remove("shadow-xl", "shadow-gray-950");
      leftNavRef.current.classList.add("bg-transparent");
    }
  };

  return (
    <div
      className={`left max-w-auto h-[100%]  rounded-xl bg-zinc-900   py-1  overflow-clip`}
    >
      <div className="flex flex-row justify-between items-center px-3 my-3 gap-3 group/bigLeft">
        <div className="flex gap-2 justify-center items-center transform sm:translate-x-[-30px] group-hover/bigLeft:translate-x-[0px] transition-all duration-150">
          <div
            className="toggle-playlists-button-2  cursor-pointer transform translate-x-[-30px] group-hover/bigLeft:translate-x-[0px] transition-all duration-100 hidden sm:block"
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
              <path d="M460-320v-320L300-480l160 160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z" />
            </svg>
          </div>
          <div className="font-bold text-xl">Your Library</div>
        </div>
        <div
          title="Create new Playlist"
          className="w-auto flex justify-center items-center ml-1 p-2 sm:py-1  rounded-full hover:bg-zinc-700 transition-all duration-500 bg-zinc-800 "
        >
          <GrAdd className="text-xl"  />
          <p className="font-bold pl-1 hidden sm:block">Create</p>
        </div>
       </div>

       <div
        className="flex justify-start gap-2 px-3 pb-2 max-h-[50px] transition-all duration-500"
        ref={leftNavRef}
       >
        <ListRender
          listItems={["Playlists", "Albums", "Artists"]}
          className="flex gap-2"
        />
        </div>

       <div
        className="playlist-container w-full max-h-[85%] px-3 overflow-y-auto pb-3"
        onScroll={handleScroll}
       >
        {ContextPlaylists?.map((playlist, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveIndex(index);
              console.log(playlist);
            }}
          >
            <Link to={`/playlists/${index}`}>
            <PlayCard
              imageUrl={playlist.imageUrl || "/images/notfound.png"}
              playlistName={playlist.playlistName || "Playlist Name"}
              totalSongs={playlist.totalSongs || 0}
              onClick={() => {
                setActiveIndex(index);
                console.log(activeIndex);
              }}
              ></PlayCard>
              </Link>

          </div>
        ))}
      </div>
    </div>
  );
};
export default BigLeft;
