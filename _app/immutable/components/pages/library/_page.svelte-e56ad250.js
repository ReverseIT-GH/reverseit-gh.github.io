import{S as it,i as ut,s as ft,k as i,q as E,a as w,v as Ze,l as u,m as c,r as y,h as l,c as D,w as qe,n as s,b as U,B as e,x as Ke,u as _e,f as Ie,t as Ve,H as ot,y as Ye,X as Kt,K as ue,Y as zt,Z as St,L as Ht,g as Yt,d as Gt,M as Wt,G as Xt,o as Jt,A as Ut,_ as xt}from"../../../chunks/index-57c738c4.js";import{I as ea,P as ta}from"../../../chunks/Icon-b295261d.js";import{l as Zt}from"../../../chunks/library.index-a146db50.js";import{p as aa}from"../../../chunks/stores-372f6810.js";const Ue=["Cracking","Crackmes","Cyber Security","Hacking","Malware Analysis","Programming","Unpacking","Windows Internals"];function Mt(r,a,f){const n=r.slice();return n[2]=a[f],n}function Bt(r){let a,f=r[2]+"",n,h,d;return{c(){a=i("a"),n=E(f),d=i("br"),this.h()},l(b){a=u(b,"A",{class:!0,href:!0,target:!0});var I=c(a);n=y(I,f),I.forEach(l),d=u(b,"BR",{}),this.h()},h(){s(a,"class","link"),s(a,"href",h=r[1]("category",r[2],!0)),s(a,"target","_self")},m(b,I){U(b,a,I),e(a,n),U(b,d,I)},p(b,I){I&1&&f!==(f=b[2]+"")&&_e(n,f),I&3&&h!==(h=b[1]("category",b[2],!0))&&s(a,"href",h)},d(b){b&&l(a),b&&l(d)}}}function ra(r){let a,f,n,h=r[0].title+"",d,b,I,C,P=r[0].description+"",N,G,z,L,H,A,Z=r[0].author+"",p,T,M,o,k,O,X,q,K=r[0].version+"",ge,fe,le,ce=new Date(r[0].creation_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"",se,pe,ne,x=new Date(r[0].publication_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"",me,Q,J=r[0].categories,V=[];for(let m=0;m<J.length;m+=1)V[m]=Bt(Mt(r,J,m));return O=new ea({props:{icon:Ot(r[0].language)}}),{c(){a=i("tr"),f=i("td"),n=i("a"),d=E(h),I=w(),C=i("td"),N=E(P),G=w(),z=i("td");for(let m=0;m<V.length;m+=1)V[m].c();L=w(),H=i("td"),A=i("a"),p=E(Z),M=w(),o=i("td"),k=i("div"),Ze(O.$$.fragment),X=w(),q=i("td"),ge=E(K),fe=w(),le=i("td"),se=E(ce),pe=w(),ne=i("td"),me=E(x),this.h()},l(m){a=u(m,"TR",{class:!0});var v=c(a);f=u(v,"TD",{});var W=c(f);n=u(W,"A",{class:!0,href:!0,target:!0});var S=c(n);d=y(S,h),S.forEach(l),W.forEach(l),I=D(v),C=u(v,"TD",{});var ee=c(C);N=y(ee,P),ee.forEach(l),G=D(v),z=u(v,"TD",{class:!0});var Pe=c(z);for(let ye=0;ye<V.length;ye+=1)V[ye].l(Pe);Pe.forEach(l),L=D(v),H=u(v,"TD",{});var ke=c(H);A=u(ke,"A",{class:!0,href:!0,target:!0});var he=c(A);p=y(he,Z),he.forEach(l),ke.forEach(l),M=D(v),o=u(v,"TD",{});var be=c(o);k=u(be,"DIV",{class:!0});var B=c(k);qe(O.$$.fragment,B),B.forEach(l),be.forEach(l),X=D(v),q=u(v,"TD",{class:!0});var Y=c(q);ge=y(Y,K),Y.forEach(l),fe=D(v),le=u(v,"TD",{class:!0});var Ae=c(le);se=y(Ae,ce),Ae.forEach(l),pe=D(v),ne=u(v,"TD",{class:!0});var Ee=c(ne);me=y(Ee,x),Ee.forEach(l),v.forEach(l),this.h()},h(){s(n,"class","link"),s(n,"href",b=r[0].download_url),s(n,"target","_blank"),s(z,"class","text-center"),s(A,"class","link"),s(A,"href",T=r[1]("author",r[0].author,!0)),s(A,"target","_self"),s(k,"class","flex justify-center"),s(q,"class","text-center"),s(le,"class","text-center"),s(ne,"class","text-center"),s(a,"class","hover")},m(m,v){U(m,a,v),e(a,f),e(f,n),e(n,d),e(a,I),e(a,C),e(C,N),e(a,G),e(a,z);for(let W=0;W<V.length;W+=1)V[W].m(z,null);e(a,L),e(a,H),e(H,A),e(A,p),e(a,M),e(a,o),e(o,k),Ke(O,k,null),e(a,X),e(a,q),e(q,ge),e(a,fe),e(a,le),e(le,se),e(a,pe),e(a,ne),e(ne,me),Q=!0},p(m,[v]){if((!Q||v&1)&&h!==(h=m[0].title+"")&&_e(d,h),(!Q||v&1&&b!==(b=m[0].download_url))&&s(n,"href",b),(!Q||v&1)&&P!==(P=m[0].description+"")&&_e(N,P),v&3){J=m[0].categories;let S;for(S=0;S<J.length;S+=1){const ee=Mt(m,J,S);V[S]?V[S].p(ee,v):(V[S]=Bt(ee),V[S].c(),V[S].m(z,null))}for(;S<V.length;S+=1)V[S].d(1);V.length=J.length}(!Q||v&1)&&Z!==(Z=m[0].author+"")&&_e(p,Z),(!Q||v&3&&T!==(T=m[1]("author",m[0].author,!0)))&&s(A,"href",T);const W={};v&1&&(W.icon=Ot(m[0].language)),O.$set(W),(!Q||v&1)&&K!==(K=m[0].version+"")&&_e(ge,K),(!Q||v&1)&&ce!==(ce=new Date(m[0].creation_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"")&&_e(se,ce),(!Q||v&1)&&x!==(x=new Date(m[0].publication_date).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"})+"")&&_e(me,x)},i(m){Q||(Ie(O.$$.fragment,m),Q=!0)},o(m){Ve(O.$$.fragment,m),Q=!1},d(m){m&&l(a),ot(V,m),Ye(O)}}}function Ot(r){switch(r){case"it":return"twemoji:flag-italy";case"en":return"twemoji:flag-united-kingdom";default:return"noto:unknown-flag"}}function la(r,a,f){let{libraryItem:n}=a,{addQueryParamFun:h=(d,b,I)=>{}}=a;return r.$$set=d=>{"libraryItem"in d&&f(0,n=d.libraryItem),"addQueryParamFun"in d&&f(1,h=d.addQueryParamFun)},[n,h]}class sa extends it{constructor(a){super(),ut(this,a,la,ra,ft,{libraryItem:0,addQueryParamFun:1})}}function jt(r,a,f){const n=r.slice();return n[14]=a[f],n}function Qt(r,a,f){const n=r.slice();return n[17]=a[f],n}function Rt(r){let a,f=r[17]+"",n;return{c(){a=i("option"),n=E(f),this.h()},l(h){a=u(h,"OPTION",{});var d=c(a);n=y(d,f),d.forEach(l),this.h()},h(){a.__value=r[17],a.value=a.__value},m(h,d){U(h,a,d),e(a,n)},p:Ut,d(h){h&&l(a)}}}function Ft(r){let a,f;return a=new sa({props:{libraryItem:r[14],addQueryParamFun:r[8]}}),{c(){Ze(a.$$.fragment)},l(n){qe(a.$$.fragment,n)},m(n,h){Ke(a,n,h),f=!0},p(n,h){const d={};h&7&&(d.libraryItem=n[14]),a.$set(d)},i(n){f||(Ie(a.$$.fragment,n),f=!0)},o(n){Ve(a.$$.fragment,n),f=!1},d(n){Ye(a,n)}}}function na(r){let a,f,n,h,d,b,I,C,P,N,G,z,L,H,A,Z,p,T,M,o,k,O,X,q,K,ge,fe,le,ce,se,pe,ne,x,me,Q,J,V,m,v,W,S,ee,Pe,ke,he,be,B,Y,Ae,Ee,ye,te,Ge,Se,We,de,He,Xe,ze=Math.ceil(r[0].length/r[1])+"",Me,Je,ae,xe,Be,et,re,tt,Oe,je,Te,Ce,ve,$e,at,rt,Le,ct=Zt.length+"",lt,j,st,ht,Ne=Ue,R=[];for(let t=0;t<Ne.length;t+=1)R[t]=Rt(Qt(r,Ne,t));let we=r[0].slice((r[2]-1)*r[1],(r[2]-1)*r[1]+r[1]),$=[];for(let t=0;t<we.length;t+=1)$[t]=Ft(jt(r,we,t));const qt=t=>Ve($[t],1,1,()=>{$[t]=null});return{c(){a=i("div"),f=i("input"),n=w(),h=i("a"),d=E("Cerca"),I=w(),C=i("div"),P=i("select"),N=i("option"),G=E("Scegli categoria");for(let t=0;t<R.length;t+=1)R[t].c();z=w(),L=i("a"),H=E("Seleziona"),Z=w(),p=i("div"),T=i("table"),M=i("thead"),o=i("tr"),k=i("th"),O=E("Titolo"),X=w(),q=i("th"),K=E("Descrizione"),ge=w(),fe=i("th"),le=E("Categorie"),ce=w(),se=i("th"),pe=E("Autore"),ne=w(),x=i("th"),me=E("Lingua"),Q=w(),J=i("th"),V=E("Versione"),m=w(),v=i("th"),W=E("Data creazione"),S=w(),ee=i("th"),Pe=E("Data pubblicazione"),ke=w(),he=i("tbody");for(let t=0;t<$.length;t+=1)$[t].c();be=w(),B=i("div"),Y=i("a"),Ae=E("\xAB"),ye=w(),te=i("a"),Ge=E("\u2039"),We=w(),de=i("a"),He=E(r[2]),Xe=E("/"),Me=E(ze),Je=w(),ae=i("a"),xe=E("\u203A"),et=w(),re=i("a"),tt=E("\xBB"),je=w(),Te=i("div"),Ce=i("div"),ve=i("div"),$e=i("div"),at=E("Numero totale di documenti:"),rt=w(),Le=i("div"),lt=E(ct),this.h()},l(t){a=u(t,"DIV",{class:!0});var _=c(a);f=u(_,"INPUT",{type:!0,placeholder:!0,class:!0}),n=D(_),h=u(_,"A",{class:!0,href:!0,target:!0});var g=c(h);d=y(g,"Cerca"),g.forEach(l),_.forEach(l),I=D(t),C=u(t,"DIV",{class:!0});var oe=c(C);P=u(oe,"SELECT",{class:!0});var nt=c(P);N=u(nt,"OPTION",{});var dt=c(N);G=y(dt,"Scegli categoria"),dt.forEach(l);for(let De=0;De<R.length;De+=1)R[De].l(nt);nt.forEach(l),z=D(oe),L=u(oe,"A",{class:!0,href:!0,target:!0});var _t=c(L);H=y(_t,"Seleziona"),_t.forEach(l),oe.forEach(l),Z=D(t),p=u(t,"DIV",{class:!0});var gt=c(p);T=u(gt,"TABLE",{class:!0});var Qe=c(T);M=u(Qe,"THEAD",{});var mt=c(M);o=u(mt,"TR",{class:!0});var F=c(o);k=u(F,"TH",{});var vt=c(k);O=y(vt,"Titolo"),vt.forEach(l),X=D(F),q=u(F,"TH",{});var pt=c(q);K=y(pt,"Descrizione"),pt.forEach(l),ge=D(F),fe=u(F,"TH",{});var bt=c(fe);le=y(bt,"Categorie"),bt.forEach(l),ce=D(F),se=u(F,"TH",{});var Et=c(se);pe=y(Et,"Autore"),Et.forEach(l),ne=D(F),x=u(F,"TH",{});var yt=c(x);me=y(yt,"Lingua"),yt.forEach(l),Q=D(F),J=u(F,"TH",{});var Tt=c(J);V=y(Tt,"Versione"),Tt.forEach(l),m=D(F),v=u(F,"TH",{});var wt=c(v);W=y(wt,"Data creazione"),wt.forEach(l),S=D(F),ee=u(F,"TH",{});var Dt=c(ee);Pe=y(Dt,"Data pubblicazione"),Dt.forEach(l),F.forEach(l),mt.forEach(l),ke=D(Qe),he=u(Qe,"TBODY",{});var It=c(he);for(let De=0;De<$.length;De+=1)$[De].l(It);It.forEach(l),Qe.forEach(l),gt.forEach(l),be=D(t),B=u(t,"DIV",{class:!0});var ie=c(B);Y=u(ie,"A",{class:!0,href:!0,target:!0});var Pt=c(Y);Ae=y(Pt,"\xAB"),Pt.forEach(l),ye=D(ie),te=u(ie,"A",{class:!0,href:!0,target:!0});var kt=c(te);Ge=y(kt,"\u2039"),kt.forEach(l),We=D(ie),de=u(ie,"A",{class:!0,href:!0});var Re=c(de);He=y(Re,r[2]),Xe=y(Re,"/"),Me=y(Re,ze),Re.forEach(l),Je=D(ie),ae=u(ie,"A",{class:!0,href:!0,target:!0});var At=c(ae);xe=y(At,"\u203A"),At.forEach(l),et=D(ie),re=u(ie,"A",{class:!0,href:!0,target:!0});var Ct=c(re);tt=y(Ct,"\xBB"),Ct.forEach(l),ie.forEach(l),je=D(t),Te=u(t,"DIV",{class:!0});var $t=c(Te);Ce=u($t,"DIV",{class:!0});var Lt=c(Ce);ve=u(Lt,"DIV",{class:!0});var Fe=c(ve);$e=u(Fe,"DIV",{class:!0});var Nt=c($e);at=y(Nt,"Numero totale di documenti:"),Nt.forEach(l),rt=D(Fe),Le=u(Fe,"DIV",{class:!0});var Vt=c(Le);lt=y(Vt,ct),Vt.forEach(l),Fe.forEach(l),Lt.forEach(l),$t.forEach(l),this.h()},h(){s(f,"type","text"),s(f,"placeholder","Search"),s(f,"class","input input-bordered w-full max-w-xs mx-1.5"),s(h,"class","btn"),s(h,"href",b=r[5]("search",r[3],!0)),s(h,"target","_self"),s(a,"class","my-2.5 flex justify-end"),N.disabled=!0,N.selected=!0,N.__value="Scegli categoria",N.value=N.__value,s(P,"class","select select-bordered w-full max-w-xs mx-1.5"),r[4]===void 0&&Kt(()=>r[7].call(P)),s(L,"class","btn"),s(L,"href",A=r[5]("category",r[4],!0)),s(L,"target","_self"),ue(L,"btn-disabled",!Ue.includes(r[4])),s(C,"class","my-2.5 flex justify-end"),s(o,"class","text-center"),s(T,"class","table table-compact w-full"),s(p,"class","overflow-x-auto my-2.5"),s(Y,"class","btn"),s(Y,"href",Ee=r[5]("current-page",r[2]-r[2]+1,!1)),s(Y,"target","_self"),ue(Y,"btn-disabled",r[2]<=1),s(te,"class","btn"),s(te,"href",Se=r[5]("current-page",r[2]-1,!1)),s(te,"target","_self"),ue(te,"btn-disabled",r[2]<=1),s(de,"class","btn btn-disabled"),s(de,"href",null),s(ae,"class","btn"),s(ae,"href",Be=r[5]("current-page",r[2]+1,!1)),s(ae,"target","_self"),ue(ae,"btn-disabled",r[2]>=Math.ceil(r[0].length/r[1])),s(re,"class","btn"),s(re,"href",Oe=r[5]("current-page",Math.ceil(r[0].length/r[1]),!1)),s(re,"target","_self"),ue(re,"btn-disabled",r[2]>=Math.ceil(r[0].length/r[1])),s(B,"class","btn-group my-2.5 flex justify-end"),s($e,"class","stat-title"),s(Le,"class","stat-value"),s(ve,"class","stat"),s(Ce,"class","stats shadow"),s(Te,"class","text-center mt-4 mb-8")},m(t,_){U(t,a,_),e(a,f),zt(f,r[3]),e(a,n),e(a,h),e(h,d),U(t,I,_),U(t,C,_),e(C,P),e(P,N),e(N,G);for(let g=0;g<R.length;g+=1)R[g].m(P,null);St(P,r[4]),e(C,z),e(C,L),e(L,H),U(t,Z,_),U(t,p,_),e(p,T),e(T,M),e(M,o),e(o,k),e(k,O),e(o,X),e(o,q),e(q,K),e(o,ge),e(o,fe),e(fe,le),e(o,ce),e(o,se),e(se,pe),e(o,ne),e(o,x),e(x,me),e(o,Q),e(o,J),e(J,V),e(o,m),e(o,v),e(v,W),e(o,S),e(o,ee),e(ee,Pe),e(T,ke),e(T,he);for(let g=0;g<$.length;g+=1)$[g].m(he,null);U(t,be,_),U(t,B,_),e(B,Y),e(Y,Ae),e(B,ye),e(B,te),e(te,Ge),e(B,We),e(B,de),e(de,He),e(de,Xe),e(de,Me),e(B,Je),e(B,ae),e(ae,xe),e(B,et),e(B,re),e(re,tt),U(t,je,_),U(t,Te,_),e(Te,Ce),e(Ce,ve),e(ve,$e),e($e,at),e(ve,rt),e(ve,Le),e(Le,lt),j=!0,st||(ht=[Ht(f,"input",r[6]),Ht(P,"change",r[7])],st=!0)},p(t,[_]){if(_&8&&f.value!==t[3]&&zt(f,t[3]),(!j||_&8&&b!==(b=t[5]("search",t[3],!0)))&&s(h,"href",b),_&0){Ne=Ue;let g;for(g=0;g<Ne.length;g+=1){const oe=Qt(t,Ne,g);R[g]?R[g].p(oe,_):(R[g]=Rt(oe),R[g].c(),R[g].m(P,null))}for(;g<R.length;g+=1)R[g].d(1);R.length=Ne.length}if(_&16&&St(P,t[4]),(!j||_&16&&A!==(A=t[5]("category",t[4],!0)))&&s(L,"href",A),(!j||_&16)&&ue(L,"btn-disabled",!Ue.includes(t[4])),_&39){we=t[0].slice((t[2]-1)*t[1],(t[2]-1)*t[1]+t[1]);let g;for(g=0;g<we.length;g+=1){const oe=jt(t,we,g);$[g]?($[g].p(oe,_),Ie($[g],1)):($[g]=Ft(oe),$[g].c(),Ie($[g],1),$[g].m(he,null))}for(Yt(),g=we.length;g<$.length;g+=1)qt(g);Gt()}(!j||_&4&&Ee!==(Ee=t[5]("current-page",t[2]-t[2]+1,!1)))&&s(Y,"href",Ee),(!j||_&4)&&ue(Y,"btn-disabled",t[2]<=1),(!j||_&4&&Se!==(Se=t[5]("current-page",t[2]-1,!1)))&&s(te,"href",Se),(!j||_&4)&&ue(te,"btn-disabled",t[2]<=1),(!j||_&4)&&_e(He,t[2]),(!j||_&3)&&ze!==(ze=Math.ceil(t[0].length/t[1])+"")&&_e(Me,ze),(!j||_&4&&Be!==(Be=t[5]("current-page",t[2]+1,!1)))&&s(ae,"href",Be),(!j||_&7)&&ue(ae,"btn-disabled",t[2]>=Math.ceil(t[0].length/t[1])),(!j||_&3&&Oe!==(Oe=t[5]("current-page",Math.ceil(t[0].length/t[1]),!1)))&&s(re,"href",Oe),(!j||_&7)&&ue(re,"btn-disabled",t[2]>=Math.ceil(t[0].length/t[1]))},i(t){if(!j){for(let _=0;_<we.length;_+=1)Ie($[_]);j=!0}},o(t){$=$.filter(Boolean);for(let _=0;_<$.length;_+=1)Ve($[_]);j=!1},d(t){t&&l(a),t&&l(I),t&&l(C),ot(R,t),t&&l(Z),t&&l(p),ot($,t),t&&l(be),t&&l(B),t&&l(je),t&&l(Te),st=!1,Wt(ht)}}}function oa(r,a,f){let n;Xt(r,aa,p=>f(10,n=p));let h=Zt.sort((p,T)=>Date.parse(T.publication_date)-Date.parse(p.publication_date)),d,b,I,C,P;Jt(()=>{d=n.url,f(1,b=Number(n.url.searchParams.get("page-items"))||10),f(2,I=Number(n.url.searchParams.get("current-page"))||1),G(n.url.searchParams.get("author")||""),N(n.url.searchParams.get("category")||""),z(n.url.searchParams.get("search")||"")});function N(p){f(0,h=p?h.filter(T=>T.categories.includes(p)):h)}function G(p){f(0,h=p?h.filter(T=>T.author===p):h)}function z(p){f(0,h=p?h.filter(T=>T.title.toLowerCase().includes(p.toLowerCase())||T.description.toLowerCase().includes(p.toLowerCase())):h)}function L(p,T,M){if(d==null)return d;let o=new URL(d);return M&&o.searchParams.forEach((k,O)=>{o.searchParams.delete(O)}),o.searchParams.set(p,T),String(o)}function H(){C=this.value,f(3,C)}function A(){P=xt(this),f(4,P)}return[h,b,I,C,P,L,H,A,(p,T,M)=>L(p,T,M)]}class ia extends it{constructor(a){super(),ut(this,a,oa,na,ft,{})}}function ua(r){let a,f,n,h,d,b,I,C,P,N,G,z,L,H,A,Z,p,T,M;return a=new ta({props:{pageTitle:"Library"}}),n=new ia({}),{c(){Ze(a.$$.fragment),f=w(),Ze(n.$$.fragment),h=w(),d=i("div"),b=i("div"),I=i("p"),C=E('ATTENZIONE: la categoria "Cracking" contiene esclusivamente documenti riguardanti protezioni ormai obsolete ed estremamante datate.'),P=i("br"),N=E(`
            Non \xE8 presente alcuna informazione su protezioni commerciali attualmente adoperate.`),G=w(),z=i("div"),L=w(),H=i("div"),A=i("p"),Z=E('ATTENTION: the "Cracking" category contains only documents concerning protection schemes that are now obsolete and extremely dated.'),p=i("br"),T=E(`
            There isn't any information on commercial protections currently used.`),this.h()},l(o){qe(a.$$.fragment,o),f=D(o),qe(n.$$.fragment,o),h=D(o),d=u(o,"DIV",{class:!0});var k=c(d);b=u(k,"DIV",{class:!0});var O=c(b);I=u(O,"P",{});var X=c(I);C=y(X,'ATTENZIONE: la categoria "Cracking" contiene esclusivamente documenti riguardanti protezioni ormai obsolete ed estremamante datate.'),P=u(X,"BR",{}),N=y(X,`
            Non \xE8 presente alcuna informazione su protezioni commerciali attualmente adoperate.`),X.forEach(l),O.forEach(l),G=D(k),z=u(k,"DIV",{class:!0}),c(z).forEach(l),L=D(k),H=u(k,"DIV",{class:!0});var q=c(H);A=u(q,"P",{});var K=c(A);Z=y(K,'ATTENTION: the "Cracking" category contains only documents concerning protection schemes that are now obsolete and extremely dated.'),p=u(K,"BR",{}),T=y(K,`
            There isn't any information on commercial protections currently used.`),K.forEach(l),q.forEach(l),k.forEach(l),this.h()},h(){s(b,"class","grid w-1/2 overflow-y-auto text-sm my-2.5 text-red-600"),s(z,"class","divider divider-horizontal"),s(H,"class","grid w-1/2 overflow-y-auto text-sm my-2.5 text-red-600"),s(d,"class","flex w-full mt-4 mb-6")},m(o,k){Ke(a,o,k),U(o,f,k),Ke(n,o,k),U(o,h,k),U(o,d,k),e(d,b),e(b,I),e(I,C),e(I,P),e(I,N),e(d,G),e(d,z),e(d,L),e(d,H),e(H,A),e(A,Z),e(A,p),e(A,T),M=!0},p:Ut,i(o){M||(Ie(a.$$.fragment,o),Ie(n.$$.fragment,o),M=!0)},o(o){Ve(a.$$.fragment,o),Ve(n.$$.fragment,o),M=!1},d(o){Ye(a,o),o&&l(f),Ye(n,o),o&&l(h),o&&l(d)}}}class _a extends it{constructor(a){super(),ut(this,a,null,ua,ft,{})}}export{_a as default};
