import React, { useState } from "react";
import ListRender from "./Helper/listRender.jsx";
import HorizentalItemsList from "./horizentalItemsList.jsx";




const Middle = () => {
     const middleNavRef = React.useRef(null);
    
     const handleScroll = (e) => {
      const target = e.target;
      if (target.scrollTop > 0) {
        middleNavRef.current.classList.add("shadow-xl", "shadow-gray-950",'bg-gray-800');
        middleNavRef.current.classList.remove( "bg-transparent");
      } else {
        middleNavRef.current.classList.remove("shadow-xl", "shadow-gray-950","bg-gray-800");
        middleNavRef.current.classList.add( "bg-transparent");
      }
    }

  return (
    <div>

    <div className="middle w-[100vw] xl:w-[70vw] 2xl:w-[57vw] h-[100%] rounded-xl overflow-clip bg-zinc-900 bg-gradient-to-b from-purple-800 to-transparent relative flex flex-col items-center justify-start">
      <div className="max-h-[50px] w-full overflow-x-auto overflow-y-hidden  bg-transparent rounded-t-xl transition-all duration-500 z-30"  ref={middleNavRef}>
            <ListRender
      listItems={["All", "Music", "Podcasts"]}
      className="flex gap-3 px-5  h-full p-3  sticky top-0 z-30"
    />
      </div>



     {/*for horizental lst  */}
      <div className="w-full xl:w-[100%]  max-h-[90%] p-1  overflow-y-auto" onScroll={handleScroll}>
        <HorizentalItemsList
          title="Recommed for you!"
          listItems={[
            {
              imageUrl: "./src/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            {
              imageUrl: "./src/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            {
              imageUrl: "./src/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            
            
          ]}
        ></HorizentalItemsList>
        <HorizentalItemsList
          title="Recommed for you!"
          listItems={[
            {
              imageUrl: "./src/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            {
              imageUrl: "./src/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            {
              imageUrl: "./src/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            {
              imageUrl: "./src/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            {
              imageUrl: "./src/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            {
              imageUrl: "./src/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            {
              imageUrl: "./src/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            {
              imageUrl: "./src/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
            {
              imageUrl: "./src/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "./src/images/when i am thinking.jpeg",
              songName: "When I am thinking about you",
              artistName: "The SUNDAYS",
            },
          ]}
          ></HorizentalItemsList>


          </div>
      </div>
    </div>
  );
};

export default Middle;
