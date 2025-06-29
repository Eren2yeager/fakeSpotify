import { useState } from "react";


import MiddlePlaylistView from "../Components/MiddlePlaylistView.jsx";


function PlaylistOverview() {
  const [showPlaylists, setShowPlaylists] = useState(false);

  return (
    <>
     
      <MiddlePlaylistView showPlaylist={showPlaylists} />
            
    </>
  );
}

export default PlaylistOverview;
