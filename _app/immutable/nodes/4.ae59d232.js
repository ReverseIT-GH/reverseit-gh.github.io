import{s as Ue,f as c,l as K,a as I,g as u,h as T,m as J,d as o,c as D,j as d,i as O,u as s,K as Y,n as oe,C as Ve,r as le,M as Ne,N as tt,J as te,O as Je,L as lt,v as Qe,P as nt}from"../chunks/scheduler.13dbf150.js";import{S as je,i as ze,b as Se,d as Ae,m as Me,a as ge,t as Te,e as Pe,g as at,c as rt}from"../chunks/index.a2ec85ff.js";import{P as st}from"../chunks/PageTitle.306a158f.js";import{e as Ie,I as it}from"../chunks/Icon.b5706602.js";import{l as Xe}from"../chunks/library.index.623fea47.js";const Oe=["Cracking","Crackmes","Cryptography","Cyber Security","Hacking","Malware Analysis","Programming","Unpacking","Windows Internals","DOS Internals"];function We(t,e,r){const l=t.slice();return l[5]=e[r],l}function Ye(t){let e,r=t[5]+"",l,i,f,k;function p(){return t[3](t[5])}return{c(){e=c("button"),l=K(r),i=c("br"),this.h()},l(n){e=u(n,"BUTTON",{class:!0});var _=T(e);l=J(_,r),_.forEach(o),i=u(n,"BR",{}),this.h()},h(){d(e,"class","link")},m(n,_){O(n,e,_),s(e,l),O(n,i,_),f||(k=Y(e,"click",p),f=!0)},p(n,_){t=n,_&1&&r!==(r=t[5]+"")&&oe(l,r)},d(n){n&&(o(e),o(i)),f=!1,k()}}}function ot(t){let e,r,l,i=t[0].title+"",f,k,p,n,_=t[0].description+"",Z,$,B,ce,H,N,S=t[0].author+"",x,he,F,M,P,h,C,ue=t[0].version+"",de,V,ne,ae=new Date(t[0].creation_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"",U,fe,G,W=new Date(t[0].publication_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"",re,A,j,we,Q=Ie(t[0].categories),y=[];for(let b=0;b<Q.length;b+=1)y[b]=Ye(We(t,Q,b));return P=new it({props:{icon:Ze(t[0].language)}}),{c(){e=c("tr"),r=c("td"),l=c("a"),f=K(i),p=I(),n=c("td"),Z=K(_),$=I(),B=c("td");for(let b=0;b<y.length;b+=1)y[b].c();ce=I(),H=c("td"),N=c("button"),x=K(S),he=I(),F=c("td"),M=c("div"),Se(P.$$.fragment),h=I(),C=c("td"),de=K(ue),V=I(),ne=c("td"),U=K(ae),fe=I(),G=c("td"),re=K(W),this.h()},l(b){e=u(b,"TR",{class:!0});var m=T(e);r=u(m,"TD",{class:!0});var L=T(r);l=u(L,"A",{class:!0,href:!0,target:!0,rel:!0});var E=T(l);f=J(E,i),E.forEach(o),L.forEach(o),p=D(m),n=u(m,"TD",{class:!0});var z=T(n);Z=J(z,_),z.forEach(o),$=D(m),B=u(m,"TD",{class:!0});var X=T(B);for(let ye=0;ye<y.length;ye+=1)y[ye].l(X);X.forEach(o),ce=D(m),H=u(m,"TD",{class:!0});var ke=T(H);N=u(ke,"BUTTON",{class:!0});var be=T(N);x=J(be,S),be.forEach(o),ke.forEach(o),he=D(m),F=u(m,"TD",{});var se=T(F);M=u(se,"DIV",{class:!0});var Ee=T(M);Ae(P.$$.fragment,Ee),Ee.forEach(o),se.forEach(o),h=D(m),C=u(m,"TD",{class:!0});var ve=T(C);de=J(ve,ue),ve.forEach(o),V=D(m),ne=u(m,"TD",{class:!0});var q=T(ne);U=J(q,ae),q.forEach(o),fe=D(m),G=u(m,"TD",{class:!0});var pe=T(G);re=J(pe,W),pe.forEach(o),m.forEach(o),this.h()},h(){d(l,"class","link"),d(l,"href",k=t[0].download_url),d(l,"target","_blank"),d(l,"rel","noreferrer"),d(r,"class","min-w-[14rem] whitespace-normal"),d(n,"class","min-w-[14rem] whitespace-normal"),d(B,"class","text-center min-w-[10rem]"),d(N,"class","link"),d(H,"class","text-center min-w-[10rem]"),d(M,"class","flex justify-center"),d(C,"class","text-center"),d(ne,"class","text-center"),d(G,"class","text-center"),d(e,"class","hover:bg-base-300")},m(b,m){O(b,e,m),s(e,r),s(r,l),s(l,f),s(e,p),s(e,n),s(n,Z),s(e,$),s(e,B);for(let L=0;L<y.length;L+=1)y[L]&&y[L].m(B,null);s(e,ce),s(e,H),s(H,N),s(N,x),s(e,he),s(e,F),s(F,M),Me(P,M,null),s(e,h),s(e,C),s(C,de),s(e,V),s(e,ne),s(ne,U),s(e,fe),s(e,G),s(G,re),A=!0,j||(we=Y(N,"click",t[4]),j=!0)},p(b,[m]){if((!A||m&1)&&i!==(i=b[0].title+"")&&oe(f,i),(!A||m&1&&k!==(k=b[0].download_url))&&d(l,"href",k),(!A||m&1)&&_!==(_=b[0].description+"")&&oe(Z,_),m&5){Q=Ie(b[0].categories);let E;for(E=0;E<Q.length;E+=1){const z=We(b,Q,E);y[E]?y[E].p(z,m):(y[E]=Ye(z),y[E].c(),y[E].m(B,null))}for(;E<y.length;E+=1)y[E].d(1);y.length=Q.length}(!A||m&1)&&S!==(S=b[0].author+"")&&oe(x,S);const L={};m&1&&(L.icon=Ze(b[0].language)),P.$set(L),(!A||m&1)&&ue!==(ue=b[0].version+"")&&oe(de,ue),(!A||m&1)&&ae!==(ae=new Date(b[0].creation_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"")&&oe(U,ae),(!A||m&1)&&W!==(W=new Date(b[0].publication_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"")&&oe(re,W)},i(b){A||(ge(P.$$.fragment,b),A=!0)},o(b){Te(P.$$.fragment,b),A=!1},d(b){b&&o(e),Ve(y,b),Pe(P),j=!1,we()}}}function Ze(t){switch(t){case"it":return"twemoji:flag-italy";case"en":return"twemoji:flag-united-kingdom";default:return"noto:unknown-flag"}}function ct(t,e,r){let{libraryItem:l}=e,{filterByAuthor:i=n=>{}}=e,{filterByCategory:f=n=>{}}=e;const k=n=>f(n),p=()=>i(l.author);return t.$$set=n=>{"libraryItem"in n&&r(0,l=n.libraryItem),"filterByAuthor"in n&&r(1,i=n.filterByAuthor),"filterByCategory"in n&&r(2,f=n.filterByCategory)},[l,i,f,k,p]}class ut extends je{constructor(e){super(),ze(this,e,ct,ot,Ue,{libraryItem:0,filterByAuthor:1,filterByCategory:2})}}function Fe(t,e,r){const l=t.slice();return l[19]=e[r],l}function dt(t,e,r){const l=t.slice();return l[22]=e[r],l}function ft(t){let e,r;return{c(){e=c("option"),r=K(t[22]),this.h()},l(l){e=u(l,"OPTION",{});var i=T(e);r=J(i,t[22]),i.forEach(o),this.h()},h(){e.__value=t[22],Ne(e,e.__value)},m(l,i){O(l,e,i),s(e,r)},p:Qe,d(l){l&&o(e)}}}function Ge(t){let e,r;return e=new ut({props:{libraryItem:t[19],filterByAuthor:t[12],filterByCategory:t[13]}}),{c(){Se(e.$$.fragment)},l(l){Ae(e.$$.fragment,l)},m(l,i){Me(e,l,i),r=!0},p(l,i){const f={};i&3&&(f.libraryItem=l[19]),e.$set(f)},i(l){r||(ge(e.$$.fragment,l),r=!0)},o(l){Te(e.$$.fragment,l),r=!1},d(l){Pe(e,l)}}}function ht(t){let e,r,l,i,f="Cerca",k,p,n,_,Z="Scegli categoria",$,B,ce="Seleziona",H,N,S,x,he='<tr class="text-center uppercase text-sm bg-base-200"><th>Titolo</th> <th>Descrizione</th> <th>Categorie</th> <th>Autore</th> <th>Lingua</th> <th>Versione</th> <th>Creazione</th> <th>Pubblicazione</th></tr>',F,M,P,h,C,ue="«",de,V,ne="‹",ae,U,fe,G,W=Math.ceil(t[0].length/R)+"",re,A,j,we="›",Q,y,b="»",m,L,E,z,X,ke="Numero totale di documenti:",be,se,Ee=Xe.length+"",ve,q,pe,ye,qe=Ie(Oe),ie=[];for(let a=0;a<qe.length;a+=1)ie[a]=ft(dt(t,qe,a));let _e=Ie(t[0].slice((t[1]-1)*R,(t[1]-1)*R+R)),w=[];for(let a=0;a<_e.length;a+=1)w[a]=Ge(Fe(t,_e,a));const et=a=>Te(w[a],1,1,()=>{w[a]=null});return{c(){e=c("div"),r=c("input"),l=I(),i=c("button"),i.textContent=f,k=I(),p=c("div"),n=c("select"),_=c("option"),_.textContent=Z;for(let a=0;a<ie.length;a+=1)ie[a].c();$=I(),B=c("button"),B.textContent=ce,H=I(),N=c("div"),S=c("table"),x=c("thead"),x.innerHTML=he,F=I(),M=c("tbody");for(let a=0;a<w.length;a+=1)w[a].c();P=I(),h=c("div"),C=c("button"),C.textContent=ue,de=I(),V=c("button"),V.textContent=ne,ae=I(),U=c("button"),fe=K(t[1]),G=K("/"),re=K(W),A=I(),j=c("button"),j.textContent=we,Q=I(),y=c("button"),y.textContent=b,m=I(),L=c("div"),E=c("div"),z=c("div"),X=c("div"),X.textContent=ke,be=I(),se=c("div"),ve=K(Ee),this.h()},l(a){e=u(a,"DIV",{class:!0});var g=T(e);r=u(g,"INPUT",{type:!0,placeholder:!0,class:!0}),l=D(g),i=u(g,"BUTTON",{class:!0,"data-svelte-h":!0}),le(i)!=="svelte-h5r0fa"&&(i.textContent=f),g.forEach(o),k=D(a),p=u(a,"DIV",{class:!0});var v=T(p);n=u(v,"SELECT",{class:!0});var Ce=T(n);_=u(Ce,"OPTION",{"data-svelte-h":!0}),le(_)!=="svelte-1j8r1i9"&&(_.textContent=Z);for(let me=0;me<ie.length;me+=1)ie[me].l(Ce);Ce.forEach(o),$=D(v),B=u(v,"BUTTON",{class:!0,"data-svelte-h":!0}),le(B)!=="svelte-ygezxv"&&(B.textContent=ce),v.forEach(o),H=D(a),N=u(a,"DIV",{class:!0});var $e=T(N);S=u($e,"TABLE",{class:!0});var De=T(S);x=u(De,"THEAD",{"data-svelte-h":!0}),le(x)!=="svelte-1q4djw2"&&(x.innerHTML=he),F=D(De),M=u(De,"TBODY",{});var He=T(M);for(let me=0;me<w.length;me+=1)w[me].l(He);He.forEach(o),De.forEach(o),$e.forEach(o),P=D(a),h=u(a,"DIV",{class:!0});var ee=T(h);C=u(ee,"BUTTON",{class:!0,"data-svelte-h":!0}),le(C)!=="svelte-1e6w5c9"&&(C.textContent=ue),de=D(ee),V=u(ee,"BUTTON",{class:!0,"data-svelte-h":!0}),le(V)!=="svelte-1vdc8vq"&&(V.textContent=ne),ae=D(ee),U=u(ee,"BUTTON",{class:!0});var Be=T(U);fe=J(Be,t[1]),G=J(Be,"/"),re=J(Be,W),Be.forEach(o),A=D(ee),j=u(ee,"BUTTON",{class:!0,"data-svelte-h":!0}),le(j)!=="svelte-14kw57o"&&(j.textContent=we),Q=D(ee),y=u(ee,"BUTTON",{class:!0,"data-svelte-h":!0}),le(y)!=="svelte-1n76sbx"&&(y.textContent=b),ee.forEach(o),m=D(a),L=u(a,"DIV",{class:!0});var Re=T(L);E=u(Re,"DIV",{class:!0});var xe=T(E);z=u(xe,"DIV",{class:!0});var Le=T(z);X=u(Le,"DIV",{class:!0,"data-svelte-h":!0}),le(X)!=="svelte-1wwflse"&&(X.textContent=ke),be=D(Le),se=u(Le,"DIV",{class:!0});var Ke=T(se);ve=J(Ke,Ee),Ke.forEach(o),Le.forEach(o),xe.forEach(o),Re.forEach(o),this.h()},h(){d(r,"type","text"),d(r,"placeholder","Search"),d(r,"class","input input-bordered mx-1.5 w-48"),d(i,"class","btn btn-neutral mx-2 w-28"),d(e,"class","my-2.5 flex justify-end"),_.disabled=!0,_.selected=!0,_.__value="Scegli categoria",Ne(_,_.__value),d(n,"class","select select-bordered mx-1.5 w-48"),t[3]===void 0&&tt(()=>t[10].call(n)),d(B,"class","btn btn-neutral mx-2 w-28"),te(B,"btn-disabled",!Oe.includes(t[3])),d(p,"class","my-2.5 flex justify-end"),d(S,"class","table table-sm"),d(N,"class","overflow-x-auto my-2.5 rounded-t-lg rounded-b-lg"),d(C,"class","btn btn-neutral"),te(C,"btn-disabled",t[1]<=1),d(V,"class","btn btn-neutral"),te(V,"btn-disabled",t[1]<=1),d(U,"class","btn btn-disabled"),d(j,"class","btn btn-neutral"),te(j,"btn-disabled",t[1]>=Math.ceil(t[0].length/R)),d(y,"class","btn btn-neutral"),te(y,"btn-disabled",t[1]>=Math.ceil(t[0].length/R)),d(h,"class","btn-group my-2.5 flex justify-end"),d(X,"class","stat-title"),d(se,"class","stat-value"),d(z,"class","stat"),d(E,"class","stats shadow"),d(L,"class","text-center mt-4 mb-8")},m(a,g){O(a,e,g),s(e,r),Ne(r,t[2]),s(e,l),s(e,i),O(a,k,g),O(a,p,g),s(p,n),s(n,_);for(let v=0;v<ie.length;v+=1)ie[v]&&ie[v].m(n,null);Je(n,t[3],!0),s(p,$),s(p,B),O(a,H,g),O(a,N,g),s(N,S),s(S,x),s(S,F),s(S,M);for(let v=0;v<w.length;v+=1)w[v]&&w[v].m(M,null);O(a,P,g),O(a,h,g),s(h,C),s(h,de),s(h,V),s(h,ae),s(h,U),s(U,fe),s(U,G),s(U,re),s(h,A),s(h,j),s(h,Q),s(h,y),O(a,m,g),O(a,L,g),s(L,E),s(E,z),s(z,X),s(z,be),s(z,se),s(se,ve),q=!0,pe||(ye=[Y(r,"input",t[8]),Y(i,"click",t[9]),Y(n,"change",t[10]),Y(B,"click",t[11]),Y(C,"click",t[14]),Y(V,"click",t[15]),Y(U,"click",null),Y(j,"click",t[16]),Y(y,"click",t[17])],pe=!0)},p(a,[g]){if(g&4&&r.value!==a[2]&&Ne(r,a[2]),g&8&&Je(n,a[3]),(!q||g&8)&&te(B,"btn-disabled",!Oe.includes(a[3])),g&51){_e=Ie(a[0].slice((a[1]-1)*R,(a[1]-1)*R+R));let v;for(v=0;v<_e.length;v+=1){const Ce=Fe(a,_e,v);w[v]?(w[v].p(Ce,g),ge(w[v],1)):(w[v]=Ge(Ce),w[v].c(),ge(w[v],1),w[v].m(M,null))}for(at(),v=_e.length;v<w.length;v+=1)et(v);rt()}(!q||g&2)&&te(C,"btn-disabled",a[1]<=1),(!q||g&2)&&te(V,"btn-disabled",a[1]<=1),(!q||g&2)&&oe(fe,a[1]),(!q||g&1)&&W!==(W=Math.ceil(a[0].length/R)+"")&&oe(re,W),(!q||g&3)&&te(j,"btn-disabled",a[1]>=Math.ceil(a[0].length/R)),(!q||g&3)&&te(y,"btn-disabled",a[1]>=Math.ceil(a[0].length/R))},i(a){if(!q){for(let g=0;g<_e.length;g+=1)ge(w[g]);q=!0}},o(a){w=w.filter(Boolean);for(let g=0;g<w.length;g+=1)Te(w[g]);q=!1},d(a){a&&(o(e),o(k),o(p),o(H),o(N),o(P),o(h),o(m),o(L)),Ve(ie,a),Ve(w,a),pe=!1,lt(ye)}}}const R=10;function _t(t,e,r){const l=Xe.sort((h,C)=>Date.parse(C.publication_date)-Date.parse(h.publication_date));let i=l,f=1,k="",p="Scegli categoria";function n(h){r(0,i=Oe.includes(h)?l.filter(C=>C.categories.includes(h)):l),r(1,f=1),r(3,p="Scegli categoria")}function _(h){r(0,i=h?l.filter(C=>C.author===h):l),r(1,f=1)}function Z(h){r(0,i=h?l.filter(C=>C.title.toLowerCase().includes(h.toLowerCase())||C.description.toLowerCase().includes(h.toLowerCase())):l),r(1,f=1),r(2,k="")}function $(h){r(1,f=h)}function B(){k=this.value,r(2,k)}const ce=()=>Z(k);function H(){p=nt(this),r(3,p)}return[i,f,k,p,n,_,Z,$,B,ce,H,()=>n(p),h=>_(h),h=>n(h),()=>$(f-f+1),()=>$(f-1),()=>$(f+1),()=>$(Math.ceil(i.length/R))]}class mt extends je{constructor(e){super(),ze(this,e,_t,ht,Ue,{})}}function gt(t){let e,r,l,i,f,k=`<div class="grid w-1/2 overflow-y-auto text-sm my-2.5"><p class="text-red-600">ATTENZIONE: la categoria &quot;Cracking&quot; contiene esclusivamente documenti riguardanti protezioni ormai obsolete ed estremamante datate.<br/>
            Non è presente alcuna informazione su protezioni commerciali attualmente adoperate.</p></div> <div class="divider divider-horizontal"></div> <div class="grid w-1/2 overflow-y-auto text-sm my-2.5"><p class="text-red-600">ATTENTION: the &quot;Cracking&quot; category contains only documents concerning protection schemes that are now obsolete and extremely dated.<br/>
            There isn&#39;t any information on commercial protections currently used.</p></div>`,p;return e=new st({props:{pageTitle:"Library"}}),l=new mt({}),{c(){Se(e.$$.fragment),r=I(),Se(l.$$.fragment),i=I(),f=c("div"),f.innerHTML=k,this.h()},l(n){Ae(e.$$.fragment,n),r=D(n),Ae(l.$$.fragment,n),i=D(n),f=u(n,"DIV",{class:!0,"data-svelte-h":!0}),le(f)!=="svelte-1i7u16i"&&(f.innerHTML=k),this.h()},h(){d(f,"class","flex w-full mt-4 mb-6")},m(n,_){Me(e,n,_),O(n,r,_),Me(l,n,_),O(n,i,_),O(n,f,_),p=!0},p:Qe,i(n){p||(ge(e.$$.fragment,n),ge(l.$$.fragment,n),p=!0)},o(n){Te(e.$$.fragment,n),Te(l.$$.fragment,n),p=!1},d(n){n&&(o(r),o(i),o(f)),Pe(e,n),Pe(l,n)}}}class Tt extends je{constructor(e){super(),ze(this,e,null,gt,Ue,{})}}export{Tt as component};
