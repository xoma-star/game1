(this.webpackJsonpgame1=this.webpackJsonpgame1||[]).push([[0],{113:function(e,t,a){e.exports=a(158)},118:function(e,t,a){},119:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(24),r=a.n(i),s=(a(118),a(40)),c=a(41),l=a(17),u=a(46),p=a(45),d=(a(119),a(9)),m=(a(130),a(36)),f=a.n(m),h=f.a.initializeApp({apiKey:"AIzaSyCU3lAPlsxkBORPy2HQfCdayJNIIh0PrV4",authDomain:"game1-cae49.firebaseapp.com",databaseURL:"https://game1-cae49.firebaseio.com",projectId:"game1-cae49",storageBucket:"game1-cae49.appspot.com",messagingSenderId:"691468574984",appId:"1:691468574984:web:1c76454a2ec3020e820cbd",measurementId:"G-1B23MNQTH4"});f.a.analytics();var b=h,v=a(37),k=a.n(v),g=a(44),y=function(){var e=Object(g.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={id:t,warPoints:0,lastTaken:+new Date,points:[]},b.firestore().collection("users").doc(t.toString()).get().then((function(e){e.exists||b.firestore().collection("users").doc(t.toString()).set(a).then((function(e){console.log("\u0421\u041e\u0417\u0414\u0410\u041d \u041f\u041e\u041b\u042c\u0417\u041e\u0412\u0410\u0422\u0415\u041b\u042c"),window.location.reload()}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=a(16),C=a.n(w),E=a(30),_=a.n(E),S=function(e){var t=null,a=[];return location.search.substr(1).split("&").forEach((function(n){(a=n.split("="))[0]===e&&(t=decodeURIComponent(a[1]))})),t},T=a(23),I=a(22),P=a.n(I),O=a(34),x=a.n(O),A=a(35),D=a.n(A),z=a(38),j=a.n(z),V=a(39),B=a.n(V),M=function(){C.a.send("VKWebAppGetAuthToken",{app_id:7446907,scope:""}).then((function(e){return C.a.send("VKWebAppCallAPIMethod",{method:"utils.getServerTime",request_id:"5524",params:{v:"5.110",access_token:e.access_token}}).then((function(e){return e.response}))}))},R=function(e,t){return(parseInt(M()/60)-parseInt(t/60))*e},U=function(e){return o.a.createElement("div",{id:"layout"},o.a.createElement("div",{id:"layoutBG",style:{backgroundImage:"url("+e.data.background+")",width:"100%",height:"30vh",backgroundAttachment:"scroll",backgroundClip:"border-box",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),o.a.createElement(d.c,{className:"layoutName"},e.data.name),o.a.createElement(d.g,{before:o.a.createElement(D.a,null)},e.data.description),o.a.createElement(d.g,{before:o.a.createElement(d.b,{size:48,src:e.owner.photo_200}),description:"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446"},e.owner.first_name+" "+e.owner.last_name),o.a.createElement(d.g,{style:e.owner.id===parseInt(S("vk_user_id"))?{display:"none"}:{},onClick:e.buy,multiline:!0,before:o.a.createElement("img",{src:P.a,alt:"\u043f\u0435\u0432\u043a\u043e",width:24,height:24}),expandable:!0},"\u041f\u0435\u0440\u0435\u043c\u0430\u043d\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044f\u0433 \u0437\u0430 ",R(e.data.value,e.data.taken)," \u043f\u0435\u0432\u043a\u0430"),o.a.createElement(d.g,{style:e.owner.id!==parseInt(S("vk_user_id"))?{display:"none"}:{},onClick:e.collect,multiline:!0,before:o.a.createElement("img",{src:P.a,alt:"\u043f\u0435\u0432\u043a\u043e",width:24,height:24}),expandable:!0},"\u0421\u043e\u0431\u0440\u0430\u0442\u044c ",R(e.data.value,e.data.taken)," \u043f\u0435\u0432\u043a\u0430"),o.a.createElement("div",{onClick:function(){_()("#layout").removeClass("active")},style:{position:"absolute",bottom:15,left:"calc(50% - 36px)",boxShadow:"2px 2px 10px -1px rgba(0,0,0,0.55)",padding:10,borderRadius:25}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))},K=function(e){return o.a.createElement(T.Map,{onReady:function(t,a){return e.removeIcons(t,a)},style:{width:"100%",height:"calc(100vh - 57px)"},google:e.google,zoom:14,streetViewControl:!1,mapTypeControl:!1,scaleControl:!1,fullscreenControl:!1,zoomControl:!1,initialCenter:{lat:54.77927,lng:56.123964}},o.a.createElement(T.Marker,{num:1488,title:"\u0421\u043a\u043b\u0430\u0434 \u043f\u0435\u0432\u043a\u0430",name:"\u0421\u043a\u043b\u0430\u0434 \u043f\u0435\u0432\u043a\u0430",background:"",description:"",taken:"0",onClick:e.markerClick,position:{lat:54.777251,lng:56.127483},icon:{url:x.a,anchor:new google.maps.Point(32,32),scaledSize:new google.maps.Size(32,32)}}),e.points.map((function(t){return o.a.createElement(T.Marker,{key:t.name+t.lat,num:t.id,title:t.name,name:t.name,background:t.background,description:t.description,taken:t.taken,onClick:e.markerClick,position:{lat:t.lat,lng:t.lon},icon:{url:P.a}})})))},W=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={activeView:"main",activePanel:"main",VK_UID:0,userData:{id:0,warPoints:0},popout:"",modal:"",snackbar:"",activeTab:0,activeTabOwner:{first_name:"\u041c\u0443\u0436\u0438\u043a",last_name:"\u0422\u0430\u0434\u0436\u0438\u043a",photo_200:"https://sun9-60.userapi.com/c849532/v849532674/13d845/_Rsu5onfz-c.jpg",points:[]},points:[{name:"\u041f\u044f\u0442\u0430\u0447\u043e\u043a",value:5,lat:54.791769,lon:56.086817,owner:0,background:"https://firebasestorage.googleapis.com/v0/b/game1-cae49.appspot.com/o/inorsBG%2F%D0%BF%D1%8F%D1%82%D0%B0%D0%BA.png?alt=media&token=e27c9707-bdb0-4dcf-96ec-586d00fea6eb",description:"\u0430\u0443\u0435",taken:0}]},n.openPanel=n.openPanel.bind(Object(l.a)(n)),n.markerClick=n.markerClick.bind(Object(l.a)(n)),n.openCaptureModal=n.openCaptureModal.bind(Object(l.a)(n)),n.kupitRabotyag=n.kupitRabotyag.bind(Object(l.a)(n)),n.collectPevko=n.collectPevko.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({VK_UID:S("vk_user_id")}),C.a.send("VKWebAppInit",{}).then((function(){return console.log("\u0412\u041a \u041f\u041e\u0414\u041a\u041b\u042e\u0427\u0415\u041d")})),y(S("vk_user_id")).then((function(){b.firestore().collection("users").doc(S("vk_user_id").toString()).onSnapshot((function(t){e.setState({userData:t.data()})})),b.firestore().collection("data").doc("points").onSnapshot((function(t){t.data()&&(e.setState({points:t.data().main}),setTimeout(e.pointOwnerUpdate,1e3))}))}))}},{key:"componentWillUnmount",value:function(){}},{key:"kupitRabotyag",value:function(){var e=this,t=o.a.createElement(d.h,{layout:"vertical",onClose:function(){return e.setState({snackbar:null})},before:o.a.createElement(d.b,{size:24,style:{backgroundColor:"var(--accent)"}},o.a.createElement(j.a,{fill:"#fff",width:14,height:14}))},"\u0420\u0430\u0431\u043e\u0442\u044f\u0433\u0438 \u0442\u0435\u043f\u0435\u0440\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u043f\u0435\u0432\u043a\u043e \u0432\u0430\u043c"),a=o.a.createElement(d.h,{layout:"vertical",onClose:function(){return e.setState({snackbar:null})},before:o.a.createElement(d.b,{size:24,style:{backgroundColor:"var(--field_error_border)"}},o.a.createElement(B.a,{fill:"#fff",width:14,height:14}))},"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043f\u0435\u0432\u043a\u0430 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043c\u0430\u043d\u0438\u0432\u0430\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u044f\u0433");this.setState({popout:o.a.createElement(d.a,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u041f\u0435\u0440\u0435\u043a\u0443\u043f\u0438\u0442\u044c",autoclose:!0,action:function(){var n=e.state.userData.warPoints-R(e.state.points[e.state.activeTab].value,e.state.points[e.state.activeTab].taken),o=b.firestore().collection("users"),i=o.doc(e.state.points[e.state.activeTab].owner.toString());if(n>=0){e.setState({snackbar:t});var r,s=e.state.userData.points;i.get().then((function(t){r=t.data().points,s.push(e.state.activeTab),r.splice(r.indexOf(e.state.activeTab),1),i.update({points:r}).then((function(){return o.doc(S("vk_user_id").toString()).update({points:s,warPoints:n}).then((function(){var t=e.state.points;t[e.state.activeTab].owner=parseInt(S("vk_user_id")),t[e.state.activeTab].taken=M(),b.firestore().collection("data").doc("points").update({main:t}).then((function(){e.pointOwnerUpdate()}))}))}))}))}else e.setState({snackbar:a})}}],onClose:function(){e.setState({popout:null})}},o.a.createElement("h2",null,"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"),o.a.createElement("p",null,"\u041f\u0435\u0440\u0435\u043a\u0443\u043f\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044f\u0433 \u0437\u0430 ",R(this.state.points[this.state.activeTab].value,this.state.points[this.state.activeTab].taken)," \u043f\u0438\u0432\u0430."))})}},{key:"openPanel",value:function(e){this.setState({activePanel:e})}},{key:"openView",value:function(e){this.setState({activeView:e})}},{key:"pointOwnerUpdate",value:function(){var e=this;C.a.send("VKWebAppGetAuthToken",{app_id:7446907,scope:""}).then((function(t){return C.a.send("VKWebAppCallAPIMethod",{method:"users.get",request_id:"32test",params:{fields:"photo_200",user_ids:e.state.points[e.state.activeTab].owner.toString(),v:"5.110",access_token:t.access_token}}).then((function(t){console.log(t),e.setState({activeTabOwner:t.response[0]})}))}))}},{key:"markerClick",value:function(e,t,a){if("\u0421\u043a\u043b\u0430\u0434 \u043f\u0435\u0432\u043a\u0430"===e.name)return alert("\u0421\u043e\u0431\u0440\u0430\u043d\u043e \u043f\u0435\u0432\u043a\u0430"),0;_()("#layout").addClass("active"),this.setState({activeTab:e.num}),this.pointOwnerUpdate()}},{key:"removeIcons",value:function(e,t){t.setOptions({styles:[{elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]}]})}},{key:"collectPevko",value:function(){var e=this,t=R(this.state.points[this.state.activeTab].value,this.state.points[this.state.activeTab].taken),a=o.a.createElement(d.h,{layout:"vertical",onClose:function(){return e.setState({snackbar:null})},before:o.a.createElement(d.b,{size:24,style:{backgroundColor:"var(--accent)"}},o.a.createElement(j.a,{fill:"#fff",width:14,height:14}))},"\u041f\u0435\u0432\u043a\u043e (",t,") \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u043d\u0430 \u0441\u043a\u043b\u0430\u0434"),n=o.a.createElement(d.h,{layout:"vertical",onClose:function(){return e.setState({snackbar:null})},before:o.a.createElement(d.b,{size:24,style:{backgroundColor:"var(--field_error_border)"}},o.a.createElement(B.a,{fill:"#fff",width:14,height:14}))},"\u0420\u0430\u0431\u043e\u0442\u044f\u0433\u0438 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043d\u0430\u043f\u0440\u044f\u0433\u0430\u0442\u044c\u0441\u044f \u0437\u0430 \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0432\u043a\u0430");t>=15?b.firestore().collection("users").doc(S("vk_user_id").toString()).update({warPoints:this.state.userData.warPoints+t}).then((function(){var t=e.state.points;t[e.state.activeTab].taken=M(),b.firestore().collection("data").doc("points").update({main:t}).then((function(){return e.setState({snackbar:a})}))})):this.setState({snackbar:n})}},{key:"openCaptureModal",value:function(e){}},{key:"render",value:function(){return o.a.createElement(d.f,{activeView:this.state.activeView},o.a.createElement(d.i,{popout:this.state.popout,id:"main",activePanel:this.state.activePanel},o.a.createElement(d.d,{id:"main"},o.a.createElement(d.e,null,"\u0411\u0418\u0422\u0412\u0410 \u0417\u0410 \u0418\u041d\u041e\u0420\u0421"),o.a.createElement(K,{removeIcons:this.removeIcons,google:this.props.google,points:this.state.points,markerClick:this.markerClick}),o.a.createElement(U,{owner:this.state.activeTabOwner,buy:this.kupitRabotyag,collect:this.collectPevko,data:this.state.points[this.state.activeTab]}),this.state.snackbar)))}}]),a}(o.a.Component),G=Object(T.GoogleApiWrapper)({apiKey:"AIzaSyC2L8vPYtDn5Csq-7Gj9sZqSzvb3Bx1QfI"})(W);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e,t,a){e.exports=a.p+"static/media/pv.910d5316.png"},34:function(e,t,a){e.exports=a.p+"static/media/wh.59a4c6da.png"}},[[113,1,2]]]);
//# sourceMappingURL=main.41eb2510.chunk.js.map