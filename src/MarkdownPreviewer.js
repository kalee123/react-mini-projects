import React,{Component} from 'react';
import ReactMarkdown from 'react-markdown'
import { placeholder } from './placeholder';

export default class MarkdownPreviewer extends Component{
    constructor(){
      super();
      this.state = {
      markdown: placeholder
      };
  
    }
    
    handleChange = e => {
      this.setState({ markdown: e.target.value });
    };
  
    render() {
      return (
        <div>
          <div className="header">
              <h1>MarkDown previewer</h1>
          </div>    
          <div className="mark-container" >
            <div className="container">
              <h3>Editor</h3>
              <textarea
                id="editor"
                value={this.state.markdown}
                onChange={this.handleChange}
               ref={this.myref}/>
             </div>
     
           <div className="container">
              <h3>previewer</h3>
              <div
              id="preview">
                <ReactMarkdown>{this.state.markdown}</ReactMarkdown>
              </div>
           </div>
          </div>
      
        </div>
      );
    }
  }