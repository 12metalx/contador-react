import React from "react";

const Form = ({count,up,down}) => {
    
    return(
        <div id="contador">
            <div id="count">
                <h1>{count}</h1>
            </div>
            <form id="form">
                <button  id="up" onClick={up}>Up</button>
                <button id="down" onClick={down}>Down</button>
            </form>
        </div>
    );
};

export default Form;