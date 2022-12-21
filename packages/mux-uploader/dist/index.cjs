"use strict";var N=Object.create;var v=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var Y=(t,s)=>{for(var e in s)v(t,e,{get:s[e],enumerable:!0})},U=(t,s,e,o)=>{if(s&&typeof s=="object"||typeof s=="function")for(let n of X(s))!j.call(t,n)&&n!==e&&v(t,n,{get:()=>s[n],enumerable:!(o=$(s,n))||o.enumerable});return t};var G=(t,s,e)=>(e=t!=null?N(q(t)):{},U(s||!t||!t.__esModule?v(e,"default",{value:t,enumerable:!0}):e,t)),W=t=>U(v({},"__esModule",{value:!0}),t);var _=(t,s,e)=>{if(!s.has(t))throw TypeError("Cannot "+e)};var S=(t,s,e)=>(_(t,s,"read from private field"),e?e.call(t):s.get(t)),D=(t,s,e)=>{if(s.has(t))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(t):s.set(t,e)},H=(t,s,e,o)=>(_(t,s,"write to private field"),o?o.call(t,e):s.set(t,e),e);var ne={};Y(ne,{default:()=>se});module.exports=W(ne);var u=class{addEventListener(){}removeEventListener(){}dispatchEvent(s){return!0}};if(typeof DocumentFragment=="undefined"){class t extends u{}globalThis.DocumentFragment=t}var h=class extends u{},x=class extends u{},J={get(t){},define(t,s,e){},upgrade(t){},whenDefined(t){return Promise.resolve(h)}},m,M=class{constructor(s,e={}){D(this,m,void 0);H(this,m,e==null?void 0:e.detail)}get detail(){return S(this,m)}initCustomEvent(){}};m=new WeakMap;function Q(t,s){return new h}var R={document:{createElement:Q},DocumentFragment,customElements:J,CustomEvent:M,EventTarget:u,HTMLElement:h,HTMLVideoElement:x},z=typeof window=="undefined"||typeof globalThis.customElements=="undefined",a=z?R:globalThis,g=z?R.document:globalThis.document;var O=g.createElement("template");O.innerHTML=`
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
`;var y={MUX_UPLOADER:"mux-uploader",OVERLAY_TEXT:"overlay-text"},E=class extends a.HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"});e.appendChild(O.content.cloneNode(!0)),this.overlayText=e.getElementById("overlay-label")}connectedCallback(){this.setupDragEvents()}attributeChangedCallback(e,o,n){e===y.OVERLAY_TEXT&&o!==n?this.overlayText.innerHTML=n!=null?n:"":e==="active"&&this.getAttribute("overlay")&&n!=null&&(this._currentDragTarget=this)}static get observedAttributes(){return[y.OVERLAY_TEXT,y.MUX_UPLOADER,"active"]}get muxUploader(){let e=this.getAttribute(y.MUX_UPLOADER);return e?g.getElementById(e):null}setupDragEvents(){this.addEventListener("dragenter",e=>{this._currentDragTarget=e.target,e.preventDefault(),e.stopPropagation(),this.setAttribute("active","")}),this.addEventListener("dragleave",e=>{this._currentDragTarget===e.target&&(this._currentDragTarget=void 0,this.removeAttribute("active"))}),this.addEventListener("dragover",e=>{e.preventDefault(),e.stopPropagation()}),this.addEventListener("drop",e=>{var r;e.preventDefault(),e.stopPropagation();let{dataTransfer:o}=e,{files:n}=o,i=n[0];((r=this.muxUploader)!=null?r:this).dispatchEvent(new CustomEvent("file-ready",{composed:!0,bubbles:!0,detail:i})),this.removeAttribute("active")})}};a.customElements.get("mux-uploader-drop")||(a.customElements.define("mux-uploader-drop",E),a.MuxUploaderDropElement=E);var I=G(require("@mux/upchunk")),Z=`
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
`,K=g.createElement("template");K.innerHTML=`
<style>
  ${Z}
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
`;var k={BAR:"bar",RADIAL:"radial"},V=t=>`${Math.floor(t)}%`,ee=t=>{var s;return Number((s=t.svgCircle)==null?void 0:s.getAttribute("r"))},f=t=>ee(t)*2*Math.PI,te="Media upload progress bar",F=["Enter"," "],b=class extends a.HTMLElement{constructor(){var n,i,l,r,d,L,T,C,A,P,w;super();this.handleFilePickerButtonClick=this.handleFilePickerButtonClick.bind(this);let e=this.attachShadow({mode:"open"}),o=K.content.cloneNode(!0);e.appendChild(o),this.filePickerButton=(n=this.shadowRoot)==null?void 0:n.querySelector("slot[name=upload-button] > *"),this.svgCircle=(i=this.shadowRoot)==null?void 0:i.querySelector("circle"),this.progressBar=(l=this.shadowRoot)==null?void 0:l.getElementById("progress-bar"),this.uploadPercentage=(r=this.shadowRoot)==null?void 0:r.getElementById("upload-status"),this.statusMessage=(d=this.shadowRoot)==null?void 0:d.getElementById("status-message"),this.retryButton=(L=this.shadowRoot)==null?void 0:L.getElementById("retry-button"),this.srOnlyText=(T=this.shadowRoot)==null?void 0:T.getElementById("sr-only"),(C=this.progressBar)==null||C.setAttribute("aria-description",te),(A=this.hiddenFileInput)==null||A.addEventListener("change",()=>{var c,B;let p=(B=(c=this.hiddenFileInput)==null?void 0:c.files)==null?void 0:B[0];p&&this.dispatchEvent(new CustomEvent("file-ready",{composed:!0,bubbles:!0,detail:p}))}),(w=(P=this.shadowRoot)==null?void 0:P.querySelector("slot[name=upload-button]"))==null||w.addEventListener("slotchange",()=>{var p,c;this.filePickerButton=(c=(p=this.shadowRoot)==null?void 0:p.querySelector("slot[name=upload-button]"))==null?void 0:c.assignedNodes()[0]})}connectedCallback(){this.setDefaultType(),this.setupRetry(),this.addEventListener("file-ready",this.handleUpload)}disconnectedCallback(){this.removeEventListener("file-ready",this.handleUpload,!1)}get filePickerButton(){return this._filePickerButton}set filePickerButton(e){e!==this._filePickerButton&&(this._filePickerButton&&this._filePickerButton.removeEventListener("click",this.handleFilePickerButtonClick),this._filePickerButton=e,this._filePickerButton&&this._filePickerButton.addEventListener("click",this.handleFilePickerButtonClick))}get hiddenFileInput(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#hidden-file-input")}handleFilePickerButtonClick(){this.hiddenFileInput.click()}get endpoint(){var e;return(e=this.getAttribute("endpoint"))!=null?e:this._endpoint}set endpoint(e){e!==this.endpoint&&(typeof e=="string"?this.setAttribute("endpoint",e):e==null&&this.removeAttribute("endpoint"),this._endpoint=e)}get dynamicChunkSize(){return this.hasAttribute("dynamic-chunk-size")}set dynamicChunkSize(e){e!==this.hasAttribute("dynamic-chunk-size")&&(e?this.setAttribute("dynamic-chunk-size",""):this.removeAttribute("dynamic-chunk-size"))}get formatProgress(){var e;return(e=this._formatProgress)!=null?e:V}set formatProgress(e){this._formatProgress=e}setDefaultType(){let e=this.getAttribute("type");e||this.setAttribute("type",k.BAR),e===k.RADIAL&&this.svgCircle&&(this.svgCircle.style.strokeDasharray=`${f(this)} ${f(this)}`,this.svgCircle.style.strokeDashoffset=`${f(this)}`)}setupRetry(){var o;(o=this.retryButton)==null||o.addEventListener("click",()=>{this.resetState()});let e=n=>{let{key:i}=n;if(!F.includes(i)){this.removeEventListener("keyup",e);return}this.resetState()};this.addEventListener("keydown",n=>{let{metaKey:i,altKey:l,key:r}=n;if(i||l||!F.includes(r)){this.removeEventListener("keyup",e);return}this.addEventListener("keyup",e)})}resetState(){this.removeAttribute("upload-error"),this.removeAttribute("upload-in-progress"),this.hiddenFileInput.value="",this.statusMessage&&(this.statusMessage.innerHTML=""),this.uploadPercentage&&(this.uploadPercentage.innerHTML="")}setProgress(e){var o;switch(this.uploadPercentage&&(this.uploadPercentage.innerHTML=this.formatProgress(e)),(o=this.progressBar)==null||o.setAttribute("aria-valuenow",`${Math.floor(e)}`),this.getAttribute("type")){case k.BAR:{this.progressBar&&(this.progressBar.style.width=`${e}%`);break}case k.RADIAL:if(this.svgCircle){let n=f(this)-e/100*f(this);this.svgCircle.style.strokeDashoffset=n.toString()}}}handleUpload(e){var l;let o=this.endpoint,n=this.dynamicChunkSize;if(o)this.removeAttribute("upload-error"),this.statusMessage&&(this.statusMessage.innerHTML="");else{let r="No url or endpoint specified -- cannot handleUpload";this.statusMessage&&(this.statusMessage.innerHTML=r),this.setAttribute("upload-error",""),console.error(r),this.dispatchEvent(new CustomEvent("uploaderror",{detail:{message:r}}));return}this.setAttribute("upload-in-progress",""),(l=this.progressBar)==null||l.focus();let i=I.createUpload({endpoint:o,dynamicChunkSize:n,file:e.detail});this.dispatchEvent(new CustomEvent("uploadstart",{detail:{file:i.file,chunkSize:i.chunkSize}})),i.on("attempt",r=>{this.dispatchEvent(new CustomEvent("chunkattempt",r))}),i.on("chunkSuccess",r=>{this.dispatchEvent(new CustomEvent("chunksuccess",r))}),i.on("error",r=>{let d="An error has occurred";this.setAttribute("upload-error",""),this.statusMessage&&(this.statusMessage.innerHTML=d),console.error(r.detail.message),this.dispatchEvent(new CustomEvent("uploaderror",r))}),i.on("progress",r=>{this.setProgress(r.detail),this.dispatchEvent(new CustomEvent("progress",r))}),i.on("success",r=>{let d="Upload complete!";this.statusMessage&&(this.statusMessage.innerHTML=d),this.srOnlyText&&(this.srOnlyText.innerHTML=d),console.info(d),this.dispatchEvent(new CustomEvent("success",r))})}};a.customElements.get("mux-uploader")||(a.customElements.define("mux-uploader",b),a.MuxUploaderElement=b);var se=b;
//# sourceMappingURL=index.cjs.map
