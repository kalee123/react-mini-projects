import React from 'react'


export default function Refresh(props){
    let count = props.correct.filter(x => x === 1).length;
    
    return(
        <div class="refresh">
          {count<6?<h3>Better Luck Next Time</h3>:<h3>Great!!!</h3>}
          <p>Total score: {count}/10</p>
          <button className='ref-btn' onClick={props.refresh}>Refresh</button>
        </div>
    );
  }