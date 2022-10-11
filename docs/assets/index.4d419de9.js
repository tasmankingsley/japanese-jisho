(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function mt(a,e){const n=Object.create(null),i=a.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const i_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",r_=mt(i_);function Ud(a){return!!a||a===""}function Pr(a){if(ae(a)){const e={};for(let n=0;n<a.length;n++){const i=a[n],r=Ue(i)?s_(i):Pr(i);if(r)for(const o in r)e[o]=r[o]}return e}else{if(Ue(a))return a;if(Ne(a))return a}}const o_=/;(?![^(]*\))/g,t_=/:(.+)/;function s_(a){const e={};return a.split(o_).forEach(n=>{if(n){const i=n.split(t_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ut(a){let e="";if(Ue(a))e=a;else if(ae(a))for(let n=0;n<a.length;n++){const i=ut(a[n]);i&&(e+=i+" ")}else if(Ne(a))for(const n in a)a[n]&&(e+=n+" ");return e.trim()}const Oe=a=>Ue(a)?a:a==null?"":ae(a)||Ne(a)&&(a.toString===Yd||!oe(a.toString))?JSON.stringify(a,Kd,2):String(a),Kd=(a,e)=>e&&e.__v_isRef?Kd(a,e.value):qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Vd(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!ae(e)&&!Gd(e)?String(e):e,Ce={},Bn=[],Ea=()=>{},d_=()=>!1,m_=/^on[^a-z]/,Or=a=>m_.test(a),lt=a=>a.startsWith("onUpdate:"),Ye=Object.assign,_t=(a,e)=>{const n=a.indexOf(e);n>-1&&a.splice(n,1)},u_=Object.prototype.hasOwnProperty,pe=(a,e)=>u_.call(a,e),ae=Array.isArray,qn=a=>Mr(a)==="[object Map]",Vd=a=>Mr(a)==="[object Set]",oe=a=>typeof a=="function",Ue=a=>typeof a=="string",kt=a=>typeof a=="symbol",Ne=a=>a!==null&&typeof a=="object",ct=a=>Ne(a)&&oe(a.then)&&oe(a.catch),Yd=Object.prototype.toString,Mr=a=>Yd.call(a),l_=a=>Mr(a).slice(8,-1),Gd=a=>Mr(a)==="[object Object]",pt=a=>Ue(a)&&a!=="NaN"&&a[0]!=="-"&&""+parseInt(a,10)===a,dr=mt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lr=a=>{const e=Object.create(null);return n=>e[n]||(e[n]=a(n))},__=/-(\w)/g,Yn=Lr(a=>a.replace(__,(e,n)=>n?n.toUpperCase():"")),k_=/\B([A-Z])/g,An=Lr(a=>a.replace(k_,"-$1").toLowerCase()),Jd=Lr(a=>a.charAt(0).toUpperCase()+a.slice(1)),uo=Lr(a=>a?`on${Jd(a)}`:""),_r=(a,e)=>!Object.is(a,e),mr=(a,e)=>{for(let n=0;n<a.length;n++)a[n](e)},kr=(a,e,n)=>{Object.defineProperty(a,e,{configurable:!0,enumerable:!1,value:n})},wi=a=>{const e=parseFloat(a);return isNaN(e)?a:e};let ys;const c_=()=>ys||(ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ra;class p_{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ra&&(this.parent=Ra,this.index=(Ra.scopes||(Ra.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ra;try{return Ra=this,e()}finally{Ra=n}}}on(){Ra=this}off(){Ra=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function h_(a,e=Ra){e&&e.active&&e.effects.push(a)}const ht=a=>{const e=new Set(a);return e.w=0,e.n=0,e},Qd=a=>(a.w&tn)>0,Xd=a=>(a.n&tn)>0,g_=({deps:a})=>{if(a.length)for(let e=0;e<a.length;e++)a[e].w|=tn},y_=a=>{const{deps:e}=a;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Qd(r)&&!Xd(r)?r.delete(a):e[n++]=r,r.w&=~tn,r.n&=~tn}e.length=n}},So=new WeakMap;let gi=0,tn=1;const No=30;let ja;const xn=Symbol(""),Ro=Symbol("");class gt{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,h_(this,i)}run(){if(!this.active)return this.fn();let e=ja,n=Za;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ja,ja=this,Za=!0,tn=1<<++gi,gi<=No?g_(this):fs(this),this.fn()}finally{gi<=No&&y_(this),tn=1<<--gi,ja=this.parent,Za=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ja===this?this.deferStop=!0:this.active&&(fs(this),this.onStop&&this.onStop(),this.active=!1)}}function fs(a){const{deps:e}=a;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(a);e.length=0}}let Za=!0;const Zd=[];function ei(){Zd.push(Za),Za=!1}function ai(){const a=Zd.pop();Za=a===void 0?!0:a}function la(a,e,n){if(Za&&ja){let i=So.get(a);i||So.set(a,i=new Map);let r=i.get(n);r||i.set(n,r=ht()),em(r)}}function em(a,e){let n=!1;gi<=No?Xd(a)||(a.n|=tn,n=!Qd(a)):n=!a.has(ja),n&&(a.add(ja),ja.deps.push(a))}function Wa(a,e,n,i,r,o){const t=So.get(a);if(!t)return;let s=[];if(e==="clear")s=[...t.values()];else if(n==="length"&&ae(a))t.forEach((d,m)=>{(m==="length"||m>=i)&&s.push(d)});else switch(n!==void 0&&s.push(t.get(n)),e){case"add":ae(a)?pt(n)&&s.push(t.get("length")):(s.push(t.get(xn)),qn(a)&&s.push(t.get(Ro)));break;case"delete":ae(a)||(s.push(t.get(xn)),qn(a)&&s.push(t.get(Ro)));break;case"set":qn(a)&&s.push(t.get(xn));break}if(s.length===1)s[0]&&Ao(s[0]);else{const d=[];for(const m of s)m&&d.push(...m);Ao(ht(d))}}function Ao(a,e){const n=ae(a)?a:[...a];for(const i of n)i.computed&&js(i);for(const i of n)i.computed||js(i)}function js(a,e){(a!==ja||a.allowRecurse)&&(a.scheduler?a.scheduler():a.run())}const f_=mt("__proto__,__v_isRef,__isVue"),am=new Set(Object.getOwnPropertyNames(Symbol).filter(a=>a!=="arguments"&&a!=="caller").map(a=>Symbol[a]).filter(kt)),j_=yt(),b_=yt(!1,!0),v_=yt(!0),bs=w_();function w_(){const a={};return["includes","indexOf","lastIndexOf"].forEach(e=>{a[e]=function(...n){const i=ve(this);for(let o=0,t=this.length;o<t;o++)la(i,"get",o+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(ve)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{a[e]=function(...n){ei();const i=ve(this)[e].apply(this,n);return ai(),i}}),a}function yt(a=!1,e=!1){return function(i,r,o){if(r==="__v_isReactive")return!a;if(r==="__v_isReadonly")return a;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&o===(a?e?F_:tm:e?om:rm).get(i))return i;const t=ae(i);if(!a&&t&&pe(bs,r))return Reflect.get(bs,r,o);const s=Reflect.get(i,r,o);return(kt(r)?am.has(r):f_(r))||(a||la(i,"get",r),e)?s:ea(s)?t&&pt(r)?s:s.value:Ne(s)?a?sm(s):Ta(s):s}}const x_=nm(),C_=nm(!0);function nm(a=!1){return function(n,i,r,o){let t=n[i];if(xi(t)&&ea(t)&&!ea(r))return!1;if(!a&&(!zo(r)&&!xi(r)&&(t=ve(t),r=ve(r)),!ae(n)&&ea(t)&&!ea(r)))return t.value=r,!0;const s=ae(n)&&pt(i)?Number(i)<n.length:pe(n,i),d=Reflect.set(n,i,r,o);return n===ve(o)&&(s?_r(r,t)&&Wa(n,"set",i,r):Wa(n,"add",i,r)),d}}function E_(a,e){const n=pe(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&n&&Wa(a,"delete",e,void 0),i}function I_(a,e){const n=Reflect.has(a,e);return(!kt(e)||!am.has(e))&&la(a,"has",e),n}function T_(a){return la(a,"iterate",ae(a)?"length":xn),Reflect.ownKeys(a)}const im={get:j_,set:x_,deleteProperty:E_,has:I_,ownKeys:T_},S_={get:v_,set(a,e){return!0},deleteProperty(a,e){return!0}},N_=Ye({},im,{get:b_,set:C_}),ft=a=>a,Fr=a=>Reflect.getPrototypeOf(a);function Xi(a,e,n=!1,i=!1){a=a.__v_raw;const r=ve(a),o=ve(e);n||(e!==o&&la(r,"get",e),la(r,"get",o));const{has:t}=Fr(r),s=i?ft:n?wt:vt;if(t.call(r,e))return s(a.get(e));if(t.call(r,o))return s(a.get(o));a!==r&&a.get(e)}function Zi(a,e=!1){const n=this.__v_raw,i=ve(n),r=ve(a);return e||(a!==r&&la(i,"has",a),la(i,"has",r)),a===r?n.has(a):n.has(a)||n.has(r)}function er(a,e=!1){return a=a.__v_raw,!e&&la(ve(a),"iterate",xn),Reflect.get(a,"size",a)}function vs(a){a=ve(a);const e=ve(this);return Fr(e).has.call(e,a)||(e.add(a),Wa(e,"add",a,a)),this}function ws(a,e){e=ve(e);const n=ve(this),{has:i,get:r}=Fr(n);let o=i.call(n,a);o||(a=ve(a),o=i.call(n,a));const t=r.call(n,a);return n.set(a,e),o?_r(e,t)&&Wa(n,"set",a,e):Wa(n,"add",a,e),this}function xs(a){const e=ve(this),{has:n,get:i}=Fr(e);let r=n.call(e,a);r||(a=ve(a),r=n.call(e,a)),i&&i.call(e,a);const o=e.delete(a);return r&&Wa(e,"delete",a,void 0),o}function Cs(){const a=ve(this),e=a.size!==0,n=a.clear();return e&&Wa(a,"clear",void 0,void 0),n}function ar(a,e){return function(i,r){const o=this,t=o.__v_raw,s=ve(t),d=e?ft:a?wt:vt;return!a&&la(s,"iterate",xn),t.forEach((m,k)=>i.call(r,d(m),d(k),o))}}function nr(a,e,n){return function(...i){const r=this.__v_raw,o=ve(r),t=qn(o),s=a==="entries"||a===Symbol.iterator&&t,d=a==="keys"&&t,m=r[a](...i),k=n?ft:e?wt:vt;return!e&&la(o,"iterate",d?Ro:xn),{next(){const{value:u,done:c}=m.next();return c?{value:u,done:c}:{value:s?[k(u[0]),k(u[1])]:k(u),done:c}},[Symbol.iterator](){return this}}}}function Ga(a){return function(...e){return a==="delete"?!1:this}}function R_(){const a={get(o){return Xi(this,o)},get size(){return er(this)},has:Zi,add:vs,set:ws,delete:xs,clear:Cs,forEach:ar(!1,!1)},e={get(o){return Xi(this,o,!1,!0)},get size(){return er(this)},has:Zi,add:vs,set:ws,delete:xs,clear:Cs,forEach:ar(!1,!0)},n={get(o){return Xi(this,o,!0)},get size(){return er(this,!0)},has(o){return Zi.call(this,o,!0)},add:Ga("add"),set:Ga("set"),delete:Ga("delete"),clear:Ga("clear"),forEach:ar(!0,!1)},i={get(o){return Xi(this,o,!0,!0)},get size(){return er(this,!0)},has(o){return Zi.call(this,o,!0)},add:Ga("add"),set:Ga("set"),delete:Ga("delete"),clear:Ga("clear"),forEach:ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{a[o]=nr(o,!1,!1),n[o]=nr(o,!0,!1),e[o]=nr(o,!1,!0),i[o]=nr(o,!0,!0)}),[a,n,e,i]}const[A_,z_,D_,P_]=R_();function jt(a,e){const n=e?a?P_:D_:a?z_:A_;return(i,r,o)=>r==="__v_isReactive"?!a:r==="__v_isReadonly"?a:r==="__v_raw"?i:Reflect.get(pe(n,r)&&r in i?n:i,r,o)}const O_={get:jt(!1,!1)},M_={get:jt(!1,!0)},L_={get:jt(!0,!1)},rm=new WeakMap,om=new WeakMap,tm=new WeakMap,F_=new WeakMap;function B_(a){switch(a){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function q_(a){return a.__v_skip||!Object.isExtensible(a)?0:B_(l_(a))}function Ta(a){return xi(a)?a:bt(a,!1,im,O_,rm)}function $_(a){return bt(a,!1,N_,M_,om)}function sm(a){return bt(a,!0,S_,L_,tm)}function bt(a,e,n,i,r){if(!Ne(a)||a.__v_raw&&!(e&&a.__v_isReactive))return a;const o=r.get(a);if(o)return o;const t=q_(a);if(t===0)return a;const s=new Proxy(a,t===2?i:n);return r.set(a,s),s}function $n(a){return xi(a)?$n(a.__v_raw):!!(a&&a.__v_isReactive)}function xi(a){return!!(a&&a.__v_isReadonly)}function zo(a){return!!(a&&a.__v_isShallow)}function dm(a){return $n(a)||xi(a)}function ve(a){const e=a&&a.__v_raw;return e?ve(e):a}function mm(a){return kr(a,"__v_skip",!0),a}const vt=a=>Ne(a)?Ta(a):a,wt=a=>Ne(a)?sm(a):a;function W_(a){Za&&ja&&(a=ve(a),em(a.dep||(a.dep=ht())))}function H_(a,e){a=ve(a),a.dep&&Ao(a.dep)}function ea(a){return!!(a&&a.__v_isRef===!0)}function ke(a){return ea(a)?a.value:a}const U_={get:(a,e,n)=>ke(Reflect.get(a,e,n)),set:(a,e,n,i)=>{const r=a[e];return ea(r)&&!ea(n)?(r.value=n,!0):Reflect.set(a,e,n,i)}};function um(a){return $n(a)?a:new Proxy(a,U_)}var lm;class K_{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[lm]=!1,this._dirty=!0,this.effect=new gt(e,()=>{this._dirty||(this._dirty=!0,H_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ve(this);return W_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}lm="__v_isReadonly";function V_(a,e,n=!1){let i,r;const o=oe(a);return o?(i=a,r=Ea):(i=a.get,r=a.set),new K_(i,r,o||!r,n)}function en(a,e,n,i){let r;try{r=i?a(...i):a()}catch(o){Fi(o,e,n)}return r}function pa(a,e,n,i){if(oe(a)){const o=en(a,e,n,i);return o&&ct(o)&&o.catch(t=>{Fi(t,e,n)}),o}const r=[];for(let o=0;o<a.length;o++)r.push(pa(a[o],e,n,i));return r}function Fi(a,e,n,i=!0){const r=e?e.vnode:null;if(e){let o=e.parent;const t=e.proxy,s=n;for(;o;){const m=o.ec;if(m){for(let k=0;k<m.length;k++)if(m[k](a,t,s)===!1)return}o=o.parent}const d=e.appContext.config.errorHandler;if(d){en(d,null,10,[a,t,s]);return}}Y_(a,n,r,i)}function Y_(a,e,n,i=!0){console.error(a)}let cr=!1,Do=!1;const Je=[];let Aa=0;const Wn=[];let La=null,jn=0;const _m=Promise.resolve();let xt=null;function G_(a){const e=xt||_m;return a?e.then(this?a.bind(this):a):e}function J_(a){let e=Aa+1,n=Je.length;for(;e<n;){const i=e+n>>>1;Ci(Je[i])<a?e=i+1:n=i}return e}function Ct(a){(!Je.length||!Je.includes(a,cr&&a.allowRecurse?Aa+1:Aa))&&(a.id==null?Je.push(a):Je.splice(J_(a.id),0,a),km())}function km(){!cr&&!Do&&(Do=!0,xt=_m.then(hm))}function Q_(a){const e=Je.indexOf(a);e>Aa&&Je.splice(e,1)}function cm(a){ae(a)?Wn.push(...a):(!La||!La.includes(a,a.allowRecurse?jn+1:jn))&&Wn.push(a),km()}function Es(a,e=Aa){for(;e<Je.length;e++){const n=Je[e];n&&n.pre&&(Je.splice(e,1),e--,n())}}function pm(a){if(Wn.length){const e=[...new Set(Wn)];if(Wn.length=0,La){La.push(...e);return}for(La=e,La.sort((n,i)=>Ci(n)-Ci(i)),jn=0;jn<La.length;jn++)La[jn]();La=null,jn=0}}const Ci=a=>a.id==null?1/0:a.id,X_=(a,e)=>{const n=Ci(a)-Ci(e);if(n===0){if(a.pre&&!e.pre)return-1;if(e.pre&&!a.pre)return 1}return n};function hm(a){Do=!1,cr=!0,Je.sort(X_);const e=Ea;try{for(Aa=0;Aa<Je.length;Aa++){const n=Je[Aa];n&&n.active!==!1&&en(n,null,14)}}finally{Aa=0,Je.length=0,pm(),cr=!1,xt=null,(Je.length||Wn.length)&&hm()}}function Z_(a,e,...n){if(a.isUnmounted)return;const i=a.vnode.props||Ce;let r=n;const o=e.startsWith("update:"),t=o&&e.slice(7);if(t&&t in i){const k=`${t==="modelValue"?"model":t}Modifiers`,{number:u,trim:c}=i[k]||Ce;c&&(r=n.map(b=>b.trim())),u&&(r=n.map(wi))}let s,d=i[s=uo(e)]||i[s=uo(Yn(e))];!d&&o&&(d=i[s=uo(An(e))]),d&&pa(d,a,6,r);const m=i[s+"Once"];if(m){if(!a.emitted)a.emitted={};else if(a.emitted[s])return;a.emitted[s]=!0,pa(m,a,6,r)}}function gm(a,e,n=!1){const i=e.emitsCache,r=i.get(a);if(r!==void 0)return r;const o=a.emits;let t={},s=!1;if(!oe(a)){const d=m=>{const k=gm(m,e,!0);k&&(s=!0,Ye(t,k))};!n&&e.mixins.length&&e.mixins.forEach(d),a.extends&&d(a.extends),a.mixins&&a.mixins.forEach(d)}return!o&&!s?(Ne(a)&&i.set(a,null),null):(ae(o)?o.forEach(d=>t[d]=null):Ye(t,o),Ne(a)&&i.set(a,t),t)}function Br(a,e){return!a||!Or(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(a,e[0].toLowerCase()+e.slice(1))||pe(a,An(e))||pe(a,e))}let va=null,qr=null;function pr(a){const e=va;return va=a,qr=a&&a.type.__scopeId||null,e}function $r(a){qr=a}function Wr(){qr=null}function hr(a,e=va,n){if(!e||a._n)return a;const i=(...r)=>{i._d&&Ms(-1);const o=pr(e),t=a(...r);return pr(o),i._d&&Ms(1),t};return i._n=!0,i._c=!0,i._d=!0,i}function lo(a){const{type:e,vnode:n,proxy:i,withProxy:r,props:o,propsOptions:[t],slots:s,attrs:d,emit:m,render:k,renderCache:u,data:c,setupState:b,ctx:w,inheritAttrs:L}=a;let M,V;const F=pr(a);try{if(n.shapeFlag&4){const ne=r||i;M=fa(k.call(ne,ne,u,o,b,c,w)),V=d}else{const ne=e;M=fa(ne.length>1?ne(o,{attrs:d,slots:s,emit:m}):ne(o,null)),V=e.props?d:ak(d)}}catch(ne){yi.length=0,Fi(ne,a,1),M=Ae(da)}let K=M;if(V&&L!==!1){const ne=Object.keys(V),{shapeFlag:I}=K;ne.length&&I&7&&(t&&ne.some(lt)&&(V=nk(V,t)),K=sn(K,V))}return n.dirs&&(K=sn(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),M=K,pr(F),M}function ek(a){let e;for(let n=0;n<a.length;n++){const i=a[n];if(fr(i)){if(i.type!==da||i.children==="v-if"){if(e)return;e=i}}else return}return e}const ak=a=>{let e;for(const n in a)(n==="class"||n==="style"||Or(n))&&((e||(e={}))[n]=a[n]);return e},nk=(a,e)=>{const n={};for(const i in a)(!lt(i)||!(i.slice(9)in e))&&(n[i]=a[i]);return n};function ik(a,e,n){const{props:i,children:r,component:o}=a,{props:t,children:s,patchFlag:d}=e,m=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&d>=0){if(d&1024)return!0;if(d&16)return i?Is(i,t,m):!!t;if(d&8){const k=e.dynamicProps;for(let u=0;u<k.length;u++){const c=k[u];if(t[c]!==i[c]&&!Br(m,c))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:i===t?!1:i?t?Is(i,t,m):!0:!!t;return!1}function Is(a,e,n){const i=Object.keys(e);if(i.length!==Object.keys(a).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==a[o]&&!Br(n,o))return!0}return!1}function Et({vnode:a,parent:e},n){for(;e&&e.subTree===a;)(a=e.vnode).el=n,e=e.parent}const rk=a=>a.__isSuspense,ok={name:"Suspense",__isSuspense:!0,process(a,e,n,i,r,o,t,s,d,m){a==null?sk(e,n,i,r,o,t,s,d,m):dk(a,e,n,i,r,t,s,d,m)},hydrate:mk,create:It,normalize:uk},tk=ok;function Ei(a,e){const n=a.props&&a.props[e];oe(n)&&n()}function sk(a,e,n,i,r,o,t,s,d){const{p:m,o:{createElement:k}}=d,u=k("div"),c=a.suspense=It(a,r,i,e,u,n,o,t,s,d);m(null,c.pendingBranch=a.ssContent,u,null,i,c,o,t),c.deps>0?(Ei(a,"onPending"),Ei(a,"onFallback"),m(null,a.ssFallback,e,n,i,null,o,t),Hn(c,a.ssFallback)):c.resolve()}function dk(a,e,n,i,r,o,t,s,{p:d,um:m,o:{createElement:k}}){const u=e.suspense=a.suspense;u.vnode=e,e.el=a.el;const c=e.ssContent,b=e.ssFallback,{activeBranch:w,pendingBranch:L,isInFallback:M,isHydrating:V}=u;if(L)u.pendingBranch=c,za(c,L)?(d(L,c,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0?u.resolve():M&&(d(w,b,n,i,r,null,o,t,s),Hn(u,b))):(u.pendingId++,V?(u.isHydrating=!1,u.activeBranch=L):m(L,r,u),u.deps=0,u.effects.length=0,u.hiddenContainer=k("div"),M?(d(null,c,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0?u.resolve():(d(w,b,n,i,r,null,o,t,s),Hn(u,b))):w&&za(c,w)?(d(w,c,n,i,r,u,o,t,s),u.resolve(!0)):(d(null,c,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0&&u.resolve()));else if(w&&za(c,w))d(w,c,n,i,r,u,o,t,s),Hn(u,c);else if(Ei(e,"onPending"),u.pendingBranch=c,u.pendingId++,d(null,c,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0)u.resolve();else{const{timeout:F,pendingId:K}=u;F>0?setTimeout(()=>{u.pendingId===K&&u.fallback(b)},F):F===0&&u.fallback(b)}}function It(a,e,n,i,r,o,t,s,d,m,k=!1){const{p:u,m:c,um:b,n:w,o:{parentNode:L,remove:M}}=m,V=wi(a.props&&a.props.timeout),F={vnode:a,parent:e,parentComponent:n,isSVG:t,container:i,hiddenContainer:r,anchor:o,deps:0,pendingId:0,timeout:typeof V=="number"?V:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:k,isUnmounted:!1,effects:[],resolve(K=!1){const{vnode:ne,activeBranch:I,pendingBranch:Q,pendingId:J,effects:q,parentComponent:X,container:ie}=F;if(F.isHydrating)F.isHydrating=!1;else if(!K){const le=I&&Q.transition&&Q.transition.mode==="out-in";le&&(I.transition.afterLeave=()=>{J===F.pendingId&&c(Q,ie,De,0)});let{anchor:De}=F;I&&(De=w(I),b(I,X,F,!0)),le||c(Q,ie,De,0)}Hn(F,Q),F.pendingBranch=null,F.isInFallback=!1;let te=F.parent,$=!1;for(;te;){if(te.pendingBranch){te.effects.push(...q),$=!0;break}te=te.parent}$||cm(q),F.effects=[],Ei(ne,"onResolve")},fallback(K){if(!F.pendingBranch)return;const{vnode:ne,activeBranch:I,parentComponent:Q,container:J,isSVG:q}=F;Ei(ne,"onFallback");const X=w(I),ie=()=>{!F.isInFallback||(u(null,K,J,X,Q,null,q,s,d),Hn(F,K))},te=K.transition&&K.transition.mode==="out-in";te&&(I.transition.afterLeave=ie),F.isInFallback=!0,b(I,Q,null,!0),te||ie()},move(K,ne,I){F.activeBranch&&c(F.activeBranch,K,ne,I),F.container=K},next(){return F.activeBranch&&w(F.activeBranch)},registerDep(K,ne){const I=!!F.pendingBranch;I&&F.deps++;const Q=K.vnode.el;K.asyncDep.catch(J=>{Fi(J,K,0)}).then(J=>{if(K.isUnmounted||F.isUnmounted||F.pendingId!==K.suspenseId)return;K.asyncResolved=!0;const{vnode:q}=K;$o(K,J,!1),Q&&(q.el=Q);const X=!Q&&K.subTree.el;ne(K,q,L(Q||K.subTree.el),Q?null:w(K.subTree),F,t,d),X&&M(X),Et(K,q.el),I&&--F.deps===0&&F.resolve()})},unmount(K,ne){F.isUnmounted=!0,F.activeBranch&&b(F.activeBranch,n,K,ne),F.pendingBranch&&b(F.pendingBranch,n,K,ne)}};return F}function mk(a,e,n,i,r,o,t,s,d){const m=e.suspense=It(e,i,n,a.parentNode,document.createElement("div"),null,r,o,t,s,!0),k=d(a,m.pendingBranch=e.ssContent,n,m,o,t);return m.deps===0&&m.resolve(),k}function uk(a){const{shapeFlag:e,children:n}=a,i=e&32;a.ssContent=Ts(i?n.default:n),a.ssFallback=i?Ts(n.fallback):Ae(da)}function Ts(a){let e;if(oe(a)){const n=Gn&&a._c;n&&(a._d=!1,re()),a=a(),n&&(a._d=!0,e=ca,Om())}return ae(a)&&(a=ek(a)),a=fa(a),e&&!a.dynamicChildren&&(a.dynamicChildren=e.filter(n=>n!==a)),a}function lk(a,e){e&&e.pendingBranch?ae(a)?e.effects.push(...a):e.effects.push(a):cm(a)}function Hn(a,e){a.activeBranch=e;const{vnode:n,parentComponent:i}=a,r=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=r,Et(i,r))}function _k(a,e){if(Ve){let n=Ve.provides;const i=Ve.parent&&Ve.parent.provides;i===n&&(n=Ve.provides=Object.create(i)),n[a]=e}}function _o(a,e,n=!1){const i=Ve||va;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&a in r)return r[a];if(arguments.length>1)return n&&oe(e)?e.call(i.proxy):e}}const Ss={};function ko(a,e,n){return ym(a,e,n)}function ym(a,e,{immediate:n,deep:i,flush:r,onTrack:o,onTrigger:t}=Ce){const s=Ve;let d,m=!1,k=!1;if(ea(a)?(d=()=>a.value,m=zo(a)):$n(a)?(d=()=>a,i=!0):ae(a)?(k=!0,m=a.some(V=>$n(V)||zo(V)),d=()=>a.map(V=>{if(ea(V))return V.value;if($n(V))return vn(V);if(oe(V))return en(V,s,2)})):oe(a)?e?d=()=>en(a,s,2):d=()=>{if(!(s&&s.isUnmounted))return u&&u(),pa(a,s,3,[c])}:d=Ea,e&&i){const V=d;d=()=>vn(V())}let u,c=V=>{u=M.onStop=()=>{en(V,s,4)}};if(Ii)return c=Ea,e?n&&pa(e,s,3,[d(),k?[]:void 0,c]):d(),Ea;let b=k?[]:Ss;const w=()=>{if(!!M.active)if(e){const V=M.run();(i||m||(k?V.some((F,K)=>_r(F,b[K])):_r(V,b)))&&(u&&u(),pa(e,s,3,[V,b===Ss?void 0:b,c]),b=V)}else M.run()};w.allowRecurse=!!e;let L;r==="sync"?L=w:r==="post"?L=()=>ra(w,s&&s.suspense):(w.pre=!0,s&&(w.id=s.uid),L=()=>Ct(w));const M=new gt(d,L);return e?n?w():b=M.run():r==="post"?ra(M.run.bind(M),s&&s.suspense):M.run(),()=>{M.stop(),s&&s.scope&&_t(s.scope.effects,M)}}function kk(a,e,n){const i=this.proxy,r=Ue(a)?a.includes(".")?fm(i,a):()=>i[a]:a.bind(i,i);let o;oe(e)?o=e:(o=e.handler,n=e);const t=Ve;dn(this);const s=ym(r,o.bind(i),n);return t?dn(t):an(),s}function fm(a,e){const n=e.split(".");return()=>{let i=a;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function vn(a,e){if(!Ne(a)||a.__v_skip||(e=e||new Set,e.has(a)))return a;if(e.add(a),ea(a))vn(a.value,e);else if(ae(a))for(let n=0;n<a.length;n++)vn(a[n],e);else if(Vd(a)||qn(a))a.forEach(n=>{vn(n,e)});else if(Gd(a))for(const n in a)vn(a[n],e);return a}function ck(){const a={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xm(()=>{a.isMounted=!0}),Cm(()=>{a.isUnmounting=!0}),a}const ka=[Function,Array],pk={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ka,onEnter:ka,onAfterEnter:ka,onEnterCancelled:ka,onBeforeLeave:ka,onLeave:ka,onAfterLeave:ka,onLeaveCancelled:ka,onBeforeAppear:ka,onAppear:ka,onAfterAppear:ka,onAppearCancelled:ka},setup(a,{slots:e}){const n=Fm(),i=ck();let r;return()=>{const o=e.default&&vm(e.default(),!0);if(!o||!o.length)return;let t=o[0];if(o.length>1){for(const L of o)if(L.type!==da){t=L;break}}const s=ve(a),{mode:d}=s;if(i.isLeaving)return co(t);const m=Ns(t);if(!m)return co(t);const k=Po(m,s,i,n);Oo(m,k);const u=n.subTree,c=u&&Ns(u);let b=!1;const{getTransitionKey:w}=m.type;if(w){const L=w();r===void 0?r=L:L!==r&&(r=L,b=!0)}if(c&&c.type!==da&&(!za(m,c)||b)){const L=Po(c,s,i,n);if(Oo(c,L),d==="out-in")return i.isLeaving=!0,L.afterLeave=()=>{i.isLeaving=!1,n.update()},co(t);d==="in-out"&&m.type!==da&&(L.delayLeave=(M,V,F)=>{const K=bm(i,c);K[String(c.key)]=c,M._leaveCb=()=>{V(),M._leaveCb=void 0,delete k.delayedLeave},k.delayedLeave=F})}return t}}},jm=pk;function bm(a,e){const{leavingVNodes:n}=a;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Po(a,e,n,i){const{appear:r,mode:o,persisted:t=!1,onBeforeEnter:s,onEnter:d,onAfterEnter:m,onEnterCancelled:k,onBeforeLeave:u,onLeave:c,onAfterLeave:b,onLeaveCancelled:w,onBeforeAppear:L,onAppear:M,onAfterAppear:V,onAppearCancelled:F}=e,K=String(a.key),ne=bm(n,a),I=(q,X)=>{q&&pa(q,i,9,X)},Q=(q,X)=>{const ie=X[1];I(q,X),ae(q)?q.every(te=>te.length<=1)&&ie():q.length<=1&&ie()},J={mode:o,persisted:t,beforeEnter(q){let X=s;if(!n.isMounted)if(r)X=L||s;else return;q._leaveCb&&q._leaveCb(!0);const ie=ne[K];ie&&za(a,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),I(X,[q])},enter(q){let X=d,ie=m,te=k;if(!n.isMounted)if(r)X=M||d,ie=V||m,te=F||k;else return;let $=!1;const le=q._enterCb=De=>{$||($=!0,De?I(te,[q]):I(ie,[q]),J.delayedLeave&&J.delayedLeave(),q._enterCb=void 0)};X?Q(X,[q,le]):le()},leave(q,X){const ie=String(a.key);if(q._enterCb&&q._enterCb(!0),n.isUnmounting)return X();I(u,[q]);let te=!1;const $=q._leaveCb=le=>{te||(te=!0,X(),le?I(w,[q]):I(b,[q]),q._leaveCb=void 0,ne[ie]===a&&delete ne[ie])};ne[ie]=a,c?Q(c,[q,$]):$()},clone(q){return Po(q,e,n,i)}};return J}function co(a){if(Hr(a))return a=sn(a),a.children=null,a}function Ns(a){return Hr(a)?a.children?a.children[0]:void 0:a}function Oo(a,e){a.shapeFlag&6&&a.component?Oo(a.component.subTree,e):a.shapeFlag&128?(a.ssContent.transition=e.clone(a.ssContent),a.ssFallback.transition=e.clone(a.ssFallback)):a.transition=e}function vm(a,e=!1,n){let i=[],r=0;for(let o=0;o<a.length;o++){let t=a[o];const s=n==null?t.key:String(n)+String(t.key!=null?t.key:o);t.type===ze?(t.patchFlag&128&&r++,i=i.concat(vm(t.children,e,s))):(e||t.type!==da)&&i.push(s!=null?sn(t,{key:s}):t)}if(r>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}const ur=a=>!!a.type.__asyncLoader,Hr=a=>a.type.__isKeepAlive;function hk(a,e){wm(a,"a",e)}function gk(a,e){wm(a,"da",e)}function wm(a,e,n=Ve){const i=a.__wdc||(a.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return a()});if(Ur(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Hr(r.parent.vnode)&&yk(i,e,n,r),r=r.parent}}function yk(a,e,n,i){const r=Ur(e,a,i,!0);Em(()=>{_t(i[e],r)},n)}function Ur(a,e,n=Ve,i=!1){if(n){const r=n[a]||(n[a]=[]),o=e.__weh||(e.__weh=(...t)=>{if(n.isUnmounted)return;ei(),dn(n);const s=pa(e,n,a,t);return an(),ai(),s});return i?r.unshift(o):r.push(o),o}}const Ha=a=>(e,n=Ve)=>(!Ii||a==="sp")&&Ur(a,e,n),fk=Ha("bm"),xm=Ha("m"),jk=Ha("bu"),bk=Ha("u"),Cm=Ha("bum"),Em=Ha("um"),vk=Ha("sp"),wk=Ha("rtg"),xk=Ha("rtc");function Ck(a,e=Ve){Ur("ec",a,e)}function Ek(a,e){const n=va;if(n===null)return a;const i=Vr(n)||n.proxy,r=a.dirs||(a.dirs=[]);for(let o=0;o<e.length;o++){let[t,s,d,m=Ce]=e[o];oe(t)&&(t={mounted:t,updated:t}),t.deep&&vn(s),r.push({dir:t,instance:i,value:s,oldValue:void 0,arg:d,modifiers:m})}return a}function kn(a,e,n,i){const r=a.dirs,o=e&&e.dirs;for(let t=0;t<r.length;t++){const s=r[t];o&&(s.oldValue=o[t].value);let d=s.dir[i];d&&(ei(),pa(d,n,8,[a.el,s,a,e]),ai())}}const Ik=Symbol();function Fa(a,e,n,i){let r;const o=n&&n[i];if(ae(a)||Ue(a)){r=new Array(a.length);for(let t=0,s=a.length;t<s;t++)r[t]=e(a[t],t,void 0,o&&o[t])}else if(typeof a=="number"){r=new Array(a);for(let t=0;t<a;t++)r[t]=e(t+1,t,void 0,o&&o[t])}else if(Ne(a))if(a[Symbol.iterator])r=Array.from(a,(t,s)=>e(t,s,void 0,o&&o[s]));else{const t=Object.keys(a);r=new Array(t.length);for(let s=0,d=t.length;s<d;s++){const m=t[s];r[s]=e(a[m],m,s,o&&o[s])}}else r=[];return n&&(n[i]=r),r}const Mo=a=>a?Bm(a)?Vr(a)||a.proxy:Mo(a.parent):null,gr=Ye(Object.create(null),{$:a=>a,$el:a=>a.vnode.el,$data:a=>a.data,$props:a=>a.props,$attrs:a=>a.attrs,$slots:a=>a.slots,$refs:a=>a.refs,$parent:a=>Mo(a.parent),$root:a=>Mo(a.root),$emit:a=>a.emit,$options:a=>Tm(a),$forceUpdate:a=>a.f||(a.f=()=>Ct(a.update)),$nextTick:a=>a.n||(a.n=G_.bind(a.proxy)),$watch:a=>kk.bind(a)}),Tk={get({_:a},e){const{ctx:n,setupState:i,data:r,props:o,accessCache:t,type:s,appContext:d}=a;let m;if(e[0]!=="$"){const b=t[e];if(b!==void 0)switch(b){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(i!==Ce&&pe(i,e))return t[e]=1,i[e];if(r!==Ce&&pe(r,e))return t[e]=2,r[e];if((m=a.propsOptions[0])&&pe(m,e))return t[e]=3,o[e];if(n!==Ce&&pe(n,e))return t[e]=4,n[e];Lo&&(t[e]=0)}}const k=gr[e];let u,c;if(k)return e==="$attrs"&&la(a,"get",e),k(a);if((u=s.__cssModules)&&(u=u[e]))return u;if(n!==Ce&&pe(n,e))return t[e]=4,n[e];if(c=d.config.globalProperties,pe(c,e))return c[e]},set({_:a},e,n){const{data:i,setupState:r,ctx:o}=a;return r!==Ce&&pe(r,e)?(r[e]=n,!0):i!==Ce&&pe(i,e)?(i[e]=n,!0):pe(a.props,e)||e[0]==="$"&&e.slice(1)in a?!1:(o[e]=n,!0)},has({_:{data:a,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},t){let s;return!!n[t]||a!==Ce&&pe(a,t)||e!==Ce&&pe(e,t)||(s=o[0])&&pe(s,t)||pe(i,t)||pe(gr,t)||pe(r.config.globalProperties,t)},defineProperty(a,e,n){return n.get!=null?a._.accessCache[e]=0:pe(n,"value")&&this.set(a,e,n.value,null),Reflect.defineProperty(a,e,n)}};let Lo=!0;function Sk(a){const e=Tm(a),n=a.proxy,i=a.ctx;Lo=!1,e.beforeCreate&&Rs(e.beforeCreate,a,"bc");const{data:r,computed:o,methods:t,watch:s,provide:d,inject:m,created:k,beforeMount:u,mounted:c,beforeUpdate:b,updated:w,activated:L,deactivated:M,beforeDestroy:V,beforeUnmount:F,destroyed:K,unmounted:ne,render:I,renderTracked:Q,renderTriggered:J,errorCaptured:q,serverPrefetch:X,expose:ie,inheritAttrs:te,components:$,directives:le,filters:De}=e;if(m&&Nk(m,i,null,a.appContext.config.unwrapInjectedRef),t)for(const je in t){const we=t[je];oe(we)&&(i[je]=we.bind(n))}if(r){const je=r.call(n,n);Ne(je)&&(a.data=Ta(je))}if(Lo=!0,o)for(const je in o){const we=o[je],ga=oe(we)?we.bind(n,n):oe(we.get)?we.get.bind(n,n):Ea,oi=!oe(we)&&oe(we.set)?we.set.bind(n):Ea,Qe=nc({get:ga,set:oi});Object.defineProperty(i,je,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Pa=>Qe.value=Pa})}if(s)for(const je in s)Im(s[je],i,n,je);if(d){const je=oe(d)?d.call(n):d;Reflect.ownKeys(je).forEach(we=>{_k(we,je[we])})}k&&Rs(k,a,"c");function Le(je,we){ae(we)?we.forEach(ga=>je(ga.bind(n))):we&&je(we.bind(n))}if(Le(fk,u),Le(xm,c),Le(jk,b),Le(bk,w),Le(hk,L),Le(gk,M),Le(Ck,q),Le(xk,Q),Le(wk,J),Le(Cm,F),Le(Em,ne),Le(vk,X),ae(ie))if(ie.length){const je=a.exposed||(a.exposed={});ie.forEach(we=>{Object.defineProperty(je,we,{get:()=>n[we],set:ga=>n[we]=ga})})}else a.exposed||(a.exposed={});I&&a.render===Ea&&(a.render=I),te!=null&&(a.inheritAttrs=te),$&&(a.components=$),le&&(a.directives=le)}function Nk(a,e,n=Ea,i=!1){ae(a)&&(a=Fo(a));for(const r in a){const o=a[r];let t;Ne(o)?"default"in o?t=_o(o.from||r,o.default,!0):t=_o(o.from||r):t=_o(o),ea(t)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.value,set:s=>t.value=s}):e[r]=t}}function Rs(a,e,n){pa(ae(a)?a.map(i=>i.bind(e.proxy)):a.bind(e.proxy),e,n)}function Im(a,e,n,i){const r=i.includes(".")?fm(n,i):()=>n[i];if(Ue(a)){const o=e[a];oe(o)&&ko(r,o)}else if(oe(a))ko(r,a.bind(n));else if(Ne(a))if(ae(a))a.forEach(o=>Im(o,e,n,i));else{const o=oe(a.handler)?a.handler.bind(n):e[a.handler];oe(o)&&ko(r,o,a)}}function Tm(a){const e=a.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:t}}=a.appContext,s=o.get(e);let d;return s?d=s:!r.length&&!n&&!i?d=e:(d={},r.length&&r.forEach(m=>yr(d,m,t,!0)),yr(d,e,t)),Ne(e)&&o.set(e,d),d}function yr(a,e,n,i=!1){const{mixins:r,extends:o}=e;o&&yr(a,o,n,!0),r&&r.forEach(t=>yr(a,t,n,!0));for(const t in e)if(!(i&&t==="expose")){const s=Rk[t]||n&&n[t];a[t]=s?s(a[t],e[t]):e[t]}return a}const Rk={data:As,props:gn,emits:gn,methods:gn,computed:gn,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:gn,directives:gn,watch:zk,provide:As,inject:Ak};function As(a,e){return e?a?function(){return Ye(oe(a)?a.call(this,this):a,oe(e)?e.call(this,this):e)}:e:a}function Ak(a,e){return gn(Fo(a),Fo(e))}function Fo(a){if(ae(a)){const e={};for(let n=0;n<a.length;n++)e[a[n]]=a[n];return e}return a}function Ze(a,e){return a?[...new Set([].concat(a,e))]:e}function gn(a,e){return a?Ye(Ye(Object.create(null),a),e):e}function zk(a,e){if(!a)return e;if(!e)return a;const n=Ye(Object.create(null),a);for(const i in e)n[i]=Ze(a[i],e[i]);return n}function Dk(a,e,n,i=!1){const r={},o={};kr(o,Kr,1),a.propsDefaults=Object.create(null),Sm(a,e,r,o);for(const t in a.propsOptions[0])t in r||(r[t]=void 0);n?a.props=i?r:$_(r):a.type.props?a.props=r:a.props=o,a.attrs=o}function Pk(a,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:t}}=a,s=ve(r),[d]=a.propsOptions;let m=!1;if((i||t>0)&&!(t&16)){if(t&8){const k=a.vnode.dynamicProps;for(let u=0;u<k.length;u++){let c=k[u];if(Br(a.emitsOptions,c))continue;const b=e[c];if(d)if(pe(o,c))b!==o[c]&&(o[c]=b,m=!0);else{const w=Yn(c);r[w]=Bo(d,s,w,b,a,!1)}else b!==o[c]&&(o[c]=b,m=!0)}}}else{Sm(a,e,r,o)&&(m=!0);let k;for(const u in s)(!e||!pe(e,u)&&((k=An(u))===u||!pe(e,k)))&&(d?n&&(n[u]!==void 0||n[k]!==void 0)&&(r[u]=Bo(d,s,u,void 0,a,!0)):delete r[u]);if(o!==s)for(const u in o)(!e||!pe(e,u)&&!0)&&(delete o[u],m=!0)}m&&Wa(a,"set","$attrs")}function Sm(a,e,n,i){const[r,o]=a.propsOptions;let t=!1,s;if(e)for(let d in e){if(dr(d))continue;const m=e[d];let k;r&&pe(r,k=Yn(d))?!o||!o.includes(k)?n[k]=m:(s||(s={}))[k]=m:Br(a.emitsOptions,d)||(!(d in i)||m!==i[d])&&(i[d]=m,t=!0)}if(o){const d=ve(n),m=s||Ce;for(let k=0;k<o.length;k++){const u=o[k];n[u]=Bo(r,d,u,m[u],a,!pe(m,u))}}return t}function Bo(a,e,n,i,r,o){const t=a[n];if(t!=null){const s=pe(t,"default");if(s&&i===void 0){const d=t.default;if(t.type!==Function&&oe(d)){const{propsDefaults:m}=r;n in m?i=m[n]:(dn(r),i=m[n]=d.call(null,e),an())}else i=d}t[0]&&(o&&!s?i=!1:t[1]&&(i===""||i===An(n))&&(i=!0))}return i}function Nm(a,e,n=!1){const i=e.propsCache,r=i.get(a);if(r)return r;const o=a.props,t={},s=[];let d=!1;if(!oe(a)){const k=u=>{d=!0;const[c,b]=Nm(u,e,!0);Ye(t,c),b&&s.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(k),a.extends&&k(a.extends),a.mixins&&a.mixins.forEach(k)}if(!o&&!d)return Ne(a)&&i.set(a,Bn),Bn;if(ae(o))for(let k=0;k<o.length;k++){const u=Yn(o[k]);zs(u)&&(t[u]=Ce)}else if(o)for(const k in o){const u=Yn(k);if(zs(u)){const c=o[k],b=t[u]=ae(c)||oe(c)?{type:c}:c;if(b){const w=Os(Boolean,b.type),L=Os(String,b.type);b[0]=w>-1,b[1]=L<0||w<L,(w>-1||pe(b,"default"))&&s.push(u)}}}const m=[t,s];return Ne(a)&&i.set(a,m),m}function zs(a){return a[0]!=="$"}function Ds(a){const e=a&&a.toString().match(/^\s*function (\w+)/);return e?e[1]:a===null?"null":""}function Ps(a,e){return Ds(a)===Ds(e)}function Os(a,e){return ae(e)?e.findIndex(n=>Ps(n,a)):oe(e)&&Ps(e,a)?0:-1}const Rm=a=>a[0]==="_"||a==="$stable",Tt=a=>ae(a)?a.map(fa):[fa(a)],Ok=(a,e,n)=>{if(e._n)return e;const i=hr((...r)=>Tt(e(...r)),n);return i._c=!1,i},Am=(a,e,n)=>{const i=a._ctx;for(const r in a){if(Rm(r))continue;const o=a[r];if(oe(o))e[r]=Ok(r,o,i);else if(o!=null){const t=Tt(o);e[r]=()=>t}}},zm=(a,e)=>{const n=Tt(e);a.slots.default=()=>n},Mk=(a,e)=>{if(a.vnode.shapeFlag&32){const n=e._;n?(a.slots=ve(e),kr(e,"_",n)):Am(e,a.slots={})}else a.slots={},e&&zm(a,e);kr(a.slots,Kr,1)},Lk=(a,e,n)=>{const{vnode:i,slots:r}=a;let o=!0,t=Ce;if(i.shapeFlag&32){const s=e._;s?n&&s===1?o=!1:(Ye(r,e),!n&&s===1&&delete r._):(o=!e.$stable,Am(e,r)),t=e}else e&&(zm(a,e),t={default:1});if(o)for(const s in r)!Rm(s)&&!(s in t)&&delete r[s]};function Dm(){return{app:null,config:{isNativeTag:d_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fk=0;function Bk(a,e){return function(i,r=null){oe(i)||(i=Object.assign({},i)),r!=null&&!Ne(r)&&(r=null);const o=Dm(),t=new Set;let s=!1;const d=o.app={_uid:Fk++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:rc,get config(){return o.config},set config(m){},use(m,...k){return t.has(m)||(m&&oe(m.install)?(t.add(m),m.install(d,...k)):oe(m)&&(t.add(m),m(d,...k))),d},mixin(m){return o.mixins.includes(m)||o.mixins.push(m),d},component(m,k){return k?(o.components[m]=k,d):o.components[m]},directive(m,k){return k?(o.directives[m]=k,d):o.directives[m]},mount(m,k,u){if(!s){const c=Ae(i,r);return c.appContext=o,k&&e?e(c,m):a(c,m,u),s=!0,d._container=m,m.__vue_app__=d,Vr(c.component)||c.component.proxy}},unmount(){s&&(a(null,d._container),delete d._container.__vue_app__)},provide(m,k){return o.provides[m]=k,d}};return d}}function qo(a,e,n,i,r=!1){if(ae(a)){a.forEach((c,b)=>qo(c,e&&(ae(e)?e[b]:e),n,i,r));return}if(ur(i)&&!r)return;const o=i.shapeFlag&4?Vr(i.component)||i.component.proxy:i.el,t=r?null:o,{i:s,r:d}=a,m=e&&e.r,k=s.refs===Ce?s.refs={}:s.refs,u=s.setupState;if(m!=null&&m!==d&&(Ue(m)?(k[m]=null,pe(u,m)&&(u[m]=null)):ea(m)&&(m.value=null)),oe(d))en(d,s,12,[t,k]);else{const c=Ue(d),b=ea(d);if(c||b){const w=()=>{if(a.f){const L=c?k[d]:d.value;r?ae(L)&&_t(L,o):ae(L)?L.includes(o)||L.push(o):c?(k[d]=[o],pe(u,d)&&(u[d]=k[d])):(d.value=[o],a.k&&(k[a.k]=d.value))}else c?(k[d]=t,pe(u,d)&&(u[d]=t)):b&&(d.value=t,a.k&&(k[a.k]=t))};t?(w.id=-1,ra(w,n)):w()}}}const ra=lk;function qk(a){return $k(a)}function $k(a,e){const n=c_();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:t,createText:s,createComment:d,setText:m,setElementText:k,parentNode:u,nextSibling:c,setScopeId:b=Ea,cloneNode:w,insertStaticContent:L}=a,M=(p,f,v,E=null,C=null,z=null,B=!1,A=null,O=!!f.dynamicChildren)=>{if(p===f)return;p&&!za(p,f)&&(E=Dn(p),Sa(p,C,z,!0),p=null),f.patchFlag===-2&&(O=!1,f.dynamicChildren=null);const{type:S,ref:Y,shapeFlag:W}=f;switch(S){case St:V(p,f,v,E);break;case da:F(p,f,v,E);break;case po:p==null&&K(f,v,E,B);break;case ze:le(p,f,v,E,C,z,B,A,O);break;default:W&1?Q(p,f,v,E,C,z,B,A,O):W&6?De(p,f,v,E,C,z,B,A,O):(W&64||W&128)&&S.process(p,f,v,E,C,z,B,A,O,Va)}Y!=null&&C&&qo(Y,p&&p.ref,z,f||p,!f)},V=(p,f,v,E)=>{if(p==null)i(f.el=s(f.children),v,E);else{const C=f.el=p.el;f.children!==p.children&&m(C,f.children)}},F=(p,f,v,E)=>{p==null?i(f.el=d(f.children||""),v,E):f.el=p.el},K=(p,f,v,E)=>{[p.el,p.anchor]=L(p.children,f,v,E,p.el,p.anchor)},ne=({el:p,anchor:f},v,E)=>{let C;for(;p&&p!==f;)C=c(p),i(p,v,E),p=C;i(f,v,E)},I=({el:p,anchor:f})=>{let v;for(;p&&p!==f;)v=c(p),r(p),p=v;r(f)},Q=(p,f,v,E,C,z,B,A,O)=>{B=B||f.type==="svg",p==null?J(f,v,E,C,z,B,A,O):ie(p,f,C,z,B,A,O)},J=(p,f,v,E,C,z,B,A)=>{let O,S;const{type:Y,props:W,shapeFlag:G,transition:ee,patchFlag:_e,dirs:ge}=p;if(p.el&&w!==void 0&&_e===-1)O=p.el=w(p.el);else{if(O=p.el=t(p.type,z,W&&W.is,W),G&8?k(O,p.children):G&16&&X(p.children,O,null,E,C,z&&Y!=="foreignObject",B,A),ge&&kn(p,null,E,"created"),W){for(const xe in W)xe!=="value"&&!dr(xe)&&o(O,xe,null,W[xe],z,p.children,E,C,ya);"value"in W&&o(O,"value",null,W.value),(S=W.onVnodeBeforeMount)&&Na(S,E,p)}q(O,p,p.scopeId,B,E)}ge&&kn(p,null,E,"beforeMount");const ye=(!C||C&&!C.pendingBranch)&&ee&&!ee.persisted;ye&&ee.beforeEnter(O),i(O,f,v),((S=W&&W.onVnodeMounted)||ye||ge)&&ra(()=>{S&&Na(S,E,p),ye&&ee.enter(O),ge&&kn(p,null,E,"mounted")},C)},q=(p,f,v,E,C)=>{if(v&&b(p,v),E)for(let z=0;z<E.length;z++)b(p,E[z]);if(C){let z=C.subTree;if(f===z){const B=C.vnode;q(p,B,B.scopeId,B.slotScopeIds,C.parent)}}},X=(p,f,v,E,C,z,B,A,O=0)=>{for(let S=O;S<p.length;S++){const Y=p[S]=A?Xa(p[S]):fa(p[S]);M(null,Y,f,v,E,C,z,B,A)}},ie=(p,f,v,E,C,z,B)=>{const A=f.el=p.el;let{patchFlag:O,dynamicChildren:S,dirs:Y}=f;O|=p.patchFlag&16;const W=p.props||Ce,G=f.props||Ce;let ee;v&&cn(v,!1),(ee=G.onVnodeBeforeUpdate)&&Na(ee,v,f,p),Y&&kn(f,p,v,"beforeUpdate"),v&&cn(v,!0);const _e=C&&f.type!=="foreignObject";if(S?te(p.dynamicChildren,S,A,v,E,_e,z):B||ga(p,f,A,null,v,E,_e,z,!1),O>0){if(O&16)$(A,f,W,G,v,E,C);else if(O&2&&W.class!==G.class&&o(A,"class",null,G.class,C),O&4&&o(A,"style",W.style,G.style,C),O&8){const ge=f.dynamicProps;for(let ye=0;ye<ge.length;ye++){const xe=ge[ye],na=W[xe],Oa=G[xe];(Oa!==na||xe==="value")&&o(A,xe,na,Oa,C,p.children,v,E,ya)}}O&1&&p.children!==f.children&&k(A,f.children)}else!B&&S==null&&$(A,f,W,G,v,E,C);((ee=G.onVnodeUpdated)||Y)&&ra(()=>{ee&&Na(ee,v,f,p),Y&&kn(f,p,v,"updated")},E)},te=(p,f,v,E,C,z,B)=>{for(let A=0;A<f.length;A++){const O=p[A],S=f[A],Y=O.el&&(O.type===ze||!za(O,S)||O.shapeFlag&70)?u(O.el):v;M(O,S,Y,null,E,C,z,B,!0)}},$=(p,f,v,E,C,z,B)=>{if(v!==E){for(const A in E){if(dr(A))continue;const O=E[A],S=v[A];O!==S&&A!=="value"&&o(p,A,S,O,B,f.children,C,z,ya)}if(v!==Ce)for(const A in v)!dr(A)&&!(A in E)&&o(p,A,v[A],null,B,f.children,C,z,ya);"value"in E&&o(p,"value",v.value,E.value)}},le=(p,f,v,E,C,z,B,A,O)=>{const S=f.el=p?p.el:s(""),Y=f.anchor=p?p.anchor:s("");let{patchFlag:W,dynamicChildren:G,slotScopeIds:ee}=f;ee&&(A=A?A.concat(ee):ee),p==null?(i(S,v,E),i(Y,v,E),X(f.children,v,Y,C,z,B,A,O)):W>0&&W&64&&G&&p.dynamicChildren?(te(p.dynamicChildren,G,v,C,z,B,A),(f.key!=null||C&&f===C.subTree)&&Pm(p,f,!0)):ga(p,f,v,Y,C,z,B,A,O)},De=(p,f,v,E,C,z,B,A,O)=>{f.slotScopeIds=A,p==null?f.shapeFlag&512?C.ctx.activate(f,v,E,B,O):ha(f,v,E,C,z,B,O):Le(p,f,O)},ha=(p,f,v,E,C,z,B)=>{const A=p.component=Jk(p,E,C);if(Hr(p)&&(A.ctx.renderer=Va),Qk(A),A.asyncDep){if(C&&C.registerDep(A,je),!p.el){const O=A.subTree=Ae(da);F(null,O,f,v)}return}je(A,p,f,v,C,z,B)},Le=(p,f,v)=>{const E=f.component=p.component;if(ik(p,f,v))if(E.asyncDep&&!E.asyncResolved){we(E,f,v);return}else E.next=f,Q_(E.update),E.update();else f.el=p.el,E.vnode=f},je=(p,f,v,E,C,z,B)=>{const A=()=>{if(p.isMounted){let{next:Y,bu:W,u:G,parent:ee,vnode:_e}=p,ge=Y,ye;cn(p,!1),Y?(Y.el=_e.el,we(p,Y,B)):Y=_e,W&&mr(W),(ye=Y.props&&Y.props.onVnodeBeforeUpdate)&&Na(ye,ee,Y,_e),cn(p,!0);const xe=lo(p),na=p.subTree;p.subTree=xe,M(na,xe,u(na.el),Dn(na),p,C,z),Y.el=xe.el,ge===null&&Et(p,xe.el),G&&ra(G,C),(ye=Y.props&&Y.props.onVnodeUpdated)&&ra(()=>Na(ye,ee,Y,_e),C)}else{let Y;const{el:W,props:G}=f,{bm:ee,m:_e,parent:ge}=p,ye=ur(f);if(cn(p,!1),ee&&mr(ee),!ye&&(Y=G&&G.onVnodeBeforeMount)&&Na(Y,ge,f),cn(p,!0),W&&si){const xe=()=>{p.subTree=lo(p),si(W,p.subTree,p,C,null)};ye?f.type.__asyncLoader().then(()=>!p.isUnmounted&&xe()):xe()}else{const xe=p.subTree=lo(p);M(null,xe,v,E,p,C,z),f.el=xe.el}if(_e&&ra(_e,C),!ye&&(Y=G&&G.onVnodeMounted)){const xe=f;ra(()=>Na(Y,ge,xe),C)}(f.shapeFlag&256||ge&&ur(ge.vnode)&&ge.vnode.shapeFlag&256)&&p.a&&ra(p.a,C),p.isMounted=!0,f=v=E=null}},O=p.effect=new gt(A,()=>Ct(S),p.scope),S=p.update=()=>O.run();S.id=p.uid,cn(p,!0),S()},we=(p,f,v)=>{f.component=p;const E=p.vnode.props;p.vnode=f,p.next=null,Pk(p,f.props,E,v),Lk(p,f.children,v),ei(),Es(),ai()},ga=(p,f,v,E,C,z,B,A,O=!1)=>{const S=p&&p.children,Y=p?p.shapeFlag:0,W=f.children,{patchFlag:G,shapeFlag:ee}=f;if(G>0){if(G&128){Qe(S,W,v,E,C,z,B,A,O);return}else if(G&256){oi(S,W,v,E,C,z,B,A,O);return}}ee&8?(Y&16&&ya(S,C,z),W!==S&&k(v,W)):Y&16?ee&16?Qe(S,W,v,E,C,z,B,A,O):ya(S,C,z,!0):(Y&8&&k(v,""),ee&16&&X(W,v,E,C,z,B,A,O))},oi=(p,f,v,E,C,z,B,A,O)=>{p=p||Bn,f=f||Bn;const S=p.length,Y=f.length,W=Math.min(S,Y);let G;for(G=0;G<W;G++){const ee=f[G]=O?Xa(f[G]):fa(f[G]);M(p[G],ee,v,null,C,z,B,A,O)}S>Y?ya(p,C,z,!0,!1,W):X(f,v,E,C,z,B,A,O,W)},Qe=(p,f,v,E,C,z,B,A,O)=>{let S=0;const Y=f.length;let W=p.length-1,G=Y-1;for(;S<=W&&S<=G;){const ee=p[S],_e=f[S]=O?Xa(f[S]):fa(f[S]);if(za(ee,_e))M(ee,_e,v,null,C,z,B,A,O);else break;S++}for(;S<=W&&S<=G;){const ee=p[W],_e=f[G]=O?Xa(f[G]):fa(f[G]);if(za(ee,_e))M(ee,_e,v,null,C,z,B,A,O);else break;W--,G--}if(S>W){if(S<=G){const ee=G+1,_e=ee<Y?f[ee].el:E;for(;S<=G;)M(null,f[S]=O?Xa(f[S]):fa(f[S]),v,_e,C,z,B,A,O),S++}}else if(S>G)for(;S<=W;)Sa(p[S],C,z,!0),S++;else{const ee=S,_e=S,ge=new Map;for(S=_e;S<=G;S++){const Xe=f[S]=O?Xa(f[S]):fa(f[S]);Xe.key!=null&&ge.set(Xe.key,S)}let ye,xe=0;const na=G-_e+1;let Oa=!1,di=0;const Ma=new Array(na);for(S=0;S<na;S++)Ma[S]=0;for(S=ee;S<=W;S++){const Xe=p[S];if(xe>=na){Sa(Xe,C,z,!0);continue}let ia;if(Xe.key!=null)ia=ge.get(Xe.key);else for(ye=_e;ye<=G;ye++)if(Ma[ye-_e]===0&&za(Xe,f[ye])){ia=ye;break}ia===void 0?Sa(Xe,C,z,!0):(Ma[ia-_e]=S+1,ia>=di?di=ia:Oa=!0,M(Xe,f[ia],v,null,C,z,B,A,O),xe++)}const Ji=Oa?Wk(Ma):Bn;for(ye=Ji.length-1,S=na-1;S>=0;S--){const Xe=_e+S,ia=f[Xe],mi=Xe+1<Y?f[Xe+1].el:E;Ma[S]===0?M(null,ia,v,mi,C,z,B,A,O):Oa&&(ye<0||S!==Ji[ye]?Pa(ia,v,mi,2):ye--)}}},Pa=(p,f,v,E,C=null)=>{const{el:z,type:B,transition:A,children:O,shapeFlag:S}=p;if(S&6){Pa(p.component.subTree,f,v,E);return}if(S&128){p.suspense.move(f,v,E);return}if(S&64){B.move(p,f,v,Va);return}if(B===ze){i(z,f,v);for(let W=0;W<O.length;W++)Pa(O[W],f,v,E);i(p.anchor,f,v);return}if(B===po){ne(p,f,v);return}if(E!==2&&S&1&&A)if(E===0)A.beforeEnter(z),i(z,f,v),ra(()=>A.enter(z),C);else{const{leave:W,delayLeave:G,afterLeave:ee}=A,_e=()=>i(z,f,v),ge=()=>{W(z,()=>{_e(),ee&&ee()})};G?G(z,_e,ge):ge()}else i(z,f,v)},Sa=(p,f,v,E=!1,C=!1)=>{const{type:z,props:B,ref:A,children:O,dynamicChildren:S,shapeFlag:Y,patchFlag:W,dirs:G}=p;if(A!=null&&qo(A,null,v,p,!0),Y&256){f.ctx.deactivate(p);return}const ee=Y&1&&G,_e=!ur(p);let ge;if(_e&&(ge=B&&B.onVnodeBeforeUnmount)&&Na(ge,f,p),Y&6)ro(p.component,v,E);else{if(Y&128){p.suspense.unmount(v,E);return}ee&&kn(p,null,f,"beforeUnmount"),Y&64?p.type.remove(p,f,v,C,Va,E):S&&(z!==ze||W>0&&W&64)?ya(S,f,v,!1,!0):(z===ze&&W&384||!C&&Y&16)&&ya(O,f,v),E&&Yi(p)}(_e&&(ge=B&&B.onVnodeUnmounted)||ee)&&ra(()=>{ge&&Na(ge,f,p),ee&&kn(p,null,f,"unmounted")},v)},Yi=p=>{const{type:f,el:v,anchor:E,transition:C}=p;if(f===ze){io(v,E);return}if(f===po){I(p);return}const z=()=>{r(v),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:B,delayLeave:A}=C,O=()=>B(v,z);A?A(p.el,z,O):O()}else z()},io=(p,f)=>{let v;for(;p!==f;)v=c(p),r(p),p=v;r(f)},ro=(p,f,v)=>{const{bum:E,scope:C,update:z,subTree:B,um:A}=p;E&&mr(E),C.stop(),z&&(z.active=!1,Sa(B,p,f,v)),A&&ra(A,f),ra(()=>{p.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},ya=(p,f,v,E=!1,C=!1,z=0)=>{for(let B=z;B<p.length;B++)Sa(p[B],f,v,E,C)},Dn=p=>p.shapeFlag&6?Dn(p.component.subTree):p.shapeFlag&128?p.suspense.next():c(p.anchor||p.el),Gi=(p,f,v)=>{p==null?f._vnode&&Sa(f._vnode,null,null,!0):M(f._vnode||null,p,f,null,null,null,v),Es(),pm(),f._vnode=p},Va={p:M,um:Sa,m:Pa,r:Yi,mt:ha,mc:X,pc:ga,pbc:te,n:Dn,o:a};let ti,si;return e&&([ti,si]=e(Va)),{render:Gi,hydrate:ti,createApp:Bk(Gi,ti)}}function cn({effect:a,update:e},n){a.allowRecurse=e.allowRecurse=n}function Pm(a,e,n=!1){const i=a.children,r=e.children;if(ae(i)&&ae(r))for(let o=0;o<i.length;o++){const t=i[o];let s=r[o];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[o]=Xa(r[o]),s.el=t.el),n||Pm(t,s))}}function Wk(a){const e=a.slice(),n=[0];let i,r,o,t,s;const d=a.length;for(i=0;i<d;i++){const m=a[i];if(m!==0){if(r=n[n.length-1],a[r]<m){e[i]=r,n.push(i);continue}for(o=0,t=n.length-1;o<t;)s=o+t>>1,a[n[s]]<m?o=s+1:t=s;m<a[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,t=n[o-1];o-- >0;)n[o]=t,t=e[t];return n}const Hk=a=>a.__isTeleport,ze=Symbol(void 0),St=Symbol(void 0),da=Symbol(void 0),po=Symbol(void 0),yi=[];let ca=null;function re(a=!1){yi.push(ca=a?null:[])}function Om(){yi.pop(),ca=yi[yi.length-1]||null}let Gn=1;function Ms(a){Gn+=a}function Mm(a){return a.dynamicChildren=Gn>0?ca||Bn:null,Om(),Gn>0&&ca&&ca.push(a),a}function se(a,e,n,i,r,o){return Mm(U(a,e,n,i,r,o,!0))}function Nt(a,e,n,i,r){return Mm(Ae(a,e,n,i,r,!0))}function fr(a){return a?a.__v_isVNode===!0:!1}function za(a,e){return a.type===e.type&&a.key===e.key}const Kr="__vInternal",Lm=({key:a})=>a!=null?a:null,lr=({ref:a,ref_key:e,ref_for:n})=>a!=null?Ue(a)||ea(a)||oe(a)?{i:va,r:a,k:e,f:!!n}:a:null;function U(a,e=null,n=null,i=0,r=null,o=a===ze?0:1,t=!1,s=!1){const d={__v_isVNode:!0,__v_skip:!0,type:a,props:e,key:e&&Lm(e),ref:e&&lr(e),scopeId:qr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return s?(Rt(d,n),o&128&&a.normalize(d)):n&&(d.shapeFlag|=Ue(n)?8:16),Gn>0&&!t&&ca&&(d.patchFlag>0||o&6)&&d.patchFlag!==32&&ca.push(d),d}const Ae=Uk;function Uk(a,e=null,n=null,i=0,r=null,o=!1){if((!a||a===Ik)&&(a=da),fr(a)){const s=sn(a,e,!0);return n&&Rt(s,n),Gn>0&&!o&&ca&&(s.shapeFlag&6?ca[ca.indexOf(a)]=s:ca.push(s)),s.patchFlag|=-2,s}if(ac(a)&&(a=a.__vccOpts),e){e=Kk(e);let{class:s,style:d}=e;s&&!Ue(s)&&(e.class=ut(s)),Ne(d)&&(dm(d)&&!ae(d)&&(d=Ye({},d)),e.style=Pr(d))}const t=Ue(a)?1:rk(a)?128:Hk(a)?64:Ne(a)?4:oe(a)?2:0;return U(a,e,n,i,r,t,o,!0)}function Kk(a){return a?dm(a)||Kr in a?Ye({},a):a:null}function sn(a,e,n=!1){const{props:i,ref:r,patchFlag:o,children:t}=a,s=e?Vk(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:a.type,props:s,key:s&&Lm(s),ref:e&&e.ref?n&&r?ae(r)?r.concat(lr(e)):[r,lr(e)]:lr(e):r,scopeId:a.scopeId,slotScopeIds:a.slotScopeIds,children:t,target:a.target,targetAnchor:a.targetAnchor,staticCount:a.staticCount,shapeFlag:a.shapeFlag,patchFlag:e&&a.type!==ze?o===-1?16:o|16:o,dynamicProps:a.dynamicProps,dynamicChildren:a.dynamicChildren,appContext:a.appContext,dirs:a.dirs,transition:a.transition,component:a.component,suspense:a.suspense,ssContent:a.ssContent&&sn(a.ssContent),ssFallback:a.ssFallback&&sn(a.ssFallback),el:a.el,anchor:a.anchor}}function ma(a=" ",e=0){return Ae(St,null,a,e)}function sa(a="",e=!1){return e?(re(),Nt(da,null,a)):Ae(da,null,a)}function fa(a){return a==null||typeof a=="boolean"?Ae(da):ae(a)?Ae(ze,null,a.slice()):typeof a=="object"?Xa(a):Ae(St,null,String(a))}function Xa(a){return a.el===null||a.memo?a:sn(a)}function Rt(a,e){let n=0;const{shapeFlag:i}=a;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Rt(a,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Kr in e)?e._ctx=va:r===3&&va&&(va.slots._===1?e._=1:(e._=2,a.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:va},n=32):(e=String(e),i&64?(n=16,e=[ma(e)]):n=8);a.children=e,a.shapeFlag|=n}function Vk(...a){const e={};for(let n=0;n<a.length;n++){const i=a[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ut([e.class,i.class]));else if(r==="style")e.style=Pr([e.style,i.style]);else if(Or(r)){const o=e[r],t=i[r];t&&o!==t&&!(ae(o)&&o.includes(t))&&(e[r]=o?[].concat(o,t):t)}else r!==""&&(e[r]=i[r])}return e}function Na(a,e,n,i=null){pa(a,e,7,[n,i])}const Yk=Dm();let Gk=0;function Jk(a,e,n){const i=a.type,r=(e?e.appContext:a.appContext)||Yk,o={uid:Gk++,vnode:a,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new p_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nm(i,r),emitsOptions:gm(i,r),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:i.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Z_.bind(null,o),a.ce&&a.ce(o),o}let Ve=null;const Fm=()=>Ve||va,dn=a=>{Ve=a,a.scope.on()},an=()=>{Ve&&Ve.scope.off(),Ve=null};function Bm(a){return a.vnode.shapeFlag&4}let Ii=!1;function Qk(a,e=!1){Ii=e;const{props:n,children:i}=a.vnode,r=Bm(a);Dk(a,n,r,e),Mk(a,i);const o=r?Xk(a,e):void 0;return Ii=!1,o}function Xk(a,e){const n=a.type;a.accessCache=Object.create(null),a.proxy=mm(new Proxy(a.ctx,Tk));const{setup:i}=n;if(i){const r=a.setupContext=i.length>1?ec(a):null;dn(a),ei();const o=en(i,a,0,[a.props,r]);if(ai(),an(),ct(o)){if(o.then(an,an),e)return o.then(t=>{$o(a,t,e)}).catch(t=>{Fi(t,a,0)});a.asyncDep=o}else $o(a,o,e)}else qm(a,e)}function $o(a,e,n){oe(e)?a.type.__ssrInlineRender?a.ssrRender=e:a.render=e:Ne(e)&&(a.setupState=um(e)),qm(a,n)}let Ls;function qm(a,e,n){const i=a.type;if(!a.render){if(!e&&Ls&&!i.render){const r=i.template;if(r){const{isCustomElement:o,compilerOptions:t}=a.appContext.config,{delimiters:s,compilerOptions:d}=i,m=Ye(Ye({isCustomElement:o,delimiters:s},t),d);i.render=Ls(r,m)}}a.render=i.render||Ea}dn(a),ei(),Sk(a),ai(),an()}function Zk(a){return new Proxy(a.attrs,{get(e,n){return la(a,"get","$attrs"),e[n]}})}function ec(a){const e=i=>{a.exposed=i||{}};let n;return{get attrs(){return n||(n=Zk(a))},slots:a.slots,emit:a.emit,expose:e}}function Vr(a){if(a.exposed)return a.exposeProxy||(a.exposeProxy=new Proxy(um(mm(a.exposed)),{get(e,n){if(n in e)return e[n];if(n in gr)return gr[n](a)}}))}function ac(a){return oe(a)&&"__vccOpts"in a}const nc=(a,e)=>V_(a,e,Ii);function Fs(a){const e=Fm();let n=a();return an(),ct(n)&&(n=n.catch(i=>{throw dn(e),i})),[n,()=>dn(e)]}function ic(a,e,n){const i=arguments.length;return i===2?Ne(e)&&!ae(e)?fr(e)?Ae(a,null,[e]):Ae(a,e):Ae(a,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&fr(n)&&(n=[n]),Ae(a,e,n))}const rc="3.2.38",oc="http://www.w3.org/2000/svg",bn=typeof document<"u"?document:null,Bs=bn&&bn.createElement("template"),tc={insert:(a,e,n)=>{e.insertBefore(a,n||null)},remove:a=>{const e=a.parentNode;e&&e.removeChild(a)},createElement:(a,e,n,i)=>{const r=e?bn.createElementNS(oc,a):bn.createElement(a,n?{is:n}:void 0);return a==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:a=>bn.createTextNode(a),createComment:a=>bn.createComment(a),setText:(a,e)=>{a.nodeValue=e},setElementText:(a,e)=>{a.textContent=e},parentNode:a=>a.parentNode,nextSibling:a=>a.nextSibling,querySelector:a=>bn.querySelector(a),setScopeId(a,e){a.setAttribute(e,"")},cloneNode(a){const e=a.cloneNode(!0);return"_value"in a&&(e._value=a._value),e},insertStaticContent(a,e,n,i,r,o){const t=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Bs.innerHTML=i?`<svg>${a}</svg>`:a;const s=Bs.content;if(i){const d=s.firstChild;for(;d.firstChild;)s.appendChild(d.firstChild);s.removeChild(d)}e.insertBefore(s,n)}return[t?t.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function sc(a,e,n){const i=a._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?a.removeAttribute("class"):n?a.setAttribute("class",e):a.className=e}function dc(a,e,n){const i=a.style,r=Ue(n);if(n&&!r){for(const o in n)Wo(i,o,n[o]);if(e&&!Ue(e))for(const o in e)n[o]==null&&Wo(i,o,"")}else{const o=i.display;r?e!==n&&(i.cssText=n):e&&a.removeAttribute("style"),"_vod"in a&&(i.display=o)}}const qs=/\s*!important$/;function Wo(a,e,n){if(ae(n))n.forEach(i=>Wo(a,e,i));else if(n==null&&(n=""),e.startsWith("--"))a.setProperty(e,n);else{const i=mc(a,e);qs.test(n)?a.setProperty(An(i),n.replace(qs,""),"important"):a[i]=n}}const $s=["Webkit","Moz","ms"],ho={};function mc(a,e){const n=ho[e];if(n)return n;let i=Yn(e);if(i!=="filter"&&i in a)return ho[e]=i;i=Jd(i);for(let r=0;r<$s.length;r++){const o=$s[r]+i;if(o in a)return ho[e]=o}return e}const Ws="http://www.w3.org/1999/xlink";function uc(a,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?a.removeAttributeNS(Ws,e.slice(6,e.length)):a.setAttributeNS(Ws,e,n);else{const o=r_(e);n==null||o&&!Ud(n)?a.removeAttribute(e):a.setAttribute(e,o?"":n)}}function lc(a,e,n,i,r,o,t){if(e==="innerHTML"||e==="textContent"){i&&t(i,r,o),a[e]=n==null?"":n;return}if(e==="value"&&a.tagName!=="PROGRESS"&&!a.tagName.includes("-")){a._value=n;const d=n==null?"":n;(a.value!==d||a.tagName==="OPTION")&&(a.value=d),n==null&&a.removeAttribute(e);return}let s=!1;if(n===""||n==null){const d=typeof a[e];d==="boolean"?n=Ud(n):n==null&&d==="string"?(n="",s=!0):d==="number"&&(n=0,s=!0)}try{a[e]=n}catch{}s&&a.removeAttribute(e)}const[$m,_c]=(()=>{let a=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(a=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[a,e]})();let Ho=0;const kc=Promise.resolve(),cc=()=>{Ho=0},pc=()=>Ho||(kc.then(cc),Ho=$m());function Mn(a,e,n,i){a.addEventListener(e,n,i)}function hc(a,e,n,i){a.removeEventListener(e,n,i)}function gc(a,e,n,i,r=null){const o=a._vei||(a._vei={}),t=o[e];if(i&&t)t.value=i;else{const[s,d]=yc(e);if(i){const m=o[e]=fc(i,r);Mn(a,s,m,d)}else t&&(hc(a,s,t,d),o[e]=void 0)}}const Hs=/(?:Once|Passive|Capture)$/;function yc(a){let e;if(Hs.test(a)){e={};let i;for(;i=a.match(Hs);)a=a.slice(0,a.length-i[0].length),e[i[0].toLowerCase()]=!0}return[a[2]===":"?a.slice(3):An(a.slice(2)),e]}function fc(a,e){const n=i=>{const r=i.timeStamp||$m();(_c||r>=n.attached-1)&&pa(jc(i,n.value),e,5,[i])};return n.value=a,n.attached=pc(),n}function jc(a,e){if(ae(e)){const n=a.stopImmediatePropagation;return a.stopImmediatePropagation=()=>{n.call(a),a._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Us=/^on[a-z]/,bc=(a,e,n,i,r=!1,o,t,s,d)=>{e==="class"?sc(a,i,r):e==="style"?dc(a,n,i):Or(e)?lt(e)||gc(a,e,n,i,t):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vc(a,e,i,r))?lc(a,e,i,o,t,s,d):(e==="true-value"?a._trueValue=i:e==="false-value"&&(a._falseValue=i),uc(a,e,i,r))};function vc(a,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in a&&Us.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&a.tagName==="INPUT"||e==="type"&&a.tagName==="TEXTAREA"||Us.test(e)&&Ue(n)?!1:e in a}const Ja="transition",_i="animation",At=(a,{slots:e})=>ic(jm,wc(a),e);At.displayName="Transition";const Wm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};At.props=Ye({},jm.props,Wm);const pn=(a,e=[])=>{ae(a)?a.forEach(n=>n(...e)):a&&a(...e)},Ks=a=>a?ae(a)?a.some(e=>e.length>1):a.length>1:!1;function wc(a){const e={};for(const $ in a)$ in Wm||(e[$]=a[$]);if(a.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:t=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:d=o,appearActiveClass:m=t,appearToClass:k=s,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:c=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=a,w=xc(r),L=w&&w[0],M=w&&w[1],{onBeforeEnter:V,onEnter:F,onEnterCancelled:K,onLeave:ne,onLeaveCancelled:I,onBeforeAppear:Q=V,onAppear:J=F,onAppearCancelled:q=K}=e,X=($,le,De)=>{hn($,le?k:s),hn($,le?m:t),De&&De()},ie=($,le)=>{$._isLeaving=!1,hn($,u),hn($,b),hn($,c),le&&le()},te=$=>(le,De)=>{const ha=$?J:F,Le=()=>X(le,$,De);pn(ha,[le,Le]),Vs(()=>{hn(le,$?d:o),Qa(le,$?k:s),Ks(ha)||Ys(le,i,L,Le)})};return Ye(e,{onBeforeEnter($){pn(V,[$]),Qa($,o),Qa($,t)},onBeforeAppear($){pn(Q,[$]),Qa($,d),Qa($,m)},onEnter:te(!1),onAppear:te(!0),onLeave($,le){$._isLeaving=!0;const De=()=>ie($,le);Qa($,u),Ic(),Qa($,c),Vs(()=>{!$._isLeaving||(hn($,u),Qa($,b),Ks(ne)||Ys($,i,M,De))}),pn(ne,[$,De])},onEnterCancelled($){X($,!1),pn(K,[$])},onAppearCancelled($){X($,!0),pn(q,[$])},onLeaveCancelled($){ie($),pn(I,[$])}})}function xc(a){if(a==null)return null;if(Ne(a))return[go(a.enter),go(a.leave)];{const e=go(a);return[e,e]}}function go(a){return wi(a)}function Qa(a,e){e.split(/\s+/).forEach(n=>n&&a.classList.add(n)),(a._vtc||(a._vtc=new Set)).add(e)}function hn(a,e){e.split(/\s+/).forEach(i=>i&&a.classList.remove(i));const{_vtc:n}=a;n&&(n.delete(e),n.size||(a._vtc=void 0))}function Vs(a){requestAnimationFrame(()=>{requestAnimationFrame(a)})}let Cc=0;function Ys(a,e,n,i){const r=a._endId=++Cc,o=()=>{r===a._endId&&i()};if(n)return setTimeout(o,n);const{type:t,timeout:s,propCount:d}=Ec(a,e);if(!t)return i();const m=t+"end";let k=0;const u=()=>{a.removeEventListener(m,c),o()},c=b=>{b.target===a&&++k>=d&&u()};setTimeout(()=>{k<d&&u()},s+1),a.addEventListener(m,c)}function Ec(a,e){const n=window.getComputedStyle(a),i=w=>(n[w]||"").split(", "),r=i(Ja+"Delay"),o=i(Ja+"Duration"),t=Gs(r,o),s=i(_i+"Delay"),d=i(_i+"Duration"),m=Gs(s,d);let k=null,u=0,c=0;e===Ja?t>0&&(k=Ja,u=t,c=o.length):e===_i?m>0&&(k=_i,u=m,c=d.length):(u=Math.max(t,m),k=u>0?t>m?Ja:_i:null,c=k?k===Ja?o.length:d.length:0);const b=k===Ja&&/\b(transform|all)(,|$)/.test(n[Ja+"Property"]);return{type:k,timeout:u,propCount:c,hasTransform:b}}function Gs(a,e){for(;a.length<e.length;)a=a.concat(a);return Math.max(...e.map((n,i)=>Js(n)+Js(a[i])))}function Js(a){return Number(a.slice(0,-1).replace(",","."))*1e3}function Ic(){return document.body.offsetHeight}const Qs=a=>{const e=a.props["onUpdate:modelValue"]||!1;return ae(e)?n=>mr(e,n):e};function Tc(a){a.target.composing=!0}function Xs(a){const e=a.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Sc={created(a,{modifiers:{lazy:e,trim:n,number:i}},r){a._assign=Qs(r);const o=i||r.props&&r.props.type==="number";Mn(a,e?"change":"input",t=>{if(t.target.composing)return;let s=a.value;n&&(s=s.trim()),o&&(s=wi(s)),a._assign(s)}),n&&Mn(a,"change",()=>{a.value=a.value.trim()}),e||(Mn(a,"compositionstart",Tc),Mn(a,"compositionend",Xs),Mn(a,"change",Xs))},mounted(a,{value:e}){a.value=e==null?"":e},beforeUpdate(a,{value:e,modifiers:{lazy:n,trim:i,number:r}},o){if(a._assign=Qs(o),a.composing||document.activeElement===a&&a.type!=="range"&&(n||i&&a.value.trim()===e||(r||a.type==="number")&&wi(a.value)===e))return;const t=e==null?"":e;a.value!==t&&(a.value=t)}},Nc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zs=(a,e)=>n=>{if(!("key"in n))return;const i=An(n.key);if(e.some(r=>r===i||Nc[r]===i))return a(n)},Rc=Ye({patchProp:bc},tc);let ed;function Ac(){return ed||(ed=qk(Rc))}const zc=(...a)=>{const e=Ac().createApp(...a),{mount:n}=e;return e.mount=i=>{const r=Dc(i);if(!r)return;const o=e._component;!oe(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const t=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),t},e};function Dc(a){return Ue(a)?document.querySelector(a):a}/**
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
 */const Hm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const D=function(a,e){if(!a)throw ni(e)},ni=function(a){return new Error("Firebase Database ("+Hm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};/**
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
 */const Um=function(a){const e=[];let n=0;for(let i=0;i<a.length;i++){let r=a.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<a.length&&(a.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(a.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Pc=function(a){const e=[];let n=0,i=0;for(;n<a.length;){const r=a[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=a[n++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=a[n++],t=a[n++],s=a[n++],d=((r&7)<<18|(o&63)<<12|(t&63)<<6|s&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const o=a[n++],t=a[n++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|t&63)}}return e.join("")},zt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<a.length;r+=3){const o=a[r],t=r+1<a.length,s=t?a[r+1]:0,d=r+2<a.length,m=d?a[r+2]:0,k=o>>2,u=(o&3)<<4|s>>4;let c=(s&15)<<2|m>>6,b=m&63;d||(b=64,t||(c=64)),i.push(n[k],n[u],n[c],n[b])}return i.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(Um(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):Pc(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<a.length;){const o=n[a.charAt(r++)],s=r<a.length?n[a.charAt(r)]:0;++r;const m=r<a.length?n[a.charAt(r)]:64;++r;const u=r<a.length?n[a.charAt(r)]:64;if(++r,o==null||s==null||m==null||u==null)throw Error();const c=o<<2|s>>4;if(i.push(c),m!==64){const b=s<<4&240|m>>2;if(i.push(b),u!==64){const w=m<<6&192|u;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}},Km=function(a){const e=Um(a);return zt.encodeByteArray(e,!0)},Vm=function(a){return Km(a).replace(/\./g,"")},ad=function(a){try{return zt.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Oc(a){return Ym(void 0,a)}function Ym(a,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:a===void 0&&(a={});break;case Array:a=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mc(n)||(a[n]=Ym(a[n],e[n]));return a}function Mc(a){return a!=="__proto__"}/**
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
 */class Dt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Lc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lc())}function Fc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jm(){return Hm.NODE_ADMIN===!0}function Bc(){return typeof indexedDB=="object"}function qc(){return new Promise((a,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),a(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const $c="FirebaseError";class Bi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=$c,Object.setPrototypeOf(this,Bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qm.prototype.create)}}class Qm{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],t=o?Wc(o,i):"Error",s=`${this.serviceName}: ${t} (${r}).`;return new Bi(r,s,i)}}function Wc(a,e){return a.replace(Hc,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Hc=/\{\$([^}]+)}/g;/**
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
 */function Ti(a){return JSON.parse(a)}function qe(a){return JSON.stringify(a)}/**
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
 */const Xm=function(a){let e={},n={},i={},r="";try{const o=a.split(".");e=Ti(ad(o[0])||""),n=Ti(ad(o[1])||""),r=o[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},Uc=function(a){const e=Xm(a),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Kc=function(a){const e=Xm(a).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ua(a,e){return Object.prototype.hasOwnProperty.call(a,e)}function Jn(a,e){if(Object.prototype.hasOwnProperty.call(a,e))return a[e]}function nd(a){for(const e in a)if(Object.prototype.hasOwnProperty.call(a,e))return!1;return!0}function jr(a,e,n){const i={};for(const r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i[r]=e.call(n,a[r],r,a));return i}function Uo(a,e){if(a===e)return!0;const n=Object.keys(a),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const o=a[r],t=e[r];if(id(o)&&id(t)){if(!Uo(o,t))return!1}else if(o!==t)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function id(a){return a!==null&&typeof a=="object"}/**
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
 */function Vc(a){const e=[];for(const[n,i]of Object.entries(a))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Yc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const c=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(c<<1|c>>>31)&4294967295}let r=this.chain_[0],o=this.chain_[1],t=this.chain_[2],s=this.chain_[3],d=this.chain_[4],m,k;for(let u=0;u<80;u++){u<40?u<20?(m=s^o&(t^s),k=1518500249):(m=o^t^s,k=1859775393):u<60?(m=o&t|s&(o|t),k=2400959708):(m=o^t^s,k=3395469782);const c=(r<<5|r>>>27)+m+d+k+i[u]&4294967295;d=s,s=t,t=(o<<30|o>>>2)&4294967295,o=r,r=c}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+t&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const o=this.buf_;let t=this.inbuf_;for(;r<n;){if(t===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(o[t]=e.charCodeAt(r),++t,++r,t===this.blockSize){this.compress_(o),t=0;break}}else for(;r<n;)if(o[t]=e[r],++t,++r,t===this.blockSize){this.compress_(o),t=0;break}}this.inbuf_=t,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[r]>>o&255,++i;return e}}function Zm(a,e){return`${a} failed: ${e} argument `}/**
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
 */const Gc=function(a){const e=[];let n=0;for(let i=0;i<a.length;i++){let r=a.charCodeAt(i);if(r>=55296&&r<=56319){const o=r-55296;i++,D(i<a.length,"Surrogate pair missing trail surrogate.");const t=a.charCodeAt(i)-56320;r=65536+(o<<10)+t}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Yr=function(a){let e=0;for(let n=0;n<a.length;n++){const i=a.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Gr(a){return a&&a._delegate?a._delegate:a}class Si{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yn="[DEFAULT]";/**
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
 */class Jc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Dt;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xc(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,t]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);i===s&&t.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const t=this.instances.get(r);return t&&e(t,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Qc(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qc(a){return a===yn?void 0:a}function Xc(a){return a.instantiationMode==="EAGER"}/**
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
 */class Zc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Ie||(Ie={}));const ep={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},ap=Ie.INFO,np={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},ip=(a,e,...n)=>{if(e<a.logLevel)return;const i=new Date().toISOString(),r=np[e];if(r)console[r](`[${i}]  ${a.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eu{constructor(e){this.name=e,this._logLevel=ap,this._logHandler=ip,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ep[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const rp=(a,e)=>e.some(n=>a instanceof n);let rd,od;function op(){return rd||(rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tp(){return od||(od=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const au=new WeakMap,Ko=new WeakMap,nu=new WeakMap,yo=new WeakMap,Pt=new WeakMap;function sp(a){const e=new Promise((n,i)=>{const r=()=>{a.removeEventListener("success",o),a.removeEventListener("error",t)},o=()=>{n(nn(a.result)),r()},t=()=>{i(a.error),r()};a.addEventListener("success",o),a.addEventListener("error",t)});return e.then(n=>{n instanceof IDBCursor&&au.set(n,a)}).catch(()=>{}),Pt.set(e,a),e}function dp(a){if(Ko.has(a))return;const e=new Promise((n,i)=>{const r=()=>{a.removeEventListener("complete",o),a.removeEventListener("error",t),a.removeEventListener("abort",t)},o=()=>{n(),r()},t=()=>{i(a.error||new DOMException("AbortError","AbortError")),r()};a.addEventListener("complete",o),a.addEventListener("error",t),a.addEventListener("abort",t)});Ko.set(a,e)}let Vo={get(a,e,n){if(a instanceof IDBTransaction){if(e==="done")return Ko.get(a);if(e==="objectStoreNames")return a.objectStoreNames||nu.get(a);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(a[e])},set(a,e,n){return a[e]=n,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function mp(a){Vo=a(Vo)}function up(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=a.call(fo(this),e,...n);return nu.set(i,e.sort?e.sort():[e]),nn(i)}:tp().includes(a)?function(...e){return a.apply(fo(this),e),nn(au.get(this))}:function(...e){return nn(a.apply(fo(this),e))}}function lp(a){return typeof a=="function"?up(a):(a instanceof IDBTransaction&&dp(a),rp(a,op())?new Proxy(a,Vo):a)}function nn(a){if(a instanceof IDBRequest)return sp(a);if(yo.has(a))return yo.get(a);const e=lp(a);return e!==a&&(yo.set(a,e),Pt.set(e,a)),e}const fo=a=>Pt.get(a);function _p(a,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const t=indexedDB.open(a,e),s=nn(t);return i&&t.addEventListener("upgradeneeded",d=>{i(nn(t.result),d.oldVersion,d.newVersion,nn(t.transaction))}),n&&t.addEventListener("blocked",()=>n()),s.then(d=>{o&&d.addEventListener("close",()=>o()),r&&d.addEventListener("versionchange",()=>r())}).catch(()=>{}),s}const kp=["get","getKey","getAll","getAllKeys","count"],cp=["put","add","delete","clear"],jo=new Map;function td(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(jo.get(e))return jo.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=cp.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||kp.includes(n)))return;const o=async function(t,...s){const d=this.transaction(t,r?"readwrite":"readonly");let m=d.store;return i&&(m=m.index(s.shift())),(await Promise.all([m[n](...s),r&&d.done]))[0]};return jo.set(e,o),o}mp(a=>({...a,get:(e,n,i)=>td(e,n)||a.get(e,n,i),has:(e,n)=>!!td(e,n)||a.has(e,n)}));/**
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
 */class pp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hp(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function hp(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yo="@firebase/app",sd="0.7.32";/**
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
 */const En=new eu("@firebase/app"),gp="@firebase/app-compat",yp="@firebase/analytics-compat",fp="@firebase/analytics",jp="@firebase/app-check-compat",bp="@firebase/app-check",vp="@firebase/auth",wp="@firebase/auth-compat",xp="@firebase/database",Cp="@firebase/database-compat",Ep="@firebase/functions",Ip="@firebase/functions-compat",Tp="@firebase/installations",Sp="@firebase/installations-compat",Np="@firebase/messaging",Rp="@firebase/messaging-compat",Ap="@firebase/performance",zp="@firebase/performance-compat",Dp="@firebase/remote-config",Pp="@firebase/remote-config-compat",Op="@firebase/storage",Mp="@firebase/storage-compat",Lp="@firebase/firestore",Fp="@firebase/firestore-compat",Bp="firebase",qp="9.9.4";/**
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
 */const iu="[DEFAULT]",$p={[Yo]:"fire-core",[gp]:"fire-core-compat",[fp]:"fire-analytics",[yp]:"fire-analytics-compat",[bp]:"fire-app-check",[jp]:"fire-app-check-compat",[vp]:"fire-auth",[wp]:"fire-auth-compat",[xp]:"fire-rtdb",[Cp]:"fire-rtdb-compat",[Ep]:"fire-fn",[Ip]:"fire-fn-compat",[Tp]:"fire-iid",[Sp]:"fire-iid-compat",[Np]:"fire-fcm",[Rp]:"fire-fcm-compat",[Ap]:"fire-perf",[zp]:"fire-perf-compat",[Dp]:"fire-rc",[Pp]:"fire-rc-compat",[Op]:"fire-gcs",[Mp]:"fire-gcs-compat",[Lp]:"fire-fst",[Fp]:"fire-fst-compat","fire-js":"fire-js",[Bp]:"fire-js-all"};/**
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
 */const br=new Map,Go=new Map;function Wp(a,e){try{a.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,n)}}function vr(a){const e=a.name;if(Go.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Go.set(e,a);for(const n of br.values())Wp(n,a);return!0}function Hp(a,e){const n=a.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),a.container.getProvider(e)}/**
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
 */const Up={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},In=new Qm("app","Firebase",Up);/**
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
 */class Kp{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
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
 */const Vp=qp;function Yp(a,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:iu,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw In.create("bad-app-name",{appName:String(i)});const r=br.get(i);if(r){if(Uo(a,r.options)&&Uo(n,r.config))return r;throw In.create("duplicate-app",{appName:i})}const o=new Zc(i);for(const s of Go.values())o.addComponent(s);const t=new Kp(a,n,o);return br.set(i,t),t}function Gp(a=iu){const e=br.get(a);if(!e)throw In.create("no-app",{appName:a});return e}function Un(a,e,n){var i;let r=(i=$p[a])!==null&&i!==void 0?i:a;n&&(r+=`-${n}`);const o=r.match(/\s|\//),t=e.match(/\s|\//);if(o||t){const s=[`Unable to register library "${r}" with version "${e}":`];o&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&t&&s.push("and"),t&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(s.join(" "));return}vr(new Si(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Jp="firebase-heartbeat-database",Qp=1,Ni="firebase-heartbeat-store";let bo=null;function ru(){return bo||(bo=_p(Jp,Qp,{upgrade:(a,e)=>{switch(e){case 0:a.createObjectStore(Ni)}}}).catch(a=>{throw In.create("idb-open",{originalErrorMessage:a.message})})),bo}async function Xp(a){var e;try{return(await ru()).transaction(Ni).objectStore(Ni).get(ou(a))}catch(n){if(n instanceof Bi)En.warn(n.message);else{const i=In.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});En.warn(i.message)}}}async function dd(a,e){var n;try{const r=(await ru()).transaction(Ni,"readwrite");return await r.objectStore(Ni).put(e,ou(a)),r.done}catch(i){if(i instanceof Bi)En.warn(i.message);else{const r=In.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});En.warn(r.message)}}}function ou(a){return`${a.name}!${a.options.appId}`}/**
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
 */const Zp=1024,eh=30*24*60*60*1e3;class ah{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ih(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=md();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=eh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=md(),{heartbeatsToSend:n,unsentEntries:i}=nh(this._heartbeatsCache.heartbeats),r=Vm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function md(){return new Date().toISOString().substring(0,10)}function nh(a,e=Zp){const n=[];let i=a.slice();for(const r of a){const o=n.find(t=>t.agent===r.agent);if(o){if(o.dates.push(r.date),ud(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ud(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ih{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bc()?qc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Xp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ud(a){return Vm(JSON.stringify({version:2,heartbeats:a})).length}/**
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
 */function rh(a){vr(new Si("platform-logger",e=>new pp(e),"PRIVATE")),vr(new Si("heartbeat",e=>new ah(e),"PRIVATE")),Un(Yo,sd,a),Un(Yo,sd,"esm2017"),Un("fire-js","")}rh("");var oh="firebase",th="9.9.4";/**
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
 */Un(oh,th,"app");const ld="@firebase/database",_d="0.13.6";/**
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
 */let tu="";function sh(a){tu=a}/**
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
 */class dh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ti(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class mh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ua(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const su=function(a){try{if(typeof window<"u"&&typeof window[a]<"u"){const e=window[a];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dh(e)}}catch{}return new mh},wn=su("localStorage"),Jo=su("sessionStorage");/**
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
 */const Kn=new eu("@firebase/database"),uh=function(){let a=1;return function(){return a++}}(),du=function(a){const e=Gc(a),n=new Yc;n.update(e);const i=n.digest();return zt.encodeByteArray(i)},qi=function(...a){let e="";for(let n=0;n<a.length;n++){const i=a[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=qi.apply(null,i):typeof i=="object"?e+=qe(i):e+=i,e+=" "}return e};let Cn=null,kd=!0;const lh=function(a,e){D(!e||a===!0||a===!1,"Can't turn on custom loggers persistently."),a===!0?(Kn.logLevel=Ie.VERBOSE,Cn=Kn.log.bind(Kn),e&&Jo.set("logging_enabled",!0)):typeof a=="function"?Cn=a:(Cn=null,Jo.remove("logging_enabled"))},Ge=function(...a){if(kd===!0&&(kd=!1,Cn===null&&Jo.get("logging_enabled")===!0&&lh(!0)),Cn){const e=qi.apply(null,a);Cn(e)}},$i=function(a){return function(...e){Ge(a,...e)}},Qo=function(...a){const e="FIREBASE INTERNAL ERROR: "+qi(...a);Kn.error(e)},Tn=function(...a){const e=`FIREBASE FATAL ERROR: ${qi(...a)}`;throw Kn.error(e),new Error(e)},ua=function(...a){const e="FIREBASE WARNING: "+qi(...a);Kn.warn(e)},_h=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ua("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mu=function(a){return typeof a=="number"&&(a!==a||a===Number.POSITIVE_INFINITY||a===Number.NEGATIVE_INFINITY)},kh=function(a){if(document.readyState==="complete")a();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,a())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Qn="[MIN_NAME]",Sn="[MAX_NAME]",ii=function(a,e){if(a===e)return 0;if(a===Qn||e===Sn)return-1;if(e===Qn||a===Sn)return 1;{const n=cd(a),i=cd(e);return n!==null?i!==null?n-i===0?a.length-e.length:n-i:-1:i!==null?1:a<e?-1:1}},ch=function(a,e){return a===e?0:a<e?-1:1},ki=function(a,e){if(e&&a in e)return e[a];throw new Error("Missing required key ("+a+") in object: "+qe(e))},Ot=function(a){if(typeof a!="object"||a===null)return qe(a);const e=[];for(const i in a)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=qe(e[i]),n+=":",n+=Ot(a[e[i]]);return n+="}",n},uu=function(a,e){const n=a.length;if(n<=e)return[a];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(a.substring(r,n)):i.push(a.substring(r,r+e));return i};function ta(a,e){for(const n in a)a.hasOwnProperty(n)&&e(n,a[n])}const lu=function(a){D(!mu(a),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,o,t,s,d;a===0?(o=0,t=0,r=1/a===-1/0?1:0):(r=a<0,a=Math.abs(a),a>=Math.pow(2,1-i)?(s=Math.min(Math.floor(Math.log(a)/Math.LN2),i),o=s+i,t=Math.round(a*Math.pow(2,n-s)-Math.pow(2,n))):(o=0,t=Math.round(a/Math.pow(2,1-i-n))));const m=[];for(d=n;d;d-=1)m.push(t%2?1:0),t=Math.floor(t/2);for(d=e;d;d-=1)m.push(o%2?1:0),o=Math.floor(o/2);m.push(r?1:0),m.reverse();const k=m.join("");let u="";for(d=0;d<64;d+=8){let c=parseInt(k.substr(d,8),2).toString(16);c.length===1&&(c="0"+c),u=u+c}return u.toLowerCase()},ph=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function gh(a,e){let n="Unknown Error";a==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":a==="permission_denied"?n="Client doesn't have permission to access the desired data.":a==="unavailable"&&(n="The service is unavailable");const i=new Error(a+" at "+e._path.toString()+": "+n);return i.code=a.toUpperCase(),i}const yh=new RegExp("^-?(0*)\\d{1,10}$"),fh=-2147483648,jh=2147483647,cd=function(a){if(yh.test(a)){const e=Number(a);if(e>=fh&&e<=jh)return e}return null},Wi=function(a){try{a()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ua("Exception was thrown by user callback.",n),e},Math.floor(0))}},bh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fi=function(a,e){const n=setTimeout(a,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class vh{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ua(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class wh{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ua(e)}}class Xo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xo.OWNER="owner";/**
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
 */const Mt="5",_u="v",ku="s",cu="r",pu="f",hu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gu="ls",yu="p",Zo="ac",fu="websocket",ju="long_polling";/**
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
 */class xh{constructor(e,n,i,r,o=!1,t="",s=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=o,this.persistenceKey=t,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ch(a){return a.host!==a.internalHost||a.isCustomHost()||a.includeNamespaceInQueryParams}function bu(a,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let i;if(e===fu)i=(a.secure?"wss://":"ws://")+a.internalHost+"/.ws?";else if(e===ju)i=(a.secure?"https://":"http://")+a.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ch(a)&&(n.ns=a.namespace);const r=[];return ta(n,(o,t)=>{r.push(o+"="+t)}),i+r.join("&")}/**
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
 */class Eh{constructor(){this.counters_={}}incrementCounter(e,n=1){Ua(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Oc(this.counters_)}}/**
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
 */const vo={},wo={};function Lt(a){const e=a.toString();return vo[e]||(vo[e]=new Eh),vo[e]}function Ih(a,e){const n=a.toString();return wo[n]||(wo[n]=e()),wo[n]}/**
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
 */class Th{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Wi(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const pd="start",Sh="close",Nh="pLPCommand",Rh="pRTLPCB",vu="id",wu="pw",xu="ser",Ah="cb",zh="seg",Dh="ts",Ph="d",Oh="dframe",Cu=1870,Eu=30,Mh=Cu-Eu,Lh=25e3,Fh=3e4;class Ln{constructor(e,n,i,r,o,t,s){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=o,this.transportSessionId=t,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$i(e),this.stats_=Lt(n),this.urlFn=d=>(this.appCheckToken&&(d[Zo]=this.appCheckToken),bu(n,ju,d))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Th(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Fh)),kh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ft((...o)=>{const[t,s,d,m,k]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===pd)this.id=s,this.password=d;else if(t===Sh)s?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(s,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+t)},(...o)=>{const[t,s]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(t,s)},()=>{this.onClosed_()},this.urlFn);const i={};i[pd]="t",i[xu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Ah]=this.scriptTagHolder.uniqueCallbackIdentifier),i[_u]=Mt,this.transportSessionId&&(i[ku]=this.transportSessionId),this.lastSessionId&&(i[gu]=this.lastSessionId),this.applicationId&&(i[yu]=this.applicationId),this.appCheckToken&&(i[Zo]=this.appCheckToken),typeof location<"u"&&location.hostname&&hu.test(location.hostname)&&(i[cu]=pu);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ln.forceAllow_=!0}static forceDisallow(){Ln.forceDisallow_=!0}static isAvailable(){return Ln.forceAllow_?!0:!Ln.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ph()&&!hh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Km(n),r=uu(i,Mh);for(let o=0;o<r.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Oh]="t",i[vu]=e,i[wu]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ft{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=uh(),window[Nh+this.uniqueCallbackIdentifier]=e,window[Rh+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ft.createIFrame_();let o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const s=document.domain;o='<script>document.domain="'+s+'";<\/script>'}const t="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(t),this.myIFrame.doc.close()}catch(s){Ge("frame writing exception"),s.stack&&Ge(s.stack),Ge(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vu]=this.myID,e[wu]=this.myPW,e[xu]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Eu+i.length<=Cu;){const t=this.pendingSegs.shift();i=i+"&"+zh+r+"="+t.seg+"&"+Dh+r+"="+t.ts+"&"+Ph+r+"="+t.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(Lh)),o=()=>{clearTimeout(r),i()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Bh=16384,qh=45e3;let wr=null;typeof MozWebSocket<"u"?wr=MozWebSocket:typeof WebSocket<"u"&&(wr=WebSocket);class ba{constructor(e,n,i,r,o,t,s){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$i(this.connId),this.stats_=Lt(n),this.connURL=ba.connectionURL_(n,t,s,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,o){const t={};return t[_u]=Mt,typeof location<"u"&&location.hostname&&hu.test(location.hostname)&&(t[cu]=pu),n&&(t[ku]=n),i&&(t[gu]=i),r&&(t[Zo]=r),o&&(t[yu]=o),bu(e,fu,t)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wn.set("previous_websocket_failure",!0);try{let i;Jm(),this.mySock=new wr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){ba.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&wr!==null&&!ba.forceDisallow_}static previouslyFailed(){return wn.isInMemoryStorage||wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Ti(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=uu(n,Bh);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qh))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ba.responsesRequiredToBeHealthy=2;ba.healthyTimeout=3e4;/**
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
 */class Ri{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ln,ba]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ba&&ba.isAvailable();let i=n&&!ba.previouslyFailed();if(e.webSocketOnly&&(n||ua("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ba];else{const r=this.transports_=[];for(const o of Ri.ALL_TRANSPORTS)o&&o.isAvailable()&&r.push(o);Ri.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ri.globalTransportInitialized_=!1;/**
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
 */const $h=6e4,Wh=5e3,Hh=10*1024,Uh=100*1024,xo="t",hd="d",Kh="s",gd="r",Vh="e",yd="o",fd="a",jd="n",bd="p",Yh="h";class Gh{constructor(e,n,i,r,o,t,s,d,m,k){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=o,this.onMessage_=t,this.onReady_=s,this.onDisconnect_=d,this.onKill_=m,this.lastSessionId=k,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$i("c:"+this.id+":"),this.transportManager_=new Ri(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=fi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Uh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Hh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xo in e){const n=e[xo];n===fd?this.upgradeIfSecondaryHealthy_():n===gd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ki("t",e),i=ki("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ki("t",e),i=ki("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ki(xo,e);if(hd in e){const i=e[hd];if(n===Yh)this.onHandshake_(i);else if(n===jd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Kh?this.onConnectionShutdown_(i):n===gd?this.onReset_(i):n===Vh?Qo("Server Error: "+i):n===yd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mt!==i&&ua("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),fi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($h))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Wh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Iu{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Tu{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let o=0;o<r.length;o++)if(r[o].callback===n&&(!i||i===r[o].context)){r.splice(o,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class xr extends Tu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xr}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vd=32,wd=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new Ee("")}function ce(a){return a.pieceNum_>=a.pieces_.length?null:a.pieces_[a.pieceNum_]}function mn(a){return a.pieces_.length-a.pieceNum_}function Te(a){let e=a.pieceNum_;return e<a.pieces_.length&&e++,new Ee(a.pieces_,e)}function Su(a){return a.pieceNum_<a.pieces_.length?a.pieces_[a.pieces_.length-1]:null}function Jh(a){let e="";for(let n=a.pieceNum_;n<a.pieces_.length;n++)a.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(a.pieces_[n])));return e||"/"}function Nu(a,e=0){return a.pieces_.slice(a.pieceNum_+e)}function Ru(a){if(a.pieceNum_>=a.pieces_.length)return null;const e=[];for(let n=a.pieceNum_;n<a.pieces_.length-1;n++)e.push(a.pieces_[n]);return new Ee(e,0)}function $e(a,e){const n=[];for(let i=a.pieceNum_;i<a.pieces_.length;i++)n.push(a.pieces_[i]);if(e instanceof Ee)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Ee(n,0)}function ue(a){return a.pieceNum_>=a.pieces_.length}function aa(a,e){const n=ce(a),i=ce(e);if(n===null)return e;if(n===i)return aa(Te(a),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+a+")")}function Au(a,e){if(mn(a)!==mn(e))return!1;for(let n=a.pieceNum_,i=e.pieceNum_;n<=a.pieces_.length;n++,i++)if(a.pieces_[n]!==e.pieces_[i])return!1;return!0}function wa(a,e){let n=a.pieceNum_,i=e.pieceNum_;if(mn(a)>mn(e))return!1;for(;n<a.pieces_.length;){if(a.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Qh{constructor(e,n){this.errorPrefix_=n,this.parts_=Nu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Yr(this.parts_[i]);zu(this)}}function Xh(a,e){a.parts_.length>0&&(a.byteLength_+=1),a.parts_.push(e),a.byteLength_+=Yr(e),zu(a)}function Zh(a){const e=a.parts_.pop();a.byteLength_-=Yr(e),a.parts_.length>0&&(a.byteLength_-=1)}function zu(a){if(a.byteLength_>wd)throw new Error(a.errorPrefix_+"has a key path longer than "+wd+" bytes ("+a.byteLength_+").");if(a.parts_.length>vd)throw new Error(a.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vd+") or object contains a cycle "+fn(a))}function fn(a){return a.parts_.length===0?"":"in property '"+a.parts_.join(".")+"'"}/**
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
 */class Bt extends Tu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Bt}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ci=1e3,eg=60*5*1e3,xd=30*1e3,ag=1.3,ng=3e4,ig="server_kill",Cd=3;class $a extends Iu{constructor(e,n,i,r,o,t,s,d){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=o,this.authTokenProvider_=t,this.appCheckTokenProvider_=s,this.authOverride_=d,this.id=$a.nextPersistentConnectionId_++,this.log_=$i("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ci,this.maxReconnectDelay_=eg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d&&!Jm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bt.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,o={r,a:e,b:n};this.log_(qe(o)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Dt,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:t=>{const s=t.d;t.s==="ok"?n.resolve(s):n.reject(s)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(e,n,i,r){this.initConnection_();const o=e._queryIdentifier,t=e._path.toString();this.log_("Listen called for "+t+" "+o),this.listens.has(t)||this.listens.set(t,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(t).has(o),"listen() called twice for same path/queryId.");const s={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(t).set(o,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const o={p:i},t="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(t,o,s=>{const d=s.d,m=s.s;$a.warnOnListenWarnings_(d,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",s),m!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(m,d))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ua(e,"w")){const i=Jn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();ua(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Kc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Uc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const o=r.s,t=r.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,t))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const o={p:e},t="n";r&&(o.q=i,o.t=r),this.sendRequest(t,o)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const o={p:n,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,t=>{r&&setTimeout(()=>{r(t.s,t.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,o){this.initConnection_();const t={p:n,d:i};o!==void 0&&(t.h=o),this.outstandingPuts_.push({action:e,request:t,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+qe(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qo("Unrecognized action received from server: "+qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ng&&(this.reconnectDelay_=ci),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ag)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+$a.nextConnectionId_++,o=this.lastSessionId;let t=!1,s=null;const d=function(){s?s.close():(t=!0,i())},m=function(u){D(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(u)};this.realtime_={close:d,sendRequest:m};const k=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,c]=await Promise.all([this.authTokenProvider_.getToken(k),this.appCheckTokenProvider_.getToken(k)]);t?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=c&&c.token,s=new Gh(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,b=>{ua(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(ig)},o))}catch(u){this.log_("Failed to get token: "+u),t||(this.repoInfo_.nodeAdmin&&ua(u),d())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nd(this.interruptReasons_)&&(this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(o=>Ot(o)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Ee(e).toString();let r;if(this.listens.has(i)){const o=this.listens.get(i);r=o.get(n),o.delete(n),o.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cd&&(this.reconnectDelay_=xd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tu.replace(/\./g,"-")]=1,Gm()?e["framework.cordova"]=1:Fc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xr.getInstance().currentlyOnline();return nd(this.interruptReasons_)&&e}}$a.nextPersistentConnectionId_=0;$a.nextConnectionId_=0;/**
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
 */class me{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new me(e,n)}}/**
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
 */class Jr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new me(Qn,e),r=new me(Qn,n);return this.compare(i,r)!==0}minPost(){return me.MIN}}/**
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
 */let ir;class Du extends Jr{static get __EMPTY_NODE(){return ir}static set __EMPTY_NODE(e){ir=e}compare(e,n){return ii(e.name,n.name)}isDefinedOn(e){throw ni("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return me.MIN}maxPost(){return new me(Sn,ir)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new me(e,ir)}toString(){return".key"}}const Vn=new Du;/**
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
 */class rr{constructor(e,n,i,r,o=null){this.isReverse_=r,this.resultGenerator_=o,this.nodeStack_=[];let t=1;for(;!e.isEmpty();)if(e=e,t=n?i(e.key,n):1,r&&(t*=-1),t<0)this.isReverse_?e=e.left:e=e.right;else if(t===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class He{constructor(e,n,i,r,o){this.key=e,this.value=n,this.color=i!=null?i:He.RED,this.left=r!=null?r:oa.EMPTY_NODE,this.right=o!=null?o:oa.EMPTY_NODE}copy(e,n,i,r,o){return new He(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,o!=null?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const o=i(e,r.key);return o<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):o===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return oa.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return oa.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}He.RED=!0;He.BLACK=!1;class rg{copy(e,n,i,r,o){return this}insert(e,n,i){return new He(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class oa{constructor(e,n=oa.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new oa(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(e){return new oa(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,He.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new rr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new rr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new rr(this.root_,null,this.comparator_,!0,e)}}oa.EMPTY_NODE=new rg;/**
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
 */function og(a,e){return ii(a.name,e.name)}function qt(a,e){return ii(a,e)}/**
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
 */let et;function tg(a){et=a}const Pu=function(a){return typeof a=="number"?"number:"+lu(a):"string:"+a},Ou=function(a){if(a.isLeafNode()){const e=a.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ua(e,".sv"),"Priority must be a string or number.")}else D(a===et||a.isEmpty(),"priority of unexpected type.");D(a===et||a.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ed;class We{constructor(e,n=We.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ou(this.priorityNode_)}static set __childrenNodeConstructor(e){Ed=e}static get __childrenNodeConstructor(){return Ed}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new We(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:ce(e)===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ce(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(D(i!==".priority"||mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=lu(this.value_):e+=this.value_,this.lazyHash_=du(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===We.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof We.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=We.VALUE_TYPE_ORDER.indexOf(n),o=We.VALUE_TYPE_ORDER.indexOf(i);return D(r>=0,"Unknown leaf type: "+n),D(o>=0,"Unknown leaf type: "+i),r===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}We.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Mu,Lu;function sg(a){Mu=a}function dg(a){Lu=a}class mg extends Jr{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),o=i.compareTo(r);return o===0?ii(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return me.MIN}maxPost(){return new me(Sn,new We("[PRIORITY-POST]",Lu))}makePost(e,n){const i=Mu(e);return new me(n,new We("[PRIORITY-POST]",i))}toString(){return".priority"}}const Me=new mg;/**
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
 */const ug=Math.log(2);class lg{constructor(e){const n=o=>parseInt(Math.log(o)/ug,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Cr=function(a,e,n,i){a.sort(e);const r=function(d,m){const k=m-d;let u,c;if(k===0)return null;if(k===1)return u=a[d],c=n?n(u):u,new He(c,u.node,He.BLACK,null,null);{const b=parseInt(k/2,10)+d,w=r(d,b),L=r(b+1,m);return u=a[b],c=n?n(u):u,new He(c,u.node,He.BLACK,w,L)}},o=function(d){let m=null,k=null,u=a.length;const c=function(w,L){const M=u-w,V=u;u-=w;const F=r(M+1,V),K=a[M],ne=n?n(K):K;b(new He(ne,K.node,L,null,F))},b=function(w){m?(m.left=w,m=w):(k=w,m=w)};for(let w=0;w<d.count;++w){const L=d.nextBitIsOne(),M=Math.pow(2,d.count-(w+1));L?c(M,He.BLACK):(c(M,He.BLACK),c(M,He.RED))}return k},t=new lg(a.length),s=o(t);return new oa(i||e,s)};/**
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
 */let Co;const On={};class Ba{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(On&&Me,"ChildrenNode.ts has not been loaded"),Co=Co||new Ba({".priority":On},{".priority":Me}),Co}get(e){const n=Jn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof oa?n:null}hasIndex(e){return Ua(this.indexSet_,e.toString())}addIndex(e,n){D(e!==Vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const o=n.getIterator(me.Wrap);let t=o.getNext();for(;t;)r=r||e.isDefinedOn(t.node),i.push(t),t=o.getNext();let s;r?s=Cr(i,e.getCompare()):s=On;const d=e.toString(),m=Object.assign({},this.indexSet_);m[d]=e;const k=Object.assign({},this.indexes_);return k[d]=s,new Ba(k,m)}addToIndexes(e,n){const i=jr(this.indexes_,(r,o)=>{const t=Jn(this.indexSet_,o);if(D(t,"Missing index implementation for "+o),r===On)if(t.isDefinedOn(e.node)){const s=[],d=n.getIterator(me.Wrap);let m=d.getNext();for(;m;)m.name!==e.name&&s.push(m),m=d.getNext();return s.push(e),Cr(s,t.getCompare())}else return On;else{const s=n.get(e.name);let d=r;return s&&(d=d.remove(new me(e.name,s))),d.insert(e,e.node)}});return new Ba(i,this.indexSet_)}removeFromIndexes(e,n){const i=jr(this.indexes_,r=>{if(r===On)return r;{const o=n.get(e.name);return o?r.remove(new me(e.name,o)):r}});return new Ba(i,this.indexSet_)}}/**
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
 */let pi;class Z{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ou(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pi||(pi=new Z(new oa(qt),null,Ba.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pi}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?pi:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new me(e,n);let r,o;n.isEmpty()?(r=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(i,this.children_));const t=r.isEmpty()?pi:this.priorityNode_;return new Z(r,t,o)}}updateChild(e,n){const i=ce(e);if(i===null)return n;{D(ce(e)!==".priority"||mn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Te(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,o=!0;if(this.forEachChild(Me,(t,s)=>{n[t]=s.val(e),i++,o&&Z.INTEGER_REGEXP_.test(t)?r=Math.max(r,Number(t)):o=!1}),!e&&o&&r<2*i){const t=[];for(const s in n)t[s]=n[s];return t}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pu(this.getPriority().val())+":"),this.forEachChild(Me,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":du(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const o=r.getPredecessorKey(new me(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new me(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new me(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,me.Wrap);let o=r.peek();for(;o!=null&&n.compare(o,e)<0;)r.getNext(),o=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,me.Wrap);let o=r.peek();for(;o!=null&&n.compare(o,e)>0;)r.getNext(),o=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hi?-1:0}withIndex(e){if(e===Vn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Me),r=n.getIterator(Me);let o=i.getNext(),t=r.getNext();for(;o&&t;){if(o.name!==t.name||!o.node.equals(t.node))return!1;o=i.getNext(),t=r.getNext()}return o===null&&t===null}else return!1;else return!1}}resolveIndex_(e){return e===Vn?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _g extends Z{constructor(){super(new oa(qt),Z.EMPTY_NODE,Ba.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const Hi=new _g;Object.defineProperties(me,{MIN:{value:new me(Qn,Z.EMPTY_NODE)},MAX:{value:new me(Sn,Hi)}});Du.__EMPTY_NODE=Z.EMPTY_NODE;We.__childrenNodeConstructor=Z;tg(Hi);dg(Hi);/**
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
 */const kg=!0;function Ke(a,e=null){if(a===null)return Z.EMPTY_NODE;if(typeof a=="object"&&".priority"in a&&(e=a[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof a=="object"&&".value"in a&&a[".value"]!==null&&(a=a[".value"]),typeof a!="object"||".sv"in a){const n=a;return new We(n,Ke(e))}if(!(a instanceof Array)&&kg){const n=[];let i=!1;if(ta(a,(t,s)=>{if(t.substring(0,1)!=="."){const d=Ke(s);d.isEmpty()||(i=i||!d.getPriority().isEmpty(),n.push(new me(t,d)))}}),n.length===0)return Z.EMPTY_NODE;const o=Cr(n,og,t=>t.name,qt);if(i){const t=Cr(n,Me.getCompare());return new Z(o,Ke(e),new Ba({".priority":t},{".priority":Me}))}else return new Z(o,Ke(e),Ba.Default)}else{let n=Z.EMPTY_NODE;return ta(a,(i,r)=>{if(Ua(a,i)&&i.substring(0,1)!=="."){const o=Ke(r);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(i,o))}}),n.updatePriority(Ke(e))}}sg(Ke);/**
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
 */class cg extends Jr{constructor(e){super(),this.indexPath_=e,D(!ue(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),o=i.compareTo(r);return o===0?ii(e.name,n.name):o}makePost(e,n){const i=Ke(e),r=Z.EMPTY_NODE.updateChild(this.indexPath_,i);return new me(n,r)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,Hi);return new me(Sn,e)}toString(){return Nu(this.indexPath_,0).join("/")}}/**
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
 */class pg extends Jr{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ii(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return me.MIN}maxPost(){return me.MAX}makePost(e,n){const i=Ke(e);return new me(n,i)}toString(){return".value"}}const hg=new pg;/**
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
 */function Fu(a){return{type:"value",snapshotNode:a}}function Xn(a,e){return{type:"child_added",snapshotNode:e,childName:a}}function Ai(a,e){return{type:"child_removed",snapshotNode:e,childName:a}}function zi(a,e,n){return{type:"child_changed",snapshotNode:e,childName:a,oldSnap:n}}function gg(a,e){return{type:"child_moved",snapshotNode:e,childName:a}}/**
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
 */class $t{constructor(e){this.index_=e}updateChild(e,n,i,r,o,t){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=e.getImmediateChild(n);return s.getChild(r).equals(i.getChild(r))&&s.isEmpty()===i.isEmpty()||(t!=null&&(i.isEmpty()?e.hasChild(n)?t.trackChildChange(Ai(n,s)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?t.trackChildChange(Xn(n,i)):t.trackChildChange(zi(n,i,s))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Me,(r,o)=>{n.hasChild(r)||i.trackChildChange(Ai(r,o))}),n.isLeafNode()||n.forEachChild(Me,(r,o)=>{if(e.hasChild(r)){const t=e.getImmediateChild(r);t.equals(o)||i.trackChildChange(zi(r,o,t))}else i.trackChildChange(Xn(r,o))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Di{constructor(e){this.indexedFilter_=new $t(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Di.getStartPost_(e),this.endPost_=Di.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,o,t){return this.matches(new me(n,i))||(i=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,o,t)}updateFullNode(e,n,i){n.isLeafNode()&&(n=Z.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(Z.EMPTY_NODE);const o=this;return n.forEachChild(Me,(t,s)=>{o.matches(new me(t,s))||(r=r.updateImmediateChild(t,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class yg{constructor(e){this.rangedFilter_=new Di(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,o,t){return this.rangedFilter_.matches(new me(n,i))||(i=Z.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,o,t):this.fullLimitUpdateChild_(e,n,i,o,t)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=Z.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let t=0;for(;o.hasNext()&&t<this.limit_;){const s=o.getNext();let d;if(this.reverse_?d=this.index_.compare(this.rangedFilter_.getStartPost(),s)<=0:d=this.index_.compare(s,this.rangedFilter_.getEndPost())<=0,d)r=r.updateImmediateChild(s.name,s.node),t++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(Z.EMPTY_NODE);let o,t,s,d;if(this.reverse_){d=r.getReverseIterator(this.index_),o=this.rangedFilter_.getEndPost(),t=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();s=(c,b)=>u(b,c)}else d=r.getIterator(this.index_),o=this.rangedFilter_.getStartPost(),t=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let m=0,k=!1;for(;d.hasNext();){const u=d.getNext();!k&&s(o,u)<=0&&(k=!0),k&&m<this.limit_&&s(u,t)<=0?m++:r=r.updateImmediateChild(u.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,o){let t;if(this.reverse_){const u=this.index_.getCompare();t=(c,b)=>u(b,c)}else t=this.index_.getCompare();const s=e;D(s.numChildren()===this.limit_,"");const d=new me(n,i),m=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),k=this.rangedFilter_.matches(d);if(s.hasChild(n)){const u=s.getImmediateChild(n);let c=r.getChildAfterChild(this.index_,m,this.reverse_);for(;c!=null&&(c.name===n||s.hasChild(c.name));)c=r.getChildAfterChild(this.index_,c,this.reverse_);const b=c==null?1:t(c,d);if(k&&!i.isEmpty()&&b>=0)return o!=null&&o.trackChildChange(zi(n,i,u)),s.updateImmediateChild(n,i);{o!=null&&o.trackChildChange(Ai(n,u));const L=s.updateImmediateChild(n,Z.EMPTY_NODE);return c!=null&&this.rangedFilter_.matches(c)?(o!=null&&o.trackChildChange(Xn(c.name,c.node)),L.updateImmediateChild(c.name,c.node)):L}}else return i.isEmpty()?e:k&&t(m,d)>=0?(o!=null&&(o.trackChildChange(Ai(m.name,m.node)),o.trackChildChange(Xn(n,i))),s.updateImmediateChild(n,i).updateImmediateChild(m.name,Z.EMPTY_NODE)):e}}/**
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
 */class Wt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qn}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new Wt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fg(a){return a.loadsAllData()?new $t(a.getIndex()):a.hasLimit()?new yg(a):new Di(a)}function Id(a){const e={};if(a.isDefault())return e;let n;return a.index_===Me?n="$priority":a.index_===hg?n="$value":a.index_===Vn?n="$key":(D(a.index_ instanceof cg,"Unrecognized index type!"),n=a.index_.toString()),e.orderBy=qe(n),a.startSet_&&(e.startAt=qe(a.indexStartValue_),a.startNameSet_&&(e.startAt+=","+qe(a.indexStartName_))),a.endSet_&&(e.endAt=qe(a.indexEndValue_),a.endNameSet_&&(e.endAt+=","+qe(a.indexEndName_))),a.limitSet_&&(a.isViewFromLeft()?e.limitToFirst=a.limit_:e.limitToLast=a.limit_),e}function Td(a){const e={};if(a.startSet_&&(e.sp=a.indexStartValue_,a.startNameSet_&&(e.sn=a.indexStartName_)),a.endSet_&&(e.ep=a.indexEndValue_,a.endNameSet_&&(e.en=a.indexEndName_)),a.limitSet_){e.l=a.limit_;let n=a.viewFrom_;n===""&&(a.isViewFromLeft()?n="l":n="r"),e.vf=n}return a.index_!==Me&&(e.i=a.index_.toString()),e}/**
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
 */class Er extends Iu{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=$i("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const t=Er.getListenId_(e,i),s={};this.listens_[t]=s;const d=Id(e._queryParams);this.restRequest_(o+".json",d,(m,k)=>{let u=k;if(m===404&&(u=null,m=null),m===null&&this.onDataUpdate_(o,u,!1,i),Jn(this.listens_,t)===s){let c;m?m===401?c="permission_denied":c="rest_error:"+m:c="ok",r(c,null)}})}unlisten(e,n){const i=Er.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Id(e._queryParams),i=e._path.toString(),r=new Dt;return this.restRequest_(i+".json",n,(o,t)=>{let s=t;o===404&&(s=null,o=null),o===null?(this.onDataUpdate_(i,s,!1,null),r.resolve(s)):r.reject(new Error(s))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,o])=>{r&&r.accessToken&&(n.auth=r.accessToken),o&&o.token&&(n.ac=o.token);const t=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vc(n);this.log_("Sending REST request for "+t);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(i&&s.readyState===4){this.log_("REST Response for "+t+" received. status:",s.status,"response:",s.responseText);let d=null;if(s.status>=200&&s.status<300){try{d=Ti(s.responseText)}catch{ua("Failed to parse JSON response for "+t+": "+s.responseText)}i(null,d)}else s.status!==401&&s.status!==404&&ua("Got unsuccessful REST response for "+t+" Status: "+s.status),i(s.status);i=null}},s.open("GET",t,!0),s.send()})}}/**
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
 */class jg{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ir(){return{value:null,children:new Map}}function Bu(a,e,n){if(ue(e))a.value=n,a.children.clear();else if(a.value!==null)a.value=a.value.updateChild(e,n);else{const i=ce(e);a.children.has(i)||a.children.set(i,Ir());const r=a.children.get(i);e=Te(e),Bu(r,e,n)}}function at(a,e,n){a.value!==null?n(e,a.value):bg(a,(i,r)=>{const o=new Ee(e.toString()+"/"+i);at(r,o,n)})}function bg(a,e){a.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class vg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ta(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Sd=10*1e3,wg=30*1e3,xg=5*60*1e3;class Cg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new vg(e);const i=Sd+(wg-Sd)*Math.random();fi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ta(e,(r,o)=>{o>0&&Ua(this.statsToReport_,r)&&(n[r]=o,i=!0)}),i&&this.server_.reportStats(n),fi(this.reportStats_.bind(this),Math.floor(Math.random()*2*xg))}}/**
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
 */var xa;(function(a){a[a.OVERWRITE=0]="OVERWRITE",a[a.MERGE=1]="MERGE",a[a.ACK_USER_WRITE=2]="ACK_USER_WRITE",a[a.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xa||(xa={}));function qu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ht(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ut(a){return{fromUser:!1,fromServer:!0,queryId:a,tagged:!0}}/**
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
 */class Tr{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=xa.ACK_USER_WRITE,this.source=qu()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Tr(he(),n,this.revert)}}else return D(ce(this.path)===e,"operationForChild called for unrelated child."),new Tr(Te(this.path),this.affectedTree,this.revert)}}/**
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
 */class Pi{constructor(e,n){this.source=e,this.path=n,this.type=xa.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new Pi(this.source,he()):new Pi(this.source,Te(this.path))}}/**
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
 */class Nn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=xa.OVERWRITE}operationForChild(e){return ue(this.path)?new Nn(this.source,he(),this.snap.getImmediateChild(e)):new Nn(this.source,Te(this.path),this.snap)}}/**
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
 */class Oi{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=xa.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new Nn(this.source,he(),n.value):new Oi(this.source,he(),n)}else return D(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Oi(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class un{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Eg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ig(a,e,n,i){const r=[],o=[];return e.forEach(t=>{t.type==="child_changed"&&a.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(gg(t.childName,t.snapshotNode))}),hi(a,r,"child_removed",e,i,n),hi(a,r,"child_added",e,i,n),hi(a,r,"child_moved",o,i,n),hi(a,r,"child_changed",e,i,n),hi(a,r,"value",e,i,n),r}function hi(a,e,n,i,r,o){const t=i.filter(s=>s.type===n);t.sort((s,d)=>Sg(a,s,d)),t.forEach(s=>{const d=Tg(a,s,o);r.forEach(m=>{m.respondsTo(s.type)&&e.push(m.createEvent(d,a.query_))})})}function Tg(a,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,a.index_)),e}function Sg(a,e,n){if(e.childName==null||n.childName==null)throw ni("Should only compare child_ events.");const i=new me(e.childName,e.snapshotNode),r=new me(n.childName,n.snapshotNode);return a.index_.compare(i,r)}/**
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
 */function Qr(a,e){return{eventCache:a,serverCache:e}}function ji(a,e,n,i){return Qr(new un(e,n,i),a.serverCache)}function $u(a,e,n,i){return Qr(a.eventCache,new un(e,n,i))}function Sr(a){return a.eventCache.isFullyInitialized()?a.eventCache.getNode():null}function Rn(a){return a.serverCache.isFullyInitialized()?a.serverCache.getNode():null}/**
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
 */let Eo;const Ng=()=>(Eo||(Eo=new oa(ch)),Eo);class Se{constructor(e,n=Ng()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return ta(e,(i,r)=>{n=n.set(new Ee(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(ue(e))return null;{const i=ce(e),r=this.children.get(i);if(r!==null){const o=r.findRootMostMatchingPathAndValue(Te(e),n);return o!=null?{path:$e(new Ee(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=ce(e),i=this.children.get(n);return i!==null?i.subtree(Te(e)):new Se(null)}}set(e,n){if(ue(e))return new Se(n,this.children);{const i=ce(e),o=(this.children.get(i)||new Se(null)).set(Te(e),n),t=this.children.insert(i,o);return new Se(this.value,t)}}remove(e){if(ue(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=ce(e),i=this.children.get(n);if(i){const r=i.remove(Te(e));let o;return r.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,r),this.value===null&&o.isEmpty()?new Se(null):new Se(this.value,o)}else return this}}get(e){if(ue(e))return this.value;{const n=ce(e),i=this.children.get(n);return i?i.get(Te(e)):null}}setTree(e,n){if(ue(e))return n;{const i=ce(e),o=(this.children.get(i)||new Se(null)).setTree(Te(e),n);let t;return o.isEmpty()?t=this.children.remove(i):t=this.children.insert(i,o),new Se(this.value,t)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,o)=>{i[r]=o.fold_($e(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(ue(e))return null;{const o=ce(e),t=this.children.get(o);return t?t.findOnPath_(Te(e),$e(n,o),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,i){if(ue(e))return this;{this.value&&i(n,this.value);const r=ce(e),o=this.children.get(r);return o?o.foreachOnPath_(Te(e),$e(n,r),i):new Se(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_($e(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Ia{constructor(e){this.writeTree_=e}static empty(){return new Ia(new Se(null))}}function bi(a,e,n){if(ue(e))return new Ia(new Se(n));{const i=a.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let o=i.value;const t=aa(r,e);return o=o.updateChild(t,n),new Ia(a.writeTree_.set(r,o))}else{const r=new Se(n),o=a.writeTree_.setTree(e,r);return new Ia(o)}}}function Nd(a,e,n){let i=a;return ta(n,(r,o)=>{i=bi(i,$e(e,r),o)}),i}function Rd(a,e){if(ue(e))return Ia.empty();{const n=a.writeTree_.setTree(e,new Se(null));return new Ia(n)}}function nt(a,e){return zn(a,e)!=null}function zn(a,e){const n=a.writeTree_.findRootMostValueAndPath(e);return n!=null?a.writeTree_.get(n.path).getChild(aa(n.path,e)):null}function Ad(a){const e=[],n=a.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(i,r)=>{e.push(new me(i,r))}):a.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new me(i,r.value))}),e}function rn(a,e){if(ue(e))return a;{const n=zn(a,e);return n!=null?new Ia(new Se(n)):new Ia(a.writeTree_.subtree(e))}}function it(a){return a.writeTree_.isEmpty()}function Zn(a,e){return Wu(he(),a.writeTree_,e)}function Wu(a,e,n){if(e.value!=null)return n.updateChild(a,e.value);{let i=null;return e.children.inorderTraversal((r,o)=>{r===".priority"?(D(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):n=Wu($e(a,r),o,n)}),!n.getChild(a).isEmpty()&&i!==null&&(n=n.updateChild($e(a,".priority"),i)),n}}/**
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
 */function Xr(a,e){return Vu(e,a)}function Rg(a,e,n,i,r){D(i>a.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),a.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(a.visibleWrites=bi(a.visibleWrites,e,n)),a.lastWriteId=i}function Ag(a,e){for(let n=0;n<a.allWrites.length;n++){const i=a.allWrites[n];if(i.writeId===e)return i}return null}function zg(a,e){const n=a.allWrites.findIndex(s=>s.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const i=a.allWrites[n];a.allWrites.splice(n,1);let r=i.visible,o=!1,t=a.allWrites.length-1;for(;r&&t>=0;){const s=a.allWrites[t];s.visible&&(t>=n&&Dg(s,i.path)?r=!1:wa(i.path,s.path)&&(o=!0)),t--}if(r){if(o)return Pg(a),!0;if(i.snap)a.visibleWrites=Rd(a.visibleWrites,i.path);else{const s=i.children;ta(s,d=>{a.visibleWrites=Rd(a.visibleWrites,$e(i.path,d))})}return!0}else return!1}function Dg(a,e){if(a.snap)return wa(a.path,e);for(const n in a.children)if(a.children.hasOwnProperty(n)&&wa($e(a.path,n),e))return!0;return!1}function Pg(a){a.visibleWrites=Hu(a.allWrites,Og,he()),a.allWrites.length>0?a.lastWriteId=a.allWrites[a.allWrites.length-1].writeId:a.lastWriteId=-1}function Og(a){return a.visible}function Hu(a,e,n){let i=Ia.empty();for(let r=0;r<a.length;++r){const o=a[r];if(e(o)){const t=o.path;let s;if(o.snap)wa(n,t)?(s=aa(n,t),i=bi(i,s,o.snap)):wa(t,n)&&(s=aa(t,n),i=bi(i,he(),o.snap.getChild(s)));else if(o.children){if(wa(n,t))s=aa(n,t),i=Nd(i,s,o.children);else if(wa(t,n))if(s=aa(t,n),ue(s))i=Nd(i,he(),o.children);else{const d=Jn(o.children,ce(s));if(d){const m=d.getChild(Te(s));i=bi(i,he(),m)}}}else throw ni("WriteRecord should have .snap or .children")}}return i}function Uu(a,e,n,i,r){if(!i&&!r){const o=zn(a.visibleWrites,e);if(o!=null)return o;{const t=rn(a.visibleWrites,e);if(it(t))return n;if(n==null&&!nt(t,he()))return null;{const s=n||Z.EMPTY_NODE;return Zn(t,s)}}}else{const o=rn(a.visibleWrites,e);if(!r&&it(o))return n;if(!r&&n==null&&!nt(o,he()))return null;{const t=function(m){return(m.visible||r)&&(!i||!~i.indexOf(m.writeId))&&(wa(m.path,e)||wa(e,m.path))},s=Hu(a.allWrites,t,e),d=n||Z.EMPTY_NODE;return Zn(s,d)}}}function Mg(a,e,n){let i=Z.EMPTY_NODE;const r=zn(a.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Me,(o,t)=>{i=i.updateImmediateChild(o,t)}),i;if(n){const o=rn(a.visibleWrites,e);return n.forEachChild(Me,(t,s)=>{const d=Zn(rn(o,new Ee(t)),s);i=i.updateImmediateChild(t,d)}),Ad(o).forEach(t=>{i=i.updateImmediateChild(t.name,t.node)}),i}else{const o=rn(a.visibleWrites,e);return Ad(o).forEach(t=>{i=i.updateImmediateChild(t.name,t.node)}),i}}function Lg(a,e,n,i,r){D(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=$e(e,n);if(nt(a.visibleWrites,o))return null;{const t=rn(a.visibleWrites,o);return it(t)?r.getChild(n):Zn(t,r.getChild(n))}}function Fg(a,e,n,i){const r=$e(e,n),o=zn(a.visibleWrites,r);if(o!=null)return o;if(i.isCompleteForChild(n)){const t=rn(a.visibleWrites,r);return Zn(t,i.getNode().getImmediateChild(n))}else return null}function Bg(a,e){return zn(a.visibleWrites,e)}function qg(a,e,n,i,r,o,t){let s;const d=rn(a.visibleWrites,e),m=zn(d,he());if(m!=null)s=m;else if(n!=null)s=Zn(d,n);else return[];if(s=s.withIndex(t),!s.isEmpty()&&!s.isLeafNode()){const k=[],u=t.getCompare(),c=o?s.getReverseIteratorFrom(i,t):s.getIteratorFrom(i,t);let b=c.getNext();for(;b&&k.length<r;)u(b,i)!==0&&k.push(b),b=c.getNext();return k}else return[]}function $g(){return{visibleWrites:Ia.empty(),allWrites:[],lastWriteId:-1}}function Nr(a,e,n,i){return Uu(a.writeTree,a.treePath,e,n,i)}function Kt(a,e){return Mg(a.writeTree,a.treePath,e)}function zd(a,e,n,i){return Lg(a.writeTree,a.treePath,e,n,i)}function Rr(a,e){return Bg(a.writeTree,$e(a.treePath,e))}function Wg(a,e,n,i,r,o){return qg(a.writeTree,a.treePath,e,n,i,r,o)}function Vt(a,e,n){return Fg(a.writeTree,a.treePath,e,n)}function Ku(a,e){return Vu($e(a.treePath,e),a.writeTree)}function Vu(a,e){return{treePath:a,writeTree:e}}/**
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
 */class Hg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const o=r.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(i,zi(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(i,Ai(i,r.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(i,Xn(i,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(i,zi(i,e.snapshotNode,r.oldSnap));else throw ni("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ug{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Yu=new Ug;class Yt{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new un(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vt(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rn(this.viewCache_),o=Wg(this.writes_,r,n,1,i,e);return o.length===0?null:o[0]}}/**
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
 */function Kg(a){return{filter:a}}function Vg(a,e){D(e.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed")}function Yg(a,e,n,i,r){const o=new Hg;let t,s;if(n.type===xa.OVERWRITE){const m=n;m.source.fromUser?t=rt(a,e,m.path,m.snap,i,r,o):(D(m.source.fromServer,"Unknown source."),s=m.source.tagged||e.serverCache.isFiltered()&&!ue(m.path),t=Ar(a,e,m.path,m.snap,i,r,s,o))}else if(n.type===xa.MERGE){const m=n;m.source.fromUser?t=Jg(a,e,m.path,m.children,i,r,o):(D(m.source.fromServer,"Unknown source."),s=m.source.tagged||e.serverCache.isFiltered(),t=ot(a,e,m.path,m.children,i,r,s,o))}else if(n.type===xa.ACK_USER_WRITE){const m=n;m.revert?t=Zg(a,e,m.path,i,r,o):t=Qg(a,e,m.path,m.affectedTree,i,r,o)}else if(n.type===xa.LISTEN_COMPLETE)t=Xg(a,e,n.path,i,o);else throw ni("Unknown operation type: "+n.type);const d=o.getChanges();return Gg(e,t,d),{viewCache:t,changes:d}}function Gg(a,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=Sr(a);(n.length>0||!a.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(Fu(Sr(e)))}}function Gu(a,e,n,i,r,o){const t=e.eventCache;if(Rr(i,n)!=null)return e;{let s,d;if(ue(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Rn(e),k=m instanceof Z?m:Z.EMPTY_NODE,u=Kt(i,k);s=a.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const m=Nr(i,Rn(e));s=a.filter.updateFullNode(e.eventCache.getNode(),m,o)}else{const m=ce(n);if(m===".priority"){D(mn(n)===1,"Can't have a priority with additional path components");const k=t.getNode();d=e.serverCache.getNode();const u=zd(i,n,k,d);u!=null?s=a.filter.updatePriority(k,u):s=t.getNode()}else{const k=Te(n);let u;if(t.isCompleteForChild(m)){d=e.serverCache.getNode();const c=zd(i,n,t.getNode(),d);c!=null?u=t.getNode().getImmediateChild(m).updateChild(k,c):u=t.getNode().getImmediateChild(m)}else u=Vt(i,m,e.serverCache);u!=null?s=a.filter.updateChild(t.getNode(),m,u,k,r,o):s=t.getNode()}}return ji(e,s,t.isFullyInitialized()||ue(n),a.filter.filtersNodes())}}function Ar(a,e,n,i,r,o,t,s){const d=e.serverCache;let m;const k=t?a.filter:a.filter.getIndexedFilter();if(ue(n))m=k.updateFullNode(d.getNode(),i,null);else if(k.filtersNodes()&&!d.isFiltered()){const b=d.getNode().updateChild(n,i);m=k.updateFullNode(d.getNode(),b,null)}else{const b=ce(n);if(!d.isCompleteForPath(n)&&mn(n)>1)return e;const w=Te(n),M=d.getNode().getImmediateChild(b).updateChild(w,i);b===".priority"?m=k.updatePriority(d.getNode(),M):m=k.updateChild(d.getNode(),b,M,w,Yu,null)}const u=$u(e,m,d.isFullyInitialized()||ue(n),k.filtersNodes()),c=new Yt(r,u,o);return Gu(a,u,n,r,c,s)}function rt(a,e,n,i,r,o,t){const s=e.eventCache;let d,m;const k=new Yt(r,e,o);if(ue(n))m=a.filter.updateFullNode(e.eventCache.getNode(),i,t),d=ji(e,m,!0,a.filter.filtersNodes());else{const u=ce(n);if(u===".priority")m=a.filter.updatePriority(e.eventCache.getNode(),i),d=ji(e,m,s.isFullyInitialized(),s.isFiltered());else{const c=Te(n),b=s.getNode().getImmediateChild(u);let w;if(ue(c))w=i;else{const L=k.getCompleteChild(u);L!=null?Su(c)===".priority"&&L.getChild(Ru(c)).isEmpty()?w=L:w=L.updateChild(c,i):w=Z.EMPTY_NODE}if(b.equals(w))d=e;else{const L=a.filter.updateChild(s.getNode(),u,w,c,k,t);d=ji(e,L,s.isFullyInitialized(),a.filter.filtersNodes())}}}return d}function Dd(a,e){return a.eventCache.isCompleteForChild(e)}function Jg(a,e,n,i,r,o,t){let s=e;return i.foreach((d,m)=>{const k=$e(n,d);Dd(e,ce(k))&&(s=rt(a,s,k,m,r,o,t))}),i.foreach((d,m)=>{const k=$e(n,d);Dd(e,ce(k))||(s=rt(a,s,k,m,r,o,t))}),s}function Pd(a,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function ot(a,e,n,i,r,o,t,s){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,m;ue(n)?m=i:m=new Se(null).setTree(n,i);const k=e.serverCache.getNode();return m.children.inorderTraversal((u,c)=>{if(k.hasChild(u)){const b=e.serverCache.getNode().getImmediateChild(u),w=Pd(a,b,c);d=Ar(a,d,new Ee(u),w,r,o,t,s)}}),m.children.inorderTraversal((u,c)=>{const b=!e.serverCache.isCompleteForChild(u)&&c.value===null;if(!k.hasChild(u)&&!b){const w=e.serverCache.getNode().getImmediateChild(u),L=Pd(a,w,c);d=Ar(a,d,new Ee(u),L,r,o,t,s)}}),d}function Qg(a,e,n,i,r,o,t){if(Rr(r,n)!=null)return e;const s=e.serverCache.isFiltered(),d=e.serverCache;if(i.value!=null){if(ue(n)&&d.isFullyInitialized()||d.isCompleteForPath(n))return Ar(a,e,n,d.getNode().getChild(n),r,o,s,t);if(ue(n)){let m=new Se(null);return d.getNode().forEachChild(Vn,(k,u)=>{m=m.set(new Ee(k),u)}),ot(a,e,n,m,r,o,s,t)}else return e}else{let m=new Se(null);return i.foreach((k,u)=>{const c=$e(n,k);d.isCompleteForPath(c)&&(m=m.set(k,d.getNode().getChild(c)))}),ot(a,e,n,m,r,o,s,t)}}function Xg(a,e,n,i,r){const o=e.serverCache,t=$u(e,o.getNode(),o.isFullyInitialized()||ue(n),o.isFiltered());return Gu(a,t,n,i,Yu,r)}function Zg(a,e,n,i,r,o){let t;if(Rr(i,n)!=null)return e;{const s=new Yt(i,e,r),d=e.eventCache.getNode();let m;if(ue(n)||ce(n)===".priority"){let k;if(e.serverCache.isFullyInitialized())k=Nr(i,Rn(e));else{const u=e.serverCache.getNode();D(u instanceof Z,"serverChildren would be complete if leaf node"),k=Kt(i,u)}k=k,m=a.filter.updateFullNode(d,k,o)}else{const k=ce(n);let u=Vt(i,k,e.serverCache);u==null&&e.serverCache.isCompleteForChild(k)&&(u=d.getImmediateChild(k)),u!=null?m=a.filter.updateChild(d,k,u,Te(n),s,o):e.eventCache.getNode().hasChild(k)?m=a.filter.updateChild(d,k,Z.EMPTY_NODE,Te(n),s,o):m=d,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(t=Nr(i,Rn(e)),t.isLeafNode()&&(m=a.filter.updateFullNode(m,t,o)))}return t=e.serverCache.isFullyInitialized()||Rr(i,he())!=null,ji(e,m,t,a.filter.filtersNodes())}}/**
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
 */class ey{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new $t(i.getIndex()),o=fg(i);this.processor_=Kg(o);const t=n.serverCache,s=n.eventCache,d=r.updateFullNode(Z.EMPTY_NODE,t.getNode(),null),m=o.updateFullNode(Z.EMPTY_NODE,s.getNode(),null),k=new un(d,t.isFullyInitialized(),r.filtersNodes()),u=new un(m,s.isFullyInitialized(),o.filtersNodes());this.viewCache_=Qr(u,k),this.eventGenerator_=new Eg(this.query_)}get query(){return this.query_}}function ay(a){return a.viewCache_.serverCache.getNode()}function ny(a){return Sr(a.viewCache_)}function iy(a,e){const n=Rn(a.viewCache_);return n&&(a.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function Od(a){return a.eventRegistrations_.length===0}function ry(a,e){a.eventRegistrations_.push(e)}function Md(a,e,n){const i=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const r=a.query._path;a.eventRegistrations_.forEach(o=>{const t=o.createCancelEvent(n,r);t&&i.push(t)})}if(e){let r=[];for(let o=0;o<a.eventRegistrations_.length;++o){const t=a.eventRegistrations_[o];if(!t.matches(e))r.push(t);else if(e.hasAnyCallback()){r=r.concat(a.eventRegistrations_.slice(o+1));break}}a.eventRegistrations_=r}else a.eventRegistrations_=[];return i}function Ld(a,e,n,i){e.type===xa.MERGE&&e.source.queryId!==null&&(D(Rn(a.viewCache_),"We should always have a full cache before handling merges"),D(Sr(a.viewCache_),"Missing event cache, even though we have a server cache"));const r=a.viewCache_,o=Yg(a.processor_,r,e,n,i);return Vg(a.processor_,o.viewCache),D(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),a.viewCache_=o.viewCache,Ju(a,o.changes,o.viewCache.eventCache.getNode(),null)}function oy(a,e){const n=a.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(o,t)=>{i.push(Xn(o,t))}),n.isFullyInitialized()&&i.push(Fu(n.getNode())),Ju(a,i,n.getNode(),e)}function Ju(a,e,n,i){const r=i?[i]:a.eventRegistrations_;return Ig(a.eventGenerator_,e,n,r)}/**
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
 */let zr;class Qu{constructor(){this.views=new Map}}function ty(a){D(!zr,"__referenceConstructor has already been defined"),zr=a}function sy(){return D(zr,"Reference.ts has not been loaded"),zr}function dy(a){return a.views.size===0}function Gt(a,e,n,i){const r=e.source.queryId;if(r!==null){const o=a.views.get(r);return D(o!=null,"SyncTree gave us an op for an invalid query."),Ld(o,e,n,i)}else{let o=[];for(const t of a.views.values())o=o.concat(Ld(t,e,n,i));return o}}function Xu(a,e,n,i,r){const o=e._queryIdentifier,t=a.views.get(o);if(!t){let s=Nr(n,r?i:null),d=!1;s?d=!0:i instanceof Z?(s=Kt(n,i),d=!1):(s=Z.EMPTY_NODE,d=!1);const m=Qr(new un(s,d,!1),new un(i,r,!1));return new ey(e,m)}return t}function my(a,e,n,i,r,o){const t=Xu(a,e,i,r,o);return a.views.has(e._queryIdentifier)||a.views.set(e._queryIdentifier,t),ry(t,n),oy(t,n)}function uy(a,e,n,i){const r=e._queryIdentifier,o=[];let t=[];const s=ln(a);if(r==="default")for(const[d,m]of a.views.entries())t=t.concat(Md(m,n,i)),Od(m)&&(a.views.delete(d),m.query._queryParams.loadsAllData()||o.push(m.query));else{const d=a.views.get(r);d&&(t=t.concat(Md(d,n,i)),Od(d)&&(a.views.delete(r),d.query._queryParams.loadsAllData()||o.push(d.query)))}return s&&!ln(a)&&o.push(new(sy())(e._repo,e._path)),{removed:o,events:t}}function Zu(a){const e=[];for(const n of a.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function on(a,e){let n=null;for(const i of a.views.values())n=n||iy(i,e);return n}function el(a,e){if(e._queryParams.loadsAllData())return Zr(a);{const i=e._queryIdentifier;return a.views.get(i)}}function al(a,e){return el(a,e)!=null}function ln(a){return Zr(a)!=null}function Zr(a){for(const e of a.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Dr;function ly(a){D(!Dr,"__referenceConstructor has already been defined"),Dr=a}function _y(){return D(Dr,"Reference.ts has not been loaded"),Dr}let ky=1;class Fd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=$g(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cy(a,e,n,i,r){return Rg(a.pendingWriteTree_,e,n,i,r),r?Ki(a,new Nn(qu(),e,n)):[]}function Fn(a,e,n=!1){const i=Ag(a.pendingWriteTree_,e);if(zg(a.pendingWriteTree_,e)){let o=new Se(null);return i.snap!=null?o=o.set(he(),!0):ta(i.children,t=>{o=o.set(new Ee(t),!0)}),Ki(a,new Tr(i.path,o,n))}else return[]}function Ui(a,e,n){return Ki(a,new Nn(Ht(),e,n))}function py(a,e,n){const i=Se.fromObject(n);return Ki(a,new Oi(Ht(),e,i))}function hy(a,e){return Ki(a,new Pi(Ht(),e))}function gy(a,e,n){const i=Jt(a,n);if(i){const r=Qt(i),o=r.path,t=r.queryId,s=aa(o,e),d=new Pi(Ut(t),s);return Xt(a,o,d)}else return[]}function nl(a,e,n,i,r=!1){const o=e._path,t=a.syncPointTree_.get(o);let s=[];if(t&&(e._queryIdentifier==="default"||al(t,e))){const d=uy(t,e,n,i);dy(t)&&(a.syncPointTree_=a.syncPointTree_.remove(o));const m=d.removed;if(s=d.events,!r){const k=m.findIndex(c=>c._queryParams.loadsAllData())!==-1,u=a.syncPointTree_.findOnPath(o,(c,b)=>ln(b));if(k&&!u){const c=a.syncPointTree_.subtree(o);if(!c.isEmpty()){const b=by(c);for(let w=0;w<b.length;++w){const L=b[w],M=L.query,V=sl(a,L);a.listenProvider_.startListening(vi(M),Mi(a,M),V.hashFn,V.onComplete)}}}!u&&m.length>0&&!i&&(k?a.listenProvider_.stopListening(vi(e),null):m.forEach(c=>{const b=a.queryToTagMap.get(eo(c));a.listenProvider_.stopListening(vi(c),b)}))}vy(a,m)}return s}function il(a,e,n,i){const r=Jt(a,i);if(r!=null){const o=Qt(r),t=o.path,s=o.queryId,d=aa(t,e),m=new Nn(Ut(s),d,n);return Xt(a,t,m)}else return[]}function yy(a,e,n,i){const r=Jt(a,i);if(r){const o=Qt(r),t=o.path,s=o.queryId,d=aa(t,e),m=Se.fromObject(n),k=new Oi(Ut(s),d,m);return Xt(a,t,k)}else return[]}function fy(a,e,n,i=!1){const r=e._path;let o=null,t=!1;a.syncPointTree_.foreachOnPath(r,(c,b)=>{const w=aa(c,r);o=o||on(b,w),t=t||ln(b)});let s=a.syncPointTree_.get(r);s?(t=t||ln(s),o=o||on(s,he())):(s=new Qu,a.syncPointTree_=a.syncPointTree_.set(r,s));let d;o!=null?d=!0:(d=!1,o=Z.EMPTY_NODE,a.syncPointTree_.subtree(r).foreachChild((b,w)=>{const L=on(w,he());L&&(o=o.updateImmediateChild(b,L))}));const m=al(s,e);if(!m&&!e._queryParams.loadsAllData()){const c=eo(e);D(!a.queryToTagMap.has(c),"View does not exist, but we have a tag");const b=wy();a.queryToTagMap.set(c,b),a.tagToQueryMap.set(b,c)}const k=Xr(a.pendingWriteTree_,r);let u=my(s,e,n,k,o,d);if(!m&&!t&&!i){const c=el(s,e);u=u.concat(xy(a,e,c))}return u}function rl(a,e,n){const r=a.pendingWriteTree_,o=a.syncPointTree_.findOnPath(e,(t,s)=>{const d=aa(t,e),m=on(s,d);if(m)return m});return Uu(r,e,o,n,!0)}function jy(a,e){const n=e._path;let i=null;a.syncPointTree_.foreachOnPath(n,(m,k)=>{const u=aa(m,n);i=i||on(k,u)});let r=a.syncPointTree_.get(n);r?i=i||on(r,he()):(r=new Qu,a.syncPointTree_=a.syncPointTree_.set(n,r));const o=i!=null,t=o?new un(i,!0,!1):null,s=Xr(a.pendingWriteTree_,e._path),d=Xu(r,e,s,o?t.getNode():Z.EMPTY_NODE,o);return ny(d)}function Ki(a,e){return ol(e,a.syncPointTree_,null,Xr(a.pendingWriteTree_,he()))}function ol(a,e,n,i){if(ue(a.path))return tl(a,e,n,i);{const r=e.get(he());n==null&&r!=null&&(n=on(r,he()));let o=[];const t=ce(a.path),s=a.operationForChild(t),d=e.children.get(t);if(d&&s){const m=n?n.getImmediateChild(t):null,k=Ku(i,t);o=o.concat(ol(s,d,m,k))}return r&&(o=o.concat(Gt(r,a,i,n))),o}}function tl(a,e,n,i){const r=e.get(he());n==null&&r!=null&&(n=on(r,he()));let o=[];return e.children.inorderTraversal((t,s)=>{const d=n?n.getImmediateChild(t):null,m=Ku(i,t),k=a.operationForChild(t);k&&(o=o.concat(tl(k,s,d,m)))}),r&&(o=o.concat(Gt(r,a,i,n))),o}function sl(a,e){const n=e.query,i=Mi(a,n);return{hashFn:()=>(ay(e)||Z.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?gy(a,n._path,i):hy(a,n._path);{const o=gh(r,n);return nl(a,n,null,o)}}}}function Mi(a,e){const n=eo(e);return a.queryToTagMap.get(n)}function eo(a){return a._path.toString()+"$"+a._queryIdentifier}function Jt(a,e){return a.tagToQueryMap.get(e)}function Qt(a){const e=a.indexOf("$");return D(e!==-1&&e<a.length-1,"Bad queryKey."),{queryId:a.substr(e+1),path:new Ee(a.substr(0,e))}}function Xt(a,e,n){const i=a.syncPointTree_.get(e);D(i,"Missing sync point for query tag that we're tracking");const r=Xr(a.pendingWriteTree_,e);return Gt(i,n,r,null)}function by(a){return a.fold((e,n,i)=>{if(n&&ln(n))return[Zr(n)];{let r=[];return n&&(r=Zu(n)),ta(i,(o,t)=>{r=r.concat(t)}),r}})}function vi(a){return a._queryParams.loadsAllData()&&!a._queryParams.isDefault()?new(_y())(a._repo,a._path):a}function vy(a,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=eo(i),o=a.queryToTagMap.get(r);a.queryToTagMap.delete(r),a.tagToQueryMap.delete(o)}}}function wy(){return ky++}function xy(a,e,n){const i=e._path,r=Mi(a,e),o=sl(a,n),t=a.listenProvider_.startListening(vi(e),r,o.hashFn,o.onComplete),s=a.syncPointTree_.subtree(i);if(r)D(!ln(s.value),"If we're adding a query, it shouldn't be shadowed");else{const d=s.fold((m,k,u)=>{if(!ue(m)&&k&&ln(k))return[Zr(k).query];{let c=[];return k&&(c=c.concat(Zu(k).map(b=>b.query))),ta(u,(b,w)=>{c=c.concat(w)}),c}});for(let m=0;m<d.length;++m){const k=d[m];a.listenProvider_.stopListening(vi(k),Mi(a,k))}}return t}/**
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
 */class Zt{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zt(n)}node(){return this.node_}}class es{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new es(this.syncTree_,n)}node(){return rl(this.syncTree_,this.path_)}}const Cy=function(a){return a=a||{},a.timestamp=a.timestamp||new Date().getTime(),a},Bd=function(a,e,n){if(!a||typeof a!="object")return a;if(D(".sv"in a,"Unexpected leaf node or priority contents"),typeof a[".sv"]=="string")return Ey(a[".sv"],e,n);if(typeof a[".sv"]=="object")return Iy(a[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(a,null,2))},Ey=function(a,e,n){switch(a){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+a)}},Iy=function(a,e,n){a.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(a,null,2));const i=a.increment;typeof i!="number"&&D(!1,"Unexpected increment value: "+i);const r=e.node();if(D(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const t=r.getValue();return typeof t!="number"?i:t+i},Ty=function(a,e,n,i){return as(e,new es(n,a),i)},Sy=function(a,e,n){return as(a,new Zt(e),n)};function as(a,e,n){const i=a.getPriority().val(),r=Bd(i,e.getImmediateChild(".priority"),n);let o;if(a.isLeafNode()){const t=a,s=Bd(t.getValue(),e,n);return s!==t.getValue()||r!==t.getPriority().val()?new We(s,Ke(r)):a}else{const t=a;return o=t,r!==t.getPriority().val()&&(o=o.updatePriority(new We(r))),t.forEachChild(Me,(s,d)=>{const m=as(d,e.getImmediateChild(s),n);m!==d&&(o=o.updateImmediateChild(s,m))}),o}}/**
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
 */class ns{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function is(a,e){let n=e instanceof Ee?e:new Ee(e),i=a,r=ce(n);for(;r!==null;){const o=Jn(i.node.children,r)||{children:{},childCount:0};i=new ns(r,i,o),n=Te(n),r=ce(n)}return i}function ri(a){return a.node.value}function dl(a,e){a.node.value=e,tt(a)}function ml(a){return a.node.childCount>0}function Ny(a){return ri(a)===void 0&&!ml(a)}function ao(a,e){ta(a.node.children,(n,i)=>{e(new ns(n,a,i))})}function ul(a,e,n,i){n&&!i&&e(a),ao(a,r=>{ul(r,e,!0,i)}),n&&i&&e(a)}function Ry(a,e,n){let i=n?a:a.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Vi(a){return new Ee(a.parent===null?a.name:Vi(a.parent)+"/"+a.name)}function tt(a){a.parent!==null&&Ay(a.parent,a.name,a)}function Ay(a,e,n){const i=Ny(n),r=Ua(a.node.children,e);i&&r?(delete a.node.children[e],a.node.childCount--,tt(a)):!i&&!r&&(a.node.children[e]=n.node,a.node.childCount++,tt(a))}/**
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
 */const zy=/[\[\].#$\/\u0000-\u001F\u007F]/,Dy=/[\[\].#$\u0000-\u001F\u007F]/,Io=10*1024*1024,ll=function(a){return typeof a=="string"&&a.length!==0&&!zy.test(a)},_l=function(a){return typeof a=="string"&&a.length!==0&&!Dy.test(a)},Py=function(a){return a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),_l(a)},kl=function(a,e,n){const i=n instanceof Ee?new Qh(n,a):n;if(e===void 0)throw new Error(a+"contains undefined "+fn(i));if(typeof e=="function")throw new Error(a+"contains a function "+fn(i)+" with contents = "+e.toString());if(mu(e))throw new Error(a+"contains "+e.toString()+" "+fn(i));if(typeof e=="string"&&e.length>Io/3&&Yr(e)>Io)throw new Error(a+"contains a string greater than "+Io+" utf8 bytes "+fn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,o=!1;if(ta(e,(t,s)=>{if(t===".value")r=!0;else if(t!==".priority"&&t!==".sv"&&(o=!0,!ll(t)))throw new Error(a+" contains an invalid key ("+t+") "+fn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Xh(i,t),kl(a,s,i),Zh(i)}),r&&o)throw new Error(a+' contains ".value" child '+fn(i)+" in addition to actual children.")}},cl=function(a,e,n,i){if(!(i&&n===void 0)&&!_l(n))throw new Error(Zm(a,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Oy=function(a,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),cl(a,e,n,i)},My=function(a,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ll(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Py(n))throw new Error(Zm(a,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ly{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fy(a,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],o=r.getPath();n!==null&&!Au(o,n.path)&&(a.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(r)}n&&a.eventLists_.push(n)}function _n(a,e,n){Fy(a,n),By(a,i=>wa(i,e)||wa(e,i))}function By(a,e){a.recursionDepth_++;let n=!0;for(let i=0;i<a.eventLists_.length;i++){const r=a.eventLists_[i];if(r){const o=r.path;e(o)?(qy(a.eventLists_[i]),a.eventLists_[i]=null):n=!1}}n&&(a.eventLists_=[]),a.recursionDepth_--}function qy(a){for(let e=0;e<a.events.length;e++){const n=a.events[e];if(n!==null){a.events[e]=null;const i=n.getEventRunner();Cn&&Ge("event: "+n.toString()),Wi(i)}}}/**
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
 */const $y="repo_interrupt",Wy=25;class Hy{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ly,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ir(),this.transactionQueueTree_=new ns,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Uy(a,e,n){if(a.stats_=Lt(a.repoInfo_),a.forceRestClient_||bh())a.server_=new Er(a.repoInfo_,(i,r,o,t)=>{qd(a,i,r,o,t)},a.authTokenProvider_,a.appCheckProvider_),setTimeout(()=>$d(a,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{qe(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}a.persistentConnection_=new $a(a.repoInfo_,e,(i,r,o,t)=>{qd(a,i,r,o,t)},i=>{$d(a,i)},i=>{Vy(a,i)},a.authTokenProvider_,a.appCheckProvider_,n),a.server_=a.persistentConnection_}a.authTokenProvider_.addTokenChangeListener(i=>{a.server_.refreshAuthToken(i)}),a.appCheckProvider_.addTokenChangeListener(i=>{a.server_.refreshAppCheckToken(i.token)}),a.statsReporter_=Ih(a.repoInfo_,()=>new Cg(a.stats_,a.server_)),a.infoData_=new jg,a.infoSyncTree_=new Fd({startListening:(i,r,o,t)=>{let s=[];const d=a.infoData_.getNode(i._path);return d.isEmpty()||(s=Ui(a.infoSyncTree_,i._path,d),setTimeout(()=>{t("ok")},0)),s},stopListening:()=>{}}),rs(a,"connected",!1),a.serverSyncTree_=new Fd({startListening:(i,r,o,t)=>(a.server_.listen(i,o,r,(s,d)=>{const m=t(s,d);_n(a.eventQueue_,i._path,m)}),[]),stopListening:(i,r)=>{a.server_.unlisten(i,r)}})}function Ky(a){const n=a.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function pl(a){return Cy({timestamp:Ky(a)})}function qd(a,e,n,i,r){a.dataUpdateCount++;const o=new Ee(e);n=a.interceptServerDataCallback_?a.interceptServerDataCallback_(e,n):n;let t=[];if(r)if(i){const d=jr(n,m=>Ke(m));t=yy(a.serverSyncTree_,o,d,r)}else{const d=Ke(n);t=il(a.serverSyncTree_,o,d,r)}else if(i){const d=jr(n,m=>Ke(m));t=py(a.serverSyncTree_,o,d)}else{const d=Ke(n);t=Ui(a.serverSyncTree_,o,d)}let s=o;t.length>0&&(s=ss(a,o)),_n(a.eventQueue_,s,t)}function $d(a,e){rs(a,"connected",e),e===!1&&Jy(a)}function Vy(a,e){ta(e,(n,i)=>{rs(a,n,i)})}function rs(a,e,n){const i=new Ee("/.info/"+e),r=Ke(n);a.infoData_.updateSnapshot(i,r);const o=Ui(a.infoSyncTree_,i,r);_n(a.eventQueue_,i,o)}function Yy(a){return a.nextWriteId_++}function Gy(a,e,n){const i=jy(a.serverSyncTree_,e);return i!=null?Promise.resolve(i):a.server_.get(e).then(r=>{const o=Ke(r).withIndex(e._queryParams.getIndex());fy(a.serverSyncTree_,e,n,!0);let t;if(e._queryParams.loadsAllData())t=Ui(a.serverSyncTree_,e._path,o);else{const s=Mi(a.serverSyncTree_,e);t=il(a.serverSyncTree_,e._path,o,s)}return _n(a.eventQueue_,e._path,t),nl(a.serverSyncTree_,e,n,null,!0),o},r=>(os(a,"get for query "+qe(e)+" failed: "+r),Promise.reject(new Error(r))))}function Jy(a){os(a,"onDisconnectEvents");const e=pl(a),n=Ir();at(a.onDisconnect_,he(),(r,o)=>{const t=Ty(r,o,a.serverSyncTree_,e);Bu(n,r,t)});let i=[];at(n,he(),(r,o)=>{i=i.concat(Ui(a.serverSyncTree_,r,o));const t=ef(a,r);ss(a,t)}),a.onDisconnect_=Ir(),_n(a.eventQueue_,he(),i)}function Qy(a){a.persistentConnection_&&a.persistentConnection_.interrupt($y)}function os(a,...e){let n="";a.persistentConnection_&&(n=a.persistentConnection_.id+":"),Ge(n,...e)}function hl(a,e,n){return rl(a.serverSyncTree_,e,n)||Z.EMPTY_NODE}function ts(a,e=a.transactionQueueTree_){if(e||no(a,e),ri(e)){const n=yl(a,e);D(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&Xy(a,Vi(e),n)}else ml(e)&&ao(e,n=>{ts(a,n)})}function Xy(a,e,n){const i=n.map(m=>m.currentWriteId),r=hl(a,e,i);let o=r;const t=r.hash();for(let m=0;m<n.length;m++){const k=n[m];D(k.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),k.status=1,k.retryCount++;const u=aa(e,k.path);o=o.updateChild(u,k.currentOutputSnapshotRaw)}const s=o.val(!0),d=e;a.server_.put(d.toString(),s,m=>{os(a,"transaction put response",{path:d.toString(),status:m});let k=[];if(m==="ok"){const u=[];for(let c=0;c<n.length;c++)n[c].status=2,k=k.concat(Fn(a.serverSyncTree_,n[c].currentWriteId)),n[c].onComplete&&u.push(()=>n[c].onComplete(null,!0,n[c].currentOutputSnapshotResolved)),n[c].unwatcher();no(a,is(a.transactionQueueTree_,e)),ts(a,a.transactionQueueTree_),_n(a.eventQueue_,e,k);for(let c=0;c<u.length;c++)Wi(u[c])}else{if(m==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{ua("transaction at "+d.toString()+" failed: "+m);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=m}ss(a,e)}},t)}function ss(a,e){const n=gl(a,e),i=Vi(n),r=yl(a,n);return Zy(a,r,i),i}function Zy(a,e,n){if(e.length===0)return;const i=[];let r=[];const t=e.filter(s=>s.status===0).map(s=>s.currentWriteId);for(let s=0;s<e.length;s++){const d=e[s],m=aa(n,d.path);let k=!1,u;if(D(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)k=!0,u=d.abortReason,r=r.concat(Fn(a.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=Wy)k=!0,u="maxretry",r=r.concat(Fn(a.serverSyncTree_,d.currentWriteId,!0));else{const c=hl(a,d.path,t);d.currentInputSnapshot=c;const b=e[s].update(c.val());if(b!==void 0){kl("transaction failed: Data returned ",b,d.path);let w=Ke(b);typeof b=="object"&&b!=null&&Ua(b,".priority")||(w=w.updatePriority(c.getPriority()));const M=d.currentWriteId,V=pl(a),F=Sy(w,c,V);d.currentOutputSnapshotRaw=w,d.currentOutputSnapshotResolved=F,d.currentWriteId=Yy(a),t.splice(t.indexOf(M),1),r=r.concat(cy(a.serverSyncTree_,d.path,F,d.currentWriteId,d.applyLocally)),r=r.concat(Fn(a.serverSyncTree_,M,!0))}else k=!0,u="nodata",r=r.concat(Fn(a.serverSyncTree_,d.currentWriteId,!0))}_n(a.eventQueue_,n,r),r=[],k&&(e[s].status=2,function(c){setTimeout(c,Math.floor(0))}(e[s].unwatcher),e[s].onComplete&&(u==="nodata"?i.push(()=>e[s].onComplete(null,!1,e[s].currentInputSnapshot)):i.push(()=>e[s].onComplete(new Error(u),!1,null))))}no(a,a.transactionQueueTree_);for(let s=0;s<i.length;s++)Wi(i[s]);ts(a,a.transactionQueueTree_)}function gl(a,e){let n,i=a.transactionQueueTree_;for(n=ce(e);n!==null&&ri(i)===void 0;)i=is(i,n),e=Te(e),n=ce(e);return i}function yl(a,e){const n=[];return fl(a,e,n),n.sort((i,r)=>i.order-r.order),n}function fl(a,e,n){const i=ri(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);ao(e,r=>{fl(a,r,n)})}function no(a,e){const n=ri(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,dl(e,n.length>0?n:void 0)}ao(e,i=>{no(a,i)})}function ef(a,e){const n=Vi(gl(a,e)),i=is(a.transactionQueueTree_,e);return Ry(i,r=>{To(a,r)}),To(a,i),ul(i,r=>{To(a,r)}),n}function To(a,e){const n=ri(e);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)n[t].status===3||(n[t].status===1?(D(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(D(n[t].status===0,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Fn(a.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));o===-1?dl(e,void 0):n.length=o+1,_n(a.eventQueue_,Vi(e),r);for(let t=0;t<i.length;t++)Wi(i[t])}}/**
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
 */function af(a){let e="";const n=a.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function nf(a){const e={};a.charAt(0)==="?"&&(a=a.substring(1));for(const n of a.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ua(`Invalid query segment '${n}' in query '${a}'`)}return e}const Wd=function(a,e){const n=rf(a),i=n.namespace;n.domain==="firebase.com"&&Tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_h();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xh(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new Ee(n.pathString)}},rf=function(a){let e="",n="",i="",r="",o="",t=!0,s="https",d=443;if(typeof a=="string"){let m=a.indexOf("//");m>=0&&(s=a.substring(0,m-1),a=a.substring(m+2));let k=a.indexOf("/");k===-1&&(k=a.length);let u=a.indexOf("?");u===-1&&(u=a.length),e=a.substring(0,Math.min(k,u)),k<u&&(r=af(a.substring(k,u)));const c=nf(a.substring(Math.min(a.length,u)));m=e.indexOf(":"),m>=0?(t=s==="https"||s==="wss",d=parseInt(e.substring(m+1),10)):m=e.length;const b=e.slice(0,m);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const w=e.indexOf(".");i=e.substring(0,w).toLowerCase(),n=e.substring(w+1),o=i}"ns"in c&&(o=c.ns)}return{host:e,port:d,domain:n,subdomain:i,secure:t,scheme:s,pathString:r,namespace:o}};/**
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
 */class of{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+qe(this.snapshot.exportVal())}}class tf{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class sf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ds{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return ue(this._path)?null:Su(this._path)}get ref(){return new Ka(this._repo,this._path)}get _queryIdentifier(){const e=Td(this._queryParams),n=Ot(e);return n==="{}"?"default":n}get _queryObject(){return Td(this._queryParams)}isEqual(e){if(e=Gr(e),!(e instanceof ds))return!1;const n=this._repo===e._repo,i=Au(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Jh(this._path)}}class Ka extends ds{constructor(e,n){super(e,n,new Wt,!1)}get parent(){const e=Ru(this._path);return e===null?null:new Ka(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Li{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),i=st(this.ref,e);return new Li(this._node.getChild(n),i,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Li(r,st(this.ref,i),Me)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function df(a,e){return a=Gr(a),a._checkNotDeleted("ref"),e!==void 0?st(a._root,e):a._root}function st(a,e){return a=Gr(a),ce(a._path)===null?Oy("child","path",e,!1):cl("child","path",e,!1),new Ka(a._repo,$e(a._path,e))}function mf(a){a=Gr(a);const e=new sf(()=>{}),n=new ms(e);return Gy(a._repo,a,n).then(i=>new Li(i,new Ka(a._repo,a._path),a._queryParams.getIndex()))}class ms{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new of("value",this,new Li(e.snapshotNode,new Ka(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tf(this,e,n):null}matches(e){return e instanceof ms?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}ty(Ka);ly(Ka);/**
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
 */const uf="FIREBASE_DATABASE_EMULATOR_HOST",dt={};let lf=!1;function _f(a,e,n,i,r){let o=i||a.options.databaseURL;o===void 0&&(a.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",a.options.projectId),o=`${a.options.projectId}-default-rtdb.firebaseio.com`);let t=Wd(o,r),s=t.repoInfo,d,m;typeof process<"u"&&process.env&&(m=process.env[uf]),m?(d=!0,o=`http://${m}?ns=${s.namespace}`,t=Wd(o,r),s=t.repoInfo):d=!t.repoInfo.secure;const k=r&&d?new Xo(Xo.OWNER):new wh(a.name,a.options,e);My("Invalid Firebase Database URL",t),ue(t.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=cf(s,a,k,new vh(a.name,n));return new pf(u,a)}function kf(a,e){const n=dt[e];(!n||n[a.key]!==a)&&Tn(`Database ${e}(${a.repoInfo_}) has already been deleted.`),Qy(a),delete n[a.key]}function cf(a,e,n,i){let r=dt[e.name];r||(r={},dt[e.name]=r);let o=r[a.toURLString()];return o&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Hy(a,lf,n,i),r[a.toURLString()]=o,o}class pf{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Uy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ka(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tn("Cannot call "+e+" on a deleted database.")}}function hf(a=Gp(),e){return Hp(a,"database").getImmediate({identifier:e})}/**
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
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(a,e){(function(n){a.exports=n()})(function(){return function n(i,r,o){function t(m,k){if(!r[m]){if(!i[m]){var u=typeof sr=="function"&&sr;if(!k&&u)return u(m,!0);if(s)return s(m,!0);var c=new Error("Cannot find module '"+m+"'");throw c.code="MODULE_NOT_FOUND",c}var b=r[m]={exports:{}};i[m][0].call(b.exports,function(w){var L=i[m][1][w];return t(L||w)},b,b.exports,n,i,r,o)}return r[m].exports}for(var s=typeof sr=="function"&&sr,d=0;d<o.length;d++)t(o[d]);return t}({1:[function(n,i,r){(function(o){var t=o.MutationObserver||o.WebKitMutationObserver,s;if(t){var d=0,m=new t(w),k=o.document.createTextNode("");m.observe(k,{characterData:!0}),s=function(){k.data=d=++d%2}}else if(!o.setImmediate&&typeof o.MessageChannel<"u"){var u=new o.MessageChannel;u.port1.onmessage=w,s=function(){u.port2.postMessage(0)}}else"document"in o&&"onreadystatechange"in o.document.createElement("script")?s=function(){var M=o.document.createElement("script");M.onreadystatechange=function(){w(),M.onreadystatechange=null,M.parentNode.removeChild(M),M=null},o.document.documentElement.appendChild(M)}:s=function(){setTimeout(w,0)};var c,b=[];function w(){c=!0;for(var M,V,F=b.length;F;){for(V=b,b=[],M=-1;++M<F;)V[M]();F=b.length}c=!1}i.exports=L;function L(M){b.push(M)===1&&!c&&s()}}).call(this,typeof tr<"u"?tr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(n,i,r){var o=n(1);function t(){}var s={},d=["REJECTED"],m=["FULFILLED"],k=["PENDING"];i.exports=u;function u(I){if(typeof I!="function")throw new TypeError("resolver must be a function");this.state=k,this.queue=[],this.outcome=void 0,I!==t&&L(this,I)}u.prototype.catch=function(I){return this.then(null,I)},u.prototype.then=function(I,Q){if(typeof I!="function"&&this.state===m||typeof Q!="function"&&this.state===d)return this;var J=new this.constructor(t);if(this.state!==k){var q=this.state===m?I:Q;b(J,q,this.outcome)}else this.queue.push(new c(J,I,Q));return J};function c(I,Q,J){this.promise=I,typeof Q=="function"&&(this.onFulfilled=Q,this.callFulfilled=this.otherCallFulfilled),typeof J=="function"&&(this.onRejected=J,this.callRejected=this.otherCallRejected)}c.prototype.callFulfilled=function(I){s.resolve(this.promise,I)},c.prototype.otherCallFulfilled=function(I){b(this.promise,this.onFulfilled,I)},c.prototype.callRejected=function(I){s.reject(this.promise,I)},c.prototype.otherCallRejected=function(I){b(this.promise,this.onRejected,I)};function b(I,Q,J){o(function(){var q;try{q=Q(J)}catch(X){return s.reject(I,X)}q===I?s.reject(I,new TypeError("Cannot resolve promise with itself")):s.resolve(I,q)})}s.resolve=function(I,Q){var J=M(w,Q);if(J.status==="error")return s.reject(I,J.value);var q=J.value;if(q)L(I,q);else{I.state=m,I.outcome=Q;for(var X=-1,ie=I.queue.length;++X<ie;)I.queue[X].callFulfilled(Q)}return I},s.reject=function(I,Q){I.state=d,I.outcome=Q;for(var J=-1,q=I.queue.length;++J<q;)I.queue[J].callRejected(Q);return I};function w(I){var Q=I&&I.then;if(I&&(typeof I=="object"||typeof I=="function")&&typeof Q=="function")return function(){Q.apply(I,arguments)}}function L(I,Q){var J=!1;function q($){J||(J=!0,s.reject(I,$))}function X($){J||(J=!0,s.resolve(I,$))}function ie(){Q(X,q)}var te=M(ie);te.status==="error"&&q(te.value)}function M(I,Q){var J={};try{J.value=I(Q),J.status="success"}catch(q){J.status="error",J.value=q}return J}u.resolve=V;function V(I){return I instanceof this?I:s.resolve(new this(t),I)}u.reject=F;function F(I){var Q=new this(t);return s.reject(Q,I)}u.all=K;function K(I){var Q=this;if(Object.prototype.toString.call(I)!=="[object Array]")return this.reject(new TypeError("must be an array"));var J=I.length,q=!1;if(!J)return this.resolve([]);for(var X=new Array(J),ie=0,te=-1,$=new this(t);++te<J;)le(I[te],te);return $;function le(De,ha){Q.resolve(De).then(Le,function(je){q||(q=!0,s.reject($,je))});function Le(je){X[ha]=je,++ie===J&&!q&&(q=!0,s.resolve($,X))}}}u.race=ne;function ne(I){var Q=this;if(Object.prototype.toString.call(I)!=="[object Array]")return this.reject(new TypeError("must be an array"));var J=I.length,q=!1;if(!J)return this.resolve([]);for(var X=-1,ie=new this(t);++X<J;)te(I[X]);return ie;function te($){Q.resolve($).then(function(le){q||(q=!0,s.resolve(ie,le))},function(le){q||(q=!0,s.reject(ie,le))})}}},{1:1}],3:[function(n,i,r){(function(o){typeof o.Promise!="function"&&(o.Promise=n(2))}).call(this,typeof tr<"u"?tr:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(n,i,r){var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};function t(l,h){if(!(l instanceof h))throw new TypeError("Cannot call a class as a function")}function s(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var d=s();function m(){try{if(!d||!d.open)return!1;var l=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),h=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!l||h)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function k(l,h){l=l||[],h=h||{};try{return new Blob(l,h)}catch(g){if(g.name!=="TypeError")throw g;for(var _=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,y=new _,j=0;j<l.length;j+=1)y.append(l[j]);return y.getBlob(h.type)}}typeof Promise>"u"&&n(3);var u=Promise;function c(l,h){h&&l.then(function(_){h(null,_)},function(_){h(_)})}function b(l,h,_){typeof h=="function"&&l.then(h),typeof _=="function"&&l.catch(_)}function w(l){return typeof l!="string"&&(console.warn(l+" used as a key, but it is not a string."),l=String(l)),l}function L(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var M="local-forage-detect-blob-support",V=void 0,F={},K=Object.prototype.toString,ne="readonly",I="readwrite";function Q(l){for(var h=l.length,_=new ArrayBuffer(h),y=new Uint8Array(_),j=0;j<h;j++)y[j]=l.charCodeAt(j);return _}function J(l){return new u(function(h){var _=l.transaction(M,I),y=k([""]);_.objectStore(M).put(y,"key"),_.onabort=function(j){j.preventDefault(),j.stopPropagation(),h(!1)},_.oncomplete=function(){var j=navigator.userAgent.match(/Chrome\/(\d+)/),g=navigator.userAgent.match(/Edge\//);h(g||!j||parseInt(j[1],10)>=43)}}).catch(function(){return!1})}function q(l){return typeof V=="boolean"?u.resolve(V):J(l).then(function(h){return V=h,V})}function X(l){var h=F[l.name],_={};_.promise=new u(function(y,j){_.resolve=y,_.reject=j}),h.deferredOperations.push(_),h.dbReady?h.dbReady=h.dbReady.then(function(){return _.promise}):h.dbReady=_.promise}function ie(l){var h=F[l.name],_=h.deferredOperations.pop();if(_)return _.resolve(),_.promise}function te(l,h){var _=F[l.name],y=_.deferredOperations.pop();if(y)return y.reject(h),y.promise}function $(l,h){return new u(function(_,y){if(F[l.name]=F[l.name]||Pa(),l.db)if(h)X(l),l.db.close();else return _(l.db);var j=[l.name];h&&j.push(l.version);var g=d.open.apply(d,j);h&&(g.onupgradeneeded=function(x){var T=g.result;try{T.createObjectStore(l.storeName),x.oldVersion<=1&&T.createObjectStore(M)}catch(N){if(N.name==="ConstraintError")console.warn('The database "'+l.name+'" has been upgraded from version '+x.oldVersion+" to version "+x.newVersion+', but the storage "'+l.storeName+'" already exists.');else throw N}}),g.onerror=function(x){x.preventDefault(),y(g.error)},g.onsuccess=function(){var x=g.result;x.onversionchange=function(T){T.target.close()},_(x),ie(l)}})}function le(l){return $(l,!1)}function De(l){return $(l,!0)}function ha(l,h){if(!l.db)return!0;var _=!l.db.objectStoreNames.contains(l.storeName),y=l.version<l.db.version,j=l.version>l.db.version;if(y&&(l.version!==h&&console.warn('The database "'+l.name+`" can't be downgraded from version `+l.db.version+" to version "+l.version+"."),l.version=l.db.version),j||_){if(_){var g=l.db.version+1;g>l.version&&(l.version=g)}return!0}return!1}function Le(l){return new u(function(h,_){var y=new FileReader;y.onerror=_,y.onloadend=function(j){var g=btoa(j.target.result||"");h({__local_forage_encoded_blob:!0,data:g,type:l.type})},y.readAsBinaryString(l)})}function je(l){var h=Q(atob(l.data));return k([h],{type:l.type})}function we(l){return l&&l.__local_forage_encoded_blob}function ga(l){var h=this,_=h._initReady().then(function(){var y=F[h._dbInfo.name];if(y&&y.dbReady)return y.dbReady});return b(_,l,l),_}function oi(l){X(l);for(var h=F[l.name],_=h.forages,y=0;y<_.length;y++){var j=_[y];j._dbInfo.db&&(j._dbInfo.db.close(),j._dbInfo.db=null)}return l.db=null,le(l).then(function(g){return l.db=g,ha(l)?De(l):g}).then(function(g){l.db=h.db=g;for(var x=0;x<_.length;x++)_[x]._dbInfo.db=g}).catch(function(g){throw te(l,g),g})}function Qe(l,h,_,y){y===void 0&&(y=1);try{var j=l.db.transaction(l.storeName,h);_(null,j)}catch(g){if(y>0&&(!l.db||g.name==="InvalidStateError"||g.name==="NotFoundError"))return u.resolve().then(function(){if(!l.db||g.name==="NotFoundError"&&!l.db.objectStoreNames.contains(l.storeName)&&l.version<=l.db.version)return l.db&&(l.version=l.db.version+1),De(l)}).then(function(){return oi(l).then(function(){Qe(l,h,_,y-1)})}).catch(_);_(g)}}function Pa(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Sa(l){var h=this,_={db:null};if(l)for(var y in l)_[y]=l[y];var j=F[_.name];j||(j=Pa(),F[_.name]=j),j.forages.push(h),h._initReady||(h._initReady=h.ready,h.ready=ga);var g=[];function x(){return u.resolve()}for(var T=0;T<j.forages.length;T++){var N=j.forages[T];N!==h&&g.push(N._initReady().catch(x))}var R=j.forages.slice(0);return u.all(g).then(function(){return _.db=j.db,le(_)}).then(function(P){return _.db=P,ha(_,h._defaultConfig.version)?De(_):P}).then(function(P){_.db=j.db=P,h._dbInfo=_;for(var H=0;H<R.length;H++){var de=R[H];de!==h&&(de._dbInfo.db=_.db,de._dbInfo.version=_.version)}})}function Yi(l,h){var _=this;l=w(l);var y=new u(function(j,g){_.ready().then(function(){Qe(_._dbInfo,ne,function(x,T){if(x)return g(x);try{var N=T.objectStore(_._dbInfo.storeName),R=N.get(l);R.onsuccess=function(){var P=R.result;P===void 0&&(P=null),we(P)&&(P=je(P)),j(P)},R.onerror=function(){g(R.error)}}catch(P){g(P)}})}).catch(g)});return c(y,h),y}function io(l,h){var _=this,y=new u(function(j,g){_.ready().then(function(){Qe(_._dbInfo,ne,function(x,T){if(x)return g(x);try{var N=T.objectStore(_._dbInfo.storeName),R=N.openCursor(),P=1;R.onsuccess=function(){var H=R.result;if(H){var de=H.value;we(de)&&(de=je(de));var fe=l(de,H.key,P++);fe!==void 0?j(fe):H.continue()}else j()},R.onerror=function(){g(R.error)}}catch(H){g(H)}})}).catch(g)});return c(y,h),y}function ro(l,h,_){var y=this;l=w(l);var j=new u(function(g,x){var T;y.ready().then(function(){return T=y._dbInfo,K.call(h)==="[object Blob]"?q(T.db).then(function(N){return N?h:Le(h)}):h}).then(function(N){Qe(y._dbInfo,I,function(R,P){if(R)return x(R);try{var H=P.objectStore(y._dbInfo.storeName);N===null&&(N=void 0);var de=H.put(N,l);P.oncomplete=function(){N===void 0&&(N=null),g(N)},P.onabort=P.onerror=function(){var fe=de.error?de.error:de.transaction.error;x(fe)}}catch(fe){x(fe)}})}).catch(x)});return c(j,_),j}function ya(l,h){var _=this;l=w(l);var y=new u(function(j,g){_.ready().then(function(){Qe(_._dbInfo,I,function(x,T){if(x)return g(x);try{var N=T.objectStore(_._dbInfo.storeName),R=N.delete(l);T.oncomplete=function(){j()},T.onerror=function(){g(R.error)},T.onabort=function(){var P=R.error?R.error:R.transaction.error;g(P)}}catch(P){g(P)}})}).catch(g)});return c(y,h),y}function Dn(l){var h=this,_=new u(function(y,j){h.ready().then(function(){Qe(h._dbInfo,I,function(g,x){if(g)return j(g);try{var T=x.objectStore(h._dbInfo.storeName),N=T.clear();x.oncomplete=function(){y()},x.onabort=x.onerror=function(){var R=N.error?N.error:N.transaction.error;j(R)}}catch(R){j(R)}})}).catch(j)});return c(_,l),_}function Gi(l){var h=this,_=new u(function(y,j){h.ready().then(function(){Qe(h._dbInfo,ne,function(g,x){if(g)return j(g);try{var T=x.objectStore(h._dbInfo.storeName),N=T.count();N.onsuccess=function(){y(N.result)},N.onerror=function(){j(N.error)}}catch(R){j(R)}})}).catch(j)});return c(_,l),_}function Va(l,h){var _=this,y=new u(function(j,g){if(l<0){j(null);return}_.ready().then(function(){Qe(_._dbInfo,ne,function(x,T){if(x)return g(x);try{var N=T.objectStore(_._dbInfo.storeName),R=!1,P=N.openKeyCursor();P.onsuccess=function(){var H=P.result;if(!H){j(null);return}l===0||R?j(H.key):(R=!0,H.advance(l))},P.onerror=function(){g(P.error)}}catch(H){g(H)}})}).catch(g)});return c(y,h),y}function ti(l){var h=this,_=new u(function(y,j){h.ready().then(function(){Qe(h._dbInfo,ne,function(g,x){if(g)return j(g);try{var T=x.objectStore(h._dbInfo.storeName),N=T.openKeyCursor(),R=[];N.onsuccess=function(){var P=N.result;if(!P){y(R);return}R.push(P.key),P.continue()},N.onerror=function(){j(N.error)}}catch(P){j(P)}})}).catch(j)});return c(_,l),_}function si(l,h){h=L.apply(this,arguments);var _=this.config();l=typeof l!="function"&&l||{},l.name||(l.name=l.name||_.name,l.storeName=l.storeName||_.storeName);var y=this,j;if(!l.name)j=u.reject("Invalid arguments");else{var g=l.name===_.name&&y._dbInfo.db,x=g?u.resolve(y._dbInfo.db):le(l).then(function(T){var N=F[l.name],R=N.forages;N.db=T;for(var P=0;P<R.length;P++)R[P]._dbInfo.db=T;return T});l.storeName?j=x.then(function(T){if(!!T.objectStoreNames.contains(l.storeName)){var N=T.version+1;X(l);var R=F[l.name],P=R.forages;T.close();for(var H=0;H<P.length;H++){var de=P[H];de._dbInfo.db=null,de._dbInfo.version=N}var fe=new u(function(be,Be){var Fe=d.open(l.name,N);Fe.onerror=function(_a){var li=Fe.result;li.close(),Be(_a)},Fe.onupgradeneeded=function(){var _a=Fe.result;_a.deleteObjectStore(l.storeName)},Fe.onsuccess=function(){var _a=Fe.result;_a.close(),be(_a)}});return fe.then(function(be){R.db=be;for(var Be=0;Be<P.length;Be++){var Fe=P[Be];Fe._dbInfo.db=be,ie(Fe._dbInfo)}}).catch(function(be){throw(te(l,be)||u.resolve()).catch(function(){}),be})}}):j=x.then(function(T){X(l);var N=F[l.name],R=N.forages;T.close();for(var P=0;P<R.length;P++){var H=R[P];H._dbInfo.db=null}var de=new u(function(fe,be){var Be=d.deleteDatabase(l.name);Be.onerror=function(){var Fe=Be.result;Fe&&Fe.close(),be(Be.error)},Be.onblocked=function(){console.warn('dropInstance blocked for database "'+l.name+'" until all open connections are closed')},Be.onsuccess=function(){var Fe=Be.result;Fe&&Fe.close(),fe(Fe)}});return de.then(function(fe){N.db=fe;for(var be=0;be<R.length;be++){var Be=R[be];ie(Be._dbInfo)}}).catch(function(fe){throw(te(l,fe)||u.resolve()).catch(function(){}),fe})})}return c(j,h),j}var p={_driver:"asyncStorage",_initStorage:Sa,_support:m(),iterate:io,getItem:Yi,setItem:ro,removeItem:ya,clear:Dn,length:Gi,key:Va,keys:ti,dropInstance:si};function f(){return typeof openDatabase=="function"}var v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",E="~~local_forage_type~",C=/^~~local_forage_type~([^~]+)~/,z="__lfsc__:",B=z.length,A="arbf",O="blob",S="si08",Y="ui08",W="uic8",G="si16",ee="si32",_e="ur16",ge="ui32",ye="fl32",xe="fl64",na=B+A.length,Oa=Object.prototype.toString;function di(l){var h=l.length*.75,_=l.length,y,j=0,g,x,T,N;l[l.length-1]==="="&&(h--,l[l.length-2]==="="&&h--);var R=new ArrayBuffer(h),P=new Uint8Array(R);for(y=0;y<_;y+=4)g=v.indexOf(l[y]),x=v.indexOf(l[y+1]),T=v.indexOf(l[y+2]),N=v.indexOf(l[y+3]),P[j++]=g<<2|x>>4,P[j++]=(x&15)<<4|T>>2,P[j++]=(T&3)<<6|N&63;return R}function Ma(l){var h=new Uint8Array(l),_="",y;for(y=0;y<h.length;y+=3)_+=v[h[y]>>2],_+=v[(h[y]&3)<<4|h[y+1]>>4],_+=v[(h[y+1]&15)<<2|h[y+2]>>6],_+=v[h[y+2]&63];return h.length%3===2?_=_.substring(0,_.length-1)+"=":h.length%3===1&&(_=_.substring(0,_.length-2)+"=="),_}function Ji(l,h){var _="";if(l&&(_=Oa.call(l)),l&&(_==="[object ArrayBuffer]"||l.buffer&&Oa.call(l.buffer)==="[object ArrayBuffer]")){var y,j=z;l instanceof ArrayBuffer?(y=l,j+=A):(y=l.buffer,_==="[object Int8Array]"?j+=S:_==="[object Uint8Array]"?j+=Y:_==="[object Uint8ClampedArray]"?j+=W:_==="[object Int16Array]"?j+=G:_==="[object Uint16Array]"?j+=_e:_==="[object Int32Array]"?j+=ee:_==="[object Uint32Array]"?j+=ge:_==="[object Float32Array]"?j+=ye:_==="[object Float64Array]"?j+=xe:h(new Error("Failed to get type for BinaryArray"))),h(j+Ma(y))}else if(_==="[object Blob]"){var g=new FileReader;g.onload=function(){var x=E+l.type+"~"+Ma(this.result);h(z+O+x)},g.readAsArrayBuffer(l)}else try{h(JSON.stringify(l))}catch(x){console.error("Couldn't convert value into a JSON string: ",l),h(null,x)}}function Xe(l){if(l.substring(0,B)!==z)return JSON.parse(l);var h=l.substring(na),_=l.substring(B,na),y;if(_===O&&C.test(h)){var j=h.match(C);y=j[1],h=h.substring(j[0].length)}var g=di(h);switch(_){case A:return g;case O:return k([g],{type:y});case S:return new Int8Array(g);case Y:return new Uint8Array(g);case W:return new Uint8ClampedArray(g);case G:return new Int16Array(g);case _e:return new Uint16Array(g);case ee:return new Int32Array(g);case ge:return new Uint32Array(g);case ye:return new Float32Array(g);case xe:return new Float64Array(g);default:throw new Error("Unkown type: "+_)}}var ia={serialize:Ji,deserialize:Xe,stringToBuffer:di,bufferToString:Ma};function mi(l,h,_,y){l.executeSql("CREATE TABLE IF NOT EXISTS "+h.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],_,y)}function bl(l){var h=this,_={db:null};if(l)for(var y in l)_[y]=typeof l[y]!="string"?l[y].toString():l[y];var j=new u(function(g,x){try{_.db=openDatabase(_.name,String(_.version),_.description,_.size)}catch(T){return x(T)}_.db.transaction(function(T){mi(T,_,function(){h._dbInfo=_,g()},function(N,R){x(R)})},x)});return _.serializer=ia,j}function Ya(l,h,_,y,j,g){l.executeSql(_,y,j,function(x,T){T.code===T.SYNTAX_ERR?x.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[h.storeName],function(N,R){R.rows.length?g(N,T):mi(N,h,function(){N.executeSql(_,y,j,g)},g)},g):g(x,T)},g)}function vl(l,h){var _=this;l=w(l);var y=new u(function(j,g){_.ready().then(function(){var x=_._dbInfo;x.db.transaction(function(T){Ya(T,x,"SELECT * FROM "+x.storeName+" WHERE key = ? LIMIT 1",[l],function(N,R){var P=R.rows.length?R.rows.item(0).value:null;P&&(P=x.serializer.deserialize(P)),j(P)},function(N,R){g(R)})})}).catch(g)});return c(y,h),y}function wl(l,h){var _=this,y=new u(function(j,g){_.ready().then(function(){var x=_._dbInfo;x.db.transaction(function(T){Ya(T,x,"SELECT * FROM "+x.storeName,[],function(N,R){for(var P=R.rows,H=P.length,de=0;de<H;de++){var fe=P.item(de),be=fe.value;if(be&&(be=x.serializer.deserialize(be)),be=l(be,fe.key,de+1),be!==void 0){j(be);return}}j()},function(N,R){g(R)})})}).catch(g)});return c(y,h),y}function ks(l,h,_,y){var j=this;l=w(l);var g=new u(function(x,T){j.ready().then(function(){h===void 0&&(h=null);var N=h,R=j._dbInfo;R.serializer.serialize(h,function(P,H){H?T(H):R.db.transaction(function(de){Ya(de,R,"INSERT OR REPLACE INTO "+R.storeName+" (key, value) VALUES (?, ?)",[l,P],function(){x(N)},function(fe,be){T(be)})},function(de){if(de.code===de.QUOTA_ERR){if(y>0){x(ks.apply(j,[l,N,_,y-1]));return}T(de)}})})}).catch(T)});return c(g,_),g}function xl(l,h,_){return ks.apply(this,[l,h,_,1])}function Cl(l,h){var _=this;l=w(l);var y=new u(function(j,g){_.ready().then(function(){var x=_._dbInfo;x.db.transaction(function(T){Ya(T,x,"DELETE FROM "+x.storeName+" WHERE key = ?",[l],function(){j()},function(N,R){g(R)})})}).catch(g)});return c(y,h),y}function El(l){var h=this,_=new u(function(y,j){h.ready().then(function(){var g=h._dbInfo;g.db.transaction(function(x){Ya(x,g,"DELETE FROM "+g.storeName,[],function(){y()},function(T,N){j(N)})})}).catch(j)});return c(_,l),_}function Il(l){var h=this,_=new u(function(y,j){h.ready().then(function(){var g=h._dbInfo;g.db.transaction(function(x){Ya(x,g,"SELECT COUNT(key) as c FROM "+g.storeName,[],function(T,N){var R=N.rows.item(0).c;y(R)},function(T,N){j(N)})})}).catch(j)});return c(_,l),_}function Tl(l,h){var _=this,y=new u(function(j,g){_.ready().then(function(){var x=_._dbInfo;x.db.transaction(function(T){Ya(T,x,"SELECT key FROM "+x.storeName+" WHERE id = ? LIMIT 1",[l+1],function(N,R){var P=R.rows.length?R.rows.item(0).key:null;j(P)},function(N,R){g(R)})})}).catch(g)});return c(y,h),y}function Sl(l){var h=this,_=new u(function(y,j){h.ready().then(function(){var g=h._dbInfo;g.db.transaction(function(x){Ya(x,g,"SELECT key FROM "+g.storeName,[],function(T,N){for(var R=[],P=0;P<N.rows.length;P++)R.push(N.rows.item(P).key);y(R)},function(T,N){j(N)})})}).catch(j)});return c(_,l),_}function Nl(l){return new u(function(h,_){l.transaction(function(y){y.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(j,g){for(var x=[],T=0;T<g.rows.length;T++)x.push(g.rows.item(T).name);h({db:l,storeNames:x})},function(j,g){_(g)})},function(y){_(y)})})}function Rl(l,h){h=L.apply(this,arguments);var _=this.config();l=typeof l!="function"&&l||{},l.name||(l.name=l.name||_.name,l.storeName=l.storeName||_.storeName);var y=this,j;return l.name?j=new u(function(g){var x;l.name===_.name?x=y._dbInfo.db:x=openDatabase(l.name,"","",0),l.storeName?g({db:x,storeNames:[l.storeName]}):g(Nl(x))}).then(function(g){return new u(function(x,T){g.db.transaction(function(N){function R(fe){return new u(function(be,Be){N.executeSql("DROP TABLE IF EXISTS "+fe,[],function(){be()},function(Fe,_a){Be(_a)})})}for(var P=[],H=0,de=g.storeNames.length;H<de;H++)P.push(R(g.storeNames[H]));u.all(P).then(function(){x()}).catch(function(fe){T(fe)})},function(N){T(N)})})}):j=u.reject("Invalid arguments"),c(j,h),j}var Al={_driver:"webSQLStorage",_initStorage:bl,_support:f(),iterate:wl,getItem:vl,setItem:xl,removeItem:Cl,clear:El,length:Il,key:Tl,keys:Sl,dropInstance:Rl};function zl(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function cs(l,h){var _=l.name+"/";return l.storeName!==h.storeName&&(_+=l.storeName+"/"),_}function Dl(){var l="_localforage_support_test";try{return localStorage.setItem(l,!0),localStorage.removeItem(l),!1}catch{return!0}}function Pl(){return!Dl()||localStorage.length>0}function Ol(l){var h=this,_={};if(l)for(var y in l)_[y]=l[y];return _.keyPrefix=cs(l,h._defaultConfig),Pl()?(h._dbInfo=_,_.serializer=ia,u.resolve()):u.reject()}function Ml(l){var h=this,_=h.ready().then(function(){for(var y=h._dbInfo.keyPrefix,j=localStorage.length-1;j>=0;j--){var g=localStorage.key(j);g.indexOf(y)===0&&localStorage.removeItem(g)}});return c(_,l),_}function Ll(l,h){var _=this;l=w(l);var y=_.ready().then(function(){var j=_._dbInfo,g=localStorage.getItem(j.keyPrefix+l);return g&&(g=j.serializer.deserialize(g)),g});return c(y,h),y}function Fl(l,h){var _=this,y=_.ready().then(function(){for(var j=_._dbInfo,g=j.keyPrefix,x=g.length,T=localStorage.length,N=1,R=0;R<T;R++){var P=localStorage.key(R);if(P.indexOf(g)===0){var H=localStorage.getItem(P);if(H&&(H=j.serializer.deserialize(H)),H=l(H,P.substring(x),N++),H!==void 0)return H}}});return c(y,h),y}function Bl(l,h){var _=this,y=_.ready().then(function(){var j=_._dbInfo,g;try{g=localStorage.key(l)}catch{g=null}return g&&(g=g.substring(j.keyPrefix.length)),g});return c(y,h),y}function ql(l){var h=this,_=h.ready().then(function(){for(var y=h._dbInfo,j=localStorage.length,g=[],x=0;x<j;x++){var T=localStorage.key(x);T.indexOf(y.keyPrefix)===0&&g.push(T.substring(y.keyPrefix.length))}return g});return c(_,l),_}function $l(l){var h=this,_=h.keys().then(function(y){return y.length});return c(_,l),_}function Wl(l,h){var _=this;l=w(l);var y=_.ready().then(function(){var j=_._dbInfo;localStorage.removeItem(j.keyPrefix+l)});return c(y,h),y}function Hl(l,h,_){var y=this;l=w(l);var j=y.ready().then(function(){h===void 0&&(h=null);var g=h;return new u(function(x,T){var N=y._dbInfo;N.serializer.serialize(h,function(R,P){if(P)T(P);else try{localStorage.setItem(N.keyPrefix+l,R),x(g)}catch(H){(H.name==="QuotaExceededError"||H.name==="NS_ERROR_DOM_QUOTA_REACHED")&&T(H),T(H)}})})});return c(j,_),j}function Ul(l,h){if(h=L.apply(this,arguments),l=typeof l!="function"&&l||{},!l.name){var _=this.config();l.name=l.name||_.name,l.storeName=l.storeName||_.storeName}var y=this,j;return l.name?j=new u(function(g){l.storeName?g(cs(l,y._defaultConfig)):g(l.name+"/")}).then(function(g){for(var x=localStorage.length-1;x>=0;x--){var T=localStorage.key(x);T.indexOf(g)===0&&localStorage.removeItem(T)}}):j=u.reject("Invalid arguments"),c(j,h),j}var Kl={_driver:"localStorageWrapper",_initStorage:Ol,_support:zl(),iterate:Fl,getItem:Ll,setItem:Hl,removeItem:Wl,clear:Ml,length:$l,key:Bl,keys:ql,dropInstance:Ul},Vl=function(h,_){return h===_||typeof h=="number"&&typeof _=="number"&&isNaN(h)&&isNaN(_)},Yl=function(h,_){for(var y=h.length,j=0;j<y;){if(Vl(h[j],_))return!0;j++}return!1},ps=Array.isArray||function(l){return Object.prototype.toString.call(l)==="[object Array]"},ui={},hs={},Pn={INDEXEDDB:p,WEBSQL:Al,LOCALSTORAGE:Kl},Gl=[Pn.INDEXEDDB._driver,Pn.WEBSQL._driver,Pn.LOCALSTORAGE._driver],Qi=["dropInstance"],oo=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Qi),Jl={description:"",driver:Gl.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Ql(l,h){l[h]=function(){var _=arguments;return l.ready().then(function(){return l[h].apply(l,_)})}}function to(){for(var l=1;l<arguments.length;l++){var h=arguments[l];if(h)for(var _ in h)h.hasOwnProperty(_)&&(ps(h[_])?arguments[0][_]=h[_].slice():arguments[0][_]=h[_])}return arguments[0]}var Xl=function(){function l(h){t(this,l);for(var _ in Pn)if(Pn.hasOwnProperty(_)){var y=Pn[_],j=y._driver;this[_]=j,ui[j]||this.defineDriver(y)}this._defaultConfig=to({},Jl),this._config=to({},this._defaultConfig,h),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return l.prototype.config=function(_){if((typeof _>"u"?"undefined":o(_))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var y in _){if(y==="storeName"&&(_[y]=_[y].replace(/\W/g,"_")),y==="version"&&typeof _[y]!="number")return new Error("Database version must be a number.");this._config[y]=_[y]}return"driver"in _&&_.driver?this.setDriver(this._config.driver):!0}else return typeof _=="string"?this._config[_]:this._config},l.prototype.defineDriver=function(_,y,j){var g=new u(function(x,T){try{var N=_._driver,R=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!_._driver){T(R);return}for(var P=oo.concat("_initStorage"),H=0,de=P.length;H<de;H++){var fe=P[H],be=!Yl(Qi,fe);if((be||_[fe])&&typeof _[fe]!="function"){T(R);return}}var Be=function(){for(var li=function(a_){return function(){var n_=new Error("Method "+a_+" is not implemented by the current driver"),gs=u.reject(n_);return c(gs,arguments[arguments.length-1]),gs}},so=0,e_=Qi.length;so<e_;so++){var mo=Qi[so];_[mo]||(_[mo]=li(mo))}};Be();var Fe=function(li){ui[N]&&console.info("Redefining LocalForage driver: "+N),ui[N]=_,hs[N]=li,x()};"_support"in _?_._support&&typeof _._support=="function"?_._support().then(Fe,T):Fe(!!_._support):Fe(!0)}catch(_a){T(_a)}});return b(g,y,j),g},l.prototype.driver=function(){return this._driver||null},l.prototype.getDriver=function(_,y,j){var g=ui[_]?u.resolve(ui[_]):u.reject(new Error("Driver not found."));return b(g,y,j),g},l.prototype.getSerializer=function(_){var y=u.resolve(ia);return b(y,_),y},l.prototype.ready=function(_){var y=this,j=y._driverSet.then(function(){return y._ready===null&&(y._ready=y._initDriver()),y._ready});return b(j,_,_),j},l.prototype.setDriver=function(_,y,j){var g=this;ps(_)||(_=[_]);var x=this._getSupportedDrivers(_);function T(){g._config.driver=g.driver()}function N(H){return g._extend(H),T(),g._ready=g._initStorage(g._config),g._ready}function R(H){return function(){var de=0;function fe(){for(;de<H.length;){var be=H[de];return de++,g._dbInfo=null,g._ready=null,g.getDriver(be).then(N).catch(fe)}T();var Be=new Error("No available storage method found.");return g._driverSet=u.reject(Be),g._driverSet}return fe()}}var P=this._driverSet!==null?this._driverSet.catch(function(){return u.resolve()}):u.resolve();return this._driverSet=P.then(function(){var H=x[0];return g._dbInfo=null,g._ready=null,g.getDriver(H).then(function(de){g._driver=de._driver,T(),g._wrapLibraryMethodsWithReady(),g._initDriver=R(x)})}).catch(function(){T();var H=new Error("No available storage method found.");return g._driverSet=u.reject(H),g._driverSet}),b(this._driverSet,y,j),this._driverSet},l.prototype.supports=function(_){return!!hs[_]},l.prototype._extend=function(_){to(this,_)},l.prototype._getSupportedDrivers=function(_){for(var y=[],j=0,g=_.length;j<g;j++){var x=_[j];this.supports(x)&&y.push(x)}return y},l.prototype._wrapLibraryMethodsWithReady=function(){for(var _=0,y=oo.length;_<y;_++)Ql(this,oo[_])},l.prototype.createInstance=function(_){return new l(_)},l}(),Zl=new Xl;i.exports=Zl},{3:3}]},{},[4])(4)})})(jl);const Hd=jl.exports;const ls=a=>($r("data-v-51baac56"),a=a(),Wr(),a),Kf={class:"grid"},Vf=["onClick"],Yf={class:"kanji"},Gf={key:0},Jf=ls(()=>U("span",{class:"label"},"Kanji: ",-1)),Qf={class:"kana"},Xf={key:0},Zf=ls(()=>U("span",{class:"label"},"Kana: ",-1)),ej={class:"meaning"},aj={key:0,class:"meaning-text"},nj=ls(()=>U("span",{class:"label"},"Meaning: ",-1)),ij={__name:"Words",async setup(a){let e,n,i,r=[];if([e,n]=Fs(()=>Hd.getItem("local_jisho").then(t=>{i=t}).catch(function(t){console.log(t)})),await e,n(),i===null&&([e,n]=Fs(()=>mf(Mj).then(t=>{t.exists()&&(i=t.val(),Hd.setItem("local_jisho",i).then(s=>{console.log(s)}).catch(s=>{console.log(s)}))}).catch(t=>{console.error(t)})),await e,n()),Pe[2].visible){let t=0;r=[];for(let s=0;s<i.words.length;s++)i.words[s].sense[0].gloss[0].text===Re.search&&(r[t]=i.words[s],t++)}for(let t=0;t<qa.length;t++)if(qa[t].visible){let s=0;r=[];for(let d=qa[t].start;d<qa[t].end;d++)r[s]=i.words[d],s++}console.log(r);function o(t){Re.display=!0,Ca.jisho=t,console.log(Ca.jisho)}return(t,s)=>(re(),se("div",Kf,[(re(!0),se(ze,null,Fa(ke(r),d=>(re(),se("div",{class:"word",onClick:m=>o(d)},[U("div",Yf,[(re(!0),se(ze,null,Fa(d.kanji,(m,k)=>(re(),se("div",null,[k===0?(re(),se("span",Gf,[Jf,ma(" "+Oe(m.text),1)])):sa("",!0)]))),256))]),U("div",Qf,[(re(!0),se(ze,null,Fa(d.kana,(m,k)=>(re(),se("div",null,[k===0?(re(),se("span",Xf,[Zf,ma(" "+Oe(m.text),1)])):sa("",!0)]))),256))]),U("div",ej,[(re(!0),se(ze,null,Fa(d.sense,(m,k)=>(re(),se("div",null,[k===0?(re(),se("span",aj,[nj,ma(" "+Oe(m.gloss[0].text),1)])):sa("",!0)]))),256))])],8,Vf))),256))]))}},rj=Da(ij,[["__scopeId","data-v-51baac56"]]);const oj={class:"grid"},tj={class:"label"},sj={class:"label"},dj={class:"label"},mj={__name:"Display",setup(a){window.scrollTo(0,0);let e=Re.title;Re.title=Ca.jisho.kana[0].text;function n(){Re.title=e,Re.display=!1}return(i,r)=>(re(),se("div",oj,[U("span",{class:"back",onClick:n},"\u21A9\uFE0E"),(re(!0),se(ze,null,Fa(ke(Ca).jisho.kanji,(o,t)=>(re(),se("span",null,[U("span",tj,"Kanji "+Oe(t+1)+": ",1),ma(" "+Oe(o.text),1)]))),256)),(re(!0),se(ze,null,Fa(ke(Ca).jisho.kana,(o,t)=>(re(),se("span",null,[U("span",sj,"Kana "+Oe(t+1)+": ",1),ma(" "+Oe(o.text),1)]))),256)),(re(!0),se(ze,null,Fa(ke(Ca).jisho.sense,(o,t)=>(re(),se("span",null,[U("span",dj,"Meaning "+Oe(t+1)+": ",1),ma(" "+Oe(o.gloss[0].text),1)]))),256))]))}},uj=Da(mj,[["__scopeId","data-v-54035edc"]]);const _s=a=>($r("data-v-3edbea6a"),a=a(),Wr(),a),lj={class:"grid"},_j={class:"kanji"},kj={class:"meaning kunyomi"},cj=_s(()=>U("span",{style:{color:"#dc3c44"}},"Kunyomi: ",-1)),pj={class:"meaning onyomi"},hj=_s(()=>U("span",{style:{color:"#dc3c44"}},"Onyomi: ",-1)),gj={class:"meaning sense"},yj=_s(()=>U("span",{style:{color:"#dc3c44"}},"Meaning: ",-1)),fj={__name:"DisplayKanji",setup(a){window.scrollTo(0,0);let e=Re.title;Re.title="Kanji";function n(){Re.title=e,Re.display_kanji=!1}return(i,r)=>(re(),se("div",lj,[U("span",{class:"back",onClick:n},"\u21A9\uFE0E"),U("div",_j,Oe(ke(Ca).kanji.kanji),1),U("span",kj,[cj,ma(" "+Oe(ke(Ca).kanji.kunyomi_ja),1)]),U("span",pj,[hj,ma(" "+Oe(ke(Ca).kanji.onyomi_ja),1)]),U("span",gj,[yj,ma(" "+Oe(ke(Ca).kanji.kmeaning),1)])]))}},jj=Da(fj,[["__scopeId","data-v-3edbea6a"]]);const bj=a=>($r("data-v-bb718566"),a=a(),Wr(),a),vj={class:"header"},wj={class:"grid"},xj={key:0},Cj={key:1},Ej={key:2},Ij={key:3},Tj={key:4},Sj={key:5},Nj={key:6},Rj={key:7},Aj={key:8},zj=bj(()=>U("span",{class:"loading"},"loading...",-1)),Dj={__name:"App",setup(a){function e(){Pe[0].visible=!Pe[0].visible}return(n,i)=>(re(),se(ze,null,[Ae(wf),U("div",vj,[U("span",{class:"burger",onClick:e},Oe(ke(Pe)[0].visible?"\u292B":"="),1),U("span",null,Oe(ke(Re).title),1)]),U("div",wj,[ke(Re).display?(re(),se("div",xj,[Ae(uj)])):sa("",!0),ke(Re).display_kanji?(re(),se("div",Cj,[Ae(jj)])):sa("",!0),ke(Pe)[1].visible?(re(),se("div",Ej,[Ae(Cf)])):sa("",!0),ke(Pe)[2].visible?(re(),se("div",Ij,[Ae(Tf)])):sa("",!0),ke(Pe)[3].visible?(re(),se("div",Tj,[Ae(Nf)])):sa("",!0),ke(Pe)[4].visible?(re(),se("div",Sj,[Ae(Df)])):sa("",!0),ke(Pe)[5].visible?(re(),se("div",Nj,[Ae(Uf)])):sa("",!0),ke(Pe)[6].visible?(re(),se("div",Rj)):sa("",!0),ke(Re).words?(re(),se("div",Aj,[(re(),Nt(tk,null,{fallback:hr(()=>[zj]),default:hr(()=>[Ae(rj)]),_:1}))])):sa("",!0)])],64))}},Pj=Da(Dj,[["__scopeId","data-v-bb718566"]]),Oj={apiKey:"AIzaSyC_nmckRuqsvaOyYwu-RwP82q8f5vFpqLE",authDomain:"japanesejisho.firebaseapp.com",databaseURL:"https://japanesejisho-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"japanesejisho",storageBucket:"japanesejisho.appspot.com",messagingSenderId:"255107822451",appId:"1:255107822451:web:5f719e8be86c97d0478b06"};Yp(Oj);const Mj=df(hf());zc(Pj).mount("#app");