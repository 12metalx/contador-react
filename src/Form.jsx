import React,{useState} from "react";
import Contador from "./Contador";

const Form = () =>{
    const [cont1,setCont1] = useState(0);
    const [cont2,setCont2] = useState(0);
    const up = (event) =>{
        event.preventDefault();
        setCont1(cont1+1)
        
    };
    const down = (event) =>{
        event.preventDefault();
        setCont1(cont1-1)
        
    };
    const up2 = (event) =>{
        event.preventDefault();
        setCont2(cont2+cont1)
        
    };
    const down2 = (event) =>{
        event.preventDefault();
        setCont2(cont2-cont1)
        
    };
    return(
        <main>
            <Contador count={cont1}
            salto = {1}
            up = {up}
            down = {down}/>
            <Contador count={cont2}
            salto = {cont1}
            up = {up2}
            down = {down2}/>
        </main>
    );
};

export default Form;