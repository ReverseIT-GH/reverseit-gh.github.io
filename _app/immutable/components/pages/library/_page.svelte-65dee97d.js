import{S as it,i as ut,s as ft,k as i,q as E,a as w,w as Ze,l as u,m as c,r as y,h as l,c as D,x as qe,n as s,b as U,D as e,y as We,u as _e,f as Ie,t as ze,J as ot,z as Ye,Z as Wt,W as ue,_ as Vt,$ as St,X as Bt,g as Yt,d as Jt,Y as Kt,I as Xt,o as Gt,B as Ut,a0 as xt}from"../../../chunks/index-a3bc8cec.js";import{P as ea}from"../../../chunks/PageTitle-063b336c.js";import{l as Zt}from"../../../chunks/library.index-208bb6da.js";import{I as ta}from"../../../chunks/Icon-e21100d3.js";import{p as aa}from"../../../chunks/stores-ad0a9ce6.js";const Ue=["Cracking","Crackmes","Cyber Security","Hacking","Malware Analysis","Programming","Unpacking","Windows Internals"];function Ht(r,a,f){const n=r.slice();return n[2]=a[f],n}function Mt(r){let a,f=r[2]+"",n,h,d;return{c(){a=i("a"),n=E(f),d=i("br"),this.h()},l(b){a=u(b,"A",{class:!0,href:!0,target:!0});var I=c(a);n=y(I,f),I.forEach(l),d=u(b,"BR",{}),this.h()},h(){s(a,"class","link"),s(a,"href",h=r[1]("category",r[2],!0)),s(a,"target","_self")},m(b,I){U(b,a,I),e(a,n),U(b,d,I)},p(b,I){I&1&&f!==(f=b[2]+"")&&_e(n,f),I&3&&h!==(h=b[1]("category",b[2],!0))&&s(a,"href",h)},d(b){b&&l(a),b&&l(d)}}}function ra(r){let a,f,n,h=r[0].title+"",d,b,I,A,P=r[0].description+"",N,J,V,L,S,$,Z=r[0].author+"",p,T,H,o,k,O,X,q,W=r[0].version+"",me,fe,le,ce=new Date(r[0].creation_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"",se,pe,ne,x=new Date(r[0].publication_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"",ge,j,G=r[0].categories,z=[];for(let g=0;g<G.length;g+=1)z[g]=Mt(Ht(r,G,g));return O=new ta({props:{icon:Ot(r[0].language)}}),{c(){a=i("tr"),f=i("td"),n=i("a"),d=E(h),I=w(),A=i("td"),N=E(P),J=w(),V=i("td");for(let g=0;g<z.length;g+=1)z[g].c();L=w(),S=i("td"),$=i("a"),p=E(Z),H=w(),o=i("td"),k=i("div"),Ze(O.$$.fragment),X=w(),q=i("td"),me=E(W),fe=w(),le=i("td"),se=E(ce),pe=w(),ne=i("td"),ge=E(x),this.h()},l(g){a=u(g,"TR",{class:!0});var v=c(a);f=u(v,"TD",{});var K=c(f);n=u(K,"A",{class:!0,href:!0,target:!0,rel:!0});var B=c(n);d=y(B,h),B.forEach(l),K.forEach(l),I=D(v),A=u(v,"TD",{});var ee=c(A);N=y(ee,P),ee.forEach(l),J=D(v),V=u(v,"TD",{class:!0});var Pe=c(V);for(let ye=0;ye<z.length;ye+=1)z[ye].l(Pe);Pe.forEach(l),L=D(v),S=u(v,"TD",{class:!0});var ke=c(S);$=u(ke,"A",{class:!0,href:!0,target:!0});var he=c($);p=y(he,Z),he.forEach(l),ke.forEach(l),H=D(v),o=u(v,"TD",{});var be=c(o);k=u(be,"DIV",{class:!0});var M=c(k);qe(O.$$.fragment,M),M.forEach(l),be.forEach(l),X=D(v),q=u(v,"TD",{class:!0});var Y=c(q);me=y(Y,W),Y.forEach(l),fe=D(v),le=u(v,"TD",{class:!0});var $e=c(le);se=y($e,ce),$e.forEach(l),pe=D(v),ne=u(v,"TD",{class:!0});var Ee=c(ne);ge=y(Ee,x),Ee.forEach(l),v.forEach(l),this.h()},h(){s(n,"class","link"),s(n,"href",b=r[0].download_url),s(n,"target","_blank"),s(n,"rel","noreferrer"),s(V,"class","text-center"),s($,"class","link"),s($,"href",T=r[1]("author",r[0].author,!0)),s($,"target","_self"),s(S,"class","text-center"),s(k,"class","flex justify-center"),s(q,"class","text-center"),s(le,"class","text-center"),s(ne,"class","text-center"),s(a,"class","hover")},m(g,v){U(g,a,v),e(a,f),e(f,n),e(n,d),e(a,I),e(a,A),e(A,N),e(a,J),e(a,V);for(let K=0;K<z.length;K+=1)z[K].m(V,null);e(a,L),e(a,S),e(S,$),e($,p),e(a,H),e(a,o),e(o,k),We(O,k,null),e(a,X),e(a,q),e(q,me),e(a,fe),e(a,le),e(le,se),e(a,pe),e(a,ne),e(ne,ge),j=!0},p(g,[v]){if((!j||v&1)&&h!==(h=g[0].title+"")&&_e(d,h),(!j||v&1&&b!==(b=g[0].download_url))&&s(n,"href",b),(!j||v&1)&&P!==(P=g[0].description+"")&&_e(N,P),v&3){G=g[0].categories;let B;for(B=0;B<G.length;B+=1){const ee=Ht(g,G,B);z[B]?z[B].p(ee,v):(z[B]=Mt(ee),z[B].c(),z[B].m(V,null))}for(;B<z.length;B+=1)z[B].d(1);z.length=G.length}(!j||v&1)&&Z!==(Z=g[0].author+"")&&_e(p,Z),(!j||v&3&&T!==(T=g[1]("author",g[0].author,!0)))&&s($,"href",T);const K={};v&1&&(K.icon=Ot(g[0].language)),O.$set(K),(!j||v&1)&&W!==(W=g[0].version+"")&&_e(me,W),(!j||v&1)&&ce!==(ce=new Date(g[0].creation_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"")&&_e(se,ce),(!j||v&1)&&x!==(x=new Date(g[0].publication_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"")&&_e(ge,x)},i(g){j||(Ie(O.$$.fragment,g),j=!0)},o(g){ze(O.$$.fragment,g),j=!1},d(g){g&&l(a),ot(z,g),Ye(O)}}}function Ot(r){switch(r){case"it":return"twemoji:flag-italy";case"en":return"twemoji:flag-united-kingdom";default:return"noto:unknown-flag"}}function la(r,a,f){let{libraryItem:n}=a,{addQueryParamFun:h=(d,b,I)=>{}}=a;return r.$$set=d=>{"libraryItem"in d&&f(0,n=d.libraryItem),"addQueryParamFun"in d&&f(1,h=d.addQueryParamFun)},[n,h]}class sa extends it{constructor(a){super(),ut(this,a,la,ra,ft,{libraryItem:0,addQueryParamFun:1})}}function Rt(r,a,f){const n=r.slice();return n[14]=a[f],n}function jt(r,a,f){const n=r.slice();return n[17]=a[f],n}function Qt(r){let a,f=r[17]+"",n;return{c(){a=i("option"),n=E(f),this.h()},l(h){a=u(h,"OPTION",{});var d=c(a);n=y(d,f),d.forEach(l),this.h()},h(){a.__value=r[17],a.value=a.__value},m(h,d){U(h,a,d),e(a,n)},p:Ut,d(h){h&&l(a)}}}function Ft(r){let a,f;return a=new sa({props:{libraryItem:r[14],addQueryParamFun:r[8]}}),{c(){Ze(a.$$.fragment)},l(n){qe(a.$$.fragment,n)},m(n,h){We(a,n,h),f=!0},p(n,h){const d={};h&7&&(d.libraryItem=n[14]),a.$set(d)},i(n){f||(Ie(a.$$.fragment,n),f=!0)},o(n){ze(a.$$.fragment,n),f=!1},d(n){Ye(a,n)}}}function na(r){let a,f,n,h,d,b,I,A,P,N,J,V,L,S,$,Z,p,T,H,o,k,O,X,q,W,me,fe,le,ce,se,pe,ne,x,ge,j,G,z,g,v,K,B,ee,Pe,ke,he,be,M,Y,$e,Ee,ye,te,Je,Se,Ke,de,Be,Xe,Ve=Math.ceil(r[0].length/r[1])+"",He,Ge,ae,xe,Me,et,re,tt,Oe,Re,Te,Ae,ve,Ce,at,rt,Le,ct=Zt.length+"",lt,R,st,ht,Ne=Ue,Q=[];for(let t=0;t<Ne.length;t+=1)Q[t]=Qt(jt(r,Ne,t));let we=r[0].slice((r[2]-1)*r[1],(r[2]-1)*r[1]+r[1]),C=[];for(let t=0;t<we.length;t+=1)C[t]=Ft(Rt(r,we,t));const qt=t=>ze(C[t],1,1,()=>{C[t]=null});return{c(){a=i("div"),f=i("input"),n=w(),h=i("a"),d=E("Cerca"),I=w(),A=i("div"),P=i("select"),N=i("option"),J=E("Scegli categoria");for(let t=0;t<Q.length;t+=1)Q[t].c();V=w(),L=i("a"),S=E("Seleziona"),Z=w(),p=i("div"),T=i("table"),H=i("thead"),o=i("tr"),k=i("th"),O=E("Titolo"),X=w(),q=i("th"),W=E("Descrizione"),me=w(),fe=i("th"),le=E("Categorie"),ce=w(),se=i("th"),pe=E("Autore"),ne=w(),x=i("th"),ge=E("Lingua"),j=w(),G=i("th"),z=E("Versione"),g=w(),v=i("th"),K=E("Data creazione"),B=w(),ee=i("th"),Pe=E("Data pubblicazione"),ke=w(),he=i("tbody");for(let t=0;t<C.length;t+=1)C[t].c();be=w(),M=i("div"),Y=i("a"),$e=E("\xAB"),ye=w(),te=i("a"),Je=E("\u2039"),Ke=w(),de=i("a"),Be=E(r[2]),Xe=E("/"),He=E(Ve),Ge=w(),ae=i("a"),xe=E("\u203A"),et=w(),re=i("a"),tt=E("\xBB"),Re=w(),Te=i("div"),Ae=i("div"),ve=i("div"),Ce=i("div"),at=E("Numero totale di documenti:"),rt=w(),Le=i("div"),lt=E(ct),this.h()},l(t){a=u(t,"DIV",{class:!0});var _=c(a);f=u(_,"INPUT",{type:!0,placeholder:!0,class:!0}),n=D(_),h=u(_,"A",{class:!0,href:!0,target:!0});var m=c(h);d=y(m,"Cerca"),m.forEach(l),_.forEach(l),I=D(t),A=u(t,"DIV",{class:!0});var oe=c(A);P=u(oe,"SELECT",{class:!0});var nt=c(P);N=u(nt,"OPTION",{});var dt=c(N);J=y(dt,"Scegli categoria"),dt.forEach(l);for(let De=0;De<Q.length;De+=1)Q[De].l(nt);nt.forEach(l),V=D(oe),L=u(oe,"A",{class:!0,href:!0,target:!0});var _t=c(L);S=y(_t,"Seleziona"),_t.forEach(l),oe.forEach(l),Z=D(t),p=u(t,"DIV",{class:!0});var mt=c(p);T=u(mt,"TABLE",{class:!0});var je=c(T);H=u(je,"THEAD",{});var gt=c(H);o=u(gt,"TR",{class:!0});var F=c(o);k=u(F,"TH",{});var vt=c(k);O=y(vt,"Titolo"),vt.forEach(l),X=D(F),q=u(F,"TH",{});var pt=c(q);W=y(pt,"Descrizione"),pt.forEach(l),me=D(F),fe=u(F,"TH",{});var bt=c(fe);le=y(bt,"Categorie"),bt.forEach(l),ce=D(F),se=u(F,"TH",{});var Et=c(se);pe=y(Et,"Autore"),Et.forEach(l),ne=D(F),x=u(F,"TH",{});var yt=c(x);ge=y(yt,"Lingua"),yt.forEach(l),j=D(F),G=u(F,"TH",{});var Tt=c(G);z=y(Tt,"Versione"),Tt.forEach(l),g=D(F),v=u(F,"TH",{});var wt=c(v);K=y(wt,"Data creazione"),wt.forEach(l),B=D(F),ee=u(F,"TH",{});var Dt=c(ee);Pe=y(Dt,"Data pubblicazione"),Dt.forEach(l),F.forEach(l),gt.forEach(l),ke=D(je),he=u(je,"TBODY",{});var It=c(he);for(let De=0;De<C.length;De+=1)C[De].l(It);It.forEach(l),je.forEach(l),mt.forEach(l),be=D(t),M=u(t,"DIV",{class:!0});var ie=c(M);Y=u(ie,"A",{class:!0,href:!0,target:!0});var Pt=c(Y);$e=y(Pt,"\xAB"),Pt.forEach(l),ye=D(ie),te=u(ie,"A",{class:!0,href:!0,target:!0});var kt=c(te);Je=y(kt,"\u2039"),kt.forEach(l),Ke=D(ie),de=u(ie,"A",{class:!0,href:!0});var Qe=c(de);Be=y(Qe,r[2]),Xe=y(Qe,"/"),He=y(Qe,Ve),Qe.forEach(l),Ge=D(ie),ae=u(ie,"A",{class:!0,href:!0,target:!0});var $t=c(ae);xe=y($t,"\u203A"),$t.forEach(l),et=D(ie),re=u(ie,"A",{class:!0,href:!0,target:!0});var At=c(re);tt=y(At,"\xBB"),At.forEach(l),ie.forEach(l),Re=D(t),Te=u(t,"DIV",{class:!0});var Ct=c(Te);Ae=u(Ct,"DIV",{class:!0});var Lt=c(Ae);ve=u(Lt,"DIV",{class:!0});var Fe=c(ve);Ce=u(Fe,"DIV",{class:!0});var Nt=c(Ce);at=y(Nt,"Numero totale di documenti:"),Nt.forEach(l),rt=D(Fe),Le=u(Fe,"DIV",{class:!0});var zt=c(Le);lt=y(zt,ct),zt.forEach(l),Fe.forEach(l),Lt.forEach(l),Ct.forEach(l),this.h()},h(){s(f,"type","text"),s(f,"placeholder","Search"),s(f,"class","input input-bordered mx-1.5 w-48"),s(h,"class","btn mx-2 w-28"),s(h,"href",b=r[5]("search",r[3],!0)),s(h,"target","_self"),s(a,"class","my-2.5 flex justify-end"),N.disabled=!0,N.selected=!0,N.__value="Scegli categoria",N.value=N.__value,s(P,"class","select select-bordered mx-1.5 w-48"),r[4]===void 0&&Wt(()=>r[7].call(P)),s(L,"class","btn mx-2 w-28"),s(L,"href",$=r[5]("category",r[4],!0)),s(L,"target","_self"),ue(L,"btn-disabled",!Ue.includes(r[4])),s(A,"class","my-2.5 flex justify-end"),s(o,"class","text-center"),s(T,"class","table table-compact w-full"),s(p,"class","overflow-x-auto my-2.5"),s(Y,"class","btn"),s(Y,"href",Ee=r[5]("current-page",r[2]-r[2]+1,!1)),s(Y,"target","_self"),ue(Y,"btn-disabled",r[2]<=1),s(te,"class","btn"),s(te,"href",Se=r[5]("current-page",r[2]-1,!1)),s(te,"target","_self"),ue(te,"btn-disabled",r[2]<=1),s(de,"class","btn btn-disabled"),s(de,"href",null),s(ae,"class","btn"),s(ae,"href",Me=r[5]("current-page",r[2]+1,!1)),s(ae,"target","_self"),ue(ae,"btn-disabled",r[2]>=Math.ceil(r[0].length/r[1])),s(re,"class","btn"),s(re,"href",Oe=r[5]("current-page",Math.ceil(r[0].length/r[1]),!1)),s(re,"target","_self"),ue(re,"btn-disabled",r[2]>=Math.ceil(r[0].length/r[1])),s(M,"class","btn-group my-2.5 flex justify-end"),s(Ce,"class","stat-title"),s(Le,"class","stat-value"),s(ve,"class","stat"),s(Ae,"class","stats shadow"),s(Te,"class","text-center mt-4 mb-8")},m(t,_){U(t,a,_),e(a,f),Vt(f,r[3]),e(a,n),e(a,h),e(h,d),U(t,I,_),U(t,A,_),e(A,P),e(P,N),e(N,J);for(let m=0;m<Q.length;m+=1)Q[m].m(P,null);St(P,r[4]),e(A,V),e(A,L),e(L,S),U(t,Z,_),U(t,p,_),e(p,T),e(T,H),e(H,o),e(o,k),e(k,O),e(o,X),e(o,q),e(q,W),e(o,me),e(o,fe),e(fe,le),e(o,ce),e(o,se),e(se,pe),e(o,ne),e(o,x),e(x,ge),e(o,j),e(o,G),e(G,z),e(o,g),e(o,v),e(v,K),e(o,B),e(o,ee),e(ee,Pe),e(T,ke),e(T,he);for(let m=0;m<C.length;m+=1)C[m].m(he,null);U(t,be,_),U(t,M,_),e(M,Y),e(Y,$e),e(M,ye),e(M,te),e(te,Je),e(M,Ke),e(M,de),e(de,Be),e(de,Xe),e(de,He),e(M,Ge),e(M,ae),e(ae,xe),e(M,et),e(M,re),e(re,tt),U(t,Re,_),U(t,Te,_),e(Te,Ae),e(Ae,ve),e(ve,Ce),e(Ce,at),e(ve,rt),e(ve,Le),e(Le,lt),R=!0,st||(ht=[Bt(f,"input",r[6]),Bt(P,"change",r[7])],st=!0)},p(t,[_]){if(_&8&&f.value!==t[3]&&Vt(f,t[3]),(!R||_&8&&b!==(b=t[5]("search",t[3],!0)))&&s(h,"href",b),_&0){Ne=Ue;let m;for(m=0;m<Ne.length;m+=1){const oe=jt(t,Ne,m);Q[m]?Q[m].p(oe,_):(Q[m]=Qt(oe),Q[m].c(),Q[m].m(P,null))}for(;m<Q.length;m+=1)Q[m].d(1);Q.length=Ne.length}if(_&16&&St(P,t[4]),(!R||_&16&&$!==($=t[5]("category",t[4],!0)))&&s(L,"href",$),(!R||_&16)&&ue(L,"btn-disabled",!Ue.includes(t[4])),_&39){we=t[0].slice((t[2]-1)*t[1],(t[2]-1)*t[1]+t[1]);let m;for(m=0;m<we.length;m+=1){const oe=Rt(t,we,m);C[m]?(C[m].p(oe,_),Ie(C[m],1)):(C[m]=Ft(oe),C[m].c(),Ie(C[m],1),C[m].m(he,null))}for(Yt(),m=we.length;m<C.length;m+=1)qt(m);Jt()}(!R||_&4&&Ee!==(Ee=t[5]("current-page",t[2]-t[2]+1,!1)))&&s(Y,"href",Ee),(!R||_&4)&&ue(Y,"btn-disabled",t[2]<=1),(!R||_&4&&Se!==(Se=t[5]("current-page",t[2]-1,!1)))&&s(te,"href",Se),(!R||_&4)&&ue(te,"btn-disabled",t[2]<=1),(!R||_&4)&&_e(Be,t[2]),(!R||_&3)&&Ve!==(Ve=Math.ceil(t[0].length/t[1])+"")&&_e(He,Ve),(!R||_&4&&Me!==(Me=t[5]("current-page",t[2]+1,!1)))&&s(ae,"href",Me),(!R||_&7)&&ue(ae,"btn-disabled",t[2]>=Math.ceil(t[0].length/t[1])),(!R||_&3&&Oe!==(Oe=t[5]("current-page",Math.ceil(t[0].length/t[1]),!1)))&&s(re,"href",Oe),(!R||_&7)&&ue(re,"btn-disabled",t[2]>=Math.ceil(t[0].length/t[1]))},i(t){if(!R){for(let _=0;_<we.length;_+=1)Ie(C[_]);R=!0}},o(t){C=C.filter(Boolean);for(let _=0;_<C.length;_+=1)ze(C[_]);R=!1},d(t){t&&l(a),t&&l(I),t&&l(A),ot(Q,t),t&&l(Z),t&&l(p),ot(C,t),t&&l(be),t&&l(M),t&&l(Re),t&&l(Te),st=!1,Kt(ht)}}}function oa(r,a,f){let n;Xt(r,aa,p=>f(10,n=p));let h=Zt.sort((p,T)=>Date.parse(T.publication_date)-Date.parse(p.publication_date)),d,b,I,A,P;Gt(()=>{d=n.url,f(1,b=Number(n.url.searchParams.get("page-items"))||10),f(2,I=Number(n.url.searchParams.get("current-page"))||1),J(n.url.searchParams.get("author")||""),N(n.url.searchParams.get("category")||""),V(n.url.searchParams.get("search")||"")});function N(p){f(0,h=p?h.filter(T=>T.categories.includes(p)):h)}function J(p){f(0,h=p?h.filter(T=>T.author===p):h)}function V(p){f(0,h=p?h.filter(T=>T.title.toLowerCase().includes(p.toLowerCase())||T.description.toLowerCase().includes(p.toLowerCase())):h)}function L(p,T,H){if(d==null)return d;let o=new URL(d);return H&&d.searchParams.forEach((k,O)=>{o.searchParams.delete(O)}),o.searchParams.set(p,T),String(o)}function S(){A=this.value,f(3,A)}function $(){P=xt(this),f(4,P)}return[h,b,I,A,P,L,S,$,(p,T,H)=>L(p,T,H)]}class ia extends it{constructor(a){super(),ut(this,a,oa,na,ft,{})}}function ua(r){let a,f,n,h,d,b,I,A,P,N,J,V,L,S,$,Z,p,T,H;return a=new ea({props:{pageTitle:"Library"}}),n=new ia({}),{c(){Ze(a.$$.fragment),f=w(),Ze(n.$$.fragment),h=w(),d=i("div"),b=i("div"),I=i("p"),A=E('ATTENZIONE: la categoria "Cracking" contiene esclusivamente documenti riguardanti protezioni ormai obsolete ed estremamante datate.'),P=i("br"),N=E(`
            Non \xE8 presente alcuna informazione su protezioni commerciali attualmente adoperate.`),J=w(),V=i("div"),L=w(),S=i("div"),$=i("p"),Z=E('ATTENTION: the "Cracking" category contains only documents concerning protection schemes that are now obsolete and extremely dated.'),p=i("br"),T=E(`
            There isn't any information on commercial protections currently used.`),this.h()},l(o){qe(a.$$.fragment,o),f=D(o),qe(n.$$.fragment,o),h=D(o),d=u(o,"DIV",{class:!0});var k=c(d);b=u(k,"DIV",{class:!0});var O=c(b);I=u(O,"P",{});var X=c(I);A=y(X,'ATTENZIONE: la categoria "Cracking" contiene esclusivamente documenti riguardanti protezioni ormai obsolete ed estremamante datate.'),P=u(X,"BR",{}),N=y(X,`
            Non \xE8 presente alcuna informazione su protezioni commerciali attualmente adoperate.`),X.forEach(l),O.forEach(l),J=D(k),V=u(k,"DIV",{class:!0}),c(V).forEach(l),L=D(k),S=u(k,"DIV",{class:!0});var q=c(S);$=u(q,"P",{});var W=c($);Z=y(W,'ATTENTION: the "Cracking" category contains only documents concerning protection schemes that are now obsolete and extremely dated.'),p=u(W,"BR",{}),T=y(W,`
            There isn't any information on commercial protections currently used.`),W.forEach(l),q.forEach(l),k.forEach(l),this.h()},h(){s(b,"class","grid w-1/2 overflow-y-auto text-sm my-2.5 text-red-600"),s(V,"class","divider divider-horizontal"),s(S,"class","grid w-1/2 overflow-y-auto text-sm my-2.5 text-red-600"),s(d,"class","flex w-full mt-4 mb-6")},m(o,k){We(a,o,k),U(o,f,k),We(n,o,k),U(o,h,k),U(o,d,k),e(d,b),e(b,I),e(I,A),e(I,P),e(I,N),e(d,J),e(d,V),e(d,L),e(d,S),e(S,$),e($,Z),e($,p),e($,T),H=!0},p:Ut,i(o){H||(Ie(a.$$.fragment,o),Ie(n.$$.fragment,o),H=!0)},o(o){ze(a.$$.fragment,o),ze(n.$$.fragment,o),H=!1},d(o){Ye(a,o),o&&l(f),Ye(n,o),o&&l(h),o&&l(d)}}}class ma extends it{constructor(a){super(),ut(this,a,null,ua,ft,{})}}export{ma as default};
