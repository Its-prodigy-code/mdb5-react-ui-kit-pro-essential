"use strict";var e=require("clsx"),t=require("react"),r=require("react-dom"),n=require("react-popper");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e),l=o(t),i=o(r),c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};function u(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}var p=function(e){var r=u(e,[]),n=t.useState(!1),o=n[0],i=n[1],p=a.default("ripple-wave",o&&"active");return t.useEffect((function(){var e=setTimeout((function(){i(!0)}),50);return function(){clearTimeout(e)}}),[]),l.default.createElement("div",c({className:p},r))},f=l.default.forwardRef((function(e,r){var n=e.className,o=e.rippleTag,i=e.rippleCentered,f=e.rippleDuration,s=e.rippleUnbound,d=e.rippleRadius,m=e.rippleColor,g=e.children,b=e.onClick,h=u(e,["className","rippleTag","rippleCentered","rippleDuration","rippleUnbound","rippleRadius","rippleColor","children","onClick"]),v=[0,0,0],y=["primary","secondary","success","danger","warning","info","light","dark"],C=t.useState([]),k=C[0],E=C[1],w=t.useState(!1),N=w[0],x=w[1],T=a.default("ripple","ripple-surface",s&&"ripple-surface-unbound",N&&"ripple-surface-"+m,n),O=function(){if(y.find((function(e){return e===(null==m?void 0:m.toLowerCase())})))return x(!0);var e=S(m).join(",");return"radial-gradient(circle, "+"rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%".split("{{color}}").join(""+e)+")"},S=function(e){return"transparent"===e.toLowerCase()?v:"#"===e[0]?function(e){return e.length<7&&(e="#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)]}(e):(-1===e.indexOf("rgb")&&(e=function(e){var t=document.body.appendChild(document.createElement("fictum")),r="rgb(1, 2, 3)";return t.style.color=r,t.style.color!==r?v:(t.style.color=e,t.style.color===r||""===t.style.color?v:(e=getComputedStyle(t).color,document.body.removeChild(t),e))}(e)),0===e.indexOf("rgb")?function(e){return(e=e.match(/[.\d]+/g).map((function(e){return+Number(e)}))).length=3,e}(e):v)},R=function(e){var t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top,o=t.height,a=t.width,l=f&&.5*f,u=f&&f-.5*f,p=function(e){var t=e.offsetX,r=e.offsetY,n=e.height,o=e.width,a=r<=n/2,l=t<=o/2,i=function(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))},c=r===n/2&&t===o/2,u=!0===a&&!1===l,p=!0===a&&!0===l,f=!1===a&&!0===l,s=!1===a&&!1===l,d={topLeft:i(t,r),topRight:i(o-t,r),bottomLeft:i(t,n-r),bottomRight:i(o-t,n-r)},m=0;return c||s?m=d.topLeft:f?m=d.topRight:p?m=d.bottomRight:u&&(m=d.bottomLeft),2*m}({offsetX:i?o/2:r,offsetY:i?a/2:n,height:o,width:a}),s=d||p/2,m={left:i?a/2-s+"px":r-s+"px",top:i?o/2-s+"px":n-s+"px",height:d?2*d+"px":p+"px",width:d?2*d+"px":p+"px",transitionDelay:"0s, "+l+"ms",transitionDuration:f+"ms, "+u+"ms"};return N?m:c(c({},m),{backgroundImage:""+O()})};return t.useEffect((function(){var e=setTimeout((function(){k.length>0&&E(k.splice(1,k.length-1))}),f);return function(){clearTimeout(e)}}),[f,k]),l.default.createElement(o,c({className:T,onClick:function(e){return function(e){var t=R(e),r=k.concat(t);E(r),b&&b(e)}(e)},ref:r},h),g,k.map((function(e,t){return l.default.createElement(p,{key:t,style:e})})))}));f.defaultProps={rippleTag:"div",rippleDuration:500,rippleRadius:0,rippleColor:"dark"};var s=l.default.forwardRef((function(e,r){var n,o=e.className,i=e.color,p=e.outline,s=e.children,d=e.rounded,m=e.disabled,g=e.floating,b=e.size,h=e.href,v=e.block,y=e.active,C=e.toggle,k=e.noRipple,E=e.tag,w=u(e,["className","color","outline","children","rounded","disabled","floating","size","href","block","active","toggle","noRipple","tag"]),N=t.useState(y||!1),x=N[0],T=N[1],O=i&&["light","link"].includes(i)||p?"dark":"light";n="none"!==i?p?i?"btn-outline-"+i:"btn-outline-primary":i?"btn-"+i:"btn-primary":"";var S=a.default("none"!==i&&"btn",n,d&&"btn-rounded",g&&"btn-floating",b&&"btn-"+b,(h||"button"!==E)&&m?"disabled":"",v&&"btn-block",x&&"active",o);return h&&"a"!==E&&(E="a"),["hr","img","input"].includes(E)||k?l.default.createElement(E,c({className:S,onClick:C?function(){T(!x)}:void 0,disabled:!(!m||"button"!==E)||void 0,href:h,ref:r},w),s):l.default.createElement(f,c({rippleTag:E,rippleColor:O,className:S,onClick:C?function(){T(!x)}:void 0,disabled:!(!m||"button"!==E)||void 0,href:h,ref:r},w),s)}));s.defaultProps={tag:"button",role:"button",color:"primary"};var d=l.default.forwardRef((function(e,t){var r=e.className,n=e.tag,o=e.children,i=u(e,["className","tag","children"]),p=a.default("popconfirm-buttons-container",r);return l.default.createElement(n,c({className:p,ref:t},i),o)}));d.defaultProps={tag:"div"};var m=function(e){var r=e.className,o=e.btnClassName,p=e.btnChildren,f=e.confirmBtnText,m=e.cancelBtnText,g=e.placement,b=e.tag,h=e.children,v=e.modal,y=e.poperStyle,C=e.onClick,k=e.onConfirm,E=e.options,w=e.popperTag,N=u(e,["className","btnClassName","btnChildren","confirmBtnText","cancelBtnText","placement","tag","children","modal","poperStyle","onClick","onConfirm","options","popperTag"]),x=t.useState(),T=x[0],O=x[1],S=t.useState(),R=S[0],P=S[1],j=t.useState(!1),L=j[0],B=j[1],D=t.useState(!1),I=D[0],q=D[1],z=t.useState(!1),M=z[0],X=z[1],Y=n.usePopper(T,R,c({placement:g},E)),F=Y.styles,U=Y.attributes,A=a.default(v?"popconfirm-modal":"popconfirm-popover","shadow-4",r),G=a.default("popconfirm",!v&&"fade",I&&"show"),H=t.useCallback((function(e){var t=T===e.target,r=e.target===R,n=R&&R.contains(e.target),o=null==T?void 0:T.contains(e.target);t||r||n||o||B(!1)}),[R,T]);t.useEffect((function(){L?(X(!0),setTimeout((function(){q(!0)}),0)):(q(!1),v?X(!1):setTimeout((function(){X(!1)}),150))}),[L,v]),t.useEffect((function(){return window.addEventListener("click",H),function(){window.removeEventListener("click",H)}}),[H]);var J=l.default.createElement("div",{className:G},h,l.default.createElement(d,null,l.default.createElement(s,{onClick:function(){return B(!1)},color:"float",size:"sm"},m),l.default.createElement(s,{onClick:function(e){k&&k(e),B(!1)},size:"sm"},f)));return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,c({onClick:function(e){B(!0),C&&C(e)},className:o},N,{ref:O}),p),M&&i.default.createPortal(l.default.createElement(l.default.Fragment,null,v?l.default.createElement("div",{className:"popconfirm-backdrop"},l.default.createElement(w,{ref:P,className:A},J)):l.default.createElement(w,c({className:A,ref:P,style:c(c({},F.popper),y)},U.popper,{"data-testid":"popoverTestID"}),J)),document.body))};m.defaultProps={tag:s,popperTag:"div",placement:"top",modal:!1,cancelBtnText:"Cancel",confirmBtnText:"Ok"},module.exports=m;
