import React from 'react'
import RectangularSongCard from './RectangularSongCard'

const EndLeft = (props) => {
  return (
    
    <RectangularSongCard
    marquee={{show:true,fadeColor: props.fromGradient}}
    // showPlayButton={true}
    showAddTolibraryButton={true}
    // showAudioComponent={true}
    fromGradient={props.fromGradient}
    songName={props.songName}
    artistName={props.artistName}
    imageUrl={props.imageUrl}
    showRightButton={true}
    className="justify-between"
  />
  )
}

export default EndLeft