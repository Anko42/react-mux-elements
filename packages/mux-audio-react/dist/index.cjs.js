"use strict";var v=Object.create;var c=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,H=Object.prototype.hasOwnProperty;var I=(e,t)=>{for(var r in t)c(e,r,{get:t[r],enumerable:!0})},M=(e,t,r,p)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of j(t))!H.call(e,s)&&s!==r&&c(e,s,{get:()=>t[s],enumerable:!(p=L(t,s))||p.enumerable});return e};var P=(e,t,r)=>(r=e!=null?v(w(e)):{},M(t||!e||!e.__esModule?c(r,"default",{value:e,enumerable:!0}):r,e)),V=e=>M(c({},"__esModule",{value:!0}),e);var W={};I(W,{default:()=>U});module.exports=V(W);var l=require("react"),x=(...e)=>{let t=(0,l.useRef)(null);return(0,l.useEffect)(()=>{e.forEach(r=>{!r||(typeof r=="function"?r(t.current):r.current=t.current)})},[e]),t};var o=P(require("react")),a=P(require("prop-types")),n=require("@mux/playback-core");var N=()=>{try{return"0.6.2"}catch{}return"UNKNOWN"},h=N(),g=()=>h;var D=g(),K="mux-audio-react",C=o.default.forwardRef((e,t)=>{var R;let{envKey:r,debug:p,beaconCollectionDomain:s,playbackId:f,preferPlayback:_,type:z,streamType:B,startTime:Y,src:y,children:E,autoPlay:d,preload:m,...O}=e,[k]=(0,o.useState)((0,n.generatePlayerInitTime)()),[T,A]=(0,o.useState)((R=(0,n.toMuxVideoURL)(f))!=null?R:y),u=(0,o.useRef)(void 0),S=(0,o.useRef)(null),b=x(S,t);return(0,o.useEffect)(()=>{var i;A((i=(0,n.toMuxVideoURL)(f))!=null?i:y)},[y,f]),(0,o.useEffect)(()=>{let i={...e,src:T,playerInitTime:k,playerSoftwareName:K,playerSoftwareVersion:D,autoplay:d};b.current&&(u.current=(0,n.initialize)(i,b.current,u.current))},[T]),(0,o.useEffect)(()=>{var i;(i=u.current)==null||i.setAutoplay(d)},[d]),(0,o.useEffect)(()=>{var i;(i=u.current)==null||i.setPreload(m)},[m]),o.default.createElement("audio",{ref:b,...O},E)});C.propTypes={envKey:a.default.string,debug:a.default.bool,disableCookies:a.default.bool,metadata:a.default.any,beaconCollectionDomain:a.default.string,playbackId:a.default.string,playerInitTime:a.default.number,preferPlayback:a.default.oneOf(Object.values(n.PlaybackTypes)),type:a.default.oneOf(n.allMediaTypes),streamType:a.default.oneOf(Object.values(n.StreamTypes)),startTime:a.default.number};var U=C;
//# sourceMappingURL=index.cjs.js.map
