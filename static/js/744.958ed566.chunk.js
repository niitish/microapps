"use strict";(self.webpackChunkmicroapps=self.webpackChunkmicroapps||[]).push([[744],{744:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var r="ToDo_todo__x68SQ",o=n(907);var a=n(181);function i(t){return function(t){if(Array.isArray(t))return(0,o.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s,c=n(885),u=n(791),d=new Uint8Array(16);function f(){if(!s&&!(s="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(d)}var l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var m=function(t){return"string"===typeof t&&l.test(t)},p=[],h=0;h<256;++h)p.push((h+256).toString(16).substr(1));var y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(p[t[e+0]]+p[t[e+1]]+p[t[e+2]]+p[t[e+3]]+"-"+p[t[e+4]]+p[t[e+5]]+"-"+p[t[e+6]]+p[t[e+7]]+"-"+p[t[e+8]]+p[t[e+9]]+"-"+p[t[e+10]]+p[t[e+11]]+p[t[e+12]]+p[t[e+13]]+p[t[e+14]]+p[t[e+15]]).toLowerCase();if(!m(n))throw TypeError("Stringified UUID is invalid");return n};var v=function(t,e,n){var r=(t=t||{}).random||(t.rng||f)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return y(r)},x=n(184),g=u.createContext({tasks:[],addTask:function(){},markComplete:function(){},deleteItem:function(){}}),k=function(t){var e=JSON.parse(localStorage.getItem("tasks"))||[],n=(0,u.useState)(e),r=(0,c.Z)(n,2),o=r[0],a=r[1],s=function(t){var e=o.filter((function(e){return e.id!==t}));a(e),localStorage.setItem("tasks",JSON.stringify(e))},d={tasks:o,addTask:function(t){var e={id:v(),title:t,done:!1};a((function(t){return[].concat(i(t),[e])})),localStorage.setItem("tasks",JSON.stringify([].concat(i(o),[e])))},check:function(t){var e=o.find((function(e){return e.id===t}));e.done=!e.done,s(t),e.done?a((function(t){return[].concat(i(t),[e])})):a((function(t){return[e].concat(i(t))})),localStorage.setItem("tasks",JSON.stringify([e].concat(i(o))))},deleteItem:s};return(0,x.jsx)(g.Provider,{value:d,children:t.children})},j=g,b="AddForm_form__Najl9",S=n(70),C=function(){var t=(0,u.useContext)(j),e=(0,u.useRef)();return(0,x.jsxs)("form",{className:b,onSubmit:function(n){n.preventDefault();var r=e.current.value;t.addTask(r),e.current.value=""},children:[(0,x.jsx)("label",{htmlFor:"task",children:"Enter task"}),(0,x.jsxs)("section",{children:[(0,x.jsx)("input",{autoFocus:!0,ref:e,type:"text",name:"task",id:"task"}),(0,x.jsx)("button",{type:"submit",children:(0,x.jsx)("img",{src:S,alt:"add"})})]})]})},I="TaskList_list__iF+Ym",w=n(827),N=n(515),_=function(){var t=(0,u.useContext)(j);return(0,x.jsx)("ul",{className:I,children:0===t.tasks.length?(0,x.jsx)("p",{children:"Nothing here yet."}):t.tasks.map((function(e){var n=e.id,r=e.title,o=e.done;return(0,x.jsxs)("li",{children:[(0,x.jsx)("button",{onClick:function(){return t.check(n)},children:(0,x.jsx)("img",{src:w,alt:"check"})}),(0,x.jsx)("h2",{children:o&&(0,x.jsx)("strike",{children:r})||r}),(0,x.jsx)("button",{onClick:function(){return t.deleteItem(n)},children:(0,x.jsx)("img",{src:N,alt:"delete"})})]},n)}))})},T=function(){return(0,x.jsx)(k,{children:(0,x.jsxs)("div",{className:r,children:[(0,x.jsx)("h1",{children:"To Do"}),(0,x.jsx)(C,{}),(0,x.jsx)(_,{})]})})}},70:function(t,e,n){t.exports=n.p+"static/media/add.79748b84641690fa0572.png"},515:function(t,e,n){t.exports=n.p+"static/media/bin.a6fd29509719f079bfd7.png"},827:function(t,e,n){t.exports=n.p+"static/media/checked.1512888c84e9df01470d.png"}}]);
//# sourceMappingURL=744.958ed566.chunk.js.map