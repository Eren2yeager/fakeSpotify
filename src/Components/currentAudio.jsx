import React from 'react'

const CurrentAudio = (props) => {
  return (
    <audio
    onLoadedMetadata={props.onLoadedMetadata}
    onTimeUpdate={props.onTimeUpdate}
    ref={props.ref}
  >
    <source src="/Audios/Billie Eilish - No Time To Die (Official Music Video) (1).mp3" />
  </audio>
  )
}

export default CurrentAudio