import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import ImagePreviewer from "../Components/Helper/ImagePreviewer.jsx";
import { imagePreviewContext } from "../Contexts/contexts.js";


import {
  ToggleFullScreenContext, playlists
} from "../Contexts/contexts.js";

import Navbar from "../Components/navbar.jsx";
import Right from "../Components/right.jsx";
import BigLeft from "../Components/left/bigLeft.jsx";
import SmallLeft from "../Components/left/smallLeft.jsx";
import { Endbar } from "../Components/endbar.jsx";
import { SmallEndbar } from "../Components/endbar.jsx";


function MainLayout(props) {
  const [showPlaylists, setShowPlaylists] = useState(false);
  const ContextFullScreen = useContext(ToggleFullScreenContext);
  const ContextPlaylists = useContext(playlists);

  return (
    <>
      <section className=" w-[100%] h-[100%] flex flex-col items-center justify-between relative font-sans overflow-hidden">
        <Navbar></Navbar>

        <main className="w-[100%] h-[100%] sm:max-h-[80%] flex  text-white   gap-1 p-1  overflow-hidden transition-all duration-500 ">
          {!ContextFullScreen.toggleFullScreen && (
            <>
              <div className="sm:flex hidden sm:block transition-all duration-300 justify-self-start">
                {showPlaylists ? 
                <div>
                <BigLeft
                 setShowPlaylists={setShowPlaylists}
                 showPlaylist={showPlaylists}
                />
                </div>
                :
                <div >
                <SmallLeft
                 setShowPlaylists={setShowPlaylists}
                 showPlaylist={showPlaylists}
                />
                </div>
}
              </div>
            </>
          )}

          <div className="w-[100%] overflow-hidden">
            <div
              className={`wrapper middle  min-w-[100%]  h-[100%] rounded-xl  bg-zinc-900 bg-gradient-to-b ${
                props.fromGradient
              } to-transparent relative transition-all duration-500 ${
                ContextFullScreen.toggleFullScreen
                  ? `hidden transition-all duration -1`
                  : ``
              }`}
            >
                {/* outlet */}
              <Outlet />
            </div>
          </div>

          <div className="hidden xl:block justify-self-end">
            <Right
              fromGradient="from-sky-800"
              imageUrl="https://i.discogs.com/nBwIKVVbpGxqcaYibHxXiXcKxnHU3fFK7AAgLGqnDSc/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTk4/NjE3LTE2MDE5NzMx/MDQtNjg5NS5qcGVn.jpeg"
              artistImageUrl="https://www.accesscreative.ac.uk/wp-content/uploads/2025/01/Vocalist-on-stage.jpg"
              songName="No time to die"
              artistName="Billie Elish"
              artistInfo={`Billie Eilish is an American singer-songwriter and musician, born on December 18, 2001, in Los Angeles, California, known for her unique style, angsty lyrics, and soulful vocals. She gained widespread recognition with her debut single "Ocean Eyes" in 2015, which was written and produced by her brother, Finneas O'Connell, with whom she frequently collaborates. `}
            ></Right>
          </div>
        </main>

        <SmallEndbar
          className="block sm:hidden"
          fromGradient={`bg-sky-700`}
          imageUrl="https://i.discogs.com/nBwIKVVbpGxqcaYibHxXiXcKxnHU3fFK7AAgLGqnDSc/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTk4/NjE3LTE2MDE5NzMx/MDQtNjg5NS5qcGVn.jpeg"
          songName="No time to die&nbsp;&nbsp;&nbsp;&nbsp;"
          artistName="Billie Elish&nbsp;&nbsp;&nbsp;&nbsp;"
        />
        <Endbar
          className="hidden sm:block"
          imageUrl="https://i.discogs.com/nBwIKVVbpGxqcaYibHxXiXcKxnHU3fFK7AAgLGqnDSc/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTk4/NjE3LTE2MDE5NzMx/MDQtNjg5NS5qcGVn.jpeg"
          songName="No time to die&nbsp;&nbsp;&nbsp;&nbsp;"
          artistName="Billie Elish&nbsp;&nbsp;&nbsp;&nbsp;"
        />
      </section>

      {/* to view any image in full  */}
        
      <ImagePreviewer  />

    </>
  );
}

export default MainLayout;
