import React, { useState, useRef, useEffect } from "react";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Card = (props) => {
  return (
    <div className="group w-[120px] h-[160px] sm:w-[180px] sm:h-[230px] overflow-hidden p-3 m-1 rounded-[5px] hover:bg-gradient-to-b from-zinc-800 to-transparent transition-all duration-300 relative active:to-zinc-800 ">
      <img
        className="w-[100%] h-[70%] object-cover rounded-[5px] shadow-lg shadow-gray-950"
        src={`${props.imageUrl || "/images/notfound.png"}`}
        alt=""
      />
      <div className="flex flex-col h-[30%] w-[100%] justify-start item-end ">
        <div
          className="song-name lg:text-wrap max-w-[95%]  overflow-hidden text-ellipsis break-words"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {props.songName}
        </div>
        <div className="song-artist  lg:text-wrap max-w-[95%]  lg:max-h-[3em] overflow-hidden truncate opacity-70 text-[0.7em]">
          {props.artistName}
        </div>
      </div>
      <span className="p-2  rounded-full bg-green-500  absolute bottom-0 right-[10%] opacity-0 group-hover:bottom-[35%] group-hover:opacity-100 transition-all duration-300 active:transform-[scale(0.95)]">
        <span>
          {/* <IoIosPlay className='text-3xl pl-1  invert'/> */}
          <IoIosPause className="text-3xl  invert" />
        </span>
      </span>
      {/* <img className="w-[25%] h-[25%] absolute bottom-0 right-[10%] opacity-0 group-hover:bottom-[35%] group-hover:opacity-100 transition-all duration-300" src="\src\images\playButton.svg" alt="" /> */}
    </div>
  );
};

const HorizentalItemsList = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const listItems = props.listItems || [{}, {}, {}, {}, {}];

  // for horzental scrolling effect without user scroll
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const checkOverflow = () => {
    if (!parentRef.current) return;
    setShowLeftArrow(parentRef.current.scrollLeft > 0);
    setShowRightArrow(
      parentRef.current.scrollWidth - parentRef.current.scrollLeft >
        parentRef.current.clientWidth + 5
    );
  };

  useEffect(() => {
    const observer = new ResizeObserver(checkOverflow);
    if (parentRef.current) observer.observe(parentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // for horzental scrolling effect with user scroll

  const handleScroll = (e) => {
    setTimeout(() => {
      setShowLeftArrow(parentRef.current.scrollLeft > 0);
      setShowRightArrow(
        parentRef.current.scrollWidth - parentRef.current.scrollLeft >
          parentRef.current.clientWidth + 5
      );
    }, 200);
  };

  // to scroll left and right
  const scroll = (direction) => {
    const { current } = parentRef;
    if (current) {
      const scrollAmount = parentRef.current.clientWidth + 100; // Adjust the scroll amount as needed
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" }); 
      }
    }
  };

  return (
    <>
      <div className="relative  group/horizentalList">
        <div className="font-bold px-4 text-2xl">{props.title}</div>
        <div
          className=" max-w-[100%] overflow-auto sm:overflow-hidden"
          ref={parentRef}
          onScroll={handleScroll}
        >
          <div
            className={`  hidden sm:block bg-zinc-700 p-1  rounded-full absolute cursor-pointer left-0 top-1/3 z-10 opacity-80 ${
              showLeftArrow == false ? `invisible` : "visible"
            } hover:bg-zinc-900`}
            onClick={() => scroll("left")}
          >
            <MdOutlineKeyboardArrowLeft className="text-3xl" />
          </div>

          <div className="flex w-fit h-fit  bg-transparent " ref={childRef}>
            {listItems.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  console.log(item);
                }}
              >
                <Card
                  key={index}
                  imageUrl={item.imageUrl}
                  songName={item.songName}
                  artistName={item.artistName}
                />
              </div>
            ))}
          </div>
          <div
            className={` hidden sm:block bg-zinc-700 p-1  rounded-full cursor-pointer absolute  right-0 top-1/3 z-10 opacity-80  ${
              showRightArrow == false ? `invisible` : "visible"
            }  hover:bg-zinc-900`}
            onClick={() => scroll("right")}
          >
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizentalItemsList;
