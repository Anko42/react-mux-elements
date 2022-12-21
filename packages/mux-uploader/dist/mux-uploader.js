"use strict";(()=>{var de=(e,n,t)=>{if(!n.has(e))throw TypeError("Cannot "+t)};var pe=(e,n,t)=>(de(e,n,"read from private field"),t?t.call(e):n.get(e)),fe=(e,n,t)=>{if(n.has(e))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(e):n.set(e,t)},me=(e,n,t,r)=>(de(e,n,"write to private field"),r?r.call(e,t):n.set(e,t),t);var x=class{addEventListener(){}removeEventListener(){}dispatchEvent(n){return!0}};if(typeof DocumentFragment=="undefined"){class e extends x{}globalThis.DocumentFragment=e}var P=class extends x{},Z=class extends x{},Ye={get(e){},define(e,n,t){},upgrade(e){},whenDefined(e){return Promise.resolve(P)}},L,ee=class{constructor(n,t={}){fe(this,L,void 0);me(this,L,t==null?void 0:t.detail)}get detail(){return pe(this,L)}initCustomEvent(){}};L=new WeakMap;function Je(e,n){return new P}var ge={document:{createElement:Je},DocumentFragment,customElements:Ye,CustomEvent:ee,EventTarget:x,HTMLElement:P,HTMLVideoElement:Z},be=typeof window=="undefined"||typeof globalThis.customElements=="undefined",k=be?ge:globalThis,A=be?ge.document:globalThis.document;var ye=A.createElement("template");ye.innerHTML=`
<style>
  :host {
    position: relative;
  }

  #overlay {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  :host([active][overlay]) > #overlay {
    background: var(--overlay-background-color, rgba(226, 253, 255, 0.95));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<slot></slot>
<div id="overlay">
  <h1 id="overlay-label"></h1>
</div>
`;var F={MUX_UPLOADER:"mux-uploader",OVERLAY_TEXT:"overlay-text"},H=class extends k.HTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"});t.appendChild(ye.content.cloneNode(!0)),this.overlayText=t.getElementById("overlay-label")}connectedCallback(){this.setupDragEvents()}attributeChangedCallback(t,r,i){t===F.OVERLAY_TEXT&&r!==i?this.overlayText.innerHTML=i!=null?i:"":t==="active"&&this.getAttribute("overlay")&&i!=null&&(this._currentDragTarget=this)}static get observedAttributes(){return[F.OVERLAY_TEXT,F.MUX_UPLOADER,"active"]}get muxUploader(){let t=this.getAttribute(F.MUX_UPLOADER);return t?A.getElementById(t):null}setupDragEvents(){this.addEventListener("dragenter",t=>{this._currentDragTarget=t.target,t.preventDefault(),t.stopPropagation(),this.setAttribute("active","")}),this.addEventListener("dragleave",t=>{this._currentDragTarget===t.target&&(this._currentDragTarget=void 0,this.removeAttribute("active"))}),this.addEventListener("dragover",t=>{t.preventDefault(),t.stopPropagation()}),this.addEventListener("drop",t=>{var a;t.preventDefault(),t.stopPropagation();let{dataTransfer:r}=t,{files:i}=r,s=i[0];((a=this.muxUploader)!=null?a:this).dispatchEvent(new CustomEvent("file-ready",{composed:!0,bubbles:!0,detail:s})),this.removeAttribute("active")})}};k.customElements.get("mux-uploader-drop")||(k.customElements.define("mux-uploader-drop",H),k.MuxUploaderDropElement=H);var Qe=Object.create,Pe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,et=Object.getOwnPropertyNames,tt=Object.getPrototypeOf,nt=Object.prototype.hasOwnProperty,M=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),rt=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of et(n))!nt.call(e,i)&&i!==t&&Pe(e,i,{get:()=>n[i],enumerable:!(r=Ze(n,i))||r.enumerable});return e},it=(e,n,t)=>(t=e!=null?Qe(tt(e)):{},rt(n||!e||!e.__esModule?Pe(t,"default",{value:e,enumerable:!0}):t,e)),st=M((e,n)=>{var t;typeof window!="undefined"?t=window:typeof global!="undefined"?t=global:typeof self!="undefined"?t=self:t={},n.exports=t}),ot=M((e,n)=>{n.exports=r;var t=Object.prototype.toString;function r(i){if(!i)return!1;var s=t.call(i);return s==="[object Function]"||typeof i=="function"&&s!=="[object RegExp]"||typeof window!="undefined"&&(i===window.setTimeout||i===window.alert||i===window.confirm||i===window.prompt)}}),at=M((e,n)=>{var t=function(i){return i.replace(/^\s+|\s+$/g,"")},r=function(i){return Object.prototype.toString.call(i)==="[object Array]"};n.exports=function(i){if(!i)return{};for(var s={},l=t(i).split(`
`),a=0;a<l.length;a++){var h=l[a],c=h.indexOf(":"),m=t(h.slice(0,c)).toLowerCase(),y=t(h.slice(c+1));typeof s[m]=="undefined"?s[m]=y:r(s[m])?s[m].push(y):s[m]=[s[m],y]}return s}}),lt=M((e,n)=>{n.exports=r;var t=Object.prototype.hasOwnProperty;function r(){for(var i={},s=0;s<arguments.length;s++){var l=arguments[s];for(var a in l)t.call(l,a)&&(i[a]=l[a])}return i}}),ut=M((e,n)=>{"use strict";var t=st(),r=ot(),i=at(),s=lt();n.exports=c,n.exports.default=c,c.XMLHttpRequest=t.XMLHttpRequest||B,c.XDomainRequest="withCredentials"in new c.XMLHttpRequest?c.XMLHttpRequest:t.XDomainRequest,l(["get","put","post","patch","head","delete"],function(o){c[o==="delete"?"del":o]=function(p,d,b){return d=h(p,d,b),d.method=o.toUpperCase(),m(d)}});function l(o,p){for(var d=0;d<o.length;d++)p(o[d])}function a(o){for(var p in o)if(o.hasOwnProperty(p))return!1;return!0}function h(o,p,d){var b=o;return r(p)?(d=p,typeof o=="string"&&(b={uri:o})):b=s(p,{uri:o}),b.callback=d,b}function c(o,p,d){return p=h(o,p,d),m(p)}function m(o){if(typeof o.callback=="undefined")throw new Error("callback argument missing");var p=!1,d=function(f,T,j){p||(p=!0,o.callback(f,T,j))};function b(){u.readyState===4&&setTimeout(ue,0)}function I(){var f=void 0;if(u.response?f=u.response:f=u.responseText||y(u),he)try{f=JSON.parse(f)}catch{}return f}function G(f){return clearTimeout(Q),f instanceof Error||(f=new Error(""+(f||"Unknown XMLHttpRequest Error"))),f.statusCode=0,d(f,ce)}function ue(){if(!U){var f;clearTimeout(Q),o.useXDR&&u.status===void 0?f=200:f=u.status===1223?204:u.status;var T=ce,j=null;return f!==0?(T={body:I(),statusCode:f,method:z,headers:{},url:K,rawRequest:u},u.getAllResponseHeaders&&(T.headers=i(u.getAllResponseHeaders()))):j=new Error("Internal XMLHttpRequest Error"),d(j,T,T.body)}}var u=o.xhr||null;u||(o.cors||o.useXDR?u=new c.XDomainRequest:u=new c.XMLHttpRequest);var D,U,K=u.url=o.uri||o.url,z=u.method=o.method||"GET",Y=o.body||o.data,E=u.headers=o.headers||{},J=!!o.sync,he=!1,Q,ce={body:void 0,headers:{},statusCode:0,method:z,url:K,rawRequest:u};if("json"in o&&o.json!==!1&&(he=!0,E.accept||E.Accept||(E.Accept="application/json"),z!=="GET"&&z!=="HEAD"&&(E["content-type"]||E["Content-Type"]||(E["Content-Type"]="application/json"),Y=JSON.stringify(o.json===!0?Y:o.json))),u.onreadystatechange=b,u.onload=ue,u.onerror=G,u.onprogress=function(){},u.onabort=function(){U=!0},u.ontimeout=G,u.open(z,K,!J,o.username,o.password),J||(u.withCredentials=!!o.withCredentials),!J&&o.timeout>0&&(Q=setTimeout(function(){if(!U){U=!0,u.abort("timeout");var f=new Error("XMLHttpRequest timeout");f.code="ETIMEDOUT",G(f)}},o.timeout)),u.setRequestHeader)for(D in E)E.hasOwnProperty(D)&&u.setRequestHeader(D,E[D]);else if(o.headers&&!a(o.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in o&&(u.responseType=o.responseType),"beforeSend"in o&&typeof o.beforeSend=="function"&&o.beforeSend(u),u.send(Y||null),u}function y(o){try{if(o.responseType==="document")return o.responseXML;var p=o.responseXML&&o.responseXML.documentElement.nodeName==="parsererror";if(o.responseType===""&&!p)return o.responseXML}catch{}return null}function B(){}});function le(e,n,...t){if(!e)throw new TypeError(Le(n,t))}function Le(e,n){let t=0;return e.replace(/%[os]/gu,()=>Ae(n[t++]))}function Ae(e){return typeof e!="object"||e===null?String(e):Object.prototype.toString.call(e)}var ve;function ht(e){try{let n=e instanceof Error?e:new Error(Ae(e));if(ve){ve(n);return}if(typeof dispatchEvent=="function"&&typeof ErrorEvent=="function")dispatchEvent(new ErrorEvent("error",{error:n,message:n.message}));else if(typeof process!="undefined"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)}catch{}}var v=typeof window!="undefined"?window:typeof self!="undefined"?self:typeof global!="undefined"?global:typeof globalThis!="undefined"?globalThis:void 0,ke,C=class{constructor(e,n){this.code=e,this.message=n}warn(...e){var n;try{if(ke){ke({...this,args:e});return}let t=((n=new Error().stack)!==null&&n!==void 0?n:"").replace(/^(?:.+?\n){2}/gu,`
`);console.warn(this.message,...e,t)}catch{}}},ct=new C("W01","Unable to initialize event under dispatching."),dt=new C("W02","Assigning any falsy value to 'cancelBubble' property has no effect."),pt=new C("W03","Assigning any truthy value to 'returnValue' property has no effect."),ft=new C("W04","Unable to preventDefault on non-cancelable events."),mt=new C("W05","Unable to preventDefault inside passive event listener invocation."),gt=new C("W06","An event listener wasn't added because it has been added already: %o, %o"),te=new C("W07","The %o option value was abandoned because the event listener wasn't added as duplicated."),Ee=new C("W08","The 'callback' argument must be a function or an object that has 'handleEvent' method: %o"),Wt=new C("W09","Event attribute handler must be a function: %o"),S=class{static get NONE(){return Ce}static get CAPTURING_PHASE(){return Se}static get AT_TARGET(){return we}static get BUBBLING_PHASE(){return Te}constructor(e,n){Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});let t=n!=null?n:{};se.set(this,{type:String(e),bubbles:Boolean(t.bubbles),cancelable:Boolean(t.cancelable),composed:Boolean(t.composed),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1,inPassiveListenerFlag:!1,dispatchFlag:!1,timeStamp:Date.now()})}get type(){return g(this).type}get target(){return g(this).target}get srcElement(){return g(this).target}get currentTarget(){return g(this).currentTarget}composedPath(){let e=g(this).currentTarget;return e?[e]:[]}get NONE(){return Ce}get CAPTURING_PHASE(){return Se}get AT_TARGET(){return we}get BUBBLING_PHASE(){return Te}get eventPhase(){return g(this).dispatchFlag?2:0}stopPropagation(){g(this).stopPropagationFlag=!0}get cancelBubble(){return g(this).stopPropagationFlag}set cancelBubble(e){e?g(this).stopPropagationFlag=!0:dt.warn()}stopImmediatePropagation(){let e=g(this);e.stopPropagationFlag=e.stopImmediatePropagationFlag=!0}get bubbles(){return g(this).bubbles}get cancelable(){return g(this).cancelable}get returnValue(){return!g(this).canceledFlag}set returnValue(e){e?pt.warn():xe(g(this))}preventDefault(){xe(g(this))}get defaultPrevented(){return g(this).canceledFlag}get composed(){return g(this).composed}get isTrusted(){return!1}get timeStamp(){return g(this).timeStamp}initEvent(e,n=!1,t=!1){let r=g(this);if(r.dispatchFlag){ct.warn();return}se.set(this,{...r,type:String(e),bubbles:Boolean(n),cancelable:Boolean(t),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1})}},Ce=0,Se=1,we=2,Te=3,se=new WeakMap;function g(e,n="this"){let t=se.get(e);return le(t!=null,"'%s' must be an object that Event constructor created, but got another one: %o",n,e),t}function xe(e){if(e.inPassiveListenerFlag){mt.warn();return}if(!e.cancelable){ft.warn();return}e.canceledFlag=!0}Object.defineProperty(S,"NONE",{enumerable:!0});Object.defineProperty(S,"CAPTURING_PHASE",{enumerable:!0});Object.defineProperty(S,"AT_TARGET",{enumerable:!0});Object.defineProperty(S,"BUBBLING_PHASE",{enumerable:!0});var ne=Object.getOwnPropertyNames(S.prototype);for(let e=0;e<ne.length;++e)ne[e]!=="constructor"&&Object.defineProperty(S.prototype,ne[e],{enumerable:!0});typeof v!="undefined"&&typeof v.Event!="undefined"&&Object.setPrototypeOf(S.prototype,v.Event.prototype);function bt(e){return v.DOMException?new v.DOMException(e,"InvalidStateError"):(R==null&&(R=class Me extends Error{constructor(t){super(t),Error.captureStackTrace&&Error.captureStackTrace(this,Me)}get code(){return 11}get name(){return"InvalidStateError"}},Object.defineProperties(R.prototype,{code:{enumerable:!0},name:{enumerable:!0}}),ze(R),ze(R.prototype)),new R(e))}var R,Re={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};function ze(e){let n=Object.keys(Re);for(let t=0;t<n.length;++t){let r=n[t],i=Re[r];Object.defineProperty(e,r,{get(){return i},configurable:!0,enumerable:!0})}}var X=class extends S{static wrap(e){return new(Oe(e))(e)}constructor(e){super(e.type,{bubbles:e.bubbles,cancelable:e.cancelable,composed:e.composed}),e.cancelBubble&&super.stopPropagation(),e.defaultPrevented&&super.preventDefault(),_e.set(this,{original:e});let n=Object.keys(e);for(let t=0;t<n.length;++t){let r=n[t];r in this||Object.defineProperty(this,r,Be(e,r))}}stopPropagation(){super.stopPropagation();let{original:e}=w(this);"stopPropagation"in e&&e.stopPropagation()}get cancelBubble(){return super.cancelBubble}set cancelBubble(e){super.cancelBubble=e;let{original:n}=w(this);"cancelBubble"in n&&(n.cancelBubble=e)}stopImmediatePropagation(){super.stopImmediatePropagation();let{original:e}=w(this);"stopImmediatePropagation"in e&&e.stopImmediatePropagation()}get returnValue(){return super.returnValue}set returnValue(e){super.returnValue=e;let{original:n}=w(this);"returnValue"in n&&(n.returnValue=e)}preventDefault(){super.preventDefault();let{original:e}=w(this);"preventDefault"in e&&e.preventDefault()}get timeStamp(){let{original:e}=w(this);return"timeStamp"in e?e.timeStamp:super.timeStamp}},_e=new WeakMap;function w(e){let n=_e.get(e);return le(n!=null,"'this' is expected an Event object, but got",e),n}var N=new WeakMap;N.set(Object.prototype,X);typeof v!="undefined"&&typeof v.Event!="undefined"&&N.set(v.Event.prototype,X);function Oe(e){let n=Object.getPrototypeOf(e);if(n==null)return X;let t=N.get(n);return t==null&&(t=yt(Oe(n),n),N.set(n,t)),t}function yt(e,n){class t extends e{}let r=Object.keys(n);for(let i=0;i<r.length;++i)Object.defineProperty(t.prototype,r[i],Be(n,r[i]));return t}function Be(e,n){let t=Object.getOwnPropertyDescriptor(e,n);return{get(){let r=w(this).original,i=r[n];return typeof i=="function"?i.bind(r):i},set(r){let i=w(this).original;i[n]=r},configurable:t.configurable,enumerable:t.enumerable}}function vt(e,n,t,r,i,s){return{callback:e,flags:(n?1:0)|(t?2:0)|(r?4:0),signal:i,signalListener:s}}function kt(e){e.flags|=8}function Ie(e){return(e.flags&1)===1}function De(e){return(e.flags&2)===2}function Ue(e){return(e.flags&4)===4}function Et(e){return(e.flags&8)===8}function Ct({callback:e},n,t){try{typeof e=="function"?e.call(n,t):typeof e.handleEvent=="function"&&e.handleEvent(t)}catch(r){ht(r)}}function je({listeners:e},n,t){for(let r=0;r<e.length;++r)if(e[r].callback===n&&Ie(e[r])===t)return r;return-1}function St(e,n,t,r,i,s){let l;s&&(l=Fe.bind(null,e,n,t),s.addEventListener("abort",l));let a=vt(n,t,r,i,s,l);return e.cow?(e.cow=!1,e.listeners=[...e.listeners,a]):e.listeners.push(a),a}function Fe(e,n,t){let r=je(e,n,t);return r!==-1?He(e,r):!1}function He(e,n,t=!1){let r=e.listeners[n];return kt(r),r.signal&&r.signal.removeEventListener("abort",r.signalListener),e.cow&&!t?(e.cow=!1,e.listeners=e.listeners.filter((i,s)=>s!==n),!1):(e.listeners.splice(n,1),!0)}function wt(){return Object.create(null)}function Tt(e,n){var t;return(t=e[n])!==null&&t!==void 0?t:e[n]={attrCallback:void 0,attrListener:void 0,cow:!1,listeners:[]}}var W=class{constructor(){Ne.set(this,wt())}addEventListener(e,n,t){let r=re(this),{callback:i,capture:s,once:l,passive:a,signal:h,type:c}=xt(e,n,t);if(i==null||(h==null?void 0:h.aborted))return;let m=Tt(r,c),y=je(m,i,s);if(y!==-1){zt(m.listeners[y],a,l,h);return}St(m,i,s,a,l,h)}removeEventListener(e,n,t){let r=re(this),{callback:i,capture:s,type:l}=Rt(e,n,t),a=r[l];i!=null&&a&&Fe(a,i,s)}dispatchEvent(e){let n=re(this)[String(e.type)];if(n==null)return!0;let t=e instanceof S?e:X.wrap(e),r=g(t,"event");if(r.dispatchFlag)throw bt("This event has been in dispatching.");if(r.dispatchFlag=!0,r.target=r.currentTarget=this,!r.stopPropagationFlag){let{cow:i,listeners:s}=n;n.cow=!0;for(let l=0;l<s.length;++l){let a=s[l];if(!Et(a)&&(Ue(a)&&He(n,l,!i)&&(l-=1),r.inPassiveListenerFlag=De(a),Ct(a,this,t),r.inPassiveListenerFlag=!1,r.stopImmediatePropagationFlag))break}i||(n.cow=!1)}return r.target=null,r.currentTarget=null,r.stopImmediatePropagationFlag=!1,r.stopPropagationFlag=!1,r.dispatchFlag=!1,!r.canceledFlag}},Ne=new WeakMap;function re(e,n="this"){let t=Ne.get(e);return le(t!=null,"'%s' must be an object that EventTarget constructor created, but got another one: %o",n,e),t}function xt(e,n,t){var r;return Xe(n),typeof t=="object"&&t!==null?{type:String(e),callback:n!=null?n:void 0,capture:Boolean(t.capture),passive:Boolean(t.passive),once:Boolean(t.once),signal:(r=t.signal)!==null&&r!==void 0?r:void 0}:{type:String(e),callback:n!=null?n:void 0,capture:Boolean(t),passive:!1,once:!1,signal:void 0}}function Rt(e,n,t){return Xe(n),typeof t=="object"&&t!==null?{type:String(e),callback:n!=null?n:void 0,capture:Boolean(t.capture)}:{type:String(e),callback:n!=null?n:void 0,capture:Boolean(t)}}function Xe(e){if(!(typeof e=="function"||typeof e=="object"&&e!==null&&typeof e.handleEvent=="function")){if(e==null||typeof e=="object"){Ee.warn(e);return}throw new TypeError(Le(Ee.message,[e]))}}function zt(e,n,t,r){gt.warn(Ie(e)?"capture":"bubble",e.callback),De(e)!==n&&te.warn("passive"),Ue(e)!==t&&te.warn("once"),e.signal!==r&&te.warn("signal")}var ie=Object.getOwnPropertyNames(W.prototype);for(let e=0;e<ie.length;++e)ie[e]!=="constructor"&&Object.defineProperty(W.prototype,ie[e],{enumerable:!0});typeof v!="undefined"&&typeof v.EventTarget!="undefined"&&Object.setPrototypeOf(W.prototype,v.EventTarget.prototype);var Pt=it(ut()),We=30720,$=512e3,q=256,oe=(e,{minChunkSize:n=q,maxChunkSize:t=$}={})=>e==null||typeof e=="number"&&e>=256&&e%256===0&&e>=n&&e<=t,ae=(e,{minChunkSize:n=q,maxChunkSize:t=$}={})=>new TypeError(`chunkSize ${e} must be a positive number in multiples of 256, between ${n} and ${t}`),Lt=class{constructor(e,n={}){this.readableStream=e;var t,r,i;if(!oe(n.defaultChunkSize,n))throw ae(n.defaultChunkSize,n);this.defaultChunkSize=(t=n.defaultChunkSize)!=null?t:We,this.minChunkSize=(r=n.minChunkSize)!=null?r:q,this.maxChunkSize=(i=n.maxChunkSize)!=null?i:$}get chunkSize(){var e;return(e=this._chunkSize)!=null?e:this.defaultChunkSize}set chunkSize(e){if(!oe(e,this))throw ae(e,this);this._chunkSize=e}get chunkByteSize(){return this.chunkSize*1024}async*[Symbol.asyncIterator](){let e,n=this.readableStream.getReader();try{for(;;){let{done:t,value:r}=await n.read();if(t){if(e){let s=e;e=void 0,yield s}break}let i=r instanceof Uint8Array?new Blob([r],{type:"application/octet-stream"}):r;for(e=e?new Blob([e,i]):i;e;)if(e.size===this.chunkByteSize){let s=e;e=void 0,yield s;break}else{if(e.size<this.chunkByteSize)break;{let s=e.slice(0,this.chunkByteSize);e=e.slice(this.chunkByteSize),yield s}}}}finally{if(e){let t=e;e=void 0,yield t}n.releaseLock();return}}},At=[200,201,202,204,308],$e=[408,502,503,504],qe=(e,n)=>!!e&&At.includes(e.statusCode),Mt=(e,{retryCodes:n=$e})=>!e||n.includes(e.statusCode),_t=(e,n)=>n.attemptCount>=n.attempts||!(qe(e)||Mt(e,n)),Ot=class{constructor(e){this.endpoint=e.endpoint,this.file=e.file,this.headers=e.headers||{},this.method=e.method||"PUT",this.attempts=e.attempts||5,this.delayBeforeAttempt=e.delayBeforeAttempt||1,this.retryCodes=e.retryCodes||$e,this.dynamicChunkSize=e.dynamicChunkSize||!1,this.maxFileBytes=(e.maxFileSize||0)*1024,this.chunkCount=0,this.attemptCount=0,this.offline=!1,this._paused=!1,this.success=!1,this.nextChunkRangeStart=0,this.chunkedStreamIterable=new Lt(this.file.stream(),{...e,defaultChunkSize:e.chunkSize}),this.chunkedStreamIterator=this.chunkedStreamIterable[Symbol.asyncIterator](),this.totalChunks=Math.ceil(this.file.size/this.chunkByteSize),this.eventTarget=new W,this.validateOptions(),this.getEndpoint().then(()=>this.sendChunks()),typeof window!="undefined"&&(window.addEventListener("online",()=>{!this.offline||(this.offline=!1,this.dispatch("online"),this.sendChunks())}),window.addEventListener("offline",()=>{this.offline=!0,this.dispatch("offline")}))}get maxChunkSize(){var e,n;return(n=(e=this.chunkedStreamIterable)==null?void 0:e.chunkSize)!=null?n:$}get minChunkSize(){var e,n;return(n=(e=this.chunkedStreamIterable)==null?void 0:e.chunkSize)!=null?n:q}get chunkSize(){var e,n;return(n=(e=this.chunkedStreamIterable)==null?void 0:e.chunkSize)!=null?n:We}set chunkSize(e){this.chunkedStreamIterable.chunkSize=e}get chunkByteSize(){return this.chunkedStreamIterable.chunkByteSize}get totalChunkSize(){return Math.ceil(this.file.size/this.chunkByteSize)}on(e,n){this.eventTarget.addEventListener(e,n)}once(e,n){this.eventTarget.addEventListener(e,n,{once:!0})}off(e,n){this.eventTarget.removeEventListener(e,n)}get paused(){return this._paused}abort(){var e;this.pause(),(e=this.currentXhr)==null||e.abort()}pause(){this._paused=!0}resume(){this._paused&&(this._paused=!1,this.sendChunks())}dispatch(e,n){let t=new CustomEvent(e,{detail:n});this.eventTarget.dispatchEvent(t)}validateOptions(){if(!this.endpoint||typeof this.endpoint!="function"&&typeof this.endpoint!="string")throw new TypeError("endpoint must be defined as a string or a function that returns a promise");if(!(this.file instanceof File))throw new TypeError("file must be a File object");if(this.headers&&typeof this.headers!="object")throw new TypeError("headers must be null or an object");if(!oe(this.chunkSize,{maxChunkSize:this.maxChunkSize,minChunkSize:this.minChunkSize}))throw ae(this.chunkSize,{maxChunkSize:this.maxChunkSize,minChunkSize:this.minChunkSize});if(this.maxChunkSize&&(typeof this.maxChunkSize!="number"||this.maxChunkSize<256||this.maxChunkSize%256!==0||this.maxChunkSize<this.chunkSize||this.maxChunkSize<this.minChunkSize))throw new TypeError(`maxChunkSize must be a positive number in multiples of 256, and larger than or equal to both ${this.minChunkSize} and ${this.chunkSize}`);if(this.minChunkSize&&(typeof this.minChunkSize!="number"||this.minChunkSize<256||this.minChunkSize%256!==0||this.minChunkSize>this.chunkSize||this.minChunkSize>this.maxChunkSize))throw new TypeError(`minChunkSize must be a positive number in multiples of 256, and smaller than ${this.chunkSize} and ${this.maxChunkSize}`);if(this.maxFileBytes>0&&this.maxFileBytes<this.file.size)throw new Error(`file size exceeds maximum (${this.file.size} > ${this.maxFileBytes})`);if(this.attempts&&(typeof this.attempts!="number"||this.attempts<=0))throw new TypeError("retries must be a positive number");if(this.delayBeforeAttempt&&(typeof this.delayBeforeAttempt!="number"||this.delayBeforeAttempt<0))throw new TypeError("delayBeforeAttempt must be a positive number")}getEndpoint(){return typeof this.endpoint=="string"?(this.endpointValue=this.endpoint,Promise.resolve(this.endpoint)):this.endpoint(this.file).then(e=>(this.endpointValue=e,this.endpointValue))}xhrPromise(e){let n=t=>{t.upload.onprogress=r=>{var i;let s=this.totalChunks-this.chunkCount,l=(this.file.size-this.nextChunkRangeStart)/this.file.size/s,a=this.nextChunkRangeStart/this.file.size,h=r.loaded/((i=r.total)!=null?i:this.chunkByteSize)*l;this.dispatch("progress",Math.min((a+h)*100,100))}};return new Promise((t,r)=>{this.currentXhr=(0,Pt.default)({...e,beforeSend:n},(i,s)=>(this.currentXhr=void 0,i?r(i):t(s)))})}async sendChunk(e){let n=this.nextChunkRangeStart,t=n+e.size-1,r={...this.headers,"Content-Type":this.file.type,"Content-Range":`bytes ${n}-${t}/${this.file.size}`};return this.dispatch("attempt",{chunkNumber:this.chunkCount,totalChunks:this.totalChunks,chunkSize:this.chunkSize}),this.xhrPromise({headers:r,url:this.endpointValue,method:this.method,body:e})}async sendChunkWithRetries(e){let n=async(l,a)=>{var h;let c=(new Date().getTime()-this.lastChunkStart.getTime())/1e3;if(this.dispatch("chunkSuccess",{chunk:this.chunkCount,chunkSize:this.chunkSize,attempts:this.attemptCount,timeInterval:c,response:l}),this.attemptCount=0,this.chunkCount=((h=this.chunkCount)!=null?h:0)+1,this.nextChunkRangeStart=this.nextChunkRangeStart+this.chunkByteSize,this.dynamicChunkSize){let m=this.chunkSize;c<10?m=Math.min(this.chunkSize*2,this.maxChunkSize):c>30&&(m=Math.max(this.chunkSize/2,this.minChunkSize)),this.chunkSize=Math.ceil(m/256)*256;let y=(this.file.size-this.nextChunkRangeStart)/this.chunkByteSize;this.totalChunks=Math.ceil(this.chunkCount+y)}return!0},t=async(l,a)=>(this.dispatch("error",{message:`Server responded with ${l.statusCode}. Stopping upload.`,chunk:this.chunkCount,attempts:this.attemptCount}),!1),r=async(l,a)=>(this.dispatch("attemptFailure",{message:`An error occured uploading chunk ${this.chunkCount}. ${this.attempts-this.attemptCount} retries left.`,chunkNumber:this.chunkCount,attemptsLeft:this.attempts-this.attemptCount}),new Promise(h=>{setTimeout(async()=>{if(this._paused||this.offline){this.pendingChunk=e,h(!1);return}let c=await this.sendChunkWithRetries(e);h(c)},this.delayBeforeAttempt*1e3)})),i;try{this.attemptCount=this.attemptCount+1,this.lastChunkStart=new Date,i=await this.sendChunk(e)}catch{}let s={retryCodes:this.retryCodes,attemptCount:this.attemptCount,attempts:this.attempts};return qe(i,s)?n(i,e):_t(i,s)?t(i,e):r(i,e)}async sendChunks(){if(this.pendingChunk&&!(this._paused||this.offline)){let e=this.pendingChunk;this.pendingChunk=void 0;let n=await this.sendChunkWithRetries(e);this.success&&n&&this.dispatch("success")}for(;!(this.success||this._paused||this.offline);){let{value:e,done:n}=await this.chunkedStreamIterator.next(),t=!e&&n;if(e&&(t=await this.sendChunkWithRetries(e)),this.success=!!n,this.success&&t&&this.dispatch("success"),!t)return}}},Ve=e=>new Ot(e);var It=`
:host {
  font-family: var(--uploader-font-family, Arial);
  font-size: var(--uploader-font-size, 16px);
  background-color: var(--uploader-background-color, inherit);
}

.sr-only {
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
  }

p {
  color: black;
}

input[type="file"] {
  display: none;
}

button {
  cursor: pointer;
  line-height: 16px;
  background: var(--button-background-color, #fff);
  border: var(--button-border, 1px solid #000000);
  color: #000000;
  padding: var(--button-padding, 16px 24px);
  border-radius: var(--button-border-radius, 4px);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}

button:hover {
  color: var(--button-hover-text, #fff);
  background: var(--button-hover-background, #404040);
}

button:active {
  color: var(--button-active-text, #fff);
  background: var(--button-active-background, #000000);
}

.bar-type {
  background: #e6e6e6;
  border-radius: 100px;
  position: relative;
  height: 4px;
  width: 100%;
}

.radial-type, .bar-type, .upload-status, .retry-button, .text-container {
  display: none;
}

::slotted(p) {
  display: none;
}

.upload-instruction {
  display: none;
}

.retry-button {
  color: #e22c3e;
  text-decoration-line: underline;
  cursor: pointer;
  position: relative;
}

.text-container {
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-bottom: 16px;
}

:host([type="radial"][upload-in-progress]) .radial-type {
  display: block;
}

:host([type="bar"][upload-in-progress]) .bar-type {
  display: block;
}

:host([upload-in-progress][status]) .upload-status {
  display: block;
}

:host([upload-in-progress]) ::slotted(p) {
  display: block;
}

:host([type="bar"][upload-error]) .progress-bar {
  background: #e22c3e;
}

:host([type="bar"][upload-error]) .status-message {
  color: #e22c3e;
}

:host([type="radial"][upload-error]) .status-message {
  color: #e22c3e;
}

:host([upload-error][status]) .upload-status {
  display: none;
}

:host([upload-error]) .retry-button {
  display: inline-block;
}

:host([upload-error]) .text-container {
  display: flex;
}

:host([upload-error]) ::slotted(p) {
  display: none;
}

.upload-status {
  font-size: inherit;
  margin-bottom: 16px;
}

.progress-bar {
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background: var(--progress-bar-fill-color, #000000);
  height: 4px;
  width: 0%;
}

:host([upload-in-progress]) button {
  display: none;
}

:host([upload-in-progress]) ::slotted(button) {
  display: none;
}

:host([upload-in-progress]) .upload-instruction {
  display: none;
}

circle {
  stroke: var(--progress-radial-fill-color, black);
  stroke-width: 6;  /* Thickness of the circle */
  fill: transparent; /* Make inside of the circle see-through */

  /* Animation */ 
  transition: 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
  -moz-transform-origin: 50% 50%;
}
`,Ke=A.createElement("template");Ke.innerHTML=`
<style>
  ${It}
</style>

<div class="sr-only" id="sr-only" aria-live="polite"></div>

<div class=text-container>
  <span class="status-message" id="status-message" role="status" aria-live="polite"></span>
  <span class="retry-button" id="retry-button" role="button" tabindex="0">Try again</span>
</div>

<input id="hidden-file-input" type="file" />
<slot name="upload-button"><button type="button">Upload video</button></slot>
<p class="upload-status" id="upload-status"></p>

<div class="bar-type">
  <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar" id="progress-bar" tabindex="0"></div>
</div>
<div class="radial-type">
  <svg
    width="120"
    height="120">
    <!-- To prevent overflow of the SVG wrapper, radius must be  (svgWidth / 2) - (circleStrokeWidth * 2)
      or use overflow: visible on the svg.-->
    <circle
      r="52"
      cx="60"
      cy="60"
    />
  <svg>
</div>
`;var V={BAR:"bar",RADIAL:"radial"},Dt=e=>`${Math.floor(e)}%`,Ut=e=>{var n;return Number((n=e.svgCircle)==null?void 0:n.getAttribute("r"))},_=e=>Ut(e)*2*Math.PI,jt="Media upload progress bar",Ge=["Enter"," "],O=class extends k.HTMLElement{constructor(){var i,s,l,a,h,c,m,y,B,o,p;super();this.handleFilePickerButtonClick=this.handleFilePickerButtonClick.bind(this);let t=this.attachShadow({mode:"open"}),r=Ke.content.cloneNode(!0);t.appendChild(r),this.filePickerButton=(i=this.shadowRoot)==null?void 0:i.querySelector("slot[name=upload-button] > *"),this.svgCircle=(s=this.shadowRoot)==null?void 0:s.querySelector("circle"),this.progressBar=(l=this.shadowRoot)==null?void 0:l.getElementById("progress-bar"),this.uploadPercentage=(a=this.shadowRoot)==null?void 0:a.getElementById("upload-status"),this.statusMessage=(h=this.shadowRoot)==null?void 0:h.getElementById("status-message"),this.retryButton=(c=this.shadowRoot)==null?void 0:c.getElementById("retry-button"),this.srOnlyText=(m=this.shadowRoot)==null?void 0:m.getElementById("sr-only"),(y=this.progressBar)==null||y.setAttribute("aria-description",jt),(B=this.hiddenFileInput)==null||B.addEventListener("change",()=>{var b,I;let d=(I=(b=this.hiddenFileInput)==null?void 0:b.files)==null?void 0:I[0];d&&this.dispatchEvent(new CustomEvent("file-ready",{composed:!0,bubbles:!0,detail:d}))}),(p=(o=this.shadowRoot)==null?void 0:o.querySelector("slot[name=upload-button]"))==null||p.addEventListener("slotchange",()=>{var d,b;this.filePickerButton=(b=(d=this.shadowRoot)==null?void 0:d.querySelector("slot[name=upload-button]"))==null?void 0:b.assignedNodes()[0]})}connectedCallback(){this.setDefaultType(),this.setupRetry(),this.addEventListener("file-ready",this.handleUpload)}disconnectedCallback(){this.removeEventListener("file-ready",this.handleUpload,!1)}get filePickerButton(){return this._filePickerButton}set filePickerButton(t){t!==this._filePickerButton&&(this._filePickerButton&&this._filePickerButton.removeEventListener("click",this.handleFilePickerButtonClick),this._filePickerButton=t,this._filePickerButton&&this._filePickerButton.addEventListener("click",this.handleFilePickerButtonClick))}get hiddenFileInput(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#hidden-file-input")}handleFilePickerButtonClick(){this.hiddenFileInput.click()}get endpoint(){var t;return(t=this.getAttribute("endpoint"))!=null?t:this._endpoint}set endpoint(t){t!==this.endpoint&&(typeof t=="string"?this.setAttribute("endpoint",t):t==null&&this.removeAttribute("endpoint"),this._endpoint=t)}get dynamicChunkSize(){return this.hasAttribute("dynamic-chunk-size")}set dynamicChunkSize(t){t!==this.hasAttribute("dynamic-chunk-size")&&(t?this.setAttribute("dynamic-chunk-size",""):this.removeAttribute("dynamic-chunk-size"))}get formatProgress(){var t;return(t=this._formatProgress)!=null?t:Dt}set formatProgress(t){this._formatProgress=t}setDefaultType(){let t=this.getAttribute("type");t||this.setAttribute("type",V.BAR),t===V.RADIAL&&this.svgCircle&&(this.svgCircle.style.strokeDasharray=`${_(this)} ${_(this)}`,this.svgCircle.style.strokeDashoffset=`${_(this)}`)}setupRetry(){var r;(r=this.retryButton)==null||r.addEventListener("click",()=>{this.resetState()});let t=i=>{let{key:s}=i;if(!Ge.includes(s)){this.removeEventListener("keyup",t);return}this.resetState()};this.addEventListener("keydown",i=>{let{metaKey:s,altKey:l,key:a}=i;if(s||l||!Ge.includes(a)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)})}resetState(){this.removeAttribute("upload-error"),this.removeAttribute("upload-in-progress"),this.hiddenFileInput.value="",this.statusMessage&&(this.statusMessage.innerHTML=""),this.uploadPercentage&&(this.uploadPercentage.innerHTML="")}setProgress(t){var r;switch(this.uploadPercentage&&(this.uploadPercentage.innerHTML=this.formatProgress(t)),(r=this.progressBar)==null||r.setAttribute("aria-valuenow",`${Math.floor(t)}`),this.getAttribute("type")){case V.BAR:{this.progressBar&&(this.progressBar.style.width=`${t}%`);break}case V.RADIAL:if(this.svgCircle){let i=_(this)-t/100*_(this);this.svgCircle.style.strokeDashoffset=i.toString()}}}handleUpload(t){var l;let r=this.endpoint,i=this.dynamicChunkSize;if(r)this.removeAttribute("upload-error"),this.statusMessage&&(this.statusMessage.innerHTML="");else{let a="No url or endpoint specified -- cannot handleUpload";this.statusMessage&&(this.statusMessage.innerHTML=a),this.setAttribute("upload-error",""),console.error(a),this.dispatchEvent(new CustomEvent("uploaderror",{detail:{message:a}}));return}this.setAttribute("upload-in-progress",""),(l=this.progressBar)==null||l.focus();let s=Ve({endpoint:r,dynamicChunkSize:i,file:t.detail});this.dispatchEvent(new CustomEvent("uploadstart",{detail:{file:s.file,chunkSize:s.chunkSize}})),s.on("attempt",a=>{this.dispatchEvent(new CustomEvent("chunkattempt",a))}),s.on("chunkSuccess",a=>{this.dispatchEvent(new CustomEvent("chunksuccess",a))}),s.on("error",a=>{let h="An error has occurred";this.setAttribute("upload-error",""),this.statusMessage&&(this.statusMessage.innerHTML=h),console.error(a.detail.message),this.dispatchEvent(new CustomEvent("uploaderror",a))}),s.on("progress",a=>{this.setProgress(a.detail),this.dispatchEvent(new CustomEvent("progress",a))}),s.on("success",a=>{let h="Upload complete!";this.statusMessage&&(this.statusMessage.innerHTML=h),this.srOnlyText&&(this.srOnlyText.innerHTML=h),console.info(h),this.dispatchEvent(new CustomEvent("success",a))})}};k.customElements.get("mux-uploader")||(k.customElements.define("mux-uploader",O),k.MuxUploaderElement=O);var Zt=O;})();
//# sourceMappingURL=mux-uploader.js.map
