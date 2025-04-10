var j=Object.defineProperty;var ee=(t,e,i)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var g=(t,e,i)=>ee(t,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const I=(t,e)=>{const i=e.x-t.x,n=e.y-t.y;return Math.sqrt(i*i+n*n)},te=(t,e)=>{const i=e.x-t.x,n=e.y-t.y;return oe(Math.atan2(n,i))},ie=(t,e,i)=>{const n={x:0,y:0};return i=L(i),n.x=t.x-e*Math.cos(i),n.y=t.y-e*Math.sin(i),n},L=t=>t*(Math.PI/180),oe=t=>t*(180/Math.PI),ne=t=>isNaN(t.buttons)?t.pressure!==0:t.buttons!==0,N=new Map,H=t=>{N.has(t)&&clearTimeout(N.get(t)),N.set(t,setTimeout(t,100))},M=(t,e,i)=>{const n=e.split(/[ ,]+/g);let o;for(let s=0;s<n.length;s+=1)o=n[s],t.addEventListener?t.addEventListener(o,i,!1):t.attachEvent&&t.attachEvent(o,i)},A=(t,e,i)=>{const n=e.split(/[ ,]+/g);let o;for(let s=0;s<n.length;s+=1)o=n[s],t.removeEventListener?t.removeEventListener(o,i):t.detachEvent&&t.detachEvent(o,i)},q=t=>(t.preventDefault(),t.type.match(/^touch/)?t.changedTouches:t),R=()=>{const t=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:t,y:e}},B=(t,e)=>{e.top||e.right||e.bottom||e.left?(t.style.top=e.top,t.style.right=e.right,t.style.bottom=e.bottom,t.style.left=e.left):(t.style.left=e.x+"px",t.style.top=e.y+"px")},Y=(t,e,i)=>{const n=V(t);for(let o in n)if(n.hasOwnProperty(o))if(typeof e=="string")n[o]=e+" "+i;else{let s="";for(let d=0,r=e.length;d<r;d+=1)s+=e[d]+" "+i+", ";n[o]=s.slice(0,-2)}return n},se=(t,e)=>{const i=V(t);for(let n in i)i.hasOwnProperty(n)&&(i[n]=e);return i},V=t=>{const e={};return e[t]="",["webkit","Moz","o"].forEach(function(n){e[n+t.charAt(0).toUpperCase()+t.slice(1)]=""}),e},F=(t,e)=>{for(let i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},re=(t,e)=>{const i={};for(let n in t)t.hasOwnProperty(n)&&e.hasOwnProperty(n)?i[n]=e[n]:t.hasOwnProperty(n)&&(i[n]=t[n]);return i},X=(t,e)=>{if(t.length)for(let i=0,n=t.length;i<n;i+=1)e(t[i]);else e(t)},ae=(t,e,i)=>({x:Math.min(Math.max(t.x,e.x-i),e.x+i),y:Math.min(Math.max(t.y,e.y-i),e.y+i)});var le="ontouchstart"in window,de=!!window.PointerEvent,ce=!!window.MSPointerEvent,E={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},w,P={};de?w=E.pointer:ce?w=E.MSPointer:le?(w=E.touch,P=E.mouse):w=E.mouse;function x(){}x.prototype.on=function(t,e){var i=this,n=t.split(/[ ,]+/g),o;i._handlers_=i._handlers_||{};for(var s=0;s<n.length;s+=1)o=n[s],i._handlers_[o]=i._handlers_[o]||[],i._handlers_[o].push(e);return i};x.prototype.off=function(t,e){var i=this;return i._handlers_=i._handlers_||{},t===void 0?i._handlers_={}:e===void 0?i._handlers_[t]=null:i._handlers_[t]&&i._handlers_[t].indexOf(e)>=0&&i._handlers_[t].splice(i._handlers_[t].indexOf(e),1),i};x.prototype.trigger=function(t,e){var i=this,n=t.split(/[ ,]+/g),o;i._handlers_=i._handlers_||{};for(var s=0;s<n.length;s+=1)o=n[s],i._handlers_[o]&&i._handlers_[o].length&&i._handlers_[o].forEach(function(d){d.call(i,{type:o,target:i},e)})};x.prototype.config=function(t){var e=this;e.options=e.defaults||{},t&&(e.options=re(e.options,t))};x.prototype.bindEvt=function(t,e){var i=this;return i._domHandlers_=i._domHandlers_||{},i._domHandlers_[e]=function(){typeof i["on"+e]=="function"?i["on"+e].apply(i,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},M(t,w[e],i._domHandlers_[e]),P[e]&&M(t,P[e],i._domHandlers_[e]),i};x.prototype.unbindEvt=function(t,e){var i=this;return i._domHandlers_=i._domHandlers_||{},A(t,w[e],i._domHandlers_[e]),P[e]&&A(t,P[e],i._domHandlers_[e]),delete i._domHandlers_[e],this};function f(t,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=t,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=f.id,f.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}f.prototype=new x;f.constructor=f;f.id=0;f.prototype.buildEl=function(t){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};f.prototype.stylize=function(){if(this.options.dataOnly)return this;var t=this.options.fadeTime+"ms",e=se("borderRadius","50%"),i=Y("transition","opacity",t),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},F(n.el,i),this.options.shape==="circle"&&F(n.back,e),F(n.front,e),this.applyStyles(n),this};f.prototype.applyStyles=function(t){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var i in t[e])this.ui[e].style[i]=t[e][i];return this};f.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};f.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};f.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};f.prototype.show=function(t){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof t=="function"&&t.call(this)},e.options.fadeTime)),e};f.prototype.hide=function(t){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var i=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=i,typeof t=="function"&&t.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const i=e.options.restJoystick,n={};n.x=i===!0||i.x!==!1?0:e.instance.frontPosition.x,n.y=i===!0||i.y!==!1?0:e.instance.frontPosition.y,e.setPosition(t,n)}return e};f.prototype.setPosition=function(t,e){var i=this;i.frontPosition={x:e.x,y:e.y};var n=i.options.fadeTime+"ms",o={};o.front=Y("transition",["transform"],n);var s={front:{}};s.front={transform:"translate("+i.frontPosition.x+"px,"+i.frontPosition.y+"px)"},i.applyStyles(o),i.applyStyles(s),i.restTimeout=setTimeout(function(){typeof t=="function"&&t.call(i),i.restCallback()},i.options.fadeTime)};f.prototype.restCallback=function(){var t=this,e={};e.front=Y("transition","none",""),t.applyStyles(e),t.trigger("rested",t.instance)};f.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};f.prototype.computeDirection=function(t){var e=t.angle.radian,i=Math.PI/4,n=Math.PI/2,o,s,d;if(e>i&&e<i*3&&!t.lockX?o="up":e>-i&&e<=i&&!t.lockY?o="left":e>-i*3&&e<=-i&&!t.lockX?o="down":t.lockY||(o="right"),t.lockY||(e>-n&&e<n?s="left":s="right"),t.lockX||(e>0?d="up":d="down"),t.force>this.options.threshold){var r={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(r[l]=this.direction[l]);var a={};this.direction={x:s,y:d,angle:o},t.direction=this.direction;for(l in r)r[l]===this.direction[l]&&(a[l]=!0);if(a.x&&a.y&&a.angle)return t;(!a.x||!a.y)&&this.trigger("plain",t),a.x||this.trigger("plain:"+s,t),a.y||this.trigger("plain:"+d,t),a.angle||this.trigger("dir dir:"+o,t)}else this.resetDirection();return t};function c(t,e){var i=this;i.nipples=[],i.idles=[],i.actives=[],i.ids=[],i.pressureIntervals={},i.manager=t,i.id=c.id,c.id+=1,i.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},i.config(e),(i.options.mode==="static"||i.options.mode==="semi")&&(i.options.multitouch=!1),i.options.multitouch||(i.options.maxNumberOfNipples=1);const n=getComputedStyle(i.options.zone.parentElement);return n&&n.display==="flex"&&(i.parentIsFlex=!0),i.updateBox(),i.prepareNipples(),i.bindings(),i.begin(),i.nipples}c.prototype=new x;c.constructor=c;c.id=0;c.prototype.prepareNipples=function(){var t=this,e=t.nipples;e.on=t.on.bind(t),e.off=t.off.bind(t),e.options=t.options,e.destroy=t.destroy.bind(t),e.ids=t.ids,e.id=t.id,e.processOnMove=t.processOnMove.bind(t),e.processOnEnd=t.processOnEnd.bind(t),e.get=function(i){if(i===void 0)return e[0];for(var n=0,o=e.length;n<o;n+=1)if(e[n].identifier===i)return e[n];return!1}};c.prototype.bindings=function(){var t=this;t.bindEvt(t.options.zone,"start"),t.options.zone.style.touchAction="none",t.options.zone.style.msTouchAction="none"};c.prototype.begin=function(){var t=this,e=t.options;if(e.mode==="static"){var i=t.createNipple(e.position,t.manager.getIdentifier());i.add(),t.idles.push(i)}};c.prototype.createNipple=function(t,e){var i=this,n=i.manager.scroll,o={},s=i.options,d={x:i.parentIsFlex?n.x:n.x+i.box.left,y:i.parentIsFlex?n.y:n.y+i.box.top};if(t.x&&t.y)o={x:t.x-d.x,y:t.y-d.y};else if(t.top||t.right||t.bottom||t.left){var r=document.createElement("DIV");r.style.display="hidden",r.style.top=t.top,r.style.right=t.right,r.style.bottom=t.bottom,r.style.left=t.left,r.style.position="absolute",s.zone.appendChild(r);var l=r.getBoundingClientRect();s.zone.removeChild(r),o=t,t={x:l.left+n.x,y:l.top+n.y}}var a=new f(i,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:e,position:t,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(B(a.ui.el,o),B(a.ui.front,a.frontPosition)),i.nipples.push(a),i.trigger("added "+a.identifier+":added",a),i.manager.trigger("added "+a.identifier+":added",a),i.bindNipple(a),a};c.prototype.updateBox=function(){var t=this;t.box=t.options.zone.getBoundingClientRect()};c.prototype.bindNipple=function(t){var e=this,i,n=function(o,s){i=o.type+" "+s.id+":"+o.type,e.trigger(i,s)};t.on("destroyed",e.onDestroyed.bind(e)),t.on("shown hidden rested dir plain",n),t.on("dir:up dir:right dir:down dir:left",n),t.on("plain:up plain:right plain:down plain:left",n)};c.prototype.pressureFn=function(t,e,i){var n=this,o=0;clearInterval(n.pressureIntervals[i]),n.pressureIntervals[i]=setInterval((function(){var s=t.force||t.pressure||t.webkitForce||0;s!==o&&(e.trigger("pressure",s),n.trigger("pressure "+e.identifier+":pressure",s),o=s)}).bind(n),100)};c.prototype.onstart=function(t){var e=this,i=e.options,n=t;t=q(t),e.updateBox();var o=function(s){e.actives.length<i.maxNumberOfNipples?e.processOnStart(s):n.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(d){if(Object.values(n.touches).findIndex(function(l){return l.identifier===d})<0){var r=[t[0]];r.identifier=d,e.processOnEnd(r)}}),e.actives.length<i.maxNumberOfNipples&&e.processOnStart(s))};return X(t,o),e.manager.bindDocument(),!1};c.prototype.processOnStart=function(t){var e=this,i=e.options,n,o=e.manager.getIdentifier(t),s=t.force||t.pressure||t.webkitForce||0,d={x:t.pageX,y:t.pageY},r=e.getOrCreate(o,d);r.identifier!==o&&e.manager.removeIdentifier(r.identifier),r.identifier=o;var l=function(u){u.trigger("start",u),e.trigger("start "+u.id+":start",u),u.show(),s>0&&e.pressureFn(t,u,u.identifier),e.processOnMove(t)};if((n=e.idles.indexOf(r))>=0&&e.idles.splice(n,1),e.actives.push(r),e.ids.push(r.identifier),i.mode!=="semi")l(r);else{var a=I(d,r.position);if(a<=i.catchDistance)l(r);else{r.destroy(),e.processOnStart(t);return}}return r};c.prototype.getOrCreate=function(t,e){var i=this,n=i.options,o;return/(semi|static)/.test(n.mode)?(o=i.idles[0],o?(i.idles.splice(0,1),o):n.mode==="semi"?i.createNipple(e,t):(console.warn("Coudln't find the needed nipple."),!1)):(o=i.createNipple(e,t),o)};c.prototype.processOnMove=function(t){var e=this,i=e.options,n=e.manager.getIdentifier(t),o=e.nipples.get(n),s=e.manager.scroll;if(!ne(t)){this.processOnEnd(t);return}if(!o){console.error("Found zombie joystick with ID "+n),e.manager.removeIdentifier(n);return}if(i.dynamicPage){var d=o.el.getBoundingClientRect();o.position={x:s.x+d.left,y:s.y+d.top}}o.identifier=n;var r=o.options.size/2,l={x:t.pageX,y:t.pageY};i.lockX&&(l.y=o.position.y),i.lockY&&(l.x=o.position.x);var a=I(l,o.position),u=te(l,o.position),W=L(u),$=a/r,K={distance:a,position:l},T,b;if(o.options.shape==="circle"?(T=Math.min(a,r),b=ie(o.position,T,u)):(b=ae(l,o.position,r),T=I(b,o.position)),i.follow){if(a>r){let Q=l.x-b.x,Z=l.y-b.y;o.position.x+=Q,o.position.y+=Z,o.el.style.top=o.position.y-(e.box.top+s.y)+"px",o.el.style.left=o.position.x-(e.box.left+s.x)+"px",a=I(l,o.position)}}else l=b,a=T;var D=l.x-o.position.x,C=l.y-o.position.y;o.frontPosition={x:D,y:C},i.dataOnly||(o.ui.front.style.transform="translate("+D+"px,"+C+"px)");var _={identifier:o.identifier,position:l,force:$,pressure:t.force||t.pressure||t.webkitForce||0,distance:a,angle:{radian:W,degree:u},vector:{x:D/r,y:-C/r},raw:K,instance:o,lockX:i.lockX,lockY:i.lockY};_=o.computeDirection(_),_.angle={radian:L(180-u),degree:180-u},o.trigger("move",_),e.trigger("move "+o.id+":move",_)};c.prototype.processOnEnd=function(t){var e=this,i=e.options,n=e.manager.getIdentifier(t),o=e.nipples.get(n),s=e.manager.removeIdentifier(o.identifier);o&&(i.dataOnly||o.hide(function(){i.mode==="dynamic"&&(o.trigger("removed",o),e.trigger("removed "+o.id+":removed",o),e.manager.trigger("removed "+o.id+":removed",o),o.destroy())}),clearInterval(e.pressureIntervals[o.identifier]),o.resetDirection(),o.trigger("end",o),e.trigger("end "+o.id+":end",o),e.ids.indexOf(o.identifier)>=0&&e.ids.splice(e.ids.indexOf(o.identifier),1),e.actives.indexOf(o)>=0&&e.actives.splice(e.actives.indexOf(o),1),/(semi|static)/.test(i.mode)?e.idles.push(o):e.nipples.indexOf(o)>=0&&e.nipples.splice(e.nipples.indexOf(o),1),e.manager.unbindDocument(),/(semi|static)/.test(i.mode)&&(e.manager.ids[s.id]=s.identifier))};c.prototype.onDestroyed=function(t,e){var i=this;i.nipples.indexOf(e)>=0&&i.nipples.splice(i.nipples.indexOf(e),1),i.actives.indexOf(e)>=0&&i.actives.splice(i.actives.indexOf(e),1),i.idles.indexOf(e)>=0&&i.idles.splice(i.idles.indexOf(e),1),i.ids.indexOf(e.identifier)>=0&&i.ids.splice(i.ids.indexOf(e.identifier),1),i.manager.removeIdentifier(e.identifier),i.manager.unbindDocument()};c.prototype.destroy=function(){var t=this;t.unbindEvt(t.options.zone,"start"),t.nipples.forEach(function(i){i.destroy()});for(var e in t.pressureIntervals)t.pressureIntervals.hasOwnProperty(e)&&clearInterval(t.pressureIntervals[e]);t.trigger("destroyed",t.nipples),t.manager.unbindDocument(),t.off()};function p(t){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=R(),e.config(t),e.prepareCollections();var i=function(){var o;e.collections.forEach(function(s){s.forEach(function(d){o=d.el.getBoundingClientRect(),d.position={x:e.scroll.x+o.left,y:e.scroll.y+o.top}})})};M(window,"resize",function(){H(i)});var n=function(){e.scroll=R()};return M(window,"scroll",function(){H(n)}),e.collections}p.prototype=new x;p.constructor=p;p.prototype.prepareCollections=function(){var t=this;t.collections.create=t.create.bind(t),t.collections.on=t.on.bind(t),t.collections.off=t.off.bind(t),t.collections.destroy=t.destroy.bind(t),t.collections.get=function(e){var i;return t.collections.every(function(n){return i=n.get(e),!i}),i}};p.prototype.create=function(t){return this.createCollection(t)};p.prototype.createCollection=function(t){var e=this,i=new c(e,t);return e.bindCollection(i),e.collections.push(i),i};p.prototype.bindCollection=function(t){var e=this,i,n=function(o,s){i=o.type+" "+s.id+":"+o.type,e.trigger(i,s)};t.on("destroyed",e.onDestroyed.bind(e)),t.on("shown hidden rested dir plain",n),t.on("dir:up dir:right dir:down dir:left",n),t.on("plain:up plain:right plain:down plain:left",n)};p.prototype.bindDocument=function(){var t=this;t.binded||(t.bindEvt(document,"move").bindEvt(document,"end"),t.binded=!0)};p.prototype.unbindDocument=function(t){var e=this;(!Object.keys(e.ids).length||t===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};p.prototype.getIdentifier=function(t){var e;return t?(e=t.identifier===void 0?t.pointerId:t.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};p.prototype.removeIdentifier=function(t){var e={};for(var i in this.ids)if(this.ids[i]===t){e.id=i,e.identifier=this.ids[i],delete this.ids[i];break}return e};p.prototype.onmove=function(t){var e=this;return e.onAny("move",t),!1};p.prototype.onend=function(t){var e=this;return e.onAny("end",t),!1};p.prototype.oncancel=function(t){var e=this;return e.onAny("end",t),!1};p.prototype.onAny=function(t,e){var i=this,n,o="processOn"+t.charAt(0).toUpperCase()+t.slice(1);e=q(e);var s=function(r,l,a){a.ids.indexOf(l)>=0&&(a[o](r),r._found_=!0)},d=function(r){n=i.getIdentifier(r),X(i.collections,s.bind(null,r,n)),r._found_||i.removeIdentifier(n)};return X(e,d),!1};p.prototype.destroy=function(){var t=this;t.unbindDocument(!0),t.ids={},t.index=0,t.collections.forEach(function(e){e.destroy()}),t.off()};p.prototype.onDestroyed=function(t,e){var i=this;if(i.collections.indexOf(e)<0)return!1;i.collections.splice(i.collections.indexOf(e),1)};const J=new p,fe={create:function(t){return J.create(t)},factory:J};class pe{constructor(e,i,n){g(this,"dampening",.1);g(this,"maxSpeed",4);g(this,"acceleration",{x:0,y:0});g(this,"velocity",{x:0,y:0});g(this,"position",{x:0,y:0});g(this,"width",0);g(this,"height",0);g(this,"id",0);this.id=e,this.position.x=i,this.position.y=n,this.width=i*2,this.height=n*2}updateAcceleration(e,i){this.acceleration.x=e,this.acceleration.y=i}updateVelocity(){this.velocity.x+=this.acceleration.x,this.velocity.y+=this.acceleration.y,this.velocity.x*=1-this.dampening,this.velocity.y*=1-this.dampening}speed(){return Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y)}update(e,i){this.updateAcceleration(e,i),this.updateVelocity();let n=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y);n>this.maxSpeed&&(this.velocity.x=this.velocity.x/n*this.maxSpeed,this.velocity.y=this.velocity.y/n*this.maxSpeed),this.position.x+=this.velocity.x,this.position.y-=this.velocity.y,this.position.x<0&&(this.position.x=this.width),this.position.x>this.width&&(this.position.x=0),this.position.y<0&&(this.position.y=this.height),this.position.y>this.height&&(this.position.y=0)}}class he{constructor(e,i,n,o){this.x=e,this.y=i,this.speed=n,this.angle=o,this.remove=!1}move(){this.x+=this.speed*Math.cos(this.angle),this.y+=this.speed*Math.sin(this.angle)}}const ue="/assets/spaceship-COG0hahM.png";var ye={zone:document.getElementById("zone_joystick"),mode:"static",position:{left:"50%",bottom:"50%"},color:"blue",size:200,restOpacity:.5,dynamic:!0,catchDistance:50,fadeTime:100,fadeDuration:200},U=fe.create(ye);let h=document.createElement("canvas");h.width=window.innerWidth;h.height=window.innerHeight;document.body.appendChild(h);h.style.position="absolute";h.style.top="0px";h.style.left="0px";h.style.zIndex="1";h.style.pointerEvents="none";h.id="mycanvas";var v=h.getContext("2d");let z=0,S=0;U.on("move",function(t,e){z=e.vector.x,S=e.vector.y});U.on("end",function(){z=0,S=0});let m=new pe(1,h.width/2,h.height/2),y=[],O=document.getElementById("nippleXY");O.style.position="absolute";O.style.top="0px";O.style.left="0px";O.style.zIndex="1";O.style.pointerEvents="none";let k=new Image;k.src=ue;function G(){O.innerHTML="x: "+z+" y: "+S,m.update(z,S),v.clearRect(0,0,h.width,h.height),v.save(),v.translate(m.position.x,m.position.y),v.rotate(Math.atan2(-m.velocity.y,m.velocity.x)+Math.PI/2),v.drawImage(k,-k.width/2,-k.height/2),v.restore();for(let t=0;t<y.length;t++)y[t].move(),v.fillStyle="red",v.fillRect(y[t].x,y[t].y,5,5),(y[t].x<0||y[t].x>h.width||y[t].y<0||y[t].y>h.height)&&(y[t].remove=!0);console.log(y.length),y=y.filter(t=>!t.remove),v.fillStyle="black",v.fillRect(m.position.x-5,m.position.y-5,10,10),requestAnimationFrame(G)}G();document.addEventListener("keydown",function(t){if(t.code==="Space"){let e=new he(m.position.x,m.position.y,m.speed()+1,Math.atan2(-m.velocity.y,m.velocity.x));y.push(e)}});
