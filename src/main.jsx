import { StrictMode, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {ToggleFullScreenContext, audioRefContext,showRightContext, isPlayingContext ,playlists , imagePreviewContext} from "./Contexts/contexts.js";
import { currentTimeContext ,durationContext } from "./Contexts/audioDuration";


const BodyToRender = () => {
  const [toggleFullScreen, settoggleFullScreen] = useState(false);
  const [showRight, setShowRight] = useState(true)
  const [isPlaying, setisPlaying] = useState(false)
  const ContextAudioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [src, setSrc] = useState(null)
  const allPlaylists = [{imageUrl:"/images/anatomy.jpg",playlistName:'Cheetah!',totalSongs:2,
    songs: [
      {
        title: "Dark Is The Night",
        artist: "Luke Muzzic",
        album: "Dark Is The Night",
        added: "3 days ago",
        duration: "3:03",
        cover: "/images/notfound.png",
        isSaved: true,
        savedIn :[]
      },
      {
        title: "Матушка",
        artist: "Татьяна Куртукова",
        album: "Матушка",
        added: "4 days ago",
        duration: "2:53",
        cover: "/images/nextPhonk.jpg",
        isSaved: true,
        savedIn :[]
      }]

  }, { playlistName:"Phunk", totalSongs:2, songs: [
    {
      title: "Dark Is The Night",
      artist: "Luke Muzzic",
      album: "Dark Is The Night",
      added: "3 days ago",
      duration: "3:03",
      cover: "/images/dress.jpg",
      isSaved: true,
      savedIn :[]
    },
    {
      title: "Slay",
      artist: "Luke Muzzic",
      album: "Phunk",
      added: "44 second ago",
      duration: "3:03",
      cover: "https://i.scdn.co/image/ab67616d0000b273c80fe27586c2da910984cb9a",
      isSaved: true,
      savedIn :[]
    },
    {
      title: "Матушка",
      artist: "Татьяна Куртукова",
      album: "Матушка",
      added: "4 days ago",
      duration: "2:53",
      cover: "/images/anatomy.jpg",
      isSaved: true,
      savedIn :[]

    }]},]
  
  return (


    <ToggleFullScreenContext.Provider value={{ toggleFullScreen, settoggleFullScreen }} >
      <imagePreviewContext.Provider value={{src, setSrc}}>
      <playlists.Provider value={allPlaylists}>
      <audioRefContext.Provider value={ContextAudioRef}>
        <isPlayingContext.Provider value={{isPlaying, setisPlaying}}>
        <showRightContext.Provider value={{showRight, setShowRight}}>
        <durationContext.Provider value={{duration,setDuration}}>
         <currentTimeContext.Provider value={{currentTime,setCurrentTime}}>
          <App />
         </currentTimeContext.Provider>
        </durationContext.Provider>
        </showRightContext.Provider>
        </isPlayingContext.Provider>
      </audioRefContext.Provider>
      </playlists.Provider >
      </imagePreviewContext.Provider>
    </ToggleFullScreenContext.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BodyToRender />
  </StrictMode>
    );
