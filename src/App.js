import React,{useState} from 'react';
import { quizQuestions } from './data';
import Questions from './Questions';
import Footer from './Footer';
import Refresh from './Refresh';
import './App.scss';

function App() {
  
  const arr = new Array(10).fill(0);
  const [counter,setCounter] = useState(0);
  const [changer,setChanger] = useState(true);
  const [answers,setAnswers] = useState(arr);
  const [selection,setSelection] = useState(new Array(10).fill(-1));
  
  //console.log(selection);
  const handleIncrement = ()=>{
    if(counter<9){
      setChanger(false);
    setTimeout(() => {
      setChanger(true);
      
     }, 100);
      setCounter(counter+1);
    } 
    else{
      setCounter(10);
    }
  }
  
  const handleDecrement = () =>{
    if(counter>0){
      setChanger(false);
      setTimeout(() => {
        setChanger(true);
      }, 100);
      setCounter(counter-1);
    }
  }
  
  const handleAnswer =(val)=>{
    let newArr = [...answers];
    newArr[counter] = val;
    setAnswers(newArr);
  }
  const handleSelect =(val)=>{
    let newArr = [...selection];
    newArr[counter] = parseInt(val);
    setSelection(newArr);
  }
  const handleRefresh=()=>{
    setCounter(0);
    setChanger(true);
    setAnswers(arr);
    setSelection(new Array(10).fill(-1));
  }
  
  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
      <div className="ques-section">
        {counter<=9? changer && <Questions 
                        quiz={quizQuestions[counter]} 
                        index={counter} 
                        initial={selection[counter]}
                        answer={handleAnswer}
                        select={handleSelect}/>:
                     <Refresh 
                        correct={answers}
                        refresh={handleRefresh}/>}
      </div>
      <Footer 
        increment={handleIncrement}
        decrement={handleDecrement}
        counter={counter}/>
    </div>
  );
}

export default App;

