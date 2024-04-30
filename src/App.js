import React, { useState } from 'react';
function App() {
  const [color,setColor]=useState("olive");
  return (
    <div className="h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
      <div className="flex flex-wrap  gap-3 bottom-11 shadow-lg px-3 py-2 rounded-3xl mb-2 ">
        <button onClick={()=> {
          setColor("white")
        }} className="text-black rounded-full px-3 py-1" style={{backgroundColor:"white"}}>White</button>
        <button onClick={()=> setColor("brown")} className="text-black rounded-full px-3 py-1 " style={{backgroundColor:"brown"}}>Brown</button>
        <button onClick={()=> setColor("violet")} className="text-black rounded-full px-3 py-1" style={{backgroundColor:"violet"}}>Violet</button>
        <button onClick={()=> setColor("indigo")} className="text-black rounded-full px-3 py-1" style={{backgroundColor:"indigo"}}>Indigo</button>
        <button onClick={()=> setColor("blue")} className="text-black rounded-full px-3 py-1" style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=> setColor("green")} className="text-black rounded-full px-3 py-1" style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=> setColor("yellow")} className="text-black rounded-full px-3 py-1" style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=> setColor("orange")} className="text-black rounded-full px-3 py-1" style={{backgroundColor:"orange"}}>Orange</button>
        <button onClick={()=> setColor("red")} className="text-black rounded-full px-3 py-1" style={{backgroundColor:"red"}}>Red</button>

        </div>
      </div>
    </div>
  );
}

export default App;

