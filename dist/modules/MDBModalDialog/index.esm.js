import e from"react";import r from"clsx";var a=function(){return a=Object.assign||function(e){for(var r,a=1,t=arguments.length;a<t;a++)for(var o in r=arguments[a])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},a.apply(this,arguments)};function t(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]])}return a}var o=e.forwardRef((function(o,l){var n=o.className,c=o.centered,s=o.children,i=o.size,d=o.scrollable,f=o.tag,m=t(o,["className","centered","children","size","scrollable","tag"]),p=r("modal-dialog",d&&"modal-dialog-scrollable",c&&"modal-dialog-centered",i&&"modal-".concat(i),n);return e.createElement(f,a({className:p},m,{ref:l}),s)}));o.defaultProps={tag:"div"};var l=e.forwardRef((function(l,n){var c=l.className,s=l.side,i=l.frame,d=l.position,f=l.children,m=t(l,["className","side","frame","position","children"]),p=r(s&&"modal-side",i&&"modal-frame",d&&"modal-".concat(d),c);return e.createElement(o,a({className:p},m,{ref:n}),f)}));l.defaultProps={tag:"div"};export{l as default};
