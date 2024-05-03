"use strict";var e=require("react"),t=require("clsx"),a=require("react-popper"),l=require("@popperjs/core"),n=require("react-dom");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e),i=r(t),u=r(n),c=function(){return c=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)};function s(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(a[l[n]]=e[l[n]])}return a}var f=function(t){var a,l=t.className,n=t.size,r=t.contrast,u=t.value,f=t.defaultValue,d=t.id,p=t.labelId,m=t.labelClass,v=t.wrapperClass,h=t.wrapperStyle,g=t.wrapperTag,b=t.label,y=t.onChange,w=t.children,E=t.labelRef,N=t.labelStyle,C=t.inputRef,S=t.textarea,k=t.validation,R=t.invalid,O=t.validationTooltip,T=t.btnClasses,P=t.btnOnClick,x=t.btnRef,V=t.type,q=t.onBlur,F=t.readonly,I=t.btn,j=t.btnType,H=s(t,["className","size","contrast","value","defaultValue","id","labelId","labelClass","wrapperClass","wrapperStyle","wrapperTag","label","onChange","children","labelRef","labelStyle","inputRef","textarea","validation","invalid","validationTooltip","btnClasses","btnOnClick","btnRef","type","onBlur","readonly","btn","btnType"]),L=e.useRef(null),z=e.useRef(null),A=e.useRef(null),B=e.useRef(null),D=E||L,W=x||z,U=C||(S?B:A),K=e.useState(u||f),G=K[0],J=K[1],M=e.useState(0),Q=M[0],X=M[1],Y=e.useState(void 0!==u&&u.length>0||(void 0!==f&&f.length)>0),Z=Y[0],$=Y[1],_=i.default("form-outline",r&&"form-white",v),ee=i.default("form-control",Z&&"active","date"===V&&"active",n&&"form-control-".concat(n),l),te=i.default("form-label",m),ae=i.default(k&&(R?"invalid-".concat(O?"tooltip":"feedback"):"valid-".concat(O?"tooltip":"feedback")));e.useEffect((function(){var e;D.current&&0!==(null===(e=D.current)||void 0===e?void 0:e.clientWidth)&&X(.8*D.current.clientWidth+8)}),[D,null===(a=D.current)||void 0===a?void 0:a.clientWidth]);var le=function(){D.current&&X(.8*D.current.clientWidth+8)};e.useEffect((function(){void 0!==u&&(u.length>0?$(!0):$(!1))}),[u]),e.useEffect((function(){void 0!==f&&(f.length>0?$(!0):$(!1))}),[f]);var ne=function(e){J(e.currentTarget.value),y&&y(e)},re=e.useCallback((function(e){void 0!==G&&G.length>0||void 0!==u&&u.length>0?$(!0):$(!1),q&&q(e)}),[G,u,q]);return o.default.createElement(g,{className:_,style:c({},h)},S?o.default.createElement("textarea",c({readOnly:F,className:ee,onBlur:re,onChange:ne,onFocus:le,defaultValue:f,value:u,id:d,ref:U},H)):o.default.createElement("input",c({type:V,readOnly:F,className:ee,onBlur:re,onChange:ne,onFocus:le,value:u,defaultValue:f,id:d,ref:U},H)),b&&o.default.createElement("label",{className:te,style:N,id:p,htmlFor:d,ref:D},b),k&&o.default.createElement("div",{className:ae},k),o.default.createElement("div",{className:"form-notch"},o.default.createElement("div",{className:"form-notch-leading"}),o.default.createElement("div",{className:"form-notch-middle",style:{width:Q}}),o.default.createElement("div",{className:"form-notch-trailing"})),I&&o.default.createElement("button",{ref:W,type:j,className:T,onClick:P},I),w)};f.defaultProps={wrapperTag:"div",btnType:"button",readonly:!1};var d=o.default.forwardRef((function(e,t){var a=e.className,l=e.show,n=e.tag,r=e.children,u=s(e,["className","show","tag","children"]),f=i.default("autocomplete-dropdown",l&&"open",a);return o.default.createElement(n,c({className:f,ref:t},u),r)}));d.defaultProps={tag:"div"};var p=o.default.forwardRef((function(e,t){var a=e.className,l=e.tag,n=e.children,r=s(e,["className","tag","children"]),u=i.default("autocomplete-items-list",a);return o.default.createElement(l,c({className:u,ref:t},r),n)}));p.defaultProps={tag:"ul"};var m=o.default.forwardRef((function(e,t){var a=e.className,l=e.activeItem,n=e.tag,r=e.children,u=s(e,["className","activeItem","tag","children"]),f=i.default("autocomplete-item",l&&"active",a);return o.default.createElement(n,c({className:f,ref:t},u),r)}));m.defaultProps={tag:"li"};var v=function(t){var n=t.className,r=t.displayValue,i=t.dataFilter,v=t.options,h=t.threshold,g=t.itemContent,b=t.getFilteredData,y=t.listHeight,w=t.inputValue,E=t.noResults,N=t.setInputValue,C=t.tag,S=t.customContent,k=t.validation,R=t.required,O=s(t,["className","displayValue","dataFilter","options","threshold","itemContent","getFilteredData","listHeight","inputValue","noResults","setInputValue","tag","customContent","validation","required"]),T=e.useState(!1),P=T[0],x=T[1],V=e.useState(!1),q=V[0],F=V[1],I=e.useState(),j=I[0],H=I[1],L=e.useState(),z=L[0],A=L[1],B=e.useState(),D=B[0],W=B[1],U=e.useState(-1),K=U[0],G=U[1],J=e.useState([]),M=J[0],Q=J[1],X=e.useState(!1),Y=X[0],Z=X[1],$=a.usePopper(z,D,c({placement:"bottom-start",modifiers:[l.flip]},v)),_=$.styles,ee=$.attributes;e.useEffect((function(){var e;if(P){var t=i(w);(e=t)&&"function"==typeof e.then?(Z(!0),t.then((function(e){Q(e),Z(!1)}))):Q(t)}}),[w,i,P]),e.useEffect((function(){b&&b(M)}),[b,M]);var te=e.useCallback((function(e){var t=z===e.target,a=e.target===D,l=D&&D.contains(e.target);t||a||l||F(!1)}),[z,D]),ae=e.useCallback((function(){if(z){var e=window.getComputedStyle(z).getPropertyValue("width");H(e)}}),[z]);e.useEffect((function(){if(K>-1){var e=null==D?void 0:D.querySelector("ul");if(e){var t=e.offsetHeight,a=null==D?void 0:D.querySelectorAll("li");if(a){var l=a[K].offsetHeight,n=e.scrollTop,r=K*l,o=r+l>n+t,i=r<n;e.scrollTop=i?r:o?r-t+l:n}}}}),[K,D]);var le=e.useCallback((function(e){if(P){var t=e.key;if("Escape"===t||"ArrowUp"===t&&e.altKey||"Tab"===t)return F(!1),void(z&&z.focus());switch(t){case"ArrowDown":K<M.length-1&&G(K+1);break;case"ArrowUp":K>0&&G(K-1);break;case"Home":G(0);break;case"End":G(M.length-1);break;case"Enter":if(K>-1){var a=M[K];N(r?r(a):a),F(!1)}return;default:return}e.preventDefault()}}),[K,M,z,N,P,r]);return e.useEffect((function(){return window.addEventListener("click",te),window.addEventListener("resize",ae),window.addEventListener("keydown",le),function(){window.removeEventListener("click",te),window.removeEventListener("resize",ae),window.removeEventListener("keydown",le)}}),[te,ae,le]),e.useEffect((function(){P&&(G(-1),setTimeout((function(){F(!0)}),100))}),[P]),e.useEffect((function(){q||setTimeout((function(){x(!1)}),100)}),[q]),e.useEffect((function(){if(z){var e=window.getComputedStyle(z).width;H(e)}}),[z,P]),o.default.createElement(o.default.Fragment,null,o.default.createElement(f,c({value:w,onChange:function(e){x(!0),G(-1),N(e.target.value)},onFocus:function(){return x(!0)},className:n,inputRef:A,required:R,validation:k},O),Y&&o.default.createElement("div",{className:"autocomplete-loader spinner-border"},o.default.createElement("span",{className:"sr-only"},"Loading..."))),P&&void 0!==h&&void 0!==w&&w.length>=h&&u.default.createPortal(o.default.createElement(C,c({className:"autocomplete-dropdown-container",ref:W,style:c(c({position:"absolute",zIndex:1065},_.popper),{width:j})},ee.popper),o.default.createElement(d,{show:q},o.default.createElement(p,{role:"listbox",style:{maxHeight:"".concat(y,"px")}},0===M.length?o.default.createElement(m,{role:"option"},E):M.map((function(e,t){return o.default.createElement(m,{activeItem:K===t,key:r?r(e)+t:e+t,onClick:function(){null==z||z.focus(),N(r?r(e):e),F(!1)},role:"option"},g?g(e):r?r(e):e)}))),S&&S)),document.body))};v.defaultProps={tag:"div",threshold:0,noResults:"No results found",listHeight:190},module.exports=v;
