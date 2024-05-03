"use strict";var e=require("react"),t=require("react-dom"),a=require("clsx"),n=require("react-popper"),r=require("@popperjs/core");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=l(e),i=l(t),o=l(a),u=function(){return u=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)};function s(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}var d=function(t){var a,n=t.className,r=t.size,l=t.contrast,i=t.value,d=t.defaultValue,f=t.id,m=t.labelId,p=t.labelClass,b=t.wrapperClass,v=t.wrapperStyle,y=t.wrapperTag,k=t.label,g=t.onChange,E=t.children,h=t.labelRef,w=t.labelStyle,N=t.inputRef,S=t.textarea,D=t.validation,x=t.invalid,C=t.validationTooltip,T=t.btnClasses,O=t.btnOnClick,R=t.btnRef,F=t.type,I=t.onBlur,M=t.readonly,P=t.btn,L=t.btnType,A=s(t,["className","size","contrast","value","defaultValue","id","labelId","labelClass","wrapperClass","wrapperStyle","wrapperTag","label","onChange","children","labelRef","labelStyle","inputRef","textarea","validation","invalid","validationTooltip","btnClasses","btnOnClick","btnRef","type","onBlur","readonly","btn","btnType"]),q=e.useRef(null),B=e.useRef(null),W=e.useRef(null),j=e.useRef(null),H=h||q,Y=R||B,J=N||(S?j:W),U=e.useState(i||d),z=U[0],V=U[1],G=e.useState(0),K=G[0],Q=G[1],X=e.useState(void 0!==i&&i.length>0||(void 0!==d&&d.length)>0),Z=X[0],$=X[1],_=o.default("form-outline",l&&"form-white",b),ee=o.default("form-control",Z&&"active","date"===F&&"active",r&&"form-control-".concat(r),n),te=o.default("form-label",p),ae=o.default(D&&(x?"invalid-".concat(C?"tooltip":"feedback"):"valid-".concat(C?"tooltip":"feedback")));e.useEffect((function(){var e;H.current&&0!==(null===(e=H.current)||void 0===e?void 0:e.clientWidth)&&Q(.8*H.current.clientWidth+8)}),[H,null===(a=H.current)||void 0===a?void 0:a.clientWidth]);var ne=function(){H.current&&Q(.8*H.current.clientWidth+8)};e.useEffect((function(){void 0!==i&&(i.length>0?$(!0):$(!1))}),[i]),e.useEffect((function(){void 0!==d&&(d.length>0?$(!0):$(!1))}),[d]);var re=function(e){V(e.currentTarget.value),g&&g(e)},le=e.useCallback((function(e){void 0!==z&&z.length>0||void 0!==i&&i.length>0?$(!0):$(!1),I&&I(e)}),[z,i,I]);return c.default.createElement(y,{className:_,style:u({},v)},S?c.default.createElement("textarea",u({readOnly:M,className:ee,onBlur:le,onChange:re,onFocus:ne,defaultValue:d,value:i,id:f,ref:J},A)):c.default.createElement("input",u({type:F,readOnly:M,className:ee,onBlur:le,onChange:re,onFocus:ne,value:i,defaultValue:d,id:f,ref:J},A)),k&&c.default.createElement("label",{className:te,style:w,id:m,htmlFor:f,ref:H},k),D&&c.default.createElement("div",{className:ae},D),c.default.createElement("div",{className:"form-notch"},c.default.createElement("div",{className:"form-notch-leading"}),c.default.createElement("div",{className:"form-notch-middle",style:{width:K}}),c.default.createElement("div",{className:"form-notch-trailing"})),P&&c.default.createElement("button",{ref:Y,type:L,className:T,onClick:O},P),E)};d.defaultProps={wrapperTag:"div",btnType:"button",readonly:!1};var f=function(t){var a=t.animation,n=t.animationRef,r=t.delay,l=t.infinite,i=t.duration,d=t.enableTarget,f=t.target,m=t.repeatOnScroll,p=t.reset,b=t.setTarget,v=t.start,y=t.className,k=t.tag,g=t.children,E=t.style,h=s(t,["animation","animationRef","delay","infinite","duration","enableTarget","target","repeatOnScroll","reset","setTarget","start","className","tag","children","style"]),w=e.useState(f),N=w[0],S=w[1],D=e.useState(!1),x=D[0],C=D[1],T=e.useRef(!0),O=o.default(N&&"animation",N&&a,y),R=e.useRef(null),F=n||R,I=function(){S(!N)},M=e.useCallback((function(){if(F.current){var e=F.current.getBoundingClientRect().top+document.body.scrollTop,t=F.current.offsetHeight,a=e<=window.innerHeight&&e+t>=0;a&&T.current?(T.current=!1,r?setTimeout((function(){S(!0),C(!0)}),r):(S(!0),C(!0))):!a&&m&&(C(!1),T.current=!0)}}),[F,m,r]);return e.useEffect((function(){return"onScroll"===v&&window.addEventListener("scroll",M),function(){window.removeEventListener("scroll",M)}}),[M,v]),e.useEffect((function(){S(f)}),[f]),e.useEffect((function(){"onLoad"===v&&S(!0)}),[v]),e.useEffect((function(){N&&!l&&p&&setTimeout((function(){S(!N),d&&b(!1)}),i)}),[N,i,d,b,l,p]),c.default.createElement(c.default.Fragment,null,"onClick"===v&&!1===d&&c.default.createElement(k,u({onClick:I,className:O,ref:F},h,{style:u(u({},E),{animationDuration:"".concat(i,"ms"),animationIterationCount:l?"infinite":null,animationDelay:r?"".concat(r,"ms"):null})}),g),"onHover"===v&&!1===d&&c.default.createElement(k,u({onMouseEnter:I,className:O,ref:F},h,{style:u(u({},E),{animationDuration:"".concat(i,"ms"),animationIterationCount:l?"infinite":null,animationDelay:r?"".concat(r,"ms"):null})}),g),("onLoad"===v||!0===d)&&c.default.createElement(k,u({className:O,ref:F},h,{style:u(u({},E),{animationDuration:"".concat(i,"ms"),animationIterationCount:l?"infinite":null,animationDelay:r?"".concat(r,"ms"):null})}),g),"onScroll"===v&&c.default.createElement(k,u({className:O,ref:F},h,{style:u(u({},E),{animationDuration:"".concat(i,"ms"),visibility:x?"visible":"hidden",animationIterationCount:l?"infinite":null})}),g))};f.defaultProps={tag:"div",start:"onClick",duration:500,reset:!1,animation:"slide-right",target:!1,enableTarget:!1,repeatOnScroll:!1,infinite:!1};var m=c.default.forwardRef((function(e,t){var a=e.className,n=e.dropdown,r=e.tag,l=e.children,i=e.isOpen,d=e.styles,m=e.attributes,p=e.setPopperElement,b=s(e,["className","dropdown","tag","children","isOpen","styles","attributes","setPopperElement"]),v=o.default("datepicker-dropdown-container",i?"fade-out":"fade-in","animation",a),y=o.default("datepicker-modal-container",a);return c.default.createElement(c.default.Fragment,null,n?c.default.createElement(r,u({style:u(u({position:"absolute",zIndex:1065},d.popper),{animationDuration:"500ms"})},b,m.popper,{ref:p,className:v,tabIndex:-1}),l):c.default.createElement(f,u({tag:r,start:"onLoad",animation:i?"fade-out":"fade-in",className:y,ref:t},b),l))}));m.defaultProps={tag:"div"};var p=c.default.forwardRef((function(e,t){var a=e.className,n=e.tag,r=e.children,l=s(e,["className","tag","children"]),i=o.default("datepicker-main",a);return c.default.createElement(n,u({className:i,ref:t},l),r)}));p.defaultProps={tag:"div"};function b(e){return e.getDate()}function v(e){return e.getDay()}function y(e){return e.getMonth()}function k(e){return e.getFullYear()}function g(e){return function(e){return e.getDate()===E(e)}(e)?E(new Date(k(e),y(e)+1,1)):b(e)}function E(e){return function(e){return D(e.getFullYear(),e.getMonth()+1,0)}(e).getDate()}function h(){return new Date}function w(e,t){return N(e,12*t)}function N(e,t){var a=D(e.getFullYear(),e.getMonth()+t,e.getDate());return b(e)!==b(a)&&a.setDate(0),a}function S(e,t){return D(e.getFullYear(),e.getMonth(),e.getDate()+t)}function D(e,t,a){var n=new Date(e,t,a);return e>=0&&e<100&&n.setFullYear(n.getFullYear()-1900),n}function x(e){return!Number.isNaN(e.getTime())}function C(e,t){return k(e)-k(t)||y(e)-y(t)||b(e)-b(t)}function T(e,t){return e.setHours(0,0,0,0),t.setHours(0,0,0,0),e.getTime()===t.getTime()}function O(e){return parseInt(e,10)<10?"0".concat(e):e}function R(e,t){var a,n=k(e)-F(0,null,null);return(n%(a=t)+a)%a}function F(e,t,a){var n=0;a?n=k(a)-e+1:t&&(n=k(t));return n}function I(e,t,a,n){var r=t&&C(e,t)<=0,l=a&&C(e,a)>=0,c=n&&!1===n(e);return r||l||c}function M(e,t,a,n){var r=n&&k(n),l=n&&y(n),c=a&&k(a),i=a&&y(a);return l&&r&&(t>r||t===r&&e>l)||i&&c&&(t<c||t===c&&e<i)}function P(e,t,a){var n=t&&k(t),r=a&&k(a);return r&&e>r||n&&e<n}function L(e,t,a,n,r){return r&&q(e,r,t,a,n,r)}function A(e,t,a,n,r){return n&&q(e,n,t,a,n,r)}function q(e,t,a,n,r,l){if("days"===a)return k(e)===k(t)&&y(e)===y(t);if("months"===a)return k(e)===k(t);if("years"===a){var c=F(n,r,l);return Math.floor((k(e)-c)/n)===Math.floor((k(t)-c)/n)}return!1}function B(e,t,a,n){var r,l;if(t){var c=function(e){return e.match(/[^(dmy)]{1,}/g)}(t);if(c){r=c[0]!==c[1]?c[0]+c[1]:c[0];var i=new RegExp("[".concat(r,"]")),o=e.split(i),u=null==t?void 0:t.split(i),s=-1!==(null==t?void 0:t.indexOf("mmm")),d=[];null==u||u.forEach((function(e,t){-1!==e.indexOf("yy")&&(d[0]={value:o[t],format:e}),-1!==e.indexOf("m")&&(d[1]={value:o[t],format:e}),-1!==e.indexOf("d")&&e.length<=2&&(d[2]={value:o[t],format:e})}));var f=void 0;return f=-1!==(null==t?void 0:t.indexOf("mmmm"))?a:n,D(Number(d[0].value),s?(l=d[1].value,f.findIndex((function(e){return e===l}))):Number(d[1].value)-1,Number(d[2].value))}}}function W(e,t,a,n,r,l){var c=b(e),i=O(b(e).toString()),o=a[v(e)],u=n[v(e)],s=y(e),d=O((y(e)+1).toString()),f=r[y(e)],m=l[y(e)],p=2===k(e).toString().length?k(e):k(e).toString().slice(2,4),g=k(e),E=t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g),h="";return E.forEach((function(e){switch(e){case"dddd":e=e.replace(e,u);break;case"ddd":e=e.replace(e,o);break;case"dd":e=e.replace(e,i);break;case"d":e=e.replace(e,c.toString());break;case"mmmm":e=e.replace(e,m);break;case"mmm":e=e.replace(e,f);break;case"mm":e=e.replace(e,d);break;case"m":e=e.replace(e,s.toString());break;case"yyyy":e=e.replace(e,g.toString());break;case"yy":e=e.replace(e,p.toString())}h+=e})),h}var j=function(e,t,a,n,r,l){for(var c=[],i=y(e),o=y(N(e,-1)),u=y(N(e,1)),s=k(e),d=function(e,t,a){var n=a>0?7-a:0,r=new Date(e,t).getDay()+n;return r>=7?r-7:r}(s,i,l),f=E(e),m=E(N(e,-1)),p=1,v=!1,g=1;g<7;g++){var w=[];if(1===g){for(var S=m-d+1;S<=m;S++){var x=D(s,o,S);w.push({date:x,currentMonth:v,isSelected:t&&T(x,t),isToday:T(x,h()),dayNumber:b(x),disabled:I(x,a,n,r)})}v=!0;var C=7-w.length;for(S=0;S<C;S++){x=D(s,i,p);w.push({date:x,currentMonth:v,isSelected:t&&T(x,t),isToday:T(x,h()),dayNumber:b(x),disabled:I(x,a,n,r)}),p++}}else for(S=1;S<8;S++){p>f&&(p=1,v=!1);x=D(s,v?i:u,p);w.push({date:x,currentMonth:v,isSelected:t&&T(x,t),isToday:T(x,h()),dayNumber:b(x),disabled:I(x,a,n,r)}),p++}c.push(w)}return c},H=function(t){var a=t.inputRef,l=t.closeOnEsc,s=t.title,v=t.weekdaysShort,D=t.monthsShort,C=t.monthsFull,O=t.weekdaysNarrow,F=t.weekdaysFull,q=t.filter,H=t.inline,Y=t.inputClasses,J=t.min,U=t.max,z=t.format,V=t.value,G=t.options,K=t.setValue,Q=t.okBtnText,X=t.clearBtnText,Z=t.cancelBtnText,$=t.inputToggle,_=t.icon,ee=t.labelText,te=t.inputStyle,ae=t.startDay,ne=t.views,re=t.style,le=e.useRef(null),ce=a||le,ie=e.useState(!1),oe=ie[0],ue=ie[1],se=e.useState(!1),de=se[0],fe=se[1],me=e.useState(new Date),pe=me[0],be=me[1],ve=e.useState(new Date),ye=ve[0],ke=ve[1],ge=e.useState("days"===ne?0:"years"===ne?1:2),Ee=ge[0],he=ge[1],we=e.useState([0,0]),Ne=we[0],Se=we[1],De=e.useState(),xe=De[0],Ce=De[1],Te=e.useState(),Oe=Te[0],Re=Te[1],Fe=e.useState(O),Ie=Fe[0],Me=Fe[1],Pe=e.useState(3),Le=Pe[0],Ae=Pe[1],qe=e.useRef(null),Be=e.useRef(null),We=e.useRef(!0),je=n.usePopper(Oe,xe,u({placement:"bottom-start",modifiers:[r.flip]},G)),He=je.styles,Ye=je.attributes,Je=e.useCallback((function(e){var t,a;if(l&&"Escape"===e.key&&fe(!0),e.preventDefault(),"Tab"===e.key){var n=null===(t=Be.current)||void 0===t?void 0:t.querySelectorAll('[tabindex="0"]');n&&(Le===n.length-1?Ae(0):Ae(Le+1))}if("Enter"===e.key&&3!==Le&&document.activeElement&&document.activeElement.click(),(null===(a=Be.current)||void 0===a?void 0:a.querySelector(".focused"))&&4!==Le)if(0===Ee)switch(e.key){case"ArrowLeft":be(S(pe,-1));break;case"ArrowRight":be(S(pe,1));break;case"ArrowUp":be(S(pe,-7));break;case"ArrowDown":be(S(pe,7));break;case"Home":be(S(pe,1-b(pe)));break;case"End":be(S(pe,E(pe)-b(pe)));break;case"PageUp":be(N(pe,-1));break;case"PageDown":be(N(pe,1));break;case"Enter":!I(pe,J,U,q)&&ke(pe);break;case" ":return void(q&&!q(pe)||ke(pe));default:return}else if(1===Ee){switch(e.key){case"ArrowLeft":be(w(pe,-1));break;case"ArrowRight":be(w(pe,1));break;case"ArrowUp":be(w(pe,-4));break;case"ArrowDown":be(w(pe,4));break;case"Home":be(w(pe,-R(pe,24)));break;case"End":be(w(pe,24-R(pe,24)-1));break;case"PageUp":be(w(pe,-24));break;case"PageDown":be(w(pe,24));break;case"Enter":!P(k(pe),J,U)&&he(2);break;case" ":return void(!P(k(pe),J,U)&&ke(pe));default:return}}else if(2===Ee)switch(e.key){case"ArrowLeft":be(N(pe,-1));break;case"ArrowRight":be(N(pe,1));break;case"ArrowUp":be(N(pe,-4));break;case"ArrowDown":be(N(pe,4));break;case"Home":be(N(pe,-y(pe)));break;case"End":be(N(pe,11-y(pe)));break;case"PageUp":be(w(pe,-1));break;case"PageDown":be(w(pe,1));break;case"Enter":!I(pe,J,U,q)&&he(0);break;case" ":return void(!I(pe,J,U,q)&&ke(pe));default:return}}),[pe,Ee,q,U,J,l,Le]),Ue=e.useCallback((function(e){var t;H?!((null==xe?void 0:xe.contains(e.target))||(null===(t=null==Oe?void 0:Oe.parentNode)||void 0===t?void 0:t.contains(e.target))||e.target.classList.contains("datepicker-view-change-button")||e.target.classList.contains("datepicker-large-cell-content"))&&fe(!0):e.target===qe.current&&fe(!0)}),[xe,Oe,qe,H]);e.useEffect((function(){var e,t,a=null===(e=Be.current)||void 0===e?void 0:e.querySelectorAll('[tabindex="0"]');if(a){var n=a[Le];if("TD"!==n.tagName){n.focus();var r=null===(t=Be.current)||void 0===t?void 0:t.querySelector(".focused");null==r||r.classList.remove("focused")}else a[Le-1].blur(),n.classList.add("focused")}}),[Le]),e.useEffect((function(){var e=window.innerWidth>document.documentElement.clientWidth&&window.innerWidth>=576;H||(oe&&e?(document.body.style.overflow="hidden",document.body.style.paddingRight="17px"):(document.body.style.overflow="",document.body.style.paddingRight=""))}),[oe,H]),e.useEffect((function(){if(de)if(setTimeout((function(){ue(!1)}),500),ce.current)(e=ce.current.parentNode.querySelector("button"))?e.focus():ce.current.focus();else if(null==Oe?void 0:Oe.parentNode){var e;(e=Oe.parentNode.querySelector("button"))?e.focus():Oe.focus()}}),[de,ce,Oe]),e.useEffect((function(){if(ae&&O){var e=O.slice(ae).concat(O.slice(0,ae));Me(e)}}),[O,ae]),e.useEffect((function(){var e=k(pe)-R(pe,24);Se([e,e+23])}),[pe]),e.useEffect((function(){oe||(fe(!1),he("days"===ne?0:"years"===ne?1:2),V?ye&&be(ye):(be(new Date),ke(void 0)))}),[oe]),e.useEffect((function(){return oe&&(document.addEventListener("keydown",Je),document.addEventListener("click",Ue)),function(){document.removeEventListener("keydown",Je),document.removeEventListener("click",Ue)}}),[Ue,Je,oe,H]);e.useEffect((function(){if(oe)if(ce.current)(e=ce.current.parentNode.querySelector("button"))&&e.blur();else if(null==Oe?void 0:Oe.parentNode){var e;(e=Oe.parentNode.querySelector("button"))&&e.blur()}}),[oe,ce,Oe]),e.useEffect((function(){var e;return $&&(null===(e=ce.current)||void 0===e||e.addEventListener("click",(function(){return ue(!0)}))),function(){var e;null===(e=ce.current)||void 0===e||e.removeEventListener("click",(function(){return ue(!0)}))}}),[$,ce]),e.useEffect((function(){if(H&&ye&&z){var e=W(ye,z,v,F,D,C);Oe&&(Oe.value=e,K(e),fe(!0))}}),[ye,H,z,Oe,K]),e.useEffect((function(){if(We.current){We.current=!1;var e=B(V,z,C,D);K(V),e&&x(e)?(be(e),ke(e)):(be(new Date),ke(void 0))}}),[We,V,z,K,C,D]);var ze=function(e){if(0===Ee){var t=e?new Date(k(pe),y(pe)+1,g(pe)):new Date(k(pe),y(pe)-1,g(pe));e?!L(N(t,-1),"days",1,J,U)&&be(t):!A(N(t,1),"days",1,J,U)&&be(t)}else if(1===Ee){t=e?new Date(k(pe)+24,y(pe),b(pe)):new Date(k(pe)-24,y(pe),b(pe));e?U?Ne[0]+24<k(U)&&be(t):be(t):J?Ne[1]-24>k(J)&&be(t):be(t)}else if(2===Ee){t=e?new Date(k(pe)+1,y(pe),b(pe)):new Date(k(pe)-1,y(pe),b(pe));e?!L(w(t,-1),"months",1,J,U)&&be(t):!A(w(t,1),"months",1,J,U)&&be(t)}},Ve=c.default.createElement("table",{className:"datepicker-table"},c.default.createElement("thead",null,c.default.createElement("tr",null,Ie.map((function(e,t){return c.default.createElement("th",{key:t,className:"datepicker-day-heading",scope:"col"},e)})))),c.default.createElement("tbody",{className:"datepicker-table-body"},j(pe,ye,J,U,q,ae).map((function(e,t){return c.default.createElement("tr",{key:t},e.map((function(e,t){return c.default.createElement("td",{key:t,onClick:function(){var t;!I(t=e.date,J,U,q)&&(be(t),ke(t))},tabIndex:T(e.date,pe)?0:void 0,className:o.default("datepicker-cell","datepicker-small-cell","datepicker-day-cell",e.isToday&&"current",e.isSelected&&"selected",e.disabled&&"disabled",3===Le&&T(e.date,pe)&&"focused",y(pe)!==y(e.date)&&"disabled")},c.default.createElement("div",{className:"datepicker-cell-content datepicker-small-cell-content",style:{display:e.currentMonth?"block":"none"}},e.dayNumber))})))})))),Ge=c.default.createElement("table",{className:"datepicker-table"},c.default.createElement("tbody",{className:"datepicker-table-body"},function(e){var t=[],a=[];return e.forEach((function(e){if(a.push(e),4===a.length){var n=a;t.push(n),a=[]}})),t}(D).map((function(e,t){return c.default.createElement("tr",{key:t},e.map((function(e){return c.default.createElement("td",{key:D.indexOf(e),onClick:function(){be(new Date(k(pe),D.indexOf(e),g(pe))),he(0)},tabIndex:D.indexOf(e)===y(pe)?0:void 0,className:o.default("datepicker-cell","datepicker-large-cell","datepicker-month-cell",ye&&D.indexOf(e)===y(ye)&&k(pe)===k(ye)&&"selected",3===Le&&D.indexOf(e)===y(pe)&&"focused",y(h())===D.indexOf(e)&&k(h())===k(pe)&&"current",M(D.indexOf(e),k(pe),J,U)&&"disabled")},c.default.createElement("div",{className:"datepicker-cell-content datepicker-large-cell-content"},e))})))})))),Ke=c.default.createElement("table",{className:"datepicker-table"},c.default.createElement("tbody",{className:"datepicker-table-body"},function(e){for(var t=[],a=e[0],n=[],r=0;r<24;r++)if(n.push(a+r),4===n.length){var l=n;t.push(l),n=[]}return t}(Ne).map((function(e,t){return c.default.createElement("tr",{key:t},e.map((function(e){return c.default.createElement("td",{key:e,onClick:function(){be(new Date(e,y(pe),b(pe))),he(2)},tabIndex:e===k(pe)?0:void 0,className:o.default("datepicker-cell","datepicker-large-cell","datepicker-year-cell",ye&&e===k(ye)&&"selected",3===Le&&e===k(pe)&&"focused",P(e,J,U)&&"disabled",k(h())===e&&"current")},c.default.createElement("div",{className:"datepicker-cell-content datepicker-large-cell-content"},e))})))}))));return c.default.createElement(c.default.Fragment,null,c.default.createElement(d,{btnOnClick:function(){return ue(!oe)},btnClasses:"datepicker-toggle-button",btn:!$&&_,className:o.default(V?"active":"",Y),label:ee,inputRef:H?Re:ce,wrapperClass:"datepicker",value:V,onChange:function(e){var t=B(e.target.value,z,C,D);K(e.target.value),t&&x(t)?(be(t),ke(t)):(be(new Date),ke(void 0))},style:te,wrapperStyle:re}),oe&&i.default.createPortal(c.default.createElement(c.default.Fragment,null,c.default.createElement(m,{dropdown:H,isOpen:de,styles:He,attributes:Ye,setPopperElement:Ce},!H&&c.default.createElement("div",{className:"datepicker-header"},c.default.createElement("div",{className:"datepicker-title"},c.default.createElement("span",{className:"datepicker-title-text"},s)),c.default.createElement("div",{className:"datepicker-date"},c.default.createElement("span",{className:"datepicker-date-text"},v[ye?ye.getDay():(new Date).getDay()],","," ",D[ye?ye.getMonth():(new Date).getMonth()]," ",ye?ye.getDate():(new Date).getDate()))),c.default.createElement(p,{ref:Be},c.default.createElement("div",{className:"datepicker-date-controls"},0===Ee&&c.default.createElement("button",{tabIndex:0,className:"datepicker-view-change-button",onClick:function(){return he(1)}},C[pe.getMonth()]," ",pe.getFullYear()),1===Ee&&c.default.createElement("button",{tabIndex:0,className:"datepicker-view-change-button",onClick:function(){return he(0)}},Ne[0]," - ",Ne[1]),2===Ee&&c.default.createElement("button",{tabIndex:0,className:"datepicker-view-change-button",onClick:function(){return he(0)}},k(pe)),c.default.createElement("div",{className:"datepicker-arrow-controls"},c.default.createElement("button",{tabIndex:0,className:"datepicker-previous-button",onClick:function(){return ze(!1)}}),c.default.createElement("button",{tabIndex:0,className:"datepicker-next-button",onClick:function(){return ze(!0)}}))),c.default.createElement("div",{className:"datepicker-main"},0===Ee&&Ve,1===Ee&&Ke,2===Ee&&Ge),!H&&c.default.createElement("div",{className:"datepicker-footer"},c.default.createElement("button",{tabIndex:0,onClick:function(e){return function(e){e.target.blur(),be(new Date),ke(void 0),K(""),Ae(3)}(e)},className:"datepicker-footer-btn datepicker-clear-btn"},X),c.default.createElement("button",{tabIndex:0,onClick:function(){return fe(!0)},className:"datepicker-footer-btn datepicker-cancel-btn"},Z),c.default.createElement("button",{tabIndex:0,onClick:function(){if(z&&ye){var e=W(ye,z,v,F,D,C);ce.current.value=e,K(e)}fe(!0)},className:"datepicker-footer-btn datepicker-ok-btn"},Q)))),!H&&c.default.createElement(f,{tag:"div",animation:de?"fade-out":"fade-in",start:"onLoad",animationRef:qe,className:"datepicker-backdrop"})),document.body))};H.defaultProps={isOpen:!1,closeOnEsc:!0,title:"Select date",inline:!1,monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysNarrow:["S","M","T","W","T","F","S"],format:"dd/mm/yyyy",okBtnText:"Ok",clearBtnText:"Clear",cancelBtnText:"Cancel",inputToggle:!1,icon:c.default.createElement((function(e){var t,a=e.className,n=e.icon,r=e.fab,l=e.fas,i=e.fal,d=e.far,f=e.flag,m=e.spin,p=e.fixed,b=e.flip,v=e.list,y=e.size,k=e.pull,g=e.pulse,E=e.color,h=e.border,w=e.rotate,N=e.inverse,S=e.stack,D=e.children,x=s(e,["className","icon","fab","fas","fal","far","flag","spin","fixed","flip","list","size","pull","pulse","color","border","rotate","inverse","stack","children"]);t=f?"flag":r?"fab":l?"fas":d?"far":i?"fal":"fa";var C=o.default(t,f?"flag-".concat(f):n&&"fa-".concat(n),y&&"fa-".concat(y),E&&"text-".concat(E),h&&"fa-border",w&&"fa-rotate-".concat(w),k&&"fa-pull-".concat(k),m&&"fa-spin",v&&"fa-li",p&&"fa-fw",g&&"fa-pulse",N&&"fa-inverse",b&&"fa-flip-".concat(b),S&&"fa-stack-".concat(S),a);return c.default.createElement("i",u({className:C},x),D)}),{far:!0,icon:"calendar",className:"datepicker-toggle-icon"}),labelText:"Select a date",views:"days",startDay:0},module.exports=H;