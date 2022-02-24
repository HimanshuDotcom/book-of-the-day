(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{25:function(e,a,t){e.exports=t(46)},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(21),s=t(13),i=t(7),c=t(8),l=t(10),m=t(9),u=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Book",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"Of"),r.a.createElement("span",{className:"the"},"The")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))};function p(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}var d=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=a.call.apply(a,[this].concat(o))).renderOrder=function(a){var t=e.props.books[a],n=e.props.order[a];return t&&0!==n?"available"===t.status?r.a.createElement("li",{key:a},n," - ",t.name," \xa0",r.a.createElement("button",{onClick:function(){return e.props.removeOrder(a)}},"\xd7"),p(n*t.price)):r.a.createElement("li",{key:a},"Sorry ",t?t.name:"book"," is no longer available"):null},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this,a=Object.keys(this.props.order),t=a.reduce((function(a,t){var n=e.props.order[t],r=e.props.books[t];return r&&"available"===r.status?a+n*r.price:a}),0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"ORder"),r.a.createElement("ul",{className:"order"},a.map(this.renderOrder)),r.a.createElement("div",{className:"total"},"Total:",r.a.createElement("strong",null,p(t))))}}]),t}(r.a.Component),h=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=a.call.apply(a,[this].concat(o))).nameRef=r.a.createRef(),e.priceRef=r.a.createRef(),e.statusRef=r.a.createRef(),e.descRef=r.a.createRef(),e.imageRef=r.a.createRef(),e.createBook=function(a){a.preventDefault();var t={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addBook(t),a.currentTarget.reset()},e}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"fish-edit",onSubmit:this.createBook},r.a.createElement("input",{type:"text",name:"name",placeholder:"name",ref:this.nameRef}),r.a.createElement("input",{type:"text",name:"price",placeholder:"Price",ref:this.priceRef}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",placeholder:"Desc",ref:this.descRef}),r.a.createElement("input",{type:"text",name:"image",placeholder:"Image",ref:this.imageRef}),r.a.createElement("button",{type:"submit"},"+ Add Item")))}}]),t}(r.a.Component),f=t(16),v=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleChange=function(a){var t=Object(s.a)(Object(s.a)({},e.props.book),{},Object(f.a)({},a.target.name,a.target.value));e.props.updateBook(e.props.index,t)},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"fish-edit"},r.a.createElement("input",{type:"text",name:"name",placeholder:"name",value:this.props.book.name,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"price",placeholder:"Price",value:this.props.book.price,onChange:this.handleChange}),r.a.createElement("select",{name:"status",value:this.props.book.status,onChange:this.handleChange},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",placeholder:"Desc",value:this.props.book.desc,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"image",placeholder:"Image",value:this.props.book.image,onChange:this.handleChange}),r.a.createElement("button",{onClick:function(a){a.preventDefault(),e.props.removeBook(e.props.index)}},"Remove Item"))}}]),t}(r.a.Component),b=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=a.call.apply(a,[this].concat(o))).renderEditBook=function(a){return r.a.createElement(v,{key:a,index:a,book:e.props.books[a],books:e.props.books,updateBook:e.props.updateBook,removeBook:e.props.removeBook})},e}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),Object.keys(this.props.books).map(this.renderEditBook),r.a.createElement(h,{addBook:this.props.addBook,loadSampleBooks:this.props.loadSampleBooks}))}}]),t}(r.a.Component),k={fish1:{name:"The 4-HOUR WORK WEEK",image:"/images/work.jpg",desc:"The 4-Hour Workweek is a new way of solving a very old problem: just how can we work to live and prevent our lives from being all about work?",price:168,status:"unavailable"},fish2:{name:"The Magic of Big Thinking",image:"/images/magic.jpg",desc:"Believe in yourself, never underestimate your own intelligence, think positively, and plan for success",price:143,status:"available"},fish3:{name:"The sceince of getting rich",image:"/images/science.jpg",desc:"The Science of Getting Rich can do for you today what it has been doing for successful men and women of all ages, from all walks of life.",price:172,status:"available"},fish4:{name:"The Art of Thinking Clearly",image:"/images/artOf.jpg",desc:"The Art of Thinking Clearly by world-class thinker and entrepreneur Rolf Dobelli is an eye-opening look at human psychology and reasoning  ",price:1129,status:"available"},fish5:{name:"Self Discipline",image:"/images/self.jpg",desc:"Develop Daily Habits to Program Your Mind, Build Mental Toughness, Self-Confidence and Willpower ",price:434,status:"available"},fish6:{name:"The Man Search for meaning",image:"/images/meaning.jpg",desc:"Frankl's Man's Search for Meaning provides a vivid account of an individual's experience as a prisoner in a Nazi concentration camp.",price:320,status:"available"},fish7:{name:"Thinking Fast and Slow",image:"/images/thinking.jpg",desc:"Thinking, Fast and Slow, Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way..",price:2543,status:"available"},fish8:{name:"The 7 habits",image:"/images/habbits.jpg",desc:"Covey presents an approach to being effective in attaining goals",price:425,status:"available"}},g=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this,a=this.props.details,t=a.image,n=a.name,o=a.price,s=a.desc,i="available"===a.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:t,alt:n}),r.a.createElement("h3",{className:"fish-name"},n,r.a.createElement("span",{className:"price"},p(o))),r.a.createElement("p",null,s),r.a.createElement("button",{disabled:!i,onClick:function(){return e.props.addToOrder(e.props.index)}},i?"Add To Order":"Sold Out"))}}]),t}(r.a.Component),E=t(22),y=t.n(E),O=t(23),j=t.n(O).a.initializeApp({apiKey:"AIzaSyClyZFv4CUw__Sd9eIF66lSioFUKWkSeEA",authDomain:"catch-of-the-day-2cee1.firebaseapp.com",databaseURL:"https://catch-of-the-day-2cee1-default-rtdb.firebaseio.com"}),B=(y.a.createClass(j.database()),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={books:{},order:{}},e.addBook=function(a){var t=Object(s.a)({},e.state.books);t["book".concat(Date.now())]=a,e.setState({books:t})},e.updateBook=function(a,t){var n=Object(s.a)({},e.state.books);n[a]=t,e.setState({books:n})},e.removeBook=function(a){var t=Object(s.a)({},e.state.books);delete t[a],e.setState({books:t})},e.loadSampleBooks=function(){e.setState({books:k})},e.addToOrder=function(a){var t=e.state.order;t[a]=t[a]+1||1,e.setState({order:t})},e.removeOrder=function(a){var t=e.state.order;1===t[a]?delete t[a]:t[a]-=1,e.setState({order:t})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({books:k})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(u,{tagline:"Fresh NEW BOOKS"}),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.books).map((function(a){return r.a.createElement(g,{key:a,index:a,details:e.state.books[a],addToOrder:e.addToOrder})})))),r.a.createElement(d,{books:this.state.books,order:this.state.order,removeOrder:this.removeOrder}),r.a.createElement(b,{addBook:this.addBook,loadSampleBooks:this.loadSampleBooks,books:this.state.books,updateBook:this.updateBook,removeBook:this.removeBook}))}}]),t}(r.a.Component)),S=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found  !!!!!!!1"))},w=t(49),C=t(50),R=t(51),T=function(){return r.a.createElement(w.a,null,r.a.createElement(C.a,null,r.a.createElement(R.a,{exact:!0,path:"/",component:B}),r.a.createElement(R.a,{component:S})))};t(45);Object(o.render)(r.a.createElement(T,null),document.getElementById("main"))}},[[25,1,2]]]);
//# sourceMappingURL=main.8e093659.chunk.js.map