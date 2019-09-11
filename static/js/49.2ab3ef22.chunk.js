(window["webpackJsonpONEShow-RedesSociales"]=window["webpackJsonpONEShow-RedesSociales"]||[]).push([[49],{155:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_toast",(function(){return h}));var r=o(1),n=o(23),i=(o(2),o(15)),a=o(16),s=o(166),c=o(168),d=function(t,e){var o=Object(i.a)(),r=Object(i.a)(),n=t.host||t,a=t.querySelector(".toast-wrapper");switch(r.addElement(a),e){case"top":r.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":var s=Math.floor(n.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",r.fromTo("opacity",.01,1);break;default:r.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return o.addElement(n).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(r)},l=function(t,e){var o=Object(i.a)(),r=Object(i.a)(),n=t.host||t,a=t.querySelector(".toast-wrapper");switch(r.addElement(a),e){case"top":r.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return o.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)},u=function(t,e){var o=Object(i.a)(),r=Object(i.a)(),n=t.host||t,a=t.querySelector(".toast-wrapper");switch(r.addElement(a),e){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",r.fromTo("opacity",.01,1);break;case"middle":var s=Math.floor(n.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",r.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",r.fromTo("opacity",.01,1)}return o.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(r)},p=function(t){var e=Object(i.a)(),o=Object(i.a)(),r=t.host||t,n=t.querySelector(".toast-wrapper");return o.addElement(n).fromTo("opacity",.99,0),e.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},h=function(){function t(t){Object(n.l)(this,t),this.presented=!1,this.mode=Object(n.e)(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0,Object(a.e)(this.el),this.didPresent=Object(n.d)(this,"ionToastDidPresent",7),this.willPresent=Object(n.d)(this,"ionToastWillPresent",7),this.willDismiss=Object(n.d)(this,"ionToastWillDismiss",7),this.didDismiss=Object(n.d)(this,"ionToastDidDismiss",7)}return t.prototype.present=function(){return r.a(this,void 0,void 0,(function(){var t=this;return r.c(this,(function(e){switch(e.label){case 0:return[4,Object(a.f)(this,"toastEnter",d,u,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return t.dismiss(void 0,"timeout")}),this.duration)),[2]}}))}))},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(a.g)(this,t,e,"toastLeave",l,p,this.position)},t.prototype.onDidDismiss=function(){return Object(a.h)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(a.h)(this.el,"ionToastWillDismiss")},t.prototype.getButtons=function(){var t=this,e=this.buttons?this.buttons.map((function(t){return"string"===typeof t?{text:t}:t})):[];return this.showCloseButton&&e.push({text:this.closeButtonText||"Close",handler:function(){return t.dismiss(void 0,"cancel")}}),e},t.prototype.buttonClick=function(t){return r.a(this,void 0,void 0,(function(){var e;return r.c(this,(function(o){switch(o.label){case 0:return e=t.role,Object(a.j)(e)?[2,this.dismiss(void 0,e)]:[4,this.callButtonHandler(t)];case 1:return o.sent()?[2,this.dismiss(void 0,t.role)]:[2,Promise.resolve()]}}))}))},t.prototype.callButtonHandler=function(t){return r.a(this,void 0,void 0,(function(){var e;return r.c(this,(function(o){switch(o.label){case 0:if(!t||!t.handler)return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,Object(a.p)(t.handler)];case 2:return!1===o.sent()?[2,!1]:[3,4];case 3:return e=o.sent(),console.error(e),[3,4];case 4:return[2,!0]}}))}))},t.prototype.renderButtons=function(t,e){var o,r=this;if(0!==t.length){var i=Object(n.e)(this),a=((o={"toast-button-group":!0})["toast-button-group-"+e]=!0,o);return Object(n.i)("div",{class:a},t.map((function(t){return Object(n.i)("button",{type:"button",class:b(t),tabIndex:0,onClick:function(){return r.buttonClick(t)}},Object(n.i)("div",{class:"toast-button-inner"},t.icon&&Object(n.i)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===i&&Object(n.i)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))})))}},t.prototype.render=function(){var t,e,o=this.getButtons(),r=o.filter((function(t){return"start"===t.side})),i=o.filter((function(t){return"start"!==t.side})),a=Object(n.e)(this),d=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(n.i)(n.a,{style:{zIndex:""+(6e4+this.overlayIndex)},class:Object.assign((e={},e[a]=!0,e),Object(s.a)(this.color),Object(s.b)(this.cssClass),{"toast-translucent":this.translucent})},Object(n.i)("div",{class:d},Object(n.i)("div",{class:"toast-container"},this.renderButtons(r,"start"),Object(n.i)("div",{class:"toast-content"},void 0!==this.header&&Object(n.i)("div",{class:"toast-header"},this.header),void 0!==this.message&&Object(n.i)("div",{class:"toast-message",innerHTML:Object(c.a)(this.message)})),this.renderButtons(i,"end"))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50,#f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-850,#262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-middle{opacity:.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.activated{opacity:.4}@media (any-hover:hover){.toast-button:hover{opacity:.6}}"},enumerable:!0,configurable:!0}),t}(),b=function(t){var e;return Object.assign(((e={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text})["toast-button-"+t.role]=void 0!==t.role,e["ion-focusable"]=!0,e["ion-activatable"]=!0,e),Object(s.b)(t.cssClass))}},166:function(t,e,o){"use strict";o.d(e,"a",(function(){return i})),o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return n})),o.d(e,"d",(function(){return c}));var r=o(1),n=function(t,e){return null!==e.closest(t)},i=function(t){var e;return"string"===typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,c=function(t,e,o){return r.a(void 0,void 0,void 0,(function(){var n;return r.c(this,(function(r){return null!=t&&"#"!==t[0]&&!s.test(t)&&(n=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,n.push(t,o)]):[2,!1]}))}))}},168:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var r=function(t){try{if("string"!==typeof t||""===t)return t;var e=document.createDocumentFragment(),o=document.createElement("div");e.appendChild(o),o.innerHTML=t,s.forEach((function(t){for(var o=e.querySelectorAll(t),r=o.length-1;r>=0;r--){var a=o[r];a.parentNode?a.parentNode.removeChild(a):e.removeChild(a);for(var s=i(a),c=0;c<s.length;c++)n(s[c])}}));for(var r=i(e),a=0;a<r.length;a++)n(r[a]);var c=document.createElement("div");c.appendChild(e);var d=c.querySelector("div");return null!==d?d.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},n=function t(e){if(!e.nodeType||1===e.nodeType){for(var o=e.attributes.length-1;o>=0;o--){var r=e.attributes.item(o),n=r.name;if(a.includes(n.toLowerCase())){var s=r.value;null!=s&&s.toLowerCase().includes("javascript:")&&e.removeAttribute(n)}else e.removeAttribute(n)}var c=i(e);for(o=0;o<c.length;o++)t(c[o])}},i=function(t){return null!=t.children?t.children:t.childNodes},a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=49.2ab3ef22.chunk.js.map