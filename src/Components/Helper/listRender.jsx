import React,{useState} from 'react'

const ListRender = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
   const navItems = props.listItems || ["item1", "item2", "item3"];
  
   return (
    <div>

       <ul className={props.className}>
         {navItems.map((item, index) => (
           <li
           key={index}
             className={`px-4 py-1  cursor-pointer font-medium hover:bg-gray-600  transition-all duration-500 rounded-full 
             ${
               activeIndex === index
               ? "bg-white text-black"
               : " bg-gray-700 text-white"
             }`}
             onClick={() =>{ setActiveIndex(index);console.log(item);}} // Update active on click
           >
             {item}
           </li>
         ))}
       </ul>
 
               </div>
   )
}

export default ListRender
