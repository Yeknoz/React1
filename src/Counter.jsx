import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    return (<>
        <button onClick={()=>setCount(count+1)}>
            Click me to +1
        </button>
        <button onClick={()=>setCount(count+10)}>
            Click me to +10
        </button>
        <button onClick={()=>setCount(count+100)}>
            Click me to +100
        </button>
        <br></br>
         <button onClick={()=>setCount(count-1)}>
            Click me to -1
        </button>
        <button onClick={()=>setCount(count-10)}>
            Click me to -10
        </button>
        <button onClick={()=>setCount(count-100)}>
            Click me to -100
        </button>
        <br></br>
       <button onClick={()=>setCount(0)}>
            Reset
        </button>
        <p>
            you cilck {count} times
        </p>
    </>);
}