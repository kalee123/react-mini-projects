import React from "react";

export default function QuoteText(props){
    return(
      <>
        <div className="quotes" id="text">
          <i class="fa fa-quote-left"> </i>
          <span>{props.quote}</span>
        </div>
        <div className="author" id="author">
           <p>-{props.author}</p>
        </div>
      </>
    );
  }