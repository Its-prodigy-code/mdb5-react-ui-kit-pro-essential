"use strict";var e=require("react"),t=require("clsx"),a=require("react-popper"),l=require("@popperjs/core"),n=require("react-dom");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e),u=r(t),i=r(n),s=function(){return s=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)};function c(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(a[l[n]]=e[l[n]])}return a}var f=function(t){var a,l=t.className,n=t.size,r=t.contrast,i=t.value,f=t.defaultValue,d=t.id,p=t.labelId,m=t.labelClass,v=t.wrapperClass,h=t.wrapperStyle,g=t.wrapperTag,b=t.label,w=t.onChange,y=t.children,E=t.labelRef,N=t.labelStyle,C=t.inputRef,S=t.textarea,k=t.validation,R=t.invalid,O=t.validationTooltip,T=t.btnClasses,P=t.btnOnClick,x=t.btnRef,V=t.onBlur,q=t.readonly,F=t.btn,I=t.btnType,j=c(t,["className","size","contrast","value","defaultValue","id","labelId","labelClass","wrapperClass","wrapperStyle","wrapperTag","label","onChange","children","labelRef","labelStyle","inputRef","textarea","validation","invalid","validationTooltip","btnClasses","btnOnClick","btnRef","onBlur","readonly","btn","btnType"]),H=e.useRef(null),L=e.useRef(null),z=e.useRef(null),A=e.useRef(null),B=E||H,D=x||L,W=C||(S?A:z),U=e.useState(i||f),K=U[0],G=U[1],J=e.useState(0),M=J[0],Q=J[1],X=e.useState(void 0!==i&&i.length>0||(void 0!==f&&f.length)>0),Y=X[0],Z=X[1],$=u.default("form-outline",r&&"form-white",v),_=u.default("form-control",Y&&"active",n&&"form-control-"+n,l),ee=u.default("form-label",m),te=u.default(k&&(R?"invalid-"+(O?"tooltip":"feedback"):"valid-"+(O?"tooltip":"feedback")));e.useEffect((function(){var e;B.current&&0!==(null===(e=B.current)||void 0===e?void 0:e.clientWidth)&&Q(.8*B.current.clientWidth+8)}),[B,null===(a=B.current)||void 0===a?void 0:a.clientWidth]);var ae=function(){B.current&&Q(.8*B.current.clientWidth+8)};e.useEffect((function(){void 0!==i&&(i.length>0?Z(!0):Z(!1))}),[i]),e.useEffect((function(){void 0!==f&&(f.length>0?Z(!0):Z(!1))}),[f]);var le=function(e){G(e.currentTarget.value),w&&w(e)},ne=e.useCallback((function(e){void 0!==K&&K.length>0||void 0!==i&&i.length>0?Z(!0):Z(!1),V&&V(e)}),[K,i,V]);return o.default.createElement(g,{className:$,style:s({},h)},S?o.default.createElement("textarea",s({readOnly:q,className:_,onBlur:ne,onChange:le,onFocus:ae,defaultValue:f,value:i,id:d,ref:W},j)):o.default.createElement("input",s({readOnly:q,className:_,onBlur:ne,onChange:le,onFocus:ae,value:i,defaultValue:f,id:d,ref:W},j)),b&&o.default.createElement("label",{className:ee,style:N,id:p,htmlFor:d,ref:B},b),k&&o.default.createElement("div",{className:te},k),o.default.createElement("div",{className:"form-notch"},o.default.createElement("div",{className:"form-notch-leading"}),o.default.createElement("div",{className:"form-notch-middle",style:{width:M}}),o.default.createElement("div",{className:"form-notch-trailing"})),F&&o.default.createElement("button",{ref:D,type:I,className:T,onClick:P},F),y)};f.defaultProps={wrapperTag:"div",btnType:"button",readonly:!1};var d=o.default.forwardRef((function(e,t){var a=e.className,l=e.show,n=e.tag,r=e.children,i=c(e,["className","show","tag","children"]),f=u.default("autocomplete-dropdown",l&&"open",a);return o.default.createElement(n,s({className:f,ref:t},i),r)}));d.defaultProps={tag:"div"};var p=o.default.forwardRef((function(e,t){var a=e.className,l=e.tag,n=e.children,r=c(e,["className","tag","children"]),i=u.default("autocomplete-items-list",a);return o.default.createElement(l,s({className:i,ref:t},r),n)}));p.defaultProps={tag:"ul"};var m=o.default.forwardRef((function(e,t){var a=e.className,l=e.activeItem,n=e.tag,r=e.children,i=c(e,["className","activeItem","tag","children"]),f=u.default("autocomplete-item",l&&"active",a);return o.default.createElement(n,s({className:f,ref:t},i),r)}));m.defaultProps={tag:"li"};var v=function(t){var n=t.className,r=t.displayValue,u=t.dataFilter,v=t.options,h=t.threshold,g=t.itemContent,b=t.getFilteredData,w=t.listHeight,y=t.inputValue,E=t.noResults,N=t.setInputValue,C=t.tag,S=t.customContent,k=t.validation,R=t.required,O=c(t,["className","displayValue","dataFilter","options","threshold","itemContent","getFilteredData","listHeight","inputValue","noResults","setInputValue","tag","customContent","validation","required"]),T=e.useState(!1),P=T[0],x=T[1],V=e.useState(!1),q=V[0],F=V[1],I=e.useState(),j=I[0],H=I[1],L=e.useState(),z=L[0],A=L[1],B=e.useState(),D=B[0],W=B[1],U=e.useState(-1),K=U[0],G=U[1],J=e.useState([]),M=J[0],Q=J[1],X=e.useState(!1),Y=X[0],Z=X[1],$=a.usePopper(z,D,s({placement:"bottom-start",modifiers:[l.flip]},v)),_=$.styles,ee=$.attributes;e.useEffect((function(){var e;if(P){var t=u(y);(e=t)&&"function"==typeof e.then?(Z(!0),t.then((function(e){Q(e),Z(!1)}))):Q(t)}}),[y,u,P]),e.useEffect((function(){b&&b(M)}),[b,M]);var te=e.useCallback((function(e){var t=z===e.target,a=e.target===D,l=D&&D.contains(e.target);t||a||l||F(!1)}),[z,D]),ae=e.useCallback((function(){if(z){var e=window.getComputedStyle(z).getPropertyValue("width");H(e)}}),[z]);e.useEffect((function(){if(K>-1){var e=null==D?void 0:D.querySelector("ul");if(e){var t=e.offsetHeight,a=null==D?void 0:D.querySelectorAll("li");if(a){var l=a[K].offsetHeight,n=e.scrollTop,r=K*l,o=r+l>n+t,u=r<n;e.scrollTop=u?r:o?r-t+l:n}}}}),[K,D]);var le=e.useCallback((function(e){if(P){var t=e.key;if("Escape"===t||"ArrowUp"===t&&e.altKey||"Tab"===t)return F(!1),void(z&&z.focus());switch(t){case"ArrowDown":K<M.length-1&&G(K+1);break;case"ArrowUp":K>0&&G(K-1);break;case"Home":G(0);break;case"End":G(M.length-1);break;case"Enter":if(K>-1){var a=M[K];N(r?r(a):a),F(!1)}return;default:return}e.preventDefault()}}),[K,M,z,N,P,r]);return e.useEffect((function(){return window.addEventListener("click",te),window.addEventListener("resize",ae),window.addEventListener("keydown",le),function(){window.removeEventListener("click",te),window.removeEventListener("resize",ae),window.removeEventListener("keydown",le)}}),[te,ae,le]),e.useEffect((function(){P&&(G(-1),setTimeout((function(){F(!0)}),100))}),[P]),e.useEffect((function(){q||setTimeout((function(){x(!1)}),100)}),[q]),e.useEffect((function(){if(z){var e=window.getComputedStyle(z).width;H(e)}}),[z,P]),o.default.createElement(o.default.Fragment,null,o.default.createElement(f,s({value:y,onChange:function(e){x(!0),G(-1),N(e.target.value)},onFocus:function(){return x(!0)},className:n,inputRef:A,required:R,validation:k},O),Y&&o.default.createElement("div",{className:"autocomplete-loader spinner-border"},o.default.createElement("span",{className:"sr-only"},"Loading..."))),P&&void 0!==h&&void 0!==y&&y.length>=h&&i.default.createPortal(o.default.createElement(C,s({className:"autocomplete-dropdown-container",ref:W,style:s(s({position:"absolute",zIndex:1065},_.popper),{width:j})},ee.popper),o.default.createElement(d,{show:q},o.default.createElement(p,{role:"listbox",style:{maxHeight:w+"px"}},0===M.length?o.default.createElement(m,{role:"option"},E):M.map((function(e,t){return o.default.createElement(m,{activeItem:K===t,key:r?r(e)+t:e+t,onClick:function(){null==z||z.focus(),N(r?r(e):e),F(!1)},role:"option"},g?g(e):r?r(e):e)}))),S&&S)),document.body))};v.defaultProps={tag:"div",threshold:0,noResults:"No results found",listHeight:190},module.exports=v;
