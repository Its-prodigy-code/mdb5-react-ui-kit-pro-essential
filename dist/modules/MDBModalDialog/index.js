"use strict";var e=require("react"),r=require("clsx");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),l=a(r),o=function(){return o=Object.assign||function(e){for(var r,a=1,t=arguments.length;a<t;a++)for(var l in r=arguments[a])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},o.apply(this,arguments)};function n(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(a[t[l]]=e[t[l]])}return a}var c=t.default.forwardRef((function(e,r){var a=e.className,c=e.centered,d=e.children,i=e.size,s=e.scrollable,f=e.tag,u=n(e,["className","centered","children","size","scrollable","tag"]),m=l.default("modal-dialog",s&&"modal-dialog-scrollable",c&&"modal-dialog-centered",i&&"modal-"+i,a);return t.default.createElement(f,o({className:m},u,{ref:r}),d)}));c.defaultProps={tag:"div"};var d=t.default.forwardRef((function(e,r){var a=e.className,d=e.side,i=e.frame,s=e.position,f=e.children,u=n(e,["className","side","frame","position","children"]),m=l.default(d&&"modal-side",i&&"modal-frame",s&&"modal-"+s,a);return t.default.createElement(c,o({className:m},u,{ref:r}),f)}));d.defaultProps={tag:"div"},module.exports=d;
