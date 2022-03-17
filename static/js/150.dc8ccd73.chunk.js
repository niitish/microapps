"use strict";(self.webpackChunkmicroapps=self.webpackChunkmicroapps||[]).push([[150],{150:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var r="ToDo_todo__x68SQ",a=n(907);var i=n(181);function o(t){return function(t){if(Array.isArray(t))return(0,a.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,i.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c,s=n(885),u=n(791),l=new Uint8Array(16);function d(){if(!c&&!(c="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(l)}var f=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var p=function(t){return"string"===typeof t&&f.test(t)},m=[],h=0;h<256;++h)m.push((h+256).toString(16).substr(1));var j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(m[t[e+0]]+m[t[e+1]]+m[t[e+2]]+m[t[e+3]]+"-"+m[t[e+4]]+m[t[e+5]]+"-"+m[t[e+6]]+m[t[e+7]]+"-"+m[t[e+8]]+m[t[e+9]]+"-"+m[t[e+10]]+m[t[e+11]]+m[t[e+12]]+m[t[e+13]]+m[t[e+14]]+m[t[e+15]]).toLowerCase();if(!p(n))throw TypeError("Stringified UUID is invalid");return n};var x=function(t,e,n){var r=(t=t||{}).random||(t.rng||d)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=r[a];return e}return j(r)},b=n(184),g=u.createContext({tasks:[],addTask:function(t){},deleteTask:function(t){},updateTask:function(t,e,n){}}),y=function(t){var e=JSON.parse(localStorage.getItem("tasks"))||[],n=(0,u.useState)(e),r=(0,s.Z)(n,2),a=r[0],i=r[1],c={tasks:a,addTask:function(t){var e={id:x(),title:t,done:!1};localStorage.setItem("tasks",JSON.stringify([e].concat(o(a)))),i((function(t){return[e].concat(o(t))}))},deleteTask:function(t){var e=a.filter((function(e){return e.id!==t}));localStorage.setItem("tasks",JSON.stringify(e)),i(e)},updateTask:function(t,e,n){var r=a.find((function(e){return e.id===t}));n?r.done=!r.done:r.title=e;var c=a.filter((function(e){return e.id!==t}));c=r.done?[].concat(o(c),[r]):[r].concat(o(c)),localStorage.setItem("tasks",JSON.stringify(c)),i(c)}};return(0,b.jsx)(g.Provider,{value:c,children:t.children})},v=g,k="AddForm_form__Najl9",O=n(70),S=function(){var t=(0,u.useContext)(v),e=(0,u.useRef)();return(0,b.jsxs)("form",{className:k,onSubmit:function(n){n.preventDefault();var r=e.current.value;""!==r.trim()&&(t.addTask(r),e.current.value="")},children:[(0,b.jsx)("label",{htmlFor:"task",children:"Enter task"}),(0,b.jsxs)("section",{children:[(0,b.jsx)("input",{autoFocus:!0,ref:e,type:"text",name:"task",id:"task"}),(0,b.jsx)("button",{type:"submit",children:(0,b.jsx)("img",{src:O,alt:"add"})})]})]})};function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){_(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var T="TaskList_list__iF+Ym",N="TaskItem_item__q5oht",P="TaskItem_modal__UBGqi",I=n(164),E="Modal_modal__pba1a",D="Modal_backdrop__mYw5T",F=function(t){var e="".concat(E," ").concat(t.className);return(0,b.jsxs)(b.Fragment,{children:[I.createPortal((0,b.jsx)("div",{className:D,onClick:t.onCancel}),document.getElementById("backdrop")),I.createPortal((0,b.jsx)("div",{className:e,children:t.children}),document.getElementById("modal"))]})},R=n(827),V=n(515),A=n(988),J=n(293),U=n(625),Z=n(630),B=function(t){var e=t.id,n=t.title,r=t.done,a=(0,u.useContext)(v),i=(0,u.useRef)(),o=(0,u.useState)(!1),c=(0,s.Z)(o,2),l=c[0],d=c[1],f=function(){d((function(t){return!t}))};return(0,b.jsxs)("li",{className:N,children:[(0,b.jsx)("h2",{children:r&&(0,b.jsx)("strike",{children:n})||n}),(0,b.jsxs)("span",{children:[(0,b.jsx)("button",{onClick:function(){return a.updateTask(e,null,!0)},children:(0,b.jsx)("img",{src:r?A:R,alt:"check"})}),(0,b.jsx)("button",{onClick:f,children:(0,b.jsx)("img",{src:J,alt:"edit"})}),l&&(0,b.jsx)(F,{className:P,onCancel:f,children:(0,b.jsxs)("form",{onSubmit:function(){return function(t){var e=i.current.value;if(""===e.trim())return i.current.value="",void f();a.updateTask(t,e,!1),i.current.value="",f()}(e)},children:[(0,b.jsx)("label",{children:(0,b.jsx)("h2",{children:" Enter new title"})}),(0,b.jsx)("input",{autoFocus:!0,defaultValue:n,ref:i,type:"text"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("button",{type:"reset",onClick:f,children:(0,b.jsx)("img",{src:U,alt:"cancel"})}),(0,b.jsx)("button",{type:"submit",children:(0,b.jsx)("img",{src:Z,alt:"update"})})]})]})}),(0,b.jsx)("button",{onClick:function(){return a.deleteTask(e)},children:(0,b.jsx)("img",{src:V,alt:"delete"})})]})]},e)},q=function(){var t=(0,u.useContext)(v),e=t.tasks.filter((function(t){return!1===t.done})),n=t.tasks.filter((function(t){return!0===t.done}));return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("ul",{className:T,children:0===e.length&&(0,b.jsx)("p",{children:"Nothing here yet!"})||e.map((function(t){return(0,b.jsx)(B,C({},t))}))}),(0,b.jsx)("ul",{className:T,children:0===n.length&&(0,b.jsx)("p",{children:"Nothing here yet!"})||n.map((function(t){return(0,b.jsx)(B,C({},t))}))})]})},L=function(){return(0,b.jsx)(y,{children:(0,b.jsxs)("div",{className:r,children:[(0,b.jsx)("h1",{children:"To Do"}),(0,b.jsx)(S,{}),(0,b.jsx)(q,{})]})})}},70:function(t,e,n){t.exports=n.p+"static/media/add.79748b84641690fa0572.png"},515:function(t,e,n){t.exports=n.p+"static/media/bin.a6fd29509719f079bfd7.png"},625:function(t,e,n){t.exports=n.p+"static/media/cancel.6665594816ab2586f5cb.png"},827:function(t,e,n){t.exports=n.p+"static/media/checked.1512888c84e9df01470d.png"},293:function(t,e,n){t.exports=n.p+"static/media/edit.632970cd32a7fc91648c.png"},988:function(t,e,n){t.exports=n.p+"static/media/uncheck.0d15f726c9ffc96f69c2.png"},630:function(t,e,n){t.exports=n.p+"static/media/update.85362a3368e7de25d12f.png"}}]);
//# sourceMappingURL=150.dc8ccd73.chunk.js.map