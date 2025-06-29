import React, { useState ,useContext } from "react";
import ListRender from "./Helper/listRender.jsx";
import HorizentalItemsList from "./horizentalItemsList.jsx";
import {ToggleFullScreenContext } from "../Contexts/contexts.js";
import MiddleHome from "./middleHome.jsx";
import MiddlePlaylistView from "./MiddlePlaylistView.jsx";




const Middle = (props) => {
       const ContextFullScreen =React.useContext(ToggleFullScreenContext);
  


  return (

   <div className={`middle  min-w-[100%]  h-[100%] rounded-xl  bg-zinc-900 bg-gradient-to-b ${props.fromGradient} to-transparent relative transition-all duration-500 ${ContextFullScreen.toggleFullScreen ? `hidden transition-all duration -1` : ``}` }>
     {/* <MiddleHome /> */}
     <MiddlePlaylistView />
    </div>

  );      
};

export default Middle;
