import{S as Ce,i as Te,s as Pe,k as U,q as Ge,l as G,m as O,r as Ke,h as v,n as ce,b as E,B as le,u as We,A,e as N,o as Je,N as Xe,O as D,P as ae,Q as fe,R as Ee,T as Ye,U as Ze,V as ue,W as $e}from"./index-451b7200.js";function et(e){let t,o,r;return{c(){t=U("div"),o=U("h1"),r=Ge(e[0]),this.h()},l(n){t=G(n,"DIV",{class:!0});var i=O(t);o=G(i,"H1",{class:!0});var s=O(o);r=Ke(s,e[0]),s.forEach(v),i.forEach(v),this.h()},h(){ce(o,"class","text-center"),ce(t,"class","mt-4 mb-6")},m(n,i){E(n,t,i),le(t,o),le(o,r)},p(n,[i]){i&1&&We(r,n[0])},i:A,o:A,d(n){n&&v(t)}}}function tt(e,t,o){let{pageTitle:r=""}=t;return e.$$set=n=>{"pageTitle"in n&&o(0,r=n.pageTitle)},[r]}class cn extends Ce{constructor(t){super(),Te(this,t,tt,et,Pe,{pageTitle:0})}}const C=/^[a-z0-9]+(-[a-z0-9]+)*$/,B=(e,t,o,r="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const c=n.pop(),l=n.pop(),a={provider:n.length>0?n[0]:r,prefix:l,name:c};return t&&!L(a)?null:a}const i=n[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!L(c)?null:c}if(o&&r===""){const c={provider:r,prefix:"",name:i};return t&&!L(c,o)?null:c}return null},L=(e,t)=>e?!!((e.provider===""||e.provider.match(C))&&(t&&e.prefix===""||e.prefix.match(C))&&e.name.match(C)):!1,je=Object.freeze({left:0,top:0,width:16,height:16}),R=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),q=Object.freeze({...je,...R}),K=Object.freeze({...q,body:"",hidden:!1});function nt(e,t){const o={};!e.hFlip!=!t.hFlip&&(o.hFlip=!0),!e.vFlip!=!t.vFlip&&(o.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(o.rotate=r),o}function de(e,t){const o=nt(e,t);for(const r in K)r in R?r in e&&!(r in o)&&(o[r]=R[r]):r in t?o[r]=t[r]:r in e&&(o[r]=e[r]);return o}function ot(e,t){const o=e.icons,r=e.aliases||{},n=Object.create(null);function i(s){if(o[s])return n[s]=[];if(!(s in n)){n[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(n[s]=[c].concat(l))}return n[s]}return(t||Object.keys(o).concat(Object.keys(r))).forEach(i),n}function rt(e,t,o){const r=e.icons,n=e.aliases||{};let i={};function s(c){i=de(r[c]||n[c],i)}return s(t),o.forEach(s),de(e,i)}function Me(e,t){const o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),o.push(n)});const r=ot(e);for(const n in r){const i=r[n];i&&(t(n,rt(e,n,i)),o.push(n))}return o}const it={provider:"",aliases:{},not_found:{},...je};function z(e,t){for(const o in t)if(o in e&&typeof e[o]!=typeof t[o])return!1;return!0}function Le(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!z(e,it))return null;const o=t.icons;for(const n in o){const i=o[n];if(!n.match(C)||typeof i.body!="string"||!z(i,K))return null}const r=t.aliases||{};for(const n in r){const i=r[n],s=i.parent;if(!n.match(C)||typeof s!="string"||!o[s]&&!r[s]||!z(i,K))return null}return t}const he=Object.create(null);function st(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function S(e,t){const o=he[e]||(he[e]=Object.create(null));return o[t]||(o[t]=st(e,t))}function ee(e,t){return Le(t)?Me(t,(o,r)=>{r?e.icons[o]=r:e.missing.add(o)}):[]}function ct(e,t,o){try{if(typeof o.body=="string")return e.icons[t]={...o},!0}catch{}return!1}let T=!1;function Fe(e){return typeof e=="boolean"&&(T=e),T}function lt(e){const t=typeof e=="string"?B(e,!0,T):e;if(t){const o=S(t.provider,t.prefix),r=t.name;return o.icons[r]||(o.missing.has(r)?null:void 0)}}function at(e,t){const o=B(e,!0,T);if(!o)return!1;const r=S(o.provider,o.prefix);return ct(r,o.name,t)}function ft(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),T&&!t&&!e.prefix){let n=!1;return Le(e)&&(e.prefix="",Me(e,(i,s)=>{s&&at(i,s)&&(n=!0)})),n}const o=e.prefix;if(!L({provider:t,prefix:o,name:"a"}))return!1;const r=S(t,o);return!!ee(r,e)}const Oe=Object.freeze({width:null,height:null}),Ae=Object.freeze({...Oe,...R}),ut=/(-?[0-9.]*[0-9]+[0-9.]*)/g,dt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function pe(e,t,o){if(t===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*t*o)/o;if(typeof e!="string")return e;const r=e.split(ut);if(r===null||!r.length)return e;const n=[];let i=r.shift(),s=dt.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?n.push(i):n.push(Math.ceil(c*t*o)/o)}else n.push(i);if(i=r.shift(),i===void 0)return n.join("");s=!s}}function ht(e,t){const o={...q,...e},r={...Ae,...t},n={left:o.left,top:o.top,width:o.width,height:o.height};let i=o.body;[o,r].forEach(b=>{const m=[],I=b.hFlip,g=b.vFlip;let u=b.rotate;I?g?u+=2:(m.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),m.push("scale(-1 1)"),n.top=n.left=0):g&&(m.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),m.push("scale(1 -1)"),n.top=n.left=0);let y;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:y=n.height/2+n.top,m.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:m.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:y=n.width/2+n.left,m.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}u%2===1&&(n.left!==n.top&&(y=n.left,n.left=n.top,n.top=y),n.width!==n.height&&(y=n.width,n.width=n.height,n.height=y)),m.length&&(i='<g transform="'+m.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=n.width,a=n.height;let f,d;return s===null?(d=c===null?"1em":c==="auto"?a:c,f=pe(d,l/a)):(f=s==="auto"?l:s,d=c===null?pe(f,a/l):c==="auto"?a:c),{attributes:{width:f.toString(),height:d.toString(),viewBox:n.left.toString()+" "+n.top.toString()+" "+l.toString()+" "+a.toString()},body:i}}const pt=/\sid="(\S+)"/g,gt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let mt=0;function yt(e,t=gt){const o=[];let r;for(;r=pt.exec(e);)o.push(r[1]);return o.length&&o.forEach(n=>{const i=typeof t=="function"?t(n):t+(mt++).toString(),s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),e}const W=Object.create(null);function bt(e,t){W[e]=t}function J(e){return W[e]||W[""]}function te(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ne=Object.create(null),_=["https://api.simplesvg.com","https://api.unisvg.com"],F=[];for(;_.length>0;)_.length===1||Math.random()>.5?F.push(_.shift()):F.push(_.pop());ne[""]=te({resources:["https://api.iconify.design"].concat(F)});function wt(e,t){const o=te(t);return o===null?!1:(ne[e]=o,!0)}function oe(e){return ne[e]}const vt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ge=vt();function xt(e,t){const o=oe(e);if(!o)return 0;let r;if(!o.maxURL)r=0;else{let n=0;o.resources.forEach(s=>{n=Math.max(n,s.length)});const i=t+".json?icons=";r=o.maxURL-n-o.path.length-i.length}return r}function St(e){return e===404}const It=(e,t,o)=>{const r=[],n=xt(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return o.forEach((l,a)=>{c+=l.length+1,c>=n&&a>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function kt(e){if(typeof e=="string"){const t=oe(e);if(t)return t.path}return"/"}const _t=(e,t,o)=>{if(!ge){o("abort",424);return}let r=kt(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:o("abort",400);return}let n=503;ge(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{o(St(s)?"abort":"next",s)});return}return n=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{o("next",n)});return}setTimeout(()=>{o("success",i)})}).catch(()=>{o("next",n)})},Ct={prepare:It,send:_t};function Tt(e){const t={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((n,i)=>n.provider!==i.provider?n.provider.localeCompare(i.provider):n.prefix!==i.prefix?n.prefix.localeCompare(i.prefix):n.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const i=n.provider,s=n.prefix,c=n.name,l=o[i]||(o[i]=Object.create(null)),a=l[s]||(l[s]=S(i,s));let f;c in a.icons?f=t.loaded:s===""||a.missing.has(c)?f=t.missing:f=t.pending;const d={provider:i,prefix:s,name:c};f.push(d)}),t}function Ne(e,t){e.forEach(o=>{const r=o.loaderCallbacks;r&&(o.loaderCallbacks=r.filter(n=>n.id!==t))})}function Pt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let o=!1;const r=e.provider,n=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==n)return!0;const a=l.name;if(e.icons[a])s.loaded.push({provider:r,prefix:n,name:a});else if(e.missing.has(a))s.missing.push({provider:r,prefix:n,name:a});else return o=!0,!0;return!1}),s.pending.length!==c&&(o||Ne([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let Et=0;function jt(e,t,o){const r=Et++,n=Ne.bind(null,o,r);if(!t.pending.length)return n;const i={id:r,icons:t,callback:e,abort:n};return o.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),n}function Mt(e,t=!0,o=!1){const r=[];return e.forEach(n=>{const i=typeof n=="string"?B(n,t,o):n;i&&r.push(i)}),r}var Lt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ft(e,t,o,r){const n=e.resources.length,i=e.random?Math.floor(Math.random()*n):e.index;let s;if(e.random){let h=e.resources.slice(0);for(s=[];h.length>1;){const w=Math.floor(Math.random()*h.length);s.push(h[w]),h=h.slice(0,w).concat(h.slice(w+1))}s=s.concat(h)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let l="pending",a=0,f,d=null,p=[],b=[];typeof r=="function"&&b.push(r);function m(){d&&(clearTimeout(d),d=null)}function I(){l==="pending"&&(l="aborted"),m(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function g(h,w){w&&(b=[]),typeof h=="function"&&b.push(h)}function u(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:p.length,subscribe:g,abort:I}}function y(){l="failed",b.forEach(h=>{h(void 0,f)})}function se(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function Ue(h,w,k){const j=w!=="success";switch(p=p.filter(x=>x!==h),l){case"pending":break;case"failed":if(j||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){f=k,y();return}if(j){f=k,p.length||(s.length?Q():y());return}if(m(),se(),!e.random){const x=e.resources.indexOf(h.resource);x!==-1&&x!==e.index&&(e.index=x)}l="completed",b.forEach(x=>{x(k)})}function Q(){if(l!=="pending")return;m();const h=s.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{m(),l==="pending"&&(se(),y())},e.timeout);return}y();return}const w={status:"pending",resource:h,callback:(k,j)=>{Ue(w,k,j)}};p.push(w),a++,d=setTimeout(Q,e.rotate),o(h,t,w.callback)}return setTimeout(Q),u}function De(e){const t={...Lt,...e};let o=[];function r(){o=o.filter(c=>c().status==="pending")}function n(c,l,a){const f=Ft(t,c,l,(d,p)=>{r(),a&&a(d,p)});return o.push(f),f}function i(c){return o.find(l=>c(l))||null}return{query:n,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function me(){}const V=Object.create(null);function Ot(e){if(!V[e]){const t=oe(e);if(!t)return;const o=De(t),r={config:t,redundancy:o};V[e]=r}return V[e]}function At(e,t,o){let r,n;if(typeof e=="string"){const i=J(e);if(!i)return o(void 0,424),me;n=i.send;const s=Ot(e);s&&(r=s.redundancy)}else{const i=te(e);if(i){r=De(i);const s=e.resources?e.resources[0]:"",c=J(s);c&&(n=c.send)}}return!r||!n?(o(void 0,424),me):r.query(t,n,o)().abort}const ye="iconify2",P="iconify",Re=P+"-count",be=P+"-version",Be=36e5,Nt=168;function X(e,t){try{return e.getItem(t)}catch{}}function re(e,t,o){try{return e.setItem(t,o),!0}catch{}}function we(e,t){try{e.removeItem(t)}catch{}}function Y(e,t){return re(e,Re,t.toString())}function Z(e){return parseInt(X(e,Re))||0}const H={local:!0,session:!0},qe={local:new Set,session:new Set};let ie=!1;function Dt(e){ie=e}let M=typeof window>"u"?{}:window;function He(e){const t=e+"Storage";try{if(M&&M[t]&&typeof M[t].length=="number")return M[t]}catch{}H[e]=!1}function Qe(e,t){const o=He(e);if(!o)return;const r=X(o,be);if(r!==ye){if(r){const c=Z(o);for(let l=0;l<c;l++)we(o,P+l.toString())}re(o,be,ye),Y(o,0);return}const n=Math.floor(Date.now()/Be)-Nt,i=c=>{const l=P+c.toString(),a=X(o,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>n&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}we(o,l)}};let s=Z(o);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,Y(o,s)):qe[e].add(c))}function ze(){if(!ie){Dt(!0);for(const e in H)Qe(e,t=>{const o=t.data,r=t.provider,n=o.prefix,i=S(r,n);if(!ee(i,o).length)return!1;const s=o.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function Rt(e,t){const o=e.lastModifiedCached;if(o&&o>=t)return o===t;if(e.lastModifiedCached=t,o)for(const r in H)Qe(r,n=>{const i=n.data;return n.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function Bt(e,t){ie||ze();function o(r){let n;if(!H[r]||!(n=He(r)))return;const i=qe[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=Z(n),!Y(n,s+1))return;const c={cached:Math.floor(Date.now()/Be),provider:e.provider,data:t};return re(n,P+s.toString(),JSON.stringify(c))}t.lastModified&&!Rt(e,t.lastModified)||!Object.keys(t.icons).length||(t.not_found&&(t=Object.assign({},t),delete t.not_found),o("local")||o("session"))}function ve(){}function qt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Pt(e)}))}function Ht(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:o,prefix:r}=e,n=e.iconsToLoad;delete e.iconsToLoad;let i;if(!n||!(i=J(o)))return;i.prepare(o,r,n).forEach(c=>{At(o,c,(l,a)=>{if(typeof l!="object"){if(a!==404)return;c.icons.forEach(f=>{e.missing.add(f)})}else try{const f=ee(e,l);if(!f.length)return;const d=e.pendingIcons;d&&f.forEach(p=>{d.delete(p)}),Bt(e,l)}catch(f){console.error(f)}qt(e)})})}))}const Qt=(e,t)=>{const o=Mt(e,!0,Fe()),r=Tt(o);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,ve)}),()=>{l=!1}}const n=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===s)return;s=a,c=f,i.push(S(a,f));const d=n[a]||(n[a]=Object.create(null));d[f]||(d[f]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:f,name:d}=l,p=S(a,f),b=p.pendingIcons||(p.pendingIcons=new Set);b.has(d)||(b.add(d),n[a][f].push(d))}),i.forEach(l=>{const{provider:a,prefix:f}=l;n[a][f].length&&Ht(l,n[a][f])}),t?jt(t,r,i):ve};function zt(e,t){const o={...e};for(const r in t){const n=t[r],i=typeof n;r in Oe?(n===null||n&&(i==="string"||i==="number"))&&(o[r]=n):i===typeof o[r]&&(o[r]=r==="rotate"?n%4:n)}return o}const Vt=/[\s,]+/;function Ut(e,t){t.split(Vt).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Gt(e,t=0){const o=e.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(o===""){const n=parseInt(e);return isNaN(n)?0:r(n)}else if(o!==e){let n=0;switch(o){case"%":n=25;break;case"deg":n=90}if(n){let i=parseFloat(e.slice(0,e.length-o.length));return isNaN(i)?0:(i=i/n,i%1===0?r(i):0)}}return t}function Kt(e,t){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)o+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function Wt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Jt(e){return'url("data:image/svg+xml,'+Wt(e)+'")'}const xe={...Ae,inline:!1},Xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Yt={display:"inline-block"},$={"background-color":"currentColor"},Ve={"background-color":"transparent"},Se={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ie={"-webkit-mask":$,mask:$,background:Ve};for(const e in Ie){const t=Ie[e];for(const o in Se)t[e+"-"+o]=Se[o]}function ke(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function Zt(e,t){const o=zt(xe,t),r=t.mode||"svg",n=r==="svg"?{...Xt}:{};let i=typeof t.style=="string"?t.style:"";for(let g in t){const u=t[g];if(u!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":o[g]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&Ut(o,u);break;case"color":i=i+(i.length>0&&i.trim().slice(-1)!==";"?";":"")+"color: "+u+"; ";break;case"rotate":typeof u=="string"?o[g]=Gt(u):typeof u=="number"&&(o[g]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete n["aria-hidden"];break;default:if(g.slice(0,3)==="on:")break;xe[g]===void 0&&(n[g]=u)}}const s=ht(e,o),c=s.attributes;if(o.inline&&(i="vertical-align: -0.125em; "+i),r==="svg"){Object.assign(n,c),i!==""&&(n.style=i);let g=0,u=t.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),{svg:!0,attributes:n,body:yt(s.body,u?()=>u+"ID"+g++:"iconifySvelte")}}const{body:l,width:a,height:f}=e,d=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),p=Kt(l,{...c,width:a+"",height:f+""}),m={"--svg":Jt(p),width:ke(c.width),height:ke(c.height),...Yt,...d?$:Ve};let I="";for(const g in m)I+=g+": "+m[g]+";";return n.style=I+i,{svg:!1,attributes:n}}Fe(!0);bt("",Ct);if(typeof document<"u"&&typeof window<"u"){ze();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!ft(r))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let o in t){const r="IconifyProviders["+o+"] is invalid.";try{const n=t[o];if(typeof n!="object"||!n||n.resources===void 0)continue;wt(o,n)||console.error(r)}catch{console.error(r)}}}}function $t(e,t,o,r,n){function i(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",i(),{data:{...q,...e}};let s;if(typeof e!="string"||(s=B(e,!1,!0))===null)return i(),null;const c=lt(s);if(!c)return o&&(!t.loading||t.loading.name!==e)&&(i(),t.name="",t.loading={name:e,abort:Qt([s],r)}),null;i(),t.name!==e&&(t.name=e,n&&!t.destroyed&&n(e));const l=["iconify"];return s.prefix!==""&&l.push("iconify--"+s.prefix),s.provider!==""&&l.push("iconify--"+s.provider),{data:c,classes:l}}function en(e,t){return e?Zt({...q,...e},t):null}function _e(e){let t;function o(i,s){return i[0].svg?nn:tn}let r=o(e),n=r(e);return{c(){n.c(),t=N()},l(i){n.l(i),t=N()},m(i,s){n.m(i,s),E(i,t,s)},p(i,s){r===(r=o(i))&&n?n.p(i,s):(n.d(1),n=r(i),n&&(n.c(),n.m(t.parentNode,t)))},d(i){n.d(i),i&&v(t)}}}function tn(e){let t,o=[e[0].attributes],r={};for(let n=0;n<o.length;n+=1)r=D(r,o[n]);return{c(){t=U("span"),this.h()},l(n){t=G(n,"SPAN",{}),O(t).forEach(v),this.h()},h(){fe(t,r)},m(n,i){E(n,t,i)},p(n,i){fe(t,r=Ee(o,[i&1&&n[0].attributes]))},d(n){n&&v(t)}}}function nn(e){let t,o=e[0].body+"",r=[e[0].attributes],n={};for(let i=0;i<r.length;i+=1)n=D(n,r[i]);return{c(){t=Ye("svg"),this.h()},l(i){t=Ze(i,"svg",{});var s=O(t);s.forEach(v),this.h()},h(){ue(t,n)},m(i,s){E(i,t,s),t.innerHTML=o},p(i,s){s&1&&o!==(o=i[0].body+"")&&(t.innerHTML=o),ue(t,n=Ee(r,[s&1&&i[0].attributes]))},d(i){i&&v(t)}}}function on(e){let t,o=e[0]&&_e(e);return{c(){o&&o.c(),t=N()},l(r){o&&o.l(r),t=N()},m(r,n){o&&o.m(r,n),E(r,t,n)},p(r,[n]){r[0]?o?o.p(r,n):(o=_e(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},i:A,o:A,d(r){o&&o.d(r),r&&v(t)}}}function rn(e,t,o){const r={name:"",loading:null,destroyed:!1};let n=!1,i=0,s;const c=a=>{typeof t.onLoad=="function"&&t.onLoad(a),$e()("load",{icon:a})};function l(){o(3,i++,i)}return Je(()=>{o(2,n=!0)}),Xe(()=>{o(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),o(1,r.loading=null,r))}),e.$$set=a=>{o(6,t=D(D({},t),ae(a)))},e.$$.update=()=>{{const a=$t(t.icon,r,n,l,c);o(0,s=a?en(a.data,t):null),s&&a.classes&&o(0,s.attributes.class=(typeof t.class=="string"?t.class+" ":"")+a.classes.join(" "),s)}},t=ae(t),[s,r,n,i]}class ln extends Ce{constructor(t){super(),Te(this,t,rn,on,Pe,{})}}export{ln as I,cn as P};
