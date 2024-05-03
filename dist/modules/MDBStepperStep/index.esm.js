import e from"clsx";import t,{useContext as r,useState as o,useRef as n,useEffect as a,useCallback as i}from"react";var p=function(){return p=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},p.apply(this,arguments)};var l=t.createContext({activeItem:1,setActiveItem:null,stepperHeight:0,setStepperHeight:null,prevState:1,setPrevState:null,steps:[],linear:!1,visited:[],setVisited:null,noEditable:!1,vertical:!1,mobile:!1,verticalBreakpoint:!1}),s=t.createContext({itemId:0}),c=function(c){var m=c.className,u=c.itemId,f=c.tag,d=c.children,v=c.stepperRef,g=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(c,["className","itemId","tag","children","stepperRef"]),y=r(l),b=y.activeItem,h=y.setStepperHeight,S=y.prevState,O=y.linear,w=y.visited,I=y.noEditable,E=y.mobile,P=o(!1),j=P[0],x=P[1],F=o(!1),H=F[0],C=F[1],N=n(null),T=v||N,q=e("stepper-step",b===u&&"stepper-active",H&&"was-validated",j&&(I?"stepper-disabled":"stepper-completed"),m);a((function(){w.includes(u)&&O&&C(!0)}),[u,w,O]);var B=i((function(){var e,t=T.current,r=t.querySelector(".stepper-content"),o=t.parentNode.querySelector(".stepper-mobile-footer"),n=r&&getComputedStyle(r),a=o?getComputedStyle(o):"",i=(e=E?t.parentNode.querySelector(".stepper-mobile-head"):t.querySelector(".stepper-head"))&&getComputedStyle(e);if(r&&n){var p=r.offsetHeight+parseFloat(n.marginTop)+parseFloat(n.marginBottom),l=e.offsetHeight+parseFloat(i.marginTop)+parseFloat(i.marginBottom),s=a?o.offsetHeight+parseFloat(a.marginTop)+parseFloat(a.marginBottom):0;h(l+p+s)}}),[h,T,E]);return a((function(){b===u&&(setTimeout((function(){B()}),20),H&&setTimeout((function(){B()}),250))}),[u,b,B,H]),a((function(){S===u&&x(!0)}),[S,u]),a((function(){return window.addEventListener("resize",B),function(){window.removeEventListener("resize",B)}}),[B]),t.createElement(s.Provider,{value:{itemId:u}},t.createElement(f,p({className:q,ref:T},g),d))};c.defaultProps={tag:"li"};export{c as default};