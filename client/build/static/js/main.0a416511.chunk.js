(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,n){e.exports=n(82)},56:function(e,t,n){},57:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);n(47),n(48);var a=n(1),r=n.n(a),o=n(21),c=n.n(o),l=(n(56),n(11)),i=n(12),u=n(14),s=n(13),m=n(15),d=n(44),h=n(6),f=(n(57),n(41)),v=n(84),k=n(85);var E=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement(k.a,null,r.a.createElement("h1",{className:"title"},"Google Books Search")),r.a.createElement("br",null),r.a.createElement(k.a,null,r.a.createElement("input",{className:"input",onChange:e.handleInputChange,value:e.search,name:"search",type:"text"}),r.a.createElement("button",{className:"btn",onClick:e.handleFormSubmit},"Search"))))},b=n(22),p=n.n(b),g={getBook:function(e){return p.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},saveBook:function(e){return p.a.post("/api/books",e).then(function(e){return e.data})},savedBooks:function(){return p.a.get("/api/books").then(function(e){return e.data})},deleteBook:function(e){return p.a.delete("/api/books/"+e).then(function(e){return e.data})}},B=n(86),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={savedBooks:[]},n.handleSave=function(e){n.state.savedBooks.map(function(e){return e._id}).includes(e._id)?g.deleteBook(e._id).then(function(e){return n.setState({savedBooks:n.state.savedBooks.filter(function(t){return t._id!==e._id})})}).catch(function(e){return console.error(e)}):g.saveBook(e).then(function(e){return n.setState({savedBooks:n.state.savedBooks.concat([e])})}).catch(function(e){return console.error(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.savedBooks().then(function(t){return e.setState({savedBooks:t})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,this.props.books.map(function(t){return r.a.createElement("div",{key:t._id},r.a.createElement("img",{alt:t.title,className:"img",src:t.image}),r.a.createElement("h5",null,t.title," by ",t.authors),r.a.createElement("p",null,t.description),r.a.createElement(B.a,{className:"btn",href:t.link,target:"blank"}," View "),r.a.createElement(B.a,{className:"btn",onClick:function(){return e.handleSave(t)}}," Save",e.state.savedBooks.map(function(e){return e._id}).includes(t._id?"Unsave":"Save")),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null))})))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",books:[]},n.createBook=function(e){return{_id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.previewLink}},n.searchBooks=function(e){g.getBook(e).then(function(e){return n.setState({books:e.data.items.map(function(e){return n.createBook(e)})})}).catch(function(e){return console.error(e)})},n.handleInputChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(f.a)({},t,a))},n.handleFormSubmit=function(e){e.preventDefault(),n.searchBooks(n.state.search)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.searchBooks()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(k.a,null,r.a.createElement(E,{search:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(k.a,null,r.a.createElement("h1",{className:"title"},"Results")),r.a.createElement(k.a,null,r.a.createElement(w,{books:this.state.books}))))}}]),t}(r.a.Component),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={savedBooks:[]},n.handleSave=function(e){n.state.savedBooks.map(function(e){return e._id}).includes(e._id)?g.deleteBook(e._id).then(function(e){return n.setState({savedBooks:n.state.savedBooks.filter(function(t){return t._id!==e._id})})}).catch(function(e){return console.error(e)}):g.saveBook(e).then(function(e){return n.setState({savedBooks:n.state.savedBooks.concat([e])})}).catch(function(e){return console.error(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.savedBooks().then(function(t){return e.setState({savedBooks:t})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,this.props.books.map(function(t){return r.a.createElement("div",{key:t._id},r.a.createElement("img",{alt:t.title,className:"img",src:t.image}),r.a.createElement("h5",null,t.title," by ",t.authors),r.a.createElement("p",null,t.description),r.a.createElement(B.a,{className:"btn",href:t.link,target:"blank"}," View "),r.a.createElement(B.a,{onClick:function(){return e.handleSave(t)}}," ",e.state.savedBooks.map(function(e){return e._id}).includes(t._id)?"Delete":"Save"),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null))})))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={savedBooks:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.savedBooks().then(function(t){return e.setState({savedBooks:t})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement(k.a,null,r.a.createElement("h1",{className:"title"},"Saved books")),r.a.createElement(k.a,null,r.a.createElement(y,{books:this.state.savedBooks}))))}}]),t}(a.Component),S=n(87),_=n(88),N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{className:"header"},r.a.createElement(_.a,{className:"mr-auto"},r.a.createElement(_.a.Link,{href:"/search"},"Search"),r.a.createElement(_.a.Link,{href:"/saved"},"Saved")),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("br",null))};var C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S.a,{bg:"dark",variant:"dark",style:{position:"fixed",width:"100%",bottom:-20,display:"block",padding:20}},r.a.createElement(_.a,{className:"mr-auto"},r.a.createElement(_.a.Link,null))))},F=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(N,null),r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:"/",component:j}),r.a.createElement(h.a,{exact:!0,path:"/search",component:j}),r.a.createElement(h.a,{exact:!0,path:"/saved",component:O})),r.a.createElement(C,null))}}]),t}(a.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(F,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");I?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):x(e)})}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.0a416511.chunk.js.map