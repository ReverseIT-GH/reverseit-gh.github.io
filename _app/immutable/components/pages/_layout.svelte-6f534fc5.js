import{S as G,i as O,s as Q,k as c,a as w,q as R,l as f,m as d,h as n,c as D,r as V,B as ee,n as v,b as S,C as r,A as x,D as te,v as W,w as X,x as Y,E as ae,F as re,G as se,f as H,t as C,y as Z}from"../../chunks/index-b485bc9f.js";import{b as F}from"../../chunks/paths-6cd3a76e.js";function oe(p){let e,a,l,s,m,u,h,i,o,t,_,g,L,$,q,M,y,E,T;return{c(){e=c("div"),a=c("div"),l=c("a"),s=c("img"),u=w(),h=c("div"),i=c("ul"),o=c("li"),t=c("a"),_=R("Home"),g=w(),L=c("li"),$=c("a"),q=R("Library"),M=w(),y=c("li"),E=c("a"),T=R("FAQ"),this.h()},l(A){e=f(A,"DIV",{class:!0});var b=d(e);a=f(b,"DIV",{class:!0});var k=d(a);l=f(k,"A",{href:!0});var z=d(l);s=f(z,"IMG",{src:!0,alt:!0}),z.forEach(n),k.forEach(n),u=D(b),h=f(b,"DIV",{class:!0});var B=d(h);i=f(B,"UL",{class:!0});var I=d(i);o=f(I,"LI",{});var N=d(o);t=f(N,"A",{href:!0});var P=d(t);_=V(P,"Home"),P.forEach(n),N.forEach(n),g=D(I),L=f(I,"LI",{});var U=d(L);$=f(U,"A",{href:!0});var j=d($);q=V(j,"Library"),j.forEach(n),U.forEach(n),M=D(I),y=f(I,"LI",{});var J=d(y);E=f(J,"A",{href:!0});var K=d(E);T=V(K,"FAQ"),K.forEach(n),J.forEach(n),I.forEach(n),B.forEach(n),b.forEach(n),this.h()},h(){ee(s.src,m="header_logo/"+p[0]())||v(s,"src",m),v(s,"alt","ReverseIT"),v(l,"href",F+"/"),v(a,"class","flex-1"),v(t,"href",F+"/"),v($,"href",F+"/library"),v(E,"href",F+"/faq"),v(i,"class","menu menu-horizontal p-0"),v(h,"class","flex-none"),v(e,"class","navbar mb-4 bg-base-200")},m(A,b){S(A,e,b),r(e,a),r(a,l),r(l,s),r(e,u),r(e,h),r(h,i),r(i,o),r(o,t),r(t,_),r(i,g),r(i,L),r(L,$),r($,q),r(i,M),r(i,y),r(y,E),r(E,T)},p:x,i:x,o:x,d(A){A&&n(e)}}}function ne(p){let e=["cfrevolution.png","monsters.png","wholecar.png"];function a(){return e[Math.floor(Math.random()*e.length)]}return[a]}class le extends G{constructor(e){super(),O(this,e,ne,oe,Q,{})}}function ie(p){let e,a,l,s;return{c(){e=c("footer"),a=c("div"),l=c("p"),s=R("\xA9 2022 - the ReverseIT gang"),this.h()},l(m){e=f(m,"FOOTER",{class:!0});var u=d(e);a=f(u,"DIV",{});var h=d(a);l=f(h,"P",{});var i=d(l);s=V(i,"\xA9 2022 - the ReverseIT gang"),i.forEach(n),h.forEach(n),u.forEach(n),this.h()},h(){v(e,"class","mt-2 footer footer-center p-4 bg-base-200 text-base-content")},m(m,u){S(m,e,u),r(e,a),r(a,l),r(l,s)},p:x,i:x,o:x,d(m){m&&n(e)}}}class ce extends G{constructor(e){super(),O(this,e,null,ie,Q,{})}}function fe(p){let e,a,l,s,m,u,h;a=new le({});const i=p[1].default,o=te(i,p,p[0],null);return u=new ce({}),{c(){e=c("div"),W(a.$$.fragment),l=w(),s=c("main"),o&&o.c(),m=w(),W(u.$$.fragment),this.h()},l(t){e=f(t,"DIV",{class:!0});var _=d(e);X(a.$$.fragment,_),l=D(_),s=f(_,"MAIN",{class:!0});var g=d(s);o&&o.l(g),g.forEach(n),m=D(_),X(u.$$.fragment,_),_.forEach(n),this.h()},h(){v(s,"class","p-3 flex-1 relative overflow-auto"),v(e,"class","overflow-none flex flex-col w-screen h-screen")},m(t,_){S(t,e,_),Y(a,e,null),r(e,l),r(e,s),o&&o.m(s,null),r(e,m),Y(u,e,null),h=!0},p(t,[_]){o&&o.p&&(!h||_&1)&&ae(o,i,t,t[0],h?se(i,t[0],_,null):re(t[0]),null)},i(t){h||(H(a.$$.fragment,t),H(o,t),H(u.$$.fragment,t),h=!0)},o(t){C(a.$$.fragment,t),C(o,t),C(u.$$.fragment,t),h=!1},d(t){t&&n(e),Z(a),o&&o.d(t),Z(u)}}}function ue(p,e,a){let{$$slots:l={},$$scope:s}=e;return p.$$set=m=>{"$$scope"in m&&a(0,s=m.$$scope)},[s,l]}class me extends G{constructor(e){super(),O(this,e,ue,fe,Q,{})}}export{me as default};
