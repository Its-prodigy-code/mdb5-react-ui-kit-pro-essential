"use strict";var e=require("clsx"),t=require("react"),l=require("react-dom");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),o=n(t),a=n(l),c=function(){return c=Object.assign||function(e){for(var t,l=1,n=arguments.length;l<n;l++)for(var r in t=arguments[l])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)};var i=function(e){var l=e.className,n=e.tag,i=e.zoomLevel,u=e.fontAwesome,s=e.children,f=e.lightboxRef,d=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]])}return l}(e,["className","tag","zoomLevel","fontAwesome","children","lightboxRef"]),g=r.default("lightbox",l),m=t.useRef(null),h=t.useRef(null),b=t.useRef(null),y=t.useRef(null),v=t.useRef(null),p=t.useRef(null),x=f||p,w=t.useState(!1),E=w[0],N=w[1],k=t.useState(0),A=k[0],S=k[1],L=t.useState(!1),q=L[0],F=L[1],R=t.useState([]),O=R[0],C=R[1],j=t.useState(1),z=j[0],P=j[1],D=t.useState(!1),H=D[0],M=D[1],T=t.useState(""),W=T[0],I=T[1],X=t.useRef(),Y=t.useRef(),U=t.useRef(),V=t.useRef(),B=t.useRef(),G=t.useRef(),J=function(e,t){var l=e;return l>t.length-1&&(l=0),t[l].classList.contains("lightbox-disabled")?J(l+1,t):l},K=function(e,t){var l=e;return l<0&&(l=t.length-1),t[l].classList.contains("lightbox-disabled")?K(l-1,t):l},Q=t.useCallback((function(e){if(E)switch(e.preventDefault(),e.key){case"ArrowLeft":h.current&&h.current.click();break;case"ArrowRight":b.current&&b.current.click();break;case"ArrowUp":case"ArrowDown":v.current&&v.current.click();break;case"Escape":y.current&&y.current.click();break;case"Home":S(0);break;case"End":O.length>0&&S(O.length-1)}}),[E,O]),Z=t.useCallback((function(e,t){var l;document.body.classList.add("overflow-hidden"),N(!0),S(t),document.querySelectorAll(".lightbox-gallery-item").forEach((function(e){re(e)}));var n=null===(l=m.current)||void 0===l?void 0:l.querySelector(".lightbox-gallery-item.active");I(null==n?void 0:n.getAttribute("alt"))}),[]),$=function(){var e=J(A+1,O);S(e),P(1),M(!1),document.querySelectorAll(".lightbox-gallery-item").forEach((function(e){re(e)})),setTimeout((function(){var e,t=null===(e=m.current)||void 0===e?void 0:e.querySelector(".lightbox-gallery-item.active");I(null==t?void 0:t.getAttribute("alt"))}),10)},_=function(){var e=K(A-1,O);S(e),P(1),M(!1),document.querySelectorAll(".lightbox-gallery-item").forEach((function(e){re(e)})),setTimeout((function(){var e,t=null===(e=m.current)||void 0===e?void 0:e.querySelector(".lightbox-gallery-item.active");I(null==t?void 0:t.getAttribute("alt"))}),10)},ee=t.useCallback((function(){void 0===(document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)&&F(!1)}),[]),te=function(e){e.preventDefault();var t=e.touches,l=e.target,n=t?t[0].clientX:e.clientX,r=t?t[0].clientY:e.clientY;U.current=parseFloat(l.style.left)||0,V.current=parseFloat(l.style.top)||0,X.current=parseFloat(l.style.left)||0,Y.current=parseFloat(l.style.top)||0,B.current=n*(1/z)-X.current,G.current=r*(1/z)-Y.current,M(!0)},le=function(e){if(H){var t=e.touches,l=t?t[0].clientX:e.clientX,n=t?t[0].clientY:e.clientY;if(1!==z)X.current=l*(1/z)-B.current,Y.current=n*(1/z)-G.current,e.target.style.left="".concat(X.current,"px"),e.target.style.top="".concat(Y.current,"px");else{if(O.length<=1)return;X.current=l*(1/z)-B.current,e.target.style.left="".concat(X.current,"px")}}},ne=function(){1===z&&(X.current>0?_():X.current<0&&$()),M(!1)},re=function(e){e.width>=e.height?(e.style.width="100%",e.style.maxWidth="100%",e.style.height="auto",e.style.top="".concat((e.parentNode.offsetHeight-e.height)/2,"px"),e.style.left=0):(e.style.height="100%",e.style.maxHeight="100%",e.style.width="auto",e.style.left="".concat((e.parentNode.offsetWidth-e.width)/2,"px"),e.style.top=0),e.width>=e.parentNode.offsetWidth&&(e.style.width="".concat(e.parentNode.offsetWidth,"px"),e.style.height="auto",e.style.left=0,e.style.top="".concat((e.parentNode.offsetHeight-e.height)/2,"px")),e.height>=e.parentNode.offsetHeight&&(e.style.height="".concat(e.parentNode.offsetHeight,"px"),e.style.width="auto",e.style.top=0,e.style.left="".concat((e.parentNode.offsetWidth-e.width)/2,"px")),X.current=parseFloat(e.style.left)||0,Y.current=parseFloat(e.style.top)||0},oe=t.useCallback((function(){var e=x.current.querySelectorAll(".lightbox-item");C(e)}),[x]),ae=t.useCallback((function(e){for(var t=0,l=e;t<l.length;t++){"childList"===l[t].type&&oe()}}),[oe]);t.useEffect((function(){oe()}),[oe]),t.useEffect((function(){O.length>0&&document.querySelectorAll(".lightbox-gallery-item").forEach((function(e){re(e)}))}),[O]);var ce=t.useCallback((function(){document.querySelectorAll(".lightbox-gallery-item").forEach((function(e){re(e)}))}),[]);return t.useEffect((function(){window.addEventListener("resize",ce),window.addEventListener("keydown",(function(e){return Q(e)})),window.addEventListener("fullscreenchange",ee);var e=new MutationObserver(ae);return e.observe(x.current,{childList:!0,subtree:!0}),O.forEach((function(e,t){!e.classList.contains("lightbox-disabled")&&e.addEventListener("click",(function(e){return Z(e,t)}))})),function(){e.disconnect(),window.removeEventListener("resize",ce),window.removeEventListener("keydown",(function(e){return Q(e)})),window.removeEventListener("fullscreenchange",ee),O.forEach((function(e,t){e.removeEventListener("click",(function(e){return Z(e,t)}))}))}}),[O,x,ae,Z,ce,Q,ee]),o.default.createElement(o.default.Fragment,null,o.default.createElement(n,c({ref:x,className:g},d),s),a.default.createPortal(o.default.createElement("div",{className:"lightbox-gallery",onClick:function(e){"DIV"===e.target.tagName&&(document.body.classList.remove("overflow-hidden"),"DIV"===e.target.tagName&&N(!1))},ref:m,style:{opacity:E?1:0,pointerEvents:E?"initial":"none",visibility:E?"visible":"hidden"}},o.default.createElement("div",{className:"lightbox-gallery-loader"}),o.default.createElement("div",{className:"lightbox-gallery-toolbar"},o.default.createElement("div",{className:"lightbox-gallery-left-tools"},o.default.createElement("p",{className:"lightbox-gallery-counter"},"".concat(A+1," / ").concat(O.length))),o.default.createElement("div",{className:"lightbox-gallery-right-tools"},o.default.createElement("button",{className:"lightbox-gallery-fullscreen-btn ".concat("pro"===u&&"fontawesome-pro"," ").concat(q&&"active"),onClick:function(){var e;q?(document.exitFullscreen&&document.exitFullscreen(),F(!1)):((null===(e=m.current)||void 0===e?void 0:e.requestFullscreen)&&m.current.requestFullscreen(),F(!0))}}),o.default.createElement("button",{ref:v,className:"lightbox-gallery-zoom-btn ".concat("pro"===u&&"fontawesome-pro"," ").concat(z>1&&"active"),onClick:function(){return z>1?(P(z-i),void document.querySelectorAll(".lightbox-gallery-item").forEach((function(e){re(e)}))):function(e){P(z+e)}(i)}}),o.default.createElement("button",{className:"lightbox-gallery-close-btn ".concat("pro"===u&&"fontawesome-pro"),onClick:function(){q&&document.exitFullscreen&&document.exitFullscreen(),document.body.classList.remove("overflow-hidden"),N(!1),P(1),M(!1),document.querySelectorAll(".lightbox-gallery-item").forEach((function(e){re(e)}))},ref:y}))),o.default.createElement("div",{className:"lightbox-gallery-content"},Object.values(O).map((function(e,t){var l,n,r={source:(l=e).getAttribute("data-mdb-img")?l.getAttribute("data-mdb-img"):l.getAttribute("src")?l.getAttribute("src"):"",caption:l.getAttribute("data-mdb-caption")?l.getAttribute("data-mdb-caption"):l.getAttribute("alt")?l.getAttribute("alt"):""},a=r.source,c=r.caption,i=t===A?1:0,u=t===A?z:.25,s=A===O.length-1&&0===t,f=0===A&&t===O.length-1;return n=A<t&&!f&&!s?"100%":A>t&&!f&&!s||f?"-100%":s?"100%":"0%",o.default.createElement("div",{className:"lightbox-gallery-image",key:t,style:{position:"absolute",opacity:i,left:n,transform:"scale(".concat(u,")")}},o.default.createElement("img",{src:a,alt:c,onMouseDown:function(e){return te(e)},onMouseMove:function(e){return le(e)},onMouseUp:ne,onTouchStart:function(e){return te(e)},onTouchMove:function(e){return le(e)},onTouchEnd:ne,className:"lightbox-gallery-item ".concat(A===t&&"active")}))}))),o.default.createElement("div",{className:"lightbox-gallery-arrow-left"},o.default.createElement("button",{"aria-label":"Previous",className:"".concat("pro"===u?"fontawesome-pro":""),onClick:_,ref:h})),o.default.createElement("div",{className:"lightbox-gallery-arrow-right"},o.default.createElement("button",{"aria-label":"Next",className:"".concat("pro"===u?"fontawesome-pro":""),onClick:$,ref:b})),o.default.createElement("div",{className:"lightbox-gallery-caption-wrapper"},o.default.createElement("p",{className:"lightbox-gallery-caption"},W))),document.body))};i.defaultProps={tag:"div",zoomLevel:1,fontAwesome:"free"},module.exports=i;
