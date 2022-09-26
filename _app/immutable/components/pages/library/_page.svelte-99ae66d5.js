import{S as Ve,i as Ke,s as Re,k as c,q as E,a as w,v as $e,l as h,m,r as T,h as n,c as A,w as ke,n as s,b as G,B as e,x as Ce,u as oe,f as be,t as Te,J as it,y as Le,K as he,X as at,L as ft,g as ct,d as ht,G as dt,o as _t,A as mt}from"../../../chunks/index-451b7200.js";import{I as gt,P as pt}from"../../../chunks/Icon-e0242b91.js";import{p as bt}from"../../../chunks/stores-4074afd3.js";const vt=[{title:"A Syscall Journey in the Windows Kernel",description:"Analisi sul funzionamento kernel-side delle syscall di Windows 10 x64",categories:["Windows Internals"],author:"Alice Climent",language:"en",version:"1.0",creation_date:"2022-03-24",publication_date:"2022-09-25",download_url:"https://raw.githubusercontent.com/ReverseIT-GH/library/master/library/A/Alice Climent/A Syscall Journey in the Windows Kernel.pdf"},{title:"Krypton2 Patching the Beast",description:"Tutorial su Krypton2, un crackme creato da Yado",categories:["Crackmes","Unpacking"],author:"AndreaGeddon",language:"it",version:"1.0",creation_date:"2001-03-31",publication_date:"2022-09-25",download_url:"https://raw.githubusercontent.com/ReverseIT-GH/library/master/library/A/AndreaGeddon/Kripton2 Patching the Beast.pdf"}];function rt(a,t,i){const l=a.slice();return l[2]=t[i],l}function lt(a){let t,i=a[2]+"",l,u,g;return{c(){t=c("a"),l=E(i),g=c("br"),this.h()},l(p){t=h(p,"A",{class:!0,href:!0,target:!0});var D=m(t);l=T(D,i),D.forEach(n),g=h(p,"BR",{}),this.h()},h(){s(t,"class","link"),s(t,"href",u=a[1]("category",a[2])),s(t,"target","_self")},m(p,D){G(p,t,D),e(t,l),G(p,g,D)},p(p,D){D&1&&i!==(i=p[2]+"")&&oe(l,i),D&3&&u!==(u=p[1]("category",p[2]))&&s(t,"href",u)},d(p){p&&n(t),p&&n(g)}}}function yt(a){let t,i,l,u=a[0].title+"",g,p,D,C,z=a[0].description+"",B,b,I,Q,K,_,y=a[0].author+"",d,$,O,U,H,W,de,J,re=a[0].version+"",ie,le,x,ne=new Date(a[0].creation_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"",ee,_e,te,Y=new Date(a[0].publication_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"",ue,M,j=a[0].categories,L=[];for(let o=0;o<j.length;o+=1)L[o]=lt(rt(a,j,o));return W=new gt({props:{icon:nt(a[0].language)}}),{c(){t=c("tr"),i=c("td"),l=c("a"),g=E(u),D=w(),C=c("td"),B=E(z),b=w(),I=c("td");for(let o=0;o<L.length;o+=1)L[o].c();Q=w(),K=c("td"),_=c("a"),d=E(y),O=w(),U=c("td"),H=c("div"),$e(W.$$.fragment),de=w(),J=c("td"),ie=E(re),le=w(),x=c("td"),ee=E(ne),_e=w(),te=c("td"),ue=E(Y),this.h()},l(o){t=h(o,"TR",{class:!0});var f=m(t);i=h(f,"TD",{});var F=m(i);l=h(F,"A",{class:!0,href:!0,target:!0});var N=m(l);g=T(N,u),N.forEach(n),F.forEach(n),D=A(f),C=h(f,"TD",{});var se=m(C);B=T(se,z),se.forEach(n),b=A(f),I=h(f,"TD",{class:!0});var R=m(I);for(let ce=0;ce<L.length;ce+=1)L[ce].l(R);R.forEach(n),Q=A(f),K=h(f,"TD",{});var ve=m(K);_=h(ve,"A",{class:!0,href:!0,target:!0});var me=m(_);d=T(me,y),me.forEach(n),ve.forEach(n),O=A(f),U=h(f,"TD",{});var ye=m(U);H=h(ye,"DIV",{class:!0});var q=m(H);ke(W.$$.fragment,q),q.forEach(n),ye.forEach(n),de=A(f),J=h(f,"TD",{class:!0});var ge=m(J);ie=T(ge,re),ge.forEach(n),le=A(f),x=h(f,"TD",{class:!0});var Ee=m(x);ee=T(Ee,ne),Ee.forEach(n),_e=A(f),te=h(f,"TD",{class:!0});var fe=m(te);ue=T(fe,Y),fe.forEach(n),f.forEach(n),this.h()},h(){s(l,"class","link"),s(l,"href",p=a[0].download_url),s(l,"target","_blank"),s(I,"class","text-center"),s(_,"class","link"),s(_,"href",$=a[1]("author",a[0].author)),s(_,"target","_self"),s(H,"class","flex justify-center"),s(J,"class","text-center"),s(x,"class","text-center"),s(te,"class","text-center"),s(t,"class","hover")},m(o,f){G(o,t,f),e(t,i),e(i,l),e(l,g),e(t,D),e(t,C),e(C,B),e(t,b),e(t,I);for(let F=0;F<L.length;F+=1)L[F].m(I,null);e(t,Q),e(t,K),e(K,_),e(_,d),e(t,O),e(t,U),e(U,H),Ce(W,H,null),e(t,de),e(t,J),e(J,ie),e(t,le),e(t,x),e(x,ee),e(t,_e),e(t,te),e(te,ue),M=!0},p(o,[f]){if((!M||f&1)&&u!==(u=o[0].title+"")&&oe(g,u),(!M||f&1&&p!==(p=o[0].download_url))&&s(l,"href",p),(!M||f&1)&&z!==(z=o[0].description+"")&&oe(B,z),f&3){j=o[0].categories;let N;for(N=0;N<j.length;N+=1){const se=rt(o,j,N);L[N]?L[N].p(se,f):(L[N]=lt(se),L[N].c(),L[N].m(I,null))}for(;N<L.length;N+=1)L[N].d(1);L.length=j.length}(!M||f&1)&&y!==(y=o[0].author+"")&&oe(d,y),(!M||f&3&&$!==($=o[1]("author",o[0].author)))&&s(_,"href",$);const F={};f&1&&(F.icon=nt(o[0].language)),W.$set(F),(!M||f&1)&&re!==(re=o[0].version+"")&&oe(ie,re),(!M||f&1)&&ne!==(ne=new Date(o[0].creation_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"")&&oe(ee,ne),(!M||f&1)&&Y!==(Y=new Date(o[0].publication_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"")&&oe(ue,Y)},i(o){M||(be(W.$$.fragment,o),M=!0)},o(o){Te(W.$$.fragment,o),M=!1},d(o){o&&n(t),it(L,o),Le(W)}}}function nt(a){switch(a){case"it":return"twemoji:flag-italy";case"en":return"twemoji:flag-united-kingdom";default:return"noto:unknown-flag"}}function Et(a,t,i){let{libraryItem:l}=t,{addQueryParamFun:u=(g,p)=>{}}=t;return a.$$set=g=>{"libraryItem"in g&&i(0,l=g.libraryItem),"addQueryParamFun"in g&&i(1,u=g.addQueryParamFun)},[l,u]}class Tt extends Ve{constructor(t){super(),Ke(this,t,Et,yt,Re,{libraryItem:0,addQueryParamFun:1})}}function st(a,t,i){const l=a.slice();return l[12]=t[i],l}function ot(a){let t,i;return t=new Tt({props:{libraryItem:a[12],addQueryParamFun:a[6]}}),{c(){$e(t.$$.fragment)},l(l){ke(t.$$.fragment,l)},m(l,u){Ce(t,l,u),i=!0},p(l,u){const g={};u&7&&(g.libraryItem=l[12]),t.$set(g)},i(l){i||(be(t.$$.fragment,l),i=!0)},o(l){Te(t.$$.fragment,l),i=!1},d(l){Le(t,l)}}}function wt(a){let t,i,l,u,g,p,D,C,z,B,b,I,Q,K,_,y,d,$,O,U,H,W,de,J,re,ie,le,x,ne,ee,_e,te,Y,ue,M,j,L,o,f,F,N,se,R,ve,me,ye,q,ge,Ee,fe=Math.ceil(a[0].length/a[1])+"",ce,ze,Z,Ne,Ae,Be,X,He,De,V,Me,Qe,pe=a[0].slice((a[2]-1)*a[1],(a[2]-1)*a[1]+a[1]),P=[];for(let r=0;r<pe.length;r+=1)P[r]=ot(st(a,pe,r));const ut=r=>Te(P[r],1,1,()=>{P[r]=null});return{c(){t=c("div"),i=c("input"),l=w(),u=c("a"),g=E("Cerca"),D=w(),C=c("div"),z=c("table"),B=c("thead"),b=c("tr"),I=c("th"),Q=E("Titolo"),K=w(),_=c("th"),y=E("Descrizione"),d=w(),$=c("th"),O=E("Categorie"),U=w(),H=c("th"),W=E("Autore"),de=w(),J=c("th"),re=E("Lingua"),ie=w(),le=c("th"),x=E("Versione"),ne=w(),ee=c("th"),_e=E("Data creazione"),te=w(),Y=c("th"),ue=E("Data pubblicazione"),M=w(),j=c("tbody");for(let r=0;r<P.length;r+=1)P[r].c();L=w(),o=c("div"),f=c("a"),F=E("\xAB"),se=w(),R=c("a"),ve=E("\u2039"),ye=w(),q=c("a"),ge=E(a[2]),Ee=E("/"),ce=E(fe),ze=w(),Z=c("a"),Ne=E("\u203A"),Be=w(),X=c("a"),He=E("\xBB"),this.h()},l(r){t=h(r,"DIV",{class:!0});var v=m(t);i=h(v,"INPUT",{type:!0,placeholder:!0,class:!0}),l=A(v),u=h(v,"A",{class:!0,href:!0,target:!0});var k=m(u);g=T(k,"Cerca"),k.forEach(n),v.forEach(n),D=A(r),C=h(r,"DIV",{class:!0});var we=m(C);z=h(we,"TABLE",{class:!0});var Ie=m(z);B=h(Ie,"THEAD",{});var je=m(B);b=h(je,"TR",{class:!0});var S=m(b);I=h(S,"TH",{});var Fe=m(I);Q=T(Fe,"Titolo"),Fe.forEach(n),K=A(S),_=h(S,"TH",{});var Ge=m(_);y=T(Ge,"Descrizione"),Ge.forEach(n),d=A(S),$=h(S,"TH",{});var Oe=m($);O=T(Oe,"Categorie"),Oe.forEach(n),U=A(S),H=h(S,"TH",{});var Ue=m(H);W=T(Ue,"Autore"),Ue.forEach(n),de=A(S),J=h(S,"TH",{});var We=m(J);re=T(We,"Lingua"),We.forEach(n),ie=A(S),le=h(S,"TH",{});var Je=m(le);x=T(Je,"Versione"),Je.forEach(n),ne=A(S),ee=h(S,"TH",{});var qe=m(ee);_e=T(qe,"Data creazione"),qe.forEach(n),te=A(S),Y=h(S,"TH",{});var Ye=m(Y);ue=T(Ye,"Data pubblicazione"),Ye.forEach(n),S.forEach(n),je.forEach(n),M=A(Ie),j=h(Ie,"TBODY",{});var Ze=m(j);for(let Se=0;Se<P.length;Se+=1)P[Se].l(Ze);Ze.forEach(n),Ie.forEach(n),we.forEach(n),L=A(r),o=h(r,"DIV",{class:!0});var ae=m(o);f=h(ae,"A",{class:!0,href:!0,target:!0});var Xe=m(f);F=T(Xe,"\xAB"),Xe.forEach(n),se=A(ae),R=h(ae,"A",{class:!0,href:!0,target:!0});var xe=m(R);ve=T(xe,"\u2039"),xe.forEach(n),ye=A(ae),q=h(ae,"A",{class:!0,href:!0});var Pe=m(q);ge=T(Pe,a[2]),Ee=T(Pe,"/"),ce=T(Pe,fe),Pe.forEach(n),ze=A(ae),Z=h(ae,"A",{class:!0,href:!0,target:!0});var et=m(Z);Ne=T(et,"\u203A"),et.forEach(n),Be=A(ae),X=h(ae,"A",{class:!0,href:!0,target:!0});var tt=m(X);He=T(tt,"\xBB"),tt.forEach(n),ae.forEach(n),this.h()},h(){s(i,"type","text"),s(i,"placeholder","Search"),s(i,"class","input input-bordered w-full max-w-xs mx-1.5"),s(u,"class","btn"),s(u,"href",p=a[4]("search",a[3])),s(u,"target","_self"),s(t,"class","my-2.5 flex justify-end"),s(b,"class","text-center"),s(z,"class","table table-compact w-full"),s(C,"class","overflow-x-auto my-2.5"),s(f,"class","btn"),s(f,"href",N=a[4]("current-page",a[2]-a[2]+1)),s(f,"target","_self"),he(f,"btn-disabled",a[2]<=1),s(R,"class","btn"),s(R,"href",me=a[4]("current-page",a[2]-1)),s(R,"target","_self"),he(R,"btn-disabled",a[2]<=1),s(q,"class","btn btn-disabled"),s(q,"href",null),s(Z,"class","btn"),s(Z,"href",Ae=a[4]("current-page",a[2]+1)),s(Z,"target","_self"),he(Z,"btn-disabled",a[2]>=Math.ceil(a[0].length/a[1])),s(X,"class","btn"),s(X,"href",De=a[4]("current-page",Math.ceil(a[0].length/a[1]))),s(X,"target","_self"),he(X,"btn-disabled",a[2]>=Math.ceil(a[0].length/a[1])),s(o,"class","btn-group my-2.5 flex justify-end")},m(r,v){G(r,t,v),e(t,i),at(i,a[3]),e(t,l),e(t,u),e(u,g),G(r,D,v),G(r,C,v),e(C,z),e(z,B),e(B,b),e(b,I),e(I,Q),e(b,K),e(b,_),e(_,y),e(b,d),e(b,$),e($,O),e(b,U),e(b,H),e(H,W),e(b,de),e(b,J),e(J,re),e(b,ie),e(b,le),e(le,x),e(b,ne),e(b,ee),e(ee,_e),e(b,te),e(b,Y),e(Y,ue),e(z,M),e(z,j);for(let k=0;k<P.length;k+=1)P[k].m(j,null);G(r,L,v),G(r,o,v),e(o,f),e(f,F),e(o,se),e(o,R),e(R,ve),e(o,ye),e(o,q),e(q,ge),e(q,Ee),e(q,ce),e(o,ze),e(o,Z),e(Z,Ne),e(o,Be),e(o,X),e(X,He),V=!0,Me||(Qe=ft(i,"input",a[5]),Me=!0)},p(r,[v]){if(v&8&&i.value!==r[3]&&at(i,r[3]),(!V||v&8&&p!==(p=r[4]("search",r[3])))&&s(u,"href",p),v&23){pe=r[0].slice((r[2]-1)*r[1],(r[2]-1)*r[1]+r[1]);let k;for(k=0;k<pe.length;k+=1){const we=st(r,pe,k);P[k]?(P[k].p(we,v),be(P[k],1)):(P[k]=ot(we),P[k].c(),be(P[k],1),P[k].m(j,null))}for(ct(),k=pe.length;k<P.length;k+=1)ut(k);ht()}(!V||v&4&&N!==(N=r[4]("current-page",r[2]-r[2]+1)))&&s(f,"href",N),(!V||v&4)&&he(f,"btn-disabled",r[2]<=1),(!V||v&4&&me!==(me=r[4]("current-page",r[2]-1)))&&s(R,"href",me),(!V||v&4)&&he(R,"btn-disabled",r[2]<=1),(!V||v&4)&&oe(ge,r[2]),(!V||v&3)&&fe!==(fe=Math.ceil(r[0].length/r[1])+"")&&oe(ce,fe),(!V||v&4&&Ae!==(Ae=r[4]("current-page",r[2]+1)))&&s(Z,"href",Ae),(!V||v&7)&&he(Z,"btn-disabled",r[2]>=Math.ceil(r[0].length/r[1])),(!V||v&3&&De!==(De=r[4]("current-page",Math.ceil(r[0].length/r[1]))))&&s(X,"href",De),(!V||v&7)&&he(X,"btn-disabled",r[2]>=Math.ceil(r[0].length/r[1]))},i(r){if(!V){for(let v=0;v<pe.length;v+=1)be(P[v]);V=!0}},o(r){P=P.filter(Boolean);for(let v=0;v<P.length;v+=1)Te(P[v]);V=!1},d(r){r&&n(t),r&&n(D),r&&n(C),it(P,r),r&&n(L),r&&n(o),Me=!1,Qe()}}}function At(a,t,i){let l;dt(a,bt,_=>i(8,l=_));let u=vt.sort((_,y)=>Date.parse(y.publication_date)-Date.parse(_.publication_date)),g,p,D,C;_t(()=>{g=l.url.pathname,i(1,p=Number(l.url.searchParams.get("page-items"))||10),i(2,D=Number(l.url.searchParams.get("current-page"))||1),B(l.url.searchParams.get("author")||""),z(l.url.searchParams.get("category")||""),b(l.url.searchParams.get("search")||"")});function z(_){i(0,u=_?u.filter(y=>y.categories.includes(_)):u)}function B(_){i(0,u=_?u.filter(y=>y.author===_):u)}function b(_){i(0,u=_?u.filter(y=>y.title.toLowerCase().includes(_.toLowerCase())||y.description.toLowerCase().includes(_.toLowerCase())):u)}function I(_,y){if(g==null)return g;const d=g.split("/");return d[d.length-1].includes("?")?g+"&"+_+"="+y:g+"?"+_+"="+y}function Q(){C=this.value,i(3,C)}return[u,p,D,C,I,Q,(_,y)=>I(_,y)]}class Dt extends Ve{constructor(t){super(),Ke(this,t,At,wt,Re,{})}}function It(a){let t,i,l,u,g,p,D,C,z,B,b,I,Q,K,_,y;return t=new pt({props:{pageTitle:"Library"}}),l=new Dt({}),{c(){$e(t.$$.fragment),i=w(),$e(l.$$.fragment),u=w(),g=c("div"),p=c("p"),D=E('ATTENZIONE: la categoria "Cracking" contiene esclusivamente documenti riguardanti protezioni ormai obsolete ed estremamante datate.'),C=c("br"),z=E(`
        Non \xE8 presente alcuna informazione su protezioni commerciali attualmente adoperate.`),B=w(),b=c("div"),I=c("p"),Q=E('ATTENTION: the "Cracking" category contains only documents concerning protection schemes that are now obsolete and extremely dated.'),K=c("br"),_=E(`
        There isn't any information on commercial protections currently used.`),this.h()},l(d){ke(t.$$.fragment,d),i=A(d),ke(l.$$.fragment,d),u=A(d),g=h(d,"DIV",{class:!0});var $=m(g);p=h($,"P",{});var O=m(p);D=T(O,'ATTENZIONE: la categoria "Cracking" contiene esclusivamente documenti riguardanti protezioni ormai obsolete ed estremamante datate.'),C=h(O,"BR",{}),z=T(O,`
        Non \xE8 presente alcuna informazione su protezioni commerciali attualmente adoperate.`),O.forEach(n),$.forEach(n),B=A(d),b=h(d,"DIV",{class:!0});var U=m(b);I=h(U,"P",{});var H=m(I);Q=T(H,'ATTENTION: the "Cracking" category contains only documents concerning protection schemes that are now obsolete and extremely dated.'),K=h(H,"BR",{}),_=T(H,`
        There isn't any information on commercial protections currently used.`),H.forEach(n),U.forEach(n),this.h()},h(){s(g,"class","text-sm my-2.5 text-red-600"),s(b,"class","text-sm my-2.5 text-red-600")},m(d,$){Ce(t,d,$),G(d,i,$),Ce(l,d,$),G(d,u,$),G(d,g,$),e(g,p),e(p,D),e(p,C),e(p,z),G(d,B,$),G(d,b,$),e(b,I),e(I,Q),e(I,K),e(I,_),y=!0},p:mt,i(d){y||(be(t.$$.fragment,d),be(l.$$.fragment,d),y=!0)},o(d){Te(t.$$.fragment,d),Te(l.$$.fragment,d),y=!1},d(d){Le(t,d),d&&n(i),Le(l,d),d&&n(u),d&&n(g),d&&n(B),d&&n(b)}}}class Ct extends Ve{constructor(t){super(),Ke(this,t,null,It,Re,{})}}export{Ct as default};