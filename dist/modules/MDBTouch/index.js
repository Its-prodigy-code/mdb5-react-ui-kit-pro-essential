"use strict";var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),o=function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};var r=function(e){var t=e.touches[0];return{x:t.clientX,y:t.clientY}},u=function(e){var t=e.x,n=e.y;return{x:{direction:t<0?"left":"right",value:Math.abs(t)},y:{direction:n<0?"up":"down",value:Math.abs(n)}}},a=function(e,t){var n=e.x,o=e.y;return{x:n-t.x,y:o-t.y}},i=function(e){var t=e.x1,n=e.x2,o=e.y1;return{x:t+(n-t)/2,y:o+(e.y2-o)/2}},c=function(e){var t,n,o,r,u,a=e[0],c=e[1],l={x1:a.clientX,x2:c.clientX,y1:a.clientY,y2:c.clientY};return[(t=l,n=t.x1,o=t.x2,r=t.y1,u=t.y2,Math.sqrt(Math.pow(o-n,2)+Math.pow(u-r,2))),i(l)]},l=function(e,t){return"number"==typeof e&&"number"==typeof t&&!isNaN(e)&&!isNaN(t)},s=function(t){var i=t.tag,s=t.children,v=t.touchRef,h=t.type,f=t.threshold,d=t.allDirections,p=t.onSwipe,y=t.onSwipeLeft,m=t.onSwipeRight,E=t.onSwipeUp,L=t.onSwipeDown,b=t.onPan,w=t.onPanLeft,x=t.onPanRight,g=t.onPanUp,S=t.onPanDown,C=t.onPinch,k=t.onRotate,P=t.onTap,D=t.onPress,O=t.pointers,R=t.interval,M=t.taps,j=t.time,X=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(t,["tag","children","touchRef","type","threshold","allDirections","onSwipe","onSwipeLeft","onSwipeRight","onSwipeUp","onSwipeDown","onPan","onPanLeft","onPanRight","onPanUp","onPanDown","onPinch","onRotate","onTap","onPress","pointers","interval","taps","time"]),N=e.useRef(null),T=v||N,Y=e.useState(null),U=Y[0],I=Y[1],q=e.useState(null),A=q[0],B=q[1],V=e.useState(null),_=V[0],z=V[1],F=e.useState(null),G=F[0],H=F[1],J=e.useState({x:0,y:0}),K=J[0],Q=J[1],W=e.useState(null),Z=W[0],$=W[1],ee=e.useState(0),te=ee[0],ne=ee[1],oe=e.useState(0),re=oe[0],ue=oe[1],ae=e.useState(0),ie=ae[0],ce=ae[1],le=e.useState(0),se=le[0],ve=le[1],he=e.useState(0),fe=he[0],de=he[1],pe=e.useState({x:0,y:0}),ye=pe[0],me=pe[1],Ee=e.useState(0),Le=Ee[0],be=Ee[1],we=e.useState(null),xe=we[0],ge=we[1],Se=e.useRef();e.useEffect((function(){"tap"===h&&(1===Le&&(Se.current=window.setTimeout((function(){be(0)}),R)),Le===M&&(window.clearTimeout(Se.current),be(0),P&&P(xe)))}),[Le,R,M,P,xe,h]);var Ce=e.useCallback((function(e){e.touches.length===O&&(be(Le+1),ge(e))}),[O,Le]),ke=e.useCallback((function(){}),[]),Pe=e.useCallback((function(){}),[]),De=e.useCallback((function(e){e.touches.length===O&&(Se.current=window.setTimeout((function(){D&&D(e,j)}),j))}),[j,O,D]),Oe=e.useCallback((function(){}),[]),Re=e.useCallback((function(){window.clearTimeout(Se.current)}),[]),Me=e.useCallback((function(e){I(r(e))}),[]),je=e.useCallback((function(e){return"left"===e?y:"right"===e?m:"up"===e?E:"down"===e?L:void 0}),[L,y,m,E]),Xe=e.useCallback((function(e){if("touchmove"===e.type&&e.preventDefault(),U){var t=r(e),n={x:t.x-U.x,y:t.y-U.y},o=u(n),a=o.x,i=o.y;if(d){if(f&&i.value<f&&a.value<f)return;var c=i.value>a.value?i.direction:a.direction;return p&&p(e,{direction:c}),void I(null)}var l=m||y?"x":"y";if(f&&o[l].value>f){var s=je(o[l].direction);s&&s(e),I(null)}}}),[d,p,U,f,m,y,je]),Ne=e.useCallback((function(){I(null)}),[]),Te=e.useCallback((function(e){B(r(e)),z(e)}),[]),Ye=e.useCallback((function(e){return"left"===e?w:"right"===e?x:"up"===e?g:"down"===e?S:void 0}),[S,w,x,g]),Ue=e.useCallback((function(e){"touchmove"===e.type&&e.preventDefault();var t=r(e),n=r(_),o=a(t,A),i=a(t,n),c=u(o),l=u(i),s=c.x,v=c.y;f&&d&&(v.value>f||s.value>f)&&b&&b(e);var h=w||x?"x":"y";if(f&&c[h].value>f){var p=Ye(l[h].direction);p&&p(e)}z(e)}),[d,_,A,f,b,w,x,Ye]),Ie=e.useCallback((function(e){"touchend"===e.type&&e.preventDefault(),B(null),z(null)}),[]),qe=e.useCallback((function(e){if(e.touches.length===O){"touchstart"===e.type&&e.preventDefault();var t=c(e.touches),n=t[0],o=t[1];H(n),B(n),Q(o)}}),[O]),Ae=e.useCallback((function(e){e.touches.length===O&&("touchmove"===e.type&&e.preventDefault(),H(c(e.touches)[0]),"number"==typeof A&&"number"==typeof G&&$(G/A),l(A,G)&&"object"==typeof K&&(f&&K.x>f||f&&K.y>f)&&(B(G),C&&C(e,{ratio:Z,origin:K})))}),[O,A,G,f,C,K,Z]),Be=e.useCallback((function(){l(A,G)&&B(null)}),[A,G]),Ve=e.useCallback((function(e){if("touchstart"===e.type&&e.preventDefault(),1===e.touches.length&&1===O){var t=e.target.element.getBoundingClientRect(),n=t.left,o=t.top,r=t.width,u=t.height;me({x:n+r/2,y:o+u/2})}else{if(2!==e.touches.length||2!==O)return;var a=e.touches,i=a[0],c=a[1],l={x1:c.clientX,x2:i.clientX,y1:c.clientY,y2:i.clientY};me({x:(l.x1+l.x2)/2,y:(l.y1+l.y2)/2})}}),[O]),_e=e.useCallback((function(e){var t;if("touchmove"===e.type&&e.preventDefault(),1===e.touches.length&&1===O)t=e.touches[0];else{if(2!==e.touches.length||2!==O)return;t=function(e){for(var t=null,n=Number.MIN_VALUE,o=0,r=e;o<r.length;o++){var u=r[o];u.clientX>n&&(t=u)}return t}(e.touches)}ne(function(e,t,n,o){var r=Math.atan2(o-t,n-e)*(180/Math.PI);return Math.round(r+360)%360}(ye.x,ye.y,t.clientX,t.clientY)),ie?(de(te-re),ve(se+fe)):(ue(te),ce(te),ve(0),de(0)),ue(te),k&&k(e,{currentAngle:te,distance:se,change:fe})}),[fe,te,re,ye,k,se,ie,O]),ze=e.useCallback((function(e){"touchend"===e.type&&e.preventDefault(),ne(0),ce(0),ue(0),de(0),ve(0)}),[]);return e.useEffect((function(){var e=T.current;return"tap"===h&&(e.addEventListener("touchstart",Ce),e.addEventListener("touchmove",ke),e.addEventListener("touchend",Pe)),"press"===h&&(e.addEventListener("touchstart",De),e.addEventListener("touchmove",Oe),e.addEventListener("touchend",Re)),"swipe"===h&&(e.addEventListener("touchstart",Me),e.addEventListener("touchmove",Xe),e.addEventListener("touchend",Ne)),"pan"===h&&(e.addEventListener("touchstart",Te),e.addEventListener("touchmove",Ue),e.addEventListener("touchend",Ie)),"pinch"===h&&(e.addEventListener("touchstart",qe),e.addEventListener("touchmove",Ae),e.addEventListener("touchend",Be)),"rotate"===h&&(e.addEventListener("touchstart",Ve),e.addEventListener("touchmove",_e),e.addEventListener("touchend",ze)),function(){"tap"===h&&(e.removeEventListener("touchstart",Ce),e.removeEventListener("touchmove",ke),e.removeEventListener("touchend",Pe)),"press"===h&&(e.removeEventListener("touchstart",De),e.removeEventListener("touchmove",Oe),e.removeEventListener("touchend",Re)),"swipe"===h&&(e.removeEventListener("touchstart",Me),e.removeEventListener("touchmove",Xe),e.removeEventListener("touchend",Ne)),"pan"===h&&(e.removeEventListener("touchstart",Te),e.removeEventListener("touchmove",Ue),e.removeEventListener("touchend",Ie)),"pinch"===h&&(e.removeEventListener("touchstart",qe),e.removeEventListener("touchmove",Ae),e.removeEventListener("touchend",Be)),"rotate"===h&&(e.removeEventListener("touchstart",Ve),e.removeEventListener("touchmove",_e),e.removeEventListener("touchend",ze))}}),[T,Ce,ke,Pe,De,Oe,Re,Me,Xe,Ne,Te,Ue,Ie,qe,Ae,Be,Ve,_e,ze,h]),n.default.createElement(i,o({ref:T},X),s)};s.defaultProps={tag:"div",interval:500,time:250,taps:1,pointers:1,threshold:10,allDirections:!1},module.exports=s;