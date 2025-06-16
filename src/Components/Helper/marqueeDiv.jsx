import React from "react";
import { useRef, useState, useEffect } from "react";

const MarqueeDiv = (props) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (textRef.current.scrollWidth > containerRef.current.offsetWidth) {
      setShouldScroll(true);
    } else {
      setShouldScroll(false);
    }
  }, [props.text]);
  return (
    <div
      ref={containerRef}
      className="relative whitespace-nowrap rounded-[5px]"
    >
      <div className={`${shouldScroll ? `marquee` : ``}`} ref={textRef}>
        {props.text}
      </div>

      {shouldScroll && (
        <>
          <div className="absolute left-0 top-0 h-full w-1 z-10 pointer-events-none bg-gradient-to-r from-zinc-800 to-transparent"></div>

          <div className="absolute right-0 top-0 h-full w-1 z-10 pointer-events-none bg-gradient-to-l from-zinc-800 to-transparent"></div>
        </>
      )}
    </div>
  );
};

export default MarqueeDiv;
