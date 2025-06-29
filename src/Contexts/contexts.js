import { createContext } from "react";



export const audioRefContext =createContext(null);
export const showRightContext = createContext(null);
export const isPlayingContext = createContext(false);


export const ToggleFullScreenContext = createContext(false);
export const imagePreviewContext = createContext(null)

export const playlists = createContext([{imageUrl:"/images/dress.jpg",playlistName:'unknown'}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);