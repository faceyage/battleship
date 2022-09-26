(()=>{"use strict";var r={426:(r,e,t)=>{t.d(e,{Z:()=>i});var n=t(81),a=t.n(n),o=t(645),s=t.n(o)()(a());s.push([r.id,'/* General Styles */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font: inherit;\r\n}\r\n\r\nhtml {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n:root {\r\n  --bg-color: #374253;\r\n  --secondary-color: #0f172a;\r\n  --text-color: white;\r\n}\r\n\r\nbody {\r\n  background-color: var(--bg-color);\r\n  color: var(--text-color);\r\n}\r\n/*  */\r\n\r\n/* Content */\r\n\r\n.content {\r\n  padding: 10px;\r\n}\r\n\r\n.logo {\r\n  font-family: "Courier New", Courier, monospace;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 80px;\r\n}\r\n\r\n/* Game area */\r\n\r\n.gameArea {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 2rem;\r\n  gap: 15%;\r\n}\r\n\r\n.gameboard {\r\n  display: flex;\r\n  /* display: grid;\r\n  grid-template-columns: repeat(10, 1fr); */\r\n  width: 600px;\r\n  height: 600px;\r\n}\r\n\r\n.column {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* stlyes for sqr ship and sunk */\r\n\r\n.sqr {\r\n  flex: 1;\r\n  border: 1px solid black;\r\n  background-color: rgb(61, 61, 132);\r\n}\r\n\r\n.hasShip {\r\n  background-color: #4ade80;\r\n}\r\n\r\n.shot {\r\n  background-color: hsl(0, 72%, 51%);\r\n}\r\n\r\n.miss {\r\n  background-color: #6b7280;\r\n}\r\n\r\n.gameOver {\r\n  width: 40%;\r\n  height: 40%;\r\n  background-color: var(--secondary-color);\r\n\r\n  position: absolute;\r\n  top: 25%;\r\n  left: 30%;\r\n\r\n  font-weight: bold;\r\n  font-size: 3rem;\r\n  border-radius: 1.2rem;\r\n  /* center text */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.btn {\r\n  width: 220px;\r\n  height: 80px;\r\n  background-color: var(--bg-color);\r\n  color: var(--text-color);\r\n  font-weight: bold;\r\n  border-radius: 0.9rem;\r\n  border: none;\r\n  font-size: 25px;\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n.blur {\r\n  filter: blur(8px);\r\n  pointer-events: none;\r\n}\r\n\r\n#ai_board .sqr:hover:not(.miss):not(.shot):not(.hasShip) {\r\n  background-color: #111827;\r\n  border-radius: 1px;\r\n}\r\n\r\n.hover {\r\n  background-color: #111827;\r\n  border-radius: 1px;\r\n}\r\n\r\n#ai_board {\r\n  cursor: crosshair;\r\n}\r\n\r\n/* style for draggable ships */\r\n\r\n.ships {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  gap: 20px;\r\n  border-radius: 1.2rem;\r\n\r\n  margin-left: 10px;\r\n  border: none;\r\n  width: 700px;\r\n  height: 400px;\r\n  font-weight: bold;\r\n  font-size: large;\r\n  padding: 20px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.ship {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.vertical {\r\n  flex-direction: column;\r\n  align-self: flex-start;\r\n}\r\n\r\n.part {\r\n  width: 58px;\r\n  height: 58px;\r\n  border: 1px solid black;\r\n  background-color: #475569;\r\n}\r\n\r\n.startGameBtn,\r\n.randomPlaceBtn {\r\n  background-color: var(--secondary-color);\r\n  position: relative;\r\n  left: 40%;\r\n}\r\n',""]);const i=s},645:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var t="",n=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),n&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=r(e),n&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(r,t,n,a,o){"string"==typeof r&&(r=[[null,r,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(s[d]=!0)}for(var c=0;c<r.length;c++){var l=[].concat(r[c]);n&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var e=[];function t(r){for(var t=-1,n=0;n<e.length;n++)if(e[n].identifier===r){t=n;break}return t}function n(r,n){for(var o={},s=[],i=0;i<r.length;i++){var d=r[i],c=n.base?d[0]+n.base:d[0],l=o[c]||0,h="".concat(c," ").concat(l);o[c]=l+1;var p=t(h),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=a(u,n);n.byIndex=i,e.splice(i,0,{identifier:h,updater:m,references:1})}s.push(h)}return s}function a(r,e){var t=e.domAPI(e);return t.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;t.update(r=e)}else t.remove()}}r.exports=function(r,a){var o=n(r=r||[],a=a||{});return function(r){r=r||[];for(var s=0;s<o.length;s++){var i=t(o[s]);e[i].references--}for(var d=n(r,a),c=0;c<o.length;c++){var l=t(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:r=>{var e={};r.exports=function(r,t){var n=function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}e[r]=t}return e[r]}(r);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},565:(r,e,t)=>{r.exports=function(r){var e=t.nc;e&&r.setAttribute("nonce",e)}},380:r=>{r.exports=function(r){var e=r.insertStyleElement(r);return{update:function(t){!function(r,e,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,a&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,r,e.options)}(e,r,t)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},589:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}},e={};function t(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={id:n,exports:{}};return r[n](o,o.exports,t),o.exports}t.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return t.d(e,{a:e}),e},t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t.nc=void 0,(()=>{var r=t(379),e=t.n(r),n=t(380),a=t.n(n),o=t(569),s=t.n(o),i=t(565),d=t.n(i),c=t(216),l=t.n(c),h=t(589),p=t.n(h),u=t(426),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;const g=class{constructor(r,e,t,n){this.length=r,this.health=r,this.coord={startX:e,startY:t,endX:n?e+1:e+r,endY:n?t+r:t+1}}hit(){this.health<=0&&console.error("Ship is already dead you can't damage more!"),this.health--}isSunk(){return 0===this.health}},f=class{constructor(r,e,t){this.name=e,this.isAI=r,this.isMyTurn=t,this.gameBoard=new class{constructor(){this.board=this.#r()}#r(){const r=[];for(let e=0;e<10;e++){r.push([]);for(let t=0;t<10;t++)r[e].push({hasShip:!1,isShot:!1})}return r}addShip(r){for(let e=r.coord.startX;e<r.coord.endX;e++)for(let t=r.coord.startY;t<r.coord.endY;t++)this.board[e][t].hasShip=!0}receiveAttack(r,e){return this.board[r][e].isShot?(console.log("position already attacked!"),!1):(this.board[r][e].isShot=!0,!0)}isGameOver(){for(let r=0;r<this.board.length;r++)for(let e=0;e<this.board[r].length;e++)if(this.board[r][e].hasShip&&!this.board[r][e].isShot)return!1;return!0}#e(r,e){for((r>9||r<=0)&&console.error("Ships length can't be above 9 or under 0");;){const t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random()),a=e?t+1:t+r,o=e?n+r:n+1;if(this.canPlace(t,n,a,o))return new g(r,t,n,e)}}addRandomShip(r,e){const t=this.#e(r,e);return this.addShip(t),t}canPlace(r,e,t,n){const a={startX:r,startY:e,endX:t,endY:n};for(const r in a){const e=a[r];if(!(e>=0&&e<=10))return!1}for(let a=r;a<t;a++)for(let r=e;r<n;r++)if(this.board[a][r].hasShip)return!1;return!0}availablePositions(){const r=[];for(let e=0;e<this.board.length;e++)for(let t=0;t<this.board[e].length;t++)this.board[e][t].isShot||r.push([e,t]);return r}}}randomPos(){const r=this.gameBoard.availablePositions(),e=r[Math.floor(Math.random()*r.length)];return[e[0],e[1]]}addSomeShip(){const r=[];return r.push(this.gameBoard.addRandomShip(5,Math.random()<.5)),r.push(this.gameBoard.addRandomShip(2,Math.random()<.5)),r.push(this.gameBoard.addRandomShip(4,Math.random()<.5)),r.push(this.gameBoard.addRandomShip(3,Math.random()<.5)),r}};!function(){const r=document.querySelector(".content"),e=document.createElement("div");e.classList.add("logo"),e.textContent="BATTLESHIP";const t=document.createElement("div");t.classList.add("gameArea"),r.appendChild(e),r.appendChild(t)}();const v=new class{constructor(){this.player=new f(!1,"Player1",!0),this.ai=new f(!1,"Player1",!1),this.isPlacingStage=!0}aiPlay(){if(!this.ai.isMyTurn)return void console.error("it's not ai's turn can't play!");const r=this.player.randomPos(),e=r[0],t=r[1],n=document.querySelector("#player_board").querySelector(`[data-x='${e}'][data-y='${t}']`);this.attack(n,this.player,r[0],r[1])}placeShips(){this.player=new f(!1,"Player1",!0),this.isPlacingStage=!0;const r=document.querySelector(".gameArea");r.innerHTML="",this.createGameBoard(this.player);const e=document.createElement("div");e.classList.add("ships"),r.appendChild(e);const t=this.createDraggableShip(5),n=this.createDraggableShip(2),a=this.createDraggableShip(4),o=this.createDraggableShip(3);e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(o);const s=document.querySelector(".content"),i=document.createElement("button");i.classList.add("btn"),i.classList.add("randomPlaceBtn"),i.textContent="Random Place",s.appendChild(i),i.onclick=()=>{const r=e.querySelectorAll(".ship");console.log(r),r.forEach((r=>{console.log(r);const e=this.player.gameBoard.addRandomShip(Number(r.dataset.length),Math.random()<.5);console.log(e),this.addShipToBoard(this.player,e),r.remove()})),e.remove(),i.remove(),this.startGame()}}addShipToBoard(r,e){const{startX:t,startY:n,endX:a,endY:o}=e.coord,s=r.isAI?"#ai_board":"#player_board",i=document.querySelector(s);for(let r=t;r<a;r++)for(let e=n;e<o;e++)i.querySelector(`[data-x='${r}'][data-y='${e}']`).classList.add("hasShip")}createDraggableShip(r){const e=document.createElement("div");e.dataset.length=r,e.dataset.isvertical=!1,e.classList.add("ship"),e.setAttribute("draggable","true"),e.onclick=()=>{e.classList.contains("vertical")?(e.classList.remove("vertical"),e.dataset.isvertical=!1):(e.classList.add("vertical"),e.dataset.isvertical=!0)},e.ondragstart=()=>{e.classList.add("dragging")},e.ondragend=()=>{e.classList.remove("dragging")};for(let t=0;t<r;t++){const r=document.createElement("div");r.classList.add("part"),e.appendChild(r)}return e}startGame(){this.isPlacingStage=!1,this.ai=new f(!0,"AI",!1),this.ai.addSomeShip(),this.createGameBoard(this.ai)}endGame(){const r=this.ai.gameBoard.isGameOver()?this.player.name:this.ai.name;document.querySelector(".gameArea"),console.log(r),this.writeWinner(r)}restartGame(){const r=document.querySelector(".content"),e=document.querySelector(".gameOver"),t=document.querySelector(".gameArea");r.classList.remove("blur"),t.innerHTML="",e.remove(),this.placeShips()}createGameBoard(r){const e=r.gameBoard.board,t=document.querySelector(".gameArea"),n=document.createElement("div");n.classList.add("gameboard"),n.id=r.isAI?"ai_board":"player_board";for(let t=0;t<e.length;t++){const a=document.createElement("div");a.classList.add("column"),n.appendChild(a);for(let n=0;n<e[t].length;n++){const o=document.createElement("div");o.classList.add("sqr"),r.isAI,!r.isAI&&e[t][n].hasShip&&o.classList.add("hasShip"),o.dataset.x=t,o.dataset.y=n,o.ondragover=()=>{this.isPlacingStage&&(r.isAI||this.dragging(o,r,t,n),o.classList.add("hover"))},o.ondragleave=()=>{o.classList.remove("hover")},o.onclick=()=>{r.isAI&&this.player.isMyTurn&&!e[t][n].isShot&&(this.attack(o,r,t,n),this.aiPlay())},a.appendChild(o)}}t.appendChild(n)}dragging(r,e,t,n){const a=document.querySelector(".dragging"),o=Number(a.dataset.length),s="true"===a.dataset.isvertical,i=new g(o,t,n,s),d=e.gameBoard.canPlace(t,n,i.coord.endX,i.coord.endY);a.ondragend=()=>{if(a.classList.remove("dragging"),d){this.addShipToBoard(e,i),e.gameBoard.addShip(i),a.remove();const r=document.querySelectorAll(".ships > .ship");if(0===r.length){document.querySelector(".randomPlaceBtn").remove();const r=document.querySelector(".content"),e=document.createElement("button");e.classList.add("btn"),e.classList.add("startGameBtn"),e.textContent="Start Game",e.onclick=()=>{document.querySelector(".ships").remove(),this.startGame(),e.remove()},r.appendChild(e)}console.log(`Remaining Ships length: ${r.length}`)}else console.log("You can't place ship there")}}attack(r,e,t,n){const a=e.isAI?this.player:this.ai;if(!a.isMyTurn)return void console.error(`It's not ${a.name}'s turn!`);const o=e.gameBoard.board;return!!e.gameBoard.receiveAttack(t,n)&&(o[t][n].hasShip?(r.classList.add("shot"),e.gameBoard.isGameOver()&&v.endGame()):r.classList.add("miss"),a.isMyTurn=!1,e.isMyTurn=!0,!0)}writeWinner(r){document.querySelector(".content").classList.add("blur");const e=document.createElement("div");e.classList.add("gameOver");const t=document.createElement("div");t.textContent="Game Over";const n=document.createElement("div");n.classList.add("winner"),n.textContent=`Winner is ${r}`;const a=document.createElement("button");a.classList.add("btn"),a.textContent="Restart Game",a.onclick=()=>{this.restartGame()},e.appendChild(t),e.appendChild(n),e.appendChild(a),document.body.appendChild(e)}};v.placeShips()})()})();