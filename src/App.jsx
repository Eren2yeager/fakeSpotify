import { useState } from "react";

import Navbar from "./Components/navbar.jsx";
import Right from "./Components/right.jsx";
import HorizentalItemsList from "./Components/horizentalItemsList.jsx";
import BigLeft from "./Components/left/bigLeft.jsx";
import SmallLeft from "./Components/left/smallLeft.jsx";
import ListRender from "./Components/Helper/listRender.jsx";
import Middle from "./Components/middle.jsx";

function App() {
  const [showPlaylists, setShowPlaylists] = useState(false);    

      const handleClick1=(e)=>{
       const toggleButton= document.getElementsByClassName("toggle-playlists-button-1")[0]
       console.log(" library has been opened")
       setShowPlaylists(true)
    }
      const handleClick2=(e)=>{
       const toggleButton= document.getElementsByClassName("toggle-playlists-button-2")[1]
       console.log("library has been closed")
       setShowPlaylists(false)
    }

  return (
    <>
      <section className=" w-[100%] h-[100%] flex flex-col items-center">
        <Navbar></Navbar>

        <main className="w-[100%] h-[100%] sm:h-[80%] flex justify-center  text-white px-1 py-1 gap-1 overflow-y-auto ">
          <BigLeft function={handleClick2} showPlaylist ={showPlaylists} />
          <SmallLeft function={handleClick1}  showPlaylist ={showPlaylists}/> 

         <Middle></Middle>

            <Right
              imageUrl="./src/images/nextPhonk.jpg"
              artistImageUrl="data:image/jpeg;base64,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"
              songName="Next"
              artistName="NCTS"
            ></Right>
          
        </main>
      </section>
    </>
  );
}

export default App;
