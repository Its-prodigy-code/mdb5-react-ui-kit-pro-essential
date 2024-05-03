import n from"clsx";import t,{useState as e,useRef as i,useCallback as a,useEffect as r}from"react";var o=function(){return o=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var a in t=arguments[e])Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n},o.apply(this,arguments)};var l=function(l){var c=l.animation,s=l.animationRef,u=l.delay,m=l.infinite,f=l.duration,d=l.enableTarget,y=l.target,p=l.repeatOnScroll,g=l.reset,v=l.setTarget,b=l.start,O=l.className,h=l.tag,w=l.children,E=l.style,C=function(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(n);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(e[i[a]]=n[i[a]])}return e}(l,["animation","animationRef","delay","infinite","duration","enableTarget","target","repeatOnScroll","reset","setTarget","start","className","tag","children","style"]),T=e(y),D=T[0],S=T[1],j=e(!1),N=j[0],I=j[1],P=i(!0),x=n(D&&"animation",D&&c,O),L=i(null),k=s||L,H=function(){S(!D)},R=a((function(){if(k.current){var n=k.current.getBoundingClientRect().top+document.body.scrollTop,t=k.current.offsetHeight,e=n<=window.innerHeight&&n+t>=0;e&&P.current?(P.current=!1,u?setTimeout((function(){S(!0),I(!0)}),u):(S(!0),I(!0))):!e&&p&&(I(!1),P.current=!0)}}),[k,p,u]);return r((function(){return"onScroll"===b&&window.addEventListener("scroll",R),function(){window.removeEventListener("scroll",R)}}),[R,b]),r((function(){S(y)}),[y]),r((function(){"onLoad"===b&&S(!0)}),[b]),r((function(){D&&!m&&g&&setTimeout((function(){S(!D),d&&v(!1)}),f)}),[D,f,d,v,m,g]),t.createElement(t.Fragment,null,"onClick"===b&&!1===d&&t.createElement(h,o({onClick:H,className:x,ref:k},C,{style:o(o({},E),{animationDuration:f+"ms",animationIterationCount:m?"infinite":null,animationDelay:u?u+"ms":null})}),w),"onHover"===b&&!1===d&&t.createElement(h,o({onMouseEnter:H,className:x,ref:k},C,{style:o(o({},E),{animationDuration:f+"ms",animationIterationCount:m?"infinite":null,animationDelay:u?u+"ms":null})}),w),("onLoad"===b||!0===d)&&t.createElement(h,o({className:x,ref:k},C,{style:o(o({},E),{animationDuration:f+"ms",animationIterationCount:m?"infinite":null,animationDelay:u?u+"ms":null})}),w),"onScroll"===b&&t.createElement(h,o({className:x,ref:k},C,{style:o(o({},E),{animationDuration:f+"ms",visibility:N?"visible":"hidden",animationIterationCount:m?"infinite":null})}),w))};l.defaultProps={tag:"div",start:"onClick",duration:500,reset:!1,animation:"slide-right",target:!1,enableTarget:!1,repeatOnScroll:!1,infinite:!1};export{l as default};
