import { useState, useContext } from "react";

import MiddleHome from "../Components/middleHome.jsx";

function Home() {
  const [showPlaylists, setShowPlaylists] = useState(false);

  return (
    <>
      <MiddleHome showPlaylist={showPlaylists} />
    </>
  );
}

export default Home;
