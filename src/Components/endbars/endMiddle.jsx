import React, { useState ,useRef ,useEffect, useContext} from "react";
import { audioRefContext ,isPlayingContext } from "../../Contexts/contexts";
import AudioComponent from "../audioComponent";

import { RxShuffle } from "react-icons/rx";
import { MdSkipPrevious } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import { MdSkipNext } from "react-icons/md";
import { BsRepeat } from "react-icons/bs";







const EndMiddle = () => {

  const ContextAudioRef = useContext(audioRefContext);
  const ContextisPlaying =useContext(isPlayingContext);
  
  
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [toggleShuffle, setToggleShuffle] = useState(false)
  const [toggleRepeat, setToggleRepeat] = useState(false)
   
  const onLoadedMetadata = () => {
    setDuration(ContextAudioRef.current.duration);
  };

  // Update current time while playing
  const onTimeUpdate = () => {
    setCurrentTime(ContextAudioRef.current.currentTime);
  };





  const handlePlayPause = () =>{

    if(ContextisPlaying.isPlaying){
      ContextAudioRef.current.pause();
    }else {
      ContextAudioRef.current.play();
    }
    ContextisPlaying.setisPlaying(!ContextisPlaying.isPlaying)
  }

  useEffect(() => {

    const handleKeyDown = (event) => {


      const isTyping =
      document.activeElement.tagName === 'INPUT' ||
      document.activeElement.tagName === 'TEXTAREA' ||
      document.activeElement.isContentEditable;
  
       if (isTyping) return; // ⛔ Don't trigger anything if user is typing


      if (event.key === ' ') {
          handlePlayPause();
      } 

    };

    // Add the event listener when the component mounts
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }); 

  return(
    <>
    <div className="flex flex-col justify-center gap-1  items-center w-[100%] h-[100%]">
    <div className="up flex gap-5 items-center justify-center">
        <RxShuffle className={`text-xl  cursor-pointer ${toggleShuffle ? `text-green-400 ` : `text-gray-400 hover:animate-pulse `} transition-all duration-300`} onClick={()=>{setToggleShuffle(!toggleShuffle); setToggleRepeat(false)}} title="Shuffle" />
        <MdSkipPrevious className="text-3xl  text-gray-400  hover:animate-pulse transition-all duration-300  cursor-pointer" title="Previous" />
        <span className="text-2xl font-bold text-center">
          <span className="bg-white p-1 rounded-full text-center flex justify-center items-center cursor-pointer"  onClick={handlePlayPause} >
          
           <span >
             {ContextisPlaying.isPlaying ?  <IoIosPause className=" text-black self-center text-2xl "   title="Pause" />:<IoIosPlay className=" text-black self-center text-2xl pl-[2px]"  title="Play" />}
           </span>

          </span>
        </span>
        <MdSkipNext className="text-3xl  text-gray-400  hover:animate-pulse transition-all duration-100  cursor-pointer" title="Next" /> 
        <BsRepeat className={`text-xl  cursor-pointer ${toggleRepeat  ? `text-green-400 ` : `text-gray-400 hover:animate-pulse `}  transition-all duration-300`}  onClick={()=>{setToggleRepeat(!toggleRepeat); setToggleShuffle(false)}} title="Repeat" />

    </div>

    <div className="down w-[100%] flex justify-center items-center gap-2 self-baseline-last">

      <AudioComponent showTime={true} />


    </div>
    </div>
    </>


  );



};

export default EndMiddle;