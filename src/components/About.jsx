import {useState} from "react";
import useDocumentTitle from "./useDocumentTitle";

function About(){
    useDocumentTitle("About")
    const [Like,setLike]=useState(0);
    return(
       <div>
         <h1>This is about page</h1>
         <p>Like this page?</p>
         <button onClick={()=>setLike(Like+1)}>Likes: {Like}</button>
       </div>
    );
}
export default About;