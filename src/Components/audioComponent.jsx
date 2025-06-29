import React, { useContext, useState } from "react";
import { audioRefContext } from "../Contexts/contexts";
import { currentTimeContext,durationContext } from "../Contexts/audioDuration";

const AudioComponent = (props) => {



  const ContexCurrentTime = useContext(currentTimeContext);
  const ContextDuration = useContext(durationContext);
  const ContextAudioRef = useContext(audioRefContext);
  
  const onLoadedMetadata = () => {
    ContextDuration.setDuration(ContextAudioRef.current.duration);
  };

  // Update current time while playing
  const onTimeUpdate = () => {
    ContexCurrentTime.setCurrentTime(ContextAudioRef.current.currentTime);
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

  return (

     <>
      {props.showTime && 
      <div className="text-[0.8em] opacity-60">{formatTime(ContexCurrentTime.currentTime)}</div>}
      <input
        type="range"
        min="1"
        max={toString(ContextDuration.duration)}
        value={ContexCurrentTime.currentTime}
        className={`slider ${props.width || `w-[60%]`} h-[5px]  cursor-pointer`}
        id="myRange"
        onChange={handleSeek}
      />

      <audio
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        ref={ContextAudioRef}
      >
        <source src="/Audios/Billie Eilish - No Time To Die (Official Music Video) (1).mp3" />
      </audio>

            {props.showTime && 
      <div className="text-[0.8em] opacity-60">{formatTime(ContextDuration.duration)}</div>}
     </>

  );
};

export default AudioComponent;
