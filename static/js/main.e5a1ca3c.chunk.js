(this.webpackJsonpgame1=this.webpackJsonpgame1||[]).push([[0],{123:function(e,a,t){e.exports=t(171)},128:function(e,a,t){},129:function(e,a,t){},153:function(e,a,t){e.exports=t.p+"static/media/wh.59a4c6da.png"},154:function(e,a,t){e.exports=t.p+"static/media/UMPO.53770ec2.png"},171:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(33),o=t.n(s),c=(t(128),t(70)),i=t(21),l=t(22),u=t(13),p=t(24),h=t(23),d=(t(129),t(3)),m=(t(140),t(55)),f=t.n(m).a.initializeApp({apiKey:"AIzaSyCU3lAPlsxkBORPy2HQfCdayJNIIh0PrV4",authDomain:"game1-cae49.firebaseapp.com",databaseURL:"https://game1-cae49.firebaseio.com",projectId:"game1-cae49",storageBucket:"game1-cae49.appspot.com",messagingSenderId:"691468574984",appId:"1:691468574984:web:1c76454a2ec3020e820cbd",measurementId:"G-1B23MNQTH4"}),b=t(45),v=t.n(b),k=t(56),E=function(){var e=Object(k.a)(v.a.mark((function e(a){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={id:a,warPoints:0,lastTaken:+new Date,points:[]},f.firestore().collection("users").doc(a.toString()).get().then((function(e){e.exists||f.firestore().collection("users").doc(a.toString()).set(t).then((function(e){console.log("\u0421\u041e\u0417\u0414\u0410\u041d \u041f\u041e\u041b\u042c\u0417\u041e\u0412\u0410\u0422\u0415\u041b\u042c"),window.location.reload()}))}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),g=t(25),y=t.n(g),S=function(e){var a=null,t=[];return location.search.substr(1).split("&").forEach((function(n){(t=n.split("="))[0]===e&&(a=decodeURIComponent(t[1]))})),a},C=t(34),O=t(41),w=t.n(O),j=(t(153),t(46),t(154),function(e){if(!e.areas.length||!e.users.U1)return r.a.createElement(d.p,null);for(var a=e.polygons,t=[],n=0;n<a.length;n++){t[n]=[];for(var s=0;s<a[n].length;s++)t[n][s]={lat:0,lng:0},t[n][s].lat=a[n][s][0],t[n][s].lng=a[n][s][1]}return r.a.createElement(C.Map,{onReady:function(a,t){return e.removeIcons(a,t)},google:e.google,zoom:e.zoom,className:"map",streetViewControl:!1,mapTypeControl:!1,scaleControl:!1,fullscreenControl:!1,zoomControl:!1,onBoundsChanged:e.onDragged,initialCenter:e.center},t.map((function(a,t){return r.a.createElement(C.Polygon,{onClick:function(){e.polyClick(t)},paths:a,key:t+"poly"+a[0].lat+" "+a[1].lng,strokeColor:"#000000",strokeOpacity:.8,strokeWeight:.5,fillColor:0===e.areas[t].owner?"#000000":e.users["U"+e.areas[t].owner].color,fillOpacity:.35})})))}),P=["\u041f\u0438\u0432\u043a\u043e","\u0421\u0435\u043c\u043a\u0438","\u0421\u0438\u0436\u043a\u0438","\u0411\u0430\u043a-\u0431\u0435\u043b\u044f\u0448","\u0427\u0430\u043a-\u0427\u0430\u043a","\u042d\u0447\u043f\u043e\u0447\u043c\u0430\u043a\u0438","\u041e\u0447\u043a\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439","\u041e\u0447\u043a\u0438 \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0439","\u041e\u0447\u043a\u0438 \u043f\u0440\u043e\u043f\u0430\u0433\u0430\u043d\u0434\u044b","\u041e\u0447\u043a\u043e"],A=t(57),_=t.n(A),x=t(58),D=t.n(x),V=t(39),I=t.n(V),z=t(31),M=t.n(z),U=t(59),H=t.n(U),T=t(35),W=t.n(T),B=t(60),K=t.n(B),q=function(e){var a=e.areas[e.curArea],t=e.users["U"+e.areas[e.curArea].owner];return r.a.createElement(d.d,{header:r.a.createElement(d.e,{mode:"secondary"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},r.a.createElement(d.r,{before:r.a.createElement(d.a,{size:48,src:t.photo_200}),after:r.a.createElement(_.a,null),description:"\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0430\u0439\u043e\u043d\u043e\u043c"},"".concat(t.first_name," ").concat(t.last_name)),r.a.createElement(d.r,{before:r.a.createElement(D.a,null),description:"\u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0447\u0430\u0441\u0442\u044c\u044f"},r.a.createElement(d.n,{key:a.name+"distrhappi"+a.happiness,value:a.happiness})),r.a.createElement(d.r,{before:r.a.createElement(K.a,null),description:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0432\u043b\u0430\u0441\u0442\u0438"},r.a.createElement(d.n,{key:a.name+"d_approval"+a.approval,value:a.approval})),r.a.createElement(d.r,{before:r.a.createElement(I.a,{width:28,height:28}),description:"\u0412\u0412\u041f",style:{display:"none"}},a.happiness*a.population/100),r.a.createElement(d.r,{before:r.a.createElement(M.a,null),description:"\u0442\u0438\u043f \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0438"},P[a.economy]),r.a.createElement(d.r,{style:{display:"none"},before:r.a.createElement(W.a,null),description:"\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u044b"},"53"),r.a.createElement(d.r,{before:r.a.createElement(H.a,null),description:"\u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435"},a.population," \u0442\u044b\u0441."))},G=t(61),N=t.n(G),R=[{elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]}],J=[[[54.779493,56.124385],[54.779497,56.131224],[54.776341,56.131215],[54.776348,56.124403]],[[54.781021,56.124396],[54.781036,56.131236],[54.779497,56.131224],[54.779493,56.124385]],[[54.785005,56.124335],[54.785039,56.124738],[54.785051,56.125118],[54.785528,56.125112],[54.785721,56.125202],[54.785853,56.125454],[54.786095,56.126215],[54.786116,56.131269],[54.781036,56.131236],[54.781021,56.124396],[54.783463,56.12439]],[[54.788083,56.121598],[54.788085,56.131268],[54.786116,56.131269],[54.786095,56.126215],[54.785853,56.125454],[54.785721,56.125202],[54.785528,56.125112],[54.785051,56.125118],[54.785039,56.124738],[54.785005,56.124335],[54.785419,56.124109],[54.785716,56.123839],[54.786556,56.122793],[54.787478,56.121806]],[[54.788085,56.131268],[54.78809,56.138701],[54.787969,56.138726],[54.787872,56.138638],[54.787739,56.138423],[54.787534,56.138267],[54.787422,56.138271],[54.78731,56.138139],[54.787207,56.138088],[54.786705,56.138104],[54.786612,56.138182],[54.786502,56.138185],[54.786435,56.138273],[54.78132,56.138272],[54.781204,56.138015],[54.781135,56.137899],[54.781022,56.137387],[54.781036,56.131236]],[[54.776348,56.124403],[54.776341,56.131215],[54.775451,56.131214],[54.775371,56.131147],[54.775293,56.130954],[54.774989,56.130881],[54.774843,56.130696],[54.774628,56.130616],[54.773699,56.130516],[54.773455,56.131214],[54.773055,56.131289],[54.772976,56.13086],[54.772956,56.129272],[54.773206,56.127888],[54.773471,56.127201],[54.77381,56.126584],[54.774408,56.125915],[54.774385,56.12584],[54.774392,56.124427]],[[54.78011,56.116825],[54.780185,56.117445],[54.780169,56.124392],[54.774392,56.124427],[54.774246,56.12135],[54.773549,56.117302],[54.773503,56.116494],[54.773547,56.115505],[54.773647,56.114637],[54.773814,56.113825],[54.774018,56.113179],[54.774138,56.112975],[54.774406,56.112635],[54.7758,56.11359]],[[54.783401,56.121429],[54.783411,56.122845],[54.783463,56.12439],[54.780169,56.124392],[54.780179,56.121533],[54.780351,56.121501],[54.781185,56.12141],[54.78157,56.121394]],[[54.783423,56.11553],[54.783421,56.116032],[54.783406,56.116767],[54.783399,56.117089],[54.783412,56.118041],[54.78341,56.119827],[54.783401,56.121429],[54.78157,56.121394],[54.781185,56.12141],[54.780351,56.121501],[54.780179,56.121533],[54.780185,56.117445],[54.78011,56.116825],[54.780063,56.116583],[54.78005,56.115524]],[[54.780024,56.112637],[54.780035,56.113903],[54.78005,56.115524],[54.780063,56.116583],[54.78011,56.116825],[54.7758,56.11359],[54.774406,56.112635],[54.77439,56.111932],[54.774399,56.11172],[54.77444,56.111479],[54.774584,56.11101],[54.775041,56.109647],[54.774897,56.109436],[54.774889,56.109296],[54.774936,56.109133],[54.775397,56.108206],[54.775899,56.107353],[54.776538,56.106487],[54.777265,56.106672],[54.777663,56.106938],[54.777868,56.106967],[54.778242,56.106967],[54.778576,56.107238],[54.778652,56.107482],[54.778627,56.107721],[54.778875,56.108131],[54.778954,56.108587],[54.779057,56.109094],[54.779165,56.109505],[54.779291,56.110143],[54.77941,56.110763],[54.779543,56.111265],[54.779607,56.111497],[54.77977,56.11162],[54.779881,56.111878],[54.779988,56.11217]],[[54.785809,56.115501],[54.785955,56.118246],[54.786925,56.119222],[54.787296,56.119897],[54.787597,56.120338],[54.78766,56.120319],[54.78773,56.119954],[54.788112,56.120155],[54.788083,56.121598],[54.787478,56.121806],[54.786556,56.122793],[54.785716,56.123839],[54.785419,56.124109],[54.785005,56.124335],[54.783463,56.12439],[54.783411,56.122845],[54.783401,56.121429],[54.78341,56.119827],[54.783412,56.118041],[54.783399,56.117089],[54.783421,56.116032],[54.783423,56.11553],[54.784622,56.115512]]],Q=function(e){return r.a.createElement(d.d,{header:r.a.createElement(d.e,{mode:"secondary"},"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0438")},r.a.createElement(d.r,{before:r.a.createElement(I.a,{width:28,height:28}),description:"\u043d\u0430\u043b\u043e\u0433\u0438"},"20%"))},L=t(62),Y=t.n(L),Z=t(36),$=t.n(Z),F=t(63),X=t.n(F),ee=t(64),ae=t.n(ee),te=function(e){var a=e.areas[e.curArea],t=r.a.createElement(d.d,{header:r.a.createElement(d.e,{mode:"secondary"},"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435")},r.a.createElement(d.r,{expandable:!0,before:r.a.createElement(W.a,null),onClick:function(){e.openPanel("trade")}},"\u0422\u043e\u0440\u0433\u043e\u0432\u043b\u044f"),r.a.createElement(d.r,{expandable:!0,before:r.a.createElement($.a,null)},"\u041f\u0440\u043e\u043f\u0430\u0433\u0430\u043d\u0434\u0430"),r.a.createElement(d.r,{expandable:!0,before:r.a.createElement(X.a,null),onClick:function(){e.openPanel("diversion")}},"\u0414\u0438\u0432\u0435\u0440\u0441\u0438\u044f")),n=r.a.createElement(d.d,{header:r.a.createElement(d.e,{mode:"secondary"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435")},r.a.createElement(d.r,{expandable:!0,before:r.a.createElement(Y.a,null),onClick:function(){e.openPanel("laws")}},"\u0417\u0430\u043a\u043e\u043d\u044b"),r.a.createElement(d.r,{expandable:!0,before:r.a.createElement(ae.a,null),onClick:function(){e.openPanel("production")}},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e"),r.a.createElement(d.r,{expandable:!0,before:r.a.createElement(M.a,null),onClick:function(){e.openPanel("warehouse")}},"\u0421\u043a\u043b\u0430\u0434"),r.a.createElement(d.r,{expandable:!0,before:r.a.createElement($.a,null),onClick:function(){e.openPanel("speech")}},"\u0412\u044b\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u0441 \u0440\u0435\u0447\u044c\u044e"),r.a.createElement(d.r,{expandable:!0,before:r.a.createElement(W.a,null),onClick:function(){e.openPanel("trade")}},"\u0422\u043e\u0440\u0433\u043e\u0432\u043b\u044f"));return a.owner===parseInt(S("vk_user_id"))?n:t},ne=t(65),re=t.n(ne),se=t(66),oe=t.n(se),ce=function(e){var a=e.user;return r.a.createElement(d.g,null,r.a.createElement(d.r,{before:r.a.createElement(d.a,{size:48,src:a.photo_200}),description:"\u043b\u0443\u0447\u0448\u0438\u0439 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439?"},"".concat(a.first_name," ").concat(a.last_name)),r.a.createElement(d.r,{before:r.a.createElement(re.a,null),description:"\u0441\u0447\u0435\u0442 \u0432 \u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u0438"},a.offshores),r.a.createElement(d.r,{onClick:function(){e.polyClick(a.area)},before:r.a.createElement(oe.a,null)},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 "+e.areas[a.area].name))},ie=t(27),le=t.n(ie),ue=t(26),pe=t.n(ue),he=t(67),de=t.n(he),me=function(e){return r.a.createElement(d.t,{key:+new Date,layout:"vertical",onClose:function(){return e.closeSnackbar},before:r.a.createElement(d.a,{size:24,style:e.good?{backgroundColor:"var(--accent)"}:{backgroundColor:"var(--dynamic_red)"}},e.good?r.a.createElement(de.a,{fill:"#fff",width:14,height:14}):r.a.createElement(pe.a,{fill:"#fff",width:14,height:14}))},e.message)},fe=function(){return parseInt(+new Date/1e3)},be=function(e){return e<10&&(e="0".concat(e)),e},ve=function(e){f.firestore().collection("data").doc("areas").update({main:e}).then((function(){console.log("\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439")}))},ke=function(e){f.firestore().collection("data").doc("users").update({main:e}).then((function(){console.log("\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439")}))},Ee=function(e){return e>100&&(e=100),e<0&&(e=0),e},ge=function(e,a,t,n){return{type:e,num:a,date:fe(),effect:{type:t,value:n},actor:S("vk_user_id")}},ye=function(e,a){return Math.floor(Math.random()*(a-e+1))+e},Se=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).diversionOffset=600,n.prices=[50],n.state={snackbar:""},n.diversion=n.diversion.bind(Object(u.a)(n)),n.closeSnackbar=n.closeSnackbar.bind(Object(u.a)(n)),n.openSnackbar=n.openSnackbar.bind(Object(u.a)(n)),n}return Object(l.a)(t,[{key:"closeSnackbar",value:function(){this.setState({snackbar:null})}},{key:"openSnackbar",value:function(e,a){this.setState({snackbar:r.a.createElement(me,{closeSnackbar:this.closeSnackbar,good:e,message:a})})}},{key:"diversion",value:function(e){var a=fe(),t=this.props.user.lastDiversion,n=this.prices;if(a-t<this.diversionOffset)return this.openSnackbar(!1,"\u0414\u0438\u0432\u0435\u0440\u0441\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0440\u0430\u0437 \u0432 10 \u043c\u0438\u043d\u0443\u0442"),0;var r=this.props.areas,s=r[this.props.curArea],o=r[this.props.user.area];if(o.warehouse[7]-n[e]<0)return this.openSnackbar(!1,"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043e\u0447\u043a\u043e\u0432 \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0438"),0;switch(e){case 0:if(ye(0,2)>0){var c=ye(1,5);s.happiness-=c,s.events.push(ge("diversion",0,"happiness",-c)),this.openSnackbar(!0,"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0447\u0430\u0441\u0442\u044c\u044f \u0441\u043d\u0438\u0436\u0435\u043d \u043d\u0430 ".concat(c))}else this.openSnackbar(!1,"\u0414\u0438\u0432\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u043b\u0430\u0441\u044c")}s.happiness=Ee(s.happiness),o.warehouse[7]-=n[e],r[this.props.curArea]=s,r[this.props.user.area]=o;var i=this.props.users,l=this.props.user;l.lastDiversion=fe(),i["U"+S("vk_user_id")]=l,ve(r),ke(i)}},{key:"render",value:function(){var e=this,a=fe(),t=this.props.user.lastDiversion,n=new Date(1e3*t+1e3*this.diversionOffset),s=be(n.getMinutes()),o=be(n.getHours());return r.a.createElement("div",null,r.a.createElement(d.i,{left:r.a.createElement(d.j,{onClick:function(){e.props.openPanel("area")}})},"\u0414\u0438\u0432\u0435\u0440\u0441\u0438\u0438"),r.a.createElement(d.d,{description:"\u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u0441\u043d\u0438\u0436\u0430\u0442\u044c \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u0435 \u0432\u043b\u0430\u0441\u0442\u0438 \u0438 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0447\u0430\u0441\u0442\u044c\u044f, \u043d\u043e \u0438 \u0441\u0430\u043c\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442 \u043d\u0438\u0445 \u0432\u044b\u0433\u043e\u0434\u0443, \u0441\u043f\u0438\u0441\u0430\u0432 \u0441\u0432\u043e\u0438 \u043d\u0435\u0443\u0434\u0430\u0447\u0438 \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0435 \u0432\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e.\r \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u044e\u0442\u0441\u044f \u0437\u0430 \u043e\u0447\u043a\u0438 \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043d\u0430 \u0441\u0432\u043e\u0435\u043c \u0440\u0430\u0439\u043e\u043d\u0435 \u0438\u043b\u0438 \u043a\u0443\u043f\u0438\u0442\u044c \u043d\u0430 \u0442\u043e\u0440\u0433\u043e\u0432\u043e\u0439 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0435"},r.a.createElement(d.r,{multiline:!0,style:a-t>this.diversionOffset?{display:"none"}:{},before:r.a.createElement(pe.a,{width:28,height:28})},"\u041d\u043e\u0432\u0430\u044f \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 ".concat(o,":").concat(s)),r.a.createElement(d.r,{onClick:function(){e.diversion(0)},before:r.a.createElement(le.a,{width:28,height:28}),expandable:!0,description:"".concat(this.prices[0]," \u043e\u0447\u043a\u043e\u0432 \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0439")},"\u041f\u0435\u0440\u0435\u043a\u0443\u0441\u0438\u0442\u044c \u043a\u0430\u0431\u0435\u043b\u0438")),this.state.snackbar)}}]),t}(r.a.Component),Ce=t(68),Oe=t.n(Ce),we=function(e){var a=e.areas[e.curArea],t={diversion:{name:"\u0414\u0438\u0432\u0435\u0440\u0441\u0438\u044f",icon:r.a.createElement(pe.a,null),types:["\u043f\u0435\u0440\u0435\u0440\u0435\u0437\u0430\u0442\u044c \u043a\u0430\u0431\u0435\u043b\u0438"]},speech:{name:"\u0420\u0435\u0447\u044c",icon:r.a.createElement($.a,{width:24,height:24}),types:["\u0441\u0432\u0430\u043b\u0438\u0442\u044c \u0432\u0438\u043d\u0443 \u043d\u0430 \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0438"]}},n=["\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u044f","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a"];return r.a.createElement(d.d,{header:r.a.createElement(d.e,{mode:"secondary"},"\u0421\u043e\u0431\u044b\u0442\u0438\u044f")},a.events.length?a.events.reverse().map((function(e){var a=new Date(1e3*e.date),s=be(a.getMinutes()),o=be(a.getHours()),c="".concat(a.getDate()," ").concat(n[a.getMonth()]," ").concat(o,":").concat(s);return r.a.createElement(d.r,{before:t[e.type].icon,description:c},"".concat(t[e.type].name,": ").concat(t[e.type].types[e.num]))})):r.a.createElement(d.m,{icon:r.a.createElement(Oe.a,null),header:"\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"},"\u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u044d\u0442\u043e\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438 \u0447\u0442\u043e-\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0435\u0442,",r.a.createElement("br",null),"\u043e\u043d\u043e \u043e\u0442\u0440\u0430\u0437\u0438\u0442\u0441\u044f \u0437\u0434\u0435\u0441\u044c"))},je=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).diversionOffset=1800,n.state={snackbar:""},n.diversion=n.diversion.bind(Object(u.a)(n)),n.closeSnackbar=n.closeSnackbar.bind(Object(u.a)(n)),n.openSnackbar=n.openSnackbar.bind(Object(u.a)(n)),n}return Object(l.a)(t,[{key:"closeSnackbar",value:function(){this.setState({snackbar:null})}},{key:"openSnackbar",value:function(e,a){this.setState({snackbar:r.a.createElement(me,{closeSnackbar:this.closeSnackbar,good:e,message:a})})}},{key:"diversion",value:function(e){if(fe()-this.props.user.lastSpeech<this.diversionOffset)return this.openSnackbar(!1,"\u0420\u0435\u0447\u044c \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0438\u0437\u043d\u043e\u0441\u0438\u0442\u044c \u0440\u0430\u0437 \u0432 30 \u043c\u0438\u043d\u0443\u0442"),0;var a=this.props.areas,t=a[this.props.curArea];switch(e){case 0:if(ye(0,4)>0){var n=ye(1,5);t.approval+=n,t.events.push(ge("speech",0,"approval",n)),this.openSnackbar(!0,"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u043f\u043e\u0432\u044b\u0448\u0435\u043d \u043d\u0430 ".concat(n))}else this.openSnackbar(!1,"\u0420\u0435\u0447\u044c \u043d\u0438\u043a\u043e\u0433\u043e \u043d\u0435 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0438\u043b\u0430")}t.approval=Ee(t.approval),t.happiness=Ee(t.happiness),a[this.props.curArea]=t;var r=this.props.users,s=this.props.user;s.lastSpeech=fe(),r["U"+S("vk_user_id")]=s,ve(a),ke(r)}},{key:"render",value:function(){var e=this,a=fe(),t=this.props.user.lastSpeech,n=new Date(1e3*t+1e3*this.diversionOffset),s=be(n.getMinutes()),o=be(n.getHours()),c=0!==this.props.areas[this.props.curArea].events.length;return c=!!c&&"diversion"===this.props.areas[this.props.curArea].events[this.props.areas[this.props.curArea].events.length-1].type,r.a.createElement("div",null,r.a.createElement(d.i,{left:r.a.createElement(d.j,{onClick:function(){e.props.openPanel("area")}})},"\u0412\u044b\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u0441 \u0440\u0435\u0447\u044c\u044e"),r.a.createElement(d.d,{description:"\u043f\u0440\u043e\u0438\u0437\u043d\u0435\u0441\u0438\u0442\u0435 \u0432\u043e\u043e\u0434\u0443\u0448\u0435\u0432\u043b\u044f\u044e\u0449\u0443\u044e \u0440\u0435\u0447\u044c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043d\u044f\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0438 \u0443\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0432\u0430\u0448\u0438 \u043f\u043e\u0437\u0438\u0446\u0438\u0438, \u0430 \u043c\u043e\u0436\u0435\u0442 \u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442. \u0432 \u043e\u0431\u0449\u0435\u043c, \u0441\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u0431\u0430\u0437\u0430\u0440\u043e\u043c"},r.a.createElement(d.r,{multiline:!0,style:a-t>this.diversionOffset?{display:"none"}:{},before:r.a.createElement(pe.a,{width:28,height:28})},"\u041f\u0440\u043e\u0438\u0437\u043d\u0435\u0441\u0442\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0440\u0435\u0447\u044c \u043c\u043e\u0436\u043d\u043e \u0432 ".concat(o,":").concat(s)),r.a.createElement(d.r,{onClick:function(){e.diversion(0)},before:r.a.createElement(le.a,{width:28,height:28}),expandable:!0,style:c?{}:{display:"none"}},"\u0421\u0432\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u043d\u0430 \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0438")),this.state.snackbar)}}]),t}(r.a.Component),Pe=t(40),Ae=t.n(Pe),_e=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).diversionOffset=1800,n.state={snackbar:""},n.diversion=n.diversion.bind(Object(u.a)(n)),n.closeSnackbar=n.closeSnackbar.bind(Object(u.a)(n)),n.openSnackbar=n.openSnackbar.bind(Object(u.a)(n)),n}return Object(l.a)(t,[{key:"closeSnackbar",value:function(){this.setState({snackbar:null})}},{key:"openSnackbar",value:function(e,a){this.setState({snackbar:r.a.createElement(me,{closeSnackbar:this.closeSnackbar,good:e,message:a})})}},{key:"diversion",value:function(e){var a=this.props.areas,t=a[this.props.curArea];t.approval=Ee(t.approval),t.happiness=Ee(t.happiness),ve(a)}},{key:"render",value:function(){var e=this,a=(new Date).getHours();return a>=12&&a<13?r.a.createElement("div",null,r.a.createElement(d.i,{left:r.a.createElement(d.j,{onClick:function(){e.props.openPanel("area")}})},"\u0417\u0430\u043a\u043e\u043d\u044b"),r.a.createElement(d.d,{description:"\u0437\u0430\u043a\u043e\u043d\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0440\u0430\u0439\u043e\u043d\u0430. \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0435 \u0438\u0445 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435 \u0431\u044b\u0441\u0442\u0440\u043e \u0432\u044b\u0432\u0435\u0434\u0435\u0442 \u043a \u0434\u043e\u043c\u0438\u043d\u0430\u0446\u0438\u0438."},r.a.createElement(d.r,{onClick:function(){e.diversion(0)},before:r.a.createElement(le.a,{width:28,height:28}),expandable:!0},"\u0421\u0432\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u043d\u0430 \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0438")),this.state.snackbar):r.a.createElement("div",null,r.a.createElement(d.i,{left:r.a.createElement(d.j,{onClick:function(){e.props.openPanel("area")}})},"\u0417\u0430\u043a\u0440\u044b\u0442\u043e"),r.a.createElement(d.m,{icon:r.a.createElement(Ae.a,null),header:"\u0417\u0430\u043a\u0440\u044b\u0442\u043e"},"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0437\u0430\u043a\u043e\u043d\u044b \u043c\u043e\u0436\u043d\u043e \u0441 12 \u0434\u043e 13 \u0447\u0430\u0441\u043e\u0432"))}}]),t}(r.a.Component),xe=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={snackbar:""},n.diversion=n.diversion.bind(Object(u.a)(n)),n.closeSnackbar=n.closeSnackbar.bind(Object(u.a)(n)),n.openSnackbar=n.openSnackbar.bind(Object(u.a)(n)),n}return Object(l.a)(t,[{key:"closeSnackbar",value:function(){this.setState({snackbar:null})}},{key:"openSnackbar",value:function(e,a){this.setState({snackbar:r.a.createElement(me,{closeSnackbar:this.closeSnackbar,good:e,message:a})})}},{key:"diversion",value:function(e){}},{key:"render",value:function(){var e=this,a=(new Date).getHours();return a>=8&&a<22?r.a.createElement("div",null,r.a.createElement(d.i,{left:r.a.createElement(d.j,{onClick:function(){e.props.openPanel("area")}})},"\u0422\u043e\u0440\u0433\u043e\u0432\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430"),r.a.createElement(d.d,{header:r.a.createElement(d.e,{mode:"secondary"},"\u041a\u0443\u043f\u0438\u0442\u044c")},P.map((function(a,t){return r.a.createElement(d.r,{key:"buy".concat(t),onClick:function(){e.diversion(t)},before:r.a.createElement(le.a,{width:28,height:28}),expandable:!0,description:"\u043c\u0438\u043d. \u0446\u0435\u043d\u0430 42"},a)}))),this.state.snackbar):r.a.createElement("div",null,r.a.createElement(d.i,{left:r.a.createElement(d.j,{onClick:function(){e.props.openPanel("area")}})},"\u0417\u0430\u043a\u0440\u044b\u0442\u043e"),r.a.createElement(d.m,{icon:r.a.createElement(Ae.a,null),header:"\u0417\u0430\u043a\u0440\u044b\u0442\u043e"},"\u0422\u043e\u0440\u0433\u043e\u0432\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 8 \u043f\u043e 22"))}}]),t}(r.a.Component),De=(t(170),t(69)),Ve=t.n(De),Ie=t(38),ze=t.n(Ie),Me=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).diversionOffset=1800,n.state={snackbar:"",sliderVal:1,selectVal:0},n.pushProduction=n.pushProduction.bind(Object(u.a)(n)),n.closeSnackbar=n.closeSnackbar.bind(Object(u.a)(n)),n.openSnackbar=n.openSnackbar.bind(Object(u.a)(n)),n.updateSelect=n.updateSelect.bind(Object(u.a)(n)),n}return Object(l.a)(t,[{key:"closeSnackbar",value:function(){this.setState({snackbar:null})}},{key:"openSnackbar",value:function(e,a){this.setState({snackbar:r.a.createElement(me,{closeSnackbar:this.closeSnackbar,good:e,message:a})})}},{key:"diversion",value:function(e){var a=this.props.areas,t=a[this.props.curArea];t.approval=Ee(t.approval),t.happiness=Ee(t.happiness),ve(a)}},{key:"pushProduction",value:function(){var e={count:this.state.sliderVal,type:this.state.selectVal,ready:fe()+this.state.sliderVal*[1,2,3,4,6,7,3,2,7,5][this.state.selectVal]*10},a=this.props.areas,t=a[this.props.curArea];t.production.length>=5?this.openSnackbar(!1,"\u0412\u0441\u0435 \u044f\u0447\u0435\u0439\u043a\u0438 \u0437\u0430\u043d\u044f\u0442\u044b"):(t.production.push(e),a[this.props.curArea]=t,ve(a))}},{key:"collectProd",value:function(e){var a=this.props.areas,t=this.props.areas[this.props.curArea];t.warehouse[t.production[e].type]+t.production[e].count>15e3?this.openSnackbar(!1,"\u041d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435 \u043d\u0435\u0442 \u043c\u0435\u0441\u0442\u0430"):(this.openSnackbar(!0,"\u041f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434"),a[this.props.curArea].warehouse[t.production[e].type]+=t.production[e].count,a[this.props.curArea].production.splice(e,1),ve(a))}},{key:"updateSelect",value:function(e){this.setState({selectVal:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d.i,{left:r.a.createElement(d.j,{onClick:function(){e.props.openPanel("area")}})},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e"),r.a.createElement(d.d,{description:"\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435 \u0442\u043e\u0432\u0430\u0440\u044b \u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0438\u0445 \u043d\u0430 \u0442\u043e\u0440\u0433\u043e\u0432\u043e\u0439 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0435"},r.a.createElement(d.c,null,r.a.createElement(d.s,{step:1,min:1,max:100,value:Number(this.state.sliderVal),onChange:function(a){e.setState({sliderVal:a})},top:"\u041a\u043e\u043b-\u0432\u043e \u0442\u043e\u0432\u0430\u0440\u0430"}),r.a.createElement(d.f,{style:{margin:"15px 0"},value:this.state.sliderVal,disabled:!0}),r.a.createElement(d.q,{value:this.state.selectVal,onChange:this.updateSelect,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044e"},P.map((function(e,a){return r.a.createElement("option",{value:a},e)}))),r.a.createElement(d.b,{onClick:this.pushProduction,style:{marginTop:15},size:"xl"},"\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u044c"))),r.a.createElement(d.d,{header:r.a.createElement(d.e,{mode:"secondary"},"\u041e\u0447\u0435\u0440\u0435\u0434\u044c")},this.props.areas[this.props.curArea].production.map((function(a,t){var n,s,o;if(fe()-a.ready<=0){n=r.a.createElement(ze.a,{width:28,height:28});var c=new Date(1e3*a.ready),i=be(c.getMinutes()),l=be(c.getHours());s="\u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0442\u043e\u0432\u043e \u0432 ".concat(l,":").concat(i),o=function(){return!1}}else n=r.a.createElement(Ve.a,null),s="\u043d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0431\u0440\u0430\u0442\u044c",o=function(){e.collectProd(t)};return r.a.createElement(d.r,{onClick:o,key:a.ready+s,description:s,before:n},"".concat(P[a.type]," (").concat(a.count,")"))}))),this.state.snackbar)}}]),t}(r.a.Component),Ue=function(e){return r.a.createElement("div",null,r.a.createElement(d.i,{left:r.a.createElement(d.j,{onClick:function(){e.openPanel("area")}})},"\u0421\u043a\u043b\u0430\u0434"),P.map((function(a,t){return r.a.createElement(d.r,{key:a,before:r.a.createElement(M.a,null),description:"".concat(e.areas[e.curArea].warehouse[t],"/15000")},a)})))},He=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={activeView:"main",activePanel:"main",VK_UID:0,userData:{id:0,warPoints:0,points:[]},popout:"",modal:"",snackbar:"",contextOpened:!1,center:{lat:54.77927,lng:56.123964},zoom:14,areas:[],users:[],activeArea:0},n.openPanel=n.openPanel.bind(Object(u.a)(n)),n.openCaptureModal=n.openCaptureModal.bind(Object(u.a)(n)),n.polyClick=n.polyClick.bind(Object(u.a)(n)),n.onDragged=n.onDragged.bind(Object(u.a)(n)),n.toggleContext=n.toggleContext.bind(Object(u.a)(n)),n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({VK_UID:S("vk_user_id")}),y.a.send("VKWebAppInit",{}).then((function(){return console.log("\u0412\u041a \u041f\u041e\u0414\u041a\u041b\u042e\u0427\u0415\u041d")})).catch((function(){window.location.reload()})),E(S("vk_user_id")).then((function(){var a=f.firestore().collection("data");a.doc("areas").onSnapshot((function(a){a.data()&&e.setState({areas:a.data().main})})),a.doc("users").onSnapshot((function(a){if(a.data()){for(var t=a.data().main,n=[],r=0,s=Object.entries(t);r<s.length;r++){var o=Object(c.a)(s[r],2),i=o[0];o[1];n.push(i.substr(1))}var l=n.join(",");y.a.send("VKWebAppGetAuthToken",{app_id:7446907,scope:""}).then((function(a){return y.a.send("VKWebAppCallAPIMethod",{method:"users.get",request_id:"32test",params:{fields:"photo_200",user_ids:l,v:"5.110",access_token:a.access_token}}).then((function(a){for(var n,r=0;r<a.response.length;r++)n=a.response[r],t["U"+n.id].photo_200=n.photo_200,t["U"+n.id].first_name=n.first_name,t["U"+n.id].last_name=n.last_name,n.id,parseInt(S("vk_user_id"));e.setState({users:t})}))}))}}))}))}},{key:"componentWillUnmount",value:function(){}},{key:"openPanel",value:function(e){this.setState({activePanel:e})}},{key:"openView",value:function(e){this.setState({activeView:e})}},{key:"toggleContext",value:function(){this.setState({contextOpened:!this.state.contextOpened})}},{key:"removeIcons",value:function(e,a){a.setOptions({styles:R}),w()(".map").css("height",w()(window).height()-w()(".PanelHeader").height())}},{key:"openCaptureModal",value:function(e){}},{key:"onDragged",value:function(e,a){this.setState({center:{lat:a.center.lat(),lng:a.center.lng()},zoom:a.zoom})}},{key:"polyClick",value:function(e){this.openPanel("area"),this.setState({activeArea:e})}},{key:"render",value:function(){var e=this,a=this.state.users["U"+S("vk_user_id")],t=this.state.activeArea;return r.a.createElement(d.o,{activeView:this.state.activeView},r.a.createElement(d.u,{popout:this.state.popout,id:"main",activePanel:this.state.activePanel},r.a.createElement(d.h,{id:"main"},r.a.createElement(d.i,null,r.a.createElement(d.k,{aside:r.a.createElement(N.a,{style:{transform:"rotate(".concat(this.state.contextOpened?"180deg":"0",")")}}),onClick:this.toggleContext,before:"",status:""},"\u0411\u0418\u0422\u0412\u0410 \u0417\u0410 \u0418\u041d\u041e\u0420\u0421")),r.a.createElement(d.l,{opened:this.state.contextOpened,onClose:this.toggleContext},r.a.createElement(ce,{areas:this.state.areas,polyClick:this.polyClick,user:a})),r.a.createElement(j,{areas:this.state.areas,users:this.state.users,center:this.state.center,removeIcons:this.removeIcons,google:this.props.google,points:this.state.points,markerClick:this.markerClick,zoom:this.state.zoom,polyClick:this.polyClick,onDragged:this.onDragged,polygons:J}),this.state.snackbar),r.a.createElement(d.h,{id:"area"},this.state.areas.length?r.a.createElement("div",null,r.a.createElement(d.i,{left:r.a.createElement(d.j,{onClick:function(){e.openPanel("main")}})},this.state.areas[t].name),r.a.createElement(q,{users:this.state.users,areas:this.state.areas,curArea:t}),r.a.createElement(Q,{areas:this.state.areas,curArea:t}),r.a.createElement(te,{openPanel:this.openPanel,areas:this.state.areas,curArea:t}),r.a.createElement(we,{areas:this.state.areas,curArea:t})):""),r.a.createElement(d.h,{id:"diversion"},r.a.createElement(Se,{areas:this.state.areas,curArea:t,user:a,users:this.state.users,openPanel:this.openPanel})),r.a.createElement(d.h,{id:"speech"},r.a.createElement(je,{areas:this.state.areas,curArea:t,user:a,users:this.state.users,openPanel:this.openPanel})),r.a.createElement(d.h,{id:"laws"},r.a.createElement(_e,{areas:this.state.areas,curArea:t,user:a,users:this.state.users,openPanel:this.openPanel})),r.a.createElement(d.h,{id:"trade"},r.a.createElement(xe,{areas:this.state.areas,curArea:t,user:a,users:this.state.users,openPanel:this.openPanel})),r.a.createElement(d.h,{id:"production"},r.a.createElement(Me,{areas:this.state.areas,curArea:t,user:a,users:this.state.users,openPanel:this.openPanel})),r.a.createElement(d.h,{id:"warehouse"},r.a.createElement(Ue,{openPanel:this.openPanel,areas:this.state.areas,curArea:t}))))}}]),t}(r.a.Component),Te=Object(C.GoogleApiWrapper)({apiKey:"AIzaSyC2L8vPYtDn5Csq-7Gj9sZqSzvb3Bx1QfI"})(He);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,a,t){e.exports=t.p+"static/media/pv.910d5316.png"}},[[123,1,2]]]);
//# sourceMappingURL=main.e5a1ca3c.chunk.js.map