import React,{useState} from "react";

const Form = () => {
    const [{count,salto},setData] = useState({count: 0,salto: 1});

    const handleInputChange = (event) =>{
        setData({...{count,salto},salto:parseInt(event.target.value)})
    };
    const up = (event) =>{
        event.preventDefault();
        setData({...{count,salto},count:count+salto})
        
    };
    const down = (event) =>{
        event.preventDefault();
        setData({...{count,salto},count:count-salto});
        
    };
    return(
        <>
        <div id="count">
            <h1>{count}</h1>
        </div>
        <form id="form">
            
            <label htmlFor="salto">Salto</label>
            <input type="text" name="salto" id="min" placeholder="1" onChange={handleInputChange}/>
            <button  id="up" onClick={up}>Up</button>
            <button id="down" onClick={down}>Down</button>
        </form>
        </>
    );
};

export default Form;