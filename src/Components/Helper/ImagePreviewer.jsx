import React, { useState ,useContext ,memo } from 'react';
import { imagePreviewContext } from '../../Contexts/contexts';

const ImagePreviewer = () => {
  
  const ContextSelectedImage = useContext(imagePreviewContext)
  

  return (
    <div>
      {/* Fullscreen Modal */}
      {ContextSelectedImage?.src && (
        <div className="fixed inset-0 z-50 backdrop-blur-xl bg-opacity-80 flex items-center justify-center overflow-auto">
          <div className="relative max-w-screen max-h-screen  flex flex-col">
            <img
              src={ContextSelectedImage.src}
              alt="Full View"
              className=" object-cover shadow-2xl shadow-zinc-950"
            />
            <button
              onClick={() => {(ContextSelectedImage.setSrc(null));console.log("by imagepreview" + ContextSelectedImage.src)}}
              className=" font-bold text-xl py-2 px-5 mt-2 rounded-full shadow-2xl shadow-black  font-snas  self-center text-white opacity-70 hover:opacity-100 cursor-pointer transition"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ImagePreviewer);
