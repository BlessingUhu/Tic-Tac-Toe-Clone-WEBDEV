(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4937:function(e,n,t){Promise.resolve().then(t.bind(t,3567))},3567:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Home}});var r=t(7437),i=t(2265),o=t(328),l=t.n(o);function Home(){let[e,n]=(0,i.useState)(Array(9).fill("")),[t,o]=(0,i.useState)(!0),a=function(e){let n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let t=0;t<n.length;t++){let[r,i,o]=n[t];if(e[r]&&e[r]===e[i]&&e[r]===e[o])return e[r]}return null}(e),[c,s]=(0,i.useState)(!1),renderCell=i=>(0,r.jsx)("div",{className:l().box,onClick:()=>(function(r){if(e[r]||a)return;let i=[...e];i[r]=t?"X":"O",n(i),o(!t)})(i),children:e[i]},i);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"Tic-Tac-Toe with NextJS"})}),(0,r.jsx)("div",{id:a?l().winner:l().infoDisplay,children:(0,r.jsxs)("h3",{children:[" ",c?a?"Winner: ".concat(a):e.every(e=>e)?"It's a Draw!":"Next player: ".concat(t?"X":"O"):"Click on the START Button below."]})}),(0,r.jsx)("section",{className:l().boardSection,children:c?(0,r.jsx)("div",{id:l().board,children:e.map((e,n)=>renderCell(n))}):null}),(0,r.jsxs)("div",{id:l().buttonContainer,children:[(0,r.jsx)("div",{id:l().playButtonDiv,children:(0,r.jsx)("button",{id:l().playButton,onClick:function(){s(!c)},disabled:c,children:"Start"})}),(0,r.jsx)("div",{id:l().reloadButtonDiv,hidden:!c,children:(0,r.jsx)("button",{id:l().reload,onClick:function(){location.reload()},children:(0,r.jsx)("span",{className:"material-symbols-outlined",children:" replay "})})})]})]})}},328:function(e){e.exports={infoDisplay:"page_infoDisplay__cUGI4",winner:"page_winner__JZhU_",boardSection:"page_boardSection__oK8Ku",board:"page_board__rmxuL",box:"page_box__H2cV7",circle:"page_circle__8rDpH",cross:"page_cross__6Hn45",buttonContainer:"page_buttonContainer__0INWU",playButtonDiv:"page_playButtonDiv__AbSrQ",reloadButtonDiv:"page_reloadButtonDiv__WIi4A"}},622:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(2265),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,t){var r,o={},s=null,u=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(u=n.ref),n)l.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:s,ref:u,props:o,_owner:a.current}}n.Fragment=o,n.jsx=q,n.jsxs=q},7437:function(e,n,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=4937)}),_N_E=e.O()}]);