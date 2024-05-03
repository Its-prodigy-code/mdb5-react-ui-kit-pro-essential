"use strict";var e=require("clsx"),t=require("react"),n=require("react-dom"),a=require("react-popper");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=o(e),l=o(t),c=o(n),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function u(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}var s=function(e){var n=u(e,[]),a=t.useState(!1),o=a[0],c=a[1],s=r.default("ripple-wave",o&&"active");return t.useEffect((function(){var e=setTimeout((function(){c(!0)}),50);return function(){clearTimeout(e)}}),[]),l.default.createElement("div",i({className:s},n))},f=l.default.forwardRef((function(e,n){var a=e.className,o=e.rippleTag,c=e.rippleCentered,f=e.rippleDuration,p=e.rippleUnbound,d=e.rippleRadius,m=e.rippleColor,v=e.children,g=e.onClick,b=u(e,["className","rippleTag","rippleCentered","rippleDuration","rippleUnbound","rippleRadius","rippleColor","children","onClick"]),h=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=l.default.useRef();return l.default.useEffect((function(){e.forEach((function(e){e&&("function"==typeof e?e(n.current):e.current=n.current)}))}),[e]),n}(n,t.useRef(null)),y=[0,0,0],E=["primary","secondary","success","danger","warning","info","light","dark"],C=t.useState([]),N=C[0],w=C[1],k=t.useState(!1),S=k[0],T=k[1],M=r.default("ripple","ripple-surface",p&&"ripple-surface-unbound",S&&"ripple-surface-".concat(m),a),x=function(){if(E.find((function(e){return e===(null==m?void 0:m.toLowerCase())})))return T(!0);var e=I(m).join(","),t="rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%".split("{{color}}").join("".concat(e));return"radial-gradient(circle, ".concat(t,")")},I=function(e){return"transparent"===e.toLowerCase()?y:"#"===e[0]?function(e){return e.length<7&&(e="#".concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2]).concat(e[3]).concat(e[3])),[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)]}(e):(-1===e.indexOf("rgb")&&(e=function(e){var t=document.body.appendChild(document.createElement("fictum")),n="rgb(1, 2, 3)";return t.style.color=n,t.style.color!==n?y:(t.style.color=e,t.style.color===n||""===t.style.color?y:(e=getComputedStyle(t).color,document.body.removeChild(t),e))}(e)),0===e.indexOf("rgb")?function(e){return(e=e.match(/[.\d]+/g).map((function(e){return+Number(e)}))).length=3,e}(e):y)},L=function(e){var t,n=null===(t=h.current)||void 0===t?void 0:t.getBoundingClientRect(),a=e.clientX-n.left,o=e.clientY-n.top,r=n.height,l=n.width,u={delay:f&&.5*f,duration:f&&f-.5*f},s=function(e){var t=e.offsetX,n=e.offsetY,a=e.height,o=e.width,r=n<=a/2,l=t<=o/2,c=function(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))},i=n===a/2&&t===o/2,u=!0===r&&!1===l,s=!0===r&&!0===l,f=!1===r&&!0===l,p=!1===r&&!1===l,d={topLeft:c(t,n),topRight:c(o-t,n),bottomLeft:c(t,a-n),bottomRight:c(o-t,a-n)},m=0;return i||p?m=d.topLeft:f?m=d.topRight:s?m=d.bottomRight:u&&(m=d.bottomLeft),2*m}({offsetX:c?r/2:a,offsetY:c?l/2:o,height:r,width:l}),p=d||s/2,m={left:"".concat(c?l/2-p:a-p,"px"),top:"".concat(c?r/2-p:o-p,"px"),height:"".concat(d?2*d:s,"px"),width:"".concat(d?2*d:s,"px"),transitionDelay:"0s, ".concat(u.delay,"ms"),transitionDuration:"".concat(f,"ms, ").concat(u.duration,"ms")};return S?m:i(i({},m),{backgroundImage:"".concat(x())})};return t.useEffect((function(){var e=setTimeout((function(){N.length>0&&w(N.splice(1,N.length-1))}),f);return function(){clearTimeout(e)}}),[f,N]),l.default.createElement(o,i({className:M,onClick:function(e){return function(e){var t=L(e),n=N.concat(t);w(n),g&&g(e)}(e)},ref:h},b),v,N.map((function(e,t){return l.default.createElement(s,{key:t,style:e})})))}));f.defaultProps={rippleTag:"div",rippleDuration:500,rippleRadius:0,rippleColor:"dark"};var p=l.default.forwardRef((function(e,n){var a,o=e.className,c=e.color,s=e.outline,p=e.children,d=e.rounded,m=e.disabled,v=e.floating,g=e.size,b=e.href,h=e.block,y=e.active,E=e.toggle,C=e.noRipple,N=e.tag,w=u(e,["className","color","outline","children","rounded","disabled","floating","size","href","block","active","toggle","noRipple","tag"]),k=t.useState(y||!1),S=k[0],T=k[1],M=c&&["light","link"].includes(c)||s?"dark":"light";a="none"!==c?s?c?"btn-outline-".concat(c):"btn-outline-primary":c?"btn-".concat(c):"btn-primary":"";var x=r.default("none"!==c&&"btn",a,d&&"btn-rounded",v&&"btn-floating",g&&"btn-".concat(g),"".concat((b||"button"!==N)&&m?"disabled":""),h&&"btn-block",S&&"active",o);return b&&"a"!==N&&(N="a"),["hr","img","input"].includes(N)||C?l.default.createElement(N,i({className:x,onClick:E?function(){T(!S)}:void 0,disabled:!(!m||"button"!==N)||void 0,href:b,ref:n},w),p):l.default.createElement(f,i({rippleTag:N,rippleColor:M,className:x,onClick:E?function(){T(!S)}:void 0,disabled:!(!m||"button"!==N)||void 0,href:b,ref:n},w),p)}));p.defaultProps={tag:"button",role:"button",color:"primary"};var d=function(e){var n=e.className,o=e.children,s=e.disableMouseDown,f=e.tag,p=e.tooltipTag,d=e.options,m=e.placement,v=e.title,g=e.wrapperProps,b=e.wrapperClass,h=e.onMouseEnter,y=e.onMouseLeave,E=u(e,["className","children","disableMouseDown","tag","tooltipTag","options","placement","title","wrapperProps","wrapperClass","onMouseEnter","onMouseLeave"]),C=t.useState(null),N=C[0],w=C[1],k=t.useState(null),S=k[0],T=k[1],M=t.useState(!1),x=M[0],I=M[1],L=t.useState(!1),O=L[0],P=L[1],R=t.useState(!1),D=R[0],j=R[1],z=t.useState(!1),q=z[0],A=z[1],F=r.default("tooltip",D&&"show","fade","bs-tooltip-".concat(m),n),B=a.usePopper(N,S,i({placement:m},d)),X=B.styles,Y=B.attributes;t.useEffect((function(){var e,t;return x||O?(A(!0),e=setTimeout((function(){j(!0)}),4)):(j(!1),t=setTimeout((function(){A(!1)}),300)),function(){clearTimeout(e),clearTimeout(t)}}),[x,O]);var H=t.useCallback((function(e){e.target===N?P(!0):P(!1)}),[N]);return t.useEffect((function(){if(!s)return document.addEventListener("mousedown",H),function(){document.removeEventListener("mousedown",H)}}),[H,s]),l.default.createElement(l.default.Fragment,null,l.default.createElement(f,i({className:b,onMouseEnter:function(e){I(!0),h&&h(e)},onMouseLeave:function(e){I(!1),y&&y(e)},ref:w},g),o),q&&c.default.createPortal(l.default.createElement(p,i({ref:T,className:F,style:X.popper},Y.popper,{role:"tooltip"},E),l.default.createElement("div",{className:"tooltip-inner"},v)),document.body))};d.defaultProps={tag:p,tooltipTag:"div",placement:"top"};var m=l.default.createContext({activeItem:0,dynamic:!1,dynamicStyle:{color:"",icon:""},setDynamicStyle:null,setActiveItem:null,hoveredItem:0,setHoveredItem:null}),v=function(e){var t,n=e.className,a=e.icon,o=e.fab,c=e.fas,s=e.fal,f=e.far,p=e.flag,d=e.spin,m=e.fixed,v=e.flip,g=e.list,b=e.size,h=e.pull,y=e.pulse,E=e.color,C=e.border,N=e.rotate,w=e.inverse,k=e.stack,S=e.children,T=u(e,["className","icon","fab","fas","fal","far","flag","spin","fixed","flip","list","size","pull","pulse","color","border","rotate","inverse","stack","children"]);t=p?"flag":o?"fab":c?"fas":f?"far":s?"fal":"fa";var M=r.default(t,p?"flag-".concat(p):a&&"fa-".concat(a),b&&"fa-".concat(b),E&&"text-".concat(E),C&&"fa-border",N&&"fa-rotate-".concat(N),h&&"fa-pull-".concat(h),d&&"fa-spin",g&&"fa-li",m&&"fa-fw",y&&"fa-pulse",w&&"fa-inverse",v&&"fa-flip-".concat(v),k&&"fa-stack-".concat(k),n);return l.default.createElement("i",i({className:M},T),S)},g=function(e){var n=e.className,o=e.btnClassName,s=e.btnChildren,f=e.children,p=e.tag,d=e.popperTag,m=e.isOpen,v=e.placement,g=e.dismiss,b=e.options,h=e.poperStyle,y=e.onClick,E=u(e,["className","btnClassName","btnChildren","children","tag","popperTag","isOpen","placement","dismiss","options","poperStyle","onClick"]),C=t.useState(),N=C[0],w=C[1],k=t.useState(),S=k[0],T=k[1],M=a.usePopper(N,S,i({placement:v},b)),x=M.styles,I=M.attributes,L=t.useState(m),O=L[0],P=L[1],R=t.useState(!1),D=R[0],j=R[1],z=t.useState(!1),q=z[0],A=z[1],F=t.useState(!1),B=F[0],X=F[1],Y=r.default("popover fade",q&&"show","bs-popover-".concat("left"===v?"start":"right"===v?"end":v),n);t.useEffect((function(){m||P(!1)}),[m]);var H=t.useCallback((function(e){B&&S&&null!==S&&O&&N&&null!==N&&(N.contains(e.target)||P(!1))}),[B,O,S,N]);return t.useMemo((function(){var e;return O?(j(!0),setTimeout((function(){A(!0)}),150)):(e=setTimeout((function(){j(!1)}),150),A(!1)),function(){clearTimeout(e)}}),[O]),t.useEffect((function(){return O&&document.addEventListener("mousedown",H),function(){document.removeEventListener("mousedown",H)}}),[H,O]),l.default.createElement(l.default.Fragment,null,l.default.createElement(p,i({onClick:function(e){g?(X(!0),P(!0)):P(!O),y&&y(e)},className:o},E,{ref:w}),s),D&&c.default.createPortal(l.default.createElement(d,i({className:Y,ref:T,style:i(i({},x.popper),h)},I.popper,{"data-testid":"popoverTestID"}),f),document.body))};g.defaultProps={tag:p,popperTag:"div",placement:"bottom"};var b=function(e){var t=e.className,n=e.children,a=e.tag,o=u(e,["className","children","tag"]),c=r.default("popover-body",t);return l.default.createElement(a,i({className:c},o),n)};b.defaultProps={tag:"div"};var h=l.default.forwardRef((function(e,n){var a=e.className,o=e.color,c=e.itemId,s=e.iconClassName,f=e.insertAfter,p=e.insertBefore,h=e.icon,y=e.onClick,E=e.onMouseEnter,C=e.onMouseLeave,N=e.popover,w=e.size,k=e.title,S=e.tag,T=u(e,["className","color","itemId","iconClassName","insertAfter","insertBefore","icon","onClick","onMouseEnter","onMouseLeave","popover","size","title","tag"]),M=t.useContext(m),x=M.activeItem,I=M.setActiveItem,L=M.hoveredItem,O=M.setHoveredItem,P=M.dynamic,R=M.dynamicStyle,D=M.setDynamicStyle,j=!L&&x&&x>=c||L>=c,z=r.default(j&&"active",!o&&"text-primary",s);t.useEffect((function(){P&&((L||x)===c&&D({color:o,icon:h}))}),[x,c,o,h,P,D,L]);var q=l.default.createElement(l.default.Fragment,null,l.default.createElement(S,i({className:a,ref:n},T,{onMouseEnter:function(e){I&&O(c),E&&E(e)},onMouseLeave:function(e){I&&O(0),C&&C(e)},onClick:function(e){I&&I(c),y&&y(e)}}),p,l.default.createElement(v,{far:!j,fas:j,icon:R.icon?R.icon:h,size:w,className:z,style:{color:R.color?R.color:o&&o}}),f));return l.default.createElement(l.default.Fragment,null,k?l.default.createElement(d,{tag:"a",title:k},q):N?l.default.createElement(g,{tag:"a",btnChildren:q},l.default.createElement(b,null,N)):q)}));h.defaultProps={tag:"li",size:"sm"},module.exports=h;