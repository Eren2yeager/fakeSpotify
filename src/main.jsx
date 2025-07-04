import { StrictMode, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {ToggleFullScreenContext, audioRefContext,showRightContext, isPlayingContext ,playlists , imagePreviewContext ,showPlaylistsContext} from "./Contexts/contexts.js";
import { currentTimeContext ,durationContext } from "./Contexts/audioDuration";


const BodyToRender = () => {
  const [toggleFullScreen, settoggleFullScreen] = useState(false);
  const [showRight, setShowRight] = useState(true);  
  const [showPlaylists, setShowPlaylists] = useState(false);
  const [isPlaying, setisPlaying] = useState(false)
  const ContextAudioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [src, setSrc] = useState(null)
  const allPlaylists = [{imageUrl:"/images/anatomy.jpg",playlistName:'Cheetah!',totalSongs:2, bgColor:"bg-[#2936cb]",
    songs: [
      {
        songName: "Dark Is The Night",
        artistName: "Luke Muzzic",
        albumName: "Dark Is The Night",
        added: "3 days ago",
        duration: "3:03",
        imageUrl: "/images/notfound.png",
        isSaved: true,
        savedIn :[]
      },
      {
        songName: "Fuck",
        artistName: "Luke Muzzic",
        albumName: "Dark Is The Night",
        added: "3 days ago",
        duration: "3:03",
        imageUrl: "/images/fuck.jpg",
        isSaved: true,
        savedIn :[]
      },
      {
        songName: "Матушка",
        artistName: "Татьяна Куртукова",
        albumName: "Матушка",
        added: "4 days ago",
        duration: "2:53",
        imageUrl: "/images/nextPhonk.jpg",
        isSaved: true,
        savedIn :[]
      }]

  }, { playlistName:"Phunk", totalSongs:2, songs: [
    {
      songName: "Dark Is The Night",
      artistName: "Luke Muzzic",
      albumName: "Dark Is The Night",
      added: "3 days ago",
      duration: "3:03",
      imageUrl: "/images/dress.jpg",
      isSaved: true,
      savedIn :[]
    },
    {
      songName: "naomi",
      artistName: "Luke Muzzic",
      albumName: "Dark Is The Night",
      added: "3 days ago",
      duration: "3:03",
      imageUrl: "/images/Naomi.jpg",
      isSaved: true,
      savedIn :[]
    },
    {
      songName: "Slay",
      artistName: "Luke Muzzic",
      albumName: "Phunk",
      added: "44 second ago",
      duration: "3:03",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273c80fe27586c2da910984cb9a",
      isSaved: true,
      savedIn :[]
    },
    {
      songName: "Матушка",
      artistName: "Татьяна Куртукова",
      albumName: "Матушка",
      added: "4 days ago",
      duration: "2:53",
      imageUrl: "/images/anatomy.jpg",
      isSaved: true,
      savedIn :[]

    }]},{},{imageUrl:"/images/Naomi.jpg", songs:[{
      songName: "Матушка",
      artistName: "Татьяна Куртукова",
      albumName: "Матушка",
      added: "4 days ago",
      duration: "2:53",
      imageUrl: "/images/anatomy.jpg",
      isSaved: true,
      savedIn :[]
      
    }]},{imageUrl:"/images/download (4).jpeg"},{imageUrl:"/images/nextPhonk.jpg"},{imageUrl:"/images/anatomy.jpg"}]
  
  return (


    <ToggleFullScreenContext.Provider value={{ toggleFullScreen, settoggleFullScreen }} >
      <imagePreviewContext.Provider value={{src, setSrc}}>
      <playlists.Provider value={allPlaylists}>
      <audioRefContext.Provider value={ContextAudioRef}>
        <isPlayingContext.Provider value={{isPlaying, setisPlaying}}>
        <showPlaylistsContext.Provider value={{showPlaylists, setShowPlaylists}}>
        <showRightContext.Provider value={{showRight, setShowRight}}>
        <durationContext.Provider value={{duration,setDuration}}>
         <currentTimeContext.Provider value={{currentTime,setCurrentTime}}>
          <App />
         </currentTimeContext.Provider>
        </durationContext.Provider>
        </showRightContext.Provider>
        </showPlaylistsContext.Provider>
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
