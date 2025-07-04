import { useState, useContext, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ImagePreviewer from "../Components/Helper/ImagePreviewer.jsx";
import { imagePreviewContext } from "../Contexts/contexts.js";

import {
  ToggleFullScreenContext,
  playlists,
  showRightContext,
  showPlaylistsContext,
} from "../Contexts/contexts.js";

import Navbar from "../Components/navbar.jsx";
import Right from "../Components/right.jsx";
import BigLeft from "../Components/left/bigLeft.jsx";
import SmallLeft from "../Components/left/smallLeft.jsx";
import { Endbar } from "../Components/endbar.jsx";
import { SmallEndbar } from "../Components/endbar.jsx";

function MainLayout(props) {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });
  console.log(renderCount.current);

  const ContextShowRight = useContext(showRightContext);
  const ContextShowPlaylists = useContext(showPlaylistsContext);

  const ContextFullScreen = useContext(ToggleFullScreenContext);
  const ContextPlaylists = useContext(playlists);

  // for resizing
  const [rightWidth, setRightWidth] = useState(300); // Initial px width
  const [leftWidth, setLeftWidth] = useState(300); // Initial px width
  const resizerRef = useRef(null);

  const startResizing = (e) => {
    const target = e.target.getAttribute("data-resizer-name");

    const startX = e.clientX;

    let subject = null;
    let setSubject = null;
    if (target == "right") {
      subject = rightWidth;
      setSubject = (value) => {
        setRightWidth(value);
      };
    } else if (target == "left") {
      subject = leftWidth;
      setSubject = (value) => {
        setLeftWidth(value);
      };
    }
    let startWidth = subject;

    const onMouseMove = (e) => {
      // to control auto close and open on width


      let newWidth;
      if (target == "right") {
        newWidth = startWidth + (startX - e.clientX);
      } else {
        newWidth = startWidth + (e.clientX - startX);
        {
          leftWidth <= 240
            ? ContextShowPlaylists.setShowPlaylists(false)
            : ContextShowPlaylists.setShowPlaylists(true);
        }
      }
      setSubject(Math.min(400, Math.max(240, newWidth))); // minimum 300px and max-400px
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <>
      <section className="select-none w-[100%] max-h-[100%] flex flex-col items-center justify-between relative font-sans overflow-hidden">
        <div className="w-[100%] hidden sm:block">
          <Navbar></Navbar>
        </div>

        <main className="w-[100%] h-[100%] sm:max-h-[80%] flex  text-white   gap-0.5 p-1.5  overflow-hidden transition-all duration-500 ">
          {!ContextFullScreen.toggleFullScreen && (
            <>
              <div className="sm:flex  hidden sm:block transition-all duration-300 justify-self-start ">
                {ContextShowPlaylists.showPlaylists ? (
                  <div className="" style={{ width: `${leftWidth}px` }}>
                    <BigLeft
                      leftWidth={leftWidth}
                      setLeftWidth={setLeftWidth}
                    />
                  </div>
                ) : (
                  <div>
                    <SmallLeft
                      leftWidth={leftWidth}
                      setLeftWidth={setLeftWidth}
                    />
                  </div>
                )}
              </div>
            </>
          )}
          {/* resizer left */}
          {!ContextFullScreen.toggleFullScreen && (
            <div
              data-resizer-name="left"
              ref={resizerRef}
              onMouseDown={startResizing}
              className="hidden sm:block  right-0 top-0 w-1  cursor-col-resize my-2  hover:bg-white"
            ></div>
          )}

          <div
            className={`w-[100%] overflow-hidden ${
              ContextFullScreen.toggleFullScreen
                ? `hidden transition-all duration -1`
                : ``
            } `}
          >
            <div
              className={`wrapper middle  w-[100%]  h-[100%] rounded-xl  bg-zinc-900 bg-gradient-to-b ${props.fromGradient} to-transparent relative transition-all duration-500 `}
            >
              {/* outlet */}
              <Outlet />
            </div>
          </div>

          {!ContextFullScreen.toggleFullScreen &&
            ContextShowRight.showRight && (
              <div
                data-resizer-name="right"
                ref={resizerRef}
                onMouseDown={startResizing}
                className="hidden sm:block  right-0 top-0 w-1   cursor-col-resize my-2  hover:bg-white"
              ></div>
            )}
          {ContextShowRight.showRight && (
            <div
              className={`${ContextFullScreen.toggleFullScreen ? "w-[100%]" : 'w-[300px]' } hidden sm:block `}
              style={{ minWidth: `${rightWidth}px` }}
            >
              <Right
                // fromGradient="from-[#2d1138]"
                imageUrl="/images/Naomi.jpg"
                artistImageUrl="/images/Naomi.jpg"
                songName="No time to die"
                artistName="Naomi"
                artistInfo={`Billie Eilish is an American singer-songwriter and musician, born on December 18, 2001, in Los Angeles, California, known for her unique style, angsty lyrics, and soulful vocals. She gained widespread recognition with her debut single "Ocean Eyes" in 2015, which was written and produced by her brother, Finneas O'Connell, with whom she frequently collaborates. `}
              ></Right>
            </div>
          )}
        </main>

        <SmallEndbar
          className="block sm:hidden"
          fromGradient={`bg-sky-700`}
          imageUrl="/images/Naomi.jpg"
          songName="No time to die;"
          artistName="Billie Elish;"
        />
        <Endbar
          className="hidden sm:block"
          imageUrl="/images/Naomi.jpg"
          songName="No time to die"
          artistName="Billie Elish"
        />
      </section>

      {/* to view any image in full  */}

      <ImagePreviewer />
    </>
  );
}

export default MainLayout;
