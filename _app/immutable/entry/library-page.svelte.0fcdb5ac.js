import{S as rt,i as st,s as nt,k as o,r as p,a as w,z as Ze,l as i,m as c,u as y,h as r,c as D,A as Ye,p as u,b as Y,E as e,B as qe,Y as se,v as he,g as we,d as ze,M as at,C as Ke,_ as Rt,X as ce,$ as Ot,a0 as Lt,w as Zt,f as Yt,Z as qt,n as Ht,a1 as Kt}from"../chunks/index.1dee9860.js";import{P as Wt}from"../chunks/PageTitle.7275ff7e.js";import{l as Mt}from"../chunks/library.index.623fea47.js";import{I as Xt}from"../chunks/Icon.6a1dbfc2.js";const je=["Cracking","Crackmes","Cryptography","Cyber Security","Hacking","Malware Analysis","Programming","Unpacking","Windows Internals","DOS Internals"];function At(a,t,n){const s=a.slice();return s[5]=t[n],s}function St(a){let t,n=a[5]+"",s,h,f,B;function E(){return a[3](a[5])}return{c(){t=o("button"),s=p(n),h=o("br"),this.h()},l(d){t=i(d,"BUTTON",{class:!0});var T=c(t);s=y(T,n),T.forEach(r),h=i(d,"BR",{}),this.h()},h(){u(t,"class","link")},m(d,T){Y(d,t,T),e(t,s),Y(d,h,T),f||(B=se(t,"click",E),f=!0)},p(d,T){a=d,T&1&&n!==(n=a[5]+"")&&he(s,n)},d(d){d&&r(t),d&&r(h),f=!1,B()}}}function Ft(a){let t,n,s,h=a[0].title+"",f,B,E,d,T=a[0].description+"",q,M,N,W,S,O,V=a[0].author+"",K,I,P,g,C,k,L,x=a[0].version+"",$,ge,ne,ee=new Date(a[0].creation_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"",_e,be,X,ue=new Date(a[0].publication_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"",me,U,pe,De,F=a[0].categories,z=[];for(let b=0;b<F.length;b+=1)z[b]=St(At(a,F,b));return C=new Xt({props:{icon:zt(a[0].language)}}),{c(){t=o("tr"),n=o("td"),s=o("a"),f=p(h),E=w(),d=o("td"),q=p(T),M=w(),N=o("td");for(let b=0;b<z.length;b+=1)z[b].c();W=w(),S=o("td"),O=o("button"),K=p(V),I=w(),P=o("td"),g=o("div"),Ze(C.$$.fragment),k=w(),L=o("td"),$=p(x),ge=w(),ne=o("td"),_e=p(ee),be=w(),X=o("td"),me=p(ue),this.h()},l(b){t=i(b,"TR",{class:!0});var m=c(t);n=i(m,"TD",{class:!0});var G=c(n);s=i(G,"A",{class:!0,href:!0,target:!0,rel:!0});var j=c(s);f=y(j,h),j.forEach(r),G.forEach(r),E=D(m),d=i(m,"TD",{class:!0});var te=c(d);q=y(te,T),te.forEach(r),M=D(m),N=i(m,"TD",{class:!0});var ye=c(N);for(let J=0;J<z.length;J+=1)z[J].l(ye);ye.forEach(r),W=D(m),S=i(m,"TD",{class:!0});var H=c(S);O=i(H,"BUTTON",{class:!0});var le=c(O);K=y(le,V),le.forEach(r),H.forEach(r),I=D(m),P=i(m,"TD",{});var Ie=c(P);g=i(Ie,"DIV",{class:!0});var Be=c(g);Ye(C.$$.fragment,Be),Be.forEach(r),Ie.forEach(r),k=D(m),L=i(m,"TD",{class:!0});var ae=c(L);$=y(ae,x),ae.forEach(r),ge=D(m),ne=i(m,"TD",{class:!0});var Ce=c(ne);_e=y(Ce,ee),Ce.forEach(r),be=D(m),X=i(m,"TD",{class:!0});var Ne=c(X);me=y(Ne,ue),Ne.forEach(r),m.forEach(r),this.h()},h(){u(s,"class","link"),u(s,"href",B=a[0].download_url),u(s,"target","_blank"),u(s,"rel","noreferrer"),u(n,"class","min-w-[12rem] whitespace-normal"),u(d,"class","min-w-[12rem] whitespace-normal"),u(N,"class","text-center"),u(O,"class","link"),u(S,"class","text-center"),u(g,"class","flex justify-center"),u(L,"class","text-center"),u(ne,"class","text-center"),u(X,"class","text-center"),u(t,"class","hover")},m(b,m){Y(b,t,m),e(t,n),e(n,s),e(s,f),e(t,E),e(t,d),e(d,q),e(t,M),e(t,N);for(let G=0;G<z.length;G+=1)z[G].m(N,null);e(t,W),e(t,S),e(S,O),e(O,K),e(t,I),e(t,P),e(P,g),qe(C,g,null),e(t,k),e(t,L),e(L,$),e(t,ge),e(t,ne),e(ne,_e),e(t,be),e(t,X),e(X,me),U=!0,pe||(De=se(O,"click",a[4]),pe=!0)},p(b,[m]){if((!U||m&1)&&h!==(h=b[0].title+"")&&he(f,h),(!U||m&1&&B!==(B=b[0].download_url))&&u(s,"href",B),(!U||m&1)&&T!==(T=b[0].description+"")&&he(q,T),m&5){F=b[0].categories;let j;for(j=0;j<F.length;j+=1){const te=At(b,F,j);z[j]?z[j].p(te,m):(z[j]=St(te),z[j].c(),z[j].m(N,null))}for(;j<z.length;j+=1)z[j].d(1);z.length=F.length}(!U||m&1)&&V!==(V=b[0].author+"")&&he(K,V);const G={};m&1&&(G.icon=zt(b[0].language)),C.$set(G),(!U||m&1)&&x!==(x=b[0].version+"")&&he($,x),(!U||m&1)&&ee!==(ee=new Date(b[0].creation_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"")&&he(_e,ee),(!U||m&1)&&ue!==(ue=new Date(b[0].publication_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"")&&he(me,ue)},i(b){U||(we(C.$$.fragment,b),U=!0)},o(b){ze(C.$$.fragment,b),U=!1},d(b){b&&r(t),at(z,b),Ke(C),pe=!1,De()}}}function zt(a){switch(a){case"it":return"twemoji:flag-italy";case"en":return"twemoji:flag-united-kingdom";default:return"noto:unknown-flag"}}function Gt(a,t,n){let{libraryItem:s}=t,{filterByAuthor:h=d=>{}}=t,{filterByCategory:f=d=>{}}=t;const B=d=>f(d),E=()=>h(s.author);return a.$$set=d=>{"libraryItem"in d&&n(0,s=d.libraryItem),"filterByAuthor"in d&&n(1,h=d.filterByAuthor),"filterByCategory"in d&&n(2,f=d.filterByCategory)},[s,h,f,B,E]}class Jt extends rt{constructor(t){super(),st(this,t,Gt,Ft,nt,{libraryItem:0,filterByAuthor:1,filterByCategory:2})}}function Vt(a,t,n){const s=a.slice();return s[19]=t[n],s}function jt(a,t,n){const s=a.slice();return s[22]=t[n],s}function Pt(a){let t,n=a[22]+"",s;return{c(){t=o("option"),s=p(n),this.h()},l(h){t=i(h,"OPTION",{});var f=c(t);s=y(f,n),f.forEach(r),this.h()},h(){t.__value=a[22],t.value=t.__value},m(h,f){Y(h,t,f),e(t,s)},p:Ht,d(h){h&&r(t)}}}function Ut(a){let t,n;return t=new Jt({props:{libraryItem:a[19],filterByAuthor:a[12],filterByCategory:a[13]}}),{c(){Ze(t.$$.fragment)},l(s){Ye(t.$$.fragment,s)},m(s,h){qe(t,s,h),n=!0},p(s,h){const f={};h&3&&(f.libraryItem=s[19]),t.$set(f)},i(s){n||(we(t.$$.fragment,s),n=!0)},o(s){ze(t.$$.fragment,s),n=!1},d(s){Ke(t,s)}}}function Qt(a){let t,n,s,h,f,B,E,d,T,q,M,N,W,S,O,V,K,I,P,g,C,k,L,x,$,ge,ne,ee,_e,be,X,ue,me,U,pe,De,F,z,b,m,G,j,te,ye,H,le,Ie,Be,ae,Ce,Ne,J,Pe,We,Ve=Math.ceil(a[0].length/Q)+"",Ue,Xe,de,Fe,Ge,fe,Je,He,Ee,Oe,ve,Le,Qe,xe,Ae,ot=Mt.length+"",et,re,tt,it,Se=je,R=[];for(let l=0;l<Se.length;l+=1)R[l]=Pt(jt(a,Se,l));let Te=a[0].slice((a[1]-1)*Q,(a[1]-1)*Q+Q),A=[];for(let l=0;l<Te.length;l+=1)A[l]=Ut(Vt(a,Te,l));const $t=l=>ze(A[l],1,1,()=>{A[l]=null});return{c(){t=o("div"),n=o("input"),s=w(),h=o("button"),f=p("Cerca"),B=w(),E=o("div"),d=o("select"),T=o("option"),q=p("Scegli categoria");for(let l=0;l<R.length;l+=1)R[l].c();M=w(),N=o("button"),W=p("Seleziona"),S=w(),O=o("div"),V=o("table"),K=o("thead"),I=o("tr"),P=o("th"),g=p("Titolo"),C=w(),k=o("th"),L=p("Descrizione"),x=w(),$=o("th"),ge=p("Categorie"),ne=w(),ee=o("th"),_e=p("Autore"),be=w(),X=o("th"),ue=p("Lingua"),me=w(),U=o("th"),pe=p("Versione"),De=w(),F=o("th"),z=p("Data creazione"),b=w(),m=o("th"),G=p("Data pubblicazione"),j=w(),te=o("tbody");for(let l=0;l<A.length;l+=1)A[l].c();ye=w(),H=o("div"),le=o("button"),Ie=p("«"),Be=w(),ae=o("button"),Ce=p("‹"),Ne=w(),J=o("button"),Pe=p(a[1]),We=p("/"),Ue=p(Ve),Xe=w(),de=o("button"),Fe=p("›"),Ge=w(),fe=o("button"),Je=p("»"),He=w(),Ee=o("div"),Oe=o("div"),ve=o("div"),Le=o("div"),Qe=p("Numero totale di documenti:"),xe=w(),Ae=o("div"),et=p(ot),this.h()},l(l){t=i(l,"DIV",{class:!0});var v=c(t);n=i(v,"INPUT",{type:!0,placeholder:!0,class:!0}),s=D(v),h=i(v,"BUTTON",{class:!0});var _=c(h);f=y(_,"Cerca"),_.forEach(r),v.forEach(r),B=D(l),E=i(l,"DIV",{class:!0});var oe=c(E);d=i(oe,"SELECT",{class:!0});var lt=c(d);T=i(lt,"OPTION",{});var ct=c(T);q=y(ct,"Scegli categoria"),ct.forEach(r);for(let ke=0;ke<R.length;ke+=1)R[ke].l(lt);lt.forEach(r),M=D(oe),N=i(oe,"BUTTON",{class:!0});var ut=c(N);W=y(ut,"Seleziona"),ut.forEach(r),oe.forEach(r),S=D(l),O=i(l,"DIV",{class:!0});var dt=c(O);V=i(dt,"TABLE",{class:!0});var Me=c(V);K=i(Me,"THEAD",{});var ft=c(K);I=i(ft,"TR",{class:!0});var Z=c(I);P=i(Z,"TH",{class:!0});var ht=c(P);g=y(ht,"Titolo"),ht.forEach(r),C=D(Z),k=i(Z,"TH",{class:!0});var _t=c(k);L=y(_t,"Descrizione"),_t.forEach(r),x=D(Z),$=i(Z,"TH",{class:!0});var mt=c($);ge=y(mt,"Categorie"),mt.forEach(r),ne=D(Z),ee=i(Z,"TH",{class:!0});var vt=c(ee);_e=y(vt,"Autore"),vt.forEach(r),be=D(Z),X=i(Z,"TH",{class:!0});var gt=c(X);ue=y(gt,"Lingua"),gt.forEach(r),me=D(Z),U=i(Z,"TH",{class:!0});var bt=c(U);pe=y(bt,"Versione"),bt.forEach(r),De=D(Z),F=i(Z,"TH",{class:!0});var pt=c(F);z=y(pt,"Data creazione"),pt.forEach(r),b=D(Z),m=i(Z,"TH",{class:!0});var yt=c(m);G=y(yt,"Data pubblicazione"),yt.forEach(r),Z.forEach(r),ft.forEach(r),j=D(Me),te=i(Me,"TBODY",{});var Et=c(te);for(let ke=0;ke<A.length;ke+=1)A[ke].l(Et);Et.forEach(r),Me.forEach(r),dt.forEach(r),ye=D(l),H=i(l,"DIV",{class:!0});var ie=c(H);le=i(ie,"BUTTON",{class:!0});var Tt=c(le);Ie=y(Tt,"«"),Tt.forEach(r),Be=D(ie),ae=i(ie,"BUTTON",{class:!0});var kt=c(ae);Ce=y(kt,"‹"),kt.forEach(r),Ne=D(ie),J=i(ie,"BUTTON",{class:!0});var $e=c(J);Pe=y($e,a[1]),We=y($e,"/"),Ue=y($e,Ve),$e.forEach(r),Xe=D(ie),de=i(ie,"BUTTON",{class:!0});var wt=c(de);Fe=y(wt,"›"),wt.forEach(r),Ge=D(ie),fe=i(ie,"BUTTON",{class:!0});var Dt=c(fe);Je=y(Dt,"»"),Dt.forEach(r),ie.forEach(r),He=D(l),Ee=i(l,"DIV",{class:!0});var It=c(Ee);Oe=i(It,"DIV",{class:!0});var Bt=c(Oe);ve=i(Bt,"DIV",{class:!0});var Re=c(ve);Le=i(Re,"DIV",{class:!0});var Ct=c(Le);Qe=y(Ct,"Numero totale di documenti:"),Ct.forEach(r),xe=D(Re),Ae=i(Re,"DIV",{class:!0});var Nt=c(Ae);et=y(Nt,ot),Nt.forEach(r),Re.forEach(r),Bt.forEach(r),It.forEach(r),this.h()},h(){u(n,"type","text"),u(n,"placeholder","Search"),u(n,"class","input input-bordered mx-1.5 w-48"),u(h,"class","btn mx-2 w-28"),u(t,"class","my-2.5 flex justify-end"),T.disabled=!0,T.selected=!0,T.__value="Scegli categoria",T.value=T.__value,u(d,"class","select select-bordered mx-1.5 w-48"),a[3]===void 0&&Rt(()=>a[10].call(d)),u(N,"class","btn mx-2 w-28"),ce(N,"btn-disabled",!je.includes(a[3])),u(E,"class","my-2.5 flex justify-end"),u(P,"class","svelte-1gcl8kj"),u(k,"class","svelte-1gcl8kj"),u($,"class","svelte-1gcl8kj"),u(ee,"class","svelte-1gcl8kj"),u(X,"class","svelte-1gcl8kj"),u(U,"class","svelte-1gcl8kj"),u(F,"class","svelte-1gcl8kj"),u(m,"class","svelte-1gcl8kj"),u(I,"class","text-center"),u(V,"class","table table-compact w-full svelte-1gcl8kj"),u(O,"class","overflow-x-auto my-2.5"),u(le,"class","btn"),ce(le,"btn-disabled",a[1]<=1),u(ae,"class","btn"),ce(ae,"btn-disabled",a[1]<=1),u(J,"class","btn btn-disabled"),u(de,"class","btn"),ce(de,"btn-disabled",a[1]>=Math.ceil(a[0].length/Q)),u(fe,"class","btn"),ce(fe,"btn-disabled",a[1]>=Math.ceil(a[0].length/Q)),u(H,"class","btn-group my-2.5 flex justify-end"),u(Le,"class","stat-title"),u(Ae,"class","stat-value"),u(ve,"class","stat"),u(Oe,"class","stats shadow"),u(Ee,"class","text-center mt-4 mb-8")},m(l,v){Y(l,t,v),e(t,n),Ot(n,a[2]),e(t,s),e(t,h),e(h,f),Y(l,B,v),Y(l,E,v),e(E,d),e(d,T),e(T,q);for(let _=0;_<R.length;_+=1)R[_].m(d,null);Lt(d,a[3]),e(E,M),e(E,N),e(N,W),Y(l,S,v),Y(l,O,v),e(O,V),e(V,K),e(K,I),e(I,P),e(P,g),e(I,C),e(I,k),e(k,L),e(I,x),e(I,$),e($,ge),e(I,ne),e(I,ee),e(ee,_e),e(I,be),e(I,X),e(X,ue),e(I,me),e(I,U),e(U,pe),e(I,De),e(I,F),e(F,z),e(I,b),e(I,m),e(m,G),e(V,j),e(V,te);for(let _=0;_<A.length;_+=1)A[_].m(te,null);Y(l,ye,v),Y(l,H,v),e(H,le),e(le,Ie),e(H,Be),e(H,ae),e(ae,Ce),e(H,Ne),e(H,J),e(J,Pe),e(J,We),e(J,Ue),e(H,Xe),e(H,de),e(de,Fe),e(H,Ge),e(H,fe),e(fe,Je),Y(l,He,v),Y(l,Ee,v),e(Ee,Oe),e(Oe,ve),e(ve,Le),e(Le,Qe),e(ve,xe),e(ve,Ae),e(Ae,et),re=!0,tt||(it=[se(n,"input",a[8]),se(h,"click",a[9]),se(d,"change",a[10]),se(N,"click",a[11]),se(le,"click",a[14]),se(ae,"click",a[15]),se(J,"click",null),se(de,"click",a[16]),se(fe,"click",a[17])],tt=!0)},p(l,[v]){if(v&4&&n.value!==l[2]&&Ot(n,l[2]),v&0){Se=je;let _;for(_=0;_<Se.length;_+=1){const oe=jt(l,Se,_);R[_]?R[_].p(oe,v):(R[_]=Pt(oe),R[_].c(),R[_].m(d,null))}for(;_<R.length;_+=1)R[_].d(1);R.length=Se.length}if(v&8&&Lt(d,l[3]),(!re||v&8)&&ce(N,"btn-disabled",!je.includes(l[3])),v&51){Te=l[0].slice((l[1]-1)*Q,(l[1]-1)*Q+Q);let _;for(_=0;_<Te.length;_+=1){const oe=Vt(l,Te,_);A[_]?(A[_].p(oe,v),we(A[_],1)):(A[_]=Ut(oe),A[_].c(),we(A[_],1),A[_].m(te,null))}for(Zt(),_=Te.length;_<A.length;_+=1)$t(_);Yt()}(!re||v&2)&&ce(le,"btn-disabled",l[1]<=1),(!re||v&2)&&ce(ae,"btn-disabled",l[1]<=1),(!re||v&2)&&he(Pe,l[1]),(!re||v&1)&&Ve!==(Ve=Math.ceil(l[0].length/Q)+"")&&he(Ue,Ve),(!re||v&3)&&ce(de,"btn-disabled",l[1]>=Math.ceil(l[0].length/Q)),(!re||v&3)&&ce(fe,"btn-disabled",l[1]>=Math.ceil(l[0].length/Q))},i(l){if(!re){for(let v=0;v<Te.length;v+=1)we(A[v]);re=!0}},o(l){A=A.filter(Boolean);for(let v=0;v<A.length;v+=1)ze(A[v]);re=!1},d(l){l&&r(t),l&&r(B),l&&r(E),at(R,l),l&&r(S),l&&r(O),at(A,l),l&&r(ye),l&&r(H),l&&r(He),l&&r(Ee),tt=!1,qt(it)}}}const Q=10;function xt(a,t,n){const s=Mt.sort((k,L)=>Date.parse(L.publication_date)-Date.parse(k.publication_date));let h=s,f=1,B="",E="Scegli categoria";function d(k){n(0,h=je.includes(k)?s.filter(L=>L.categories.includes(k)):s),n(1,f=1),n(3,E="Scegli categoria")}function T(k){n(0,h=k?s.filter(L=>L.author===k):s),n(1,f=1)}function q(k){n(0,h=k?s.filter(L=>L.title.toLowerCase().includes(k.toLowerCase())||L.description.toLowerCase().includes(k.toLowerCase())):s),n(1,f=1),n(2,B="")}function M(k){n(1,f=k)}function N(){B=this.value,n(2,B)}const W=()=>q(B);function S(){E=Kt(this),n(3,E)}return[h,f,B,E,d,T,q,M,N,W,S,()=>d(E),k=>T(k),k=>d(k),()=>M(f-f+1),()=>M(f-1),()=>M(f+1),()=>M(Math.ceil(h.length/Q))]}class el extends rt{constructor(t){super(),st(this,t,xt,Qt,nt,{})}}function tl(a){let t,n,s,h,f,B,E,d,T,q,M,N,W,S,O,V,K,I,P;return t=new Wt({props:{pageTitle:"Library"}}),s=new el({}),{c(){Ze(t.$$.fragment),n=w(),Ze(s.$$.fragment),h=w(),f=o("div"),B=o("div"),E=o("p"),d=p('ATTENZIONE: la categoria "Cracking" contiene esclusivamente documenti riguardanti protezioni ormai obsolete ed estremamante datate.'),T=o("br"),q=p(`
            Non è presente alcuna informazione su protezioni commerciali attualmente adoperate.`),M=w(),N=o("div"),W=w(),S=o("div"),O=o("p"),V=p('ATTENTION: the "Cracking" category contains only documents concerning protection schemes that are now obsolete and extremely dated.'),K=o("br"),I=p(`
            There isn't any information on commercial protections currently used.`),this.h()},l(g){Ye(t.$$.fragment,g),n=D(g),Ye(s.$$.fragment,g),h=D(g),f=i(g,"DIV",{class:!0});var C=c(f);B=i(C,"DIV",{class:!0});var k=c(B);E=i(k,"P",{});var L=c(E);d=y(L,'ATTENZIONE: la categoria "Cracking" contiene esclusivamente documenti riguardanti protezioni ormai obsolete ed estremamante datate.'),T=i(L,"BR",{}),q=y(L,`
            Non è presente alcuna informazione su protezioni commerciali attualmente adoperate.`),L.forEach(r),k.forEach(r),M=D(C),N=i(C,"DIV",{class:!0}),c(N).forEach(r),W=D(C),S=i(C,"DIV",{class:!0});var x=c(S);O=i(x,"P",{});var $=c(O);V=y($,'ATTENTION: the "Cracking" category contains only documents concerning protection schemes that are now obsolete and extremely dated.'),K=i($,"BR",{}),I=y($,`
            There isn't any information on commercial protections currently used.`),$.forEach(r),x.forEach(r),C.forEach(r),this.h()},h(){u(B,"class","grid w-1/2 overflow-y-auto text-sm my-2.5 text-red-600"),u(N,"class","divider divider-horizontal"),u(S,"class","grid w-1/2 overflow-y-auto text-sm my-2.5 text-red-600"),u(f,"class","flex w-full mt-4 mb-6")},m(g,C){qe(t,g,C),Y(g,n,C),qe(s,g,C),Y(g,h,C),Y(g,f,C),e(f,B),e(B,E),e(E,d),e(E,T),e(E,q),e(f,M),e(f,N),e(f,W),e(f,S),e(S,O),e(O,V),e(O,K),e(O,I),P=!0},p:Ht,i(g){P||(we(t.$$.fragment,g),we(s.$$.fragment,g),P=!0)},o(g){ze(t.$$.fragment,g),ze(s.$$.fragment,g),P=!1},d(g){Ke(t,g),g&&r(n),Ke(s,g),g&&r(h),g&&r(f)}}}class nl extends rt{constructor(t){super(),st(this,t,null,tl,nt,{})}}export{nl as default};