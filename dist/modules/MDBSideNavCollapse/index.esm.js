import e from"clsx";import t,{useState as n,useRef as r,useCallback as o,useEffect as l}from"react";var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var c=function(c){var s=c.className,u=c.center,f=c.children,v=c.show,d=c.id,p=c.navbar,h=c.tag,m=c.collapseRef,y=c.style,b=i(c,["className","center","children","show","id","navbar","tag","collapseRef","style"]),g=n(!1),w=g[0],O=g[1],j=n(""),E=j[0],N=j[1],x=n(!1),P=x[0],R=x[1],S=n(void 0),z=S[0],A=S[1],C=n(!1),H=C[0],L=C[1],T=e(H?"collapsing":"collapse",!H&&(w||P)&&"show",p&&"navbar-collapse",u&&"justify-content-center",s),k=r(null),q=m||k,I=o((function(){(w||P)&&A(void 0)}),[w,P]);return l((function(){var e;void 0===z&&(w||P)&&A(null===(e=null==q?void 0:q.current)||void 0===e?void 0:e.scrollHeight)}),[z,w,P,q]),l((function(){"string"==typeof v?(N(v),R(E===d)):O(v),(P||w)&&L(!0);var e=setTimeout((function(){L(!1)}),350);return function(){clearTimeout(e)}}),[v,w,d,E,P]),l((function(){var e;A(w||P?null===(e=null==q?void 0:q.current)||void 0===e?void 0:e.scrollHeight:0)}),[w,P,q]),l((function(){return window.addEventListener("resize",I),function(){window.removeEventListener("resize",I)}}),[I]),t.createElement(h,a({style:a({height:z},y),id:d,className:T},b,{ref:q}),f)};c.defaultProps={tag:"div"};var s=function(n){var o=n.className,s=n.children,u=n.show,f=n.sidenavCollapseRef,v=i(n,["className","children","show","sidenavCollapseRef"]),d=r(null),p=f||d,h=e("sidenav-collapse",o);return l((function(){var e=p.current.querySelectorAll(".sidenav-link"),t=u?"1":"-1";e.forEach((function(e){e.setAttribute("tabindex",t)}))}),[u,p]),t.createElement(c,a({tag:"ul",show:u,className:h,collapseRef:p},v),s)};export{s as default};