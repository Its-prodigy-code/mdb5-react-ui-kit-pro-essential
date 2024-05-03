import e,{useRef as r,useState as n,useCallback as t,useEffect as a}from"react";import o from"clsx";var i=function(){return i=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},i.apply(this,arguments)};var l=function(l){var c=l.video,f=l.containerRef,s=l.lazyRef,y=l.lazyOffset,u=l.lazySrc,m=l.lazyError,v=l.lazyDelay,d=l.lazyPlaceholder,p=l.animation,z=l.className,O=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}(l,["video","containerRef","lazyRef","lazyOffset","lazySrc","lazyError","lazyDelay","lazyPlaceholder","animation","className"]),g=r(null),w=s||g,h=n(d||"..."),b=h[0],E=h[1],P=n(!1),j=P[0],L=P[1],R=n(!1),x=R[0],N=R[1],S=o("none"!==p&&j&&"animation ".concat(p),z),D=t((function(){var e=w.current.getBoundingClientRect();if(f){var r=f.current.getBoundingClientRect();r.y>0&&r.y<window.innerHeight&&e.y>=r.y&&e.y<=r.y+r.height&&e.y<=window.innerHeight&&N(!0)}e.top+y<=window.innerHeight&&e.bottom>=0&&N(!0)}),[y,w,f]),H=t((function(){m&&E(m),L(!0)}),[m]);return a((function(){x&&setTimeout((function(){u&&E(u),L(!0)}),v)}),[x,v,u]),a((function(){var e;e=f?f.current.classList.contains("lazy-container")?window:f.current:window;var r=w.current;return e.addEventListener("scroll",D),r.addEventListener("error",H),x&&e.removeEventListener("scroll",D),function(){e.removeEventListener("scroll",D),r.removeEventListener("error",H)}}),[f,D,x,H,w]),c?e.createElement("video",i({className:S,src:b,ref:w},O)):e.createElement("img",i({className:S,src:b,ref:w},O))};l.defaultProps={lazyDelay:500,lazyOffset:0,animation:"fade-in"};export{l as default};