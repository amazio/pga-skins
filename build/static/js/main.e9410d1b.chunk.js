(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=a(15),i=a(36),u=Object(n.createContext)({state:null,dispatch:null}),s=a(17),m={initialize:function(e){var t=JSON.parse(window.localStorage.getItem("settings"));if(t)return!1;t={};var a=Date.now()+Math.floor(1e3*Math.random());t.deviceId=a;t.username="";t.moneyPerSkin=5;return t.carrySkins=!0,window.localStorage.setItem("settings",JSON.stringify(t)),e({type:f.UPDATE_SETTINGS,payload:{deviceId:a,username:"",moneyPerSkin:5,carrySkins:!0}}),!0},getSettings:function(){return JSON.parse(window.localStorage.getItem("settings"))},updateUsername:function(e,t){var a=JSON.parse(window.localStorage.getItem("settings"));a.username=e,window.localStorage.setItem("settings",JSON.stringify(a)),t({type:f.UPDATE_USERNAME,payload:e})}};var d={getSavedMatches:h,setSavedMatches:function(e){e.sort(E),window.localStorage.setItem("matches",JSON.stringify(e))},updateSavedMatch:function(e){if(!e)return;var t=h(),a=t.findIndex((function(t){return t._id===e._id}));-1===a?(t.unshift(e),t.sort(E)):t[a]=e;window.localStorage.setItem("matches",JSON.stringify(t))},saveNewMatch:function(e){var t=h();t.unshift(e),t.sort(E),window.localStorage.setItem("matches",JSON.stringify(t))},deleteMatch:function(e){var t=h();return t=t.filter((function(t){return t._id!==e})),window.localStorage.setItem("matches",JSON.stringify(t)),t}};function E(e,t){return e.createdAt>t.createdAt?-1:1}function h(){var e=JSON.parse(window.localStorage.getItem("matches"));return Array.isArray(e)||(window.localStorage.setItem("matches","[]"),e=[]),e}var p={settings:m.getSettings()||{deviceId:"",username:"",moneyPerSkin:0,carrySkins:!0},curTourney:null,savedMatches:d.getSavedMatches(),newMatchData:{},viewingMatch:null,ui:{matchesTab:"current",saveBtnDisabled:!1}},f={UPDATE_SETTINGS:"UPDATE_SETTINGS",UPDATE_USERNAME:"UPDATE_USERNAME",UPDATE_CUR_TOURNEY:"UPDATE_CUR_TOURNEY",UPDATE_NEW_MATCH_DATA:"UPDATE_NEW_MATCH_DATA",UPDATE_VIEWING_MATCH:"UPDATE_VIEWING_MATCH",CREATE_MATCH:"CREATE_MATCH",DELETE_MATCH:"DELETE_MATCH",SET_ALL_MATCHES:"SET_ALL_MATCHES",STOP_VIEWING_MATCH:"STOP_VIEWING_MATCH",UPDATE_UI_MATCHES_TAB:"UPDATE_UI_MATCHES_TAB",UPDATE_UI_SAVE_BTN:"UPDATE_UI_SAVE_BTN"};var v,y=function(e,t){switch(t.type){case f.UPDATE_SETTINGS:return Object(s.a)({},e,{settings:Object(s.a)({},e.settings,{},t.payload)});case f.UPDATE_USERNAME:return Object(s.a)({},e,{settings:Object(s.a)({},e.settings,{username:t.payload})});case f.UPDATE_CUR_TOURNEY:return Object(s.a)({},e,{curTourney:t.payload});case f.UPDATE_NEW_MATCH_DATA:return Object(s.a)({},e,{newMatchData:Object(s.a)({},e.newMatchData,{},t.payload)});case f.UPDATE_VIEWING_MATCH:return d.updateSavedMatch(t.payload),Object(s.a)({},e,{viewingMatch:t.payload});case f.SET_ALL_MATCHES:return d.setSavedMatches(t.payload),Object(s.a)({},e,{savedMatches:t.payload});case f.STOP_VIEWING_MATCH:return Object(s.a)({},e,{viewingMatch:null});case f.CREATE_MATCH:d.saveNewMatch(t.payload);var a=d.getSavedMatches();return Object(s.a)({},e,{viewingMatch:t.payload,savedMatches:a,newMatchData:{}});case f.DELETE_MATCH:var n=d.deleteMatch(t.payload);return Object(s.a)({},e,{savedMatches:n,viewingMatch:null});case f.UPDATE_UI_MATCHES_TAB:return Object(s.a)({},e,{ui:Object(s.a)({},e.ui,{matchesTab:t.payload})});case f.UPDATE_UI_SAVE_BTN:return Object(s.a)({},e,{ui:Object(s.a)({},e.ui,{saveBtnDisabled:t.payload})});default:return console.log("Received unknow action.type",t.type),e}},T=a(52),g=a.n(T),S="CREATE_MATCH",A="START_VIEWING_MATCH",_="UPDATE_VIEWING_MATCH",C="STOP_VIEWING_MATCH",b="DELETE_MATCH",M="SYNC_MATCHES",N=window.io(),w={setDispatch:function(e){v=e},syncMatchesWithServer:function(){var e;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e=d.getSavedMatches().map((function(e){return e._id})),N.emit(M,e,(function(e){v({type:f.SET_ALL_MATCHES,payload:e})}));case 2:case"end":return t.stop()}}))},createMatch:function(e,t){N.emit(S,e,t)},viewMatch:function(e,t){v=t,N.emit(A,e,(function(e){e||v({type:f.STOP_VIEWING_MATCH})}))},stopViewingMatch:function(e){N.emit(C,e),v({type:f.STOP_VIEWING_MATCH})},deleteMatch:function(e,t){v({type:f.DELETE_MATCH,payload:e}),t&&N.emit(b,e)}};N.on(_,(function(e){e&&v({type:f.UPDATE_VIEWING_MATCH,payload:e})}));var I={setCurTourney:function(e){var t;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.awrap(fetch("/api/tourneys/current").then((function(e){return e.json()})));case 2:t=a.sent,e({type:f.UPDATE_CUR_TOURNEY,payload:t});case 4:case"end":return a.stop()}}))}};a(99);var O=a(181),k=a(182),D=a(148),P=a(42);function U(e){var t=e.value,a=e.index,n=e.children;return r.a.createElement(P.a,{component:"div",role:"tabpanel",hidden:t!==a},t===a&&n)}var j=a(144);function H(){return r.a.createElement("section",{className:"flex-col-ctr height-width-100"},r.a.createElement(j.a,null))}var R=a(145);function x(e){var t=e.tourney,a=(e.isCurTourney,t.isStarted),n=t.isFinished,c=t.startDate,l=t.curRound,o=t.roundState;return r.a.createElement(R.a,{title:t.title,subheader:n?"Tourney Completed":a?"Round ".concat(l," ").concat(o):"Starts on ".concat(c),className:"margin-bottom-1rem"})}var W=a(28),G=a(147),L=(a(103),a(188)),B=a(146);a(104);function V(e){var t=Math.abs(e);return e<0?" ".concat("\u25bc","$").concat(t):e>0?" ".concat("\u25b2","$").concat(t):" $".concat(t)}function F(e){var t=e.player;return r.a.createElement(L.a,{className:"PlayerChip",label:"".concat(t.name,"\n").concat(V(t.money)),icon:r.a.createElement(B.a,null),variant:"outlined"})}function z(e){var t,a=e.match,n=e.tourneyRound;t=a.completed?"completed":a.roundNum===n?"in progress":"pending";var c=new Date(a.createdAt).toLocaleString().split("");return c.splice(c.length-6,3).join(""),r.a.createElement(G.a,{variant:"outlined",className:"MatchItem-card"},r.a.createElement("section",null,r.a.createElement(P.a,{variant:"h5",style:{fontSize:"1.25rem"}},"Round ",a.roundNum),r.a.createElement("article",null,r.a.createElement(P.a,{variant:"overline"},"$",a.moneyPerSkin,"/skin (",t,")"))),r.a.createElement("section",null,a.players.map((function(e){return r.a.createElement(F,{player:e,key:e.playerId})}))),r.a.createElement("section",null,r.a.createElement(P.a,{variant:"caption"},"Created by ",a.username," on ",c)))}function J(e){var t=e.matches,a=e.tourneyRound;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(W.b,{to:"/matches/".concat(e._id),key:e._id},r.a.createElement(z,{match:e,tourneyRound:a}))})))}function $(){var e=Object(n.useContext)(u).state,t=e.curTourney,a=e.savedMatches;return t&&(a=a.filter((function(e){return e.tourneyId===t._id}))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{tourney:t,isCurTourney:!0}),a.length?r.a.createElement(J,{matches:a,tourneyRound:t.roundNum}):r.a.createElement(P.a,{variant:"body1",style:{marginTop:"2rem"}},"You Have No Matches")):r.a.createElement(H,null)}function Y(e){e.state,e.dispatch;return r.a.createElement("h1",null,"TODO: This is the PrevTourneyScreen")}function K(){var e=Object(n.useContext)(u),t=e.state,a=e.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{variant:"fullWidth",value:t.ui.matchesTab,className:"margin-bottom-1rem",onChange:function(e,t){return a({type:f.UPDATE_UI_MATCHES_TAB,payload:t})}},r.a.createElement(D.a,{value:"current",label:"Current Tourney"}),r.a.createElement(D.a,{value:"previous",label:"Previous Tourneys"})),r.a.createElement(U,{value:t.ui.matchesTab,index:"current"},r.a.createElement($,null)),r.a.createElement(U,{value:t.ui.matchesTab,index:"previous"},r.a.createElement(Y,null)))}var q=a(153),Q=a(180),X=a(150),Z=a(154),ee=a(80),te=a(189),ae=a(190),ne=a(149),re=a(184),ce=Object(ee.a)(te.a)({flexDirection:"row"});function le(e){var t=e.round,a=e.onChange;return t&&a&&t?r.a.createElement(ae.a,{component:"fieldset"},r.a.createElement(ne.a,{component:"legend"},"Round"),r.a.createElement(ce,{value:""+t,onChange:a},r.a.createElement(X.a,{value:"1",control:r.a.createElement(re.a,{color:"primary"}),label:"1"}),r.a.createElement(X.a,{value:"2",control:r.a.createElement(re.a,{color:"primary"}),label:"2"}),r.a.createElement(X.a,{value:"3",control:r.a.createElement(re.a,{color:"primary"}),label:"3"}),r.a.createElement(X.a,{value:"4",control:r.a.createElement(re.a,{color:"primary"}),label:"4"}))):null}var oe=a(183);function ie(e){var t=e.leaderboard,a=e.onChange,c=Object(n.useRef)(t.map((function(e){return{name:e.name,playerId:e.playerId}})).sort((function(e,t){return e.name<t.name?-1:1})));return r.a.createElement(oe.a,{multiple:!0,autoComplete:!0,autoHighlight:!0,filterSelectedOptions:!0,style:{width:"100%",marginBottom:"8rem"},options:c.current,getOptionLabel:function(e){return e.name},onChange:a,renderInput:function(e){return r.a.createElement(Q.a,Object.assign({},e,{variant:"outlined",label:"Select Players",margin:"normal"}))}})}function ue(){var e=Object(n.useContext)(u),t=e.state,a=e.dispatch,c=t.curTourney,l=t.settings,o=t.newMatchData,i=function(){var e=o.moneyPerSkin,t=o.selectedPlayerIds;return!t||(e=parseInt(e),t.length<2||isNaN(e)||e<0)}();return Object(n.useEffect)((function(){if(c){var e,t=l.deviceId,n=l.username,r=l.carrySkins,o=l.moneyPerSkin,i=c._id,u=c.title;a({type:f.UPDATE_NEW_MATCH_DATA,payload:{deviceId:t,username:n,carrySkins:r,moneyPerSkin:o,tourneyId:i,tourneyTitle:u,roundNum:(e=c,e.isStarted?e.isFinished?"4":e.curRound.toString():"1")}})}}),[c,a,l]),Object(n.useEffect)((function(){a({type:f.UPDATE_UI_SAVE_BTN,payload:i})}),[i,a]),c&&void 0!==o.carrySkins?r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{title:"New Match",subheader:c.title}),r.a.createElement(q.a,{className:"flex-col-ctr"},r.a.createElement(le,{round:o.roundNum,onChange:function(e,t){a({type:f.UPDATE_NEW_MATCH_DATA,payload:{roundNum:t}})},color:"primary"}),r.a.createElement(Q.a,{label:"Money Per Skin",type:"number",variant:"outlined",min:"1",step:"1",margin:"normal",value:o.moneyPerSkin,onChange:function(e){a({type:f.UPDATE_NEW_MATCH_DATA,payload:{moneyPerSkin:e.target.value?parseInt(e.target.value):""}})},color:"primary"}),r.a.createElement(X.a,{margin:"normal",label:"Carry Over Skins?",className:"MuiFormLabel-root",control:r.a.createElement(Z.a,{value:"carrySkins",checked:o.carrySkins,onChange:function(e){e.target&&a({type:f.UPDATE_NEW_MATCH_DATA,payload:{carrySkins:e.target.checked}})},color:"primary"})}),r.a.createElement(ie,{leaderboard:c.leaderboard,onChange:function(e,t){a({type:f.UPDATE_NEW_MATCH_DATA,payload:{selectedPlayerIds:t.map((function(e){return e.playerId}))}})}}))):r.a.createElement(H,null)}a(106);var se=new Array(18).fill(null).map((function(e){return r.a.createElement("div",null)})),me=new Array(10).fill(null).map((function(e,t){return r.a.createElement("div",{className:"MatchGrid-spacer",key:t})}));function de(e){var t=e[e.lastIndexOf(" ")+1];return"".concat(e[0]).concat(t).toUpperCase()}function Ee(e){var t,a,n,c=e.match,l=c.players.find((function(e){return e.round&&e.round.holes&&e.round.holes.length}));l&&(a=(t=l.round.holes.map((function(e,t){return{holeNum:t+1,par:e.par}}))).filter((function(e){return e.holeNum<10})),n=t.filter((function(e){return e.holeNum>9})));var o=c.players.map((function(e){return{name:e.name,initials:de(e.name),holes:e.round.holes&&e.round.holes.length?e.round.holes.map((function(e,t){return r.a.createElement("div",{className:"player-hole-container flex-col-ctr",key:t},r.a.createElement("span",{className:"player-hole flex-col-ctr",style:{color:"var(--dark-green-text)",borderColor:(e.skin||e.carry)&&"var(--light-green)",backgroundColor:e.skin&&"var(--pale-green-bg)"}},e.strokes))})):se}}));return r.a.createElement("main",{id:"match-grid"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null),a.map((function(e){return r.a.createElement(P.a,{variant:"caption",key:e.holeNum,className:"hole"},e.holeNum,r.a.createElement("br",null),r.a.createElement("span",{className:"par"},e.par))})),o.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement("div",{className:"MatchGrid-initials flex-col-ctr",key:e.name},e.initials),e.holes.filter((function(e,t){return t<9})))})),me,r.a.createElement("span",null),n.map((function(e){return r.a.createElement(P.a,{variant:"caption",key:e.holeNum,className:"hole"},e.holeNum,r.a.createElement("br",null),r.a.createElement("span",{className:"par"},e.par))})),o.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement("div",{className:"MatchGrid-initials flex-col-ctr",key:e.name},e.initials),e.holes.filter((function(e,t){return t>8})))}))):r.a.createElement(P.a,{variant:"body1",style:{margin:"2rem auto",gridColumn:"span 10"}},"No Player Has Started Their Round Yet"))}var he=a(155),pe=a(156),fe=a(157),ve=a(158),ye=a(159),Te=a(160);a(107);function ge(e){var t=e[e.lastIndexOf(" ")+1];return"".concat(e[0]).concat(t).toUpperCase()}function Se(e){var t=e.match.players.map((function(e){return{name:e.name,initials:ge(e.name),money:e.money,numSkins:e.round.holes.reduce((function(e,t){return t.skin||t.carry?e+1:e}),0)}}));return r.a.createElement(he.a,{className:"MatchSummary"},r.a.createElement(pe.a,{id:"match-summary-table",size:"small"},r.a.createElement(fe.a,null,r.a.createElement(ve.a,null,r.a.createElement(ye.a,{colSpan:2},"Player"),r.a.createElement(ye.a,{align:"center"},"Skins"),r.a.createElement(ye.a,{align:"center"},"Money"))),r.a.createElement(Te.a,null,t.map((function(e){return r.a.createElement(ve.a,{key:e.name},r.a.createElement(ye.a,{align:"center"},e.initials),r.a.createElement(ye.a,null,e.name),r.a.createElement(ye.a,{align:"center"},e.numSkins),r.a.createElement(ye.a,{align:"center",style:(t=e.money,t<0?{color:"var(--dark-red)"}:t>0?{color:"var(--green)"}:{color:"var(--dark-green-text)"})},function(e){var t=Math.abs(e);return e<0?" ".concat("\u25bc","$").concat(t):e>0?" ".concat("\u25b2","$").concat(t):" $".concat(t)}(e.money)));var t})))))}a(108);function Ae(e){var t,a=e.match,n=e.tourneyRound;t=a.completed?"completed":a.roundNum===n?"in progress":"pending";var c=new Date(a.createdAt).toLocaleString().split("");c.splice(c.length-6,3).join("");var l=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Round ".concat(a.roundNum)),r.a.createElement("br",null),r.a.createElement("span",null,"$","".concat(a.moneyPerSkin,"/skin (").concat(t,")")));return r.a.createElement("main",{id:"match-card"},r.a.createElement(R.a,{title:a.tourneyTitle,subheader:l}),r.a.createElement(Ee,{match:a}),r.a.createElement(Se,{match:a}),r.a.createElement(P.a,{variant:"caption",id:"MatchCard-created-by"},"Created by ",a.username," on ",c))}function _e(){var e=Object(i.h)().id,t=Object(n.useContext)(u),a=t.state,c=t.dispatch,l=a.viewingMatch,o=a.curTourney;return Object(n.useEffect)((function(){return w.viewMatch(e,c),function(){w.stopViewingMatch(e)}}),[e,c]),l&&o?r.a.createElement(Ae,{match:l,tourneyRound:o.curRound}):r.a.createElement(P.a,{variant:"body1",style:{marginTop:"2rem"}},"Sorry",r.a.createElement("br",null),"Match No Longer Exists")}function Ce(){var e=Object(n.useContext)(u).state.settings;e.deviceId,e.username,e.moneyPerSkin,e.carrySkins;return r.a.createElement(P.a,{variant:"h2"},"Settings Screen")}var be=a(171),Me=a(172),Ne=a(165),we=a(187),Ie=a(170),Oe=a(186),ke=a(161),De=a(162),Pe=a(163),Ue=a(164);function je(e){var t=e.isConfirmOpen,a=e.handleClose,n=e.title,c=e.dialogContent,l=e.confirmBtnText;return r.a.createElement(Oe.a,{open:t,title:n},r.a.createElement(ke.a,null,n),r.a.createElement(De.a,null,r.a.createElement(Pe.a,null,c)),r.a.createElement(Ue.a,null,r.a.createElement(Ne.a,{onClick:function(){return a(!1)}},"Cancel"),r.a.createElement(Ne.a,{onClick:function(){return a(!0)}},l||"Yes")))}var He=a(166);function Re(e){var t=e.handleClick,a=e.disabled;return r.a.createElement(Ne.a,{startIcon:r.a.createElement(He.a,null),variant:"outlined",size:"small",onClick:t,disabled:a},"SAVE")}var xe=a(167);function We(e){var t=e.handleCancel;return r.a.createElement(Ne.a,{onClick:t,startIcon:r.a.createElement(xe.a,null),variant:"outlined",size:"small"},"CANCEL")}var Ge=a(168);function Le(e){var t=e.handleShare;return r.a.createElement(Ne.a,{onClick:t,startIcon:r.a.createElement(Ge.a,null),variant:"outlined",size:"small"},"SHARE")}var Be=a(169);function Ve(e){var t=e.handleDelete;return r.a.createElement(Ne.a,{onClick:t,startIcon:r.a.createElement(Be.a,null),variant:"outlined",size:"small"},"DELETE")}function Fe(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),d=s[0],E=s[1],h=Object(n.useContext)(u),p=h.state,v=h.dispatch,y=p.ui,T=Object(i.g)().pathname,g=Object(i.f)(),S=Object(n.useRef)(null);if("/"===T)return"current"===y.matchesTab?r.a.createElement(Ne.a,{onClick:function(){return g.push("/matches/new")},startIcon:r.a.createElement(Ie.a,null),variant:"outlined",size:"small"},"MATCH"):r.a.createElement(Ne.a,{onClick:function(){return window.localStorage.clear()},variant:"outlined",size:"small"},"TEMP CLEAR LOCALSTORAGE");if("/matches/new"===T)return r.a.createElement("span",null,r.a.createElement(We,{handleCancel:function(){g.goBack()}}),"\xa0",r.a.createElement(Re,{handleClick:function(){w.createMatch(p.newMatchData,(function(e,t){v({type:f.CREATE_MATCH,payload:t}),g.push("/matches/".concat(t._id))}))},disabled:y.saveBtnDisabled}));if(T.startsWith("/matches/")){if(!p.viewingMatch)return null;var A=m.getSettings().deviceId===p.viewingMatch.deviceId;return r.a.createElement("span",null,r.a.createElement(Ve,{handleDelete:function(){return E(!0)}}),"\xa0",r.a.createElement(Le,{handleShare:function(e){S.current.select(),document.execCommand("copy"),c(!0)}}),r.a.createElement("input",{ref:S,onFocus:function(e){return e.target.blur()},defaultValue:window.location.href,style:{position:"absolute",marginTop:-999}}),r.a.createElement(we.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:a,onClose:function(){return c(!1)},autoHideDuration:3e3,message:"Copied Match Link to the Clipboard"}),r.a.createElement(je,{isConfirmOpen:d,handleClose:function(e){return function(e,t,a){E(!1),e&&(w.deleteMatch(t,a),g.replace("/"))}(e,p.viewingMatch._id,A)},title:"Confirm Delete",dialogContent:A?"Permanently delete this match that you created?":"Remove the match from your list?",confirmBtnText:"Delete Match"}))}return null}function ze(){return r.a.createElement(be.a,{position:"sticky"},r.a.createElement(Me.a,{className:"justify-content-between"},r.a.createElement(P.a,{variant:"h6"},"PGA SKINS"),r.a.createElement(Fe,null)))}var Je=a(173),$e=a(174),Ye=a(175),Ke=a(176);function qe(){var e=Object(i.f)(),t=Object(i.g)().pathname;return r.a.createElement(Je.a,{value:t,onChange:function(t,a){return e.push(a)},showLabels:!0},r.a.createElement($e.a,{value:"/",label:"Matches",icon:r.a.createElement(Ye.a,null)}),r.a.createElement($e.a,{value:"/settings",label:"Settings",icon:r.a.createElement(Ke.a,null)}))}var Qe=function(){return r.a.createElement(O.a,{className:"GWBM_grid"},r.a.createElement(ze,null),r.a.createElement(O.a,{className:"GWBM_content"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/matches/new",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(i.a,{path:"/matches/:id",render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(i.a,{path:"/settings",render:function(){return r.a.createElement(Ce,null)}}),r.a.createElement(i.a,{path:"/",render:function(){return r.a.createElement(K,null)}}))),r.a.createElement(qe,null))},Xe=(a(109),a(177));var Ze=function(e){var t=Object(i.f)(),a=Object(n.useContext)(u).dispatch,c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],d=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{variant:"h4",className:"text-center",style:{marginBottom:"2rem"}},"Welcome to",r.a.createElement("br",null),"PGA SKINS!"),r.a.createElement(P.a,{variant:"body2",className:"text-center"},"Please enter the user name you want others to see when viewing a skins match created by you:",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(Q.a,{autoComplete:"off",variant:"outlined",placeholder:"User Name",fullWidth:!0,value:s,onChange:function(e){return d(e.target.value)}}),r.a.createElement(Ne.a,{onClick:function(){m.updateUsername(s,a),t.push("/")},disabled:s.length<3||s.length>20,style:{marginTop:"1rem"},variant:"contained"},"SUBMIT"))};var et=function(){return r.a.createElement(O.a,{className:"GNM_grid"},r.a.createElement(ze,null),r.a.createElement(Xe.a,{className:"flex-col-ctr"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/welcome",render:function(){return r.a.createElement(Ze,null)}}))))};function tt(){var e=Object(i.f)(),t=Object(n.useReducer)(y,p),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){var t=I.setCurTourney(l,36e5);return w.setDispatch(l),w.syncMatchesWithServer(),m.initialize(l)&&e.replace("/welcome"),function(){clearInterval(t)}}),[]),r.a.createElement(u.Provider,{value:{state:c,dispatch:l}},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/welcome",render:function(){return r.a.createElement(et,null)}}),r.a.createElement(i.a,{path:"/",render:function(){return r.a.createElement(Qe,null)}})))}a(110),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var at=a(79),nt=a(178),rt=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(rt,"px")),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}));var ct=Object(at.a)({palette:{primary:{main:"#d5dcd6",contrastText:"#051907"},secondary:{main:"#d8dae8",contrastText:"#051907"}},overrides:{MuiBottomNavigationAction:{root:{color:"white","&$selected":{color:"#051907"}}},MuiBottomNavigation:{root:{backgroundColor:"#d5dcd6"}}}},"Minty Green");l.a.render(r.a.createElement(W.a,null,r.a.createElement(i.a,{path:"/",render:function(){return r.a.createElement(nt.a,{theme:ct},r.a.createElement(tt,null))}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},93:function(e,t,a){e.exports=a(111)},99:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.e9410d1b.chunk.js.map