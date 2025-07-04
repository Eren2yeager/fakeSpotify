import React, { useState, useRef, useContext, useEffect } from "react";
import MarqueeDiv from "./Helper/marqueeDiv";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import EndLeft from "./endbars/RectangularSongCard";
import { playlists ,imagePreviewContext } from "../Contexts/contexts";
import { useParams } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";

const MiddlePlaylistView = (props) => {
  const playlistsArrayContext = useContext(playlists);
  const ContextSelectedImage = useContext(imagePreviewContext)

  const [addToLibrary, setaddToLibrary] = useState(false);

  // for search
  const [showInput, setShowInput] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(false);
  const handleIconClick = () => {
    setShowInput(true);
    setTimeout(() => {
      inputRef.current?.focus(); // Focus after rendering
    }, 0);
  };

  const handleBlur = () => {
    if (searchText.trim() === "") {
      setShowInput(false);
    }
  };

  // for resizing
  const [titleWidth, setTitleWidth] = useState(300); // Initial px width
  const [albumWidth, setAlbumWidth] = useState(300); // Initial px width
  const [dateAddedWidth, setDateAddedWidth] = useState(150); // Initial px width
  const resizerRef = useRef(null);

  const startResizing = (e) => {
    const target = e.target.getAttribute("data-resizer-name");

    const startX = e.clientX;

    let subject = null;
    let setSubject = null;
    if (target == "title") {
      subject = titleWidth;
      setSubject = (value) => {
        setTitleWidth(value);
      };
    } else if (target == "album") {
      subject = albumWidth;
      setSubject = (value) => {
        setAlbumWidth(value);
      };
    } else {
      subject = dateAddedWidth;
      setSubject = (value) => {
        setDateAddedWidth(value);
      };
    }
    let startWidth = subject;

    const onMouseMove = (e) => {
      const newWidth = startWidth + (e.clientX - startX);
      setSubject(Math.max(newWidth, 100)); // minimum 100px
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  // for header bg on scroll
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (e) => {
    setScrolled(e.target.scrollTop > 225);
  };

  // for hovering show playbutton
  const [isHovering, setIsHovering] = useState(NaN);

  // handeling slugs
  const { slug } = useParams();
  const playlist = playlistsArrayContext[parseInt(slug)];

  return (
    <div
      className="scroll-container  relative w-[100%] h-[100%] rounded-xl  overflow-y-auto text-white  bg-zinc-900"
      onScroll={handleScroll}
    >
      <div className=" w-[100%]   rounded-xl flex flex-col">
        <div className={`${playlist.bgColor || "bg-transparent"}   w-[100%] z-11 h-[300px] sm:h-[250px] flex flex-col sm:flex-row items-center justify-end sm:justify-start p-5 gap-3 overflow-hidden shadow-xl shadow-black/35 `}
        
        >
          
          <div className="max-w-[155px] min-w-[150px] sm:min-w-[200px] h-[150px] sm:h-[200px] sm:self-end"  >
            <img
              src={playlist.imageUrl || `/images/notfound.png`}
              alt="playlist-img"
              className="w-[100%] h-[100%] object-cover rounded-xl shadow-lg shadow-black cursor-pointer"
              onClick={(e) => {(ContextSelectedImage.setSrc(`${e.target.src}`));}}
            />
          </div>

          <div className="flex justify-start  flex-col sm:items-start sm:justify-end  w-[100%]  max-h-[100%] sm:self-end truncate">
            <p className="font-sans hidden sm:block">Playlist</p>
            <p
              className="text-2xl sm:text-5xl xl:text-6xl font-sans font-extrabold text-balance   max-w-[100%] overflow-hidden text-ellipsis break-words truncate pb-2"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
            >
              {playlist.playlistName || "Playlist"}
            </p>
            <p className="font-sans opacity-70 max-w-[100%] truncate">
              {playlist.totalSongs || 0} songs
            </p>
          </div>
        </div>

        {playlist.songs?.length > 0 ? (
          <div className={` text-white bg-gradient-to-b ${playlist.bgColor || "bg-transparent"}  to-zinc-900 h-screen `}>
            <div
              className={`sticky top-0 z-10 h-[60px]  flex  items-center justify-between  transition-colors duration-300 ${
                scrolled ? playlist.bgColor || "bg-zinc-900 " : "bg-transparent"
              }  py-3 px-5 `}
            >
              <div className="p-2  rounded-full bg-green-500  transition-all duration-300 active:transform-[scale(0.95)] cursor-pointer">
                <span>
                  {/* <IoIosPlay className='text-3xl pl-1  invert'/> */}
                  <IoIosPause className="text-3xl  invert" />
                </span>
              </div>
              {scrolled && (
                <p className="font-bold font-sans text-xl px-3 mr-auto">
                  {playlist.playlistName || "Playlist"}
                </p>
              )}

              <div className="max-w-[200px] flex   items-center justify-start backdrop-blur-3xl brightness-150   transition-all duration-300  rounded-full h-10 border-2 border-transparent  cursor-pointer ">
              <RiSearchLine className="search-icon  m-2  text-xl text-white"
               onClick={handleIconClick}
              />
                <div className={`${
                    showInput ? `w-[70%]` : `w-[0]`
                  }  overflow-hidden flex justify-start relative`}>

                <input
                  type="text"
                  className={`input_button w-auto text-amber-50  outline-none transition-all duration-300 `}
                  placeholder="Search in playlist"
                  ref={inputRef}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onBlur={handleBlur}
                  />
                  </div>
                  <div className= {`${searchText.length > 0 ? "visible" : "invisible"}   ${showInput ? "block" :"hidden"}  z-10 h-[100%] w-[35px] rounded-r-2xl  ml-auto cursor-pointer transition-all duration-200 `}>

                   <div
                    className="transform rotate-45 active:scale-90 p-0.5 hover:scale-125"
                    onClick={() => {
                      setSearchText("");
                      inputRef.current?.focus();
                    }}
                    >
                    <IoAddOutline className="text-3xl " />
                   </div>
                  </div>
              </div>
            </div>
            

            {/* for songs view */}
            <div
              className={`group/titleHeader sticky  top-[60px] z-10 p-5 mb-2 h-10 flex items-center border-b-[0.5px] border-b-[#747474b2]  text-sm font-medium text-gray-300 bg-slate-500  sm:px-10   transition-colors duration-300 ${
                scrolled ? "bg-zinc-900" : "bg-transparent"
              }`}
            >
              <div className="w-[40px]  truncate ">#</div>
              <div
                style={{ width: `${titleWidth}px` }}
                className={`truncate relative flex items-center `}
              >
                <span className="">Title</span>
                <div
                  data-resizer-name="title"
                  ref={resizerRef}
                  onMouseDown={startResizing}
                  className="hidden sm:block absolute right-0 top-0 h-full w-1 cursor-col-resize bg-transparent group-hover/titleHeader:bg-white"
                ></div>
              </div>
              <div
                style={{ width: `${albumWidth}px` }}
                className="truncate hidden sm:block relative flex items-center "
              >
                <span className="">Album</span>
                <div
                  data-resizer-name="album"
                  ref={resizerRef}
                  onMouseDown={startResizing}
                  className="hidden sm:block absolute right-0 top-0 h-full w-1 cursor-col-resize bg-transparent group-hover/titleHeader:bg-white"
                ></div>
              </div>
              <div
                style={{ width: `${dateAddedWidth}px` }}
                className="mr-auto relative truncate hidden lg:block"
              >
                <span className="">Date added</span>
                <div
                  data-resizer-name="date added"
                  ref={resizerRef}
                  onMouseDown={startResizing}
                  className="hidden sm:block absolute right-0 top-0 h-full w-1 cursor-col-resize bg-transparent group-hover/titleHeader:bg-white "
                ></div>
              </div>
              <div className=" w-[150px] max-w-[100%]  truncate hidden sm:block sm:flex justify-center">
                <FaRegClock className="" />
              </div>
            </div>

            {playlist.songs?.map((song, index) => (
              <div
                key={index}
                className="flex items-center text-gray-300 p-5 border-b border-white/15 hover:bg-white/8  sm:mx-5 rounded-[5px] group/songbar"
                onMouseEnter={() => {
                  setIsHovering(index);
                }}
                onMouseLeave={() => {
                  setIsHovering(NaN);
                }}
              >
                {/* handle hovering show playbutton */}
                <div className="w-[40px]">
                  {isHovering === index ? (
                    <IoIosPlay className="text-2xl cursor-pointer" />
                  ) : (
                    <span className="px-1">{index + 1}</span>
                  )}
                </div>

                <div
                  style={{ width: `${titleWidth}px` }}
                  className=" truncate  flex items-center gap-3"
                >
                  <img
                    src={song.imageUrl || "/images/notfound.png"}
                    alt={`song cover ${index}`}
                    className="w-10 h-10 rounded  cursor-pointer"
                    title="view image"
                    onClick={(e) => {(ContextSelectedImage.setSrc(`${e.target.src}`));console.log("by middle" + ContextSelectedImage.src)}}
                  />
                  <div className="truncate">
                    <div className="font-semibold text-gray-300  truncate">
                      {song.songName}
                    </div>
                    <div className="text-sm  max-w-[100%] truncate">
                      {song.artistName}
                    </div>
                  </div>
                </div>

                <div
                  style={{ width: `${albumWidth}px` }}
                  className=" truncate hidden sm:block"
                >
                  {song.albumName}
                </div>
                <div
                  style={{ width: `${dateAddedWidth}px` }}
                  className="mr-auto truncate hidden lg:block"
                >
                  {song.added}
                </div>

                <div className=" w-[50px] text-right truncate flex justify-center ml-auto">
                  <span className=" transform active:scale-90 hover:scale-110 transition-200 p-1 invisible group-hover/songbar:visible">
                    {song?.isSaved ? (
                      <TiTick
                        className="bg-green-600 rounded-full text-black animate-pulse cursor-pointer"
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
                    )}
                  </span>
                </div>
                <div className=" w-[50px] text-center truncate hidden sm:block ">
                  {song.duration}
                </div>
                <div className=" w-[50px]   truncate  flex justify-center invisible group-hover/songbar:visible">
                  <span className="p-1 transform active:scale-90 hover:scale-110 transition-200 cursor-pointer">
                    <BsThreeDots className="text-xl " />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-bold text-center text-xl p-10">+ Add Some Songs</p>
        )}
      </div>
    </div>
  );
};

export default MiddlePlaylistView;
