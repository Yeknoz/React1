import { useState,useRef } from "react";
import './Bmi.css'
function BmiText({bmi}){
    if(bmi<18.5)return (<><h1> Underweight</h1><img src="low.png" width={100}/></>)
    if(bmi>30) return (<><h1>Overweight</h1><img src="fat.png" width={100}/></>)
    return (<><h1>Normal</h1><img src="ignor.png" width={100}/></>)
}
export default function Bmi(){
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const [bmi,setBmi]=useState(0);
    function calBmi(){
        let w=w_inputRef.current.value;
        let h=h_inputRef.current.value/100;
        setBmi(w/(h*h));
        //alert(w);
        //alert(h);
    }
    return(<>
        <h1>BMI Calculator</h1>
        Weight <input ref={w_inputRef}/> Kg.<br/>
        Height <input ref={h_inputRef}/> Cm.<br/>
        <button onClick={calBmi}>Calculate!</button><br/>
        Bmi: {bmi.toFixed(2)}
        <BmiText bmi={bmi}/>
    </>);
}