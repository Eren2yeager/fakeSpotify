import React, { useContext, useState ,useEffect ,useRef } from "react";
import { audioRefContext ,isPlayingContext } from "../Contexts/contexts";
import { currentTimeContext,durationContext } from "../Contexts/audioDuration";
import CurrentAudio from "./currentAudio";

const AudioComponent = (props) => {
  
  
  
  const ContexCurrentTime = useContext(currentTimeContext);
  const ContextDuration = useContext(durationContext);
  const ContextAudioRef = useContext(audioRefContext);
  const ContextisPlaying =useContext(isPlayingContext);

  
  const onLoadedMetadata = () => {
    ContextDuration.setDuration(ContextAudioRef.current?.duration);
  };

  // Update current time while playing
  const onTimeUpdate = () => {
    ContexCurrentTime.setCurrentTime(ContextAudioRef.current?.currentTime);
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    ContexCurrentTime.setCurrentTime(newTime);
    ContextAudioRef.current.currentTime = newTime;
  };

  // to format the time
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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

  return (

     <div className="w-full flex justify-center items-center gap-2 self-baseline-last">
      {props.showTime && 
      <div className="text-[0.8em] opacity-60 ">{formatTime(ContexCurrentTime?.currentTime)}</div>}
      <input
        type="range"
        min="1"
        max={toString(ContextDuration?.duration)}
        value={ContexCurrentTime?.currentTime}
        className={`slider ${props.width || `w-[60%]`} h-[5px]  cursor-pointer`}
        id="myRange"
        onChange={handleSeek}
      />

      <CurrentAudio
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        ref={ContextAudioRef}
      >
        <source src="/Audios/Billie Eilish - No Time To Die (Official Music Video) (1).mp3" />
      </CurrentAudio>

            {props.showTime && 
      <div className="text-[0.8em] opacity-60">{formatTime(ContextDuration?.duration)}</div>}
     </div>

  );
};

export default AudioComponent;
