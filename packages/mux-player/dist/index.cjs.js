"use strict";var co=Object.create;var Dt=Object.defineProperty;var mo=Object.getOwnPropertyDescriptor;var ho=Object.getOwnPropertyNames;var po=Object.getPrototypeOf,bo=Object.prototype.hasOwnProperty;var Eo=(i,e)=>{for(var t in e)Dt(i,t,{get:e[t],enumerable:!0})},tr=(i,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ho(e))!bo.call(i,r)&&r!==t&&Dt(i,r,{get:()=>e[r],enumerable:!(a=mo(e,r))||a.enumerable});return i};var fo=(i,e,t)=>(t=i!=null?co(po(i)):{},tr(e||!i||!i.__esModule?Dt(t,"default",{value:i,enumerable:!0}):t,i)),vo=i=>tr(Dt({},"__esModule",{value:!0}),i);var Di=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var v=(i,e,t)=>(Di(i,e,"read from private field"),t?t.call(i):e.get(i)),I=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},V=(i,e,t,a)=>(Di(i,e,"write to private field"),a?a.call(i,t):e.set(i,t),t);var S=(i,e,t)=>(Di(i,e,"access private method"),t);var Il={};Eo(Il,{MediaError:()=>g.MediaError,default:()=>Tl,getVideoAttribute:()=>ge});module.exports=vo(Il);var Pe=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment=="undefined"){class i extends Pe{}globalThis.DocumentFragment=i}var Je=class extends Pe{},xi=class extends Pe{},go={get(i){},define(i,e,t){},upgrade(i){},whenDefined(i){return Promise.resolve(Je)}},et,Ri=class{constructor(e,t={}){I(this,et,void 0);V(this,et,t==null?void 0:t.detail)}get detail(){return v(this,et)}initCustomEvent(){}};et=new WeakMap;function Ao(i,e){return new Je}var ir={document:{createElement:Ao},DocumentFragment,customElements:go,CustomEvent:Ri,EventTarget:Pe,HTMLElement:Je,HTMLVideoElement:xi},ar=typeof window=="undefined"||typeof globalThis.customElements=="undefined",D=ar?ir:globalThis,H=ar?ir.document:globalThis.document;var p={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_CAPTIONS_REQUEST:"mediashowcaptionsrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_CAPTIONS_REQUEST:"mediadisablecaptionsrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},tt={MEDIA_AIRPLAY_UNAVAILABLE:"mediaairplayunavailablechange",MEDIA_PIP_UNAVAILABLE:"mediapipunavailablechange",MEDIA_PAUSED:"mediapausedchange",MEDIA_HAS_PLAYED:"mediahasplayedchange",MEDIA_MUTED:"mediamutedchange",MEDIA_VOLUME_LEVEL:"mediavolumelevelchange",MEDIA_VOLUME:"mediavolumechange",MEDIA_VOLUME_UNAVAILABLE:"mediavolumeunavailablechange",MEDIA_IS_PIP:"mediaispipchange",MEDIA_IS_CASTING:"mediaiscastingchange",MEDIA_CAPTIONS_LIST:"mediacaptionslistchange",MEDIA_SUBTITLES_LIST:"mediasubtitleslistchange",MEDIA_CAPTIONS_SHOWING:"mediacaptionsshowingchange",MEDIA_SUBTITLES_SHOWING:"mediasubtitlesshowingchange",MEDIA_IS_FULLSCREEN:"mediaisfullscreenchange",MEDIA_PLAYBACK_RATE:"mediaplaybackratechange",MEDIA_CURRENT_TIME:"mediacurrenttimechange",MEDIA_DURATION:"mediadurationchange",MEDIA_SEEKABLE:"mediaseekablechange",MEDIA_PREVIEW_IMAGE:"mediapreviewimagechange",MEDIA_PREVIEW_COORDS:"mediapreviewcoordschange",MEDIA_LOADING:"medialoadingchange",USER_INACTIVE:"userinactivechange"},A={MEDIA_CHROME_ATTRIBUTES:"media-chrome-attributes",MEDIA_CONTROLLER:"media-controller"},o={MEDIA_AIRPLAY_UNAVAILABLE:"media-airplay-unavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"media-fullscreen-unavailable",MEDIA_PIP_UNAVAILABLE:"media-pip-unavailable",MEDIA_CAST_UNAVAILABLE:"media-cast-unavailable",MEDIA_PAUSED:"media-paused",MEDIA_HAS_PLAYED:"media-has-played",MEDIA_MUTED:"media-muted",MEDIA_VOLUME_LEVEL:"media-volume-level",MEDIA_VOLUME:"media-volume",MEDIA_VOLUME_UNAVAILABLE:"media-volume-unavailable",MEDIA_IS_PIP:"media-is-pip",MEDIA_IS_CASTING:"media-is-casting",MEDIA_CAPTIONS_LIST:"media-captions-list",MEDIA_SUBTITLES_LIST:"media-subtitles-list",MEDIA_CAPTIONS_SHOWING:"media-captions-showing",MEDIA_SUBTITLES_SHOWING:"media-subtitles-showing",MEDIA_IS_FULLSCREEN:"media-is-fullscreen",MEDIA_PLAYBACK_RATE:"media-playback-rate",MEDIA_CURRENT_TIME:"media-current-time",MEDIA_DURATION:"media-duration",MEDIA_SEEKABLE:"media-seekable",MEDIA_PREVIEW_TIME:"media-preview-time",MEDIA_PREVIEW_IMAGE:"media-preview-image",MEDIA_PREVIEW_COORDS:"media-preview-coords",MEDIA_LOADING:"media-loading",MEDIA_BUFFERED:"media-buffered",MEDIA_STREAM_TYPE:"media-stream-type"},Sl=Object.entries(tt).reduce((i,[e,t])=>{let a=o[e];return a&&(i[t]=a),i},{userinactivechange:"user-inactive"}),rr=Object.entries(o).reduce((i,[e,t])=>{let a=tt[e];return a&&(i[t]=a),i},{"user-inactive":"userinactivechange"}),Ue={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},_e={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"};var Pi={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},q={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},xt={LIVE:"live",ON_DEMAND:"on-demand"};var B={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:i=1}={})=>`current playback rate ${i}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading"},C={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",AIRPLAY:()=>"air play",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:i=30}={})=>`seek forward ${i} seconds`,SEEK_BACK_N_SECS:({seekOffset:i=30}={})=>`seek back ${i} seconds`},yo={...B,...C};function Rt(i,e=!1){return i.split("_").map(function(t,a){return(a||e?t[0].toUpperCase():t[0].toLowerCase())+t.slice(1).toLowerCase()}).join("")}function Ui(i){return i.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function nr(i){return typeof i=="number"&&!Number.isNaN(i)&&Number.isFinite(i)}function or(i){return typeof i!="string"?!1:!isNaN(i)&&!isNaN(parseFloat(i))}var sr=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],To=(i,e)=>{let t=i===1?sr[e].singular:sr[e].plural;return`${i} ${t}`},ye=i=>{if(!nr(i))return"";let e=Math.abs(i),t=e!==i,a=new Date(0,0,0,0,0,e,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((l,c)=>l&&To(l,c)).filter(l=>l).join(", ")}${t?" remaining":""}`};function j(i,e){let t=!1;i<0&&(t=!0,i=0-i),i=i<0?0:i;let a=Math.floor(i%60),r=Math.floor(i/60%60),n=Math.floor(i/3600),s=Math.floor(e/60%60),l=Math.floor(e/3600);return(isNaN(i)||i===1/0)&&(n=r=a="-"),n=n>0||l>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(t?"-":"")+n+r+a}var Pt=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},lr={HTMLElement:class extends Pt{},DocumentFragment:class extends Pt{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},CustomEvent:function(){}},Mo={createElement:function(){return new lr.HTMLElement}},dr=typeof window=="undefined"||typeof window.customElements=="undefined",u=dr?lr:window,d=dr?Mo:window.document;function h(i,e){u.customElements.get(i)||(u.customElements.define(i,e),u[e.name]=e)}var ko=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},Te=(i,e,t)=>(ko(i,e,"read from private field"),t?t.call(i):e.get(i)),Oi=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},Ut,Oe,Ni,ur=d.createElement("template");ur.innerHTML=`
<style>
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    background: var(--media-control-background, rgba(20,20,30, 0.7));

    padding: var(--media-control-padding, 10px);

    
    font-size: 14px;
    line-height: var(--media-text-content-height, var(--media-control-height, 24px));
    font-weight: bold;
    color: #fff;

    transition: background 0.15s linear;

    pointer-events: auto;
    cursor: pointer;
    font-family: Arial, sans-serif;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50,50,70, 0.7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, #eee);
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;var Ot=class extends u.HTMLElement{constructor(e={}){super(),Oi(this,Ut,n=>{this.handleClick(n)}),Oi(this,Oe,n=>{let{key:s}=n;if(!this.keysUsed.includes(s)){this.removeEventListener("keyup",Te(this,Oe));return}this.handleClick(n)}),Oi(this,Ni,n=>{let{metaKey:s,altKey:l,key:c}=n;if(s||l||!this.keysUsed.includes(c)){this.removeEventListener("keyup",Te(this,Oe));return}this.addEventListener("keyup",Te(this,Oe),{once:!0})});let t=this.attachShadow({mode:"open"}),a=ur.content.cloneNode(!0);this.nativeEl=a;let r=e.slotTemplate;r||(r=d.createElement("template"),r.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(r.content.cloneNode(!0)),t.appendChild(a)}static get observedAttributes(){return["disabled",A.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",Te(this,Ut)),this.addEventListener("keydown",Te(this,Ni)),this.setAttribute("tabindex","0")}disable(){this.removeEventListener("click",Te(this,Ut)),this.removeEventListener("keyup",Te(this,Oe)),this.removeAttribute("tabindex")}attributeChangedCallback(e,t,a){var r,n;if(e===A.MEDIA_CONTROLLER){if(t){let s=d.getElementById(t);(r=s==null?void 0:s.unassociateElement)==null||r.call(s,this)}if(a){let s=d.getElementById(a);(n=s==null?void 0:s.associateElement)==null||n.call(s,this)}}else e==="disabled"&&a!==t&&(a==null?this.enable():this.disable())}connectedCallback(){var e;this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let t=this.getAttribute(A.MEDIA_CONTROLLER);if(t){let a=d.getElementById(t);(e=a==null?void 0:a.associateElement)==null||e.call(a,this)}}disconnectedCallback(){var e;this.disable();let t=this.getAttribute(A.MEDIA_CONTROLLER);if(t){let a=d.getElementById(t);(e=a==null?void 0:a.unassociateElement)==null||e.call(a,this)}}get keysUsed(){return["Enter"," "]}handleClick(e){}};Ut=new WeakMap;Oe=new WeakMap;Ni=new WeakMap;h("media-chrome-button",Ot);var x=Ot;var So=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,cr=d.createElement("template");cr.innerHTML=`
  <slot name="airplay">${So}</slot>
