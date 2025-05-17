import Counter from "./Counter";
import {useState, useEffect} from 'react'
function Home(){
    const[seconds, setSeconds]=useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            setSeconds((prev)=>prev+1);
        },1000);
        return ()=>clearInterval(timer);
    },[]);
    return (
        <div>
            <h1>Welcome to Home Page</h1>
            <p>Time on page: {seconds} seconds</p>
            <Counter/>
        </div>
    );
}
export default Home;