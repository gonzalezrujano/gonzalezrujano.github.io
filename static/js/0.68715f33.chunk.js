(window["webpackJsonpONEShow-RedesSociales"]=window["webpackJsonpONEShow-RedesSociales"]||[]).push([[0],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"createSwipeBackGesture",(function(){return a}));var r=n(28),a=function(e,t,n,a,o){var i=e.ownerDocument.defaultView;return Object(r.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){var t=e.deltaX/i.innerWidth;a(t)},onEnd:function(e){var t=e.deltaX,n=i.innerWidth,r=t/n,a=e.velocityX,c=n/2,s=a>=0&&(a>.2||e.deltaX>c),u=(s?1-r:r)*n,d=0;if(u>5){var w=u/Math.abs(a);d=Math.min(w,540)}o(s,r<=0?.01:r,d)}})}}}]);
//# sourceMappingURL=0.68715f33.chunk.js.map