var $e=Object.defineProperty;var qe=(e,t)=>{for(var n in t)$e(e,n,{get:t[n],enumerable:!0})};var se={};qe(se,{default:()=>Xt});var Ge=Object.create,ye=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Ke=Object.getOwnPropertyNames,Ze=Object.getPrototypeOf,Je=Object.prototype.hasOwnProperty,x=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Qe=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ke(t))!Je.call(e,i)&&i!==n&&ye(e,i,{get:()=>t[i],enumerable:!(r=Ye(t,i))||r.enumerable});return e},et=(e,t,n)=>(n=e!=null?Ge(Ze(e)):{},Qe(t||!e||!e.__esModule?ye(n,"default",{value:e,enumerable:!0}):n,e)),tt=x((e,t)=>{var n;typeof window!="undefined"?n=window:typeof global!="undefined"?n=global:typeof self!="undefined"?n=self:n={},t.exports=n}),nt=x((e,t)=>{t.exports=r;var n=Object.prototype.toString;function r(i){if(!i)return!1;var s=n.call(i);return s==="[object Function]"||typeof i=="function"&&s!=="[object RegExp]"||typeof window!="undefined"&&(i===window.setTimeout||i===window.alert||i===window.confirm||i===window.prompt)}}),rt=x((e,t)=>{var n=function(i){return i.replace(/^\s+|\s+$/g,"")},r=function(i){return Object.prototype.toString.call(i)==="[object Array]"};t.exports=function(i){if(!i)return{};for(var s={},o=n(i).split(`
`),u=0;u<o.length;u++){var d=o[u],c=d.indexOf(":"),f=n(d.slice(0,c)).toLowerCase(),b=n(d.slice(c+1));typeof s[f]=="undefined"?s[f]=b:r(s[f])?s[f].push(b):s[f]=[s[f],b]}return s}}),it=x((e,t)=>{t.exports=r;var n=Object.prototype.hasOwnProperty;function r(){for(var i={},s=0;s<arguments.length;s++){var o=arguments[s];for(var u in o)n.call(o,u)&&(i[u]=o[u])}return i}}),st=x((e,t)=>{"use strict";var n=tt(),r=nt(),i=rt(),s=it();t.exports=c,t.exports.default=c,c.XMLHttpRequest=n.XMLHttpRequest||H,c.XDomainRequest="withCredentials"in new c.XMLHttpRequest?c.XMLHttpRequest:n.XDomainRequest,o(["get","put","post","patch","head","delete"],function(a){c[a==="delete"?"del":a]=function(h,m,w){return m=d(h,m,w),m.method=a.toUpperCase(),f(m)}});function o(a,h){for(var m=0;m<a.length;m++)h(a[m])}function u(a){for(var h in a)if(a.hasOwnProperty(h))return!1;return!0}function d(a,h,m){var w=a;return r(h)?(m=h,typeof a=="string"&&(w={uri:a})):w=s(h,{uri:a}),w.callback=m,w}function c(a,h,m){return h=d(a,h,m),f(h)}function f(a){if(typeof a.callback=="undefined")throw new Error("callback argument missing");var h=!1,m=function(p,T,O){h||(h=!0,a.callback(p,T,O))};function w(){l.readyState===4&&setTimeout(ae,0)}function We(){var p=void 0;if(l.response?p=l.response:p=l.responseText||b(l),oe)try{p=JSON.parse(p)}catch{}return p}function X(p){return clearTimeout(q),p instanceof Error||(p=new Error(""+(p||"Unknown XMLHttpRequest Error"))),p.statusCode=0,m(p,le)}function ae(){if(!B){var p;clearTimeout(q),a.useXDR&&l.status===void 0?p=200:p=l.status===1223?204:l.status;var T=le,O=null;return p!==0?(T={body:We(),statusCode:p,method:z,headers:{},url:V,rawRequest:l},l.getAllResponseHeaders&&(T.headers=i(l.getAllResponseHeaders()))):O=new Error("Internal XMLHttpRequest Error"),m(O,T,T.body)}}var l=a.xhr||null;l||(a.cors||a.useXDR?l=new c.XDomainRequest:l=new c.XMLHttpRequest);var A,B,V=l.url=a.uri||a.url,z=l.method=a.method||"GET",W=a.body||a.data,y=l.headers=a.headers||{},$=!!a.sync,oe=!1,q,le={body:void 0,headers:{},statusCode:0,method:z,url:V,rawRequest:l};if("json"in a&&a.json!==!1&&(oe=!0,y.accept||y.Accept||(y.Accept="application/json"),z!=="GET"&&z!=="HEAD"&&(y["content-type"]||y["Content-Type"]||(y["Content-Type"]="application/json"),W=JSON.stringify(a.json===!0?W:a.json))),l.onreadystatechange=w,l.onload=ae,l.onerror=X,l.onprogress=function(){},l.onabort=function(){B=!0},l.ontimeout=X,l.open(z,V,!$,a.username,a.password),$||(l.withCredentials=!!a.withCredentials),!$&&a.timeout>0&&(q=setTimeout(function(){if(!B){B=!0,l.abort("timeout");var p=new Error("XMLHttpRequest timeout");p.code="ETIMEDOUT",X(p)}},a.timeout)),l.setRequestHeader)for(A in y)y.hasOwnProperty(A)&&l.setRequestHeader(A,y[A]);else if(a.headers&&!u(a.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in a&&(l.responseType=a.responseType),"beforeSend"in a&&typeof a.beforeSend=="function"&&a.beforeSend(l),l.send(W||null),l}function b(a){try{if(a.responseType==="document")return a.responseXML;var h=a.responseXML&&a.responseXML.documentElement.nodeName==="parsererror";if(a.responseType===""&&!h)return a.responseXML}catch{}return null}function H(){}});function te(e,t,...n){if(!e)throw new TypeError(ke(t,n))}function ke(e,t){let n=0;return e.replace(/%[os]/gu,()=>Ee(t[n++]))}function Ee(e){return typeof e!="object"||e===null?String(e):Object.prototype.toString.call(e)}var ue;function at(e){try{let t=e instanceof Error?e:new Error(Ee(e));if(ue){ue(t);return}if(typeof dispatchEvent=="function"&&typeof ErrorEvent=="function")dispatchEvent(new ErrorEvent("error",{error:t,message:t.message}));else if(typeof process!="undefined"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)}catch{}}var v=typeof window!="undefined"?window:typeof self!="undefined"?self:typeof global!="undefined"?global:typeof globalThis!="undefined"?globalThis:void 0,he,k=class{constructor(e,t){this.code=e,this.message=t}warn(...e){var t;try{if(he){he({...this,args:e});return}let n=((t=new Error().stack)!==null&&t!==void 0?t:"").replace(/^(?:.+?\n){2}/gu,`
`);console.warn(this.message,...e,n)}catch{}}},ot=new k("W01","Unable to initialize event under dispatching."),lt=new k("W02","Assigning any falsy value to 'cancelBubble' property has no effect."),ut=new k("W03","Assigning any truthy value to 'returnValue' property has no effect."),ht=new k("W04","Unable to preventDefault on non-cancelable events."),ct=new k("W05","Unable to preventDefault inside passive event listener invocation."),dt=new k("W06","An event listener wasn't added because it has been added already: %o, %o"),G=new k("W07","The %o option value was abandoned because the event listener wasn't added as duplicated."),ce=new k("W08","The 'callback' argument must be a function or an object that has 'handleEvent' method: %o"),Wt=new k("W09","Event attribute handler must be a function: %o"),E=class{static get NONE(){return de}static get CAPTURING_PHASE(){return pe}static get AT_TARGET(){return fe}static get BUBBLING_PHASE(){return ge}constructor(e,t){Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});let n=t!=null?t:{};J.set(this,{type:String(e),bubbles:Boolean(n.bubbles),cancelable:Boolean(n.cancelable),composed:Boolean(n.composed),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1,inPassiveListenerFlag:!1,dispatchFlag:!1,timeStamp:Date.now()})}get type(){return g(this).type}get target(){return g(this).target}get srcElement(){return g(this).target}get currentTarget(){return g(this).currentTarget}composedPath(){let e=g(this).currentTarget;return e?[e]:[]}get NONE(){return de}get CAPTURING_PHASE(){return pe}get AT_TARGET(){return fe}get BUBBLING_PHASE(){return ge}get eventPhase(){return g(this).dispatchFlag?2:0}stopPropagation(){g(this).stopPropagationFlag=!0}get cancelBubble(){return g(this).stopPropagationFlag}set cancelBubble(e){e?g(this).stopPropagationFlag=!0:lt.warn()}stopImmediatePropagation(){let e=g(this);e.stopPropagationFlag=e.stopImmediatePropagationFlag=!0}get bubbles(){return g(this).bubbles}get cancelable(){return g(this).cancelable}get returnValue(){return!g(this).canceledFlag}set returnValue(e){e?ut.warn():me(g(this))}preventDefault(){me(g(this))}get defaultPrevented(){return g(this).canceledFlag}get composed(){return g(this).composed}get isTrusted(){return!1}get timeStamp(){return g(this).timeStamp}initEvent(e,t=!1,n=!1){let r=g(this);if(r.dispatchFlag){ot.warn();return}J.set(this,{...r,type:String(e),bubbles:Boolean(t),cancelable:Boolean(n),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1})}},de=0,pe=1,fe=2,ge=3,J=new WeakMap;function g(e,t="this"){let n=J.get(e);return te(n!=null,"'%s' must be an object that Event constructor created, but got another one: %o",t,e),n}function me(e){if(e.inPassiveListenerFlag){ct.warn();return}if(!e.cancelable){ht.warn();return}e.canceledFlag=!0}Object.defineProperty(E,"NONE",{enumerable:!0});Object.defineProperty(E,"CAPTURING_PHASE",{enumerable:!0});Object.defineProperty(E,"AT_TARGET",{enumerable:!0});Object.defineProperty(E,"BUBBLING_PHASE",{enumerable:!0});var Y=Object.getOwnPropertyNames(E.prototype);for(let e=0;e<Y.length;++e)Y[e]!=="constructor"&&Object.defineProperty(E.prototype,Y[e],{enumerable:!0});typeof v!="undefined"&&typeof v.Event!="undefined"&&Object.setPrototypeOf(E.prototype,v.Event.prototype);function pt(e){return v.DOMException?new v.DOMException(e,"InvalidStateError"):(R==null&&(R=class we extends Error{constructor(n){super(n),Error.captureStackTrace&&Error.captureStackTrace(this,we)}get code(){return 11}get name(){return"InvalidStateError"}},Object.defineProperties(R.prototype,{code:{enumerable:!0},name:{enumerable:!0}}),ve(R),ve(R.prototype)),new R(e))}var R,be={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};function ve(e){let t=Object.keys(be);for(let n=0;n<t.length;++n){let r=t[n],i=be[r];Object.defineProperty(e,r,{get(){return i},configurable:!0,enumerable:!0})}}var L=class extends E{static wrap(e){return new(Ce(e))(e)}constructor(e){super(e.type,{bubbles:e.bubbles,cancelable:e.cancelable,composed:e.composed}),e.cancelBubble&&super.stopPropagation(),e.defaultPrevented&&super.preventDefault(),Se.set(this,{original:e});let t=Object.keys(e);for(let n=0;n<t.length;++n){let r=t[n];r in this||Object.defineProperty(this,r,Te(e,r))}}stopPropagation(){super.stopPropagation();let{original:e}=S(this);"stopPropagation"in e&&e.stopPropagation()}get cancelBubble(){return super.cancelBubble}set cancelBubble(e){super.cancelBubble=e;let{original:t}=S(this);"cancelBubble"in t&&(t.cancelBubble=e)}stopImmediatePropagation(){super.stopImmediatePropagation();let{original:e}=S(this);"stopImmediatePropagation"in e&&e.stopImmediatePropagation()}get returnValue(){return super.returnValue}set returnValue(e){super.returnValue=e;let{original:t}=S(this);"returnValue"in t&&(t.returnValue=e)}preventDefault(){super.preventDefault();let{original:e}=S(this);"preventDefault"in e&&e.preventDefault()}get timeStamp(){let{original:e}=S(this);return"timeStamp"in e?e.timeStamp:super.timeStamp}},Se=new WeakMap;function S(e){let t=Se.get(e);return te(t!=null,"'this' is expected an Event object, but got",e),t}var _=new WeakMap;_.set(Object.prototype,L);typeof v!="undefined"&&typeof v.Event!="undefined"&&_.set(v.Event.prototype,L);function Ce(e){let t=Object.getPrototypeOf(e);if(t==null)return L;let n=_.get(t);return n==null&&(n=ft(Ce(t),t),_.set(t,n)),n}function ft(e,t){class n extends e{}let r=Object.keys(t);for(let i=0;i<r.length;++i)Object.defineProperty(n.prototype,r[i],Te(t,r[i]));return n}function Te(e,t){let n=Object.getOwnPropertyDescriptor(e,t);return{get(){let r=S(this).original,i=r[t];return typeof i=="function"?i.bind(r):i},set(r){let i=S(this).original;i[t]=r},configurable:n.configurable,enumerable:n.enumerable}}function gt(e,t,n,r,i,s){return{callback:e,flags:(t?1:0)|(n?2:0)|(r?4:0),signal:i,signalListener:s}}function mt(e){e.flags|=8}function Re(e){return(e.flags&1)===1}function ze(e){return(e.flags&2)===2}function xe(e){return(e.flags&4)===4}function bt(e){return(e.flags&8)===8}function vt({callback:e},t,n){try{typeof e=="function"?e.call(t,n):typeof e.handleEvent=="function"&&e.handleEvent(n)}catch(r){at(r)}}function Pe({listeners:e},t,n){for(let r=0;r<e.length;++r)if(e[r].callback===t&&Re(e[r])===n)return r;return-1}function yt(e,t,n,r,i,s){let o;s&&(o=Ae.bind(null,e,t,n),s.addEventListener("abort",o));let u=gt(t,n,r,i,s,o);return e.cow?(e.cow=!1,e.listeners=[...e.listeners,u]):e.listeners.push(u),u}function Ae(e,t,n){let r=Pe(e,t,n);return r!==-1?Be(e,r):!1}function Be(e,t,n=!1){let r=e.listeners[t];return mt(r),r.signal&&r.signal.removeEventListener("abort",r.signalListener),e.cow&&!n?(e.cow=!1,e.listeners=e.listeners.filter((i,s)=>s!==t),!1):(e.listeners.splice(t,1),!0)}function kt(){return Object.create(null)}function Et(e,t){var n;return(n=e[t])!==null&&n!==void 0?n:e[t]={attrCallback:void 0,attrListener:void 0,cow:!1,listeners:[]}}var I=class{constructor(){Oe.set(this,kt())}addEventListener(e,t,n){let r=K(this),{callback:i,capture:s,once:o,passive:u,signal:d,type:c}=wt(e,t,n);if(i==null||(d==null?void 0:d.aborted))return;let f=Et(r,c),b=Pe(f,i,s);if(b!==-1){Ct(f.listeners[b],u,o,d);return}yt(f,i,s,u,o,d)}removeEventListener(e,t,n){let r=K(this),{callback:i,capture:s,type:o}=St(e,t,n),u=r[o];i!=null&&u&&Ae(u,i,s)}dispatchEvent(e){let t=K(this)[String(e.type)];if(t==null)return!0;let n=e instanceof E?e:L.wrap(e),r=g(n,"event");if(r.dispatchFlag)throw pt("This event has been in dispatching.");if(r.dispatchFlag=!0,r.target=r.currentTarget=this,!r.stopPropagationFlag){let{cow:i,listeners:s}=t;t.cow=!0;for(let o=0;o<s.length;++o){let u=s[o];if(!bt(u)&&(xe(u)&&Be(t,o,!i)&&(o-=1),r.inPassiveListenerFlag=ze(u),vt(u,this,n),r.inPassiveListenerFlag=!1,r.stopImmediatePropagationFlag))break}i||(t.cow=!1)}return r.target=null,r.currentTarget=null,r.stopImmediatePropagationFlag=!1,r.stopPropagationFlag=!1,r.dispatchFlag=!1,!r.canceledFlag}},Oe=new WeakMap;function K(e,t="this"){let n=Oe.get(e);return te(n!=null,"'%s' must be an object that EventTarget constructor created, but got another one: %o",t,e),n}function wt(e,t,n){var r;return _e(t),typeof n=="object"&&n!==null?{type:String(e),callback:t!=null?t:void 0,capture:Boolean(n.capture),passive:Boolean(n.passive),once:Boolean(n.once),signal:(r=n.signal)!==null&&r!==void 0?r:void 0}:{type:String(e),callback:t!=null?t:void 0,capture:Boolean(n),passive:!1,once:!1,signal:void 0}}function St(e,t,n){return _e(t),typeof n=="object"&&n!==null?{type:String(e),callback:t!=null?t:void 0,capture:Boolean(n.capture)}:{type:String(e),callback:t!=null?t:void 0,capture:Boolean(n)}}function _e(e){if(!(typeof e=="function"||typeof e=="object"&&e!==null&&typeof e.handleEvent=="function")){if(e==null||typeof e=="object"){ce.warn(e);return}throw new TypeError(ke(ce.message,[e]))}}function Ct(e,t,n,r){dt.warn(Re(e)?"capture":"bubble",e.callback),ze(e)!==t&&G.warn("passive"),xe(e)!==n&&G.warn("once"),e.signal!==r&&G.warn("signal")}var Z=Object.getOwnPropertyNames(I.prototype);for(let e=0;e<Z.length;++e)Z[e]!=="constructor"&&Object.defineProperty(I.prototype,Z[e],{enumerable:!0});typeof v!="undefined"&&typeof v.EventTarget!="undefined"&&Object.setPrototypeOf(I.prototype,v.EventTarget.prototype);var Tt=et(st()),Le=30720,M=512e3,D=256,Q=(e,{minChunkSize:t=D,maxChunkSize:n=M}={})=>e==null||typeof e=="number"&&e>=256&&e%256===0&&e>=t&&e<=n,ee=(e,{minChunkSize:t=D,maxChunkSize:n=M}={})=>new TypeError(`chunkSize ${e} must be a positive number in multiples of 256, between ${t} and ${n}`),Rt=class{constructor(e,t={}){this.readableStream=e;var n,r,i;if(!Q(t.defaultChunkSize,t))throw ee(t.defaultChunkSize,t);this.defaultChunkSize=(n=t.defaultChunkSize)!=null?n:Le,this.minChunkSize=(r=t.minChunkSize)!=null?r:D,this.maxChunkSize=(i=t.maxChunkSize)!=null?i:M}get chunkSize(){var e;return(e=this._chunkSize)!=null?e:this.defaultChunkSize}set chunkSize(e){if(!Q(e,this))throw ee(e,this);this._chunkSize=e}get chunkByteSize(){return this.chunkSize*1024}async*[Symbol.asyncIterator](){let e,t=this.readableStream.getReader();try{for(;;){let{done:n,value:r}=await t.read();if(n){if(e){let s=e;e=void 0,yield s}break}let i=r instanceof Uint8Array?new Blob([r],{type:"application/octet-stream"}):r;for(e=e?new Blob([e,i]):i;e;)if(e.size===this.chunkByteSize){let s=e;e=void 0,yield s;break}else{if(e.size<this.chunkByteSize)break;{let s=e.slice(0,this.chunkByteSize);e=e.slice(this.chunkByteSize),yield s}}}}finally{if(e){let n=e;e=void 0,yield n}t.releaseLock();return}}},zt=[200,201,202,204,308],Ie=[408,502,503,504],Me=(e,t)=>!!e&&zt.includes(e.statusCode),xt=(e,{retryCodes:t=Ie})=>!e||t.includes(e.statusCode),Pt=(e,t)=>t.attemptCount>=t.attempts||!(Me(e)||xt(e,t)),At=class{constructor(e){this.endpoint=e.endpoint,this.file=e.file,this.headers=e.headers||{},this.method=e.method||"PUT",this.attempts=e.attempts||5,this.delayBeforeAttempt=e.delayBeforeAttempt||1,this.retryCodes=e.retryCodes||Ie,this.dynamicChunkSize=e.dynamicChunkSize||!1,this.maxFileBytes=(e.maxFileSize||0)*1024,this.chunkCount=0,this.attemptCount=0,this.offline=!1,this._paused=!1,this.success=!1,this.nextChunkRangeStart=0,this.chunkedStreamIterable=new Rt(this.file.stream(),{...e,defaultChunkSize:e.chunkSize}),this.chunkedStreamIterator=this.chunkedStreamIterable[Symbol.asyncIterator](),this.totalChunks=Math.ceil(this.file.size/this.chunkByteSize),this.eventTarget=new I,this.validateOptions(),this.getEndpoint().then(()=>this.sendChunks()),typeof window!="undefined"&&(window.addEventListener("online",()=>{!this.offline||(this.offline=!1,this.dispatch("online"),this.sendChunks())}),window.addEventListener("offline",()=>{this.offline=!0,this.dispatch("offline")}))}get maxChunkSize(){var e,t;return(t=(e=this.chunkedStreamIterable)==null?void 0:e.chunkSize)!=null?t:M}get minChunkSize(){var e,t;return(t=(e=this.chunkedStreamIterable)==null?void 0:e.chunkSize)!=null?t:D}get chunkSize(){var e,t;return(t=(e=this.chunkedStreamIterable)==null?void 0:e.chunkSize)!=null?t:Le}set chunkSize(e){this.chunkedStreamIterable.chunkSize=e}get chunkByteSize(){return this.chunkedStreamIterable.chunkByteSize}get totalChunkSize(){return Math.ceil(this.file.size/this.chunkByteSize)}on(e,t){this.eventTarget.addEventListener(e,t)}once(e,t){this.eventTarget.addEventListener(e,t,{once:!0})}off(e,t){this.eventTarget.removeEventListener(e,t)}get paused(){return this._paused}abort(){var e;this.pause(),(e=this.currentXhr)==null||e.abort()}pause(){this._paused=!0}resume(){this._paused&&(this._paused=!1,this.sendChunks())}dispatch(e,t){let n=new CustomEvent(e,{detail:t});this.eventTarget.dispatchEvent(n)}validateOptions(){if(!this.endpoint||typeof this.endpoint!="function"&&typeof this.endpoint!="string")throw new TypeError("endpoint must be defined as a string or a function that returns a promise");if(!(this.file instanceof File))throw new TypeError("file must be a File object");if(this.headers&&typeof this.headers!="object")throw new TypeError("headers must be null or an object");if(!Q(this.chunkSize,{maxChunkSize:this.maxChunkSize,minChunkSize:this.minChunkSize}))throw ee(this.chunkSize,{maxChunkSize:this.maxChunkSize,minChunkSize:this.minChunkSize});if(this.maxChunkSize&&(typeof this.maxChunkSize!="number"||this.maxChunkSize<256||this.maxChunkSize%256!==0||this.maxChunkSize<this.chunkSize||this.maxChunkSize<this.minChunkSize))throw new TypeError(`maxChunkSize must be a positive number in multiples of 256, and larger than or equal to both ${this.minChunkSize} and ${this.chunkSize}`);if(this.minChunkSize&&(typeof this.minChunkSize!="number"||this.minChunkSize<256||this.minChunkSize%256!==0||this.minChunkSize>this.chunkSize||this.minChunkSize>this.maxChunkSize))throw new TypeError(`minChunkSize must be a positive number in multiples of 256, and smaller than ${this.chunkSize} and ${this.maxChunkSize}`);if(this.maxFileBytes>0&&this.maxFileBytes<this.file.size)throw new Error(`file size exceeds maximum (${this.file.size} > ${this.maxFileBytes})`);if(this.attempts&&(typeof this.attempts!="number"||this.attempts<=0))throw new TypeError("retries must be a positive number");if(this.delayBeforeAttempt&&(typeof this.delayBeforeAttempt!="number"||this.delayBeforeAttempt<0))throw new TypeError("delayBeforeAttempt must be a positive number")}getEndpoint(){return typeof this.endpoint=="string"?(this.endpointValue=this.endpoint,Promise.resolve(this.endpoint)):this.endpoint(this.file).then(e=>(this.endpointValue=e,this.endpointValue))}xhrPromise(e){let t=n=>{n.upload.onprogress=r=>{var i;let s=this.totalChunks-this.chunkCount,o=(this.file.size-this.nextChunkRangeStart)/this.file.size/s,u=this.nextChunkRangeStart/this.file.size,d=r.loaded/((i=r.total)!=null?i:this.chunkByteSize)*o;this.dispatch("progress",Math.min((u+d)*100,100))}};return new Promise((n,r)=>{this.currentXhr=(0,Tt.default)({...e,beforeSend:t},(i,s)=>(this.currentXhr=void 0,i?r(i):n(s)))})}async sendChunk(e){let t=this.nextChunkRangeStart,n=t+e.size-1,r={...this.headers,"Content-Type":this.file.type,"Content-Range":`bytes ${t}-${n}/${this.file.size}`};return this.dispatch("attempt",{chunkNumber:this.chunkCount,totalChunks:this.totalChunks,chunkSize:this.chunkSize}),this.xhrPromise({headers:r,url:this.endpointValue,method:this.method,body:e})}async sendChunkWithRetries(e){let t=async(o,u)=>{var d;let c=(new Date().getTime()-this.lastChunkStart.getTime())/1e3;if(this.dispatch("chunkSuccess",{chunk:this.chunkCount,chunkSize:this.chunkSize,attempts:this.attemptCount,timeInterval:c,response:o}),this.attemptCount=0,this.chunkCount=((d=this.chunkCount)!=null?d:0)+1,this.nextChunkRangeStart=this.nextChunkRangeStart+this.chunkByteSize,this.dynamicChunkSize){let f=this.chunkSize;c<10?f=Math.min(this.chunkSize*2,this.maxChunkSize):c>30&&(f=Math.max(this.chunkSize/2,this.minChunkSize)),this.chunkSize=Math.ceil(f/256)*256;let b=(this.file.size-this.nextChunkRangeStart)/this.chunkByteSize;this.totalChunks=Math.ceil(this.chunkCount+b)}return!0},n=async(o,u)=>(this.dispatch("error",{message:`Server responded with ${o.statusCode}. Stopping upload.`,chunk:this.chunkCount,attempts:this.attemptCount}),!1),r=async(o,u)=>(this.dispatch("attemptFailure",{message:`An error occured uploading chunk ${this.chunkCount}. ${this.attempts-this.attemptCount} retries left.`,chunkNumber:this.chunkCount,attemptsLeft:this.attempts-this.attemptCount}),new Promise(d=>{setTimeout(async()=>{if(this._paused||this.offline){this.pendingChunk=e,d(!1);return}let c=await this.sendChunkWithRetries(e);d(c)},this.delayBeforeAttempt*1e3)})),i;try{this.attemptCount=this.attemptCount+1,this.lastChunkStart=new Date,i=await this.sendChunk(e)}catch{}let s={retryCodes:this.retryCodes,attemptCount:this.attemptCount,attempts:this.attempts};return Me(i,s)?t(i,e):Pt(i,s)?n(i,e):r(i,e)}async sendChunks(){if(this.pendingChunk&&!(this._paused||this.offline)){let e=this.pendingChunk;this.pendingChunk=void 0;let t=await this.sendChunkWithRetries(e);this.success&&t&&this.dispatch("success")}for(;!(this.success||this._paused||this.offline);){let{value:e,done:t}=await this.chunkedStreamIterator.next(),n=!e&&t;if(e&&(n=await this.sendChunkWithRetries(e)),this.success=!!t,this.success&&n&&this.dispatch("success"),!n)return}}},De=e=>new At(e);var Ne=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},Ot=(e,t,n)=>(Ne(e,t,"read from private field"),n?n.call(e):t.get(e)),_t=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Lt=(e,t,n,r)=>(Ne(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),U=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment=="undefined"){class e extends U{}globalThis.DocumentFragment=e}var re=class extends U{},It=class extends U{},Mt={get(e){},define(e,t,n){},upgrade(e){},whenDefined(e){return Promise.resolve(re)}},N,Dt=class{constructor(e,t={}){_t(this,N,void 0),Lt(this,N,t==null?void 0:t.detail)}get detail(){return Ot(this,N)}initCustomEvent(){}};N=new WeakMap;function jt(e,t){return new re}var Ue={document:{createElement:jt},DocumentFragment,customElements:Mt,CustomEvent:Dt,EventTarget:U,HTMLElement:re,HTMLVideoElement:It},He=typeof window=="undefined"||typeof globalThis.customElements=="undefined",C=He?Ue:globalThis,ie=He?Ue.document:globalThis.document,Xe=ie.createElement("template");Xe.innerHTML=`
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
`;var j={MUX_UPLOADER:"mux-uploader",OVERLAY_TEXT:"overlay-text"},je=class extends C.HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"});e.appendChild(Xe.content.cloneNode(!0)),this.overlayText=e.getElementById("overlay-label")}connectedCallback(){this.setupDragEvents()}attributeChangedCallback(e,t,n){e===j.OVERLAY_TEXT&&t!==n?this.overlayText.innerHTML=n!=null?n:"":e==="active"&&this.getAttribute("overlay")&&n!=null&&(this._currentDragTarget=this)}static get observedAttributes(){return[j.OVERLAY_TEXT,j.MUX_UPLOADER,"active"]}get muxUploader(){let e=this.getAttribute(j.MUX_UPLOADER);return e?ie.getElementById(e):null}setupDragEvents(){this.addEventListener("dragenter",e=>{this._currentDragTarget=e.target,e.preventDefault(),e.stopPropagation(),this.setAttribute("active","")}),this.addEventListener("dragleave",e=>{this._currentDragTarget===e.target&&(this._currentDragTarget=void 0,this.removeAttribute("active"))}),this.addEventListener("dragover",e=>{e.preventDefault(),e.stopPropagation()}),this.addEventListener("drop",e=>{var t;e.preventDefault(),e.stopPropagation();let{dataTransfer:n}=e,{files:r}=n,i=r[0];((t=this.muxUploader)!=null?t:this).dispatchEvent(new CustomEvent("file-ready",{composed:!0,bubbles:!0,detail:i})),this.removeAttribute("active")})}};C.customElements.get("mux-uploader-drop")||(C.customElements.define("mux-uploader-drop",je),C.MuxUploaderDropElement=je);var Ft=`
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
`,Ve=ie.createElement("template");Ve.innerHTML=`
<style>
  ${Ft}
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
`;var F={BAR:"bar",RADIAL:"radial"},Nt=e=>`${Math.floor(e)}%`,Ut=e=>{var t;return Number((t=e.svgCircle)==null?void 0:t.getAttribute("r"))},P=e=>Ut(e)*2*Math.PI,Ht="Media upload progress bar",Fe=["Enter"," "],ne=class extends C.HTMLElement{constructor(){var e,t,n,r,i,s,o,u,d,c,f;super(),this.handleFilePickerButtonClick=this.handleFilePickerButtonClick.bind(this);let b=this.attachShadow({mode:"open"}),H=Ve.content.cloneNode(!0);b.appendChild(H),this.filePickerButton=(e=this.shadowRoot)==null?void 0:e.querySelector("slot[name=upload-button] > *"),this.svgCircle=(t=this.shadowRoot)==null?void 0:t.querySelector("circle"),this.progressBar=(n=this.shadowRoot)==null?void 0:n.getElementById("progress-bar"),this.uploadPercentage=(r=this.shadowRoot)==null?void 0:r.getElementById("upload-status"),this.statusMessage=(i=this.shadowRoot)==null?void 0:i.getElementById("status-message"),this.retryButton=(s=this.shadowRoot)==null?void 0:s.getElementById("retry-button"),this.srOnlyText=(o=this.shadowRoot)==null?void 0:o.getElementById("sr-only"),(u=this.progressBar)==null||u.setAttribute("aria-description",Ht),(d=this.hiddenFileInput)==null||d.addEventListener("change",()=>{var a,h;let m=(h=(a=this.hiddenFileInput)==null?void 0:a.files)==null?void 0:h[0];m&&this.dispatchEvent(new CustomEvent("file-ready",{composed:!0,bubbles:!0,detail:m}))}),(f=(c=this.shadowRoot)==null?void 0:c.querySelector("slot[name=upload-button]"))==null||f.addEventListener("slotchange",()=>{var a,h;this.filePickerButton=(h=(a=this.shadowRoot)==null?void 0:a.querySelector("slot[name=upload-button]"))==null?void 0:h.assignedNodes()[0]})}connectedCallback(){this.setDefaultType(),this.setupRetry(),this.addEventListener("file-ready",this.handleUpload)}disconnectedCallback(){this.removeEventListener("file-ready",this.handleUpload,!1)}get filePickerButton(){return this._filePickerButton}set filePickerButton(e){e!==this._filePickerButton&&(this._filePickerButton&&this._filePickerButton.removeEventListener("click",this.handleFilePickerButtonClick),this._filePickerButton=e,this._filePickerButton&&this._filePickerButton.addEventListener("click",this.handleFilePickerButtonClick))}get hiddenFileInput(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#hidden-file-input")}handleFilePickerButtonClick(){this.hiddenFileInput.click()}get endpoint(){var e;return(e=this.getAttribute("endpoint"))!=null?e:this._endpoint}set endpoint(e){e!==this.endpoint&&(typeof e=="string"?this.setAttribute("endpoint",e):e==null&&this.removeAttribute("endpoint"),this._endpoint=e)}get dynamicChunkSize(){return this.hasAttribute("dynamic-chunk-size")}set dynamicChunkSize(e){e!==this.hasAttribute("dynamic-chunk-size")&&(e?this.setAttribute("dynamic-chunk-size",""):this.removeAttribute("dynamic-chunk-size"))}get formatProgress(){var e;return(e=this._formatProgress)!=null?e:Nt}set formatProgress(e){this._formatProgress=e}setDefaultType(){let e=this.getAttribute("type");e||this.setAttribute("type",F.BAR),e===F.RADIAL&&this.svgCircle&&(this.svgCircle.style.strokeDasharray=`${P(this)} ${P(this)}`,this.svgCircle.style.strokeDashoffset=`${P(this)}`)}setupRetry(){var e;(e=this.retryButton)==null||e.addEventListener("click",()=>{this.resetState()});let t=n=>{let{key:r}=n;if(!Fe.includes(r)){this.removeEventListener("keyup",t);return}this.resetState()};this.addEventListener("keydown",n=>{let{metaKey:r,altKey:i,key:s}=n;if(r||i||!Fe.includes(s)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)})}resetState(){this.removeAttribute("upload-error"),this.removeAttribute("upload-in-progress"),this.hiddenFileInput.value="",this.statusMessage&&(this.statusMessage.innerHTML=""),this.uploadPercentage&&(this.uploadPercentage.innerHTML="")}setProgress(e){var t;switch(this.uploadPercentage&&(this.uploadPercentage.innerHTML=this.formatProgress(e)),(t=this.progressBar)==null||t.setAttribute("aria-valuenow",`${Math.floor(e)}`),this.getAttribute("type")){case F.BAR:{this.progressBar&&(this.progressBar.style.width=`${e}%`);break}case F.RADIAL:if(this.svgCircle){let n=P(this)-e/100*P(this);this.svgCircle.style.strokeDashoffset=n.toString()}}}handleUpload(e){var t;let n=this.endpoint,r=this.dynamicChunkSize;if(n)this.removeAttribute("upload-error"),this.statusMessage&&(this.statusMessage.innerHTML="");else{let s="No url or endpoint specified -- cannot handleUpload";this.statusMessage&&(this.statusMessage.innerHTML=s),this.setAttribute("upload-error",""),console.error(s),this.dispatchEvent(new CustomEvent("uploaderror",{detail:{message:s}}));return}this.setAttribute("upload-in-progress",""),(t=this.progressBar)==null||t.focus();let i=De({endpoint:n,dynamicChunkSize:r,file:e.detail});this.dispatchEvent(new CustomEvent("uploadstart",{detail:{file:i.file,chunkSize:i.chunkSize}})),i.on("attempt",s=>{this.dispatchEvent(new CustomEvent("chunkattempt",s))}),i.on("chunkSuccess",s=>{this.dispatchEvent(new CustomEvent("chunksuccess",s))}),i.on("error",s=>{let o="An error has occurred";this.setAttribute("upload-error",""),this.statusMessage&&(this.statusMessage.innerHTML=o),console.error(s.detail.message),this.dispatchEvent(new CustomEvent("uploaderror",s))}),i.on("progress",s=>{this.setProgress(s.detail),this.dispatchEvent(new CustomEvent("progress",s))}),i.on("success",s=>{let o="Upload complete!";this.statusMessage&&(this.statusMessage.innerHTML=o),this.srOnlyText&&(this.srOnlyText.innerHTML=o),console.info(o),this.dispatchEvent(new CustomEvent("success",s))})}};C.customElements.get("mux-uploader")||(C.customElements.define("mux-uploader",ne),C.MuxUploaderElement=ne);var Xt=ne;export{se as MuxUploader};
