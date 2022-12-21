var _e=(t,a,e)=>{if(!a.has(t))throw TypeError("Cannot "+e)};var l=(t,a,e)=>(_e(t,a,"read from private field"),e?e.call(t):a.get(t)),c=(t,a,e)=>{if(a.has(t))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(t):a.set(t,e)},k=(t,a,e,i)=>(_e(t,a,"write to private field"),i?i.call(t,e):a.set(t,e),e);var p=(t,a,e)=>(_e(t,a,"access private method"),e);var z=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};if(typeof DocumentFragment=="undefined"){class t extends z{}globalThis.DocumentFragment=t}var ae=class extends z{},Ne=class extends z{},ea={get(t){},define(t,a,e){},upgrade(t){},whenDefined(t){return Promise.resolve(ae)}},ie,Ve=class{constructor(a,e={}){c(this,ie,void 0);k(this,ie,e==null?void 0:e.detail)}get detail(){return l(this,ie)}initCustomEvent(){}};ie=new WeakMap;function ta(t,a){return new ae}var pt={document:{createElement:ta},DocumentFragment,customElements:ea,CustomEvent:Ve,EventTarget:z,HTMLElement:ae,HTMLVideoElement:Ne},bt=typeof window=="undefined"||typeof globalThis.customElements=="undefined",h=bt?pt:globalThis,E=bt?pt.document:globalThis.document;import{MediaController as Ra}from"media-chrome";import Ma,{MediaError as Je,Attributes as u}from"@mux/mux-video";import{StreamTypes as x,PlaybackTypes as we,addTextTrack as Pa,removeTextTrack as Ba,CmcdTypeValues as Ut}from"@mux/playback-core";import{VideoEvents as ua}from"@mux/mux-video";var aa="en",H={code:aa};var ht="en";function d(t,a=!0){var r,o;let e=a&&(o=(r=H)==null?void 0:r[t])!=null?o:t,i=a?H.code:ht;return new $e(e,i)}var $e=class{constructor(a,e=(i=>(i=H.code)!=null?i:ht)()){this.message=a,this.locale=e}format(a){return this.message.replace(/\{(\w+)\}/g,(e,i)=>{var r;return(r=a[i])!=null?r:""})}toString(){return this.message}};function gt(t){let a="";return Object.entries(t).forEach(([e,i])=>{i!=null&&(a+=`${ia(e)}: ${i}; `)}),a?a.trim():void 0}function ia(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function ft(t){return t.replace(/[-_]([a-z])/g,(a,e)=>e.toUpperCase())}function M(t){if(t==null)return;let a=+t;return Number.isNaN(a)?void 0:a}function be(t){let a=ra(t).toString();return a?"?"+a:""}function ra(t){let a={};for(let e in t)t[e]!=null&&(a[e]=t[e]);return new URLSearchParams(a)}function _(t){let a=(t!=null?t:"").split(".")[1];if(!a)return{};let e=a.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}var He=(t,a)=>!t||!a?!1:t.contains(a)?!0:He(t,a.getRootNode().host);import{StreamTypes as he}from"@mux/playback-core";var Ke="mux.com",oa=()=>{try{return"1.5.1"}catch{}return"UNKNOWN"},na=oa(),fe=()=>na,Fe=(t,{token:a,domain:e=Ke}={})=>`https://stream.${e}/${t}.m3u8${be(!!a?{token:a}:{redundant_streams:!0})}`,kt=(t,{token:a,thumbnailTime:e,domain:i=Ke}={})=>{let r=a==null?e:void 0,{aud:o}=_(a);if(!(a&&o!=="t"))return`https://image.${i}/${t}/thumbnail.webp${be({token:a,time:r})}`},Et=(t,{token:a,domain:e=Ke}={})=>{let{aud:i}=_(a);if(!(a&&i!=="s"))return`https://image.${e}/${t}/storyboard.vtt${be({token:a,format:"webp"})}`};var sa={crossorigin:"crossOrigin",playsinline:"playsInline"};function Tt(t){var a;return(a=sa[t])!=null?a:ft(t)}var At=t=>{var e,i;let{media:a}=t;return(i=(e=a==null?void 0:a._hls)==null?void 0:e.liveSyncPosition)!=null?i:a!=null&&a.seekable.length?a==null?void 0:a.seekable.end(a.seekable.length-1):void 0},Ue=t=>{let a=At(t);if(a==null){console.warn("attempting to seek to live but cannot determine live edge time!");return}t.currentTime=a},la=1,da=5,yt=3,vt=.5,xt=t=>{var o;let{streamType:a}=t,e=At(t),i=(o=t.media)==null?void 0:o.currentTime;if(e==null||i==null)return!1;let r=e-i;return a===he.LL_LIVE||a===he.LL_DVR?r<=la*(yt+vt):a===he.LIVE||a===he.DVR?r<=da*(yt+vt):!1},K,F,T,ge=class{constructor(a,e){c(this,K,void 0);c(this,F,void 0);c(this,T,[]);k(this,K,a),k(this,F,e)}[Symbol.iterator](){return l(this,T).values()}get length(){return l(this,T).length}get value(){var a;return(a=l(this,T).join(" "))!=null?a:""}set value(a){var e;a!==this.value&&(k(this,T,[]),this.add(...(e=a==null?void 0:a.split(" "))!=null?e:[]))}toString(){return this.value}item(a){return l(this,T)[a]}values(){return l(this,T).values()}keys(){return l(this,T).keys()}forEach(a){l(this,T).forEach(a)}add(...a){var e,i;a.forEach(r=>{this.contains(r)||l(this,T).push(r)}),!(this.value===""&&!((e=l(this,K))!=null&&e.hasAttribute(`${l(this,F)}`)))&&((i=l(this,K))==null||i.setAttribute(`${l(this,F)}`,`${this.value}`))}remove(...a){var e;a.forEach(i=>{l(this,T).splice(l(this,T).indexOf(i),1)}),(e=l(this,K))==null||e.setAttribute(`${l(this,F)}`,`${this.value}`)}contains(a){return l(this,T).includes(a)}toggle(a,e){return typeof e!="undefined"?e?(this.add(a),!0):(this.remove(a),!1):this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,e){this.remove(a),this.add(e)}};K=new WeakMap,F=new WeakMap,T=new WeakMap;var wt=`[mux-player ${fe()}]`;function N(...t){console.warn(wt,...t)}function L(...t){console.error(wt,...t)}function ye(t){var e;let a=(e=t.message)!=null?e:"";if(t.file){let i="https://github.com/muxinc/elements/blob/main/errors/";a+=` ${d("Read more: ")}
${i}${t.file}`}N(a)}var v={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},U={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},St=Object.freeze({length:0,start(t){let a=t>>>0;if(a>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${a}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let a=t>>>0;if(a>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${a}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),ma=ua.filter(t=>t!=="error"),ca=Object.values(v).filter(t=>![v.PLAYSINLINE].includes(t)),pa=Object.values(U);function Ct(t){t.querySelectorAll(":scope > track").forEach(a=>{var e;(e=t.media)==null||e.append(a.cloneNode())}),ma.forEach(a=>{var e;(e=t.media)==null||e.addEventListener(a,i=>{t.dispatchEvent(new Event(i.type))})})}var Ye=class extends h.HTMLElement{static get observedAttributes(){return[...ca,...pa]}constructor(){super(),this.querySelectorAll(":scope > track").forEach(i=>{var r;(r=this.media)==null||r.append(i.cloneNode())});let a=i=>{for(let r of i)r.type==="childList"&&(r.removedNodes.forEach(o=>{var m,b;let n=(m=this.media)==null?void 0:m.querySelector(`track[src="${o.src}"]`);n&&((b=this.media)==null||b.removeChild(n))}),r.addedNodes.forEach(o=>{var n;(n=this.media)==null||n.append(o.cloneNode())}))};new MutationObserver(a).observe(this,{childList:!0,subtree:!0})}attributeChangedCallback(a,e,i){var r,o;switch(a){case U.MUTED:{this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return}case U.VOLUME:{let n=(r=M(i))!=null?r:1;this.media&&(this.media.volume=n);return}case U.PLAYBACKRATE:{let n=(o=M(i))!=null?o:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var a,e;return(e=(a=this.media)==null?void 0:a.play())!=null?e:Promise.reject()}pause(){var a;(a=this.media)==null||a.pause()}requestCast(a){var e;return(e=this.media)==null?void 0:e.requestCast(a)}get media(){var a;return(a=this.shadowRoot)==null?void 0:a.querySelector("mux-video")}get paused(){var a,e;return(e=(a=this.media)==null?void 0:a.paused)!=null?e:!0}get duration(){var a,e;return(e=(a=this.media)==null?void 0:a.duration)!=null?e:NaN}get ended(){var a,e;return(e=(a=this.media)==null?void 0:a.ended)!=null?e:!1}get buffered(){var a,e;return(e=(a=this.media)==null?void 0:a.buffered)!=null?e:St}get seekable(){var a,e;return(e=(a=this.media)==null?void 0:a.seekable)!=null?e:St}get readyState(){var a,e;return(e=(a=this.media)==null?void 0:a.readyState)!=null?e:0}get videoWidth(){var a,e;return(e=(a=this.media)==null?void 0:a.videoWidth)!=null?e:0}get videoHeight(){var a,e;return(e=(a=this.media)==null?void 0:a.videoHeight)!=null?e:0}get currentTime(){var a,e;return(e=(a=this.media)==null?void 0:a.currentTime)!=null?e:0}set currentTime(a){this.media&&(this.media.currentTime=Number(a))}get volume(){var a,e;return(e=(a=this.media)==null?void 0:a.volume)!=null?e:1}set volume(a){this.media&&(this.media.volume=Number(a))}get playbackRate(){var a,e;return(e=(a=this.media)==null?void 0:a.playbackRate)!=null?e:1}set playbackRate(a){this.media&&(this.media.playbackRate=Number(a))}get defaultPlaybackRate(){var a;return(a=M(this.getAttribute(U.PLAYBACKRATE)))!=null?a:1}set defaultPlaybackRate(a){a!=null?this.setAttribute(U.PLAYBACKRATE,`${a}`):this.removeAttribute(U.PLAYBACKRATE)}get crossOrigin(){return re(this,v.CROSSORIGIN)}set crossOrigin(a){this.setAttribute(v.CROSSORIGIN,`${a}`)}get autoplay(){return re(this,v.AUTOPLAY)!=null}set autoplay(a){a?this.setAttribute(v.AUTOPLAY,typeof a=="string"?a:""):this.removeAttribute(v.AUTOPLAY)}get loop(){return re(this,v.LOOP)!=null}set loop(a){a?this.setAttribute(v.LOOP,""):this.removeAttribute(v.LOOP)}get muted(){var a,e;return(e=(a=this.media)==null?void 0:a.muted)!=null?e:!1}set muted(a){this.media&&(this.media.muted=Boolean(a))}get defaultMuted(){return re(this,v.MUTED)!=null}set defaultMuted(a){a?this.setAttribute(v.MUTED,""):this.removeAttribute(v.MUTED)}get playsInline(){return re(this,v.PLAYSINLINE)!=null}set playsInline(a){L("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(a){["","none","metadata","auto"].includes(a)?this.setAttribute(v.PRELOAD,a):this.removeAttribute(v.PRELOAD)}};function re(t,a){return t.media?t.media.getAttribute(a):t.getAttribute(a)}var Ze=Ye;import"media-chrome/dist/media-theme-element.js";var Rt=`
  :host {
    cursor: pointer;
  }
  media-time-display {
    color: inherit;
  }
`,Mt=E.createElement("template");Mt.innerHTML=`
  <style>
    ${Rt}
  </style>
  <media-time-display show-duration></media-time-display>
`;var Ot=["Enter"," "],oe,j,ve,q=class extends h.HTMLElement{constructor(){var e,i;super();c(this,j);c(this,oe,void 0);this.attachShadow({mode:"open"}),(e=this.shadowRoot)==null||e.appendChild(this.constructor.template.content.cloneNode(!0)),this.timeDisplayEl=(i=this.shadowRoot)==null?void 0:i.querySelector("media-time-display")}static get observedAttributes(){return["hide-duration","remaining","disabled","aria-disabled"]}toggleTimeDisplay(){var e,i,r;(e=this.timeDisplayEl)!=null&&e.hasAttribute("remaining")?(i=this.timeDisplayEl)==null||i.removeAttribute("remaining"):(r=this.timeDisplayEl)==null||r.setAttribute("remaining","")}connectedCallback(){let e=i=>{let{key:r}=i;if(!Ot.includes(r)){this.removeEventListener("keyup",e);return}this.toggleTimeDisplay()};this.addEventListener("keydown",i=>{let{metaKey:r,altKey:o,key:n}=i;if(r||o||!Ot.includes(n)){this.removeEventListener("keyup",e);return}this.addEventListener("keyup",e)}),this.addEventListener("click",this.toggleTimeDisplay),k(this,oe,setInterval(p(this,j,ve).bind(this),200)),requestAnimationFrame(()=>p(this,j,ve).call(this))}disconnectedCallback(){clearInterval(l(this,oe))}attributeChangedCallback(e,i,r){var o,n;e==="hide-duration"&&p(this,j,ve).call(this),["remaining","disabled","aria-disabled"].includes(e)&&i!==r&&(r==null?(o=this.timeDisplayEl)==null||o.removeAttribute(e):(n=this.timeDisplayEl)==null||n.setAttribute(e,r))}};oe=new WeakMap,j=new WeakSet,ve=function(){var i,r,o,n;getComputedStyle(this).getPropertyValue("--media-duration-display").trim()==="none"||this.getAttribute("hide-duration")!=null?(i=this.timeDisplayEl)!=null&&i.hasAttribute("show-duration")&&((r=this.timeDisplayEl)==null||r.removeAttribute("show-duration")):(o=this.timeDisplayEl)!=null&&o.hasAttribute("show-duration")||(n=this.timeDisplayEl)==null||n.setAttribute("show-duration","")},q.styles=Rt,q.template=Mt;h.customElements.get("mxp-time-display")||(h.customElements.define("mxp-time-display",q),h.MxpTimeDisplay=q);var Pt=`:host {
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
`;var Bt=`<template id="media-theme-mux">
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
`;var It=`
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
`,_t=E.createElement("template");_t.innerHTML=`
  <style>
    ${It}
  </style>

  <div class="dialog">
    <slot></slot>
  </div>
`;var V=class extends h.HTMLElement{constructor(){var e;super();this.attachShadow({mode:"open"}),(e=this.shadowRoot)==null||e.appendChild(this.constructor.template.content.cloneNode(!0))}show(){this.setAttribute("open",""),this.dispatchEvent(new CustomEvent("open",{composed:!0,bubbles:!0})),Dt(this)}close(){!this.hasAttribute("open")||(this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0})),ga(this))}attributeChangedCallback(e,i,r){e==="open"&&i!==r&&(r!=null?this.show():this.close())}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","dialog"),this.hasAttribute("open")&&Dt(this)}};V.styles=It,V.template=_t,V.observedAttributes=["open"];function Dt(t){let a=new CustomEvent("initfocus",{composed:!0,bubbles:!0,cancelable:!0});if(t.dispatchEvent(a),a.defaultPrevented)return;let e=t.querySelector("[autofocus]:not([disabled])");!e&&t.tabIndex>=0&&(e=t),e||(e=Nt(t.shadowRoot)),t._previouslyFocusedElement=E.activeElement,E.activeElement instanceof HTMLElement&&E.activeElement.blur(),t.addEventListener("transitionend",()=>{e instanceof HTMLElement&&e.focus({preventScroll:!0})},{once:!0})}function Nt(t){let e=["button","input","keygen","select","textarea"].map(function(r){return r+":not([disabled])"});e.push('[tabindex]:not([disabled]):not([tabindex=""])');let i=t==null?void 0:t.querySelector(e.join(", "));if(!i&&"attachShadow"in Element.prototype){let r=(t==null?void 0:t.querySelectorAll("*"))||[];for(let o=0;o<r.length&&!(r[o].tagName&&r[o].shadowRoot&&(i=Nt(r[o].shadowRoot),i));o++);}return i}function ga(t){t._previouslyFocusedElement instanceof HTMLElement&&t._previouslyFocusedElement.focus()}h.customElements.get("media-dialog")||(h.customElements.define("media-dialog",V),h.MediaDialog=V);var We=V;var Vt=E.createElement("template");Vt.innerHTML=`
  <style>
    ${We.styles}

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
`;var ne=class extends We{constructor(){var a,e;super(),(e=(a=this.shadowRoot)==null?void 0:a.querySelector(".close"))==null||e.addEventListener("click",()=>{this.close()})}};ne.template=Vt;h.customElements.get("mxp-dialog")||(h.customElements.define("mxp-dialog",ne),h.MxpDialog=ne);import{TemplateInstance as fa,ChildNodePart as Ee,AttrPart as Te}from"media-chrome/dist/media-theme-element.js";var se=new WeakMap,le=class{constructor(a,e){this.element=a;this.type=e;this.element.addEventListener(this.type,this);let i=se.get(this.element);i&&i.set(this.type,this)}set(a){if(typeof a=="function")this.handleEvent=a.bind(this.element);else if(typeof a=="object"&&typeof a.handleEvent=="function")this.handleEvent=a.handleEvent.bind(a);else{this.element.removeEventListener(this.type,this);let e=se.get(this.element);e&&e.delete(this.type)}}static for(a){se.has(a.element)||se.set(a.element,new Map);let e=a.attributeName.slice(2),i=se.get(a.element);return i&&i.has(e)?i.get(e):new le(a.element,e)}};function ya(t,a){return t instanceof Te&&t.attributeName.startsWith("on")?(le.for(t).set(a),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0):!1}function va(t,a){return a instanceof ke&&t instanceof Ee?(a.renderInto(t),!0):!1}function ka(t,a){return a instanceof DocumentFragment&&t instanceof Ee?(a.childNodes.length&&t.replace(...a.childNodes),!0):!1}function Ea(t,a){if(t instanceof Te){let e=t.attributeNamespace,i=t.element.getAttributeNS(e,t.attributeName);return String(a)!==i&&(t.value=String(a)),!0}return t.value=String(a),!0}function Ta(t,a){if(t instanceof Te&&a instanceof Element){let e=t.element;return e[t.attributeName]!==a&&(t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),e[t.attributeName]=a),!0}return!1}function Aa(t,a){if(typeof a=="boolean"&&t instanceof Te){let e=t.attributeNamespace,i=t.element.hasAttributeNS(e,t.attributeName);return a!==i&&(t.booleanValue=a),!0}return!1}function xa(t,a){return a===!1&&t instanceof Ee?(t.replace(""),!0):!1}function wa(t,a){Ta(t,a)||Aa(t,a)||ya(t,a)||xa(t,a)||va(t,a)||ka(t,a)||Ea(t,a)}var ze=new Map,$t=new WeakMap,Ht=new WeakMap,ke=class{constructor(a,e,i){this.strings=a;this.values=e;this.processor=i;this.stringsKey=this.strings.join("")}get template(){if(ze.has(this.stringsKey))return ze.get(this.stringsKey);{let a=E.createElement("template"),e=this.strings.length-1;return a.innerHTML=this.strings.reduce((i,r,o)=>i+r+(o<e?`{{ ${o} }}`:""),""),ze.set(this.stringsKey,a),a}}renderInto(a){let e=this.template;if($t.get(a)!==e){$t.set(a,e);let r=new fa(e,this.values,this.processor);Ht.set(a,r),a instanceof Ee?a.replace(...r.children):a.appendChild(r);return}let i=Ht.get(a);i&&i.update(this.values)}},La={processCallback(t,a,e){var i;if(!!e){for(let[r,o]of a)if(r in e){let n=(i=e[r])!=null?i:"";wa(o,n)}}}};function w(t,...a){return new ke(t,a,La)}function Kt(t,a){t.renderInto(a)}import{StreamTypes as G}from"@mux/playback-core";var qe=E.createElement("template");"innerHTML"in qe&&(qe.innerHTML=Bt);var Ft=t=>w`
  <style>
    ${Pt}
  </style>
  ${Oa(t)}
`,je=t=>[G.LIVE,G.LL_LIVE].includes(t.streamType),Ge=t=>[G.LIVE,G.LL_LIVE,G.DVR,G.LL_DVR].includes(t.streamType),Sa=t=>{let a="";return t.audio&&(a+="audio "),je(t)?a+="live":Ge(t)?a+="dvr":a+=t.streamType||"on-demand",!t.audio&&t.playerSize&&(a+=` ${t.playerSize}`),a},Ca=t=>{let a=t.hotKeys?`${t.hotKeys}`:"";return Ge(t)&&(a+=" noarrowleft noarrowright"),a},Oa=t=>{var a,e,i,r,o,n,m,b,f,A,D,I,g,C,O,R,y,pe,te,W,et,tt,at,it,rt,ot,nt,st,lt,dt,ut,mt;return w`
  <media-theme
    template="${(a=t.theme)!=null?a:qe.content.children[0]}"
    class="size-${t.playerSize}${t.secondaryColor?" two-tone":""}"
    player-size="${(e=t.playerSize)!=null?e:!1}"
    layout="${Sa(t)}"
    hotkeys="${Ca(t)||!1}"
    nohotkeys="${t.noHotKeys||!t.hasSrc||t.isDialogOpen||!1}"
    disabled="${!t.hasSrc||t.isDialogOpen}"
    audio="${(i=t.audio)!=null?i:!1}"
    style="${(r=gt({"--primary-color":t.primaryColor,"--secondary-color":t.secondaryColor}))!=null?r:!1}"
    default-showing-captions="${!t.defaultHiddenCaptions}"
    forward-seek-offset="${(o=t.forwardSeekOffset)!=null?o:!1}"
    backward-seek-offset="${(n=t.backwardSeekOffset)!=null?n:!1}"
    playback-rates="${(m=t.playbackRates)!=null?m:!1}"
    default-show-remaining-time="${(b=t.defaultShowRemainingTime)!=null?b:!1}"
    title="${(f=t.title)!=null?f:!1}"
    poster="${t.poster===""?!1:(A=t.poster)!=null?A:!1}"
    placeholder="${(D=t.placeholder)!=null?D:!1}"
    exportparts="top, center, bottom, layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer, poster, seek-live, play, button, seek-backward, seek-forward, mute, captions, airplay, pip, fullscreen, cast, playback-rate, volume, range, time, display"
  >
    <mux-video
      slot="media"
      crossorigin="${(I=t.crossOrigin)!=null?I:""}"
      playsinline
      autoplay="${(g=t.autoplay)!=null?g:!1}"
      muted="${(C=t.muted)!=null?C:!1}"
      loop="${(O=t.loop)!=null?O:!1}"
      preload="${(R=t.preload)!=null?R:!1}"
      debug="${(y=t.debug)!=null?y:!1}"
      prefer-cmcd="${(pe=t.preferCmcd)!=null?pe:!1}"
      disable-cookies="${(te=t.disableCookies)!=null?te:!1}"
      prefer-playback="${(W=t.preferPlayback)!=null?W:!1}"
      start-time="${t.startTime!=null?t.startTime:!1}"
      beacon-collection-domain="${(et=t.beaconCollectionDomain)!=null?et:!1}"
      player-software-name="${(tt=t.playerSoftwareName)!=null?tt:!1}"
      player-software-version="${(at=t.playerSoftwareVersion)!=null?at:!1}"
      env-key="${(it=t.envKey)!=null?it:!1}"
      stream-type="${(rt=t.streamType)!=null?rt:!1}"
      custom-domain="${(ot=t.customDomain)!=null?ot:!1}"
      src="${t.src?t.src:t.playbackId?Fe(t.playbackId,{domain:t.customDomain,token:t.tokens.playback}):!1}"
      cast-src="${t.src?t.src:t.playbackId?Fe(t.playbackId,{domain:t.customDomain,token:t.tokens.playback}):!1}"
      cast-stream-type="${je(t)?"live":!1}"
      exportparts="video"
    >
      ${t.storyboard?w`<track label="thumbnails" default kind="metadata" src="${t.storyboard}" />`:w``}
    </mux-video>
    ${Ge(t)?w`<button
          slot="seek-live"
          part="${je(t)?"top":"bottom"} seek-live button"
          disabled="${t.inLiveWindow||!t.hasSrc||t.isDialogOpen}"
          aria-disabled="${(t.inLiveWindow||!t.hasSrc||t.isDialogOpen)&&"true"}"
          in-live-window="${t.inLiveWindow}"
          onclick="${function(Xt){var ct;if((ct=t.onSeekToLive)==null||ct.call(t,Xt),t.paused){let Qt=new CustomEvent("mediaplayrequest",{composed:!0,bubbles:!0});this.dispatchEvent(Qt)}}}"
        >
          <svg viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"></circle></svg>
          Live
        </button>`:w``}
    <mxp-dialog
      no-auto-hide
      open="${(nt=t.isDialogOpen)!=null?nt:!1}"
      onclose="${t.onCloseErrorDialog}"
      oninitfocus="${t.onInitFocusDialog}"
    >
      ${(st=t.dialog)!=null&&st.title?w`<h3>${t.dialog.title}</h3>`:w``}
      <p>
        ${(lt=t.dialog)==null?void 0:lt.message}
        ${(dt=t.dialog)!=null&&dt.linkUrl?w`<a
              href="${t.dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(ut=t.dialog.linkText)!=null?ut:""} ${d("(opens in a new window)")}"
              >${(mt=t.dialog.linkText)!=null?mt:t.dialog.linkUrl}</a
            >`:w``}
      </p>
    </mxp-dialog>
  </media-theme>
`};import{MediaError as Ae}from"@mux/mux-video";function xe(t,a,e,i,r){var m,b,f;let o={},n={};switch(t.code){case Ae.MEDIA_ERR_NETWORK:{switch(o.title=d("Network Error",r),o.message=t.message,(m=t.data)==null?void 0:m.response.code){case 412:{o.title=d("Video is not currently available",r),o.message=d("The live stream or video file are not yet ready.",r),n.message=d("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),n.file="412-not-playable.md";break}case 404:{o.title=d("Video does not exist",r),o.message="",n.message=d("This playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),n.file="404-not-found.md";break}case 403:{if(o.title=d("Invalid playback URL",r),o.message=d("The video URL or playback-token are formatted with incorrect or incomplete information.",r),n.message=d("403 error trying to access this playback URL. If this is a signed URL, you might need to provide a playback-token.",r),n.file="missing-signed-tokens.md",!i)break;let{exp:A,aud:D,sub:I}=_(i),g=Date.now()>A*1e3,C=I!==e,O=D!=="v",R={timeStyle:"medium",dateStyle:"medium"};if(g){o.title=d("Video URL has expired",r),o.message=d("The video\u2019s secured playback-token has expired.",r),n.message=d("This playback is using signed URLs and the playback-token has expired. Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat(H.code,R).format(A*1e3),currentDate:new Intl.DateTimeFormat(H.code,R).format(Date.now())}),n.file="403-expired-token.md";break}if(C){o.title=d("Video URL is formatted incorrectly",r),o.message=d("The video\u2019s playback ID does not match the one encoded in the playback-token.",r),n.message=d("The specified playback ID {playbackId} and the playback ID encoded in the playback-token {tokenPlaybackId} do not match.",r).format({playbackId:e,tokenPlaybackId:I}),n.file="403-playback-id-mismatch.md";break}if(O){o.title=d("Video URL is formatted incorrectly",r),o.message=d("The playback-token is formatted with incorrect information.",r),n.message=d("The playback-token has an incorrect aud value: {tokenType}. aud value should be v.",r).format({tokenType:D}),n.file="403-incorrect-aud-value.md";break}n.message=d("403 error trying to access this playback URL. If this is a signed playback ID, the token might not have been generated correctly.",r),n.file="403-malformatted-token.md";break}}break}case Ae.MEDIA_ERR_DECODE:{let{message:A}=t;o={title:d("Media Error",r),message:A},n.file="media-decode-error.md";break}case Ae.MEDIA_ERR_SRC_NOT_SUPPORTED:{let A=(f=(b=t.data)==null?void 0:b.response)==null?void 0:f.code;if(A>=400&&A<500){t.code=Ae.MEDIA_ERR_NETWORK,t.data={response:{code:A}},{dialog:o,devlog:n}=xe(t,a,e,i);break}o={title:d("Source Not Supported",r),message:t.message},n.file="media-src-not-supported.md";break}default:o={title:d("Error",r),message:t.message};break}return a&&(o={title:d("Your device appears to be offline",r),message:d("Check your internet connection and try reloading this video.",r)}),{dialog:o,devlog:n}}var Da=Object.values(x),Ia=700,_a=300,Xe={LG:"large",SM:"small",XS:"extra-small"};function Le(t){let a=t.getBoundingClientRect();return a.width<_a?Xe.XS:a.width<Ia?Xe.SM:Xe.LG}var P={SRC:"src",POSTER:"poster"},s={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",TITLE:"title",PLACEHOLDER:"placeholder"};function Na(t,a){var i,r;return{src:!t.playbackId&&t.src,playbackId:t.playbackId,hasSrc:!!t.playbackId||!!t.src,poster:t.poster,storyboard:t.storyboard,placeholder:t.getAttribute("placeholder"),theme:t.getAttribute("theme"),thumbnailTime:!t.tokens.thumbnail&&t.thumbnailTime,autoplay:t.autoplay,crossOrigin:t.crossOrigin,loop:t.loop,noHotKeys:t.hasAttribute(s.NOHOTKEYS),hotKeys:t.getAttribute(s.HOTKEYS),muted:t.muted,paused:t.paused,preload:t.preload,envKey:t.envKey,preferCmcd:t.preferCmcd,debug:t.debug,disableCookies:t.disableCookies,tokens:t.tokens,beaconCollectionDomain:t.beaconCollectionDomain,metadata:t.metadata,playerSoftwareName:t.playerSoftwareName,playerSoftwareVersion:t.playerSoftwareVersion,startTime:t.startTime,preferPlayback:t.preferPlayback,audio:t.audio,streamType:t.streamType,primaryColor:t.primaryColor,secondaryColor:t.secondaryColor,forwardSeekOffset:t.forwardSeekOffset,backwardSeekOffset:t.backwardSeekOffset,defaultHiddenCaptions:t.defaultHiddenCaptions,defaultShowRemainingTime:t.defaultShowRemainingTime,playbackRates:t.getAttribute(s.PLAYBACK_RATES),customDomain:(i=t.getAttribute(u.CUSTOM_DOMAIN))!=null?i:void 0,playerSize:Le((r=t.mediaController)!=null?r:t),title:t.getAttribute(s.TITLE),...a}}var Va=Object.values(u),$a=Object.values(P),Ha=Object.values(s),Ka=fe(),Fa="mux-player",Yt={dialog:void 0,isDialogOpen:!1,inLiveWindow:!1},Z,ue,B,me,X,S,Q,Se,Oe,Zt,$,J,ee,Ce,ce,Qe,Re,Wt,Me,zt,Pe,qt,Be,jt,De,Gt,Ie,Jt,de=class extends Ze{constructor(){super();c(this,Q);c(this,Oe);c(this,$);c(this,ee);c(this,ce);c(this,Re);c(this,Me);c(this,Pe);c(this,Be);c(this,De);c(this,Ie);c(this,Z,!1);c(this,ue,{});c(this,B,!0);c(this,me,new ge(this,"hotkeys"));c(this,X,void 0);c(this,S,{...Yt,onCloseErrorDialog:()=>p(this,$,J).call(this,{dialog:void 0,isDialogOpen:!1}),onInitFocusDialog:e=>{He(this,E.activeElement)||e.preventDefault()},onSeekToLive:()=>Ue(this)});this.attachShadow({mode:"open"}),p(this,Oe,Zt).call(this),this.isConnected&&p(this,Q,Se).call(this)}static get observedAttributes(){var e;return[...(e=Ze.observedAttributes)!=null?e:[],...$a,...Va,...Ha]}get theme(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("media-theme")}get mediaController(){var e,i;return(i=(e=this.theme)==null?void 0:e.shadowRoot)==null?void 0:i.querySelector("media-controller")}get metadataFromAttrs(){return this.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((e,i)=>{let r=this.getAttribute(i);return r!==null&&(e[i.replace(/^metadata-/,"").replace(/-/g,"_")]=r),e},{})}connectedCallback(){var i;p(this,ce,Qe).call(this);let e=(i=this.shadowRoot)==null?void 0:i.querySelector("mux-video");e&&(e.metadata=this.metadataFromAttrs),p(this,Re,Wt).call(this)}disconnectedCallback(){p(this,Me,zt).call(this)}attributeChangedCallback(e,i,r){switch(l(this,Z)||p(this,Q,Se).call(this),super.attributeChangedCallback(e,i,r),e){case s.HOTKEYS:l(this,me).value=r;break;case s.THUMBNAIL_TIME:{r!=null&&this.tokens.thumbnail&&N(d("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").format({}));break}case s.THUMBNAIL_TOKEN:{let{aud:n}=_(r);r&&n!=="t"&&N(d("The provided thumbnail-token should have audience value 't' instead of '{aud}'.").format({aud:n}));break}case s.STORYBOARD_TOKEN:{let{aud:n}=_(r);r&&n!=="s"&&N(d("The provided storyboard-token should have audience value 's' instead of '{aud}'.").format({aud:n}));break}case u.PLAYBACK_ID:{r!=null&&r.includes("?token")&&L(d("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:r})),this.streamType?this.streamType!=null&&!Da.includes(this.streamType)&&ye({file:"invalid-stream-type.md",message:d("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand`, `live`, `ll-live`, `live:dvr`, or `ll-live:dvr`").format({streamType:this.streamType})}):ye({file:"invalid-stream-type.md",message:String(d("No stream-type value supplied. Defaulting to `on-demand`. Please provide stream-type as either: `on-demand`, `live`, `ll-live`, `live:dvr`, or `ll-live:dvr`"))});break}}[u.PLAYBACK_ID,P.SRC,s.PLAYBACK_TOKEN].includes(e)&&i!==r&&k(this,S,{...l(this,S),...Yt}),p(this,ee,Ce).call(this,{[Tt(e)]:r})}get preferCmcd(){var e;return(e=this.getAttribute(u.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Ut.includes(e)?this.setAttribute(u.PREFER_CMCD,e):N(`Invalid value for preferCmcd. Must be one of ${Ut.join()}`):this.removeAttribute(u.PREFER_CMCD))}get hasPlayed(){var e,i;return(i=(e=this.mediaController)==null?void 0:e.hasAttribute("media-has-played"))!=null?i:!1}get inLiveWindow(){return l(this,S).inLiveWindow}get _hls(){var e;return(e=this.media)==null?void 0:e._hls}get mux(){var e;return(e=this.media)==null?void 0:e.mux}get playbackId(){var e;return(e=this.getAttribute(u.PLAYBACK_ID))!=null?e:void 0}set playbackId(e){e?this.setAttribute(u.PLAYBACK_ID,e):this.removeAttribute(u.PLAYBACK_ID)}get src(){var e,i;return this.playbackId?(e=Y(this,P.SRC))!=null?e:void 0:(i=this.getAttribute(P.SRC))!=null?i:void 0}set src(e){e?this.setAttribute(P.SRC,e):this.removeAttribute(P.SRC)}get poster(){var i;let e=this.getAttribute(P.POSTER);if(e!=null)return e;if(this.playbackId&&!this.audio)return kt(this.playbackId,{domain:this.customDomain,thumbnailTime:(i=this.thumbnailTime)!=null?i:this.startTime,token:this.tokens.thumbnail})}set poster(e){e||e===""?this.setAttribute(P.POSTER,e):this.removeAttribute(P.POSTER)}get storyboard(){if(this.playbackId&&!this.audio&&(!this.streamType||![x.LIVE,x.LL_LIVE,x.DVR,x.LL_DVR].includes(this.streamType)))return Et(this.playbackId,{domain:this.customDomain,token:this.tokens.storyboard})}get audio(){return this.hasAttribute(s.AUDIO)}set audio(e){if(!e){this.removeAttribute(s.AUDIO);return}this.setAttribute(s.AUDIO,"")}get hotkeys(){return l(this,me)}get nohotkeys(){return this.hasAttribute(s.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(s.NOHOTKEYS);return}this.setAttribute(s.NOHOTKEYS,"")}get thumbnailTime(){return M(this.getAttribute(s.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(s.THUMBNAIL_TIME,`${e}`)}get title(){var e;return(e=this.getAttribute(s.TITLE))!=null?e:""}set title(e){e!==this.title&&(e?this.setAttribute(s.TITLE,e):this.removeAttribute("title"),super.title=e)}get placeholder(){var e;return(e=Y(this,s.PLACEHOLDER))!=null?e:""}set placeholder(e){this.setAttribute(s.PLACEHOLDER,`${e}`)}get primaryColor(){var e;return(e=this.getAttribute(s.PRIMARY_COLOR))!=null?e:void 0}set primaryColor(e){this.setAttribute(s.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e;return(e=this.getAttribute(s.SECONDARY_COLOR))!=null?e:"rgb(0 0 0 / .65)"}set secondaryColor(e){this.setAttribute(s.SECONDARY_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(s.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(s.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(s.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(!!this.hasAttribute(s.PLAYBACK_RATES))return this.getAttribute(s.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,i)=>e-i)}set playbackRates(e){if(!e){this.removeAttribute(s.PLAYBACK_RATES);return}this.setAttribute(s.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return(e=M(this.getAttribute(s.FORWARD_SEEK_OFFSET)))!=null?e:10}set forwardSeekOffset(e){this.setAttribute(s.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return(e=M(this.getAttribute(s.BACKWARD_SEEK_OFFSET)))!=null?e:10}set backwardSeekOffset(e){this.setAttribute(s.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(s.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(s.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(s.DEFAULT_HIDDEN_CAPTIONS)}get playerSoftwareName(){var e;return(e=this.getAttribute(u.PLAYER_SOFTWARE_NAME))!=null?e:Fa}get playerSoftwareVersion(){var e;return(e=this.getAttribute(u.PLAYER_SOFTWARE_VERSION))!=null?e:Ka}get beaconCollectionDomain(){var e;return(e=this.getAttribute(u.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(u.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(u.BEACON_COLLECTION_DOMAIN))}get customDomain(){var e;return(e=this.getAttribute(u.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(u.CUSTOM_DOMAIN,e):this.removeAttribute(u.CUSTOM_DOMAIN))}get envKey(){var e;return(e=Y(this,u.ENV_KEY))!=null?e:void 0}set envKey(e){this.setAttribute(u.ENV_KEY,`${e}`)}get debug(){return Y(this,u.DEBUG)!=null}set debug(e){e?this.setAttribute(u.DEBUG,""):this.removeAttribute(u.DEBUG)}get disableCookies(){return Y(this,u.DISABLE_COOKIES)!=null}set disableCookies(e){e?this.setAttribute(u.DISABLE_COOKIES,""):this.removeAttribute(u.DISABLE_COOKIES)}get streamType(){return Y(this,u.STREAM_TYPE)}set streamType(e){this.setAttribute(u.STREAM_TYPE,`${e}`)}get startTime(){return M(Y(this,u.START_TIME))}set startTime(e){this.setAttribute(u.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(u.PREFER_PLAYBACK);if(e===we.MSE||e===we.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===we.MSE||e===we.NATIVE?this.setAttribute(u.PREFER_PLAYBACK,e):this.removeAttribute(u.PREFER_PLAYBACK))}get metadata(){var e;return(e=this.media)==null?void 0:e.metadata}set metadata(e){if(l(this,Z)||p(this,Q,Se).call(this),!this.media){L("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...this.metadataFromAttrs,...e}}get tokens(){let e=this.getAttribute(s.PLAYBACK_TOKEN),i=this.getAttribute(s.THUMBNAIL_TOKEN),r=this.getAttribute(s.STORYBOARD_TOKEN);return{...l(this,ue),...e!=null?{playback:e}:{},...i!=null?{thumbnail:i}:{},...r!=null?{storyboard:r}:{}}}set tokens(e){k(this,ue,e!=null?e:{})}get playbackToken(){var e;return(e=this.getAttribute(s.PLAYBACK_TOKEN))!=null?e:void 0}set playbackToken(e){this.setAttribute(s.PLAYBACK_TOKEN,`${e}`)}get thumbnailToken(){var e;return(e=this.getAttribute(s.THUMBNAIL_TOKEN))!=null?e:void 0}set thumbnailToken(e){this.setAttribute(s.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return(e=this.getAttribute(s.STORYBOARD_TOKEN))!=null?e:void 0}set storyboardToken(e){this.setAttribute(s.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,i,r,o){var m;let n=(m=this.media)==null?void 0:m.nativeEl;if(!!n)return Pa(n,e,i,r,o)}removeTextTrack(e){var r;let i=(r=this.media)==null?void 0:r.nativeEl;if(!!i)return Ba(i,e)}get textTracks(){var e;return(e=this.media)==null?void 0:e.textTracks}};Z=new WeakMap,ue=new WeakMap,B=new WeakMap,me=new WeakMap,X=new WeakMap,S=new WeakMap,Q=new WeakSet,Se=function(){var e,i;if(!l(this,Z)){k(this,Z,!0),p(this,$,J).call(this,{playerSize:Le(this)});try{if(customElements.upgrade(this.theme),!(this.theme instanceof h.HTMLElement))throw""}catch{L("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof Ma))throw""}catch{L("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof Ra))throw""}catch{L("<media-controller> failed to upgrade!")}Ct(this),p(this,Be,jt).call(this),p(this,De,Gt).call(this),p(this,Pe,qt).call(this),k(this,B,(i=(e=this.mediaController)==null?void 0:e.hasAttribute("user-inactive"))!=null?i:!0),p(this,Ie,Jt).call(this)}},Oe=new WeakSet,Zt=function(){var e,i;try{(e=window==null?void 0:window.CSS)==null||e.registerProperty({name:"--primary-color",syntax:"<color>",inherits:!0,initialValue:"white"}),(i=window==null?void 0:window.CSS)==null||i.registerProperty({name:"--secondary-color",syntax:"<color>",inherits:!0,initialValue:"transparent"})}catch{}},$=new WeakSet,J=function(e){Object.assign(l(this,S),e),p(this,ee,Ce).call(this)},ee=new WeakSet,Ce=function(e={}){Kt(Ft(Na(this,{...l(this,S),...e})),this.shadowRoot)},ce=new WeakSet,Qe=function(){var e,i;l(this,S).playerSize!=Le((e=this.mediaController)!=null?e:this)&&p(this,$,J).call(this,{playerSize:Le((i=this.mediaController)!=null?i:this)})},Re=new WeakSet,Wt=function(){var e;k(this,X,new ResizeObserver(()=>p(this,ce,Qe).call(this))),l(this,X).observe((e=this.mediaController)!=null?e:this)},Me=new WeakSet,zt=function(){var e;(e=l(this,X))==null||e.disconnect()},Pe=new WeakSet,qt=function(){var i,r,o,n,m;(i=this.mediaController)==null||i.addEventListener("mediaplayrequest",b=>{var f;((f=b.target)==null?void 0:f.localName)==="media-play-button"&&this.streamType&&[x.LIVE,x.LL_LIVE,x.DVR,x.LL_DVR].includes(this.streamType)&&this.hasPlayed&&Ue(this)});let e=()=>{let b=xt(this),f=l(this,S).inLiveWindow;b!==f&&(p(this,$,J).call(this,{inLiveWindow:b}),this.dispatchEvent(new CustomEvent("inlivewindowchange",{composed:!0,bubbles:!0,detail:this.inLiveWindow})))};(r=this.media)==null||r.addEventListener("progress",e),(o=this.media)==null||o.addEventListener("waiting",e),(n=this.media)==null||n.addEventListener("timeupdate",e),(m=this.media)==null||m.addEventListener("emptied",e)},Be=new WeakSet,jt=function(){var i;let e=r=>{let{detail:o}=r;if(o instanceof Je||(o=new Je(o.message,o.code,o.fatal)),!(o!=null&&o.fatal)){N(o),o.data&&N(`${o.name} data:`,o.data);return}let{dialog:n,devlog:m}=xe(o,!window.navigator.onLine,this.playbackId,this.playbackToken);m.message&&ye(m),L(o),o.data&&L(`${o.name} data:`,o.data),p(this,$,J).call(this,{isDialogOpen:!0,dialog:n})};this.addEventListener("error",e),this.media&&(this.media.errorTranslator=(r={})=>{var n,m,b;if(!((n=this.media)!=null&&n.error))return r;let{devlog:o}=xe((m=this.media)==null?void 0:m.error,!window.navigator.onLine,this.playbackId,this.playbackToken,!1);return{player_error_code:(b=this.media)==null?void 0:b.error.code,player_error_message:o.message?String(o.message):r.player_error_message}}),(i=this.media)==null||i.addEventListener("error",r=>{var n,m;let{detail:o}=r;if(!o){let{message:b,code:f}=(m=(n=this.media)==null?void 0:n.error)!=null?m:{};o=new Je(b,f)}!(o!=null&&o.fatal)||this.dispatchEvent(new CustomEvent("error",{detail:o}))})},De=new WeakSet,Gt=function(){var i,r,o,n;let e=()=>p(this,ee,Ce).call(this);(r=(i=this.media)==null?void 0:i.textTracks)==null||r.addEventListener("addtrack",e),(n=(o=this.media)==null?void 0:o.textTracks)==null||n.addEventListener("removetrack",e)},Ie=new WeakSet,Jt=function(){var A,D,I;let e=this.mediaController,i=/.*Version\/.*Safari\/.*/.test(navigator.userAgent);if(i)return;let r,o=new WeakMap,n=()=>this.streamType&&[x.LIVE,x.LL_LIVE].includes(this.streamType)&&!this.secondaryColor&&this.offsetWidth>=800,m=(g,C,O=!1)=>{if(n())return;Array.from(g&&g.activeCues||[]).forEach(y=>{if(!(!y.snapToLines||y.line<-5||y.line>=0&&y.line<10))if(!C||this.paused){let pe=y.text.split(`
`).length,te=i?-2:-3;this.streamType&&[x.LIVE,x.LL_LIVE].includes(this.streamType)&&(te=i?-1:-2);let W=te-pe;if(y.line===W&&!O)return;o.has(y)||o.set(y,y.line),y.line=W-1,y.line=W}else setTimeout(()=>{y.line=o.get(y)||"auto"},500)})},b=()=>{var g;m(r,(g=e==null?void 0:e.hasAttribute("user-inactive"))!=null?g:!1)},f=()=>{var O;let C=Array.from(((O=e==null?void 0:e.media)==null?void 0:O.textTracks)||[]).filter(R=>["subtitles","captions"].includes(R.kind)&&R.mode==="showing")[0];C!==r&&(r==null||r.removeEventListener("cuechange",b)),r=C,r==null||r.addEventListener("cuechange",b),m(r,l(this,B))};if(f(),(A=e==null?void 0:e.media)==null||A.textTracks.addEventListener("change",f),(D=e==null?void 0:e.media)==null||D.textTracks.addEventListener("addtrack",f),navigator.userAgent.includes("Chrome/")){let g=()=>{m(r,l(this,B),!0),this.paused||window.requestAnimationFrame(g)};(I=e==null?void 0:e.media)==null||I.addEventListener("playing",()=>{g()})}e==null||e.addEventListener("userinactivechange",()=>{let g=e==null?void 0:e.hasAttribute("user-inactive");l(this,B)!==g&&(k(this,B,g),m(r,l(this,B)))})};function Y(t,a){return t.media?t.media.getAttribute(a):t.getAttribute(a)}h.customElements.get("mux-player")||(h.customElements.define("mux-player",de),h.MuxPlayerElement=de);var Zi=de;export{Je as MediaError,Zi as default,Y as getVideoAttribute};
