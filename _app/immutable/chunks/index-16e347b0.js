function k(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t&&typeof t=="object"&&typeof t.then=="function"}function q(t){return t()}function O(){return Object.create(null)}function y(t){t.forEach(q)}function D(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function ht(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function K(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function mt(t,e,n){t.$$.on_destroy.push(Q(e,n))}function pt(t,e,n,r){if(t){const c=L(t,e,n,r);return t[0](c)}}function L(t,e,n,r){return t[1]&&r?G(n.ctx.slice(),t[1](r(e))):n.ctx}function yt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const l=[],s=Math.max(e.dirty.length,c.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|c[o];return l}return e.dirty|c}return e.dirty}function gt(t,e,n,r,c,l){if(c){const s=L(e,n,r,l);t.p(s,c)}}function bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function xt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let w=!1;function R(){w=!0}function U(){w=!1}function V(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let i=0;i<e.length;i++){const u=e[i].claim_order,f=(c>0&&e[n[c]].claim_order<=u?c+1:V(1,c,d=>e[n[d]].claim_order,u))-1;r[i]=n[f]+1;const a=f+1;n[a]=i,c=Math.max(a,c)}const l=[],s=[];let o=e.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(l.push(e[i-1]);o>=i;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<s.length;i++){for(;u<l.length&&s[i].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(s[i],f)}}function Y(t,e){if(w){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){w&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function $t(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function kt(){return j(" ")}function wt(){return j("")}function Et(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function B(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:B(t,r,e[r])}function St(t,e){for(const n in e)B(t,n,e[n])}function nt(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,r,c=!1){rt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const i=n(o);return i===void 0?t.splice(s,1):t[s]=i,c||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const i=n(o);return i===void 0?t.splice(s,1):t[s]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function z(t,e,n,r){return I(t,c=>c.nodeName===e,c=>{const l=[];for(let s=0;s<c.attributes.length;s++){const o=c.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>c.removeAttribute(s))},()=>r(e))}function jt(t,e,n){return z(t,e,n,tt)}function At(t,e,n){return z(t,e,n,et)}function ct(t,e){return I(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>j(e),!0)}function Ct(t){return ct(t," ")}function Mt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ot(t,e){t.value=e??""}function Pt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Tt(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function qt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Dt(t,e,n){t.classList[n?"add":"remove"](e)}function it(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,r,e),c}function Lt(t,e){return new t(e)}let p;function _(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function Bt(t){g().$$.on_mount.push(t)}function It(t){g().$$.after_update.push(t)}function zt(t){g().$$.on_destroy.push(t)}function Ft(){const t=g();return(e,n,{cancelable:r=!1}={})=>{const c=t.$$.callbacks[e];if(c){const l=it(e,n,{cancelable:r});return c.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}const m=[],P=[],v=[],T=[],F=Promise.resolve();let N=!1;function H(){N||(N=!0,F.then(A))}function Ht(){return H(),F}function S(t){v.push(t)}const E=new Set;let x=0;function A(){const t=p;do{for(;x<m.length;){const e=m[x];x++,_(e),st(e.$$)}for(_(null),m.length=0,x=0;P.length;)P.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];E.has(n)||(E.add(n),n())}v.length=0}while(m.length);for(;T.length;)T.pop()();N=!1,E.clear(),_(t)}function st(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const $=new Set;let h;function lt(){h={r:0,c:[],p:h}}function ut(){h.r||y(h.c),h=h.p}function W(t,e){t&&t.i&&($.delete(t),t.i(e))}function ot(t,e,n,r){if(t&&t.o){if($.has(t))return;$.add(t),h.c.push(()=>{$.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Wt(t,e){const n=e.token={};function r(c,l,s,o){if(e.token!==n)return;e.resolved=o;let i=e.ctx;s!==void 0&&(i=i.slice(),i[s]=o);const u=c&&(e.current=c)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==l&&a&&(lt(),ot(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),ut())}):e.block.d(1),u.c(),W(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[l]=u),f&&A()}if(J(t)){const c=g();if(t.then(l=>{_(c),r(e.then,1,e.value,l),_(null)},l=>{if(_(c),r(e.catch,2,e.error,l),_(null),!e.hasCatch)throw l}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Gt(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function Jt(t,e){const n={},r={},c={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const i in s)i in o||(r[i]=1);for(const i in o)c[i]||(n[i]=o[i],c[i]=1);t[l]=o}else for(const i in s)c[i]=1}for(const s in r)s in n||(n[s]=void 0);return n}function Kt(t){t&&t.c()}function Qt(t,e){t&&t.l(e)}function at(t,e,n,r){const{fragment:c,after_update:l}=t.$$;c&&c.m(e,n),r||S(()=>{const s=t.$$.on_mount.map(q).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...s):y(s),t.$$.on_mount=[]}),l.forEach(S)}function ft(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(m.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Rt(t,e,n,r,c,l,s,o=[-1]){const i=p;_(t);const u=t.$$={fragment:null,ctx:[],props:l,update:k,not_equal:c,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:O(),dirty:o,skip_bound:!1,root:e.target||i.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,d,...C)=>{const M=C.length?C[0]:d;return u.ctx&&c(u.ctx[a],u.ctx[a]=M)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](M),f&&_t(t,a)),d}):[],u.update(),f=!0,y(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){R();const a=nt(e.target);u.fragment&&u.fragment.l(a),a.forEach(Z)}else u.fragment&&u.fragment.c();e.intro&&W(t.$$.fragment),at(t,e.target,e.anchor,e.customElement),U(),A()}_(i)}class Ut{$destroy(){ft(this,1),this.$destroy=k}$on(e,n){if(!D(n))return k;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Tt as $,Ht as A,k as B,Wt as C,Y as D,Gt as E,ht as F,pt as G,gt as H,bt as I,yt as J,mt as K,$t as L,zt as M,G as N,xt as O,Nt as P,Jt as Q,et as R,Ut as S,At as T,St as U,Ft as V,Dt as W,Et as X,y as Y,S as Z,Ot as _,kt as a,qt as a0,vt as b,Ct as c,ut as d,wt as e,W as f,lt as g,Z as h,Rt as i,It as j,tt as k,jt as l,nt as m,B as n,Bt as o,Pt as p,j as q,ct as r,dt as s,ot as t,Mt as u,Lt as v,Kt as w,Qt as x,at as y,ft as z};