(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(3),s=c.n(a),r=c(4),i=c(5),u=c(7),d=c(6),j=c(0);function l(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"quotes",id:"text",children:[Object(j.jsx)("i",{class:"fa fa-quote-left",children:" "}),Object(j.jsx)("span",{children:e.quote})]}),Object(j.jsx)("div",{className:"author",id:"author",children:Object(j.jsxs)("p",{children:["-",e.author]})})]})}function h(e){return Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("a",{id:"tweet-quote",target:"_blank",href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=",children:Object(j.jsx)("i",{className:"fa fa-twitter"})}),Object(j.jsx)("a",{id:"tumblr-quote",href:"#",children:Object(j.jsx)("i",{className:"fa fa-tumblr"})}),Object(j.jsx)("button",{id:"new-quote",onClick:e.newQuote,children:"New Quote"})]})}var b=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],f=function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).reLoadQuote=function(){n.setState({isRecived:!0})},n.state={data:{},isRecived:!1},n}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.json()})).then((function(t){e.setState({data:t,isRecived:!0}),console.log(e.state)})).catch((function(e){return console.log(e)})),console.log("didmount")}},{key:"render",value:function(){if(this.state.isRecived){var e=this.state.data.quotes,t=Math.floor(102*Math.random()),c=Math.floor(10*Math.random()),n=e[t],o=n.quote,a=n.author;return document.body.style.backgroundColor=b[c],document.body.style.color=b[c],Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{id:"quote-box",children:[Object(j.jsx)(l,{author:a,quote:o}),Object(j.jsx)(h,{newQuote:this.reLoadQuote,quote:o})]}),Object(j.jsx)("div",{className:"footer",children:"by kalee"})]})}return Object(j.jsx)("div",{id:"quote-box"})}}]),c}(o.a.Component);c(13);var x=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(f,{})})};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fe42994b.chunk.js.map