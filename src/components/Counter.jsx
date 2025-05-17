import { useState } from "react";
function Counter(){
    const[count, setCount]=useState(0);
    return(
       <div>
          <p>DoorBell Pressed: {count} times</p>
          <button onClick={()=>setCount(count+1)}>Press DoorBell</button>
       </div>
    );
}
export default Counter;