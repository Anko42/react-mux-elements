var B=(t,n,e)=>{if(!n.has(t))throw TypeError("Cannot "+e)};var U=(t,n,e)=>(B(t,n,"read from private field"),e?e.call(t):n.get(t)),_=(t,n,e)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,e)},S=(t,n,e,o)=>(B(t,n,"write to private field"),o?o.call(t,e):n.set(t,e),e);var u=class{addEventListener(){}removeEventListener(){}dispatchEvent(n){return!0}};if(typeof DocumentFragment=="undefined"){class t extends u{}globalThis.DocumentFragment=t}var h=class extends u{},k=class extends u{},I={get(t){},define(t,n,e){},upgrade(t){},whenDefined(t){return Promise.resolve(h)}},m,x=class{constructor(n,e={}){_(this,m,void 0);S(this,m,e==null?void 0:e.detail)}get detail(){return U(this,m)}initCustomEvent(){}};m=new WeakMap;function K(t,n){return new h}var D={document:{createElement:K},DocumentFragment,customElements:I,CustomEvent:x,EventTarget:u,HTMLElement:h,HTMLVideoElement:k},H=typeof window=="undefined"||typeof globalThis.customElements=="undefined",a=H?D:globalThis,g=H?D.document:globalThis.document;var R=g.createElement("template");R.innerHTML=`
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
`;var v={MUX_UPLOADER:"mux-uploader",OVERLAY_TEXT:"overlay-text"},y=class extends a.HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"});e.appendChild(R.content.cloneNode(!0)),this.overlayText=e.getElementById("overlay-label")}connectedCallback(){this.setupDragEvents()}attributeChangedCallback(e,o,r){e===v.OVERLAY_TEXT&&o!==r?this.overlayText.innerHTML=r!=null?r:"":e==="active"&&this.getAttribute("overlay")&&r!=null&&(this._currentDragTarget=this)}static get observedAttributes(){return[v.OVERLAY_TEXT,v.MUX_UPLOADER,"active"]}get muxUploader(){let e=this.getAttribute(v.MUX_UPLOADER);return e?g.getElementById(e):null}setupDragEvents(){this.addEventListener("dragenter",e=>{this._currentDragTarget=e.target,e.preventDefault(),e.stopPropagation(),this.setAttribute("active","")}),this.addEventListener("dragleave",e=>{this._currentDragTarget===e.target&&(this._currentDragTarget=void 0,this.removeAttribute("active"))}),this.addEventListener("dragover",e=>{e.preventDefault(),e.stopPropagation()}),this.addEventListener("drop",e=>{var s;e.preventDefault(),e.stopPropagation();let{dataTransfer:o}=e,{files:r}=o,i=r[0];((s=this.muxUploader)!=null?s:this).dispatchEvent(new CustomEvent("file-ready",{composed:!0,bubbles:!0,detail:i})),this.removeAttribute("active")})}};a.customElements.get("mux-uploader-drop")||(a.customElements.define("mux-uploader-drop",y),a.MuxUploaderDropElement=y);import*as O from"@mux/upchunk";var N=`
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
`,F=g.createElement("template");F.innerHTML=`
<style>
  ${N}
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
`;var E={BAR:"bar",RADIAL:"radial"},$=t=>`${Math.floor(t)}%`,X=t=>{var n;return Number((n=t.svgCircle)==null?void 0:n.getAttribute("r"))},f=t=>X(t)*2*Math.PI,q="Media upload progress bar",z=["Enter"," "],b=class extends a.HTMLElement{constructor(){var r,i,l,s,d,M,L,T,C,A,P;super();this.handleFilePickerButtonClick=this.handleFilePickerButtonClick.bind(this);let e=this.attachShadow({mode:"open"}),o=F.content.cloneNode(!0);e.appendChild(o),this.filePickerButton=(r=this.shadowRoot)==null?void 0:r.querySelector("slot[name=upload-button] > *"),this.svgCircle=(i=this.shadowRoot)==null?void 0:i.querySelector("circle"),this.progressBar=(l=this.shadowRoot)==null?void 0:l.getElementById("progress-bar"),this.uploadPercentage=(s=this.shadowRoot)==null?void 0:s.getElementById("upload-status"),this.statusMessage=(d=this.shadowRoot)==null?void 0:d.getElementById("status-message"),this.retryButton=(M=this.shadowRoot)==null?void 0:M.getElementById("retry-button"),this.srOnlyText=(L=this.shadowRoot)==null?void 0:L.getElementById("sr-only"),(T=this.progressBar)==null||T.setAttribute("aria-description",q),(C=this.hiddenFileInput)==null||C.addEventListener("change",()=>{var c,w;let p=(w=(c=this.hiddenFileInput)==null?void 0:c.files)==null?void 0:w[0];p&&this.dispatchEvent(new CustomEvent("file-ready",{composed:!0,bubbles:!0,detail:p}))}),(P=(A=this.shadowRoot)==null?void 0:A.querySelector("slot[name=upload-button]"))==null||P.addEventListener("slotchange",()=>{var p,c;this.filePickerButton=(c=(p=this.shadowRoot)==null?void 0:p.querySelector("slot[name=upload-button]"))==null?void 0:c.assignedNodes()[0]})}connectedCallback(){this.setDefaultType(),this.setupRetry(),this.addEventListener("file-ready",this.handleUpload)}disconnectedCallback(){this.removeEventListener("file-ready",this.handleUpload,!1)}get filePickerButton(){return this._filePickerButton}set filePickerButton(e){e!==this._filePickerButton&&(this._filePickerButton&&this._filePickerButton.removeEventListener("click",this.handleFilePickerButtonClick),this._filePickerButton=e,this._filePickerButton&&this._filePickerButton.addEventListener("click",this.handleFilePickerButtonClick))}get hiddenFileInput(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#hidden-file-input")}handleFilePickerButtonClick(){this.hiddenFileInput.click()}get endpoint(){var e;return(e=this.getAttribute("endpoint"))!=null?e:this._endpoint}set endpoint(e){e!==this.endpoint&&(typeof e=="string"?this.setAttribute("endpoint",e):e==null&&this.removeAttribute("endpoint"),this._endpoint=e)}get dynamicChunkSize(){return this.hasAttribute("dynamic-chunk-size")}set dynamicChunkSize(e){e!==this.hasAttribute("dynamic-chunk-size")&&(e?this.setAttribute("dynamic-chunk-size",""):this.removeAttribute("dynamic-chunk-size"))}get formatProgress(){var e;return(e=this._formatProgress)!=null?e:$}set formatProgress(e){this._formatProgress=e}setDefaultType(){let e=this.getAttribute("type");e||this.setAttribute("type",E.BAR),e===E.RADIAL&&this.svgCircle&&(this.svgCircle.style.strokeDasharray=`${f(this)} ${f(this)}`,this.svgCircle.style.strokeDashoffset=`${f(this)}`)}setupRetry(){var o;(o=this.retryButton)==null||o.addEventListener("click",()=>{this.resetState()});let e=r=>{let{key:i}=r;if(!z.includes(i)){this.removeEventListener("keyup",e);return}this.resetState()};this.addEventListener("keydown",r=>{let{metaKey:i,altKey:l,key:s}=r;if(i||l||!z.includes(s)){this.removeEventListener("keyup",e);return}this.addEventListener("keyup",e)})}resetState(){this.removeAttribute("upload-error"),this.removeAttribute("upload-in-progress"),this.hiddenFileInput.value="",this.statusMessage&&(this.statusMessage.innerHTML=""),this.uploadPercentage&&(this.uploadPercentage.innerHTML="")}setProgress(e){var o;switch(this.uploadPercentage&&(this.uploadPercentage.innerHTML=this.formatProgress(e)),(o=this.progressBar)==null||o.setAttribute("aria-valuenow",`${Math.floor(e)}`),this.getAttribute("type")){case E.BAR:{this.progressBar&&(this.progressBar.style.width=`${e}%`);break}case E.RADIAL:if(this.svgCircle){let r=f(this)-e/100*f(this);this.svgCircle.style.strokeDashoffset=r.toString()}}}handleUpload(e){var l;let o=this.endpoint,r=this.dynamicChunkSize;if(o)this.removeAttribute("upload-error"),this.statusMessage&&(this.statusMessage.innerHTML="");else{let s="No url or endpoint specified -- cannot handleUpload";this.statusMessage&&(this.statusMessage.innerHTML=s),this.setAttribute("upload-error",""),console.error(s),this.dispatchEvent(new CustomEvent("uploaderror",{detail:{message:s}}));return}this.setAttribute("upload-in-progress",""),(l=this.progressBar)==null||l.focus();let i=O.createUpload({endpoint:o,dynamicChunkSize:r,file:e.detail});this.dispatchEvent(new CustomEvent("uploadstart",{detail:{file:i.file,chunkSize:i.chunkSize}})),i.on("attempt",s=>{this.dispatchEvent(new CustomEvent("chunkattempt",s))}),i.on("chunkSuccess",s=>{this.dispatchEvent(new CustomEvent("chunksuccess",s))}),i.on("error",s=>{let d="An error has occurred";this.setAttribute("upload-error",""),this.statusMessage&&(this.statusMessage.innerHTML=d),console.error(s.detail.message),this.dispatchEvent(new CustomEvent("uploaderror",s))}),i.on("progress",s=>{this.setProgress(s.detail),this.dispatchEvent(new CustomEvent("progress",s))}),i.on("success",s=>{let d="Upload complete!";this.statusMessage&&(this.statusMessage.innerHTML=d),this.srOnlyText&&(this.srOnlyText.innerHTML=d),console.info(d),this.dispatchEvent(new CustomEvent("success",s))})}};a.customElements.get("mux-uploader")||(a.customElements.define("mux-uploader",b),a.MuxUploaderElement=b);var Z=b;export{Z as default};
//# sourceMappingURL=index.mjs.map
