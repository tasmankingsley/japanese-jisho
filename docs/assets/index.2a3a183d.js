(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function wo(a,e){const n=Object.create(null),i=a.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Ou="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Du=wo(Ou);function rd(a){return!!a||a===""}function xo(a){if(O(a)){const e={};for(let n=0;n<a.length;n++){const i=a[n],r=we(i)?qu(i):xo(i);if(r)for(const o in r)e[o]=r[o]}return e}else{if(we(a))return a;if(le(a))return a}}const Fu=/;(?![^(]*\))/g,Lu=/:(.+)/;function qu(a){const e={};return a.split(Fu).forEach(n=>{if(n){const i=n.split(Lu);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Co(a){let e="";if(we(a))e=a;else if(O(a))for(let n=0;n<a.length;n++){const i=Co(a[n]);i&&(e+=i+" ")}else if(le(a))for(const n in a)a[n]&&(e+=n+" ");return e.trim()}const We=a=>we(a)?a:a==null?"":O(a)||le(a)&&(a.toString===sd||!q(a.toString))?JSON.stringify(a,od,2):String(a),od=(a,e)=>e&&e.__v_isRef?od(a,e.value):hn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:td(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!O(e)&&!dd(e)?String(e):e,ne={},pn=[],ea=()=>{},Bu=()=>!1,Hu=/^on[^a-z]/,ar=a=>Hu.test(a),Eo=a=>a.startsWith("onUpdate:"),Te=Object.assign,Io=(a,e)=>{const n=a.indexOf(e);n>-1&&a.splice(n,1)},Wu=Object.prototype.hasOwnProperty,U=(a,e)=>Wu.call(a,e),O=Array.isArray,hn=a=>nr(a)==="[object Map]",td=a=>nr(a)==="[object Set]",q=a=>typeof a=="function",we=a=>typeof a=="string",To=a=>typeof a=="symbol",le=a=>a!==null&&typeof a=="object",So=a=>le(a)&&q(a.then)&&q(a.catch),sd=Object.prototype.toString,nr=a=>sd.call(a),$u=a=>nr(a).slice(8,-1),dd=a=>nr(a)==="[object Object]",No=a=>we(a)&&a!=="NaN"&&a[0]!=="-"&&""+parseInt(a,10)===a,Ii=wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ir=a=>{const e=Object.create(null);return n=>e[n]||(e[n]=a(n))},Uu=/-(\w)/g,wn=ir(a=>a.replace(Uu,(e,n)=>n?n.toUpperCase():"")),Ku=/\B([A-Z])/g,on=ir(a=>a.replace(Ku,"-$1").toLowerCase()),md=ir(a=>a.charAt(0).toUpperCase()+a.slice(1)),wr=ir(a=>a?`on${md(a)}`:""),Ri=(a,e)=>!Object.is(a,e),Ti=(a,e)=>{for(let n=0;n<a.length;n++)a[n](e)},Ai=(a,e,n)=>{Object.defineProperty(a,e,{configurable:!0,enumerable:!1,value:n})},Vn=a=>{const e=parseFloat(a);return isNaN(e)?a:e};let At;const Vu=()=>At||(At=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ra;class Yu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ra&&(this.parent=ra,this.index=(ra.scopes||(ra.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ra;try{return ra=this,e()}finally{ra=n}}}on(){ra=this}off(){ra=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Gu(a,e=ra){e&&e.active&&e.effects.push(a)}const zo=a=>{const e=new Set(a);return e.w=0,e.n=0,e},ud=a=>(a.w&Na)>0,ld=a=>(a.n&Na)>0,Ju=({deps:a})=>{if(a.length)for(let e=0;e<a.length;e++)a[e].w|=Na},Qu=a=>{const{deps:e}=a;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];ud(r)&&!ld(r)?r.delete(a):e[n++]=r,r.w&=~Na,r.n&=~Na}e.length=n}},Hr=new WeakMap;let Bn=0,Na=1;const Wr=30;let Ye;const Ja=Symbol(""),$r=Symbol("");class Ro{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Gu(this,i)}run(){if(!this.active)return this.fn();let e=Ye,n=xa;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ye,Ye=this,xa=!0,Na=1<<++Bn,Bn<=Wr?Ju(this):Pt(this),this.fn()}finally{Bn<=Wr&&Qu(this),Na=1<<--Bn,Ye=this.parent,xa=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ye===this?this.deferStop=!0:this.active&&(Pt(this),this.onStop&&this.onStop(),this.active=!1)}}function Pt(a){const{deps:e}=a;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(a);e.length=0}}let xa=!0;const _d=[];function Sn(){_d.push(xa),xa=!1}function Nn(){const a=_d.pop();xa=a===void 0?!0:a}function Be(a,e,n){if(xa&&Ye){let i=Hr.get(a);i||Hr.set(a,i=new Map);let r=i.get(n);r||i.set(n,r=zo()),kd(r)}}function kd(a,e){let n=!1;Bn<=Wr?ld(a)||(a.n|=Na,n=!ud(a)):n=!a.has(Ye),n&&(a.add(Ye),Ye.deps.push(a))}function pa(a,e,n,i,r,o){const t=Hr.get(a);if(!t)return;let s=[];if(e==="clear")s=[...t.values()];else if(n==="length"&&O(a))t.forEach((d,m)=>{(m==="length"||m>=i)&&s.push(d)});else switch(n!==void 0&&s.push(t.get(n)),e){case"add":O(a)?No(n)&&s.push(t.get("length")):(s.push(t.get(Ja)),hn(a)&&s.push(t.get($r)));break;case"delete":O(a)||(s.push(t.get(Ja)),hn(a)&&s.push(t.get($r)));break;case"set":hn(a)&&s.push(t.get(Ja));break}if(s.length===1)s[0]&&Ur(s[0]);else{const d=[];for(const m of s)m&&d.push(...m);Ur(zo(d))}}function Ur(a,e){const n=O(a)?a:[...a];for(const i of n)i.computed&&Mt(i);for(const i of n)i.computed||Mt(i)}function Mt(a,e){(a!==Ye||a.allowRecurse)&&(a.scheduler?a.scheduler():a.run())}const Xu=wo("__proto__,__v_isRef,__isVue"),cd=new Set(Object.getOwnPropertyNames(Symbol).filter(a=>a!=="arguments"&&a!=="caller").map(a=>Symbol[a]).filter(To)),Zu=Ao(),el=Ao(!1,!0),al=Ao(!0),Ot=nl();function nl(){const a={};return["includes","indexOf","lastIndexOf"].forEach(e=>{a[e]=function(...n){const i=Z(this);for(let o=0,t=this.length;o<t;o++)Be(i,"get",o+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{a[e]=function(...n){Sn();const i=Z(this)[e].apply(this,n);return Nn(),i}}),a}function Ao(a=!1,e=!1){return function(i,r,o){if(r==="__v_isReactive")return!a;if(r==="__v_isReadonly")return a;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&o===(a?e?yl:fd:e?yd:gd).get(i))return i;const t=O(i);if(!a&&t&&U(Ot,r))return Reflect.get(Ot,r,o);const s=Reflect.get(i,r,o);return(To(r)?cd.has(r):Xu(r))||(a||Be(i,"get",r),e)?s:Ae(s)?t&&No(r)?s:s.value:le(s)?a?jd(s):da(s):s}}const il=pd(),rl=pd(!0);function pd(a=!1){return function(n,i,r,o){let t=n[i];if(Yn(t)&&Ae(t)&&!Ae(r))return!1;if(!a&&(!Kr(r)&&!Yn(r)&&(t=Z(t),r=Z(r)),!O(n)&&Ae(t)&&!Ae(r)))return t.value=r,!0;const s=O(n)&&No(i)?Number(i)<n.length:U(n,i),d=Reflect.set(n,i,r,o);return n===Z(o)&&(s?Ri(r,t)&&pa(n,"set",i,r):pa(n,"add",i,r)),d}}function ol(a,e){const n=U(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&n&&pa(a,"delete",e,void 0),i}function tl(a,e){const n=Reflect.has(a,e);return(!To(e)||!cd.has(e))&&Be(a,"has",e),n}function sl(a){return Be(a,"iterate",O(a)?"length":Ja),Reflect.ownKeys(a)}const hd={get:Zu,set:il,deleteProperty:ol,has:tl,ownKeys:sl},dl={get:al,set(a,e){return!0},deleteProperty(a,e){return!0}},ml=Te({},hd,{get:el,set:rl}),Po=a=>a,rr=a=>Reflect.getPrototypeOf(a);function fi(a,e,n=!1,i=!1){a=a.__v_raw;const r=Z(a),o=Z(e);n||(e!==o&&Be(r,"get",e),Be(r,"get",o));const{has:t}=rr(r),s=i?Po:n?Fo:Do;if(t.call(r,e))return s(a.get(e));if(t.call(r,o))return s(a.get(o));a!==r&&a.get(e)}function ji(a,e=!1){const n=this.__v_raw,i=Z(n),r=Z(a);return e||(a!==r&&Be(i,"has",a),Be(i,"has",r)),a===r?n.has(a):n.has(a)||n.has(r)}function bi(a,e=!1){return a=a.__v_raw,!e&&Be(Z(a),"iterate",Ja),Reflect.get(a,"size",a)}function Dt(a){a=Z(a);const e=Z(this);return rr(e).has.call(e,a)||(e.add(a),pa(e,"add",a,a)),this}function Ft(a,e){e=Z(e);const n=Z(this),{has:i,get:r}=rr(n);let o=i.call(n,a);o||(a=Z(a),o=i.call(n,a));const t=r.call(n,a);return n.set(a,e),o?Ri(e,t)&&pa(n,"set",a,e):pa(n,"add",a,e),this}function Lt(a){const e=Z(this),{has:n,get:i}=rr(e);let r=n.call(e,a);r||(a=Z(a),r=n.call(e,a)),i&&i.call(e,a);const o=e.delete(a);return r&&pa(e,"delete",a,void 0),o}function qt(){const a=Z(this),e=a.size!==0,n=a.clear();return e&&pa(a,"clear",void 0,void 0),n}function vi(a,e){return function(i,r){const o=this,t=o.__v_raw,s=Z(t),d=e?Po:a?Fo:Do;return!a&&Be(s,"iterate",Ja),t.forEach((m,l)=>i.call(r,d(m),d(l),o))}}function wi(a,e,n){return function(...i){const r=this.__v_raw,o=Z(r),t=hn(o),s=a==="entries"||a===Symbol.iterator&&t,d=a==="keys"&&t,m=r[a](...i),l=n?Po:e?Fo:Do;return!e&&Be(o,"iterate",d?$r:Ja),{next(){const{value:u,done:_}=m.next();return _?{value:u,done:_}:{value:s?[l(u[0]),l(u[1])]:l(u),done:_}},[Symbol.iterator](){return this}}}}function ja(a){return function(...e){return a==="delete"?!1:this}}function ul(){const a={get(o){return fi(this,o)},get size(){return bi(this)},has:ji,add:Dt,set:Ft,delete:Lt,clear:qt,forEach:vi(!1,!1)},e={get(o){return fi(this,o,!1,!0)},get size(){return bi(this)},has:ji,add:Dt,set:Ft,delete:Lt,clear:qt,forEach:vi(!1,!0)},n={get(o){return fi(this,o,!0)},get size(){return bi(this,!0)},has(o){return ji.call(this,o,!0)},add:ja("add"),set:ja("set"),delete:ja("delete"),clear:ja("clear"),forEach:vi(!0,!1)},i={get(o){return fi(this,o,!0,!0)},get size(){return bi(this,!0)},has(o){return ji.call(this,o,!0)},add:ja("add"),set:ja("set"),delete:ja("delete"),clear:ja("clear"),forEach:vi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{a[o]=wi(o,!1,!1),n[o]=wi(o,!0,!1),e[o]=wi(o,!1,!0),i[o]=wi(o,!0,!0)}),[a,n,e,i]}const[ll,_l,kl,cl]=ul();function Mo(a,e){const n=e?a?cl:kl:a?_l:ll;return(i,r,o)=>r==="__v_isReactive"?!a:r==="__v_isReadonly"?a:r==="__v_raw"?i:Reflect.get(U(n,r)&&r in i?n:i,r,o)}const pl={get:Mo(!1,!1)},hl={get:Mo(!1,!0)},gl={get:Mo(!0,!1)},gd=new WeakMap,yd=new WeakMap,fd=new WeakMap,yl=new WeakMap;function fl(a){switch(a){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jl(a){return a.__v_skip||!Object.isExtensible(a)?0:fl($u(a))}function da(a){return Yn(a)?a:Oo(a,!1,hd,pl,gd)}function bl(a){return Oo(a,!1,ml,hl,yd)}function jd(a){return Oo(a,!0,dl,gl,fd)}function Oo(a,e,n,i,r){if(!le(a)||a.__v_raw&&!(e&&a.__v_isReactive))return a;const o=r.get(a);if(o)return o;const t=jl(a);if(t===0)return a;const s=new Proxy(a,t===2?i:n);return r.set(a,s),s}function gn(a){return Yn(a)?gn(a.__v_raw):!!(a&&a.__v_isReactive)}function Yn(a){return!!(a&&a.__v_isReadonly)}function Kr(a){return!!(a&&a.__v_isShallow)}function bd(a){return gn(a)||Yn(a)}function Z(a){const e=a&&a.__v_raw;return e?Z(e):a}function vd(a){return Ai(a,"__v_skip",!0),a}const Do=a=>le(a)?da(a):a,Fo=a=>le(a)?jd(a):a;function vl(a){xa&&Ye&&(a=Z(a),kd(a.dep||(a.dep=zo())))}function wl(a,e){a=Z(a),a.dep&&Ur(a.dep)}function Ae(a){return!!(a&&a.__v_isRef===!0)}function ce(a){return Ae(a)?a.value:a}const xl={get:(a,e,n)=>ce(Reflect.get(a,e,n)),set:(a,e,n,i)=>{const r=a[e];return Ae(r)&&!Ae(n)?(r.value=n,!0):Reflect.set(a,e,n,i)}};function wd(a){return gn(a)?a:new Proxy(a,xl)}var xd;class Cl{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[xd]=!1,this._dirty=!0,this.effect=new Ro(e,()=>{this._dirty||(this._dirty=!0,wl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Z(this);return vl(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}xd="__v_isReadonly";function El(a,e,n=!1){let i,r;const o=q(a);return o?(i=a,r=ea):(i=a.get,r=a.set),new Cl(i,r,o||!r,n)}function Ca(a,e,n,i){let r;try{r=i?a(...i):a()}catch(o){mi(o,e,n)}return r}function Ue(a,e,n,i){if(q(a)){const o=Ca(a,e,n,i);return o&&So(o)&&o.catch(t=>{mi(t,e,n)}),o}const r=[];for(let o=0;o<a.length;o++)r.push(Ue(a[o],e,n,i));return r}function mi(a,e,n,i=!0){const r=e?e.vnode:null;if(e){let o=e.parent;const t=e.proxy,s=n;for(;o;){const m=o.ec;if(m){for(let l=0;l<m.length;l++)if(m[l](a,t,s)===!1)return}o=o.parent}const d=e.appContext.config.errorHandler;if(d){Ca(d,null,10,[a,t,s]);return}}Il(a,n,r,i)}function Il(a,e,n,i=!0){console.error(a)}let Pi=!1,Vr=!1;const ze=[];let ta=0;const yn=[];let la=null,Ua=0;const Cd=Promise.resolve();let Lo=null;function Tl(a){const e=Lo||Cd;return a?e.then(this?a.bind(this):a):e}function Sl(a){let e=ta+1,n=ze.length;for(;e<n;){const i=e+n>>>1;Gn(ze[i])<a?e=i+1:n=i}return e}function qo(a){(!ze.length||!ze.includes(a,Pi&&a.allowRecurse?ta+1:ta))&&(a.id==null?ze.push(a):ze.splice(Sl(a.id),0,a),Ed())}function Ed(){!Pi&&!Vr&&(Vr=!0,Lo=Cd.then(Sd))}function Nl(a){const e=ze.indexOf(a);e>ta&&ze.splice(e,1)}function Id(a){O(a)?yn.push(...a):(!la||!la.includes(a,a.allowRecurse?Ua+1:Ua))&&yn.push(a),Ed()}function Bt(a,e=ta){for(;e<ze.length;e++){const n=ze[e];n&&n.pre&&(ze.splice(e,1),e--,n())}}function Td(a){if(yn.length){const e=[...new Set(yn)];if(yn.length=0,la){la.push(...e);return}for(la=e,la.sort((n,i)=>Gn(n)-Gn(i)),Ua=0;Ua<la.length;Ua++)la[Ua]();la=null,Ua=0}}const Gn=a=>a.id==null?1/0:a.id,zl=(a,e)=>{const n=Gn(a)-Gn(e);if(n===0){if(a.pre&&!e.pre)return-1;if(e.pre&&!a.pre)return 1}return n};function Sd(a){Vr=!1,Pi=!0,ze.sort(zl);const e=ea;try{for(ta=0;ta<ze.length;ta++){const n=ze[ta];n&&n.active!==!1&&Ca(n,null,14)}}finally{ta=0,ze.length=0,Td(),Pi=!1,Lo=null,(ze.length||yn.length)&&Sd()}}function Rl(a,e,...n){if(a.isUnmounted)return;const i=a.vnode.props||ne;let r=n;const o=e.startsWith("update:"),t=o&&e.slice(7);if(t&&t in i){const l=`${t==="modelValue"?"model":t}Modifiers`,{number:u,trim:_}=i[l]||ne;_&&(r=n.map(p=>p.trim())),u&&(r=n.map(Vn))}let s,d=i[s=wr(e)]||i[s=wr(wn(e))];!d&&o&&(d=i[s=wr(on(e))]),d&&Ue(d,a,6,r);const m=i[s+"Once"];if(m){if(!a.emitted)a.emitted={};else if(a.emitted[s])return;a.emitted[s]=!0,Ue(m,a,6,r)}}function Nd(a,e,n=!1){const i=e.emitsCache,r=i.get(a);if(r!==void 0)return r;const o=a.emits;let t={},s=!1;if(!q(a)){const d=m=>{const l=Nd(m,e,!0);l&&(s=!0,Te(t,l))};!n&&e.mixins.length&&e.mixins.forEach(d),a.extends&&d(a.extends),a.mixins&&a.mixins.forEach(d)}return!o&&!s?(le(a)&&i.set(a,null),null):(O(o)?o.forEach(d=>t[d]=null):Te(t,o),le(a)&&i.set(a,t),t)}function or(a,e){return!a||!ar(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(a,e[0].toLowerCase()+e.slice(1))||U(a,on(e))||U(a,e))}let Je=null,tr=null;function Mi(a){const e=Je;return Je=a,tr=a&&a.type.__scopeId||null,e}function Bo(a){tr=a}function Ho(){tr=null}function Oi(a,e=Je,n){if(!e||a._n)return a;const i=(...r)=>{i._d&&Xt(-1);const o=Mi(e),t=a(...r);return Mi(o),i._d&&Xt(1),t};return i._n=!0,i._c=!0,i._d=!0,i}function xr(a){const{type:e,vnode:n,proxy:i,withProxy:r,props:o,propsOptions:[t],slots:s,attrs:d,emit:m,render:l,renderCache:u,data:_,setupState:p,ctx:y,inheritAttrs:E}=a;let I,M;const S=Mi(a);try{if(n.shapeFlag&4){const W=r||i;I=Ve(l.call(W,W,u,o,p,_,y)),M=d}else{const W=e;I=Ve(W.length>1?W(o,{attrs:d,slots:s,emit:m}):W(o,null)),M=e.props?d:Pl(d)}}catch(W){Hn.length=0,mi(W,a,1),I=ge(Le)}let z=I;if(M&&E!==!1){const W=Object.keys(M),{shapeFlag:J}=z;W.length&&J&7&&(t&&W.some(Eo)&&(M=Ml(M,t)),z=za(z,M))}return n.dirs&&(z=za(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),I=z,Mi(S),I}function Al(a){let e;for(let n=0;n<a.length;n++){const i=a[n];if(Li(i)){if(i.type!==Le||i.children==="v-if"){if(e)return;e=i}}else return}return e}const Pl=a=>{let e;for(const n in a)(n==="class"||n==="style"||ar(n))&&((e||(e={}))[n]=a[n]);return e},Ml=(a,e)=>{const n={};for(const i in a)(!Eo(i)||!(i.slice(9)in e))&&(n[i]=a[i]);return n};function Ol(a,e,n){const{props:i,children:r,component:o}=a,{props:t,children:s,patchFlag:d}=e,m=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&d>=0){if(d&1024)return!0;if(d&16)return i?Ht(i,t,m):!!t;if(d&8){const l=e.dynamicProps;for(let u=0;u<l.length;u++){const _=l[u];if(t[_]!==i[_]&&!or(m,_))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:i===t?!1:i?t?Ht(i,t,m):!0:!!t;return!1}function Ht(a,e,n){const i=Object.keys(e);if(i.length!==Object.keys(a).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==a[o]&&!or(n,o))return!0}return!1}function Wo({vnode:a,parent:e},n){for(;e&&e.subTree===a;)(a=e.vnode).el=n,e=e.parent}const Dl=a=>a.__isSuspense,Fl={name:"Suspense",__isSuspense:!0,process(a,e,n,i,r,o,t,s,d,m){a==null?ql(e,n,i,r,o,t,s,d,m):Bl(a,e,n,i,r,t,s,d,m)},hydrate:Hl,create:$o,normalize:Wl},Ll=Fl;function Jn(a,e){const n=a.props&&a.props[e];q(n)&&n()}function ql(a,e,n,i,r,o,t,s,d){const{p:m,o:{createElement:l}}=d,u=l("div"),_=a.suspense=$o(a,r,i,e,u,n,o,t,s,d);m(null,_.pendingBranch=a.ssContent,u,null,i,_,o,t),_.deps>0?(Jn(a,"onPending"),Jn(a,"onFallback"),m(null,a.ssFallback,e,n,i,null,o,t),fn(_,a.ssFallback)):_.resolve()}function Bl(a,e,n,i,r,o,t,s,{p:d,um:m,o:{createElement:l}}){const u=e.suspense=a.suspense;u.vnode=e,e.el=a.el;const _=e.ssContent,p=e.ssFallback,{activeBranch:y,pendingBranch:E,isInFallback:I,isHydrating:M}=u;if(E)u.pendingBranch=_,sa(_,E)?(d(E,_,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0?u.resolve():I&&(d(y,p,n,i,r,null,o,t,s),fn(u,p))):(u.pendingId++,M?(u.isHydrating=!1,u.activeBranch=E):m(E,r,u),u.deps=0,u.effects.length=0,u.hiddenContainer=l("div"),I?(d(null,_,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0?u.resolve():(d(y,p,n,i,r,null,o,t,s),fn(u,p))):y&&sa(_,y)?(d(y,_,n,i,r,u,o,t,s),u.resolve(!0)):(d(null,_,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0&&u.resolve()));else if(y&&sa(_,y))d(y,_,n,i,r,u,o,t,s),fn(u,_);else if(Jn(e,"onPending"),u.pendingBranch=_,u.pendingId++,d(null,_,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0)u.resolve();else{const{timeout:S,pendingId:z}=u;S>0?setTimeout(()=>{u.pendingId===z&&u.fallback(p)},S):S===0&&u.fallback(p)}}function $o(a,e,n,i,r,o,t,s,d,m,l=!1){const{p:u,m:_,um:p,n:y,o:{parentNode:E,remove:I}}=m,M=Vn(a.props&&a.props.timeout),S={vnode:a,parent:e,parentComponent:n,isSVG:t,container:i,hiddenContainer:r,anchor:o,deps:0,pendingId:0,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:l,isUnmounted:!1,effects:[],resolve(z=!1){const{vnode:W,activeBranch:J,pendingBranch:_e,pendingId:xe,effects:D,parentComponent:V,container:X}=S;if(S.isHydrating)S.isHydrating=!1;else if(!z){const oe=J&&_e.transition&&_e.transition.mode==="out-in";oe&&(J.transition.afterLeave=()=>{xe===S.pendingId&&_(_e,X,Se,0)});let{anchor:Se}=S;J&&(Se=y(J),p(J,V,S,!0)),oe||_(_e,X,Se,0)}fn(S,_e),S.pendingBranch=null,S.isInFallback=!1;let re=S.parent,N=!1;for(;re;){if(re.pendingBranch){re.effects.push(...D),N=!0;break}re=re.parent}N||Id(D),S.effects=[],Jn(W,"onResolve")},fallback(z){if(!S.pendingBranch)return;const{vnode:W,activeBranch:J,parentComponent:_e,container:xe,isSVG:D}=S;Jn(W,"onFallback");const V=y(J),X=()=>{!S.isInFallback||(u(null,z,xe,V,_e,null,D,s,d),fn(S,z))},re=z.transition&&z.transition.mode==="out-in";re&&(J.transition.afterLeave=X),S.isInFallback=!0,p(J,_e,null,!0),re||X()},move(z,W,J){S.activeBranch&&_(S.activeBranch,z,W,J),S.container=z},next(){return S.activeBranch&&y(S.activeBranch)},registerDep(z,W){const J=!!S.pendingBranch;J&&S.deps++;const _e=z.vnode.el;z.asyncDep.catch(xe=>{mi(xe,z,0)}).then(xe=>{if(z.isUnmounted||S.isUnmounted||S.pendingId!==z.suspenseId)return;z.asyncResolved=!0;const{vnode:D}=z;ao(z,xe,!1),_e&&(D.el=_e);const V=!_e&&z.subTree.el;W(z,D,E(_e||z.subTree.el),_e?null:y(z.subTree),S,t,d),V&&I(V),Wo(z,D.el),J&&--S.deps===0&&S.resolve()})},unmount(z,W){S.isUnmounted=!0,S.activeBranch&&p(S.activeBranch,n,z,W),S.pendingBranch&&p(S.pendingBranch,n,z,W)}};return S}function Hl(a,e,n,i,r,o,t,s,d){const m=e.suspense=$o(e,i,n,a.parentNode,document.createElement("div"),null,r,o,t,s,!0),l=d(a,m.pendingBranch=e.ssContent,n,m,o,t);return m.deps===0&&m.resolve(),l}function Wl(a){const{shapeFlag:e,children:n}=a,i=e&32;a.ssContent=Wt(i?n.default:n),a.ssFallback=i?Wt(n.fallback):ge(Le)}function Wt(a){let e;if(q(a)){const n=xn&&a._c;n&&(a._d=!1,K()),a=a(),n&&(a._d=!0,e=$e,Gd())}return O(a)&&(a=Al(a)),a=Ve(a),e&&!a.dynamicChildren&&(a.dynamicChildren=e.filter(n=>n!==a)),a}function $l(a,e){e&&e.pendingBranch?O(a)?e.effects.push(...a):e.effects.push(a):Id(a)}function fn(a,e){a.activeBranch=e;const{vnode:n,parentComponent:i}=a,r=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=r,Wo(i,r))}function Ul(a,e){if(Ie){let n=Ie.provides;const i=Ie.parent&&Ie.parent.provides;i===n&&(n=Ie.provides=Object.create(i)),n[a]=e}}function Cr(a,e,n=!1){const i=Ie||Je;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&a in r)return r[a];if(arguments.length>1)return n&&q(e)?e.call(i.proxy):e}}const $t={};function Er(a,e,n){return zd(a,e,n)}function zd(a,e,{immediate:n,deep:i,flush:r,onTrack:o,onTrigger:t}=ne){const s=Ie;let d,m=!1,l=!1;if(Ae(a)?(d=()=>a.value,m=Kr(a)):gn(a)?(d=()=>a,i=!0):O(a)?(l=!0,m=a.some(M=>gn(M)||Kr(M)),d=()=>a.map(M=>{if(Ae(M))return M.value;if(gn(M))return Ya(M);if(q(M))return Ca(M,s,2)})):q(a)?e?d=()=>Ca(a,s,2):d=()=>{if(!(s&&s.isUnmounted))return u&&u(),Ue(a,s,3,[_])}:d=ea,e&&i){const M=d;d=()=>Ya(M())}let u,_=M=>{u=I.onStop=()=>{Ca(M,s,4)}};if(Qn)return _=ea,e?n&&Ue(e,s,3,[d(),l?[]:void 0,_]):d(),ea;let p=l?[]:$t;const y=()=>{if(!!I.active)if(e){const M=I.run();(i||m||(l?M.some((S,z)=>Ri(S,p[z])):Ri(M,p)))&&(u&&u(),Ue(e,s,3,[M,p===$t?void 0:p,_]),p=M)}else I.run()};y.allowRecurse=!!e;let E;r==="sync"?E=y:r==="post"?E=()=>Me(y,s&&s.suspense):(y.pre=!0,s&&(y.id=s.uid),E=()=>qo(y));const I=new Ro(d,E);return e?n?y():p=I.run():r==="post"?Me(I.run.bind(I),s&&s.suspense):I.run(),()=>{I.stop(),s&&s.scope&&Io(s.scope.effects,I)}}function Kl(a,e,n){const i=this.proxy,r=we(a)?a.includes(".")?Rd(i,a):()=>i[a]:a.bind(i,i);let o;q(e)?o=e:(o=e.handler,n=e);const t=Ie;Ra(this);const s=zd(r,o.bind(i),n);return t?Ra(t):Ea(),s}function Rd(a,e){const n=e.split(".");return()=>{let i=a;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Ya(a,e){if(!le(a)||a.__v_skip||(e=e||new Set,e.has(a)))return a;if(e.add(a),Ae(a))Ya(a.value,e);else if(O(a))for(let n=0;n<a.length;n++)Ya(a[n],e);else if(td(a)||hn(a))a.forEach(n=>{Ya(n,e)});else if(dd(a))for(const n in a)Ya(a[n],e);return a}function Vl(){const a={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dd(()=>{a.isMounted=!0}),Fd(()=>{a.isUnmounting=!0}),a}const He=[Function,Array],Yl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},setup(a,{slots:e}){const n=Xd(),i=Vl();let r;return()=>{const o=e.default&&Md(e.default(),!0);if(!o||!o.length)return;let t=o[0];if(o.length>1){for(const E of o)if(E.type!==Le){t=E;break}}const s=Z(a),{mode:d}=s;if(i.isLeaving)return Ir(t);const m=Ut(t);if(!m)return Ir(t);const l=Yr(m,s,i,n);Gr(m,l);const u=n.subTree,_=u&&Ut(u);let p=!1;const{getTransitionKey:y}=m.type;if(y){const E=y();r===void 0?r=E:E!==r&&(r=E,p=!0)}if(_&&_.type!==Le&&(!sa(m,_)||p)){const E=Yr(_,s,i,n);if(Gr(_,E),d==="out-in")return i.isLeaving=!0,E.afterLeave=()=>{i.isLeaving=!1,n.update()},Ir(t);d==="in-out"&&m.type!==Le&&(E.delayLeave=(I,M,S)=>{const z=Pd(i,_);z[String(_.key)]=_,I._leaveCb=()=>{M(),I._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=S})}return t}}},Ad=Yl;function Pd(a,e){const{leavingVNodes:n}=a;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Yr(a,e,n,i){const{appear:r,mode:o,persisted:t=!1,onBeforeEnter:s,onEnter:d,onAfterEnter:m,onEnterCancelled:l,onBeforeLeave:u,onLeave:_,onAfterLeave:p,onLeaveCancelled:y,onBeforeAppear:E,onAppear:I,onAfterAppear:M,onAppearCancelled:S}=e,z=String(a.key),W=Pd(n,a),J=(D,V)=>{D&&Ue(D,i,9,V)},_e=(D,V)=>{const X=V[1];J(D,V),O(D)?D.every(re=>re.length<=1)&&X():D.length<=1&&X()},xe={mode:o,persisted:t,beforeEnter(D){let V=s;if(!n.isMounted)if(r)V=E||s;else return;D._leaveCb&&D._leaveCb(!0);const X=W[z];X&&sa(a,X)&&X.el._leaveCb&&X.el._leaveCb(),J(V,[D])},enter(D){let V=d,X=m,re=l;if(!n.isMounted)if(r)V=I||d,X=M||m,re=S||l;else return;let N=!1;const oe=D._enterCb=Se=>{N||(N=!0,Se?J(re,[D]):J(X,[D]),xe.delayedLeave&&xe.delayedLeave(),D._enterCb=void 0)};V?_e(V,[D,oe]):oe()},leave(D,V){const X=String(a.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return V();J(u,[D]);let re=!1;const N=D._leaveCb=oe=>{re||(re=!0,V(),oe?J(y,[D]):J(p,[D]),D._leaveCb=void 0,W[X]===a&&delete W[X])};W[X]=a,_?_e(_,[D,N]):N()},clone(D){return Yr(D,e,n,i)}};return xe}function Ir(a){if(sr(a))return a=za(a),a.children=null,a}function Ut(a){return sr(a)?a.children?a.children[0]:void 0:a}function Gr(a,e){a.shapeFlag&6&&a.component?Gr(a.component.subTree,e):a.shapeFlag&128?(a.ssContent.transition=e.clone(a.ssContent),a.ssFallback.transition=e.clone(a.ssFallback)):a.transition=e}function Md(a,e=!1,n){let i=[],r=0;for(let o=0;o<a.length;o++){let t=a[o];const s=n==null?t.key:String(n)+String(t.key!=null?t.key:o);t.type===ye?(t.patchFlag&128&&r++,i=i.concat(Md(t.children,e,s))):(e||t.type!==Le)&&i.push(s!=null?za(t,{key:s}):t)}if(r>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}const Si=a=>!!a.type.__asyncLoader,sr=a=>a.type.__isKeepAlive;function Gl(a,e){Od(a,"a",e)}function Jl(a,e){Od(a,"da",e)}function Od(a,e,n=Ie){const i=a.__wdc||(a.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return a()});if(dr(e,i,n),n){let r=n.parent;for(;r&&r.parent;)sr(r.parent.vnode)&&Ql(i,e,n,r),r=r.parent}}function Ql(a,e,n,i){const r=dr(e,a,i,!0);Ld(()=>{Io(i[e],r)},n)}function dr(a,e,n=Ie,i=!1){if(n){const r=n[a]||(n[a]=[]),o=e.__weh||(e.__weh=(...t)=>{if(n.isUnmounted)return;Sn(),Ra(n);const s=Ue(e,n,a,t);return Ea(),Nn(),s});return i?r.unshift(o):r.push(o),o}}const ha=a=>(e,n=Ie)=>(!Qn||a==="sp")&&dr(a,e,n),Xl=ha("bm"),Dd=ha("m"),Zl=ha("bu"),e_=ha("u"),Fd=ha("bum"),Ld=ha("um"),a_=ha("sp"),n_=ha("rtg"),i_=ha("rtc");function r_(a,e=Ie){dr("ec",a,e)}function o_(a,e){const n=Je;if(n===null)return a;const i=ur(n)||n.proxy,r=a.dirs||(a.dirs=[]);for(let o=0;o<e.length;o++){let[t,s,d,m=ne]=e[o];q(t)&&(t={mounted:t,updated:t}),t.deep&&Ya(s),r.push({dir:t,instance:i,value:s,oldValue:void 0,arg:d,modifiers:m})}return a}function Fa(a,e,n,i){const r=a.dirs,o=e&&e.dirs;for(let t=0;t<r.length;t++){const s=r[t];o&&(s.oldValue=o[t].value);let d=s.dir[i];d&&(Sn(),Ue(d,n,8,[a.el,s,a,e]),Nn())}}const t_=Symbol();function Ka(a,e,n,i){let r;const o=n&&n[i];if(O(a)||we(a)){r=new Array(a.length);for(let t=0,s=a.length;t<s;t++)r[t]=e(a[t],t,void 0,o&&o[t])}else if(typeof a=="number"){r=new Array(a);for(let t=0;t<a;t++)r[t]=e(t+1,t,void 0,o&&o[t])}else if(le(a))if(a[Symbol.iterator])r=Array.from(a,(t,s)=>e(t,s,void 0,o&&o[s]));else{const t=Object.keys(a);r=new Array(t.length);for(let s=0,d=t.length;s<d;s++){const m=t[s];r[s]=e(a[m],m,s,o&&o[s])}}else r=[];return n&&(n[i]=r),r}const Jr=a=>a?Zd(a)?ur(a)||a.proxy:Jr(a.parent):null,Di=Te(Object.create(null),{$:a=>a,$el:a=>a.vnode.el,$data:a=>a.data,$props:a=>a.props,$attrs:a=>a.attrs,$slots:a=>a.slots,$refs:a=>a.refs,$parent:a=>Jr(a.parent),$root:a=>Jr(a.root),$emit:a=>a.emit,$options:a=>Bd(a),$forceUpdate:a=>a.f||(a.f=()=>qo(a.update)),$nextTick:a=>a.n||(a.n=Tl.bind(a.proxy)),$watch:a=>Kl.bind(a)}),s_={get({_:a},e){const{ctx:n,setupState:i,data:r,props:o,accessCache:t,type:s,appContext:d}=a;let m;if(e[0]!=="$"){const p=t[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(i!==ne&&U(i,e))return t[e]=1,i[e];if(r!==ne&&U(r,e))return t[e]=2,r[e];if((m=a.propsOptions[0])&&U(m,e))return t[e]=3,o[e];if(n!==ne&&U(n,e))return t[e]=4,n[e];Qr&&(t[e]=0)}}const l=Di[e];let u,_;if(l)return e==="$attrs"&&Be(a,"get",e),l(a);if((u=s.__cssModules)&&(u=u[e]))return u;if(n!==ne&&U(n,e))return t[e]=4,n[e];if(_=d.config.globalProperties,U(_,e))return _[e]},set({_:a},e,n){const{data:i,setupState:r,ctx:o}=a;return r!==ne&&U(r,e)?(r[e]=n,!0):i!==ne&&U(i,e)?(i[e]=n,!0):U(a.props,e)||e[0]==="$"&&e.slice(1)in a?!1:(o[e]=n,!0)},has({_:{data:a,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},t){let s;return!!n[t]||a!==ne&&U(a,t)||e!==ne&&U(e,t)||(s=o[0])&&U(s,t)||U(i,t)||U(Di,t)||U(r.config.globalProperties,t)},defineProperty(a,e,n){return n.get!=null?a._.accessCache[e]=0:U(n,"value")&&this.set(a,e,n.value,null),Reflect.defineProperty(a,e,n)}};let Qr=!0;function d_(a){const e=Bd(a),n=a.proxy,i=a.ctx;Qr=!1,e.beforeCreate&&Kt(e.beforeCreate,a,"bc");const{data:r,computed:o,methods:t,watch:s,provide:d,inject:m,created:l,beforeMount:u,mounted:_,beforeUpdate:p,updated:y,activated:E,deactivated:I,beforeDestroy:M,beforeUnmount:S,destroyed:z,unmounted:W,render:J,renderTracked:_e,renderTriggered:xe,errorCaptured:D,serverPrefetch:V,expose:X,inheritAttrs:re,components:N,directives:oe,filters:Se}=e;if(m&&m_(m,i,null,a.appContext.config.unwrapInjectedRef),t)for(const ke in t){const de=t[ke];q(de)&&(i[ke]=de.bind(n))}if(r){const ke=r.call(n,n);le(ke)&&(a.data=da(ke))}if(Qr=!0,o)for(const ke in o){const de=o[ke],ma=q(de)?de.bind(n,n):q(de.get)?de.get.bind(n,n):ea,jr=!q(de)&&q(de.set)?de.set.bind(n):ea,Pn=M_({get:ma,set:jr});Object.defineProperty(i,ke,{enumerable:!0,configurable:!0,get:()=>Pn.value,set:dn=>Pn.value=dn})}if(s)for(const ke in s)qd(s[ke],i,n,ke);if(d){const ke=q(d)?d.call(n):d;Reflect.ownKeys(ke).forEach(de=>{Ul(de,ke[de])})}l&&Kt(l,a,"c");function Ce(ke,de){O(de)?de.forEach(ma=>ke(ma.bind(n))):de&&ke(de.bind(n))}if(Ce(Xl,u),Ce(Dd,_),Ce(Zl,p),Ce(e_,y),Ce(Gl,E),Ce(Jl,I),Ce(r_,D),Ce(i_,_e),Ce(n_,xe),Ce(Fd,S),Ce(Ld,W),Ce(a_,V),O(X))if(X.length){const ke=a.exposed||(a.exposed={});X.forEach(de=>{Object.defineProperty(ke,de,{get:()=>n[de],set:ma=>n[de]=ma})})}else a.exposed||(a.exposed={});J&&a.render===ea&&(a.render=J),re!=null&&(a.inheritAttrs=re),N&&(a.components=N),oe&&(a.directives=oe)}function m_(a,e,n=ea,i=!1){O(a)&&(a=Xr(a));for(const r in a){const o=a[r];let t;le(o)?"default"in o?t=Cr(o.from||r,o.default,!0):t=Cr(o.from||r):t=Cr(o),Ae(t)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.value,set:s=>t.value=s}):e[r]=t}}function Kt(a,e,n){Ue(O(a)?a.map(i=>i.bind(e.proxy)):a.bind(e.proxy),e,n)}function qd(a,e,n,i){const r=i.includes(".")?Rd(n,i):()=>n[i];if(we(a)){const o=e[a];q(o)&&Er(r,o)}else if(q(a))Er(r,a.bind(n));else if(le(a))if(O(a))a.forEach(o=>qd(o,e,n,i));else{const o=q(a.handler)?a.handler.bind(n):e[a.handler];q(o)&&Er(r,o,a)}}function Bd(a){const e=a.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:t}}=a.appContext,s=o.get(e);let d;return s?d=s:!r.length&&!n&&!i?d=e:(d={},r.length&&r.forEach(m=>Fi(d,m,t,!0)),Fi(d,e,t)),le(e)&&o.set(e,d),d}function Fi(a,e,n,i=!1){const{mixins:r,extends:o}=e;o&&Fi(a,o,n,!0),r&&r.forEach(t=>Fi(a,t,n,!0));for(const t in e)if(!(i&&t==="expose")){const s=u_[t]||n&&n[t];a[t]=s?s(a[t],e[t]):e[t]}return a}const u_={data:Vt,props:Ha,emits:Ha,methods:Ha,computed:Ha,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Ha,directives:Ha,watch:__,provide:Vt,inject:l_};function Vt(a,e){return e?a?function(){return Te(q(a)?a.call(this,this):a,q(e)?e.call(this,this):e)}:e:a}function l_(a,e){return Ha(Xr(a),Xr(e))}function Xr(a){if(O(a)){const e={};for(let n=0;n<a.length;n++)e[a[n]]=a[n];return e}return a}function Re(a,e){return a?[...new Set([].concat(a,e))]:e}function Ha(a,e){return a?Te(Te(Object.create(null),a),e):e}function __(a,e){if(!a)return e;if(!e)return a;const n=Te(Object.create(null),a);for(const i in e)n[i]=Re(a[i],e[i]);return n}function k_(a,e,n,i=!1){const r={},o={};Ai(o,mr,1),a.propsDefaults=Object.create(null),Hd(a,e,r,o);for(const t in a.propsOptions[0])t in r||(r[t]=void 0);n?a.props=i?r:bl(r):a.type.props?a.props=r:a.props=o,a.attrs=o}function c_(a,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:t}}=a,s=Z(r),[d]=a.propsOptions;let m=!1;if((i||t>0)&&!(t&16)){if(t&8){const l=a.vnode.dynamicProps;for(let u=0;u<l.length;u++){let _=l[u];if(or(a.emitsOptions,_))continue;const p=e[_];if(d)if(U(o,_))p!==o[_]&&(o[_]=p,m=!0);else{const y=wn(_);r[y]=Zr(d,s,y,p,a,!1)}else p!==o[_]&&(o[_]=p,m=!0)}}}else{Hd(a,e,r,o)&&(m=!0);let l;for(const u in s)(!e||!U(e,u)&&((l=on(u))===u||!U(e,l)))&&(d?n&&(n[u]!==void 0||n[l]!==void 0)&&(r[u]=Zr(d,s,u,void 0,a,!0)):delete r[u]);if(o!==s)for(const u in o)(!e||!U(e,u)&&!0)&&(delete o[u],m=!0)}m&&pa(a,"set","$attrs")}function Hd(a,e,n,i){const[r,o]=a.propsOptions;let t=!1,s;if(e)for(let d in e){if(Ii(d))continue;const m=e[d];let l;r&&U(r,l=wn(d))?!o||!o.includes(l)?n[l]=m:(s||(s={}))[l]=m:or(a.emitsOptions,d)||(!(d in i)||m!==i[d])&&(i[d]=m,t=!0)}if(o){const d=Z(n),m=s||ne;for(let l=0;l<o.length;l++){const u=o[l];n[u]=Zr(r,d,u,m[u],a,!U(m,u))}}return t}function Zr(a,e,n,i,r,o){const t=a[n];if(t!=null){const s=U(t,"default");if(s&&i===void 0){const d=t.default;if(t.type!==Function&&q(d)){const{propsDefaults:m}=r;n in m?i=m[n]:(Ra(r),i=m[n]=d.call(null,e),Ea())}else i=d}t[0]&&(o&&!s?i=!1:t[1]&&(i===""||i===on(n))&&(i=!0))}return i}function Wd(a,e,n=!1){const i=e.propsCache,r=i.get(a);if(r)return r;const o=a.props,t={},s=[];let d=!1;if(!q(a)){const l=u=>{d=!0;const[_,p]=Wd(u,e,!0);Te(t,_),p&&s.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),a.extends&&l(a.extends),a.mixins&&a.mixins.forEach(l)}if(!o&&!d)return le(a)&&i.set(a,pn),pn;if(O(o))for(let l=0;l<o.length;l++){const u=wn(o[l]);Yt(u)&&(t[u]=ne)}else if(o)for(const l in o){const u=wn(l);if(Yt(u)){const _=o[l],p=t[u]=O(_)||q(_)?{type:_}:_;if(p){const y=Qt(Boolean,p.type),E=Qt(String,p.type);p[0]=y>-1,p[1]=E<0||y<E,(y>-1||U(p,"default"))&&s.push(u)}}}const m=[t,s];return le(a)&&i.set(a,m),m}function Yt(a){return a[0]!=="$"}function Gt(a){const e=a&&a.toString().match(/^\s*function (\w+)/);return e?e[1]:a===null?"null":""}function Jt(a,e){return Gt(a)===Gt(e)}function Qt(a,e){return O(e)?e.findIndex(n=>Jt(n,a)):q(e)&&Jt(e,a)?0:-1}const $d=a=>a[0]==="_"||a==="$stable",Uo=a=>O(a)?a.map(Ve):[Ve(a)],p_=(a,e,n)=>{if(e._n)return e;const i=Oi((...r)=>Uo(e(...r)),n);return i._c=!1,i},Ud=(a,e,n)=>{const i=a._ctx;for(const r in a){if($d(r))continue;const o=a[r];if(q(o))e[r]=p_(r,o,i);else if(o!=null){const t=Uo(o);e[r]=()=>t}}},Kd=(a,e)=>{const n=Uo(e);a.slots.default=()=>n},h_=(a,e)=>{if(a.vnode.shapeFlag&32){const n=e._;n?(a.slots=Z(e),Ai(e,"_",n)):Ud(e,a.slots={})}else a.slots={},e&&Kd(a,e);Ai(a.slots,mr,1)},g_=(a,e,n)=>{const{vnode:i,slots:r}=a;let o=!0,t=ne;if(i.shapeFlag&32){const s=e._;s?n&&s===1?o=!1:(Te(r,e),!n&&s===1&&delete r._):(o=!e.$stable,Ud(e,r)),t=e}else e&&(Kd(a,e),t={default:1});if(o)for(const s in r)!$d(s)&&!(s in t)&&delete r[s]};function Vd(){return{app:null,config:{isNativeTag:Bu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let y_=0;function f_(a,e){return function(i,r=null){q(i)||(i=Object.assign({},i)),r!=null&&!le(r)&&(r=null);const o=Vd(),t=new Set;let s=!1;const d=o.app={_uid:y_++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:F_,get config(){return o.config},set config(m){},use(m,...l){return t.has(m)||(m&&q(m.install)?(t.add(m),m.install(d,...l)):q(m)&&(t.add(m),m(d,...l))),d},mixin(m){return o.mixins.includes(m)||o.mixins.push(m),d},component(m,l){return l?(o.components[m]=l,d):o.components[m]},directive(m,l){return l?(o.directives[m]=l,d):o.directives[m]},mount(m,l,u){if(!s){const _=ge(i,r);return _.appContext=o,l&&e?e(_,m):a(_,m,u),s=!0,d._container=m,m.__vue_app__=d,ur(_.component)||_.component.proxy}},unmount(){s&&(a(null,d._container),delete d._container.__vue_app__)},provide(m,l){return o.provides[m]=l,d}};return d}}function eo(a,e,n,i,r=!1){if(O(a)){a.forEach((_,p)=>eo(_,e&&(O(e)?e[p]:e),n,i,r));return}if(Si(i)&&!r)return;const o=i.shapeFlag&4?ur(i.component)||i.component.proxy:i.el,t=r?null:o,{i:s,r:d}=a,m=e&&e.r,l=s.refs===ne?s.refs={}:s.refs,u=s.setupState;if(m!=null&&m!==d&&(we(m)?(l[m]=null,U(u,m)&&(u[m]=null)):Ae(m)&&(m.value=null)),q(d))Ca(d,s,12,[t,l]);else{const _=we(d),p=Ae(d);if(_||p){const y=()=>{if(a.f){const E=_?l[d]:d.value;r?O(E)&&Io(E,o):O(E)?E.includes(o)||E.push(o):_?(l[d]=[o],U(u,d)&&(u[d]=l[d])):(d.value=[o],a.k&&(l[a.k]=d.value))}else _?(l[d]=t,U(u,d)&&(u[d]=t)):p&&(d.value=t,a.k&&(l[a.k]=t))};t?(y.id=-1,Me(y,n)):y()}}}const Me=$l;function j_(a){return b_(a)}function b_(a,e){const n=Vu();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:t,createText:s,createComment:d,setText:m,setElementText:l,parentNode:u,nextSibling:_,setScopeId:p=ea,cloneNode:y,insertStaticContent:E}=a,I=(k,c,h,f=null,g=null,w=null,C=!1,b=null,x=!!c.dynamicChildren)=>{if(k===c)return;k&&!sa(k,c)&&(f=yi(k),fa(k,g,w,!0),k=null),c.patchFlag===-2&&(x=!1,c.dynamicChildren=null);const{type:j,ref:R,shapeFlag:T}=c;switch(j){case Ko:M(k,c,h,f);break;case Le:S(k,c,h,f);break;case Tr:k==null&&z(c,h,f,C);break;case ye:oe(k,c,h,f,g,w,C,b,x);break;default:T&1?_e(k,c,h,f,g,w,C,b,x):T&6?Se(k,c,h,f,g,w,C,b,x):(T&64||T&128)&&j.process(k,c,h,f,g,w,C,b,x,mn)}R!=null&&g&&eo(R,k&&k.ref,w,c||k,!c)},M=(k,c,h,f)=>{if(k==null)i(c.el=s(c.children),h,f);else{const g=c.el=k.el;c.children!==k.children&&m(g,c.children)}},S=(k,c,h,f)=>{k==null?i(c.el=d(c.children||""),h,f):c.el=k.el},z=(k,c,h,f)=>{[k.el,k.anchor]=E(k.children,c,h,f,k.el,k.anchor)},W=({el:k,anchor:c},h,f)=>{let g;for(;k&&k!==c;)g=_(k),i(k,h,f),k=g;i(c,h,f)},J=({el:k,anchor:c})=>{let h;for(;k&&k!==c;)h=_(k),r(k),k=h;r(c)},_e=(k,c,h,f,g,w,C,b,x)=>{C=C||c.type==="svg",k==null?xe(c,h,f,g,w,C,b,x):X(k,c,g,w,C,b,x)},xe=(k,c,h,f,g,w,C,b)=>{let x,j;const{type:R,props:T,shapeFlag:A,transition:F,patchFlag:Y,dirs:ee}=k;if(k.el&&y!==void 0&&Y===-1)x=k.el=y(k.el);else{if(x=k.el=t(k.type,w,T&&T.is,T),A&8?l(x,k.children):A&16&&V(k.children,x,null,f,g,w&&R!=="foreignObject",C,b),ee&&Fa(k,null,f,"created"),T){for(const me in T)me!=="value"&&!Ii(me)&&o(x,me,null,T[me],w,k.children,f,g,ua);"value"in T&&o(x,"value",null,T.value),(j=T.onVnodeBeforeMount)&&ia(j,f,k)}D(x,k,k.scopeId,C,f)}ee&&Fa(k,null,f,"beforeMount");const ae=(!g||g&&!g.pendingBranch)&&F&&!F.persisted;ae&&F.beforeEnter(x),i(x,c,h),((j=T&&T.onVnodeMounted)||ae||ee)&&Me(()=>{j&&ia(j,f,k),ae&&F.enter(x),ee&&Fa(k,null,f,"mounted")},g)},D=(k,c,h,f,g)=>{if(h&&p(k,h),f)for(let w=0;w<f.length;w++)p(k,f[w]);if(g){let w=g.subTree;if(c===w){const C=g.vnode;D(k,C,C.scopeId,C.slotScopeIds,g.parent)}}},V=(k,c,h,f,g,w,C,b,x=0)=>{for(let j=x;j<k.length;j++){const R=k[j]=b?wa(k[j]):Ve(k[j]);I(null,R,c,h,f,g,w,C,b)}},X=(k,c,h,f,g,w,C)=>{const b=c.el=k.el;let{patchFlag:x,dynamicChildren:j,dirs:R}=c;x|=k.patchFlag&16;const T=k.props||ne,A=c.props||ne;let F;h&&La(h,!1),(F=A.onVnodeBeforeUpdate)&&ia(F,h,c,k),R&&Fa(c,k,h,"beforeUpdate"),h&&La(h,!0);const Y=g&&c.type!=="foreignObject";if(j?re(k.dynamicChildren,j,b,h,f,Y,w):C||ma(k,c,b,null,h,f,Y,w,!1),x>0){if(x&16)N(b,c,T,A,h,f,g);else if(x&2&&T.class!==A.class&&o(b,"class",null,A.class,g),x&4&&o(b,"style",T.style,A.style,g),x&8){const ee=c.dynamicProps;for(let ae=0;ae<ee.length;ae++){const me=ee[ae],Ke=T[me],un=A[me];(un!==Ke||me==="value")&&o(b,me,Ke,un,g,k.children,h,f,ua)}}x&1&&k.children!==c.children&&l(b,c.children)}else!C&&j==null&&N(b,c,T,A,h,f,g);((F=A.onVnodeUpdated)||R)&&Me(()=>{F&&ia(F,h,c,k),R&&Fa(c,k,h,"updated")},f)},re=(k,c,h,f,g,w,C)=>{for(let b=0;b<c.length;b++){const x=k[b],j=c[b],R=x.el&&(x.type===ye||!sa(x,j)||x.shapeFlag&70)?u(x.el):h;I(x,j,R,null,f,g,w,C,!0)}},N=(k,c,h,f,g,w,C)=>{if(h!==f){for(const b in f){if(Ii(b))continue;const x=f[b],j=h[b];x!==j&&b!=="value"&&o(k,b,j,x,C,c.children,g,w,ua)}if(h!==ne)for(const b in h)!Ii(b)&&!(b in f)&&o(k,b,h[b],null,C,c.children,g,w,ua);"value"in f&&o(k,"value",h.value,f.value)}},oe=(k,c,h,f,g,w,C,b,x)=>{const j=c.el=k?k.el:s(""),R=c.anchor=k?k.anchor:s("");let{patchFlag:T,dynamicChildren:A,slotScopeIds:F}=c;F&&(b=b?b.concat(F):F),k==null?(i(j,h,f),i(R,h,f),V(c.children,h,R,g,w,C,b,x)):T>0&&T&64&&A&&k.dynamicChildren?(re(k.dynamicChildren,A,h,g,w,C,b),(c.key!=null||g&&c===g.subTree)&&Yd(k,c,!0)):ma(k,c,h,R,g,w,C,b,x)},Se=(k,c,h,f,g,w,C,b,x)=>{c.slotScopeIds=b,k==null?c.shapeFlag&512?g.ctx.activate(c,h,f,C,x):sn(c,h,f,g,w,C,x):Ce(k,c,x)},sn=(k,c,h,f,g,w,C)=>{const b=k.component=S_(k,f,g);if(sr(k)&&(b.ctx.renderer=mn),N_(b),b.asyncDep){if(g&&g.registerDep(b,ke),!k.el){const x=b.subTree=ge(Le);S(null,x,c,h)}return}ke(b,k,c,h,g,w,C)},Ce=(k,c,h)=>{const f=c.component=k.component;if(Ol(k,c,h))if(f.asyncDep&&!f.asyncResolved){de(f,c,h);return}else f.next=c,Nl(f.update),f.update();else c.el=k.el,f.vnode=c},ke=(k,c,h,f,g,w,C)=>{const b=()=>{if(k.isMounted){let{next:R,bu:T,u:A,parent:F,vnode:Y}=k,ee=R,ae;La(k,!1),R?(R.el=Y.el,de(k,R,C)):R=Y,T&&Ti(T),(ae=R.props&&R.props.onVnodeBeforeUpdate)&&ia(ae,F,R,Y),La(k,!0);const me=xr(k),Ke=k.subTree;k.subTree=me,I(Ke,me,u(Ke.el),yi(Ke),k,g,w),R.el=me.el,ee===null&&Wo(k,me.el),A&&Me(A,g),(ae=R.props&&R.props.onVnodeUpdated)&&Me(()=>ia(ae,F,R,Y),g)}else{let R;const{el:T,props:A}=c,{bm:F,m:Y,parent:ee}=k,ae=Si(c);if(La(k,!1),F&&Ti(F),!ae&&(R=A&&A.onVnodeBeforeMount)&&ia(R,ee,c),La(k,!0),T&&vr){const me=()=>{k.subTree=xr(k),vr(T,k.subTree,k,g,null)};ae?c.type.__asyncLoader().then(()=>!k.isUnmounted&&me()):me()}else{const me=k.subTree=xr(k);I(null,me,h,f,k,g,w),c.el=me.el}if(Y&&Me(Y,g),!ae&&(R=A&&A.onVnodeMounted)){const me=c;Me(()=>ia(R,ee,me),g)}(c.shapeFlag&256||ee&&Si(ee.vnode)&&ee.vnode.shapeFlag&256)&&k.a&&Me(k.a,g),k.isMounted=!0,c=h=f=null}},x=k.effect=new Ro(b,()=>qo(j),k.scope),j=k.update=()=>x.run();j.id=k.uid,La(k,!0),j()},de=(k,c,h)=>{c.component=k;const f=k.vnode.props;k.vnode=c,k.next=null,c_(k,c.props,f,h),g_(k,c.children,h),Sn(),Bt(),Nn()},ma=(k,c,h,f,g,w,C,b,x=!1)=>{const j=k&&k.children,R=k?k.shapeFlag:0,T=c.children,{patchFlag:A,shapeFlag:F}=c;if(A>0){if(A&128){Pn(j,T,h,f,g,w,C,b,x);return}else if(A&256){jr(j,T,h,f,g,w,C,b,x);return}}F&8?(R&16&&ua(j,g,w),T!==j&&l(h,T)):R&16?F&16?Pn(j,T,h,f,g,w,C,b,x):ua(j,g,w,!0):(R&8&&l(h,""),F&16&&V(T,h,f,g,w,C,b,x))},jr=(k,c,h,f,g,w,C,b,x)=>{k=k||pn,c=c||pn;const j=k.length,R=c.length,T=Math.min(j,R);let A;for(A=0;A<T;A++){const F=c[A]=x?wa(c[A]):Ve(c[A]);I(k[A],F,h,null,g,w,C,b,x)}j>R?ua(k,g,w,!0,!1,T):V(c,h,f,g,w,C,b,x,T)},Pn=(k,c,h,f,g,w,C,b,x)=>{let j=0;const R=c.length;let T=k.length-1,A=R-1;for(;j<=T&&j<=A;){const F=k[j],Y=c[j]=x?wa(c[j]):Ve(c[j]);if(sa(F,Y))I(F,Y,h,null,g,w,C,b,x);else break;j++}for(;j<=T&&j<=A;){const F=k[T],Y=c[A]=x?wa(c[A]):Ve(c[A]);if(sa(F,Y))I(F,Y,h,null,g,w,C,b,x);else break;T--,A--}if(j>T){if(j<=A){const F=A+1,Y=F<R?c[F].el:f;for(;j<=A;)I(null,c[j]=x?wa(c[j]):Ve(c[j]),h,Y,g,w,C,b,x),j++}}else if(j>A)for(;j<=T;)fa(k[j],g,w,!0),j++;else{const F=j,Y=j,ee=new Map;for(j=Y;j<=A;j++){const Fe=c[j]=x?wa(c[j]):Ve(c[j]);Fe.key!=null&&ee.set(Fe.key,j)}let ae,me=0;const Ke=A-Y+1;let un=!1,Nt=0;const Mn=new Array(Ke);for(j=0;j<Ke;j++)Mn[j]=0;for(j=F;j<=T;j++){const Fe=k[j];if(me>=Ke){fa(Fe,g,w,!0);continue}let na;if(Fe.key!=null)na=ee.get(Fe.key);else for(ae=Y;ae<=A;ae++)if(Mn[ae-Y]===0&&sa(Fe,c[ae])){na=ae;break}na===void 0?fa(Fe,g,w,!0):(Mn[na-Y]=j+1,na>=Nt?Nt=na:un=!0,I(Fe,c[na],h,null,g,w,C,b,x),me++)}const zt=un?v_(Mn):pn;for(ae=zt.length-1,j=Ke-1;j>=0;j--){const Fe=Y+j,na=c[Fe],Rt=Fe+1<R?c[Fe+1].el:f;Mn[j]===0?I(null,na,h,Rt,g,w,C,b,x):un&&(ae<0||j!==zt[ae]?dn(na,h,Rt,2):ae--)}}},dn=(k,c,h,f,g=null)=>{const{el:w,type:C,transition:b,children:x,shapeFlag:j}=k;if(j&6){dn(k.component.subTree,c,h,f);return}if(j&128){k.suspense.move(c,h,f);return}if(j&64){C.move(k,c,h,mn);return}if(C===ye){i(w,c,h);for(let T=0;T<x.length;T++)dn(x[T],c,h,f);i(k.anchor,c,h);return}if(C===Tr){W(k,c,h);return}if(f!==2&&j&1&&b)if(f===0)b.beforeEnter(w),i(w,c,h),Me(()=>b.enter(w),g);else{const{leave:T,delayLeave:A,afterLeave:F}=b,Y=()=>i(w,c,h),ee=()=>{T(w,()=>{Y(),F&&F()})};A?A(w,Y,ee):ee()}else i(w,c,h)},fa=(k,c,h,f=!1,g=!1)=>{const{type:w,props:C,ref:b,children:x,dynamicChildren:j,shapeFlag:R,patchFlag:T,dirs:A}=k;if(b!=null&&eo(b,null,h,k,!0),R&256){c.ctx.deactivate(k);return}const F=R&1&&A,Y=!Si(k);let ee;if(Y&&(ee=C&&C.onVnodeBeforeUnmount)&&ia(ee,c,k),R&6)Mu(k.component,h,f);else{if(R&128){k.suspense.unmount(h,f);return}F&&Fa(k,null,c,"beforeUnmount"),R&64?k.type.remove(k,c,h,g,mn,f):j&&(w!==ye||T>0&&T&64)?ua(j,c,h,!1,!0):(w===ye&&T&384||!g&&R&16)&&ua(x,c,h),f&&Tt(k)}(Y&&(ee=C&&C.onVnodeUnmounted)||F)&&Me(()=>{ee&&ia(ee,c,k),F&&Fa(k,null,c,"unmounted")},h)},Tt=k=>{const{type:c,el:h,anchor:f,transition:g}=k;if(c===ye){Pu(h,f);return}if(c===Tr){J(k);return}const w=()=>{r(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(k.shapeFlag&1&&g&&!g.persisted){const{leave:C,delayLeave:b}=g,x=()=>C(h,w);b?b(k.el,w,x):x()}else w()},Pu=(k,c)=>{let h;for(;k!==c;)h=_(k),r(k),k=h;r(c)},Mu=(k,c,h)=>{const{bum:f,scope:g,update:w,subTree:C,um:b}=k;f&&Ti(f),g.stop(),w&&(w.active=!1,fa(C,k,c,h)),b&&Me(b,c),Me(()=>{k.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},ua=(k,c,h,f=!1,g=!1,w=0)=>{for(let C=w;C<k.length;C++)fa(k[C],c,h,f,g)},yi=k=>k.shapeFlag&6?yi(k.component.subTree):k.shapeFlag&128?k.suspense.next():_(k.anchor||k.el),St=(k,c,h)=>{k==null?c._vnode&&fa(c._vnode,null,null,!0):I(c._vnode||null,k,c,null,null,null,h),Bt(),Td(),c._vnode=k},mn={p:I,um:fa,m:dn,r:Tt,mt:sn,mc:V,pc:ma,pbc:re,n:yi,o:a};let br,vr;return e&&([br,vr]=e(mn)),{render:St,hydrate:br,createApp:f_(St,br)}}function La({effect:a,update:e},n){a.allowRecurse=e.allowRecurse=n}function Yd(a,e,n=!1){const i=a.children,r=e.children;if(O(i)&&O(r))for(let o=0;o<i.length;o++){const t=i[o];let s=r[o];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[o]=wa(r[o]),s.el=t.el),n||Yd(t,s))}}function v_(a){const e=a.slice(),n=[0];let i,r,o,t,s;const d=a.length;for(i=0;i<d;i++){const m=a[i];if(m!==0){if(r=n[n.length-1],a[r]<m){e[i]=r,n.push(i);continue}for(o=0,t=n.length-1;o<t;)s=o+t>>1,a[n[s]]<m?o=s+1:t=s;m<a[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,t=n[o-1];o-- >0;)n[o]=t,t=e[t];return n}const w_=a=>a.__isTeleport,ye=Symbol(void 0),Ko=Symbol(void 0),Le=Symbol(void 0),Tr=Symbol(void 0),Hn=[];let $e=null;function K(a=!1){Hn.push($e=a?null:[])}function Gd(){Hn.pop(),$e=Hn[Hn.length-1]||null}let xn=1;function Xt(a){xn+=a}function Jd(a){return a.dynamicChildren=xn>0?$e||pn:null,Gd(),xn>0&&$e&&$e.push(a),a}function Q(a,e,n,i,r,o){return Jd(L(a,e,n,i,r,o,!0))}function Vo(a,e,n,i,r){return Jd(ge(a,e,n,i,r,!0))}function Li(a){return a?a.__v_isVNode===!0:!1}function sa(a,e){return a.type===e.type&&a.key===e.key}const mr="__vInternal",Qd=({key:a})=>a!=null?a:null,Ni=({ref:a,ref_key:e,ref_for:n})=>a!=null?we(a)||Ae(a)||q(a)?{i:Je,r:a,k:e,f:!!n}:a:null;function L(a,e=null,n=null,i=0,r=null,o=a===ye?0:1,t=!1,s=!1){const d={__v_isVNode:!0,__v_skip:!0,type:a,props:e,key:e&&Qd(e),ref:e&&Ni(e),scopeId:tr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return s?(Yo(d,n),o&128&&a.normalize(d)):n&&(d.shapeFlag|=we(n)?8:16),xn>0&&!t&&$e&&(d.patchFlag>0||o&6)&&d.patchFlag!==32&&$e.push(d),d}const ge=x_;function x_(a,e=null,n=null,i=0,r=null,o=!1){if((!a||a===t_)&&(a=Le),Li(a)){const s=za(a,e,!0);return n&&Yo(s,n),xn>0&&!o&&$e&&(s.shapeFlag&6?$e[$e.indexOf(a)]=s:$e.push(s)),s.patchFlag|=-2,s}if(P_(a)&&(a=a.__vccOpts),e){e=C_(e);let{class:s,style:d}=e;s&&!we(s)&&(e.class=Co(s)),le(d)&&(bd(d)&&!O(d)&&(d=Te({},d)),e.style=xo(d))}const t=we(a)?1:Dl(a)?128:w_(a)?64:le(a)?4:q(a)?2:0;return L(a,e,n,i,r,t,o,!0)}function C_(a){return a?bd(a)||mr in a?Te({},a):a:null}function za(a,e,n=!1){const{props:i,ref:r,patchFlag:o,children:t}=a,s=e?E_(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:a.type,props:s,key:s&&Qd(s),ref:e&&e.ref?n&&r?O(r)?r.concat(Ni(e)):[r,Ni(e)]:Ni(e):r,scopeId:a.scopeId,slotScopeIds:a.slotScopeIds,children:t,target:a.target,targetAnchor:a.targetAnchor,staticCount:a.staticCount,shapeFlag:a.shapeFlag,patchFlag:e&&a.type!==ye?o===-1?16:o|16:o,dynamicProps:a.dynamicProps,dynamicChildren:a.dynamicChildren,appContext:a.appContext,dirs:a.dirs,transition:a.transition,component:a.component,suspense:a.suspense,ssContent:a.ssContent&&za(a.ssContent),ssFallback:a.ssFallback&&za(a.ssFallback),el:a.el,anchor:a.anchor}}function zi(a=" ",e=0){return ge(Ko,null,a,e)}function oa(a="",e=!1){return e?(K(),Vo(Le,null,a)):ge(Le,null,a)}function Ve(a){return a==null||typeof a=="boolean"?ge(Le):O(a)?ge(ye,null,a.slice()):typeof a=="object"?wa(a):ge(Ko,null,String(a))}function wa(a){return a.el===null||a.memo?a:za(a)}function Yo(a,e){let n=0;const{shapeFlag:i}=a;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Yo(a,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(mr in e)?e._ctx=Je:r===3&&Je&&(Je.slots._===1?e._=1:(e._=2,a.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Je},n=32):(e=String(e),i&64?(n=16,e=[zi(e)]):n=8);a.children=e,a.shapeFlag|=n}function E_(...a){const e={};for(let n=0;n<a.length;n++){const i=a[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Co([e.class,i.class]));else if(r==="style")e.style=xo([e.style,i.style]);else if(ar(r)){const o=e[r],t=i[r];t&&o!==t&&!(O(o)&&o.includes(t))&&(e[r]=o?[].concat(o,t):t)}else r!==""&&(e[r]=i[r])}return e}function ia(a,e,n,i=null){Ue(a,e,7,[n,i])}const I_=Vd();let T_=0;function S_(a,e,n){const i=a.type,r=(e?e.appContext:a.appContext)||I_,o={uid:T_++,vnode:a,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wd(i,r),emitsOptions:Nd(i,r),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:i.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Rl.bind(null,o),a.ce&&a.ce(o),o}let Ie=null;const Xd=()=>Ie||Je,Ra=a=>{Ie=a,a.scope.on()},Ea=()=>{Ie&&Ie.scope.off(),Ie=null};function Zd(a){return a.vnode.shapeFlag&4}let Qn=!1;function N_(a,e=!1){Qn=e;const{props:n,children:i}=a.vnode,r=Zd(a);k_(a,n,r,e),h_(a,i);const o=r?z_(a,e):void 0;return Qn=!1,o}function z_(a,e){const n=a.type;a.accessCache=Object.create(null),a.proxy=vd(new Proxy(a.ctx,s_));const{setup:i}=n;if(i){const r=a.setupContext=i.length>1?A_(a):null;Ra(a),Sn();const o=Ca(i,a,0,[a.props,r]);if(Nn(),Ea(),So(o)){if(o.then(Ea,Ea),e)return o.then(t=>{ao(a,t,e)}).catch(t=>{mi(t,a,0)});a.asyncDep=o}else ao(a,o,e)}else em(a,e)}function ao(a,e,n){q(e)?a.type.__ssrInlineRender?a.ssrRender=e:a.render=e:le(e)&&(a.setupState=wd(e)),em(a,n)}let Zt;function em(a,e,n){const i=a.type;if(!a.render){if(!e&&Zt&&!i.render){const r=i.template;if(r){const{isCustomElement:o,compilerOptions:t}=a.appContext.config,{delimiters:s,compilerOptions:d}=i,m=Te(Te({isCustomElement:o,delimiters:s},t),d);i.render=Zt(r,m)}}a.render=i.render||ea}Ra(a),Sn(),d_(a),Nn(),Ea()}function R_(a){return new Proxy(a.attrs,{get(e,n){return Be(a,"get","$attrs"),e[n]}})}function A_(a){const e=i=>{a.exposed=i||{}};let n;return{get attrs(){return n||(n=R_(a))},slots:a.slots,emit:a.emit,expose:e}}function ur(a){if(a.exposed)return a.exposeProxy||(a.exposeProxy=new Proxy(wd(vd(a.exposed)),{get(e,n){if(n in e)return e[n];if(n in Di)return Di[n](a)}}))}function P_(a){return q(a)&&"__vccOpts"in a}const M_=(a,e)=>El(a,e,Qn);function O_(a){const e=Xd();let n=a();return Ea(),So(n)&&(n=n.catch(i=>{throw Ra(e),i})),[n,()=>Ra(e)]}function D_(a,e,n){const i=arguments.length;return i===2?le(e)&&!O(e)?Li(e)?ge(a,null,[e]):ge(a,e):ge(a,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Li(n)&&(n=[n]),ge(a,e,n))}const F_="3.2.38",L_="http://www.w3.org/2000/svg",Va=typeof document<"u"?document:null,es=Va&&Va.createElement("template"),q_={insert:(a,e,n)=>{e.insertBefore(a,n||null)},remove:a=>{const e=a.parentNode;e&&e.removeChild(a)},createElement:(a,e,n,i)=>{const r=e?Va.createElementNS(L_,a):Va.createElement(a,n?{is:n}:void 0);return a==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:a=>Va.createTextNode(a),createComment:a=>Va.createComment(a),setText:(a,e)=>{a.nodeValue=e},setElementText:(a,e)=>{a.textContent=e},parentNode:a=>a.parentNode,nextSibling:a=>a.nextSibling,querySelector:a=>Va.querySelector(a),setScopeId(a,e){a.setAttribute(e,"")},cloneNode(a){const e=a.cloneNode(!0);return"_value"in a&&(e._value=a._value),e},insertStaticContent(a,e,n,i,r,o){const t=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{es.innerHTML=i?`<svg>${a}</svg>`:a;const s=es.content;if(i){const d=s.firstChild;for(;d.firstChild;)s.appendChild(d.firstChild);s.removeChild(d)}e.insertBefore(s,n)}return[t?t.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function B_(a,e,n){const i=a._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?a.removeAttribute("class"):n?a.setAttribute("class",e):a.className=e}function H_(a,e,n){const i=a.style,r=we(n);if(n&&!r){for(const o in n)no(i,o,n[o]);if(e&&!we(e))for(const o in e)n[o]==null&&no(i,o,"")}else{const o=i.display;r?e!==n&&(i.cssText=n):e&&a.removeAttribute("style"),"_vod"in a&&(i.display=o)}}const as=/\s*!important$/;function no(a,e,n){if(O(n))n.forEach(i=>no(a,e,i));else if(n==null&&(n=""),e.startsWith("--"))a.setProperty(e,n);else{const i=W_(a,e);as.test(n)?a.setProperty(on(i),n.replace(as,""),"important"):a[i]=n}}const ns=["Webkit","Moz","ms"],Sr={};function W_(a,e){const n=Sr[e];if(n)return n;let i=wn(e);if(i!=="filter"&&i in a)return Sr[e]=i;i=md(i);for(let r=0;r<ns.length;r++){const o=ns[r]+i;if(o in a)return Sr[e]=o}return e}const is="http://www.w3.org/1999/xlink";function $_(a,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?a.removeAttributeNS(is,e.slice(6,e.length)):a.setAttributeNS(is,e,n);else{const o=Du(e);n==null||o&&!rd(n)?a.removeAttribute(e):a.setAttribute(e,o?"":n)}}function U_(a,e,n,i,r,o,t){if(e==="innerHTML"||e==="textContent"){i&&t(i,r,o),a[e]=n==null?"":n;return}if(e==="value"&&a.tagName!=="PROGRESS"&&!a.tagName.includes("-")){a._value=n;const d=n==null?"":n;(a.value!==d||a.tagName==="OPTION")&&(a.value=d),n==null&&a.removeAttribute(e);return}let s=!1;if(n===""||n==null){const d=typeof a[e];d==="boolean"?n=rd(n):n==null&&d==="string"?(n="",s=!0):d==="number"&&(n=0,s=!0)}try{a[e]=n}catch{}s&&a.removeAttribute(e)}const[am,K_]=(()=>{let a=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(a=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[a,e]})();let io=0;const V_=Promise.resolve(),Y_=()=>{io=0},G_=()=>io||(V_.then(Y_),io=am());function _n(a,e,n,i){a.addEventListener(e,n,i)}function J_(a,e,n,i){a.removeEventListener(e,n,i)}function Q_(a,e,n,i,r=null){const o=a._vei||(a._vei={}),t=o[e];if(i&&t)t.value=i;else{const[s,d]=X_(e);if(i){const m=o[e]=Z_(i,r);_n(a,s,m,d)}else t&&(J_(a,s,t,d),o[e]=void 0)}}const rs=/(?:Once|Passive|Capture)$/;function X_(a){let e;if(rs.test(a)){e={};let i;for(;i=a.match(rs);)a=a.slice(0,a.length-i[0].length),e[i[0].toLowerCase()]=!0}return[a[2]===":"?a.slice(3):on(a.slice(2)),e]}function Z_(a,e){const n=i=>{const r=i.timeStamp||am();(K_||r>=n.attached-1)&&Ue(ek(i,n.value),e,5,[i])};return n.value=a,n.attached=G_(),n}function ek(a,e){if(O(e)){const n=a.stopImmediatePropagation;return a.stopImmediatePropagation=()=>{n.call(a),a._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const os=/^on[a-z]/,ak=(a,e,n,i,r=!1,o,t,s,d)=>{e==="class"?B_(a,i,r):e==="style"?H_(a,n,i):ar(e)?Eo(e)||Q_(a,e,n,i,t):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nk(a,e,i,r))?U_(a,e,i,o,t,s,d):(e==="true-value"?a._trueValue=i:e==="false-value"&&(a._falseValue=i),$_(a,e,i,r))};function nk(a,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in a&&os.test(e)&&q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&a.tagName==="INPUT"||e==="type"&&a.tagName==="TEXTAREA"||os.test(e)&&we(n)?!1:e in a}const ba="transition",On="animation",Go=(a,{slots:e})=>D_(Ad,ik(a),e);Go.displayName="Transition";const nm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Go.props=Te({},Ad.props,nm);const qa=(a,e=[])=>{O(a)?a.forEach(n=>n(...e)):a&&a(...e)},ts=a=>a?O(a)?a.some(e=>e.length>1):a.length>1:!1;function ik(a){const e={};for(const N in a)N in nm||(e[N]=a[N]);if(a.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:t=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:d=o,appearActiveClass:m=t,appearToClass:l=s,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:_=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=a,y=rk(r),E=y&&y[0],I=y&&y[1],{onBeforeEnter:M,onEnter:S,onEnterCancelled:z,onLeave:W,onLeaveCancelled:J,onBeforeAppear:_e=M,onAppear:xe=S,onAppearCancelled:D=z}=e,V=(N,oe,Se)=>{Ba(N,oe?l:s),Ba(N,oe?m:t),Se&&Se()},X=(N,oe)=>{N._isLeaving=!1,Ba(N,u),Ba(N,p),Ba(N,_),oe&&oe()},re=N=>(oe,Se)=>{const sn=N?xe:S,Ce=()=>V(oe,N,Se);qa(sn,[oe,Ce]),ss(()=>{Ba(oe,N?d:o),va(oe,N?l:s),ts(sn)||ds(oe,i,E,Ce)})};return Te(e,{onBeforeEnter(N){qa(M,[N]),va(N,o),va(N,t)},onBeforeAppear(N){qa(_e,[N]),va(N,d),va(N,m)},onEnter:re(!1),onAppear:re(!0),onLeave(N,oe){N._isLeaving=!0;const Se=()=>X(N,oe);va(N,u),sk(),va(N,_),ss(()=>{!N._isLeaving||(Ba(N,u),va(N,p),ts(W)||ds(N,i,I,Se))}),qa(W,[N,Se])},onEnterCancelled(N){V(N,!1),qa(z,[N])},onAppearCancelled(N){V(N,!0),qa(D,[N])},onLeaveCancelled(N){X(N),qa(J,[N])}})}function rk(a){if(a==null)return null;if(le(a))return[Nr(a.enter),Nr(a.leave)];{const e=Nr(a);return[e,e]}}function Nr(a){return Vn(a)}function va(a,e){e.split(/\s+/).forEach(n=>n&&a.classList.add(n)),(a._vtc||(a._vtc=new Set)).add(e)}function Ba(a,e){e.split(/\s+/).forEach(i=>i&&a.classList.remove(i));const{_vtc:n}=a;n&&(n.delete(e),n.size||(a._vtc=void 0))}function ss(a){requestAnimationFrame(()=>{requestAnimationFrame(a)})}let ok=0;function ds(a,e,n,i){const r=a._endId=++ok,o=()=>{r===a._endId&&i()};if(n)return setTimeout(o,n);const{type:t,timeout:s,propCount:d}=tk(a,e);if(!t)return i();const m=t+"end";let l=0;const u=()=>{a.removeEventListener(m,_),o()},_=p=>{p.target===a&&++l>=d&&u()};setTimeout(()=>{l<d&&u()},s+1),a.addEventListener(m,_)}function tk(a,e){const n=window.getComputedStyle(a),i=y=>(n[y]||"").split(", "),r=i(ba+"Delay"),o=i(ba+"Duration"),t=ms(r,o),s=i(On+"Delay"),d=i(On+"Duration"),m=ms(s,d);let l=null,u=0,_=0;e===ba?t>0&&(l=ba,u=t,_=o.length):e===On?m>0&&(l=On,u=m,_=d.length):(u=Math.max(t,m),l=u>0?t>m?ba:On:null,_=l?l===ba?o.length:d.length:0);const p=l===ba&&/\b(transform|all)(,|$)/.test(n[ba+"Property"]);return{type:l,timeout:u,propCount:_,hasTransform:p}}function ms(a,e){for(;a.length<e.length;)a=a.concat(a);return Math.max(...e.map((n,i)=>us(n)+us(a[i])))}function us(a){return Number(a.slice(0,-1).replace(",","."))*1e3}function sk(){return document.body.offsetHeight}const ls=a=>{const e=a.props["onUpdate:modelValue"]||!1;return O(e)?n=>Ti(e,n):e};function dk(a){a.target.composing=!0}function _s(a){const e=a.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mk={created(a,{modifiers:{lazy:e,trim:n,number:i}},r){a._assign=ls(r);const o=i||r.props&&r.props.type==="number";_n(a,e?"change":"input",t=>{if(t.target.composing)return;let s=a.value;n&&(s=s.trim()),o&&(s=Vn(s)),a._assign(s)}),n&&_n(a,"change",()=>{a.value=a.value.trim()}),e||(_n(a,"compositionstart",dk),_n(a,"compositionend",_s),_n(a,"change",_s))},mounted(a,{value:e}){a.value=e==null?"":e},beforeUpdate(a,{value:e,modifiers:{lazy:n,trim:i,number:r}},o){if(a._assign=ls(o),a.composing||document.activeElement===a&&a.type!=="range"&&(n||i&&a.value.trim()===e||(r||a.type==="number")&&Vn(a.value)===e))return;const t=e==null?"":e;a.value!==t&&(a.value=t)}},uk={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ks=(a,e)=>n=>{if(!("key"in n))return;const i=on(n.key);if(e.some(r=>r===i||uk[r]===i))return a(n)},lk=Te({patchProp:ak},q_);let cs;function _k(){return cs||(cs=j_(lk))}const kk=(...a)=>{const e=_k().createApp(...a),{mount:n}=e;return e.mount=i=>{const r=ck(i);if(!r)return;const o=e._component;!q(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const t=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),t},e};function ck(a){return we(a)?document.querySelector(a):a}/**
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
 */const im={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const v=function(a,e){if(!a)throw zn(e)},zn=function(a){return new Error("Firebase Database ("+im.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};/**
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
 */const rm=function(a){const e=[];let n=0;for(let i=0;i<a.length;i++){let r=a.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<a.length&&(a.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(a.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},pk=function(a){const e=[];let n=0,i=0;for(;n<a.length;){const r=a[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=a[n++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=a[n++],t=a[n++],s=a[n++],d=((r&7)<<18|(o&63)<<12|(t&63)<<6|s&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const o=a[n++],t=a[n++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|t&63)}}return e.join("")},Jo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<a.length;r+=3){const o=a[r],t=r+1<a.length,s=t?a[r+1]:0,d=r+2<a.length,m=d?a[r+2]:0,l=o>>2,u=(o&3)<<4|s>>4;let _=(s&15)<<2|m>>6,p=m&63;d||(p=64,t||(_=64)),i.push(n[l],n[u],n[_],n[p])}return i.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(rm(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):pk(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<a.length;){const o=n[a.charAt(r++)],s=r<a.length?n[a.charAt(r)]:0;++r;const m=r<a.length?n[a.charAt(r)]:64;++r;const u=r<a.length?n[a.charAt(r)]:64;if(++r,o==null||s==null||m==null||u==null)throw Error();const _=o<<2|s>>4;if(i.push(_),m!==64){const p=s<<4&240|m>>2;if(i.push(p),u!==64){const y=m<<6&192|u;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}},om=function(a){const e=rm(a);return Jo.encodeByteArray(e,!0)},tm=function(a){return om(a).replace(/\./g,"")},ps=function(a){try{return Jo.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hk(a){return sm(void 0,a)}function sm(a,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:a===void 0&&(a={});break;case Array:a=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gk(n)||(a[n]=sm(a[n],e[n]));return a}function gk(a){return a!=="__proto__"}/**
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
 */class Qo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function yk(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yk())}function fk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mm(){return im.NODE_ADMIN===!0}function jk(){return typeof indexedDB=="object"}function bk(){return new Promise((a,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),a(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const vk="FirebaseError";class ui extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=vk,Object.setPrototypeOf(this,ui.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,um.prototype.create)}}class um{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],t=o?wk(o,i):"Error",s=`${this.serviceName}: ${t} (${r}).`;return new ui(r,s,i)}}function wk(a,e){return a.replace(xk,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const xk=/\{\$([^}]+)}/g;/**
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
 */function Xn(a){return JSON.parse(a)}function fe(a){return JSON.stringify(a)}/**
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
 */const lm=function(a){let e={},n={},i={},r="";try{const o=a.split(".");e=Xn(ps(o[0])||""),n=Xn(ps(o[1])||""),r=o[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},Ck=function(a){const e=lm(a),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ek=function(a){const e=lm(a).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ga(a,e){return Object.prototype.hasOwnProperty.call(a,e)}function Cn(a,e){if(Object.prototype.hasOwnProperty.call(a,e))return a[e]}function hs(a){for(const e in a)if(Object.prototype.hasOwnProperty.call(a,e))return!1;return!0}function qi(a,e,n){const i={};for(const r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i[r]=e.call(n,a[r],r,a));return i}function ro(a,e){if(a===e)return!0;const n=Object.keys(a),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const o=a[r],t=e[r];if(gs(o)&&gs(t)){if(!ro(o,t))return!1}else if(o!==t)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function gs(a){return a!==null&&typeof a=="object"}/**
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
 */function Ik(a){const e=[];for(const[n,i]of Object.entries(a))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Tk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const _=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(_<<1|_>>>31)&4294967295}let r=this.chain_[0],o=this.chain_[1],t=this.chain_[2],s=this.chain_[3],d=this.chain_[4],m,l;for(let u=0;u<80;u++){u<40?u<20?(m=s^o&(t^s),l=1518500249):(m=o^t^s,l=1859775393):u<60?(m=o&t|s&(o|t),l=2400959708):(m=o^t^s,l=3395469782);const _=(r<<5|r>>>27)+m+d+l+i[u]&4294967295;d=s,s=t,t=(o<<30|o>>>2)&4294967295,o=r,r=_}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+t&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const o=this.buf_;let t=this.inbuf_;for(;r<n;){if(t===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(o[t]=e.charCodeAt(r),++t,++r,t===this.blockSize){this.compress_(o),t=0;break}}else for(;r<n;)if(o[t]=e[r],++t,++r,t===this.blockSize){this.compress_(o),t=0;break}}this.inbuf_=t,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[r]>>o&255,++i;return e}}function _m(a,e){return`${a} failed: ${e} argument `}/**
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
 */const Sk=function(a){const e=[];let n=0;for(let i=0;i<a.length;i++){let r=a.charCodeAt(i);if(r>=55296&&r<=56319){const o=r-55296;i++,v(i<a.length,"Surrogate pair missing trail surrogate.");const t=a.charCodeAt(i)-56320;r=65536+(o<<10)+t}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},lr=function(a){let e=0;for(let n=0;n<a.length;n++){const i=a.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function _r(a){return a&&a._delegate?a._delegate:a}class Zn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wa="[DEFAULT]";/**
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
 */class Nk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Qo;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rk(e))try{this.getOrInitializeService({instanceIdentifier:Wa})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=Wa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wa){return this.instances.has(e)}getOptions(e=Wa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,t]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);i===s&&t.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const t=this.instances.get(r);return t&&e(t,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:zk(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Wa){return this.component?this.component.multipleInstances?e:Wa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zk(a){return a===Wa?void 0:a}function Rk(a){return a.instantiationMode==="EAGER"}/**
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
 */class Ak{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(te||(te={}));const Pk={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Mk=te.INFO,Ok={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Dk=(a,e,...n)=>{if(e<a.logLevel)return;const i=new Date().toISOString(),r=Ok[e];if(r)console[r](`[${i}]  ${a.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class km{constructor(e){this.name=e,this._logLevel=Mk,this._logHandler=Dk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Fk=(a,e)=>e.some(n=>a instanceof n);let ys,fs;function Lk(){return ys||(ys=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qk(){return fs||(fs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cm=new WeakMap,oo=new WeakMap,pm=new WeakMap,zr=new WeakMap,Xo=new WeakMap;function Bk(a){const e=new Promise((n,i)=>{const r=()=>{a.removeEventListener("success",o),a.removeEventListener("error",t)},o=()=>{n(Ia(a.result)),r()},t=()=>{i(a.error),r()};a.addEventListener("success",o),a.addEventListener("error",t)});return e.then(n=>{n instanceof IDBCursor&&cm.set(n,a)}).catch(()=>{}),Xo.set(e,a),e}function Hk(a){if(oo.has(a))return;const e=new Promise((n,i)=>{const r=()=>{a.removeEventListener("complete",o),a.removeEventListener("error",t),a.removeEventListener("abort",t)},o=()=>{n(),r()},t=()=>{i(a.error||new DOMException("AbortError","AbortError")),r()};a.addEventListener("complete",o),a.addEventListener("error",t),a.addEventListener("abort",t)});oo.set(a,e)}let to={get(a,e,n){if(a instanceof IDBTransaction){if(e==="done")return oo.get(a);if(e==="objectStoreNames")return a.objectStoreNames||pm.get(a);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ia(a[e])},set(a,e,n){return a[e]=n,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function Wk(a){to=a(to)}function $k(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=a.call(Rr(this),e,...n);return pm.set(i,e.sort?e.sort():[e]),Ia(i)}:qk().includes(a)?function(...e){return a.apply(Rr(this),e),Ia(cm.get(this))}:function(...e){return Ia(a.apply(Rr(this),e))}}function Uk(a){return typeof a=="function"?$k(a):(a instanceof IDBTransaction&&Hk(a),Fk(a,Lk())?new Proxy(a,to):a)}function Ia(a){if(a instanceof IDBRequest)return Bk(a);if(zr.has(a))return zr.get(a);const e=Uk(a);return e!==a&&(zr.set(a,e),Xo.set(e,a)),e}const Rr=a=>Xo.get(a);function Kk(a,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const t=indexedDB.open(a,e),s=Ia(t);return i&&t.addEventListener("upgradeneeded",d=>{i(Ia(t.result),d.oldVersion,d.newVersion,Ia(t.transaction))}),n&&t.addEventListener("blocked",()=>n()),s.then(d=>{o&&d.addEventListener("close",()=>o()),r&&d.addEventListener("versionchange",()=>r())}).catch(()=>{}),s}const Vk=["get","getKey","getAll","getAllKeys","count"],Yk=["put","add","delete","clear"],Ar=new Map;function js(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(Ar.get(e))return Ar.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Yk.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Vk.includes(n)))return;const o=async function(t,...s){const d=this.transaction(t,r?"readwrite":"readonly");let m=d.store;return i&&(m=m.index(s.shift())),(await Promise.all([m[n](...s),r&&d.done]))[0]};return Ar.set(e,o),o}Wk(a=>({...a,get:(e,n,i)=>js(e,n)||a.get(e,n,i),has:(e,n)=>!!js(e,n)||a.has(e,n)}));/**
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
 */class Gk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jk(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Jk(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const so="@firebase/app",bs="0.7.32";/**
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
 */const Xa=new km("@firebase/app"),Qk="@firebase/app-compat",Xk="@firebase/analytics-compat",Zk="@firebase/analytics",ec="@firebase/app-check-compat",ac="@firebase/app-check",nc="@firebase/auth",ic="@firebase/auth-compat",rc="@firebase/database",oc="@firebase/database-compat",tc="@firebase/functions",sc="@firebase/functions-compat",dc="@firebase/installations",mc="@firebase/installations-compat",uc="@firebase/messaging",lc="@firebase/messaging-compat",_c="@firebase/performance",kc="@firebase/performance-compat",cc="@firebase/remote-config",pc="@firebase/remote-config-compat",hc="@firebase/storage",gc="@firebase/storage-compat",yc="@firebase/firestore",fc="@firebase/firestore-compat",jc="firebase",bc="9.9.4";/**
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
 */const hm="[DEFAULT]",vc={[so]:"fire-core",[Qk]:"fire-core-compat",[Zk]:"fire-analytics",[Xk]:"fire-analytics-compat",[ac]:"fire-app-check",[ec]:"fire-app-check-compat",[nc]:"fire-auth",[ic]:"fire-auth-compat",[rc]:"fire-rtdb",[oc]:"fire-rtdb-compat",[tc]:"fire-fn",[sc]:"fire-fn-compat",[dc]:"fire-iid",[mc]:"fire-iid-compat",[uc]:"fire-fcm",[lc]:"fire-fcm-compat",[_c]:"fire-perf",[kc]:"fire-perf-compat",[cc]:"fire-rc",[pc]:"fire-rc-compat",[hc]:"fire-gcs",[gc]:"fire-gcs-compat",[yc]:"fire-fst",[fc]:"fire-fst-compat","fire-js":"fire-js",[jc]:"fire-js-all"};/**
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
 */const Bi=new Map,mo=new Map;function wc(a,e){try{a.container.addComponent(e)}catch(n){Xa.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,n)}}function Hi(a){const e=a.name;if(mo.has(e))return Xa.debug(`There were multiple attempts to register component ${e}.`),!1;mo.set(e,a);for(const n of Bi.values())wc(n,a);return!0}function xc(a,e){const n=a.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),a.container.getProvider(e)}/**
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
 */const Cc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Za=new um("app","Firebase",Cc);/**
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
 */class Ec{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Za.create("app-deleted",{appName:this._name})}}/**
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
 */const Ic=bc;function Tc(a,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:hm,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Za.create("bad-app-name",{appName:String(i)});const r=Bi.get(i);if(r){if(ro(a,r.options)&&ro(n,r.config))return r;throw Za.create("duplicate-app",{appName:i})}const o=new Ak(i);for(const s of mo.values())o.addComponent(s);const t=new Ec(a,n,o);return Bi.set(i,t),t}function Sc(a=hm){const e=Bi.get(a);if(!e)throw Za.create("no-app",{appName:a});return e}function jn(a,e,n){var i;let r=(i=vc[a])!==null&&i!==void 0?i:a;n&&(r+=`-${n}`);const o=r.match(/\s|\//),t=e.match(/\s|\//);if(o||t){const s=[`Unable to register library "${r}" with version "${e}":`];o&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&t&&s.push("and"),t&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xa.warn(s.join(" "));return}Hi(new Zn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Nc="firebase-heartbeat-database",zc=1,ei="firebase-heartbeat-store";let Pr=null;function gm(){return Pr||(Pr=Kk(Nc,zc,{upgrade:(a,e)=>{switch(e){case 0:a.createObjectStore(ei)}}}).catch(a=>{throw Za.create("idb-open",{originalErrorMessage:a.message})})),Pr}async function Rc(a){var e;try{return(await gm()).transaction(ei).objectStore(ei).get(ym(a))}catch(n){if(n instanceof ui)Xa.warn(n.message);else{const i=Za.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Xa.warn(i.message)}}}async function vs(a,e){var n;try{const r=(await gm()).transaction(ei,"readwrite");return await r.objectStore(ei).put(e,ym(a)),r.done}catch(i){if(i instanceof ui)Xa.warn(i.message);else{const r=Za.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});Xa.warn(r.message)}}}function ym(a){return`${a.name}!${a.options.appId}`}/**
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
 */const Ac=1024,Pc=30*24*60*60*1e3;class Mc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dc(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ws();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Pc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ws(),{heartbeatsToSend:n,unsentEntries:i}=Oc(this._heartbeatsCache.heartbeats),r=tm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ws(){return new Date().toISOString().substring(0,10)}function Oc(a,e=Ac){const n=[];let i=a.slice();for(const r of a){const o=n.find(t=>t.agent===r.agent);if(o){if(o.dates.push(r.date),xs(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),xs(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Dc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jk()?bk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Rc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vs(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vs(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xs(a){return tm(JSON.stringify({version:2,heartbeats:a})).length}/**
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
 */function Fc(a){Hi(new Zn("platform-logger",e=>new Gk(e),"PRIVATE")),Hi(new Zn("heartbeat",e=>new Mc(e),"PRIVATE")),jn(so,bs,a),jn(so,bs,"esm2017"),jn("fire-js","")}Fc("");var Lc="firebase",qc="9.9.4";/**
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
 */jn(Lc,qc,"app");const Cs="@firebase/database",Es="0.13.6";/**
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
 */let fm="";function Bc(a){fm=a}/**
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
 */class Hc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Wc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ga(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const jm=function(a){try{if(typeof window<"u"&&typeof window[a]<"u"){const e=window[a];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Hc(e)}}catch{}return new Wc},Ga=jm("localStorage"),uo=jm("sessionStorage");/**
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
 */const bn=new km("@firebase/database"),$c=function(){let a=1;return function(){return a++}}(),bm=function(a){const e=Sk(a),n=new Tk;n.update(e);const i=n.digest();return Jo.encodeByteArray(i)},li=function(...a){let e="";for(let n=0;n<a.length;n++){const i=a[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=li.apply(null,i):typeof i=="object"?e+=fe(i):e+=i,e+=" "}return e};let Qa=null,Is=!0;const Uc=function(a,e){v(!e||a===!0||a===!1,"Can't turn on custom loggers persistently."),a===!0?(bn.logLevel=te.VERBOSE,Qa=bn.log.bind(bn),e&&uo.set("logging_enabled",!0)):typeof a=="function"?Qa=a:(Qa=null,uo.remove("logging_enabled"))},Ne=function(...a){if(Is===!0&&(Is=!1,Qa===null&&uo.get("logging_enabled")===!0&&Uc(!0)),Qa){const e=li.apply(null,a);Qa(e)}},_i=function(a){return function(...e){Ne(a,...e)}},lo=function(...a){const e="FIREBASE INTERNAL ERROR: "+li(...a);bn.error(e)},en=function(...a){const e=`FIREBASE FATAL ERROR: ${li(...a)}`;throw bn.error(e),new Error(e)},qe=function(...a){const e="FIREBASE WARNING: "+li(...a);bn.warn(e)},Kc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},vm=function(a){return typeof a=="number"&&(a!==a||a===Number.POSITIVE_INFINITY||a===Number.NEGATIVE_INFINITY)},Vc=function(a){if(document.readyState==="complete")a();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,a())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},En="[MIN_NAME]",an="[MAX_NAME]",Rn=function(a,e){if(a===e)return 0;if(a===En||e===an)return-1;if(e===En||a===an)return 1;{const n=Ts(a),i=Ts(e);return n!==null?i!==null?n-i===0?a.length-e.length:n-i:-1:i!==null?1:a<e?-1:1}},Yc=function(a,e){return a===e?0:a<e?-1:1},Dn=function(a,e){if(e&&a in e)return e[a];throw new Error("Missing required key ("+a+") in object: "+fe(e))},Zo=function(a){if(typeof a!="object"||a===null)return fe(a);const e=[];for(const i in a)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=fe(e[i]),n+=":",n+=Zo(a[e[i]]);return n+="}",n},wm=function(a,e){const n=a.length;if(n<=e)return[a];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(a.substring(r,n)):i.push(a.substring(r,r+e));return i};function De(a,e){for(const n in a)a.hasOwnProperty(n)&&e(n,a[n])}const xm=function(a){v(!vm(a),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,o,t,s,d;a===0?(o=0,t=0,r=1/a===-1/0?1:0):(r=a<0,a=Math.abs(a),a>=Math.pow(2,1-i)?(s=Math.min(Math.floor(Math.log(a)/Math.LN2),i),o=s+i,t=Math.round(a*Math.pow(2,n-s)-Math.pow(2,n))):(o=0,t=Math.round(a/Math.pow(2,1-i-n))));const m=[];for(d=n;d;d-=1)m.push(t%2?1:0),t=Math.floor(t/2);for(d=e;d;d-=1)m.push(o%2?1:0),o=Math.floor(o/2);m.push(r?1:0),m.reverse();const l=m.join("");let u="";for(d=0;d<64;d+=8){let _=parseInt(l.substr(d,8),2).toString(16);_.length===1&&(_="0"+_),u=u+_}return u.toLowerCase()},Gc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Jc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Qc(a,e){let n="Unknown Error";a==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":a==="permission_denied"?n="Client doesn't have permission to access the desired data.":a==="unavailable"&&(n="The service is unavailable");const i=new Error(a+" at "+e._path.toString()+": "+n);return i.code=a.toUpperCase(),i}const Xc=new RegExp("^-?(0*)\\d{1,10}$"),Zc=-2147483648,ep=2147483647,Ts=function(a){if(Xc.test(a)){const e=Number(a);if(e>=Zc&&e<=ep)return e}return null},ki=function(a){try{a()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},ap=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wn=function(a,e){const n=setTimeout(a,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class np{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ip{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qe(e)}}class _o{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_o.OWNER="owner";/**
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
 */const et="5",Cm="v",Em="s",Im="r",Tm="f",Sm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nm="ls",zm="p",ko="ac",Rm="websocket",Am="long_polling";/**
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
 */class rp{constructor(e,n,i,r,o=!1,t="",s=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=o,this.persistenceKey=t,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ga.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ga.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function op(a){return a.host!==a.internalHost||a.isCustomHost()||a.includeNamespaceInQueryParams}function Pm(a,e,n){v(typeof e=="string","typeof type must == string"),v(typeof n=="object","typeof params must == object");let i;if(e===Rm)i=(a.secure?"wss://":"ws://")+a.internalHost+"/.ws?";else if(e===Am)i=(a.secure?"https://":"http://")+a.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);op(a)&&(n.ns=a.namespace);const r=[];return De(n,(o,t)=>{r.push(o+"="+t)}),i+r.join("&")}/**
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
 */class tp{constructor(){this.counters_={}}incrementCounter(e,n=1){ga(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hk(this.counters_)}}/**
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
 */const Mr={},Or={};function at(a){const e=a.toString();return Mr[e]||(Mr[e]=new tp),Mr[e]}function sp(a,e){const n=a.toString();return Or[n]||(Or[n]=e()),Or[n]}/**
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
 */class dp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&ki(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ss="start",mp="close",up="pLPCommand",lp="pRTLPCB",Mm="id",Om="pw",Dm="ser",_p="cb",kp="seg",cp="ts",pp="d",hp="dframe",Fm=1870,Lm=30,gp=Fm-Lm,yp=25e3,fp=3e4;class kn{constructor(e,n,i,r,o,t,s){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=o,this.transportSessionId=t,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_i(e),this.stats_=at(n),this.urlFn=d=>(this.appCheckToken&&(d[ko]=this.appCheckToken),Pm(n,Am,d))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fp)),Vc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nt((...o)=>{const[t,s,d,m,l]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Ss)this.id=s,this.password=d;else if(t===mp)s?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(s,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+t)},(...o)=>{const[t,s]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(t,s)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ss]="t",i[Dm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[_p]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Cm]=et,this.transportSessionId&&(i[Em]=this.transportSessionId),this.lastSessionId&&(i[Nm]=this.lastSessionId),this.applicationId&&(i[zm]=this.applicationId),this.appCheckToken&&(i[ko]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sm.test(location.hostname)&&(i[Im]=Tm);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){kn.forceAllow_=!0}static forceDisallow(){kn.forceDisallow_=!0}static isAvailable(){return kn.forceAllow_?!0:!kn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Gc()&&!Jc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=om(n),r=wm(i,gp);for(let o=0;o<r.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[hp]="t",i[Mm]=e,i[Om]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nt{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$c(),window[up+this.uniqueCallbackIdentifier]=e,window[lp+this.uniqueCallbackIdentifier]=n,this.myIFrame=nt.createIFrame_();let o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const s=document.domain;o='<script>document.domain="'+s+'";<\/script>'}const t="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(t),this.myIFrame.doc.close()}catch(s){Ne("frame writing exception"),s.stack&&Ne(s.stack),Ne(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mm]=this.myID,e[Om]=this.myPW,e[Dm]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lm+i.length<=Fm;){const t=this.pendingSegs.shift();i=i+"&"+kp+r+"="+t.seg+"&"+cp+r+"="+t.ts+"&"+pp+r+"="+t.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(yp)),o=()=>{clearTimeout(r),i()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const jp=16384,bp=45e3;let Wi=null;typeof MozWebSocket<"u"?Wi=MozWebSocket:typeof WebSocket<"u"&&(Wi=WebSocket);class Ge{constructor(e,n,i,r,o,t,s){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_i(this.connId),this.stats_=at(n),this.connURL=Ge.connectionURL_(n,t,s,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,o){const t={};return t[Cm]=et,typeof location<"u"&&location.hostname&&Sm.test(location.hostname)&&(t[Im]=Tm),n&&(t[Em]=n),i&&(t[Nm]=i),r&&(t[ko]=r),o&&(t[zm]=o),Pm(e,Rm,t)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ga.set("previous_websocket_failure",!0);try{let i;mm(),this.mySock=new Wi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Wi!==null&&!Ge.forceDisallow_}static previouslyFailed(){return Ga.isInMemoryStorage||Ga.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ga.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Xn(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=wm(n,jp);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ge.responsesRequiredToBeHealthy=2;Ge.healthyTimeout=3e4;/**
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
 */class ai{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[kn,Ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ge&&Ge.isAvailable();let i=n&&!Ge.previouslyFailed();if(e.webSocketOnly&&(n||qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ge];else{const r=this.transports_=[];for(const o of ai.ALL_TRANSPORTS)o&&o.isAvailable()&&r.push(o);ai.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ai.globalTransportInitialized_=!1;/**
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
 */const vp=6e4,wp=5e3,xp=10*1024,Cp=100*1024,Dr="t",Ns="d",Ep="s",zs="r",Ip="e",Rs="o",As="a",Ps="n",Ms="p",Tp="h";class Sp{constructor(e,n,i,r,o,t,s,d,m,l){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=o,this.onMessage_=t,this.onReady_=s,this.onDisconnect_=d,this.onKill_=m,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_i("c:"+this.id+":"),this.transportManager_=new ai(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Wn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Cp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>xp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Dr in e){const n=e[Dr];n===As?this.upgradeIfSecondaryHealthy_():n===zs?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rs&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Dn("t",e),i=Dn("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ms,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:As,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ps,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Dn("t",e),i=Dn("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Dn(Dr,e);if(Ns in e){const i=e[Ns];if(n===Tp)this.onHandshake_(i);else if(n===Ps){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ep?this.onConnectionShutdown_(i):n===zs?this.onReset_(i):n===Ip?lo("Server Error: "+i):n===Rs?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),et!==i&&qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Wn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ms,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ga.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class qm{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Bm{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let o=0;o<r.length;o++)if(r[o].callback===n&&(!i||i===r[o].context)){r.splice(o,1);return}}validateEventType_(e){v(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class $i extends Bm{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!dm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $i}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Os=32,Ds=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new ie("")}function $(a){return a.pieceNum_>=a.pieces_.length?null:a.pieces_[a.pieceNum_]}function Aa(a){return a.pieces_.length-a.pieceNum_}function se(a){let e=a.pieceNum_;return e<a.pieces_.length&&e++,new ie(a.pieces_,e)}function Hm(a){return a.pieceNum_<a.pieces_.length?a.pieces_[a.pieces_.length-1]:null}function Np(a){let e="";for(let n=a.pieceNum_;n<a.pieces_.length;n++)a.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(a.pieces_[n])));return e||"/"}function Wm(a,e=0){return a.pieces_.slice(a.pieceNum_+e)}function $m(a){if(a.pieceNum_>=a.pieces_.length)return null;const e=[];for(let n=a.pieceNum_;n<a.pieces_.length-1;n++)e.push(a.pieces_[n]);return new ie(e,0)}function je(a,e){const n=[];for(let i=a.pieceNum_;i<a.pieces_.length;i++)n.push(a.pieces_[i]);if(e instanceof ie)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new ie(n,0)}function H(a){return a.pieceNum_>=a.pieces_.length}function Pe(a,e){const n=$(a),i=$(e);if(n===null)return e;if(n===i)return Pe(se(a),se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+a+")")}function Um(a,e){if(Aa(a)!==Aa(e))return!1;for(let n=a.pieceNum_,i=e.pieceNum_;n<=a.pieces_.length;n++,i++)if(a.pieces_[n]!==e.pieces_[i])return!1;return!0}function Qe(a,e){let n=a.pieceNum_,i=e.pieceNum_;if(Aa(a)>Aa(e))return!1;for(;n<a.pieces_.length;){if(a.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class zp{constructor(e,n){this.errorPrefix_=n,this.parts_=Wm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=lr(this.parts_[i]);Km(this)}}function Rp(a,e){a.parts_.length>0&&(a.byteLength_+=1),a.parts_.push(e),a.byteLength_+=lr(e),Km(a)}function Ap(a){const e=a.parts_.pop();a.byteLength_-=lr(e),a.parts_.length>0&&(a.byteLength_-=1)}function Km(a){if(a.byteLength_>Ds)throw new Error(a.errorPrefix_+"has a key path longer than "+Ds+" bytes ("+a.byteLength_+").");if(a.parts_.length>Os)throw new Error(a.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Os+") or object contains a cycle "+$a(a))}function $a(a){return a.parts_.length===0?"":"in property '"+a.parts_.join(".")+"'"}/**
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
 */class it extends Bm{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new it}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Fn=1e3,Pp=60*5*1e3,Fs=30*1e3,Mp=1.3,Op=3e4,Dp="server_kill",Ls=3;class ca extends qm{constructor(e,n,i,r,o,t,s,d){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=o,this.authTokenProvider_=t,this.appCheckTokenProvider_=s,this.authOverride_=d,this.id=ca.nextPersistentConnectionId_++,this.log_=_i("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fn,this.maxReconnectDelay_=Pp,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d&&!mm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");it.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$i.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,o={r,a:e,b:n};this.log_(fe(o)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Qo,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:t=>{const s=t.d;t.s==="ok"?n.resolve(s):n.reject(s)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(e,n,i,r){this.initConnection_();const o=e._queryIdentifier,t=e._path.toString();this.log_("Listen called for "+t+" "+o),this.listens.has(t)||this.listens.set(t,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(t).has(o),"listen() called twice for same path/queryId.");const s={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(t).set(o,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const o={p:i},t="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(t,o,s=>{const d=s.d,m=s.s;ca.warnOnListenWarnings_(d,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",s),m!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(m,d))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ga(e,"w")){const i=Cn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ek(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Fs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ck(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const o=r.s,t=r.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,t))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const o={p:e},t="n";r&&(o.q=i,o.t=r),this.sendRequest(t,o)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const o={p:n,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,t=>{r&&setTimeout(()=>{r(t.s,t.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,o){this.initConnection_();const t={p:n,d:i};o!==void 0&&(t.h=o),this.outstandingPuts_.push({action:e,request:t,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):lo("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Op&&(this.reconnectDelay_=Fn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Mp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ca.nextConnectionId_++,o=this.lastSessionId;let t=!1,s=null;const d=function(){s?s.close():(t=!0,i())},m=function(u){v(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(u)};this.realtime_={close:d,sendRequest:m};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,_]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);t?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=_&&_.token,s=new Sp(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{qe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dp)},o))}catch(u){this.log_("Failed to get token: "+u),t||(this.repoInfo_.nodeAdmin&&qe(u),d())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hs(this.interruptReasons_)&&(this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(o=>Zo(o)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new ie(e).toString();let r;if(this.listens.has(i)){const o=this.listens.get(i);r=o.get(n),o.delete(n),o.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ls&&(this.reconnectDelay_=Fs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ls&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fm.replace(/\./g,"-")]=1,dm()?e["framework.cordova"]=1:fk()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$i.getInstance().currentlyOnline();return hs(this.interruptReasons_)&&e}}ca.nextPersistentConnectionId_=0;ca.nextConnectionId_=0;/**
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
 */class B{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new B(e,n)}}/**
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
 */class kr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new B(En,e),r=new B(En,n);return this.compare(i,r)!==0}minPost(){return B.MIN}}/**
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
 */let xi;class Vm extends kr{static get __EMPTY_NODE(){return xi}static set __EMPTY_NODE(e){xi=e}compare(e,n){return Rn(e.name,n.name)}isDefinedOn(e){throw zn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return B.MIN}maxPost(){return new B(an,xi)}makePost(e,n){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,xi)}toString(){return".key"}}const vn=new Vm;/**
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
 */class Ci{constructor(e,n,i,r,o=null){this.isReverse_=r,this.resultGenerator_=o,this.nodeStack_=[];let t=1;for(;!e.isEmpty();)if(e=e,t=n?i(e.key,n):1,r&&(t*=-1),t<0)this.isReverse_?e=e.left:e=e.right;else if(t===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,i,r,o){this.key=e,this.value=n,this.color=i!=null?i:ve.RED,this.left=r!=null?r:Oe.EMPTY_NODE,this.right=o!=null?o:Oe.EMPTY_NODE}copy(e,n,i,r,o){return new ve(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,o!=null?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const o=i(e,r.key);return o<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):o===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class Fp{copy(e,n,i,r,o){return this}insert(e,n,i){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ci(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ci(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ci(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ci(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new Fp;/**
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
 */function Lp(a,e){return Rn(a.name,e.name)}function rt(a,e){return Rn(a,e)}/**
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
 */let co;function qp(a){co=a}const Ym=function(a){return typeof a=="number"?"number:"+xm(a):"string:"+a},Gm=function(a){if(a.isLeafNode()){const e=a.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ga(e,".sv"),"Priority must be a string or number.")}else v(a===co||a.isEmpty(),"priority of unexpected type.");v(a===co||a.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let qs;class be{constructor(e,n=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gm(this.priorityNode_)}static set __childrenNodeConstructor(e){qs=e}static get __childrenNodeConstructor(){return qs}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:$(e)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=$(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(v(i!==".priority"||Aa(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ym(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xm(this.value_):e+=this.value_,this.lazyHash_=bm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof be.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=be.VALUE_TYPE_ORDER.indexOf(n),o=be.VALUE_TYPE_ORDER.indexOf(i);return v(r>=0,"Unknown leaf type: "+n),v(o>=0,"Unknown leaf type: "+i),r===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Jm,Qm;function Bp(a){Jm=a}function Hp(a){Qm=a}class Wp extends kr{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),o=i.compareTo(r);return o===0?Rn(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(an,new be("[PRIORITY-POST]",Qm))}makePost(e,n){const i=Jm(e);return new B(n,new be("[PRIORITY-POST]",i))}toString(){return".priority"}}const he=new Wp;/**
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
 */const $p=Math.log(2);class Up{constructor(e){const n=o=>parseInt(Math.log(o)/$p,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ui=function(a,e,n,i){a.sort(e);const r=function(d,m){const l=m-d;let u,_;if(l===0)return null;if(l===1)return u=a[d],_=n?n(u):u,new ve(_,u.node,ve.BLACK,null,null);{const p=parseInt(l/2,10)+d,y=r(d,p),E=r(p+1,m);return u=a[p],_=n?n(u):u,new ve(_,u.node,ve.BLACK,y,E)}},o=function(d){let m=null,l=null,u=a.length;const _=function(y,E){const I=u-y,M=u;u-=y;const S=r(I+1,M),z=a[I],W=n?n(z):z;p(new ve(W,z.node,E,null,S))},p=function(y){m?(m.left=y,m=y):(l=y,m=y)};for(let y=0;y<d.count;++y){const E=d.nextBitIsOne(),I=Math.pow(2,d.count-(y+1));E?_(I,ve.BLACK):(_(I,ve.BLACK),_(I,ve.RED))}return l},t=new Up(a.length),s=o(t);return new Oe(i||e,s)};/**
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
 */let Fr;const ln={};class _a{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return v(ln&&he,"ChildrenNode.ts has not been loaded"),Fr=Fr||new _a({".priority":ln},{".priority":he}),Fr}get(e){const n=Cn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return ga(this.indexSet_,e.toString())}addIndex(e,n){v(e!==vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const o=n.getIterator(B.Wrap);let t=o.getNext();for(;t;)r=r||e.isDefinedOn(t.node),i.push(t),t=o.getNext();let s;r?s=Ui(i,e.getCompare()):s=ln;const d=e.toString(),m=Object.assign({},this.indexSet_);m[d]=e;const l=Object.assign({},this.indexes_);return l[d]=s,new _a(l,m)}addToIndexes(e,n){const i=qi(this.indexes_,(r,o)=>{const t=Cn(this.indexSet_,o);if(v(t,"Missing index implementation for "+o),r===ln)if(t.isDefinedOn(e.node)){const s=[],d=n.getIterator(B.Wrap);let m=d.getNext();for(;m;)m.name!==e.name&&s.push(m),m=d.getNext();return s.push(e),Ui(s,t.getCompare())}else return ln;else{const s=n.get(e.name);let d=r;return s&&(d=d.remove(new B(e.name,s))),d.insert(e,e.node)}});return new _a(i,this.indexSet_)}removeFromIndexes(e,n){const i=qi(this.indexes_,r=>{if(r===ln)return r;{const o=n.get(e.name);return o?r.remove(new B(e.name,o)):r}});return new _a(i,this.indexSet_)}}/**
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
 */let Ln;class P{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Gm(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ln||(Ln=new P(new Oe(rt),null,_a.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ln}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ln:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(v(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new B(e,n);let r,o;n.isEmpty()?(r=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(i,this.children_));const t=r.isEmpty()?Ln:this.priorityNode_;return new P(r,t,o)}}updateChild(e,n){const i=$(e);if(i===null)return n;{v($(e)!==".priority"||Aa(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(se(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,o=!0;if(this.forEachChild(he,(t,s)=>{n[t]=s.val(e),i++,o&&P.INTEGER_REGEXP_.test(t)?r=Math.max(r,Number(t)):o=!1}),!e&&o&&r<2*i){const t=[];for(const s in n)t[s]=n[s];return t}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ym(this.getPriority().val())+":"),this.forEachChild(he,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":bm(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const o=r.getPredecessorKey(new B(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new B(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new B(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,B.Wrap);let o=r.peek();for(;o!=null&&n.compare(o,e)<0;)r.getNext(),o=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let o=r.peek();for(;o!=null&&n.compare(o,e)>0;)r.getNext(),o=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ci?-1:0}withIndex(e){if(e===vn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(he),r=n.getIterator(he);let o=i.getNext(),t=r.getNext();for(;o&&t;){if(o.name!==t.name||!o.node.equals(t.node))return!1;o=i.getNext(),t=r.getNext()}return o===null&&t===null}else return!1;else return!1}}resolveIndex_(e){return e===vn?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Kp extends P{constructor(){super(new Oe(rt),P.EMPTY_NODE,_a.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const ci=new Kp;Object.defineProperties(B,{MIN:{value:new B(En,P.EMPTY_NODE)},MAX:{value:new B(an,ci)}});Vm.__EMPTY_NODE=P.EMPTY_NODE;be.__childrenNodeConstructor=P;qp(ci);Hp(ci);/**
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
 */const Vp=!0;function Ee(a,e=null){if(a===null)return P.EMPTY_NODE;if(typeof a=="object"&&".priority"in a&&(e=a[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof a=="object"&&".value"in a&&a[".value"]!==null&&(a=a[".value"]),typeof a!="object"||".sv"in a){const n=a;return new be(n,Ee(e))}if(!(a instanceof Array)&&Vp){const n=[];let i=!1;if(De(a,(t,s)=>{if(t.substring(0,1)!=="."){const d=Ee(s);d.isEmpty()||(i=i||!d.getPriority().isEmpty(),n.push(new B(t,d)))}}),n.length===0)return P.EMPTY_NODE;const o=Ui(n,Lp,t=>t.name,rt);if(i){const t=Ui(n,he.getCompare());return new P(o,Ee(e),new _a({".priority":t},{".priority":he}))}else return new P(o,Ee(e),_a.Default)}else{let n=P.EMPTY_NODE;return De(a,(i,r)=>{if(ga(a,i)&&i.substring(0,1)!=="."){const o=Ee(r);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(i,o))}}),n.updatePriority(Ee(e))}}Bp(Ee);/**
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
 */class Yp extends kr{constructor(e){super(),this.indexPath_=e,v(!H(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),o=i.compareTo(r);return o===0?Rn(e.name,n.name):o}makePost(e,n){const i=Ee(e),r=P.EMPTY_NODE.updateChild(this.indexPath_,i);return new B(n,r)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,ci);return new B(an,e)}toString(){return Wm(this.indexPath_,0).join("/")}}/**
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
 */class Gp extends kr{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Rn(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,n){const i=Ee(e);return new B(n,i)}toString(){return".value"}}const Jp=new Gp;/**
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
 */function Xm(a){return{type:"value",snapshotNode:a}}function In(a,e){return{type:"child_added",snapshotNode:e,childName:a}}function ni(a,e){return{type:"child_removed",snapshotNode:e,childName:a}}function ii(a,e,n){return{type:"child_changed",snapshotNode:e,childName:a,oldSnap:n}}function Qp(a,e){return{type:"child_moved",snapshotNode:e,childName:a}}/**
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
 */class ot{constructor(e){this.index_=e}updateChild(e,n,i,r,o,t){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=e.getImmediateChild(n);return s.getChild(r).equals(i.getChild(r))&&s.isEmpty()===i.isEmpty()||(t!=null&&(i.isEmpty()?e.hasChild(n)?t.trackChildChange(ni(n,s)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?t.trackChildChange(In(n,i)):t.trackChildChange(ii(n,i,s))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(he,(r,o)=>{n.hasChild(r)||i.trackChildChange(ni(r,o))}),n.isLeafNode()||n.forEachChild(he,(r,o)=>{if(e.hasChild(r)){const t=e.getImmediateChild(r);t.equals(o)||i.trackChildChange(ii(r,o,t))}else i.trackChildChange(In(r,o))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ri{constructor(e){this.indexedFilter_=new ot(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ri.getStartPost_(e),this.endPost_=ri.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,o,t){return this.matches(new B(n,i))||(i=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,o,t)}updateFullNode(e,n,i){n.isLeafNode()&&(n=P.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(P.EMPTY_NODE);const o=this;return n.forEachChild(he,(t,s)=>{o.matches(new B(t,s))||(r=r.updateImmediateChild(t,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Xp{constructor(e){this.rangedFilter_=new ri(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,o,t){return this.rangedFilter_.matches(new B(n,i))||(i=P.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,o,t):this.fullLimitUpdateChild_(e,n,i,o,t)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=P.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let t=0;for(;o.hasNext()&&t<this.limit_;){const s=o.getNext();let d;if(this.reverse_?d=this.index_.compare(this.rangedFilter_.getStartPost(),s)<=0:d=this.index_.compare(s,this.rangedFilter_.getEndPost())<=0,d)r=r.updateImmediateChild(s.name,s.node),t++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(P.EMPTY_NODE);let o,t,s,d;if(this.reverse_){d=r.getReverseIterator(this.index_),o=this.rangedFilter_.getEndPost(),t=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();s=(_,p)=>u(p,_)}else d=r.getIterator(this.index_),o=this.rangedFilter_.getStartPost(),t=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let m=0,l=!1;for(;d.hasNext();){const u=d.getNext();!l&&s(o,u)<=0&&(l=!0),l&&m<this.limit_&&s(u,t)<=0?m++:r=r.updateImmediateChild(u.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,o){let t;if(this.reverse_){const u=this.index_.getCompare();t=(_,p)=>u(p,_)}else t=this.index_.getCompare();const s=e;v(s.numChildren()===this.limit_,"");const d=new B(n,i),m=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),l=this.rangedFilter_.matches(d);if(s.hasChild(n)){const u=s.getImmediateChild(n);let _=r.getChildAfterChild(this.index_,m,this.reverse_);for(;_!=null&&(_.name===n||s.hasChild(_.name));)_=r.getChildAfterChild(this.index_,_,this.reverse_);const p=_==null?1:t(_,d);if(l&&!i.isEmpty()&&p>=0)return o!=null&&o.trackChildChange(ii(n,i,u)),s.updateImmediateChild(n,i);{o!=null&&o.trackChildChange(ni(n,u));const E=s.updateImmediateChild(n,P.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(o!=null&&o.trackChildChange(In(_.name,_.node)),E.updateImmediateChild(_.name,_.node)):E}}else return i.isEmpty()?e:l&&t(m,d)>=0?(o!=null&&(o.trackChildChange(ni(m.name,m.node)),o.trackChildChange(In(n,i))),s.updateImmediateChild(n,i).updateImmediateChild(m.name,P.EMPTY_NODE)):e}}/**
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
 */class tt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:En}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:an}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new tt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Zp(a){return a.loadsAllData()?new ot(a.getIndex()):a.hasLimit()?new Xp(a):new ri(a)}function Bs(a){const e={};if(a.isDefault())return e;let n;return a.index_===he?n="$priority":a.index_===Jp?n="$value":a.index_===vn?n="$key":(v(a.index_ instanceof Yp,"Unrecognized index type!"),n=a.index_.toString()),e.orderBy=fe(n),a.startSet_&&(e.startAt=fe(a.indexStartValue_),a.startNameSet_&&(e.startAt+=","+fe(a.indexStartName_))),a.endSet_&&(e.endAt=fe(a.indexEndValue_),a.endNameSet_&&(e.endAt+=","+fe(a.indexEndName_))),a.limitSet_&&(a.isViewFromLeft()?e.limitToFirst=a.limit_:e.limitToLast=a.limit_),e}function Hs(a){const e={};if(a.startSet_&&(e.sp=a.indexStartValue_,a.startNameSet_&&(e.sn=a.indexStartName_)),a.endSet_&&(e.ep=a.indexEndValue_,a.endNameSet_&&(e.en=a.indexEndName_)),a.limitSet_){e.l=a.limit_;let n=a.viewFrom_;n===""&&(a.isViewFromLeft()?n="l":n="r"),e.vf=n}return a.index_!==he&&(e.i=a.index_.toString()),e}/**
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
 */class Ki extends qm{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=_i("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const t=Ki.getListenId_(e,i),s={};this.listens_[t]=s;const d=Bs(e._queryParams);this.restRequest_(o+".json",d,(m,l)=>{let u=l;if(m===404&&(u=null,m=null),m===null&&this.onDataUpdate_(o,u,!1,i),Cn(this.listens_,t)===s){let _;m?m===401?_="permission_denied":_="rest_error:"+m:_="ok",r(_,null)}})}unlisten(e,n){const i=Ki.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Bs(e._queryParams),i=e._path.toString(),r=new Qo;return this.restRequest_(i+".json",n,(o,t)=>{let s=t;o===404&&(s=null,o=null),o===null?(this.onDataUpdate_(i,s,!1,null),r.resolve(s)):r.reject(new Error(s))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,o])=>{r&&r.accessToken&&(n.auth=r.accessToken),o&&o.token&&(n.ac=o.token);const t=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ik(n);this.log_("Sending REST request for "+t);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(i&&s.readyState===4){this.log_("REST Response for "+t+" received. status:",s.status,"response:",s.responseText);let d=null;if(s.status>=200&&s.status<300){try{d=Xn(s.responseText)}catch{qe("Failed to parse JSON response for "+t+": "+s.responseText)}i(null,d)}else s.status!==401&&s.status!==404&&qe("Got unsuccessful REST response for "+t+" Status: "+s.status),i(s.status);i=null}},s.open("GET",t,!0),s.send()})}}/**
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
 */class eh{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Vi(){return{value:null,children:new Map}}function Zm(a,e,n){if(H(e))a.value=n,a.children.clear();else if(a.value!==null)a.value=a.value.updateChild(e,n);else{const i=$(e);a.children.has(i)||a.children.set(i,Vi());const r=a.children.get(i);e=se(e),Zm(r,e,n)}}function po(a,e,n){a.value!==null?n(e,a.value):ah(a,(i,r)=>{const o=new ie(e.toString()+"/"+i);po(r,o,n)})}function ah(a,e){a.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class nh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&De(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Ws=10*1e3,ih=30*1e3,rh=5*60*1e3;class oh{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new nh(e);const i=Ws+(ih-Ws)*Math.random();Wn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;De(e,(r,o)=>{o>0&&ga(this.statsToReport_,r)&&(n[r]=o,i=!0)}),i&&this.server_.reportStats(n),Wn(this.reportStats_.bind(this),Math.floor(Math.random()*2*rh))}}/**
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
 */var Xe;(function(a){a[a.OVERWRITE=0]="OVERWRITE",a[a.MERGE=1]="MERGE",a[a.ACK_USER_WRITE=2]="ACK_USER_WRITE",a[a.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function eu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function st(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dt(a){return{fromUser:!1,fromServer:!0,queryId:a,tagged:!0}}/**
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
 */class Yi{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Xe.ACK_USER_WRITE,this.source=eu()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new Yi(G(),n,this.revert)}}else return v($(this.path)===e,"operationForChild called for unrelated child."),new Yi(se(this.path),this.affectedTree,this.revert)}}/**
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
 */class oi{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new oi(this.source,G()):new oi(this.source,se(this.path))}}/**
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
 */class nn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Xe.OVERWRITE}operationForChild(e){return H(this.path)?new nn(this.source,G(),this.snap.getImmediateChild(e)):new nn(this.source,se(this.path),this.snap)}}/**
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
 */class ti{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Xe.MERGE}operationForChild(e){if(H(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new nn(this.source,G(),n.value):new ti(this.source,G(),n)}else return v($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ti(this.source,se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Pa{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class th{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function sh(a,e,n,i){const r=[],o=[];return e.forEach(t=>{t.type==="child_changed"&&a.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(Qp(t.childName,t.snapshotNode))}),qn(a,r,"child_removed",e,i,n),qn(a,r,"child_added",e,i,n),qn(a,r,"child_moved",o,i,n),qn(a,r,"child_changed",e,i,n),qn(a,r,"value",e,i,n),r}function qn(a,e,n,i,r,o){const t=i.filter(s=>s.type===n);t.sort((s,d)=>mh(a,s,d)),t.forEach(s=>{const d=dh(a,s,o);r.forEach(m=>{m.respondsTo(s.type)&&e.push(m.createEvent(d,a.query_))})})}function dh(a,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,a.index_)),e}function mh(a,e,n){if(e.childName==null||n.childName==null)throw zn("Should only compare child_ events.");const i=new B(e.childName,e.snapshotNode),r=new B(n.childName,n.snapshotNode);return a.index_.compare(i,r)}/**
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
 */function cr(a,e){return{eventCache:a,serverCache:e}}function $n(a,e,n,i){return cr(new Pa(e,n,i),a.serverCache)}function au(a,e,n,i){return cr(a.eventCache,new Pa(e,n,i))}function Gi(a){return a.eventCache.isFullyInitialized()?a.eventCache.getNode():null}function rn(a){return a.serverCache.isFullyInitialized()?a.serverCache.getNode():null}/**
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
 */let Lr;const uh=()=>(Lr||(Lr=new Oe(Yc)),Lr);class ue{constructor(e,n=uh()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return De(e,(i,r)=>{n=n.set(new ie(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(H(e))return null;{const i=$(e),r=this.children.get(i);if(r!==null){const o=r.findRootMostMatchingPathAndValue(se(e),n);return o!=null?{path:je(new ie(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const n=$(e),i=this.children.get(n);return i!==null?i.subtree(se(e)):new ue(null)}}set(e,n){if(H(e))return new ue(n,this.children);{const i=$(e),o=(this.children.get(i)||new ue(null)).set(se(e),n),t=this.children.insert(i,o);return new ue(this.value,t)}}remove(e){if(H(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=$(e),i=this.children.get(n);if(i){const r=i.remove(se(e));let o;return r.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,r),this.value===null&&o.isEmpty()?new ue(null):new ue(this.value,o)}else return this}}get(e){if(H(e))return this.value;{const n=$(e),i=this.children.get(n);return i?i.get(se(e)):null}}setTree(e,n){if(H(e))return n;{const i=$(e),o=(this.children.get(i)||new ue(null)).setTree(se(e),n);let t;return o.isEmpty()?t=this.children.remove(i):t=this.children.insert(i,o),new ue(this.value,t)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,o)=>{i[r]=o.fold_(je(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(H(e))return null;{const o=$(e),t=this.children.get(o);return t?t.findOnPath_(se(e),je(n,o),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,i){if(H(e))return this;{this.value&&i(n,this.value);const r=$(e),o=this.children.get(r);return o?o.foreachOnPath_(se(e),je(n,r),i):new ue(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(je(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class aa{constructor(e){this.writeTree_=e}static empty(){return new aa(new ue(null))}}function Un(a,e,n){if(H(e))return new aa(new ue(n));{const i=a.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let o=i.value;const t=Pe(r,e);return o=o.updateChild(t,n),new aa(a.writeTree_.set(r,o))}else{const r=new ue(n),o=a.writeTree_.setTree(e,r);return new aa(o)}}}function $s(a,e,n){let i=a;return De(n,(r,o)=>{i=Un(i,je(e,r),o)}),i}function Us(a,e){if(H(e))return aa.empty();{const n=a.writeTree_.setTree(e,new ue(null));return new aa(n)}}function ho(a,e){return tn(a,e)!=null}function tn(a,e){const n=a.writeTree_.findRootMostValueAndPath(e);return n!=null?a.writeTree_.get(n.path).getChild(Pe(n.path,e)):null}function Ks(a){const e=[],n=a.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(he,(i,r)=>{e.push(new B(i,r))}):a.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new B(i,r.value))}),e}function Ta(a,e){if(H(e))return a;{const n=tn(a,e);return n!=null?new aa(new ue(n)):new aa(a.writeTree_.subtree(e))}}function go(a){return a.writeTree_.isEmpty()}function Tn(a,e){return nu(G(),a.writeTree_,e)}function nu(a,e,n){if(e.value!=null)return n.updateChild(a,e.value);{let i=null;return e.children.inorderTraversal((r,o)=>{r===".priority"?(v(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):n=nu(je(a,r),o,n)}),!n.getChild(a).isEmpty()&&i!==null&&(n=n.updateChild(je(a,".priority"),i)),n}}/**
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
 */function pr(a,e){return tu(e,a)}function lh(a,e,n,i,r){v(i>a.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),a.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(a.visibleWrites=Un(a.visibleWrites,e,n)),a.lastWriteId=i}function _h(a,e){for(let n=0;n<a.allWrites.length;n++){const i=a.allWrites[n];if(i.writeId===e)return i}return null}function kh(a,e){const n=a.allWrites.findIndex(s=>s.writeId===e);v(n>=0,"removeWrite called with nonexistent writeId.");const i=a.allWrites[n];a.allWrites.splice(n,1);let r=i.visible,o=!1,t=a.allWrites.length-1;for(;r&&t>=0;){const s=a.allWrites[t];s.visible&&(t>=n&&ch(s,i.path)?r=!1:Qe(i.path,s.path)&&(o=!0)),t--}if(r){if(o)return ph(a),!0;if(i.snap)a.visibleWrites=Us(a.visibleWrites,i.path);else{const s=i.children;De(s,d=>{a.visibleWrites=Us(a.visibleWrites,je(i.path,d))})}return!0}else return!1}function ch(a,e){if(a.snap)return Qe(a.path,e);for(const n in a.children)if(a.children.hasOwnProperty(n)&&Qe(je(a.path,n),e))return!0;return!1}function ph(a){a.visibleWrites=iu(a.allWrites,hh,G()),a.allWrites.length>0?a.lastWriteId=a.allWrites[a.allWrites.length-1].writeId:a.lastWriteId=-1}function hh(a){return a.visible}function iu(a,e,n){let i=aa.empty();for(let r=0;r<a.length;++r){const o=a[r];if(e(o)){const t=o.path;let s;if(o.snap)Qe(n,t)?(s=Pe(n,t),i=Un(i,s,o.snap)):Qe(t,n)&&(s=Pe(t,n),i=Un(i,G(),o.snap.getChild(s)));else if(o.children){if(Qe(n,t))s=Pe(n,t),i=$s(i,s,o.children);else if(Qe(t,n))if(s=Pe(t,n),H(s))i=$s(i,G(),o.children);else{const d=Cn(o.children,$(s));if(d){const m=d.getChild(se(s));i=Un(i,G(),m)}}}else throw zn("WriteRecord should have .snap or .children")}}return i}function ru(a,e,n,i,r){if(!i&&!r){const o=tn(a.visibleWrites,e);if(o!=null)return o;{const t=Ta(a.visibleWrites,e);if(go(t))return n;if(n==null&&!ho(t,G()))return null;{const s=n||P.EMPTY_NODE;return Tn(t,s)}}}else{const o=Ta(a.visibleWrites,e);if(!r&&go(o))return n;if(!r&&n==null&&!ho(o,G()))return null;{const t=function(m){return(m.visible||r)&&(!i||!~i.indexOf(m.writeId))&&(Qe(m.path,e)||Qe(e,m.path))},s=iu(a.allWrites,t,e),d=n||P.EMPTY_NODE;return Tn(s,d)}}}function gh(a,e,n){let i=P.EMPTY_NODE;const r=tn(a.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(he,(o,t)=>{i=i.updateImmediateChild(o,t)}),i;if(n){const o=Ta(a.visibleWrites,e);return n.forEachChild(he,(t,s)=>{const d=Tn(Ta(o,new ie(t)),s);i=i.updateImmediateChild(t,d)}),Ks(o).forEach(t=>{i=i.updateImmediateChild(t.name,t.node)}),i}else{const o=Ta(a.visibleWrites,e);return Ks(o).forEach(t=>{i=i.updateImmediateChild(t.name,t.node)}),i}}function yh(a,e,n,i,r){v(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=je(e,n);if(ho(a.visibleWrites,o))return null;{const t=Ta(a.visibleWrites,o);return go(t)?r.getChild(n):Tn(t,r.getChild(n))}}function fh(a,e,n,i){const r=je(e,n),o=tn(a.visibleWrites,r);if(o!=null)return o;if(i.isCompleteForChild(n)){const t=Ta(a.visibleWrites,r);return Tn(t,i.getNode().getImmediateChild(n))}else return null}function jh(a,e){return tn(a.visibleWrites,e)}function bh(a,e,n,i,r,o,t){let s;const d=Ta(a.visibleWrites,e),m=tn(d,G());if(m!=null)s=m;else if(n!=null)s=Tn(d,n);else return[];if(s=s.withIndex(t),!s.isEmpty()&&!s.isLeafNode()){const l=[],u=t.getCompare(),_=o?s.getReverseIteratorFrom(i,t):s.getIteratorFrom(i,t);let p=_.getNext();for(;p&&l.length<r;)u(p,i)!==0&&l.push(p),p=_.getNext();return l}else return[]}function vh(){return{visibleWrites:aa.empty(),allWrites:[],lastWriteId:-1}}function Ji(a,e,n,i){return ru(a.writeTree,a.treePath,e,n,i)}function mt(a,e){return gh(a.writeTree,a.treePath,e)}function Vs(a,e,n,i){return yh(a.writeTree,a.treePath,e,n,i)}function Qi(a,e){return jh(a.writeTree,je(a.treePath,e))}function wh(a,e,n,i,r,o){return bh(a.writeTree,a.treePath,e,n,i,r,o)}function ut(a,e,n){return fh(a.writeTree,a.treePath,e,n)}function ou(a,e){return tu(je(a.treePath,e),a.writeTree)}function tu(a,e){return{treePath:a,writeTree:e}}/**
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
 */class xh{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;v(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),v(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const o=r.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(i,ii(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(i,ni(i,r.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(i,In(i,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(i,ii(i,e.snapshotNode,r.oldSnap));else throw zn("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ch{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const su=new Ch;class lt{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Pa(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ut(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rn(this.viewCache_),o=wh(this.writes_,r,n,1,i,e);return o.length===0?null:o[0]}}/**
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
 */function Eh(a){return{filter:a}}function Ih(a,e){v(e.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed")}function Th(a,e,n,i,r){const o=new xh;let t,s;if(n.type===Xe.OVERWRITE){const m=n;m.source.fromUser?t=yo(a,e,m.path,m.snap,i,r,o):(v(m.source.fromServer,"Unknown source."),s=m.source.tagged||e.serverCache.isFiltered()&&!H(m.path),t=Xi(a,e,m.path,m.snap,i,r,s,o))}else if(n.type===Xe.MERGE){const m=n;m.source.fromUser?t=Nh(a,e,m.path,m.children,i,r,o):(v(m.source.fromServer,"Unknown source."),s=m.source.tagged||e.serverCache.isFiltered(),t=fo(a,e,m.path,m.children,i,r,s,o))}else if(n.type===Xe.ACK_USER_WRITE){const m=n;m.revert?t=Ah(a,e,m.path,i,r,o):t=zh(a,e,m.path,m.affectedTree,i,r,o)}else if(n.type===Xe.LISTEN_COMPLETE)t=Rh(a,e,n.path,i,o);else throw zn("Unknown operation type: "+n.type);const d=o.getChanges();return Sh(e,t,d),{viewCache:t,changes:d}}function Sh(a,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=Gi(a);(n.length>0||!a.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(Xm(Gi(e)))}}function du(a,e,n,i,r,o){const t=e.eventCache;if(Qi(i,n)!=null)return e;{let s,d;if(H(n))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=rn(e),l=m instanceof P?m:P.EMPTY_NODE,u=mt(i,l);s=a.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const m=Ji(i,rn(e));s=a.filter.updateFullNode(e.eventCache.getNode(),m,o)}else{const m=$(n);if(m===".priority"){v(Aa(n)===1,"Can't have a priority with additional path components");const l=t.getNode();d=e.serverCache.getNode();const u=Vs(i,n,l,d);u!=null?s=a.filter.updatePriority(l,u):s=t.getNode()}else{const l=se(n);let u;if(t.isCompleteForChild(m)){d=e.serverCache.getNode();const _=Vs(i,n,t.getNode(),d);_!=null?u=t.getNode().getImmediateChild(m).updateChild(l,_):u=t.getNode().getImmediateChild(m)}else u=ut(i,m,e.serverCache);u!=null?s=a.filter.updateChild(t.getNode(),m,u,l,r,o):s=t.getNode()}}return $n(e,s,t.isFullyInitialized()||H(n),a.filter.filtersNodes())}}function Xi(a,e,n,i,r,o,t,s){const d=e.serverCache;let m;const l=t?a.filter:a.filter.getIndexedFilter();if(H(n))m=l.updateFullNode(d.getNode(),i,null);else if(l.filtersNodes()&&!d.isFiltered()){const p=d.getNode().updateChild(n,i);m=l.updateFullNode(d.getNode(),p,null)}else{const p=$(n);if(!d.isCompleteForPath(n)&&Aa(n)>1)return e;const y=se(n),I=d.getNode().getImmediateChild(p).updateChild(y,i);p===".priority"?m=l.updatePriority(d.getNode(),I):m=l.updateChild(d.getNode(),p,I,y,su,null)}const u=au(e,m,d.isFullyInitialized()||H(n),l.filtersNodes()),_=new lt(r,u,o);return du(a,u,n,r,_,s)}function yo(a,e,n,i,r,o,t){const s=e.eventCache;let d,m;const l=new lt(r,e,o);if(H(n))m=a.filter.updateFullNode(e.eventCache.getNode(),i,t),d=$n(e,m,!0,a.filter.filtersNodes());else{const u=$(n);if(u===".priority")m=a.filter.updatePriority(e.eventCache.getNode(),i),d=$n(e,m,s.isFullyInitialized(),s.isFiltered());else{const _=se(n),p=s.getNode().getImmediateChild(u);let y;if(H(_))y=i;else{const E=l.getCompleteChild(u);E!=null?Hm(_)===".priority"&&E.getChild($m(_)).isEmpty()?y=E:y=E.updateChild(_,i):y=P.EMPTY_NODE}if(p.equals(y))d=e;else{const E=a.filter.updateChild(s.getNode(),u,y,_,l,t);d=$n(e,E,s.isFullyInitialized(),a.filter.filtersNodes())}}}return d}function Ys(a,e){return a.eventCache.isCompleteForChild(e)}function Nh(a,e,n,i,r,o,t){let s=e;return i.foreach((d,m)=>{const l=je(n,d);Ys(e,$(l))&&(s=yo(a,s,l,m,r,o,t))}),i.foreach((d,m)=>{const l=je(n,d);Ys(e,$(l))||(s=yo(a,s,l,m,r,o,t))}),s}function Gs(a,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function fo(a,e,n,i,r,o,t,s){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,m;H(n)?m=i:m=new ue(null).setTree(n,i);const l=e.serverCache.getNode();return m.children.inorderTraversal((u,_)=>{if(l.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),y=Gs(a,p,_);d=Xi(a,d,new ie(u),y,r,o,t,s)}}),m.children.inorderTraversal((u,_)=>{const p=!e.serverCache.isCompleteForChild(u)&&_.value===null;if(!l.hasChild(u)&&!p){const y=e.serverCache.getNode().getImmediateChild(u),E=Gs(a,y,_);d=Xi(a,d,new ie(u),E,r,o,t,s)}}),d}function zh(a,e,n,i,r,o,t){if(Qi(r,n)!=null)return e;const s=e.serverCache.isFiltered(),d=e.serverCache;if(i.value!=null){if(H(n)&&d.isFullyInitialized()||d.isCompleteForPath(n))return Xi(a,e,n,d.getNode().getChild(n),r,o,s,t);if(H(n)){let m=new ue(null);return d.getNode().forEachChild(vn,(l,u)=>{m=m.set(new ie(l),u)}),fo(a,e,n,m,r,o,s,t)}else return e}else{let m=new ue(null);return i.foreach((l,u)=>{const _=je(n,l);d.isCompleteForPath(_)&&(m=m.set(l,d.getNode().getChild(_)))}),fo(a,e,n,m,r,o,s,t)}}function Rh(a,e,n,i,r){const o=e.serverCache,t=au(e,o.getNode(),o.isFullyInitialized()||H(n),o.isFiltered());return du(a,t,n,i,su,r)}function Ah(a,e,n,i,r,o){let t;if(Qi(i,n)!=null)return e;{const s=new lt(i,e,r),d=e.eventCache.getNode();let m;if(H(n)||$(n)===".priority"){let l;if(e.serverCache.isFullyInitialized())l=Ji(i,rn(e));else{const u=e.serverCache.getNode();v(u instanceof P,"serverChildren would be complete if leaf node"),l=mt(i,u)}l=l,m=a.filter.updateFullNode(d,l,o)}else{const l=$(n);let u=ut(i,l,e.serverCache);u==null&&e.serverCache.isCompleteForChild(l)&&(u=d.getImmediateChild(l)),u!=null?m=a.filter.updateChild(d,l,u,se(n),s,o):e.eventCache.getNode().hasChild(l)?m=a.filter.updateChild(d,l,P.EMPTY_NODE,se(n),s,o):m=d,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(t=Ji(i,rn(e)),t.isLeafNode()&&(m=a.filter.updateFullNode(m,t,o)))}return t=e.serverCache.isFullyInitialized()||Qi(i,G())!=null,$n(e,m,t,a.filter.filtersNodes())}}/**
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
 */class Ph{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new ot(i.getIndex()),o=Zp(i);this.processor_=Eh(o);const t=n.serverCache,s=n.eventCache,d=r.updateFullNode(P.EMPTY_NODE,t.getNode(),null),m=o.updateFullNode(P.EMPTY_NODE,s.getNode(),null),l=new Pa(d,t.isFullyInitialized(),r.filtersNodes()),u=new Pa(m,s.isFullyInitialized(),o.filtersNodes());this.viewCache_=cr(u,l),this.eventGenerator_=new th(this.query_)}get query(){return this.query_}}function Mh(a){return a.viewCache_.serverCache.getNode()}function Oh(a){return Gi(a.viewCache_)}function Dh(a,e){const n=rn(a.viewCache_);return n&&(a.query._queryParams.loadsAllData()||!H(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function Js(a){return a.eventRegistrations_.length===0}function Fh(a,e){a.eventRegistrations_.push(e)}function Qs(a,e,n){const i=[];if(n){v(e==null,"A cancel should cancel all event registrations.");const r=a.query._path;a.eventRegistrations_.forEach(o=>{const t=o.createCancelEvent(n,r);t&&i.push(t)})}if(e){let r=[];for(let o=0;o<a.eventRegistrations_.length;++o){const t=a.eventRegistrations_[o];if(!t.matches(e))r.push(t);else if(e.hasAnyCallback()){r=r.concat(a.eventRegistrations_.slice(o+1));break}}a.eventRegistrations_=r}else a.eventRegistrations_=[];return i}function Xs(a,e,n,i){e.type===Xe.MERGE&&e.source.queryId!==null&&(v(rn(a.viewCache_),"We should always have a full cache before handling merges"),v(Gi(a.viewCache_),"Missing event cache, even though we have a server cache"));const r=a.viewCache_,o=Th(a.processor_,r,e,n,i);return Ih(a.processor_,o.viewCache),v(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),a.viewCache_=o.viewCache,mu(a,o.changes,o.viewCache.eventCache.getNode(),null)}function Lh(a,e){const n=a.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(he,(o,t)=>{i.push(In(o,t))}),n.isFullyInitialized()&&i.push(Xm(n.getNode())),mu(a,i,n.getNode(),e)}function mu(a,e,n,i){const r=i?[i]:a.eventRegistrations_;return sh(a.eventGenerator_,e,n,r)}/**
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
 */let Zi;class uu{constructor(){this.views=new Map}}function qh(a){v(!Zi,"__referenceConstructor has already been defined"),Zi=a}function Bh(){return v(Zi,"Reference.ts has not been loaded"),Zi}function Hh(a){return a.views.size===0}function _t(a,e,n,i){const r=e.source.queryId;if(r!==null){const o=a.views.get(r);return v(o!=null,"SyncTree gave us an op for an invalid query."),Xs(o,e,n,i)}else{let o=[];for(const t of a.views.values())o=o.concat(Xs(t,e,n,i));return o}}function lu(a,e,n,i,r){const o=e._queryIdentifier,t=a.views.get(o);if(!t){let s=Ji(n,r?i:null),d=!1;s?d=!0:i instanceof P?(s=mt(n,i),d=!1):(s=P.EMPTY_NODE,d=!1);const m=cr(new Pa(s,d,!1),new Pa(i,r,!1));return new Ph(e,m)}return t}function Wh(a,e,n,i,r,o){const t=lu(a,e,i,r,o);return a.views.has(e._queryIdentifier)||a.views.set(e._queryIdentifier,t),Fh(t,n),Lh(t,n)}function $h(a,e,n,i){const r=e._queryIdentifier,o=[];let t=[];const s=Ma(a);if(r==="default")for(const[d,m]of a.views.entries())t=t.concat(Qs(m,n,i)),Js(m)&&(a.views.delete(d),m.query._queryParams.loadsAllData()||o.push(m.query));else{const d=a.views.get(r);d&&(t=t.concat(Qs(d,n,i)),Js(d)&&(a.views.delete(r),d.query._queryParams.loadsAllData()||o.push(d.query)))}return s&&!Ma(a)&&o.push(new(Bh())(e._repo,e._path)),{removed:o,events:t}}function _u(a){const e=[];for(const n of a.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Sa(a,e){let n=null;for(const i of a.views.values())n=n||Dh(i,e);return n}function ku(a,e){if(e._queryParams.loadsAllData())return hr(a);{const i=e._queryIdentifier;return a.views.get(i)}}function cu(a,e){return ku(a,e)!=null}function Ma(a){return hr(a)!=null}function hr(a){for(const e of a.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let er;function Uh(a){v(!er,"__referenceConstructor has already been defined"),er=a}function Kh(){return v(er,"Reference.ts has not been loaded"),er}let Vh=1;class Zs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=vh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yh(a,e,n,i,r){return lh(a.pendingWriteTree_,e,n,i,r),r?hi(a,new nn(eu(),e,n)):[]}function cn(a,e,n=!1){const i=_h(a.pendingWriteTree_,e);if(kh(a.pendingWriteTree_,e)){let o=new ue(null);return i.snap!=null?o=o.set(G(),!0):De(i.children,t=>{o=o.set(new ie(t),!0)}),hi(a,new Yi(i.path,o,n))}else return[]}function pi(a,e,n){return hi(a,new nn(st(),e,n))}function Gh(a,e,n){const i=ue.fromObject(n);return hi(a,new ti(st(),e,i))}function Jh(a,e){return hi(a,new oi(st(),e))}function Qh(a,e,n){const i=kt(a,n);if(i){const r=ct(i),o=r.path,t=r.queryId,s=Pe(o,e),d=new oi(dt(t),s);return pt(a,o,d)}else return[]}function pu(a,e,n,i,r=!1){const o=e._path,t=a.syncPointTree_.get(o);let s=[];if(t&&(e._queryIdentifier==="default"||cu(t,e))){const d=$h(t,e,n,i);Hh(t)&&(a.syncPointTree_=a.syncPointTree_.remove(o));const m=d.removed;if(s=d.events,!r){const l=m.findIndex(_=>_._queryParams.loadsAllData())!==-1,u=a.syncPointTree_.findOnPath(o,(_,p)=>Ma(p));if(l&&!u){const _=a.syncPointTree_.subtree(o);if(!_.isEmpty()){const p=ag(_);for(let y=0;y<p.length;++y){const E=p[y],I=E.query,M=ju(a,E);a.listenProvider_.startListening(Kn(I),si(a,I),M.hashFn,M.onComplete)}}}!u&&m.length>0&&!i&&(l?a.listenProvider_.stopListening(Kn(e),null):m.forEach(_=>{const p=a.queryToTagMap.get(gr(_));a.listenProvider_.stopListening(Kn(_),p)}))}ng(a,m)}return s}function hu(a,e,n,i){const r=kt(a,i);if(r!=null){const o=ct(r),t=o.path,s=o.queryId,d=Pe(t,e),m=new nn(dt(s),d,n);return pt(a,t,m)}else return[]}function Xh(a,e,n,i){const r=kt(a,i);if(r){const o=ct(r),t=o.path,s=o.queryId,d=Pe(t,e),m=ue.fromObject(n),l=new ti(dt(s),d,m);return pt(a,t,l)}else return[]}function Zh(a,e,n,i=!1){const r=e._path;let o=null,t=!1;a.syncPointTree_.foreachOnPath(r,(_,p)=>{const y=Pe(_,r);o=o||Sa(p,y),t=t||Ma(p)});let s=a.syncPointTree_.get(r);s?(t=t||Ma(s),o=o||Sa(s,G())):(s=new uu,a.syncPointTree_=a.syncPointTree_.set(r,s));let d;o!=null?d=!0:(d=!1,o=P.EMPTY_NODE,a.syncPointTree_.subtree(r).foreachChild((p,y)=>{const E=Sa(y,G());E&&(o=o.updateImmediateChild(p,E))}));const m=cu(s,e);if(!m&&!e._queryParams.loadsAllData()){const _=gr(e);v(!a.queryToTagMap.has(_),"View does not exist, but we have a tag");const p=ig();a.queryToTagMap.set(_,p),a.tagToQueryMap.set(p,_)}const l=pr(a.pendingWriteTree_,r);let u=Wh(s,e,n,l,o,d);if(!m&&!t&&!i){const _=ku(s,e);u=u.concat(rg(a,e,_))}return u}function gu(a,e,n){const r=a.pendingWriteTree_,o=a.syncPointTree_.findOnPath(e,(t,s)=>{const d=Pe(t,e),m=Sa(s,d);if(m)return m});return ru(r,e,o,n,!0)}function eg(a,e){const n=e._path;let i=null;a.syncPointTree_.foreachOnPath(n,(m,l)=>{const u=Pe(m,n);i=i||Sa(l,u)});let r=a.syncPointTree_.get(n);r?i=i||Sa(r,G()):(r=new uu,a.syncPointTree_=a.syncPointTree_.set(n,r));const o=i!=null,t=o?new Pa(i,!0,!1):null,s=pr(a.pendingWriteTree_,e._path),d=lu(r,e,s,o?t.getNode():P.EMPTY_NODE,o);return Oh(d)}function hi(a,e){return yu(e,a.syncPointTree_,null,pr(a.pendingWriteTree_,G()))}function yu(a,e,n,i){if(H(a.path))return fu(a,e,n,i);{const r=e.get(G());n==null&&r!=null&&(n=Sa(r,G()));let o=[];const t=$(a.path),s=a.operationForChild(t),d=e.children.get(t);if(d&&s){const m=n?n.getImmediateChild(t):null,l=ou(i,t);o=o.concat(yu(s,d,m,l))}return r&&(o=o.concat(_t(r,a,i,n))),o}}function fu(a,e,n,i){const r=e.get(G());n==null&&r!=null&&(n=Sa(r,G()));let o=[];return e.children.inorderTraversal((t,s)=>{const d=n?n.getImmediateChild(t):null,m=ou(i,t),l=a.operationForChild(t);l&&(o=o.concat(fu(l,s,d,m)))}),r&&(o=o.concat(_t(r,a,i,n))),o}function ju(a,e){const n=e.query,i=si(a,n);return{hashFn:()=>(Mh(e)||P.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?Qh(a,n._path,i):Jh(a,n._path);{const o=Qc(r,n);return pu(a,n,null,o)}}}}function si(a,e){const n=gr(e);return a.queryToTagMap.get(n)}function gr(a){return a._path.toString()+"$"+a._queryIdentifier}function kt(a,e){return a.tagToQueryMap.get(e)}function ct(a){const e=a.indexOf("$");return v(e!==-1&&e<a.length-1,"Bad queryKey."),{queryId:a.substr(e+1),path:new ie(a.substr(0,e))}}function pt(a,e,n){const i=a.syncPointTree_.get(e);v(i,"Missing sync point for query tag that we're tracking");const r=pr(a.pendingWriteTree_,e);return _t(i,n,r,null)}function ag(a){return a.fold((e,n,i)=>{if(n&&Ma(n))return[hr(n)];{let r=[];return n&&(r=_u(n)),De(i,(o,t)=>{r=r.concat(t)}),r}})}function Kn(a){return a._queryParams.loadsAllData()&&!a._queryParams.isDefault()?new(Kh())(a._repo,a._path):a}function ng(a,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=gr(i),o=a.queryToTagMap.get(r);a.queryToTagMap.delete(r),a.tagToQueryMap.delete(o)}}}function ig(){return Vh++}function rg(a,e,n){const i=e._path,r=si(a,e),o=ju(a,n),t=a.listenProvider_.startListening(Kn(e),r,o.hashFn,o.onComplete),s=a.syncPointTree_.subtree(i);if(r)v(!Ma(s.value),"If we're adding a query, it shouldn't be shadowed");else{const d=s.fold((m,l,u)=>{if(!H(m)&&l&&Ma(l))return[hr(l).query];{let _=[];return l&&(_=_.concat(_u(l).map(p=>p.query))),De(u,(p,y)=>{_=_.concat(y)}),_}});for(let m=0;m<d.length;++m){const l=d[m];a.listenProvider_.stopListening(Kn(l),si(a,l))}}return t}/**
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
 */class ht{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ht(n)}node(){return this.node_}}class gt{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=je(this.path_,e);return new gt(this.syncTree_,n)}node(){return gu(this.syncTree_,this.path_)}}const og=function(a){return a=a||{},a.timestamp=a.timestamp||new Date().getTime(),a},ed=function(a,e,n){if(!a||typeof a!="object")return a;if(v(".sv"in a,"Unexpected leaf node or priority contents"),typeof a[".sv"]=="string")return tg(a[".sv"],e,n);if(typeof a[".sv"]=="object")return sg(a[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(a,null,2))},tg=function(a,e,n){switch(a){case"timestamp":return n.timestamp;default:v(!1,"Unexpected server value: "+a)}},sg=function(a,e,n){a.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(a,null,2));const i=a.increment;typeof i!="number"&&v(!1,"Unexpected increment value: "+i);const r=e.node();if(v(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const t=r.getValue();return typeof t!="number"?i:t+i},dg=function(a,e,n,i){return yt(e,new gt(n,a),i)},mg=function(a,e,n){return yt(a,new ht(e),n)};function yt(a,e,n){const i=a.getPriority().val(),r=ed(i,e.getImmediateChild(".priority"),n);let o;if(a.isLeafNode()){const t=a,s=ed(t.getValue(),e,n);return s!==t.getValue()||r!==t.getPriority().val()?new be(s,Ee(r)):a}else{const t=a;return o=t,r!==t.getPriority().val()&&(o=o.updatePriority(new be(r))),t.forEachChild(he,(s,d)=>{const m=yt(d,e.getImmediateChild(s),n);m!==d&&(o=o.updateImmediateChild(s,m))}),o}}/**
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
 */class ft{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function jt(a,e){let n=e instanceof ie?e:new ie(e),i=a,r=$(n);for(;r!==null;){const o=Cn(i.node.children,r)||{children:{},childCount:0};i=new ft(r,i,o),n=se(n),r=$(n)}return i}function An(a){return a.node.value}function bu(a,e){a.node.value=e,jo(a)}function vu(a){return a.node.childCount>0}function ug(a){return An(a)===void 0&&!vu(a)}function yr(a,e){De(a.node.children,(n,i)=>{e(new ft(n,a,i))})}function wu(a,e,n,i){n&&!i&&e(a),yr(a,r=>{wu(r,e,!0,i)}),n&&i&&e(a)}function lg(a,e,n){let i=n?a:a.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function gi(a){return new ie(a.parent===null?a.name:gi(a.parent)+"/"+a.name)}function jo(a){a.parent!==null&&_g(a.parent,a.name,a)}function _g(a,e,n){const i=ug(n),r=ga(a.node.children,e);i&&r?(delete a.node.children[e],a.node.childCount--,jo(a)):!i&&!r&&(a.node.children[e]=n.node,a.node.childCount++,jo(a))}/**
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
 */const kg=/[\[\].#$\/\u0000-\u001F\u007F]/,cg=/[\[\].#$\u0000-\u001F\u007F]/,qr=10*1024*1024,xu=function(a){return typeof a=="string"&&a.length!==0&&!kg.test(a)},Cu=function(a){return typeof a=="string"&&a.length!==0&&!cg.test(a)},pg=function(a){return a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),Cu(a)},Eu=function(a,e,n){const i=n instanceof ie?new zp(n,a):n;if(e===void 0)throw new Error(a+"contains undefined "+$a(i));if(typeof e=="function")throw new Error(a+"contains a function "+$a(i)+" with contents = "+e.toString());if(vm(e))throw new Error(a+"contains "+e.toString()+" "+$a(i));if(typeof e=="string"&&e.length>qr/3&&lr(e)>qr)throw new Error(a+"contains a string greater than "+qr+" utf8 bytes "+$a(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,o=!1;if(De(e,(t,s)=>{if(t===".value")r=!0;else if(t!==".priority"&&t!==".sv"&&(o=!0,!xu(t)))throw new Error(a+" contains an invalid key ("+t+") "+$a(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Rp(i,t),Eu(a,s,i),Ap(i)}),r&&o)throw new Error(a+' contains ".value" child '+$a(i)+" in addition to actual children.")}},Iu=function(a,e,n,i){if(!(i&&n===void 0)&&!Cu(n))throw new Error(_m(a,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hg=function(a,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Iu(a,e,n,i)},gg=function(a,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!pg(n))throw new Error(_m(a,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class yg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fg(a,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],o=r.getPath();n!==null&&!Um(o,n.path)&&(a.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(r)}n&&a.eventLists_.push(n)}function Oa(a,e,n){fg(a,n),jg(a,i=>Qe(i,e)||Qe(e,i))}function jg(a,e){a.recursionDepth_++;let n=!0;for(let i=0;i<a.eventLists_.length;i++){const r=a.eventLists_[i];if(r){const o=r.path;e(o)?(bg(a.eventLists_[i]),a.eventLists_[i]=null):n=!1}}n&&(a.eventLists_=[]),a.recursionDepth_--}function bg(a){for(let e=0;e<a.events.length;e++){const n=a.events[e];if(n!==null){a.events[e]=null;const i=n.getEventRunner();Qa&&Ne("event: "+n.toString()),ki(i)}}}/**
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
 */const vg="repo_interrupt",wg=25;class xg{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vi(),this.transactionQueueTree_=new ft,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Cg(a,e,n){if(a.stats_=at(a.repoInfo_),a.forceRestClient_||ap())a.server_=new Ki(a.repoInfo_,(i,r,o,t)=>{ad(a,i,r,o,t)},a.authTokenProvider_,a.appCheckProvider_),setTimeout(()=>nd(a,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}a.persistentConnection_=new ca(a.repoInfo_,e,(i,r,o,t)=>{ad(a,i,r,o,t)},i=>{nd(a,i)},i=>{Ig(a,i)},a.authTokenProvider_,a.appCheckProvider_,n),a.server_=a.persistentConnection_}a.authTokenProvider_.addTokenChangeListener(i=>{a.server_.refreshAuthToken(i)}),a.appCheckProvider_.addTokenChangeListener(i=>{a.server_.refreshAppCheckToken(i.token)}),a.statsReporter_=sp(a.repoInfo_,()=>new oh(a.stats_,a.server_)),a.infoData_=new eh,a.infoSyncTree_=new Zs({startListening:(i,r,o,t)=>{let s=[];const d=a.infoData_.getNode(i._path);return d.isEmpty()||(s=pi(a.infoSyncTree_,i._path,d),setTimeout(()=>{t("ok")},0)),s},stopListening:()=>{}}),bt(a,"connected",!1),a.serverSyncTree_=new Zs({startListening:(i,r,o,t)=>(a.server_.listen(i,o,r,(s,d)=>{const m=t(s,d);Oa(a.eventQueue_,i._path,m)}),[]),stopListening:(i,r)=>{a.server_.unlisten(i,r)}})}function Eg(a){const n=a.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Tu(a){return og({timestamp:Eg(a)})}function ad(a,e,n,i,r){a.dataUpdateCount++;const o=new ie(e);n=a.interceptServerDataCallback_?a.interceptServerDataCallback_(e,n):n;let t=[];if(r)if(i){const d=qi(n,m=>Ee(m));t=Xh(a.serverSyncTree_,o,d,r)}else{const d=Ee(n);t=hu(a.serverSyncTree_,o,d,r)}else if(i){const d=qi(n,m=>Ee(m));t=Gh(a.serverSyncTree_,o,d)}else{const d=Ee(n);t=pi(a.serverSyncTree_,o,d)}let s=o;t.length>0&&(s=xt(a,o)),Oa(a.eventQueue_,s,t)}function nd(a,e){bt(a,"connected",e),e===!1&&Ng(a)}function Ig(a,e){De(e,(n,i)=>{bt(a,n,i)})}function bt(a,e,n){const i=new ie("/.info/"+e),r=Ee(n);a.infoData_.updateSnapshot(i,r);const o=pi(a.infoSyncTree_,i,r);Oa(a.eventQueue_,i,o)}function Tg(a){return a.nextWriteId_++}function Sg(a,e,n){const i=eg(a.serverSyncTree_,e);return i!=null?Promise.resolve(i):a.server_.get(e).then(r=>{const o=Ee(r).withIndex(e._queryParams.getIndex());Zh(a.serverSyncTree_,e,n,!0);let t;if(e._queryParams.loadsAllData())t=pi(a.serverSyncTree_,e._path,o);else{const s=si(a.serverSyncTree_,e);t=hu(a.serverSyncTree_,e._path,o,s)}return Oa(a.eventQueue_,e._path,t),pu(a.serverSyncTree_,e,n,null,!0),o},r=>(vt(a,"get for query "+fe(e)+" failed: "+r),Promise.reject(new Error(r))))}function Ng(a){vt(a,"onDisconnectEvents");const e=Tu(a),n=Vi();po(a.onDisconnect_,G(),(r,o)=>{const t=dg(r,o,a.serverSyncTree_,e);Zm(n,r,t)});let i=[];po(n,G(),(r,o)=>{i=i.concat(pi(a.serverSyncTree_,r,o));const t=Pg(a,r);xt(a,t)}),a.onDisconnect_=Vi(),Oa(a.eventQueue_,G(),i)}function zg(a){a.persistentConnection_&&a.persistentConnection_.interrupt(vg)}function vt(a,...e){let n="";a.persistentConnection_&&(n=a.persistentConnection_.id+":"),Ne(n,...e)}function Su(a,e,n){return gu(a.serverSyncTree_,e,n)||P.EMPTY_NODE}function wt(a,e=a.transactionQueueTree_){if(e||fr(a,e),An(e)){const n=zu(a,e);v(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&Rg(a,gi(e),n)}else vu(e)&&yr(e,n=>{wt(a,n)})}function Rg(a,e,n){const i=n.map(m=>m.currentWriteId),r=Su(a,e,i);let o=r;const t=r.hash();for(let m=0;m<n.length;m++){const l=n[m];v(l.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),l.status=1,l.retryCount++;const u=Pe(e,l.path);o=o.updateChild(u,l.currentOutputSnapshotRaw)}const s=o.val(!0),d=e;a.server_.put(d.toString(),s,m=>{vt(a,"transaction put response",{path:d.toString(),status:m});let l=[];if(m==="ok"){const u=[];for(let _=0;_<n.length;_++)n[_].status=2,l=l.concat(cn(a.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&u.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();fr(a,jt(a.transactionQueueTree_,e)),wt(a,a.transactionQueueTree_),Oa(a.eventQueue_,e,l);for(let _=0;_<u.length;_++)ki(u[_])}else{if(m==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{qe("transaction at "+d.toString()+" failed: "+m);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=m}xt(a,e)}},t)}function xt(a,e){const n=Nu(a,e),i=gi(n),r=zu(a,n);return Ag(a,r,i),i}function Ag(a,e,n){if(e.length===0)return;const i=[];let r=[];const t=e.filter(s=>s.status===0).map(s=>s.currentWriteId);for(let s=0;s<e.length;s++){const d=e[s],m=Pe(n,d.path);let l=!1,u;if(v(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)l=!0,u=d.abortReason,r=r.concat(cn(a.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=wg)l=!0,u="maxretry",r=r.concat(cn(a.serverSyncTree_,d.currentWriteId,!0));else{const _=Su(a,d.path,t);d.currentInputSnapshot=_;const p=e[s].update(_.val());if(p!==void 0){Eu("transaction failed: Data returned ",p,d.path);let y=Ee(p);typeof p=="object"&&p!=null&&ga(p,".priority")||(y=y.updatePriority(_.getPriority()));const I=d.currentWriteId,M=Tu(a),S=mg(y,_,M);d.currentOutputSnapshotRaw=y,d.currentOutputSnapshotResolved=S,d.currentWriteId=Tg(a),t.splice(t.indexOf(I),1),r=r.concat(Yh(a.serverSyncTree_,d.path,S,d.currentWriteId,d.applyLocally)),r=r.concat(cn(a.serverSyncTree_,I,!0))}else l=!0,u="nodata",r=r.concat(cn(a.serverSyncTree_,d.currentWriteId,!0))}Oa(a.eventQueue_,n,r),r=[],l&&(e[s].status=2,function(_){setTimeout(_,Math.floor(0))}(e[s].unwatcher),e[s].onComplete&&(u==="nodata"?i.push(()=>e[s].onComplete(null,!1,e[s].currentInputSnapshot)):i.push(()=>e[s].onComplete(new Error(u),!1,null))))}fr(a,a.transactionQueueTree_);for(let s=0;s<i.length;s++)ki(i[s]);wt(a,a.transactionQueueTree_)}function Nu(a,e){let n,i=a.transactionQueueTree_;for(n=$(e);n!==null&&An(i)===void 0;)i=jt(i,n),e=se(e),n=$(e);return i}function zu(a,e){const n=[];return Ru(a,e,n),n.sort((i,r)=>i.order-r.order),n}function Ru(a,e,n){const i=An(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);yr(e,r=>{Ru(a,r,n)})}function fr(a,e){const n=An(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,bu(e,n.length>0?n:void 0)}yr(e,i=>{fr(a,i)})}function Pg(a,e){const n=gi(Nu(a,e)),i=jt(a.transactionQueueTree_,e);return lg(i,r=>{Br(a,r)}),Br(a,i),wu(i,r=>{Br(a,r)}),n}function Br(a,e){const n=An(e);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)n[t].status===3||(n[t].status===1?(v(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(v(n[t].status===0,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(cn(a.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));o===-1?bu(e,void 0):n.length=o+1,Oa(a.eventQueue_,gi(e),r);for(let t=0;t<i.length;t++)ki(i[t])}}/**
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
 */function Mg(a){let e="";const n=a.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function Og(a){const e={};a.charAt(0)==="?"&&(a=a.substring(1));for(const n of a.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):qe(`Invalid query segment '${n}' in query '${a}'`)}return e}const id=function(a,e){const n=Dg(a),i=n.namespace;n.domain==="firebase.com"&&en(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Kc();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new rp(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new ie(n.pathString)}},Dg=function(a){let e="",n="",i="",r="",o="",t=!0,s="https",d=443;if(typeof a=="string"){let m=a.indexOf("//");m>=0&&(s=a.substring(0,m-1),a=a.substring(m+2));let l=a.indexOf("/");l===-1&&(l=a.length);let u=a.indexOf("?");u===-1&&(u=a.length),e=a.substring(0,Math.min(l,u)),l<u&&(r=Mg(a.substring(l,u)));const _=Og(a.substring(Math.min(a.length,u)));m=e.indexOf(":"),m>=0?(t=s==="https"||s==="wss",d=parseInt(e.substring(m+1),10)):m=e.length;const p=e.slice(0,m);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),n=e.substring(y+1),o=i}"ns"in _&&(o=_.ns)}return{host:e,port:d,domain:n,subdomain:i,secure:t,scheme:s,pathString:r,namespace:o}};/**
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
 */class Fg{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class Lg{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class qg{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ct{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return H(this._path)?null:Hm(this._path)}get ref(){return new ya(this._repo,this._path)}get _queryIdentifier(){const e=Hs(this._queryParams),n=Zo(e);return n==="{}"?"default":n}get _queryObject(){return Hs(this._queryParams)}isEqual(e){if(e=_r(e),!(e instanceof Ct))return!1;const n=this._repo===e._repo,i=Um(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Np(this._path)}}class ya extends Ct{constructor(e,n){super(e,n,new tt,!1)}get parent(){const e=$m(this._path);return e===null?null:new ya(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class di{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),i=bo(this.ref,e);return new di(this._node.getChild(n),i,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new di(r,bo(this.ref,i),he)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bg(a,e){return a=_r(a),a._checkNotDeleted("ref"),e!==void 0?bo(a._root,e):a._root}function bo(a,e){return a=_r(a),$(a._path)===null?hg("child","path",e,!1):Iu("child","path",e,!1),new ya(a._repo,je(a._path,e))}function Hg(a){a=_r(a);const e=new qg(()=>{}),n=new Et(e);return Sg(a._repo,a,n).then(i=>new di(i,new ya(a._repo,a._path),a._queryParams.getIndex()))}class Et{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Fg("value",this,new di(e.snapshotNode,new ya(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lg(this,e,n):null}matches(e){return e instanceof Et?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}qh(ya);Uh(ya);/**
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
 */const Wg="FIREBASE_DATABASE_EMULATOR_HOST",vo={};let $g=!1;function Ug(a,e,n,i,r){let o=i||a.options.databaseURL;o===void 0&&(a.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",a.options.projectId),o=`${a.options.projectId}-default-rtdb.firebaseio.com`);let t=id(o,r),s=t.repoInfo,d,m;typeof process<"u"&&process.env&&(m=process.env[Wg]),m?(d=!0,o=`http://${m}?ns=${s.namespace}`,t=id(o,r),s=t.repoInfo):d=!t.repoInfo.secure;const l=r&&d?new _o(_o.OWNER):new ip(a.name,a.options,e);gg("Invalid Firebase Database URL",t),H(t.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Vg(s,a,l,new np(a.name,n));return new Yg(u,a)}function Kg(a,e){const n=vo[e];(!n||n[a.key]!==a)&&en(`Database ${e}(${a.repoInfo_}) has already been deleted.`),zg(a),delete n[a.key]}function Vg(a,e,n,i){let r=vo[e.name];r||(r={},vo[e.name]=r);let o=r[a.toURLString()];return o&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new xg(a,$g,n,i),r[a.toURLString()]=o,o}class Yg{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Cg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ya(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Kg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function Gg(a=Sc(),e){return xc(a,"database").getImmediate({identifier:e})}/**
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