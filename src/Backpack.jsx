function Item({name,isPacked=false}){
        const [pack,setpack]=useState(false);
        function RandomDice(){
            let num=Math.round(Math.random()*6)+1;
            setpack(num);
        }
        if(pack%6==0)
        return (<li onClick={RandomDice}>{name}⚀  </li>);
        if(pack%6==1)
        return (<li onClick={RandomDice}>{name}⚁ </li>);
        if(pack%6==2)
        return (<li onClick={RandomDice}>{name}⚂  </li>);
        if(pack%6==3)
        return (<li onClick={RandomDice}>{name}⚃  </li>);
        if(pack%6==4)
        return (<li onClick={RandomDice}>{name}⚄  </li>);
        if(pack%6==5)
        return (<li onClick={RandomDice}>{name}⚅  </li>);
    }
import { useState } from "react";
export default function Backpack(){
    const items=["Money","Sunglasses","Powerbank","Towel","Shampoo","Wallet"];
    const filterlist=items.filter(i=>i.includes("l"))
    return(<>
        <h1>Backpack list</h1>
            <ol>
                {
                    filterlist.map(i=><Item name={i}/>)
                }
            </ol>
        </>
    );
}