import React from "react";
import QuoteText from "./QuoteText";
import Buttons from "./Buttons";

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

export default class RandomQuote extends React.Component{
  
    constructor(props){
      super(props);
      this.state = {
        data : {},
        isRecived : false
      }
      
    }
    
    componentDidMount(){
      let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
      
        fetch(url)
        .then(response => response.json())
        .then(data => {
        //console.log(data);
          this.setState({
            data: data,
            isRecived: true
          });
          console.log(this.state);
         }).catch(error => console.log(error));
       
      console.log("didmount"); 
    }
    
    reLoadQuote = ()=>{
      this.setState({
        isRecived: true
      })
    }
    
    render(){
      if(this.state.isRecived){
  
        let {quotes} = this.state.data;
        let random = Math.floor(Math.random() * 102);
        let colorRandom = Math.floor(Math.random() * 10);
        let {quote,author} = quotes[random]; 
        document.body.style.backgroundColor = colors[colorRandom];
        document.body.style.color = colors[colorRandom];
        return(
          <div className="container">
            <div id="quote-box">
              <QuoteText author={author}  quote={quote} />
              <Buttons newQuote={this.reLoadQuote} quote={quote}/>
            </div>  
            <div className="footer">by kalee</div>
          </div>
        );
        
      }  
      else
      return <div id="quote-box"></div>;
      
    }
  
  }