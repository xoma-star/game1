(this.webpackJsonpgame1=this.webpackJsonpgame1||[]).push([[0],{123:function(e,t,a){e.exports=a(170)},128:function(e,t,a){},129:function(e,t,a){},153:function(e,t,a){e.exports=a.p+"static/media/wh.59a4c6da.png"},154:function(e,t,a){e.exports=a.p+"static/media/UMPO.53770ec2.png"},170:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),o=a.n(s),c=(a(128),a(62)),i=a(27),l=a(28),u=a(19),p=a(30),m=a(29),d=(a(129),a(3)),h=(a(140),a(42)),f=a.n(h),v=f.a.initializeApp({apiKey:"AIzaSyCU3lAPlsxkBORPy2HQfCdayJNIIh0PrV4",authDomain:"game1-cae49.firebaseapp.com",databaseURL:"https://game1-cae49.firebaseio.com",projectId:"game1-cae49",storageBucket:"game1-cae49.appspot.com",messagingSenderId:"691468574984",appId:"1:691468574984:web:1c76454a2ec3020e820cbd",measurementId:"G-1B23MNQTH4"});f.a.analytics();var b=v,g=a(43),k=a.n(g),E=a(50),y=function(){var e=Object(E.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={id:t,warPoints:0,lastTaken:+new Date,points:[]},b.firestore().collection("users").doc(t.toString()).get().then((function(e){e.exists||b.firestore().collection("users").doc(t.toString()).set(a).then((function(e){console.log("\u0421\u041e\u0417\u0414\u0410\u041d \u041f\u041e\u041b\u042c\u0417\u041e\u0412\u0410\u0422\u0415\u041b\u042c"),window.location.reload()}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=a(22),C=a.n(w),S=function(e){var t=null,a=[];return location.search.substr(1).split("&").forEach((function(n){(a=n.split("="))[0]===e&&(t=decodeURIComponent(a[1]))})),t},O=a(32),_=a(38),I=a.n(_),j=(a(153),a(45),a(154),function(e){if(!e.areas.length||!e.users.U1)return"...";for(var t=e.polygons,a=[],n=0;n<t.length;n++){a[n]=[];for(var s=0;s<t[n].length;s++)a[n][s]={lat:0,lng:0},a[n][s].lat=t[n][s][0],a[n][s].lng=t[n][s][1]}return r.a.createElement(O.Map,{onReady:function(t,a){return e.removeIcons(t,a)},google:e.google,zoom:e.zoom,className:"map",streetViewControl:!1,mapTypeControl:!1,scaleControl:!1,fullscreenControl:!1,zoomControl:!1,onBoundsChanged:e.onDragged,initialCenter:e.center},a.map((function(t,a){return r.a.createElement(O.Polygon,{onClick:function(){e.polyClick(a)},paths:t,key:"poly"+t[0].lat+" "+t[1].lng+e.users["U"+e.areas[a].owner].color,strokeColor:"#000000",strokeOpacity:.8,strokeWeight:.5,fillColor:e.users["U"+e.areas[a].owner].color,fillOpacity:.35})})))}),D=["\u041f\u0438\u0432\u043a\u043e","\u0421\u0435\u043c\u043a\u0438","\u0421\u0438\u0436\u043a\u0438","\u0412\u043e\u0434\u043e\u0447\u043a\u0430","\u041d\u0430\u0441\u0438\u043a","\u041a\u0440\u0430\u0434\u0435\u043d\u043d\u044b\u0435 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u044b","\u041a\u0440\u0430\u0434\u0435\u043d\u043d\u044b\u0435 \u043c\u043e\u0431\u0438\u043b\u043a\u0438","\u041a\u0430\u043b\u0438\u043a\u0438","\u0427\u0430\u043a-\u0427\u0430\u043a","\u0411\u0430\u043a-\u0431\u0435\u043b\u044f\u0448"],P=a(51),A=a.n(P),x=a(52),M=a.n(x),U=a(35),z=a.n(U),V=a(53),W=a.n(V),B=a(54),K=a.n(B),T=a(33),H=a.n(T),G=a(55),R=a.n(G),q=function(e){var t=e.areas[e.curArea],a=e.users["U"+e.areas[e.curArea].owner];return r.a.createElement(d.b,{header:r.a.createElement(d.c,{mode:"secondary"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},r.a.createElement(d.m,{before:r.a.createElement(d.a,{size:48,src:a.photo_200}),after:r.a.createElement(A.a,null),description:"\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0430\u0439\u043e\u043d\u043e\u043c"},"".concat(a.first_name," ").concat(a.last_name)),r.a.createElement(d.m,{before:r.a.createElement(M.a,null),description:"\u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0447\u0430\u0441\u0442\u044c\u044f"},r.a.createElement(d.k,{key:t.name+"distrhappi"+t.happiness,value:t.happiness})),r.a.createElement(d.m,{before:r.a.createElement(R.a,null),description:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0432\u043b\u0430\u0441\u0442\u0438"},r.a.createElement(d.k,{key:t.name+"d_approval"+t.approval,value:t.approval})),r.a.createElement(d.m,{before:r.a.createElement(z.a,{width:28,height:28}),description:"\u0412\u0412\u041f",style:{display:"none"}},t.happiness*t.population/100),r.a.createElement(d.m,{before:r.a.createElement(W.a,null),description:"\u0442\u0438\u043f \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0438"},D[t.economy]),r.a.createElement(d.m,{style:{display:"none"},before:r.a.createElement(H.a,null),description:"\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u044b"},"53"),r.a.createElement(d.m,{before:r.a.createElement(K.a,null),description:"\u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435"},t.population," \u0442\u044b\u0441."))},J=a(56),N=a.n(J),Q=[{elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]}],L=[[[54.779493,56.124385],[54.779497,56.131224],[54.776341,56.131215],[54.776348,56.124403]],[[54.781021,56.124396],[54.781036,56.131236],[54.779497,56.131224],[54.779493,56.124385]],[[54.785005,56.124335],[54.785039,56.124738],[54.785051,56.125118],[54.785528,56.125112],[54.785721,56.125202],[54.785853,56.125454],[54.786095,56.126215],[54.786116,56.131269],[54.781036,56.131236],[54.781021,56.124396],[54.783463,56.12439]],[[54.788083,56.121598],[54.788085,56.131268],[54.786116,56.131269],[54.786095,56.126215],[54.785853,56.125454],[54.785721,56.125202],[54.785528,56.125112],[54.785051,56.125118],[54.785039,56.124738],[54.785005,56.124335],[54.785419,56.124109],[54.785716,56.123839],[54.786556,56.122793],[54.787478,56.121806]],[[54.788085,56.131268],[54.78809,56.138701],[54.787969,56.138726],[54.787872,56.138638],[54.787739,56.138423],[54.787534,56.138267],[54.787422,56.138271],[54.78731,56.138139],[54.787207,56.138088],[54.786705,56.138104],[54.786612,56.138182],[54.786502,56.138185],[54.786435,56.138273],[54.78132,56.138272],[54.781204,56.138015],[54.781135,56.137899],[54.781022,56.137387],[54.781036,56.131236]],[[54.776348,56.124403],[54.776341,56.131215],[54.775451,56.131214],[54.775371,56.131147],[54.775293,56.130954],[54.774989,56.130881],[54.774843,56.130696],[54.774628,56.130616],[54.773699,56.130516],[54.773455,56.131214],[54.773055,56.131289],[54.772976,56.13086],[54.772956,56.129272],[54.773206,56.127888],[54.773471,56.127201],[54.77381,56.126584],[54.774408,56.125915],[54.774385,56.12584],[54.774392,56.124427]],[[54.78011,56.116825],[54.780185,56.117445],[54.780169,56.124392],[54.774392,56.124427],[54.774246,56.12135],[54.773549,56.117302],[54.773503,56.116494],[54.773547,56.115505],[54.773647,56.114637],[54.773814,56.113825],[54.774018,56.113179],[54.774138,56.112975],[54.774406,56.112635],[54.7758,56.11359]],[[54.783401,56.121429],[54.783411,56.122845],[54.783463,56.12439],[54.780169,56.124392],[54.780179,56.121533],[54.780351,56.121501],[54.781185,56.12141],[54.78157,56.121394]],[[54.783423,56.11553],[54.783421,56.116032],[54.783406,56.116767],[54.783399,56.117089],[54.783412,56.118041],[54.78341,56.119827],[54.783401,56.121429],[54.78157,56.121394],[54.781185,56.12141],[54.780351,56.121501],[54.780179,56.121533],[54.780185,56.117445],[54.78011,56.116825],[54.780063,56.116583],[54.78005,56.115524]],[[54.780024,56.112637],[54.780035,56.113903],[54.78005,56.115524],[54.780063,56.116583],[54.78011,56.116825],[54.7758,56.11359],[54.774406,56.112635],[54.77439,56.111932],[54.774399,56.11172],[54.77444,56.111479],[54.774584,56.11101],[54.775041,56.109647],[54.774897,56.109436],[54.774889,56.109296],[54.774936,56.109133],[54.775397,56.108206],[54.775899,56.107353],[54.776538,56.106487],[54.777265,56.106672],[54.777663,56.106938],[54.777868,56.106967],[54.778242,56.106967],[54.778576,56.107238],[54.778652,56.107482],[54.778627,56.107721],[54.778875,56.108131],[54.778954,56.108587],[54.779057,56.109094],[54.779165,56.109505],[54.779291,56.110143],[54.77941,56.110763],[54.779543,56.111265],[54.779607,56.111497],[54.77977,56.11162],[54.779881,56.111878],[54.779988,56.11217]],[[54.785809,56.115501],[54.785955,56.118246],[54.786925,56.119222],[54.787296,56.119897],[54.787597,56.120338],[54.78766,56.120319],[54.78773,56.119954],[54.788112,56.120155],[54.788083,56.121598],[54.787478,56.121806],[54.786556,56.122793],[54.785716,56.123839],[54.785419,56.124109],[54.785005,56.124335],[54.783463,56.12439],[54.783411,56.122845],[54.783401,56.121429],[54.78341,56.119827],[54.783412,56.118041],[54.783399,56.117089],[54.783421,56.116032],[54.783423,56.11553],[54.784622,56.115512]]],Y=function(e){return r.a.createElement(d.b,{header:r.a.createElement(d.c,{mode:"secondary"},"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0438")},r.a.createElement(d.m,{before:r.a.createElement(z.a,{width:28,height:28}),description:"\u043d\u0430\u043b\u043e\u0433\u0438"},"20%"))},Z=a(57),$=a.n(Z),F=a(44),X=a.n(F),ee=a(58),te=a.n(ee),ae=function(e){var t=e.areas[e.curArea],a=r.a.createElement(d.b,{header:r.a.createElement(d.c,{mode:"secondary"},"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435")},r.a.createElement(d.m,{expandable:!0,before:r.a.createElement(H.a,null)},"\u0422\u043e\u0440\u0433\u043e\u0432\u043b\u044f"),r.a.createElement(d.m,{expandable:!0,before:r.a.createElement(X.a,null)},"\u041f\u0440\u043e\u043f\u0430\u0433\u0430\u043d\u0434\u0430"),r.a.createElement(d.m,{expandable:!0,before:r.a.createElement(te.a,null),onClick:function(){e.openPanel("diversion")}},"\u0414\u0438\u0432\u0435\u0440\u0441\u0438\u044f")),n=r.a.createElement(d.b,{header:r.a.createElement(d.c,{mode:"secondary"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435")},r.a.createElement(d.m,{expandable:!0,before:r.a.createElement($.a,null)},"\u0417\u0430\u043a\u043e\u043d\u044b"),r.a.createElement(d.m,{expandable:!0,before:r.a.createElement(X.a,null),onClick:function(){e.openPanel("speech")}},"\u0412\u044b\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u0441 \u0440\u0435\u0447\u044c\u044e"),r.a.createElement(d.m,{expandable:!0,before:r.a.createElement(H.a,null)},"\u0422\u043e\u0440\u0433\u043e\u0432\u043b\u044f"));return t.owner===parseInt(S("vk_user_id"))?n:a},ne=a(59),re=a.n(ne),se=a(60),oe=a.n(se),ce=function(e){var t=e.user;return r.a.createElement(d.d,null,r.a.createElement(d.m,{before:r.a.createElement(d.a,{size:48,src:t.photo_200}),description:"\u043b\u0443\u0447\u0448\u0438\u0439 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439?"},"".concat(t.first_name," ").concat(t.last_name)),r.a.createElement(d.m,{before:r.a.createElement(re.a,null),description:"\u0441\u0447\u0435\u0442 \u0432 \u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u0438"},t.offshores),r.a.createElement(d.m,{onClick:function(){e.polyClick(t.area)},before:r.a.createElement(oe.a,null)},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 "+e.areas[t.area].name))},ie=a(36),le=a.n(ie),ue=a(37),pe=a.n(ue),me=a(21),de=a.n(me),he=function(e){return r.a.createElement(d.n,{key:+new Date,layout:"vertical",onClose:function(){return e.closeSnackbar},before:r.a.createElement(d.a,{size:24,style:e.good?{backgroundColor:"var(--accent)"}:{backgroundColor:"var(--dynamic_red)"}},e.good?r.a.createElement(pe.a,{fill:"#fff",width:14,height:14}):r.a.createElement(de.a,{fill:"#fff",width:14,height:14}))},e.message)},fe=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).diversionOffset=600,n.state={snackbar:""},n.diversion=n.diversion.bind(Object(u.a)(n)),n.closeSnackbar=n.closeSnackbar.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"getInt",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"closeSnackbar",value:function(){this.setState({snackbar:null})}},{key:"diversion",value:function(e){var t=parseInt(+new Date/1e3),a=[2e4];if(t-this.props.user.lastDiversion<this.diversionOffset)return this.setState({snackbar:r.a.createElement(he,{closeSnackbar:this.closeSnackbar,good:!1,message:"\u0414\u0438\u0432\u0435\u0440\u0441\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0440\u0430\u0437 \u0432 10 \u043c\u0438\u043d\u0443\u0442"})}),0;if(this.props.user.offshores-a[e]<0)return this.setState({snackbar:r.a.createElement(he,{closeSnackbar:this.closeSnackbar,good:!1,message:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043d\u0430 \u0441\u0447\u0435\u0442\u0443"})}),0;var n=this.props.areas,s=n[this.props.curArea];switch(e){case 0:if(this.getInt(0,2)>0){var o=this.getInt(1,5);s.happiness-=o,s.events.push({type:"diversion",num:0,date:t,effect:{type:"happiness",value:-o},actor:S("vk_user_id")}),this.setState({snackbar:r.a.createElement(he,{closeSnackbar:this.closeSnackbar,good:!0,message:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0447\u0430\u0441\u0442\u044c\u044f \u0441\u043d\u0438\u0436\u0435\u043d \u043d\u0430 ".concat(o)})})}else this.setState({snackbar:r.a.createElement(he,{closeSnackbar:this.closeSnackbar,good:!1,message:"\u0414\u0438\u0432\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u043b\u0430\u0441\u044c"})})}s.happiness<0&&(s.happiness=0),n[this.props.curArea]=s;var c=this.props.users,i=this.props.user;i.lastDiversion=parseInt(+new Date/1e3),i.offshores-=a[e],c["U"+S("vk_user_id")]=i,b.firestore().collection("data").doc("areas").update({main:n}).then((function(){console.log("\u0421\u041e\u0412\u0415\u0420\u0428\u0415\u041d\u0410 \u0414\u0418\u0412\u0415\u0420\u0421\u0418\u042f")})),b.firestore().collection("data").doc("users").update({main:c}).then((function(){console.log("\u041e\u0411\u041d\u041e\u0412\u041b\u0415\u041d\u042b \u0414\u0410\u041d\u041d\u042b\u0415 \u041f\u041e\u041b\u042c\u0417\u041e\u0412\u0410\u0422\u0415\u041b\u042f")}))}},{key:"render",value:function(){var e=this,t=parseInt(+new Date/1e3),a=this.props.user.lastDiversion,n=new Date(1e3*a+1e3*this.diversionOffset),s=n.getMinutes(),o=n.getHours();return s<10&&(s="0".concat(s)),o<10&&(o="0".concat(o)),r.a.createElement("div",null,r.a.createElement(d.f,{left:r.a.createElement(d.g,{onClick:function(){e.props.openPanel("area")}})},"\u0414\u0438\u0432\u0435\u0440\u0441\u0438\u0438"),r.a.createElement(d.b,{description:"\u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u0441\u043d\u0438\u0436\u0430\u0442\u044c \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u0435 \u0432\u043b\u0430\u0441\u0442\u0438 \u0438 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0447\u0430\u0441\u0442\u044c\u044f, \u043d\u043e \u0438 \u0441\u0430\u043c\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442 \u043d\u0438\u0445 \u0432\u044b\u0433\u043e\u0434\u0443, \u0441\u043f\u0438\u0441\u0430\u0432 \u0441\u0432\u043e\u0438 \u043d\u0435\u0443\u0434\u0430\u0447\u0438 \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0435 \u0432\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e.\r \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u044e\u0442\u0441\u044f \u0437\u0430 \u0448\u0432. \u0444\u0440\u0430\u043d\u043a\u0438. \u043d\u0438\u043a\u0442\u043e \u0436\u0435 \u043d\u0435 \u0445\u043e\u0447\u0435\u0442 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043b\u0435\u0434\u044b."},r.a.createElement(d.m,{style:t-a>this.diversionOffset?{display:"none"}:{},before:r.a.createElement(de.a,{width:28,height:28})},"\u041d\u043e\u0432\u0430\u044f \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 ".concat(o,":").concat(s)),r.a.createElement(d.m,{onClick:function(){e.diversion(0)},before:r.a.createElement(le.a,{width:28,height:28}),expandable:!0,description:"20.000 \u0448\u0432. \u0444\u0440\u0430\u043d\u043a\u043e\u0432"},"\u041f\u0435\u0440\u0435\u043a\u0443\u0441\u0438\u0442\u044c \u043a\u0430\u0431\u0435\u043b\u0438")),this.state.snackbar)}}]),a}(r.a.Component),ve=a(61),be=a.n(ve),ge=function(e){var t=e.areas[e.curArea],a={diversion:{name:"\u0414\u0438\u0432\u0435\u0440\u0441\u0438\u044f",icon:r.a.createElement(de.a,null),types:["\u043f\u0435\u0440\u0435\u0440\u0435\u0437\u0430\u0442\u044c \u043a\u0430\u0431\u0435\u043b\u0438"]}},n=["\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u044f","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a"];return r.a.createElement(d.b,{header:r.a.createElement(d.c,{mode:"secondary"},"\u0421\u043e\u0431\u044b\u0442\u0438\u044f")},t.events.length?t.events.map((function(e){var t=new Date(1e3*e.date),s=t.getMinutes(),o=t.getHours();s<10&&(s="0".concat(s)),o<10&&(o="0".concat(o));var c="".concat(t.getDate()," ").concat(n[t.getMonth()]," ").concat(o,":").concat(s);return r.a.createElement(d.m,{before:a[e.type].icon,description:c},"".concat(a[e.type].name,": ").concat(a[e.type].types[e.num]))})):r.a.createElement(d.j,{icon:r.a.createElement(be.a,null),header:"\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"},"\u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u044d\u0442\u043e\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438 \u0447\u0442\u043e-\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0435\u0442,",r.a.createElement("br",null),"\u043e\u043d\u043e \u043e\u0442\u0440\u0430\u0437\u0438\u0442\u0441\u044f \u0437\u0434\u0435\u0441\u044c"))},ke=function(e){return r.a.createElement(d.n,{key:+new Date,layout:"vertical",onClose:function(){return e.closeSnackbar},before:r.a.createElement(d.a,{size:24,style:e.good?{backgroundColor:"var(--accent)"}:{backgroundColor:"var(--dynamic_red)"}},e.good?r.a.createElement(pe.a,{fill:"#fff",width:14,height:14}):r.a.createElement(de.a,{fill:"#fff",width:14,height:14}))},e.message)},Ee=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).diversionOffset=1800,n.state={snackbar:""},n.diversion=n.diversion.bind(Object(u.a)(n)),n.closeSnackbar=n.closeSnackbar.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"getInt",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"closeSnackbar",value:function(){this.setState({snackbar:null})}},{key:"diversion",value:function(e){var t=parseInt(+new Date/1e3);if(t-this.props.user.lastDiversion<this.diversionOffset)return this.setState({snackbar:r.a.createElement(ke,{closeSnackbar:this.closeSnackbar,good:!1,message:"\u0414\u0438\u0432\u0435\u0440\u0441\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0440\u0430\u0437 \u0432 10 \u043c\u0438\u043d\u0443\u0442"})}),0;var a=this.props.areas,n=a[this.props.curArea];switch(e){case 0:if(this.getInt(0,4)>0){var s=this.getInt(1,5);n.approval+=s,n.events.push({type:"speech",num:0,date:t,effect:{type:"approval",value:s},actor:S("vk_user_id")}),this.setState({snackbar:r.a.createElement(ke,{closeSnackbar:this.closeSnackbar,good:!0,message:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u043f\u043e\u0432\u044b\u0448\u0435\u043d \u043d\u0430 ".concat(s)})})}else this.setState({snackbar:r.a.createElement(ke,{closeSnackbar:this.closeSnackbar,good:!1,message:"\u0420\u0435\u0447\u044c \u043d\u0438\u043a\u043e\u0433\u043e \u043d\u0435 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0438\u043b\u0430"})})}n.approval>100&&(n.approval=100),n.happiness>100&&(n.happiness=100),a[this.props.curArea]=n;var o=this.props.users,c=this.props.user;c.lastSpeech=parseInt(+new Date/1e3),o["U"+S("vk_user_id")]=c,b.firestore().collection("data").doc("areas").update({main:a}).then((function(){console.log("\u041f\u0420\u041e\u0418\u0417\u041d\u0415\u0421\u0415\u041d\u0410 \u0420\u0415\u0427\u042c")})),b.firestore().collection("data").doc("users").update({main:o}).then((function(){console.log("\u041e\u0411\u041d\u041e\u0412\u041b\u0415\u041d\u042b \u0414\u0410\u041d\u041d\u042b\u0415 \u041f\u041e\u041b\u042c\u0417\u041e\u0412\u0410\u0422\u0415\u041b\u042f")}))}},{key:"render",value:function(){var e=this,t=parseInt(+new Date/1e3),a=this.props.user.lastSpeech,n=new Date(1e3*a+1e3*this.diversionOffset),s=n.getMinutes(),o=n.getHours();return s<10&&(s="0".concat(s)),o<10&&(o="0".concat(o)),r.a.createElement("div",null,r.a.createElement(d.f,{left:r.a.createElement(d.g,{onClick:function(){e.props.openPanel("area")}})},"\u0412\u044b\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u0441 \u0440\u0435\u0447\u044c\u044e"),r.a.createElement(d.b,{description:"\u043f\u0440\u043e\u0438\u0437\u043d\u0435\u0441\u0438\u0442\u0435 \u0432\u043e\u043e\u0434\u0443\u0448\u0435\u0432\u043b\u044f\u044e\u0449\u0443\u044e \u0440\u0435\u0447\u044c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043d\u044f\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0438 \u0443\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0432\u0430\u0448\u0438 \u043f\u043e\u0437\u0438\u0446\u0438\u0438, \u0430 \u043c\u043e\u0436\u0435\u0442 \u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442. \u0432 \u043e\u0431\u0449\u0435\u043c, \u0441\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u0431\u0430\u0437\u0430\u0440\u043e\u043c"},r.a.createElement(d.m,{style:t-a>this.diversionOffset?{display:"none"}:{},before:r.a.createElement(de.a,{width:28,height:28})},"\u041f\u0440\u043e\u0438\u0437\u043d\u0435\u0441\u0442\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0440\u0435\u0447\u044c \u043c\u043e\u0436\u043d\u043e \u0432 ".concat(o,":").concat(s)),r.a.createElement(d.m,{onClick:function(){e.diversion(0)},before:r.a.createElement(le.a,{width:28,height:28}),expandable:!0},"\u041f\u043e\u0441\u0435\u0442\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0438")),this.state.snackbar)}}]),a}(r.a.Component),ye=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={activeView:"main",activePanel:"main",VK_UID:0,userData:{id:0,warPoints:0,points:[]},popout:"",modal:"",snackbar:"",contextOpened:!1,center:{lat:54.77927,lng:56.123964},zoom:14,areas:[],users:[],activeArea:0},n.openPanel=n.openPanel.bind(Object(u.a)(n)),n.openCaptureModal=n.openCaptureModal.bind(Object(u.a)(n)),n.polyClick=n.polyClick.bind(Object(u.a)(n)),n.onDragged=n.onDragged.bind(Object(u.a)(n)),n.toggleContext=n.toggleContext.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({VK_UID:S("vk_user_id")}),C.a.send("VKWebAppInit",{}).then((function(){return console.log("\u0412\u041a \u041f\u041e\u0414\u041a\u041b\u042e\u0427\u0415\u041d")})).catch((function(){window.location.reload()})),y(S("vk_user_id")).then((function(){var t=b.firestore().collection("data");t.doc("areas").onSnapshot((function(t){t.data()&&e.setState({areas:t.data().main})})),t.doc("users").onSnapshot((function(t){if(t.data()){for(var a=t.data().main,n=[],r=0,s=Object.entries(a);r<s.length;r++){var o=Object(c.a)(s[r],2),i=o[0];o[1];n.push(i.substr(1))}var l=n.join(",");C.a.send("VKWebAppGetAuthToken",{app_id:7446907,scope:""}).then((function(t){return C.a.send("VKWebAppCallAPIMethod",{method:"users.get",request_id:"32test",params:{fields:"photo_200",user_ids:l,v:"5.110",access_token:t.access_token}}).then((function(t){for(var n,r=0;r<t.response.length;r++)n=t.response[r],a["U"+n.id].photo_200=n.photo_200,a["U"+n.id].first_name=n.first_name,a["U"+n.id].last_name=n.last_name,n.id,parseInt(S("vk_user_id"));e.setState({users:a})}))}))}}))}))}},{key:"componentWillUnmount",value:function(){}},{key:"openPanel",value:function(e){this.setState({activePanel:e})}},{key:"openView",value:function(e){this.setState({activeView:e})}},{key:"toggleContext",value:function(){this.setState({contextOpened:!this.state.contextOpened})}},{key:"removeIcons",value:function(e,t){t.setOptions({styles:Q}),I()(".map").css("height",I()(window).height()-I()(".PanelHeader").height())}},{key:"openCaptureModal",value:function(e){}},{key:"onDragged",value:function(e,t){this.setState({center:{lat:t.center.lat(),lng:t.center.lng()},zoom:t.zoom})}},{key:"polyClick",value:function(e){this.openPanel("area"),this.setState({activeArea:e})}},{key:"render",value:function(){var e=this,t=this.state.users["U"+S("vk_user_id")],a=this.state.activeArea;return r.a.createElement(d.l,{activeView:this.state.activeView},r.a.createElement(d.o,{popout:this.state.popout,id:"main",activePanel:this.state.activePanel},r.a.createElement(d.e,{id:"main"},r.a.createElement(d.f,null,r.a.createElement(d.h,{aside:r.a.createElement(N.a,{style:{transform:"rotate(".concat(this.state.contextOpened?"180deg":"0",")")}}),onClick:this.toggleContext,before:"",status:""},"\u0411\u0418\u0422\u0412\u0410 \u0417\u0410 \u0418\u041d\u041e\u0420\u0421")),r.a.createElement(d.i,{opened:this.state.contextOpened,onClose:this.toggleContext},r.a.createElement(ce,{areas:this.state.areas,polyClick:this.polyClick,user:t})),r.a.createElement(j,{areas:this.state.areas,users:this.state.users,center:this.state.center,removeIcons:this.removeIcons,google:this.props.google,points:this.state.points,markerClick:this.markerClick,zoom:this.state.zoom,polyClick:this.polyClick,onDragged:this.onDragged,polygons:L}),this.state.snackbar),r.a.createElement(d.e,{id:"area"},this.state.areas.length?r.a.createElement("div",null,r.a.createElement(d.f,{left:r.a.createElement(d.g,{onClick:function(){e.openPanel("main")}})},this.state.areas[a].name),r.a.createElement(q,{users:this.state.users,areas:this.state.areas,curArea:a}),r.a.createElement(Y,{areas:this.state.areas,curArea:a}),r.a.createElement(ae,{openPanel:this.openPanel,areas:this.state.areas,curArea:a}),r.a.createElement(ge,{areas:this.state.areas,curArea:a})):""),r.a.createElement(d.e,{id:"diversion"},r.a.createElement(fe,{areas:this.state.areas,curArea:a,user:t,users:this.state.users,openPanel:this.openPanel})),r.a.createElement(d.e,{id:"speech"},r.a.createElement(Ee,{areas:this.state.areas,curArea:a,user:t,users:this.state.users,openPanel:this.openPanel}))))}}]),a}(r.a.Component),we=Object(O.GoogleApiWrapper)({apiKey:"AIzaSyC2L8vPYtDn5Csq-7Gj9sZqSzvb3Bx1QfI"})(ye);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,a){e.exports=a.p+"static/media/pv.910d5316.png"}},[[123,1,2]]]);
//# sourceMappingURL=main.870617da.chunk.js.map