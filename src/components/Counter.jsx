import { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
function Counter(){
    const[count, setCount]=useState(0);
    useDocumentTitle("Counter")
    return(
       <div>
          <p>DoorBell Pressed: {count} times</p>
          <button onClick={()=>setCount(count+1)}>Press DoorBell</button>
       </div>
    );
}
export default Counter;