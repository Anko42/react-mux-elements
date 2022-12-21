import q,{useEffect as pn}from"react";var Je=Object.create,Ce=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,et=Object.getOwnPropertyNames,tt=Object.getPrototypeOf,nt=Object.prototype.hasOwnProperty,M=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),rt=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of et(t))!nt.call(e,i)&&i!==n&&Ce(e,i,{get:()=>t[i],enumerable:!(r=Qe(t,i))||r.enumerable});return e},it=(e,t,n)=>(n=e!=null?Je(tt(e)):{},rt(t||!e||!e.__esModule?Ce(n,"default",{value:e,enumerable:!0}):n,e)),st=M((e,t)=>{var n;typeof window!="undefined"?n=window:typeof global!="undefined"?n=global:typeof self!="undefined"?n=self:n={},t.exports=n}),ot=M((e,t)=>{t.exports=r;var n=Object.prototype.toString;function r(i){if(!i)return!1;var s=n.call(i);return s==="[object Function]"||typeof i=="function"&&s!=="[object RegExp]"||typeof window!="undefined"&&(i===window.setTimeout||i===window.alert||i===window.confirm||i===window.prompt)}}),at=M((e,t)=>{var n=function(i){return i.replace(/^\s+|\s+$/g,"")},r=function(i){return Object.prototype.toString.call(i)==="[object Array]"};t.exports=function(i){if(!i)return{};for(var s={},a=n(i).split(`
`),l=0;l<a.length;l++){var p=a[l],c=p.indexOf(":"),h=n(p.slice(0,c)).toLowerCase(),b=n(p.slice(c+1));typeof s[h]=="undefined"?s[h]=b:r(s[h])?s[h].push(b):s[h]=[s[h],b]}return s}}),lt=M((e,t)=>{t.exports=r;var n=Object.prototype.hasOwnProperty;function r(){for(var i={},s=0;s<arguments.length;s++){var a=arguments[s];for(var l in a)n.call(a,l)&&(i[l]=a[l])}return i}}),ut=M((e,t)=>{"use strict";var n=st(),r=ot(),i=at(),s=lt();t.exports=c,t.exports.default=c,c.XMLHttpRequest=n.XMLHttpRequest||V,c.XDomainRequest="withCredentials"in new c.XMLHttpRequest?c.XMLHttpRequest:n.XDomainRequest,a(["get","put","post","patch","head","delete"],function(o){c[o==="delete"?"del":o]=function(d,g,S){return g=p(d,g,S),g.method=o.toUpperCase(),h(g)}});function a(o,d){for(var g=0;g<o.length;g++)d(o[g])}function l(o){for(var d in o)if(o.hasOwnProperty(d))return!1;return!0}function p(o,d,g){var S=o;return r(d)?(g=d,typeof o=="string"&&(S={uri:o})):S=s(d,{uri:o}),S.callback=g,S}function c(o,d,g){return d=p(o,d,g),h(d)}function h(o){if(typeof o.callback=="undefined")throw new Error("callback argument missing");var d=!1,g=function(f,x,L){d||(d=!0,o.callback(f,x,L))};function S(){u.readyState===4&&setTimeout(ce,0)}function Ze(){var f=void 0;if(u.response?f=u.response:f=u.responseText||b(u),pe)try{f=JSON.parse(f)}catch{}return f}function G(f){return clearTimeout(J),f instanceof Error||(f=new Error(""+(f||"Unknown XMLHttpRequest Error"))),f.statusCode=0,g(f,de)}function ce(){if(!O){var f;clearTimeout(J),o.useXDR&&u.status===void 0?f=200:f=u.status===1223?204:u.status;var x=de,L=null;return f!==0?(x={body:Ze(),statusCode:f,method:P,headers:{},url:K,rawRequest:u},u.getAllResponseHeaders&&(x.headers=i(u.getAllResponseHeaders()))):L=new Error("Internal XMLHttpRequest Error"),g(L,x,x.body)}}var u=o.xhr||null;u||(o.cors||o.useXDR?u=new c.XDomainRequest:u=new c.XMLHttpRequest);var A,O,K=u.url=o.uri||o.url,P=u.method=o.method||"GET",Y=o.body||o.data,v=u.headers=o.headers||{},Z=!!o.sync,pe=!1,J,de={body:void 0,headers:{},statusCode:0,method:P,url:K,rawRequest:u};if("json"in o&&o.json!==!1&&(pe=!0,v.accept||v.Accept||(v.Accept="application/json"),P!=="GET"&&P!=="HEAD"&&(v["content-type"]||v["Content-Type"]||(v["Content-Type"]="application/json"),Y=JSON.stringify(o.json===!0?Y:o.json))),u.onreadystatechange=S,u.onload=ce,u.onerror=G,u.onprogress=function(){},u.onabort=function(){O=!0},u.ontimeout=G,u.open(P,K,!Z,o.username,o.password),Z||(u.withCredentials=!!o.withCredentials),!Z&&o.timeout>0&&(J=setTimeout(function(){if(!O){O=!0,u.abort("timeout");var f=new Error("XMLHttpRequest timeout");f.code="ETIMEDOUT",G(f)}},o.timeout)),u.setRequestHeader)for(A in v)v.hasOwnProperty(A)&&u.setRequestHeader(A,v[A]);else if(o.headers&&!l(o.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in o&&(u.responseType=o.responseType),"beforeSend"in o&&typeof o.beforeSend=="function"&&o.beforeSend(u),u.send(Y||null),u}function b(o){try{if(o.responseType==="document")return o.responseXML;var d=o.responseXML&&o.responseXML.documentElement.nodeName==="parsererror";if(o.responseType===""&&!d)return o.responseXML}catch{}return null}function V(){}});function oe(e,t,...n){if(!e)throw new TypeError(we(t,n))}function we(e,t){let n=0;return e.replace(/%[os]/gu,()=>xe(t[n++]))}function xe(e){return typeof e!="object"||e===null?String(e):Object.prototype.toString.call(e)}var he;function ct(e){try{let t=e instanceof Error?e:new Error(xe(e));if(he){he(t);return}if(typeof dispatchEvent=="function"&&typeof ErrorEvent=="function")dispatchEvent(new ErrorEvent("error",{error:t,message:t.message}));else if(typeof process!="undefined"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)}catch{}}var y=typeof window!="undefined"?window:typeof self!="undefined"?self:typeof global!="undefined"?global:typeof globalThis!="undefined"?globalThis:void 0,fe,k=class{constructor(e,t){this.code=e,this.message=t}warn(...e){var t;try{if(fe){fe({...this,args:e});return}let n=((t=new Error().stack)!==null&&t!==void 0?t:"").replace(/^(?:.+?\n){2}/gu,`
`);console.warn(this.message,...e,n)}catch{}}},pt=new k("W01","Unable to initialize event under dispatching."),dt=new k("W02","Assigning any falsy value to 'cancelBubble' property has no effect."),ht=new k("W03","Assigning any truthy value to 'returnValue' property has no effect."),ft=new k("W04","Unable to preventDefault on non-cancelable events."),mt=new k("W05","Unable to preventDefault inside passive event listener invocation."),gt=new k("W06","An event listener wasn't added because it has been added already: %o, %o"),Q=new k("W07","The %o option value was abandoned because the event listener wasn't added as duplicated."),me=new k("W08","The 'callback' argument must be a function or an object that has 'handleEvent' method: %o"),gn=new k("W09","Event attribute handler must be a function: %o"),E=class{static get NONE(){return ge}static get CAPTURING_PHASE(){return be}static get AT_TARGET(){return ye}static get BUBBLING_PHASE(){return ve}constructor(e,t){Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});let n=t!=null?t:{};re.set(this,{type:String(e),bubbles:Boolean(n.bubbles),cancelable:Boolean(n.cancelable),composed:Boolean(n.composed),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1,inPassiveListenerFlag:!1,dispatchFlag:!1,timeStamp:Date.now()})}get type(){return m(this).type}get target(){return m(this).target}get srcElement(){return m(this).target}get currentTarget(){return m(this).currentTarget}composedPath(){let e=m(this).currentTarget;return e?[e]:[]}get NONE(){return ge}get CAPTURING_PHASE(){return be}get AT_TARGET(){return ye}get BUBBLING_PHASE(){return ve}get eventPhase(){return m(this).dispatchFlag?2:0}stopPropagation(){m(this).stopPropagationFlag=!0}get cancelBubble(){return m(this).stopPropagationFlag}set cancelBubble(e){e?m(this).stopPropagationFlag=!0:dt.warn()}stopImmediatePropagation(){let e=m(this);e.stopPropagationFlag=e.stopImmediatePropagationFlag=!0}get bubbles(){return m(this).bubbles}get cancelable(){return m(this).cancelable}get returnValue(){return!m(this).canceledFlag}set returnValue(e){e?ht.warn():ke(m(this))}preventDefault(){ke(m(this))}get defaultPrevented(){return m(this).canceledFlag}get composed(){return m(this).composed}get isTrusted(){return!1}get timeStamp(){return m(this).timeStamp}initEvent(e,t=!1,n=!1){let r=m(this);if(r.dispatchFlag){pt.warn();return}re.set(this,{...r,type:String(e),bubbles:Boolean(t),cancelable:Boolean(n),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1})}},ge=0,be=1,ye=2,ve=3,re=new WeakMap;function m(e,t="this"){let n=re.get(e);return oe(n!=null,"'%s' must be an object that Event constructor created, but got another one: %o",t,e),n}function ke(e){if(e.inPassiveListenerFlag){mt.warn();return}if(!e.cancelable){ft.warn();return}e.canceledFlag=!0}Object.defineProperty(E,"NONE",{enumerable:!0});Object.defineProperty(E,"CAPTURING_PHASE",{enumerable:!0});Object.defineProperty(E,"AT_TARGET",{enumerable:!0});Object.defineProperty(E,"BUBBLING_PHASE",{enumerable:!0});var ee=Object.getOwnPropertyNames(E.prototype);for(let e=0;e<ee.length;++e)ee[e]!=="constructor"&&Object.defineProperty(E.prototype,ee[e],{enumerable:!0});typeof y!="undefined"&&typeof y.Event!="undefined"&&Object.setPrototypeOf(E.prototype,y.Event.prototype);function bt(e){return y.DOMException?new y.DOMException(e,"InvalidStateError"):(R==null&&(R=class Re extends Error{constructor(n){super(n),Error.captureStackTrace&&Error.captureStackTrace(this,Re)}get code(){return 11}get name(){return"InvalidStateError"}},Object.defineProperties(R.prototype,{code:{enumerable:!0},name:{enumerable:!0}}),Se(R),Se(R.prototype)),new R(e))}var R,Ee={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};function Se(e){let t=Object.keys(Ee);for(let n=0;n<t.length;++n){let r=t[n],i=Ee[r];Object.defineProperty(e,r,{get(){return i},configurable:!0,enumerable:!0})}}var _=class extends E{static wrap(e){return new(Pe(e))(e)}constructor(e){super(e.type,{bubbles:e.bubbles,cancelable:e.cancelable,composed:e.composed}),e.cancelBubble&&super.stopPropagation(),e.defaultPrevented&&super.preventDefault(),Te.set(this,{original:e});let t=Object.keys(e);for(let n=0;n<t.length;++n){let r=t[n];r in this||Object.defineProperty(this,r,Me(e,r))}}stopPropagation(){super.stopPropagation();let{original:e}=C(this);"stopPropagation"in e&&e.stopPropagation()}get cancelBubble(){return super.cancelBubble}set cancelBubble(e){super.cancelBubble=e;let{original:t}=C(this);"cancelBubble"in t&&(t.cancelBubble=e)}stopImmediatePropagation(){super.stopImmediatePropagation();let{original:e}=C(this);"stopImmediatePropagation"in e&&e.stopImmediatePropagation()}get returnValue(){return super.returnValue}set returnValue(e){super.returnValue=e;let{original:t}=C(this);"returnValue"in t&&(t.returnValue=e)}preventDefault(){super.preventDefault();let{original:e}=C(this);"preventDefault"in e&&e.preventDefault()}get timeStamp(){let{original:e}=C(this);return"timeStamp"in e?e.timeStamp:super.timeStamp}},Te=new WeakMap;function C(e){let t=Te.get(e);return oe(t!=null,"'this' is expected an Event object, but got",e),t}var U=new WeakMap;U.set(Object.prototype,_);typeof y!="undefined"&&typeof y.Event!="undefined"&&U.set(y.Event.prototype,_);function Pe(e){let t=Object.getPrototypeOf(e);if(t==null)return _;let n=U.get(t);return n==null&&(n=yt(Pe(t),t),U.set(t,n)),n}function yt(e,t){class n extends e{}let r=Object.keys(t);for(let i=0;i<r.length;++i)Object.defineProperty(n.prototype,r[i],Me(t,r[i]));return n}function Me(e,t){let n=Object.getOwnPropertyDescriptor(e,t);return{get(){let r=C(this).original,i=r[t];return typeof i=="function"?i.bind(r):i},set(r){let i=C(this).original;i[t]=r},configurable:n.configurable,enumerable:n.enumerable}}function vt(e,t,n,r,i,s){return{callback:e,flags:(t?1:0)|(n?2:0)|(r?4:0),signal:i,signalListener:s}}function kt(e){e.flags|=8}function ze(e){return(e.flags&1)===1}function Ae(e){return(e.flags&2)===2}function Oe(e){return(e.flags&4)===4}function Et(e){return(e.flags&8)===8}function St({callback:e},t,n){try{typeof e=="function"?e.call(t,n):typeof e.handleEvent=="function"&&e.handleEvent(n)}catch(r){ct(r)}}function Le({listeners:e},t,n){for(let r=0;r<e.length;++r)if(e[r].callback===t&&ze(e[r])===n)return r;return-1}function Ct(e,t,n,r,i,s){let a;s&&(a=Ue.bind(null,e,t,n),s.addEventListener("abort",a));let l=vt(t,n,r,i,s,a);return e.cow?(e.cow=!1,e.listeners=[...e.listeners,l]):e.listeners.push(l),l}function Ue(e,t,n){let r=Le(e,t,n);return r!==-1?_e(e,r):!1}function _e(e,t,n=!1){let r=e.listeners[t];return kt(r),r.signal&&r.signal.removeEventListener("abort",r.signalListener),e.cow&&!n?(e.cow=!1,e.listeners=e.listeners.filter((i,s)=>s!==t),!1):(e.listeners.splice(t,1),!0)}function wt(){return Object.create(null)}function xt(e,t){var n;return(n=e[t])!==null&&n!==void 0?n:e[t]={attrCallback:void 0,attrListener:void 0,cow:!1,listeners:[]}}var B=class{constructor(){Be.set(this,wt())}addEventListener(e,t,n){let r=te(this),{callback:i,capture:s,once:a,passive:l,signal:p,type:c}=Rt(e,t,n);if(i==null||(p==null?void 0:p.aborted))return;let h=xt(r,c),b=Le(h,i,s);if(b!==-1){Pt(h.listeners[b],l,a,p);return}Ct(h,i,s,l,a,p)}removeEventListener(e,t,n){let r=te(this),{callback:i,capture:s,type:a}=Tt(e,t,n),l=r[a];i!=null&&l&&Ue(l,i,s)}dispatchEvent(e){let t=te(this)[String(e.type)];if(t==null)return!0;let n=e instanceof E?e:_.wrap(e),r=m(n,"event");if(r.dispatchFlag)throw bt("This event has been in dispatching.");if(r.dispatchFlag=!0,r.target=r.currentTarget=this,!r.stopPropagationFlag){let{cow:i,listeners:s}=t;t.cow=!0;for(let a=0;a<s.length;++a){let l=s[a];if(!Et(l)&&(Oe(l)&&_e(t,a,!i)&&(a-=1),r.inPassiveListenerFlag=Ae(l),St(l,this,n),r.inPassiveListenerFlag=!1,r.stopImmediatePropagationFlag))break}i||(t.cow=!1)}return r.target=null,r.currentTarget=null,r.stopImmediatePropagationFlag=!1,r.stopPropagationFlag=!1,r.dispatchFlag=!1,!r.canceledFlag}},Be=new WeakMap;function te(e,t="this"){let n=Be.get(e);return oe(n!=null,"'%s' must be an object that EventTarget constructor created, but got another one: %o",t,e),n}function Rt(e,t,n){var r;return De(t),typeof n=="object"&&n!==null?{type:String(e),callback:t!=null?t:void 0,capture:Boolean(n.capture),passive:Boolean(n.passive),once:Boolean(n.once),signal:(r=n.signal)!==null&&r!==void 0?r:void 0}:{type:String(e),callback:t!=null?t:void 0,capture:Boolean(n),passive:!1,once:!1,signal:void 0}}function Tt(e,t,n){return De(t),typeof n=="object"&&n!==null?{type:String(e),callback:t!=null?t:void 0,capture:Boolean(n.capture)}:{type:String(e),callback:t!=null?t:void 0,capture:Boolean(n)}}function De(e){if(!(typeof e=="function"||typeof e=="object"&&e!==null&&typeof e.handleEvent=="function")){if(e==null||typeof e=="object"){me.warn(e);return}throw new TypeError(we(me.message,[e]))}}function Pt(e,t,n,r){gt.warn(ze(e)?"capture":"bubble",e.callback),Ae(e)!==t&&Q.warn("passive"),Oe(e)!==n&&Q.warn("once"),e.signal!==r&&Q.warn("signal")}var ne=Object.getOwnPropertyNames(B.prototype);for(let e=0;e<ne.length;++e)ne[e]!=="constructor"&&Object.defineProperty(B.prototype,ne[e],{enumerable:!0});typeof y!="undefined"&&typeof y.EventTarget!="undefined"&&Object.setPrototypeOf(B.prototype,y.EventTarget.prototype);var Mt=it(ut()),Ie=30720,D=512e3,I=256,ie=(e,{minChunkSize:t=I,maxChunkSize:n=D}={})=>e==null||typeof e=="number"&&e>=256&&e%256===0&&e>=t&&e<=n,se=(e,{minChunkSize:t=I,maxChunkSize:n=D}={})=>new TypeError(`chunkSize ${e} must be a positive number in multiples of 256, between ${t} and ${n}`),zt=class{constructor(e,t={}){this.readableStream=e;var n,r,i;if(!ie(t.defaultChunkSize,t))throw se(t.defaultChunkSize,t);this.defaultChunkSize=(n=t.defaultChunkSize)!=null?n:Ie,this.minChunkSize=(r=t.minChunkSize)!=null?r:I,this.maxChunkSize=(i=t.maxChunkSize)!=null?i:D}get chunkSize(){var e;return(e=this._chunkSize)!=null?e:this.defaultChunkSize}set chunkSize(e){if(!ie(e,this))throw se(e,this);this._chunkSize=e}get chunkByteSize(){return this.chunkSize*1024}async*[Symbol.asyncIterator](){let e,t=this.readableStream.getReader();try{for(;;){let{done:n,value:r}=await t.read();if(n){if(e){let s=e;e=void 0,yield s}break}let i=r instanceof Uint8Array?new Blob([r],{type:"application/octet-stream"}):r;for(e=e?new Blob([e,i]):i;e;)if(e.size===this.chunkByteSize){let s=e;e=void 0,yield s;break}else{if(e.size<this.chunkByteSize)break;{let s=e.slice(0,this.chunkByteSize);e=e.slice(this.chunkByteSize),yield s}}}}finally{if(e){let n=e;e=void 0,yield n}t.releaseLock();return}}},At=[200,201,202,204,308],je=[408,502,503,504],Fe=(e,t)=>!!e&&At.includes(e.statusCode),Ot=(e,{retryCodes:t=je})=>!e||t.includes(e.statusCode),Lt=(e,t)=>t.attemptCount>=t.attempts||!(Fe(e)||Ot(e,t)),Ut=class{constructor(e){this.endpoint=e.endpoint,this.file=e.file,this.headers=e.headers||{},this.method=e.method||"PUT",this.attempts=e.attempts||5,this.delayBeforeAttempt=e.delayBeforeAttempt||1,this.retryCodes=e.retryCodes||je,this.dynamicChunkSize=e.dynamicChunkSize||!1,this.maxFileBytes=(e.maxFileSize||0)*1024,this.chunkCount=0,this.attemptCount=0,this.offline=!1,this._paused=!1,this.success=!1,this.nextChunkRangeStart=0,this.chunkedStreamIterable=new zt(this.file.stream(),{...e,defaultChunkSize:e.chunkSize}),this.chunkedStreamIterator=this.chunkedStreamIterable[Symbol.asyncIterator](),this.totalChunks=Math.ceil(this.file.size/this.chunkByteSize),this.eventTarget=new B,this.validateOptions(),this.getEndpoint().then(()=>this.sendChunks()),typeof window!="undefined"&&(window.addEventListener("online",()=>{!this.offline||(this.offline=!1,this.dispatch("online"),this.sendChunks())}),window.addEventListener("offline",()=>{this.offline=!0,this.dispatch("offline")}))}get maxChunkSize(){var e,t;return(t=(e=this.chunkedStreamIterable)==null?void 0:e.chunkSize)!=null?t:D}get minChunkSize(){var e,t;return(t=(e=this.chunkedStreamIterable)==null?void 0:e.chunkSize)!=null?t:I}get chunkSize(){var e,t;return(t=(e=this.chunkedStreamIterable)==null?void 0:e.chunkSize)!=null?t:Ie}set chunkSize(e){this.chunkedStreamIterable.chunkSize=e}get chunkByteSize(){return this.chunkedStreamIterable.chunkByteSize}get totalChunkSize(){return Math.ceil(this.file.size/this.chunkByteSize)}on(e,t){this.eventTarget.addEventListener(e,t)}once(e,t){this.eventTarget.addEventListener(e,t,{once:!0})}off(e,t){this.eventTarget.removeEventListener(e,t)}get paused(){return this._paused}abort(){var e;this.pause(),(e=this.currentXhr)==null||e.abort()}pause(){this._paused=!0}resume(){this._paused&&(this._paused=!1,this.sendChunks())}dispatch(e,t){let n=new CustomEvent(e,{detail:t});this.eventTarget.dispatchEvent(n)}validateOptions(){if(!this.endpoint||typeof this.endpoint!="function"&&typeof this.endpoint!="string")throw new TypeError("endpoint must be defined as a string or a function that returns a promise");if(!(this.file instanceof File))throw new TypeError("file must be a File object");if(this.headers&&typeof this.headers!="object")throw new TypeError("headers must be null or an object");if(!ie(this.chunkSize,{maxChunkSize:this.maxChunkSize,minChunkSize:this.minChunkSize}))throw se(this.chunkSize,{maxChunkSize:this.maxChunkSize,minChunkSize:this.minChunkSize});if(this.maxChunkSize&&(typeof this.maxChunkSize!="number"||this.maxChunkSize<256||this.maxChunkSize%256!==0||this.maxChunkSize<this.chunkSize||this.maxChunkSize<this.minChunkSize))throw new TypeError(`maxChunkSize must be a positive number in multiples of 256, and larger than or equal to both ${this.minChunkSize} and ${this.chunkSize}`);if(this.minChunkSize&&(typeof this.minChunkSize!="number"||this.minChunkSize<256||this.minChunkSize%256!==0||this.minChunkSize>this.chunkSize||this.minChunkSize>this.maxChunkSize))throw new TypeError(`minChunkSize must be a positive number in multiples of 256, and smaller than ${this.chunkSize} and ${this.maxChunkSize}`);if(this.maxFileBytes>0&&this.maxFileBytes<this.file.size)throw new Error(`file size exceeds maximum (${this.file.size} > ${this.maxFileBytes})`);if(this.attempts&&(typeof this.attempts!="number"||this.attempts<=0))throw new TypeError("retries must be a positive number");if(this.delayBeforeAttempt&&(typeof this.delayBeforeAttempt!="number"||this.delayBeforeAttempt<0))throw new TypeError("delayBeforeAttempt must be a positive number")}getEndpoint(){return typeof this.endpoint=="string"?(this.endpointValue=this.endpoint,Promise.resolve(this.endpoint)):this.endpoint(this.file).then(e=>(this.endpointValue=e,this.endpointValue))}xhrPromise(e){let t=n=>{n.upload.onprogress=r=>{var i;let s=this.totalChunks-this.chunkCount,a=(this.file.size-this.nextChunkRangeStart)/this.file.size/s,l=this.nextChunkRangeStart/this.file.size,p=r.loaded/((i=r.total)!=null?i:this.chunkByteSize)*a;this.dispatch("progress",Math.min((l+p)*100,100))}};return new Promise((n,r)=>{this.currentXhr=(0,Mt.default)({...e,beforeSend:t},(i,s)=>(this.currentXhr=void 0,i?r(i):n(s)))})}async sendChunk(e){let t=this.nextChunkRangeStart,n=t+e.size-1,r={...this.headers,"Content-Type":this.file.type,"Content-Range":`bytes ${t}-${n}/${this.file.size}`};return this.dispatch("attempt",{chunkNumber:this.chunkCount,totalChunks:this.totalChunks,chunkSize:this.chunkSize}),this.xhrPromise({headers:r,url:this.endpointValue,method:this.method,body:e})}async sendChunkWithRetries(e){let t=async(a,l)=>{var p;let c=(new Date().getTime()-this.lastChunkStart.getTime())/1e3;if(this.dispatch("chunkSuccess",{chunk:this.chunkCount,chunkSize:this.chunkSize,attempts:this.attemptCount,timeInterval:c,response:a}),this.attemptCount=0,this.chunkCount=((p=this.chunkCount)!=null?p:0)+1,this.nextChunkRangeStart=this.nextChunkRangeStart+this.chunkByteSize,this.dynamicChunkSize){let h=this.chunkSize;c<10?h=Math.min(this.chunkSize*2,this.maxChunkSize):c>30&&(h=Math.max(this.chunkSize/2,this.minChunkSize)),this.chunkSize=Math.ceil(h/256)*256;let b=(this.file.size-this.nextChunkRangeStart)/this.chunkByteSize;this.totalChunks=Math.ceil(this.chunkCount+b)}return!0},n=async(a,l)=>(this.dispatch("error",{message:`Server responded with ${a.statusCode}. Stopping upload.`,chunk:this.chunkCount,attempts:this.attemptCount}),!1),r=async(a,l)=>(this.dispatch("attemptFailure",{message:`An error occured uploading chunk ${this.chunkCount}. ${this.attempts-this.attemptCount} retries left.`,chunkNumber:this.chunkCount,attemptsLeft:this.attempts-this.attemptCount}),new Promise(p=>{setTimeout(async()=>{if(this._paused||this.offline){this.pendingChunk=e,p(!1);return}let c=await this.sendChunkWithRetries(e);p(c)},this.delayBeforeAttempt*1e3)})),i;try{this.attemptCount=this.attemptCount+1,this.lastChunkStart=new Date,i=await this.sendChunk(e)}catch{}let s={retryCodes:this.retryCodes,attemptCount:this.attemptCount,attempts:this.attempts};return Fe(i,s)?t(i,e):Lt(i,s)?n(i,e):r(i,e)}async sendChunks(){if(this.pendingChunk&&!(this._paused||this.offline)){let e=this.pendingChunk;this.pendingChunk=void 0;let t=await this.sendChunkWithRetries(e);this.success&&t&&this.dispatch("success")}for(;!(this.success||this._paused||this.offline);){let{value:e,done:t}=await this.chunkedStreamIterator.next(),n=!e&&t;if(e&&(n=await this.sendChunkWithRetries(e)),this.success=!!t,this.success&&n&&this.dispatch("success"),!n)return}}},Ne=e=>new Ut(e);var $e=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},Bt=(e,t,n)=>($e(e,t,"read from private field"),n?n.call(e):t.get(e)),Dt=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},It=(e,t,n,r)=>($e(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),H=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment=="undefined"){class e extends H{}globalThis.DocumentFragment=e}var ae=class extends H{},jt=class extends H{},Ft={get(e){},define(e,t,n){},upgrade(e){},whenDefined(e){return Promise.resolve(ae)}},N,Nt=class{constructor(e,t={}){Dt(this,N,void 0),It(this,N,t==null?void 0:t.detail)}get detail(){return Bt(this,N)}initCustomEvent(){}};N=new WeakMap;function Ht(e,t){return new ae}var qe={document:{createElement:Ht},DocumentFragment,customElements:Ft,CustomEvent:Nt,EventTarget:H,HTMLElement:ae,HTMLVideoElement:jt},Ve=typeof window=="undefined"||typeof globalThis.customElements=="undefined",w=Ve?qe:globalThis,le=Ve?qe.document:globalThis.document,Ge=le.createElement("template");Ge.innerHTML=`
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
`;var j={MUX_UPLOADER:"mux-uploader",OVERLAY_TEXT:"overlay-text"},He=class extends w.HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"});e.appendChild(Ge.content.cloneNode(!0)),this.overlayText=e.getElementById("overlay-label")}connectedCallback(){this.setupDragEvents()}attributeChangedCallback(e,t,n){e===j.OVERLAY_TEXT&&t!==n?this.overlayText.innerHTML=n!=null?n:"":e==="active"&&this.getAttribute("overlay")&&n!=null&&(this._currentDragTarget=this)}static get observedAttributes(){return[j.OVERLAY_TEXT,j.MUX_UPLOADER,"active"]}get muxUploader(){let e=this.getAttribute(j.MUX_UPLOADER);return e?le.getElementById(e):null}setupDragEvents(){this.addEventListener("dragenter",e=>{this._currentDragTarget=e.target,e.preventDefault(),e.stopPropagation(),this.setAttribute("active","")}),this.addEventListener("dragleave",e=>{this._currentDragTarget===e.target&&(this._currentDragTarget=void 0,this.removeAttribute("active"))}),this.addEventListener("dragover",e=>{e.preventDefault(),e.stopPropagation()}),this.addEventListener("drop",e=>{var t;e.preventDefault(),e.stopPropagation();let{dataTransfer:n}=e,{files:r}=n,i=r[0];((t=this.muxUploader)!=null?t:this).dispatchEvent(new CustomEvent("file-ready",{composed:!0,bubbles:!0,detail:i})),this.removeAttribute("active")})}};w.customElements.get("mux-uploader-drop")||(w.customElements.define("mux-uploader-drop",He),w.MuxUploaderDropElement=He);var Xt=`
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
`,Ke=le.createElement("template");Ke.innerHTML=`
<style>
  ${Xt}
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
`;var F={BAR:"bar",RADIAL:"radial"},Wt=e=>`${Math.floor(e)}%`,$t=e=>{var t;return Number((t=e.svgCircle)==null?void 0:t.getAttribute("r"))},z=e=>$t(e)*2*Math.PI,qt="Media upload progress bar",Xe=["Enter"," "],We=class extends w.HTMLElement{constructor(){var e,t,n,r,i,s,a,l,p,c,h;super(),this.handleFilePickerButtonClick=this.handleFilePickerButtonClick.bind(this);let b=this.attachShadow({mode:"open"}),V=Ke.content.cloneNode(!0);b.appendChild(V),this.filePickerButton=(e=this.shadowRoot)==null?void 0:e.querySelector("slot[name=upload-button] > *"),this.svgCircle=(t=this.shadowRoot)==null?void 0:t.querySelector("circle"),this.progressBar=(n=this.shadowRoot)==null?void 0:n.getElementById("progress-bar"),this.uploadPercentage=(r=this.shadowRoot)==null?void 0:r.getElementById("upload-status"),this.statusMessage=(i=this.shadowRoot)==null?void 0:i.getElementById("status-message"),this.retryButton=(s=this.shadowRoot)==null?void 0:s.getElementById("retry-button"),this.srOnlyText=(a=this.shadowRoot)==null?void 0:a.getElementById("sr-only"),(l=this.progressBar)==null||l.setAttribute("aria-description",qt),(p=this.hiddenFileInput)==null||p.addEventListener("change",()=>{var o,d;let g=(d=(o=this.hiddenFileInput)==null?void 0:o.files)==null?void 0:d[0];g&&this.dispatchEvent(new CustomEvent("file-ready",{composed:!0,bubbles:!0,detail:g}))}),(h=(c=this.shadowRoot)==null?void 0:c.querySelector("slot[name=upload-button]"))==null||h.addEventListener("slotchange",()=>{var o,d;this.filePickerButton=(d=(o=this.shadowRoot)==null?void 0:o.querySelector("slot[name=upload-button]"))==null?void 0:d.assignedNodes()[0]})}connectedCallback(){this.setDefaultType(),this.setupRetry(),this.addEventListener("file-ready",this.handleUpload)}disconnectedCallback(){this.removeEventListener("file-ready",this.handleUpload,!1)}get filePickerButton(){return this._filePickerButton}set filePickerButton(e){e!==this._filePickerButton&&(this._filePickerButton&&this._filePickerButton.removeEventListener("click",this.handleFilePickerButtonClick),this._filePickerButton=e,this._filePickerButton&&this._filePickerButton.addEventListener("click",this.handleFilePickerButtonClick))}get hiddenFileInput(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#hidden-file-input")}handleFilePickerButtonClick(){this.hiddenFileInput.click()}get endpoint(){var e;return(e=this.getAttribute("endpoint"))!=null?e:this._endpoint}set endpoint(e){e!==this.endpoint&&(typeof e=="string"?this.setAttribute("endpoint",e):e==null&&this.removeAttribute("endpoint"),this._endpoint=e)}get dynamicChunkSize(){return this.hasAttribute("dynamic-chunk-size")}set dynamicChunkSize(e){e!==this.hasAttribute("dynamic-chunk-size")&&(e?this.setAttribute("dynamic-chunk-size",""):this.removeAttribute("dynamic-chunk-size"))}get formatProgress(){var e;return(e=this._formatProgress)!=null?e:Wt}set formatProgress(e){this._formatProgress=e}setDefaultType(){let e=this.getAttribute("type");e||this.setAttribute("type",F.BAR),e===F.RADIAL&&this.svgCircle&&(this.svgCircle.style.strokeDasharray=`${z(this)} ${z(this)}`,this.svgCircle.style.strokeDashoffset=`${z(this)}`)}setupRetry(){var e;(e=this.retryButton)==null||e.addEventListener("click",()=>{this.resetState()});let t=n=>{let{key:r}=n;if(!Xe.includes(r)){this.removeEventListener("keyup",t);return}this.resetState()};this.addEventListener("keydown",n=>{let{metaKey:r,altKey:i,key:s}=n;if(r||i||!Xe.includes(s)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)})}resetState(){this.removeAttribute("upload-error"),this.removeAttribute("upload-in-progress"),this.hiddenFileInput.value="",this.statusMessage&&(this.statusMessage.innerHTML=""),this.uploadPercentage&&(this.uploadPercentage.innerHTML="")}setProgress(e){var t;switch(this.uploadPercentage&&(this.uploadPercentage.innerHTML=this.formatProgress(e)),(t=this.progressBar)==null||t.setAttribute("aria-valuenow",`${Math.floor(e)}`),this.getAttribute("type")){case F.BAR:{this.progressBar&&(this.progressBar.style.width=`${e}%`);break}case F.RADIAL:if(this.svgCircle){let n=z(this)-e/100*z(this);this.svgCircle.style.strokeDashoffset=n.toString()}}}handleUpload(e){var t;let n=this.endpoint,r=this.dynamicChunkSize;if(n)this.removeAttribute("upload-error"),this.statusMessage&&(this.statusMessage.innerHTML="");else{let s="No url or endpoint specified -- cannot handleUpload";this.statusMessage&&(this.statusMessage.innerHTML=s),this.setAttribute("upload-error",""),console.error(s),this.dispatchEvent(new CustomEvent("uploaderror",{detail:{message:s}}));return}this.setAttribute("upload-in-progress",""),(t=this.progressBar)==null||t.focus();let i=Ne({endpoint:n,dynamicChunkSize:r,file:e.detail});this.dispatchEvent(new CustomEvent("uploadstart",{detail:{file:i.file,chunkSize:i.chunkSize}})),i.on("attempt",s=>{this.dispatchEvent(new CustomEvent("chunkattempt",s))}),i.on("chunkSuccess",s=>{this.dispatchEvent(new CustomEvent("chunksuccess",s))}),i.on("error",s=>{let a="An error has occurred";this.setAttribute("upload-error",""),this.statusMessage&&(this.statusMessage.innerHTML=a),console.error(s.detail.message),this.dispatchEvent(new CustomEvent("uploaderror",s))}),i.on("progress",s=>{this.setProgress(s.detail),this.dispatchEvent(new CustomEvent("progress",s))}),i.on("success",s=>{let a="Upload complete!";this.statusMessage&&(this.statusMessage.innerHTML=a),this.srOnlyText&&(this.srOnlyText.innerHTML=a),console.info(a),this.dispatchEvent(new CustomEvent("success",s))})}};w.customElements.get("mux-uploader")||(w.customElements.define("mux-uploader",We),w.MuxUploaderElement=We);import $ from"react";var Ye={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay"},Vt=e=>e==null,Gt=(e,t)=>Vt(t)?!1:e in t,Kt=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),Yt=(e,t)=>{if(!(typeof t=="boolean"&&!t)){if(Gt(e,Ye))return Ye[e];if(typeof t!=null)return/[A-Z]/.test(e)?Kt(e):e}};var Zt=(e,t)=>typeof e=="boolean"?"":e,X=(e={})=>Object.entries(e).reduce((t,[n,r])=>{let i=Yt(n,r);if(!i)return t;let s=Zt(r,n);return t[i]=s,t},{});import{useRef as en}from"react";import{useEffect as Jt,useRef as Qt}from"react";var W=(...e)=>{let t=Qt(null);return Jt(()=>{e.forEach(n=>{!n||(typeof n=="function"?n(t.current):n.current=t.current)})},[e]),t};var tn=$.forwardRef(({children:e,...t},n)=>$.createElement("mux-uploader-drop",X({...t,ref:n}),e)),nn=$.forwardRef((e,t)=>{let n=en(null),r=W(n,t);return $.createElement(tn,{ref:r,...e})}),rn=nn;import{useRef as dn}from"react";import{useEffect as sn}from"react";var on=Object.prototype.hasOwnProperty,an=(e,t)=>{if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:e.some((i,s)=>t[s]===i);let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(!on.call(t,n[i])||!Object.is(e[n[i]],t[n[i]]))return!1;return!0},ln=(e,t,n)=>!an(t,e[n]),un=(e,t,n)=>{e[n]=t},cn=(e,t,n,r=un,i=ln)=>sn(()=>{let s=n==null?void 0:n.current;!s||!i(s,t,e)||r(s,t,e)},[n==null?void 0:n.current,t]),ue=cn;var hn=q.forwardRef(({children:e,...t},n)=>q.createElement("mux-uploader",X({...t,ref:n}),e)),T=(e,t,n)=>pn(()=>{let r=t==null?void 0:t.current;if(!(!r||!n))return r.addEventListener(e,n),()=>{r.removeEventListener(e,n)}},[t==null?void 0:t.current,n]),fn=(e,t)=>{let{onUploadStart:n,onChunkAttempt:r,onChunkSuccess:i,onUploadError:s,onProgress:a,onSuccess:l,formatProgress:p,endpoint:c,...h}=t;return ue("endpoint",c,e),ue("formatProgress",p,e),T("uploadstart",e,n),T("chunkattempt",e,r),T("chunksuccess",e,i),T("uploaderror",e,s),T("progress",e,a),T("success",e,l),[h]},mn=q.forwardRef((e,t)=>{let n=dn(null),r=W(n,t),[i]=fn(n,e);return q.createElement(hn,{ref:r,...i})});var Gn=mn;export{rn as MuxUploaderDrop,Gn as default};
//# sourceMappingURL=index.mjs.map