`;var Bi=class extends x{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:cr,...e})}connectedCallback(){this.setAttribute("aria-label",C.AIRPLAY()),super.connectedCallback()}handleClick(){let e=new u.CustomEvent(p.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}};h("media-airplay-button",Bi);var Lo='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',Co='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>',hr=d.createElement("template");hr.innerHTML=`
  <style>
  :host([${o.MEDIA_IS_CASTING}]) slot:not([name=exit]) > *,
  :host([${o.MEDIA_IS_CASTING}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  
  :host(:not([${o.MEDIA_IS_CASTING}])) slot:not([name=enter]) > *,
  :host(:not([${o.MEDIA_IS_CASTING}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${Lo}</slot>
  <slot name="exit">${Co}</slot>
`;var mr=i=>{let t=i.getAttribute(o.MEDIA_IS_CASTING)!=null?C.EXIT_CAST():C.ENTER_CAST();i.setAttribute("aria-label",t)},$i=class extends x{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_CASTING,o.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:hr,...e})}connectedCallback(){mr(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e===o.MEDIA_IS_CASTING&&mr(this),super.attributeChangedCallback(e,t,a)}handleClick(){let e=this.getAttribute(o.MEDIA_IS_CASTING)!=null?p.MEDIA_EXIT_CAST_REQUEST:p.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new u.CustomEvent(e,{composed:!0,bubbles:!0}))}};h("media-cast-button",$i);var Nt=(i,e,t=".value")=>{let a=i.querySelector(t);!a||(a.textContent=e)},wo=(i,e)=>{let t=`slot[name="${e}"]`,a=i.shadowRoot.querySelector(t);return a?a.children:[]},Bt=(i,e)=>wo(i,e)[0],it=(i,e)=>!i||!e?!1:i.contains(e)?!0:it(i,e.getRootNode().host),at=(i,e)=>{if(!i)return null;let t=i.closest(e);return t||at(i.getRootNode().host,e)};function ae(i,e){var t;let a;for(a of i.querySelectorAll("style")){let r;try{r=(t=a.sheet)==null?void 0:t.cssRules}catch{continue}for(let n of r!=null?r:[])if(n.selectorText===e)return n}return a!=null&&a.sheet?(a.sheet.insertRule(`${e}{}`,a.sheet.cssRules.length),a.sheet.cssRules[a.sheet.cssRules.length-1]):{style:{setProperty:()=>{}}}}var br=d.createElement("template");br.innerHTML=`
<style>
  :host {
    display: inline-block;
    box-sizing: border-box;
  }
</style>
`;var Vi=class extends u.HTMLElement{static get observedAttributes(){return[A.MEDIA_CONTROLLER,o.MEDIA_PAUSED]}constructor(e={}){super();let t=this.attachShadow({mode:"open"}),a=br.content.cloneNode(!0);this.nativeEl=a;let r=e.slotTemplate;r||(r=d.createElement("template"),r.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(r.content.cloneNode(!0)),t.appendChild(a)}attributeChangedCallback(e,t,a){var r,n;if(e===A.MEDIA_CONTROLLER){if(t){let s=d.getElementById(t);(r=s==null?void 0:s.unassociateElement)==null||r.call(s,this)}if(a){let s=d.getElementById(a);(n=s==null?void 0:s.associateElement)==null||n.call(s,this)}}}connectedCallback(){var e;this.setAttribute("tabindex",-1),this.setAttribute("aria-hidden",!0);let t=pr(this);this.getAttribute(A.MEDIA_CONTROLLER)&&((e=t==null?void 0:t.associateElement)==null||e.call(t,this)),t==null||t.addEventListener("pointerdown",this),t==null||t.addEventListener("click",this)}disconnectedCallback(){var e;let t=pr(this);this.getAttribute(A.MEDIA_CONTROLLER)&&((e=t==null?void 0:t.unassociateElement)==null||e.call(t,this)),t==null||t.removeEventListener("pointerdown",this),t==null||t.removeEventListener("click",this)}handleEvent(e){var t;let a=(t=e.composedPath())==null?void 0:t[0];if(!!["video","media-controller"].includes(a==null?void 0:a.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){let{clientX:n,clientY:s}=e,{left:l,top:c,width:m,height:E}=this.getBoundingClientRect(),f=n-l,w=s-c;if(f<0||w<0||f>m||w>E||m===0&&E===0)return;let{pointerType:T=this._pointerType}=e;if(this._pointerType=void 0,T===Pi.TOUCH){this.handleTap(e);return}else if(T===Pi.MOUSE){this.handleMouseClick(e);return}}}}handleTap(e){}handleMouseClick(e){let t=this.getAttribute(o.MEDIA_PAUSED)!=null?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new u.CustomEvent(t,{composed:!0,bubbles:!0}))}};function pr(i){let e=i.getAttribute(A.MEDIA_CONTROLLER);return e?d.getElementById(e):at(i,"media-controller")}h("media-gesture-receiver",Vi);var Er=d.createElement("template");Er.innerHTML=`
  <style>
    
    :host([media-is-fullscreen])  ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([audio])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    
    :host([audio]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([audio])[gestures-disabled]) ::slotted([slot=gestures-chrome]),
    :host(:not([audio])[gestures-disabled]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator)) {
      pointer-events: auto;
    }

    :host(:not([audio])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([audio])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([audio])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([audio])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([no-auto-hide])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([user-inactive]:not([${o.MEDIA_PAUSED}]):not([${o.MEDIA_IS_CASTING}]):not([audio])) ::slotted(:not([slot=media]):not([no-auto-hide])) {
      opacity: 0;
      transition: opacity 1s;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;var Do=Object.values(o),$t=class extends u.HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Er.content.cloneNode(!0));let e=n=>{let s=this.media;for(let l of n)l.type==="childList"&&(l.removedNodes.forEach(c=>{if(c.slot=="media"&&l.target==this){let m=l.previousSibling&&l.previousSibling.previousElementSibling;if(!m||!s)this.mediaUnsetCallback(c);else{let E=m.slot!=="media";for(;(m=m.previousSibling)!==null;)m.slot=="media"&&(E=!1);E&&this.mediaUnsetCallback(c)}}}),s&&l.addedNodes.forEach(c=>{c==s&&this.handleMediaUpdated(s).then(m=>this.mediaSetCallback(m))}))};new MutationObserver(e).observe(this,{childList:!0,subtree:!0});let a=this.media,r=this.querySelector(":scope > slot[slot=media]");r&&r.addEventListener("slotchange",()=>{if(!r.assignedElements({flatten:!0}).length){this.mediaUnsetCallback(a);return}this.media&&(a=this.media,this.handleMediaUpdated(this.media).then(s=>this.mediaSetCallback(s)))})}static get observedAttributes(){return["autohide","gestures-disabled"].concat(Do)}attributeChangedCallback(e,t,a){e.toLowerCase()=="autohide"&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}mediaSetCallback(e){this._mediaClickPlayToggle=()=>{let t=e.paused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new u.CustomEvent(t,{composed:!0,bubbles:!0}))}}handleMediaUpdated(e){let t=n=>Promise.resolve(n),a=n=>(console.error('<media-chrome>: Media element set with slot="media" does not appear to be compatible.',n),Promise.reject(n));if(!e)return a(e);let r=e.nodeName.toLowerCase();return r.includes("-")?u.customElements.whenDefined(r).then(()=>t(e)):t(e)}mediaUnsetCallback(e){}connectedCallback(){let t=this.getAttribute("audio")!=null?B.AUDIO_PLAYER():B.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.media&&this.handleMediaUpdated(this.media).then(s=>this.mediaSetCallback(s)),this.setAttribute("user-inactive","user-inactive");let a=()=>{if(this.autohide<0)return;this.setAttribute("user-inactive","user-inactive");let s=new u.CustomEvent(tt.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(s)},r=()=>{this.removeAttribute("user-inactive");let s=new u.CustomEvent(tt.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(s)},n=()=>{r(),u.clearTimeout(this._inactiveTimeout),!(this.autohide<0)&&(this._inactiveTimeout=u.setTimeout(()=>{a()},this.autohide*1e3))};this.addEventListener("keyup",()=>{n()}),this.addEventListener("pointerup",s=>{s.pointerType==="touch"?[this,this.media].includes(s.target)&&!this.hasAttribute("user-inactive")?a():n():s.composedPath().some(l=>{var c;return["media-play-button","media-fullscreen-button"].includes((c=l==null?void 0:l.nodeName)==null?void 0:c.toLowerCase())})&&n()}),this.addEventListener("pointermove",s=>{s.pointerType==="mouse"&&s.target!==this&&(r(),u.clearTimeout(this._inactiveTimeout),[this,this.media].includes(s.target)&&n())}),this.addEventListener("mouseleave",()=>{a()}),this.addEventListener("keyup",()=>{this.setAttribute("media-keyboard-control","")}),this.addEventListener("mouseup",()=>{this.removeAttribute("media-keyboard-control")})}set autohide(e){e=Number(e),this._autohide=isNaN(e)?0:e}get autohide(){return this._autohide===void 0?2:this._autohide}};h("media-container-temp",$t);var fr=$t;var vr=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},N=(i,e,t)=>(vr(i,e,"read from private field"),t?t.call(i):e.get(i)),Hi=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},Wi=(i,e,t,a)=>(vr(i,e,"write to private field"),a?a.call(i,t):e.set(i,t),t),Ne,Be,K,Vt=class{constructor(e,t){Hi(this,Ne,void 0),Hi(this,Be,void 0),Hi(this,K,[]),Wi(this,Ne,e),Wi(this,Be,t)}[Symbol.iterator](){return N(this,K).values()}get length(){return N(this,K).length}get value(){var e;return(e=N(this,K).join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(Wi(this,K,[]),this.add(...(t=e==null?void 0:e.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return N(this,K)[e]}values(){return N(this,K).values()}keys(){return N(this,K).keys()}forEach(e){N(this,K).forEach(e)}add(...e){var t,a;e.forEach(r=>{this.contains(r)||N(this,K).push(r)}),!(this.value===""&&!((t=N(this,Ne))!=null&&t.hasAttribute(`${N(this,Be)}`)))&&((a=N(this,Ne))==null||a.setAttribute(`${N(this,Be)}`,`${this.value}`))}remove(...e){var t;e.forEach(a=>{N(this,K).splice(N(this,K).indexOf(a),1)}),(t=N(this,Ne))==null||t.setAttribute(`${N(this,Be)}`,`${this.value}`)}contains(e){return N(this,K).includes(e)}toggle(e,t){return typeof t!="undefined"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};Ne=new WeakMap;Be=new WeakMap;K=new WeakMap;var U={enter:"requestFullscreen",exit:"exitFullscreen",event:"fullscreenchange",element:"fullscreenElement",error:"fullscreenerror",enabled:"fullscreenEnabled"};d.fullscreenElement===void 0&&(U.enter="webkitRequestFullScreen",U.exit=d.webkitExitFullscreen!=null?"webkitExitFullscreen":"webkitCancelFullScreen",U.event="webkitfullscreenchange",U.element="webkitFullscreenElement",U.error="webkitfullscreenerror",U.enabled="webkitFullscreenEnabled");var Fi=(i="")=>i.split(/\s+/),gr=(i="")=>{let[e,t]=i.split(":"),a=t?decodeURIComponent(t):void 0;return{language:e,label:a}},xo=(i="",e={})=>Fi(i).map(t=>{let a=gr(t);return{...e,...a}}),Ro=i=>Array.isArray(i)?i.map(e=>typeof e=="string"?gr(e):e):typeof i=="string"?xo(i):[i],Po=({label:i,language:e}={})=>i?`${e}:${encodeURIComponent(i)}`:e,Q=(i=[])=>Array.prototype.map.call(i,Po).join(" "),Uo=(i,e)=>t=>t[i]===e,Ar=i=>{let e=Object.entries(i).map(([t,a])=>Uo(t,a));return t=>e.every(a=>a(t))},rt=(i,e=[],t=[])=>{let a=Ro(t).map(Ar),r=n=>a.some(s=>s(n));Array.from(e).filter(r).forEach(n=>{n.mode=i})},$e=(i,e=()=>!0)=>{if(!(i!=null&&i.textTracks))return[];let t=typeof e=="function"?e:Ar(e);return Array.from(i.textTracks).filter(t)},Ki=i=>{let e=!!i.getAttribute(o.MEDIA_CAPTIONS_SHOWING),t=!i.hasAttribute("no-subtitles-fallback")&&!!i.getAttribute(o.MEDIA_SUBTITLES_SHOWING);return e||t},Ht=i=>{var e,t,a,r;if(Ki(i)){let s=i.getAttribute(o.MEDIA_CAPTIONS_SHOWING);if(s){let c=new window.CustomEvent(p.MEDIA_DISABLE_CAPTIONS_REQUEST,{composed:!0,bubbles:!0,detail:s});i.dispatchEvent(c)}let l=i.getAttribute(o.MEDIA_SUBTITLES_SHOWING);if(l&&!i.hasAttribute("no-subtitles-fallback")){let c=new window.CustomEvent(p.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:l});i.dispatchEvent(c)}}else{let[s]=(t=Fi((e=i.getAttribute(o.MEDIA_CAPTIONS_LIST))!=null?e:""))!=null?t:[];if(s){let l=new window.CustomEvent(p.MEDIA_SHOW_CAPTIONS_REQUEST,{composed:!0,bubbles:!0,detail:s});i.dispatchEvent(l)}else if(i.hasAttribute("no-subtitles-fallback"))console.error("Attempting to enable closed captions but none are available! Please verify your media content if this is unexpected.");else{let[l]=(r=Fi((a=i.getAttribute(o.MEDIA_SUBTITLES_LIST))!=null?a:""))!=null?r:[];if(l){let c=new window.CustomEvent(p.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:l});i.dispatchEvent(c)}}}};var Ir=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},Ve=(i,e,t)=>(Ir(i,e,"read from private field"),t?t.call(i):e.get(i)),Yi=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},He=(i,e,t)=>(Ir(i,e,"access private method"),t),ue,We,lt,Kt,Gi,Oo=Object.values(xt),Mr=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],No=10,_r=0,Gt=class extends fr{constructor(){super(),Yi(this,We),Yi(this,Kt),Yi(this,ue,new Vt(this,"hotkeys")),Go||(this._airplayUnavailable=q.UNSUPPORTED),Tr||(this._fullscreenUnavailable=q.UNAVAILABLE),Zo||(this._castUnavailable=q.UNSUPPORTED),Ko||(this._pipUnavailable=q.UNSUPPORTED),st!==void 0?st||(this._volumeUnavailable=q.UNSUPPORTED):Yo.then(()=>{st||(this._volumeUnavailable=q.UNSUPPORTED,this.propagateMediaState(o.MEDIA_VOLUME_UNAVAILABLE,this._volumeUnavailable))}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associatedElements=[],this.associateElement(this);let e={MEDIA_PLAY_REQUEST:()=>this.media.play(),MEDIA_PAUSE_REQUEST:()=>this.media.pause(),MEDIA_MUTE_REQUEST:()=>this.media.muted=!0,MEDIA_UNMUTE_REQUEST:()=>{let t=this.media;t.muted=!1,t.volume===0&&(t.volume=.25)},MEDIA_VOLUME_REQUEST:t=>{let a=this.media,r=t.detail;a.volume=r,r>0&&a.muted&&(a.muted=!1);try{u.localStorage.setItem("media-chrome-pref-volume",r.toString())}catch{}},MEDIA_ENTER_FULLSCREEN_REQUEST:()=>{if(!Tr){console.warn("Fullscreen support is unavailable; not entering fullscreen");return}let t=this.media;d.pictureInPictureElement&&d.exitPictureInPicture(),super[U.enter]?super[U.enter]():t.webkitEnterFullscreen?t.webkitEnterFullscreen():t.requestFullscreen?t.requestFullscreen():console.warn("MediaChrome: Fullscreen not supported")},MEDIA_EXIT_FULLSCREEN_REQUEST:()=>{d[U.exit]()},MEDIA_ENTER_PIP_REQUEST:()=>{let t=this.media;if(!d.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!t.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}d[U.element]&&d[U.exit]();let a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};t.requestPictureInPicture().catch(r=>{if(r.code===11)if(t.readyState===0&&t.preload==="none"){let n=()=>{t.removeEventListener("loadedmetadata",s),t.preload="none"},s=()=>{t.requestPictureInPicture().catch(a),n()};t.addEventListener("loadedmetadata",s),t.preload="metadata",setTimeout(()=>{t.readyState===0&&a(),n()},1e3)}else throw r;else throw r})},MEDIA_EXIT_PIP_REQUEST:()=>{d.pictureInPictureElement&&d.exitPictureInPicture()},MEDIA_ENTER_CAST_REQUEST:()=>{var t;let a=this.media;!((t=globalThis.CastableVideoElement)!=null&&t.castEnabled)||(d[U.element]&&d[U.exit](),a.requestCast())},MEDIA_EXIT_CAST_REQUEST:async()=>{var t;(t=globalThis.CastableVideoElement)!=null&&t.castElement&&globalThis.CastableVideoElement.exitCast()},MEDIA_SEEK_REQUEST:t=>{let a=this.media,r=t.detail;(a.readyState>0||a.readyState===void 0)&&(a.currentTime=r)},MEDIA_PLAYBACK_RATE_REQUEST:t=>{this.media.playbackRate=t.detail},MEDIA_PREVIEW_REQUEST:t=>{var a;let r=this.media;if(!r)return;let n=t.detail;n===null&&this.propagateMediaState(o.MEDIA_PREVIEW_TIME,void 0),this.propagateMediaState(o.MEDIA_PREVIEW_TIME,n);let[s]=$e(r,{kind:Ue.METADATA,label:"thumbnails"});if(!(s&&s.cues))return;if(n===null){this.propagateMediaState(o.MEDIA_PREVIEW_IMAGE,void 0),this.propagateMediaState(o.MEDIA_PREVIEW_COORDS,void 0);return}let l=Array.prototype.find.call(s.cues,f=>f.startTime>=n);if(!l)return;let c=/'^(?:[a-z]+:)?\/\//i.test(l.text)||(a=r.querySelector('track[label="thumbnails"]'))==null?void 0:a.src,m=new URL(l.text,c),E=new URLSearchParams(m.hash).get("#xywh");this.propagateMediaState(o.MEDIA_PREVIEW_IMAGE,m.href),this.propagateMediaState(o.MEDIA_PREVIEW_COORDS,E.split(",").join(" "))},MEDIA_SHOW_CAPTIONS_REQUEST:t=>{let a=Yt(this),{detail:r=[]}=t;rt(_e.SHOWING,a,r)},MEDIA_DISABLE_CAPTIONS_REQUEST:t=>{let a=Yt(this),{detail:r=[]}=t;rt(_e.DISABLED,a,r)},MEDIA_SHOW_SUBTITLES_REQUEST:t=>{let a=ot(this),{detail:r=[]}=t;rt(_e.SHOWING,a,r)},MEDIA_DISABLE_SUBTITLES_REQUEST:t=>{let a=ot(this),{detail:r=[]}=t;rt(_e.DISABLED,a,r)},MEDIA_AIRPLAY_REQUEST:()=>{let{media:t}=this;if(!!t){if(!(t.webkitShowPlaybackTargetPicker&&u.WebKitPlaybackTargetAvailabilityEvent)){console.warn("received a request to select AirPlay but AirPlay is not supported in this environment");return}t.webkitShowPlaybackTargetPicker()}}};if(Object.keys(e).forEach(t=>{let a=`_handle${Rt(t,!0)}`;this[a]=r=>{if(r.stopPropagation(),!this.media){console.warn("MediaController: No media available.");return}e[t](r,this.media)},this.addEventListener(p[t],this[a])}),this._mediaStatePropagators={"play,pause,emptied":()=>{this.propagateMediaState(o.MEDIA_PAUSED,kr(this))},"playing,emptied":()=>{var t;this.propagateMediaState(o.MEDIA_HAS_PLAYED,!((t=this.media)!=null&&t.paused))},volumechange:()=>{this.propagateMediaState(o.MEDIA_MUTED,Sr(this)),this.propagateMediaState(o.MEDIA_VOLUME,Lr(this)),this.propagateMediaState(o.MEDIA_VOLUME_LEVEL,Cr(this))},[U.event]:t=>{let r=!!d[U.element]&&(t==null?void 0:t.target),n=it(this,r);this.propagateMediaState(o.MEDIA_IS_FULLSCREEN,n)},"enterpictureinpicture,leavepictureinpicture":t=>{var a;let r;if(t)r=t.type=="enterpictureinpicture";else{let n=(a=this.getRootNode().pictureInPictureElement)!=null?a:d.pictureInPictureElement;r=this.media&&it(this.media,n)}this.propagateMediaState(o.MEDIA_IS_PIP,r)},"entercast,leavecast,castchange":t=>{var a;let r=(a=globalThis.CastableVideoElement)==null?void 0:a.castElement,n=this.media&&it(this.media,r);(t==null?void 0:t.type)==="castchange"&&(t==null?void 0:t.detail)==="CONNECTING"&&(n="connecting"),this.propagateMediaState(o.MEDIA_IS_CASTING,n)},"timeupdate,loadedmetadata":()=>{this.propagateMediaState(o.MEDIA_CURRENT_TIME,wr(this))},"durationchange,loadedmetadata,emptied":()=>{this.propagateMediaState(o.MEDIA_DURATION,Dr(this)),this.propagateMediaState(o.MEDIA_STREAM_TYPE)},"loadedmetadata,emptied,progress":()=>{var t;this.propagateMediaState(o.MEDIA_SEEKABLE,(t=xr(this))==null?void 0:t.join(":"))},"progress,emptied":()=>{var t;this.propagateMediaState(o.MEDIA_BUFFERED,zo((t=this.media)==null?void 0:t.buffered))},"ratechange,loadstart":()=>{this.propagateMediaState(o.MEDIA_PLAYBACK_RATE,Rr(this))},"waiting,playing,emptied":()=>{var t;let a=((t=this.media)==null?void 0:t.readyState)<3;this.propagateMediaState(o.MEDIA_LOADING,a)}},this._airplayUnavailable!==q.UNSUPPORTED){let t=a=>{(a==null?void 0:a.availability)==="available"?this._airplayUnavailable=void 0:(a==null?void 0:a.availability)==="not-available"&&(this._airplayUnavailable=q.UNAVAILABLE),this.propagateMediaState(o.MEDIA_AIRPLAY_UNAVAILABLE,this._airplayUnavailable)};this._mediaStatePropagators.webkitplaybacktargetavailabilitychanged=t}if(this._castUnavailable!==q.UNSUPPORTED){let t=()=>{var a;let r=(a=globalThis.CastableVideoElement)==null?void 0:a.castState;r!=null&&r.includes("CONNECT")?this._castUnavailable=void 0:this._castUnavailable=q.UNAVAILABLE,this.propagateMediaState(o.MEDIA_CAST_UNAVAILABLE,this._castUnavailable)};this._mediaStatePropagators.castchange=t}this._textTrackMediaStatePropagators={"addtrack,removetrack,loadstart":()=>{this.propagateMediaState(o.MEDIA_CAPTIONS_LIST,Q(Yt(this))||void 0),this.propagateMediaState(o.MEDIA_SUBTITLES_LIST,Q(ot(this))||void 0),this.propagateMediaState(o.MEDIA_CAPTIONS_SHOWING,Q(Zi(this))||void 0),this.propagateMediaState(o.MEDIA_SUBTITLES_SHOWING,Q(yr(this))||void 0)},change:()=>{this.propagateMediaState(o.MEDIA_CAPTIONS_SHOWING,Q(Zi(this))||void 0),this.propagateMediaState(o.MEDIA_SUBTITLES_SHOWING,Q(yr(this))||void 0)}},this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat("nohotkeys","hotkeys","default-stream-type")}attributeChangedCallback(e,t,a){e==="nohotkeys"?a!==t&&a===""?(this.hasAttribute("hotkeys")&&console.warn("Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==t&&a===null&&this.enableHotkeys():e==="hotkeys"?Ve(this,ue).value=a:e==="default-stream-type"&&this.propagateMediaState(o.MEDIA_STREAM_TYPE),super.attributeChangedCallback(e,t,a)}mediaSetCallback(e){super.mediaSetCallback(e),e.hasAttribute("tabindex")||e.setAttribute("tabindex",-1),Object.keys(this._mediaStatePropagators).forEach(t=>{let a=t.split(","),r=this._mediaStatePropagators[t];a.forEach(n=>{(n==U.event?this.getRootNode():e).addEventListener(n,r)}),r()}),Object.entries(this._textTrackMediaStatePropagators).forEach(([t,a])=>{t.split(",").forEach(n=>{e.textTracks&&e.textTracks.addEventListener(n,a)}),a()});try{let t=u.localStorage.getItem("media-chrome-pref-volume");t!==null&&(e.volume=t)}catch(t){console.debug("Error getting volume pref",t)}}mediaUnsetCallback(e){super.mediaUnsetCallback(e),Object.keys(this._mediaStatePropagators).forEach(t=>{let a=t.split(","),r=this._mediaStatePropagators[t];a.forEach(n=>{(n==U.event?this.getRootNode():e).removeEventListener(n,r)})}),Object.entries(this._textTrackMediaStatePropagators).forEach(([t,a])=>{t.split(",").forEach(n=>{e.textTracks&&e.textTracks.removeEventListener(n,a)}),a()}),this.propagateMediaState(o.MEDIA_PAUSED,!0)}propagateMediaState(e,t){arguments.length===1&&(t=Wt[e](this)),Ie(this.mediaStateReceivers,e,t);let a=new u.CustomEvent(rr[e],{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(a)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=Ho(e,a,r);Object.keys(p).forEach(s=>{e.addEventListener(p[s],this[`_handle${Rt(s,!0)}`])}),t.set(e,n)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(!t.has(e))return;t.get(e)(),t.delete(e),Object.keys(p).forEach(r=>{e.removeEventListener(p[r],this[`_handle${Rt(r,!0)}`])})}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;t.indexOf(e)>-1||(t.push(e),Ie([e],o.MEDIA_VOLUME_UNAVAILABLE,this._volumeUnavailable),Ie([e],o.MEDIA_AIRPLAY_UNAVAILABLE,this._airplayUnavailable),Ie([e],o.MEDIA_FULLSCREEN_UNAVAILABLE,this._fullscreenUnavailable),Ie([e],o.MEDIA_CAST_UNAVAILABLE,this._castUnavailable),Ie([e],o.MEDIA_PIP_UNAVAILABLE,this._pipUnavailable),this.media&&Object.keys(o).forEach(r=>{r.includes("UNAVAILABLE")||Ie([e],o[r],Wt[o[r]]?Wt[o[r]](this):Wt.default(this,o[r]))}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,a=t.indexOf(e);a<0||t.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",He(this,Kt,Gi))}disableHotkeys(){this.removeEventListener("keydown",He(this,Kt,Gi)),this.removeEventListener("keyup",He(this,We,lt))}get hotkeys(){return Ve(this,ue)}keyboardShortcutHandler(e){var t,a,r,n;if(((n=(r=(t=e.target.getAttribute("keysused"))==null?void 0:t.split(" "))!=null?r:(a=e.target)==null?void 0:a.keysUsed)!=null?n:[]).map(T=>T==="Space"?" ":T).filter(Boolean).includes(e.key))return;let l,c,m,E,f,w=No;if(!Ve(this,ue).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&Ve(this,ue).contains("nospace")))switch(e.key){case" ":case"k":l=this.getAttribute(o.MEDIA_PAUSED)!=null?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new u.CustomEvent(l,{composed:!0,bubbles:!0}));break;case"m":l=this.getAttribute(o.MEDIA_VOLUME_LEVEL)==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST,this.dispatchEvent(new u.CustomEvent(l,{composed:!0,bubbles:!0}));break;case"f":l=this.getAttribute(o.MEDIA_IS_FULLSCREEN)!=null?p.MEDIA_EXIT_FULLSCREEN_REQUEST:p.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new u.CustomEvent(l,{composed:!0,bubbles:!0}));break;case"c":Ht(this);break;case"ArrowLeft":c=this.getAttribute(o.MEDIA_CURRENT_TIME),m=c&&!Number.isNaN(+c)?+c:_r,E=Math.max(m-w,0),f=new u.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:E}),this.dispatchEvent(f);break;case"ArrowRight":c=this.getAttribute(o.MEDIA_CURRENT_TIME),m=c&&!Number.isNaN(+c)?+c:_r,E=Math.max(m+w,0),f=new u.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:E}),this.dispatchEvent(f);break;default:break}}};ue=new WeakMap;We=new WeakSet;lt=function(i){let{key:e}=i;if(!Mr.includes(e)){this.removeEventListener("keyup",He(this,We,lt));return}this.keyboardShortcutHandler(i)};Kt=new WeakSet;Gi=function(i){let{metaKey:e,altKey:t,key:a}=i;if(e||t||!Mr.includes(a)){this.removeEventListener("keyup",He(this,We,lt));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(Ve(this,ue).contains(`no${a.toLowerCase()}`)||a===" "&&Ve(this,ue).contains("nospace"))&&i.preventDefault(),this.addEventListener("keyup",He(this,We,lt),{once:!0})};var Wt={default(i,e){return i.getAttribute(e)},[o.MEDIA_CAPTIONS_LIST](i){return Q(Yt(i))||void 0},[o.MEDIA_SUBTITLES_LIST](i){return Q(ot(i))||void 0},[o.MEDIA_SUBTITLES_LIST](i){return Q(ot(i))||void 0},[o.MEDIA_CAPTIONS_SHOWING](i){return Q(Zi(i))||void 0},[o.MEDIA_PAUSED](i){return kr(i)},[o.MEDIA_MUTED](i){return Sr(i)},[o.MEDIA_VOLUME](i){return Lr(i)},[o.MEDIA_VOLUME_LEVEL](i){return Cr(i)},[o.MEDIA_CURRENT_TIME](i){return wr(i)},[o.MEDIA_DURATION](i){return Dr(i)},[o.MEDIA_SEEKABLE](i){var e;return(e=xr(i))==null?void 0:e.join(":")},[o.MEDIA_PLAYBACK_RATE](i){return Rr(i)},[o.MEDIA_STREAM_TYPE](i){let e=i.media;if(!e)return;let t=e.duration;if(t===1/0)return xt.LIVE;if(Number.isFinite(t))return xt.ON_DEMAND;{let a=i.getAttribute("default-stream-type");if(Oo.includes(a))return a}return null}},kr=i=>i.media?i.media.paused:!0,Sr=i=>!!(i.media&&i.media.muted),Lr=i=>{let e=i.media;return e?e.volume:1},Cr=i=>{let e="high";if(!i.media)return e;let{muted:t,volume:a}=i.media;return a===0||t?e="off":a<.5?e="low":a<.75&&(e="medium"),e},wr=i=>{let e=i.media;return e?e.currentTime:0},Dr=i=>{let e=i==null?void 0:i.media;return Number.isFinite(e==null?void 0:e.duration)?e.duration:NaN},xr=i=>{var e;let t=i==null?void 0:i.media;if(!((e=t==null?void 0:t.seekable)!=null&&e.length))return;let a=t.seekable.start(0),r=t.seekable.end(t.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},Rr=i=>{let e=i.media;return e?e.playbackRate:1},ot=i=>$e(i.media,{kind:Ue.SUBTITLES}),Yt=i=>$e(i.media,{kind:Ue.CAPTIONS}),yr=i=>$e(i.media,{kind:Ue.SUBTITLES,mode:_e.SHOWING}),Zi=i=>$e(i.media,{kind:Ue.CAPTIONS,mode:_e.SHOWING}),Bo=Object.values(o),Pr=i=>{var e,t,a,r;let{observedAttributes:n}=i.constructor;!n&&((e=i.nodeName)==null?void 0:e.includes("-"))&&(u.customElements.upgrade(i),{observedAttributes:n}=i.constructor);let s=(r=(a=(t=i==null?void 0:i.getAttribute)==null?void 0:t.call(i,A.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(l=>Bo.includes(l)):[]},qi=i=>!!Pr(i).length,$o=async(i,e,t)=>(i.isConnected||await Ur(0),t==null?i.removeAttribute(e):typeof t=="boolean"?t?i.setAttribute(e,""):i.removeAttribute(e):Number.isNaN(t)?i.removeAttribute(e):i.setAttribute(e,t)),Vo=i=>{var e;return!!((e=i.closest)!=null&&e.call(i,'*[slot="media"]'))},nt=(i,e)=>{if(Vo(i))return;let t=(r,n)=>{var s,l;qi(r)&&n(r);let{children:c=[]}=r!=null?r:{},m=(l=(s=r==null?void 0:r.shadowRoot)==null?void 0:s.children)!=null?l:[];[...c,...m].forEach(f=>nt(f,n))},a=i==null?void 0:i.nodeName.toLowerCase();if(a.includes("-")&&!qi(i)){u.customElements.whenDefined(a).then(()=>{t(i,e)});return}t(i,e)},Ie=(i,e,t)=>{i.forEach(a=>{!Pr(a).includes(e)||$o(a,e,t)})},Ho=(i,e,t)=>{nt(i,e);let a=c=>{var m;let E=(m=c==null?void 0:c.composedPath()[0])!=null?m:c.target;e(E)},r=c=>{var m;let E=(m=c==null?void 0:c.composedPath()[0])!=null?m:c.target;t(E)};i.addEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,a),i.addEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=c=>{c.forEach(m=>{let{addedNodes:E=[],removedNodes:f=[],type:w,target:T,attributeName:P}=m;w==="childList"?(Array.prototype.forEach.call(E,M=>nt(M,e)),Array.prototype.forEach.call(f,M=>nt(M,t))):w==="attributes"&&P===A.MEDIA_CHROME_ATTRIBUTES&&(qi(T)?e(T):t(T))})},s=new MutationObserver(n);return s.observe(i,{childList:!0,attributes:!0,subtree:!0}),()=>{nt(i,t),s.disconnect(),i.removeEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,a),i.removeEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,r)}},Ft,Qi=()=>{var i,e;return Ft||(Ft=(e=(i=d)==null?void 0:i.createElement)==null?void 0:e.call(i,"video"),Ft)},Wo=async(i=Qi())=>{if(!i)return!1;let e=i.volume;return i.volume=e/2+.1,await Ur(0),i.volume!==e},Ur=i=>new Promise(e=>setTimeout(e,i)),Fo=(i=Qi())=>typeof(i==null?void 0:i.requestPictureInPicture)=="function",Ko=Fo(),st,Yo=Wo().then(i=>(st=i,st)),Go=!!u.WebKitPlaybackTargetAvailabilityEvent,Zo=!!u.chrome,qo=(i=Qi())=>{let e=d[U.enabled];return!e&&i&&(e="webkitSupportsFullscreen"in i),e},Tr=qo(),Qo=Object.freeze({length:0,start(i){let e=i>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(i){let e=i>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function zo(i=Qo){return Array.from(i).map((e,t)=>[Number(i.start(t).toFixed(3)),Number(i.end(t).toFixed(3))].join(":")).join(" ")}h("media-controller",Gt);var dt=Gt;var Nr=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},Xo=(i,e,t)=>(Nr(i,e,"read from private field"),t?t.call(i):e.get(i)),jo=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},Jo=(i,e,t,a)=>(Nr(i,e,"write to private field"),a?a.call(i,t):e.set(i,t),t),Zt,Br=d.createElement("template"),Or=`
  height: var(--thumb-height);
  width: var(--media-range-thumb-width, 10px);
  border: var(--media-range-thumb-border, none);
  border-radius: var(--media-range-thumb-border-radius, 10px);
  background: var(--media-range-thumb-background, #fff);
  box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
  cursor: pointer;
  transition: var(--media-range-thumb-transition, none);
  transform: var(--media-range-thumb-transform, none);
  opacity: var(--media-range-thumb-opacity, 1);
`,zi=`
  width: var(--media-range-track-width, 100%);
  min-width: 40px;
  height: var(--track-height);
  border: var(--media-range-track-border, none);
  outline: var(--media-range-track-outline);
  outline-offset: var(--media-range-track-outline-offset);
  border-radius: var(--media-range-track-border-radius, 0);
  background: var(--media-range-track-progress-internal, var(--media-range-track-background, #eee));
  box-shadow: var(--media-range-track-box-shadow, none);
  transition: var(--media-range-track-transition, none);
  transform: translate(var(--media-range-track-translate-x, 0), var(--media-range-track-translate-y, 0));
  cursor: pointer;
`;Br.innerHTML=`
  <style>
    :host {
      --thumb-height: var(--media-range-thumb-height, 10px);
      --track-height: var(--media-range-track-height, 4px);
      --media-range-padding: var(--media-control-padding, 10px);
      --_media-range-padding: var(--media-range-padding, 10px);

      vertical-align: middle;
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      background: var(--media-control-background, rgba(20,20,30, 0.7));
      transition: background 0.15s linear;
      width: 100px;
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      pointer-events: auto;
      
      font-size: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgba(50,50,60, 0.7));
    }

    #container {
      position: relative;
      height: 100%;
    }

    input[type=range] {
      
      -webkit-appearance: none; 
      background: transparent; 

      
      min-height: 100%;
      width: var(--media-range-track-width, 100%); 

      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${Or}
      
      margin-top: calc(calc(0px - var(--thumb-height) + var(--track-height)) / 2);
    }

    
    input[type=range]::-moz-range-thumb {
      ${Or}
      translate: var(--media-range-track-translate-x, 0) var(--media-range-track-translate-y, 0);
    }

    input[type=range]::-webkit-slider-runnable-track { ${zi} }
    input[type=range]::-moz-range-track { ${zi} }
    input[type=range]::-ms-track {
      
      width: 100%;
      cursor: pointer;
      
      background: transparent;
      border-color: transparent;
      color: transparent;

      ${zi}
    }

    #background,
    #pointer {
      min-width: 40px;
      width: var(--media-range-track-width, 100%);
      height: var(--track-height);
      border-radius: var(--media-range-track-border-radius, 0);
      position: absolute;
      top: 50%;
      transform: translate(var(--media-range-track-translate-x, 0px), calc(var(--media-range-track-translate-y, 0px) - 50%));
      background: var(--media-range-track-background, #333);
    }

    #pointer {
      min-width: auto;
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    :host(:hover) #pointer {
      transition: visibility .5s, opacity .5s;
      visibility: visible;
      opacity: 1;
    }

    #hoverzone {
      
      z-index: 1;
      display: var(--media-time-range-hover-display, none);
      position: absolute;
      width: 100%;
      bottom: var(--media-time-range-hover-bottom, -5px);
      height: var(--media-time-range-hover-height, max(calc(100% + 5px), 20px));
    }

    #range {
      z-index: 2;
      position: relative;
      height: var(--media-range-track-height, 4px);
    }

    
    :host-context([media-keyboard-control]):host(:focus),
    :host-context([media-keyboard-control]):host(:focus-within) {
      box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
    }
    :host-context([media-keyboard-control]) input[type=range]:focus-visible {
      box-shadow: none;
    }
    input[type=range]:focus-visible {
      box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
    }
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    input[type=range]:disabled::-webkit-slider-thumb {
      background-color: #777;
    }

    input[type=range]:disabled::-webkit-slider-runnable-track {
      background-color: #777;
    }
  </style>
  <div id="container">
    <div id="background"></div>
    <div id="pointer"></div>
    <div id="hoverzone"></div>
    <input id="range" type="range" min="0" max="1000" step="any" value="0">
  </div>
`;var qt=class extends u.HTMLElement{constructor(){super(),jo(this,Zt,void 0),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Br.content.cloneNode(!0)),this.container=this.shadowRoot.querySelector("#container"),this.range=this.shadowRoot.querySelector("#range"),this.range.addEventListener("input",this.updateBar.bind(this)),Jo(this,Zt,parseInt(getComputedStyle(this).getPropertyValue("--media-range-thumb-width")||"10",10))}static get observedAttributes(){return["disabled","aria-disabled",A.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,a){var r,n;if(e===A.MEDIA_CONTROLLER){if(t){let s=d.getElementById(t);(r=s==null?void 0:s.unassociateElement)==null||r.call(s,this)}if(a){let s=d.getElementById(a);(n=s==null?void 0:s.associateElement)==null||n.call(s,this)}}else(e==="disabled"||e==="aria-disabled"&&t!==a)&&(a==null?this.range.removeAttribute(e):this.range.setAttribute(e,a))}connectedCallback(){var e;let t=this.getAttribute(A.MEDIA_CONTROLLER);if(t){let a=d.getElementById(t);(e=a==null?void 0:a.associateElement)==null||e.call(a,this)}this.updateBar()}disconnectedCallback(){var e;let t=this.getAttribute(A.MEDIA_CONTROLLER);if(t){let a=d.getElementById(t);(e=a==null?void 0:a.unassociateElement)==null||e.call(a,this)}}updatePointerBar(e){let t=this.range.getBoundingClientRect(),a=(e.clientX-t.left)/t.width;a=Math.max(0,Math.min(1,a));let{style:r}=ae(this.shadowRoot,"#pointer");r.setProperty("width",`${a*t.width}px`)}updateBar(){let e=this.getBarColors(),t="linear-gradient(to right, ",a=0;e.forEach(n=>{n[1]<a||(t=t+`${n[0]} ${a}%, ${n[0]} ${n[1]}%,`,a=n[1])}),t=t.slice(0,t.length-1)+")";let{style:r}=ae(this.shadowRoot,"#range");r.setProperty("--media-range-track-progress-internal",t)}getBarColors(){let e=this.range,t=e.value-e.min,a=e.max-e.min,r=t/a*100,n=0;return e.value>e.min&&e.value<e.max&&(n=Xo(this,Zt)*(.5-r/100)/e.offsetWidth*100),[["var(--media-range-bar-color, #fff)",r+n],["transparent",100]]}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};Zt=new WeakMap;h("media-chrome-range",qt);var ut=qt;var $r=d.createElement("template");$r.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: inline-flex;
      color: var(--media-icon-color, #eee);
      --media-loading-icon-width: 44px;
    }

    media-time-range,
    ::slotted(media-time-range),
    ::slotted(media-progress-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;var Xi=class extends u.HTMLElement{static get observedAttributes(){return[A.MEDIA_CONTROLLER]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild($r.content.cloneNode(!0))}attributeChangedCallback(e,t,a){var r,n;if(e===A.MEDIA_CONTROLLER){if(t){let s=d.getElementById(t);(r=s==null?void 0:s.unassociateElement)==null||r.call(s,this)}if(a){let s=d.getElementById(a);(n=s==null?void 0:s.associateElement)==null||n.call(s,this)}}}connectedCallback(){var e;let t=this.getAttribute(A.MEDIA_CONTROLLER);if(t){let a=d.getElementById(t);(e=a==null?void 0:a.associateElement)==null||e.call(a,this)}}disconnectedCallback(){var e;let t=this.getAttribute(A.MEDIA_CONTROLLER);if(t){let a=d.getElementById(t);(e=a==null?void 0:a.unassociateElement)==null||e.call(a,this)}}};h("media-control-bar",Xi);var Vr=d.createElement("template");Vr.innerHTML=`
  <style>
    :host {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      background: var(--media-control-background, rgba(20,20,30, 0.7));
  
      padding: var(--media-control-padding, 10px);

      font-size: 14px;
      line-height: var(--media-text-content-height, var(--media-control-height, 24px));
      font-family: Arial, sans-serif;
      text-align: center;
      color: #ffffff;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <span id="container">
  <slot></slot>
  </span>
`;var Qt=class extends u.HTMLElement{static get observedAttributes(){return[A.MEDIA_CONTROLLER]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Vr.content.cloneNode(!0)),this.container=this.shadowRoot.querySelector("#container")}attributeChangedCallback(e,t,a){var r,n;if(e===A.MEDIA_CONTROLLER){if(t){let s=d.getElementById(t);(r=s==null?void 0:s.unassociateElement)==null||r.call(s,this)}if(a){let s=d.getElementById(a);(n=s==null?void 0:s.associateElement)==null||n.call(s,this)}}}connectedCallback(){var e;let t=this.getAttribute(A.MEDIA_CONTROLLER);if(t){let a=d.getElementById(t);(e=a==null?void 0:a.associateElement)==null||e.call(a,this)}}disconnectedCallback(){var e;let t=this.getAttribute(A.MEDIA_CONTROLLER);if(t){let a=d.getElementById(t);(e=a==null?void 0:a.unassociateElement)==null||e.call(a,this)}}};h("media-text-display",Qt);var ce=Qt;var ji=class extends ce{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_CURRENT_TIME]}attributeChangedCallback(e,t,a){e===o.MEDIA_CURRENT_TIME&&(this.container.innerHTML=j(a)),super.attributeChangedCallback(e,t,a)}};h("media-current-time-display",ji);var Ji=class extends ce{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_DURATION]}attributeChangedCallback(e,t,a){e===o.MEDIA_DURATION&&(this.container.innerHTML=j(a)),super.attributeChangedCallback(e,t,a)}};h("media-duration-display",Ji);var es="&nbsp;/&nbsp;",ts=(i,{timesSep:e=es}={})=>{var t,a,r;let n=i.getAttribute("remaining")!=null,s=i.getAttribute("show-duration")!=null,l=(t=i.mediaCurrentTime)!=null?t:0,c=(r=(a=i.mediaDuration)!=null?a:i.mediaSeekableEnd)!=null?r:0,m=n?j(0-(c-l)):j(l);return s?`${m}${e}${j(c)}`:m},is="video not loaded, unknown time.",as=i=>{let e=i.mediaCurrentTime,t=i.mediaDuration||i.mediaSeekableEnd;if(e==null||t==null){i.setAttribute("aria-valuetext",is);return}let a=i.hasAttribute("remaining"),r=i.hasAttribute("show-duration"),n=a?ye(0-(t-e)):ye(e);if(!r){i.setAttribute("aria-valuetext",n);return}let s=ye(t),l=`${n} of ${s}`;i.setAttribute("aria-valuetext",l)},ea=class extends ce{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_CURRENT_TIME,o.MEDIA_DURATION,o.MEDIA_SEEKABLE,"remaining","show-duration","disabled"]}constructor(){super()}connectedCallback(){this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",B.PLAYBACK_TIME()),super.connectedCallback()}disconnectedCallback(){this.disable()}attributeChangedCallback(e,t,a){if([o.MEDIA_CURRENT_TIME,o.MEDIA_DURATION,o.MEDIA_SEEKABLE,"remaining","show-duration"].includes(e)){let r=ts(this);as(this),this.container.innerHTML=r}else e==="disabled"&&a!==t&&(a==null?this.enable():this.disable());super.attributeChangedCallback(e,t,a)}enable(){this.setAttribute("tabindex",0)}disable(){this.removeAttribute("tabindex")}get mediaDuration(){let e=this.getAttribute(o.MEDIA_DURATION);return e!=null?+e:void 0}get mediaCurrentTime(){let e=this.getAttribute(o.MEDIA_CURRENT_TIME);return e!=null?+e:void 0}get mediaSeekable(){let e=this.getAttribute(o.MEDIA_SEEKABLE);if(!!e)return e.split(":").map(t=>+t)}get mediaSeekableEnd(){var e;let[,t]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaSeekableStart(){var e;let[t]=(e=this.mediaSeekable)!=null?e:[];return t}};h("media-time-display",ea);var rs=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,ns=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,Wr=d.createElement("template");Wr.innerHTML=`
  <style>
  :host([aria-checked="true"]) slot:not([name=on]) > *,
  :host([aria-checked="true"]) ::slotted(:not([slot=on])) {
    display: none !important;
  }

  
  :host(:not([aria-checked="true"])) slot:not([name=off]) > *, 
  :host(:not([aria-checked="true"])) ::slotted(:not([slot=off])) {
    display: none !important;
  }
  </style>

  <slot name="on">${rs}</slot>
  <slot name="off">${ns}</slot>
`;var Hr=i=>{i.setAttribute("aria-checked",Ki(i))},ta=class extends x{static get observedAttributes(){return[...super.observedAttributes,"no-subtitles-fallback","default-showing",o.MEDIA_CAPTIONS_LIST,o.MEDIA_CAPTIONS_SHOWING,o.MEDIA_SUBTITLES_LIST,o.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:Wr,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",B.CLOSED_CAPTIONS()),Hr(this)}attributeChangedCallback(e,t,a){if([o.MEDIA_CAPTIONS_SHOWING,o.MEDIA_SUBTITLES_SHOWING].includes(e)&&Hr(this),this.hasAttribute("default-showing")&&this.getAttribute("aria-checked")!=="true"){let r=!this.hasAttribute("no-subtitles-fallback");if((r?[o.MEDIA_CAPTIONS_LIST,o.MEDIA_SUBTITLES_LIST]:[o.MEDIA_CAPTIONS_LIST]).includes(e)){let s=!!this.getAttribute(o.MEDIA_CAPTIONS_LIST)||!!(r&&this.getAttribute(o.MEDIA_SUBTITLES_LIST));this._captionsReady!==s&&(this._captionsReady=s,this._captionsReady&&this.handleClick())}}super.attributeChangedCallback(e,t,a)}handleClick(){Ht(this)}};h("media-captions-button",ta);var ia="30",os=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">${ia}</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg>`,Yr=d.createElement("template");Yr.innerHTML=`  
  <slot name="forward">${os}</slot>
`;var ss=0,Fr=i=>{let e=Math.abs(+i.getAttribute("seek-offset")),t=C.SEEK_FORWARD_N_SECS({seekOffset:e});i.setAttribute("aria-label",t)},Kr=i=>{let e=Bt(i,"forward"),t=i.getAttribute("seek-offset");Nt(e,t)},aa=class extends x{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_CURRENT_TIME,"seek-offset"]}constructor(e={}){super({slotTemplate:Yr,...e})}connectedCallback(){this.hasAttribute("seek-offset")||this.setAttribute("seek-offset",ia),Fr(this),Kr(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e==="seek-offset"&&(a==null&&this.setAttribute("seek-offset",ia),Kr(this),Fr(this)),super.attributeChangedCallback(e,t,a)}handleClick(){let e=this.getAttribute(o.MEDIA_CURRENT_TIME),t=+this.getAttribute("seek-offset"),r=(e&&!Number.isNaN(+e)?+e:ss)+t,n=new u.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}};h("media-seek-forward-button",aa);var ls=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,ds=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,Zr=d.createElement("template");Zr.innerHTML=`
  <style>
  :host([${o.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]) > *,
  :host([${o.MEDIA_IS_FULLSCREEN}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  
  :host(:not([${o.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]) > *,
  :host(:not([${o.MEDIA_IS_FULLSCREEN}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${ls}</slot>
  <slot name="exit">${ds}</slot>
`;var Gr=i=>{let t=i.getAttribute(o.MEDIA_IS_FULLSCREEN)!=null?C.EXIT_FULLSCREEN():C.ENTER_FULLSCREEN();i.setAttribute("aria-label",t)},ra=class extends x{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_FULLSCREEN,o.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:Zr,...e})}connectedCallback(){Gr(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e===o.MEDIA_IS_FULLSCREEN&&Gr(this),super.attributeChangedCallback(e,t,a)}handleClick(){let e=this.getAttribute(o.MEDIA_IS_FULLSCREEN)!=null?p.MEDIA_EXIT_FULLSCREEN_REQUEST:p.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new u.CustomEvent(e,{composed:!0,bubbles:!0}))}};h("media-fullscreen-button",ra);var us=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,qr=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,cs=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,zr=d.createElement("template");zr.innerHTML=`
  <style>
  
  :host(:not([${o.MEDIA_VOLUME_LEVEL}])) slot:not([name=high]) > *, 
  :host(:not([${o.MEDIA_VOLUME_LEVEL}])) ::slotted(:not([slot=high])),
  :host([${o.MEDIA_VOLUME_LEVEL}=high]) slot:not([name=high]) > *, 
  :host([${o.MEDIA_VOLUME_LEVEL}=high]) ::slotted(:not([slot=high])) {
    display: none !important;
  }

  :host([${o.MEDIA_VOLUME_LEVEL}=off]) slot:not([name=off]) > *, 
  :host([${o.MEDIA_VOLUME_LEVEL}=off]) ::slotted(:not([slot=off])) {
    display: none !important;
  }

  :host([${o.MEDIA_VOLUME_LEVEL}=low]) slot:not([name=low]) > *, 
  :host([${o.MEDIA_VOLUME_LEVEL}=low]) ::slotted(:not([slot=low])) {
    display: none !important;
  }

  :host([${o.MEDIA_VOLUME_LEVEL}=medium]) slot:not([name=medium]) > *, 
  :host([${o.MEDIA_VOLUME_LEVEL}=medium]) ::slotted(:not([slot=medium])) {
    display: none !important;
  }
  </style>

  <slot name="off">${us}</slot>
  <slot name="low">${qr}</slot>
  <slot name="medium">${qr}</slot>
  <slot name="high">${cs}</slot>
`;var Qr=i=>{let t=i.getAttribute(o.MEDIA_VOLUME_LEVEL)==="off"?C.UNMUTE():C.MUTE();i.setAttribute("aria-label",t)},na=class extends x{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:zr,...e})}connectedCallback(){Qr(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e===o.MEDIA_VOLUME_LEVEL&&Qr(this),super.attributeChangedCallback(e,t,a)}handleClick(){let e=this.getAttribute(o.MEDIA_VOLUME_LEVEL)==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST;this.dispatchEvent(new u.CustomEvent(e,{composed:!0,bubbles:!0}))}};h("media-mute-button",na);var Xr=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,Jr=d.createElement("template");Jr.innerHTML=`
  <style>
  :host([${o.MEDIA_IS_PIP}]) slot:not([name=exit]) > *, 
  :host([${o.MEDIA_IS_PIP}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  
  :host(:not([${o.MEDIA_IS_PIP}])) slot:not([name=enter]) > *, 
  :host(:not([${o.MEDIA_IS_PIP}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${Xr}</slot>
  <slot name="exit">${Xr}</slot>
`;var jr=i=>{let t=i.getAttribute(o.MEDIA_IS_PIP)!=null?C.EXIT_PIP():C.ENTER_PIP();i.setAttribute("aria-label",t)},oa=class extends x{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_PIP,o.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:Jr,...e})}connectedCallback(){jr(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e===o.MEDIA_IS_PIP&&jr(this),super.attributeChangedCallback(e,t,a)}handleClick(){let e=this.getAttribute(o.MEDIA_IS_PIP)!=null?p.MEDIA_EXIT_PIP_REQUEST:p.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new u.CustomEvent(e,{composed:!0,bubbles:!0}))}};h("media-pip-button",oa);var ms=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,hs=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,tn=d.createElement("template");tn.innerHTML=`
  <style>
  :host([${o.MEDIA_PAUSED}]) slot[name=pause] > *, 
  :host([${o.MEDIA_PAUSED}]) ::slotted([slot=pause]) {
    display: none !important;
  }

  :host(:not([${o.MEDIA_PAUSED}])) slot[name=play] > *, 
  :host(:not([${o.MEDIA_PAUSED}])) ::slotted([slot=play]) {
    display: none !important;
  }
  </style>

  <slot name="play">${ms}</slot>
  <slot name="pause">${hs}</slot>
`;var en=i=>{let t=i.getAttribute(o.MEDIA_PAUSED)!=null?C.PLAY():C.PAUSE();i.setAttribute("aria-label",t)},sa=class extends x{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PAUSED]}constructor(e={}){super({slotTemplate:tn,...e})}connectedCallback(){en(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e===o.MEDIA_PAUSED&&en(this),super.attributeChangedCallback(e,t,a)}handleClick(){let e=this.getAttribute(o.MEDIA_PAUSED)!=null?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new u.CustomEvent(e,{composed:!0,bubbles:!0}))}};h("media-play-button",sa);var an=[1,1.25,1.5,1.75,2],zt=1,rn=d.createElement("template");rn.innerHTML=`
  <span id="container"></span>
`;var la=class extends x{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PLAYBACK_RATE,"rates"]}constructor(e={}){super({slotTemplate:rn,...e}),this._rates=an,this.container=this.shadowRoot.querySelector("#container"),this.container.innerHTML=`${zt}x`}attributeChangedCallback(e,t,a){if(e==="rates"){let r=(a!=null?a:"").trim().split(/\s*,?\s+/).map(n=>Number(n)).filter(n=>!Number.isNaN(n)).sort((n,s)=>n-s);this._rates=r.length?r:an;return}if(e===o.MEDIA_PLAYBACK_RATE){let r=a?+a:Number.NaN,n=Number.isNaN(r)?zt:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",B.PLAYBACK_RATE({playbackRate:n}));return}super.attributeChangedCallback(e,t,a)}handleClick(){var e,t;let a=+this.getAttribute(o.MEDIA_PLAYBACK_RATE)||zt,r=(t=(e=this._rates.find(s=>s>a))!=null?e:this._rates[0])!=null?t:zt,n=new u.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}};h("media-playback-rate-button",la);var nn=d.createElement("template");nn.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: inline-block;
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-background-position, var(--media-object-position, center));
      background-size: var(--media-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }

    :host([${o.MEDIA_HAS_PLAYED}]) img {
      display: none;
    }
  </style>

  <img aria-hidden="true" id="image"/>
`;var ps=i=>{i.style.removeProperty("background-image")},bs=(i,e)=>{i.style["background-image"]=`url('${e}')`},da=class extends u.HTMLElement{static get observedAttributes(){return[o.MEDIA_HAS_PLAYED,"placeholder-src","src"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(nn.content.cloneNode(!0)),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,a){e==="src"&&(a==null?this.image.removeAttribute("src"):this.image.setAttribute("src",a)),e==="placeholder-src"&&(a==null?ps(this.image):bs(this.image,a))}};h("media-poster-image",da);var ba=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},O=(i,e,t)=>(ba(i,e,"read from private field"),t?t.call(i):e.get(i)),Y=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},me=(i,e,t,a)=>(ba(i,e,"write to private field"),a?a.call(i,t):e.set(i,t),t),ct=(i,e,t)=>(ba(i,e,"access private method"),t),mt,Xt,ht,ti,ii,jt,ca,Jt,Fe,pt,ma,ai,ni,ei,ha,pa,on,Es="video not loaded, unknown time.",ua=i=>{let e=i.range,t=ye(+e.value),a=ye(+e.max),r=t&&a?`${t} of ${a}`:Es;e.setAttribute("aria-valuetext",r)},sn=d.createElement("template");sn.innerHTML=`
  <style>
    :host {
      --media-preview-background-color: rgba(20,20,30, .5);
      --media-preview-background: var(--media-control-background,
        var(--media-preview-background-color));
      --media-preview-border-radius: 3px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      color: #fff;
    }

    #preview-rail,
    #current-rail {
      
      width: 1%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
    }

    [part~="box"] {
      
      position: absolute;
      bottom: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="preview-box"] {
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      transition: visibility 0s .25s;
      background: var(--media-preview-time-background, var(--media-preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgba(0,0,0, .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${o.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
    :host([${o.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
      transition-delay: 0s;
      visibility: visible;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display) {
      color: unset;
      min-width: 0;
      
      transition: min-width 0s .25s, border-radius 0s .25s;
      background: var(--media-preview-time-background, var(--media-preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 1px 10px 0);
      margin: var(--media-preview-time-margin, 0 0 10px);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgba(0,0,0, .75));
    }

    :host([${o.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${o.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: 0s;
      min-width: 100%;
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
    }

    :host([${o.MEDIA_PREVIEW_IMAGE}]:hover) [part~="preview-box"],
    :host([${o.MEDIA_PREVIEW_TIME}]:hover) [part~="preview-box"] {
      transition: visibility .5s, opacity .5s;
      visibility: visible;
      opacity: 1;
    }

    :host([${o.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-time-display></media-preview-time-display>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;var ri=class extends ut{constructor(){super(),Y(this,jt),Y(this,ei),Y(this,pa),Y(this,mt,void 0),Y(this,Xt,void 0),Y(this,ht,void 0),Y(this,ti,void 0),Y(this,ii,void 0),Y(this,Jt,t=>{if([...O(this,mt)].some(E=>t.composedPath().includes(E)))return;this.updatePointerBar(t);let a=+this.getAttribute(o.MEDIA_DURATION);if(!a)return;let r=this.range.getBoundingClientRect(),n=(t.clientX-r.left)/r.width;n=Math.max(0,Math.min(1,n));let s=ct(this,jt,ca).call(this,O(this,Xt),n),{style:l}=ae(this.shadowRoot,"#preview-rail");l.transform=`translateX(${s})`;let c=n*a,m=new u.CustomEvent(p.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:c});this.dispatchEvent(m)}),Y(this,Fe,!1),Y(this,pt,t=>{(!t.composedPath().includes(this)||[...O(this,mt)].some(a=>t.composedPath().includes(a)))&&(u.removeEventListener("pointermove",O(this,pt)),me(this,Fe,!1),O(this,ai).call(this))}),Y(this,ma,()=>{u.addEventListener("pointermove",O(this,Jt),!1)}),Y(this,ai,()=>{u.removeEventListener("pointermove",O(this,Jt));let t=new u.CustomEvent(p.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:null});this.dispatchEvent(t)}),Y(this,ni,()=>{let t=this.getAttribute(o.MEDIA_DURATION);!O(this,Fe)&&t&&(me(this,Fe,!0),O(this,ma).call(this),u.addEventListener("pointermove",O(this,pt),!1))}),this.container.appendChild(sn.content.cloneNode(!0)),this.range.addEventListener("input",()=>{cancelAnimationFrame(this._refreshId);let a=this.range.value,r=new u.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}),this._refreshBar=()=>{let t=(performance.now()-this._updateTimestamp)/1e3;this.range.value=this.mediaCurrentTime+t*this.mediaPlaybackRate,this.updateBar(),this.updateCurrentBox(),this._refreshId=requestAnimationFrame(this._refreshBar)},me(this,mt,this.shadowRoot.querySelectorAll('[part~="box"]')),me(this,Xt,this.shadowRoot.querySelector('[part~="preview-box"]')),me(this,ht,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);me(this,ti,parseInt(e.getPropertyValue("--media-box-padding-left"))),me(this,ii,parseInt(e.getPropertyValue("--media-box-padding-right"))),ct(this,ei,ha).call(this)}static get observedAttributes(){return[...super.observedAttributes,"thumbnails","disabled",o.MEDIA_PAUSED,o.MEDIA_DURATION,o.MEDIA_SEEKABLE,o.MEDIA_CURRENT_TIME,o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_TIME,o.MEDIA_BUFFERED,o.MEDIA_PLAYBACK_RATE,o.MEDIA_LOADING]}connectedCallback(){this.range.setAttribute("aria-label",B.SEEK()),super.connectedCallback()}disconnectedCallback(){cancelAnimationFrame(this._refreshId),super.disconnectedCallback()}attributeChangedCallback(e,t,a){var r,n,s,l,c;(e===o.MEDIA_CURRENT_TIME||e===o.MEDIA_PAUSED||e===o.MEDIA_LOADING)&&(this._updateTimestamp=performance.now(),this.range.value=this.mediaCurrentTime,ua(this),this.updateBar(),this.updateCurrentBox(),cancelAnimationFrame(this._refreshId),!this.mediaPaused&&!this.mediaLoading&&(this._refreshId=requestAnimationFrame(this._refreshBar))),e===o.MEDIA_DURATION&&(this.range.max=Math.floor((n=(r=this.mediaSeekableEnd)!=null?r:this.mediaDuration)!=null?n:1e3),ua(this),this.updateBar(),this.updateCurrentBox()),e===o.MEDIA_SEEKABLE&&(this.range.min=(s=this.mediaSeekableStart)!=null?s:0,this.range.max=Math.floor((c=(l=this.mediaSeekableEnd)!=null?l:this.mediaDuration)!=null?c:1e3),ua(this),this.updateBar()),e===o.MEDIA_BUFFERED&&this.updateBar(),e==="disabled"&&(a==null?ct(this,ei,ha).call(this):ct(this,pa,on).call(this)),super.attributeChangedCallback(e,t,a)}get mediaPaused(){return this.hasAttribute(o.MEDIA_PAUSED)}get mediaLoading(){return this.hasAttribute(o.MEDIA_LOADING)}get mediaDuration(){let e=this.getAttribute(o.MEDIA_DURATION);return e!=null?+e:void 0}get mediaCurrentTime(){let e=this.getAttribute(o.MEDIA_CURRENT_TIME);return e!=null?+e:void 0}get mediaPlaybackRate(){let e=this.getAttribute(o.MEDIA_PLAYBACK_RATE);return e!=null?+e:1}get mediaBuffered(){let e=this.getAttribute(o.MEDIA_BUFFERED);return e?e.split(" ").map(t=>t.split(":").map(a=>+a)):[]}get mediaSeekable(){let e=this.getAttribute(o.MEDIA_SEEKABLE);if(!!e)return e.split(":").map(t=>+t)}get mediaSeekableEnd(){var e;let[,t]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaSeekableStart(){var e;let[t]=(e=this.mediaSeekable)!=null?e:[];return t}getBarColors(){var e;let t=super.getBarColors(),{range:a}=this,r=a.max-a.min,n=this.mediaBuffered;if(!n.length||!Number.isFinite(r)||r<=0)return t;let s=this.mediaCurrentTime,[,l=a.min]=(e=n.find(([E,f])=>E<=s&&s<=f))!=null?e:[],m=(l-a.min)/r*100;return t.splice(1,0,["var(--media-time-buffered-color, rgba(255,255,255, .4))",m]),t}updateCurrentBox(){if(!O(this,ht).assignedElements().length)return;let e=this.range.value/(this.range.max-this.range.min),t=ct(this,jt,ca).call(this,O(this,ht),e),{style:a}=ae(this.shadowRoot,"#current-rail");a.transform=`translateX(${t})`}};mt=new WeakMap;Xt=new WeakMap;ht=new WeakMap;ti=new WeakMap;ii=new WeakMap;jt=new WeakSet;ca=function(i,e){var t;let a=`${e*100*100}%`,r=i.offsetWidth;if(!r)return a;let n=(t=this.getAttribute("bounds")?at(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?t:this,s=this.range.getBoundingClientRect(),l=n.getBoundingClientRect(),c=(O(this,ti)-(s.left-l.left-r/2))/s.width*100,m=(l.right-s.left-r/2-O(this,ii))/s.width*100;return Number.isNaN(c)||(a=`max(${c*100}%, ${a})`),Number.isNaN(m)||(a=`min(${a}, ${m*100}%)`),a};Jt=new WeakMap;Fe=new WeakMap;pt=new WeakMap;ma=new WeakMap;ai=new WeakMap;ni=new WeakMap;ei=new WeakSet;ha=function(){this.addEventListener("pointermove",O(this,ni),!1)};pa=new WeakSet;on=function(){u.removeEventListener("pointermove",O(this,pt)),this.removeEventListener("pointermove",O(this,ni)),me(this,Fe,!1),O(this,ai).call(this)};h("media-time-range",ri);var Ea=ri;var fa=class extends Ea{constructor(){super(),console.warn("MediaChrome: <media-progress-range> is deprecated. Use <media-time-range> instead.")}};h("media-progress-range",fa);var va="30",fs=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">${va}</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg>`,un=d.createElement("template");un.innerHTML=`  
  <slot name="backward">${fs}</slot>
`;var vs=0,ln=i=>{let e=Math.abs(+i.getAttribute("seek-offset")),t=C.SEEK_BACK_N_SECS({seekOffset:e});i.setAttribute("aria-label",t)},dn=i=>{let e=Bt(i,"backward"),t=i.getAttribute("seek-offset");Nt(e,t)},ga=class extends x{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_CURRENT_TIME]}constructor(e={}){super({slotTemplate:un,...e})}connectedCallback(){this.hasAttribute("seek-offset")||this.setAttribute("seek-offset",va),ln(this),dn(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e==="seek-offset"&&(a==null&&this.setAttribute("seek-offset",va),dn(this),ln(this)),super.attributeChangedCallback(e,t,a)}handleClick(){let e=this.getAttribute(o.MEDIA_CURRENT_TIME),t=+this.getAttribute("seek-offset"),a=e&&!Number.isNaN(+e)?+e:vs,r=Math.max(a-t,0),n=new u.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}};h("media-seek-backward-button",ga);var Aa=class extends ce{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,a){e===o.MEDIA_PREVIEW_TIME&&a!=null&&(this.container.textContent=j(a)),super.attributeChangedCallback(e,t,a)}};h("media-preview-time-display",Aa);var cn=d.createElement("template");cn.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: inline-block;
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async" />
`;var _a=class extends u.HTMLElement{static get observedAttributes(){return[A.MEDIA_CONTROLLER,"time",o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_COORDS]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(cn.content.cloneNode(!0))}connectedCallback(){var e;let t=this.getAttribute(A.MEDIA_CONTROLLER);if(t){let a=d.getElementById(t);(e=a==null?void 0:a.associateElement)==null||e.call(a,this)}}disconnectedCallback(){var e;let t=this.getAttribute(A.MEDIA_CONTROLLER);if(t){let a=d.getElementById(t);(e=a==null?void 0:a.unassociateElement)==null||e.call(a,this)}}attributeChangedCallback(e,t,a){var r,n;if(["time",o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===A.MEDIA_CONTROLLER){if(t){let s=d.getElementById(t);(r=s==null?void 0:s.unassociateElement)==null||r.call(s,this)}if(a){let s=d.getElementById(a);(n=s==null?void 0:s.associateElement)==null||n.call(s,this)}}}update(){let e=this.getAttribute(o.MEDIA_PREVIEW_COORDS),t=this.getAttribute(o.MEDIA_PREVIEW_IMAGE);if(!(e&&t))return;let[a,r,n,s]=e.split(/\s+/).map(wt=>+wt),l=t.split("#")[0],c=getComputedStyle(this),{maxWidth:m,maxHeight:E,minWidth:f,minHeight:w}=c,T=Math.min(parseInt(m)/n,parseInt(E)/s),P=Math.max(parseInt(f)/n,parseInt(w)/s),M=T<1,R=M?T:P>1?P:1,{style:L}=ae(this.shadowRoot,":host"),G=ae(this.shadowRoot,"img").style,Z=this.shadowRoot.querySelector("img"),ie=M?"min":"max";L.setProperty(`${ie}-width`,"initial","important"),L.setProperty(`${ie}-height`,"initial","important"),L.width=`${n*R}px`,L.height=`${s*R}px`;let Re=()=>{G.width=`${this.imgWidth*R}px`,G.height=`${this.imgHeight*R}px`,G.display="block"};Z.src!==l&&(Z.onload=()=>{this.imgWidth=Z.naturalWidth,this.imgHeight=Z.naturalHeight,Re()},Z.src=l,Re()),Re(),G.transform=`translate(-${a*R}px, -${r*R}px)`}};h("media-preview-thumbnail",_a);var mn=d.createElement("template"),gs=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;mn.innerHTML=`
<style>
:host {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=loading] > *,
:host ::slotted([slot=loading]) {
  opacity: 1;
  transition: opacity 0.15s;
}

:host(:not([is-loading])) slot[name=loading] > *, 
:host(:not([is-loading])) ::slotted([slot=loading]) {
  opacity: 0;
}

:host(:not([is-loading])) #status {
  display: none;
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-icon-width, 100px);
  height: var(--media-loading-icon-height);
  fill: var(--media-icon-color, #fff);
  vertical-align: middle;
}
</style>

<slot name="loading">${gs}</slot>
<div id="status" role="status" aria-live="polite">${B.MEDIA_LOADING()}</div>
`;var As=500,ya=class extends u.HTMLElement{static get observedAttributes(){return[A.MEDIA_CONTROLLER,o.MEDIA_PAUSED,o.MEDIA_LOADING,"loading-delay"]}constructor(){super();let e=this.attachShadow({mode:"open"}),t=mn.content.cloneNode(!0);e.appendChild(t)}attributeChangedCallback(e,t,a){var r,n,s;if(e===o.MEDIA_LOADING||e===o.MEDIA_PAUSED){let l=this.getAttribute(o.MEDIA_PAUSED)!=null,c=this.getAttribute(o.MEDIA_LOADING)!=null,m=!l&&c;if(!m)this.loadingDelayHandle&&(clearTimeout(this.loadingDelayHandle),this.loadingDelayHandle=void 0),this.removeAttribute("is-loading");else if(!this.loadingDelayHandle&&m){let E=+((r=this.getAttribute("loading-delay"))!=null?r:As);this.loadingDelayHandle=setTimeout(()=>{this.setAttribute("is-loading",""),this.loadingDelayHandle=void 0},E)}}else if(e===A.MEDIA_CONTROLLER){if(t){let l=d.getElementById(t);(n=l==null?void 0:l.unassociateElement)==null||n.call(l,this)}if(a){let l=d.getElementById(a);(s=l==null?void 0:l.associateElement)==null||s.call(l,this)}}}connectedCallback(){var e;let t=this.getAttribute(A.MEDIA_CONTROLLER);if(t){let a=d.getElementById(t);(e=a==null?void 0:a.associateElement)==null||e.call(a,this)}}disconnectedCallback(){var e;this.loadingDelayHandle&&(clearTimeout(this.loadingDelayHandle),this.loadingDelayHandle=void 0);let t=this.getAttribute(A.MEDIA_CONTROLLER);if(t){let a=d.getElementById(t);(e=a==null?void 0:a.unassociateElement)==null||e.call(a,this)}}};h("media-loading-indicator",ya);var hn=d.createElement("template");hn.innerHTML=`
  <style>
    :host {
    }
  </style>
  <slot></slot>
`;var Ta=class extends u.HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(hn.content.cloneNode(!0))}};h("media-title-bar",Ta);var _s=100,ys=i=>{var e;if(i.getAttribute(o.MEDIA_MUTED)!=null)return 0;let a=+((e=i.getAttribute(o.MEDIA_VOLUME))!=null?e:1);return Math.round(a*i.range.max)},Ts=({value:i,max:e})=>`${Math.round(i/e*100)}%`,Ia=class extends ut{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_VOLUME,o.MEDIA_MUTED,o.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.max=_s,this.range.addEventListener("input",()=>{let t=this.range.value/this.range.max,a=new u.CustomEvent(p.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(a)})}connectedCallback(){this.range.setAttribute("aria-label",B.VOLUME()),super.connectedCallback()}attributeChangedCallback(e,t,a){if(e===o.MEDIA_VOLUME||e===o.MEDIA_MUTED){let r=ys(this);this.range.value=r,this.range.setAttribute("aria-valuetext",Ts(this.range)),this.updateBar()}super.attributeChangedCallback(e,t,a)}};h("media-volume-range",Ia);var Is=Object.defineProperty,Ms=(i,e,t)=>e in i?Is(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,ks=(i,e,t)=>(Ms(i,typeof e!="symbol"?e+"":e,t),t),oi=class extends u.HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.textContent="";let e=d.createElement("template");e.innerHTML=this.constructor.template,this.shadowRoot.append(e.content.cloneNode(!0))}get mediaController(){return this.shadowRoot.querySelector("media-controller")}};ks(oi,"template","");h("media-theme-base",oi);var Ma=class extends dt{};u.customElements.get("media-chrome")||u.customElements.define("media-chrome",Ma);var ka=class extends dt{constructor(){super(),console.warn("MediaChrome: <media-container> is deprecated. Use <media-controller>.")}};u.customElements.get("media-container")||u.customElements.define("media-container",ka);var g=fo(require("@mux/mux-video")),k=require("@mux/playback-core");var Sn=require("@mux/mux-video");var Ss="en",Me={code:Ss};var pn="en";function y(i,e=!0){var r,n;let t=e&&(n=(r=Me)==null?void 0:r[i])!=null?n:i,a=e?Me.code:pn;return new Sa(t,a)}var Sa=class{constructor(e,t=(a=>(a=Me.code)!=null?a:pn)()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,a)=>{var r;return(r=e[a])!=null?r:""})}toString(){return this.message}};function bn(i){let e="";return Object.entries(i).forEach(([t,a])=>{a!=null&&(e+=`${Ls(t)}: ${a}; `)}),e?e.trim():void 0}function Ls(i){return i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function En(i){return i.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function re(i){if(i==null)return;let e=+i;return Number.isNaN(e)?void 0:e}function si(i){let e=Cs(i).toString();return e?"?"+e:""}function Cs(i){let e={};for(let t in i)i[t]!=null&&(e[t]=i[t]);return new URLSearchParams(e)}function he(i){let e=(i!=null?i:"").split(".")[1];if(!e)return{};let t=e.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(t).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}var La=(i,e)=>!i||!e?!1:i.contains(e)?!0:La(i,e.getRootNode().host);var bt=require("@mux/playback-core");var Ca="mux.com",ws=()=>{try{return"1.5.1"}catch{}return"UNKNOWN"},Ds=ws(),di=()=>Ds,wa=(i,{token:e,domain:t=Ca}={})=>`https://stream.${t}/${i}.m3u8${si(!!e?{token:e}:{redundant_streams:!0})}`,gn=(i,{token:e,thumbnailTime:t,domain:a=Ca}={})=>{let r=e==null?t:void 0,{aud:n}=he(e);if(!(e&&n!=="t"))return`https://image.${a}/${i}/thumbnail.webp${si({token:e,time:r})}`},An=(i,{token:e,domain:t=Ca}={})=>{let{aud:a}=he(e);if(!(e&&a!=="s"))return`https://image.${t}/${i}/storyboard.vtt${si({token:e,format:"webp"})}`};var xs={crossorigin:"crossOrigin",playsinline:"playsInline"};function _n(i){var e;return(e=xs[i])!=null?e:En(i)}var yn=i=>{var t,a;let{media:e}=i;return(a=(t=e==null?void 0:e._hls)==null?void 0:t.liveSyncPosition)!=null?a:e!=null&&e.seekable.length?e==null?void 0:e.seekable.end(e.seekable.length-1):void 0},Da=i=>{let e=yn(i);if(e==null){console.warn("attempting to seek to live but cannot determine live edge time!");return}i.currentTime=e},Rs=1,Ps=5,fn=3,vn=.5,Tn=i=>{var n;let{streamType:e}=i,t=yn(i),a=(n=i.media)==null?void 0:n.currentTime;if(t==null||a==null)return!1;let r=t-a;return e===bt.StreamTypes.LL_LIVE||e===bt.StreamTypes.LL_DVR?r<=Rs*(fn+vn):e===bt.StreamTypes.LIVE||e===bt.StreamTypes.DVR?r<=Ps*(fn+vn):!1},ke,Se,W,li=class{constructor(e,t){I(this,ke,void 0);I(this,Se,void 0);I(this,W,[]);V(this,ke,e),V(this,Se,t)}[Symbol.iterator](){return v(this,W).values()}get length(){return v(this,W).length}get value(){var e;return(e=v(this,W).join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(V(this,W,[]),this.add(...(t=e==null?void 0:e.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return v(this,W)[e]}values(){return v(this,W).values()}keys(){return v(this,W).keys()}forEach(e){v(this,W).forEach(e)}add(...e){var t,a;e.forEach(r=>{this.contains(r)||v(this,W).push(r)}),!(this.value===""&&!((t=v(this,ke))!=null&&t.hasAttribute(`${v(this,Se)}`)))&&((a=v(this,ke))==null||a.setAttribute(`${v(this,Se)}`,`${this.value}`))}remove(...e){var t;e.forEach(a=>{v(this,W).splice(v(this,W).indexOf(a),1)}),(t=v(this,ke))==null||t.setAttribute(`${v(this,Se)}`,`${this.value}`)}contains(e){return v(this,W).includes(e)}toggle(e,t){return typeof t!="undefined"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};ke=new WeakMap,Se=new WeakMap,W=new WeakMap;var In=`[mux-player ${di()}]`;function pe(...i){console.warn(In,...i)}function J(...i){console.error(In,...i)}function ui(i){var t;let e=(t=i.message)!=null?t:"";if(i.file){let a="https://github.com/muxinc/elements/blob/main/errors/";e+=` ${y("Read more: ")}
${a}${i.file}`}pe(e)}var $={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},Le={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},kn=Object.freeze({length:0,start(i){let e=i>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(i){let e=i>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),Us=Sn.VideoEvents.filter(i=>i!=="error"),Os=Object.values($).filter(i=>![$.PLAYSINLINE].includes(i)),Ns=Object.values(Le);function Ln(i){i.querySelectorAll(":scope > track").forEach(e=>{var t;(t=i.media)==null||t.append(e.cloneNode())}),Us.forEach(e=>{var t;(t=i.media)==null||t.addEventListener(e,a=>{i.dispatchEvent(new Event(a.type))})})}var xa=class extends D.HTMLElement{static get observedAttributes(){return[...Os,...Ns]}constructor(){super(),this.querySelectorAll(":scope > track").forEach(a=>{var r;(r=this.media)==null||r.append(a.cloneNode())});let e=a=>{for(let r of a)r.type==="childList"&&(r.removedNodes.forEach(n=>{var l,c;let s=(l=this.media)==null?void 0:l.querySelector(`track[src="${n.src}"]`);s&&((c=this.media)==null||c.removeChild(s))}),r.addedNodes.forEach(n=>{var s;(s=this.media)==null||s.append(n.cloneNode())}))};new MutationObserver(e).observe(this,{childList:!0,subtree:!0})}attributeChangedCallback(e,t,a){var r,n;switch(e){case Le.MUTED:{this.media&&(this.media.muted=a!=null,this.media.defaultMuted=a!=null);return}case Le.VOLUME:{let s=(r=re(a))!=null?r:1;this.media&&(this.media.volume=s);return}case Le.PLAYBACKRATE:{let s=(n=re(a))!=null?n:1;this.media&&(this.media.playbackRate=s,this.media.defaultPlaybackRate=s);return}}}play(){var e,t;return(t=(e=this.media)==null?void 0:e.play())!=null?t:Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}requestCast(e){var t;return(t=this.media)==null?void 0:t.requestCast(e)}get media(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("mux-video")}get paused(){var e,t;return(t=(e=this.media)==null?void 0:e.paused)!=null?t:!0}get duration(){var e,t;return(t=(e=this.media)==null?void 0:e.duration)!=null?t:NaN}get ended(){var e,t;return(t=(e=this.media)==null?void 0:e.ended)!=null?t:!1}get buffered(){var e,t;return(t=(e=this.media)==null?void 0:e.buffered)!=null?t:kn}get seekable(){var e,t;return(t=(e=this.media)==null?void 0:e.seekable)!=null?t:kn}get readyState(){var e,t;return(t=(e=this.media)==null?void 0:e.readyState)!=null?t:0}get videoWidth(){var e,t;return(t=(e=this.media)==null?void 0:e.videoWidth)!=null?t:0}get videoHeight(){var e,t;return(t=(e=this.media)==null?void 0:e.videoHeight)!=null?t:0}get currentTime(){var e,t;return(t=(e=this.media)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return(t=(e=this.media)==null?void 0:e.volume)!=null?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return(t=(e=this.media)==null?void 0:e.playbackRate)!=null?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return(e=re(this.getAttribute(Le.PLAYBACKRATE)))!=null?e:1}set defaultPlaybackRate(e){e!=null?this.setAttribute(Le.PLAYBACKRATE,`${e}`):this.removeAttribute(Le.PLAYBACKRATE)}get crossOrigin(){return Et(this,$.CROSSORIGIN)}set crossOrigin(e){this.setAttribute($.CROSSORIGIN,`${e}`)}get autoplay(){return Et(this,$.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute($.AUTOPLAY,typeof e=="string"?e:""):this.removeAttribute($.AUTOPLAY)}get loop(){return Et(this,$.LOOP)!=null}set loop(e){e?this.setAttribute($.LOOP,""):this.removeAttribute($.LOOP)}get muted(){var e,t;return(t=(e=this.media)==null?void 0:e.muted)!=null?t:!1}set muted(e){this.media&&(this.media.muted=Boolean(e))}get defaultMuted(){return Et(this,$.MUTED)!=null}set defaultMuted(e){e?this.setAttribute($.MUTED,""):this.removeAttribute($.MUTED)}get playsInline(){return Et(this,$.PLAYSINLINE)!=null}set playsInline(e){J("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute($.PRELOAD,e):this.removeAttribute($.PRELOAD)}};function Et(i,e){return i.media?i.media.getAttribute(e):i.getAttribute(e)}var Ra=xa;var Bs=Object.defineProperty,$s=(i,e,t)=>e in i?Bs(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Vs=(i,e,t)=>($s(i,typeof e!="symbol"?e+"":e,t),t),Rn=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},_=(i,e,t)=>(Rn(i,e,"read from private field"),t?t.call(i):e.get(i)),ee=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},ne=(i,e,t,a)=>(Rn(i,e,"write to private field"),a?a.call(i,t):e.set(i,t),t),Ke,ci,Ce,ft,be,Ee,fe,we,Ye,mi,z,Cn=1,wn=0,Hs=1,Ws={processCallback(i,e,t){if(!!t){for(let[a,r]of e)if(a in t){let n=t[a];typeof n=="boolean"&&r instanceof F&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof F?r.element[r.attributeName]=n:r.value=n}}}},oe=class extends u.DocumentFragment{constructor(e,t,a=Ws){var r;super(),ee(this,Ke,void 0),ee(this,ci,void 0),this.append(e.content.cloneNode(!0)),ne(this,Ke,Pn(this)),ne(this,ci,a),(r=a.createCallback)==null||r.call(a,this,_(this,Ke),t),a.processCallback(this,_(this,Ke),t)}update(e){_(this,ci).processCallback(this,_(this,Ke),e)}};Ke=new WeakMap;ci=new WeakMap;var Pn=(i,e=[])=>{let t,a;for(let r of i.attributes||[])if(r.value.includes("{{")){let n=new Pa;for([t,a]of xn(r.value))if(!t)n.append(a);else{let s=new F(i,r.name,r.namespaceURI);n.append(s),e.push([a,s])}r.value=n.toString()}for(let r of i.childNodes)if(r.nodeType===Cn&&!(r instanceof HTMLTemplateElement))Pn(r,e);else if(r.nodeType===Cn||r.data.includes("{{")){let n=[];if(r.data)for([t,a]of xn(r.data))if(!t)n.push(new Text(a));else{let s=new se(i);n.push(s),e.push([a,s])}else if(r instanceof HTMLTemplateElement){let s=new vt(i,r);n.push(s),e.push([s.expression,s])}r.replaceWith(...n.flatMap(s=>s.replacementNodes||[s]))}return e},Dn={},xn=i=>{let e="",t=0,a=Dn[i],r=0,n;if(a)return a;for(a=[];n=i[r];r++)n==="{"&&i[r+1]==="{"&&i[r-1]!=="\\"&&i[r+2]&&++t==1?(e&&a.push([wn,e]),e="",r++):n==="}"&&i[r+1]==="}"&&i[r-1]!=="\\"&&!--t?(a.push([Hs,e.trim()]),e="",r++):e+=n||"";return e&&a.push([wn,(t>0?"{{":"")+e]),Dn[i]=a},Fs=11,hi=class{get value(){return""}set value(e){}toString(){return this.value}},Un=new WeakMap,Pa=class{constructor(){ee(this,Ce,[])}[Symbol.iterator](){return _(this,Ce).values()}get length(){return _(this,Ce).length}item(e){return _(this,Ce)[e]}append(...e){for(let t of e)t instanceof F&&Un.set(t,this),_(this,Ce).push(t)}toString(){return _(this,Ce).join("")}};Ce=new WeakMap;var F=class extends hi{constructor(e,t,a){super(),ee(this,we),ee(this,ft,""),ee(this,be,void 0),ee(this,Ee,void 0),ee(this,fe,void 0),ne(this,be,e),ne(this,Ee,t),ne(this,fe,a)}get attributeName(){return _(this,Ee)}get attributeNamespace(){return _(this,fe)}get element(){return _(this,be)}get value(){return _(this,ft)}set value(e){_(this,ft)!==e&&(ne(this,ft,e),!_(this,we,Ye)||_(this,we,Ye).length===1?e==null?_(this,be).removeAttributeNS(_(this,fe),_(this,Ee)):_(this,be).setAttributeNS(_(this,fe),_(this,Ee),e):_(this,be).setAttributeNS(_(this,fe),_(this,Ee),_(this,we,Ye)))}get booleanValue(){return _(this,be).hasAttributeNS(_(this,fe),_(this,Ee))}set booleanValue(e){if(!_(this,we,Ye)||_(this,we,Ye).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}};ft=new WeakMap;be=new WeakMap;Ee=new WeakMap;fe=new WeakMap;we=new WeakSet;Ye=function(){return Un.get(this)};var se=class extends hi{constructor(e,t){super(),ee(this,mi,void 0),ee(this,z,void 0),ne(this,mi,e),ne(this,z,t?[...t]:[new Text])}get replacementNodes(){return _(this,z)}get parentNode(){return _(this,mi)}get nextSibling(){return _(this,z)[_(this,z).length-1].nextSibling}get previousSibling(){return _(this,z)[0].previousSibling}get value(){return _(this,z).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===Fs?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);t.length||t.push(new Text("")),_(this,z)[0].before(...t);for(let a of _(this,z))t.includes(a)||a.remove();ne(this,z,t)}};mi=new WeakMap;z=new WeakMap;var vt=class extends se{constructor(e,t){let a=t.getAttribute("directive")||t.getAttribute("type"),r=t.getAttribute("expression")||t.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(e),Vs(this,"directive"),this.expression=r,this.template=t,this.directive=a}};var Ks=/([>&])?\s*(\w+)\s*(.*)/,Ys=/^(\?\?|\|)?\s*(['"\w]*)/,Gs={"|":{string:i=>String(i)},"??":(i,e)=>i!=null?i:e},pi=class{constructor(e){this.template=e}},Oa={partial:(i,e)=>{e[i.expression]=new pi(i.template)},if:(i,e)=>{Qs(i.expression,e)?i.replace(new oe(i.template,e,bi)):i.replace("")}},Zs=Object.keys(Oa),bi={processCallback(i,e,t){var a,r,n;if(!!t)for(let[s,l]of e){if(l instanceof vt){if(!l.directive){let M=Zs.find(R=>l.template.hasAttribute(R));M&&(l.directive=M,l.expression=l.template.getAttribute(M))}(a=Oa[l.directive])==null||a.call(Oa,l,t);continue}let[,c,m,E]=(r=s.match(Ks))!=null?r:[],f=t[m],[,w,T]=(n=E.match(Ys))!=null?n:[],P=Gs[w];if(typeof P=="function")f=P(f,gt(T,t));else if(P&&f!=null){let M=P[T];M&&(f=M(f))}if(f){if(f instanceof pi){if(c!==">")continue;let M={...t},R=s.matchAll(/(\w+)\s*=\s*(['"\w]*)/g);for(let[,L,G]of R)M[L]=gt(G,t);f=new oe(f.template,M,bi)}l instanceof F&&l.attributeName.startsWith("aria-")&&(f=String(f)),l instanceof F?typeof f=="boolean"?l.booleanValue=f:typeof f=="function"?l.element[l.attributeName]=f:l.value=f:l.value=f}else l instanceof F&&(l.booleanValue=!1)}}},qs={"==":(i,e)=>i==e,"!=":(i,e)=>i!=e};function Qs(i,e){var t;let a=zs(i,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=]=/,ws:/\s+/,param:/[$a-z_][$\w]*/i});if(a.length===0||a.some(({type:n})=>!n))return console.warn(`Warning: invalid expression \`${i}\``),!1;if(a.length===1)return Ua(a[0])?gt(a[0].token,e):(console.warn(`Warning: invalid expression \`${i}\``),!1);let r=a.filter(({type:n})=>n!=="ws");if(r.length===3){let n=qs[(t=r[1])==null?void 0:t.token];return!n||!Ua(r[0])||!Ua(r[2])?(console.warn(`Warning: invalid expression \`${i}\``),!1):n(gt(r[0].token,e),gt(r[2].token,e))}}function Ua({type:i}){return["number","boolean","string","param"].includes(i)}function gt(i,e){let t=i[0],a=i.slice(-1);return i==="true"||i==="false"?i==="true":t===a&&["'",'"'].includes(t)?i.slice(1,-1):or(i)?parseFloat(i):e[i]}function zs(i,e){let t,a,r,n=[];for(;i;){r=null,t=i.length;for(let s in e)a=e[s].exec(i),a&&a.index<t&&(r={token:a[0],type:s,matches:a.slice(1)},t=a.index);t&&n.push({token:i.substr(0,t),type:void 0}),r&&n.push(r),i=i.substr(t+(r?r.token.length:0))}return n}var Xs=Object.defineProperty,js=(i,e,t)=>e in i?Xs(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,At=(i,e,t)=>(js(i,typeof e!="symbol"?e+"":e,t),t),$n=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},On=(i,e,t)=>($n(i,e,"read from private field"),t?t.call(i):e.get(i)),Nn=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},Bn=(i,e,t,a)=>($n(i,e,"write to private field"),a?a.call(i,t):e.set(i,t),t),Ei,fi,Ge=class extends u.HTMLElement{constructor(){super(),At(this,"renderRoot"),At(this,"renderer"),Nn(this,Ei,void 0),Nn(this,fi,void 0),this.renderRoot=this.attachShadow({mode:"open"}),new MutationObserver(()=>this.render()).observe(this,{attributes:!0}),this.createRenderer()}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e,t;let a=this.getAttribute("template");if(a){let r=(e=this.getRootNode())==null?void 0:e.getElementById(a);if(r)return r}return(t=On(this,Ei))!=null?t:this.constructor.template}set template(e){Bn(this,Ei,e),this.createRenderer()}get props(){let e={};for(let t of this.attributes)t.value!=null?e[Ui(t.name)]=t.value===""?!0:t.value:e[Ui(t.name)]=!1;return e}attributeChangedCallback(e,t,a){e==="template"&&t!=a&&this.createRenderer()}createRenderer(){this.template&&this.template!==On(this,fi)&&(Bn(this,fi,this.template),this.renderer=new oe(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}};Ei=new WeakMap;fi=new WeakMap;At(Ge,"template");At(Ge,"observedAttributes",["template"]);At(Ge,"processor",bi);h("media-theme",Ge);var Hn=`
  :host {
    cursor: pointer;
  }
  media-time-display {
    color: inherit;
  }
`,Wn=H.createElement("template");Wn.innerHTML=`
  <style>
    ${Hn}
  </style>
  <media-time-display show-duration></media-time-display>
`;var Vn=["Enter"," "],_t,qe,vi,Ze=class extends D.HTMLElement{constructor(){var t,a;super();I(this,qe);I(this,_t,void 0);this.attachShadow({mode:"open"}),(t=this.shadowRoot)==null||t.appendChild(this.constructor.template.content.cloneNode(!0)),this.timeDisplayEl=(a=this.shadowRoot)==null?void 0:a.querySelector("media-time-display")}static get observedAttributes(){return["hide-duration","remaining","disabled","aria-disabled"]}toggleTimeDisplay(){var t,a,r;(t=this.timeDisplayEl)!=null&&t.hasAttribute("remaining")?(a=this.timeDisplayEl)==null||a.removeAttribute("remaining"):(r=this.timeDisplayEl)==null||r.setAttribute("remaining","")}connectedCallback(){let t=a=>{let{key:r}=a;if(!Vn.includes(r)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{let{metaKey:r,altKey:n,key:s}=a;if(r||n||!Vn.includes(s)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),V(this,_t,setInterval(S(this,qe,vi).bind(this),200)),requestAnimationFrame(()=>S(this,qe,vi).call(this))}disconnectedCallback(){clearInterval(v(this,_t))}attributeChangedCallback(t,a,r){var n,s;t==="hide-duration"&&S(this,qe,vi).call(this),["remaining","disabled","aria-disabled"].includes(t)&&a!==r&&(r==null?(n=this.timeDisplayEl)==null||n.removeAttribute(t):(s=this.timeDisplayEl)==null||s.setAttribute(t,r))}};_t=new WeakMap,qe=new WeakSet,vi=function(){var a,r,n,s;getComputedStyle(this).getPropertyValue("--media-duration-display").trim()==="none"||this.getAttribute("hide-duration")!=null?(a=this.timeDisplayEl)!=null&&a.hasAttribute("show-duration")&&((r=this.timeDisplayEl)==null||r.removeAttribute("show-duration")):(n=this.timeDisplayEl)!=null&&n.hasAttribute("show-duration")||(s=this.timeDisplayEl)==null||s.setAttribute("show-duration","")},Ze.styles=Hn,Ze.template=Wn;D.customElements.get("mxp-time-display")||(D.customElements.define("mxp-time-display",Ze),D.MxpTimeDisplay=Ze);var Fn=`:host {
  display: inline-block;
  width: 100%;
}

/* Hide custom elements that are not defined yet */
:not(:defined) {
  display: none;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

[audio] [part~='seek-live'] {
  margin: 0;
  height: 42px;
  border-radius: 0;
  background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
}

[part~='seek-live'] {
  margin-left: 10px;
  margin-right: 5px;
  align-self: center;
  position: relative;
  box-sizing: border-box;
  padding: 4px 6px;
  border-radius: 12px;
  background-color: rgba(20, 20, 30, 0.7);
  font-size: 0.75rem;
  line-height: 1;
  color: #fff;
  border: none;
  cursor: pointer;
}

[part~='seek-live'] svg {
  width: 8px;
  fill: rgb(118, 118, 118);
}
[part~='seek-live'][in-live-window] svg {
  fill: #fb3c4d;
}

[part~='seek-live'][disabled] {
  opacity: 60%;
  cursor: not-allowed;
}
[part~='seek-live'][in-live-window] {
  opacity: 100%;
  cursor: unset;
}

::part(top),
[part~='top'] {
  --media-controls: var(--controls, var(--top-controls));
  --media-play-button: var(--play-button, var(--top-play-button));
  --media-seek-live-button: var(--seek-live-button, var(--top-seek-live-button));
  --media-seek-backward-button: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button: var(--mute-button, var(--top-mute-button));
  --media-captions-button: var(--captions-button, var(--top-captions-button));
  --media-airplay-button: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button: var(--cast-button, var(--top-cast-button));
  --media-playback-rate-button: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-volume-range: var(--volume-range, var(--top-volume-range));
  --media-time-range: var(--time-range, var(--top-time-range));
  --media-time-display: var(--time-display, var(--top-time-display));
  --media-duration-display: var(--duration-display, var(--top-duration-display));
  --media-title-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-controls: var(--controls, var(--center-controls));
  --media-play-button: var(--play-button, var(--center-play-button));
  --media-seek-live-button: var(--seek-live-button, var(--center-seek-live-button));
  --media-seek-backward-button: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button: var(--mute-button, var(--center-mute-button));
  --media-captions-button: var(--captions-button, var(--center-captions-button));
  --media-airplay-button: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button: var(--cast-button, var(--center-cast-button));
  --media-playback-rate-button: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-volume-range: var(--volume-range, var(--center-volume-range));
  --media-time-range: var(--time-range, var(--center-time-range));
  --media-time-display: var(--time-display, var(--center-time-display));
  --media-duration-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-controls: var(--controls, var(--bottom-controls));
  --media-play-button: var(--play-button, var(--bottom-play-button));
  --media-seek-live-button: var(--seek-live-button, var(--bottom-seek-live-button));
  --media-seek-backward-button: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button: var(--captions-button, var(--bottom-captions-button));
  --media-airplay-button: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button: var(--cast-button, var(--bottom-cast-button));
  --media-playback-rate-button: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-volume-range: var(--volume-range, var(--bottom-volume-range));
  --media-time-range: var(--time-range, var(--bottom-time-range));
  --media-time-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display: var(--title-display, var(--bottom-title-display));
}

[part*='seek-live button'] {
  display: var(--media-controls, var(--media-seek-live-button));
}

/** Once we implement these CSS vars in Media Chrome below selectors can be deleted! */

::part(play button) {
  display: var(--media-controls, var(--media-play-button));
}
::part(seek-backward button) {
  display: var(--media-controls, var(--media-seek-backward-button));
}
::part(seek-forward button) {
  display: var(--media-controls, var(--media-seek-forward-button));
}
::part(mute button) {
  display: var(--media-controls, var(--media-mute-button));
}
::part(captions button) {
  display: var(--media-controls, var(--media-captions-button));
}
::part(airplay button) {
  display: var(--media-controls, var(--media-airplay-button));
}
::part(pip button) {
  display: var(--media-controls, var(--media-pip-button));
}
::part(fullscreen button) {
  display: var(--media-controls, var(--media-fullscreen-button));
}
::part(cast button) {
  display: var(--media-controls, var(--media-cast-button));
}
::part(playback-rate button) {
  display: var(--media-controls, var(--media-playback-rate-button));
}
::part(volume range) {
  display: var(--media-controls, var(--media-volume-range));
}
::part(time range) {
  display: var(--media-controls, var(--media-time-range));
}
::part(time display) {
  display: var(--media-controls, var(--media-time-display));
}
::part(title display) {
  display: var(--media-controls, var(--media-title-display));
}
`;var Kn=`<template id="media-theme-mux">
  <style>
    :host(:not([audio])) {
      --secondary-color: transparent;
    }

    :host {
      --_primary-color: var(--primary-color, #fff);

      --media-icon-color: var(--_primary-color);
      --media-range-thumb-background: var(--_primary-color);
      --media-range-bar-color: var(--_primary-color);
      --media-control-background: var(--secondary-color);
      --media-control-hover-background: var(--secondary-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-range-track-background: rgba(255, 255, 255, 0.5);
      --media-range-track-border-radius: 3px;
      --media-preview-thumbnail-border: 1px solid #fff;
      --media-preview-thumbnail-border-radius: 2px;
      --media-preview-time-margin: 5px 0 2px;
      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host(.two-tone:not([audio])) {
      --mux-time-range-padding: 0px; /* px is needed in calc() */
      --media-preview-thumbnail-border: 0;
      --media-preview-thumbnail-border-radius: 2px 2px 0 0;
      --media-preview-time-border-radius: 0 0 2px 2px;
      --media-preview-time-margin: 0 0 8px;
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) {
      --media-preview-time-border-radius: 3px;
      --media-preview-time-margin: 0 0 5px;
      --media-preview-time-text-shadow: none;
    }

    :host(.two-tone:not([audio])) media-time-range {
      --media-range-track-border-radius: 0;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) :is(media-poster-image, media-loading-indicator) {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
    }

    [disabled],
    [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-captions-button:not(:is([media-captions-list], [media-subtitles-list])) {
      --captions-button: none;
    }

    media-volume-range[media-volume-unavailable] {
      --volume-range: none;
    }

    media-airplay-button[media-airplay-unavailable] {
      --airplay-button: none;
    }

    media-fullscreen-button[media-fullscreen-unavailable] {
      --fullscreen-button: none;
    }

    media-cast-button[media-cast-unavailable] {
      --cast-button: none;
    }

    media-pip-button[media-pip-unavailable] {
      --pip-button: none;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    :host media-time-range {
      color: var(--_primary-color);
      --media-range-thumb-opacity: 0;
    }

    :host(:not([audio])) media-time-range {
      --media-range-padding-left: var(--mux-time-range-padding, 10px);
      --media-range-padding-right: var(--mux-time-range-padding, 10px);
      --media-range-padding: 0;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      background: linear-gradient(
        180deg,
        transparent,
        transparent 3px,
        var(--media-control-background, rgba(20, 20, 30, 0.7)) 3px,
        var(--media-control-background, rgba(20, 20, 30, 0.7)) 7px,
        transparent 7px,
        transparent
      );
      width: 100%;
    }

    media-control-bar {
      --media-control-padding: 9px 7px;
    }

    .size-small media-control-bar {
      --media-control-padding: 9px 5px;
    }

    .size-extra-small media-control-bar {
      --media-control-padding: 4px 3px;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is(media-text-display, mxp-time-display):first-child {
      --media-control-padding: 9px 5px 9px 10px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    /* Add a small space on the right to have the play button and
     * fullscreen button aligned in relation to the progress bar. */
    media-control-bar:not([slot])::after {
      content: '';
      width: 2px;
      height: 100%;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(160px, 25%);
      background: linear-gradient(rgb(0 0 0 / 0.4), transparent);
    }

    media-control-bar[slot='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([media-paused], :not([user-inactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.25), 0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      width: max(43px, min(10%, 55px));
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 2%;
      width: max(33px, min(8%, 40px));
    }

    media-control-bar:not([slot]) media-seek-backward-button {
      padding-right: 5px;
    }

    media-control-bar:not([slot]) media-seek-forward-button {
      padding-left: 5px;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[media-loading]:not([media-paused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
    }

    media-time-display {
      white-space: nowrap;
    }

    :is(media-time-display, media-text-display, media-playback-rate-button[role='button']) {
      color: inherit;
      line-height: 24px;
    }

    .title-display {
      font-size: 16px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.6);
    }

    :host([audio]) .title-display {
      flex-grow: 1;
      font-size: 21px;
    }
  </style>
  <media-controller
    gestures-disabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    audio="{{audio}}"
    class="size-{{playerSize}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
  >
    <slot name="media" slot="media"></slot>
    <media-poster-image
      slot="poster"
      part="poster"
      src="{{poster}}"
      placeholder-src="{{placeholder}}"
    ></media-poster-image>
    <media-loading-indicator slot="centered-chrome" no-auto-hide></media-loading-indicator>

    <template partial="TitleDisplay">
      <template if="title">
        <media-text-display part="top title display" class="title-display"> {{title}} </media-text-display>
      </template>
    </template>

    <template partial="PlayButton">
      <media-play-button
        part="{{section ?? 'bottom'}} play button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="play">
          <path d="m6.73 20.93 14.05-8.54a.46.46 0 0 0 0-.78L6.73 3.07a.48.48 0 0 0-.73.39v17.07a.48.48 0 0 0 .73.4Z" />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="pause">
          <path
            d="M6 19.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v15ZM14.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3Z"
          />
        </svg>
      </media-play-button>
    </template>

    <template partial="SeekBackwardButton">
      <media-seek-backward-button
        seek-offset="{{backwardSeekOffset}}"
        part="{{section ?? 'bottom'}} seek-backward button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 22 24" slot="backward">
          <path d="M11 6V3L5.37 7 11 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 11 6Z" />
          <text class="value" transform="translate(2.5 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
            {{backwardSeekOffset}}
          </text>
        </svg>
      </media-seek-backward-button>
    </template>

    <template partial="SeekForwardButton">
      <media-seek-forward-button
        seek-offset="{{forwardSeekOffset}}"
        part="{{section ?? 'bottom'}} seek-forward button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 22 24" slot="forward">
          <path d="M11 6V3l5.61 4L11 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 11 6Z" />
          <text class="value" transform="translate(10 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
            {{forwardSeekOffset}}
          </text>
        </svg>
      </media-seek-forward-button>
    </template>

    <template partial="MuteButton">
      <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="high">
          <path
            d="m11.14 4.86-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.21a.5.5 0 0 0-.86-.35Zm2.74-1.56v1.52A7.52 7.52 0 0 1 19.47 12a7.52 7.52 0 0 1-5.59 7.18v1.52A9 9 0 0 0 21 12a9 9 0 0 0-7.12-8.7Zm3.56 8.7a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="low">
          <path
            d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="medium">
          <path
            d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="off">
          <path
            d="m3 4.05 4.48 4.47-.33.33a.49.49 0 0 1-.36.15H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.48.48 0 0 0 .36.15.5.5 0 0 0 .5-.5v-5.75l4.67 4.66a7.71 7.71 0 0 1-2.79 1.47v1.52a9.32 9.32 0 0 0 3.87-1.91L20 21l1-1L4.06 3 3 4.05Zm5.36 5.36 2.39 2.39V17L8 14.26a1.74 1.74 0 0 0-1.24-.51H4.25v-3.5h2.54A1.74 1.74 0 0 0 8 9.74l.36-.33ZM19.47 12a7.19 7.19 0 0 1-.89 3.47l1.11 1.1A8.64 8.64 0 0 0 21 12a9 9 0 0 0-7.12-8.7v1.52A7.52 7.52 0 0 1 19.47 12ZM12 8.88V5.21a.5.5 0 0 0-.5-.5.48.48 0 0 0-.36.15L9.56 6.44 12 8.88ZM15.91 12a4.284 4.284 0 0 1-.07.72l1.22 1.22a5.2 5.2 0 0 0 .38-1.94 5.49 5.49 0 0 0-3.56-5.1v1.66A4 4 0 0 1 15.91 12Z"
          />
        </svg>
      </media-mute-button>
    </template>

    <template partial="PipButton">
      <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
          <path
            d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
          <path
            d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
          />
        </svg>
      </media-pip-button>
    </template>

    <template partial="CaptionsButton">
      <media-captions-button
        default-showing="{{defaultShowingCaptions}}"
        part="bottom captions button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="on">
          <path
            d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.41 10.1a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 4 4 0 0 1-1.28-.83 3.67 3.67 0 0 1-.84-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.53 3.53 0 0 1 .84-1.21 3.89 3.89 0 0 1 1.29-.8 4.76 4.76 0 0 1 1.63-.27 4.06 4.06 0 0 1 1.35.24c.225.091.44.205.64.34a2.7 2.7 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 2.78 2.78 0 0 0-.16 1c-.009.34.046.68.16 1 .104.283.26.545.46.77.188.21.415.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.88 2.88 0 0 1-1.22 1.01Zm7.52 0a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 3.89 3.89 0 0 1-1.28-.83 3.55 3.55 0 0 1-.85-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.43 3.43 0 0 1 .85-1.25 3.75 3.75 0 0 1 1.28-.8 4.76 4.76 0 0 1 1.63-.27 4 4 0 0 1 1.35.24c.225.091.44.205.64.34.21.144.395.32.55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.352 2.352 0 0 0-.46.77 3.01 3.01 0 0 0-.16 1c-.003.34.05.678.16 1 .108.282.263.542.46.77.188.21.416.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.82 2.82 0 0 1-1.21 1.05Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="off">
          <path
            d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-1.81-.12-4.67-.18-7.53-.18-2.86 0-5.72.06-7.53.18a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c1.81.12 4.67.18 7.53.18 2.86 0 5.72-.06 7.53-.18a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.137-.21-8.283 0-12.42a1.11 1.11 0 0 1 .91-1.11c1.67-.11 4.43-.18 7.43-.18s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.137.21 8.283 0 12.42ZM10.843 14a1.55 1.55 0 0 1-.76.18 1.57 1.57 0 0 1-.71-.18 1.69 1.69 0 0 1-.57-.42 2.099 2.099 0 0 1-.38-.58 2.47 2.47 0 0 1 0-1.64 2 2 0 0 1 .39-.66 1.73 1.73 0 0 1 .58-.42c.23-.103.479-.158.73-.16.241-.004.48.044.7.14.199.088.373.222.51.39l1.08-.89a2.179 2.179 0 0 0-.47-.44 2.81 2.81 0 0 0-.54-.32 2.91 2.91 0 0 0-.58-.15 2.71 2.71 0 0 0-.56 0 4.08 4.08 0 0 0-1.38.15 3.27 3.27 0 0 0-1.09.67 3.14 3.14 0 0 0-.71 1.06 3.62 3.62 0 0 0-.26 1.39 3.57 3.57 0 0 0 .26 1.38 3 3 0 0 0 .71 1.06c.316.293.687.52 1.09.67.443.16.91.238 1.38.23a3.2 3.2 0 0 0 1.28-.27c.401-.183.747-.47 1-.83l-1.17-.88a1.42 1.42 0 0 1-.53.52Zm6.62 0a1.58 1.58 0 0 1-.76.18 1.54 1.54 0 0 1-.7-.18 1.69 1.69 0 0 1-.57-.42 2.12 2.12 0 0 1-.43-.58 2.29 2.29 0 0 1 .39-2.3 1.84 1.84 0 0 1 1.32-.58c.241-.003.48.045.7.14.199.088.373.222.51.39l1.08-.92a2.43 2.43 0 0 0-.47-.44 3.22 3.22 0 0 0-.53-.29 2.999 2.999 0 0 0-.57-.15 2.87 2.87 0 0 0-.57 0 4.06 4.06 0 0 0-1.36.15 3.17 3.17 0 0 0-1.09.67 3 3 0 0 0-.72 1.06 3.62 3.62 0 0 0-.25 1.39 3.57 3.57 0 0 0 .25 1.38c.16.402.405.764.72 1.06a3.17 3.17 0 0 0 1.09.67c.44.16.904.237 1.37.23.441 0 .877-.092 1.28-.27a2.45 2.45 0 0 0 1-.83l-1.15-.85a1.49 1.49 0 0 1-.54.49Z"
          />
        </svg>
      </media-captions-button>
    </template>

    <template partial="AirplayButton">
      <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="airplay">
          <path
            d="M13.19 14.22a.25.25 0 0 0-.38 0l-5.46 6.37a.25.25 0 0 0 .19.41h10.92a.25.25 0 0 0 .19-.41l-5.46-6.37Z"
          />
          <path
            d="M22 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.94L8 16.75H4.25V4.25h17.5v12.5H18L19.06 18H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          />
        </svg>
      </media-airplay-button>
    </template>

    <template partial="FullscreenButton">
      <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="enter">
          <path
            d="M20.25 14.5a.76.76 0 0 0-.75.75v4.25h-4.25a.75.75 0 1 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5a.76.76 0 0 0-.75-.75Zm0-11.5h-5a.76.76 0 0 0-.75.75.76.76 0 0 0 .75.75h4.25v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75ZM8.75 19.5H4.5v-4.25a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75h5a.75.75 0 1 0 0-1.5Zm0-16.5h-5a.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75V4.5h4.25a.76.76 0 0 0 .75-.75.76.76 0 0 0-.75-.75Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="exit">
          <path
            d="M20.25 14.5h-5a.76.76 0 0 0-.75.75v5a.75.75 0 1 0 1.5 0V16h4.25a.75.75 0 1 0 0-1.5Zm-5-5h5a.75.75 0 1 0 0-1.5H16V3.75a.75.75 0 1 0-1.5 0v5a.76.76 0 0 0 .75.75Zm-6.5 5h-5a.75.75 0 1 0 0 1.5H8v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75Zm0-11.5a.76.76 0 0 0-.75.75V8H3.75a.75.75 0 0 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5A.76.76 0 0 0 8.75 3Z"
          />
        </svg>
      </media-fullscreen-button>
    </template>

    <template partial="CastButton">
      <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
          <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
          <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
          <path
            d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
          <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
          <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
          <path
            d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          />
          <path d="M20.5 5.5h-15v5.811c3.52.906 6.283 3.67 7.189 7.19H20.5V5.5Z" />
        </svg>
      </media-cast-button>
    </template>

    <template partial="PlaybackRateButton">
      <media-playback-rate-button
        rates="{{playbackRates}}"
        part="bottom playback-rate button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      ></media-playback-rate-button>
    </template>

    <template partial="VolumeRange">
      <media-volume-range
        part="bottom volume range"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      ></media-volume-range>
    </template>

    <template partial="TimeDisplay">
      <mxp-time-display
        remaining="{{defaultShowRemainingTime}}"
        part="bottom time display"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      ></mxp-time-display>
    </template>

    <template partial="TimeRange">
      <media-time-range
        part="bottom time range"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      ></media-time-range>
    </template>

    <template if="layout == 'audio on-demand'">
      <template if="title">
        <media-control-bar>{{>TitleDisplay}}</media-control-bar>
      </template>
      <media-control-bar>
        {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>TimeRange}} {{>MuteButton}}
        {{>VolumeRange}} {{>PlaybackRateButton}} {{>AirplayButton}} {{>CastButton}}
      </media-control-bar>
    </template>

    <template if="layout == 'audio dvr'">
      <template if="title">
        <media-control-bar>{{>TitleDisplay}}</media-control-bar>
      </template>
      <media-control-bar>
        {{>PlayButton}}
        <slot name="seek-live"></slot>
        {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>TimeRange}} {{>MuteButton}} {{>VolumeRange}}
        {{>PlaybackRateButton}} {{>AirplayButton}} {{>CastButton}}
      </media-control-bar>
    </template>

    <template if="layout == 'audio live'">
      <template if="title">
        <media-control-bar>{{>TitleDisplay}}</media-control-bar>
      </template>
      <media-control-bar>
        {{>PlayButton}}
        <slot name="seek-live"></slot>
        {{>MuteButton}} {{>VolumeRange}}
        <div class="spacer"></div>
        {{>AirplayButton}} {{>CastButton}}
      </media-control-bar>
    </template>

    <template if="layout == 'on-demand extra-small'">
      {{>TimeRange}}
      <media-control-bar>
        {{>PlayButton}} {{>MuteButton}}
        <div class="spacer"></div>
        {{>CaptionsButton}} {{>FullscreenButton}}
      </media-control-bar>
    </template>

    <template if="layout == 'on-demand small'">
      <media-control-bar slot="top-chrome"> {{>TitleDisplay}} </media-control-bar>
      <div slot="centered-chrome" class="center-controls">
        {{>SeekBackwardButton section="center"}} {{>PlayButton section="center"}} {{>SeekForwardButton
        section="center"}}
      </div>
      {{>TimeRange}}
      <media-control-bar>
        {{>TimeDisplay}} {{>MuteButton}} {{>VolumeRange}}
        <div class="spacer"></div>
        {{>PlaybackRateButton}} {{>CaptionsButton}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
        {{>FullscreenButton}}
      </media-control-bar>
    </template>

    <template if="layout == 'on-demand large'">
      <media-control-bar slot="top-chrome"> {{>TitleDisplay}} </media-control-bar>
      <div slot="centered-chrome" class="center-controls">{{>PlayButton section="center"}}</div>
      {{>TimeRange}}
      <media-control-bar>
        {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}} {{>VolumeRange}}
        <div class="spacer"></div>
        {{>PlaybackRateButton}} {{>CaptionsButton}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
        {{>FullscreenButton}}
      </media-control-bar>
    </template>

    <template if="layout == 'live extra-small'">
      <media-control-bar slot="top-chrome">
        <slot name="seek-live"></slot>
      </media-control-bar>
      <media-control-bar>
        {{>PlayButton}} {{>MuteButton}}
        <div class="spacer"></div>
        {{>CaptionsButton}} {{>FullscreenButton}}
      </media-control-bar>
    </template>

    <template if="layout == 'live small'">
      <media-control-bar slot="top-chrome">
        <slot name="seek-live"></slot>
        {{>TitleDisplay}}
      </media-control-bar>
      <div slot="centered-chrome" class="center-controls">{{>PlayButton section="center"}}</div>
      <media-control-bar>
        {{>MuteButton}} {{>VolumeRange}}
        <div class="spacer"></div>
        {{>CaptionsButton}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
      </media-control-bar>
    </template>

    <template if="layout == 'live large'">
      <media-control-bar slot="top-chrome">
        <slot name="seek-live"></slot>
        {{>TitleDisplay}}
      </media-control-bar>
      <div slot="centered-chrome" class="center-controls">{{>PlayButton section="center"}}</div>
      <media-control-bar>
        {{>PlayButton}} {{>MuteButton}} {{>VolumeRange}}
        <div class="spacer"></div>
        {{>CaptionsButton}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
      </media-control-bar>
    </template>

    <template if="layout == 'dvr extra-small'">
      <media-control-bar slot="top-chrome">
        <slot name="seek-live"></slot>
      </media-control-bar>
      {{>TimeRange}}
      <media-control-bar>
        {{>PlayButton}} {{>MuteButton}}
        <div class="spacer"></div>
        {{>CaptionsButton}} {{>FullscreenButton}}
      </media-control-bar>
    </template>

    <template if="layout == 'dvr small'">
      <media-control-bar slot="top-chrome">
        <slot name="seek-live"></slot>
        {{>TitleDisplay}}
      </media-control-bar>
      <div slot="centered-chrome" class="center-controls">
        {{>SeekBackwardButton section="center"}} {{>PlayButton section="center"}} {{>SeekForwardButton
        section="center"}}
      </div>
      {{>TimeRange}}
      <media-control-bar>
        {{>MuteButton}} {{>VolumeRange}}
        <div class="spacer"></div>
        {{>CaptionsButton}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
      </media-control-bar>
    </template>

    <template if="layout == 'dvr large'">
      <media-control-bar slot="top-chrome">
        <slot name="seek-live"></slot>
        {{>TitleDisplay}}
      </media-control-bar>
      <div slot="centered-chrome" class="center-controls">{{>PlayButton section="center"}}</div>
      {{>TimeRange}}
      <media-control-bar>
        {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>MuteButton}} {{>VolumeRange}}
        <div class="spacer"></div>
        {{>CaptionsButton}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
      </media-control-bar>
    </template>

    <slot></slot>
  </media-controller>
</template>
`;var Gn=`
  :host {
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #fff;
    line-height: 18px;
    font-family: Arial, sans-serif;
    padding: var(--media-dialog-backdrop-padding, 0);
    background: var(--media-dialog-backdrop-background,
      linear-gradient(to bottom, rgba(20, 20, 30, 0.7) 50%, rgba(20, 20, 30, 0.9))
    );
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-open, visibility .2s, opacity .2s) !important;
    transform: var(--media-dialog-transform-open, none) !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  :host(:not([open])) {
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-close, visibility .1s, opacity .1s) !important;
    transform: var(--media-dialog-transform-close, none) !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    background: var(--media-dialog-background, none);
    padding: var(--media-dialog-padding, 10px);
    width: min(320px, 100%);
    word-wrap: break-word;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    line-height: 1.4;
  }
`,Zn=H.createElement("template");Zn.innerHTML=`
  <style>
    ${Gn}
  </style>

  <div class="dialog">
    <slot></slot>
  </div>
`;var ve=class extends D.HTMLElement{constructor(){var t;super();this.attachShadow({mode:"open"}),(t=this.shadowRoot)==null||t.appendChild(this.constructor.template.content.cloneNode(!0))}show(){this.setAttribute("open",""),this.dispatchEvent(new CustomEvent("open",{composed:!0,bubbles:!0})),Yn(this)}close(){!this.hasAttribute("open")||(this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0})),tl(this))}attributeChangedCallback(t,a,r){t==="open"&&a!==r&&(r!=null?this.show():this.close())}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","dialog"),this.hasAttribute("open")&&Yn(this)}};ve.styles=Gn,ve.template=Zn,ve.observedAttributes=["open"];function Yn(i){let e=new CustomEvent("initfocus",{composed:!0,bubbles:!0,cancelable:!0});if(i.dispatchEvent(e),e.defaultPrevented)return;let t=i.querySelector("[autofocus]:not([disabled])");!t&&i.tabIndex>=0&&(t=i),t||(t=qn(i.shadowRoot)),i._previouslyFocusedElement=H.activeElement,H.activeElement instanceof HTMLElement&&H.activeElement.blur(),i.addEventListener("transitionend",()=>{t instanceof HTMLElement&&t.focus({preventScroll:!0})},{once:!0})}function qn(i){let t=["button","input","keygen","select","textarea"].map(function(r){return r+":not([disabled])"});t.push('[tabindex]:not([disabled]):not([tabindex=""])');let a=i==null?void 0:i.querySelector(t.join(", "));if(!a&&"attachShadow"in Element.prototype){let r=(i==null?void 0:i.querySelectorAll("*"))||[];for(let n=0;n<r.length&&!(r[n].tagName&&r[n].shadowRoot&&(a=qn(r[n].shadowRoot),a));n++);}return a}function tl(i){i._previouslyFocusedElement instanceof HTMLElement&&i._previouslyFocusedElement.focus()}D.customElements.get("media-dialog")||(D.customElements.define("media-dialog",ve),D.MediaDialog=ve);var Na=ve;var Qn=H.createElement("template");Qn.innerHTML=`
  <style>
    ${Na.styles}

    .close {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 28px;
      height: 28px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  </style>

  <div class="dialog">
    <slot></slot>
  </div>

  <slot name="close">
    <button class="close" tabindex="0">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </slot>
`;var yt=class extends Na{constructor(){var e,t;super(),(t=(e=this.shadowRoot)==null?void 0:e.querySelector(".close"))==null||t.addEventListener("click",()=>{this.close()})}};yt.template=Qn;D.customElements.get("mxp-dialog")||(D.customElements.define("mxp-dialog",yt),D.MxpDialog=yt);var Tt=new WeakMap,It=class{constructor(e,t){this.element=e;this.type=t;this.element.addEventListener(this.type,this);let a=Tt.get(this.element);a&&a.set(this.type,this)}set(e){if(typeof e=="function")this.handleEvent=e.bind(this.element);else if(typeof e=="object"&&typeof e.handleEvent=="function")this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let t=Tt.get(this.element);t&&t.delete(this.type)}}static for(e){Tt.has(e.element)||Tt.set(e.element,new Map);let t=e.attributeName.slice(2),a=Tt.get(e.element);return a&&a.has(t)?a.get(t):new It(e.element,t)}};function il(i,e){return i instanceof F&&i.attributeName.startsWith("on")?(It.for(i).set(e),i.element.removeAttributeNS(i.attributeNamespace,i.attributeName),!0):!1}function al(i,e){return e instanceof gi&&i instanceof se?(e.renderInto(i),!0):!1}function rl(i,e){return e instanceof DocumentFragment&&i instanceof se?(e.childNodes.length&&i.replace(...e.childNodes),!0):!1}function nl(i,e){if(i instanceof F){let t=i.attributeNamespace,a=i.element.getAttributeNS(t,i.attributeName);return String(e)!==a&&(i.value=String(e)),!0}return i.value=String(e),!0}function ol(i,e){if(i instanceof F&&e instanceof Element){let t=i.element;return t[i.attributeName]!==e&&(i.element.removeAttributeNS(i.attributeNamespace,i.attributeName),t[i.attributeName]=e),!0}return!1}function sl(i,e){if(typeof e=="boolean"&&i instanceof F){let t=i.attributeNamespace,a=i.element.hasAttributeNS(t,i.attributeName);return e!==a&&(i.booleanValue=e),!0}return!1}function ll(i,e){return e===!1&&i instanceof se?(i.replace(""),!0):!1}function dl(i,e){ol(i,e)||sl(i,e)||il(i,e)||ll(i,e)||al(i,e)||rl(i,e)||nl(i,e)}var Ba=new Map,zn=new WeakMap,Xn=new WeakMap,gi=class{constructor(e,t,a){this.strings=e;this.values=t;this.processor=a;this.stringsKey=this.strings.join("")}get template(){if(Ba.has(this.stringsKey))return Ba.get(this.stringsKey);{let e=H.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((a,r,n)=>a+r+(n<t?`{{ ${n} }}`:""),""),Ba.set(this.stringsKey,e),e}}renderInto(e){let t=this.template;if(zn.get(e)!==t){zn.set(e,t);let r=new oe(t,this.values,this.processor);Xn.set(e,r),e instanceof se?e.replace(...r.children):e.appendChild(r);return}let a=Xn.get(e);a&&a.update(this.values)}},ul={processCallback(i,e,t){var a;if(!!t){for(let[r,n]of e)if(r in t){let s=(a=t[r])!=null?a:"";dl(n,s)}}}};function X(i,...e){return new gi(i,e,ul)}function jn(i,e){i.renderInto(e)}var De=require("@mux/playback-core"),$a=H.createElement("template");"innerHTML"in $a&&($a.innerHTML=Kn);var Jn=i=>X`
  <style>
    ${Fn}
  </style>
  ${hl(i)}
`,Va=i=>[De.StreamTypes.LIVE,De.StreamTypes.LL_LIVE].includes(i.streamType),Ha=i=>[De.StreamTypes.LIVE,De.StreamTypes.LL_LIVE,De.StreamTypes.DVR,De.StreamTypes.LL_DVR].includes(i.streamType),cl=i=>{let e="";return i.audio&&(e+="audio "),Va(i)?e+="live":Ha(i)?e+="dvr":e+=i.streamType||"on-demand",!i.audio&&i.playerSize&&(e+=` ${i.playerSize}`),e},ml=i=>{let e=i.hotKeys?`${i.hotKeys}`:"";return Ha(i)&&(e+=" noarrowleft noarrowright"),e},hl=i=>{var e,t,a,r,n,s,l,c,m,E,f,w,T,P,M,R,L,G,Z,ie,Re,wt,Ka,Ya,Ga,Za,qa,Qa,za,Xa,ja,Ja;return X`
  <media-theme
    template="${(e=i.theme)!=null?e:$a.content.children[0]}"
    class="size-${i.playerSize}${i.secondaryColor?" two-tone":""}"
    player-size="${(t=i.playerSize)!=null?t:!1}"
    layout="${cl(i)}"
    hotkeys="${ml(i)||!1}"
    nohotkeys="${i.noHotKeys||!i.hasSrc||i.isDialogOpen||!1}"
    disabled="${!i.hasSrc||i.isDialogOpen}"
    audio="${(a=i.audio)!=null?a:!1}"
    style="${(r=bn({"--primary-color":i.primaryColor,"--secondary-color":i.secondaryColor}))!=null?r:!1}"
    default-showing-captions="${!i.defaultHiddenCaptions}"
    forward-seek-offset="${(n=i.forwardSeekOffset)!=null?n:!1}"
    backward-seek-offset="${(s=i.backwardSeekOffset)!=null?s:!1}"
    playback-rates="${(l=i.playbackRates)!=null?l:!1}"
    default-show-remaining-time="${(c=i.defaultShowRemainingTime)!=null?c:!1}"
    title="${(m=i.title)!=null?m:!1}"
    poster="${i.poster===""?!1:(E=i.poster)!=null?E:!1}"
    placeholder="${(f=i.placeholder)!=null?f:!1}"
    exportparts="top, center, bottom, layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer, poster, seek-live, play, button, seek-backward, seek-forward, mute, captions, airplay, pip, fullscreen, cast, playback-rate, volume, range, time, display"
  >
    <mux-video
      slot="media"
      crossorigin="${(w=i.crossOrigin)!=null?w:""}"
      playsinline
      autoplay="${(T=i.autoplay)!=null?T:!1}"
      muted="${(P=i.muted)!=null?P:!1}"
      loop="${(M=i.loop)!=null?M:!1}"
      preload="${(R=i.preload)!=null?R:!1}"
      debug="${(L=i.debug)!=null?L:!1}"
      prefer-cmcd="${(G=i.preferCmcd)!=null?G:!1}"
      disable-cookies="${(Z=i.disableCookies)!=null?Z:!1}"
      prefer-playback="${(ie=i.preferPlayback)!=null?ie:!1}"
      start-time="${i.startTime!=null?i.startTime:!1}"
      beacon-collection-domain="${(Re=i.beaconCollectionDomain)!=null?Re:!1}"
      player-software-name="${(wt=i.playerSoftwareName)!=null?wt:!1}"
      player-software-version="${(Ka=i.playerSoftwareVersion)!=null?Ka:!1}"
      env-key="${(Ya=i.envKey)!=null?Ya:!1}"
      stream-type="${(Ga=i.streamType)!=null?Ga:!1}"
      custom-domain="${(Za=i.customDomain)!=null?Za:!1}"
      src="${i.src?i.src:i.playbackId?wa(i.playbackId,{domain:i.customDomain,token:i.tokens.playback}):!1}"
      cast-src="${i.src?i.src:i.playbackId?wa(i.playbackId,{domain:i.customDomain,token:i.tokens.playback}):!1}"
      cast-stream-type="${Va(i)?"live":!1}"
      exportparts="video"
    >
      ${i.storyboard?X`<track label="thumbnails" default kind="metadata" src="${i.storyboard}" />`:X``}
    </mux-video>
    ${Ha(i)?X`<button
          slot="seek-live"
          part="${Va(i)?"top":"bottom"} seek-live button"
          disabled="${i.inLiveWindow||!i.hasSrc||i.isDialogOpen}"
          aria-disabled="${(i.inLiveWindow||!i.hasSrc||i.isDialogOpen)&&"true"}"
          in-live-window="${i.inLiveWindow}"
          onclick="${function(lo){var er;if((er=i.onSeekToLive)==null||er.call(i,lo),i.paused){let uo=new CustomEvent("mediaplayrequest",{composed:!0,bubbles:!0});this.dispatchEvent(uo)}}}"
        >
          <svg viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"></circle></svg>
          Live
        </button>`:X``}
    <mxp-dialog
      no-auto-hide
      open="${(qa=i.isDialogOpen)!=null?qa:!1}"
      onclose="${i.onCloseErrorDialog}"
      oninitfocus="${i.onInitFocusDialog}"
    >
      ${(Qa=i.dialog)!=null&&Qa.title?X`<h3>${i.dialog.title}</h3>`:X``}
      <p>
        ${(za=i.dialog)==null?void 0:za.message}
        ${(Xa=i.dialog)!=null&&Xa.linkUrl?X`<a
              href="${i.dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(ja=i.dialog.linkText)!=null?ja:""} ${y("(opens in a new window)")}"
              >${(Ja=i.dialog.linkText)!=null?Ja:i.dialog.linkUrl}</a
            >`:X``}
      </p>
    </mxp-dialog>
  </media-theme>
`};var Mt=require("@mux/mux-video");function Ai(i,e,t,a,r){var l,c,m;let n={},s={};switch(i.code){case Mt.MediaError.MEDIA_ERR_NETWORK:{switch(n.title=y("Network Error",r),n.message=i.message,(l=i.data)==null?void 0:l.response.code){case 412:{n.title=y("Video is not currently available",r),n.message=y("The live stream or video file are not yet ready.",r),s.message=y("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),s.file="412-not-playable.md";break}case 404:{n.title=y("Video does not exist",r),n.message="",s.message=y("This playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),s.file="404-not-found.md";break}case 403:{if(n.title=y("Invalid playback URL",r),n.message=y("The video URL or playback-token are formatted with incorrect or incomplete information.",r),s.message=y("403 error trying to access this playback URL. If this is a signed URL, you might need to provide a playback-token.",r),s.file="missing-signed-tokens.md",!a)break;let{exp:E,aud:f,sub:w}=he(a),T=Date.now()>E*1e3,P=w!==t,M=f!=="v",R={timeStyle:"medium",dateStyle:"medium"};if(T){n.title=y("Video URL has expired",r),n.message=y("The video\u2019s secured playback-token has expired.",r),s.message=y("This playback is using signed URLs and the playback-token has expired. Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat(Me.code,R).format(E*1e3),currentDate:new Intl.DateTimeFormat(Me.code,R).format(Date.now())}),s.file="403-expired-token.md";break}if(P){n.title=y("Video URL is formatted incorrectly",r),n.message=y("The video\u2019s playback ID does not match the one encoded in the playback-token.",r),s.message=y("The specified playback ID {playbackId} and the playback ID encoded in the playback-token {tokenPlaybackId} do not match.",r).format({playbackId:t,tokenPlaybackId:w}),s.file="403-playback-id-mismatch.md";break}if(M){n.title=y("Video URL is formatted incorrectly",r),n.message=y("The playback-token is formatted with incorrect information.",r),s.message=y("The playback-token has an incorrect aud value: {tokenType}. aud value should be v.",r).format({tokenType:f}),s.file="403-incorrect-aud-value.md";break}s.message=y("403 error trying to access this playback URL. If this is a signed playback ID, the token might not have been generated correctly.",r),s.file="403-malformatted-token.md";break}}break}case Mt.MediaError.MEDIA_ERR_DECODE:{let{message:E}=i;n={title:y("Media Error",r),message:E},s.file="media-decode-error.md";break}case Mt.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:{let E=(m=(c=i.data)==null?void 0:c.response)==null?void 0:m.code;if(E>=400&&E<500){i.code=Mt.MediaError.MEDIA_ERR_NETWORK,i.data={response:{code:E}},{dialog:n,devlog:s}=Ai(i,e,t,a);break}n={title:y("Source Not Supported",r),message:i.message},s.file="media-src-not-supported.md";break}default:n={title:y("Error",r),message:i.message};break}return e&&(n={title:y("Your device appears to be offline",r),message:y("Check your internet connection and try reloading this video.",r)}),{dialog:n,devlog:s}}var pl=Object.values(k.StreamTypes),bl=700,El=300,Wa={LG:"large",SM:"small",XS:"extra-small"};function _i(i){let e=i.getBoundingClientRect();return e.width<El?Wa.XS:e.width<bl?Wa.SM:Wa.LG}var le={SRC:"src",POSTER:"poster"},b={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",TITLE:"title",PLACEHOLDER:"placeholder"};function fl(i,e){var a,r;return{src:!i.playbackId&&i.src,playbackId:i.playbackId,hasSrc:!!i.playbackId||!!i.src,poster:i.poster,storyboard:i.storyboard,placeholder:i.getAttribute("placeholder"),theme:i.getAttribute("theme"),thumbnailTime:!i.tokens.thumbnail&&i.thumbnailTime,autoplay:i.autoplay,crossOrigin:i.crossOrigin,loop:i.loop,noHotKeys:i.hasAttribute(b.NOHOTKEYS),hotKeys:i.getAttribute(b.HOTKEYS),muted:i.muted,paused:i.paused,preload:i.preload,envKey:i.envKey,preferCmcd:i.preferCmcd,debug:i.debug,disableCookies:i.disableCookies,tokens:i.tokens,beaconCollectionDomain:i.beaconCollectionDomain,metadata:i.metadata,playerSoftwareName:i.playerSoftwareName,playerSoftwareVersion:i.playerSoftwareVersion,startTime:i.startTime,preferPlayback:i.preferPlayback,audio:i.audio,streamType:i.streamType,primaryColor:i.primaryColor,secondaryColor:i.secondaryColor,forwardSeekOffset:i.forwardSeekOffset,backwardSeekOffset:i.backwardSeekOffset,defaultHiddenCaptions:i.defaultHiddenCaptions,defaultShowRemainingTime:i.defaultShowRemainingTime,playbackRates:i.getAttribute(b.PLAYBACK_RATES),customDomain:(a=i.getAttribute(g.Attributes.CUSTOM_DOMAIN))!=null?a:void 0,playerSize:_i((r=i.mediaController)!=null?r:i),title:i.getAttribute(b.TITLE),...e}}var vl=Object.values(g.Attributes),gl=Object.values(le),Al=Object.values(b),_l=di(),yl="mux-player",eo={dialog:void 0,isDialogOpen:!1,inLiveWindow:!1},xe,St,de,Lt,ze,te,Xe,yi,Ii,to,Ae,Qe,je,Ti,Ct,Fa,Mi,io,ki,ao,Si,ro,Li,no,Ci,oo,wi,so,kt=class extends Ra{constructor(){super();I(this,Xe);I(this,Ii);I(this,Ae);I(this,je);I(this,Ct);I(this,Mi);I(this,ki);I(this,Si);I(this,Li);I(this,Ci);I(this,wi);I(this,xe,!1);I(this,St,{});I(this,de,!0);I(this,Lt,new li(this,"hotkeys"));I(this,ze,void 0);I(this,te,{...eo,onCloseErrorDialog:()=>S(this,Ae,Qe).call(this,{dialog:void 0,isDialogOpen:!1}),onInitFocusDialog:t=>{La(this,H.activeElement)||t.preventDefault()},onSeekToLive:()=>Da(this)});this.attachShadow({mode:"open"}),S(this,Ii,to).call(this),this.isConnected&&S(this,Xe,yi).call(this)}static get observedAttributes(){var t;return[...(t=Ra.observedAttributes)!=null?t:[],...gl,...vl,...Al]}get theme(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("media-theme")}get mediaController(){var t,a;return(a=(t=this.theme)==null?void 0:t.shadowRoot)==null?void 0:a.querySelector("media-controller")}get metadataFromAttrs(){return this.getAttributeNames().filter(t=>t.startsWith("metadata-")).reduce((t,a)=>{let r=this.getAttribute(a);return r!==null&&(t[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),t},{})}connectedCallback(){var a;S(this,Ct,Fa).call(this);let t=(a=this.shadowRoot)==null?void 0:a.querySelector("mux-video");t&&(t.metadata=this.metadataFromAttrs),S(this,Mi,io).call(this)}disconnectedCallback(){S(this,ki,ao).call(this)}attributeChangedCallback(t,a,r){switch(v(this,xe)||S(this,Xe,yi).call(this),super.attributeChangedCallback(t,a,r),t){case b.HOTKEYS:v(this,Lt).value=r;break;case b.THUMBNAIL_TIME:{r!=null&&this.tokens.thumbnail&&pe(y("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").format({}));break}case b.THUMBNAIL_TOKEN:{let{aud:s}=he(r);r&&s!=="t"&&pe(y("The provided thumbnail-token should have audience value 't' instead of '{aud}'.").format({aud:s}));break}case b.STORYBOARD_TOKEN:{let{aud:s}=he(r);r&&s!=="s"&&pe(y("The provided storyboard-token should have audience value 's' instead of '{aud}'.").format({aud:s}));break}case g.Attributes.PLAYBACK_ID:{r!=null&&r.includes("?token")&&J(y("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:r})),this.streamType?this.streamType!=null&&!pl.includes(this.streamType)&&ui({file:"invalid-stream-type.md",message:y("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand`, `live`, `ll-live`, `live:dvr`, or `ll-live:dvr`").format({streamType:this.streamType})}):ui({file:"invalid-stream-type.md",message:String(y("No stream-type value supplied. Defaulting to `on-demand`. Please provide stream-type as either: `on-demand`, `live`, `ll-live`, `live:dvr`, or `ll-live:dvr`"))});break}}[g.Attributes.PLAYBACK_ID,le.SRC,b.PLAYBACK_TOKEN].includes(t)&&a!==r&&V(this,te,{...v(this,te),...eo}),S(this,je,Ti).call(this,{[_n(t)]:r})}get preferCmcd(){var t;return(t=this.getAttribute(g.Attributes.PREFER_CMCD))!=null?t:void 0}set preferCmcd(t){t!==this.preferCmcd&&(t?k.CmcdTypeValues.includes(t)?this.setAttribute(g.Attributes.PREFER_CMCD,t):pe(`Invalid value for preferCmcd. Must be one of ${k.CmcdTypeValues.join()}`):this.removeAttribute(g.Attributes.PREFER_CMCD))}get hasPlayed(){var t,a;return(a=(t=this.mediaController)==null?void 0:t.hasAttribute("media-has-played"))!=null?a:!1}get inLiveWindow(){return v(this,te).inLiveWindow}get _hls(){var t;return(t=this.media)==null?void 0:t._hls}get mux(){var t;return(t=this.media)==null?void 0:t.mux}get playbackId(){var t;return(t=this.getAttribute(g.Attributes.PLAYBACK_ID))!=null?t:void 0}set playbackId(t){t?this.setAttribute(g.Attributes.PLAYBACK_ID,t):this.removeAttribute(g.Attributes.PLAYBACK_ID)}get src(){var t,a;return this.playbackId?(t=ge(this,le.SRC))!=null?t:void 0:(a=this.getAttribute(le.SRC))!=null?a:void 0}set src(t){t?this.setAttribute(le.SRC,t):this.removeAttribute(le.SRC)}get poster(){var a;let t=this.getAttribute(le.POSTER);if(t!=null)return t;if(this.playbackId&&!this.audio)return gn(this.playbackId,{domain:this.customDomain,thumbnailTime:(a=this.thumbnailTime)!=null?a:this.startTime,token:this.tokens.thumbnail})}set poster(t){t||t===""?this.setAttribute(le.POSTER,t):this.removeAttribute(le.POSTER)}get storyboard(){if(this.playbackId&&!this.audio&&(!this.streamType||![k.StreamTypes.LIVE,k.StreamTypes.LL_LIVE,k.StreamTypes.DVR,k.StreamTypes.LL_DVR].includes(this.streamType)))return An(this.playbackId,{domain:this.customDomain,token:this.tokens.storyboard})}get audio(){return this.hasAttribute(b.AUDIO)}set audio(t){if(!t){this.removeAttribute(b.AUDIO);return}this.setAttribute(b.AUDIO,"")}get hotkeys(){return v(this,Lt)}get nohotkeys(){return this.hasAttribute(b.NOHOTKEYS)}set nohotkeys(t){if(!t){this.removeAttribute(b.NOHOTKEYS);return}this.setAttribute(b.NOHOTKEYS,"")}get thumbnailTime(){return re(this.getAttribute(b.THUMBNAIL_TIME))}set thumbnailTime(t){this.setAttribute(b.THUMBNAIL_TIME,`${t}`)}get title(){var t;return(t=this.getAttribute(b.TITLE))!=null?t:""}set title(t){t!==this.title&&(t?this.setAttribute(b.TITLE,t):this.removeAttribute("title"),super.title=t)}get placeholder(){var t;return(t=ge(this,b.PLACEHOLDER))!=null?t:""}set placeholder(t){this.setAttribute(b.PLACEHOLDER,`${t}`)}get primaryColor(){var t;return(t=this.getAttribute(b.PRIMARY_COLOR))!=null?t:void 0}set primaryColor(t){this.setAttribute(b.PRIMARY_COLOR,`${t}`)}get secondaryColor(){var t;return(t=this.getAttribute(b.SECONDARY_COLOR))!=null?t:"rgb(0 0 0 / .65)"}set secondaryColor(t){this.setAttribute(b.SECONDARY_COLOR,`${t}`)}get defaultShowRemainingTime(){return this.hasAttribute(b.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(t){t?this.setAttribute(b.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(b.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(!!this.hasAttribute(b.PLAYBACK_RATES))return this.getAttribute(b.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(t=>Number(t)).filter(t=>!Number.isNaN(t)).sort((t,a)=>t-a)}set playbackRates(t){if(!t){this.removeAttribute(b.PLAYBACK_RATES);return}this.setAttribute(b.PLAYBACK_RATES,t.join(" "))}get forwardSeekOffset(){var t;return(t=re(this.getAttribute(b.FORWARD_SEEK_OFFSET)))!=null?t:10}set forwardSeekOffset(t){this.setAttribute(b.FORWARD_SEEK_OFFSET,`${t}`)}get backwardSeekOffset(){var t;return(t=re(this.getAttribute(b.BACKWARD_SEEK_OFFSET)))!=null?t:10}set backwardSeekOffset(t){this.setAttribute(b.BACKWARD_SEEK_OFFSET,`${t}`)}get defaultHiddenCaptions(){return this.hasAttribute(b.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(t){t?this.setAttribute(b.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(b.DEFAULT_HIDDEN_CAPTIONS)}get playerSoftwareName(){var t;return(t=this.getAttribute(g.Attributes.PLAYER_SOFTWARE_NAME))!=null?t:yl}get playerSoftwareVersion(){var t;return(t=this.getAttribute(g.Attributes.PLAYER_SOFTWARE_VERSION))!=null?t:_l}get beaconCollectionDomain(){var t;return(t=this.getAttribute(g.Attributes.BEACON_COLLECTION_DOMAIN))!=null?t:void 0}set beaconCollectionDomain(t){t!==this.beaconCollectionDomain&&(t?this.setAttribute(g.Attributes.BEACON_COLLECTION_DOMAIN,t):this.removeAttribute(g.Attributes.BEACON_COLLECTION_DOMAIN))}get customDomain(){var t;return(t=this.getAttribute(g.Attributes.CUSTOM_DOMAIN))!=null?t:void 0}set customDomain(t){t!==this.customDomain&&(t?this.setAttribute(g.Attributes.CUSTOM_DOMAIN,t):this.removeAttribute(g.Attributes.CUSTOM_DOMAIN))}get envKey(){var t;return(t=ge(this,g.Attributes.ENV_KEY))!=null?t:void 0}set envKey(t){this.setAttribute(g.Attributes.ENV_KEY,`${t}`)}get debug(){return ge(this,g.Attributes.DEBUG)!=null}set debug(t){t?this.setAttribute(g.Attributes.DEBUG,""):this.removeAttribute(g.Attributes.DEBUG)}get disableCookies(){return ge(this,g.Attributes.DISABLE_COOKIES)!=null}set disableCookies(t){t?this.setAttribute(g.Attributes.DISABLE_COOKIES,""):this.removeAttribute(g.Attributes.DISABLE_COOKIES)}get streamType(){return ge(this,g.Attributes.STREAM_TYPE)}set streamType(t){this.setAttribute(g.Attributes.STREAM_TYPE,`${t}`)}get startTime(){return re(ge(this,g.Attributes.START_TIME))}set startTime(t){this.setAttribute(g.Attributes.START_TIME,`${t}`)}get preferPlayback(){let t=this.getAttribute(g.Attributes.PREFER_PLAYBACK);if(t===k.PlaybackTypes.MSE||t===k.PlaybackTypes.NATIVE)return t}set preferPlayback(t){t!==this.preferPlayback&&(t===k.PlaybackTypes.MSE||t===k.PlaybackTypes.NATIVE?this.setAttribute(g.Attributes.PREFER_PLAYBACK,t):this.removeAttribute(g.Attributes.PREFER_PLAYBACK))}get metadata(){var t;return(t=this.media)==null?void 0:t.metadata}set metadata(t){if(v(this,xe)||S(this,Xe,yi).call(this),!this.media){J("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...this.metadataFromAttrs,...t}}get tokens(){let t=this.getAttribute(b.PLAYBACK_TOKEN),a=this.getAttribute(b.THUMBNAIL_TOKEN),r=this.getAttribute(b.STORYBOARD_TOKEN);return{...v(this,St),...t!=null?{playback:t}:{},...a!=null?{thumbnail:a}:{},...r!=null?{storyboard:r}:{}}}set tokens(t){V(this,St,t!=null?t:{})}get playbackToken(){var t;return(t=this.getAttribute(b.PLAYBACK_TOKEN))!=null?t:void 0}set playbackToken(t){this.setAttribute(b.PLAYBACK_TOKEN,`${t}`)}get thumbnailToken(){var t;return(t=this.getAttribute(b.THUMBNAIL_TOKEN))!=null?t:void 0}set thumbnailToken(t){this.setAttribute(b.THUMBNAIL_TOKEN,`${t}`)}get storyboardToken(){var t;return(t=this.getAttribute(b.STORYBOARD_TOKEN))!=null?t:void 0}set storyboardToken(t){this.setAttribute(b.STORYBOARD_TOKEN,`${t}`)}addTextTrack(t,a,r,n){var l;let s=(l=this.media)==null?void 0:l.nativeEl;if(!!s)return(0,k.addTextTrack)(s,t,a,r,n)}removeTextTrack(t){var r;let a=(r=this.media)==null?void 0:r.nativeEl;if(!!a)return(0,k.removeTextTrack)(a,t)}get textTracks(){var t;return(t=this.media)==null?void 0:t.textTracks}};xe=new WeakMap,St=new WeakMap,de=new WeakMap,Lt=new WeakMap,ze=new WeakMap,te=new WeakMap,Xe=new WeakSet,yi=function(){var t,a;if(!v(this,xe)){V(this,xe,!0),S(this,Ae,Qe).call(this,{playerSize:_i(this)});try{if(customElements.upgrade(this.theme),!(this.theme instanceof D.HTMLElement))throw""}catch{J("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof g.default))throw""}catch{J("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof dt))throw""}catch{J("<media-controller> failed to upgrade!")}Ln(this),S(this,Li,no).call(this),S(this,Ci,oo).call(this),S(this,Si,ro).call(this),V(this,de,(a=(t=this.mediaController)==null?void 0:t.hasAttribute("user-inactive"))!=null?a:!0),S(this,wi,so).call(this)}},Ii=new WeakSet,to=function(){var t,a;try{(t=window==null?void 0:window.CSS)==null||t.registerProperty({name:"--primary-color",syntax:"<color>",inherits:!0,initialValue:"white"}),(a=window==null?void 0:window.CSS)==null||a.registerProperty({name:"--secondary-color",syntax:"<color>",inherits:!0,initialValue:"transparent"})}catch{}},Ae=new WeakSet,Qe=function(t){Object.assign(v(this,te),t),S(this,je,Ti).call(this)},je=new WeakSet,Ti=function(t={}){jn(Jn(fl(this,{...v(this,te),...t})),this.shadowRoot)},Ct=new WeakSet,Fa=function(){var t,a;v(this,te).playerSize!=_i((t=this.mediaController)!=null?t:this)&&S(this,Ae,Qe).call(this,{playerSize:_i((a=this.mediaController)!=null?a:this)})},Mi=new WeakSet,io=function(){var t;V(this,ze,new ResizeObserver(()=>S(this,Ct,Fa).call(this))),v(this,ze).observe((t=this.mediaController)!=null?t:this)},ki=new WeakSet,ao=function(){var t;(t=v(this,ze))==null||t.disconnect()},Si=new WeakSet,ro=function(){var a,r,n,s,l;(a=this.mediaController)==null||a.addEventListener("mediaplayrequest",c=>{var m;((m=c.target)==null?void 0:m.localName)==="media-play-button"&&this.streamType&&[k.StreamTypes.LIVE,k.StreamTypes.LL_LIVE,k.StreamTypes.DVR,k.StreamTypes.LL_DVR].includes(this.streamType)&&this.hasPlayed&&Da(this)});let t=()=>{let c=Tn(this),m=v(this,te).inLiveWindow;c!==m&&(S(this,Ae,Qe).call(this,{inLiveWindow:c}),this.dispatchEvent(new CustomEvent("inlivewindowchange",{composed:!0,bubbles:!0,detail:this.inLiveWindow})))};(r=this.media)==null||r.addEventListener("progress",t),(n=this.media)==null||n.addEventListener("waiting",t),(s=this.media)==null||s.addEventListener("timeupdate",t),(l=this.media)==null||l.addEventListener("emptied",t)},Li=new WeakSet,no=function(){var a;let t=r=>{let{detail:n}=r;if(n instanceof g.MediaError||(n=new g.MediaError(n.message,n.code,n.fatal)),!(n!=null&&n.fatal)){pe(n),n.data&&pe(`${n.name} data:`,n.data);return}let{dialog:s,devlog:l}=Ai(n,!window.navigator.onLine,this.playbackId,this.playbackToken);l.message&&ui(l),J(n),n.data&&J(`${n.name} data:`,n.data),S(this,Ae,Qe).call(this,{isDialogOpen:!0,dialog:s})};this.addEventListener("error",t),this.media&&(this.media.errorTranslator=(r={})=>{var s,l,c;if(!((s=this.media)!=null&&s.error))return r;let{devlog:n}=Ai((l=this.media)==null?void 0:l.error,!window.navigator.onLine,this.playbackId,this.playbackToken,!1);return{player_error_code:(c=this.media)==null?void 0:c.error.code,player_error_message:n.message?String(n.message):r.player_error_message}}),(a=this.media)==null||a.addEventListener("error",r=>{var s,l;let{detail:n}=r;if(!n){let{message:c,code:m}=(l=(s=this.media)==null?void 0:s.error)!=null?l:{};n=new g.MediaError(c,m)}!(n!=null&&n.fatal)||this.dispatchEvent(new CustomEvent("error",{detail:n}))})},Ci=new WeakSet,oo=function(){var a,r,n,s;let t=()=>S(this,je,Ti).call(this);(r=(a=this.media)==null?void 0:a.textTracks)==null||r.addEventListener("addtrack",t),(s=(n=this.media)==null?void 0:n.textTracks)==null||s.addEventListener("removetrack",t)},wi=new WeakSet,so=function(){var E,f,w;let t=this.mediaController,a=/.*Version\/.*Safari\/.*/.test(navigator.userAgent);if(a)return;let r,n=new WeakMap,s=()=>this.streamType&&[k.StreamTypes.LIVE,k.StreamTypes.LL_LIVE].includes(this.streamType)&&!this.secondaryColor&&this.offsetWidth>=800,l=(T,P,M=!1)=>{if(s())return;Array.from(T&&T.activeCues||[]).forEach(L=>{if(!(!L.snapToLines||L.line<-5||L.line>=0&&L.line<10))if(!P||this.paused){let G=L.text.split(`
`).length,Z=a?-2:-3;this.streamType&&[k.StreamTypes.LIVE,k.StreamTypes.LL_LIVE].includes(this.streamType)&&(Z=a?-1:-2);let ie=Z-G;if(L.line===ie&&!M)return;n.has(L)||n.set(L,L.line),L.line=ie-1,L.line=ie}else setTimeout(()=>{L.line=n.get(L)||"auto"},500)})},c=()=>{var T;l(r,(T=t==null?void 0:t.hasAttribute("user-inactive"))!=null?T:!1)},m=()=>{var M;let P=Array.from(((M=t==null?void 0:t.media)==null?void 0:M.textTracks)||[]).filter(R=>["subtitles","captions"].includes(R.kind)&&R.mode==="showing")[0];P!==r&&(r==null||r.removeEventListener("cuechange",c)),r=P,r==null||r.addEventListener("cuechange",c),l(r,v(this,de))};if(m(),(E=t==null?void 0:t.media)==null||E.textTracks.addEventListener("change",m),(f=t==null?void 0:t.media)==null||f.textTracks.addEventListener("addtrack",m),navigator.userAgent.includes("Chrome/")){let T=()=>{l(r,v(this,de),!0),this.paused||window.requestAnimationFrame(T)};(w=t==null?void 0:t.media)==null||w.addEventListener("playing",()=>{T()})}t==null||t.addEventListener("userinactivechange",()=>{let T=t==null?void 0:t.hasAttribute("user-inactive");v(this,de)!==T&&(V(this,de,T),l(r,v(this,de)))})};function ge(i,e){return i.media?i.media.getAttribute(e):i.getAttribute(e)}D.customElements.get("mux-player")||(D.customElements.define("mux-player",kt),D.MuxPlayerElement=kt);var Tl=kt;
