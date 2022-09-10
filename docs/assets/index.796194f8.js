(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function gr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ku="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ru=gr(ku);function Xl(t){return!!t||t===""}function yr(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=we(s)?Ou(s):yr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(we(t))return t;if(he(t))return t}}const Au=/;(?![^(]*\))/g,Pu=/:(.+)/;function Ou(t){const e={};return t.split(Au).forEach(n=>{if(n){const s=n.split(Pu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function vr(t){let e="";if(we(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const s=vr(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bt=t=>we(t)?t:t==null?"":L(t)||he(t)&&(t.toString===ea||!B(t.toString))?JSON.stringify(t,Jl,2):String(t),Jl=(t,e)=>e&&e.__v_isRef?Jl(t,e.value):pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Zl(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!L(e)&&!ta(e)?String(e):e,te={},dn=[],Ze=()=>{},Du=()=>!1,Mu=/^on[^a-z]/,Xs=t=>Mu.test(t),Cr=t=>t.startsWith("onUpdate:"),xe=Object.assign,Er=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Lu=Object.prototype.hasOwnProperty,V=(t,e)=>Lu.call(t,e),L=Array.isArray,pn=t=>Js(t)==="[object Map]",Zl=t=>Js(t)==="[object Set]",B=t=>typeof t=="function",we=t=>typeof t=="string",br=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",wr=t=>he(t)&&B(t.then)&&B(t.catch),ea=Object.prototype.toString,Js=t=>ea.call(t),Fu=t=>Js(t).slice(8,-1),ta=t=>Js(t)==="[object Object]",Ir=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ts=gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ju=/-(\w)/g,En=Zs(t=>t.replace(ju,(e,n)=>n?n.toUpperCase():"")),Bu=/\B([A-Z])/g,tn=Zs(t=>t.replace(Bu,"-$1").toLowerCase()),na=Zs(t=>t.charAt(0).toUpperCase()+t.slice(1)),yi=Zs(t=>t?`on${na(t)}`:""),ks=(t,e)=>!Object.is(t,e),Ss=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Rs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let So;const Hu=()=>So||(So=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let st;class Wu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&st&&(this.parent=st,this.index=(st.scopes||(st.scopes=[])).push(this)-1)}run(e){if(this.active){const n=st;try{return st=this,e()}finally{st=n}}}on(){st=this}off(){st=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Uu(t,e=st){e&&e.active&&e.effects.push(t)}const Tr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},sa=t=>(t.w&kt)>0,ia=t=>(t.n&kt)>0,$u=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=kt},Vu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];sa(i)&&!ia(i)?i.delete(t):e[n++]=i,i.w&=~kt,i.n&=~kt}e.length=n}},Fi=new WeakMap;let Hn=0,kt=1;const ji=30;let Ye;const zt=Symbol(""),Bi=Symbol("");class Sr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Uu(this,s)}run(){if(!this.active)return this.fn();let e=Ye,n=wt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ye,Ye=this,wt=!0,kt=1<<++Hn,Hn<=ji?$u(this):No(this),this.fn()}finally{Hn<=ji&&Vu(this),kt=1<<--Hn,Ye=this.parent,wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ye===this?this.deferStop=!0:this.active&&(No(this),this.onStop&&this.onStop(),this.active=!1)}}function No(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let wt=!0;const ra=[];function Nn(){ra.push(wt),wt=!1}function xn(){const t=ra.pop();wt=t===void 0?!0:t}function We(t,e,n){if(wt&&Ye){let s=Fi.get(t);s||Fi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Tr()),oa(i)}}function oa(t,e){let n=!1;Hn<=ji?ia(t)||(t.n|=kt,n=!sa(t)):n=!t.has(Ye),n&&(t.add(Ye),Ye.deps.push(t))}function ft(t,e,n,s,i,r){const o=Fi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&L(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":L(t)?Ir(n)&&l.push(o.get("length")):(l.push(o.get(zt)),pn(t)&&l.push(o.get(Bi)));break;case"delete":L(t)||(l.push(o.get(zt)),pn(t)&&l.push(o.get(Bi)));break;case"set":pn(t)&&l.push(o.get(zt));break}if(l.length===1)l[0]&&Hi(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Hi(Tr(a))}}function Hi(t,e){const n=L(t)?t:[...t];for(const s of n)s.computed&&xo(s);for(const s of n)s.computed||xo(s)}function xo(t,e){(t!==Ye||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ku=gr("__proto__,__v_isRef,__isVue"),la=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(br)),qu=Nr(),zu=Nr(!1,!0),Yu=Nr(!0),ko=Gu();function Gu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=X(this);for(let r=0,o=this.length;r<o;r++)We(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(X)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Nn();const s=X(this)[e].apply(this,n);return xn(),s}}),t}function Nr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?hh:fa:e?ha:ua).get(s))return s;const o=L(s);if(!t&&o&&V(ko,i))return Reflect.get(ko,i,r);const l=Reflect.get(s,i,r);return(br(i)?la.has(i):Ku(i))||(t||We(s,"get",i),e)?l:Oe(l)?o&&Ir(i)?l:l.value:he(l)?t?da(l):dt(l):l}}const Qu=aa(),Xu=aa(!0);function aa(t=!1){return function(n,s,i,r){let o=n[s];if(zn(o)&&Oe(o)&&!Oe(i))return!1;if(!t&&(!Wi(i)&&!zn(i)&&(o=X(o),i=X(i)),!L(n)&&Oe(o)&&!Oe(i)))return o.value=i,!0;const l=L(n)&&Ir(s)?Number(s)<n.length:V(n,s),a=Reflect.set(n,s,i,r);return n===X(r)&&(l?ks(i,o)&&ft(n,"set",s,i):ft(n,"add",s,i)),a}}function Ju(t,e){const n=V(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ft(t,"delete",e,void 0),s}function Zu(t,e){const n=Reflect.has(t,e);return(!br(e)||!la.has(e))&&We(t,"has",e),n}function eh(t){return We(t,"iterate",L(t)?"length":zt),Reflect.ownKeys(t)}const ca={get:qu,set:Qu,deleteProperty:Ju,has:Zu,ownKeys:eh},th={get:Yu,set(t,e){return!0},deleteProperty(t,e){return!0}},nh=xe({},ca,{get:zu,set:Xu}),xr=t=>t,ei=t=>Reflect.getPrototypeOf(t);function ys(t,e,n=!1,s=!1){t=t.__v_raw;const i=X(t),r=X(e);n||(e!==r&&We(i,"get",e),We(i,"get",r));const{has:o}=ei(i),l=s?xr:n?Pr:Ar;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function vs(t,e=!1){const n=this.__v_raw,s=X(n),i=X(t);return e||(t!==i&&We(s,"has",t),We(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Cs(t,e=!1){return t=t.__v_raw,!e&&We(X(t),"iterate",zt),Reflect.get(t,"size",t)}function Ro(t){t=X(t);const e=X(this);return ei(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function Ao(t,e){e=X(e);const n=X(this),{has:s,get:i}=ei(n);let r=s.call(n,t);r||(t=X(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ks(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function Po(t){const e=X(this),{has:n,get:s}=ei(e);let i=n.call(e,t);i||(t=X(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ft(e,"delete",t,void 0),r}function Oo(){const t=X(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function Es(t,e){return function(s,i){const r=this,o=r.__v_raw,l=X(o),a=e?xr:t?Pr:Ar;return!t&&We(l,"iterate",zt),o.forEach((c,h)=>s.call(i,a(c),a(h),r))}}function bs(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=pn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),h=n?xr:e?Pr:Ar;return!e&&We(r,"iterate",a?Bi:zt),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:l?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function yt(t){return function(...e){return t==="delete"?!1:this}}function sh(){const t={get(r){return ys(this,r)},get size(){return Cs(this)},has:vs,add:Ro,set:Ao,delete:Po,clear:Oo,forEach:Es(!1,!1)},e={get(r){return ys(this,r,!1,!0)},get size(){return Cs(this)},has:vs,add:Ro,set:Ao,delete:Po,clear:Oo,forEach:Es(!1,!0)},n={get(r){return ys(this,r,!0)},get size(){return Cs(this,!0)},has(r){return vs.call(this,r,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Es(!0,!1)},s={get(r){return ys(this,r,!0,!0)},get size(){return Cs(this,!0)},has(r){return vs.call(this,r,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Es(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=bs(r,!1,!1),n[r]=bs(r,!0,!1),e[r]=bs(r,!1,!0),s[r]=bs(r,!0,!0)}),[t,n,e,s]}const[ih,rh,oh,lh]=sh();function kr(t,e){const n=e?t?lh:oh:t?rh:ih;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(V(n,i)&&i in s?n:s,i,r)}const ah={get:kr(!1,!1)},ch={get:kr(!1,!0)},uh={get:kr(!0,!1)},ua=new WeakMap,ha=new WeakMap,fa=new WeakMap,hh=new WeakMap;function fh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dh(t){return t.__v_skip||!Object.isExtensible(t)?0:fh(Fu(t))}function dt(t){return zn(t)?t:Rr(t,!1,ca,ah,ua)}function ph(t){return Rr(t,!1,nh,ch,ha)}function da(t){return Rr(t,!0,th,uh,fa)}function Rr(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=dh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function _n(t){return zn(t)?_n(t.__v_raw):!!(t&&t.__v_isReactive)}function zn(t){return!!(t&&t.__v_isReadonly)}function Wi(t){return!!(t&&t.__v_isShallow)}function pa(t){return _n(t)||zn(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function _a(t){return Rs(t,"__v_skip",!0),t}const Ar=t=>he(t)?dt(t):t,Pr=t=>he(t)?da(t):t;function _h(t){wt&&Ye&&(t=X(t),oa(t.dep||(t.dep=Tr())))}function mh(t,e){t=X(t),t.dep&&Hi(t.dep)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function pe(t){return Oe(t)?t.value:t}const gh={get:(t,e,n)=>pe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ma(t){return _n(t)?t:new Proxy(t,gh)}var ga;class yh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ga]=!1,this._dirty=!0,this.effect=new Sr(e,()=>{this._dirty||(this._dirty=!0,mh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=X(this);return _h(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ga="__v_isReadonly";function vh(t,e,n=!1){let s,i;const r=B(t);return r?(s=t,i=Ze):(s=t.get,i=t.set),new yh(s,i,r||!i,n)}function It(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){as(r,e,n)}return i}function Ve(t,e,n,s){if(B(t)){const r=It(t,e,n,s);return r&&wr(r)&&r.catch(o=>{as(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ve(t[r],e,n,s));return i}function as(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){It(a,null,10,[t,o,l]);return}}Ch(t,n,i,s)}function Ch(t,e,n,s=!0){console.error(t)}let As=!1,Ui=!1;const Ae=[];let it=0;const mn=[];let ct=null,$t=0;const ya=Promise.resolve();let Or=null;function Eh(t){const e=Or||ya;return t?e.then(this?t.bind(this):t):e}function bh(t){let e=it+1,n=Ae.length;for(;e<n;){const s=e+n>>>1;Yn(Ae[s])<t?e=s+1:n=s}return e}function Dr(t){(!Ae.length||!Ae.includes(t,As&&t.allowRecurse?it+1:it))&&(t.id==null?Ae.push(t):Ae.splice(bh(t.id),0,t),va())}function va(){!As&&!Ui&&(Ui=!0,Or=ya.then(ba))}function wh(t){const e=Ae.indexOf(t);e>it&&Ae.splice(e,1)}function Ca(t){L(t)?mn.push(...t):(!ct||!ct.includes(t,t.allowRecurse?$t+1:$t))&&mn.push(t),va()}function Do(t,e=it){for(;e<Ae.length;e++){const n=Ae[e];n&&n.pre&&(Ae.splice(e,1),e--,n())}}function Ea(t){if(mn.length){const e=[...new Set(mn)];if(mn.length=0,ct){ct.push(...e);return}for(ct=e,ct.sort((n,s)=>Yn(n)-Yn(s)),$t=0;$t<ct.length;$t++)ct[$t]();ct=null,$t=0}}const Yn=t=>t.id==null?1/0:t.id,Ih=(t,e)=>{const n=Yn(t)-Yn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ba(t){Ui=!1,As=!0,Ae.sort(Ih);const e=Ze;try{for(it=0;it<Ae.length;it++){const n=Ae[it];n&&n.active!==!1&&It(n,null,14)}}finally{it=0,Ae.length=0,Ea(),As=!1,Or=null,(Ae.length||mn.length)&&ba()}}function Th(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||te;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:f}=s[h]||te;f&&(i=n.map(_=>_.trim())),u&&(i=n.map(qn))}let l,a=s[l=yi(e)]||s[l=yi(En(e))];!a&&r&&(a=s[l=yi(tn(e))]),a&&Ve(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ve(c,t,6,i)}}function wa(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!B(t)){const a=c=>{const h=wa(c,e,!0);h&&(l=!0,xe(o,h))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(he(t)&&s.set(t,null),null):(L(r)?r.forEach(a=>o[a]=null):xe(o,r),he(t)&&s.set(t,o),o)}function ti(t,e){return!t||!Xs(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,tn(e))||V(t,e))}let Qe=null,Ia=null;function Ps(t){const e=Qe;return Qe=t,Ia=t&&t.type.__scopeId||null,e}function Mr(t,e=Qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ko(-1);const r=Ps(e),o=t(...i);return Ps(r),s._d&&Ko(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function vi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:h,renderCache:u,data:f,setupState:_,ctx:y,inheritAttrs:S}=t;let N,M;const k=Ps(t);try{if(n.shapeFlag&4){const U=i||s;N=ze(h.call(U,U,u,r,_,f,y)),M=a}else{const U=e;N=ze(U.length>1?U(r,{attrs:a,slots:l,emit:c}):U(r,null)),M=e.props?a:Nh(a)}}catch(U){Wn.length=0,as(U,t,1),N=ye(Be)}let A=N;if(M&&S!==!1){const U=Object.keys(M),{shapeFlag:Y}=A;U.length&&Y&7&&(o&&U.some(Cr)&&(M=xh(M,o)),A=Rt(A,M))}return n.dirs&&(A=Rt(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),N=A,Ps(k),N}function Sh(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Ms(s)){if(s.type!==Be||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Nh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xs(n))&&((e||(e={}))[n]=t[n]);return e},xh=(t,e)=>{const n={};for(const s in t)(!Cr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function kh(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Mo(s,o,c):!!o;if(a&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==s[f]&&!ti(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Mo(s,o,c):!0:!!o;return!1}function Mo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ti(n,r))return!0}return!1}function Lr({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Rh=t=>t.__isSuspense,Ah={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,l,a,c){t==null?Oh(e,n,s,i,r,o,l,a,c):Dh(t,e,n,s,i,o,l,a,c)},hydrate:Mh,create:Fr,normalize:Lh},Ph=Ah;function Gn(t,e){const n=t.props&&t.props[e];B(n)&&n()}function Oh(t,e,n,s,i,r,o,l,a){const{p:c,o:{createElement:h}}=a,u=h("div"),f=t.suspense=Fr(t,i,s,e,u,n,r,o,l,a);c(null,f.pendingBranch=t.ssContent,u,null,s,f,r,o),f.deps>0?(Gn(t,"onPending"),Gn(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),gn(f,t.ssFallback)):f.resolve()}function Dh(t,e,n,s,i,r,o,l,{p:a,um:c,o:{createElement:h}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const f=e.ssContent,_=e.ssFallback,{activeBranch:y,pendingBranch:S,isInFallback:N,isHydrating:M}=u;if(S)u.pendingBranch=f,rt(f,S)?(a(S,f,u.hiddenContainer,null,i,u,r,o,l),u.deps<=0?u.resolve():N&&(a(y,_,n,s,i,null,r,o,l),gn(u,_))):(u.pendingId++,M?(u.isHydrating=!1,u.activeBranch=S):c(S,i,u),u.deps=0,u.effects.length=0,u.hiddenContainer=h("div"),N?(a(null,f,u.hiddenContainer,null,i,u,r,o,l),u.deps<=0?u.resolve():(a(y,_,n,s,i,null,r,o,l),gn(u,_))):y&&rt(f,y)?(a(y,f,n,s,i,u,r,o,l),u.resolve(!0)):(a(null,f,u.hiddenContainer,null,i,u,r,o,l),u.deps<=0&&u.resolve()));else if(y&&rt(f,y))a(y,f,n,s,i,u,r,o,l),gn(u,f);else if(Gn(e,"onPending"),u.pendingBranch=f,u.pendingId++,a(null,f,u.hiddenContainer,null,i,u,r,o,l),u.deps<=0)u.resolve();else{const{timeout:k,pendingId:A}=u;k>0?setTimeout(()=>{u.pendingId===A&&u.fallback(_)},k):k===0&&u.fallback(_)}}function Fr(t,e,n,s,i,r,o,l,a,c,h=!1){const{p:u,m:f,um:_,n:y,o:{parentNode:S,remove:N}}=c,M=qn(t.props&&t.props.timeout),k={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:h,isUnmounted:!1,effects:[],resolve(A=!1){const{vnode:U,activeBranch:Y,pendingBranch:fe,pendingId:Ie,effects:F,parentComponent:K,container:Q}=k;if(k.isHydrating)k.isHydrating=!1;else if(!A){const re=Y&&fe.transition&&fe.transition.mode==="out-in";re&&(Y.transition.afterLeave=()=>{Ie===k.pendingId&&f(fe,Q,ke,0)});let{anchor:ke}=k;Y&&(ke=y(Y),_(Y,K,k,!0)),re||f(fe,Q,ke,0)}gn(k,fe),k.pendingBranch=null,k.isInFallback=!1;let ie=k.parent,R=!1;for(;ie;){if(ie.pendingBranch){ie.effects.push(...F),R=!0;break}ie=ie.parent}R||Ca(F),k.effects=[],Gn(U,"onResolve")},fallback(A){if(!k.pendingBranch)return;const{vnode:U,activeBranch:Y,parentComponent:fe,container:Ie,isSVG:F}=k;Gn(U,"onFallback");const K=y(Y),Q=()=>{!k.isInFallback||(u(null,A,Ie,K,fe,null,F,l,a),gn(k,A))},ie=A.transition&&A.transition.mode==="out-in";ie&&(Y.transition.afterLeave=Q),k.isInFallback=!0,_(Y,fe,null,!0),ie||Q()},move(A,U,Y){k.activeBranch&&f(k.activeBranch,A,U,Y),k.container=A},next(){return k.activeBranch&&y(k.activeBranch)},registerDep(A,U){const Y=!!k.pendingBranch;Y&&k.deps++;const fe=A.vnode.el;A.asyncDep.catch(Ie=>{as(Ie,A,0)}).then(Ie=>{if(A.isUnmounted||k.isUnmounted||k.pendingId!==A.suspenseId)return;A.asyncResolved=!0;const{vnode:F}=A;Qi(A,Ie,!1),fe&&(F.el=fe);const K=!fe&&A.subTree.el;U(A,F,S(fe||A.subTree.el),fe?null:y(A.subTree),k,o,a),K&&N(K),Lr(A,F.el),Y&&--k.deps===0&&k.resolve()})},unmount(A,U){k.isUnmounted=!0,k.activeBranch&&_(k.activeBranch,n,A,U),k.pendingBranch&&_(k.pendingBranch,n,A,U)}};return k}function Mh(t,e,n,s,i,r,o,l,a){const c=e.suspense=Fr(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,l,!0),h=a(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),h}function Lh(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Lo(s?n.default:n),t.ssFallback=s?Lo(n.fallback):ye(Be)}function Lo(t){let e;if(B(t)){const n=bn&&t._c;n&&(t._d=!1,G()),t=t(),n&&(t._d=!0,e=$e,$a())}return L(t)&&(t=Sh(t)),t=ze(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Fh(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Ca(t)}function gn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,Lr(s,i))}function jh(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function Ci(t,e,n=!1){const s=Ne||Qe;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&B(e)?e.call(s.proxy):e}}const Fo={};function Ei(t,e,n){return Ta(t,e,n)}function Ta(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=te){const l=Ne;let a,c=!1,h=!1;if(Oe(t)?(a=()=>t.value,c=Wi(t)):_n(t)?(a=()=>t,s=!0):L(t)?(h=!0,c=t.some(M=>_n(M)||Wi(M)),a=()=>t.map(M=>{if(Oe(M))return M.value;if(_n(M))return Kt(M);if(B(M))return It(M,l,2)})):B(t)?e?a=()=>It(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return u&&u(),Ve(t,l,3,[f])}:a=Ze,e&&s){const M=a;a=()=>Kt(M())}let u,f=M=>{u=N.onStop=()=>{It(M,l,4)}};if(Qn)return f=Ze,e?n&&Ve(e,l,3,[a(),h?[]:void 0,f]):a(),Ze;let _=h?[]:Fo;const y=()=>{if(!!N.active)if(e){const M=N.run();(s||c||(h?M.some((k,A)=>ks(k,_[A])):ks(M,_)))&&(u&&u(),Ve(e,l,3,[M,_===Fo?void 0:_,f]),_=M)}else N.run()};y.allowRecurse=!!e;let S;i==="sync"?S=y:i==="post"?S=()=>Me(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),S=()=>Dr(y));const N=new Sr(a,S);return e?n?y():_=N.run():i==="post"?Me(N.run.bind(N),l&&l.suspense):N.run(),()=>{N.stop(),l&&l.scope&&Er(l.scope.effects,N)}}function Bh(t,e,n){const s=this.proxy,i=we(t)?t.includes(".")?Sa(s,t):()=>s[t]:t.bind(s,s);let r;B(e)?r=e:(r=e.handler,n=e);const o=Ne;At(this);const l=Ta(i,r.bind(s),n);return o?At(o):Tt(),l}function Sa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Kt(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))Kt(t.value,e);else if(L(t))for(let n=0;n<t.length;n++)Kt(t[n],e);else if(Zl(t)||pn(t))t.forEach(n=>{Kt(n,e)});else if(ta(t))for(const n in t)Kt(t[n],e);return t}function Hh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Aa(()=>{t.isMounted=!0}),Pa(()=>{t.isUnmounting=!0}),t}const Ue=[Function,Array],Wh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},setup(t,{slots:e}){const n=qa(),s=Hh();let i;return()=>{const r=e.default&&ka(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const S of r)if(S.type!==Be){o=S;break}}const l=X(t),{mode:a}=l;if(s.isLeaving)return bi(o);const c=jo(o);if(!c)return bi(o);const h=$i(c,l,s,n);Vi(c,h);const u=n.subTree,f=u&&jo(u);let _=!1;const{getTransitionKey:y}=c.type;if(y){const S=y();i===void 0?i=S:S!==i&&(i=S,_=!0)}if(f&&f.type!==Be&&(!rt(c,f)||_)){const S=$i(f,l,s,n);if(Vi(f,S),a==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},bi(o);a==="in-out"&&c.type!==Be&&(S.delayLeave=(N,M,k)=>{const A=xa(s,f);A[String(f.key)]=f,N._leaveCb=()=>{M(),N._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=k})}return o}}},Na=Wh;function xa(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function $i(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:u,onLeave:f,onAfterLeave:_,onLeaveCancelled:y,onBeforeAppear:S,onAppear:N,onAfterAppear:M,onAppearCancelled:k}=e,A=String(t.key),U=xa(n,t),Y=(F,K)=>{F&&Ve(F,s,9,K)},fe=(F,K)=>{const Q=K[1];Y(F,K),L(F)?F.every(ie=>ie.length<=1)&&Q():F.length<=1&&Q()},Ie={mode:r,persisted:o,beforeEnter(F){let K=l;if(!n.isMounted)if(i)K=S||l;else return;F._leaveCb&&F._leaveCb(!0);const Q=U[A];Q&&rt(t,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),Y(K,[F])},enter(F){let K=a,Q=c,ie=h;if(!n.isMounted)if(i)K=N||a,Q=M||c,ie=k||h;else return;let R=!1;const re=F._enterCb=ke=>{R||(R=!0,ke?Y(ie,[F]):Y(Q,[F]),Ie.delayedLeave&&Ie.delayedLeave(),F._enterCb=void 0)};K?fe(K,[F,re]):re()},leave(F,K){const Q=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return K();Y(u,[F]);let ie=!1;const R=F._leaveCb=re=>{ie||(ie=!0,K(),re?Y(y,[F]):Y(_,[F]),F._leaveCb=void 0,U[Q]===t&&delete U[Q])};U[Q]=t,f?fe(f,[F,R]):R()},clone(F){return $i(F,e,n,s)}};return Ie}function bi(t){if(ni(t))return t=Rt(t),t.children=null,t}function jo(t){return ni(t)?t.children?t.children[0]:void 0:t}function Vi(t,e){t.shapeFlag&6&&t.component?Vi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ka(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ge?(o.patchFlag&128&&i++,s=s.concat(ka(o.children,e,l))):(e||o.type!==Be)&&s.push(l!=null?Rt(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const Ns=t=>!!t.type.__asyncLoader,ni=t=>t.type.__isKeepAlive;function Uh(t,e){Ra(t,"a",e)}function $h(t,e){Ra(t,"da",e)}function Ra(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(si(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ni(i.parent.vnode)&&Vh(s,e,n,i),i=i.parent}}function Vh(t,e,n,s){const i=si(e,t,s,!0);Oa(()=>{Er(s[e],i)},n)}function si(t,e,n=Ne,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Nn(),At(n);const l=Ve(e,n,t,o);return Tt(),xn(),l});return s?i.unshift(r):i.push(r),r}}const pt=t=>(e,n=Ne)=>(!Qn||t==="sp")&&si(t,e,n),Kh=pt("bm"),Aa=pt("m"),qh=pt("bu"),zh=pt("u"),Pa=pt("bum"),Oa=pt("um"),Yh=pt("sp"),Gh=pt("rtg"),Qh=pt("rtc");function Xh(t,e=Ne){si("ec",t,e)}function Jh(t,e){const n=Qe;if(n===null)return t;const s=ri(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=te]=e[r];B(o)&&(o={mounted:o,updated:o}),o.deep&&Kt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return t}function Lt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Nn(),Ve(a,n,8,[t.el,l,t,e]),xn())}}const Zh=Symbol();function cn(t,e,n,s){let i;const r=n&&n[s];if(L(t)||we(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Ki=t=>t?za(t)?ri(t)||t.proxy:Ki(t.parent):null,Os=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ki(t.parent),$root:t=>Ki(t.root),$emit:t=>t.emit,$options:t=>Ma(t),$forceUpdate:t=>t.f||(t.f=()=>Dr(t.update)),$nextTick:t=>t.n||(t.n=Eh.bind(t.proxy)),$watch:t=>Bh.bind(t)}),ef={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==te&&V(s,e))return o[e]=1,s[e];if(i!==te&&V(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&V(c,e))return o[e]=3,r[e];if(n!==te&&V(n,e))return o[e]=4,n[e];qi&&(o[e]=0)}}const h=Os[e];let u,f;if(h)return e==="$attrs"&&We(t,"get",e),h(t);if((u=l.__cssModules)&&(u=u[e]))return u;if(n!==te&&V(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,V(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==te&&V(i,e)?(i[e]=n,!0):s!==te&&V(s,e)?(s[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==te&&V(t,o)||e!==te&&V(e,o)||(l=r[0])&&V(l,o)||V(s,o)||V(Os,o)||V(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let qi=!0;function tf(t){const e=Ma(t),n=t.proxy,s=t.ctx;qi=!1,e.beforeCreate&&Bo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:_,updated:y,activated:S,deactivated:N,beforeDestroy:M,beforeUnmount:k,destroyed:A,unmounted:U,render:Y,renderTracked:fe,renderTriggered:Ie,errorCaptured:F,serverPrefetch:K,expose:Q,inheritAttrs:ie,components:R,directives:re,filters:ke}=e;if(c&&nf(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const de in o){const ae=o[de];B(ae)&&(s[de]=ae.bind(n))}if(i){const de=i.call(n,n);he(de)&&(t.data=dt(de))}if(qi=!0,r)for(const de in r){const ae=r[de],lt=B(ae)?ae.bind(n,n):B(ae.get)?ae.get.bind(n,n):Ze,_i=!B(ae)&&B(ae.set)?ae.set.bind(n):Ze,On=Rf({get:lt,set:_i});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>On.value,set:rn=>On.value=rn})}if(l)for(const de in l)Da(l[de],s,n,de);if(a){const de=B(a)?a.call(n):a;Reflect.ownKeys(de).forEach(ae=>{jh(ae,de[ae])})}h&&Bo(h,t,"c");function Te(de,ae){L(ae)?ae.forEach(lt=>de(lt.bind(n))):ae&&de(ae.bind(n))}if(Te(Kh,u),Te(Aa,f),Te(qh,_),Te(zh,y),Te(Uh,S),Te($h,N),Te(Xh,F),Te(Qh,fe),Te(Gh,Ie),Te(Pa,k),Te(Oa,U),Te(Yh,K),L(Q))if(Q.length){const de=t.exposed||(t.exposed={});Q.forEach(ae=>{Object.defineProperty(de,ae,{get:()=>n[ae],set:lt=>n[ae]=lt})})}else t.exposed||(t.exposed={});Y&&t.render===Ze&&(t.render=Y),ie!=null&&(t.inheritAttrs=ie),R&&(t.components=R),re&&(t.directives=re)}function nf(t,e,n=Ze,s=!1){L(t)&&(t=zi(t));for(const i in t){const r=t[i];let o;he(r)?"default"in r?o=Ci(r.from||i,r.default,!0):o=Ci(r.from||i):o=Ci(r),Oe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Bo(t,e,n){Ve(L(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Da(t,e,n,s){const i=s.includes(".")?Sa(n,s):()=>n[s];if(we(t)){const r=e[t];B(r)&&Ei(i,r)}else if(B(t))Ei(i,t.bind(n));else if(he(t))if(L(t))t.forEach(r=>Da(r,e,n,s));else{const r=B(t.handler)?t.handler.bind(n):e[t.handler];B(r)&&Ei(i,r,t)}}function Ma(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Ds(a,c,o,!0)),Ds(a,e,o)),he(e)&&r.set(e,a),a}function Ds(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ds(t,r,n,!0),i&&i.forEach(o=>Ds(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=sf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const sf={data:Ho,props:Ht,emits:Ht,methods:Ht,computed:Ht,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Ht,directives:Ht,watch:of,provide:Ho,inject:rf};function Ho(t,e){return e?t?function(){return xe(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function rf(t,e){return Ht(zi(t),zi(e))}function zi(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Ht(t,e){return t?xe(xe(Object.create(null),t),e):e}function of(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function lf(t,e,n,s=!1){const i={},r={};Rs(r,ii,1),t.propsDefaults=Object.create(null),La(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:ph(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function af(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=X(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(ti(t.emitsOptions,f))continue;const _=e[f];if(a)if(V(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const y=En(f);i[y]=Yi(a,l,y,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{La(t,e,i,r)&&(c=!0);let h;for(const u in l)(!e||!V(e,u)&&((h=tn(u))===u||!V(e,h)))&&(a?n&&(n[u]!==void 0||n[h]!==void 0)&&(i[u]=Yi(a,l,u,void 0,t,!0)):delete i[u]);if(r!==l)for(const u in r)(!e||!V(e,u)&&!0)&&(delete r[u],c=!0)}c&&ft(t,"set","$attrs")}function La(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Ts(a))continue;const c=e[a];let h;i&&V(i,h=En(a))?!r||!r.includes(h)?n[h]=c:(l||(l={}))[h]=c:ti(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=X(n),c=l||te;for(let h=0;h<r.length;h++){const u=r[h];n[u]=Yi(i,a,u,c[u],t,!V(c,u))}}return o}function Yi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=V(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&B(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(At(i),s=c[n]=a.call(null,e),Tt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===tn(n))&&(s=!0))}return s}function Fa(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!B(t)){const h=u=>{a=!0;const[f,_]=Fa(u,e,!0);xe(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!a)return he(t)&&s.set(t,dn),dn;if(L(r))for(let h=0;h<r.length;h++){const u=En(r[h]);Wo(u)&&(o[u]=te)}else if(r)for(const h in r){const u=En(h);if(Wo(u)){const f=r[h],_=o[u]=L(f)||B(f)?{type:f}:f;if(_){const y=Vo(Boolean,_.type),S=Vo(String,_.type);_[0]=y>-1,_[1]=S<0||y<S,(y>-1||V(_,"default"))&&l.push(u)}}}const c=[o,l];return he(t)&&s.set(t,c),c}function Wo(t){return t[0]!=="$"}function Uo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function $o(t,e){return Uo(t)===Uo(e)}function Vo(t,e){return L(e)?e.findIndex(n=>$o(n,t)):B(e)&&$o(e,t)?0:-1}const ja=t=>t[0]==="_"||t==="$stable",jr=t=>L(t)?t.map(ze):[ze(t)],cf=(t,e,n)=>{if(e._n)return e;const s=Mr((...i)=>jr(e(...i)),n);return s._c=!1,s},Ba=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ja(i))continue;const r=t[i];if(B(r))e[i]=cf(i,r,s);else if(r!=null){const o=jr(r);e[i]=()=>o}}},Ha=(t,e)=>{const n=jr(e);t.slots.default=()=>n},uf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),Rs(e,"_",n)):Ba(e,t.slots={})}else t.slots={},e&&Ha(t,e);Rs(t.slots,ii,1)},hf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=te;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(xe(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Ba(e,i)),o=e}else e&&(Ha(t,e),o={default:1});if(r)for(const l in i)!ja(l)&&!(l in o)&&delete i[l]};function Wa(){return{app:null,config:{isNativeTag:Du,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ff=0;function df(t,e){return function(s,i=null){B(s)||(s=Object.assign({},s)),i!=null&&!he(i)&&(i=null);const r=Wa(),o=new Set;let l=!1;const a=r.app={_uid:ff++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Of,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(a,...h)):B(c)&&(o.add(c),c(a,...h))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,h){return h?(r.components[c]=h,a):r.components[c]},directive(c,h){return h?(r.directives[c]=h,a):r.directives[c]},mount(c,h,u){if(!l){const f=ye(s,i);return f.appContext=r,h&&e?e(f,c):t(f,c,u),l=!0,a._container=c,c.__vue_app__=a,ri(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,h){return r.provides[c]=h,a}};return a}}function Gi(t,e,n,s,i=!1){if(L(t)){t.forEach((f,_)=>Gi(f,e&&(L(e)?e[_]:e),n,s,i));return}if(Ns(s)&&!i)return;const r=s.shapeFlag&4?ri(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,h=l.refs===te?l.refs={}:l.refs,u=l.setupState;if(c!=null&&c!==a&&(we(c)?(h[c]=null,V(u,c)&&(u[c]=null)):Oe(c)&&(c.value=null)),B(a))It(a,l,12,[o,h]);else{const f=we(a),_=Oe(a);if(f||_){const y=()=>{if(t.f){const S=f?h[a]:a.value;i?L(S)&&Er(S,r):L(S)?S.includes(r)||S.push(r):f?(h[a]=[r],V(u,a)&&(u[a]=h[a])):(a.value=[r],t.k&&(h[t.k]=a.value))}else f?(h[a]=o,V(u,a)&&(u[a]=o)):_&&(a.value=o,t.k&&(h[t.k]=o))};o?(y.id=-1,Me(y,n)):y()}}}const Me=Fh;function pf(t){return _f(t)}function _f(t,e){const n=Hu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:_=Ze,cloneNode:y,insertStaticContent:S}=t,N=(d,p,m,v=null,g=null,w=null,T=!1,E=null,I=!!p.dynamicChildren)=>{if(d===p)return;d&&!rt(d,p)&&(v=gs(d),gt(d,g,w,!0),d=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:C,ref:P,shapeFlag:x}=p;switch(C){case Br:M(d,p,m,v);break;case Be:k(d,p,m,v);break;case wi:d==null&&A(p,m,v,T);break;case ge:re(d,p,m,v,g,w,T,E,I);break;default:x&1?fe(d,p,m,v,g,w,T,E,I):x&6?ke(d,p,m,v,g,w,T,E,I):(x&64||x&128)&&C.process(d,p,m,v,g,w,T,E,I,on)}P!=null&&g&&Gi(P,d&&d.ref,w,p||d,!p)},M=(d,p,m,v)=>{if(d==null)s(p.el=l(p.children),m,v);else{const g=p.el=d.el;p.children!==d.children&&c(g,p.children)}},k=(d,p,m,v)=>{d==null?s(p.el=a(p.children||""),m,v):p.el=d.el},A=(d,p,m,v)=>{[d.el,d.anchor]=S(d.children,p,m,v,d.el,d.anchor)},U=({el:d,anchor:p},m,v)=>{let g;for(;d&&d!==p;)g=f(d),s(d,m,v),d=g;s(p,m,v)},Y=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),i(d),d=m;i(p)},fe=(d,p,m,v,g,w,T,E,I)=>{T=T||p.type==="svg",d==null?Ie(p,m,v,g,w,T,E,I):Q(d,p,g,w,T,E,I)},Ie=(d,p,m,v,g,w,T,E)=>{let I,C;const{type:P,props:x,shapeFlag:O,transition:j,patchFlag:q,dirs:J}=d;if(d.el&&y!==void 0&&q===-1)I=d.el=y(d.el);else{if(I=d.el=o(d.type,w,x&&x.is,x),O&8?h(I,d.children):O&16&&K(d.children,I,null,v,g,w&&P!=="foreignObject",T,E),J&&Lt(d,null,v,"created"),x){for(const ce in x)ce!=="value"&&!Ts(ce)&&r(I,ce,null,x[ce],w,d.children,v,g,at);"value"in x&&r(I,"value",null,x.value),(C=x.onVnodeBeforeMount)&&nt(C,v,d)}F(I,d,d.scopeId,T,v)}J&&Lt(d,null,v,"beforeMount");const Z=(!g||g&&!g.pendingBranch)&&j&&!j.persisted;Z&&j.beforeEnter(I),s(I,p,m),((C=x&&x.onVnodeMounted)||Z||J)&&Me(()=>{C&&nt(C,v,d),Z&&j.enter(I),J&&Lt(d,null,v,"mounted")},g)},F=(d,p,m,v,g)=>{if(m&&_(d,m),v)for(let w=0;w<v.length;w++)_(d,v[w]);if(g){let w=g.subTree;if(p===w){const T=g.vnode;F(d,T,T.scopeId,T.slotScopeIds,g.parent)}}},K=(d,p,m,v,g,w,T,E,I=0)=>{for(let C=I;C<d.length;C++){const P=d[C]=E?Et(d[C]):ze(d[C]);N(null,P,p,m,v,g,w,T,E)}},Q=(d,p,m,v,g,w,T)=>{const E=p.el=d.el;let{patchFlag:I,dynamicChildren:C,dirs:P}=p;I|=d.patchFlag&16;const x=d.props||te,O=p.props||te;let j;m&&Ft(m,!1),(j=O.onVnodeBeforeUpdate)&&nt(j,m,p,d),P&&Lt(p,d,m,"beforeUpdate"),m&&Ft(m,!0);const q=g&&p.type!=="foreignObject";if(C?ie(d.dynamicChildren,C,E,m,v,q,w):T||lt(d,p,E,null,m,v,q,w,!1),I>0){if(I&16)R(E,p,x,O,m,v,g);else if(I&2&&x.class!==O.class&&r(E,"class",null,O.class,g),I&4&&r(E,"style",x.style,O.style,g),I&8){const J=p.dynamicProps;for(let Z=0;Z<J.length;Z++){const ce=J[Z],Ke=x[ce],ln=O[ce];(ln!==Ke||ce==="value")&&r(E,ce,Ke,ln,g,d.children,m,v,at)}}I&1&&d.children!==p.children&&h(E,p.children)}else!T&&C==null&&R(E,p,x,O,m,v,g);((j=O.onVnodeUpdated)||P)&&Me(()=>{j&&nt(j,m,p,d),P&&Lt(p,d,m,"updated")},v)},ie=(d,p,m,v,g,w,T)=>{for(let E=0;E<p.length;E++){const I=d[E],C=p[E],P=I.el&&(I.type===ge||!rt(I,C)||I.shapeFlag&70)?u(I.el):m;N(I,C,P,null,v,g,w,T,!0)}},R=(d,p,m,v,g,w,T)=>{if(m!==v){for(const E in v){if(Ts(E))continue;const I=v[E],C=m[E];I!==C&&E!=="value"&&r(d,E,C,I,T,p.children,g,w,at)}if(m!==te)for(const E in m)!Ts(E)&&!(E in v)&&r(d,E,m[E],null,T,p.children,g,w,at);"value"in v&&r(d,"value",m.value,v.value)}},re=(d,p,m,v,g,w,T,E,I)=>{const C=p.el=d?d.el:l(""),P=p.anchor=d?d.anchor:l("");let{patchFlag:x,dynamicChildren:O,slotScopeIds:j}=p;j&&(E=E?E.concat(j):j),d==null?(s(C,m,v),s(P,m,v),K(p.children,m,P,g,w,T,E,I)):x>0&&x&64&&O&&d.dynamicChildren?(ie(d.dynamicChildren,O,m,g,w,T,E),(p.key!=null||g&&p===g.subTree)&&Ua(d,p,!0)):lt(d,p,m,P,g,w,T,E,I)},ke=(d,p,m,v,g,w,T,E,I)=>{p.slotScopeIds=E,d==null?p.shapeFlag&512?g.ctx.activate(p,m,v,T,I):sn(p,m,v,g,w,T,I):Te(d,p,I)},sn=(d,p,m,v,g,w,T)=>{const E=d.component=If(d,v,g);if(ni(d)&&(E.ctx.renderer=on),Tf(E),E.asyncDep){if(g&&g.registerDep(E,de),!d.el){const I=E.subTree=ye(Be);k(null,I,p,m)}return}de(E,d,p,m,g,w,T)},Te=(d,p,m)=>{const v=p.component=d.component;if(kh(d,p,m))if(v.asyncDep&&!v.asyncResolved){ae(v,p,m);return}else v.next=p,wh(v.update),v.update();else p.el=d.el,v.vnode=p},de=(d,p,m,v,g,w,T)=>{const E=()=>{if(d.isMounted){let{next:P,bu:x,u:O,parent:j,vnode:q}=d,J=P,Z;Ft(d,!1),P?(P.el=q.el,ae(d,P,T)):P=q,x&&Ss(x),(Z=P.props&&P.props.onVnodeBeforeUpdate)&&nt(Z,j,P,q),Ft(d,!0);const ce=vi(d),Ke=d.subTree;d.subTree=ce,N(Ke,ce,u(Ke.el),gs(Ke),d,g,w),P.el=ce.el,J===null&&Lr(d,ce.el),O&&Me(O,g),(Z=P.props&&P.props.onVnodeUpdated)&&Me(()=>nt(Z,j,P,q),g)}else{let P;const{el:x,props:O}=p,{bm:j,m:q,parent:J}=d,Z=Ns(p);if(Ft(d,!1),j&&Ss(j),!Z&&(P=O&&O.onVnodeBeforeMount)&&nt(P,J,p),Ft(d,!0),x&&gi){const ce=()=>{d.subTree=vi(d),gi(x,d.subTree,d,g,null)};Z?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ce()):ce()}else{const ce=d.subTree=vi(d);N(null,ce,m,v,d,g,w),p.el=ce.el}if(q&&Me(q,g),!Z&&(P=O&&O.onVnodeMounted)){const ce=p;Me(()=>nt(P,J,ce),g)}(p.shapeFlag&256||J&&Ns(J.vnode)&&J.vnode.shapeFlag&256)&&d.a&&Me(d.a,g),d.isMounted=!0,p=m=v=null}},I=d.effect=new Sr(E,()=>Dr(C),d.scope),C=d.update=()=>I.run();C.id=d.uid,Ft(d,!0),C()},ae=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,af(d,p.props,v,m),hf(d,p.children,m),Nn(),Do(),xn()},lt=(d,p,m,v,g,w,T,E,I=!1)=>{const C=d&&d.children,P=d?d.shapeFlag:0,x=p.children,{patchFlag:O,shapeFlag:j}=p;if(O>0){if(O&128){On(C,x,m,v,g,w,T,E,I);return}else if(O&256){_i(C,x,m,v,g,w,T,E,I);return}}j&8?(P&16&&at(C,g,w),x!==C&&h(m,x)):P&16?j&16?On(C,x,m,v,g,w,T,E,I):at(C,g,w,!0):(P&8&&h(m,""),j&16&&K(x,m,v,g,w,T,E,I))},_i=(d,p,m,v,g,w,T,E,I)=>{d=d||dn,p=p||dn;const C=d.length,P=p.length,x=Math.min(C,P);let O;for(O=0;O<x;O++){const j=p[O]=I?Et(p[O]):ze(p[O]);N(d[O],j,m,null,g,w,T,E,I)}C>P?at(d,g,w,!0,!1,x):K(p,m,v,g,w,T,E,I,x)},On=(d,p,m,v,g,w,T,E,I)=>{let C=0;const P=p.length;let x=d.length-1,O=P-1;for(;C<=x&&C<=O;){const j=d[C],q=p[C]=I?Et(p[C]):ze(p[C]);if(rt(j,q))N(j,q,m,null,g,w,T,E,I);else break;C++}for(;C<=x&&C<=O;){const j=d[x],q=p[O]=I?Et(p[O]):ze(p[O]);if(rt(j,q))N(j,q,m,null,g,w,T,E,I);else break;x--,O--}if(C>x){if(C<=O){const j=O+1,q=j<P?p[j].el:v;for(;C<=O;)N(null,p[C]=I?Et(p[C]):ze(p[C]),m,q,g,w,T,E,I),C++}}else if(C>O)for(;C<=x;)gt(d[C],g,w,!0),C++;else{const j=C,q=C,J=new Map;for(C=q;C<=O;C++){const je=p[C]=I?Et(p[C]):ze(p[C]);je.key!=null&&J.set(je.key,C)}let Z,ce=0;const Ke=O-q+1;let ln=!1,wo=0;const Dn=new Array(Ke);for(C=0;C<Ke;C++)Dn[C]=0;for(C=j;C<=x;C++){const je=d[C];if(ce>=Ke){gt(je,g,w,!0);continue}let tt;if(je.key!=null)tt=J.get(je.key);else for(Z=q;Z<=O;Z++)if(Dn[Z-q]===0&&rt(je,p[Z])){tt=Z;break}tt===void 0?gt(je,g,w,!0):(Dn[tt-q]=C+1,tt>=wo?wo=tt:ln=!0,N(je,p[tt],m,null,g,w,T,E,I),ce++)}const Io=ln?mf(Dn):dn;for(Z=Io.length-1,C=Ke-1;C>=0;C--){const je=q+C,tt=p[je],To=je+1<P?p[je+1].el:v;Dn[C]===0?N(null,tt,m,To,g,w,T,E,I):ln&&(Z<0||C!==Io[Z]?rn(tt,m,To,2):Z--)}}},rn=(d,p,m,v,g=null)=>{const{el:w,type:T,transition:E,children:I,shapeFlag:C}=d;if(C&6){rn(d.component.subTree,p,m,v);return}if(C&128){d.suspense.move(p,m,v);return}if(C&64){T.move(d,p,m,on);return}if(T===ge){s(w,p,m);for(let x=0;x<I.length;x++)rn(I[x],p,m,v);s(d.anchor,p,m);return}if(T===wi){U(d,p,m);return}if(v!==2&&C&1&&E)if(v===0)E.beforeEnter(w),s(w,p,m),Me(()=>E.enter(w),g);else{const{leave:x,delayLeave:O,afterLeave:j}=E,q=()=>s(w,p,m),J=()=>{x(w,()=>{q(),j&&j()})};O?O(w,q,J):J()}else s(w,p,m)},gt=(d,p,m,v=!1,g=!1)=>{const{type:w,props:T,ref:E,children:I,dynamicChildren:C,shapeFlag:P,patchFlag:x,dirs:O}=d;if(E!=null&&Gi(E,null,m,d,!0),P&256){p.ctx.deactivate(d);return}const j=P&1&&O,q=!Ns(d);let J;if(q&&(J=T&&T.onVnodeBeforeUnmount)&&nt(J,p,d),P&6)xu(d.component,m,v);else{if(P&128){d.suspense.unmount(m,v);return}j&&Lt(d,null,p,"beforeUnmount"),P&64?d.type.remove(d,p,m,g,on,v):C&&(w!==ge||x>0&&x&64)?at(C,p,m,!1,!0):(w===ge&&x&384||!g&&P&16)&&at(I,p,m),v&&Eo(d)}(q&&(J=T&&T.onVnodeUnmounted)||j)&&Me(()=>{J&&nt(J,p,d),j&&Lt(d,null,p,"unmounted")},m)},Eo=d=>{const{type:p,el:m,anchor:v,transition:g}=d;if(p===ge){Nu(m,v);return}if(p===wi){Y(d);return}const w=()=>{i(m),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(d.shapeFlag&1&&g&&!g.persisted){const{leave:T,delayLeave:E}=g,I=()=>T(m,w);E?E(d.el,w,I):I()}else w()},Nu=(d,p)=>{let m;for(;d!==p;)m=f(d),i(d),d=m;i(p)},xu=(d,p,m)=>{const{bum:v,scope:g,update:w,subTree:T,um:E}=d;v&&Ss(v),g.stop(),w&&(w.active=!1,gt(T,d,p,m)),E&&Me(E,p),Me(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},at=(d,p,m,v=!1,g=!1,w=0)=>{for(let T=w;T<d.length;T++)gt(d[T],p,m,v,g)},gs=d=>d.shapeFlag&6?gs(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),bo=(d,p,m)=>{d==null?p._vnode&&gt(p._vnode,null,null,!0):N(p._vnode||null,d,p,null,null,null,m),Do(),Ea(),p._vnode=d},on={p:N,um:gt,m:rn,r:Eo,mt:sn,mc:K,pc:lt,pbc:ie,n:gs,o:t};let mi,gi;return e&&([mi,gi]=e(on)),{render:bo,hydrate:mi,createApp:df(bo,mi)}}function Ft({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ua(t,e,n=!1){const s=t.children,i=e.children;if(L(s)&&L(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Et(i[r]),l.el=o.el),n||Ua(o,l))}}function mf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const gf=t=>t.__isTeleport,ge=Symbol(void 0),Br=Symbol(void 0),Be=Symbol(void 0),wi=Symbol(void 0),Wn=[];let $e=null;function G(t=!1){Wn.push($e=t?null:[])}function $a(){Wn.pop(),$e=Wn[Wn.length-1]||null}let bn=1;function Ko(t){bn+=t}function Va(t){return t.dynamicChildren=bn>0?$e||dn:null,$a(),bn>0&&$e&&$e.push(t),t}function ee(t,e,n,s,i,r){return Va(ne(t,e,n,s,i,r,!0))}function Hr(t,e,n,s,i){return Va(ye(t,e,n,s,i,!0))}function Ms(t){return t?t.__v_isVNode===!0:!1}function rt(t,e){return t.type===e.type&&t.key===e.key}const ii="__vInternal",Ka=({key:t})=>t!=null?t:null,xs=({ref:t,ref_key:e,ref_for:n})=>t!=null?we(t)||Oe(t)||B(t)?{i:Qe,r:t,k:e,f:!!n}:t:null;function ne(t,e=null,n=null,s=0,i=null,r=t===ge?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ka(e),ref:e&&xs(e),scopeId:Ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Wr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=we(n)?8:16),bn>0&&!o&&$e&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&$e.push(a),a}const ye=yf;function yf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Zh)&&(t=Be),Ms(t)){const l=Rt(t,e,!0);return n&&Wr(l,n),bn>0&&!r&&$e&&(l.shapeFlag&6?$e[$e.indexOf(t)]=l:$e.push(l)),l.patchFlag|=-2,l}if(kf(t)&&(t=t.__vccOpts),e){e=vf(e);let{class:l,style:a}=e;l&&!we(l)&&(e.class=vr(l)),he(a)&&(pa(a)&&!L(a)&&(a=xe({},a)),e.style=yr(a))}const o=we(t)?1:Rh(t)?128:gf(t)?64:he(t)?4:B(t)?2:0;return ne(t,e,n,s,i,o,r,!0)}function vf(t){return t?pa(t)||ii in t?xe({},t):t:null}function Rt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Ef(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ka(l),ref:e&&e.ref?n&&i?L(i)?i.concat(xs(e)):[i,xs(e)]:xs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ge?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rt(t.ssContent),ssFallback:t.ssFallback&&Rt(t.ssFallback),el:t.el,anchor:t.anchor}}function Cf(t=" ",e=0){return ye(Br,null,t,e)}function qe(t="",e=!1){return e?(G(),Hr(Be,null,t)):ye(Be,null,t)}function ze(t){return t==null||typeof t=="boolean"?ye(Be):L(t)?ye(ge,null,t.slice()):typeof t=="object"?Et(t):ye(Br,null,String(t))}function Et(t){return t.el===null||t.memo?t:Rt(t)}function Wr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Wr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ii in e)?e._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),s&64?(n=16,e=[Cf(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ef(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=vr([e.class,s.class]));else if(i==="style")e.style=yr([e.style,s.style]);else if(Xs(i)){const r=e[i],o=s[i];o&&r!==o&&!(L(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function nt(t,e,n,s=null){Ve(t,e,7,[n,s])}const bf=Wa();let wf=0;function If(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||bf,r={uid:wf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fa(s,i),emitsOptions:wa(s,i),emit:null,emitted:null,propsDefaults:te,inheritAttrs:s.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Th.bind(null,r),t.ce&&t.ce(r),r}let Ne=null;const qa=()=>Ne||Qe,At=t=>{Ne=t,t.scope.on()},Tt=()=>{Ne&&Ne.scope.off(),Ne=null};function za(t){return t.vnode.shapeFlag&4}let Qn=!1;function Tf(t,e=!1){Qn=e;const{props:n,children:s}=t.vnode,i=za(t);lf(t,n,i,e),uf(t,s);const r=i?Sf(t,e):void 0;return Qn=!1,r}function Sf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_a(new Proxy(t.ctx,ef));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?xf(t):null;At(t),Nn();const r=It(s,t,0,[t.props,i]);if(xn(),Tt(),wr(r)){if(r.then(Tt,Tt),e)return r.then(o=>{Qi(t,o,e)}).catch(o=>{as(o,t,0)});t.asyncDep=r}else Qi(t,r,e)}else Ya(t,e)}function Qi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=ma(e)),Ya(t,n)}let qo;function Ya(t,e,n){const s=t.type;if(!t.render){if(!e&&qo&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=xe(xe({isCustomElement:r,delimiters:l},o),a);s.render=qo(i,c)}}t.render=s.render||Ze}At(t),Nn(),tf(t),xn(),Tt()}function Nf(t){return new Proxy(t.attrs,{get(e,n){return We(t,"get","$attrs"),e[n]}})}function xf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Nf(t))},slots:t.slots,emit:t.emit,expose:e}}function ri(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ma(_a(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Os)return Os[n](t)}}))}function kf(t){return B(t)&&"__vccOpts"in t}const Rf=(t,e)=>vh(t,e,Qn);function Af(t){const e=qa();let n=t();return Tt(),wr(n)&&(n=n.catch(s=>{throw At(e),s})),[n,()=>At(e)]}function Pf(t,e,n){const s=arguments.length;return s===2?he(e)&&!L(e)?Ms(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ms(n)&&(n=[n]),ye(t,e,n))}const Of="3.2.38",Df="http://www.w3.org/2000/svg",Vt=typeof document<"u"?document:null,zo=Vt&&Vt.createElement("template"),Mf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Vt.createElementNS(Df,t):Vt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Vt.createTextNode(t),createComment:t=>Vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{zo.innerHTML=s?`<svg>${t}</svg>`:t;const l=zo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Lf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ff(t,e,n){const s=t.style,i=we(n);if(n&&!i){for(const r in n)Xi(s,r,n[r]);if(e&&!we(e))for(const r in e)n[r]==null&&Xi(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Yo=/\s*!important$/;function Xi(t,e,n){if(L(n))n.forEach(s=>Xi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=jf(t,e);Yo.test(n)?t.setProperty(tn(s),n.replace(Yo,""),"important"):t[s]=n}}const Go=["Webkit","Moz","ms"],Ii={};function jf(t,e){const n=Ii[e];if(n)return n;let s=En(e);if(s!=="filter"&&s in t)return Ii[e]=s;s=na(s);for(let i=0;i<Go.length;i++){const r=Go[i]+s;if(r in t)return Ii[e]=r}return e}const Qo="http://www.w3.org/1999/xlink";function Bf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Qo,e.slice(6,e.length)):t.setAttributeNS(Qo,e,n);else{const r=Ru(e);n==null||r&&!Xl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Hf(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Xl(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[Ga,Wf]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Ji=0;const Uf=Promise.resolve(),$f=()=>{Ji=0},Vf=()=>Ji||(Uf.then($f),Ji=Ga());function un(t,e,n,s){t.addEventListener(e,n,s)}function Kf(t,e,n,s){t.removeEventListener(e,n,s)}function qf(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=zf(e);if(s){const c=r[e]=Yf(s,i);un(t,l,c,a)}else o&&(Kf(t,l,o,a),r[e]=void 0)}}const Xo=/(?:Once|Passive|Capture)$/;function zf(t){let e;if(Xo.test(t)){e={};let s;for(;s=t.match(Xo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tn(t.slice(2)),e]}function Yf(t,e){const n=s=>{const i=s.timeStamp||Ga();(Wf||i>=n.attached-1)&&Ve(Gf(s,n.value),e,5,[s])};return n.value=t,n.attached=Vf(),n}function Gf(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Jo=/^on[a-z]/,Qf=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Lf(t,s,i):e==="style"?Ff(t,n,s):Xs(e)?Cr(e)||qf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xf(t,e,s,i))?Hf(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Bf(t,e,s,i))};function Xf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Jo.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Jo.test(e)&&we(n)?!1:e in t}const vt="transition",Mn="animation",Ur=(t,{slots:e})=>Pf(Na,Jf(t),e);Ur.displayName="Transition";const Qa={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ur.props=xe({},Na.props,Qa);const jt=(t,e=[])=>{L(t)?t.forEach(n=>n(...e)):t&&t(...e)},Zo=t=>t?L(t)?t.some(e=>e.length>1):t.length>1:!1;function Jf(t){const e={};for(const R in t)R in Qa||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=o,appearToClass:h=l,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,y=Zf(i),S=y&&y[0],N=y&&y[1],{onBeforeEnter:M,onEnter:k,onEnterCancelled:A,onLeave:U,onLeaveCancelled:Y,onBeforeAppear:fe=M,onAppear:Ie=k,onAppearCancelled:F=A}=e,K=(R,re,ke)=>{Bt(R,re?h:l),Bt(R,re?c:o),ke&&ke()},Q=(R,re)=>{R._isLeaving=!1,Bt(R,u),Bt(R,_),Bt(R,f),re&&re()},ie=R=>(re,ke)=>{const sn=R?Ie:k,Te=()=>K(re,R,ke);jt(sn,[re,Te]),el(()=>{Bt(re,R?a:r),Ct(re,R?h:l),Zo(sn)||tl(re,s,S,Te)})};return xe(e,{onBeforeEnter(R){jt(M,[R]),Ct(R,r),Ct(R,o)},onBeforeAppear(R){jt(fe,[R]),Ct(R,a),Ct(R,c)},onEnter:ie(!1),onAppear:ie(!0),onLeave(R,re){R._isLeaving=!0;const ke=()=>Q(R,re);Ct(R,u),nd(),Ct(R,f),el(()=>{!R._isLeaving||(Bt(R,u),Ct(R,_),Zo(U)||tl(R,s,N,ke))}),jt(U,[R,ke])},onEnterCancelled(R){K(R,!1),jt(A,[R])},onAppearCancelled(R){K(R,!0),jt(F,[R])},onLeaveCancelled(R){Q(R),jt(Y,[R])}})}function Zf(t){if(t==null)return null;if(he(t))return[Ti(t.enter),Ti(t.leave)];{const e=Ti(t);return[e,e]}}function Ti(t){return qn(t)}function Ct(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Bt(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function el(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ed=0;function tl(t,e,n,s){const i=t._endId=++ed,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:l,propCount:a}=td(t,e);if(!o)return s();const c=o+"end";let h=0;const u=()=>{t.removeEventListener(c,f),r()},f=_=>{_.target===t&&++h>=a&&u()};setTimeout(()=>{h<a&&u()},l+1),t.addEventListener(c,f)}function td(t,e){const n=window.getComputedStyle(t),s=y=>(n[y]||"").split(", "),i=s(vt+"Delay"),r=s(vt+"Duration"),o=nl(i,r),l=s(Mn+"Delay"),a=s(Mn+"Duration"),c=nl(l,a);let h=null,u=0,f=0;e===vt?o>0&&(h=vt,u=o,f=r.length):e===Mn?c>0&&(h=Mn,u=c,f=a.length):(u=Math.max(o,c),h=u>0?o>c?vt:Mn:null,f=h?h===vt?r.length:a.length:0);const _=h===vt&&/\b(transform|all)(,|$)/.test(n[vt+"Property"]);return{type:h,timeout:u,propCount:f,hasTransform:_}}function nl(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>sl(n)+sl(t[s])))}function sl(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function nd(){return document.body.offsetHeight}const il=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?n=>Ss(e,n):e};function sd(t){t.target.composing=!0}function rl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const id={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=il(i);const r=s||i.props&&i.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=qn(l)),t._assign(l)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",sd),un(t,"compositionend",rl),un(t,"change",rl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=il(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&qn(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},rd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ol=(t,e)=>n=>{if(!("key"in n))return;const s=tn(n.key);if(e.some(i=>i===s||rd[i]===s))return t(n)},od=xe({patchProp:Qf},Mf);let ll;function ld(){return ll||(ll=pf(od))}const ad=(...t)=>{const e=ld().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=cd(s);if(!i)return;const r=e._component;!B(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function cd(t){return we(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw kn(e)},kn=function(t){return new Error("Firebase Database ("+Xa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ud=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[h],n[u],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ja(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ud(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||u==null)throw Error();const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),u!==64){const y=c<<6&192|u;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Za=function(t){const e=Ja(t);return $r.encodeByteArray(e,!0)},ec=function(t){return Za(t).replace(/\./g,"")},al=function(t){try{return $r.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t){return tc(void 0,t)}function tc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fd(n)||(t[n]=tc(t[n],e[n]));return t}function fd(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dd())}function pd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sc(){return Xa.NODE_ADMIN===!0}function _d(){return typeof indexedDB=="object"}function md(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="FirebaseError";class cs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=gd,Object.setPrototypeOf(this,cs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ic.prototype.create)}}class ic{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?yd(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cs(i,l,s)}}function yd(t,e){return t.replace(vd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const vd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Xn(al(r[0])||""),n=Xn(al(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Cd=function(t){const e=rc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ed=function(t){const e=rc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function cl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ls(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Zi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ul(r)&&ul(o)){if(!Zi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ul(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=l^r&(o^l),h=1518500249):(c=r^o^l,h=1859775393):u<60?(c=r&o|l&(r|o),h=2400959708):(c=r^o^l,h=3395469782);const f=(i<<5|i>>>27)+c+a+h+s[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function oc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Vr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nd(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sd(t){return t===Wt?void 0:t}function Nd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Td(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const kd={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Rd=oe.INFO,Ad={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Pd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ad[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lc{constructor(e){this.name=e,this._logLevel=Rd,this._logHandler=Pd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Od=(t,e)=>e.some(n=>t instanceof n);let hl,fl;function Dd(){return hl||(hl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Md(){return fl||(fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ac=new WeakMap,er=new WeakMap,cc=new WeakMap,Si=new WeakMap,Kr=new WeakMap;function Ld(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(St(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ac.set(n,t)}).catch(()=>{}),Kr.set(e,t),e}function Fd(t){if(er.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});er.set(t,e)}let tr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return er.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jd(t){tr=t(tr)}function Bd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ni(this),e,...n);return cc.set(s,e.sort?e.sort():[e]),St(s)}:Md().includes(t)?function(...e){return t.apply(Ni(this),e),St(ac.get(this))}:function(...e){return St(t.apply(Ni(this),e))}}function Hd(t){return typeof t=="function"?Bd(t):(t instanceof IDBTransaction&&Fd(t),Od(t,Dd())?new Proxy(t,tr):t)}function St(t){if(t instanceof IDBRequest)return Ld(t);if(Si.has(t))return Si.get(t);const e=Hd(t);return e!==t&&(Si.set(t,e),Kr.set(e,t)),e}const Ni=t=>Kr.get(t);function Wd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=St(o);return s&&o.addEventListener("upgradeneeded",a=>{s(St(o.result),a.oldVersion,a.newVersion,St(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Ud=["get","getKey","getAll","getAllKeys","count"],$d=["put","add","delete","clear"],xi=new Map;function dl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xi.get(e))return xi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=$d.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ud.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return xi.set(e,r),r}jd(t=>({...t,get:(e,n,s)=>dl(e,n)||t.get(e,n,s),has:(e,n)=>!!dl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Kd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nr="@firebase/app",pl="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new lc("@firebase/app"),qd="@firebase/app-compat",zd="@firebase/analytics-compat",Yd="@firebase/analytics",Gd="@firebase/app-check-compat",Qd="@firebase/app-check",Xd="@firebase/auth",Jd="@firebase/auth-compat",Zd="@firebase/database",ep="@firebase/database-compat",tp="@firebase/functions",np="@firebase/functions-compat",sp="@firebase/installations",ip="@firebase/installations-compat",rp="@firebase/messaging",op="@firebase/messaging-compat",lp="@firebase/performance",ap="@firebase/performance-compat",cp="@firebase/remote-config",up="@firebase/remote-config-compat",hp="@firebase/storage",fp="@firebase/storage-compat",dp="@firebase/firestore",pp="@firebase/firestore-compat",_p="firebase",mp="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="[DEFAULT]",gp={[nr]:"fire-core",[qd]:"fire-core-compat",[Yd]:"fire-analytics",[zd]:"fire-analytics-compat",[Qd]:"fire-app-check",[Gd]:"fire-app-check-compat",[Xd]:"fire-auth",[Jd]:"fire-auth-compat",[Zd]:"fire-rtdb",[ep]:"fire-rtdb-compat",[tp]:"fire-fn",[np]:"fire-fn-compat",[sp]:"fire-iid",[ip]:"fire-iid-compat",[rp]:"fire-fcm",[op]:"fire-fcm-compat",[lp]:"fire-perf",[ap]:"fire-perf-compat",[cp]:"fire-rc",[up]:"fire-rc-compat",[hp]:"fire-gcs",[fp]:"fire-gcs-compat",[dp]:"fire-fst",[pp]:"fire-fst-compat","fire-js":"fire-js",[_p]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new Map,sr=new Map;function yp(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function js(t){const e=t.name;if(sr.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;sr.set(e,t);for(const n of Fs.values())yp(n,t);return!0}function vp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qt=new ic("app","Firebase",Cp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=mp;function wp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:uc,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Qt.create("bad-app-name",{appName:String(s)});const i=Fs.get(s);if(i){if(Zi(t,i.options)&&Zi(n,i.config))return i;throw Qt.create("duplicate-app",{appName:s})}const r=new xd(s);for(const l of sr.values())r.addComponent(l);const o=new Ep(t,n,r);return Fs.set(s,o),o}function Ip(t=uc){const e=Fs.get(t);if(!e)throw Qt.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let i=(s=gp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(l.join(" "));return}js(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="firebase-heartbeat-database",Sp=1,Zn="firebase-heartbeat-store";let ki=null;function hc(){return ki||(ki=Wd(Tp,Sp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zn)}}}).catch(t=>{throw Qt.create("idb-open",{originalErrorMessage:t.message})})),ki}async function Np(t){var e;try{return(await hc()).transaction(Zn).objectStore(Zn).get(fc(t))}catch(n){if(n instanceof cs)Gt.warn(n.message);else{const s=Qt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Gt.warn(s.message)}}}async function _l(t,e){var n;try{const i=(await hc()).transaction(Zn,"readwrite");return await i.objectStore(Zn).put(e,fc(t)),i.done}catch(s){if(s instanceof cs)Gt.warn(s.message);else{const i=Qt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Gt.warn(i.message)}}}function fc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=1024,kp=30*24*60*60*1e3;class Rp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ml();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=kp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ml(),{heartbeatsToSend:n,unsentEntries:s}=Ap(this._heartbeatsCache.heartbeats),i=ec(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ml(){return new Date().toISOString().substring(0,10)}function Ap(t,e=xp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),gl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Pp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _d()?md().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Np(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gl(t){return ec(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t){js(new Jn("platform-logger",e=>new Vd(e),"PRIVATE")),js(new Jn("heartbeat",e=>new Rp(e),"PRIVATE")),yn(nr,pl,t),yn(nr,pl,"esm2017"),yn("fire-js","")}Op("");var Dp="firebase",Mp="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(Dp,Mp,"app");const yl="@firebase/database",vl="0.13.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc="";function Lp(t){dc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Fp(e)}}catch{}return new jp},qt=pc("localStorage"),ir=pc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new lc("@firebase/database"),Bp=function(){let t=1;return function(){return t++}}(),_c=function(t){const e=Id(t),n=new wd;n.update(e);const s=n.digest();return $r.encodeByteArray(s)},us=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=us.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let Yt=null,Cl=!0;const Hp=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(vn.logLevel=oe.VERBOSE,Yt=vn.log.bind(vn),e&&ir.set("logging_enabled",!0)):typeof t=="function"?Yt=t:(Yt=null,ir.remove("logging_enabled"))},Re=function(...t){if(Cl===!0&&(Cl=!1,Yt===null&&ir.get("logging_enabled")===!0&&Hp(!0)),Yt){const e=us.apply(null,t);Yt(e)}},hs=function(t){return function(...e){Re(t,...e)}},rr=function(...t){const e="FIREBASE INTERNAL ERROR: "+us(...t);vn.error(e)},Xt=function(...t){const e=`FIREBASE FATAL ERROR: ${us(...t)}`;throw vn.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+us(...t);vn.warn(e)},Wp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Up=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},In="[MIN_NAME]",Jt="[MAX_NAME]",Rn=function(t,e){if(t===e)return 0;if(t===In||e===Jt)return-1;if(e===In||t===Jt)return 1;{const n=El(t),s=El(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},$p=function(t,e){return t===e?0:t<e?-1:1},Ln=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},qr=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ve(e[s]),n+=":",n+=qr(t[e[s]]);return n+="}",n},gc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const yc=function(t){b(!mc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},Vp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Kp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const zp=new RegExp("^-?(0*)\\d{1,10}$"),Yp=-2147483648,Gp=2147483647,El=function(t){if(zp.test(t)){const e=Number(t);if(e>=Yp&&e<=Gp)return e}return null},fs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},Qp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Un=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class or{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}or.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="5",vc="v",Cc="s",Ec="r",bc="f",wc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ic="ls",Tc="p",lr="ac",Sc="websocket",Nc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function e_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xc(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Sc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Nc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);e_(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(){this.counters_={}}incrementCounter(e,n=1){_t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri={},Ai={};function Yr(t){const e=t.toString();return Ri[e]||(Ri[e]=new t_),Ri[e]}function n_(t,e){const n=t.toString();return Ai[n]||(Ai[n]=e()),Ai[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&fs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="start",i_="close",r_="pLPCommand",o_="pRTLPCB",kc="id",Rc="pw",Ac="ser",l_="cb",a_="seg",c_="ts",u_="d",h_="dframe",Pc=1870,Oc=30,f_=Pc-Oc,d_=25e3,p_=3e4;class hn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=hs(e),this.stats_=Yr(n),this.urlFn=a=>(this.appCheckToken&&(a[lr]=this.appCheckToken),xc(n,Nc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new s_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(p_)),Up(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gr((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bl)this.id=l,this.password=a;else if(o===i_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[bl]="t",s[Ac]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[l_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[vc]=zr,this.transportSessionId&&(s[Cc]=this.transportSessionId),this.lastSessionId&&(s[Ic]=this.lastSessionId),this.applicationId&&(s[Tc]=this.applicationId),this.appCheckToken&&(s[lr]=this.appCheckToken),typeof location<"u"&&location.hostname&&wc.test(location.hostname)&&(s[Ec]=bc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Vp()&&!Kp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Za(n),i=gc(s,f_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[h_]="t",s[kc]=e,s[Rc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Gr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Bp(),window[r_+this.uniqueCallbackIdentifier]=e,window[o_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Gr.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Re("frame writing exception"),l.stack&&Re(l.stack),Re(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kc]=this.myID,e[Rc]=this.myPW,e[Ac]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Oc+s.length<=Pc;){const o=this.pendingSegs.shift();s=s+"&"+a_+i+"="+o.seg+"&"+c_+i+"="+o.ts+"&"+u_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(d_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=16384,m_=45e3;let Bs=null;typeof MozWebSocket<"u"?Bs=MozWebSocket:typeof WebSocket<"u"&&(Bs=WebSocket);class Ge{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=hs(this.connId),this.stats_=Yr(n),this.connURL=Ge.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[vc]=zr,typeof location<"u"&&location.hostname&&wc.test(location.hostname)&&(o[Ec]=bc),n&&(o[Cc]=n),s&&(o[Ic]=s),i&&(o[lr]=i),r&&(o[Tc]=r),xc(e,Sc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qt.set("previous_websocket_failure",!0);try{let s;sc(),this.mySock=new Bs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Bs!==null&&!Ge.forceDisallow_}static previouslyFailed(){return qt.isInMemoryStorage||qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Xn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gc(n,__);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(m_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ge.responsesRequiredToBeHealthy=2;Ge.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hn,Ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ge&&Ge.isAvailable();let s=n&&!Ge.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ge];else{const i=this.transports_=[];for(const r of es.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}es.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=6e4,y_=5e3,v_=10*1024,C_=100*1024,Pi="t",wl="d",E_="s",Il="r",b_="e",Tl="o",Sl="a",Nl="n",xl="p",w_="h";class I_{constructor(e,n,s,i,r,o,l,a,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=hs("c:"+this.id+":"),this.transportManager_=new es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Un(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>C_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>v_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pi in e){const n=e[Pi];n===Sl?this.upgradeIfSecondaryHealthy_():n===Il?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Tl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ln("t",e),s=Ln("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:xl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ln("t",e),s=Ln("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ln(Pi,e);if(wl in e){const s=e[wl];if(n===w_)this.onHandshake_(s);else if(n===Nl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===E_?this.onConnectionShutdown_(s):n===Il?this.onReset_(s):n===b_?rr("Server Error: "+s):n===Tl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),zr!==s&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Un(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(g_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Un(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(y_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:xl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Mc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!nc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hs}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=32,Rl=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new se("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pt(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function Lc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function T_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Fc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function Ce(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new se(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return De(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Bc(t,e){if(Pt(t)!==Pt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Pt(t)>Pt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class S_{constructor(e,n){this.errorPrefix_=n,this.parts_=Fc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=oi(this.parts_[s]);Hc(this)}}function N_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=oi(e),Hc(t)}function x_(t){const e=t.parts_.pop();t.byteLength_-=oi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Hc(t){if(t.byteLength_>Rl)throw new Error(t.errorPrefix_+"has a key path longer than "+Rl+" bytes ("+t.byteLength_+").");if(t.parts_.length>kl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kl+") or object contains a cycle "+Ut(t))}function Ut(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Mc{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Qr}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=1e3,k_=60*5*1e3,Al=30*1e3,R_=1.3,A_=3e4,P_="server_kill",Pl=3;class ht extends Dc{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=ht.nextPersistentConnectionId_++,this.log_=hs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fn,this.maxReconnectDelay_=k_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!sc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ve(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Vr,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;ht.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_t(e,"w")){const s=wn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ed(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Al)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Cd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):rr("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>A_&&(this.reconnectDelay_=Fn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*R_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ht.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(u){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,l=new I_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{He(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(P_)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&He(u),a())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cl(this.interruptReasons_)&&(this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>qr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pl&&(this.reconnectDelay_=Al,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+dc.replace(/\./g,"-")]=1,nc()?e["framework.cordova"]=1:pd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hs.getInstance().currentlyOnline();return cl(this.interruptReasons_)&&e}}ht.nextPersistentConnectionId_=0;ht.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new H(In,e),i=new H(In,n);return this.compare(s,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;class Wc extends ai{static get __EMPTY_NODE(){return ws}static set __EMPTY_NODE(e){ws=e}compare(e,n){return Rn(e.name,n.name)}isDefinedOn(e){throw kn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Jt,ws)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,ws)}toString(){return".key"}}const Cn=new Wc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:be.RED,this.left=i!=null?i:Le.EMPTY_NODE,this.right=r!=null?r:Le.EMPTY_NODE}copy(e,n,s,i,r){return new be(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class O_{copy(e,n,s,i,r){return this}insert(e,n,s){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new O_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t,e){return Rn(t.name,e.name)}function Xr(t,e){return Rn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ar;function M_(t){ar=t}const Uc=function(t){return typeof t=="number"?"number:"+yc(t):"string:"+t},$c=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_t(e,".sv"),"Priority must be a string or number.")}else b(t===ar||t.isEmpty(),"priority of unexpected type.");b(t===ar||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$c(this.priorityNode_)}static set __childrenNodeConstructor(e){Ol=e}static get __childrenNodeConstructor(){return Ol}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:$(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||Pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=yc(this.value_):e+=this.value_,this.lazyHash_=_c(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),r=Ee.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc,Kc;function L_(t){Vc=t}function F_(t){Kc=t}class j_ extends ai{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Rn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Jt,new Ee("[PRIORITY-POST]",Kc))}makePost(e,n){const s=Vc(e);return new H(n,new Ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new j_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=Math.log(2);class H_{constructor(e){const n=r=>parseInt(Math.log(r)/B_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ws=function(t,e,n,s){t.sort(e);const i=function(a,c){const h=c-a;let u,f;if(h===0)return null;if(h===1)return u=t[a],f=n?n(u):u,new be(f,u.node,be.BLACK,null,null);{const _=parseInt(h/2,10)+a,y=i(a,_),S=i(_+1,c);return u=t[_],f=n?n(u):u,new be(f,u.node,be.BLACK,y,S)}},r=function(a){let c=null,h=null,u=t.length;const f=function(y,S){const N=u-y,M=u;u-=y;const k=i(N+1,M),A=t[N],U=n?n(A):A;_(new be(U,A.node,S,null,k))},_=function(y){c?(c.left=y,c=y):(h=y,c=y)};for(let y=0;y<a.count;++y){const S=a.nextBitIsOne(),N=Math.pow(2,a.count-(y+1));S?f(N,be.BLACK):(f(N,be.BLACK),f(N,be.RED))}return h},o=new H_(t.length),l=r(o);return new Le(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi;const an={};class ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(an&&_e,"ChildrenNode.ts has not been loaded"),Oi=Oi||new ut({".priority":an},{".priority":_e}),Oi}get(e){const n=wn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return _t(this.indexSet_,e.toString())}addIndex(e,n){b(e!==Cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(H.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ws(s,e.getCompare()):l=an;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new ut(h,c)}addToIndexes(e,n){const s=Ls(this.indexes_,(i,r)=>{const o=wn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===an)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(H.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ws(l,o.getCompare())}else return an;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new H(e.name,l))),a.insert(e,e.node)}});return new ut(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ls(this.indexes_,i=>{if(i===an)return i;{const r=n.get(e.name);return r?i.remove(new H(e.name,r)):i}});return new ut(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn;class D{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&$c(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return jn||(jn=new D(new Le(Xr),null,ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||jn}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?jn:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new H(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?jn:this.priorityNode_;return new D(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{b($(e)!==".priority"||Pt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(le(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,l)=>{n[o]=l.val(e),s++,r&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uc(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":_c(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new H(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ds?-1:0}withIndex(e){if(e===Cn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cn?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class W_ extends D{constructor(){super(new Le(Xr),D.EMPTY_NODE,ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const ds=new W_;Object.defineProperties(H,{MIN:{value:new H(In,D.EMPTY_NODE)},MAX:{value:new H(Jt,ds)}});Wc.__EMPTY_NODE=D.EMPTY_NODE;Ee.__childrenNodeConstructor=D;M_(ds);F_(ds);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=!0;function Se(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,Se(e))}if(!(t instanceof Array)&&U_){const n=[];let s=!1;if(Fe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Se(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new H(o,a)))}}),n.length===0)return D.EMPTY_NODE;const r=Ws(n,D_,o=>o.name,Xr);if(s){const o=Ws(n,_e.getCompare());return new D(r,Se(e),new ut({".priority":o},{".priority":_e}))}else return new D(r,Se(e),ut.Default)}else{let n=D.EMPTY_NODE;return Fe(t,(s,i)=>{if(_t(t,s)&&s.substring(0,1)!=="."){const r=Se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Se(e))}}L_(Se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_ extends ai{constructor(e){super(),this.indexPath_=e,b(!W(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Rn(e.name,n.name):r}makePost(e,n){const s=Se(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,s);return new H(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,ds);return new H(Jt,e)}toString(){return Fc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_ extends ai{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Rn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const s=Se(e);return new H(n,s)}toString(){return".value"}}const K_=new V_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){return{type:"value",snapshotNode:t}}function Tn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ns(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function q_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ts(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Tn(n,s)):o.trackChildChange(ns(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(ts(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ns(i,r,o))}else s.trackChildChange(Tn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.indexedFilter_=new Jr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ss.getStartPost_(e),this.endPost_=ss.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new H(n,s))||(s=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,l)=>{r.matches(new H(o,l))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.rangedFilter_=new ss(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new H(n,s))||(s=D.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();l=(f,_)=>u(_,f)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,h=!1;for(;a.hasNext();){const u=a.getNext();!h&&l(r,u)<=0&&(h=!0),h&&c<this.limit_&&l(u,o)<=0?c++:i=i.updateImmediateChild(u.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,_)=>u(_,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new H(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(h&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ns(n,s,u)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ts(n,u));const S=l.updateImmediateChild(n,D.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Tn(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return s.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ts(c.name,c.node)),r.trackChildChange(Tn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:In}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new Zr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Y_(t){return t.loadsAllData()?new Jr(t.getIndex()):t.hasLimit()?new z_(t):new ss(t)}function Dl(t){const e={};if(t.isDefault())return e;let n;return t.index_===_e?n="$priority":t.index_===K_?n="$value":t.index_===Cn?n="$key":(b(t.index_ instanceof $_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_&&(e.startAt=ve(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ve(t.indexStartName_))),t.endSet_&&(e.endAt=ve(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ve(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ml(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends Dc{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=hs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Us.getListenId_(e,s),l={};this.listens_[o]=l;const a=Dl(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),wn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Us.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Dl(e._queryParams),s=e._path.toString(),i=new Vr;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bd(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Xn(l.responseText)}catch{He("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(){return{value:null,children:new Map}}function zc(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,$s());const i=t.children.get(s);e=le(e),zc(i,e,n)}}function cr(t,e,n){t.value!==null?n(e,t.value):Q_(t,(s,i)=>{const r=new se(e.toString()+"/"+s);cr(i,r,n)})}function Q_(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=10*1e3,J_=30*1e3,Z_=5*60*1e3;class em{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new X_(e);const s=Ll+(J_-Ll)*Math.random();Un(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&_t(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Un(this.reportStats_.bind(this),Math.floor(Math.random()*2*Z_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Je||(Je={}));function Yc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function eo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function to(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Je.ACK_USER_WRITE,this.source=Yc()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Vs(z(),n,this.revert)}}else return b($(this.path)===e,"operationForChild called for unrelated child."),new Vs(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.source=e,this.path=n,this.type=Je.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new is(this.source,z()):new is(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Je.OVERWRITE}operationForChild(e){return W(this.path)?new Zt(this.source,z(),this.snap.getImmediateChild(e)):new Zt(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Je.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new Zt(this.source,z(),n.value):new rs(this.source,z(),n)}else return b($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rs(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(q_(o.childName,o.snapshotNode))}),Bn(t,i,"child_removed",e,s,n),Bn(t,i,"child_added",e,s,n),Bn(t,i,"child_moved",r,s,n),Bn(t,i,"child_changed",e,s,n),Bn(t,i,"value",e,s,n),i}function Bn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>im(t,l,a)),o.forEach(l=>{const a=sm(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function sm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function im(t,e,n){if(e.childName==null||n.childName==null)throw kn("Should only compare child_ events.");const s=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t,e){return{eventCache:t,serverCache:e}}function $n(t,e,n,s){return ci(new Ot(e,n,s),t.serverCache)}function Gc(t,e,n,s){return ci(t.eventCache,new Ot(e,n,s))}function Ks(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function en(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di;const rm=()=>(Di||(Di=new Le($p)),Di);class ue{constructor(e,n=rm()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return Fe(e,(s,i)=>{n=n.set(new se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(W(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(le(e),n);return r!=null?{path:Ce(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(le(e)):new ue(null)}}set(e,n){if(W(e))return new ue(n,this.children);{const s=$(e),r=(this.children.get(s)||new ue(null)).set(le(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(le(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(W(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(le(e)):null}}setTree(e,n){if(W(e))return n;{const s=$(e),r=(this.children.get(s)||new ue(null)).setTree(le(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ce(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(W(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(le(e),Ce(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,s){if(W(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(le(e),Ce(n,i),s):new ue(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ce(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new ue(null))}}function Vn(t,e,n){if(W(e))return new et(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=De(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function Fl(t,e,n){let s=t;return Fe(n,(i,r)=>{s=Vn(s,Ce(e,i),r)}),s}function jl(t,e){if(W(e))return et.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new et(n)}}function ur(t,e){return nn(t,e)!=null}function nn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function Bl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new H(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new H(s,i.value))}),e}function Nt(t,e){if(W(e))return t;{const n=nn(t,e);return n!=null?new et(new ue(n)):new et(t.writeTree_.subtree(e))}}function hr(t){return t.writeTree_.isEmpty()}function Sn(t,e){return Qc(z(),t.writeTree_,e)}function Qc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Qc(Ce(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ce(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,e){return eu(e,t)}function om(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Vn(t.visibleWrites,e,n)),t.lastWriteId=s}function lm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function am(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&cm(l,s.path)?i=!1:Xe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return um(t),!0;if(s.snap)t.visibleWrites=jl(t.visibleWrites,s.path);else{const l=s.children;Fe(l,a=>{t.visibleWrites=jl(t.visibleWrites,Ce(s.path,a))})}return!0}else return!1}function cm(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(Ce(t.path,n),e))return!0;return!1}function um(t){t.visibleWrites=Xc(t.allWrites,hm,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function hm(t){return t.visible}function Xc(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Xe(n,o)?(l=De(n,o),s=Vn(s,l,r.snap)):Xe(o,n)&&(l=De(o,n),s=Vn(s,z(),r.snap.getChild(l)));else if(r.children){if(Xe(n,o))l=De(n,o),s=Fl(s,l,r.children);else if(Xe(o,n))if(l=De(o,n),W(l))s=Fl(s,z(),r.children);else{const a=wn(r.children,$(l));if(a){const c=a.getChild(le(l));s=Vn(s,z(),c)}}}else throw kn("WriteRecord should have .snap or .children")}}return s}function Jc(t,e,n,s,i){if(!s&&!i){const r=nn(t.visibleWrites,e);if(r!=null)return r;{const o=Nt(t.visibleWrites,e);if(hr(o))return n;if(n==null&&!ur(o,z()))return null;{const l=n||D.EMPTY_NODE;return Sn(o,l)}}}else{const r=Nt(t.visibleWrites,e);if(!i&&hr(r))return n;if(!i&&n==null&&!ur(r,z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Xe(c.path,e)||Xe(e,c.path))},l=Xc(t.allWrites,o,e),a=n||D.EMPTY_NODE;return Sn(l,a)}}}function fm(t,e,n){let s=D.EMPTY_NODE;const i=nn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Nt(t.visibleWrites,e);return n.forEachChild(_e,(o,l)=>{const a=Sn(Nt(r,new se(o)),l);s=s.updateImmediateChild(o,a)}),Bl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Nt(t.visibleWrites,e);return Bl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function dm(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ce(e,n);if(ur(t.visibleWrites,r))return null;{const o=Nt(t.visibleWrites,r);return hr(o)?i.getChild(n):Sn(o,i.getChild(n))}}function pm(t,e,n,s){const i=Ce(e,n),r=nn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Nt(t.visibleWrites,i);return Sn(o,s.getNode().getImmediateChild(n))}else return null}function _m(t,e){return nn(t.visibleWrites,e)}function mm(t,e,n,s,i,r,o){let l;const a=Nt(t.visibleWrites,e),c=nn(a,z());if(c!=null)l=c;else if(n!=null)l=Sn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&h.length<i;)u(_,s)!==0&&h.push(_),_=f.getNext();return h}else return[]}function gm(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function qs(t,e,n,s){return Jc(t.writeTree,t.treePath,e,n,s)}function no(t,e){return fm(t.writeTree,t.treePath,e)}function Hl(t,e,n,s){return dm(t.writeTree,t.treePath,e,n,s)}function zs(t,e){return _m(t.writeTree,Ce(t.treePath,e))}function ym(t,e,n,s,i,r){return mm(t.writeTree,t.treePath,e,n,s,i,r)}function so(t,e,n){return pm(t.writeTree,t.treePath,e,n)}function Zc(t,e){return eu(Ce(t.treePath,e),t.writeTree)}function eu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ns(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ts(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Tn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ns(s,e.snapshotNode,i.oldSnap));else throw kn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const tu=new Cm;class io{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ot(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return so(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:en(this.viewCache_),r=ym(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){return{filter:t}}function bm(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function wm(t,e,n,s,i){const r=new vm;let o,l;if(n.type===Je.OVERWRITE){const c=n;c.source.fromUser?o=fr(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=Ys(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Je.MERGE){const c=n;c.source.fromUser?o=Tm(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=dr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Je.ACK_USER_WRITE){const c=n;c.revert?o=xm(t,e,c.path,s,i,r):o=Sm(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Je.LISTEN_COMPLETE)o=Nm(t,e,n.path,s,r);else throw kn("Unknown operation type: "+n.type);const a=r.getChanges();return Im(e,o,a),{viewCache:o,changes:a}}function Im(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ks(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(qc(Ks(e)))}}function nu(t,e,n,s,i,r){const o=e.eventCache;if(zs(s,n)!=null)return e;{let l,a;if(W(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=en(e),h=c instanceof D?c:D.EMPTY_NODE,u=no(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=qs(s,en(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=$(n);if(c===".priority"){b(Pt(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const u=Hl(s,n,h,a);u!=null?l=t.filter.updatePriority(h,u):l=o.getNode()}else{const h=le(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Hl(s,n,o.getNode(),a);f!=null?u=o.getNode().getImmediateChild(c).updateChild(h,f):u=o.getNode().getImmediateChild(c)}else u=so(s,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,h,i,r):l=o.getNode()}}return $n(e,l,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Ys(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=h.updateFullNode(a.getNode(),_,null)}else{const _=$(n);if(!a.isCompleteForPath(n)&&Pt(n)>1)return e;const y=le(n),N=a.getNode().getImmediateChild(_).updateChild(y,s);_===".priority"?c=h.updatePriority(a.getNode(),N):c=h.updateChild(a.getNode(),_,N,y,tu,null)}const u=Gc(e,c,a.isFullyInitialized()||W(n),h.filtersNodes()),f=new io(i,u,r);return nu(t,u,n,i,f,l)}function fr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const h=new io(i,e,r);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=$n(e,c,!0,t.filter.filtersNodes());else{const u=$(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=$n(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=le(n),_=l.getNode().getImmediateChild(u);let y;if(W(f))y=s;else{const S=h.getCompleteChild(u);S!=null?Lc(f)===".priority"&&S.getChild(jc(f)).isEmpty()?y=S:y=S.updateChild(f,s):y=D.EMPTY_NODE}if(_.equals(y))a=e;else{const S=t.filter.updateChild(l.getNode(),u,y,f,h,o);a=$n(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Wl(t,e){return t.eventCache.isCompleteForChild(e)}function Tm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const h=Ce(n,a);Wl(e,$(h))&&(l=fr(t,l,h,c,i,r,o))}),s.foreach((a,c)=>{const h=Ce(n,a);Wl(e,$(h))||(l=fr(t,l,h,c,i,r,o))}),l}function Ul(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function dr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;W(n)?c=s:c=new ue(null).setTree(n,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(h.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),y=Ul(t,_,f);a=Ys(t,a,new se(u),y,i,r,o,l)}}),c.children.inorderTraversal((u,f)=>{const _=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!h.hasChild(u)&&!_){const y=e.serverCache.getNode().getImmediateChild(u),S=Ul(t,y,f);a=Ys(t,a,new se(u),S,i,r,o,l)}}),a}function Sm(t,e,n,s,i,r,o){if(zs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(W(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ys(t,e,n,a.getNode().getChild(n),i,r,l,o);if(W(n)){let c=new ue(null);return a.getNode().forEachChild(Cn,(h,u)=>{c=c.set(new se(h),u)}),dr(t,e,n,c,i,r,l,o)}else return e}else{let c=new ue(null);return s.foreach((h,u)=>{const f=Ce(n,h);a.isCompleteForPath(f)&&(c=c.set(h,a.getNode().getChild(f)))}),dr(t,e,n,c,i,r,l,o)}}function Nm(t,e,n,s,i){const r=e.serverCache,o=Gc(e,r.getNode(),r.isFullyInitialized()||W(n),r.isFiltered());return nu(t,o,n,s,tu,i)}function xm(t,e,n,s,i,r){let o;if(zs(s,n)!=null)return e;{const l=new io(s,e,i),a=e.eventCache.getNode();let c;if(W(n)||$(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=qs(s,en(e));else{const u=e.serverCache.getNode();b(u instanceof D,"serverChildren would be complete if leaf node"),h=no(s,u)}h=h,c=t.filter.updateFullNode(a,h,r)}else{const h=$(n);let u=so(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=a.getImmediateChild(h)),u!=null?c=t.filter.updateChild(a,h,u,le(n),l,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(a,h,D.EMPTY_NODE,le(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qs(s,en(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||zs(s,z())!=null,$n(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Jr(s.getIndex()),r=Y_(s);this.processor_=Em(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(D.EMPTY_NODE,l.getNode(),null),h=new Ot(a,o.isFullyInitialized(),i.filtersNodes()),u=new Ot(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ci(u,h),this.eventGenerator_=new tm(this.query_)}get query(){return this.query_}}function Rm(t){return t.viewCache_.serverCache.getNode()}function Am(t){return Ks(t.viewCache_)}function Pm(t,e){const n=en(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function $l(t){return t.eventRegistrations_.length===0}function Om(t,e){t.eventRegistrations_.push(e)}function Vl(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Kl(t,e,n,s){e.type===Je.MERGE&&e.source.queryId!==null&&(b(en(t.viewCache_),"We should always have a full cache before handling merges"),b(Ks(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=wm(t.processor_,i,e,n,s);return bm(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,su(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Dm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(Tn(r,o))}),n.isFullyInitialized()&&s.push(qc(n.getNode())),su(t,s,n.getNode(),e)}function su(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return nm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs;class iu{constructor(){this.views=new Map}}function Mm(t){b(!Gs,"__referenceConstructor has already been defined"),Gs=t}function Lm(){return b(Gs,"Reference.ts has not been loaded"),Gs}function Fm(t){return t.views.size===0}function ro(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Kl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Kl(o,e,n,s));return r}}function ru(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=qs(n,i?s:null),a=!1;l?a=!0:s instanceof D?(l=no(n,s),a=!1):(l=D.EMPTY_NODE,a=!1);const c=ci(new Ot(l,a,!1),new Ot(s,i,!1));return new km(e,c)}return o}function jm(t,e,n,s,i,r){const o=ru(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Om(o,n),Dm(o,n)}function Bm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Dt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Vl(c,n,s)),$l(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Vl(a,n,s)),$l(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Dt(t)&&r.push(new(Lm())(e._repo,e._path)),{removed:r,events:o}}function ou(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xt(t,e){let n=null;for(const s of t.views.values())n=n||Pm(s,e);return n}function lu(t,e){if(e._queryParams.loadsAllData())return hi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function au(t,e){return lu(t,e)!=null}function Dt(t){return hi(t)!=null}function hi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;function Hm(t){b(!Qs,"__referenceConstructor has already been defined"),Qs=t}function Wm(){return b(Qs,"Reference.ts has not been loaded"),Qs}let Um=1;class ql{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=gm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $m(t,e,n,s,i){return om(t.pendingWriteTree_,e,n,s,i),i?_s(t,new Zt(Yc(),e,n)):[]}function fn(t,e,n=!1){const s=lm(t.pendingWriteTree_,e);if(am(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(z(),!0):Fe(s.children,o=>{r=r.set(new se(o),!0)}),_s(t,new Vs(s.path,r,n))}else return[]}function ps(t,e,n){return _s(t,new Zt(eo(),e,n))}function Vm(t,e,n){const s=ue.fromObject(n);return _s(t,new rs(eo(),e,s))}function Km(t,e){return _s(t,new is(eo(),e))}function qm(t,e,n){const s=oo(t,n);if(s){const i=lo(s),r=i.path,o=i.queryId,l=De(r,e),a=new is(to(o),l);return ao(t,r,a)}else return[]}function cu(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||au(o,e))){const a=Bm(o,e,n,s);Fm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(f,_)=>Dt(_));if(h&&!u){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=Qm(f);for(let y=0;y<_.length;++y){const S=_[y],N=S.query,M=pu(t,S);t.listenProvider_.startListening(Kn(N),os(t,N),M.hashFn,M.onComplete)}}}!u&&c.length>0&&!s&&(h?t.listenProvider_.stopListening(Kn(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(fi(f));t.listenProvider_.stopListening(Kn(f),_)}))}Xm(t,c)}return l}function uu(t,e,n,s){const i=oo(t,s);if(i!=null){const r=lo(i),o=r.path,l=r.queryId,a=De(o,e),c=new Zt(to(l),a,n);return ao(t,o,c)}else return[]}function zm(t,e,n,s){const i=oo(t,s);if(i){const r=lo(i),o=r.path,l=r.queryId,a=De(o,e),c=ue.fromObject(n),h=new rs(to(l),a,c);return ao(t,o,h)}else return[]}function Ym(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const y=De(f,i);r=r||xt(_,y),o=o||Dt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Dt(l),r=r||xt(l,z())):(l=new iu,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const S=xt(y,z());S&&(r=r.updateImmediateChild(_,S))}));const c=au(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=fi(e);b(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Jm();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const h=ui(t.pendingWriteTree_,i);let u=jm(l,e,n,h,r,a);if(!c&&!o&&!s){const f=lu(l,e);u=u.concat(Zm(t,e,f))}return u}function hu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=De(o,e),c=xt(l,a);if(c)return c});return Jc(i,e,r,n,!0)}function Gm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const u=De(c,n);s=s||xt(h,u)});let i=t.syncPointTree_.get(n);i?s=s||xt(i,z()):(i=new iu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Ot(s,!0,!1):null,l=ui(t.pendingWriteTree_,e._path),a=ru(i,e,l,r?o.getNode():D.EMPTY_NODE,r);return Am(a)}function _s(t,e){return fu(e,t.syncPointTree_,null,ui(t.pendingWriteTree_,z()))}function fu(t,e,n,s){if(W(t.path))return du(t,e,n,s);{const i=e.get(z());n==null&&i!=null&&(n=xt(i,z()));let r=[];const o=$(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,h=Zc(s,o);r=r.concat(fu(l,a,c,h))}return i&&(r=r.concat(ro(i,t,s,n))),r}}function du(t,e,n,s){const i=e.get(z());n==null&&i!=null&&(n=xt(i,z()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Zc(s,o),h=t.operationForChild(o);h&&(r=r.concat(du(h,l,a,c)))}),i&&(r=r.concat(ro(i,t,s,n))),r}function pu(t,e){const n=e.query,s=os(t,n);return{hashFn:()=>(Rm(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?qm(t,n._path,s):Km(t,n._path);{const r=qp(i,n);return cu(t,n,null,r)}}}}function os(t,e){const n=fi(e);return t.queryToTagMap.get(n)}function fi(t){return t._path.toString()+"$"+t._queryIdentifier}function oo(t,e){return t.tagToQueryMap.get(e)}function lo(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function ao(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=ui(t.pendingWriteTree_,e);return ro(s,n,i,null)}function Qm(t){return t.fold((e,n,s)=>{if(n&&Dt(n))return[hi(n)];{let i=[];return n&&(i=ou(n)),Fe(s,(r,o)=>{i=i.concat(o)}),i}})}function Kn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Wm())(t._repo,t._path):t}function Xm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=fi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Jm(){return Um++}function Zm(t,e,n){const s=e._path,i=os(t,e),r=pu(t,n),o=t.listenProvider_.startListening(Kn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!Dt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,u)=>{if(!W(c)&&h&&Dt(h))return[hi(h).query];{let f=[];return h&&(f=f.concat(ou(h).map(_=>_.query))),Fe(u,(_,y)=>{f=f.concat(y)}),f}});for(let c=0;c<a.length;++c){const h=a[c];t.listenProvider_.stopListening(Kn(h),os(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new co(n)}node(){return this.node_}}class uo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new uo(this.syncTree_,n)}node(){return hu(this.syncTree_,this.path_)}}const eg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},zl=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ng(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},ng=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},sg=function(t,e,n,s){return ho(e,new uo(n,t),s)},ig=function(t,e,n){return ho(t,new co(e),n)};function ho(t,e,n){const s=t.getPriority().val(),i=zl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=zl(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ee(l,Se(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ee(i))),o.forEachChild(_e,(l,a)=>{const c=ho(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function po(t,e){let n=e instanceof se?e:new se(e),s=t,i=$(n);for(;i!==null;){const r=wn(s.node.children,i)||{children:{},childCount:0};s=new fo(i,s,r),n=le(n),i=$(n)}return s}function An(t){return t.node.value}function _u(t,e){t.node.value=e,pr(t)}function mu(t){return t.node.childCount>0}function rg(t){return An(t)===void 0&&!mu(t)}function di(t,e){Fe(t.node.children,(n,s)=>{e(new fo(n,t,s))})}function gu(t,e,n,s){n&&!s&&e(t),di(t,i=>{gu(i,e,!0,s)}),n&&s&&e(t)}function og(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ms(t){return new se(t.parent===null?t.name:ms(t.parent)+"/"+t.name)}function pr(t){t.parent!==null&&lg(t.parent,t.name,t)}function lg(t,e,n){const s=rg(n),i=_t(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,pr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,pr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=/[\[\].#$\/\u0000-\u001F\u007F]/,cg=/[\[\].#$\u0000-\u001F\u007F]/,Mi=10*1024*1024,yu=function(t){return typeof t=="string"&&t.length!==0&&!ag.test(t)},vu=function(t){return typeof t=="string"&&t.length!==0&&!cg.test(t)},ug=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vu(t)},Cu=function(t,e,n){const s=n instanceof se?new S_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ut(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ut(s)+" with contents = "+e.toString());if(mc(e))throw new Error(t+"contains "+e.toString()+" "+Ut(s));if(typeof e=="string"&&e.length>Mi/3&&oi(e)>Mi)throw new Error(t+"contains a string greater than "+Mi+" utf8 bytes "+Ut(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!yu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ut(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);N_(s,o),Cu(t,l,s),x_(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ut(s)+" in addition to actual children.")}},Eu=function(t,e,n,s){if(!(s&&n===void 0)&&!vu(n))throw new Error(oc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hg=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Eu(t,e,n,s)},fg=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ug(n))throw new Error(oc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pg(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Bc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Mt(t,e,n){pg(t,n),_g(t,s=>Xe(s,e)||Xe(e,s))}function _g(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(mg(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mg(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Yt&&Re("event: "+n.toString()),fs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="repo_interrupt",yg=25;class vg{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$s(),this.transactionQueueTree_=new fo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Cg(t,e,n){if(t.stats_=Yr(t.repoInfo_),t.forceRestClient_||Qp())t.server_=new Us(t.repoInfo_,(s,i,r,o)=>{Yl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ht(t.repoInfo_,e,(s,i,r,o)=>{Yl(t,s,i,r,o)},s=>{Gl(t,s)},s=>{bg(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=n_(t.repoInfo_,()=>new em(t.stats_,t.server_)),t.infoData_=new G_,t.infoSyncTree_=new ql({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=ps(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),_o(t,"connected",!1),t.serverSyncTree_=new ql({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Mt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Eg(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function bu(t){return eg({timestamp:Eg(t)})}function Yl(t,e,n,s,i){t.dataUpdateCount++;const r=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ls(n,c=>Se(c));o=zm(t.serverSyncTree_,r,a,i)}else{const a=Se(n);o=uu(t.serverSyncTree_,r,a,i)}else if(s){const a=Ls(n,c=>Se(c));o=Vm(t.serverSyncTree_,r,a)}else{const a=Se(n);o=ps(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=yo(t,r)),Mt(t.eventQueue_,l,o)}function Gl(t,e){_o(t,"connected",e),e===!1&&Tg(t)}function bg(t,e){Fe(e,(n,s)=>{_o(t,n,s)})}function _o(t,e,n){const s=new se("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(s,i);const r=ps(t.infoSyncTree_,s,i);Mt(t.eventQueue_,s,r)}function wg(t){return t.nextWriteId_++}function Ig(t,e,n){const s=Gm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Se(i).withIndex(e._queryParams.getIndex());Ym(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ps(t.serverSyncTree_,e._path,r);else{const l=os(t.serverSyncTree_,e);o=uu(t.serverSyncTree_,e._path,r,l)}return Mt(t.eventQueue_,e._path,o),cu(t.serverSyncTree_,e,n,null,!0),r},i=>(mo(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function Tg(t){mo(t,"onDisconnectEvents");const e=bu(t),n=$s();cr(t.onDisconnect_,z(),(i,r)=>{const o=sg(i,r,t.serverSyncTree_,e);zc(n,i,o)});let s=[];cr(n,z(),(i,r)=>{s=s.concat(ps(t.serverSyncTree_,i,r));const o=kg(t,i);yo(t,o)}),t.onDisconnect_=$s(),Mt(t.eventQueue_,z(),s)}function Sg(t){t.persistentConnection_&&t.persistentConnection_.interrupt(gg)}function mo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function wu(t,e,n){return hu(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function go(t,e=t.transactionQueueTree_){if(e||pi(t,e),An(e)){const n=Tu(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ng(t,ms(e),n)}else mu(e)&&di(e,n=>{go(t,n)})}function Ng(t,e,n){const s=n.map(c=>c.currentWriteId),i=wu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];b(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=De(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{mo(t,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(fn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();pi(t,po(t.transactionQueueTree_,e)),go(t,t.transactionQueueTree_),Mt(t.eventQueue_,e,h);for(let f=0;f<u.length;f++)fs(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{He("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}yo(t,e)}},o)}function yo(t,e){const n=Iu(t,e),s=ms(n),i=Tu(t,n);return xg(t,i,s),s}function xg(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=De(n,a.path);let h=!1,u;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,u=a.abortReason,i=i.concat(fn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=yg)h=!0,u="maxretry",i=i.concat(fn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=wu(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Cu("transaction failed: Data returned ",_,a.path);let y=Se(_);typeof _=="object"&&_!=null&&_t(_,".priority")||(y=y.updatePriority(f.getPriority()));const N=a.currentWriteId,M=bu(t),k=ig(y,f,M);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=k,a.currentWriteId=wg(t),o.splice(o.indexOf(N),1),i=i.concat($m(t.serverSyncTree_,a.path,k,a.currentWriteId,a.applyLocally)),i=i.concat(fn(t.serverSyncTree_,N,!0))}else h=!0,u="nodata",i=i.concat(fn(t.serverSyncTree_,a.currentWriteId,!0))}Mt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}pi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)fs(s[l]);go(t,t.transactionQueueTree_)}function Iu(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&An(s)===void 0;)s=po(s,n),e=le(e),n=$(e);return s}function Tu(t,e){const n=[];return Su(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Su(t,e,n){const s=An(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);di(e,i=>{Su(t,i,n)})}function pi(t,e){const n=An(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,_u(e,n.length>0?n:void 0)}di(e,s=>{pi(t,s)})}function kg(t,e){const n=ms(Iu(t,e)),s=po(t.transactionQueueTree_,e);return og(s,i=>{Li(t,i)}),Li(t,s),gu(s,i=>{Li(t,i)}),n}function Li(t,e){const n=An(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_u(e,void 0):n.length=r+1,Mt(t.eventQueue_,ms(e),i);for(let o=0;o<s.length;o++)fs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ag(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ql=function(t,e){const n=Pg(t),s=n.namespace;n.domain==="firebase.com"&&Xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Wp();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Zp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new se(n.pathString)}},Pg=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=Rg(t.substring(h,u)));const f=Ag(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class Dg{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return W(this._path)?null:Lc(this._path)}get ref(){return new mt(this._repo,this._path)}get _queryIdentifier(){const e=Ml(this._queryParams),n=qr(e);return n==="{}"?"default":n}get _queryObject(){return Ml(this._queryParams)}isEqual(e){if(e=li(e),!(e instanceof vo))return!1;const n=this._repo===e._repo,s=Bc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+T_(this._path)}}class mt extends vo{constructor(e,n){super(e,n,new Zr,!1)}get parent(){const e=jc(this._path);return e===null?null:new mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ls{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),s=_r(this.ref,e);return new ls(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ls(i,_r(this.ref,s),_e)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Lg(t,e){return t=li(t),t._checkNotDeleted("ref"),e!==void 0?_r(t._root,e):t._root}function _r(t,e){return t=li(t),$(t._path)===null?hg("child","path",e,!1):Eu("child","path",e,!1),new mt(t._repo,Ce(t._path,e))}function Fg(t){t=li(t);const e=new Mg(()=>{}),n=new Co(e);return Ig(t._repo,t,n).then(s=>new ls(s,new mt(t._repo,t._path),t._queryParams.getIndex()))}class Co{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Og("value",this,new ls(e.snapshotNode,new mt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Dg(this,e,n):null}matches(e){return e instanceof Co?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Mm(mt);Hm(mt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="FIREBASE_DATABASE_EMULATOR_HOST",mr={};let Bg=!1;function Hg(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ql(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[jg]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Ql(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new or(or.OWNER):new Jp(t.name,t.options,e);fg("Invalid Firebase Database URL",o),W(o.path)||Xt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Ug(l,t,h,new Xp(t.name,n));return new $g(u,t)}function Wg(t,e){const n=mr[e];(!n||n[t.key]!==t)&&Xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Sg(t),delete n[t.key]}function Ug(t,e,n,s){let i=mr[e.name];i||(i={},mr[e.name]=i);let r=i[t.toURLString()];return r&&Xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vg(t,Bg,n,s),i[t.toURLString()]=r,r}class $g{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Cg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new mt(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Wg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xt("Cannot call "+e+" on a deleted database.")}}function Vg(t=Ip(),e){return vp(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){Lp(bp),js(new Jn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Hg(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),yn(yl,vl,t),yn(yl,vl,"esm2017")}ht.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ht.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Kg();let ot=dt({title:"Japanese Jisho",words:!1,search:""}),me=dt([{name:"Nav",visible:!1},{name:"Japanese Jisho",visible:!0},{name:"Dictionary",visible:!1},{name:"Word lists",visible:!1},{name:"Kana table",visible:!1},{name:"Kanji table",visible:!1},{name:"Settings",visible:!1}]),qg=dt([{kana:"\u3042",romaji:"a"},{kana:"\u3044",romaji:"i"},{kana:"\u3046",romaji:"u"},{kana:"\u3048",romaji:"e"},{kana:"\u304A",romaji:"o"},{kana:"\u304B",romaji:"ka"},{kana:"\u304D",romaji:"ki"},{kana:"\u304F",romaji:"ku"},{kana:"\u3051",romaji:"ke"},{kana:"\u3053",romaji:"ko"},{kana:"\u3055",romaji:"sa"},{kana:"\u3057",romaji:"shi"},{kana:"\u3059",romaji:"su"},{kana:"\u305B",romaji:"se"},{kana:"\u305D",romaji:"so"},{kana:"\u305F",romaji:"ta"},{kana:"\u3061",romaji:"chi"},{kana:"\u3064",romaji:"tsu"},{kana:"\u3066",romaji:"te"},{kana:"\u3068",romaji:"to"},{kana:"\u306A",romaji:"na"},{kana:"\u306B",romaji:"ni"},{kana:"\u306C",romaji:"nu"},{kana:"\u306D",romaji:"ne"},{kana:"\u306E",romaji:"no"},{kana:"\u306F",romaji:"ha"},{kana:"\u3072",romaji:"hi"},{kana:"\u3075",romaji:"fu"},{kana:"\u3078",romaji:"he"},{kana:"\u307B",romaji:"ho"},{kana:"\u307E",romaji:"ma"},{kana:"\u307F",romaji:"mi"},{kana:"\u3080",romaji:"mu"},{kana:"\u3081",romaji:"me"},{kana:"\u3082",romaji:"mo"},{kana:"\u3084",romaji:"ya"},{kana:"\u3086",romaji:"yu"},{kana:"\u3088",romaji:"yo"},{kana:"\u3089",romaji:"ra"},{kana:"\u308A",romaji:"ri"},{kana:"\u308B",romaji:"ru"},{kana:"\u308C",romaji:"re"},{kana:"\u308D",romaji:"ro"},{kana:"\u308F",romaji:"wa"},{kana:"\u3092",romaji:"wo"},{kana:"\u3093",romaji:"n"},{kana:"\u304C",romaji:"ga"},{kana:"\u304E",romaji:"gi"},{kana:"\u3050",romaji:"gu"},{kana:"\u3052",romaji:"ge"},{kana:"\u3054",romaji:"go"},{kana:"\u3056",romaji:"za"},{kana:"\u3058",romaji:"ji"},{kana:"\u305A",romaji:"zu"},{kana:"\u305C",romaji:"ze"},{kana:"\u305E",romaji:"zo"},{kana:"\u3060",romaji:"da"},{kana:"\u3062",romaji:"di"},{kana:"\u3065",romaji:"du"},{kana:"\u3067",romaji:"de"},{kana:"\u3069",romaji:"do"},{kana:"\u3070",romaji:"ba"},{kana:"\u3073",romaji:"bi"},{kana:"\u3076",romaji:"bu"},{kana:"\u3079",romaji:"be"},{kana:"\u307C",romaji:"bo"},{kana:"\u3071",romaji:"pa"},{kana:"\u3074",romaji:"pi"},{kana:"\u3077",romaji:"pu"},{kana:"\u307A",romaji:"pe"},{kana:"\u307D",romaji:"po"}]),zg=dt([{kana:"\u30A2",romaji:"a"},{kana:"\u30A4",romaji:"i"},{kana:"\u30A6",romaji:"u"},{kana:"\u30A8",romaji:"e"},{kana:"\u30AA",romaji:"o"},{kana:"\u30AB",romaji:"ka"},{kana:"\u30AD",romaji:"ki"},{kana:"\u30AF",romaji:"ku"},{kana:"\u30B1",romaji:"ke"},{kana:"\u30B3",romaji:"ko"},{kana:"\u30B5",romaji:"sa"},{kana:"\u30B7",romaji:"shi"},{kana:"\u30B9",romaji:"su"},{kana:"\u30BB",romaji:"se"},{kana:"\u30BD",romaji:"so"},{kana:"\u30BF",romaji:"ta"},{kana:"\u30C1",romaji:"chi"},{kana:"\u30C4",romaji:"tsu"},{kana:"\u30C6",romaji:"te"},{kana:"\u30C8",romaji:"to"},{kana:"\u30CA",romaji:"na"},{kana:"\u30CB",romaji:"ni"},{kana:"\u30CC",romaji:"nu"},{kana:"\u30CD",romaji:"ne"},{kana:"\u30CE",romaji:"no"},{kana:"\u30CF",romaji:"ha"},{kana:"\u30D2",romaji:"hi"},{kana:"\u30D5",romaji:"fu"},{kana:"\u30D8",romaji:"he"},{kana:"\u30DB",romaji:"ho"},{kana:"\u30DE",romaji:"ma"},{kana:"\u30DF",romaji:"mi"},{kana:"\u30E0",romaji:"mu"},{kana:"\u30E1",romaji:"me"},{kana:"\u30E2",romaji:"mo"},{kana:"\u30E4",romaji:"ya"},{kana:"\u30E6",romaji:"yu"},{kana:"\u30E8",romaji:"yo"},{kana:"\u30E9",romaji:"ra"},{kana:"\u30EA",romaji:"ri"},{kana:"\u30EB",romaji:"ru"},{kana:"\u30EC",romaji:"re"},{kana:"\u30ED",romaji:"ro"},{kana:"\u30EF",romaji:"wa"},{kana:"\u30F2",romaji:"wo"},{kana:"\u30F3",romaji:"n"},{kana:"\u30AC",romaji:"ga"},{kana:"\u30AE",romaji:"gi"},{kana:"\u30B0",romaji:"gu"},{kana:"\u30B2",romaji:"ge"},{kana:"\u30B4",romaji:"go"},{kana:"\u30B6",romaji:"za"},{kana:"\u30B8",romaji:"ji"},{kana:"\u30BA",romaji:"zu"},{kana:"\u30BC",romaji:"ze"},{kana:"\u30BE",romaji:"zo"},{kana:"\u30C0",romaji:"da"},{kana:"\u30C2",romaji:"di"},{kana:"\u30C5",romaji:"du"},{kana:"\u30C7",romaji:"de"},{kana:"\u30C9",romaji:"do"},{kana:"\u30D0",romaji:"ba"},{kana:"\u30D3",romaji:"bi"},{kana:"\u30D6",romaji:"bu"},{kana:"\u30D9",romaji:"be"},{kana:"\u30DC",romaji:"bo"},{kana:"\u30D1",romaji:"pa"},{kana:"\u30D4",romaji:"pi"},{kana:"\u30D7",romaji:"pu"},{kana:"\u30DA",romaji:"pe"},{kana:"\u30DD",romaji:"po"}]);const Pn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Yg={key:0,class:"menu"},Gg={class:"menu_options"},Qg={__name:"Nav",setup(t){function e(n){for(let s=1;s<me.length-1;s++)me[s].visible=!1;ot.words=!1,me[n].visible=!0,ot.title=me[n].name,me[0].visible=!me[0].visible}return(n,s)=>(G(),Hr(Ur,null,{default:Mr(()=>[pe(me)[0].visible===!0?(G(),ee("div",Yg,[ne("div",Gg,[ne("span",{onClick:s[0]||(s[0]=i=>e(1))},"Home"),ne("span",{onClick:s[1]||(s[1]=i=>e(2))},"Dictionary"),ne("span",{onClick:s[2]||(s[2]=i=>e(3))},"Word lists"),ne("span",{onClick:s[3]||(s[3]=i=>e(4))},"Kana table"),ne("span",{onClick:s[4]||(s[4]=i=>e(5))},"Kanji table"),ne("span",{onClick:s[5]||(s[5]=i=>e(6))},"Settings")])])):qe("",!0)]),_:1}))}},Xg=Pn(Qg,[["__scopeId","data-v-03a2ef10"]]);const Jg={__name:"Home",setup(t){function e(n){for(let s=1;s<me.length-1;s++)me[s].visible=!1;me[n].visible=!0,ot.title=me[n].name}return(n,s)=>(G(),ee(ge,null,[ne("div",{class:"menu-item",onClick:s[0]||(s[0]=i=>e(2))},"Dictionary"),ne("div",{class:"menu-item",onClick:s[1]||(s[1]=i=>e(3))},"Word lists"),ne("div",{class:"menu-item",onClick:s[2]||(s[2]=i=>e(4))},"Kana table"),ne("div",{class:"menu-item",onClick:s[3]||(s[3]=i=>e(5))},"Kanji table")],64))}},Zg=Pn(Jg,[["__scopeId","data-v-dfa6d42a"]]);const ey=["onKeydown"],ty={__name:"Dictionary",setup(t){let e=dt({val:""});function n(){ot.search=e.val,console.log(ot.search),ot.words=!0}function s(){ot.words=!1}return(i,r)=>(G(),ee("div",null,[Jh(ne("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>pe(e).val=o),onKeydown:[ol(n,["enter"]),ol(s,["delete"])],onClick:s,placeholder:"search"},null,40,ey),[[id,pe(e).val]])]))}},ny=Pn(ty,[["__scopeId","data-v-73a21b29"]]);const sy={style:{float:"right","margin-right":"5px",color:"#d90429"}},iy={class:"grid"},ry={class:"kana"},oy={__name:"Kana",setup(t){let e=dt({switch:!0});return(n,s)=>(G(),ee(ge,null,[ne("div",{class:"kana-type",onClick:s[0]||(s[0]=i=>pe(e).switch=!pe(e).switch)},[ne("span",null,bt(pe(e).switch?"Hiragana":"Katakana"),1),ne("span",sy,bt(pe(e).switch?"Katakana":"Hiragana"),1)]),ne("div",iy,[(G(!0),ee(ge,null,cn(pe(e).switch?pe(qg):pe(zg),i=>(G(),ee("div",ry,[ne("span",null,bt(i.kana),1)]))),256))])],64))}},ly=Pn(oy,[["__scopeId","data-v-30c1cd21"]]);const ay={class:"word"},cy={class:"kanji"},uy={key:0},hy={class:"kana"},fy={key:0},dy={class:"meaning"},py={__name:"Word",async setup(t){let e,n,s;[e,n]=Af(()=>Fg(ky).then(r=>{r.exists()&&(s=r.val(),console.log(r.val()))}).catch(r=>{console.error(r)})),await e,n();let i=[];for(let r=0;r<s.words.length;r++){let o=0;s.words[r].sense[0].gloss[0].text===ot.search&&(i[o]=s.words[r],o++)}return console.log(i),(r,o)=>(G(!0),ee(ge,null,cn(pe(i),l=>(G(),ee("div",ay,[ne("div",cy,[(G(!0),ee(ge,null,cn(l.kanji,(a,c)=>(G(),ee("div",null,[c===0?(G(),ee("span",uy,bt(a.text),1)):qe("",!0)]))),256))]),ne("div",hy,[(G(!0),ee(ge,null,cn(l.kana,(a,c)=>(G(),ee("div",null,[c===0?(G(),ee("span",fy,bt(a.text),1)):qe("",!0)]))),256))]),ne("div",dy,[(G(!0),ee(ge,null,cn(l.sense,a=>(G(),ee("div",null,[(G(!0),ee(ge,null,cn(a.gloss,c=>(G(),ee("div",null,[ne("span",null,bt(c.text),1)]))),256))]))),256))])]))),256))}},_y=Pn(py,[["__scopeId","data-v-940277b4"]]);const my={key:0},gy={class:"header"},yy={class:"grid"},vy={key:0},Cy={key:1},Ey={key:2},by={key:3},wy={key:4},Iy={key:5},Ty={key:0},Sy={__name:"App",setup(t){function e(){me[0].visible=!me[0].visible}return(n,s)=>(G(),ee(ge,null,[pe(me)[0].visible?(G(),ee("div",my,[ye(Xg)])):qe("",!0),ne("div",gy,[ne("span",{class:"burger",onClick:e},bt(pe(me)[0].visible?"\u292B":"="),1),ne("span",null,bt(pe(ot).title),1)]),ne("div",yy,[pe(me)[1].visible?(G(),ee("div",vy,[ye(Zg)])):qe("",!0),pe(me)[2].visible?(G(),ee("div",Cy,[ye(ny)])):qe("",!0),pe(me)[3].visible?(G(),ee("div",Ey)):qe("",!0),pe(me)[4].visible?(G(),ee("div",by,[ye(ly)])):qe("",!0),pe(me)[5].visible?(G(),ee("div",wy)):qe("",!0),pe(me)[6].visible?(G(),ee("div",Iy)):qe("",!0),(G(),Hr(Ph,null,{default:Mr(()=>[pe(ot).words?(G(),ee("div",Ty,[ye(_y)])):qe("",!0)]),_:1}))])],64))}},Ny=Pn(Sy,[["__scopeId","data-v-97646b6a"]]),xy={apiKey:"AIzaSyC_nmckRuqsvaOyYwu-RwP82q8f5vFpqLE",authDomain:"japanesejisho.firebaseapp.com",databaseURL:"https://japanesejisho-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"japanesejisho",storageBucket:"japanesejisho.appspot.com",messagingSenderId:"255107822451",appId:"1:255107822451:web:5f719e8be86c97d0478b06"};wp(xy);const ky=Lg(Vg());ad(Ny).mount("#app");
