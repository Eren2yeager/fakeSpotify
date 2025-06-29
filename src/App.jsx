import React from "react";
import { playlists } from "./Contexts/contexts.js";
import { createBrowserRouter, RouterProvider ,useParams} from "react-router-dom";
import Home  from "./pages/Home.jsx";
import MainLayout from "./pages/MainLayout.jsx"
import PlaylistOverview from "./pages/PlaylistOverview.jsx";
import BigLeft from "./Components/left/bigLeft.jsx";
import Right from "./Components/right.jsx";







const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout playlists = {playlists.values} />,
    errorElement: <p>Loading...</p>,
    children: [
      { index: true, element: <Home /> },
      { path:"/home", element: <Home /> },
      { path: "/playlists/:slug", element: <PlaylistOverview /> },
      { path: "/playlists", element: <BigLeft /> },

      
      {path:"*", element: <p className="text-center font-bold p-10">Not found 404</p>}

    ],
    
  },
  { path: "/currentlyPlaying", element: 
        
    <Right
      fromGradient="from-sky-800"
      imageUrl="https://i.discogs.com/nBwIKVVbpGxqcaYibHxXiXcKxnHU3fFK7AAgLGqnDSc/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTk4/NjE3LTE2MDE5NzMx/MDQtNjg5NS5qcGVn.jpeg"
      artistImageUrl="https://www.accesscreative.ac.uk/wp-content/uploads/2025/01/Vocalist-on-stage.jpg"
      songName="No time to die"
      artistName="Billie Elish"
      artistInfo={`Billie Eilish is an American singer-songwriter and musician, born on December 18, 2001, in Los Angeles, California, known for her unique style, angsty lyrics, and soulful vocals. She gained widespread recognition with her debut single "Ocean Eyes" in 2015, which was written and produced by her brother, Finneas O'Connell, with whom she frequently collaborates. `}
       /> },
   
]);


function App() {
  return (
    <>
         <RouterProvider router={router} />;
    </>
  );
}

export default App;
