import React from "react";
import { isPlayingContext, playlists } from "../../Contexts/contexts";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import { NavLink ,useNavigate} from "react-router-dom";

const PlaylistCard = ({index,image,title}) => {
  const navigate= useNavigate();
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <div className="group/PlaylistCard relative flex items-center bg-white/5 backdrop-blur-md hover:bg-white/8 rounded-md  transition group cursor-pointer z-10">
      <NavLink to={`/playlists/${index}`}>
        <div className="flex gap-3 items-center ">
          <img
            src={image}
            alt={title}
            className="w-12 h-12 rounded-sm object-cover"
          />
          <p className="text-white text-xs sm:text-[1em]   font-bold truncate max-w-full">
            {title}
          </p>
        </div>
      </NavLink>
      <div
        className="absolute right-2  p-2 bg-green-500 rounded-full invisible group-hover/PlaylistCard:visible"
        onClick={(e) => {
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? (
          <IoIosPause className="text-2xl text-black" />
        ) : (
          <IoIosPlay className="text-2xl pl-0.5 text-black" />
        )}
      </div>

    </div>
  );
};

const GridCellContainer = () => {
  const playlistArray = React.useContext(playlists);

  return (
    <div className="px-5 pb-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        {playlistArray.slice(0, 8).map((pl, idx) => (
          <PlaylistCard
            key={idx}
            index={idx}
            title={pl.playlistName || "prop not found"}
            image={pl.imageUrl || "/images/notfound.png"}
          />
        ))}
      </div>
    </div>
  );
};

export default GridCellContainer;
