(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a.n(s),r=a(23),i=a.n(r),c=a(38),o=a(9),l=a(12),h=a(13),u=a(14),d=a(15),p=a(20),j=a.n(p);function b(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function f(e){return e[Math.floor(Math.random()*e.length)]}function m(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(f(e),"-").concat(f(e),"-").concat(f(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var O=a(2),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).myInput=n.a.createRef(),e.goToStore=function(t){t.preventDefault(),e.props.history.push("/store/".concat(e.myInput.current.value))},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("form",{className:"store-selector",onSubmit:this.goToStore,children:[Object(O.jsx)("h2",{children:"Please Enter a Store"}),Object(O.jsx)("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:m()}),Object(O.jsx)("button",{type:"submit",children:" Visit Store "})]})}}]),a}(s.Component);v.proptypes={history:j.a.object};var g=v,x=a(16),y=function(e){var t=e.subtitle;return Object(O.jsxs)("header",{className:"top",children:[Object(O.jsxs)("h1",{children:["Catch",Object(O.jsxs)("span",{className:"ofThe",children:[Object(O.jsx)("span",{className:"of",children:"Of"}),Object(O.jsx)("span",{className:"the",children:"The"})]}),"Day"]}),Object(O.jsx)("h3",{className:"tagline",children:Object(O.jsx)("span",{children:t})})]})},w=a(61),k=a(62),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).renderOrder=function(t){var a=e.props.fishes[t],s=e.props.order[t],n=a&&"available"===a.status,r={classNames:"order",key:t,timeout:{enter:500,exit:500}};return a?n?Object(O.jsx)(w.a,Object(x.a)(Object(x.a)({},r),{},{children:Object(O.jsx)("li",{children:Object(O.jsxs)("span",{children:[Object(O.jsx)(k.a,{component:"span",children:Object(O.jsx)("span",{children:s})}),"lbs ",a.name," -",b(s*a.price),Object(O.jsx)("button",{onClick:function(){return e.props.removeFromOrder(t)},children:"\xd7"})]})},t)})):Object(O.jsx)(w.a,Object(x.a)(Object(x.a)({},r),{},{children:Object(O.jsxs)("li",{children:["Sorry ",a?a.name:"fish"," is no longer available"]},t)})):null},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var s=e.props.fishes[a],n=e.props.order[a];return s&&"available"===s.status?t+n*s.price:t}),0);return Object(O.jsxs)("div",{className:"order-wrap",children:[Object(O.jsx)("h2",{children:"Order"}),Object(O.jsxs)(k.a,{component:"ul",className:"order",children:[" ",t.map(this.renderOrder)]}),Object(O.jsxs)("div",{className:"total",children:["Total:",Object(O.jsx)("strong",{children:b(a)})]})]})}}]),a}(s.Component),S=F,C=a(32),N=a(22),R=a(26),I=a.n(R),T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).nameRef=Object(s.createRef)(),e.priceRef=Object(s.createRef)(),e.statusRef=Object(s.createRef)(),e.descRef=Object(s.createRef)(),e.imageRef=Object(s.createRef)(),e.createFish=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addFish(a),t.currentTarget.reset()},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("form",{className:"fish-edit",onSubmit:this.createFish,children:[Object(O.jsx)("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),Object(O.jsx)("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),Object(O.jsxs)("select",{name:"status",ref:this.statusRef,children:[Object(O.jsx)("option",{value:"available",children:"Fresh!"}),Object(O.jsx)("option",{value:"unavailable",children:"Sold Out!"})]}),Object(O.jsx)("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),Object(O.jsx)("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),Object(O.jsx)("button",{type:"submit",children:"+ Add Fish"})]})}}]),a}(s.Component),A=T,D=a(29),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleChange=function(t){console.log(t.currentTarget.value);var a=Object(x.a)(Object(x.a)({},e.props.fish),{},Object(D.a)({},t.currentTarget.name,t.currentTarget.value));e.props.updateFish(e.props.index,a)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"fish-edit",children:[Object(O.jsx)("input",{name:"name",value:this.props.fish.name,onChange:this.handleChange,type:"text"}),Object(O.jsx)("input",{name:"price",value:this.props.fish.price,onChange:this.handleChange,type:"text"}),Object(O.jsxs)("select",{name:"status",value:this.props.fish.status,onChange:this.handleChange,children:[Object(O.jsx)("option",{value:"available",children:"Fresh!"}),Object(O.jsx)("option",{value:"unavailable",children:"Sold Out!"})]}),Object(O.jsx)("textarea",{name:"desc",value:this.props.fish.desc,onChange:this.handleChange}),Object(O.jsx)("input",{name:"image",value:this.props.fish.image,onChange:this.handleChange,type:"text"}),Object(O.jsx)("button",{onClick:function(){return e.props.deleteFish(e.props.index)},children:"Remove Fish"})]})}}]),a}(s.Component),M=L,P=function(e){return Object(O.jsxs)("nav",{className:"login",children:[Object(O.jsx)("h2",{children:"Inventory Login "}),Object(O.jsx)("p",{children:"Sign in to manage your store's inventory"}),Object(O.jsx)("button",{className:"github",onClick:function(){return e.authenticate("Github")},children:"Login with Github"}),Object(O.jsx)("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")},children:"Login with Facebook"}),Object(O.jsx)("button",{className:"twitter",onClick:function(){return e.authenticate("Google")},children:"Login with Google"})]})},z=a(25),B=a(37),J=a.n(B),U=z.a.initializeApp({apiKey:"AIzaSyBkD27axO9sooM_fyR0Q5hDaX2q4dytznE",authDomain:"catch-of-the-day---aso.firebaseapp.com",databaseURL:"https://catch-of-the-day---aso-default-rtdb.firebaseio.com"}),E=J.a.createClass(U.database()),G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={uid:null,owner:null},e.authHandler=function(){var t=Object(C.a)(I.a.mark((function t(a){var s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),t.next=3,E.fetch(e.props.storeId,{context:Object(N.a)(e)});case 3:if(s=t.sent,console.log(s),s.owner){t.next=8;break}return t.next=8,E.post("".concat(e.props.storeId,"/owner"),{data:a.user.uid});case 8:e.setState({uid:a.user.uid,owner:s.owner||a.user.id});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(t){var a=new(z.a.auth["".concat(t,"AuthProvider")]);U.auth().signInWithPopup(a).then(e.authHandler)},e.logout=Object(C.a)(I.a.mark((function t(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.a.auth().signOut();case 2:e.setState({uid:null});case 3:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;z.a.auth.onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){var e=this,t=Object(O.jsx)("button",{onClick:this.logout,children:"Log Out!"});return this.state.uid?this.state.uid!==this.state.owner?Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Sorry, you are not the owner of this store"}),t]}):Object(O.jsxs)("div",{className:"inventory",children:[Object(O.jsx)("h2",{children:"Inventory"}),t,Object.keys(this.props.fishes).map((function(t){return Object(O.jsx)(M,{fish:e.props.fishes[t],index:t,updateFish:e.props.updateFish,deleteFish:e.props.deleteFish},t)})),Object(O.jsx)(A,{addFish:this.props.addFish}),Object(O.jsx)("button",{onClick:this.props.loadFishes,children:"Load Sample Fishes"})]}):Object(O.jsx)(P,{authenticate:this.authenticate})}}]),a}(s.Component),H=G,W=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.fish,a=t.image,s=t.name,n=t.price,r=t.desc,i="available"===t.status;return Object(O.jsx)("div",{className:"single-fish",children:Object(O.jsxs)("li",{className:"menu-fish",children:[Object(O.jsx)("img",{src:a,alt:""}),Object(O.jsxs)("h3",{className:"fish-name",children:[s,Object(O.jsx)("span",{className:"price",children:b(n)})]}),Object(O.jsx)("p",{children:r}),Object(O.jsx)("button",{disabled:!i,onClick:function(){return e.props.addToOrder(e.props.index)},children:i?"Add to Order":"Sold Out"})]})})}}]),a}(s.Component),q=W,K={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},V=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={fishes:{},order:{}},e.addFish=function(t){var a=Object(x.a)({},e.state.fishes);a["fish".concat(Date.now())]=t,e.setState({fishes:a})},e.updateFish=function(t,a){var s=Object(x.a)({},e.state.fishes);s[t]=a,e.setState({fishes:s})},e.deleteFish=function(t){var a=Object(x.a)({},e.state.fishes);a[t]=null,e.setState({fishes:a})},e.loadFishes=function(){e.setState({fishes:K})},e.addToOrder=function(t){var a=Object(x.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.removeFromOrder=function(t){var a=Object(x.a)({},e.state.order);delete a[t],e.setState({order:a})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem(this.props.match.params.storeId);e&&this.setState({order:JSON.parse(e)}),this.ref=E.syncState("".concat(this.props.match.params.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){E.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"catch-of-the-day",children:[Object(O.jsxs)("div",{className:"menu",children:[Object(O.jsx)(y,{subtitle:"Fresh Seafood Market"}),Object(O.jsx)("ul",{className:"fishes",children:Object.keys(this.state.fishes).map((function(t){return Object(O.jsx)(q,{fish:e.state.fishes[t],index:t,addToOrder:e.addToOrder},t)}))})]}),Object(O.jsx)(S,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),Object(O.jsx)(H,{addFish:this.addFish,loadFishes:this.loadFishes,fishes:this.state.fishes,updateFish:this.updateFish,deleteFish:this.deleteFish,storeId:this.props.match.params.storeId})]})}}]),a}(s.Component),Q=V,X=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Not found"})})},_=function(){return Object(O.jsx)(c.a,{children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:g}),Object(O.jsx)(o.a,{path:"/store/:storeId",component:Q}),Object(O.jsx)(o.a,{component:X})]})})};a(58);i.a.render(Object(O.jsx)(_,{}),document.getElementById("main"))}},[[59,1,2]]]);
//# sourceMappingURL=main.e8cc388a.chunk.js.map