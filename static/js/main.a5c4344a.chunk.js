(this["webpackJsonpgame-of-third"]=this["webpackJsonpgame-of-third"]||[]).push([[0],{183:function(e,t,i){},185:function(e,t,i){},212:function(e,t,i){},231:function(e,t,i){},232:function(e,t,i){},288:function(e,t,i){"use strict";i.r(t);var a,n=i(5),s=i(0),o=i.n(s),c=i(20),r=i.n(c),l=(i(183),i(41)),u=(i(86),i(184),i(171)),h=i(24),m=i(26),d=i(45),j=i(63),b=i(62),g=(i(185),i(295)),v=i(66),f=i(298),O=function(e){Object(j.a)(i,e);var t=Object(b.a)(i);function i(e){var a;return Object(m.a)(this,i),(a=t.call(this,e)).game=a.props.game,a.state={enterRoomNumberVisible:!1},a}return Object(d.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.game.onCreated((function(t){return e.moveToGameBoard(t)})),this.game.onAccepted((function(t){return e.moveToGameBoard(t)}))}},{key:"initializeNewGame",value:function(){this.game.create()}},{key:"joinExistingGame",value:function(e){this.game.join(e)}},{key:"moveToGameBoard",value:function(e){this.props.history.push("/play/".concat(e.roomId))}},{key:"render",value:function(){var e=this,t=g.a.Search;return Object(n.jsx)("div",{className:"col-12 flex v-center",children:Object(n.jsx)("div",{className:"col-4 onboarding-container v-center flex",children:Object(n.jsxs)("div",{className:"button-container w-100 flex",children:[Object(n.jsx)(v.a,{className:"menu-button",onClick:this.initializeNewGame.bind(this),type:"primary",block:!0,children:"New Game"}),Object(n.jsx)(f.a,{content:Object(n.jsx)(o.a.Fragment,{children:Object(n.jsx)(t,{onSearch:function(t){return e.joinExistingGame(t)},placeholder:"Room ID",enterButton:!0})}),title:"Join a Room",trigger:"click",visible:this.state.enterRoomNumberVisible,children:Object(n.jsx)(v.a,{className:"menu-button",onClick:function(){return e.setState({enterRoomNumberVisible:!e.state.enterRoomNumberVisible})},block:!0,children:"Join"})}),Object(n.jsx)(v.a,{className:"menu-button",block:!0,children:"Settings"})]})})})}}]),i}(o.a.Component),p=i(176),y=i(299),x=i(300),E=i(291),N=i(294),S=i(296),k=(i(212),i(297)),A=i(160),C=function(e){Object(j.a)(i,e);var t=Object(b.a)(i);function i(){return Object(m.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){var e=this.props,t=e.previousValue,i=e.playedMove,a=e.remainder,s=e.isSelf;return Object(n.jsxs)(A.a,{className:"single-move-container ".concat(s?"self":"opponent"),children:[-1===i&&Object(n.jsx)(o.a.Fragment,{children:Object(n.jsxs)("div",{className:"flex s-move-container",children:[Object(n.jsx)(k.a,{message:"Decreased",type:"error"}),Object(n.jsxs)("div",{className:"calculation-container",children:[Object(n.jsxs)(y.a,{className:"previous-tag",color:"magenta",children:[t," - ",1]}),Object(n.jsx)(y.a,{className:"fit",color:"blue",children:"/"}),Object(n.jsx)(y.a,{className:"previous-tag",color:"magenta",children:"3"}),Object(n.jsx)(y.a,{className:"fit",color:"blue",children:"="}),Object(n.jsx)(y.a,{className:"previous-tag",color:"magenta",children:a})]})]})}),0===i&&Object(n.jsx)(o.a.Fragment,{children:Object(n.jsxs)("div",{className:"flex s-move-container",children:[Object(n.jsx)(k.a,{message:"Passed",type:"info"}),Object(n.jsxs)("div",{className:"calculation-container",children:[Object(n.jsxs)(y.a,{className:"previous-tag",color:"magenta",children:[t," + ",0]}),Object(n.jsx)(y.a,{className:"fit",color:"blue",children:"/"}),Object(n.jsx)(y.a,{className:"previous-tag",color:"magenta",children:"3"}),Object(n.jsx)(y.a,{className:"fit",color:"blue",children:"="}),Object(n.jsx)(y.a,{className:"previous-tag",color:"magenta",children:a})]})]})}),1===i&&Object(n.jsx)(o.a.Fragment,{children:Object(n.jsxs)("div",{className:"flex s-move-container",children:[Object(n.jsx)(k.a,{message:"Increased",type:"success"}),Object(n.jsxs)("div",{className:"calculation-container",children:[Object(n.jsxs)(y.a,{className:"previous-tag",color:"magenta",children:[t," + ",1]}),Object(n.jsx)(y.a,{className:"fit",color:"blue",children:"/"}),Object(n.jsx)(y.a,{className:"previous-tag",color:"magenta",children:"3"}),Object(n.jsx)(y.a,{className:"fit",color:"blue",children:"="}),Object(n.jsx)(y.a,{className:"previous-tag",color:"magenta",children:a})]})]})})]})}}]),i}(o.a.Component),I=(i(231),i(304)),M=i(292),R=i(290),P=i(293),T=i(301),_=i(302),V=i(303);!function(e){e[e.DECREASE_BY_ONE=-1]="DECREASE_BY_ONE",e[e.PASS=0]="PASS",e[e.INCREASE_BY_ONE=1]="INCREASE_BY_ONE"}(a||(a={}));var w,D=[{name:"increaseByOne",title:"Increase by One",icon:T.a,value:a.INCREASE_BY_ONE},{name:"pass",title:"Pass",icon:_.a,value:a.PASS},{name:"decreaseByOne",title:"Decrease by One",icon:V.a,value:a.DECREASE_BY_ONE}];!function(e){e.ROOM_CREATED="room-created",e.GAME_STARTED="game-started",e.USER_JOINED="user-joined",e.MOVE_RECEIVED="move-received",e.GAME_ACCEPTED="game-accepted",e.CREATE_GAME="create-game",e.JOIN_GAME="join-game",e.MOVE="make-move",e.INITIALIZE="initialize"}(w||(w={}));i(232);var G=function(e){Object(j.a)(i,e);var t=Object(b.a)(i);function i(){return Object(m.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"calculatePossibleMoves",value:function(){var e=this.props.game,t=e.currentValue,i=e.gameStrategy,a=e.possibility;return D.filter((function(e){return a.isPossible(t,e.value,i)}))}},{key:"render",value:function(){var e=this,t=this.props.currentValue,i=this.calculatePossibleMoves().map((function(e){return e.value}));return this.props.game.isStarted?Object(n.jsx)(M.a,{children:Object(n.jsxs)("div",{className:"current-status",children:[Object(n.jsx)(P.a,{className:"statistics",title:"Current Value",value:t,valueStyle:{color:"#3f8600"},prefix:Object(n.jsx)(I.a,{})}),Object(n.jsx)("div",{className:"controls",children:D.map((function(t,a){return Object(n.jsx)(p.a,{title:t.title,children:Object(n.jsx)(v.a,{onClick:function(){return e.props.onMoveHandler(t.value)},className:"control-button",disabled:!i.includes(t.value)||!e.props.game.isSelf,type:"primary",shape:"circle",icon:Object(n.jsx)(t.icon,{})})},a)}))})]})}):Object(n.jsx)(M.a,{children:Object(n.jsxs)("div",{className:"waiting-card",children:[Object(n.jsx)(R.a,{className:"spinner",size:"default"}),Object(n.jsxs)("div",{className:"tags",children:[Object(n.jsx)(y.a,{className:"tag",color:"magenta",children:"Waiting for Opponent"}),Object(n.jsx)(y.a,{onClick:function(){return e.props.onAutoPlayChange(!0)},className:"tag",color:"magenta",children:"Use Auto - Play Instead?"})]})]})})}}]),i}(o.a.Component),J=i(305),F=i(306),B=function(e){Object(j.a)(i,e);var t=Object(b.a)(i);function i(e){var a;return Object(m.a)(this,i),(a=t.call(this,e)).game=a.props.game,a.moves=a.game.moves,a.state={isSelf:a.game.isHost,isAuto:a.isAuto()},a}return Object(d.a)(i,[{key:"isAuto",value:function(){return"auto"===this.game.mode}},{key:"componentDidMount",value:function(){var e=this;this.game.onMoveReceived((function(t){return e.onMovePlayed(t)})),this.game.onStarted((function(){return e.setState(Object(l.a)(Object(l.a)({},e.game),{},{isAuto:e.isAuto()}))}))}},{key:"move",value:function(e){this.game.move(e)}},{key:"onMovePlayed",value:function(e){this.setState(Object(l.a)(Object(l.a)({},this.game),{},{isAuto:this.isAuto()})),this.isAiTurn()&&this.playAI()}},{key:"isAiTurn",value:function(){return this.isAuto()&&!this.state.isSelf&&!this.game.isFinished}},{key:"playAI",value:function(){var e=this.props.game,t=e.currentValue,i=e.gameStrategy,a=e.possibility,n=D.filter((function(e){return a.isPossible(t,e.value,i)})),s=n[Math.floor(Math.random()*n.length)];this.move(s.value)}},{key:"goToHomePage",value:function(){window.location.href="/game-of-third"}},{key:"changeAutoPlay",value:function(e){e?(this.props.game.mode="auto",this.game.onUserJoined()):this.props.game.mode="manuel",this.setState({isAuto:e})}},{key:"render",value:function(){var e=this,t=this.props.match.params.id;return Object(n.jsxs)("div",{className:"col-12 flex v-center main-container",children:[Object(n.jsxs)("div",{className:"col-4 game-board-container flex",children:[Object(n.jsx)(p.a,{title:"Share this with your friends and play together!",children:Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)(y.a,{className:"game-id-tag",color:"blue",children:t}),!this.props.game.isStarted&&Object(n.jsx)(x.a,{onChange:function(t){return e.changeAutoPlay(t)},checked:this.state.isAuto,className:"auto-play-switch",checkedChildren:"Auto Play",unCheckedChildren:"Auto Play",defaultChecked:!0})]})}),Object(n.jsx)(E.a,{dashed:!0}),Object(n.jsx)("div",{className:"moves flex",children:this.moves.map((function(e,t){return Object(n.jsx)(C,{previousValue:e.before,playedMove:e.played,remainder:e.after,isSelf:e.isSelf},t)}))}),Object(n.jsx)("div",{className:"current-number",children:Object(n.jsx)(G,{onAutoPlayChange:this.changeAutoPlay.bind(this),currentValue:this.game.currentValue,game:this.game,onMoveHandler:this.move.bind(this)})})]}),Object(n.jsxs)(N.a,{title:"The End",visible:this.game.isFinished&&!this.state.isSelf,onCancel:function(){return e.goToHomePage()},footer:[Object(n.jsx)(v.a,{type:"primary",onClick:function(){return e.goToHomePage()},children:"Return to Lobby"},"back")],children:[Object(n.jsx)(S.a,{icon:Object(n.jsx)(J.a,{}),title:"Congrats! You are the champion!"}),","]}),Object(n.jsxs)(N.a,{title:"The End",visible:this.game.isFinished&&this.state.isSelf,onCancel:function(){return e.goToHomePage()},footer:[Object(n.jsx)(v.a,{type:"primary",onClick:function(){return e.goToHomePage()},children:"Return to Lobby"},"back")],children:[Object(n.jsx)(S.a,{icon:Object(n.jsx)(F.a,{}),title:"Sorry, not this time."}),","]})]})}}]),i}(o.a.Component),H=function e(){Object(m.a)(this,e),this.log=function(e){return console.log(e)}},U=i(170),W=function(){function e(){var t=this;Object(m.a)(this,e),this.possibility=void 0,this.isHost=!1,this.isSelf=null,this.isStarted=!1,this.roomId=void 0,this.isFinished=!1,this.players=[],this.mode=void 0,this.socket=this.getWebSocket(),this.winStrategy=void 0,this.gameStrategy=void 0,this.currentValue=void 0,this.moves=[],this.logger=void 0,this.addPlayer=function(e){return t.players.push(e),t.players},this.socket.on(w.USER_JOINED,this.onUserJoined.bind(this))}return Object(d.a)(e,[{key:"create",value:function(){this.reset(),this.logger.log("Create Event Emitted"),this.isHost=!0,this.socket.emit(w.CREATE_GAME)}},{key:"join",value:function(e){this.reset(),this.logger.log("Join Event Emitted: ".concat(e)),this.isHost=!1,this.socket.emit(w.JOIN_GAME,{roomId:e})}},{key:"move",value:function(e){this.logger.log("Move Event Emitted: ".concat(e));var t=this.gameStrategy.play({before:this.currentValue,played:e}),i=this.winStrategy.hasWon(t.after),a=this.roomId;this.socket.emit(w.MOVE,Object(l.a)(Object(l.a)({},t),{},{isFinished:i,roomId:a}))}},{key:"onCreated",value:function(e){var t=this;this.socket.on(w.ROOM_CREATED,(function(i){t.logger.log("OnCreated Event Received: ".concat(JSON.stringify(i))),t.roomId=i.roomId,e&&e(i)}))}},{key:"onAccepted",value:function(e){var t=this;this.socket.on(w.GAME_ACCEPTED,(function(i){t.logger.log("onAccepted Event Received: ".concat(JSON.stringify(i))),t.roomId=i.roomId,e&&e(i)}))}},{key:"onStarted",value:function(e){var t=this;this.socket.on(w.GAME_STARTED,(function(i){t.logger.log("onStarted Event Received: ".concat(JSON.stringify(i))),t.isStarted=!0,t.isSelf=t.isHost,t.currentValue=i.initialValue,e&&e(i)}))}},{key:"onMoveReceived",value:function(e){var t=this;this.socket.on(w.MOVE_RECEIVED,(function(i){t.logger.log("MoveReceived Event Received: ".concat(JSON.stringify(i))),t.isFinished=i.isFinished,t.currentValue=i.after,t.moves.push(Object(l.a)(Object(l.a)({},i),{},{isSelf:t.isSelf})),t.isSelf=!t.isSelf,e&&e(i)}))}},{key:"onUserJoined",value:function(){this.logger.log("onUserJonined Event Received");var e=Math.floor(1e5*Math.random()+1e4);this.logger.log("Initialize Event Emitted"),this.socket.emit(w.INITIALIZE,{initialValue:e,roomId:this.roomId})}},{key:"getWebSocket",value:function(){return Object(U.io)("".concat("umutcankus.me").concat(""),{secure:!0})}},{key:"reset",value:function(){this.currentValue=0,this.isStarted=!1,this.isSelf=null,this.isHost=!1,this.isFinished=!1,this.players=[],this.moves=[]}}]),e}(),Y=function e(){Object(m.a)(this,e),this.play=function(e){return{before:e.before,played:e.played,after:(e.before+e.played)/3}}},L=function e(){Object(m.a)(this,e),this.isPossible=function(e,t,i){return Number.isInteger(i.play({before:e,played:t}).after)}},z=function e(){Object(m.a)(this,e),this.hasWon=function(e){return 1==e}},Z=function(){function e(){Object(m.a)(this,e),this.game=new W}return Object(d.a)(e,[{key:"build",value:function(){return this.game.gameStrategy=this.buildGameStrategy(),this.game.possibility=this.buildPossibility(),this.game.winStrategy=this.buildWinStrategy(),this.game.mode=this.buildMode(),this.game.logger=new H,this.game}},{key:"buildGameStrategy",value:function(){return new Y}},{key:"buildPossibility",value:function(){return new L}},{key:"buildMode",value:function(){return"manuel"}},{key:"buildWinStrategy",value:function(){return new z}}]),e}();var q=function(){var e=(new Z).build();return Object(n.jsxs)(u.a,{basename:"/game-of-third",children:[Object(n.jsx)(h.a,{path:"/",exact:!0,render:function(t){return Object(n.jsx)(O,Object(l.a)(Object(l.a)({},t),{},{game:e}))}}),Object(n.jsx)(h.a,{path:"/play/:id",render:function(t){return Object(n.jsx)(B,Object(l.a)(Object(l.a)({},t),{},{game:e}))}})]})},K=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,307)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;i(e),a(e),n(e),s(e),o(e)}))};r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root")),K()},86:function(e,t,i){}},[[288,1,2]]]);
//# sourceMappingURL=main.a5c4344a.chunk.js.map