import n,{useRef as r,useCallback as t,useEffect as e}from"react";var i=function(){return i=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i]);return n},i.apply(this,arguments)};var o=function(o){var l=o.infiniteScrollRef,c=o.tag,f=o.infiniteDirection,a=o.onInfiniteScroll,u=o.windowParent,d=o.children,s=function(n,r){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(t[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(e=Object.getOwnPropertySymbols(n);i<e.length;i++)r.indexOf(e[i])<0&&Object.prototype.propertyIsEnumerable.call(n,e[i])&&(t[e[i]]=n[e[i]])}return t}(o,["infiniteScrollRef","tag","infiniteDirection","onInfiniteScroll","windowParent","children"]),p=r(null),w=l||p,g=t((function(){if(u)return window.scrollY+window.innerHeight===document.documentElement.scrollHeight;var n=w.current.getBoundingClientRect();return"x"===f?n.width+w.current.scrollLeft+10>=w.current.scrollWidth:n.height+w.current.scrollTop>=w.current.scrollHeight}),[u,f,w]),h=t((function(){g()&&a&&a()}),[g,a]);return e((function(){var n=u?window:w.current;return n.addEventListener("scroll",h),function(){n.removeEventListener("scroll",h)}}),[h,w,u]),n.createElement(c,i({ref:w},s),d)};o.defaultProps={tag:"div",windowParent:!1};export{o as default};