(this.webpackJsonpgame1=this.webpackJsonpgame1||[]).push([[0],{111:function(e,t,a){e.exports=a(143)},116:function(e,t,a){},117:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(41),o=a.n(l),c=(a(116),a(37)),i=a(26),r=a(27),m=a(20),u=a(29),d=a(28),p=(a(117),a(6)),g=function(e){return s.a.createElement("div",null,e.typing?s.a.createElement("div",null,s.a.createElement("span",{style:{position:"relative",top:1}},"\u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442"),s.a.createElement("div",{className:"typing__loading Loading"},s.a.createElement("div",{className:"Loading__items"},s.a.createElement("div",{className:"Loading__item Loading__item_0"}),s.a.createElement("div",{className:"Loading__item Loading__item_1"}),s.a.createElement("div",{className:"Loading__item Loading__item_2"})))):s.a.createElement("span",null,"\u0431\u044b\u043b \u0432 \u0441\u0435\u0442\u0438 \u043d\u0435\u0434\u0430\u0432\u043d\u043e"))},h=function(e){var t=new Date(1e3*e.message.time);return s.a.createElement("div",{onClick:e.openMessageModal,className:"message ".concat(e.message.sent?"sent":"received")},s.a.createElement("span",null,e.message.text,s.a.createElement("div",{className:"messageDate"},t.getHours()+"."+t.getMinutes())))};var E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state=n.props.data,n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return this.props.data.messages.length?s.a.createElement("div",{className:"messageWrap"},s.a.createElement("div",{className:"messages"},this.props.data.messages.map((function(t){return s.a.createElement(h,{openMessageModal:e.props.openMessageModal,key:(a=26789,Math.floor(Math.random()*Math.floor(a))+t.text),message:t});var a})))):s.a.createElement(p.q,{stretched:!0},s.a.createElement("b",null,"\u041f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"),s.a.createElement("br",null),"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u043e\u0431\u0449\u0430\u0442\u044c\u0441\u044f!")}}]),a}(s.a.Component),v=(a(128),a(32)),f=a.n(v),b=f.a.initializeApp({apiKey:"AIzaSyCU3lAPlsxkBORPy2HQfCdayJNIIh0PrV4",authDomain:"game1-cae49.firebaseapp.com",databaseURL:"https://game1-cae49.firebaseio.com",projectId:"game1-cae49",storageBucket:"game1-cae49.appspot.com",messagingSenderId:"691468574984",appId:"1:691468574984:web:1c76454a2ec3020e820cbd",measurementId:"G-1B23MNQTH4"});f.a.analytics();var y=b,_=a(33),k=a.n(_),M=a(44),w=function(){var e=Object(M.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={id:t,messages:[],status:"Who's that?"},y.firestore().collection("users").doc(t.toString()).get().then((function(e){if(console.log(!e.exists),e.exists)return console.log("aye"),!0;console.log("dsadsa"),y.firestore().collection("users").doc(t.toString()).set(a).then((function(e){return console.log("Created user..."),!1}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=a(23),D=a.n(x),S=a(34),N=a.n(S),V=a(35),j=a.n(V),C=a(45),O=a.n(C),I=a(46),L=a.n(I),P=a(47),T=a.n(P),W=a(48),K=a.n(W),U=a(49),B=a.n(U),A=a(50),F=a.n(A),R=a(51),z=a.n(R),H=a(36),J=a.n(H),G=a(52),Q=a.n(G),q=a(53),$=a.n(q),X=a(54),Y=a.n(X),Z=a(55),ee=a.n(Z),te=(a(142),a(30)),ae=a.n(te),ne=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={activeView:"main",activePanel:"main",userDataVK:{},userData:{status:"?"},messages:[],typing:!1,messageValue:"",popout:"",modal:""},n.openPanel=n.openPanel.bind(Object(m.a)(n)),n.updateMessage=n.updateMessage.bind(Object(m.a)(n)),n.sendMessage=n.sendMessage.bind(Object(m.a)(n)),n.openMessageModal=n.openMessageModal.bind(Object(m.a)(n)),n.openUserModal=n.openUserModal.bind(Object(m.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;D.a.send("VKWebAppInit",{}).then((function(t){return D.a.send("VKWebAppGetUserInfo",{}).then((function(t){e.setState({userDataVK:t}),w(t.id).then((function(a){y.firestore().collection("users").doc(t.id.toString()).get().then((function(t){e.setState({userData:t.data(),messages:t.data().messages})})),a||setTimeout((function(){e.addMessage("\u041f\u0440\u0438\u0432\u0435\u0442, \u0434\u0430\u0432\u043d\u043e \u0442\u0435\u0431\u044f \u043d\u0435 \u0431\u044b\u043b\u043e \u0432 \u0443\u043b\u0438\u0447\u043d\u044b\u0445 \u0433\u043e\u043d\u043a\u0430\u0445! \u0417\u0430\u0445\u043e\u0434\u0438!",!1,[])}),1e3)}))}))}));setTimeout((function(){e.state.userDataVK.id||y.firestore().collection("users").doc("138597699").get().then((function(t){e.setState({userData:t.data(),messages:t.data().messages,userDataVK:{id:138597699}})}))}),5e3)}},{key:"componentWillUnmount",value:function(){}},{key:"openPanel",value:function(e){this.setState({activePanel:e})}},{key:"openView",value:function(e){this.setState({activeView:e})}},{key:"updateMessage",value:function(e){this.setState({messageValue:e.target.value})}},{key:"addMessage",value:function(e,t,a){var n=this,s=Math.round((new Date).getTime()/1e3);t?this.setState((function(n){return{messages:[].concat(Object(c.a)(n.messages),[{text:e,sent:t,attachments:a,time:s}]),messageValue:""}})):setTimeout((function(){n.setState({typing:!0}),setTimeout((function(){n.setState((function(n){return{messages:[].concat(Object(c.a)(n.messages),[{text:e,sent:t,attachments:a,time:s}]),typing:!1}}))}),2e3)}),1e3),setTimeout((function(){y.firestore().collection("users").doc(n.state.userDataVK.id.toString()).update({messages:n.state.messages})}),3500),ae()("html, body").animate({scrollTop:ae()(document).height()},"slow")}},{key:"sendMessage",value:function(){this.addMessage(this.state.messageValue,!0,[]),ae()(".messageInput").focus()}},{key:"openMessageModal",value:function(){var e=this;this.setState({popout:s.a.createElement(p.a,{onClose:function(){return e.setState({popout:null})}},s.a.createElement(p.b,{autoclose:!0},"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"),s.a.createElement(p.b,{autoclose:!0},"\u041f\u0435\u0440\u0435\u0441\u043b\u0430\u0442\u044c"),s.a.createElement(p.b,{autoclose:!0},"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),s.a.createElement(p.b,{autoclose:!0},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),s.a.createElement(p.b,{autoclose:!0},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),s.a.createElement(p.b,{autoclose:!0,mode:"cancel"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"))})}},{key:"openUserModal",value:function(){var e=this;this.setState({modal:s.a.createElement(p.l,{activeModal:"userInfo",onClose:function(){e.setState({modal:""})}},s.a.createElement(p.j,{id:"userInfo",header:s.a.createElement(p.k,null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},s.a.createElement(p.t,null),s.a.createElement("ul",{className:"userRows"},s.a.createElement("li",null,s.a.createElement(ee.a,{width:20,height:20}),s.a.createElement("span",null,this.state.userData.status))),s.a.createElement(p.t,null),s.a.createElement("ul",{style:{paddingBottom:30},className:"userRows"},s.a.createElement("li",null,s.a.createElement(J.a,{width:20,height:20}),s.a.createElement("span",null,"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: 13 \u043c\u0430\u0440\u0442\u0430 1902")))))})}},{key:"render",value:function(){var e=this;return s.a.createElement(p.s,{activeView:this.state.activeView},s.a.createElement(p.u,{modal:this.state.modal,popout:this.state.popout,id:"main",activePanel:this.state.activePanel},s.a.createElement(p.m,{id:"main"},s.a.createElement(p.n,{className:"messagesHeader",separator:!1,left:s.a.createElement(p.o,{onClick:function(){window.history.back()}},s.a.createElement(N.a,null)),right:s.a.createElement(p.o,{style:{display:"none"}},s.a.createElement(j.a,{style:{color:"var(--button_muted_foreground)"}}))},s.a.createElement(p.p,{onClick:function(){e.openPanel("profile")},status:s.a.createElement(g,{typing:this.state.typing}),before:s.a.createElement(p.c,{size:36,src:"https://vk.com/images/camera_100.png"})},s.a.createElement("span",{style:{fontWeight:"bold"}},"DELETED",s.a.createElement(K.a,{style:{color:"var(--attach_picker_tab_inactive_icon)",display:"inline-block",margin:"4px 0 0 3px"}})))),s.a.createElement(E,{openMessageModal:this.openMessageModal,data:this.state}),s.a.createElement(p.f,{style:{backgroundColor:"#FFFFFF"},vertical:"bottom"},s.a.createElement(p.t,null),s.a.createElement(p.e,null,s.a.createElement(O.a,{width:28,height:28,style:{color:"var(--attach_picker_tab_inactive_icon)",display:"inline-block"}}),s.a.createElement("input",{value:this.state.messageValue,onChange:this.updateMessage,maxLength:32,className:"messageInput",placeholder:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),s.a.createElement(L.a,{width:28,height:28,style:{color:"var(--attach_picker_tab_inactive_icon)",display:"inline-block",margin:"0 5px"}}),this.state.messageValue?s.a.createElement(B.a,{onClick:this.sendMessage,className:"iconChangeable",width:28,height:28,style:{color:"var(--accent)",display:"inline-block"}}):s.a.createElement(T.a,{className:"iconChangeable",width:28,height:28,style:{color:"var(--attach_picker_tab_inactive_icon)",display:"inline-block"}})))),s.a.createElement(p.m,{id:"profile"},s.a.createElement(p.n,{left:s.a.createElement(p.o,{onClick:function(){e.openPanel("main")}},s.a.createElement(N.a,null)),right:s.a.createElement(p.o,{style:{display:"none"}},s.a.createElement(F.a,{width:28,height:28,style:{color:"var(--button_muted_foreground)"}}))},"DELETED"),s.a.createElement(p.g,null,s.a.createElement(p.r,{disabled:!0,before:s.a.createElement(p.c,{size:72,src:"https://vk.com/images/camera_100.png"}),caption:s.a.createElement("span",null,"\u0431\u044b\u043b \u0432 \u0441\u0435\u0442\u0438 \u043d\u0435\u0434\u0430\u0432\u043d\u043e"),text:this.state.userData.status,bottom:s.a.createElement("div",null),actions:s.a.createElement("div",null),style:{paddingLeft:20}},s.a.createElement("b",null,"DELETED")),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement(p.d,{style:{margin:"0 10px 0 20px",width:"50%"}},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),s.a.createElement(p.d,{style:{margin:"0 20px 0 10px",width:"50%"}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f")),s.a.createElement(p.i,null,s.a.createElement("div",{className:"userActions"},s.a.createElement("div",null,s.a.createElement(j.a,null),"\u0417\u0432\u043e\u043d\u043e\u043a"),s.a.createElement("div",null,s.a.createElement(z.a,null),"\u041f\u0435\u0440\u0435\u0432\u043e\u0434"),s.a.createElement("div",null,s.a.createElement(J.a,null),"\u041f\u043e\u0434\u0430\u0440\u043e\u043a"),s.a.createElement("div",null,s.a.createElement(Q.a,null),"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"))),s.a.createElement(p.t,null),s.a.createElement("ul",{className:"userRows"},s.a.createElement("li",null,s.a.createElement($.a,{width:20,height:20}),s.a.createElement("span",null,"\u0413\u043e\u0440\u043e\u0434: \u042b")),s.a.createElement("li",{onClick:function(){e.openUserModal()},style:{color:"var(--accent)"}},s.a.createElement(Y.a,{width:20,height:20}),s.a.createElement("span",{style:{fontWeight:600}},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"))),s.a.createElement("div",{style:{height:5,borderTop:"1px solid var(--separator_common)",borderBottom:"1px solid var(--separator_common)",backgroundColor:"var(--search_bar_field_background)"}}),s.a.createElement(p.h,{mode:"secondary"},"1 \u0437\u0430\u043f\u0438\u0441\u044c"),s.a.createElement(p.t,null)))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.eb4e4105.chunk.js.map