import React from "react";
import { useRef, useState, useEffect } from "react";


const MarqueeDiv = (props) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  const checkMorquee=() => {
    if (textRef?.current.scrollWidth > containerRef?.current.offsetWidth) {
      setShouldScroll(true);
    } else {
      setShouldScroll(false);
    }
  }



      useEffect(() => {
        const observer = new ResizeObserver(checkMorquee);
        if (containerRef.current) observer.observe(containerRef.current);
  
        return () => {
          observer.disconnect();
        };
      },[props.text]);

  return (
    <div
      ref={containerRef}
      className={`relative text-nowrap rounded-[5px] overflow-clip ${props.containerWidth}`}
    >
      <div className={`${shouldScroll ? `marquee` : ``  } ${props.className} ` } ref={textRef} >
        <span>
        &nbsp;
        {props.text}&nbsp;
        </span>
      </div>

      {shouldScroll && (
        <>
          <div className={`absolute left-0 top-0 h-full w-2 z-10 pointer-events-none bg-gradient-to-r ${props.fadeColor} to-transparent`}></div>

          <div className={`absolute right-0 top-0 h-full w-2 z-10 pointer-events-none bg-gradient-to-l ${props.fadeColor} to-transparent`}></div>
        </>
      )}
    </div>
  );
};

export default MarqueeDiv;
