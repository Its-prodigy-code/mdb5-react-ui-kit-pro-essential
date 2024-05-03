"use strict";var e=require("clsx"),t=require("react"),n=require("react-dom"),r=require("react-popper");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e),l=o(t),c=o(n),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var p=function(e){var n=u(e,[]),r=t.useState(!1),o=r[0],c=r[1],p=a.default("ripple-wave",o&&"active");return t.useEffect((function(){var e=setTimeout((function(){c(!0)}),50);return function(){clearTimeout(e)}}),[]),l.default.createElement("div",i({className:p},n))},f=function(e){var n=e.className,r=e.rippleTag,o=e.rippleCentered,c=e.rippleDuration,f=e.rippleUnbound,s=e.rippleRadius,d=e.rippleColor,m=e.children,g=e.onClick,b=e.rippleRef,h=u(e,["className","rippleTag","rippleCentered","rippleDuration","rippleUnbound","rippleRadius","rippleColor","children","onClick","rippleRef"]),v=t.useRef(null),y=b||v,C=[0,0,0],k=["primary","secondary","success","danger","warning","info","light","dark"],E=t.useState([]),w=E[0],N=E[1],T=t.useState(!1),x=T[0],O=T[1],R=a.default("ripple","ripple-surface",f&&"ripple-surface-unbound",x&&"ripple-surface-".concat(d),n),S=function(){if(k.find((function(e){return e===(null==d?void 0:d.toLowerCase())})))return O(!0);var e=P(d).join(","),t="rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%".split("{{color}}").join("".concat(e));return"radial-gradient(circle, ".concat(t,")")},P=function(e){return"transparent"===e.toLowerCase()?C:"#"===e[0]?function(e){return e.length<7&&(e="#".concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2]).concat(e[3]).concat(e[3])),[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)]}(e):(-1===e.indexOf("rgb")&&(e=function(e){var t=document.body.appendChild(document.createElement("fictum")),n="rgb(1, 2, 3)";return t.style.color=n,t.style.color!==n?C:(t.style.color=e,t.style.color===n||""===t.style.color?C:(e=getComputedStyle(t).color,document.body.removeChild(t),e))}(e)),0===e.indexOf("rgb")?function(e){return(e=e.match(/[.\d]+/g).map((function(e){return+Number(e)}))).length=3,e}(e):C)},j=function(e){var t=y.current.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,a=t.height,l=t.width,u={delay:c&&.5*c,duration:c&&c-.5*c},p=function(e){var t=e.offsetX,n=e.offsetY,r=e.height,o=e.width,a=n<=r/2,l=t<=o/2,c=function(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))},i=n===r/2&&t===o/2,u=!0===a&&!1===l,p=!0===a&&!0===l,f=!1===a&&!0===l,s=!1===a&&!1===l,d={topLeft:c(t,n),topRight:c(o-t,n),bottomLeft:c(t,r-n),bottomRight:c(o-t,r-n)},m=0;return i||s?m=d.topLeft:f?m=d.topRight:p?m=d.bottomRight:u&&(m=d.bottomLeft),2*m}({offsetX:o?a/2:n,offsetY:o?l/2:r,height:a,width:l}),f=s||p/2,d={left:"".concat(o?l/2-f:n-f,"px"),top:"".concat(o?a/2-f:r-f,"px"),height:"".concat(s?2*s:p,"px"),width:"".concat(s?2*s:p,"px"),transitionDelay:"0s, ".concat(u.delay,"ms"),transitionDuration:"".concat(c,"ms, ").concat(u.duration,"ms")};return x?d:i(i({},d),{backgroundImage:"".concat(S())})};return t.useEffect((function(){var e=setTimeout((function(){w.length>0&&N(w.splice(1,w.length-1))}),c);return function(){clearTimeout(e)}}),[c,w]),l.default.createElement(r,i({className:R,onClick:function(e){return function(e){var t=j(e),n=w.concat(t);N(n),g&&g(e)}(e)},ref:y},h),m,w.map((function(e,t){return l.default.createElement(p,{key:t,style:e})})))};f.defaultProps={rippleTag:"div",rippleDuration:500,rippleRadius:0,rippleColor:"dark"};var s=l.default.forwardRef((function(e,n){var r,o=e.className,c=e.color,p=e.outline,s=e.children,d=e.rounded,m=e.disabled,g=e.floating,b=e.size,h=e.href,v=e.block,y=e.active,C=e.toggle,k=e.noRipple,E=e.tag,w=u(e,["className","color","outline","children","rounded","disabled","floating","size","href","block","active","toggle","noRipple","tag"]),N=t.useState(y||!1),T=N[0],x=N[1],O=c&&["light","link"].includes(c)||p?"dark":"light";r="none"!==c?p?c?"btn-outline-".concat(c):"btn-outline-primary":c?"btn-".concat(c):"btn-primary":"";var R=a.default("none"!==c&&"btn",r,d&&"btn-rounded",g&&"btn-floating",b&&"btn-".concat(b),"".concat((h||"button"!==E)&&m?"disabled":""),v&&"btn-block",T&&"active",o);return h&&"a"!==E&&(E="a"),["hr","img","input"].includes(E)||k?l.default.createElement(E,i({className:R,onClick:C?function(){x(!T)}:void 0,disabled:!(!m||"button"!==E)||void 0,href:h,ref:n},w),s):l.default.createElement(f,i({rippleTag:E,rippleColor:O,className:R,onClick:C?function(){x(!T)}:void 0,disabled:!(!m||"button"!==E)||void 0,href:h,ref:n},w),s)}));s.defaultProps={tag:"button",role:"button",color:"primary"};var d=l.default.forwardRef((function(e,t){var n=e.className,r=e.tag,o=e.children,c=u(e,["className","tag","children"]),p=a.default("popconfirm-buttons-container",n);return l.default.createElement(r,i({className:p,ref:t},c),o)}));d.defaultProps={tag:"div"};var m=function(e){var n=e.className,o=e.btnClassName,p=e.btnChildren,f=e.confirmBtnText,m=e.cancelBtnText,g=e.placement,b=e.tag,h=e.children,v=e.modal,y=e.poperStyle,C=e.onClick,k=e.onConfirm,E=e.options,w=e.popperTag,N=u(e,["className","btnClassName","btnChildren","confirmBtnText","cancelBtnText","placement","tag","children","modal","poperStyle","onClick","onConfirm","options","popperTag"]),T=t.useState(),x=T[0],O=T[1],R=t.useState(),S=R[0],P=R[1],j=t.useState(!1),L=j[0],B=j[1],D=t.useState(!1),I=D[0],q=D[1],z=t.useState(!1),M=z[0],X=z[1],Y=r.usePopper(x,S,i({placement:g},E)),F=Y.styles,U=Y.attributes,A=a.default(v?"popconfirm-modal":"popconfirm-popover","shadow-4",n),G=a.default("popconfirm",!v&&"fade",I&&"show"),H=t.useCallback((function(e){var t=x===e.target,n=e.target===S,r=S&&S.contains(e.target),o=null==x?void 0:x.contains(e.target);t||n||r||o||B(!1)}),[S,x]);t.useEffect((function(){L?(X(!0),setTimeout((function(){q(!0)}),0)):(q(!1),v?X(!1):setTimeout((function(){X(!1)}),150))}),[L,v]),t.useEffect((function(){return window.addEventListener("click",H),function(){window.removeEventListener("click",H)}}),[H]);var J=l.default.createElement("div",{className:G},h,l.default.createElement(d,null,l.default.createElement(s,{onClick:function(){return B(!1)},color:"float",size:"sm"},m),l.default.createElement(s,{onClick:function(e){k&&k(e),B(!1)},size:"sm"},f)));return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,i({onClick:function(e){B(!0),C&&C(e)},className:o},N,{ref:O}),p),M&&c.default.createPortal(l.default.createElement(l.default.Fragment,null,v?l.default.createElement("div",{className:"popconfirm-backdrop"},l.default.createElement(w,{ref:P,className:A},J)):l.default.createElement(w,i({className:A,ref:P,style:i(i({},F.popper),y)},U.popper,{"data-testid":"popoverTestID"}),J)),document.body))};m.defaultProps={tag:s,popperTag:"div",placement:"top",modal:!1,cancelBtnText:"Cancel",confirmBtnText:"Ok"},module.exports=m;
