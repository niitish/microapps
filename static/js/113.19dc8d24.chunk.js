"use strict";(self.webpackChunkmicroapps=self.webpackChunkmicroapps||[]).push([[113],{113:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var r=t(885),s=t(791),c="Clock_clock__TpbXY",u=t(184),a=function(){var e=new Date,n=(0,s.useState)(e.getHours()),t=(0,r.Z)(n,2),a=t[0],i=t[1],l=(0,s.useState)(e.getMinutes()),o=(0,r.Z)(l,2),f=o[0],p=o[1],d=(0,s.useState)(e.getSeconds()),h=(0,r.Z)(d,2),k=h[0],v=h[1],j=(0,s.useCallback)((function(){59===k?(v(0),59===f?(p(0),i(24===a?0:function(e){return e+1})):p((function(e){return e+1}))):v((function(e){return e+1}))}),[k,f,a]);return(0,s.useEffect)((function(){var e=setInterval(j,1e3);return function(){clearInterval(e)}}),[j]),(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("div",{children:"the time is"}),(0,u.jsx)("span",{children:a}),":",(0,u.jsx)("span",{children:f}),":",(0,u.jsx)("span",{children:k})]})}}}]);
//# sourceMappingURL=113.19dc8d24.chunk.js.map