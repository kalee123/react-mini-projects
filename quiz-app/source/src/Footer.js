import React from "react";

export default function Footer(props){
    return(
      <div className="footer">    
        <button onClick={props.decrement}>prev</button>
        <button onClick={props.increment}>{props.counter>=9?'Submit':'Next'}</button>
      </div>
    ); 
  }
  