(this["webpackJsonpslack-app"]=this["webpackJsonpslack-app"]||[]).push([[0],{133:function(e,a,t){e.exports={color__container:"ColorPanel_color__container__37qmW",color__square:"ColorPanel_color__square__KOsql",color__overlay:"ColorPanel_color__overlay__mSirA"}},136:function(e,a,t){e.exports={register:"Login_register__3qUGI",formContainer:"Login_formContainer__1y_UU",loginHeader:"Login_loginHeader__2iYtq",uiMessage:"Login_uiMessage__17kZN"}},137:function(e,a,t){e.exports={register:"Register_register__1DUPd",formContainer:"Register_formContainer__39alA",loginHeader:"Register_loginHeader__175oy",uiMessage:"Register_uiMessage__2kSqb"}},275:function(e,a,t){e.exports={slidePanelContainer:"SidePanel_slidePanelContainer__7_4G6"}},276:function(e,a,t){e.exports={metaPanel:"MetaPanel_metaPanel__3zj9J"}},278:function(e,a,t){},281:function(e,a,t){e.exports={messageForm:"MessageForm_messageForm__2j8uN"}},283:function(e,a,t){e.exports={messages:"Messages_messages__1SjP7",comment:"Messages_comment__2S6eZ",messages__segmentWrapper:"Messages_messages__segmentWrapper__3qi2r"}},296:function(e,a,t){e.exports=t(535)},518:function(e,a,t){},535:function(e,a,t){"use strict";t.r(a);var n=t(19),r=t(24),s=t(21),o=t(20),l=t(22),c=t(0),i=t.n(c),u=t(74),d=t.n(u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=t(560),m=t(544),p=t(556),f=t(555),g=t(536),C=t(549),v=t(559),E=t(102),y=t(56),b=t(169),S=t(127),O=t.n(S),k=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(l.a)(a,e),a}(i.a.Component),_=t(133),j=t.n(_),U=t(30),M=function(e){return{type:"SET_CURRENT_CHANNEL",payload:{currentChannel:e}}},R=function(e){return{type:"SET_PRIVATE_CHANNEL",payload:{isPrivateChannel:e}}},P=function(e,a){return{type:"SET_COLORS",payload:{primaryColor:e,secondaryColor:a}}},w=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={modal:!1,primary:"",secondary:"",user:t.props.currentUser,usersRef:O.a.database().ref("users"),userColors:[]},t.addListener=function(e){var a=[];t.state.usersRef.child("".concat(e,"/colors")).on("child_added",(function(e){a.unshift(e.val()),t.setState({userColors:a})}))},t.handleChangePrimary=function(e){return t.setState({primary:e.hex})},t.handleChangeSecondary=function(e){return t.setState({secondary:e.hex})},t.handleSaveColors=function(){t.state.primary&&t.state.secondary&&t.saveColors(t.state.primary,t.state.secondary)},t.saveColors=function(e,a){t.state.usersRef.child("".concat(t.state.user.uid,"/colors")).push().update({primary:e,secondary:a}).then((function(){console.log("Colors added"),t.closeModal()})).catch((function(e){return console.error(e)}))},t.displayUserColors=function(e){return e.length>0&&e.map((function(e,a){return i.a.createElement(i.a.Fragment,{key:a},i.a.createElement(m.a,null),i.a.createElement("div",{className:j.a.color__container,onClick:function(){return t.props.setColors(e.primary,e.secondary)}},i.a.createElement("div",{className:j.a.color__square,style:{background:e.primary}},i.a.createElement("div",{className:j.a.color__overlay,style:{background:e.secondary}}))))}))},t.openModal=function(){return t.setState({modal:!0})},t.closeModal=function(){return t.setState({modal:!1})},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.state.user&&this.addListener(this.state.user.uid)}},{key:"render",value:function(){var e=this.state,a=e.modal,t=e.primary,n=e.secondary,r=e.userColors;return i.a.createElement(p.a,{as:f.a,inverted:!0,vertical:!0,visible:!0,width:"very thin"},i.a.createElement(m.a,null),i.a.createElement(g.a,{icon:"add",size:"small",style:{backgroundColor:"#00ada5"},onClick:this.openModal}),this.displayUserColors(r),i.a.createElement(C.a,{basic:!0,open:a,onClose:this.closeModal},i.a.createElement(C.a.Header,null,i.a.createElement(C.a.Content,null,i.a.createElement(v.a,{inverted:!0},i.a.createElement(E.a,{content:"Primary Color"}),i.a.createElement(b.SliderPicker,{color:t,onChange:this.handleChangePrimary})),i.a.createElement(v.a,{inverted:!0},i.a.createElement(E.a,{content:"Secondary Color"}),i.a.createElement(b.SliderPicker,{color:n,onChange:this.handleChangeSecondary}))),i.a.createElement(C.a.Actions,null,i.a.createElement(g.a,{color:"green",inverted:!0,onClick:this.handleSaveColors},i.a.createElement(y.a,{name:"checkmark"})," Save Colors"),i.a.createElement(g.a,{color:"red",onClick:this.closeModal,inverted:!0},i.a.createElement(y.a,{name:"remove"})," Cancel")))))}}]),a}(k),A=Object(U.b)(null,{setColors:P})(w),N=t(561),L=t(551),T=t(287),I=t(172),x=t.n(I);t(515),t(516),t(517);x.a.initializeApp({apiKey:"AIzaSyAuyuNcunURGGkny2xJ0VDcXOc5k2kohcg",authDomain:"slack-app-d47b6.firebaseapp.com",databaseURL:"https://slack-app-d47b6.firebaseio.com",projectId:"slack-app-d47b6",storageBucket:"slack-app-d47b6.appspot.com",messagingSenderId:"539859022252"});var F=x.a,D=(t(518),function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={user:t.props.currentUser},t.dropdownOptions=function(){return[{key:"user",text:i.a.createElement("span",null," ","Signed in as",i.a.createElement("strong",null,t.props.currentUser.displayName)),disabled:!0},{key:"avatar",text:i.a.createElement("span",null,"Change Avatar")},{key:"signout",text:i.a.createElement("span",{onClick:t.handleSignout},"Sign Out")}]},t.handleSignout=function(){F.auth().signOut().then((function(){return console.log("signed out!")}))},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({user:this.props.currentUser})}},{key:"render",value:function(){console.log(this.props.currentUser);var e=this.state.user,a=this.props.primaryColor;return i.a.createElement(h.a,{style:{background:a}},i.a.createElement(h.a.Column,null,i.a.createElement(h.a.Column,null,i.a.createElement(h.a.Row,{style:{padding:"1.2em",margin:0}},i.a.createElement(N.a,{inverted:!0,floated:"left",as:"h2"},i.a.createElement(y.a,{name:"code"}),i.a.createElement(N.a.Content,null,"DevChat")),i.a.createElement(N.a,{style:{padding:"0.25em"},as:"h4",inverted:!0}),i.a.createElement(L.a,{trigger:i.a.createElement("span",{style:{color:"white"}},i.a.createElement("br",null),i.a.createElement(T.a,{space:"right",avatar:!0,src:e.photoURL}),this.state.user.displayName),options:this.dropdownOptions()})))))}}]),a}(i.a.Component)),q=Object(U.b)((function(e){return{currentUser:e.user.currentUser}}))(D),H=t(43),z=t(88),B=t(548),W=t(545),V=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={user:t.props.currentUser,channel:{id:0,name:""},channels:[],channelName:"",channelDetails:"",channelsRef:F.database().ref("channels"),messagesRef:F.database().ref("messages"),notifications:[{id:0,total:0,lastKnownTotal:0,count:0}],isModalOpen:!1,firstLoad:!0,activeChannel:""},t.removeListeners=function(){t.state.channelsRef.off()},t.setFirstChannel=function(){var e=t.state.channels[0];t.state.firstLoad&&t.state.channels.length>0&&(t.props.setCurrentChannel(e),t.setActiveChannel(e)),t.setState({firstLoad:!1})},t.changeChannel=function(e){t.props.setCurrentChannel(e),t.clearNotifications(),t.setActiveChannel(e),t.props.setPrivateChannel(!1),t.setState({channel:e})},t.clearNotifications=function(){var e=t.state.notifications.findIndex((function(e){return e.id===t.state.channel.id}));if(-1!==e){var a=Object(z.a)(t.state.notifications);a[e].total=t.state.notifications[e].lastKnownTotal,a[e].count=0,t.setState({notifications:a})}},t.addNotificationListener=function(e){t.state.messagesRef.child(e).on("value",(function(a){t.state.channel&&t.handleNotifications(e,t.state.channel.id,t.state.notifications,a)}))},t.handleNotifications=function(e,a,n,r){var s=0,o=n.findIndex((function(a){return a.id===e}));-1!==o?(e!==a&&(s=n[o].total,r.numChildren()-s>0&&(n[o].count=r.numChildren()-s)),n[o].lastKnownTotal=r.numChildren()):n.push({id:e,total:r.numChildren(),lastKnownTotal:r.numChildren(),count:0}),t.setState({notifications:n})},t.setActiveChannel=function(e){return t.setState({activeChannel:e.id})},t.getNotificationCount=function(e){var a=0;if(t.state.notifications.forEach((function(t){t.id===e.id&&(a=t.count)})),a>0)return a},t.displayChannels=function(e){return e.length>0&&e.map((function(e){return i.a.createElement(f.a.Item,{key:e.id+e.name,onClick:function(){return t.changeChannel(e)},name:e.name,style:{opacity:.95},active:e.id===t.state.activeChannel},t.getNotificationCount(e)&&i.a.createElement(E.a,{color:"red"},t.getNotificationCount(e)),"# ",e.name)}))},t.addChannel=function(){var e=t.state,a=e.channelsRef,n=e.channelName,r=e.channelDetails,s=e.user;console.log("Firebase Database Ref: ",a);var o=a.push().key;console.log("USERNAME: ",s);var l={id:o,name:n,details:r,createdBy:{name:s.displayName,avatar:s.photoURL}};a.child(o).update(l).then((function(){t.setState({channelName:"",channelDetails:""}),t.closeModal(),console.log("channel added")})).catch((function(e){console.log("Catched Error:",e)}))},t.handleSubmit=function(e){e.preventDefault(),t.isFormValid(t.state)&&(t.addChannel(),console.log("channel added"))},t.openModal=function(){return t.setState({isModalOpen:!0})},t.closeModal=function(){return t.setState({isModalOpen:!1})},t.handleChange=function(e){t.setState(Object(H.a)({},e.currentTarget.name,e.currentTarget.value))},t.isFormValid=function(e){var a=e.channelName,t=e.channelDetails;return a&&t},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"componentWillMount",value:function(){this.addListenters(),console.log("CHANNELS -> State channels: ",this.state.channels)}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"addListenters",value:function(){var e=this,a=[];this.state.channelsRef.on("child_added",(function(t){a.push(t.val()),e.setState({channels:a},(function(){return e.setFirstChannel()})),e.addNotificationListener(t.key)}))}},{key:"render",value:function(){var e=this.state,a=e.channels,t=e.isModalOpen;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a.Menu,{className:"menu"},i.a.createElement(f.a.Item,null,i.a.createElement("span",null,i.a.createElement(y.a,{name:"exchange"})," CHANNELS")," ","(",a.length,") ",i.a.createElement(y.a,{name:"add",onClick:this.openModal})),this.displayChannels(a)),i.a.createElement(C.a,{basic:!0,open:t,onClose:this.closeModal},i.a.createElement(C.a.Header,null,"Add a Channel"),i.a.createElement(C.a.Content,null,i.a.createElement(B.a,{onSubmit:this.handleSubmit},i.a.createElement(B.a.Field,null,i.a.createElement(W.a,{fluid:!0,label:"Name of Channel",name:"channelName",onChange:this.handleChange})),i.a.createElement(B.a.Field,null,i.a.createElement(W.a,{fluid:!0,label:"About the Channel",name:"channelDetails",onChange:this.handleChange})))),i.a.createElement(C.a.Actions,null,i.a.createElement(g.a,{color:"green",inverted:!0,onClick:this.handleSubmit},i.a.createElement(y.a,{name:"checkmark"})," Add"),i.a.createElement(g.a,{color:"red",inverted:!0,onClick:this.closeModal},i.a.createElement(y.a,{name:"remove"})," Cancel"))))}}]),a}(i.a.Component),G=Object(U.b)(null,{setCurrentChannel:M,setPrivateChannel:R})(V),K=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={activeChannel:"",user:t.props.currentUser,users:[],usersRef:F.database().ref("users"),connectedRef:F.database().ref(".info/connected"),presenceRef:F.database().ref("presence")},t.addListeners=function(e){var a=[];t.state.usersRef.on("child_added",(function(n){if(e!==n.key){var r=n.val();r.uid=n.key,r.status="offline",a.push(r),t.setState({users:a})}})),t.state.connectedRef.on("value",(function(a){if(!0===a.val()){var n=t.state.presenceRef.child(e);n.set(!0),n.onDisconnect().remove((function(e){}))}})),t.state.presenceRef.on("child_added",(function(a){e!==a.key&&t.addStatusToUser(a.key)})),t.state.presenceRef.on("child_removed",(function(a){e!==a.key&&t.addStatusToUser(a.key,!1)}))},t.addStatusToUser=function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t.state.users.reduce((function(t,n){return n.uid===e&&(n.status="".concat(a?"online":"offline")),t.concat(n)}),[]);t.setState({users:n})},t.isUserOnline=function(e){return"online"===e.status},t.changeChannel=function(e){var a={id:t.getChannelId(e.uid),name:e.name};t.props.setCurrentChannel(a),t.props.setPrivateChannel(!0),t.setActiveChannel(e.uid)},t.getChannelId=function(e){var a=t.state.user.uid;return e<a?"".concat(e,"/").concat(a):"".concat(a,"/").concat(e)},t.setActiveChannel=function(e){t.setState({activeChannel:e})},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.state.user&&this.addListeners(this.state.user.uid)}},{key:"render",value:function(){var e=this,a=this.state,t=a.users,n=a.activeChannel;return i.a.createElement(f.a.Menu,{className:"menu"},i.a.createElement(f.a.Item,null,i.a.createElement("span",null,i.a.createElement(y.a,{name:"mail"})," DIRECT MESSAGES")," ","(",t.length,")"),t.map((function(a){return i.a.createElement(f.a.Item,{key:a.uid,active:a.uid===n,onClick:function(){return e.changeChannel(a)},style:{opacity:.95,fontStyle:"italic"}},i.a.createElement(y.a,{name:"circle",color:e.isUserOnline(a)?"green":"red"}),"@ ",a.name)})))}}]),a}(k),J=Object(U.b)(null,{setCurrentChannel:M,setPrivateChannel:R})(K),X=t(55),Z=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={starredChannels:[],activeChannel:{},openModal:!1,usersRef:F.database().ref("users"),user:t.props.currentUser},t.addListeners=function(e){t.state.usersRef.child(e).child("starred").on("child_added",(function(e){var a=Object(X.a)({id:e.key},e.val());t.setState({starredChannels:[].concat(Object(z.a)(t.state.starredChannels),[a])})})),t.state.usersRef.child(e).child("starred").on("child_removed",(function(e){var a=Object(X.a)({id:e.key},e.val()),n=t.state.starredChannels.filter((function(e){return e.id!==a.id}));t.setState({starredChannels:n})}))},t.setActiveChannel=function(e){return t.setState({activeChannel:e.id})},t.changeChannel=function(e){t.props.setCurrentChannel(e),t.setActiveChannel(e),t.props.setPrivateChannel(!0)},t.displayChannels=function(e){return e.length>0&&e.map((function(e){return i.a.createElement(f.a.Item,{key:e.id+e.name,onClick:function(){return t.changeChannel(e)},name:e.name,style:{opacity:.95},active:e.id===t.state.activeChannel},"# ",e.name)}))},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.state.user&&this.addListeners(this.state.user.uid)}},{key:"render",value:function(){var e=this.state.starredChannels;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a.Menu,{className:"menu"},i.a.createElement(f.a.Item,null,i.a.createElement("span",null,i.a.createElement(y.a,{name:"star"})," STARRED")," ","(",e.length,") ",i.a.createElement(y.a,{name:"add",onClick:this.state.openModal})),this.displayChannels(e)))}}]),a}(k),Y=Object(U.b)(null,{setCurrentChannel:M,setPrivateChannel:R})(Z),$=t(275),Q=t.n($),ee=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.currentUser,t=e.primaryColor;return i.a.createElement(f.a,{id:Q.a.slidePanelContainer,size:"large",inverted:!0,fixed:"left",vertical:!0,style:{background:t,fontSize:"1.2rem"}},i.a.createElement(q,{primaryColor:t,currentUser:a}),i.a.createElement(Y,{currentUser:a}),i.a.createElement(G,{currentUser:a}),i.a.createElement(J,{currentUser:a}))}}]),a}(k),ae=t(286),te=t(552),ne=t(553),re=t(276),se=t.n(re),oe=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={activeIndex:0,privateChannel:t.props.isPrivateChannel,currentChannel:t.props.currentChannel,userPosts:t.props.userPosts},t.formatCount=function(e){return"".concat(e,e>1||0===e?" posts":" post")},t.displayTopPosters=function(e){return Object.entries(e).sort((function(e,a){return a[1]-e[1]})).map((function(e,a){var n=Object(ae.a)(e,2),r=n[0],s=n[1];return i.a.createElement(te.a.Item,{key:a},i.a.createElement(T.a,{avatar:!0,src:s.avatar}),i.a.createElement(te.a.Content,null,i.a.createElement(te.a.Header,{as:"a"},r),i.a.createElement(te.a.Description,null,t.formatCount(s.count)," posts")))})).slice(0,5)},t.setActiveIndex=function(e,a){var n=a.index,r=t.state.activeIndex===n?-1:n;t.setState({activeIndex:r})},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){console.log("private Channel boolean in componentDidMount: ",this.state.privateChannel),console.log("current Channel object in componentDidMount: ",this.state.currentChannel)}},{key:"render",value:function(){var e=this.state,a=e.activeIndex,t=e.privateChannel,n=e.currentChannel,r=this.props.userPosts;return!0===t?null:i.a.createElement(v.a,{loading:!n,id:se.a.metaPanel},i.a.createElement(N.a,{as:"h3",attached:"top"},"About",i.a.createElement("span",null," #",n&&n.name)),i.a.createElement(ne.a,{styled:!0,attached:"true"},i.a.createElement(ne.a.Title,{active:0===a,index:0,onClick:this.setActiveIndex},i.a.createElement(y.a,{name:"dropdown",color:"black"}),i.a.createElement(y.a,{name:"info",color:"black"}),"Channel Details"),i.a.createElement(ne.a.Content,{active:0===a},n&&n.details),i.a.createElement(ne.a.Title,{active:1===a,index:1,onClick:this.setActiveIndex},i.a.createElement(y.a,{name:"dropdown",color:"black"}),i.a.createElement(y.a,{name:"user circle",color:"black"}),"Top Posters"),i.a.createElement(ne.a.Content,{active:1===a},i.a.createElement(te.a,null,r&&this.displayTopPosters(r),console.log("users post: ",r))),i.a.createElement(ne.a.Title,{active:2===a,index:2,onClick:this.setActiveIndex},i.a.createElement(y.a,{name:"dropdown",color:"black"}),i.a.createElement(y.a,{name:"pencil alternate",color:"black"}),"Created By"),i.a.createElement(ne.a.Content,{active:2===a},i.a.createElement(N.a,{as:"h3"},i.a.createElement(T.a,{circular:!0,src:n&&n.createdBy.avatar}),n&&n.createdBy.name))))}}]),a}(k),le=t(550),ce=t(277),ie=t.n(ce),ue=t(546),de=t(278),he=t.n(de),me=function(e){var a=e.uploadState,t=e.percentUploaded;return"uploading"===a?i.a.createElement(ue.a,{className:he.a.progressBar,percent:t,progress:!0,indicating:!0,size:"medium",inverted:!0}):i.a.createElement(i.a.Fragment,null," ")},pe=t(281),fe=t.n(pe),ge=t(174),Ce=t.n(ge),ve=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={file:null,authorized:["image/jpeg","image/png"]},t.addFile=function(e){var a=e.currentTarget.files;null!=a&&(t.setState({file:a[0]}),console.log("FileModal -> State FILES: ",a))},t.sendFile=function(){var e=t.state.file,a=t.props,n=a.uploadFile,r=a.closeModal;null!==e&&(t.isAuthorized(e.name)&&(n(e,{contentType:Ce.a.lookup(e.name)}),r(),t.clearFile()))},t.isAuthorized=function(e){return t.state.authorized.includes(Ce.a.lookup(e))},t.clearFile=function(){return t.setState({file:null})},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.modal,t=e.closeModal;return i.a.createElement(C.a,{basic:!0,open:a,onClose:t},i.a.createElement(C.a.Header,null,"Select an Image Files"),i.a.createElement(C.a.Content,null,i.a.createElement(W.a,{onChange:this.addFile,fluid:!0,label:"File types: jpg, png",name:"file",type:"file"})),i.a.createElement(C.a.Actions,null,i.a.createElement(g.a,{color:"green",inverted:!0,onClick:this.sendFile},i.a.createElement(y.a,{name:"checkmark"})," Send"),i.a.createElement(g.a,{color:"red",inverted:!0,onClick:t},i.a.createElement(y.a,{name:"remove"})," Cancel")))}}]),a}(k),Ee=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={storageRef:F.storage().ref(),uploadTask:null,uploadState:"",percentUploaded:0,message:"",channel:t.props.currentChannel,user:t.props.currentUser,loading:!1,errors:[{message:""}],modal:!1},t.openModal=function(){return t.setState({modal:!0})},t.closeModal=function(){return t.setState({modal:!1})},t.handleChange=function(e){t.setState(Object(H.a)({},e.currentTarget.name,e.currentTarget.value))},t.createMessage=function(e){var a;return a={timestamp:F.database.ServerValue.TIMESTAMP,user:{id:t.state.user.uid,name:t.state.user.displayName,avatar:t.state.user.photoURL},image:"",content:""},null!==e&&e?a.image=e:a.content=t.state.message,a},t.sendMessage=function(){var e=t.props.getMessagesRef,a=t.state,n=a.message,r=a.channel;n?(t.setState({loading:!0}),e().child(r.id).push().set(t.createMessage()).then((function(){t.setState({loading:!1,message:"",errors:[]})})).catch((function(e){console.error(e),t.setState({loading:!1,errors:t.state.errors.concat(e)})}))):t.setState({errors:t.state.errors.concat({message:"Add a message"})})},t.getPath=function(){return t.props.isPrivateChannel?"chat/private-".concat(t.state.channel.id):"chat/public"},t.uploadFile=function(e,a){var n=t.state.channel.id,r=t.props.messagesRef(),s="".concat(t.getPath(),"/").concat(ie()(),".jpg");t.setState({uploadState:"uploading",uploadTask:t.state.storageRef.child(s).put(e,a)},(function(){t.state.uploadTask.on("state_changed",(function(e){var a=Math.round(e.bytesTransferred/e.totalBytes*100);t.setState({percentUploaded:a})}),(function(e){console.log(e),t.setState({errors:t.state.errors.concat(e),uploadState:"error",uploadTask:null})}),(function(){t.state.uploadTask.snapshot.ref.getDownloadURL().then((function(e){t.sendFileMessage(e,r,n)})).catch((function(e){console.log(e),t.setState({errors:t.state.errors.concat(e),uploadState:"error",uploadTask:null})}))}))}))},t.sendFileMessage=function(e,a,n){a.child(n).push().set(t.createMessage(e)).then((function(){t.setState({uploadState:"done"})})).catch((function(e){console.error(e),t.setState({errors:t.state.errors.concat(e)})}))},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state,a=e.errors,t=e.message,n=e.modal,r=e.loading,s=e.uploadState,o=e.percentUploaded;return i.a.createElement(v.a,{className:fe.a.messageForm},i.a.createElement(W.a,{fluid:!0,name:"message",onChange:this.handleChange,value:t,style:{marginBottom:"0.7em"},label:i.a.createElement(g.a,{icon:"add"}),labelPosition:"left",placeholder:"Write your message",className:a.some((function(e){return e.message.includes("message")}))?"error":""}),i.a.createElement(g.a.Group,{icon:!0,widths:"1"},i.a.createElement(g.a,{onClick:this.sendMessage,disabled:r,color:"orange",content:"Add Replay",labelPosition:"left",icon:"edit"}),i.a.createElement(g.a,{color:"teal",disabled:"uploading"===s,onClick:this.openModal,content:"Upload Media",labelPosition:"right",icon:"cloud upload"})),i.a.createElement(ve,{modal:n,closeModal:this.closeModal,uploadFile:this.uploadFile}),i.a.createElement(me,{uploadState:s,percentUploaded:o}))}}]),a}(k),ye=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.channelName,t=e.numUniqueUsers,n=e.handleSearchChange,r=e.searchLoading,s=e.isPrivateChannel,o=e.isChannelStarred,l=e.handleStar;return i.a.createElement(v.a,{clearing:!0},i.a.createElement(N.a,{fluid:"true",as:"h2",floated:"left",style:{marginBottom:0}},i.a.createElement("span",null,a,!s&&i.a.createElement(y.a,{onClick:l,name:o?"star":"star outline",color:o?"yellow":"black"})),i.a.createElement(N.a.Subheader,null,t)),i.a.createElement(N.a,null,i.a.createElement(W.a,{loading:r,onChange:n,size:"mini",icon:"search",name:"searchTerm",placeholder:"Search Messages"})))}}]),a}(k),be=t(282),Se=t.n(be),Oe=function(e,a){return e.user.id===a.uid?"message__self":""},ke=function(e){var a,t=e.message,n=e.user;return i.a.createElement(i.a.Fragment,null,i.a.createElement(le.a,null,i.a.createElement(le.a.Avatar,{src:t.user.avatar}),i.a.createElement(le.a.Content,{className:Oe(t,n)},i.a.createElement(le.a.Author,{as:"a"},t.user.name),i.a.createElement(le.a.Metadata,null,(a=t.timestamp,Se()(a).fromNow())),function(e){return""!==e.image&&""===e.content}(t)?i.a.createElement(T.a,{src:t.image,className:"message__image"}):i.a.createElement(le.a.Text,null,t.content))))},_e=t(283),je=t.n(_e),Ue=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={privateChannel:t.props.isPrivateChannel,privateMessagesRef:F.database().ref("privateMessages"),messagesRef:F.database().ref("messages"),messages:[],messagesLoading:!0,channel:t.props.currentChannel,user:t.props.currentUser,usersRef:F.database().ref("users"),numUniqueUsers:"",searchTerm:"",searchLoading:!1,searchResults:[],isChannelStarred:!1},t.addUserStarsListener=function(e,a){t.state.usersRef.child(a).child("starred").once("value").then((function(a){if(null!==a.val()){var n=Object.keys(a.val()).includes(e);t.setState({isChannelStarred:n})}}))},t.addListeners=function(e){return t.addMessageListener(e),e},t.addMessageListener=function(e){var a=[];t.getMessagesRef().child(e).on("child_added",(function(e){a.push(e.val()),t.setState({messages:a,messagesLoading:!1}),t.countUniqueUsers(a),t.countUserPosts(a)}))},t.getMessagesRef=function(){var e=t.state,a=e.messagesRef,n=e.privateMessagesRef;return e.privateChannel?n:a},t.handleStar=function(){t.setState((function(e){return{isChannelStarred:!e.isChannelStarred}}),(function(){return t.starChannel()}))},t.starChannel=function(){t.state.isChannelStarred?t.state.usersRef.child("".concat(t.state.user.uid,"/starred")).update(Object(H.a)({},t.state.channel.id,{name:t.state.channel.name,details:t.state.channel.details,createBy:{name:t.state.channel.createdBy.name,avatar:t.state.channel.createdBy.avatar}})):t.state.usersRef.child("".concat(t.state.user.uid,"/starred")).child(t.state.channel.id).remove((function(e){null!==e&&console.error(e)}))},t.handleSearchChange=function(e){t.setState({searchTerm:e.currentTarget.value,searchLoading:!0},(function(){return t.handleSearchMessages()}))},t.handleSearchMessages=function(){var e=Object(z.a)(t.state.messages),a=new RegExp(t.state.searchTerm,"gi"),n=e.reduce((function(e,t){return(t.content&&t.content.match(a)||t.user.name.match(a))&&e.push(t),e}),[]);t.setState({searchResults:n}),setTimeout((function(){return t.setState({searchLoading:!1})}),1e3)},t.countUniqueUsers=function(e){var a=e.reduce((function(e,a){return e.includes(a.user.name)||e.push(a.user.name),e}),[]),n=a.length>1||0===a.length,r="".concat(a.length," user").concat(n?"s":"");t.setState({numUniqueUsers:r})},t.countUserPosts=function(e){var a=e.reduce((function(e,a){return a.user.name in e?e[a.user.name].count+=1:e[a.user.name]={avatar:a.user.avatar,count:1},e}),{});console.log("userPosts -> Messages: ",a),t.props.setUserPosts(a)},t.displayMessages=function(e){return e.length>0&&e.map((function(e){return i.a.createElement(ke,{key:e.timestamp,message:e,user:t.state.user})}))},t.displayChannelName=function(e){return e?"".concat(t.state.privateChannel?"@":"#").concat(e.name):""},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.state,a=e.channel,t=e.user;a&&t&&(this.addListeners(a.id),this.addUserStarsListener(a.id,t.uid))}},{key:"render",value:function(){var e=this.state,a=e.messagesRef,t=e.messages,n=e.channel,r=e.user,s=e.numUniqueUsers,o=e.searchTerm,l=e.searchResults,c=e.searchLoading,u=e.privateChannel,d=e.isChannelStarred;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ye,{channelName:this.displayChannelName(n),numUniqueUsers:s,handleSearchChange:this.handleSearchChange,searchLoading:c,isPrivateChannel:u,handleStar:this.handleStar,isChannelStarred:d}),i.a.createElement(v.a,null,i.a.createElement(le.a.Group,{style:{maxWidth:"98%"},className:je.a.messages},o?this.displayMessages(l):this.displayMessages(t))),i.a.createElement(Ee,{messagesRef:a,currentChannel:n,currentUser:r,isPrivateChannel:u,getMessagesRef:this.getMessagesRef}))}}]),a}(k),Me=Object(U.b)(null,{setUserPosts:function(e){return{type:"SET_USER_POSTS",payload:{userPosts:e}}}})(Ue),Re=Object(U.b)((function(e){return{currentUser:e.user.currentUser,currentChannel:e.channel.currentChannel,isPrivateChannel:e.channel.isPrivateChannel,userPosts:e.user.userPosts,primaryColor:e.colors.primaryColor,secondaryColor:e.colors.secondaryColor}}))((function(e){var a=e.currentUser,t=e.currentChannel,n=e.isPrivateChannel,r=e.userPosts,s=e.primaryColor,o=e.secondaryColor;return i.a.createElement(h.a,{columns:"equal",style:{background:o,height:"100vh",margin:"0"}},i.a.createElement(A,{key:a&&a.name,currentUser:a}),i.a.createElement(ee,{key:a&&a.uid,currentUser:a,primaryColor:s}),i.a.createElement(h.a.Column,{style:{marginLeft:320}},i.a.createElement(Me,{key:t&&t.id,currentChannel:t,currentUser:a,isPrivateChannel:n})),i.a.createElement(h.a.Column,{width:4},i.a.createElement(oe,{key:t&&t.name,currentChannel:t,userPosts:r,isPrivateChannel:n})))})),Pe=t(554),we=t(87),Ae=t(136),Ne=t.n(Ae),Le=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={email:"",password:"",errors:[],loading:!1},t.displayErrors=function(e){return e.map((function(e,a){return i.a.createElement("p",{key:a},e.message)}))},t.handleChange=function(e){t.setState(Object(H.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.isFormValid(t.state)&&(t.setState({errors:[],loading:!0}),O.a.auth().signInWithEmailAndPassword(t.state.email,t.state.password).then((function(e){console.log(e)})).catch((function(e){console.error(e),t.setState({errors:t.state.errors.concat(e),loading:!1})})))},t.isFormValid=function(e){return e.email&&e.password},t.handleInputError=function(e,a){return e.some((function(e){return e.message.toLowerCase().includes(a)}))?"error":""},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.errors,r=e.loading;return i.a.createElement(h.a,{textAlign:"center",verticalAlign:"middle",className:Ne.a.register,"data-test":"register-component"},i.a.createElement(h.a.Column,{style:{maxWidth:450}},i.a.createElement(N.a,{as:"h1",icon:!0,color:"violet",textAlign:"center"},i.a.createElement("span",{className:Ne.a.loginHeader},"Login In Here")),i.a.createElement("form",{className:Ne.a.formContainer,onSubmit:this.handleSubmit},i.a.createElement("div",null,i.a.createElement("p",null,"DevChat")),i.a.createElement("input",{name:"email",placeholder:"Email Address",value:a,className:this.handleInputError(n,"email"),onChange:this.handleChange,type:"email"}),i.a.createElement("input",{name:"password",placeholder:"Password",value:t,className:this.handleInputError(n,"password"),onChange:this.handleChange,type:"password"}),i.a.createElement(g.a,{disabled:r,className:r?"loading":" ",color:"violet",fluid:!0,size:"large"},"Submit"),i.a.createElement("div",{className:"uiMessage"},"Don't have an account? "," ",i.a.createElement(we.b,{to:"/Chat-App/register"}," Register"))),n.length>0&&i.a.createElement(Pe.a,{error:!0},i.a.createElement("h3",null,"Error"),this.displayErrors(n))))}}]),a}(k),Te=t(137),Ie=t.n(Te),xe=t(285),Fe=t.n(xe),De=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={username:"",email:"",password:"",passwordConfirmation:"",errors:[],loading:!1,usersRef:F.database().ref("users")},t.displayErrors=function(e){return e.map((function(e,a){return i.a.createElement("p",{key:a},e.message)}))},t.handleChange=function(e){t.setState(Object(H.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.isFormValid()&&(t.setState({errors:[],loading:!0}),F.auth().createUserWithEmailAndPassword(t.state.email,t.state.password).then((function(e){console.log(e),e.user.updateProfile({displayName:t.state.username,photoURL:"http://gravatar.com/avatar/".concat(Fe()(e.user.email),"?d=identicon")}).then((function(){t.saveUser(e).then((function(){console.log("user saved")}))})).catch((function(e){console.error(e),t.setState({errors:t.state.errors.concat(e),loading:!1})}))})).catch((function(e){console.error(e),t.setState({errors:t.state.errors.concat(e),loading:!1})})))},t.saveUser=function(e){return t.state.usersRef.child(e.user.uid).set({name:e.user.displayName,avatar:e.user.photoURL})},t.handleInputError=function(e,a){return e.some((function(e){return e.message.toLowerCase().includes(a)}))?"error":""},t.isFormValid=function(){var e,a=t.state.errors;return t.isFormEmpty(t.state)?(e={message:"Fill In All Fields"},t.setState({errors:a.concat(e)}),!1):!!t.isPasswordValid(t.state)||(e={message:"Password is invalid"},t.setState({errors:a.concat(e)}),!1)},t.isFormEmpty=function(e){return!e.username.length||!e.email.length||!e.password.length||!e.passwordConfirmation.length},t.isPasswordValid=function(e){var a=e.password,t=e.passwordConfirmation;return!(a.length<6||t.length<6)&&a===t},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.email,n=e.password,r=e.passwordConfirmation,s=e.errors,o=e.loading;return i.a.createElement(h.a,{textAlign:"center",verticalAlign:"middle",className:Ie.a.register,"data-test":"register-component"},i.a.createElement(h.a.Column,{style:{maxWidth:450}},i.a.createElement(N.a,{as:"h1",icon:!0,color:"orange",textAlign:"center"},i.a.createElement("span",{className:Ie.a.loginHeader},"Register With Us")),i.a.createElement("form",{"data-test":"form-component",onSubmit:this.handleSubmit,className:Ie.a.formContainer},i.a.createElement("div",null,i.a.createElement("p",null,"DevChat")),i.a.createElement("input",{"data-test":"username-input",name:"username",placeholder:"Username",value:a,onChange:this.handleChange,type:"text"}),i.a.createElement("input",{name:"email",placeholder:"Email Address",value:t,className:this.handleInputError(s,"email"),onChange:this.handleChange,type:"email"}),i.a.createElement("input",{name:"password",placeholder:"Password",value:n,className:this.handleInputError(s,"password"),onChange:this.handleChange,type:"password"}),i.a.createElement("input",{name:"passwordConfirmation",placeholder:"Password Confirmation",value:r,className:this.handleInputError(s,"password"),onChange:this.handleChange,type:"password"}),i.a.createElement(g.a,{"data-test":"component-submit-btn",disabled:o,className:o?"loading":" ",color:"orange",size:"large"},"Submit"),i.a.createElement("div",{className:"uiMessage"},"Already a user?",i.a.createElement(we.b,{to:"/Chat-App/login"}," Login"))),s.length>0&&i.a.createElement(Pe.a,{error:!0},i.a.createElement("h3",null,"Error"),this.displayErrors(s))))}}]),a}(k),qe=t(558),He=t(547),ze=function(){return i.a.createElement(qe.a,{active:!0},i.a.createElement(He.a,{size:"huge",content:"Preparing Chat..."}))},Be=t(177),We=t(63),Ve={currentUser:null,isLoading:!0},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER":return{currentUser:a.payload.currentUser,isLoading:!1};case"CLEAR_USER":return Object(X.a)({},Ve,{isLoading:!1});case"SET_USER_POSTS":return Object(X.a)({},e,{userPosts:a.payload.userPosts});default:return e}},Ke={currentChannel:"",userPosts:null},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CURRENT_CHANNEL":return Object(X.a)({},e,{currentChannel:a.payload.currentChannel});case"SET_PRIVATE_CHANNEL":return Object(X.a)({},e,{isPrivateChannel:a.payload.isPrivateChannel});default:return e}},Xe={primaryColor:"",secondaryColor:"linear-gradient(45deg, rgba(140, 142, 240, 0.25) 1%, #f5f5fc 50%)"},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_COLORS":return{primaryColor:a.payload.primaryColor,secondaryColor:a.payload.secondaryColor};default:return e}},Ye=Object(We.c)({user:Ge,channel:Je,colors:Ze}),$e=t(66);t.d(a,"composeEnhancers",(function(){return Qe})),t.d(a,"middlewares",(function(){return ea}));var Qe=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||We.d,ea=[Be.a],aa=Object(We.e)(Ye,Qe(Object(We.a)(Be.a))),ta=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.auth().onAuthStateChanged((function(a){a?(e.props.setUser(a),e.props.history.push("/Chat-App")):(e.props.history.push("/Chat-App/login"),e.props.clearUser())}))}},{key:"render",value:function(){return this.props.isLoading?i.a.createElement(ze,null):i.a.createElement($e.c,null,i.a.createElement($e.a,{exact:!0,path:"/Chat-App",component:Re}),i.a.createElement($e.a,{path:"/Chat-App/login",component:Le}),i.a.createElement($e.a,{path:"/Chat-App/register",component:De}))}}]),a}(k),na=Object($e.f)(Object(U.b)((function(e){return{isLoading:e.user.isLoading}}),{setUser:function(e){return{type:"SET_USER",payload:{currentUser:e}}},clearUser:function(){return{type:"CLEAR_USER"}}})(ta));document.getElementById("root")&&d.a.render(i.a.createElement(U.a,{store:aa},i.a.createElement(we.a,null,i.a.createElement(na,null))),document.getElementById("root"));a.default=ta;"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[296,1,2]]]);
//# sourceMappingURL=main.9b0272e5.chunk.js.map