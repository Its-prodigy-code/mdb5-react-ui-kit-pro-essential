"use strict";var e=require("clsx"),t=require("react"),a=require("react-popper"),l=require("react-dom");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),c=n(t),i=n(l),u=function(){return u=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},u.apply(this,arguments)};function s(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(a[l[n]]=e[l[n]])}return a}function o(e,t){for(var a=0,l=t.length,n=e.length;a<l;a++,n++)e[n]=t[a];return e}var d=function(e){var a,l=e.className,n=e.size,i=e.contrast,o=e.value,d=e.defaultValue,f=e.id,v=e.labelId,m=e.labelClass,p=e.wrapperClass,h=e.wrapperStyle,b=e.wrapperTag,g=e.label,E=e.onChange,N=e.children,x=e.labelRef,y=e.labelStyle,w=e.inputRef,k=e.textarea,C=e.validation,T=e.invalid,S=e.validationTooltip,R=e.btnClasses,L=e.btnOnClick,O=e.btnRef,P=e.onBlur,F=e.readonly,I=e.btn,B=e.btnType,j=s(e,["className","size","contrast","value","defaultValue","id","labelId","labelClass","wrapperClass","wrapperStyle","wrapperTag","label","onChange","children","labelRef","labelStyle","inputRef","textarea","validation","invalid","validationTooltip","btnClasses","btnOnClick","btnRef","onBlur","readonly","btn","btnType"]),z=t.useRef(null),A=t.useRef(null),W=t.useRef(null),q=t.useRef(null),V=x||z,D=O||A,H=w||(k?q:W),M=t.useState(o||d),U=M[0],K=M[1],G=t.useState(0),J=G[0],Q=G[1],X=t.useState(void 0!==o&&o.length>0||(void 0!==d&&d.length)>0),Y=X[0],Z=X[1],$=r.default("form-outline",i&&"form-white",p),_=r.default("form-control",Y&&"active",n&&"form-control-"+n,l),ee=r.default("form-label",m),te=r.default(C&&(T?"invalid-"+(S?"tooltip":"feedback"):"valid-"+(S?"tooltip":"feedback")));t.useEffect((function(){var e;V.current&&0!==(null===(e=V.current)||void 0===e?void 0:e.clientWidth)&&Q(.8*V.current.clientWidth+8)}),[V,null===(a=V.current)||void 0===a?void 0:a.clientWidth]);var ae=function(){V.current&&Q(.8*V.current.clientWidth+8)};t.useEffect((function(){void 0!==o&&(o.length>0?Z(!0):Z(!1))}),[o]),t.useEffect((function(){void 0!==d&&(d.length>0?Z(!0):Z(!1))}),[d]);var le=function(e){K(e.currentTarget.value),E&&E(e)},ne=t.useCallback((function(e){void 0!==U&&U.length>0||void 0!==o&&o.length>0?Z(!0):Z(!1),P&&P(e)}),[U,o,P]);return c.default.createElement(b,{className:$,style:u({},h)},k?c.default.createElement("textarea",u({readOnly:F,className:_,onBlur:ne,onChange:le,onFocus:ae,defaultValue:d,value:o,id:f,ref:H},j)):c.default.createElement("input",u({readOnly:F,className:_,onBlur:ne,onChange:le,onFocus:ae,value:o,defaultValue:d,id:f,ref:H},j)),g&&c.default.createElement("label",{className:ee,style:y,id:v,htmlFor:f,ref:V},g),C&&c.default.createElement("div",{className:te},C),c.default.createElement("div",{className:"form-notch"},c.default.createElement("div",{className:"form-notch-leading"}),c.default.createElement("div",{className:"form-notch-middle",style:{width:J}}),c.default.createElement("div",{className:"form-notch-trailing"})),I&&c.default.createElement("button",{ref:D,type:B,className:R,onClick:L},I),N)};d.defaultProps={wrapperTag:"div",btnType:"button",readonly:!1};var f=c.default.forwardRef((function(e,t){var a=e.className,l=e.open,n=e.tag,i=e.children,o=s(e,["className","open","tag","children"]),d=r.default("select-dropdown",l&&"open",a);return c.default.createElement(n,u({className:d},o,{ref:t}),i)}));f.defaultProps={tag:"div"};var v=c.default.forwardRef((function(e,t){var a=e.className,l=e.tag,n=e.children,i=s(e,["className","tag","children"]),o=r.default("select-option-icon-container",a);return c.default.createElement(l,u({className:o},i,{ref:t}),n)}));v.defaultProps={tag:"span"};var m=c.default.forwardRef((function(e,t){var a=e.className,l=e.tag,n=e.labelId,i=e.labelClass,o=e.wrapperClass,d=e.wrapperTag,f=e.label,v=e.inline,m=e.btn,p=e.id,h=e.defaultChecked,b=e.checked,g=e.validation,E=e.invalid,N=e.btnColor,x=e.disableWrapper,y=e.toggleSwitch,w=s(e,["className","tag","labelId","labelClass","wrapperClass","wrapperTag","label","inline","btn","id","defaultChecked","checked","validation","invalid","btnColor","disableWrapper","toggleSwitch"]),k="form-check-input",C="form-check-label";m&&(k="btn-check",C=N?"btn btn-"+N:"btn btn-primary");var T=r.default(f&&!m&&"form-check",v&&!m&&"form-check-inline",y&&"form-switch",o),S=r.default(k,a),R=r.default(C,i),L=r.default(g&&(E?"invalid-feedback":"valid-feedback"));return c.default.createElement(c.default.Fragment,null,x?c.default.createElement(c.default.Fragment,null,c.default.createElement(l,u({className:S,type:"checkbox",defaultChecked:h,checked:b,id:p,ref:t},w)),f&&c.default.createElement("label",{className:R,id:n,htmlFor:p},f),g&&c.default.createElement("div",{className:L},g)):c.default.createElement(d,{className:T},c.default.createElement(l,u({className:S,type:"checkbox",defaultChecked:h,checked:b,id:p,ref:t},w)),f&&c.default.createElement("label",{className:R,id:n,htmlFor:p},f),g&&c.default.createElement("div",{className:L},g)))}));m.defaultProps={tag:"input",wrapperTag:"div"};var p=function(e){var a=e.className,l=e.tag,n=e.disabled,i=e.height,o=e.active,d=e.children,f=e.selected,v=e.style,p=e.secondaryText,h=e.text,b=e.revert,g=e.onClick,E=e.multiple,N=s(e,["className","tag","disabled","height","active","children","selected","style","secondaryText","text","revert","onClick","multiple"]),x=r.default(void 0!==a&&(null==a?void 0:a.includes("select-no-results"))?"":"select-option",f&&"selected",n&&"disabled",o&&"active",a),y=t.useState(i),w=y[0],k=y[1],C=t.useState(!1),T=C[0],S=C[1];t.useEffect((function(){p&&void 0===i?k(44):void 0===i&&k(38)}),[p,i]);var R=t.useCallback((function(e){n||(g&&g(e),S(!T))}),[T,n,g]);return t.useEffect((function(){E&&S(!(!f||n))}),[f,n,E]),c.default.createElement(l,u({className:x,style:u({height:w},v),onClick:R},N,{role:"option"}),b?c.default.createElement(c.default.Fragment,null,d,c.default.createElement("div",{className:"select-option-text"},E&&c.default.createElement(m,{label:h,onChange:R,checked:T,disabled:n}),!E&&h,p&&c.default.createElement("span",{className:"select-option-secondary-text"},p))):c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"select-option-text"},E&&c.default.createElement(m,{label:h,onChange:R,checked:T,disabled:n}),!E&&h,p&&c.default.createElement("span",{className:"select-option-secondary-text"},p)),d))};p.defaultProps={tag:"span",revert:!1};var h=function(e){var t=e.className,a=e.tag,l=e.children,n=s(e,["className","tag","children"]),i=r.default("select-option-group",t);return c.default.createElement(a,u({className:i},n,{role:"group"}),l)};h.defaultProps={tag:"div"};var b=function(e){var a=e.className,l=e.tag,n=e.children,i=e.height,o=s(e,["className","tag","children","height"]),d=r.default("select-option-group-label",a),f=t.useState(i),v=f[0],m=f[1];return t.useEffect((function(){void 0===i&&m(38)}),[i]),c.default.createElement(l,u({className:d,style:{height:v}},o),n)};b.defaultProps={tag:"div"};var g=c.default.forwardRef((function(e,t){var a=e.className,l=e.tag,n=e.children,i=s(e,["className","tag","children"]),o=r.default("select-option-icon",a);return c.default.createElement(l,u({className:o},i,{ref:t}),n)}));g.defaultProps={tag:"img"};var E=c.default.forwardRef((function(e,t){var a=e.className,l=e.tag,n=e.children,i=s(e,["className","tag","children"]),o=r.default("select-options-list",a);return c.default.createElement(l,u({className:o},i,{ref:t}),n)}));E.defaultProps={tag:"div"};var N=c.default.forwardRef((function(e,t){var a=e.className,l=e.tag,n=e.children,i=e.maxHeight,o=s(e,["className","tag","children","maxHeight"]),d=r.default("select-options-wrapper",a);return c.default.createElement(l,u({className:d,style:{maxHeight:i}},o,{ref:t}),n)}));N.defaultProps={tag:"div"};!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".select-input-label-active {\n  color: #1266f1 !important;\n}\n");var x=function(e){var l=e.children,n=e.className,m=e.clearBtn,x=e.data,y=e.tag,w=e.tagWrapper,k=e.visibleOptions,C=e.placeholder,T=e.disabled,S=e.search,R=e.getValue,L=e.optgroup,O=e.multiple,P=e.optionSelected,F=e.optionsSelectedLabel,I=e.label,B=e.getData,j=e.selectAllLabel,z=e.noResultLabel,A=e.searchLabel,W=e.size,q=e.validation,V=e.validFeedback,D=e.invalidFeedback,H=e.inputClassName,M=s(e,["children","className","clearBtn","data","tag","tagWrapper","visibleOptions","placeholder","disabled","search","getValue","optgroup","multiple","optionSelected","optionsSelectedLabel","label","getData","selectAllLabel","noResultLabel","searchLabel","size","validation","validFeedback","invalidFeedback","inputClassName"]),U=t.useState(!1),K=U[0],G=U[1],J=t.useState(""),Q=J[0],X=J[1],Y=t.useState(!1),Z=Y[0],$=Y[1],_=t.useState(!1),ee=_[0],te=_[1],ae=t.useState(""),le=ae[0],ne=ae[1],re=t.useRef(null),ce=t.useState(null),ie=ce[0],ue=ce[1],se=t.useState(x),oe=se[0],de=se[1],fe=t.useState(""),ve=fe[0],me=fe[1],pe=t.useState(!1),he=pe[0],be=pe[1],ge=t.useState([]),Ee=ge[0],Ne=ge[1],xe=t.useState(!1),ye=xe[0],we=xe[1],ke=t.useState(x),Ce=ke[0],Te=ke[1],Se=t.useState(),Re=Se[0],Le=Se[1],Oe=t.useState(),Pe=Oe[0],Fe=Oe[1],Ie=t.useState(oe.findIndex((function(e){return!e.disabled&&e.selected}))),Be=Ie[0],je=Ie[1],ze=t.useRef(null),Ae=t.useState(!1),We=Ae[0],qe=Ae[1],Ve=t.useRef(null),De=t.useState(0),He=De[0],Me=De[1],Ue=t.useState(!1),Ke=Ue[0],Ge=Ue[1],Je=t.useState(!1),Qe=Je[0],Xe=Je[1],Ye=t.useRef(null),Ze=a.usePopper(Re,Pe,{placement:"bottom-start"}),$e=Ze.styles,_e=Ze.attributes,et=r.default("select-wrapper",n),tt=r.default("select-input",C&&"placeholder-active",he&&I&&"active",K&&"focused","default"!==W&&"form-control-"+W,H);t.useEffect((function(){var e=[];oe.forEach((function(t){t.selected&&e.push({text:t.text,value:t.value})})),R&&e&&R(O?e:e[0])}),[le]),t.useEffect((function(){Z&&S&&setTimeout((function(){var e;null===(e=Ve.current)||void 0===e||e.focus()}),100)}),[Z,S]);var at=t.useCallback((function(){null!=Re&&Z&&setTimeout((function(){var e,t=null===(e=Re.parentNode)||void 0===e?void 0:e.parentNode.getBoundingClientRect();X(t.width)}),100)}),[Re,Z]);t.useEffect((function(){var e,t;if(V&&D&&Re){if(V){var a=document.createElement("div");a.classList.add("valid-feedback"),a.innerHTML=V,Re.setAttribute("required","true"),null===(e=Re.parentNode)||void 0===e||e.insertBefore(a,Re.nextSibling)}if(D){var l=document.createElement("div");l.classList.add("invalid-feedback"),l.innerHTML=D,Re.setAttribute("required","true"),null===(t=Re.parentNode)||void 0===t||t.insertBefore(l,Re.nextSibling)}}}),[V,D,Re]),t.useEffect((function(){at()}),[at]);var lt=t.useCallback((function(e){Pe&&null!==Pe&&K&&Re&&null!==Re&&(Pe.contains(e.target)||Re.contains(e.target)?be(!0):(G(!1),be(!1),S&&setTimeout((function(){me("")}),100)))}),[K,Pe,Re,S]),nt=t.useCallback((function(){G(!K),S&&me("")}),[K,S]);t.useEffect((function(){if(We&&!Z&&void 0!==He)if(O)G(!0);else{var e=x.map((function(e,t){return u(u({},e),t===He?{selected:!0,active:!0}:{selected:!1,active:!1})}));He<=0?ne(e[0].text):He>=e.length-1?ne(e[e.length-1].text):ne(e[He].text);for(var t=[],a=function(a){t.push(u(u({},x[a]),e.find((function(e){return e.text===x[a].text}))))},l=0;l<x.length;l++)a(l);B&&B(t),Te(t),de(t)}return function(){clearTimeout(undefined)}}),[He]),t.useEffect((function(){var e,t;return K?($(!0),I&&be(!0),t=setTimeout((function(){te(!0)}),100)):(e=setTimeout((function(){$(!1)}),100),I&&be(!1),te(!1)),function(){clearTimeout(e),clearTimeout(t)}}),[K,I]),t.useEffect((function(){if(O)if(ye){var e=oe.map((function(e){return u(u({},e),{selected:!0,active:!0})}));de(e);var t=e.filter((function(e){return!e.disabled})).map((function(e){return e.text}));Ne(t),ne(t.length+" option"+(t.length<=1?"":"s")+" selected")}else{de(Ce);t=Ce.filter((function(e){return!e.disabled&&e.selected})).map((function(e){return e.text}));Ne(t),ne(t.length+" option"+(t.length<=1?"":"s")+" selected")}}),[ye]),t.useEffect((function(){O&&(Ee.length>=Number(P)?ne(F||Ee.length+" option"+(Ee.length<=1?"":"s")+" selected"):ne(Ee.join(", ")))}),[Ee,O,P,F]),t.useEffect((function(){if(L){var e=x.reduce((function(e,t){var a=t.group.data.map((function(e){return void 0===e.selected?u(u({},e),{selected:!1}):e}));return t.group.data=a,e.push(t),e}),[]),t=e.map((function(e){return e.group.data.filter((function(e){return!0===e.selected}))})).flat();t.length>0&&(de(e),ne(t[0].text))}else if(O){l=x.map((function(e){return void 0===e.selected?u(u({},e),{active:!1,selected:!1}):u(u({},e),{active:!0})}));de(l);var a=Ce.filter((function(e){return!0===e.selected&&!e.disabled})).map((function(e){return e.text}));Ne(a),Ee.length>=Number(P)?ne(Ee.length+" option"+(Ee.length<=1?"":"s")+" selected"):ne(Ee.join(", "))}else{var l,n=(l=oe.map((function(e){return void 0===e.selected?u(u({},e),{active:!1,selected:!1}):u(u({},e),{active:!0})}))).filter((function(e){return!0===e.selected&&!e.disabled}));n.length>0&&(de(l),ne(n[0].text)),B&&B(l)}}),[]),t.useEffect((function(){return Z&&window.addEventListener("resize",at),function(){window.removeEventListener("resize",at)}}),[at,Z]),t.useEffect((function(){return Z&&window.addEventListener("click",lt),function(){window.removeEventListener("click",lt)}}),[lt,Z]),t.useEffect((function(){var e,t;return K?($(!0),I&&be(!0),t=setTimeout((function(){te(!0)}),100)):(e=setTimeout((function(){$(!1)}),100),I&&be(!1),te(!1)),function(){clearTimeout(e),clearTimeout(t)}}),[K,I]);var rt=t.useCallback((function(e,t,a){return void 0===a&&(a=k),o([],e).slice(0,a).forEach((function(e){var a=getComputedStyle(e).height;t.push(parseFloat(a))})),t}),[k]);t.useEffect((function(){var e,t;if(Z){var a=null===(e=re.current)||void 0===e?void 0:e.children,l=[];t=setTimeout((function(){if(void 0!==a){if(L){var e=[];o([],a).map((function(t){var a=t.children;e.push.apply(e,a)})),rt(e,l)}else rt(a,l);ue(l.reduce((function(e,t){return e+t})))}}),0)}return function(){clearTimeout(t)}}),[Z,k,L,rt]);var ct=t.useCallback((function(e,t){var a=e.disabled,l=e.className,n=e.text,r=e.selected;if(!(a||void 0!==l&&l.includes("select-no-results")))if(O)oe[t].selected=!oe[t].selected,de(oe),Te(oe),void 0===n||r&&void 0!==r?void 0!==n&&r&&Ne(Ee.filter((function(e){return e!==n}))):Ne(o(o([],Ee),[n]));else{je(t),ne(n),G(!1);for(var c=oe.map((function(e,a){return a!==t?(e.selected=!1,e.active=!1):(e.selected=!0,e.active=!0),e})),i=x.map((function(e){return u(u({},e),{active:!1,selected:!1})})),s=[],d=function(e){s.push(u(u({},i[e]),c.find((function(t){return t.text===i[e].text}))))},f=0;f<i.length;f++)d(f);de(s),Te(s),B&&B(s)}}),[x,oe,B,O,Ee]),it=t.useCallback((function(e,t,a){var l=0;return a?((l=e-1)<0&&(l=0),t[l].disabled&&(l=it(l,t,!0))):((l=e+1)>t.length-1&&(l=t.length-1),t[l].disabled&&(l=it(l,t,!1))),l}),[]),ut=t.useCallback((function(e){var t=e.key;if("Escape"===t||"ArrowDown"===t||"ArrowUp"===t||"Enter"===t){var a,l,n;if(e.preventDefault(),"Escape"===t&&(a=setTimeout((function(){$(!1),S&&me("")}),100),G(!1),te(!1)),"ArrowDown"===t){var r=Z?oe.findIndex((function(e){return e.active})):oe.findIndex((function(e){return e.selected})),c=it(r,oe,!1);Z?(Ge(!1),Xe(!0),je(c)):Me(c)}if("ArrowUp"===t){r=Z?oe.findIndex((function(e){return e.active})):oe.findIndex((function(e){return e.selected})),c=it(r,oe,!0);Z?(Ge(!0),Xe(!1),je(c)):Me(c)}if("Enter"===t)if(Z)if(O){r=oe.findIndex((function(e){return e.active}));ct(oe[r],r)}else{n=setTimeout((function(){$(!1),S&&me("")}),100);var i=oe.filter((function(e){return e.active&&!e.disabled}))[0],s=oe.findIndex((function(e){return e.active&&!e.disabled})),o=Ce.map((function(e,t){return u(u({},e),t===s?{selected:!0}:{selected:!1})}));ne(i.text),G(!1),te(!1),de(o),Te(o)}else l=setTimeout((function(){$(!0),G(!0),te(!0)}),100);return function(){clearTimeout(a),clearTimeout(l),clearTimeout(n)}}}),[S,oe,O,ct,Ce,Z,it]);t.useEffect((function(){var e,t=Ye.current;if(null!==re){var a=[],l=[];if(Z){var n=null===(e=re.current)||void 0===e?void 0:e.children;setTimeout((function(){if(rt(n,a,x.length),rt(n,l,Be),0!==l.length){var e=l.reduce((function(e,t){return e+t}));null!==ie&&null!==t&&e>ie&&(t.scrollTop=e)}}),100)}}}),[Z,Be]),t.useEffect((function(){var e,t=Ye.current;if(null!==re){var a=[],l=[];if(Z){var n=null===(e=re.current)||void 0===e?void 0:e.children;setTimeout((function(){rt(n,a,x.length),rt(n,l,Be+2);var e=a.reduce((function(e,t){return e+t})),r=l.reduce((function(e,t){return e+t})),c=oe.map((function(e,t){return u(u({},e),t===Be?{active:!0}:{active:!1})}));de(c),null!==ie&&null!==t&&(Qe&&(t.scrollTop=r>ie?r-ie:0),Ke&&(t.scrollTop=r<=ie?r-76:e))}),100)}}}),[Z,x,Qe,Ke,rt,Be,ie]),t.useEffect((function(){return We&&window.addEventListener("keydown",ut),function(){window.removeEventListener("keydown",ut)}}),[We,ut]),t.useEffect((function(){if(O){var e=oe.filter((function(e){return e.selected&&!e.disabled})),t=oe.filter((function(e){return!e.disabled}));e.length!==t.length?we(!1):we(!0)}}),[oe,O]);return t.useMemo((function(){if(Z&&S&&!L){var e=Ce.filter((function(e){return e.text.toLowerCase().includes(ve.toLowerCase())}));0===e.length?de([{text:z,className:"select-no-results"}]):de(e)}}),[Z,Ce,S,L,z,ve]),c.default.createElement(y,{className:et,ref:ze},c.default.createElement(d,u({onFocus:function(){return qe(!0)},onBlur:function(){return qe(!1)},value:le,className:tt,labelClass:r.default(K?"select-input-label-active":"","select-label"),inputRef:Le,onClick:nt,readOnly:!q,required:q,placeholder:C,disabled:T,wrapperStyle:{zIndex:0},label:I,"aria-expanded":!!Z,"aria-disabled":!!T,"aria-haspopup":!0,role:"listbox"},M),void 0!==le&&le.length>0&&m&&c.default.createElement("span",{className:"select-clear-btn d-block",role:"button",onClick:function(){ne(""),be(!1),de(x.map((function(e){return u(u({},e),{active:!1,selected:!1})}))),Te(x.map((function(e){return u(u({},e),{active:!1,selected:!1})})))}},"✕"),c.default.createElement("span",{className:"select-arrow",style:{zIndex:-1}})),Z&&i.default.createPortal(c.default.createElement(w,u({style:u(u({},$e.popper),{width:Q,zIndex:1070})},_e.popper,{ref:Fe}),c.default.createElement(f,{open:ee},S&&c.default.createElement("div",{className:"input-group"},c.default.createElement(d,{wrapperStyle:{width:"100%"},className:"select-filter-input placeholder-active",placeholder:A,role:"searchbox",type:"text",onKeyDown:ut,onChange:function(e){me(e.target.value)},value:ve,inputRef:Ve})),c.default.createElement(N,{ref:Ye,maxHeight:ie},c.default.createElement(E,{ref:re},O&&c.default.createElement(p,{onClick:function(){we(!ye)},selected:ye,height:38,text:j,multiple:!0}),L?oe.map((function(e,t){var a=e.group;if(null!=a)return c.default.createElement(h,{key:a.text+t},c.default.createElement(b,{height:a.height},a.text),a.data.map((function(e,t){return c.default.createElement(p,{onClick:function(){return function(e){if(!(e.disabled||void 0!==e.className&&e.className.includes("select-no-results"))){ne(e.text),G(!1);var t=x.reduce((function(t,a){var l=a.group.data.map((function(t){return t.text!==e.text?t.selected=!1:t.selected=!0,t}));return a.group.data=l,t.push(a),t}),[]);de(t),Te(t)}}(e)},active:e.active,"data-value":e.value,style:e.style,className:e.className,height:e.height,selected:e.selected,key:e.text+t,disabled:e.disabled,secondaryText:e.secondaryText,text:e.text,revert:e.revert})})))})):oe.map((function(e,t){return c.default.createElement(p,{onClick:function(){return ct(e,t)},onChange:function(){return ct(e,t)},"data-value":e.value,active:e.active,className:e.className,height:e.height,style:e.style,selected:e.selected,key:e.text+t,disabled:e.disabled,secondaryText:e.secondaryText,text:e.text,revert:e.revert,multiple:O},e.icon&&c.default.createElement(v,null,"object"!=typeof e.icon||e.icon.constructor!==Object||c.default.isValidElement(e.icon)?e.icon:c.default.createElement(g,{className:e.icon.className,src:e.icon.src?e.icon.src:""},e.icon.text)))})),l&&c.default.createElement("div",{className:"select-custom-content"},l))))),document.body))};x.defaultProps={noResultLabel:"No results",optionSelected:"5",searchLabel:"Search...",selectAllLabel:"Select all",tag:"div",tagWrapper:"div",visibleOptions:5,size:"default",validation:!1},module.exports=x;
