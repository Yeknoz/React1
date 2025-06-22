import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    const[value,setvalue]=useState("Type Here!");
    function onTextChange(event){
        console.log("this function is called!:"+event.target.value);
        console.error("This is error")
        setvalue(event.target.value);
    }
    return (<>
        <input  value={value} onChange={(event)=>onTextChange(event)}/>
        <p>You typed {value.length} Character</p>
        <p> {value} Celcius to {value*1.8+32} Fahrenheit</p>
        <p> {value} Km to {value*0.62137119} Miles</p>
        <p> {value} Yen to {value*0.22} Baht</p>
        <p> {value} USD to {value*32.77} Baht</p>
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