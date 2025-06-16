import React ,{useState ,useRef,useEffect} from 'react'

const Card = (props) => {
  return (
    <div className="group w-[120px] h-[160px] sm:w-[180px] sm:h-[230px] overflow-hidden p-3 m-1 rounded-[5px] hover:bg-zinc-800 transition-all duration-300 relative active:bg-zinc-900">
      <img
        className="w-[100%] h-[70%] object-cover rounded-[5px]"
        src={`${props.imageUrl || "./src/images/notfound.png"}`}
        alt=""/>
      <div className="flex flex-col h-[30%] w-[100%] justify-start item-end ">
        <div className="song-name lg:text-wrap max-w-[95%]  lg:max-h-[3em] overflow-hidden truncate">
          {props.songName}
        </div>
        <div className="song-artist  lg:text-wrap max-w-[95%]  lg:max-h-[3em] overflow-hidden truncate opacity-70 text-[0.7em]">
          {props.artistName}
        </div>
      </div>
      <img className="w-[25%] h-[25%] absolute bottom-0 right-[10%] opacity-0 group-hover:bottom-[35%] group-hover:opacity-100 transition-all duration-300" src="\src\images\playButton.svg" alt="" />
    </div>
  );
};


const HorizentalItemsList = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const listItems = props.listItems || [{},{},{},{},{}]


  // for horzental scrolling effect without user scroll
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
    const parentRef = useRef(null);
    const childRef = useRef(null);
  
    useEffect(() => {
      if (childRef.current.scrollWidth > parentRef.current.offsetWidth) {
        if (parentRef.current.scrollLeft > 0) {
          setShowLeftArrow(true);
        }
      }else {
          setShowRightArrow(parentRef.current.scrollWidth - parentRef.current.scrollLeft > parentRef.current.clientWidth + 0);
      }

    }, [props.listItems]);

  // for horzental scrolling effect with user scroll

       const handleScroll = (e) => {
      setTimeout(() => {
         setShowLeftArrow(parentRef.current.scrollLeft > 0);
         setShowRightArrow(parentRef.current.scrollWidth - parentRef.current.scrollLeft > parentRef.current.clientWidth + 0);
      }, 200);
        
      }

     // to scroll left and right
    const scroll = (direction) => {
    const { current } = parentRef;
    if (current) {
      const scrollAmount = parentRef.current.clientWidth +100; // Adjust the scroll amount as needed
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
      

    }
  };



  return (
    <>
    <div className="relative">

    <div className='font-bold px-5 text-2xl'>
     { props.title}
    </div>
    <div className=' max-w-[100%] overflow-auto sm:overflow-hidden' ref={parentRef} onScroll={handleScroll} >
       <div className={` hidden sm:block bg-zinc-700 px-3 py-2 w-10 h-10 rounded-full absolute left-0 top-1/3 z-10 transition-all duration-200 opacity-80 ${showLeftArrow==false ? `invisible`:"visible"} hover:bg-zinc-900`}  onClick={() => scroll('left')}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
       </div>

        <div className="flex w-fit h-fit px-1 bg-transparent " ref={childRef} >
          {listItems.map((item, index) => (
            <div key={index} onClick={() => {setActiveIndex(index); console.log(item);}}>

            <Card key={index} imageUrl={item.imageUrl} songName={item.songName} artistName={item.artistName} />
            </div>
          ))}
       </div>
       <div className={` hidden sm:block bg-zinc-700 p-2 w-10 h-10 rounded-full absolute  right-0 top-1/3 z-10 opacity-80  ${showRightArrow==false ? `invisible`:"visible"}  hover:bg-zinc-900`}  onClick={() => scroll('right')}>

       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
       </div>
    </div>
          </div>
    </>
  )
}

export default HorizentalItemsList
