import{S as w,i as y,s as z,k as b,q as E,a as C,e as S,l as d,m as P,r as R,h as m,c as H,b as _,C as $,u as q,A,H as B}from"../chunks/index-b485bc9f.js";import{p as D}from"../chunks/stores-b82a7cc9.js";function h(p){let r,a=p[0].error.frame+"",f;return{c(){r=b("pre"),f=E(a)},l(l){r=d(l,"PRE",{});var s=P(r);f=R(s,a),s.forEach(m)},m(l,s){_(l,r,s),$(r,f)},p(l,s){s&1&&a!==(a=l[0].error.frame+"")&&q(f,a)},d(l){l&&m(r)}}}function j(p){let r,a=p[0].error.stack+"",f;return{c(){r=b("pre"),f=E(a)},l(l){r=d(l,"PRE",{});var s=P(r);f=R(s,a),s.forEach(m)},m(l,s){_(l,r,s),$(r,f)},p(l,s){s&1&&a!==(a=l[0].error.stack+"")&&q(f,a)},d(l){l&&m(r)}}}function F(p){let r,a=p[0].status+"",f,l,s,c=p[0].error.message+"",k,v,u,n,t=p[0].error.frame&&h(p),i=p[0].error.stack&&j(p);return{c(){r=b("h1"),f=E(a),l=C(),s=b("pre"),k=E(c),v=C(),t&&t.c(),u=C(),i&&i.c(),n=S()},l(e){r=d(e,"H1",{});var o=P(r);f=R(o,a),o.forEach(m),l=H(e),s=d(e,"PRE",{});var N=P(s);k=R(N,c),N.forEach(m),v=H(e),t&&t.l(e),u=H(e),i&&i.l(e),n=S()},m(e,o){_(e,r,o),$(r,f),_(e,l,o),_(e,s,o),$(s,k),_(e,v,o),t&&t.m(e,o),_(e,u,o),i&&i.m(e,o),_(e,n,o)},p(e,[o]){o&1&&a!==(a=e[0].status+"")&&q(f,a),o&1&&c!==(c=e[0].error.message+"")&&q(k,c),e[0].error.frame?t?t.p(e,o):(t=h(e),t.c(),t.m(u.parentNode,u)):t&&(t.d(1),t=null),e[0].error.stack?i?i.p(e,o):(i=j(e),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i:A,o:A,d(e){e&&m(r),e&&m(l),e&&m(s),e&&m(v),t&&t.d(e),e&&m(u),i&&i.d(e),e&&m(n)}}}function G(p,r,a){let f;return B(p,D,l=>a(0,f=l)),[f]}class K extends w{constructor(r){super(),y(this,r,G,F,z,{})}}export{K as default};
