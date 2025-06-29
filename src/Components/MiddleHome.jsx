import React  from 'react'
import ListRender from './Helper/listRender';
import HorizentalItemsList from './horizentalItemsList';


const MiddleHome = (props) => {
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
    <>
       <div className="max-h-[55px] w-full overflow-x-auto overflow-y-hidden  bg-transparent rounded-t-xl transition-all duration-500 sticky z-30"  ref={middleNavRef}>
            <ListRender
      listItems={["All", "Music", "Podcasts"]}
      className="flex gap-3 px-5  h-full p-3  sticky top-0 z-30"
    />
</div>



     {/*for horizental lst  */}

      <div className="middle-scroll-div min-w-[100%]  h-[95%] p-1 pb-40 sm:pb-5 overflow-y-auto" onScroll={handleScroll}>
        <HorizentalItemsList
          title="Recommed for you!"
          listItems={[
            {
              imageUrl: "/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },
            {
              imageUrl: "/images/nextPhonk.jpg",
              songName: "Next",
              artistName: "NCTS",
            },





           






            
          ]}
        ></HorizentalItemsList>






           






          </div>
    </>
  )
}

export default MiddleHome
