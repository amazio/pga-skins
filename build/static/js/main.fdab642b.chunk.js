(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=a(12),u=a(34),i=Object(n.createContext)({state:null,dispatch:null}),s=a(17),m={getSavedMatches:d,getMatchesByTourneyId:function(e){return d().filter((function(t){return t.tourneyId===e}))},getCurAndPrevSavedMatches:function(e){var t=d(),a=t.filter((function(t){return t.tourneyId===e})),n=t.filter((function(t){return t.tourneyId!==e}));return[a,n,t]}};function d(){var e=JSON.parse(window.localStorage.getItem("matches"));return Array.isArray(e)||(window.localStorage.setItem("matches","[]"),e=[]),e}var v={settings:{deviceId:"",username:"",moneyPerSkin:0,carrySkins:!0},curTourney:null,curSavedMatches:null,prevSavedMatches:null,ui:{matchesTab:"current",saveBtnDisabled:!1}},E="UPDATE_SETTINGS",h="UPDATE_USERNAME",y="UPDATE_CUR_TOURNEY",p="UPDATE_UI_MATCHES_TAB",f="UPDATE_UI_SAVE_BTN";var b=function(e,t){switch(t.type){case E:var a=t.payload,n=a.deviceId,r=a.username,c=a.moneyPerSkin,l=a.carrySkins;return Object(s.a)({},e,{settings:{deviceId:n,username:r,moneyPerSkin:c,carrySkins:l}});case h:return Object(s.a)({},e,{settings:Object(s.a)({},e.settings,{username:t.payload})});case y:var u=m.getCurAndPrevSavedMatches(t.payload._id),i=Object(o.a)(u,2),d=i[0],v=i[1];return Object(s.a)({},e,{curTourney:t.payload,curSavedMatches:d,prevSavedMatches:v});case p:return Object(s.a)({},e,{ui:Object(s.a)({},e.ui,{matchesTab:t.payload})});case f:return Object(s.a)({},e,{ui:Object(s.a)({},e.ui,{saveBtnDisabled:t.payload})});default:return console.log("Received unknow action.type",t.type),e}},g={init:function(e){var t=JSON.parse(window.localStorage.getItem("settings"));if(t){var a=t.deviceId,n=t.username,r=t.moneyPerSkin,c=t.carrySkins;return e({type:E,payload:{deviceId:a,username:n,moneyPerSkin:r,carrySkins:c}}),!1}t={};var l=Date.now()+Math.floor(1e3*Math.random());t.deviceId=l;t.username="";t.moneyPerSkin=5;return t.carrySkins=!0,window.localStorage.setItem("settings",JSON.stringify(t)),e({type:E,payload:{deviceId:l,username:"",moneyPerSkin:5,carrySkins:!0}}),!0},updateUsername:function(e,t){t({type:h,payload:e});var a=JSON.parse(window.localStorage.getItem("settings"));a.username=e,window.localStorage.setItem("settings",JSON.stringify(a))}};var S=a(58),O=a.n(S),w={setCurTourney:function e(t,a){var n;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,O.a.awrap(fetch("/api/tourneys/current").then((function(e){return e.json()})));case 2:n=r.sent,t({type:y,payload:n}),setTimeout((function(){return e(t,a)}),a);case 5:case"end":return r.stop()}}))}};a(93);var k=a(157),C=a(159),j=a(136),T=a(48);function I(e){var t=e.value,a=e.index,n=e.children;return r.a.createElement(T.a,{component:"div",role:"tabpanel",hidden:t!==a},t===a&&n)}var P=a(134),N=a(135),M=a(131);function x(){return r.a.createElement("section",{className:"flex-col-ctr height-width-100"},r.a.createElement(M.a,null))}var A=a(132),B=a(133);function U(e){var t=e.tourney,a=(e.isCurTourney,t.isStarted),n=t.isFinished,c=t.startDate,l=t.curRound,o=t.roundState;return r.a.createElement(A.a,{variant:"outlined",className:"margin-bottom-1rem"},r.a.createElement(B.a,{title:t.title,subheader:n?"Tourney Completed":a?"Round ".concat(l," ").concat(o):"Starts on ".concat(c)}))}function _(){var e=Object(n.useContext)(i).state,t=e.curTourney,a=e.curSavedMatches;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{tourney:t,isCurTourney:!0}),a.length?r.a.createElement(P.a,null,r.a.createElement(N.a,null)):r.a.createElement(T.a,{variant:"body1",style:{marginTop:"2rem"}},"You Have No Matches")):r.a.createElement(x,null)}function D(e){e.state,e.dispatch;return r.a.createElement("h1",null,"TODO: This is the PrevTourneyScreen")}function R(){var e=Object(n.useContext)(i),t=e.state,a=e.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"fullWidth",value:t.ui.matchesTab,className:"margin-bottom-1rem",onChange:function(e,t){return a({type:p,payload:t})}},r.a.createElement(j.a,{value:"current",label:"Current Tourney"}),r.a.createElement(j.a,{value:"previous",label:"Previous Tourneys"})),r.a.createElement(I,{value:t.ui.matchesTab,index:"current"},r.a.createElement(_,null)),r.a.createElement(I,{value:t.ui.matchesTab,index:"previous"},r.a.createElement(D,null)))}var F=a(141),G=a(155),J=a(139),W=a(142),H=a(75),L=a(161),z=a(137),K=a(138),V=a(160),Y=Object(H.a)(L.a)({flexDirection:"row"});function $(e){var t=e.round,a=e.onChange;return t&&a&&t?r.a.createElement(z.a,{component:"fieldset"},r.a.createElement(K.a,{component:"legend"},"Round"),r.a.createElement(Y,{value:""+t,onChange:a},r.a.createElement(J.a,{value:"1",control:r.a.createElement(V.a,{color:"primary"}),label:"1"}),r.a.createElement(J.a,{value:"2",control:r.a.createElement(V.a,{color:"primary"}),label:"2"}),r.a.createElement(J.a,{value:"3",control:r.a.createElement(V.a,{color:"primary"}),label:"3"}),r.a.createElement(J.a,{value:"4",control:r.a.createElement(V.a,{color:"primary"}),label:"4"}))):null}var q=a(158);function Q(e){var t=e.leaderboard,a=e.onChange,c=Object(n.useRef)(t.map((function(e){return{name:e.name,playerId:e.playerId}})).sort((function(e,t){return e.name<t.name?-1:1})));return r.a.createElement(q.a,{multiple:!0,autoComplete:!0,autoHighlight:!0,filterSelectedOptions:!0,style:{width:"100%"},options:c.current,getOptionLabel:function(e){return e.name},onChange:a,renderInput:function(e){return r.a.createElement(G.a,Object.assign({},e,{variant:"outlined",label:"Select Players",margin:"normal"}))}})}function X(){var e=Object(n.useContext)(i),t=e.state,a=e.dispatch,c=t.curTourney,l=t.settings,u=Object(n.useState)({carrySkins:!0,moneyPerSkin:5,round:1,selectedPlayerIds:[]}),m=Object(o.a)(u,2),d=m[0],v=m[1],E=function(){var e=d.moneyPerSkin,t=d.selectedPlayerIds;return e=parseInt(e),t.length<2||isNaN(e)||e<0}();return Object(n.useEffect)((function(){var e;v(Object(s.a)({},d,{deviceId:l.deviceId,username:l.username,round:c&&(e=c,e.isStarted?e.isFinished?"4":e.curRound.toString():"1"),moneyPerSkin:l.moneyPerSkin,carrySkins:l.carrySkins}))}),[c,l]),Object(n.useEffect)((function(){a({type:f,payload:E})}),[E]),c?r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{title:"New Match",subheader:c.title}),r.a.createElement(F.a,{className:"flex-col-ctr"},r.a.createElement($,{round:d.round,onChange:function(e,t){v(Object(s.a)({},d,{round:t}))},color:"primary"}),r.a.createElement(G.a,{label:"Money Per Skin",type:"number",variant:"outlined",min:"1",step:"1",margin:"normal",value:d.moneyPerSkin,onChange:function(e){v(Object(s.a)({},d,{moneyPerSkin:e.target.value?parseInt(e.target.value):""}))},color:"primary"}),r.a.createElement(J.a,{margin:"normal",label:"Carry Over Skins?",className:"MuiFormLabel-root",control:r.a.createElement(W.a,{checked:d.carrySkins,onChange:function(e){v(Object(s.a)({},d,{carrySkins:e.target.checked}))},value:"",color:"primary"})}),r.a.createElement(Q,{leaderboard:c.leaderboard,onChange:function(e,t){v(Object(s.a)({},d,{selectedPlayerIds:t.map((function(e){return e.playerId}))}))}}))):r.a.createElement(x,null)}function Z(){var e=Object(n.useContext)(i).state.settings;e.deviceId,e.username,e.moneyPerSkin,e.carrySkins;return r.a.createElement(T.a,{variant:"h2"},"Settings Screen")}var ee=a(147),te=a(148),ae=a(143),ne=a(146),re=a(144);function ce(e){var t=e.handleClick,a=e.disabled;return r.a.createElement(ae.a,{startIcon:r.a.createElement(re.a,null),variant:"outlined",size:"small",onClick:t,disabled:a},"SAVE")}var le=a(145);function oe(e){var t=e.handleCancel;return r.a.createElement(ae.a,{onClick:t,startIcon:r.a.createElement(le.a,null),variant:"outlined",size:"small"},"CANCEL")}function ue(){var e=Object(n.useContext)(i).state.ui,t=Object(u.g)().pathname,a=Object(u.f)();switch(t){case"/":return"current"===e.matchesTab?r.a.createElement(ae.a,{onClick:function(){return a.push("/matches/new")},startIcon:r.a.createElement(ne.a,null),variant:"outlined",size:"small"},"MATCH"):null;case"/matches/new":return r.a.createElement("span",null,r.a.createElement(oe,{handleCancel:function(){a.goBack()}}),"\xa0",r.a.createElement(ce,{handleClick:function(){a.push("/")},disabled:e.saveBtnDisabled}));case"/settings":default:return null}}function ie(){return r.a.createElement(ee.a,{position:"sticky"},r.a.createElement(te.a,{className:"justify-content-between"},r.a.createElement(T.a,{variant:"h6"},"PGA SKINS"),r.a.createElement(ue,null)))}var se=a(149),me=a(150),de=a(151),ve=a(152);function Ee(){var e=Object(u.f)(),t=Object(u.g)().pathname;return r.a.createElement(se.a,{value:t,onChange:function(t,a){return e.push(a)},showLabels:!0},r.a.createElement(me.a,{value:"/",label:"Matches",icon:r.a.createElement(de.a,null)}),r.a.createElement(me.a,{value:"/settings",label:"Settings",icon:r.a.createElement(ve.a,null)}))}var he=function(){return r.a.createElement(k.a,{className:"GWBM_grid"},r.a.createElement(ie,null),r.a.createElement(k.a,{className:"GWBM_content"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/matches/new",render:function(){return r.a.createElement(X,null)}}),r.a.createElement(u.a,{path:"/settings",render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(u.a,{path:"/",render:function(){return r.a.createElement(R,null)}}))),r.a.createElement(Ee,null))},ye=(a(98),a(153));var pe=function(e){var t=Object(u.f)(),a=Object(n.useContext)(i).dispatch,c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],m=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{variant:"h4",className:"text-center",style:{marginBottom:"2rem"}},"Welcome to",r.a.createElement("br",null),"PGA SKINS!"),r.a.createElement(T.a,{variant:"body2",className:"text-center"},"Please enter the user name you want others to see when viewing a skins match created by you:",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(G.a,{autoComplete:"off",variant:"outlined",placeholder:"User Name",fullWidth:!0,value:s,onChange:function(e){return m(e.target.value)}}),r.a.createElement(ae.a,{onClick:function(){g.updateUsername(s,a),t.push("/")},disabled:s.length<3||s.length>20,style:{marginTop:"1rem"},variant:"contained"},"SUBMIT"))};var fe=function(){return r.a.createElement(k.a,{className:"GNM_grid"},r.a.createElement(ie,null),r.a.createElement(ye.a,{className:"flex-col-ctr"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/welcome",render:function(){return r.a.createElement(pe,null)}}))))};function be(){var e=Object(u.f)(),t=Object(n.useReducer)(b,v),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){w.setCurTourney(l,36e5),g.init(l)&&e.push("/welcome")}),[]),console.log("TODO: remove window.dispatch"),window.dispatch=l,r.a.createElement(i.Provider,{value:{state:c,dispatch:l}},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/welcome",render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(u.a,{path:"/",render:function(){return r.a.createElement(he,null)}})))}a(99),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=a(30),Se=a(74),Oe=a(154),we=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(we,"px")),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}));var ke=Object(Se.a)({palette:{primary:{main:"#d5dcd6",contrastText:"#051907"},secondary:{main:"#d8dae8",contrastText:"#051907"}},overrides:{MuiBottomNavigationAction:{root:{color:"white","&$selected":{color:"#051907"}}},MuiBottomNavigation:{root:{backgroundColor:"#d5dcd6"}}}},"Minty Green");l.a.render(r.a.createElement(ge.a,null,r.a.createElement(u.a,{path:"/",render:function(){return r.a.createElement(Oe.a,{theme:ke},r.a.createElement(be,null))}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},87:function(e,t,a){e.exports=a(100)},93:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.fdab642b.chunk.js.map