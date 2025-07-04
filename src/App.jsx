import React from "react";
import { playlists } from "./Contexts/contexts.js";
import { createBrowserRouter, RouterProvider ,useParams} from "react-router-dom";
import Home  from "./pages/Home.jsx";
import MainLayout from "./pages/MainLayout.jsx"
import PlaylistOverview from "./pages/PlaylistOverview.jsx";
import BigLeft from "./Components/left/bigLeft.jsx";
import Right from "./Components/right.jsx";
import Navbar from "./Components/navbar.jsx";
import Search from "./pages/search.jsx";







const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout fromGradient="from-sky-800" />,
    errorElement: <p>Loading...</p>,
    children: [
      { index: true, element: <Home /> },
      { path:"/home", element: <Home /> },
      { path: "/playlists", element: <BigLeft /> },
      { path: "/search", element: <Search /> },
      { path: "/playlists/:slug", element: <PlaylistOverview /> },

      { path: "/currentlyPlaying", element: 
        
        <Right
          fromGradient="from-sky-800"
          imageUrl="/images/anatomy.jpg"
          artistImageUrl="/images/Naomi.jpg"
          songName="Space"
          artistName="Naomi"
          artistInfo={`Billie Eilish is an American singer-songwriter and musician, born on December 18, 2001, in Los Angeles, California, known for her unique style, angsty lyrics, and soulful vocals. She gained widespread recognition with her debut single "Ocean Eyes" in 2015, which was written and produced by her brother, Finneas O'Connell, with whom she frequently collaborates. `}
           /> },

      
      {path:"*", element: <p className="text-center font-bold p-10">Not found 404</p>}


    ],
    
  },


   
]);


function App() {
  return (
    <>
         <RouterProvider router={router} />;
    </>
  );
}

export default App;
