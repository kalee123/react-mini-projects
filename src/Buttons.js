import React from "react";

export default function Buttons(props){
    return(
      <div className="buttons">
        <a  id="tweet-quote" target="_blank" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=">
          <i className="fa fa-twitter"></i>
        </a>
        <a id="tumblr-quote"  href="#">
          <i className="fa fa-tumblr"></i>
        </a>
        <button id="new-quote" onClick={props.newQuote}>New Quote</button>
      </div>
    );
  }
  