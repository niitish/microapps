"use strict";(self.webpackChunkmicroapps=self.webpackChunkmicroapps||[]).push([[974],{974:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r="ToDo_todo__x68SQ",a=n(907);var i=n(181);function s(t){return function(t){if(Array.isArray(t))return(0,a.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,i.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,c=n(885),u=n(791),d=new Uint8Array(16);function l(){if(!o&&!(o="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(d)}var f=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var p=function(t){return"string"===typeof t&&f.test(t)},m=[],x=0;x<256;++x)m.push((x+256).toString(16).substr(1));var h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(m[t[e+0]]+m[t[e+1]]+m[t[e+2]]+m[t[e+3]]+"-"+m[t[e+4]]+m[t[e+5]]+"-"+m[t[e+6]]+m[t[e+7]]+"-"+m[t[e+8]]+m[t[e+9]]+"-"+m[t[e+10]]+m[t[e+11]]+m[t[e+12]]+m[t[e+13]]+m[t[e+14]]+m[t[e+15]]).toLowerCase();if(!p(n))throw TypeError("Stringified UUID is invalid");return n};var j=function(t,e,n){var r=(t=t||{}).random||(t.rng||l)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=r[a];return e}return h(r)},k=n(184),v=u.createContext({tasks:[],addTask:function(t){},deleteTask:function(t){},updateTask:function(t,e,n){}}),g=function(t){var e=JSON.parse(localStorage.getItem("tasks"))||[],n=(0,u.useState)(e),r=(0,c.Z)(n,2),a=r[0],i=r[1],o={tasks:a,addTask:function(t){var e={id:j(),title:t,done:!1};localStorage.setItem("tasks",JSON.stringify([e].concat(s(a)))),i((function(t){return[e].concat(s(t))}))},deleteTask:function(t){var e=a.filter((function(e){return e.id!==t}));localStorage.setItem("tasks",JSON.stringify(e)),i(e)},updateTask:function(t,e,n){var r=a.find((function(e){return e.id===t}));n?r.done=!r.done:r.title=e;var o=a.filter((function(e){return e.id!==t}));o=r.done?[].concat(s(o),[r]):[r].concat(s(o)),localStorage.setItem("tasks",JSON.stringify(o)),i(o)}};return(0,k.jsx)(v.Provider,{value:o,children:t.children})},y=v,b="AddForm_form__Najl9",S=n(70),C=function(){var t=(0,u.useContext)(y),e=(0,u.useRef)();return(0,k.jsxs)("form",{className:b,onSubmit:function(n){n.preventDefault();var r=e.current.value;""!==r.trim()&&(t.addTask(r),e.current.value="")},children:[(0,k.jsx)("label",{htmlFor:"task",children:"Enter task"}),(0,k.jsxs)("section",{children:[(0,k.jsx)("input",{autoFocus:!0,ref:e,type:"text",name:"task",id:"task"}),(0,k.jsx)("button",{type:"submit",children:(0,k.jsx)("img",{src:S,alt:"add"})})]})]})},_="TaskItem_list__JRasK",T="TaskItem_modal__UBGqi",N=n(164),w="Modal_modal__pba1a",I="Modal_backdrop__mYw5T",R=function(t){var e="".concat(w," ").concat(t.className);return(0,k.jsxs)(k.Fragment,{children:[N.createPortal((0,k.jsx)("div",{className:I,onClick:t.onCancel}),document.getElementById("backdrop")),N.createPortal((0,k.jsx)("div",{className:e,children:t.children}),document.getElementById("modal"))]})},E=n(827),F=n(515),A=n(988),J=n(293),V=n(625),D=n(630),O=function(t){var e=t.tasks,n=(0,u.useContext)(y),r=(0,u.useRef)(),a=(0,u.useState)(!1),i=(0,c.Z)(a,2),s=i[0],o=i[1],d=function(){o((function(t){return!t}))};return(0,k.jsx)("ul",{className:_,children:0===e.length?(0,k.jsx)("p",{children:"Nothing here yet."}):e.map((function(t){var e=t.id,a=t.title,i=t.done;return(0,k.jsxs)("li",{children:[(0,k.jsx)("h2",{children:i&&(0,k.jsx)("strike",{children:a})||a}),(0,k.jsxs)("span",{children:[(0,k.jsx)("button",{onClick:function(){return n.updateTask(e,null,!0)},children:(0,k.jsx)("img",{src:i?A:E,alt:"check"})}),(0,k.jsx)("button",{onClick:d,children:(0,k.jsx)("img",{src:J,alt:"edit"})}),s&&(0,k.jsx)(R,{className:T,onCancel:d,children:(0,k.jsxs)("form",{onSubmit:function(){return function(t){var e=r.current.value;if(""===e.trim())return r.current.value="",void d();n.updateTask(t,e,!1),r.current.value="",d()}(e)},children:[(0,k.jsx)("label",{children:(0,k.jsx)("h2",{children:" Enter new title"})}),(0,k.jsx)("input",{autoFocus:!0,ref:r,type:"text"}),(0,k.jsxs)("div",{children:[(0,k.jsx)("button",{type:"reset",onClick:d,children:(0,k.jsx)("img",{src:V,alt:"cancel"})}),(0,k.jsx)("button",{type:"submit",children:(0,k.jsx)("img",{src:D,alt:"update"})})]})]})}),(0,k.jsx)("button",{onClick:function(){return n.deleteTask(e)},children:(0,k.jsx)("img",{src:F,alt:"delete"})})]})]},e)}))})},U=function(){var t=(0,u.useContext)(y);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(O,{tasks:t.tasks.filter((function(t){return!1===t.done}))}),(0,k.jsx)(O,{tasks:t.tasks.filter((function(t){return!0===t.done}))})]})},Z=function(){return(0,k.jsx)(g,{children:(0,k.jsxs)("div",{className:r,children:[(0,k.jsx)("h1",{children:"To Do"}),(0,k.jsx)(C,{}),(0,k.jsx)(U,{})]})})}},70:function(t,e,n){t.exports=n.p+"static/media/add.79748b84641690fa0572.png"},515:function(t,e,n){t.exports=n.p+"static/media/bin.a6fd29509719f079bfd7.png"},625:function(t,e,n){t.exports=n.p+"static/media/cancel.6665594816ab2586f5cb.png"},827:function(t,e,n){t.exports=n.p+"static/media/checked.1512888c84e9df01470d.png"},293:function(t,e,n){t.exports=n.p+"static/media/edit.632970cd32a7fc91648c.png"},988:function(t,e,n){t.exports=n.p+"static/media/uncheck.0d15f726c9ffc96f69c2.png"},630:function(t,e,n){t.exports=n.p+"static/media/update.85362a3368e7de25d12f.png"}}]);
//# sourceMappingURL=974.f64d1716.chunk.js.map