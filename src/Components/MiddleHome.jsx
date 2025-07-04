import React from "react";
import ListRender from "./Helper/listRender";
import HorizentalItemsList from "./horizentalItemsList";
import GridCellContainer from "./Helper/gridCellContainer";

const MiddleHome = (props) => {
  const middleNavRef = React.useRef(null);

  const handleScroll = (e) => {
    const target = e.target;
    if (target.scrollTop > 0) {
      middleNavRef.current.classList.add(
        "shadow-lg",
        "shadow-zinc-800",
        'bg-zinc-900'
      );
      middleNavRef.current.classList.remove("bg-transparent");
    } else {
      middleNavRef.current.classList.remove(
        "shadow-lg",
        "shadow-zinc-800",
        'bg-zinc-900'

      );
      middleNavRef.current.classList.add("bg-transparent");
    }
  };

  return (
    <>
      <div
        className="h-[60px]  overflow-x-auto overflow-y-hidden  bg-transparent rounded-t-xl transition-all duration-500 sticky top-0"
        ref={middleNavRef}
      >
        <ListRender
          listItems={["All", "Music", "Podcasts"]}
          className="flex gap-3 px-5  h-full p-3  sticky top-0 z-30"
        />
      </div>




      {/*for horizental lst  */}

      <div
        className="middle-scroll-div min-w-[100%]  h-[95%]  pb-40 sm:pb-5 overflow-y-auto"
        onScroll={handleScroll}
      > 
        <GridCellContainer />

        <HorizentalItemsList
          title="Recommed for you!"
          listItems={[
            {
              imageUrl: "/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/dress.jpg",
              songName: "Dress",
              artistName: "Eternxlkz",
            },
            {
              imageUrl: "/images/anatomy.jpg",
              songName: "Anatomy",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/mastushka.jpeg",
              songName: "Mastushka",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/no time to die.jpg",
              songName: "No time to die",
              artistName: "Billie Elish",
            },
            {
              imageUrl: "/images/space.jpg",
              songName: "Space",
              artistName: "Naomi",
            },
            {
              imageUrl: "/images/passo.jpg",
              songName: "Passo Bem Solto",
              artistName: "Atlxs",
            },
            {
              imageUrl: "/images/slay.jpg",
              songName: "Slay",
              artistName: "Eternxlkz",
            },
          ]}
        ></HorizentalItemsList>
        <HorizentalItemsList
          title="Recommed for you!"
          listItems={[
            {
              imageUrl: "/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/dress.jpg",
              songName: "Dress",
              artistName: "Eternxlkz",
            },
            {
              imageUrl: "/images/anatomy.jpg",
              songName: "Anatomy",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/mastushka.jpeg",
              songName: "Mastushka",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/no time to die.jpg",
              songName: "No time to die",
              artistName: "Billie Elish",
            },
            {
              imageUrl: "/images/space.jpg",
              songName: "Space",
              artistName: "Naomi",
            },
            {
              imageUrl: "/images/passo.jpg",
              songName: "Passo Bem Solto",
              artistName: "Atlxs",
            },
            {
              imageUrl: "/images/slay.jpg",
              songName: "Slay",
              artistName: "Eternxlkz",
            },
          ]}
        ></HorizentalItemsList>
        <HorizentalItemsList
          title="Recommed for you!"
          listItems={[
            {
              imageUrl: "/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/dress.jpg",
              songName: "Dress",
              artistName: "Eternxlkz",
            },
            {
              imageUrl: "/images/anatomy.jpg",
              songName: "Anatomy",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/mastushka.jpeg",
              songName: "Mastushka",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/no time to die.jpg",
              songName: "No time to die",
              artistName: "Billie Elish",
            },
            {
              imageUrl: "/images/space.jpg",
              songName: "Space",
              artistName: "Naomi",
            },
            {
              imageUrl: "/images/passo.jpg",
              songName: "Passo Bem Solto",
              artistName: "Atlxs",
            },
            {
              imageUrl: "/images/slay.jpg",
              songName: "Slay",
              artistName: "Eternxlkz",
            },
          ]}
        ></HorizentalItemsList>

      </div>
    </>
  );
};

export default MiddleHome;
