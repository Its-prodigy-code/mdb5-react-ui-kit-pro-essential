"use strict";var e=require("clsx"),t=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=r(e),n=r(t),c=function(){return c=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)};var l=n.default.createContext({activeItem:0,dynamic:!1,dynamicStyle:{color:"",icon:""},setDynamicStyle:null,setActiveItem:null,hoveredItem:0,setHoveredItem:null}),o=n.default.forwardRef((function(e,r){var o=e.className,i=e.active,u=e.dynamic,s=e.setActive,f=e.tag,d=e.children,m=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["className","active","dynamic","setActive","tag","children"]),y=a.default("rating",o),v=t.useState(0),p=v[0],O=v[1],b=t.useState({color:"",icon:""}),g=b[0],h=b[1];return n.default.createElement(l.Provider,{value:{activeItem:i,setActiveItem:s,hoveredItem:p,setHoveredItem:O,dynamic:u,dynamicStyle:g,setDynamicStyle:h}},n.default.createElement(f,c({className:y,ref:r},m),d))}));o.defaultProps={tag:"ul"},module.exports=o;