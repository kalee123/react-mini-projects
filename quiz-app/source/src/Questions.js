import React from 'react';


export default function Questions(props){

    const ans = props.quiz.responses;
    const alpha = ['a','b','c','d'];
    const answerRef = React.useRef([]);
    const [prevIndex,setPrevIndex] = React.useState(props.initial);
    //console.log(props.initial);
    const activeClass=(e)=>{
        let id = e.target.id;
        if(prevIndex!==-1){
          answerRef.current[prevIndex].classList.remove('click-state');
        }
        answerRef.current[id].classList.add('click-state');
        setPrevIndex(id);
        if(ans[id].correct){
          props.answer(1);
        }
        else{
          props.answer(0);
        }
        props.select(id);
    }
    
    React.useEffect(()=>{
      //console.log("mount");
      return () =>{
       //console.log('unmount');
      }
      
    },[])
    
    return(
       <>
        <p className="question">{props.index+1+") "+props.quiz.question}</p>
        {
          ans.map((item,index)=>{
            return <div 
                     ref={el => answerRef.current[index] = el} 
                     className={prevIndex===index?'click-state answers':'answers'} 
                     id={index} 
                     onClick={activeClass}>{alpha[index]+')  '+item.ans}</div>
          })
        }
      </>
    ); 
    
  }