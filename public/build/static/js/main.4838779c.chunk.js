(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,a){},40:function(e){e.exports=JSON.parse('[{"name":"Drake","image":"https://i.imgflip.com/30b1gx.jpg"},{"name":"Boyfriend","image":"https://i.imgflip.com/1ur9b0.jpg"},{"name":"Bernie","image":"https://i.imgflip.com/3oevdk.jpg"},{"name":"Batman","image":"https://i.imgflip.com/9ehk.jpg"},{"name":"Woman yelling","image":"https://i.imgflip.com/345v97.jpg"},{"name":"Disaster Girl","image":"https://i.imgflip.com/23ls.jpg"},{"name":"Button","image":"https://i.imgflip.com/1yxkcp.jpg"},{"name":"Clown","image":"https://i.imgflip.com/38el31.jpg"},{"name":"Smart","image":"https://i.imgflip.com/1h7in3.jpg"},{"name":"Fire","image":"https://i.imgflip.com/wxica.jpg"},{"name":"Oprah","image":"https://i.imgflip.com/gtj5t.jpg"},{"name":"Di Caprio","image":"https://i.imgflip.com/4acd7j.png"},{"name":"Cry","image":"https://i.imgflip.com/3pnmg.jpg"},{"name":"Scared cat","image":"https://i.imgflip.com/2hgfw.jpg"},{"name":"Cute cat","image":"https://i.imgflip.com/4xgqu.jpg"},{"name":"Grumpy cat","image":"https://i.imgflip.com/8p0a.jpg"},{"name":"Oprah give","image":"https://i.imgflip.com/49z6c.jpg"},{"name":"Dexter","image":"https://i.imgflip.com/16iyn1.jpg"},{"name":"Handsome Patrick","image":"https://i.imgflip.com/64ku.jpg"},{"name":"Tea","image":"https://i.imgflip.com/9sw43.jpg"},{"name":"Happy Bob","image":"https://i.imgflip.com/3i7p.jpg"},{"name":"Dog","image":"https://i.imgflip.com/4t0m5.jpg"},{"name":"Pills","image":"https://i.imgflip.com/271ps6.jpg"}]')},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(37),i=a.n(c),l=a(5),r=a(6),o=a(7),m=a(9),d=a(8),h=a(38),j=a.n(h).a.create({baseURL:"http://localhost:5000",withCredentials:!0});function u(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var p={service:j,signup:function(e){return j.post("/api/auth/signup",e).then((function(e){return e.data})).catch(u)},signin:function(e){return j.post("/api/auth/signin",e).then((function(e){return e.data})).catch(u)},isLoggedIn:function(){return j.get("/api/users/me").then((function(e){return e.data})).catch(u)},logout:function(){return j.get("/api/auth/logout").then((function(e){return e.data})).catch(u)},getUserInfos:function(){return j.get("/api/users/me").then((function(e){return e.data})).catch(u)},PatchUserInfos:function(e){return j.patch("/api/users/me",e).then((function(e){return e.data})).catch(u)},postMemes:function(e){return j.post("/api/memes/create",e).then((function(e){return e.data})).catch(u)},getUserMemes:function(e){return j.get("/api/users/me/memes",e).then((function(e){return e.data})).catch(u)},getAllUsersMemes:function(){return j.get("/api/memes/all").then((function(e){return e.data})).catch(u)},deleteMemes:function(e){return j.delete("/api/memes/"+e).then((function(e){return e.data})).catch(u)},postComment:function(e,t){return j.post("/api/memes/".concat(e,"/comment"),t).then((function(e){return e.data})).catch(u)},getComments:function(e){return j.get("/api/memes/".concat(e,"/allComments")).then((function(e){return e.data})).catch(u)},deleteComments:function(e,t){return console.log(t,"this is comment id"),j.delete("/api/memes/".concat(e,"/").concat(t)).then((function(e){return e.data})).catch(u)}},b=n.a.createContext(),g=a(0),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.isLoggedIn().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return Object(g.jsx)(b.Provider,{value:e,children:this.props.children})}}]),a}(s.Component),x=a(3),O=a(15),v=function(e){return function(t){return Object(g.jsx)(b.Consumer,{children:function(a){return Object(g.jsx)(e,Object(O.a)(Object(O.a)({},t),{},{context:a}))}})}},N=a(16),y=function(e){return Object(g.jsxs)("div",{children:[" ",void p.logout().then((function(){console.log(e),e.history.push("/signin")})).catch((function(e){console.log(e)}))]})},C=v((function(e){var t=e.context;return Object(g.jsxs)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:[Object(g.jsxs)("div",{className:"navbar-brand",children:[Object(g.jsx)(l.b,{exact:!0,to:"/",children:Object(g.jsx)("img",{id:"main-logo",className:"image",src:"../memeLogo.png",alt:""})}),Object(g.jsxs)(l.b,{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false",to:"navbarBasicExample",children:[Object(g.jsx)("span",{"aria-hidden":"true"}),Object(g.jsx)("span",{"aria-hidden":"true"}),Object(g.jsx)("span",{"aria-hidden":"true"})]})]}),Object(g.jsx)("div",{id:"navbarBasicExample",className:"navbar-menu",children:Object(g.jsx)("div",{className:"navbar-end",children:t.isLoggedIn&&Object(g.jsxs)(n.a.Fragment,{children:[Object(g.jsxs)(l.b,{exact:!0,to:"/",className:"navbar-item",children:[Object(g.jsx)(N.a,{icon:"home"}),Object(g.jsx)("div",{children:"Home"})]}),Object(g.jsxs)(l.b,{exact:!0,to:"/profile",className:"navbar-item",children:[Object(g.jsx)(N.a,{icon:"user"}),Object(g.jsx)("div",{children:"Profile"})]}),t.user&&Object(g.jsxs)(l.b,{exact:!0,to:"/memeform",className:"navbar-item",children:[Object(g.jsx)(N.a,{icon:"hashtag"}),Object(g.jsx)("div",{children:"Create a meme"})]}),Object(g.jsxs)(l.b,{exact:!0,to:"/logout",className:"navbar-item",children:[Object(g.jsx)(N.a,{icon:"sign-out-alt",onClick:function(){return Object(g.jsx)(y,{user:t})}}),Object(g.jsx)("div",{children:"Logout"})]})]})})})]})})),S=(a(36),a(17),a(14)),w=(a(70),function(e){var t=e.status,a=e.message;return Object(g.jsx)("div",{className:"button ".concat(t," is-light is-fullwidth"),children:Object(g.jsx)("strong",{children:a})})}),I=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={email:"",password:"",httpResponse:null},e.handleChange=function(t){var a=t.target.name,s=t.target.value;e.setState(Object(S.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault(),p.signin(e.state).then((function(t){e.setState({httpResponse:{status:"is-primary",message:"Welcome"}}),setTimeout((function(){e.props.context.setUser(t)}),1e3)})).catch((function(t){e.setState({httpResponse:{status:"is-danger",message:"Oh no! your not found here, please try again"}})}))},e}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.context.user)return Object(g.jsx)(x.a,{to:"/"});var e=this.state.httpResponse;return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"modal is-active",children:[Object(g.jsx)("div",{className:"modal-background"}),Object(g.jsxs)("div",{className:"modal-card",children:[Object(g.jsx)("header",{className:"modal-card-head",children:Object(g.jsx)("h2",{className:"title",children:"Signin"})}),Object(g.jsx)("div",{className:"modal-card-body",children:Object(g.jsxs)("form",{className:"container-form",onChange:this.handleChange,onSubmit:this.handleSubmit,children:[e&&Object(g.jsx)(w,{message:e.message,status:e.status}),Object(g.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("input",{className:"input",type:"email",id:"email",name:"email"})}),Object(g.jsx)("label",{className:"label",htmlFor:"password",children:"Password"}),Object(g.jsx)("input",{className:"input",type:"password",id:"password",name:"password"}),Object(g.jsx)("button",{className:"button is-primary is-fullwidth",children:"Submit"})]})}),Object(g.jsx)("div",{className:"modal-card-foot",children:Object(g.jsx)(l.b,{exact:!0,to:"/signup",children:"Create profile"})})]})]})})}}]),a}(s.Component),k=Object(x.g)(v(I)),D=function(e){return Object(g.jsx)(k,{})},F=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={comment:""},e.handleChange=function(t){e.setState({comment:t.target.value})},e.handleSubmit=function(t){console.log(t.target.value),"Enter"===t.key&&(t.preventDefault(),p.postComment(e.props.memeById,e.state).then((function(){e.props.updateComments(e.props.memeById)})).catch((function(e){console.log(e)})))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsx)("form",{className:"has-addons",onKeyPress:this.handleSubmit,children:Object(g.jsx)("div",{className:"control",children:Object(g.jsxs)("span",{children:[" ",Object(g.jsx)("input",{className:"input is-small",type:"text",name:"comment",onChange:this.handleChange,placeholder:"Add a comment...",required:!0})]})})})}}]),a}(s.Component),L=v(function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={memes:[],memeId:null,comments:[],closeComment:!1,addComment:!1,httpResponse:null},e.handleDelete=function(t,a){p.deleteComments(a,t).then((function(){e.setState({httpResponse:{status:"is-danger",message:"Comment deleted!"}}),setTimeout((function(){e.getComments(a),e.setState({httpResponse:null})}),1e3)})).catch((function(e){return console.log(e)}))},e.handleClick=function(t){t===e.state.memeId?e.setState({memeId:null}):(e.setState({memeId:t}),e.getComments(t))},e.handleAddComment=function(t){e.setState({memeId:t,closeComment:!1,addComment:!1}),e.setState({httpResponse:{status:"is-primary",message:"Comment added!"}}),setTimeout((function(){e.setState({httpResponse:null}),e.getComments(t)}),1e3)},e.addComment=function(){e.setState({addComment:!e.state.addComment})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.getAllUsersMemes().then((function(t){e.setState({memes:t})})).catch((function(e){return console.log(e)}))}},{key:"getComments",value:function(e){var t=this;p.getComments(e).then((function(e){t.setState({comments:e,closeComment:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.httpResponse;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"titlecolor ",children:Object(g.jsx)("h1",{children:"New & Fresh"})}),Object(g.jsx)(D,{}),t&&Object(g.jsx)(w,{message:t.message,status:t.status}),Object(g.jsx)("div",{className:"container",children:this.state.memes.map((function(t){return Object(g.jsx)("div",{className:"grid",children:Object(g.jsxs)("article",{className:"box",children:[Object(g.jsxs)("p",{children:[" ","posted by ",t.creator.userName," on"," ",new Date(t.createdAt).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})]}),Object(g.jsxs)("div",{className:"imgBox",children:[Object(g.jsx)("img",{src:t.memeimage,alt:"",className:"img"}),Object(g.jsx)("span",{className:"topText",children:t.caption1}),Object(g.jsx)("span",{className:"bottomText",children:t.caption2})]}),Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{className:"button is-small",onClick:function(){return e.handleClick(t._id)},children:Object(g.jsx)(N.a,{icon:"list",size:"2x"})}),Object(g.jsx)("span",{className:"button is-small",onClick:e.addComment,children:Object(g.jsx)(N.a,{icon:"comment-dots",size:"2x"})})]}),e.state.addComment&&Object(g.jsx)(F,{updateComments:e.handleAddComment,memeById:t._id}),e.state.memeId===t._id&&e.state.comments.map((function(a){return Object(g.jsxs)("div",{className:"content is-small",children:[Object(g.jsx)("div",{children:Object(g.jsxs)("span",{children:[a.text," ",Object(g.jsx)("i",{children:"posted by:"})," ",a.creator.userName,e.props.context.user._id===a.creator._id&&Object(g.jsx)("button",{className:"delete is-small",onClick:function(){return e.handleDelete(a._id,t._id)},children:"Delete"})]})},a._id),Object(g.jsx)("hr",{})]})}))]})},t._id)}))})]})}}]),a}(s.Component)),R=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={email:"",password:"",userName:"",profileImg:"",zodiacSign:"",city:"",httpResponse:null},e.handleChange=function(t){var a=t.target.value,s=t.target.name;e.setState(Object(S.a)({},s,a))},e.handleFile=function(t){e.setState({profileImg:t.target.files[0]})},e.handleSubmit=function(t){t.preventDefault();var a=new FormData;a.append("profileImg",e.state.profileImg),a.append("email",e.state.email),a.append("userName",e.state.userName),a.append("password",e.state.password),a.append("zodiacSign",e.state.zodiacSign),a.append("city",e.state.city),p.signup(a).then((function(){e.setState({httpResponse:{status:"is-primary",message:"Profile created !"}}),setTimeout((function(){e.props.history.push("/")}),2e3)})).catch((function(t){e.setState({httpResponse:{status:"is-danger",message:"Something bad happened while updating your signup, try again later"}})}))},e}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.context.user)return Object(g.jsx)(x.a,{to:"/"});var e=this.state.httpResponse;return Object(g.jsxs)("div",{class:"modal is-active",children:[Object(g.jsx)("div",{class:"modal-background"}),Object(g.jsxs)("div",{className:"modal-card",children:[Object(g.jsx)("header",{className:"modal-card-head",children:Object(g.jsx)("h2",{className:"title",children:"Signup"})}),Object(g.jsx)("div",{className:"modal-card-body",children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,encType:"multipart/form-data",children:[e&&Object(g.jsx)(w,{message:e.message,status:e.status}),Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{htmlFor:"userName",className:"label",children:"User Name: "}),Object(g.jsxs)("div",{className:"control has-icons-left",children:[Object(g.jsx)("input",{onChange:this.handleChange,value:this.state.userName,type:"text",id:"userName",name:"userName",className:"input"}),Object(g.jsx)("span",{className:"icon is-small is-left",children:Object(g.jsx)("i",{className:"fas fa-user"})})]})]}),Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{htmlFor:"email",className:"label",children:" Email: "}),Object(g.jsx)("input",{onChange:this.handleChange,value:this.state.email,type:"email",id:"email",name:"email",className:"input"}),Object(g.jsx)("span",{className:"icon is-small is-left",children:Object(g.jsx)("i",{className:"fas fa-user"})})]}),Object(g.jsx)("div",{className:"field",children:Object(g.jsxs)("p",{className:"control has-icons-left",children:[Object(g.jsx)("label",{htmlFor:"password",className:"label",children:"Password: "}),Object(g.jsx)("input",{onChange:this.handleChange,value:this.state.password,type:"password",id:"password",name:"password",className:"input"}),Object(g.jsxs)("span",{className:"icon is-small is-left",children:[" ",Object(g.jsx)("i",{className:"fas fa-lock"})," "]})]})}),Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{htmlFor:"zodiacSign",className:"label",children:"Zodiac Sign: "}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("input",{onChange:this.handleChange,value:this.state.zodiacSign,type:"text",id:"zodiacSign",name:"zodiacSign",className:"input"})})]}),Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{htmlFor:"city",className:"label",children:"City: "}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("input",{onChange:this.handleChange,value:this.state.city,type:"text",id:"city",name:"city",className:"input"})})]}),Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{htmlFor:"profileImg",action:"/upload",className:"label",children:"Profile Image: "}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("input",{onChange:this.handleFile,type:"file",id:"profileImg",name:"profileImg",className:"input"})})]}),Object(g.jsx)("button",{className:"button is-primary is-fullwidth",children:"Submit"})]})}),"     ",Object(g.jsx)("div",{className:"modal-card-foot",children:Object(g.jsx)(l.b,{exact:!0,to:"/signin",children:"Signin"})})]})]})}}]),a}(s.Component),U=Object(x.g)(v(R)),z=function(e){return Object(g.jsx)(U,{})},A=a(41),B=["component","context"],M=v((function(e){var t=e.component,a=e.context,s=Object(A.a)(e,B);return a.isLoading?null:a.isLoggedIn?Object(g.jsx)(x.b,Object(O.a)(Object(O.a)({},s),{},{render:function(e){return Object(g.jsx)(t,Object(O.a)({},e))}})):Object(g.jsx)(x.a,{to:"/signin"})})),P=(a(71),v(function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={meme:[],profile:{}},e.handleDelete=function(t){t.preventDefault();var a=t.target.id;p.deleteMemes(a).then((function(t){e.setState({meme:t}),e.props.history.push("/profile","/")})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.getUserMemes().then((function(t){e.setState({meme:t})})).catch((function(e){return console.log(e)})),p.getUserInfos().then((function(t){e.setState({profile:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("div",{className:"card",children:Object(g.jsxs)("div",{className:"card-content",children:[Object(g.jsx)("div",{className:"media-content",children:Object(g.jsx)("div",{className:"media-left",children:Object(g.jsx)("img",{className:"profile-picture",src:this.state.profile.profileImg,alt:this.state.profile.userName})})}),Object(g.jsxs)("div",{className:"media-content",children:[Object(g.jsx)("p",{className:"title is-3",children:this.state.profile.userName}),Object(g.jsx)("p",{className:"subtitle is-6",children:this.state.profile.city}),Object(g.jsx)("p",{className:"title is-6",children:this.state.profile.email}),Object(g.jsx)("p",{className:"subtitle is-6",children:this.state.profile.zodiacSign})]})]})})}),Object(g.jsx)("div",{className:"container",children:this.state.meme.map((function(t){return Object(g.jsx)("div",{className:"card is-small",children:Object(g.jsxs)("div",{className:"card-content",children:[Object(g.jsxs)("div",{className:"imgBox",children:[Object(g.jsx)("img",{src:t.memeimage,alt:"",className:"img"}),Object(g.jsx)("span",{className:"topText",children:t.caption1}),Object(g.jsx)("span",{className:"bottomText",children:t.caption2})]}),Object(g.jsx)("button",{id:t._id,className:"button is-primary",onClick:e.handleDelete,children:"Delete"})]})})}))})]})}}]),a}(s.Component))),T=a(40),_=function(e){return Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("input",{type:"text",className:"input search-bar",name:"search",placeholder:"Search",value:e.value,onChange:function(t){return e.handleChange(t.target.value)}})})},E=(a(72),a(73),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={caption1:"",caption2:"",memeimage:"",search:"",httpResponse:null},e.handleChange=function(t){var a=t.target,s=a.value,n=a.name;e.setState(Object(S.a)({},n,s))},e.handleClickImage=function(t){t.preventDefault();var a=t.target.src;e.setState({memeimage:a,search:""})},e.handleSearchValue=function(t){e.setState({search:t})},e.handleCreate=function(t){t.preventDefault();var a=new FormData;a.append("memeimage",e.state.memeimage),a.append("caption1",e.state.caption1),a.append("caption2",e.state.caption2),p.postMemes(a).then((function(){e.setState({httpResponse:{status:"is-primary",message:"Good job, meme added !"}}),setTimeout((function(){e.props.history.push("/")}),2e3)})).catch((function(t){e.setState({httpResponse:{status:"is-danger",message:"Something bad happened while adding your meme, try again later"}})}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=T.filter((function(t){return""!==e.state.search&&t.name.toLowerCase().includes(e.state.search.toLocaleLowerCase())})),a=this.state.httpResponse;return Object(g.jsx)("div",{className:"container-form",children:Object(g.jsxs)("form",{className:"field",onSubmit:this.handleCreate,children:[Object(g.jsx)("h1",{className:"title",children:"Meme's form !"}),Object(g.jsx)(_,{handleChange:this.handleSearchValue,value:this.state.search,onChange:this.handleOnChange}),t.map((function(t){return Object(g.jsx)("div",{className:"box row",onClick:e.handleClickImage,children:Object(g.jsx)("img",{className:"image",src:t.image,alt:""})},t.name)})),Object(g.jsxs)("div",{className:"control",children:[Object(g.jsx)("label",{className:"label",htmlFor:"caption1",children:"Caption 1 : "}),Object(g.jsx)("input",{className:"input",type:"text",id:"caption1",name:"caption1",onChange:this.handleChange})]}),Object(g.jsxs)("div",{className:"control",children:[Object(g.jsx)("label",{className:"label",htmlFor:"caption2",children:"Caption 2 : "}),Object(g.jsx)("input",{className:"input",type:"text",id:"caption2",name:"caption2",onChange:this.handleChange})]}),this.state.memeimage&&Object(g.jsxs)("div",{className:"imgBox",children:[Object(g.jsx)("img",{className:"image",src:this.state.memeimage,alt:""}),Object(g.jsx)("span",{className:"topText",children:this.state.caption1}),Object(g.jsxs)("span",{className:"bottomText",children:[" ",this.state.caption2]})]}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{className:"button is-primary is-fullwidth",type:"submit",children:"Submit"})}),a&&Object(g.jsx)(w,{message:a.message,status:a.status})]})})}}]),a}(s.Component)),G=a(18),H=a(20),J=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={email:"",password:"",userName:"",zodiacSign:"",city:"",profileImg:""},e.handleChange=function(t){console.log("here",t.target.value);var a=t.target.value,s=t.target.name;e.setState(Object(S.a)({},s,a))},e.handleFile=function(t){e.setState({profileImg:t.target.files[0]})},e.handleSubmit=function(t){t.preventDefault();var a=new FormData;a.append("profileImg",e.state.profileImg),a.append("email",e.state.email),a.append("userName",e.state.userName),a.append("password",e.state.password),a.append("zodiacSign",e.state.zodiacSign),a.append("city",e.state.city);var s=e.props.match.params.id;p.PatchUserInfos(a,s).then((function(t){console.log(t),e.setState(Object(O.a)({},t.data)),e.props.history.push("/profile")})).catch((function(e){console.log(e)})),console.log("submit",t)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;p.getUserInfos(t).then((function(t){console.log(t);var a=t;e.setState(Object(O.a)({},a))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log(this.state),Object(g.jsx)("div",{className:"card",children:Object(g.jsx)("div",{className:"card-content",children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,enctype:"multipart/form-data",children:[Object(g.jsx)("h2",{children:"Edit your infos here"}),Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{htmlFor:"userName",className:"label",children:"User Name:"}),Object(g.jsxs)("div",{className:"control has-icons-left",children:[Object(g.jsx)("input",{onChange:this.handleChange,value:this.state.userName,type:"text",id:"userName",name:"userName",className:"input"}),Object(g.jsx)("span",{className:"icon is-small is-left",children:Object(g.jsx)("i",{className:"fas fa-user"})})]})]}),Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{htmlFor:"email",className:"label",children:"Email:"}),Object(g.jsxs)("div",{className:"control has-icons-left",children:[Object(g.jsx)("input",{onChange:this.handleChange,value:this.state.email,type:"text",id:"email",name:"email"}),Object(g.jsx)("span",{className:"icon is-small is-left",children:Object(g.jsx)("i",{className:"fas fa-user"})})]})]}),Object(g.jsx)("div",{className:"field",children:Object(g.jsxs)("p",{className:"control has-icons-left",children:[Object(g.jsx)("label",{htmlFor:"password",className:"label",children:"Password:"}),Object(g.jsx)("input",{onChange:this.handleChange,value:this.state.password,type:"password",id:"password",name:"password",className:"input"}),Object(g.jsx)("span",{className:"icon is-small is-left",children:Object(g.jsx)("i",{className:"fas fa-lock"})})]})}),Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{htmlFor:"zodiacSign",className:"label",children:"Zodiac Sign:"}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("input",{onChange:this.handleChange,value:this.state.zodiacSign,type:"text",id:"zodiacSign",name:"zodiacSign",className:"input"})})]}),Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{htmlFor:"city",className:"label",children:"City:"}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("input",{onChange:this.handleChange,value:this.state.city,type:"text",id:"city",name:"city",className:"input"})})]}),Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{htmlFor:"profileImg",action:"/upload",className:"label",children:"Profile Image:"}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("input",{onChange:this.handleFile,type:"file",id:"profileImg",name:"profileImg",className:"input"})})]}),Object(g.jsx)("button",{children:"Submit"})]})})})}}]),a}(s.Component),q=Object(x.g)(v(J)),V=function(e){return Object(g.jsx)(q,{})};G.b.add(H.c,H.d,H.a,H.f,H.b,H.e);var W=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(C,{}),Object(g.jsxs)(x.d,{children:[Object(g.jsx)(x.b,{exact:!0,path:"/",component:L}),Object(g.jsx)(x.b,{exact:!0,path:"/signin",component:D}),Object(g.jsx)(x.b,{exact:!0,path:"/memeform",component:E}),Object(g.jsx)(x.b,{exact:!0,path:"/signup",component:z}),Object(g.jsx)(x.b,{exact:!0,path:"/logout",component:y}),Object(g.jsx)(M,{exact:!0,path:"/profile",component:P}),Object(g.jsx)(M,{exact:!0,path:"/profile/settings",component:V})]})]})};a(74),a(75);i.a.render(Object(g.jsx)(l.a,{children:Object(g.jsx)(f,{children:Object(g.jsx)(W,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.4838779c.chunk.js.map