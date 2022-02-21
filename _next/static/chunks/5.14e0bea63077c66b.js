"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{1005:function(e,n,t){t.r(n),t.d(n,{default:function(){return Te}});var r=t(5893),i=t(7294),l=t(1163),o=t(7357),a=t(7720),s=t(1458),c=t(44),u=t(5861),d=t(6886),h=t(5670),f=t(7225),m=t(5050),p=t(142),v=t(4051),x=t.n(v),g=t(1157),y=t(8445),b=t(1903),j=t(9402);function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function A(e,n,t,r,i,l,o){try{var a=e[l](o),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,i)}function w(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var l=e.apply(n,t);function o(e){A(l,r,i,o,a,"next",e)}function a(e){A(l,r,i,o,a,"throw",e)}o(void 0)}))}}function k(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return Z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Z(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S="https://chrisinajar.com:5000/";function P(){var e,n,t=function(e){return e.trim()},l=(0,j.TX)().data,a=(0,i.useState)([]),s=a[0],c=a[1],u=(0,i.useState)(!1),d=u[0],h=u[1],f=(0,i.useState)(""),m=f[0],p=f[1],v=(0,i.useRef)();(0,i.useEffect)((function(){var e;if(!v.current&&(null===l||void 0===l||null===(e=l.chat)||void 0===e?void 0:e.token))return v.current=(0,g.io)(S,{withCredentials:!0,auth:{token:l.chat.token}}),v.current.on("hello",(function(e){c(e.chat)})),v.current.on("chat",(function(e){console.log("Got chat event!",e),c((function(n){return[e].concat(k(n))}))})),function(){v.current&&(v.current.disconnect(),v.current=void 0)}}),[null===l||void 0===l||null===(e=l.chat)||void 0===e?void 0:e.token]);var Z=t(m);function A(){return(A=w(x().mark((function e(n){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"===n.key&&v.current){e.next=2;break}return e.abrupt("return");case 2:v.current.emit("chat",{message:m},(function(e){console.log("Got a reply!",e),c((function(n){return[e].concat(k(n))}))})),p("");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(b.Z,{fullWidth:!0,disabled:!(null===(n=v.current)||void 0===n?void 0:n.connected),value:m,name:"Chat input",label:d?"Max message: ".concat(Z.length,"/").concat(140):"Type here...",placeholder:"Type here...",onChange:function(e){var n=e.target.value;t(n).length<=140&&p(n)},onFocus:function(){return h(!0)},onBlur:function(){return h(!1)},autoComplete:"off",onKeyPress:function(e){return A.apply(this,arguments)}}),(0,r.jsx)(o.Z,{sx:{backgroundColor:"primary.light",padding:1,minHeight:"600px"},children:s.map((function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)("b",{children:e.from})," ",(0,y.emojify)(e.message)]},e.id)}))}),(0,r.jsx)("br",{})]})}var C=t(3321),I=t(4054),$=t(3841),E=t(5645),q=t(3599),H=t(8456);function W(){var e,n,t,r=(0,j.UE)().data;return null!==(t=null===r||void 0===r||null===(e=r.me)||void 0===e||null===(n=e.account)||void 0===n?void 0:n.hero)&&void 0!==t?t:void 0}var L=t(9835),O=t(6893),F=t(1292),M=t(5499),T=t(5585),K=t(8698),B=t(7600),R=t(5826);function U(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function G(e,n,t,r,i,l,o){try{var a=e[l](o),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,i)}function z(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var l=e.apply(n,t);function o(e){G(l,r,i,o,a,"next",e)}function a(e){G(l,r,i,o,a,"throw",e)}o(void 0)}))}}function N(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(s){a=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return U(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e){var n=e.fight,t=n.id,l=n.monster,o=e.onVictory,a=e.onError,s=N((0,j.zC)(),2),c=s[0],h=s[1],f=h.data,m=(h.loading,null===f||void 0===f?void 0:f.fight);function p(e){return v.apply(this,arguments)}function v(){return(v=z(x().mark((function e(n){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Trying to fight",n),e.prev=1,e.next=4,c({variables:{monster:t,attackType:n}});case 4:e.sent,o&&o(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),a&&a(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(d.ZP,{id:"combat-display",style:{minHeight:"110px"},item:!0,xs:6,children:[(0,r.jsxs)(d.ZP,{container:!0,columns:6,children:[(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,md:2,lg:1,children:(0,r.jsx)(O.Z,{title:"Attack using your strength",children:(0,r.jsx)(C.Z,{id:"attack-with-melee",onClick:function(){return p(j.hK.Melee)},"aria-label":"melee attack",startIcon:(0,r.jsx)(F.Z,{}),children:"Melee attack"})})}),(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,md:2,lg:1,children:(0,r.jsx)(O.Z,{title:"Attack using your dexterity",children:(0,r.jsx)(C.Z,{id:"attack-with-ranged",onClick:function(){return p(j.hK.Ranged)},"aria-label":"ranged attack",startIcon:(0,r.jsx)(M.Z,{}),children:"Ranged attack"})})}),(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,md:2,lg:1,children:(0,r.jsx)(O.Z,{title:"Attack using your intelligence",children:(0,r.jsx)(C.Z,{id:"attack-with-wizard",onClick:function(){return p(j.hK.Wizard)},"aria-label":"conjuration spell",startIcon:(0,r.jsx)(K.Z,{}),children:"Conjuration Spell"})})}),(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,md:2,lg:1,children:(0,r.jsx)(O.Z,{title:"Attack using your wisdon",children:(0,r.jsx)(C.Z,{id:"attack-with-elemental",onClick:function(){return p(j.hK.Elemental)},"aria-label":"elemental spell",startIcon:(0,r.jsx)(T.Z,{}),children:"Elemental Spell"})})}),(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,md:2,lg:1,children:(0,r.jsx)(O.Z,{title:"Attack using your charisma",children:(0,r.jsx)(C.Z,{id:"attack-with-holy",onClick:function(){return p(j.hK.Holy)},"aria-label":"holy attack",startIcon:(0,r.jsx)(B.Z,{}),children:"Holy attack"})})}),(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,md:2,lg:1,children:(0,r.jsx)(O.Z,{title:"Attack using your constitution",children:(0,r.jsx)(C.Z,{id:"attack-with-blood",onClick:function(){return p(j.hK.Blood)},"aria-label":"blood magic",startIcon:(0,r.jsx)(R.Z,{}),children:"Blood magic"})})})]}),m&&m.log.map((function(e){return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)("b",{children:e.from})," ".concat(Q(e.attackType,e.success,e.critical)," "),(0,r.jsx)("b",{children:e.to}),e.success?" for ".concat(e.damage.toLocaleString()," damage!"):"."]})},e.from)})),m&&m.victory&&(0,r.jsxs)(u.Z,{id:"fight-did-win",children:[l.name," has been killed!",(m.experience||m.gold)&&" You gain ",m.gold&&(0,r.jsxs)(i.Fragment,{children:[" ",(0,r.jsx)("span",{id:"fight-recap-gold",children:m.gold.toLocaleString()})," ","gold"]}),m.gold&&m.experience&&" and",m.experience&&(0,r.jsxs)(i.Fragment,{children:[" ",(0,r.jsx)("span",{id:"fight-recap-experience",children:m.experience.toLocaleString()})," ","experience"]}),(m.experience||m.gold)&&"!! ",m.didLevel&&(0,r.jsx)("b",{id:"fight-level-up",children:"You leveled up!!"})]})]})})}function Q(e,n,t){switch(e){case j.hK.Blood:return n?t?"surges with blood magic against":"lets blood and casts forth towards":"attempts to cast a spell against";case j.hK.Holy:return n?t?"summons powers beyond this world against":"smites":"attempts to smite";case j.hK.Elemental:return n?t?"creates an elemental storm around":"casts an elemental spell at":"attempts to cast a spell against";case j.hK.Wizard:return n?t?"carefully casts a spell at":"blasts a beam of necrotic energy into":"attempts to cast a spell against";case j.hK.Ranged:return n?t?"lands a sneak attack from the shadows, critically damaging":"fires an arrow at":"shoots an arrow but it misses";case j.hK.Melee:default:return n?t?"lands a crippling blow against":"struck":"missed"}}function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function D(e,n,t,r,i,l,o){try{var a=e[l](o),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,i)}function V(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var l=e.apply(n,t);function o(e){D(l,r,i,o,a,"next",e)}function a(e){D(l,r,i,o,a,"throw",e)}o(void 0)}))}}function X(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(s){a=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return l}}(e,n)||ee(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ee(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,n){if(e){if("string"===typeof e)return _(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(e,n):void 0}}var ne="Select a monster to challenge",te="Fight a monster!";function re(){var e,n,t=(0,i.useState)(null),l=t[0],o=t[1],a=X((0,L.g)(),2),s=a[0],c=a[1],h=(0,i.useState)(""),f=h[0],m=h[1],p=(0,i.useState)(""),v=p[0],g=p[1],y=(0,j.Of)(),b=y.data,Z=y.loading,A=(y.error,y.refetch),w=X((0,j.Ht)(),1)[0],k=X((0,j.hL)(),2),S=k[0],P=k[1].loading,O=(0,j.pL)(),F=O.data,M=O.refetch,T=(null===F||void 0===F?void 0:F.challenges)||[],K=W();function B(){return(B=V(x().mark((function e(){var n,t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S();case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),e.t0.graphQLErrors&&(null===(n=e.t0.graphQLErrors[0])||void 0===n||null===(t=n.extensions)||void 0===t?void 0:t.delay)&&c(e.t0.graphQLErrors[0].extensions.remaining);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function R(){return(R=V(x().mark((function e(){var n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===b||void 0===b?void 0:b.monsters.find((function(e){return e.id===v})),o(null!==n&&void 0!==n?n:null);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=V(x().mark((function e(){var n,t,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,w({variables:{monster:f}});case 4:(null===(t=e.sent.data)||void 0===t||null===(n=t.challenge)||void 0===n?void 0:n.id)&&g(null===t||void 0===t||null===(r=t.challenge)||void 0===r?void 0:r.id),A(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),A();case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return(0,i.useEffect)((function(){M()}),[null===K||void 0===K?void 0:K.location.x,null===K||void 0===K?void 0:K.location.y,null===K||void 0===K?void 0:K.location.map]),(0,i.useEffect)((function(){var e;(null===b||void 0===b||null===(e=b.monsters)||void 0===e?void 0:e.length)&&(""===v?g(b.monsters[0].id):b.monsters.find((function(e){return e.id===v}))||g(b.monsters[0].id))}),[v,null===b||void 0===b||null===(e=b.monsters)||void 0===e?void 0:e.length]),(null===b||void 0===b||null===(n=b.monsters)||void 0===n?void 0:n.find((function(e){return e.id===v})))||(v=""),(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(d.ZP,{container:!0,columns:6,spacing:4,children:[l&&(0,r.jsx)(Y,{fight:l,onVictory:function(){return A()},onError:function(){A(),o(null)}}),K&&K.combat.health>0&&(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(d.ZP,{item:!0,md:3,xs:6,children:(0,r.jsxs)(I.Z,{fullWidth:!0,children:[(0,r.jsx)($.Z,{id:"challenge-monster-select-label",children:ne}),(0,r.jsx)(E.Z,{id:"challenge-select",labelId:"challenge-monster-select-label",value:f,label:ne,onChange:function(e){return m(e.target.value)},children:T.map((function(e){return(0,r.jsx)(q.Z,{value:e.id,children:e.name},e.id)}))}),(0,r.jsx)(C.Z,{id:"challenge-button",disabled:!f||s>0||P,onClick:function(){return U.apply(this,arguments)},variant:"contained",children:"Challenge!"})]})}),(0,r.jsx)(d.ZP,{item:!0,md:3,xs:6,children:(0,r.jsxs)(I.Z,{fullWidth:!0,children:[(0,r.jsx)($.Z,{id:"fight-monster-select-label",children:te}),(0,r.jsx)(E.Z,{id:"fight-select",labelId:"fight-monster-select-label",value:v,label:te,onChange:function(e){return g(e.target.value)},children:(null===b||void 0===b?void 0:b.monsters)&&J(null===b||void 0===b?void 0:b.monsters).sort((function(e,n){return e.monster.level-n.monster.level})).map((function(e){return(0,r.jsx)(q.Z,{value:e.id,children:e.monster.name},e.id)}))}),Z&&(0,r.jsx)(H.Z,{}),(0,r.jsx)(C.Z,{id:"fight-button",disabled:!v||s>0||P,onClick:function(){return R.apply(this,arguments)},variant:"contained",children:"Fight!"})]})})]}),K&&K.combat.health<=0&&(0,r.jsx)(d.ZP,{item:!0,lg:3,xs:6,children:(0,r.jsx)(u.Z,{id:"you-are-dead",children:"You are dead."})}),(0,r.jsx)(d.ZP,{item:!0,lg:3,xs:6,children:(0,r.jsx)(C.Z,{id:"heal-button",fullWidth:!0,onClick:function(){return B.apply(this,arguments)},variant:"contained",disabled:s>0||P,children:"Heal"})})]})})}var ie=t(9692),le=[16,16],oe=[128,96],ae=16;function se(){var e=W();if(!e)return null;var n=e.location,t=[Math.round(Math.min(oe[0]-le[0]/2,Math.max(0,n.x-le[0]/2))),Math.round(Math.min(oe[1]-le[1]/2,Math.max(0,n.y-le[1]/2)))];return console.log({location:n,centerPoint:t}),(0,r.jsx)("div",{style:{position:"relative",display:"inline-block",backgroundImage:"url(/maps/default.jpg)",backgroundPosition:"-".concat(t[0]*ae,"px -").concat(t[1]*ae,"px"),width:"".concat(le[0]*ae,"px"),height:"".concat(le[1]*ae,"px")},children:(0,r.jsx)("div",{style:{position:"absolute",borderRadius:"".concat(2.5,"px"),opacity:.8,backgroundColor:"blue",border:"1px solid black",left:"".concat((n.x-t[0])*ae+5.5,"px"),top:"".concat((n.y-t[1])*ae+5.5,"px"),width:"".concat(5,"px"),height:"".concat(5,"px")}})})}function ce(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ue(e,n,t,r,i,l,o){try{var a=e[l](o),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,i)}function de(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var l=e.apply(n,t);function o(e){ue(l,r,i,o,a,"next",e)}function a(e){ue(l,r,i,o,a,"throw",e)}o(void 0)}))}}function he(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(s){a=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return ce(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ce(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(){var e=W(),n=he((0,L.g)(),2),t=n[0],l=n[1],o=he((0,j.gK)(),2),a=o[0],s=o[1].loading;if(!e)return null;function c(e){return h.apply(this,arguments)}function h(){return(h=de(x().mark((function e(n){var t,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a({variables:{direction:n}});case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),e.t0.graphQLErrors&&(null===(t=e.t0.graphQLErrors[0])||void 0===t||null===(r=t.extensions)||void 0===r?void 0:r.delay)&&l(e.t0.graphQLErrors[0].extensions.remaining);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(d.ZP,{container:!0,columns:2,spacing:3,children:[(0,r.jsx)(d.ZP,{item:!0,xs:2,sm:1,children:(0,r.jsxs)(d.ZP,{container:!0,columns:6,spacing:3,children:[(0,r.jsx)(d.ZP,{item:!0,style:{textAlign:"center"},xs:6,children:(0,r.jsx)(u.Z,{children:"Use buttons to move around the map."})}),(0,r.jsx)(d.ZP,{item:!0,style:{textAlign:"center"},xs:2}),(0,r.jsx)(d.ZP,{item:!0,style:{textAlign:"center"},xs:2,children:(0,r.jsx)(C.Z,{disabled:s||t>0,variant:"contained",onClick:function(){return c(j.p$.North)},children:"North"})}),(0,r.jsx)(d.ZP,{item:!0,style:{textAlign:"center"},xs:2}),(0,r.jsx)(d.ZP,{item:!0,style:{textAlign:"center"},xs:2,children:(0,r.jsx)(C.Z,{disabled:s||t>0,variant:"contained",onClick:function(){return c(j.p$.West)},children:"West"})}),(0,r.jsx)(d.ZP,{item:!0,style:{textAlign:"center"},xs:2,children:(0,r.jsxs)(u.Z,{children:[e.location.x,", ",e.location.y]})}),(0,r.jsx)(d.ZP,{item:!0,style:{textAlign:"center"},xs:2,children:(0,r.jsx)(C.Z,{disabled:s||t>0,variant:"contained",onClick:function(){return c(j.p$.East)},children:"East"})}),(0,r.jsx)(d.ZP,{item:!0,style:{textAlign:"center"},xs:2}),(0,r.jsx)(d.ZP,{item:!0,style:{textAlign:"center"},xs:2,children:(0,r.jsx)(C.Z,{disabled:s||t>0,variant:"contained",onClick:function(){return c(j.p$.South)},children:"South"})}),(0,r.jsx)(d.ZP,{item:!0,style:{textAlign:"center"},xs:2})]})}),(0,r.jsx)(d.ZP,{item:!0,style:{textAlign:"center"},xs:2,sm:1,children:(0,r.jsx)(se,{})})]})})}var me,pe=t(7948);function ve(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function xe(e,n,t,r,i,l,o){try{var a=e[l](o),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,i)}function ge(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var l=e.apply(n,t);function o(e){xe(l,r,i,o,a,"next",e)}function a(e){xe(l,r,i,o,a,"throw",e)}o(void 0)}))}}function ye(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(s){a=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return ve(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ve(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(){var e=ye((0,L.g)(),1)[0],n=ye((0,j.Y4)(),2),t=n[0],l=n[1].loading;function s(e){return c.apply(this,arguments)}function c(){return(c=ge(x().mark((function e(n){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Leveling up...",n),e.next=3,t({variables:{attribute:j.GC[n]}});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsxs)(o.Z,{sx:{backgroundColor:"secondary.light"},children:[(0,r.jsx)("br",{}),(0,r.jsx)(u.Z,{variant:"h5",align:"center",children:"You have leveled up!"}),(0,r.jsx)(pe.Z,{children:(0,r.jsx)(u.Z,{align:"center",children:"Each of your attributes has a chance to increase by 1 when you level up, this chance is increased by Luck. You may also choose one attribute to increase."})}),(0,r.jsx)("br",{}),(0,r.jsxs)(d.ZP,{container:!0,columns:14,spacing:2,children:[(0,r.jsx)(O.Z,{title:"Strength helps you with melee attacks",children:(0,r.jsx)(d.ZP,{item:!0,xs:14,sm:7,md:4,lg:2,children:(0,r.jsx)(u.Z,{align:"center",children:(0,r.jsx)(C.Z,{id:"level-up-strength",disabled:l||e>0,onClick:function(){return s("Strength")},variant:"contained",children:"Strength"})})})}),(0,r.jsx)(O.Z,{title:"Dexterity helps you with ranged attacks and with defending against both ranged attacks and elemental spells",children:(0,r.jsx)(d.ZP,{item:!0,xs:14,sm:7,md:4,lg:2,children:(0,r.jsx)(u.Z,{align:"center",children:(0,r.jsx)(C.Z,{id:"level-up-dexterity",disabled:l||e>0,onClick:function(){return s("Dexterity")},variant:"contained",children:"Dexterity"})})})}),(0,r.jsx)(O.Z,{title:"Constitution determines your max health, is used in both attack and defending blood magic, and also helps defend against melee attacks",children:(0,r.jsx)(d.ZP,{item:!0,xs:14,sm:7,md:4,lg:2,children:(0,r.jsx)(u.Z,{align:"center",children:(0,r.jsx)(C.Z,{id:"level-up-constitution",disabled:l||e>0,onClick:function(){return s("Constitution")},variant:"contained",children:"Constitution"})})})}),(0,r.jsx)(O.Z,{title:"Intelligence is used to conjure wizard spells as well as to defend against holy sells",children:(0,r.jsx)(d.ZP,{item:!0,xs:14,sm:7,md:4,lg:2,children:(0,r.jsx)(u.Z,{align:"center",children:(0,r.jsx)(C.Z,{id:"level-up-intelligence",disabled:l||e>0,onClick:function(){return s("Intelligence")},variant:"contained",children:"Intelligence"})})})}),(0,r.jsx)(O.Z,{title:"Wisdom helps you cast elemental spells, as well as defending against wizard spells",children:(0,r.jsx)(d.ZP,{item:!0,xs:14,sm:7,md:4,lg:2,children:(0,r.jsx)(u.Z,{align:"center",children:(0,r.jsx)(C.Z,{id:"level-up-wisdom",disabled:l||e>0,onClick:function(){return s("Wisdom")},variant:"contained",children:"Wisdom"})})})}),(0,r.jsx)(O.Z,{title:"Charisma is used by holy warriors to attack",children:(0,r.jsx)(d.ZP,{item:!0,xs:14,sm:7,md:4,lg:2,children:(0,r.jsx)(u.Z,{align:"center",children:(0,r.jsx)(C.Z,{id:"level-up-charisma",disabled:l||e>0,onClick:function(){return s("Charisma")},variant:"contained",children:"Charisma"})})})}),(0,r.jsx)(O.Z,{title:"Luck helps your odds in most random rolls the game makes",children:(0,r.jsx)(d.ZP,{item:!0,xs:14,md:12,lg:2,children:(0,r.jsx)(u.Z,{align:"center",children:(0,r.jsx)(C.Z,{id:"level-up-luck",disabled:l||e>0,onClick:function(){return s("Luck")},variant:"contained",children:"Luck"})})})})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsx)(a.Z,{})]})}function je(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Ze(e,n,t,r,i,l,o){try{var a=e[l](o),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,i)}function Ae(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var l=e.apply(n,t);function o(e){Ze(l,r,i,o,a,"next",e)}function a(e){Ze(l,r,i,o,a,"throw",e)}o(void 0)}))}}function we(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ke(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(s){a=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return je(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return je(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Se=(we(me={},j.$7.MeleeWeapon,"Melee Weapon"),we(me,j.$7.RangedWeapon,"Ranged Weapon"),we(me,j.$7.SpellFocus,"Spell Focus"),we(me,j.$7.Shield,"Shield"),we(me,j.$7.BodyArmor,"Body Armor"),we(me,j.$7.HandArmor,"Gauntlets"),we(me,j.$7.LegArmor,"Leggings"),we(me,j.$7.HeadArmor,"Helmet"),we(me,j.$7.FootArmor,"Greaves"),me);function Pe(e){var n;return null!==(n=Se[e])&&void 0!==n?n:e.replace(/(?=[A-Z])(?<=[a-z])/g," ")}function Ce(e){var n,t,l,o,a,s,c,u=e.value,d=e.onChange,h=e.sellables,f=function(e){var n="string"===typeof e?e:e.baseItem,t=h.find((function(e){return e.id===n}));return t&&t.cost?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){we(e,n,t[n])}))}return e}({},t,{cost:Math.round(t.cost/3)}):null},m=W();if(!m)return null;var p=[];(null===(n=m.equipment.leftHand)||void 0===n?void 0:n.id)&&p.push(m.equipment.leftHand.id),(null===(t=m.equipment.rightHand)||void 0===t?void 0:t.id)&&p.push(m.equipment.rightHand.id),(null===(l=m.equipment.bodyArmor)||void 0===l?void 0:l.id)&&p.push(m.equipment.bodyArmor.id),(null===(o=m.equipment.handArmor)||void 0===o?void 0:o.id)&&p.push(m.equipment.handArmor.id),(null===(a=m.equipment.legArmor)||void 0===a?void 0:a.id)&&p.push(m.equipment.legArmor.id),(null===(s=m.equipment.headArmor)||void 0===s?void 0:s.id)&&p.push(m.equipment.headArmor.id),(null===(c=m.equipment.footArmor)||void 0===c?void 0:c.id)&&p.push(m.equipment.footArmor.id);var v=m.inventory,x="Sell non-enchanted gear";return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(I.Z,{fullWidth:!0,children:[(0,r.jsx)($.Z,{id:"sell-shop-select-label",children:x}),(0,r.jsx)(E.Z,{id:"sell-shop-select",labelId:"sell-shop-select-label",value:u||"",label:x,onChange:function(e){var n=e.target.value,t=m.inventory.find((function(e){return e.id===n}));if(t){var r=f(t);r&&r.cost&&d&&d({id:n,name:r.name,cost:r.cost})}},children:v.map((function(e){var n=f(e);return(0,r.jsxs)(q.Z,{value:e.id,disabled:!n||p.indexOf(e.id)>=0,children:[(null===n||void 0===n?void 0:n.cost)&&"".concat(e.name,": ").concat(n.cost.toLocaleString()," Gold"),!(null===n||void 0===n?void 0:n.cost)&&e.name]},e.id)}))})]})})}function Ie(e){var n=e.type,t=e.items,i=e.value,l=e.onChange,o=W(),a=Pe(n),s="".concat(a," Shop");return o?(0,r.jsxs)(I.Z,{fullWidth:!0,children:[(0,r.jsx)($.Z,{id:"".concat(n,"-shop-select-label"),children:s}),(0,r.jsx)(E.Z,{id:"".concat(n,"-shop-select"),labelId:"".concat(n,"-shop-select-label"),value:i||"",label:s,onChange:function(e){var n=e.target.value,r=t.find((function(e){return e.id===n}));l&&r&&r.cost&&l({id:n,name:r.name,cost:r.cost})},children:t.map((function(e){return(0,r.jsxs)(q.Z,{value:e.id,disabled:!e.cost||e.cost>o.gold,children:[e.cost&&"".concat(e.name,": ").concat(e.cost.toLocaleString()," Gold"),!e.cost&&e.name]},e.id)}))})]}):null}function $e(){var e=ke((0,L.g)(),1)[0],n=(0,i.useState)(null),t=n[0],l=n[1],o=(0,i.useState)(""),s=o[0],c=o[1],h=(0,j.Cb)(),f=h.data,m=(h.loading,h.error,ke((0,j.Nn)(),2)),p=m[0],v=m[1].loading,g=ke((0,j.o_)(),2),y=g[0],b=g[1].loading||v||e>0;function Z(){return(Z=Ae(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,l(null),e.next=6,p({variables:{baseItem:t.id}});case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function A(){return(A=Ae(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,l(null),e.next=6,y({variables:{item:t.id}});case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}var w,k="Choose which shop to visit";return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsxs)(u.Z,{align:"center",children:["Welcome to the shop! You can buy and sell any non-enchanted items here.",(0,r.jsx)("br",{})]}),(0,r.jsx)("br",{}),(0,r.jsx)(a.Z,{}),(0,r.jsx)("br",{}),(0,r.jsxs)(d.ZP,{container:!0,columns:6,spacing:2,children:[(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,children:(0,r.jsxs)(I.Z,{fullWidth:!0,children:[(0,r.jsx)($.Z,{id:"shop-type-select-label",children:k}),(0,r.jsxs)(E.Z,{id:"shop-type-select",labelId:"shop-type-select-label",value:s,label:k,onChange:function(e){c(e.target.value),l(null)},children:[(0,r.jsx)(q.Z,{value:"sell",children:"Sell Items"}),(0,r.jsx)(a.Z,{}),(0,r.jsxs)(q.Z,{value:j.$7.MeleeWeapon,children:[Pe(j.$7.MeleeWeapon)," Shop"]}),(0,r.jsxs)(q.Z,{value:j.$7.RangedWeapon,children:[Pe(j.$7.RangedWeapon)," Shop"]}),(0,r.jsxs)(q.Z,{value:j.$7.SpellFocus,children:[Pe(j.$7.SpellFocus)," Shop"]}),(0,r.jsxs)(q.Z,{value:j.$7.Shield,children:[Pe(j.$7.Shield)," Shop"]}),(0,r.jsxs)(q.Z,{value:j.$7.BodyArmor,children:[Pe(j.$7.BodyArmor)," Shop"]}),(0,r.jsxs)(q.Z,{value:j.$7.HandArmor,children:[Pe(j.$7.HandArmor)," Shop"]}),(0,r.jsxs)(q.Z,{value:j.$7.LegArmor,children:[Pe(j.$7.LegArmor)," Shop"]}),(0,r.jsxs)(q.Z,{value:j.$7.HeadArmor,children:[Pe(j.$7.HeadArmor)," Shop"]}),(0,r.jsxs)(q.Z,{value:j.$7.FootArmor,children:[Pe(j.$7.FootArmor)," Shop"]})]})]})}),(0,r.jsxs)(d.ZP,{item:!0,xs:6,sm:3,children:[""!==s&&"sell"!==s&&(0,r.jsx)(Ie,{value:t?t.id:null,type:s,items:function(e){var n;return(null===f||void 0===f||null===(n=f.shopItems)||void 0===n?void 0:n.length)?f.shopItems.filter((function(n){return n.type===e})):[]}(s),onChange:function(e){return l(e)}},s),"sell"===s&&(0,r.jsx)(Ce,{value:t?t.id:null,sellables:null!==(w=null===f||void 0===f?void 0:f.shopItems)&&void 0!==w?w:[],onChange:function(e){return l(e)}})]}),(0,r.jsx)(d.ZP,{item:!0,xs:6,children:t&&(0,r.jsxs)(C.Z,{variant:"contained",color:"sell"===s?"error":"success",fullWidth:!0,disabled:b,onClick:"sell"===s?function(){return A.apply(this,arguments)}:function(){return Z.apply(this,arguments)},children:["sell"===s?"Sell":"Buy"," ",t.name," for"," ",t.cost.toLocaleString()," gold"]})})]}),(0,r.jsx)("br",{})]})}function Ee(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function qe(e,n,t,r,i,l,o){try{var a=e[l](o),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,i)}function He(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var l=e.apply(n,t);function o(e){qe(l,r,i,o,a,"next",e)}function a(e){qe(l,r,i,o,a,"throw",e)}o(void 0)}))}}function We(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(s){a=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Ee(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ee(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Le(e){var n,t=e.hero,l=e.slot,o=e.label,a=e.onEquip,s=e.disabled,c=null===(n=t.equipment[l])||void 0===n?void 0:n.id,u=["leftHand","rightHand","bodyArmor","handArmor","legArmor","headArmor","footArmor"].filter((function(e){return t.equipment[e]&&e!==l})).map((function(e){var n;return null===(n=t.equipment[e])||void 0===n?void 0:n.id})),d=(0,i.useState)(c||""),h=(d[0],d[1]),f=t.inventory.filter((function(e){return function(e,n){switch(e){case"rightHand":case"leftHand":return n.type===j.$7.MeleeWeapon||n.type===j.$7.RangedWeapon||n.type===j.$7.Shield||n.type===j.$7.SpellFocus;case"bodyArmor":return n.type===j.$7.BodyArmor;case"handArmor":return n.type===j.$7.HandArmor;case"legArmor":return n.type===j.$7.LegArmor;case"headArmor":return n.type===j.$7.HeadArmor;case"footArmor":return n.type===j.$7.FootArmor;default:return!1}}(l,e)}));return(0,r.jsx)(i.Fragment,{children:(0,r.jsx)("div",{children:(0,r.jsxs)(I.Z,{fullWidth:!0,children:[(0,r.jsx)($.Z,{id:"".concat(l,"-equip-select-label"),children:o}),(0,r.jsx)(E.Z,{id:"".concat(l,"-equip-select"),labelId:"".concat(l,"-equip-select-label"),value:c||"",label:o,disabled:s,onChange:function(e){h(e.target.value),a(l,e.target.value)},children:f.map((function(e){return(0,r.jsx)(q.Z,{value:e.id,disabled:u.indexOf(e.id)>=0,children:e.id===c?(0,r.jsx)("b",{children:e.name}):e.name},e.id)}))})]})})})}function Oe(){var e=We((0,L.g)(),1)[0],n=We((0,j.aP)(),2),t=n[0],l=n[1].loading,o=W(),a=l||e>0;if(!o)return null;function s(e,n){return c.apply(this,arguments)}function c(){return(c=He(x().mark((function e(n,r){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t({variables:{item:r,slot:n}});case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(d.ZP,{container:!0,columns:6,spacing:1,children:[(0,r.jsx)(d.ZP,{item:!0,xs:6,children:(0,r.jsx)(u.Z,{children:"Equipped items"})}),(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,children:(0,r.jsx)(Le,{hero:o,slot:"leftHand",label:"Left Hand",onEquip:s,disabled:a})}),(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,children:(0,r.jsx)(Le,{hero:o,slot:"rightHand",label:"Right Hand",onEquip:s,disabled:a})}),(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,children:(0,r.jsx)(Le,{hero:o,slot:"bodyArmor",label:"Body Armor",onEquip:s,disabled:a})}),(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,children:(0,r.jsx)(Le,{hero:o,slot:"handArmor",label:"Gauntlets",onEquip:s,disabled:a})}),(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,children:(0,r.jsx)(Le,{hero:o,slot:"legArmor",label:"Leggings",onEquip:s,disabled:a})}),(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,children:(0,r.jsx)(Le,{hero:o,slot:"headArmor",label:"Helmets",onEquip:s,disabled:a})}),(0,r.jsx)(d.ZP,{item:!0,xs:6,sm:3,children:(0,r.jsx)(Le,{hero:o,slot:"footArmor",label:"Greaves",onEquip:s,disabled:a})})]})})}function Fe(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Me(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(s){a=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Fe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fe(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Te(){var e,n,t,v=(0,l.useRouter)(),x=Me((0,ie.d)(),2),g=x[0],y=(x[1],(0,j.UE)()),b=y.data,Z=y.loading,A=y.error,w=(0,i.useState)("1"),k=w[0],S=w[1],C=(0,j.Wg)().data,I=null!==(t=null===b||void 0===b||null===(e=b.me)||void 0===e||null===(n=e.account)||void 0===n?void 0:n.hero)&&void 0!==t?t:null;return A||!g?(v.push("/?auth=".concat(v.asPath)),(0,r.jsxs)(p.A,{children:[(0,r.jsx)("br",{}),"Redirecting..."]})):Z?(0,r.jsx)(p.A,{children:Z&&(0,r.jsx)(s.Z,{})}):(0,r.jsxs)(p.A,{showHero:!0,children:[(0,r.jsx)(i.Fragment,{children:I&&I.attributePoints>0&&(0,r.jsx)(be,{})}),(0,r.jsxs)(o.Z,{sx:{width:"100%",typography:"body1"},children:[(0,r.jsxs)(h.ZP,{value:k,children:[(0,r.jsx)(o.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,r.jsxs)(f.Z,{onChange:function(e,n){S(n)},"aria-label":"navigation tabs",variant:"scrollable",children:[(0,r.jsx)(c.Z,{label:"Welcome / News",value:"1"}),(0,r.jsx)(c.Z,{label:"Combat",value:"2"}),(0,r.jsx)(c.Z,{label:"Shop",value:"3"}),(0,r.jsx)(c.Z,{label:"Inventory",value:"4"}),(0,r.jsx)(c.Z,{label:"Map",value:"5"})]})}),(0,r.jsx)(m.Z,{value:"1",children:(0,r.jsxs)(d.ZP,{container:!0,columns:12,spacing:4,children:[(0,r.jsxs)(d.ZP,{item:!0,xs:12,sm:7,md:8,lg:9,children:[(0,r.jsx)(u.Z,{children:"Welcome to the game! I'm updating things extremely regularly, so check back often and refresh often. Use the tabs above to navigate around."}),(0,r.jsx)("br",{}),(0,r.jsx)(u.Z,{children:"Combat has been heavily overhauled in order to accomidate the new equipment!"}),(0,r.jsx)("br",{}),(0,r.jsx)(u.Z,{children:"There are 6 different types of combat available, each uses a different primary attribute, as well as an item shop to buy and equip the new items."}),(0,r.jsx)("br",{}),(0,r.jsx)(u.Z,{children:"The map is fully functional! Be sure to travel around before travel gets harder..."})]}),(null===C||void 0===C?void 0:C.leaderboard)&&(0,r.jsxs)(d.ZP,{item:!0,xs:12,sm:5,md:4,lg:3,children:[(0,r.jsx)(u.Z,{variant:"h6",children:"Top levels:"}),(0,r.jsx)("ul",{id:"leaderboard-list",children:C.leaderboard.map((function(e,n){return(0,r.jsxs)("li",{id:"leaderboard-list-".concat(n),children:[(0,r.jsx)("b",{id:"leaderboard-list-".concat(n,"-name"),children:e.name})," ",e.level.toLocaleString()]},e.id)}))})]})]})}),(0,r.jsxs)(m.Z,{value:"2",children:[(0,r.jsx)(u.Z,{children:"Challenge a monster from the list, then fight it to the death. Note that other players in the same location see the same monster lists, so they may get to it first!"}),(0,r.jsx)("br",{}),(0,r.jsx)(re,{})]}),(0,r.jsx)(m.Z,{value:"3",children:(0,r.jsx)($e,{})}),(0,r.jsx)(m.Z,{value:"4",children:(0,r.jsx)(Oe,{})}),(0,r.jsx)(m.Z,{value:"5",children:(0,r.jsx)(fe,{})})]}),(0,r.jsx)("br",{}),(0,r.jsx)(a.Z,{}),(0,r.jsx)("br",{}),(0,r.jsx)(P,{})]})]})}}}]);