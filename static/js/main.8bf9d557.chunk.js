(this.webpackJsonpgame1=this.webpackJsonpgame1||[]).push([[0],{111:function(e,t,a){e.exports=a(141)},116:function(e,t,a){},117:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(30),r=a.n(c),o=(a(116),a(31)),l=a(32),s=a(25),u=a(42),m=a(41),p=(a(117),a(15)),h=(a(127),a(27)),d=a.n(h),f=d.a.initializeApp({apiKey:"AIzaSyCU3lAPlsxkBORPy2HQfCdayJNIIh0PrV4",authDomain:"game1-cae49.firebaseapp.com",databaseURL:"https://game1-cae49.firebaseio.com",projectId:"game1-cae49",storageBucket:"game1-cae49.appspot.com",messagingSenderId:"691468574984",appId:"1:691468574984:web:1c76454a2ec3020e820cbd",measurementId:"G-1B23MNQTH4"});d.a.analytics();var v=f,g=a(28),b=a.n(g),y=a(34),E=function(){var e=Object(y.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t,balance:0,hero:0},v.firestore().collection("users").doc(t.toString()).get().then((function(e){e.exists||v.firestore().collection("users").doc(t.toString()).set(a).then((function(e){return console.log("Created user...")}))})),e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=a(18),w=a.n(k),_=a(35),I=a.n(_),P=a(36),S=a.n(P),V=a(37),j=a.n(V),x=a(38),O=a.n(x),D=a(39),K=a.n(D),W=a(40),A=a.n(W),B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={activeView:"main",activePanel:"main",userDataVK:{},userData:{},farm:{activePanel:"main"}},n.openPanel=n.openPanel.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.a.send("VKWebAppInit",{}).then((function(t){return w.a.send("VKWebAppGetUserInfo",{}).then((function(t){e.setState({userDataVK:t}),E(t.id).then((function(a){v.firestore().collection("users").doc(t.id.toString()).onSnapshot((function(t){e.setState({userData:t.data()}),console.log(e.state)}))}))}))}))}},{key:"componentWillUnmount",value:function(){}},{key:"openPanel",value:function(e){this.setState({activePanel:e})}},{key:"openView",value:function(e){this.setState({activeView:e})}},{key:"render",value:function(){return i.a.createElement(p.h,{activeView:this.state.activeView},i.a.createElement(p.j,{id:"main",activePanel:this.state.activePanel},i.a.createElement(p.d,{id:"main"},i.a.createElement(p.e,{left:i.a.createElement(p.f,null,i.a.createElement(I.a,null)),right:i.a.createElement(p.f,null,i.a.createElement(S.a,{style:{color:"var(--button_muted_foreground)"}}))},i.a.createElement(p.g,{status:"\u0431\u044b\u043b \u0432 \u0441\u0435\u0442\u0438 \u043d\u0435\u0434\u0430\u0432\u043d\u043e",before:i.a.createElement(p.a,{size:36,src:"https://vk.com/images/camera_100.png"})},i.a.createElement("span",{style:{fontWeight:"bold"}},"Kjtmva Rvnasf",i.a.createElement(A.a,{style:{color:"var(--attach_picker_tab_inactive_icon)",display:"inline-block",margin:"4px 0 0 3px"}})))),i.a.createElement(p.c,{vertical:"bottom"},i.a.createElement(p.i,null),i.a.createElement(p.b,null,i.a.createElement(j.a,{width:28,height:28,style:{color:"var(--attach_picker_tab_inactive_icon)",display:"inline-block"}}),i.a.createElement("input",{maxLength:32,className:"messageInput",placeholder:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435..."}),i.a.createElement(O.a,{width:28,height:28,style:{color:"var(--attach_picker_tab_inactive_icon)",display:"inline-block",margin:"0 5px"}}),i.a.createElement(K.a,{width:28,height:28,style:{color:"var(--attach_picker_tab_inactive_icon)",display:"inline-block"}}))))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.8bf9d557.chunk.js.map