(this.webpackJsonpgame1=this.webpackJsonpgame1||[]).push([[0],{107:function(e,t,a){e.exports=a(156)},112:function(e,t,a){},113:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(22),r=a.n(i),s=(a(112),a(31)),c=a(32),l=a(21),u=a(38),p=a(37),d=(a(113),a(15)),m=(a(128),a(28)),v=a.n(m),h=v.a.initializeApp({apiKey:"AIzaSyCU3lAPlsxkBORPy2HQfCdayJNIIh0PrV4",authDomain:"game1-cae49.firebaseapp.com",databaseURL:"https://game1-cae49.firebaseio.com",projectId:"game1-cae49",storageBucket:"game1-cae49.appspot.com",messagingSenderId:"691468574984",appId:"1:691468574984:web:1c76454a2ec3020e820cbd",measurementId:"G-1B23MNQTH4"});v.a.analytics();var f=h,b=a(29),g=a.n(b),k=a(35),y=function(){var e=Object(k.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={id:t,warPoints:0},f.firestore().collection("users").doc(t.toString()).get().then((function(e){e.exists||f.firestore().collection("users").doc(t.toString()).set(a).then((function(e){console.log("Created user..."),window.location.reload()}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=a(19),C=a.n(w),I=a(30),E=a.n(I),S=function(e){var t=null,a=[];return location.search.substr(1).split("&").forEach((function(n){(a=n.split("="))[0]===e&&(t=decodeURIComponent(a[1]))})),t},O=a(24),P=a(36),T=a.n(P),_=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={activeView:"main",activePanel:"main",VK_UID:0,userData:{id:0,warPoints:0},popout:"",modal:"",snackbar:"",activeTab:0,activeTabOwner:{first_name:"",last_name:"",photo_200:""},points:[{name:"\u041f\u044f\u0442\u0430\u0447\u043e\u043a",value:5,lat:54.791769,lon:56.086817,owner:0,background:"https://firebasestorage.googleapis.com/v0/b/game1-cae49.appspot.com/o/inorsBG%2F%D0%BF%D1%8F%D1%82%D0%B0%D0%BA.png?alt=media&token=e27c9707-bdb0-4dcf-96ec-586d00fea6eb",description:"\u0430\u0443\u0435"}]},n.openPanel=n.openPanel.bind(Object(l.a)(n)),n.markerClick=n.markerClick.bind(Object(l.a)(n)),n.openCaptureModal=n.openCaptureModal.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({VK_UID:S("vk_user_id")}),C.a.send("VKWebAppInit",{}).then((function(){return console.log("\u0412\u041a \u041f\u041e\u0414\u041a\u041b\u042e\u0427\u0415\u041d")})),y(S("vk_user_id")).then((function(){f.firestore().collection("users").doc(S("vk_user_id").toString()).onSnapshot((function(t){e.setState({userData:t.data()})})),f.firestore().collection("data").doc("points").onSnapshot((function(t){e.setState({points:t.data().main})}))}))}},{key:"componentWillUnmount",value:function(){}},{key:"openPanel",value:function(e){this.setState({activePanel:e})}},{key:"openView",value:function(e){this.setState({activeView:e})}},{key:"markerClick",value:function(e,t,a){var n=this;E()("#layout").addClass("active"),C.a.send("VKWebAppGetUserInfo",{}).then((function(t){return n.setState({activeTab:e.num,activeTabOwner:t})}))}},{key:"removeIcons",value:function(e,t){t.setOptions({styles:[{elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]}]})}},{key:"openCaptureModal",value:function(e){}},{key:"render",value:function(){var e=this;return o.a.createElement(d.f,{activeView:this.state.activeView},o.a.createElement(d.h,{popout:this.state.popout,id:"main",activePanel:this.state.activePanel},o.a.createElement(d.d,{id:"main"},o.a.createElement(d.e,null,"\u0412\u041e\u0419\u041d\u0410 \u0417\u0410 \u0418\u041d\u041e\u0420\u0421"),o.a.createElement("span",null,this.state.userData.warPoints),o.a.createElement(O.Map,{onReady:function(t,a){return e.removeIcons(t,a)},style:{width:"100%",height:500},google:this.props.google,zoom:14,streetViewControl:!1,mapTypeControl:!1,scaleControl:!1,fullscreenControl:!1,zoomControl:!1,initialCenter:{lat:54.77927,lng:56.123964}},this.state.points.map((function(t){return o.a.createElement(O.Marker,{key:t.name+t.lat,num:t.id,title:t.name,name:t.name,background:t.background,description:t.description,onClick:e.markerClick,position:{lat:t.lat,lng:t.lon},icon:{url:T.a}})}))),o.a.createElement("div",{onClick:function(){E()("#layout").removeClass("active")},id:"layout"},o.a.createElement("div",{id:"layoutBG",style:{backgroundImage:"url("+this.state.points[this.state.activeTab].background+")",width:"100%",height:"30vh",backgroundAttachment:"scroll",backgroundClip:"border-box",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),o.a.createElement(d.c,{className:"layoutName"},this.state.points[this.state.activeTab].name),o.a.createElement(d.b,{className:"layoutDescription"},this.state.points[this.state.activeTab].description),o.a.createElement(d.g,{before:o.a.createElement(d.a,{size:48,src:this.state.activeTabOwner.photo_200}),description:"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446"},this.state.activeTabOwner.first_name+" "+this.state.activeTabOwner.last_name)),this.state.snackbar)))}}]),a}(o.a.Component),D=Object(O.GoogleApiWrapper)({apiKey:"AIzaSyC2L8vPYtDn5Csq-7Gj9sZqSzvb3Bx1QfI"})(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){e.exports=a.p+"static/media/pv.910d5316.png"}},[[107,1,2]]]);
//# sourceMappingURL=main.9a4a6517.chunk.js.map