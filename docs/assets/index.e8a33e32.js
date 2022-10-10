(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function ot(a,e){const n=Object.create(null),i=a.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const a_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",n_=ot(a_);function Hd(a){return!!a||a===""}function tt(a){if(ae(a)){const e={};for(let n=0;n<a.length;n++){const i=a[n],r=He(i)?o_(i):tt(i);if(r)for(const o in r)e[o]=r[o]}return e}else{if(He(a))return a;if(Ne(a))return a}}const i_=/;(?![^(]*\))/g,r_=/:(.+)/;function o_(a){const e={};return a.split(i_).forEach(n=>{if(n){const i=n.split(r_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function st(a){let e="";if(He(a))e=a;else if(ae(a))for(let n=0;n<a.length;n++){const i=st(a[n]);i&&(e+=i+" ")}else if(Ne(a))for(const n in a)a[n]&&(e+=n+" ");return e.trim()}const ua=a=>He(a)?a:a==null?"":ae(a)||Ne(a)&&(a.toString===Kd||!re(a.toString))?JSON.stringify(a,$d,2):String(a),$d=(a,e)=>e&&e.__v_isRef?$d(a,e.value):Fn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Ud(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!ae(e)&&!Vd(e)?String(e):e,xe={},Ln=[],wa=()=>{},t_=()=>!1,s_=/^on[^a-z]/,Pr=a=>s_.test(a),dt=a=>a.startsWith("onUpdate:"),Ke=Object.assign,mt=(a,e)=>{const n=a.indexOf(e);n>-1&&a.splice(n,1)},d_=Object.prototype.hasOwnProperty,_e=(a,e)=>d_.call(a,e),ae=Array.isArray,Fn=a=>Dr(a)==="[object Map]",Ud=a=>Dr(a)==="[object Set]",re=a=>typeof a=="function",He=a=>typeof a=="string",ut=a=>typeof a=="symbol",Ne=a=>a!==null&&typeof a=="object",lt=a=>Ne(a)&&re(a.then)&&re(a.catch),Kd=Object.prototype.toString,Dr=a=>Kd.call(a),m_=a=>Dr(a).slice(8,-1),Vd=a=>Dr(a)==="[object Object]",_t=a=>He(a)&&a!=="NaN"&&a[0]!=="-"&&""+parseInt(a,10)===a,tr=ot(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=a=>{const e=Object.create(null);return n=>e[n]||(e[n]=a(n))},u_=/-(\w)/g,Kn=Or(a=>a.replace(u_,(e,n)=>n?n.toUpperCase():"")),l_=/\B([A-Z])/g,Nn=Or(a=>a.replace(l_,"-$1").toLowerCase()),Yd=Or(a=>a.charAt(0).toUpperCase()+a.slice(1)),oo=Or(a=>a?`on${Yd(a)}`:""),lr=(a,e)=>!Object.is(a,e),sr=(a,e)=>{for(let n=0;n<a.length;n++)a[n](e)},_r=(a,e,n)=>{Object.defineProperty(a,e,{configurable:!0,enumerable:!1,value:n})},bi=a=>{const e=parseFloat(a);return isNaN(e)?a:e};let hs;const __=()=>hs||(hs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ia;class k_{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ia&&(this.parent=Ia,this.index=(Ia.scopes||(Ia.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ia;try{return Ia=this,e()}finally{Ia=n}}}on(){Ia=this}off(){Ia=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function c_(a,e=Ia){e&&e.active&&e.effects.push(a)}const kt=a=>{const e=new Set(a);return e.w=0,e.n=0,e},Gd=a=>(a.w&an)>0,Jd=a=>(a.n&an)>0,p_=({deps:a})=>{if(a.length)for(let e=0;e<a.length;e++)a[e].w|=an},h_=a=>{const{deps:e}=a;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Gd(r)&&!Jd(r)?r.delete(a):e[n++]=r,r.w&=~an,r.n&=~an}e.length=n}},Co=new WeakMap;let pi=0,an=1;const Eo=30;let ga;const vn=Symbol(""),Io=Symbol("");class ct{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,c_(this,i)}run(){if(!this.active)return this.fn();let e=ga,n=Ga;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ga,ga=this,Ga=!0,an=1<<++pi,pi<=Eo?p_(this):gs(this),this.fn()}finally{pi<=Eo&&h_(this),an=1<<--pi,ga=this.parent,Ga=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ga===this?this.deferStop=!0:this.active&&(gs(this),this.onStop&&this.onStop(),this.active=!1)}}function gs(a){const{deps:e}=a;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(a);e.length=0}}let Ga=!0;const Qd=[];function Xn(){Qd.push(Ga),Ga=!1}function Zn(){const a=Qd.pop();Ga=a===void 0?!0:a}function sa(a,e,n){if(Ga&&ga){let i=Co.get(a);i||Co.set(a,i=new Map);let r=i.get(n);r||i.set(n,r=kt()),Xd(r)}}function Xd(a,e){let n=!1;pi<=Eo?Jd(a)||(a.n|=an,n=!Gd(a)):n=!a.has(ga),n&&(a.add(ga),ga.deps.push(a))}function Fa(a,e,n,i,r,o){const t=Co.get(a);if(!t)return;let s=[];if(e==="clear")s=[...t.values()];else if(n==="length"&&ae(a))t.forEach((d,m)=>{(m==="length"||m>=i)&&s.push(d)});else switch(n!==void 0&&s.push(t.get(n)),e){case"add":ae(a)?_t(n)&&s.push(t.get("length")):(s.push(t.get(vn)),Fn(a)&&s.push(t.get(Io)));break;case"delete":ae(a)||(s.push(t.get(vn)),Fn(a)&&s.push(t.get(Io)));break;case"set":Fn(a)&&s.push(t.get(vn));break}if(s.length===1)s[0]&&To(s[0]);else{const d=[];for(const m of s)m&&d.push(...m);To(kt(d))}}function To(a,e){const n=ae(a)?a:[...a];for(const i of n)i.computed&&ys(i);for(const i of n)i.computed||ys(i)}function ys(a,e){(a!==ga||a.allowRecurse)&&(a.scheduler?a.scheduler():a.run())}const g_=ot("__proto__,__v_isRef,__isVue"),Zd=new Set(Object.getOwnPropertyNames(Symbol).filter(a=>a!=="arguments"&&a!=="caller").map(a=>Symbol[a]).filter(ut)),y_=pt(),f_=pt(!1,!0),j_=pt(!0),fs=b_();function b_(){const a={};return["includes","indexOf","lastIndexOf"].forEach(e=>{a[e]=function(...n){const i=be(this);for(let o=0,t=this.length;o<t;o++)sa(i,"get",o+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(be)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{a[e]=function(...n){Xn();const i=be(this)[e].apply(this,n);return Zn(),i}}),a}function pt(a=!1,e=!1){return function(i,r,o){if(r==="__v_isReactive")return!a;if(r==="__v_isReadonly")return a;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&o===(a?e?M_:rm:e?im:nm).get(i))return i;const t=ae(i);if(!a&&t&&_e(fs,r))return Reflect.get(fs,r,o);const s=Reflect.get(i,r,o);return(ut(r)?Zd.has(r):g_(r))||(a||sa(i,"get",r),e)?s:Xe(s)?t&&_t(r)?s:s.value:Ne(s)?a?om(s):Ra(s):s}}const v_=em(),w_=em(!0);function em(a=!1){return function(n,i,r,o){let t=n[i];if(vi(t)&&Xe(t)&&!Xe(r))return!1;if(!a&&(!So(r)&&!vi(r)&&(t=be(t),r=be(r)),!ae(n)&&Xe(t)&&!Xe(r)))return t.value=r,!0;const s=ae(n)&&_t(i)?Number(i)<n.length:_e(n,i),d=Reflect.set(n,i,r,o);return n===be(o)&&(s?lr(r,t)&&Fa(n,"set",i,r):Fa(n,"add",i,r)),d}}function x_(a,e){const n=_e(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&n&&Fa(a,"delete",e,void 0),i}function C_(a,e){const n=Reflect.has(a,e);return(!ut(e)||!Zd.has(e))&&sa(a,"has",e),n}function E_(a){return sa(a,"iterate",ae(a)?"length":vn),Reflect.ownKeys(a)}const am={get:y_,set:v_,deleteProperty:x_,has:C_,ownKeys:E_},I_={get:j_,set(a,e){return!0},deleteProperty(a,e){return!0}},T_=Ke({},am,{get:f_,set:w_}),ht=a=>a,Mr=a=>Reflect.getPrototypeOf(a);function Ji(a,e,n=!1,i=!1){a=a.__v_raw;const r=be(a),o=be(e);n||(e!==o&&sa(r,"get",e),sa(r,"get",o));const{has:t}=Mr(r),s=i?ht:n?jt:ft;if(t.call(r,e))return s(a.get(e));if(t.call(r,o))return s(a.get(o));a!==r&&a.get(e)}function Qi(a,e=!1){const n=this.__v_raw,i=be(n),r=be(a);return e||(a!==r&&sa(i,"has",a),sa(i,"has",r)),a===r?n.has(a):n.has(a)||n.has(r)}function Xi(a,e=!1){return a=a.__v_raw,!e&&sa(be(a),"iterate",vn),Reflect.get(a,"size",a)}function js(a){a=be(a);const e=be(this);return Mr(e).has.call(e,a)||(e.add(a),Fa(e,"add",a,a)),this}function bs(a,e){e=be(e);const n=be(this),{has:i,get:r}=Mr(n);let o=i.call(n,a);o||(a=be(a),o=i.call(n,a));const t=r.call(n,a);return n.set(a,e),o?lr(e,t)&&Fa(n,"set",a,e):Fa(n,"add",a,e),this}function vs(a){const e=be(this),{has:n,get:i}=Mr(e);let r=n.call(e,a);r||(a=be(a),r=n.call(e,a)),i&&i.call(e,a);const o=e.delete(a);return r&&Fa(e,"delete",a,void 0),o}function ws(){const a=be(this),e=a.size!==0,n=a.clear();return e&&Fa(a,"clear",void 0,void 0),n}function Zi(a,e){return function(i,r){const o=this,t=o.__v_raw,s=be(t),d=e?ht:a?jt:ft;return!a&&sa(s,"iterate",vn),t.forEach((m,c)=>i.call(r,d(m),d(c),o))}}function er(a,e,n){return function(...i){const r=this.__v_raw,o=be(r),t=Fn(o),s=a==="entries"||a===Symbol.iterator&&t,d=a==="keys"&&t,m=r[a](...i),c=n?ht:e?jt:ft;return!e&&sa(o,"iterate",d?Io:vn),{next(){const{value:u,done:k}=m.next();return k?{value:u,done:k}:{value:s?[c(u[0]),c(u[1])]:c(u),done:k}},[Symbol.iterator](){return this}}}}function Ua(a){return function(...e){return a==="delete"?!1:this}}function S_(){const a={get(o){return Ji(this,o)},get size(){return Xi(this)},has:Qi,add:js,set:bs,delete:vs,clear:ws,forEach:Zi(!1,!1)},e={get(o){return Ji(this,o,!1,!0)},get size(){return Xi(this)},has:Qi,add:js,set:bs,delete:vs,clear:ws,forEach:Zi(!1,!0)},n={get(o){return Ji(this,o,!0)},get size(){return Xi(this,!0)},has(o){return Qi.call(this,o,!0)},add:Ua("add"),set:Ua("set"),delete:Ua("delete"),clear:Ua("clear"),forEach:Zi(!0,!1)},i={get(o){return Ji(this,o,!0,!0)},get size(){return Xi(this,!0)},has(o){return Qi.call(this,o,!0)},add:Ua("add"),set:Ua("set"),delete:Ua("delete"),clear:Ua("clear"),forEach:Zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{a[o]=er(o,!1,!1),n[o]=er(o,!0,!1),e[o]=er(o,!1,!0),i[o]=er(o,!0,!0)}),[a,n,e,i]}const[N_,R_,A_,z_]=S_();function gt(a,e){const n=e?a?z_:A_:a?R_:N_;return(i,r,o)=>r==="__v_isReactive"?!a:r==="__v_isReadonly"?a:r==="__v_raw"?i:Reflect.get(_e(n,r)&&r in i?n:i,r,o)}const P_={get:gt(!1,!1)},D_={get:gt(!1,!0)},O_={get:gt(!0,!1)},nm=new WeakMap,im=new WeakMap,rm=new WeakMap,M_=new WeakMap;function L_(a){switch(a){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function F_(a){return a.__v_skip||!Object.isExtensible(a)?0:L_(m_(a))}function Ra(a){return vi(a)?a:yt(a,!1,am,P_,nm)}function B_(a){return yt(a,!1,T_,D_,im)}function om(a){return yt(a,!0,I_,O_,rm)}function yt(a,e,n,i,r){if(!Ne(a)||a.__v_raw&&!(e&&a.__v_isReactive))return a;const o=r.get(a);if(o)return o;const t=F_(a);if(t===0)return a;const s=new Proxy(a,t===2?i:n);return r.set(a,s),s}function Bn(a){return vi(a)?Bn(a.__v_raw):!!(a&&a.__v_isReactive)}function vi(a){return!!(a&&a.__v_isReadonly)}function So(a){return!!(a&&a.__v_isShallow)}function tm(a){return Bn(a)||vi(a)}function be(a){const e=a&&a.__v_raw;return e?be(e):a}function sm(a){return _r(a,"__v_skip",!0),a}const ft=a=>Ne(a)?Ra(a):a,jt=a=>Ne(a)?om(a):a;function q_(a){Ga&&ga&&(a=be(a),Xd(a.dep||(a.dep=kt())))}function W_(a,e){a=be(a),a.dep&&To(a.dep)}function Xe(a){return!!(a&&a.__v_isRef===!0)}function Se(a){return Xe(a)?a.value:a}const H_={get:(a,e,n)=>Se(Reflect.get(a,e,n)),set:(a,e,n,i)=>{const r=a[e];return Xe(r)&&!Xe(n)?(r.value=n,!0):Reflect.set(a,e,n,i)}};function dm(a){return Bn(a)?a:new Proxy(a,H_)}var mm;class $_{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[mm]=!1,this._dirty=!0,this.effect=new ct(e,()=>{this._dirty||(this._dirty=!0,W_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=be(this);return q_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}mm="__v_isReadonly";function U_(a,e,n=!1){let i,r;const o=re(a);return o?(i=a,r=wa):(i=a.get,r=a.set),new $_(i,r,o||!r,n)}function Ja(a,e,n,i){let r;try{r=i?a(...i):a()}catch(o){Mi(o,e,n)}return r}function _a(a,e,n,i){if(re(a)){const o=Ja(a,e,n,i);return o&&lt(o)&&o.catch(t=>{Mi(t,e,n)}),o}const r=[];for(let o=0;o<a.length;o++)r.push(_a(a[o],e,n,i));return r}function Mi(a,e,n,i=!0){const r=e?e.vnode:null;if(e){let o=e.parent;const t=e.proxy,s=n;for(;o;){const m=o.ec;if(m){for(let c=0;c<m.length;c++)if(m[c](a,t,s)===!1)return}o=o.parent}const d=e.appContext.config.errorHandler;if(d){Ja(d,null,10,[a,t,s]);return}}K_(a,n,r,i)}function K_(a,e,n,i=!0){console.error(a)}let kr=!1,No=!1;const Ye=[];let Sa=0;const qn=[];let Da=null,gn=0;const um=Promise.resolve();let bt=null;function V_(a){const e=bt||um;return a?e.then(this?a.bind(this):a):e}function Y_(a){let e=Sa+1,n=Ye.length;for(;e<n;){const i=e+n>>>1;wi(Ye[i])<a?e=i+1:n=i}return e}function vt(a){(!Ye.length||!Ye.includes(a,kr&&a.allowRecurse?Sa+1:Sa))&&(a.id==null?Ye.push(a):Ye.splice(Y_(a.id),0,a),lm())}function lm(){!kr&&!No&&(No=!0,bt=um.then(cm))}function G_(a){const e=Ye.indexOf(a);e>Sa&&Ye.splice(e,1)}function _m(a){ae(a)?qn.push(...a):(!Da||!Da.includes(a,a.allowRecurse?gn+1:gn))&&qn.push(a),lm()}function xs(a,e=Sa){for(;e<Ye.length;e++){const n=Ye[e];n&&n.pre&&(Ye.splice(e,1),e--,n())}}function km(a){if(qn.length){const e=[...new Set(qn)];if(qn.length=0,Da){Da.push(...e);return}for(Da=e,Da.sort((n,i)=>wi(n)-wi(i)),gn=0;gn<Da.length;gn++)Da[gn]();Da=null,gn=0}}const wi=a=>a.id==null?1/0:a.id,J_=(a,e)=>{const n=wi(a)-wi(e);if(n===0){if(a.pre&&!e.pre)return-1;if(e.pre&&!a.pre)return 1}return n};function cm(a){No=!1,kr=!0,Ye.sort(J_);const e=wa;try{for(Sa=0;Sa<Ye.length;Sa++){const n=Ye[Sa];n&&n.active!==!1&&Ja(n,null,14)}}finally{Sa=0,Ye.length=0,km(),kr=!1,bt=null,(Ye.length||qn.length)&&cm()}}function Q_(a,e,...n){if(a.isUnmounted)return;const i=a.vnode.props||xe;let r=n;const o=e.startsWith("update:"),t=o&&e.slice(7);if(t&&t in i){const c=`${t==="modelValue"?"model":t}Modifiers`,{number:u,trim:k}=i[c]||xe;k&&(r=n.map(b=>b.trim())),u&&(r=n.map(bi))}let s,d=i[s=oo(e)]||i[s=oo(Kn(e))];!d&&o&&(d=i[s=oo(Nn(e))]),d&&_a(d,a,6,r);const m=i[s+"Once"];if(m){if(!a.emitted)a.emitted={};else if(a.emitted[s])return;a.emitted[s]=!0,_a(m,a,6,r)}}function pm(a,e,n=!1){const i=e.emitsCache,r=i.get(a);if(r!==void 0)return r;const o=a.emits;let t={},s=!1;if(!re(a)){const d=m=>{const c=pm(m,e,!0);c&&(s=!0,Ke(t,c))};!n&&e.mixins.length&&e.mixins.forEach(d),a.extends&&d(a.extends),a.mixins&&a.mixins.forEach(d)}return!o&&!s?(Ne(a)&&i.set(a,null),null):(ae(o)?o.forEach(d=>t[d]=null):Ke(t,o),Ne(a)&&i.set(a,t),t)}function Lr(a,e){return!a||!Pr(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(a,e[0].toLowerCase()+e.slice(1))||_e(a,Nn(e))||_e(a,e))}let fa=null,Fr=null;function cr(a){const e=fa;return fa=a,Fr=a&&a.type.__scopeId||null,e}function wt(a){Fr=a}function xt(){Fr=null}function pr(a,e=fa,n){if(!e||a._n)return a;const i=(...r)=>{i._d&&Ds(-1);const o=cr(e),t=a(...r);return cr(o),i._d&&Ds(1),t};return i._n=!0,i._c=!0,i._d=!0,i}function to(a){const{type:e,vnode:n,proxy:i,withProxy:r,props:o,propsOptions:[t],slots:s,attrs:d,emit:m,render:c,renderCache:u,data:k,setupState:b,ctx:w,inheritAttrs:L}=a;let M,K;const F=cr(a);try{if(n.shapeFlag&4){const ne=r||i;M=ha(c.call(ne,ne,u,o,b,k,w)),K=d}else{const ne=e;M=ha(ne.length>1?ne(o,{attrs:d,slots:s,emit:m}):ne(o,null)),K=e.props?d:Z_(d)}}catch(ne){hi.length=0,Mi(ne,a,1),M=Oe(oa)}let U=M;if(K&&L!==!1){const ne=Object.keys(K),{shapeFlag:I}=U;ne.length&&I&7&&(t&&ne.some(dt)&&(K=ek(K,t)),U=nn(U,K))}return n.dirs&&(U=nn(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),M=U,cr(F),M}function X_(a){let e;for(let n=0;n<a.length;n++){const i=a[n];if(yr(i)){if(i.type!==oa||i.children==="v-if"){if(e)return;e=i}}else return}return e}const Z_=a=>{let e;for(const n in a)(n==="class"||n==="style"||Pr(n))&&((e||(e={}))[n]=a[n]);return e},ek=(a,e)=>{const n={};for(const i in a)(!dt(i)||!(i.slice(9)in e))&&(n[i]=a[i]);return n};function ak(a,e,n){const{props:i,children:r,component:o}=a,{props:t,children:s,patchFlag:d}=e,m=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&d>=0){if(d&1024)return!0;if(d&16)return i?Cs(i,t,m):!!t;if(d&8){const c=e.dynamicProps;for(let u=0;u<c.length;u++){const k=c[u];if(t[k]!==i[k]&&!Lr(m,k))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:i===t?!1:i?t?Cs(i,t,m):!0:!!t;return!1}function Cs(a,e,n){const i=Object.keys(e);if(i.length!==Object.keys(a).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==a[o]&&!Lr(n,o))return!0}return!1}function Ct({vnode:a,parent:e},n){for(;e&&e.subTree===a;)(a=e.vnode).el=n,e=e.parent}const nk=a=>a.__isSuspense,ik={name:"Suspense",__isSuspense:!0,process(a,e,n,i,r,o,t,s,d,m){a==null?ok(e,n,i,r,o,t,s,d,m):tk(a,e,n,i,r,t,s,d,m)},hydrate:sk,create:Et,normalize:dk},rk=ik;function xi(a,e){const n=a.props&&a.props[e];re(n)&&n()}function ok(a,e,n,i,r,o,t,s,d){const{p:m,o:{createElement:c}}=d,u=c("div"),k=a.suspense=Et(a,r,i,e,u,n,o,t,s,d);m(null,k.pendingBranch=a.ssContent,u,null,i,k,o,t),k.deps>0?(xi(a,"onPending"),xi(a,"onFallback"),m(null,a.ssFallback,e,n,i,null,o,t),Wn(k,a.ssFallback)):k.resolve()}function tk(a,e,n,i,r,o,t,s,{p:d,um:m,o:{createElement:c}}){const u=e.suspense=a.suspense;u.vnode=e,e.el=a.el;const k=e.ssContent,b=e.ssFallback,{activeBranch:w,pendingBranch:L,isInFallback:M,isHydrating:K}=u;if(L)u.pendingBranch=k,Na(k,L)?(d(L,k,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0?u.resolve():M&&(d(w,b,n,i,r,null,o,t,s),Wn(u,b))):(u.pendingId++,K?(u.isHydrating=!1,u.activeBranch=L):m(L,r,u),u.deps=0,u.effects.length=0,u.hiddenContainer=c("div"),M?(d(null,k,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0?u.resolve():(d(w,b,n,i,r,null,o,t,s),Wn(u,b))):w&&Na(k,w)?(d(w,k,n,i,r,u,o,t,s),u.resolve(!0)):(d(null,k,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0&&u.resolve()));else if(w&&Na(k,w))d(w,k,n,i,r,u,o,t,s),Wn(u,k);else if(xi(e,"onPending"),u.pendingBranch=k,u.pendingId++,d(null,k,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0)u.resolve();else{const{timeout:F,pendingId:U}=u;F>0?setTimeout(()=>{u.pendingId===U&&u.fallback(b)},F):F===0&&u.fallback(b)}}function Et(a,e,n,i,r,o,t,s,d,m,c=!1){const{p:u,m:k,um:b,n:w,o:{parentNode:L,remove:M}}=m,K=bi(a.props&&a.props.timeout),F={vnode:a,parent:e,parentComponent:n,isSVG:t,container:i,hiddenContainer:r,anchor:o,deps:0,pendingId:0,timeout:typeof K=="number"?K:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:c,isUnmounted:!1,effects:[],resolve(U=!1){const{vnode:ne,activeBranch:I,pendingBranch:J,pendingId:G,effects:q,parentComponent:Q,container:ie}=F;if(F.isHydrating)F.isHydrating=!1;else if(!U){const me=I&&J.transition&&J.transition.mode==="out-in";me&&(I.transition.afterLeave=()=>{G===F.pendingId&&k(J,ie,Re,0)});let{anchor:Re}=F;I&&(Re=w(I),b(I,Q,F,!0)),me||k(J,ie,Re,0)}Wn(F,J),F.pendingBranch=null,F.isInFallback=!1;let oe=F.parent,W=!1;for(;oe;){if(oe.pendingBranch){oe.effects.push(...q),W=!0;break}oe=oe.parent}W||_m(q),F.effects=[],xi(ne,"onResolve")},fallback(U){if(!F.pendingBranch)return;const{vnode:ne,activeBranch:I,parentComponent:J,container:G,isSVG:q}=F;xi(ne,"onFallback");const Q=w(I),ie=()=>{!F.isInFallback||(u(null,U,G,Q,J,null,q,s,d),Wn(F,U))},oe=U.transition&&U.transition.mode==="out-in";oe&&(I.transition.afterLeave=ie),F.isInFallback=!0,b(I,J,null,!0),oe||ie()},move(U,ne,I){F.activeBranch&&k(F.activeBranch,U,ne,I),F.container=U},next(){return F.activeBranch&&w(F.activeBranch)},registerDep(U,ne){const I=!!F.pendingBranch;I&&F.deps++;const J=U.vnode.el;U.asyncDep.catch(G=>{Mi(G,U,0)}).then(G=>{if(U.isUnmounted||F.isUnmounted||F.pendingId!==U.suspenseId)return;U.asyncResolved=!0;const{vnode:q}=U;Lo(U,G,!1),J&&(q.el=J);const Q=!J&&U.subTree.el;ne(U,q,L(J||U.subTree.el),J?null:w(U.subTree),F,t,d),Q&&M(Q),Ct(U,q.el),I&&--F.deps===0&&F.resolve()})},unmount(U,ne){F.isUnmounted=!0,F.activeBranch&&b(F.activeBranch,n,U,ne),F.pendingBranch&&b(F.pendingBranch,n,U,ne)}};return F}function sk(a,e,n,i,r,o,t,s,d){const m=e.suspense=Et(e,i,n,a.parentNode,document.createElement("div"),null,r,o,t,s,!0),c=d(a,m.pendingBranch=e.ssContent,n,m,o,t);return m.deps===0&&m.resolve(),c}function dk(a){const{shapeFlag:e,children:n}=a,i=e&32;a.ssContent=Es(i?n.default:n),a.ssFallback=i?Es(n.fallback):Oe(oa)}function Es(a){let e;if(re(a)){const n=Vn&&a._c;n&&(a._d=!1,ke()),a=a(),n&&(a._d=!0,e=la,Pm())}return ae(a)&&(a=X_(a)),a=ha(a),e&&!a.dynamicChildren&&(a.dynamicChildren=e.filter(n=>n!==a)),a}function mk(a,e){e&&e.pendingBranch?ae(a)?e.effects.push(...a):e.effects.push(a):_m(a)}function Wn(a,e){a.activeBranch=e;const{vnode:n,parentComponent:i}=a,r=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=r,Ct(i,r))}function uk(a,e){if(Ue){let n=Ue.provides;const i=Ue.parent&&Ue.parent.provides;i===n&&(n=Ue.provides=Object.create(i)),n[a]=e}}function so(a,e,n=!1){const i=Ue||fa;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&a in r)return r[a];if(arguments.length>1)return n&&re(e)?e.call(i.proxy):e}}const Is={};function mo(a,e,n){return hm(a,e,n)}function hm(a,e,{immediate:n,deep:i,flush:r,onTrack:o,onTrigger:t}=xe){const s=Ue;let d,m=!1,c=!1;if(Xe(a)?(d=()=>a.value,m=So(a)):Bn(a)?(d=()=>a,i=!0):ae(a)?(c=!0,m=a.some(K=>Bn(K)||So(K)),d=()=>a.map(K=>{if(Xe(K))return K.value;if(Bn(K))return jn(K);if(re(K))return Ja(K,s,2)})):re(a)?e?d=()=>Ja(a,s,2):d=()=>{if(!(s&&s.isUnmounted))return u&&u(),_a(a,s,3,[k])}:d=wa,e&&i){const K=d;d=()=>jn(K())}let u,k=K=>{u=M.onStop=()=>{Ja(K,s,4)}};if(Ci)return k=wa,e?n&&_a(e,s,3,[d(),c?[]:void 0,k]):d(),wa;let b=c?[]:Is;const w=()=>{if(!!M.active)if(e){const K=M.run();(i||m||(c?K.some((F,U)=>lr(F,b[U])):lr(K,b)))&&(u&&u(),_a(e,s,3,[K,b===Is?void 0:b,k]),b=K)}else M.run()};w.allowRecurse=!!e;let L;r==="sync"?L=w:r==="post"?L=()=>na(w,s&&s.suspense):(w.pre=!0,s&&(w.id=s.uid),L=()=>vt(w));const M=new ct(d,L);return e?n?w():b=M.run():r==="post"?na(M.run.bind(M),s&&s.suspense):M.run(),()=>{M.stop(),s&&s.scope&&mt(s.scope.effects,M)}}function lk(a,e,n){const i=this.proxy,r=He(a)?a.includes(".")?gm(i,a):()=>i[a]:a.bind(i,i);let o;re(e)?o=e:(o=e.handler,n=e);const t=Ue;rn(this);const s=hm(r,o.bind(i),n);return t?rn(t):Qa(),s}function gm(a,e){const n=e.split(".");return()=>{let i=a;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function jn(a,e){if(!Ne(a)||a.__v_skip||(e=e||new Set,e.has(a)))return a;if(e.add(a),Xe(a))jn(a.value,e);else if(ae(a))for(let n=0;n<a.length;n++)jn(a[n],e);else if(Ud(a)||Fn(a))a.forEach(n=>{jn(n,e)});else if(Vd(a))for(const n in a)jn(a[n],e);return a}function _k(){const a={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vm(()=>{a.isMounted=!0}),wm(()=>{a.isUnmounting=!0}),a}const ma=[Function,Array],kk={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ma,onEnter:ma,onAfterEnter:ma,onEnterCancelled:ma,onBeforeLeave:ma,onLeave:ma,onAfterLeave:ma,onLeaveCancelled:ma,onBeforeAppear:ma,onAppear:ma,onAfterAppear:ma,onAppearCancelled:ma},setup(a,{slots:e}){const n=Mm(),i=_k();let r;return()=>{const o=e.default&&jm(e.default(),!0);if(!o||!o.length)return;let t=o[0];if(o.length>1){for(const L of o)if(L.type!==oa){t=L;break}}const s=be(a),{mode:d}=s;if(i.isLeaving)return uo(t);const m=Ts(t);if(!m)return uo(t);const c=Ro(m,s,i,n);Ao(m,c);const u=n.subTree,k=u&&Ts(u);let b=!1;const{getTransitionKey:w}=m.type;if(w){const L=w();r===void 0?r=L:L!==r&&(r=L,b=!0)}if(k&&k.type!==oa&&(!Na(m,k)||b)){const L=Ro(k,s,i,n);if(Ao(k,L),d==="out-in")return i.isLeaving=!0,L.afterLeave=()=>{i.isLeaving=!1,n.update()},uo(t);d==="in-out"&&m.type!==oa&&(L.delayLeave=(M,K,F)=>{const U=fm(i,k);U[String(k.key)]=k,M._leaveCb=()=>{K(),M._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=F})}return t}}},ym=kk;function fm(a,e){const{leavingVNodes:n}=a;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Ro(a,e,n,i){const{appear:r,mode:o,persisted:t=!1,onBeforeEnter:s,onEnter:d,onAfterEnter:m,onEnterCancelled:c,onBeforeLeave:u,onLeave:k,onAfterLeave:b,onLeaveCancelled:w,onBeforeAppear:L,onAppear:M,onAfterAppear:K,onAppearCancelled:F}=e,U=String(a.key),ne=fm(n,a),I=(q,Q)=>{q&&_a(q,i,9,Q)},J=(q,Q)=>{const ie=Q[1];I(q,Q),ae(q)?q.every(oe=>oe.length<=1)&&ie():q.length<=1&&ie()},G={mode:o,persisted:t,beforeEnter(q){let Q=s;if(!n.isMounted)if(r)Q=L||s;else return;q._leaveCb&&q._leaveCb(!0);const ie=ne[U];ie&&Na(a,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),I(Q,[q])},enter(q){let Q=d,ie=m,oe=c;if(!n.isMounted)if(r)Q=M||d,ie=K||m,oe=F||c;else return;let W=!1;const me=q._enterCb=Re=>{W||(W=!0,Re?I(oe,[q]):I(ie,[q]),G.delayedLeave&&G.delayedLeave(),q._enterCb=void 0)};Q?J(Q,[q,me]):me()},leave(q,Q){const ie=String(a.key);if(q._enterCb&&q._enterCb(!0),n.isUnmounting)return Q();I(u,[q]);let oe=!1;const W=q._leaveCb=me=>{oe||(oe=!0,Q(),me?I(w,[q]):I(b,[q]),q._leaveCb=void 0,ne[ie]===a&&delete ne[ie])};ne[ie]=a,k?J(k,[q,W]):W()},clone(q){return Ro(q,e,n,i)}};return G}function uo(a){if(Br(a))return a=nn(a),a.children=null,a}function Ts(a){return Br(a)?a.children?a.children[0]:void 0:a}function Ao(a,e){a.shapeFlag&6&&a.component?Ao(a.component.subTree,e):a.shapeFlag&128?(a.ssContent.transition=e.clone(a.ssContent),a.ssFallback.transition=e.clone(a.ssFallback)):a.transition=e}function jm(a,e=!1,n){let i=[],r=0;for(let o=0;o<a.length;o++){let t=a[o];const s=n==null?t.key:String(n)+String(t.key!=null?t.key:o);t.type===Me?(t.patchFlag&128&&r++,i=i.concat(jm(t.children,e,s))):(e||t.type!==oa)&&i.push(s!=null?nn(t,{key:s}):t)}if(r>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}const dr=a=>!!a.type.__asyncLoader,Br=a=>a.type.__isKeepAlive;function ck(a,e){bm(a,"a",e)}function pk(a,e){bm(a,"da",e)}function bm(a,e,n=Ue){const i=a.__wdc||(a.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return a()});if(qr(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Br(r.parent.vnode)&&hk(i,e,n,r),r=r.parent}}function hk(a,e,n,i){const r=qr(e,a,i,!0);xm(()=>{mt(i[e],r)},n)}function qr(a,e,n=Ue,i=!1){if(n){const r=n[a]||(n[a]=[]),o=e.__weh||(e.__weh=(...t)=>{if(n.isUnmounted)return;Xn(),rn(n);const s=_a(e,n,a,t);return Qa(),Zn(),s});return i?r.unshift(o):r.push(o),o}}const Ba=a=>(e,n=Ue)=>(!Ci||a==="sp")&&qr(a,e,n),gk=Ba("bm"),vm=Ba("m"),yk=Ba("bu"),fk=Ba("u"),wm=Ba("bum"),xm=Ba("um"),jk=Ba("sp"),bk=Ba("rtg"),vk=Ba("rtc");function wk(a,e=Ue){qr("ec",a,e)}function xk(a,e){const n=fa;if(n===null)return a;const i=Hr(n)||n.proxy,r=a.dirs||(a.dirs=[]);for(let o=0;o<e.length;o++){let[t,s,d,m=xe]=e[o];re(t)&&(t={mounted:t,updated:t}),t.deep&&jn(s),r.push({dir:t,instance:i,value:s,oldValue:void 0,arg:d,modifiers:m})}return a}function un(a,e,n,i){const r=a.dirs,o=e&&e.dirs;for(let t=0;t<r.length;t++){const s=r[t];o&&(s.oldValue=o[t].value);let d=s.dir[i];d&&(Xn(),_a(d,n,8,[a.el,s,a,e]),Zn())}}const Ck=Symbol();function yn(a,e,n,i){let r;const o=n&&n[i];if(ae(a)||He(a)){r=new Array(a.length);for(let t=0,s=a.length;t<s;t++)r[t]=e(a[t],t,void 0,o&&o[t])}else if(typeof a=="number"){r=new Array(a);for(let t=0;t<a;t++)r[t]=e(t+1,t,void 0,o&&o[t])}else if(Ne(a))if(a[Symbol.iterator])r=Array.from(a,(t,s)=>e(t,s,void 0,o&&o[s]));else{const t=Object.keys(a);r=new Array(t.length);for(let s=0,d=t.length;s<d;s++){const m=t[s];r[s]=e(a[m],m,s,o&&o[s])}}else r=[];return n&&(n[i]=r),r}const zo=a=>a?Lm(a)?Hr(a)||a.proxy:zo(a.parent):null,hr=Ke(Object.create(null),{$:a=>a,$el:a=>a.vnode.el,$data:a=>a.data,$props:a=>a.props,$attrs:a=>a.attrs,$slots:a=>a.slots,$refs:a=>a.refs,$parent:a=>zo(a.parent),$root:a=>zo(a.root),$emit:a=>a.emit,$options:a=>Em(a),$forceUpdate:a=>a.f||(a.f=()=>vt(a.update)),$nextTick:a=>a.n||(a.n=V_.bind(a.proxy)),$watch:a=>lk.bind(a)}),Ek={get({_:a},e){const{ctx:n,setupState:i,data:r,props:o,accessCache:t,type:s,appContext:d}=a;let m;if(e[0]!=="$"){const b=t[e];if(b!==void 0)switch(b){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(i!==xe&&_e(i,e))return t[e]=1,i[e];if(r!==xe&&_e(r,e))return t[e]=2,r[e];if((m=a.propsOptions[0])&&_e(m,e))return t[e]=3,o[e];if(n!==xe&&_e(n,e))return t[e]=4,n[e];Po&&(t[e]=0)}}const c=hr[e];let u,k;if(c)return e==="$attrs"&&sa(a,"get",e),c(a);if((u=s.__cssModules)&&(u=u[e]))return u;if(n!==xe&&_e(n,e))return t[e]=4,n[e];if(k=d.config.globalProperties,_e(k,e))return k[e]},set({_:a},e,n){const{data:i,setupState:r,ctx:o}=a;return r!==xe&&_e(r,e)?(r[e]=n,!0):i!==xe&&_e(i,e)?(i[e]=n,!0):_e(a.props,e)||e[0]==="$"&&e.slice(1)in a?!1:(o[e]=n,!0)},has({_:{data:a,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},t){let s;return!!n[t]||a!==xe&&_e(a,t)||e!==xe&&_e(e,t)||(s=o[0])&&_e(s,t)||_e(i,t)||_e(hr,t)||_e(r.config.globalProperties,t)},defineProperty(a,e,n){return n.get!=null?a._.accessCache[e]=0:_e(n,"value")&&this.set(a,e,n.value,null),Reflect.defineProperty(a,e,n)}};let Po=!0;function Ik(a){const e=Em(a),n=a.proxy,i=a.ctx;Po=!1,e.beforeCreate&&Ss(e.beforeCreate,a,"bc");const{data:r,computed:o,methods:t,watch:s,provide:d,inject:m,created:c,beforeMount:u,mounted:k,beforeUpdate:b,updated:w,activated:L,deactivated:M,beforeDestroy:K,beforeUnmount:F,destroyed:U,unmounted:ne,render:I,renderTracked:J,renderTriggered:G,errorCaptured:q,serverPrefetch:Q,expose:ie,inheritAttrs:oe,components:W,directives:me,filters:Re}=e;if(m&&Tk(m,i,null,a.appContext.config.unwrapInjectedRef),t)for(const fe in t){const ve=t[fe];re(ve)&&(i[fe]=ve.bind(n))}if(r){const fe=r.call(n,n);Ne(fe)&&(a.data=Ra(fe))}if(Po=!0,o)for(const fe in o){const ve=o[fe],ca=re(ve)?ve.bind(n,n):re(ve.get)?ve.get.bind(n,n):wa,ii=!re(ve)&&re(ve.set)?ve.set.bind(n):wa,Ge=ec({get:ca,set:ii});Object.defineProperty(i,fe,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Aa=>Ge.value=Aa})}if(s)for(const fe in s)Cm(s[fe],i,n,fe);if(d){const fe=re(d)?d.call(n):d;Reflect.ownKeys(fe).forEach(ve=>{uk(ve,fe[ve])})}c&&Ss(c,a,"c");function Pe(fe,ve){ae(ve)?ve.forEach(ca=>fe(ca.bind(n))):ve&&fe(ve.bind(n))}if(Pe(gk,u),Pe(vm,k),Pe(yk,b),Pe(fk,w),Pe(ck,L),Pe(pk,M),Pe(wk,q),Pe(vk,J),Pe(bk,G),Pe(wm,F),Pe(xm,ne),Pe(jk,Q),ae(ie))if(ie.length){const fe=a.exposed||(a.exposed={});ie.forEach(ve=>{Object.defineProperty(fe,ve,{get:()=>n[ve],set:ca=>n[ve]=ca})})}else a.exposed||(a.exposed={});I&&a.render===wa&&(a.render=I),oe!=null&&(a.inheritAttrs=oe),W&&(a.components=W),me&&(a.directives=me)}function Tk(a,e,n=wa,i=!1){ae(a)&&(a=Do(a));for(const r in a){const o=a[r];let t;Ne(o)?"default"in o?t=so(o.from||r,o.default,!0):t=so(o.from||r):t=so(o),Xe(t)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.value,set:s=>t.value=s}):e[r]=t}}function Ss(a,e,n){_a(ae(a)?a.map(i=>i.bind(e.proxy)):a.bind(e.proxy),e,n)}function Cm(a,e,n,i){const r=i.includes(".")?gm(n,i):()=>n[i];if(He(a)){const o=e[a];re(o)&&mo(r,o)}else if(re(a))mo(r,a.bind(n));else if(Ne(a))if(ae(a))a.forEach(o=>Cm(o,e,n,i));else{const o=re(a.handler)?a.handler.bind(n):e[a.handler];re(o)&&mo(r,o,a)}}function Em(a){const e=a.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:t}}=a.appContext,s=o.get(e);let d;return s?d=s:!r.length&&!n&&!i?d=e:(d={},r.length&&r.forEach(m=>gr(d,m,t,!0)),gr(d,e,t)),Ne(e)&&o.set(e,d),d}function gr(a,e,n,i=!1){const{mixins:r,extends:o}=e;o&&gr(a,o,n,!0),r&&r.forEach(t=>gr(a,t,n,!0));for(const t in e)if(!(i&&t==="expose")){const s=Sk[t]||n&&n[t];a[t]=s?s(a[t],e[t]):e[t]}return a}const Sk={data:Ns,props:cn,emits:cn,methods:cn,computed:cn,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:cn,directives:cn,watch:Rk,provide:Ns,inject:Nk};function Ns(a,e){return e?a?function(){return Ke(re(a)?a.call(this,this):a,re(e)?e.call(this,this):e)}:e:a}function Nk(a,e){return cn(Do(a),Do(e))}function Do(a){if(ae(a)){const e={};for(let n=0;n<a.length;n++)e[a[n]]=a[n];return e}return a}function Qe(a,e){return a?[...new Set([].concat(a,e))]:e}function cn(a,e){return a?Ke(Ke(Object.create(null),a),e):e}function Rk(a,e){if(!a)return e;if(!e)return a;const n=Ke(Object.create(null),a);for(const i in e)n[i]=Qe(a[i],e[i]);return n}function Ak(a,e,n,i=!1){const r={},o={};_r(o,Wr,1),a.propsDefaults=Object.create(null),Im(a,e,r,o);for(const t in a.propsOptions[0])t in r||(r[t]=void 0);n?a.props=i?r:B_(r):a.type.props?a.props=r:a.props=o,a.attrs=o}function zk(a,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:t}}=a,s=be(r),[d]=a.propsOptions;let m=!1;if((i||t>0)&&!(t&16)){if(t&8){const c=a.vnode.dynamicProps;for(let u=0;u<c.length;u++){let k=c[u];if(Lr(a.emitsOptions,k))continue;const b=e[k];if(d)if(_e(o,k))b!==o[k]&&(o[k]=b,m=!0);else{const w=Kn(k);r[w]=Oo(d,s,w,b,a,!1)}else b!==o[k]&&(o[k]=b,m=!0)}}}else{Im(a,e,r,o)&&(m=!0);let c;for(const u in s)(!e||!_e(e,u)&&((c=Nn(u))===u||!_e(e,c)))&&(d?n&&(n[u]!==void 0||n[c]!==void 0)&&(r[u]=Oo(d,s,u,void 0,a,!0)):delete r[u]);if(o!==s)for(const u in o)(!e||!_e(e,u)&&!0)&&(delete o[u],m=!0)}m&&Fa(a,"set","$attrs")}function Im(a,e,n,i){const[r,o]=a.propsOptions;let t=!1,s;if(e)for(let d in e){if(tr(d))continue;const m=e[d];let c;r&&_e(r,c=Kn(d))?!o||!o.includes(c)?n[c]=m:(s||(s={}))[c]=m:Lr(a.emitsOptions,d)||(!(d in i)||m!==i[d])&&(i[d]=m,t=!0)}if(o){const d=be(n),m=s||xe;for(let c=0;c<o.length;c++){const u=o[c];n[u]=Oo(r,d,u,m[u],a,!_e(m,u))}}return t}function Oo(a,e,n,i,r,o){const t=a[n];if(t!=null){const s=_e(t,"default");if(s&&i===void 0){const d=t.default;if(t.type!==Function&&re(d)){const{propsDefaults:m}=r;n in m?i=m[n]:(rn(r),i=m[n]=d.call(null,e),Qa())}else i=d}t[0]&&(o&&!s?i=!1:t[1]&&(i===""||i===Nn(n))&&(i=!0))}return i}function Tm(a,e,n=!1){const i=e.propsCache,r=i.get(a);if(r)return r;const o=a.props,t={},s=[];let d=!1;if(!re(a)){const c=u=>{d=!0;const[k,b]=Tm(u,e,!0);Ke(t,k),b&&s.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(c),a.extends&&c(a.extends),a.mixins&&a.mixins.forEach(c)}if(!o&&!d)return Ne(a)&&i.set(a,Ln),Ln;if(ae(o))for(let c=0;c<o.length;c++){const u=Kn(o[c]);Rs(u)&&(t[u]=xe)}else if(o)for(const c in o){const u=Kn(c);if(Rs(u)){const k=o[c],b=t[u]=ae(k)||re(k)?{type:k}:k;if(b){const w=Ps(Boolean,b.type),L=Ps(String,b.type);b[0]=w>-1,b[1]=L<0||w<L,(w>-1||_e(b,"default"))&&s.push(u)}}}const m=[t,s];return Ne(a)&&i.set(a,m),m}function Rs(a){return a[0]!=="$"}function As(a){const e=a&&a.toString().match(/^\s*function (\w+)/);return e?e[1]:a===null?"null":""}function zs(a,e){return As(a)===As(e)}function Ps(a,e){return ae(e)?e.findIndex(n=>zs(n,a)):re(e)&&zs(e,a)?0:-1}const Sm=a=>a[0]==="_"||a==="$stable",It=a=>ae(a)?a.map(ha):[ha(a)],Pk=(a,e,n)=>{if(e._n)return e;const i=pr((...r)=>It(e(...r)),n);return i._c=!1,i},Nm=(a,e,n)=>{const i=a._ctx;for(const r in a){if(Sm(r))continue;const o=a[r];if(re(o))e[r]=Pk(r,o,i);else if(o!=null){const t=It(o);e[r]=()=>t}}},Rm=(a,e)=>{const n=It(e);a.slots.default=()=>n},Dk=(a,e)=>{if(a.vnode.shapeFlag&32){const n=e._;n?(a.slots=be(e),_r(e,"_",n)):Nm(e,a.slots={})}else a.slots={},e&&Rm(a,e);_r(a.slots,Wr,1)},Ok=(a,e,n)=>{const{vnode:i,slots:r}=a;let o=!0,t=xe;if(i.shapeFlag&32){const s=e._;s?n&&s===1?o=!1:(Ke(r,e),!n&&s===1&&delete r._):(o=!e.$stable,Nm(e,r)),t=e}else e&&(Rm(a,e),t={default:1});if(o)for(const s in r)!Sm(s)&&!(s in t)&&delete r[s]};function Am(){return{app:null,config:{isNativeTag:t_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mk=0;function Lk(a,e){return function(i,r=null){re(i)||(i=Object.assign({},i)),r!=null&&!Ne(r)&&(r=null);const o=Am(),t=new Set;let s=!1;const d=o.app={_uid:Mk++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:nc,get config(){return o.config},set config(m){},use(m,...c){return t.has(m)||(m&&re(m.install)?(t.add(m),m.install(d,...c)):re(m)&&(t.add(m),m(d,...c))),d},mixin(m){return o.mixins.includes(m)||o.mixins.push(m),d},component(m,c){return c?(o.components[m]=c,d):o.components[m]},directive(m,c){return c?(o.directives[m]=c,d):o.directives[m]},mount(m,c,u){if(!s){const k=Oe(i,r);return k.appContext=o,c&&e?e(k,m):a(k,m,u),s=!0,d._container=m,m.__vue_app__=d,Hr(k.component)||k.component.proxy}},unmount(){s&&(a(null,d._container),delete d._container.__vue_app__)},provide(m,c){return o.provides[m]=c,d}};return d}}function Mo(a,e,n,i,r=!1){if(ae(a)){a.forEach((k,b)=>Mo(k,e&&(ae(e)?e[b]:e),n,i,r));return}if(dr(i)&&!r)return;const o=i.shapeFlag&4?Hr(i.component)||i.component.proxy:i.el,t=r?null:o,{i:s,r:d}=a,m=e&&e.r,c=s.refs===xe?s.refs={}:s.refs,u=s.setupState;if(m!=null&&m!==d&&(He(m)?(c[m]=null,_e(u,m)&&(u[m]=null)):Xe(m)&&(m.value=null)),re(d))Ja(d,s,12,[t,c]);else{const k=He(d),b=Xe(d);if(k||b){const w=()=>{if(a.f){const L=k?c[d]:d.value;r?ae(L)&&mt(L,o):ae(L)?L.includes(o)||L.push(o):k?(c[d]=[o],_e(u,d)&&(u[d]=c[d])):(d.value=[o],a.k&&(c[a.k]=d.value))}else k?(c[d]=t,_e(u,d)&&(u[d]=t)):b&&(d.value=t,a.k&&(c[a.k]=t))};t?(w.id=-1,na(w,n)):w()}}}const na=mk;function Fk(a){return Bk(a)}function Bk(a,e){const n=__();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:t,createText:s,createComment:d,setText:m,setElementText:c,parentNode:u,nextSibling:k,setScopeId:b=wa,cloneNode:w,insertStaticContent:L}=a,M=(p,f,v,E=null,C=null,z=null,B=!1,A=null,O=!!f.dynamicChildren)=>{if(p===f)return;p&&!Na(p,f)&&(E=An(p),Ca(p,C,z,!0),p=null),f.patchFlag===-2&&(O=!1,f.dynamicChildren=null);const{type:S,ref:V,shapeFlag:H}=f;switch(S){case Tt:K(p,f,v,E);break;case oa:F(p,f,v,E);break;case lo:p==null&&U(f,v,E,B);break;case Me:me(p,f,v,E,C,z,B,A,O);break;default:H&1?J(p,f,v,E,C,z,B,A,O):H&6?Re(p,f,v,E,C,z,B,A,O):(H&64||H&128)&&S.process(p,f,v,E,C,z,B,A,O,Ha)}V!=null&&C&&Mo(V,p&&p.ref,z,f||p,!f)},K=(p,f,v,E)=>{if(p==null)i(f.el=s(f.children),v,E);else{const C=f.el=p.el;f.children!==p.children&&m(C,f.children)}},F=(p,f,v,E)=>{p==null?i(f.el=d(f.children||""),v,E):f.el=p.el},U=(p,f,v,E)=>{[p.el,p.anchor]=L(p.children,f,v,E,p.el,p.anchor)},ne=({el:p,anchor:f},v,E)=>{let C;for(;p&&p!==f;)C=k(p),i(p,v,E),p=C;i(f,v,E)},I=({el:p,anchor:f})=>{let v;for(;p&&p!==f;)v=k(p),r(p),p=v;r(f)},J=(p,f,v,E,C,z,B,A,O)=>{B=B||f.type==="svg",p==null?G(f,v,E,C,z,B,A,O):ie(p,f,C,z,B,A,O)},G=(p,f,v,E,C,z,B,A)=>{let O,S;const{type:V,props:H,shapeFlag:Y,transition:ee,patchFlag:ue,dirs:pe}=p;if(p.el&&w!==void 0&&ue===-1)O=p.el=w(p.el);else{if(O=p.el=t(p.type,z,H&&H.is,H),Y&8?c(O,p.children):Y&16&&Q(p.children,O,null,E,C,z&&V!=="foreignObject",B,A),pe&&un(p,null,E,"created"),H){for(const we in H)we!=="value"&&!tr(we)&&o(O,we,null,H[we],z,p.children,E,C,pa);"value"in H&&o(O,"value",null,H.value),(S=H.onVnodeBeforeMount)&&Ea(S,E,p)}q(O,p,p.scopeId,B,E)}pe&&un(p,null,E,"beforeMount");const he=(!C||C&&!C.pendingBranch)&&ee&&!ee.persisted;he&&ee.beforeEnter(O),i(O,f,v),((S=H&&H.onVnodeMounted)||he||pe)&&na(()=>{S&&Ea(S,E,p),he&&ee.enter(O),pe&&un(p,null,E,"mounted")},C)},q=(p,f,v,E,C)=>{if(v&&b(p,v),E)for(let z=0;z<E.length;z++)b(p,E[z]);if(C){let z=C.subTree;if(f===z){const B=C.vnode;q(p,B,B.scopeId,B.slotScopeIds,C.parent)}}},Q=(p,f,v,E,C,z,B,A,O=0)=>{for(let S=O;S<p.length;S++){const V=p[S]=A?Ya(p[S]):ha(p[S]);M(null,V,f,v,E,C,z,B,A)}},ie=(p,f,v,E,C,z,B)=>{const A=f.el=p.el;let{patchFlag:O,dynamicChildren:S,dirs:V}=f;O|=p.patchFlag&16;const H=p.props||xe,Y=f.props||xe;let ee;v&&ln(v,!1),(ee=Y.onVnodeBeforeUpdate)&&Ea(ee,v,f,p),V&&un(f,p,v,"beforeUpdate"),v&&ln(v,!0);const ue=C&&f.type!=="foreignObject";if(S?oe(p.dynamicChildren,S,A,v,E,ue,z):B||ca(p,f,A,null,v,E,ue,z,!1),O>0){if(O&16)W(A,f,H,Y,v,E,C);else if(O&2&&H.class!==Y.class&&o(A,"class",null,Y.class,C),O&4&&o(A,"style",H.style,Y.style,C),O&8){const pe=f.dynamicProps;for(let he=0;he<pe.length;he++){const we=pe[he],ea=H[we],za=Y[we];(za!==ea||we==="value")&&o(A,we,ea,za,C,p.children,v,E,pa)}}O&1&&p.children!==f.children&&c(A,f.children)}else!B&&S==null&&W(A,f,H,Y,v,E,C);((ee=Y.onVnodeUpdated)||V)&&na(()=>{ee&&Ea(ee,v,f,p),V&&un(f,p,v,"updated")},E)},oe=(p,f,v,E,C,z,B)=>{for(let A=0;A<f.length;A++){const O=p[A],S=f[A],V=O.el&&(O.type===Me||!Na(O,S)||O.shapeFlag&70)?u(O.el):v;M(O,S,V,null,E,C,z,B,!0)}},W=(p,f,v,E,C,z,B)=>{if(v!==E){for(const A in E){if(tr(A))continue;const O=E[A],S=v[A];O!==S&&A!=="value"&&o(p,A,S,O,B,f.children,C,z,pa)}if(v!==xe)for(const A in v)!tr(A)&&!(A in E)&&o(p,A,v[A],null,B,f.children,C,z,pa);"value"in E&&o(p,"value",v.value,E.value)}},me=(p,f,v,E,C,z,B,A,O)=>{const S=f.el=p?p.el:s(""),V=f.anchor=p?p.anchor:s("");let{patchFlag:H,dynamicChildren:Y,slotScopeIds:ee}=f;ee&&(A=A?A.concat(ee):ee),p==null?(i(S,v,E),i(V,v,E),Q(f.children,v,V,C,z,B,A,O)):H>0&&H&64&&Y&&p.dynamicChildren?(oe(p.dynamicChildren,Y,v,C,z,B,A),(f.key!=null||C&&f===C.subTree)&&zm(p,f,!0)):ca(p,f,v,V,C,z,B,A,O)},Re=(p,f,v,E,C,z,B,A,O)=>{f.slotScopeIds=A,p==null?f.shapeFlag&512?C.ctx.activate(f,v,E,B,O):ka(f,v,E,C,z,B,O):Pe(p,f,O)},ka=(p,f,v,E,C,z,B)=>{const A=p.component=Yk(p,E,C);if(Br(p)&&(A.ctx.renderer=Ha),Gk(A),A.asyncDep){if(C&&C.registerDep(A,fe),!p.el){const O=A.subTree=Oe(oa);F(null,O,f,v)}return}fe(A,p,f,v,C,z,B)},Pe=(p,f,v)=>{const E=f.component=p.component;if(ak(p,f,v))if(E.asyncDep&&!E.asyncResolved){ve(E,f,v);return}else E.next=f,G_(E.update),E.update();else f.el=p.el,E.vnode=f},fe=(p,f,v,E,C,z,B)=>{const A=()=>{if(p.isMounted){let{next:V,bu:H,u:Y,parent:ee,vnode:ue}=p,pe=V,he;ln(p,!1),V?(V.el=ue.el,ve(p,V,B)):V=ue,H&&sr(H),(he=V.props&&V.props.onVnodeBeforeUpdate)&&Ea(he,ee,V,ue),ln(p,!0);const we=to(p),ea=p.subTree;p.subTree=we,M(ea,we,u(ea.el),An(ea),p,C,z),V.el=we.el,pe===null&&Ct(p,we.el),Y&&na(Y,C),(he=V.props&&V.props.onVnodeUpdated)&&na(()=>Ea(he,ee,V,ue),C)}else{let V;const{el:H,props:Y}=f,{bm:ee,m:ue,parent:pe}=p,he=dr(f);if(ln(p,!1),ee&&sr(ee),!he&&(V=Y&&Y.onVnodeBeforeMount)&&Ea(V,pe,f),ln(p,!0),H&&oi){const we=()=>{p.subTree=to(p),oi(H,p.subTree,p,C,null)};he?f.type.__asyncLoader().then(()=>!p.isUnmounted&&we()):we()}else{const we=p.subTree=to(p);M(null,we,v,E,p,C,z),f.el=we.el}if(ue&&na(ue,C),!he&&(V=Y&&Y.onVnodeMounted)){const we=f;na(()=>Ea(V,pe,we),C)}(f.shapeFlag&256||pe&&dr(pe.vnode)&&pe.vnode.shapeFlag&256)&&p.a&&na(p.a,C),p.isMounted=!0,f=v=E=null}},O=p.effect=new ct(A,()=>vt(S),p.scope),S=p.update=()=>O.run();S.id=p.uid,ln(p,!0),S()},ve=(p,f,v)=>{f.component=p;const E=p.vnode.props;p.vnode=f,p.next=null,zk(p,f.props,E,v),Ok(p,f.children,v),Xn(),xs(),Zn()},ca=(p,f,v,E,C,z,B,A,O=!1)=>{const S=p&&p.children,V=p?p.shapeFlag:0,H=f.children,{patchFlag:Y,shapeFlag:ee}=f;if(Y>0){if(Y&128){Ge(S,H,v,E,C,z,B,A,O);return}else if(Y&256){ii(S,H,v,E,C,z,B,A,O);return}}ee&8?(V&16&&pa(S,C,z),H!==S&&c(v,H)):V&16?ee&16?Ge(S,H,v,E,C,z,B,A,O):pa(S,C,z,!0):(V&8&&c(v,""),ee&16&&Q(H,v,E,C,z,B,A,O))},ii=(p,f,v,E,C,z,B,A,O)=>{p=p||Ln,f=f||Ln;const S=p.length,V=f.length,H=Math.min(S,V);let Y;for(Y=0;Y<H;Y++){const ee=f[Y]=O?Ya(f[Y]):ha(f[Y]);M(p[Y],ee,v,null,C,z,B,A,O)}S>V?pa(p,C,z,!0,!1,H):Q(f,v,E,C,z,B,A,O,H)},Ge=(p,f,v,E,C,z,B,A,O)=>{let S=0;const V=f.length;let H=p.length-1,Y=V-1;for(;S<=H&&S<=Y;){const ee=p[S],ue=f[S]=O?Ya(f[S]):ha(f[S]);if(Na(ee,ue))M(ee,ue,v,null,C,z,B,A,O);else break;S++}for(;S<=H&&S<=Y;){const ee=p[H],ue=f[Y]=O?Ya(f[Y]):ha(f[Y]);if(Na(ee,ue))M(ee,ue,v,null,C,z,B,A,O);else break;H--,Y--}if(S>H){if(S<=Y){const ee=Y+1,ue=ee<V?f[ee].el:E;for(;S<=Y;)M(null,f[S]=O?Ya(f[S]):ha(f[S]),v,ue,C,z,B,A,O),S++}}else if(S>Y)for(;S<=H;)Ca(p[S],C,z,!0),S++;else{const ee=S,ue=S,pe=new Map;for(S=ue;S<=Y;S++){const Je=f[S]=O?Ya(f[S]):ha(f[S]);Je.key!=null&&pe.set(Je.key,S)}let he,we=0;const ea=Y-ue+1;let za=!1,ti=0;const Pa=new Array(ea);for(S=0;S<ea;S++)Pa[S]=0;for(S=ee;S<=H;S++){const Je=p[S];if(we>=ea){Ca(Je,C,z,!0);continue}let aa;if(Je.key!=null)aa=pe.get(Je.key);else for(he=ue;he<=Y;he++)if(Pa[he-ue]===0&&Na(Je,f[he])){aa=he;break}aa===void 0?Ca(Je,C,z,!0):(Pa[aa-ue]=S+1,aa>=ti?ti=aa:za=!0,M(Je,f[aa],v,null,C,z,B,A,O),we++)}const Yi=za?qk(Pa):Ln;for(he=Yi.length-1,S=ea-1;S>=0;S--){const Je=ue+S,aa=f[Je],si=Je+1<V?f[Je+1].el:E;Pa[S]===0?M(null,aa,v,si,C,z,B,A,O):za&&(he<0||S!==Yi[he]?Aa(aa,v,si,2):he--)}}},Aa=(p,f,v,E,C=null)=>{const{el:z,type:B,transition:A,children:O,shapeFlag:S}=p;if(S&6){Aa(p.component.subTree,f,v,E);return}if(S&128){p.suspense.move(f,v,E);return}if(S&64){B.move(p,f,v,Ha);return}if(B===Me){i(z,f,v);for(let H=0;H<O.length;H++)Aa(O[H],f,v,E);i(p.anchor,f,v);return}if(B===lo){ne(p,f,v);return}if(E!==2&&S&1&&A)if(E===0)A.beforeEnter(z),i(z,f,v),na(()=>A.enter(z),C);else{const{leave:H,delayLeave:Y,afterLeave:ee}=A,ue=()=>i(z,f,v),pe=()=>{H(z,()=>{ue(),ee&&ee()})};Y?Y(z,ue,pe):pe()}else i(z,f,v)},Ca=(p,f,v,E=!1,C=!1)=>{const{type:z,props:B,ref:A,children:O,dynamicChildren:S,shapeFlag:V,patchFlag:H,dirs:Y}=p;if(A!=null&&Mo(A,null,v,p,!0),V&256){f.ctx.deactivate(p);return}const ee=V&1&&Y,ue=!dr(p);let pe;if(ue&&(pe=B&&B.onVnodeBeforeUnmount)&&Ea(pe,f,p),V&6)eo(p.component,v,E);else{if(V&128){p.suspense.unmount(v,E);return}ee&&un(p,null,f,"beforeUnmount"),V&64?p.type.remove(p,f,v,C,Ha,E):S&&(z!==Me||H>0&&H&64)?pa(S,f,v,!1,!0):(z===Me&&H&384||!C&&V&16)&&pa(O,f,v),E&&Ki(p)}(ue&&(pe=B&&B.onVnodeUnmounted)||ee)&&na(()=>{pe&&Ea(pe,f,p),ee&&un(p,null,f,"unmounted")},v)},Ki=p=>{const{type:f,el:v,anchor:E,transition:C}=p;if(f===Me){Zr(v,E);return}if(f===lo){I(p);return}const z=()=>{r(v),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:B,delayLeave:A}=C,O=()=>B(v,z);A?A(p.el,z,O):O()}else z()},Zr=(p,f)=>{let v;for(;p!==f;)v=k(p),r(p),p=v;r(f)},eo=(p,f,v)=>{const{bum:E,scope:C,update:z,subTree:B,um:A}=p;E&&sr(E),C.stop(),z&&(z.active=!1,Ca(B,p,f,v)),A&&na(A,f),na(()=>{p.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},pa=(p,f,v,E=!1,C=!1,z=0)=>{for(let B=z;B<p.length;B++)Ca(p[B],f,v,E,C)},An=p=>p.shapeFlag&6?An(p.component.subTree):p.shapeFlag&128?p.suspense.next():k(p.anchor||p.el),Vi=(p,f,v)=>{p==null?f._vnode&&Ca(f._vnode,null,null,!0):M(f._vnode||null,p,f,null,null,null,v),xs(),km(),f._vnode=p},Ha={p:M,um:Ca,m:Aa,r:Ki,mt:ka,mc:Q,pc:ca,pbc:oe,n:An,o:a};let ri,oi;return e&&([ri,oi]=e(Ha)),{render:Vi,hydrate:ri,createApp:Lk(Vi,ri)}}function ln({effect:a,update:e},n){a.allowRecurse=e.allowRecurse=n}function zm(a,e,n=!1){const i=a.children,r=e.children;if(ae(i)&&ae(r))for(let o=0;o<i.length;o++){const t=i[o];let s=r[o];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[o]=Ya(r[o]),s.el=t.el),n||zm(t,s))}}function qk(a){const e=a.slice(),n=[0];let i,r,o,t,s;const d=a.length;for(i=0;i<d;i++){const m=a[i];if(m!==0){if(r=n[n.length-1],a[r]<m){e[i]=r,n.push(i);continue}for(o=0,t=n.length-1;o<t;)s=o+t>>1,a[n[s]]<m?o=s+1:t=s;m<a[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,t=n[o-1];o-- >0;)n[o]=t,t=e[t];return n}const Wk=a=>a.__isTeleport,Me=Symbol(void 0),Tt=Symbol(void 0),oa=Symbol(void 0),lo=Symbol(void 0),hi=[];let la=null;function ke(a=!1){hi.push(la=a?null:[])}function Pm(){hi.pop(),la=hi[hi.length-1]||null}let Vn=1;function Ds(a){Vn+=a}function Dm(a){return a.dynamicChildren=Vn>0?la||Ln:null,Pm(),Vn>0&&la&&la.push(a),a}function ye(a,e,n,i,r,o){return Dm(X(a,e,n,i,r,o,!0))}function St(a,e,n,i,r){return Dm(Oe(a,e,n,i,r,!0))}function yr(a){return a?a.__v_isVNode===!0:!1}function Na(a,e){return a.type===e.type&&a.key===e.key}const Wr="__vInternal",Om=({key:a})=>a!=null?a:null,mr=({ref:a,ref_key:e,ref_for:n})=>a!=null?He(a)||Xe(a)||re(a)?{i:fa,r:a,k:e,f:!!n}:a:null;function X(a,e=null,n=null,i=0,r=null,o=a===Me?0:1,t=!1,s=!1){const d={__v_isVNode:!0,__v_skip:!0,type:a,props:e,key:e&&Om(e),ref:e&&mr(e),scopeId:Fr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return s?(Nt(d,n),o&128&&a.normalize(d)):n&&(d.shapeFlag|=He(n)?8:16),Vn>0&&!t&&la&&(d.patchFlag>0||o&6)&&d.patchFlag!==32&&la.push(d),d}const Oe=Hk;function Hk(a,e=null,n=null,i=0,r=null,o=!1){if((!a||a===Ck)&&(a=oa),yr(a)){const s=nn(a,e,!0);return n&&Nt(s,n),Vn>0&&!o&&la&&(s.shapeFlag&6?la[la.indexOf(a)]=s:la.push(s)),s.patchFlag|=-2,s}if(Zk(a)&&(a=a.__vccOpts),e){e=$k(e);let{class:s,style:d}=e;s&&!He(s)&&(e.class=st(s)),Ne(d)&&(tm(d)&&!ae(d)&&(d=Ke({},d)),e.style=tt(d))}const t=He(a)?1:nk(a)?128:Wk(a)?64:Ne(a)?4:re(a)?2:0;return X(a,e,n,i,r,t,o,!0)}function $k(a){return a?tm(a)||Wr in a?Ke({},a):a:null}function nn(a,e,n=!1){const{props:i,ref:r,patchFlag:o,children:t}=a,s=e?Uk(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:a.type,props:s,key:s&&Om(s),ref:e&&e.ref?n&&r?ae(r)?r.concat(mr(e)):[r,mr(e)]:mr(e):r,scopeId:a.scopeId,slotScopeIds:a.slotScopeIds,children:t,target:a.target,targetAnchor:a.targetAnchor,staticCount:a.staticCount,shapeFlag:a.shapeFlag,patchFlag:e&&a.type!==Me?o===-1?16:o|16:o,dynamicProps:a.dynamicProps,dynamicChildren:a.dynamicChildren,appContext:a.appContext,dirs:a.dirs,transition:a.transition,component:a.component,suspense:a.suspense,ssContent:a.ssContent&&nn(a.ssContent),ssFallback:a.ssFallback&&nn(a.ssFallback),el:a.el,anchor:a.anchor}}function ur(a=" ",e=0){return Oe(Tt,null,a,e)}function Ta(a="",e=!1){return e?(ke(),St(oa,null,a)):Oe(oa,null,a)}function ha(a){return a==null||typeof a=="boolean"?Oe(oa):ae(a)?Oe(Me,null,a.slice()):typeof a=="object"?Ya(a):Oe(Tt,null,String(a))}function Ya(a){return a.el===null||a.memo?a:nn(a)}function Nt(a,e){let n=0;const{shapeFlag:i}=a;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Nt(a,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Wr in e)?e._ctx=fa:r===3&&fa&&(fa.slots._===1?e._=1:(e._=2,a.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:fa},n=32):(e=String(e),i&64?(n=16,e=[ur(e)]):n=8);a.children=e,a.shapeFlag|=n}function Uk(...a){const e={};for(let n=0;n<a.length;n++){const i=a[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=st([e.class,i.class]));else if(r==="style")e.style=tt([e.style,i.style]);else if(Pr(r)){const o=e[r],t=i[r];t&&o!==t&&!(ae(o)&&o.includes(t))&&(e[r]=o?[].concat(o,t):t)}else r!==""&&(e[r]=i[r])}return e}function Ea(a,e,n,i=null){_a(a,e,7,[n,i])}const Kk=Am();let Vk=0;function Yk(a,e,n){const i=a.type,r=(e?e.appContext:a.appContext)||Kk,o={uid:Vk++,vnode:a,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new k_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tm(i,r),emitsOptions:pm(i,r),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:i.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Q_.bind(null,o),a.ce&&a.ce(o),o}let Ue=null;const Mm=()=>Ue||fa,rn=a=>{Ue=a,a.scope.on()},Qa=()=>{Ue&&Ue.scope.off(),Ue=null};function Lm(a){return a.vnode.shapeFlag&4}let Ci=!1;function Gk(a,e=!1){Ci=e;const{props:n,children:i}=a.vnode,r=Lm(a);Ak(a,n,r,e),Dk(a,i);const o=r?Jk(a,e):void 0;return Ci=!1,o}function Jk(a,e){const n=a.type;a.accessCache=Object.create(null),a.proxy=sm(new Proxy(a.ctx,Ek));const{setup:i}=n;if(i){const r=a.setupContext=i.length>1?Xk(a):null;rn(a),Xn();const o=Ja(i,a,0,[a.props,r]);if(Zn(),Qa(),lt(o)){if(o.then(Qa,Qa),e)return o.then(t=>{Lo(a,t,e)}).catch(t=>{Mi(t,a,0)});a.asyncDep=o}else Lo(a,o,e)}else Fm(a,e)}function Lo(a,e,n){re(e)?a.type.__ssrInlineRender?a.ssrRender=e:a.render=e:Ne(e)&&(a.setupState=dm(e)),Fm(a,n)}let Os;function Fm(a,e,n){const i=a.type;if(!a.render){if(!e&&Os&&!i.render){const r=i.template;if(r){const{isCustomElement:o,compilerOptions:t}=a.appContext.config,{delimiters:s,compilerOptions:d}=i,m=Ke(Ke({isCustomElement:o,delimiters:s},t),d);i.render=Os(r,m)}}a.render=i.render||wa}rn(a),Xn(),Ik(a),Zn(),Qa()}function Qk(a){return new Proxy(a.attrs,{get(e,n){return sa(a,"get","$attrs"),e[n]}})}function Xk(a){const e=i=>{a.exposed=i||{}};let n;return{get attrs(){return n||(n=Qk(a))},slots:a.slots,emit:a.emit,expose:e}}function Hr(a){if(a.exposed)return a.exposeProxy||(a.exposeProxy=new Proxy(dm(sm(a.exposed)),{get(e,n){if(n in e)return e[n];if(n in hr)return hr[n](a)}}))}function Zk(a){return re(a)&&"__vccOpts"in a}const ec=(a,e)=>U_(a,e,Ci);function Ms(a){const e=Mm();let n=a();return Qa(),lt(n)&&(n=n.catch(i=>{throw rn(e),i})),[n,()=>rn(e)]}function ac(a,e,n){const i=arguments.length;return i===2?Ne(e)&&!ae(e)?yr(e)?Oe(a,null,[e]):Oe(a,e):Oe(a,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&yr(n)&&(n=[n]),Oe(a,e,n))}const nc="3.2.38",ic="http://www.w3.org/2000/svg",fn=typeof document<"u"?document:null,Ls=fn&&fn.createElement("template"),rc={insert:(a,e,n)=>{e.insertBefore(a,n||null)},remove:a=>{const e=a.parentNode;e&&e.removeChild(a)},createElement:(a,e,n,i)=>{const r=e?fn.createElementNS(ic,a):fn.createElement(a,n?{is:n}:void 0);return a==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:a=>fn.createTextNode(a),createComment:a=>fn.createComment(a),setText:(a,e)=>{a.nodeValue=e},setElementText:(a,e)=>{a.textContent=e},parentNode:a=>a.parentNode,nextSibling:a=>a.nextSibling,querySelector:a=>fn.querySelector(a),setScopeId(a,e){a.setAttribute(e,"")},cloneNode(a){const e=a.cloneNode(!0);return"_value"in a&&(e._value=a._value),e},insertStaticContent(a,e,n,i,r,o){const t=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Ls.innerHTML=i?`<svg>${a}</svg>`:a;const s=Ls.content;if(i){const d=s.firstChild;for(;d.firstChild;)s.appendChild(d.firstChild);s.removeChild(d)}e.insertBefore(s,n)}return[t?t.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function oc(a,e,n){const i=a._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?a.removeAttribute("class"):n?a.setAttribute("class",e):a.className=e}function tc(a,e,n){const i=a.style,r=He(n);if(n&&!r){for(const o in n)Fo(i,o,n[o]);if(e&&!He(e))for(const o in e)n[o]==null&&Fo(i,o,"")}else{const o=i.display;r?e!==n&&(i.cssText=n):e&&a.removeAttribute("style"),"_vod"in a&&(i.display=o)}}const Fs=/\s*!important$/;function Fo(a,e,n){if(ae(n))n.forEach(i=>Fo(a,e,i));else if(n==null&&(n=""),e.startsWith("--"))a.setProperty(e,n);else{const i=sc(a,e);Fs.test(n)?a.setProperty(Nn(i),n.replace(Fs,""),"important"):a[i]=n}}const Bs=["Webkit","Moz","ms"],_o={};function sc(a,e){const n=_o[e];if(n)return n;let i=Kn(e);if(i!=="filter"&&i in a)return _o[e]=i;i=Yd(i);for(let r=0;r<Bs.length;r++){const o=Bs[r]+i;if(o in a)return _o[e]=o}return e}const qs="http://www.w3.org/1999/xlink";function dc(a,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?a.removeAttributeNS(qs,e.slice(6,e.length)):a.setAttributeNS(qs,e,n);else{const o=n_(e);n==null||o&&!Hd(n)?a.removeAttribute(e):a.setAttribute(e,o?"":n)}}function mc(a,e,n,i,r,o,t){if(e==="innerHTML"||e==="textContent"){i&&t(i,r,o),a[e]=n==null?"":n;return}if(e==="value"&&a.tagName!=="PROGRESS"&&!a.tagName.includes("-")){a._value=n;const d=n==null?"":n;(a.value!==d||a.tagName==="OPTION")&&(a.value=d),n==null&&a.removeAttribute(e);return}let s=!1;if(n===""||n==null){const d=typeof a[e];d==="boolean"?n=Hd(n):n==null&&d==="string"?(n="",s=!0):d==="number"&&(n=0,s=!0)}try{a[e]=n}catch{}s&&a.removeAttribute(e)}const[Bm,uc]=(()=>{let a=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(a=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[a,e]})();let Bo=0;const lc=Promise.resolve(),_c=()=>{Bo=0},kc=()=>Bo||(lc.then(_c),Bo=Bm());function Dn(a,e,n,i){a.addEventListener(e,n,i)}function cc(a,e,n,i){a.removeEventListener(e,n,i)}function pc(a,e,n,i,r=null){const o=a._vei||(a._vei={}),t=o[e];if(i&&t)t.value=i;else{const[s,d]=hc(e);if(i){const m=o[e]=gc(i,r);Dn(a,s,m,d)}else t&&(cc(a,s,t,d),o[e]=void 0)}}const Ws=/(?:Once|Passive|Capture)$/;function hc(a){let e;if(Ws.test(a)){e={};let i;for(;i=a.match(Ws);)a=a.slice(0,a.length-i[0].length),e[i[0].toLowerCase()]=!0}return[a[2]===":"?a.slice(3):Nn(a.slice(2)),e]}function gc(a,e){const n=i=>{const r=i.timeStamp||Bm();(uc||r>=n.attached-1)&&_a(yc(i,n.value),e,5,[i])};return n.value=a,n.attached=kc(),n}function yc(a,e){if(ae(e)){const n=a.stopImmediatePropagation;return a.stopImmediatePropagation=()=>{n.call(a),a._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Hs=/^on[a-z]/,fc=(a,e,n,i,r=!1,o,t,s,d)=>{e==="class"?oc(a,i,r):e==="style"?tc(a,n,i):Pr(e)?dt(e)||pc(a,e,n,i,t):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jc(a,e,i,r))?mc(a,e,i,o,t,s,d):(e==="true-value"?a._trueValue=i:e==="false-value"&&(a._falseValue=i),dc(a,e,i,r))};function jc(a,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in a&&Hs.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&a.tagName==="INPUT"||e==="type"&&a.tagName==="TEXTAREA"||Hs.test(e)&&He(n)?!1:e in a}const Ka="transition",ui="animation",Rt=(a,{slots:e})=>ac(ym,bc(a),e);Rt.displayName="Transition";const qm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Rt.props=Ke({},ym.props,qm);const _n=(a,e=[])=>{ae(a)?a.forEach(n=>n(...e)):a&&a(...e)},$s=a=>a?ae(a)?a.some(e=>e.length>1):a.length>1:!1;function bc(a){const e={};for(const W in a)W in qm||(e[W]=a[W]);if(a.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:t=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:d=o,appearActiveClass:m=t,appearToClass:c=s,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:k=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=a,w=vc(r),L=w&&w[0],M=w&&w[1],{onBeforeEnter:K,onEnter:F,onEnterCancelled:U,onLeave:ne,onLeaveCancelled:I,onBeforeAppear:J=K,onAppear:G=F,onAppearCancelled:q=U}=e,Q=(W,me,Re)=>{kn(W,me?c:s),kn(W,me?m:t),Re&&Re()},ie=(W,me)=>{W._isLeaving=!1,kn(W,u),kn(W,b),kn(W,k),me&&me()},oe=W=>(me,Re)=>{const ka=W?G:F,Pe=()=>Q(me,W,Re);_n(ka,[me,Pe]),Us(()=>{kn(me,W?d:o),Va(me,W?c:s),$s(ka)||Ks(me,i,L,Pe)})};return Ke(e,{onBeforeEnter(W){_n(K,[W]),Va(W,o),Va(W,t)},onBeforeAppear(W){_n(J,[W]),Va(W,d),Va(W,m)},onEnter:oe(!1),onAppear:oe(!0),onLeave(W,me){W._isLeaving=!0;const Re=()=>ie(W,me);Va(W,u),Cc(),Va(W,k),Us(()=>{!W._isLeaving||(kn(W,u),Va(W,b),$s(ne)||Ks(W,i,M,Re))}),_n(ne,[W,Re])},onEnterCancelled(W){Q(W,!1),_n(U,[W])},onAppearCancelled(W){Q(W,!0),_n(q,[W])},onLeaveCancelled(W){ie(W),_n(I,[W])}})}function vc(a){if(a==null)return null;if(Ne(a))return[ko(a.enter),ko(a.leave)];{const e=ko(a);return[e,e]}}function ko(a){return bi(a)}function Va(a,e){e.split(/\s+/).forEach(n=>n&&a.classList.add(n)),(a._vtc||(a._vtc=new Set)).add(e)}function kn(a,e){e.split(/\s+/).forEach(i=>i&&a.classList.remove(i));const{_vtc:n}=a;n&&(n.delete(e),n.size||(a._vtc=void 0))}function Us(a){requestAnimationFrame(()=>{requestAnimationFrame(a)})}let wc=0;function Ks(a,e,n,i){const r=a._endId=++wc,o=()=>{r===a._endId&&i()};if(n)return setTimeout(o,n);const{type:t,timeout:s,propCount:d}=xc(a,e);if(!t)return i();const m=t+"end";let c=0;const u=()=>{a.removeEventListener(m,k),o()},k=b=>{b.target===a&&++c>=d&&u()};setTimeout(()=>{c<d&&u()},s+1),a.addEventListener(m,k)}function xc(a,e){const n=window.getComputedStyle(a),i=w=>(n[w]||"").split(", "),r=i(Ka+"Delay"),o=i(Ka+"Duration"),t=Vs(r,o),s=i(ui+"Delay"),d=i(ui+"Duration"),m=Vs(s,d);let c=null,u=0,k=0;e===Ka?t>0&&(c=Ka,u=t,k=o.length):e===ui?m>0&&(c=ui,u=m,k=d.length):(u=Math.max(t,m),c=u>0?t>m?Ka:ui:null,k=c?c===Ka?o.length:d.length:0);const b=c===Ka&&/\b(transform|all)(,|$)/.test(n[Ka+"Property"]);return{type:c,timeout:u,propCount:k,hasTransform:b}}function Vs(a,e){for(;a.length<e.length;)a=a.concat(a);return Math.max(...e.map((n,i)=>Ys(n)+Ys(a[i])))}function Ys(a){return Number(a.slice(0,-1).replace(",","."))*1e3}function Cc(){return document.body.offsetHeight}const Gs=a=>{const e=a.props["onUpdate:modelValue"]||!1;return ae(e)?n=>sr(e,n):e};function Ec(a){a.target.composing=!0}function Js(a){const e=a.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ic={created(a,{modifiers:{lazy:e,trim:n,number:i}},r){a._assign=Gs(r);const o=i||r.props&&r.props.type==="number";Dn(a,e?"change":"input",t=>{if(t.target.composing)return;let s=a.value;n&&(s=s.trim()),o&&(s=bi(s)),a._assign(s)}),n&&Dn(a,"change",()=>{a.value=a.value.trim()}),e||(Dn(a,"compositionstart",Ec),Dn(a,"compositionend",Js),Dn(a,"change",Js))},mounted(a,{value:e}){a.value=e==null?"":e},beforeUpdate(a,{value:e,modifiers:{lazy:n,trim:i,number:r}},o){if(a._assign=Gs(o),a.composing||document.activeElement===a&&a.type!=="range"&&(n||i&&a.value.trim()===e||(r||a.type==="number")&&bi(a.value)===e))return;const t=e==null?"":e;a.value!==t&&(a.value=t)}},Tc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Qs=(a,e)=>n=>{if(!("key"in n))return;const i=Nn(n.key);if(e.some(r=>r===i||Tc[r]===i))return a(n)},Sc=Ke({patchProp:fc},rc);let Xs;function Nc(){return Xs||(Xs=Fk(Sc))}const Rc=(...a)=>{const e=Nc().createApp(...a),{mount:n}=e;return e.mount=i=>{const r=Ac(i);if(!r)return;const o=e._component;!re(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const t=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),t},e};function Ac(a){return He(a)?document.querySelector(a):a}/**
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
 */const Wm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(a,e){if(!a)throw ei(e)},ei=function(a){return new Error("Firebase Database ("+Wm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};/**
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
 */const Hm=function(a){const e=[];let n=0;for(let i=0;i<a.length;i++){let r=a.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<a.length&&(a.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(a.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},zc=function(a){const e=[];let n=0,i=0;for(;n<a.length;){const r=a[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=a[n++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=a[n++],t=a[n++],s=a[n++],d=((r&7)<<18|(o&63)<<12|(t&63)<<6|s&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const o=a[n++],t=a[n++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|t&63)}}return e.join("")},At={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<a.length;r+=3){const o=a[r],t=r+1<a.length,s=t?a[r+1]:0,d=r+2<a.length,m=d?a[r+2]:0,c=o>>2,u=(o&3)<<4|s>>4;let k=(s&15)<<2|m>>6,b=m&63;d||(b=64,t||(k=64)),i.push(n[c],n[u],n[k],n[b])}return i.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(Hm(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):zc(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<a.length;){const o=n[a.charAt(r++)],s=r<a.length?n[a.charAt(r)]:0;++r;const m=r<a.length?n[a.charAt(r)]:64;++r;const u=r<a.length?n[a.charAt(r)]:64;if(++r,o==null||s==null||m==null||u==null)throw Error();const k=o<<2|s>>4;if(i.push(k),m!==64){const b=s<<4&240|m>>2;if(i.push(b),u!==64){const w=m<<6&192|u;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}},$m=function(a){const e=Hm(a);return At.encodeByteArray(e,!0)},Um=function(a){return $m(a).replace(/\./g,"")},Zs=function(a){try{return At.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pc(a){return Km(void 0,a)}function Km(a,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:a===void 0&&(a={});break;case Array:a=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Dc(n)||(a[n]=Km(a[n],e[n]));return a}function Dc(a){return a!=="__proto__"}/**
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
 */class zt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Oc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oc())}function Mc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ym(){return Wm.NODE_ADMIN===!0}function Lc(){return typeof indexedDB=="object"}function Fc(){return new Promise((a,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),a(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const Bc="FirebaseError";class Li extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Bc,Object.setPrototypeOf(this,Li.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gm.prototype.create)}}class Gm{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],t=o?qc(o,i):"Error",s=`${this.serviceName}: ${t} (${r}).`;return new Li(r,s,i)}}function qc(a,e){return a.replace(Wc,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Wc=/\{\$([^}]+)}/g;/**
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
 */function Ei(a){return JSON.parse(a)}function Fe(a){return JSON.stringify(a)}/**
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
 */const Jm=function(a){let e={},n={},i={},r="";try{const o=a.split(".");e=Ei(Zs(o[0])||""),n=Ei(Zs(o[1])||""),r=o[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},Hc=function(a){const e=Jm(a),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$c=function(a){const e=Jm(a).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function qa(a,e){return Object.prototype.hasOwnProperty.call(a,e)}function Yn(a,e){if(Object.prototype.hasOwnProperty.call(a,e))return a[e]}function ed(a){for(const e in a)if(Object.prototype.hasOwnProperty.call(a,e))return!1;return!0}function fr(a,e,n){const i={};for(const r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i[r]=e.call(n,a[r],r,a));return i}function qo(a,e){if(a===e)return!0;const n=Object.keys(a),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const o=a[r],t=e[r];if(ad(o)&&ad(t)){if(!qo(o,t))return!1}else if(o!==t)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function ad(a){return a!==null&&typeof a=="object"}/**
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
 */function Uc(a){const e=[];for(const[n,i]of Object.entries(a))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Kc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const k=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(k<<1|k>>>31)&4294967295}let r=this.chain_[0],o=this.chain_[1],t=this.chain_[2],s=this.chain_[3],d=this.chain_[4],m,c;for(let u=0;u<80;u++){u<40?u<20?(m=s^o&(t^s),c=1518500249):(m=o^t^s,c=1859775393):u<60?(m=o&t|s&(o|t),c=2400959708):(m=o^t^s,c=3395469782);const k=(r<<5|r>>>27)+m+d+c+i[u]&4294967295;d=s,s=t,t=(o<<30|o>>>2)&4294967295,o=r,r=k}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+t&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const o=this.buf_;let t=this.inbuf_;for(;r<n;){if(t===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(o[t]=e.charCodeAt(r),++t,++r,t===this.blockSize){this.compress_(o),t=0;break}}else for(;r<n;)if(o[t]=e[r],++t,++r,t===this.blockSize){this.compress_(o),t=0;break}}this.inbuf_=t,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[r]>>o&255,++i;return e}}function Qm(a,e){return`${a} failed: ${e} argument `}/**
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
 */const Vc=function(a){const e=[];let n=0;for(let i=0;i<a.length;i++){let r=a.charCodeAt(i);if(r>=55296&&r<=56319){const o=r-55296;i++,P(i<a.length,"Surrogate pair missing trail surrogate.");const t=a.charCodeAt(i)-56320;r=65536+(o<<10)+t}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},$r=function(a){let e=0;for(let n=0;n<a.length;n++){const i=a.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ur(a){return a&&a._delegate?a._delegate:a}class Ii{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pn="[DEFAULT]";/**
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
 */class Yc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new zt;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jc(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,t]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);i===s&&t.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const t=this.instances.get(r);return t&&e(t,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Gc(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gc(a){return a===pn?void 0:a}function Jc(a){return a.instantiationMode==="EAGER"}/**
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
 */class Qc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Ee||(Ee={}));const Xc={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Zc=Ee.INFO,ep={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},ap=(a,e,...n)=>{if(e<a.logLevel)return;const i=new Date().toISOString(),r=ep[e];if(r)console[r](`[${i}]  ${a.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xm{constructor(e){this.name=e,this._logLevel=Zc,this._logHandler=ap,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const np=(a,e)=>e.some(n=>a instanceof n);let nd,id;function ip(){return nd||(nd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rp(){return id||(id=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zm=new WeakMap,Wo=new WeakMap,eu=new WeakMap,co=new WeakMap,Pt=new WeakMap;function op(a){const e=new Promise((n,i)=>{const r=()=>{a.removeEventListener("success",o),a.removeEventListener("error",t)},o=()=>{n(Xa(a.result)),r()},t=()=>{i(a.error),r()};a.addEventListener("success",o),a.addEventListener("error",t)});return e.then(n=>{n instanceof IDBCursor&&Zm.set(n,a)}).catch(()=>{}),Pt.set(e,a),e}function tp(a){if(Wo.has(a))return;const e=new Promise((n,i)=>{const r=()=>{a.removeEventListener("complete",o),a.removeEventListener("error",t),a.removeEventListener("abort",t)},o=()=>{n(),r()},t=()=>{i(a.error||new DOMException("AbortError","AbortError")),r()};a.addEventListener("complete",o),a.addEventListener("error",t),a.addEventListener("abort",t)});Wo.set(a,e)}let Ho={get(a,e,n){if(a instanceof IDBTransaction){if(e==="done")return Wo.get(a);if(e==="objectStoreNames")return a.objectStoreNames||eu.get(a);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xa(a[e])},set(a,e,n){return a[e]=n,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function sp(a){Ho=a(Ho)}function dp(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=a.call(po(this),e,...n);return eu.set(i,e.sort?e.sort():[e]),Xa(i)}:rp().includes(a)?function(...e){return a.apply(po(this),e),Xa(Zm.get(this))}:function(...e){return Xa(a.apply(po(this),e))}}function mp(a){return typeof a=="function"?dp(a):(a instanceof IDBTransaction&&tp(a),np(a,ip())?new Proxy(a,Ho):a)}function Xa(a){if(a instanceof IDBRequest)return op(a);if(co.has(a))return co.get(a);const e=mp(a);return e!==a&&(co.set(a,e),Pt.set(e,a)),e}const po=a=>Pt.get(a);function up(a,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const t=indexedDB.open(a,e),s=Xa(t);return i&&t.addEventListener("upgradeneeded",d=>{i(Xa(t.result),d.oldVersion,d.newVersion,Xa(t.transaction))}),n&&t.addEventListener("blocked",()=>n()),s.then(d=>{o&&d.addEventListener("close",()=>o()),r&&d.addEventListener("versionchange",()=>r())}).catch(()=>{}),s}const lp=["get","getKey","getAll","getAllKeys","count"],_p=["put","add","delete","clear"],ho=new Map;function rd(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(ho.get(e))return ho.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=_p.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||lp.includes(n)))return;const o=async function(t,...s){const d=this.transaction(t,r?"readwrite":"readonly");let m=d.store;return i&&(m=m.index(s.shift())),(await Promise.all([m[n](...s),r&&d.done]))[0]};return ho.set(e,o),o}sp(a=>({...a,get:(e,n,i)=>rd(e,n)||a.get(e,n,i),has:(e,n)=>!!rd(e,n)||a.has(e,n)}));/**
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
 */class kp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cp(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function cp(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $o="@firebase/app",od="0.7.32";/**
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
 */const xn=new Xm("@firebase/app"),pp="@firebase/app-compat",hp="@firebase/analytics-compat",gp="@firebase/analytics",yp="@firebase/app-check-compat",fp="@firebase/app-check",jp="@firebase/auth",bp="@firebase/auth-compat",vp="@firebase/database",wp="@firebase/database-compat",xp="@firebase/functions",Cp="@firebase/functions-compat",Ep="@firebase/installations",Ip="@firebase/installations-compat",Tp="@firebase/messaging",Sp="@firebase/messaging-compat",Np="@firebase/performance",Rp="@firebase/performance-compat",Ap="@firebase/remote-config",zp="@firebase/remote-config-compat",Pp="@firebase/storage",Dp="@firebase/storage-compat",Op="@firebase/firestore",Mp="@firebase/firestore-compat",Lp="firebase",Fp="9.9.4";/**
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
 */const au="[DEFAULT]",Bp={[$o]:"fire-core",[pp]:"fire-core-compat",[gp]:"fire-analytics",[hp]:"fire-analytics-compat",[fp]:"fire-app-check",[yp]:"fire-app-check-compat",[jp]:"fire-auth",[bp]:"fire-auth-compat",[vp]:"fire-rtdb",[wp]:"fire-rtdb-compat",[xp]:"fire-fn",[Cp]:"fire-fn-compat",[Ep]:"fire-iid",[Ip]:"fire-iid-compat",[Tp]:"fire-fcm",[Sp]:"fire-fcm-compat",[Np]:"fire-perf",[Rp]:"fire-perf-compat",[Ap]:"fire-rc",[zp]:"fire-rc-compat",[Pp]:"fire-gcs",[Dp]:"fire-gcs-compat",[Op]:"fire-fst",[Mp]:"fire-fst-compat","fire-js":"fire-js",[Lp]:"fire-js-all"};/**
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
 */const jr=new Map,Uo=new Map;function qp(a,e){try{a.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,n)}}function br(a){const e=a.name;if(Uo.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Uo.set(e,a);for(const n of jr.values())qp(n,a);return!0}function Wp(a,e){const n=a.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),a.container.getProvider(e)}/**
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
 */const Hp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cn=new Gm("app","Firebase",Hp);/**
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
 */class $p{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Up=Fp;function Kp(a,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:au,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Cn.create("bad-app-name",{appName:String(i)});const r=jr.get(i);if(r){if(qo(a,r.options)&&qo(n,r.config))return r;throw Cn.create("duplicate-app",{appName:i})}const o=new Qc(i);for(const s of Uo.values())o.addComponent(s);const t=new $p(a,n,o);return jr.set(i,t),t}function Vp(a=au){const e=jr.get(a);if(!e)throw Cn.create("no-app",{appName:a});return e}function Hn(a,e,n){var i;let r=(i=Bp[a])!==null&&i!==void 0?i:a;n&&(r+=`-${n}`);const o=r.match(/\s|\//),t=e.match(/\s|\//);if(o||t){const s=[`Unable to register library "${r}" with version "${e}":`];o&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&t&&s.push("and"),t&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(s.join(" "));return}br(new Ii(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Yp="firebase-heartbeat-database",Gp=1,Ti="firebase-heartbeat-store";let go=null;function nu(){return go||(go=up(Yp,Gp,{upgrade:(a,e)=>{switch(e){case 0:a.createObjectStore(Ti)}}}).catch(a=>{throw Cn.create("idb-open",{originalErrorMessage:a.message})})),go}async function Jp(a){var e;try{return(await nu()).transaction(Ti).objectStore(Ti).get(iu(a))}catch(n){if(n instanceof Li)xn.warn(n.message);else{const i=Cn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});xn.warn(i.message)}}}async function td(a,e){var n;try{const r=(await nu()).transaction(Ti,"readwrite");return await r.objectStore(Ti).put(e,iu(a)),r.done}catch(i){if(i instanceof Li)xn.warn(i.message);else{const r=Cn.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});xn.warn(r.message)}}}function iu(a){return`${a.name}!${a.options.appId}`}/**
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
 */const Qp=1024,Xp=30*24*60*60*1e3;class Zp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ah(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Xp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sd(),{heartbeatsToSend:n,unsentEntries:i}=eh(this._heartbeatsCache.heartbeats),r=Um(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function sd(){return new Date().toISOString().substring(0,10)}function eh(a,e=Qp){const n=[];let i=a.slice();for(const r of a){const o=n.find(t=>t.agent===r.agent);if(o){if(o.dates.push(r.date),dd(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),dd(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ah{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lc()?Fc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Jp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function dd(a){return Um(JSON.stringify({version:2,heartbeats:a})).length}/**
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
 */function nh(a){br(new Ii("platform-logger",e=>new kp(e),"PRIVATE")),br(new Ii("heartbeat",e=>new Zp(e),"PRIVATE")),Hn($o,od,a),Hn($o,od,"esm2017"),Hn("fire-js","")}nh("");var ih="firebase",rh="9.9.4";/**
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
 */Hn(ih,rh,"app");const md="@firebase/database",ud="0.13.6";/**
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
 */let ru="";function oh(a){ru=a}/**
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
 */class th{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ei(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class sh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return qa(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ou=function(a){try{if(typeof window<"u"&&typeof window[a]<"u"){const e=window[a];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new th(e)}}catch{}return new sh},bn=ou("localStorage"),Ko=ou("sessionStorage");/**
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
 */const $n=new Xm("@firebase/database"),dh=function(){let a=1;return function(){return a++}}(),tu=function(a){const e=Vc(a),n=new Kc;n.update(e);const i=n.digest();return At.encodeByteArray(i)},Fi=function(...a){let e="";for(let n=0;n<a.length;n++){const i=a[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Fi.apply(null,i):typeof i=="object"?e+=Fe(i):e+=i,e+=" "}return e};let wn=null,ld=!0;const mh=function(a,e){P(!e||a===!0||a===!1,"Can't turn on custom loggers persistently."),a===!0?($n.logLevel=Ee.VERBOSE,wn=$n.log.bind($n),e&&Ko.set("logging_enabled",!0)):typeof a=="function"?wn=a:(wn=null,Ko.remove("logging_enabled"))},Ve=function(...a){if(ld===!0&&(ld=!1,wn===null&&Ko.get("logging_enabled")===!0&&mh(!0)),wn){const e=Fi.apply(null,a);wn(e)}},Bi=function(a){return function(...e){Ve(a,...e)}},Vo=function(...a){const e="FIREBASE INTERNAL ERROR: "+Fi(...a);$n.error(e)},En=function(...a){const e=`FIREBASE FATAL ERROR: ${Fi(...a)}`;throw $n.error(e),new Error(e)},ta=function(...a){const e="FIREBASE WARNING: "+Fi(...a);$n.warn(e)},uh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ta("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},su=function(a){return typeof a=="number"&&(a!==a||a===Number.POSITIVE_INFINITY||a===Number.NEGATIVE_INFINITY)},lh=function(a){if(document.readyState==="complete")a();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,a())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gn="[MIN_NAME]",In="[MAX_NAME]",ai=function(a,e){if(a===e)return 0;if(a===Gn||e===In)return-1;if(e===Gn||a===In)return 1;{const n=_d(a),i=_d(e);return n!==null?i!==null?n-i===0?a.length-e.length:n-i:-1:i!==null?1:a<e?-1:1}},_h=function(a,e){return a===e?0:a<e?-1:1},li=function(a,e){if(e&&a in e)return e[a];throw new Error("Missing required key ("+a+") in object: "+Fe(e))},Dt=function(a){if(typeof a!="object"||a===null)return Fe(a);const e=[];for(const i in a)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Fe(e[i]),n+=":",n+=Dt(a[e[i]]);return n+="}",n},du=function(a,e){const n=a.length;if(n<=e)return[a];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(a.substring(r,n)):i.push(a.substring(r,r+e));return i};function ra(a,e){for(const n in a)a.hasOwnProperty(n)&&e(n,a[n])}const mu=function(a){P(!su(a),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,o,t,s,d;a===0?(o=0,t=0,r=1/a===-1/0?1:0):(r=a<0,a=Math.abs(a),a>=Math.pow(2,1-i)?(s=Math.min(Math.floor(Math.log(a)/Math.LN2),i),o=s+i,t=Math.round(a*Math.pow(2,n-s)-Math.pow(2,n))):(o=0,t=Math.round(a/Math.pow(2,1-i-n))));const m=[];for(d=n;d;d-=1)m.push(t%2?1:0),t=Math.floor(t/2);for(d=e;d;d-=1)m.push(o%2?1:0),o=Math.floor(o/2);m.push(r?1:0),m.reverse();const c=m.join("");let u="";for(d=0;d<64;d+=8){let k=parseInt(c.substr(d,8),2).toString(16);k.length===1&&(k="0"+k),u=u+k}return u.toLowerCase()},kh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ch=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ph(a,e){let n="Unknown Error";a==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":a==="permission_denied"?n="Client doesn't have permission to access the desired data.":a==="unavailable"&&(n="The service is unavailable");const i=new Error(a+" at "+e._path.toString()+": "+n);return i.code=a.toUpperCase(),i}const hh=new RegExp("^-?(0*)\\d{1,10}$"),gh=-2147483648,yh=2147483647,_d=function(a){if(hh.test(a)){const e=Number(a);if(e>=gh&&e<=yh)return e}return null},qi=function(a){try{a()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ta("Exception was thrown by user callback.",n),e},Math.floor(0))}},fh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gi=function(a,e){const n=setTimeout(a,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class jh{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ta(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class bh{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ta(e)}}class Yo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yo.OWNER="owner";/**
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
 */const Ot="5",uu="v",lu="s",_u="r",ku="f",cu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pu="ls",hu="p",Go="ac",gu="websocket",yu="long_polling";/**
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
 */class vh{constructor(e,n,i,r,o=!1,t="",s=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=o,this.persistenceKey=t,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wh(a){return a.host!==a.internalHost||a.isCustomHost()||a.includeNamespaceInQueryParams}function fu(a,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let i;if(e===gu)i=(a.secure?"wss://":"ws://")+a.internalHost+"/.ws?";else if(e===yu)i=(a.secure?"https://":"http://")+a.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wh(a)&&(n.ns=a.namespace);const r=[];return ra(n,(o,t)=>{r.push(o+"="+t)}),i+r.join("&")}/**
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
 */class xh{constructor(){this.counters_={}}incrementCounter(e,n=1){qa(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Pc(this.counters_)}}/**
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
 */const yo={},fo={};function Mt(a){const e=a.toString();return yo[e]||(yo[e]=new xh),yo[e]}function Ch(a,e){const n=a.toString();return fo[n]||(fo[n]=e()),fo[n]}/**
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
 */class Eh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&qi(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const kd="start",Ih="close",Th="pLPCommand",Sh="pRTLPCB",ju="id",bu="pw",vu="ser",Nh="cb",Rh="seg",Ah="ts",zh="d",Ph="dframe",wu=1870,xu=30,Dh=wu-xu,Oh=25e3,Mh=3e4;class On{constructor(e,n,i,r,o,t,s){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=o,this.transportSessionId=t,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bi(e),this.stats_=Mt(n),this.urlFn=d=>(this.appCheckToken&&(d[Go]=this.appCheckToken),fu(n,yu,d))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Eh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mh)),lh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lt((...o)=>{const[t,s,d,m,c]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===kd)this.id=s,this.password=d;else if(t===Ih)s?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(s,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+t)},(...o)=>{const[t,s]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(t,s)},()=>{this.onClosed_()},this.urlFn);const i={};i[kd]="t",i[vu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Nh]=this.scriptTagHolder.uniqueCallbackIdentifier),i[uu]=Ot,this.transportSessionId&&(i[lu]=this.transportSessionId),this.lastSessionId&&(i[pu]=this.lastSessionId),this.applicationId&&(i[hu]=this.applicationId),this.appCheckToken&&(i[Go]=this.appCheckToken),typeof location<"u"&&location.hostname&&cu.test(location.hostname)&&(i[_u]=ku);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){On.forceAllow_=!0}static forceDisallow(){On.forceDisallow_=!0}static isAvailable(){return On.forceAllow_?!0:!On.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kh()&&!ch()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=$m(n),r=du(i,Dh);for(let o=0;o<r.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Ph]="t",i[ju]=e,i[bu]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lt{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dh(),window[Th+this.uniqueCallbackIdentifier]=e,window[Sh+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lt.createIFrame_();let o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const s=document.domain;o='<script>document.domain="'+s+'";<\/script>'}const t="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(t),this.myIFrame.doc.close()}catch(s){Ve("frame writing exception"),s.stack&&Ve(s.stack),Ve(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ve("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ju]=this.myID,e[bu]=this.myPW,e[vu]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xu+i.length<=wu;){const t=this.pendingSegs.shift();i=i+"&"+Rh+r+"="+t.seg+"&"+Ah+r+"="+t.ts+"&"+zh+r+"="+t.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(Oh)),o=()=>{clearTimeout(r),i()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Lh=16384,Fh=45e3;let vr=null;typeof MozWebSocket<"u"?vr=MozWebSocket:typeof WebSocket<"u"&&(vr=WebSocket);class ya{constructor(e,n,i,r,o,t,s){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bi(this.connId),this.stats_=Mt(n),this.connURL=ya.connectionURL_(n,t,s,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,o){const t={};return t[uu]=Ot,typeof location<"u"&&location.hostname&&cu.test(location.hostname)&&(t[_u]=ku),n&&(t[lu]=n),i&&(t[pu]=i),r&&(t[Go]=r),o&&(t[hu]=o),fu(e,gu,t)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bn.set("previous_websocket_failure",!0);try{let i;Ym(),this.mySock=new vr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){ya.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&vr!==null&&!ya.forceDisallow_}static previouslyFailed(){return bn.isInMemoryStorage||bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Ei(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=du(n,Lh);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fh))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ya.responsesRequiredToBeHealthy=2;ya.healthyTimeout=3e4;/**
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
 */class Si{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[On,ya]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ya&&ya.isAvailable();let i=n&&!ya.previouslyFailed();if(e.webSocketOnly&&(n||ta("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ya];else{const r=this.transports_=[];for(const o of Si.ALL_TRANSPORTS)o&&o.isAvailable()&&r.push(o);Si.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Si.globalTransportInitialized_=!1;/**
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
 */const Bh=6e4,qh=5e3,Wh=10*1024,Hh=100*1024,jo="t",cd="d",$h="s",pd="r",Uh="e",hd="o",gd="a",yd="n",fd="p",Kh="h";class Vh{constructor(e,n,i,r,o,t,s,d,m,c){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=o,this.onMessage_=t,this.onReady_=s,this.onDisconnect_=d,this.onKill_=m,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bi("c:"+this.id+":"),this.transportManager_=new Si(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=gi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Hh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Wh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(jo in e){const n=e[jo];n===gd?this.upgradeIfSecondaryHealthy_():n===pd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===hd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=li("t",e),i=li("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=li("t",e),i=li("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=li(jo,e);if(cd in e){const i=e[cd];if(n===Kh)this.onHandshake_(i);else if(n===yd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$h?this.onConnectionShutdown_(i):n===pd?this.onReset_(i):n===Uh?Vo("Server Error: "+i):n===hd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ot!==i&&ta("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),gi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Bh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Cu{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Eu{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let o=0;o<r.length;o++)if(r[o].callback===n&&(!i||i===r[o].context)){r.splice(o,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class wr extends Eu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new wr}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jd=32,bd=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new Ce("")}function le(a){return a.pieceNum_>=a.pieces_.length?null:a.pieces_[a.pieceNum_]}function on(a){return a.pieces_.length-a.pieceNum_}function Ie(a){let e=a.pieceNum_;return e<a.pieces_.length&&e++,new Ce(a.pieces_,e)}function Iu(a){return a.pieceNum_<a.pieces_.length?a.pieces_[a.pieces_.length-1]:null}function Yh(a){let e="";for(let n=a.pieceNum_;n<a.pieces_.length;n++)a.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(a.pieces_[n])));return e||"/"}function Tu(a,e=0){return a.pieces_.slice(a.pieceNum_+e)}function Su(a){if(a.pieceNum_>=a.pieces_.length)return null;const e=[];for(let n=a.pieceNum_;n<a.pieces_.length-1;n++)e.push(a.pieces_[n]);return new Ce(e,0)}function Be(a,e){const n=[];for(let i=a.pieceNum_;i<a.pieces_.length;i++)n.push(a.pieces_[i]);if(e instanceof Ce)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Ce(n,0)}function de(a){return a.pieceNum_>=a.pieces_.length}function Ze(a,e){const n=le(a),i=le(e);if(n===null)return e;if(n===i)return Ze(Ie(a),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+a+")")}function Nu(a,e){if(on(a)!==on(e))return!1;for(let n=a.pieceNum_,i=e.pieceNum_;n<=a.pieces_.length;n++,i++)if(a.pieces_[n]!==e.pieces_[i])return!1;return!0}function ja(a,e){let n=a.pieceNum_,i=e.pieceNum_;if(on(a)>on(e))return!1;for(;n<a.pieces_.length;){if(a.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Gh{constructor(e,n){this.errorPrefix_=n,this.parts_=Tu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=$r(this.parts_[i]);Ru(this)}}function Jh(a,e){a.parts_.length>0&&(a.byteLength_+=1),a.parts_.push(e),a.byteLength_+=$r(e),Ru(a)}function Qh(a){const e=a.parts_.pop();a.byteLength_-=$r(e),a.parts_.length>0&&(a.byteLength_-=1)}function Ru(a){if(a.byteLength_>bd)throw new Error(a.errorPrefix_+"has a key path longer than "+bd+" bytes ("+a.byteLength_+").");if(a.parts_.length>jd)throw new Error(a.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jd+") or object contains a cycle "+hn(a))}function hn(a){return a.parts_.length===0?"":"in property '"+a.parts_.join(".")+"'"}/**
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
 */class Ft extends Eu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ft}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const _i=1e3,Xh=60*5*1e3,vd=30*1e3,Zh=1.3,eg=3e4,ag="server_kill",wd=3;class La extends Cu{constructor(e,n,i,r,o,t,s,d){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=o,this.authTokenProvider_=t,this.appCheckTokenProvider_=s,this.authOverride_=d,this.id=La.nextPersistentConnectionId_++,this.log_=Bi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_i,this.maxReconnectDelay_=Xh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d&&!Ym())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ft.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,o={r,a:e,b:n};this.log_(Fe(o)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new zt,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:t=>{const s=t.d;t.s==="ok"?n.resolve(s):n.reject(s)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(e,n,i,r){this.initConnection_();const o=e._queryIdentifier,t=e._path.toString();this.log_("Listen called for "+t+" "+o),this.listens.has(t)||this.listens.set(t,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(t).has(o),"listen() called twice for same path/queryId.");const s={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(t).set(o,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const o={p:i},t="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(t,o,s=>{const d=s.d,m=s.s;La.warnOnListenWarnings_(d,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",s),m!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(m,d))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&qa(e,"w")){const i=Yn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();ta(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$c(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Hc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const o=r.s,t=r.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,t))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const o={p:e},t="n";r&&(o.q=i,o.t=r),this.sendRequest(t,o)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const o={p:n,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,t=>{r&&setTimeout(()=>{r(t.s,t.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,o){this.initConnection_();const t={p:n,d:i};o!==void 0&&(t.h=o),this.outstandingPuts_.push({action:e,request:t,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Fe(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vo("Unrecognized action received from server: "+Fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eg&&(this.reconnectDelay_=_i),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+La.nextConnectionId_++,o=this.lastSessionId;let t=!1,s=null;const d=function(){s?s.close():(t=!0,i())},m=function(u){P(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(u)};this.realtime_={close:d,sendRequest:m};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,k]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);t?Ve("getToken() completed but was canceled"):(Ve("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=k&&k.token,s=new Vh(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,b=>{ta(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(ag)},o))}catch(u){this.log_("Failed to get token: "+u),t||(this.repoInfo_.nodeAdmin&&ta(u),d())}}}interrupt(e){Ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ed(this.interruptReasons_)&&(this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(o=>Dt(o)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Ce(e).toString();let r;if(this.listens.has(i)){const o=this.listens.get(i);r=o.get(n),o.delete(n),o.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wd&&(this.reconnectDelay_=vd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ru.replace(/\./g,"-")]=1,Vm()?e["framework.cordova"]=1:Mc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wr.getInstance().currentlyOnline();return ed(this.interruptReasons_)&&e}}La.nextPersistentConnectionId_=0;La.nextConnectionId_=0;/**
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
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
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
 */class Kr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new se(Gn,e),r=new se(Gn,n);return this.compare(i,r)!==0}minPost(){return se.MIN}}/**
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
 */let ar;class Au extends Kr{static get __EMPTY_NODE(){return ar}static set __EMPTY_NODE(e){ar=e}compare(e,n){return ai(e.name,n.name)}isDefinedOn(e){throw ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(In,ar)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,ar)}toString(){return".key"}}const Un=new Au;/**
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
 */class nr{constructor(e,n,i,r,o=null){this.isReverse_=r,this.resultGenerator_=o,this.nodeStack_=[];let t=1;for(;!e.isEmpty();)if(e=e,t=n?i(e.key,n):1,r&&(t*=-1),t<0)this.isReverse_?e=e.left:e=e.right;else if(t===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,i,r,o){this.key=e,this.value=n,this.color=i!=null?i:We.RED,this.left=r!=null?r:ia.EMPTY_NODE,this.right=o!=null?o:ia.EMPTY_NODE}copy(e,n,i,r,o){return new We(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,o!=null?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const o=i(e,r.key);return o<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):o===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ia.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ia.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class ng{copy(e,n,i,r,o){return this}insert(e,n,i){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ia{constructor(e,n=ia.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ia(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new ia(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new nr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new nr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new nr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new nr(this.root_,null,this.comparator_,!0,e)}}ia.EMPTY_NODE=new ng;/**
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
 */function ig(a,e){return ai(a.name,e.name)}function Bt(a,e){return ai(a,e)}/**
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
 */let Jo;function rg(a){Jo=a}const zu=function(a){return typeof a=="number"?"number:"+mu(a):"string:"+a},Pu=function(a){if(a.isLeafNode()){const e=a.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qa(e,".sv"),"Priority must be a string or number.")}else P(a===Jo||a.isEmpty(),"priority of unexpected type.");P(a===Jo||a.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let xd;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Pu(this.priorityNode_)}static set __childrenNodeConstructor(e){xd=e}static get __childrenNodeConstructor(){return xd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return de(e)?this:le(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=le(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(P(i!==".priority"||on(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mu(this.value_):e+=this.value_,this.lazyHash_=tu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=qe.VALUE_TYPE_ORDER.indexOf(n),o=qe.VALUE_TYPE_ORDER.indexOf(i);return P(r>=0,"Unknown leaf type: "+n),P(o>=0,"Unknown leaf type: "+i),r===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Du,Ou;function og(a){Du=a}function tg(a){Ou=a}class sg extends Kr{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),o=i.compareTo(r);return o===0?ai(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(In,new qe("[PRIORITY-POST]",Ou))}makePost(e,n){const i=Du(e);return new se(n,new qe("[PRIORITY-POST]",i))}toString(){return".priority"}}const ze=new sg;/**
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
 */const dg=Math.log(2);class mg{constructor(e){const n=o=>parseInt(Math.log(o)/dg,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xr=function(a,e,n,i){a.sort(e);const r=function(d,m){const c=m-d;let u,k;if(c===0)return null;if(c===1)return u=a[d],k=n?n(u):u,new We(k,u.node,We.BLACK,null,null);{const b=parseInt(c/2,10)+d,w=r(d,b),L=r(b+1,m);return u=a[b],k=n?n(u):u,new We(k,u.node,We.BLACK,w,L)}},o=function(d){let m=null,c=null,u=a.length;const k=function(w,L){const M=u-w,K=u;u-=w;const F=r(M+1,K),U=a[M],ne=n?n(U):U;b(new We(ne,U.node,L,null,F))},b=function(w){m?(m.left=w,m=w):(c=w,m=w)};for(let w=0;w<d.count;++w){const L=d.nextBitIsOne(),M=Math.pow(2,d.count-(w+1));L?k(M,We.BLACK):(k(M,We.BLACK),k(M,We.RED))}return c},t=new mg(a.length),s=o(t);return new ia(i||e,s)};/**
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
 */let bo;const Pn={};class Oa{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Pn&&ze,"ChildrenNode.ts has not been loaded"),bo=bo||new Oa({".priority":Pn},{".priority":ze}),bo}get(e){const n=Yn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ia?n:null}hasIndex(e){return qa(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Un,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const o=n.getIterator(se.Wrap);let t=o.getNext();for(;t;)r=r||e.isDefinedOn(t.node),i.push(t),t=o.getNext();let s;r?s=xr(i,e.getCompare()):s=Pn;const d=e.toString(),m=Object.assign({},this.indexSet_);m[d]=e;const c=Object.assign({},this.indexes_);return c[d]=s,new Oa(c,m)}addToIndexes(e,n){const i=fr(this.indexes_,(r,o)=>{const t=Yn(this.indexSet_,o);if(P(t,"Missing index implementation for "+o),r===Pn)if(t.isDefinedOn(e.node)){const s=[],d=n.getIterator(se.Wrap);let m=d.getNext();for(;m;)m.name!==e.name&&s.push(m),m=d.getNext();return s.push(e),xr(s,t.getCompare())}else return Pn;else{const s=n.get(e.name);let d=r;return s&&(d=d.remove(new se(e.name,s))),d.insert(e,e.node)}});return new Oa(i,this.indexSet_)}removeFromIndexes(e,n){const i=fr(this.indexes_,r=>{if(r===Pn)return r;{const o=n.get(e.name);return o?r.remove(new se(e.name,o)):r}});return new Oa(i,this.indexSet_)}}/**
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
 */let ki;class Z{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Pu(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ki||(ki=new Z(new ia(Bt),null,Oa.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ki}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ki:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new se(e,n);let r,o;n.isEmpty()?(r=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(i,this.children_));const t=r.isEmpty()?ki:this.priorityNode_;return new Z(r,t,o)}}updateChild(e,n){const i=le(e);if(i===null)return n;{P(le(e)!==".priority"||on(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Ie(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,o=!0;if(this.forEachChild(ze,(t,s)=>{n[t]=s.val(e),i++,o&&Z.INTEGER_REGEXP_.test(t)?r=Math.max(r,Number(t)):o=!1}),!e&&o&&r<2*i){const t=[];for(const s in n)t[s]=n[s];return t}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zu(this.getPriority().val())+":"),this.forEachChild(ze,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":tu(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const o=r.getPredecessorKey(new se(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,se.Wrap);let o=r.peek();for(;o!=null&&n.compare(o,e)<0;)r.getNext(),o=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let o=r.peek();for(;o!=null&&n.compare(o,e)>0;)r.getNext(),o=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wi?-1:0}withIndex(e){if(e===Un||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Un||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ze),r=n.getIterator(ze);let o=i.getNext(),t=r.getNext();for(;o&&t;){if(o.name!==t.name||!o.node.equals(t.node))return!1;o=i.getNext(),t=r.getNext()}return o===null&&t===null}else return!1;else return!1}}resolveIndex_(e){return e===Un?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ug extends Z{constructor(){super(new ia(Bt),Z.EMPTY_NODE,Oa.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const Wi=new ug;Object.defineProperties(se,{MIN:{value:new se(Gn,Z.EMPTY_NODE)},MAX:{value:new se(In,Wi)}});Au.__EMPTY_NODE=Z.EMPTY_NODE;qe.__childrenNodeConstructor=Z;rg(Wi);tg(Wi);/**
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
 */const lg=!0;function $e(a,e=null){if(a===null)return Z.EMPTY_NODE;if(typeof a=="object"&&".priority"in a&&(e=a[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof a=="object"&&".value"in a&&a[".value"]!==null&&(a=a[".value"]),typeof a!="object"||".sv"in a){const n=a;return new qe(n,$e(e))}if(!(a instanceof Array)&&lg){const n=[];let i=!1;if(ra(a,(t,s)=>{if(t.substring(0,1)!=="."){const d=$e(s);d.isEmpty()||(i=i||!d.getPriority().isEmpty(),n.push(new se(t,d)))}}),n.length===0)return Z.EMPTY_NODE;const o=xr(n,ig,t=>t.name,Bt);if(i){const t=xr(n,ze.getCompare());return new Z(o,$e(e),new Oa({".priority":t},{".priority":ze}))}else return new Z(o,$e(e),Oa.Default)}else{let n=Z.EMPTY_NODE;return ra(a,(i,r)=>{if(qa(a,i)&&i.substring(0,1)!=="."){const o=$e(r);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(i,o))}}),n.updatePriority($e(e))}}og($e);/**
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
 */class _g extends Kr{constructor(e){super(),this.indexPath_=e,P(!de(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),o=i.compareTo(r);return o===0?ai(e.name,n.name):o}makePost(e,n){const i=$e(e),r=Z.EMPTY_NODE.updateChild(this.indexPath_,i);return new se(n,r)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,Wi);return new se(In,e)}toString(){return Tu(this.indexPath_,0).join("/")}}/**
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
 */class kg extends Kr{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ai(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const i=$e(e);return new se(n,i)}toString(){return".value"}}const cg=new kg;/**
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
 */function Mu(a){return{type:"value",snapshotNode:a}}function Jn(a,e){return{type:"child_added",snapshotNode:e,childName:a}}function Ni(a,e){return{type:"child_removed",snapshotNode:e,childName:a}}function Ri(a,e,n){return{type:"child_changed",snapshotNode:e,childName:a,oldSnap:n}}function pg(a,e){return{type:"child_moved",snapshotNode:e,childName:a}}/**
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
 */class qt{constructor(e){this.index_=e}updateChild(e,n,i,r,o,t){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=e.getImmediateChild(n);return s.getChild(r).equals(i.getChild(r))&&s.isEmpty()===i.isEmpty()||(t!=null&&(i.isEmpty()?e.hasChild(n)?t.trackChildChange(Ni(n,s)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?t.trackChildChange(Jn(n,i)):t.trackChildChange(Ri(n,i,s))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ze,(r,o)=>{n.hasChild(r)||i.trackChildChange(Ni(r,o))}),n.isLeafNode()||n.forEachChild(ze,(r,o)=>{if(e.hasChild(r)){const t=e.getImmediateChild(r);t.equals(o)||i.trackChildChange(Ri(r,o,t))}else i.trackChildChange(Jn(r,o))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ai{constructor(e){this.indexedFilter_=new qt(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ai.getStartPost_(e),this.endPost_=Ai.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,o,t){return this.matches(new se(n,i))||(i=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,o,t)}updateFullNode(e,n,i){n.isLeafNode()&&(n=Z.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(Z.EMPTY_NODE);const o=this;return n.forEachChild(ze,(t,s)=>{o.matches(new se(t,s))||(r=r.updateImmediateChild(t,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class hg{constructor(e){this.rangedFilter_=new Ai(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,o,t){return this.rangedFilter_.matches(new se(n,i))||(i=Z.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,o,t):this.fullLimitUpdateChild_(e,n,i,o,t)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=Z.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let t=0;for(;o.hasNext()&&t<this.limit_;){const s=o.getNext();let d;if(this.reverse_?d=this.index_.compare(this.rangedFilter_.getStartPost(),s)<=0:d=this.index_.compare(s,this.rangedFilter_.getEndPost())<=0,d)r=r.updateImmediateChild(s.name,s.node),t++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(Z.EMPTY_NODE);let o,t,s,d;if(this.reverse_){d=r.getReverseIterator(this.index_),o=this.rangedFilter_.getEndPost(),t=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();s=(k,b)=>u(b,k)}else d=r.getIterator(this.index_),o=this.rangedFilter_.getStartPost(),t=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let m=0,c=!1;for(;d.hasNext();){const u=d.getNext();!c&&s(o,u)<=0&&(c=!0),c&&m<this.limit_&&s(u,t)<=0?m++:r=r.updateImmediateChild(u.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,o){let t;if(this.reverse_){const u=this.index_.getCompare();t=(k,b)=>u(b,k)}else t=this.index_.getCompare();const s=e;P(s.numChildren()===this.limit_,"");const d=new se(n,i),m=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),c=this.rangedFilter_.matches(d);if(s.hasChild(n)){const u=s.getImmediateChild(n);let k=r.getChildAfterChild(this.index_,m,this.reverse_);for(;k!=null&&(k.name===n||s.hasChild(k.name));)k=r.getChildAfterChild(this.index_,k,this.reverse_);const b=k==null?1:t(k,d);if(c&&!i.isEmpty()&&b>=0)return o!=null&&o.trackChildChange(Ri(n,i,u)),s.updateImmediateChild(n,i);{o!=null&&o.trackChildChange(Ni(n,u));const L=s.updateImmediateChild(n,Z.EMPTY_NODE);return k!=null&&this.rangedFilter_.matches(k)?(o!=null&&o.trackChildChange(Jn(k.name,k.node)),L.updateImmediateChild(k.name,k.node)):L}}else return i.isEmpty()?e:c&&t(m,d)>=0?(o!=null&&(o.trackChildChange(Ni(m.name,m.node)),o.trackChildChange(Jn(n,i))),s.updateImmediateChild(n,i).updateImmediateChild(m.name,Z.EMPTY_NODE)):e}}/**
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
 */class Wt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gn}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:In}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const e=new Wt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gg(a){return a.loadsAllData()?new qt(a.getIndex()):a.hasLimit()?new hg(a):new Ai(a)}function Cd(a){const e={};if(a.isDefault())return e;let n;return a.index_===ze?n="$priority":a.index_===cg?n="$value":a.index_===Un?n="$key":(P(a.index_ instanceof _g,"Unrecognized index type!"),n=a.index_.toString()),e.orderBy=Fe(n),a.startSet_&&(e.startAt=Fe(a.indexStartValue_),a.startNameSet_&&(e.startAt+=","+Fe(a.indexStartName_))),a.endSet_&&(e.endAt=Fe(a.indexEndValue_),a.endNameSet_&&(e.endAt+=","+Fe(a.indexEndName_))),a.limitSet_&&(a.isViewFromLeft()?e.limitToFirst=a.limit_:e.limitToLast=a.limit_),e}function Ed(a){const e={};if(a.startSet_&&(e.sp=a.indexStartValue_,a.startNameSet_&&(e.sn=a.indexStartName_)),a.endSet_&&(e.ep=a.indexEndValue_,a.endNameSet_&&(e.en=a.indexEndName_)),a.limitSet_){e.l=a.limit_;let n=a.viewFrom_;n===""&&(a.isViewFromLeft()?n="l":n="r"),e.vf=n}return a.index_!==ze&&(e.i=a.index_.toString()),e}/**
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
 */class Cr extends Cu{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Bi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const t=Cr.getListenId_(e,i),s={};this.listens_[t]=s;const d=Cd(e._queryParams);this.restRequest_(o+".json",d,(m,c)=>{let u=c;if(m===404&&(u=null,m=null),m===null&&this.onDataUpdate_(o,u,!1,i),Yn(this.listens_,t)===s){let k;m?m===401?k="permission_denied":k="rest_error:"+m:k="ok",r(k,null)}})}unlisten(e,n){const i=Cr.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Cd(e._queryParams),i=e._path.toString(),r=new zt;return this.restRequest_(i+".json",n,(o,t)=>{let s=t;o===404&&(s=null,o=null),o===null?(this.onDataUpdate_(i,s,!1,null),r.resolve(s)):r.reject(new Error(s))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,o])=>{r&&r.accessToken&&(n.auth=r.accessToken),o&&o.token&&(n.ac=o.token);const t=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Uc(n);this.log_("Sending REST request for "+t);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(i&&s.readyState===4){this.log_("REST Response for "+t+" received. status:",s.status,"response:",s.responseText);let d=null;if(s.status>=200&&s.status<300){try{d=Ei(s.responseText)}catch{ta("Failed to parse JSON response for "+t+": "+s.responseText)}i(null,d)}else s.status!==401&&s.status!==404&&ta("Got unsuccessful REST response for "+t+" Status: "+s.status),i(s.status);i=null}},s.open("GET",t,!0),s.send()})}}/**
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
 */class yg{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Er(){return{value:null,children:new Map}}function Lu(a,e,n){if(de(e))a.value=n,a.children.clear();else if(a.value!==null)a.value=a.value.updateChild(e,n);else{const i=le(e);a.children.has(i)||a.children.set(i,Er());const r=a.children.get(i);e=Ie(e),Lu(r,e,n)}}function Qo(a,e,n){a.value!==null?n(e,a.value):fg(a,(i,r)=>{const o=new Ce(e.toString()+"/"+i);Qo(r,o,n)})}function fg(a,e){a.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class jg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ra(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Id=10*1e3,bg=30*1e3,vg=5*60*1e3;class wg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new jg(e);const i=Id+(bg-Id)*Math.random();gi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ra(e,(r,o)=>{o>0&&qa(this.statsToReport_,r)&&(n[r]=o,i=!0)}),i&&this.server_.reportStats(n),gi(this.reportStats_.bind(this),Math.floor(Math.random()*2*vg))}}/**
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
 */var ba;(function(a){a[a.OVERWRITE=0]="OVERWRITE",a[a.MERGE=1]="MERGE",a[a.ACK_USER_WRITE=2]="ACK_USER_WRITE",a[a.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ba||(ba={}));function Fu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ht(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $t(a){return{fromUser:!1,fromServer:!0,queryId:a,tagged:!0}}/**
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
 */class Ir{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ba.ACK_USER_WRITE,this.source=Fu()}operationForChild(e){if(de(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new Ir(ce(),n,this.revert)}}else return P(le(this.path)===e,"operationForChild called for unrelated child."),new Ir(Ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class zi{constructor(e,n){this.source=e,this.path=n,this.type=ba.LISTEN_COMPLETE}operationForChild(e){return de(this.path)?new zi(this.source,ce()):new zi(this.source,Ie(this.path))}}/**
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
 */class Tn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ba.OVERWRITE}operationForChild(e){return de(this.path)?new Tn(this.source,ce(),this.snap.getImmediateChild(e)):new Tn(this.source,Ie(this.path),this.snap)}}/**
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
 */class Pi{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ba.MERGE}operationForChild(e){if(de(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new Tn(this.source,ce(),n.value):new Pi(this.source,ce(),n)}else return P(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Pi(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class tn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(de(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class xg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Cg(a,e,n,i){const r=[],o=[];return e.forEach(t=>{t.type==="child_changed"&&a.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(pg(t.childName,t.snapshotNode))}),ci(a,r,"child_removed",e,i,n),ci(a,r,"child_added",e,i,n),ci(a,r,"child_moved",o,i,n),ci(a,r,"child_changed",e,i,n),ci(a,r,"value",e,i,n),r}function ci(a,e,n,i,r,o){const t=i.filter(s=>s.type===n);t.sort((s,d)=>Ig(a,s,d)),t.forEach(s=>{const d=Eg(a,s,o);r.forEach(m=>{m.respondsTo(s.type)&&e.push(m.createEvent(d,a.query_))})})}function Eg(a,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,a.index_)),e}function Ig(a,e,n){if(e.childName==null||n.childName==null)throw ei("Should only compare child_ events.");const i=new se(e.childName,e.snapshotNode),r=new se(n.childName,n.snapshotNode);return a.index_.compare(i,r)}/**
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
 */function Vr(a,e){return{eventCache:a,serverCache:e}}function yi(a,e,n,i){return Vr(new tn(e,n,i),a.serverCache)}function Bu(a,e,n,i){return Vr(a.eventCache,new tn(e,n,i))}function Tr(a){return a.eventCache.isFullyInitialized()?a.eventCache.getNode():null}function Sn(a){return a.serverCache.isFullyInitialized()?a.serverCache.getNode():null}/**
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
 */let vo;const Tg=()=>(vo||(vo=new ia(_h)),vo);class Te{constructor(e,n=Tg()){this.value=e,this.children=n}static fromObject(e){let n=new Te(null);return ra(e,(i,r)=>{n=n.set(new Ce(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(de(e))return null;{const i=le(e),r=this.children.get(i);if(r!==null){const o=r.findRootMostMatchingPathAndValue(Ie(e),n);return o!=null?{path:Be(new Ce(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(de(e))return this;{const n=le(e),i=this.children.get(n);return i!==null?i.subtree(Ie(e)):new Te(null)}}set(e,n){if(de(e))return new Te(n,this.children);{const i=le(e),o=(this.children.get(i)||new Te(null)).set(Ie(e),n),t=this.children.insert(i,o);return new Te(this.value,t)}}remove(e){if(de(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const n=le(e),i=this.children.get(n);if(i){const r=i.remove(Ie(e));let o;return r.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,r),this.value===null&&o.isEmpty()?new Te(null):new Te(this.value,o)}else return this}}get(e){if(de(e))return this.value;{const n=le(e),i=this.children.get(n);return i?i.get(Ie(e)):null}}setTree(e,n){if(de(e))return n;{const i=le(e),o=(this.children.get(i)||new Te(null)).setTree(Ie(e),n);let t;return o.isEmpty()?t=this.children.remove(i):t=this.children.insert(i,o),new Te(this.value,t)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,o)=>{i[r]=o.fold_(Be(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(de(e))return null;{const o=le(e),t=this.children.get(o);return t?t.findOnPath_(Ie(e),Be(n,o),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,i){if(de(e))return this;{this.value&&i(n,this.value);const r=le(e),o=this.children.get(r);return o?o.foreachOnPath_(Ie(e),Be(n,r),i):new Te(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(Be(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class xa{constructor(e){this.writeTree_=e}static empty(){return new xa(new Te(null))}}function fi(a,e,n){if(de(e))return new xa(new Te(n));{const i=a.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let o=i.value;const t=Ze(r,e);return o=o.updateChild(t,n),new xa(a.writeTree_.set(r,o))}else{const r=new Te(n),o=a.writeTree_.setTree(e,r);return new xa(o)}}}function Td(a,e,n){let i=a;return ra(n,(r,o)=>{i=fi(i,Be(e,r),o)}),i}function Sd(a,e){if(de(e))return xa.empty();{const n=a.writeTree_.setTree(e,new Te(null));return new xa(n)}}function Xo(a,e){return Rn(a,e)!=null}function Rn(a,e){const n=a.writeTree_.findRootMostValueAndPath(e);return n!=null?a.writeTree_.get(n.path).getChild(Ze(n.path,e)):null}function Nd(a){const e=[],n=a.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ze,(i,r)=>{e.push(new se(i,r))}):a.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new se(i,r.value))}),e}function Za(a,e){if(de(e))return a;{const n=Rn(a,e);return n!=null?new xa(new Te(n)):new xa(a.writeTree_.subtree(e))}}function Zo(a){return a.writeTree_.isEmpty()}function Qn(a,e){return qu(ce(),a.writeTree_,e)}function qu(a,e,n){if(e.value!=null)return n.updateChild(a,e.value);{let i=null;return e.children.inorderTraversal((r,o)=>{r===".priority"?(P(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):n=qu(Be(a,r),o,n)}),!n.getChild(a).isEmpty()&&i!==null&&(n=n.updateChild(Be(a,".priority"),i)),n}}/**
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
 */function Yr(a,e){return Uu(e,a)}function Sg(a,e,n,i,r){P(i>a.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),a.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(a.visibleWrites=fi(a.visibleWrites,e,n)),a.lastWriteId=i}function Ng(a,e){for(let n=0;n<a.allWrites.length;n++){const i=a.allWrites[n];if(i.writeId===e)return i}return null}function Rg(a,e){const n=a.allWrites.findIndex(s=>s.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const i=a.allWrites[n];a.allWrites.splice(n,1);let r=i.visible,o=!1,t=a.allWrites.length-1;for(;r&&t>=0;){const s=a.allWrites[t];s.visible&&(t>=n&&Ag(s,i.path)?r=!1:ja(i.path,s.path)&&(o=!0)),t--}if(r){if(o)return zg(a),!0;if(i.snap)a.visibleWrites=Sd(a.visibleWrites,i.path);else{const s=i.children;ra(s,d=>{a.visibleWrites=Sd(a.visibleWrites,Be(i.path,d))})}return!0}else return!1}function Ag(a,e){if(a.snap)return ja(a.path,e);for(const n in a.children)if(a.children.hasOwnProperty(n)&&ja(Be(a.path,n),e))return!0;return!1}function zg(a){a.visibleWrites=Wu(a.allWrites,Pg,ce()),a.allWrites.length>0?a.lastWriteId=a.allWrites[a.allWrites.length-1].writeId:a.lastWriteId=-1}function Pg(a){return a.visible}function Wu(a,e,n){let i=xa.empty();for(let r=0;r<a.length;++r){const o=a[r];if(e(o)){const t=o.path;let s;if(o.snap)ja(n,t)?(s=Ze(n,t),i=fi(i,s,o.snap)):ja(t,n)&&(s=Ze(t,n),i=fi(i,ce(),o.snap.getChild(s)));else if(o.children){if(ja(n,t))s=Ze(n,t),i=Td(i,s,o.children);else if(ja(t,n))if(s=Ze(t,n),de(s))i=Td(i,ce(),o.children);else{const d=Yn(o.children,le(s));if(d){const m=d.getChild(Ie(s));i=fi(i,ce(),m)}}}else throw ei("WriteRecord should have .snap or .children")}}return i}function Hu(a,e,n,i,r){if(!i&&!r){const o=Rn(a.visibleWrites,e);if(o!=null)return o;{const t=Za(a.visibleWrites,e);if(Zo(t))return n;if(n==null&&!Xo(t,ce()))return null;{const s=n||Z.EMPTY_NODE;return Qn(t,s)}}}else{const o=Za(a.visibleWrites,e);if(!r&&Zo(o))return n;if(!r&&n==null&&!Xo(o,ce()))return null;{const t=function(m){return(m.visible||r)&&(!i||!~i.indexOf(m.writeId))&&(ja(m.path,e)||ja(e,m.path))},s=Wu(a.allWrites,t,e),d=n||Z.EMPTY_NODE;return Qn(s,d)}}}function Dg(a,e,n){let i=Z.EMPTY_NODE;const r=Rn(a.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ze,(o,t)=>{i=i.updateImmediateChild(o,t)}),i;if(n){const o=Za(a.visibleWrites,e);return n.forEachChild(ze,(t,s)=>{const d=Qn(Za(o,new Ce(t)),s);i=i.updateImmediateChild(t,d)}),Nd(o).forEach(t=>{i=i.updateImmediateChild(t.name,t.node)}),i}else{const o=Za(a.visibleWrites,e);return Nd(o).forEach(t=>{i=i.updateImmediateChild(t.name,t.node)}),i}}function Og(a,e,n,i,r){P(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=Be(e,n);if(Xo(a.visibleWrites,o))return null;{const t=Za(a.visibleWrites,o);return Zo(t)?r.getChild(n):Qn(t,r.getChild(n))}}function Mg(a,e,n,i){const r=Be(e,n),o=Rn(a.visibleWrites,r);if(o!=null)return o;if(i.isCompleteForChild(n)){const t=Za(a.visibleWrites,r);return Qn(t,i.getNode().getImmediateChild(n))}else return null}function Lg(a,e){return Rn(a.visibleWrites,e)}function Fg(a,e,n,i,r,o,t){let s;const d=Za(a.visibleWrites,e),m=Rn(d,ce());if(m!=null)s=m;else if(n!=null)s=Qn(d,n);else return[];if(s=s.withIndex(t),!s.isEmpty()&&!s.isLeafNode()){const c=[],u=t.getCompare(),k=o?s.getReverseIteratorFrom(i,t):s.getIteratorFrom(i,t);let b=k.getNext();for(;b&&c.length<r;)u(b,i)!==0&&c.push(b),b=k.getNext();return c}else return[]}function Bg(){return{visibleWrites:xa.empty(),allWrites:[],lastWriteId:-1}}function Sr(a,e,n,i){return Hu(a.writeTree,a.treePath,e,n,i)}function Ut(a,e){return Dg(a.writeTree,a.treePath,e)}function Rd(a,e,n,i){return Og(a.writeTree,a.treePath,e,n,i)}function Nr(a,e){return Lg(a.writeTree,Be(a.treePath,e))}function qg(a,e,n,i,r,o){return Fg(a.writeTree,a.treePath,e,n,i,r,o)}function Kt(a,e,n){return Mg(a.writeTree,a.treePath,e,n)}function $u(a,e){return Uu(Be(a.treePath,e),a.writeTree)}function Uu(a,e){return{treePath:a,writeTree:e}}/**
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
 */class Wg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const o=r.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(i,Ri(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(i,Ni(i,r.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(i,Jn(i,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(i,Ri(i,e.snapshotNode,r.oldSnap));else throw ei("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Hg{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Ku=new Hg;class Vt{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new tn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kt(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Sn(this.viewCache_),o=qg(this.writes_,r,n,1,i,e);return o.length===0?null:o[0]}}/**
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
 */function $g(a){return{filter:a}}function Ug(a,e){P(e.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed")}function Kg(a,e,n,i,r){const o=new Wg;let t,s;if(n.type===ba.OVERWRITE){const m=n;m.source.fromUser?t=et(a,e,m.path,m.snap,i,r,o):(P(m.source.fromServer,"Unknown source."),s=m.source.tagged||e.serverCache.isFiltered()&&!de(m.path),t=Rr(a,e,m.path,m.snap,i,r,s,o))}else if(n.type===ba.MERGE){const m=n;m.source.fromUser?t=Yg(a,e,m.path,m.children,i,r,o):(P(m.source.fromServer,"Unknown source."),s=m.source.tagged||e.serverCache.isFiltered(),t=at(a,e,m.path,m.children,i,r,s,o))}else if(n.type===ba.ACK_USER_WRITE){const m=n;m.revert?t=Qg(a,e,m.path,i,r,o):t=Gg(a,e,m.path,m.affectedTree,i,r,o)}else if(n.type===ba.LISTEN_COMPLETE)t=Jg(a,e,n.path,i,o);else throw ei("Unknown operation type: "+n.type);const d=o.getChanges();return Vg(e,t,d),{viewCache:t,changes:d}}function Vg(a,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=Tr(a);(n.length>0||!a.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(Mu(Tr(e)))}}function Vu(a,e,n,i,r,o){const t=e.eventCache;if(Nr(i,n)!=null)return e;{let s,d;if(de(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Sn(e),c=m instanceof Z?m:Z.EMPTY_NODE,u=Ut(i,c);s=a.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const m=Sr(i,Sn(e));s=a.filter.updateFullNode(e.eventCache.getNode(),m,o)}else{const m=le(n);if(m===".priority"){P(on(n)===1,"Can't have a priority with additional path components");const c=t.getNode();d=e.serverCache.getNode();const u=Rd(i,n,c,d);u!=null?s=a.filter.updatePriority(c,u):s=t.getNode()}else{const c=Ie(n);let u;if(t.isCompleteForChild(m)){d=e.serverCache.getNode();const k=Rd(i,n,t.getNode(),d);k!=null?u=t.getNode().getImmediateChild(m).updateChild(c,k):u=t.getNode().getImmediateChild(m)}else u=Kt(i,m,e.serverCache);u!=null?s=a.filter.updateChild(t.getNode(),m,u,c,r,o):s=t.getNode()}}return yi(e,s,t.isFullyInitialized()||de(n),a.filter.filtersNodes())}}function Rr(a,e,n,i,r,o,t,s){const d=e.serverCache;let m;const c=t?a.filter:a.filter.getIndexedFilter();if(de(n))m=c.updateFullNode(d.getNode(),i,null);else if(c.filtersNodes()&&!d.isFiltered()){const b=d.getNode().updateChild(n,i);m=c.updateFullNode(d.getNode(),b,null)}else{const b=le(n);if(!d.isCompleteForPath(n)&&on(n)>1)return e;const w=Ie(n),M=d.getNode().getImmediateChild(b).updateChild(w,i);b===".priority"?m=c.updatePriority(d.getNode(),M):m=c.updateChild(d.getNode(),b,M,w,Ku,null)}const u=Bu(e,m,d.isFullyInitialized()||de(n),c.filtersNodes()),k=new Vt(r,u,o);return Vu(a,u,n,r,k,s)}function et(a,e,n,i,r,o,t){const s=e.eventCache;let d,m;const c=new Vt(r,e,o);if(de(n))m=a.filter.updateFullNode(e.eventCache.getNode(),i,t),d=yi(e,m,!0,a.filter.filtersNodes());else{const u=le(n);if(u===".priority")m=a.filter.updatePriority(e.eventCache.getNode(),i),d=yi(e,m,s.isFullyInitialized(),s.isFiltered());else{const k=Ie(n),b=s.getNode().getImmediateChild(u);let w;if(de(k))w=i;else{const L=c.getCompleteChild(u);L!=null?Iu(k)===".priority"&&L.getChild(Su(k)).isEmpty()?w=L:w=L.updateChild(k,i):w=Z.EMPTY_NODE}if(b.equals(w))d=e;else{const L=a.filter.updateChild(s.getNode(),u,w,k,c,t);d=yi(e,L,s.isFullyInitialized(),a.filter.filtersNodes())}}}return d}function Ad(a,e){return a.eventCache.isCompleteForChild(e)}function Yg(a,e,n,i,r,o,t){let s=e;return i.foreach((d,m)=>{const c=Be(n,d);Ad(e,le(c))&&(s=et(a,s,c,m,r,o,t))}),i.foreach((d,m)=>{const c=Be(n,d);Ad(e,le(c))||(s=et(a,s,c,m,r,o,t))}),s}function zd(a,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function at(a,e,n,i,r,o,t,s){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,m;de(n)?m=i:m=new Te(null).setTree(n,i);const c=e.serverCache.getNode();return m.children.inorderTraversal((u,k)=>{if(c.hasChild(u)){const b=e.serverCache.getNode().getImmediateChild(u),w=zd(a,b,k);d=Rr(a,d,new Ce(u),w,r,o,t,s)}}),m.children.inorderTraversal((u,k)=>{const b=!e.serverCache.isCompleteForChild(u)&&k.value===null;if(!c.hasChild(u)&&!b){const w=e.serverCache.getNode().getImmediateChild(u),L=zd(a,w,k);d=Rr(a,d,new Ce(u),L,r,o,t,s)}}),d}function Gg(a,e,n,i,r,o,t){if(Nr(r,n)!=null)return e;const s=e.serverCache.isFiltered(),d=e.serverCache;if(i.value!=null){if(de(n)&&d.isFullyInitialized()||d.isCompleteForPath(n))return Rr(a,e,n,d.getNode().getChild(n),r,o,s,t);if(de(n)){let m=new Te(null);return d.getNode().forEachChild(Un,(c,u)=>{m=m.set(new Ce(c),u)}),at(a,e,n,m,r,o,s,t)}else return e}else{let m=new Te(null);return i.foreach((c,u)=>{const k=Be(n,c);d.isCompleteForPath(k)&&(m=m.set(c,d.getNode().getChild(k)))}),at(a,e,n,m,r,o,s,t)}}function Jg(a,e,n,i,r){const o=e.serverCache,t=Bu(e,o.getNode(),o.isFullyInitialized()||de(n),o.isFiltered());return Vu(a,t,n,i,Ku,r)}function Qg(a,e,n,i,r,o){let t;if(Nr(i,n)!=null)return e;{const s=new Vt(i,e,r),d=e.eventCache.getNode();let m;if(de(n)||le(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Sr(i,Sn(e));else{const u=e.serverCache.getNode();P(u instanceof Z,"serverChildren would be complete if leaf node"),c=Ut(i,u)}c=c,m=a.filter.updateFullNode(d,c,o)}else{const c=le(n);let u=Kt(i,c,e.serverCache);u==null&&e.serverCache.isCompleteForChild(c)&&(u=d.getImmediateChild(c)),u!=null?m=a.filter.updateChild(d,c,u,Ie(n),s,o):e.eventCache.getNode().hasChild(c)?m=a.filter.updateChild(d,c,Z.EMPTY_NODE,Ie(n),s,o):m=d,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(t=Sr(i,Sn(e)),t.isLeafNode()&&(m=a.filter.updateFullNode(m,t,o)))}return t=e.serverCache.isFullyInitialized()||Nr(i,ce())!=null,yi(e,m,t,a.filter.filtersNodes())}}/**
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
 */class Xg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new qt(i.getIndex()),o=gg(i);this.processor_=$g(o);const t=n.serverCache,s=n.eventCache,d=r.updateFullNode(Z.EMPTY_NODE,t.getNode(),null),m=o.updateFullNode(Z.EMPTY_NODE,s.getNode(),null),c=new tn(d,t.isFullyInitialized(),r.filtersNodes()),u=new tn(m,s.isFullyInitialized(),o.filtersNodes());this.viewCache_=Vr(u,c),this.eventGenerator_=new xg(this.query_)}get query(){return this.query_}}function Zg(a){return a.viewCache_.serverCache.getNode()}function ey(a){return Tr(a.viewCache_)}function ay(a,e){const n=Sn(a.viewCache_);return n&&(a.query._queryParams.loadsAllData()||!de(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function Pd(a){return a.eventRegistrations_.length===0}function ny(a,e){a.eventRegistrations_.push(e)}function Dd(a,e,n){const i=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const r=a.query._path;a.eventRegistrations_.forEach(o=>{const t=o.createCancelEvent(n,r);t&&i.push(t)})}if(e){let r=[];for(let o=0;o<a.eventRegistrations_.length;++o){const t=a.eventRegistrations_[o];if(!t.matches(e))r.push(t);else if(e.hasAnyCallback()){r=r.concat(a.eventRegistrations_.slice(o+1));break}}a.eventRegistrations_=r}else a.eventRegistrations_=[];return i}function Od(a,e,n,i){e.type===ba.MERGE&&e.source.queryId!==null&&(P(Sn(a.viewCache_),"We should always have a full cache before handling merges"),P(Tr(a.viewCache_),"Missing event cache, even though we have a server cache"));const r=a.viewCache_,o=Kg(a.processor_,r,e,n,i);return Ug(a.processor_,o.viewCache),P(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),a.viewCache_=o.viewCache,Yu(a,o.changes,o.viewCache.eventCache.getNode(),null)}function iy(a,e){const n=a.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ze,(o,t)=>{i.push(Jn(o,t))}),n.isFullyInitialized()&&i.push(Mu(n.getNode())),Yu(a,i,n.getNode(),e)}function Yu(a,e,n,i){const r=i?[i]:a.eventRegistrations_;return Cg(a.eventGenerator_,e,n,r)}/**
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
 */let Ar;class Gu{constructor(){this.views=new Map}}function ry(a){P(!Ar,"__referenceConstructor has already been defined"),Ar=a}function oy(){return P(Ar,"Reference.ts has not been loaded"),Ar}function ty(a){return a.views.size===0}function Yt(a,e,n,i){const r=e.source.queryId;if(r!==null){const o=a.views.get(r);return P(o!=null,"SyncTree gave us an op for an invalid query."),Od(o,e,n,i)}else{let o=[];for(const t of a.views.values())o=o.concat(Od(t,e,n,i));return o}}function Ju(a,e,n,i,r){const o=e._queryIdentifier,t=a.views.get(o);if(!t){let s=Sr(n,r?i:null),d=!1;s?d=!0:i instanceof Z?(s=Ut(n,i),d=!1):(s=Z.EMPTY_NODE,d=!1);const m=Vr(new tn(s,d,!1),new tn(i,r,!1));return new Xg(e,m)}return t}function sy(a,e,n,i,r,o){const t=Ju(a,e,i,r,o);return a.views.has(e._queryIdentifier)||a.views.set(e._queryIdentifier,t),ny(t,n),iy(t,n)}function dy(a,e,n,i){const r=e._queryIdentifier,o=[];let t=[];const s=sn(a);if(r==="default")for(const[d,m]of a.views.entries())t=t.concat(Dd(m,n,i)),Pd(m)&&(a.views.delete(d),m.query._queryParams.loadsAllData()||o.push(m.query));else{const d=a.views.get(r);d&&(t=t.concat(Dd(d,n,i)),Pd(d)&&(a.views.delete(r),d.query._queryParams.loadsAllData()||o.push(d.query)))}return s&&!sn(a)&&o.push(new(oy())(e._repo,e._path)),{removed:o,events:t}}function Qu(a){const e=[];for(const n of a.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function en(a,e){let n=null;for(const i of a.views.values())n=n||ay(i,e);return n}function Xu(a,e){if(e._queryParams.loadsAllData())return Gr(a);{const i=e._queryIdentifier;return a.views.get(i)}}function Zu(a,e){return Xu(a,e)!=null}function sn(a){return Gr(a)!=null}function Gr(a){for(const e of a.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let zr;function my(a){P(!zr,"__referenceConstructor has already been defined"),zr=a}function uy(){return P(zr,"Reference.ts has not been loaded"),zr}let ly=1;class Md{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=Bg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _y(a,e,n,i,r){return Sg(a.pendingWriteTree_,e,n,i,r),r?$i(a,new Tn(Fu(),e,n)):[]}function Mn(a,e,n=!1){const i=Ng(a.pendingWriteTree_,e);if(Rg(a.pendingWriteTree_,e)){let o=new Te(null);return i.snap!=null?o=o.set(ce(),!0):ra(i.children,t=>{o=o.set(new Ce(t),!0)}),$i(a,new Ir(i.path,o,n))}else return[]}function Hi(a,e,n){return $i(a,new Tn(Ht(),e,n))}function ky(a,e,n){const i=Te.fromObject(n);return $i(a,new Pi(Ht(),e,i))}function cy(a,e){return $i(a,new zi(Ht(),e))}function py(a,e,n){const i=Gt(a,n);if(i){const r=Jt(i),o=r.path,t=r.queryId,s=Ze(o,e),d=new zi($t(t),s);return Qt(a,o,d)}else return[]}function el(a,e,n,i,r=!1){const o=e._path,t=a.syncPointTree_.get(o);let s=[];if(t&&(e._queryIdentifier==="default"||Zu(t,e))){const d=dy(t,e,n,i);ty(t)&&(a.syncPointTree_=a.syncPointTree_.remove(o));const m=d.removed;if(s=d.events,!r){const c=m.findIndex(k=>k._queryParams.loadsAllData())!==-1,u=a.syncPointTree_.findOnPath(o,(k,b)=>sn(b));if(c&&!u){const k=a.syncPointTree_.subtree(o);if(!k.isEmpty()){const b=fy(k);for(let w=0;w<b.length;++w){const L=b[w],M=L.query,K=ol(a,L);a.listenProvider_.startListening(ji(M),Di(a,M),K.hashFn,K.onComplete)}}}!u&&m.length>0&&!i&&(c?a.listenProvider_.stopListening(ji(e),null):m.forEach(k=>{const b=a.queryToTagMap.get(Jr(k));a.listenProvider_.stopListening(ji(k),b)}))}jy(a,m)}return s}function al(a,e,n,i){const r=Gt(a,i);if(r!=null){const o=Jt(r),t=o.path,s=o.queryId,d=Ze(t,e),m=new Tn($t(s),d,n);return Qt(a,t,m)}else return[]}function hy(a,e,n,i){const r=Gt(a,i);if(r){const o=Jt(r),t=o.path,s=o.queryId,d=Ze(t,e),m=Te.fromObject(n),c=new Pi($t(s),d,m);return Qt(a,t,c)}else return[]}function gy(a,e,n,i=!1){const r=e._path;let o=null,t=!1;a.syncPointTree_.foreachOnPath(r,(k,b)=>{const w=Ze(k,r);o=o||en(b,w),t=t||sn(b)});let s=a.syncPointTree_.get(r);s?(t=t||sn(s),o=o||en(s,ce())):(s=new Gu,a.syncPointTree_=a.syncPointTree_.set(r,s));let d;o!=null?d=!0:(d=!1,o=Z.EMPTY_NODE,a.syncPointTree_.subtree(r).foreachChild((b,w)=>{const L=en(w,ce());L&&(o=o.updateImmediateChild(b,L))}));const m=Zu(s,e);if(!m&&!e._queryParams.loadsAllData()){const k=Jr(e);P(!a.queryToTagMap.has(k),"View does not exist, but we have a tag");const b=by();a.queryToTagMap.set(k,b),a.tagToQueryMap.set(b,k)}const c=Yr(a.pendingWriteTree_,r);let u=sy(s,e,n,c,o,d);if(!m&&!t&&!i){const k=Xu(s,e);u=u.concat(vy(a,e,k))}return u}function nl(a,e,n){const r=a.pendingWriteTree_,o=a.syncPointTree_.findOnPath(e,(t,s)=>{const d=Ze(t,e),m=en(s,d);if(m)return m});return Hu(r,e,o,n,!0)}function yy(a,e){const n=e._path;let i=null;a.syncPointTree_.foreachOnPath(n,(m,c)=>{const u=Ze(m,n);i=i||en(c,u)});let r=a.syncPointTree_.get(n);r?i=i||en(r,ce()):(r=new Gu,a.syncPointTree_=a.syncPointTree_.set(n,r));const o=i!=null,t=o?new tn(i,!0,!1):null,s=Yr(a.pendingWriteTree_,e._path),d=Ju(r,e,s,o?t.getNode():Z.EMPTY_NODE,o);return ey(d)}function $i(a,e){return il(e,a.syncPointTree_,null,Yr(a.pendingWriteTree_,ce()))}function il(a,e,n,i){if(de(a.path))return rl(a,e,n,i);{const r=e.get(ce());n==null&&r!=null&&(n=en(r,ce()));let o=[];const t=le(a.path),s=a.operationForChild(t),d=e.children.get(t);if(d&&s){const m=n?n.getImmediateChild(t):null,c=$u(i,t);o=o.concat(il(s,d,m,c))}return r&&(o=o.concat(Yt(r,a,i,n))),o}}function rl(a,e,n,i){const r=e.get(ce());n==null&&r!=null&&(n=en(r,ce()));let o=[];return e.children.inorderTraversal((t,s)=>{const d=n?n.getImmediateChild(t):null,m=$u(i,t),c=a.operationForChild(t);c&&(o=o.concat(rl(c,s,d,m)))}),r&&(o=o.concat(Yt(r,a,i,n))),o}function ol(a,e){const n=e.query,i=Di(a,n);return{hashFn:()=>(Zg(e)||Z.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?py(a,n._path,i):cy(a,n._path);{const o=ph(r,n);return el(a,n,null,o)}}}}function Di(a,e){const n=Jr(e);return a.queryToTagMap.get(n)}function Jr(a){return a._path.toString()+"$"+a._queryIdentifier}function Gt(a,e){return a.tagToQueryMap.get(e)}function Jt(a){const e=a.indexOf("$");return P(e!==-1&&e<a.length-1,"Bad queryKey."),{queryId:a.substr(e+1),path:new Ce(a.substr(0,e))}}function Qt(a,e,n){const i=a.syncPointTree_.get(e);P(i,"Missing sync point for query tag that we're tracking");const r=Yr(a.pendingWriteTree_,e);return Yt(i,n,r,null)}function fy(a){return a.fold((e,n,i)=>{if(n&&sn(n))return[Gr(n)];{let r=[];return n&&(r=Qu(n)),ra(i,(o,t)=>{r=r.concat(t)}),r}})}function ji(a){return a._queryParams.loadsAllData()&&!a._queryParams.isDefault()?new(uy())(a._repo,a._path):a}function jy(a,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=Jr(i),o=a.queryToTagMap.get(r);a.queryToTagMap.delete(r),a.tagToQueryMap.delete(o)}}}function by(){return ly++}function vy(a,e,n){const i=e._path,r=Di(a,e),o=ol(a,n),t=a.listenProvider_.startListening(ji(e),r,o.hashFn,o.onComplete),s=a.syncPointTree_.subtree(i);if(r)P(!sn(s.value),"If we're adding a query, it shouldn't be shadowed");else{const d=s.fold((m,c,u)=>{if(!de(m)&&c&&sn(c))return[Gr(c).query];{let k=[];return c&&(k=k.concat(Qu(c).map(b=>b.query))),ra(u,(b,w)=>{k=k.concat(w)}),k}});for(let m=0;m<d.length;++m){const c=d[m];a.listenProvider_.stopListening(ji(c),Di(a,c))}}return t}/**
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
 */class Xt{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Xt(n)}node(){return this.node_}}class Zt{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new Zt(this.syncTree_,n)}node(){return nl(this.syncTree_,this.path_)}}const wy=function(a){return a=a||{},a.timestamp=a.timestamp||new Date().getTime(),a},Ld=function(a,e,n){if(!a||typeof a!="object")return a;if(P(".sv"in a,"Unexpected leaf node or priority contents"),typeof a[".sv"]=="string")return xy(a[".sv"],e,n);if(typeof a[".sv"]=="object")return Cy(a[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(a,null,2))},xy=function(a,e,n){switch(a){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+a)}},Cy=function(a,e,n){a.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(a,null,2));const i=a.increment;typeof i!="number"&&P(!1,"Unexpected increment value: "+i);const r=e.node();if(P(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const t=r.getValue();return typeof t!="number"?i:t+i},Ey=function(a,e,n,i){return es(e,new Zt(n,a),i)},Iy=function(a,e,n){return es(a,new Xt(e),n)};function es(a,e,n){const i=a.getPriority().val(),r=Ld(i,e.getImmediateChild(".priority"),n);let o;if(a.isLeafNode()){const t=a,s=Ld(t.getValue(),e,n);return s!==t.getValue()||r!==t.getPriority().val()?new qe(s,$e(r)):a}else{const t=a;return o=t,r!==t.getPriority().val()&&(o=o.updatePriority(new qe(r))),t.forEachChild(ze,(s,d)=>{const m=es(d,e.getImmediateChild(s),n);m!==d&&(o=o.updateImmediateChild(s,m))}),o}}/**
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
 */class as{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ns(a,e){let n=e instanceof Ce?e:new Ce(e),i=a,r=le(n);for(;r!==null;){const o=Yn(i.node.children,r)||{children:{},childCount:0};i=new as(r,i,o),n=Ie(n),r=le(n)}return i}function ni(a){return a.node.value}function tl(a,e){a.node.value=e,nt(a)}function sl(a){return a.node.childCount>0}function Ty(a){return ni(a)===void 0&&!sl(a)}function Qr(a,e){ra(a.node.children,(n,i)=>{e(new as(n,a,i))})}function dl(a,e,n,i){n&&!i&&e(a),Qr(a,r=>{dl(r,e,!0,i)}),n&&i&&e(a)}function Sy(a,e,n){let i=n?a:a.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ui(a){return new Ce(a.parent===null?a.name:Ui(a.parent)+"/"+a.name)}function nt(a){a.parent!==null&&Ny(a.parent,a.name,a)}function Ny(a,e,n){const i=Ty(n),r=qa(a.node.children,e);i&&r?(delete a.node.children[e],a.node.childCount--,nt(a)):!i&&!r&&(a.node.children[e]=n.node,a.node.childCount++,nt(a))}/**
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
 */const Ry=/[\[\].#$\/\u0000-\u001F\u007F]/,Ay=/[\[\].#$\u0000-\u001F\u007F]/,wo=10*1024*1024,ml=function(a){return typeof a=="string"&&a.length!==0&&!Ry.test(a)},ul=function(a){return typeof a=="string"&&a.length!==0&&!Ay.test(a)},zy=function(a){return a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),ul(a)},ll=function(a,e,n){const i=n instanceof Ce?new Gh(n,a):n;if(e===void 0)throw new Error(a+"contains undefined "+hn(i));if(typeof e=="function")throw new Error(a+"contains a function "+hn(i)+" with contents = "+e.toString());if(su(e))throw new Error(a+"contains "+e.toString()+" "+hn(i));if(typeof e=="string"&&e.length>wo/3&&$r(e)>wo)throw new Error(a+"contains a string greater than "+wo+" utf8 bytes "+hn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,o=!1;if(ra(e,(t,s)=>{if(t===".value")r=!0;else if(t!==".priority"&&t!==".sv"&&(o=!0,!ml(t)))throw new Error(a+" contains an invalid key ("+t+") "+hn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Jh(i,t),ll(a,s,i),Qh(i)}),r&&o)throw new Error(a+' contains ".value" child '+hn(i)+" in addition to actual children.")}},_l=function(a,e,n,i){if(!(i&&n===void 0)&&!ul(n))throw new Error(Qm(a,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Py=function(a,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_l(a,e,n,i)},Dy=function(a,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ml(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zy(n))throw new Error(Qm(a,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Oy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function My(a,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],o=r.getPath();n!==null&&!Nu(o,n.path)&&(a.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(r)}n&&a.eventLists_.push(n)}function dn(a,e,n){My(a,n),Ly(a,i=>ja(i,e)||ja(e,i))}function Ly(a,e){a.recursionDepth_++;let n=!0;for(let i=0;i<a.eventLists_.length;i++){const r=a.eventLists_[i];if(r){const o=r.path;e(o)?(Fy(a.eventLists_[i]),a.eventLists_[i]=null):n=!1}}n&&(a.eventLists_=[]),a.recursionDepth_--}function Fy(a){for(let e=0;e<a.events.length;e++){const n=a.events[e];if(n!==null){a.events[e]=null;const i=n.getEventRunner();wn&&Ve("event: "+n.toString()),qi(i)}}}/**
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
 */const By="repo_interrupt",qy=25;class Wy{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Oy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Er(),this.transactionQueueTree_=new as,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hy(a,e,n){if(a.stats_=Mt(a.repoInfo_),a.forceRestClient_||fh())a.server_=new Cr(a.repoInfo_,(i,r,o,t)=>{Fd(a,i,r,o,t)},a.authTokenProvider_,a.appCheckProvider_),setTimeout(()=>Bd(a,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Fe(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}a.persistentConnection_=new La(a.repoInfo_,e,(i,r,o,t)=>{Fd(a,i,r,o,t)},i=>{Bd(a,i)},i=>{Uy(a,i)},a.authTokenProvider_,a.appCheckProvider_,n),a.server_=a.persistentConnection_}a.authTokenProvider_.addTokenChangeListener(i=>{a.server_.refreshAuthToken(i)}),a.appCheckProvider_.addTokenChangeListener(i=>{a.server_.refreshAppCheckToken(i.token)}),a.statsReporter_=Ch(a.repoInfo_,()=>new wg(a.stats_,a.server_)),a.infoData_=new yg,a.infoSyncTree_=new Md({startListening:(i,r,o,t)=>{let s=[];const d=a.infoData_.getNode(i._path);return d.isEmpty()||(s=Hi(a.infoSyncTree_,i._path,d),setTimeout(()=>{t("ok")},0)),s},stopListening:()=>{}}),is(a,"connected",!1),a.serverSyncTree_=new Md({startListening:(i,r,o,t)=>(a.server_.listen(i,o,r,(s,d)=>{const m=t(s,d);dn(a.eventQueue_,i._path,m)}),[]),stopListening:(i,r)=>{a.server_.unlisten(i,r)}})}function $y(a){const n=a.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kl(a){return wy({timestamp:$y(a)})}function Fd(a,e,n,i,r){a.dataUpdateCount++;const o=new Ce(e);n=a.interceptServerDataCallback_?a.interceptServerDataCallback_(e,n):n;let t=[];if(r)if(i){const d=fr(n,m=>$e(m));t=hy(a.serverSyncTree_,o,d,r)}else{const d=$e(n);t=al(a.serverSyncTree_,o,d,r)}else if(i){const d=fr(n,m=>$e(m));t=ky(a.serverSyncTree_,o,d)}else{const d=$e(n);t=Hi(a.serverSyncTree_,o,d)}let s=o;t.length>0&&(s=ts(a,o)),dn(a.eventQueue_,s,t)}function Bd(a,e){is(a,"connected",e),e===!1&&Yy(a)}function Uy(a,e){ra(e,(n,i)=>{is(a,n,i)})}function is(a,e,n){const i=new Ce("/.info/"+e),r=$e(n);a.infoData_.updateSnapshot(i,r);const o=Hi(a.infoSyncTree_,i,r);dn(a.eventQueue_,i,o)}function Ky(a){return a.nextWriteId_++}function Vy(a,e,n){const i=yy(a.serverSyncTree_,e);return i!=null?Promise.resolve(i):a.server_.get(e).then(r=>{const o=$e(r).withIndex(e._queryParams.getIndex());gy(a.serverSyncTree_,e,n,!0);let t;if(e._queryParams.loadsAllData())t=Hi(a.serverSyncTree_,e._path,o);else{const s=Di(a.serverSyncTree_,e);t=al(a.serverSyncTree_,e._path,o,s)}return dn(a.eventQueue_,e._path,t),el(a.serverSyncTree_,e,n,null,!0),o},r=>(rs(a,"get for query "+Fe(e)+" failed: "+r),Promise.reject(new Error(r))))}function Yy(a){rs(a,"onDisconnectEvents");const e=kl(a),n=Er();Qo(a.onDisconnect_,ce(),(r,o)=>{const t=Ey(r,o,a.serverSyncTree_,e);Lu(n,r,t)});let i=[];Qo(n,ce(),(r,o)=>{i=i.concat(Hi(a.serverSyncTree_,r,o));const t=Xy(a,r);ts(a,t)}),a.onDisconnect_=Er(),dn(a.eventQueue_,ce(),i)}function Gy(a){a.persistentConnection_&&a.persistentConnection_.interrupt(By)}function rs(a,...e){let n="";a.persistentConnection_&&(n=a.persistentConnection_.id+":"),Ve(n,...e)}function cl(a,e,n){return nl(a.serverSyncTree_,e,n)||Z.EMPTY_NODE}function os(a,e=a.transactionQueueTree_){if(e||Xr(a,e),ni(e)){const n=hl(a,e);P(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&Jy(a,Ui(e),n)}else sl(e)&&Qr(e,n=>{os(a,n)})}function Jy(a,e,n){const i=n.map(m=>m.currentWriteId),r=cl(a,e,i);let o=r;const t=r.hash();for(let m=0;m<n.length;m++){const c=n[m];P(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const u=Ze(e,c.path);o=o.updateChild(u,c.currentOutputSnapshotRaw)}const s=o.val(!0),d=e;a.server_.put(d.toString(),s,m=>{rs(a,"transaction put response",{path:d.toString(),status:m});let c=[];if(m==="ok"){const u=[];for(let k=0;k<n.length;k++)n[k].status=2,c=c.concat(Mn(a.serverSyncTree_,n[k].currentWriteId)),n[k].onComplete&&u.push(()=>n[k].onComplete(null,!0,n[k].currentOutputSnapshotResolved)),n[k].unwatcher();Xr(a,ns(a.transactionQueueTree_,e)),os(a,a.transactionQueueTree_),dn(a.eventQueue_,e,c);for(let k=0;k<u.length;k++)qi(u[k])}else{if(m==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{ta("transaction at "+d.toString()+" failed: "+m);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=m}ts(a,e)}},t)}function ts(a,e){const n=pl(a,e),i=Ui(n),r=hl(a,n);return Qy(a,r,i),i}function Qy(a,e,n){if(e.length===0)return;const i=[];let r=[];const t=e.filter(s=>s.status===0).map(s=>s.currentWriteId);for(let s=0;s<e.length;s++){const d=e[s],m=Ze(n,d.path);let c=!1,u;if(P(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)c=!0,u=d.abortReason,r=r.concat(Mn(a.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=qy)c=!0,u="maxretry",r=r.concat(Mn(a.serverSyncTree_,d.currentWriteId,!0));else{const k=cl(a,d.path,t);d.currentInputSnapshot=k;const b=e[s].update(k.val());if(b!==void 0){ll("transaction failed: Data returned ",b,d.path);let w=$e(b);typeof b=="object"&&b!=null&&qa(b,".priority")||(w=w.updatePriority(k.getPriority()));const M=d.currentWriteId,K=kl(a),F=Iy(w,k,K);d.currentOutputSnapshotRaw=w,d.currentOutputSnapshotResolved=F,d.currentWriteId=Ky(a),t.splice(t.indexOf(M),1),r=r.concat(_y(a.serverSyncTree_,d.path,F,d.currentWriteId,d.applyLocally)),r=r.concat(Mn(a.serverSyncTree_,M,!0))}else c=!0,u="nodata",r=r.concat(Mn(a.serverSyncTree_,d.currentWriteId,!0))}dn(a.eventQueue_,n,r),r=[],c&&(e[s].status=2,function(k){setTimeout(k,Math.floor(0))}(e[s].unwatcher),e[s].onComplete&&(u==="nodata"?i.push(()=>e[s].onComplete(null,!1,e[s].currentInputSnapshot)):i.push(()=>e[s].onComplete(new Error(u),!1,null))))}Xr(a,a.transactionQueueTree_);for(let s=0;s<i.length;s++)qi(i[s]);os(a,a.transactionQueueTree_)}function pl(a,e){let n,i=a.transactionQueueTree_;for(n=le(e);n!==null&&ni(i)===void 0;)i=ns(i,n),e=Ie(e),n=le(e);return i}function hl(a,e){const n=[];return gl(a,e,n),n.sort((i,r)=>i.order-r.order),n}function gl(a,e,n){const i=ni(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Qr(e,r=>{gl(a,r,n)})}function Xr(a,e){const n=ni(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,tl(e,n.length>0?n:void 0)}Qr(e,i=>{Xr(a,i)})}function Xy(a,e){const n=Ui(pl(a,e)),i=ns(a.transactionQueueTree_,e);return Sy(i,r=>{xo(a,r)}),xo(a,i),dl(i,r=>{xo(a,r)}),n}function xo(a,e){const n=ni(e);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)n[t].status===3||(n[t].status===1?(P(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(P(n[t].status===0,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Mn(a.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));o===-1?tl(e,void 0):n.length=o+1,dn(a.eventQueue_,Ui(e),r);for(let t=0;t<i.length;t++)qi(i[t])}}/**
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
 */function Zy(a){let e="";const n=a.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function ef(a){const e={};a.charAt(0)==="?"&&(a=a.substring(1));for(const n of a.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ta(`Invalid query segment '${n}' in query '${a}'`)}return e}const qd=function(a,e){const n=af(a),i=n.namespace;n.domain==="firebase.com"&&En(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&En("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||uh();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new vh(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new Ce(n.pathString)}},af=function(a){let e="",n="",i="",r="",o="",t=!0,s="https",d=443;if(typeof a=="string"){let m=a.indexOf("//");m>=0&&(s=a.substring(0,m-1),a=a.substring(m+2));let c=a.indexOf("/");c===-1&&(c=a.length);let u=a.indexOf("?");u===-1&&(u=a.length),e=a.substring(0,Math.min(c,u)),c<u&&(r=Zy(a.substring(c,u)));const k=ef(a.substring(Math.min(a.length,u)));m=e.indexOf(":"),m>=0?(t=s==="https"||s==="wss",d=parseInt(e.substring(m+1),10)):m=e.length;const b=e.slice(0,m);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const w=e.indexOf(".");i=e.substring(0,w).toLowerCase(),n=e.substring(w+1),o=i}"ns"in k&&(o=k.ns)}return{host:e,port:d,domain:n,subdomain:i,secure:t,scheme:s,pathString:r,namespace:o}};/**
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
 */class nf{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Fe(this.snapshot.exportVal())}}class rf{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class of{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ss{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return de(this._path)?null:Iu(this._path)}get ref(){return new Wa(this._repo,this._path)}get _queryIdentifier(){const e=Ed(this._queryParams),n=Dt(e);return n==="{}"?"default":n}get _queryObject(){return Ed(this._queryParams)}isEqual(e){if(e=Ur(e),!(e instanceof ss))return!1;const n=this._repo===e._repo,i=Nu(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Yh(this._path)}}class Wa extends ss{constructor(e,n){super(e,n,new Wt,!1)}get parent(){const e=Su(this._path);return e===null?null:new Wa(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Oi{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ce(e),i=it(this.ref,e);return new Oi(this._node.getChild(n),i,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Oi(r,it(this.ref,i),ze)))}hasChild(e){const n=new Ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tf(a,e){return a=Ur(a),a._checkNotDeleted("ref"),e!==void 0?it(a._root,e):a._root}function it(a,e){return a=Ur(a),le(a._path)===null?Py("child","path",e,!1):_l("child","path",e,!1),new Wa(a._repo,Be(a._path,e))}function sf(a){a=Ur(a);const e=new of(()=>{}),n=new ds(e);return Vy(a._repo,a,n).then(i=>new Oi(i,new Wa(a._repo,a._path),a._queryParams.getIndex()))}class ds{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new nf("value",this,new Oi(e.snapshotNode,new Wa(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new rf(this,e,n):null}matches(e){return e instanceof ds?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}ry(Wa);my(Wa);/**
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
 */const df="FIREBASE_DATABASE_EMULATOR_HOST",rt={};let mf=!1;function uf(a,e,n,i,r){let o=i||a.options.databaseURL;o===void 0&&(a.options.projectId||En("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ve("Using default host for project ",a.options.projectId),o=`${a.options.projectId}-default-rtdb.firebaseio.com`);let t=qd(o,r),s=t.repoInfo,d,m;typeof process<"u"&&process.env&&(m=process.env[df]),m?(d=!0,o=`http://${m}?ns=${s.namespace}`,t=qd(o,r),s=t.repoInfo):d=!t.repoInfo.secure;const c=r&&d?new Yo(Yo.OWNER):new bh(a.name,a.options,e);Dy("Invalid Firebase Database URL",t),de(t.path)||En("Database URL must point to the root of a Firebase Database (not including a child path).");const u=_f(s,a,c,new jh(a.name,n));return new kf(u,a)}function lf(a,e){const n=rt[e];(!n||n[a.key]!==a)&&En(`Database ${e}(${a.repoInfo_}) has already been deleted.`),Gy(a),delete n[a.key]}function _f(a,e,n,i){let r=rt[e.name];r||(r={},rt[e.name]=r);let o=r[a.toURLString()];return o&&En("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Wy(a,mf,n,i),r[a.toURLString()]=o,o}class kf{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wa(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&En("Cannot call "+e+" on a deleted database.")}}function cf(a=Vp(),e){return Wp(a,"database").getImmediate({identifier:e})}/**
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
*/(function(a,e){(function(n){a.exports=n()})(function(){return function n(i,r,o){function t(m,c){if(!r[m]){if(!i[m]){var u=typeof or=="function"&&or;if(!c&&u)return u(m,!0);if(s)return s(m,!0);var k=new Error("Cannot find module '"+m+"'");throw k.code="MODULE_NOT_FOUND",k}var b=r[m]={exports:{}};i[m][0].call(b.exports,function(w){var L=i[m][1][w];return t(L||w)},b,b.exports,n,i,r,o)}return r[m].exports}for(var s=typeof or=="function"&&or,d=0;d<o.length;d++)t(o[d]);return t}({1:[function(n,i,r){(function(o){var t=o.MutationObserver||o.WebKitMutationObserver,s;if(t){var d=0,m=new t(w),c=o.document.createTextNode("");m.observe(c,{characterData:!0}),s=function(){c.data=d=++d%2}}else if(!o.setImmediate&&typeof o.MessageChannel<"u"){var u=new o.MessageChannel;u.port1.onmessage=w,s=function(){u.port2.postMessage(0)}}else"document"in o&&"onreadystatechange"in o.document.createElement("script")?s=function(){var M=o.document.createElement("script");M.onreadystatechange=function(){w(),M.onreadystatechange=null,M.parentNode.removeChild(M),M=null},o.document.documentElement.appendChild(M)}:s=function(){setTimeout(w,0)};var k,b=[];function w(){k=!0;for(var M,K,F=b.length;F;){for(K=b,b=[],M=-1;++M<F;)K[M]();F=b.length}k=!1}i.exports=L;function L(M){b.push(M)===1&&!k&&s()}}).call(this,typeof rr<"u"?rr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(n,i,r){var o=n(1);function t(){}var s={},d=["REJECTED"],m=["FULFILLED"],c=["PENDING"];i.exports=u;function u(I){if(typeof I!="function")throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,I!==t&&L(this,I)}u.prototype.catch=function(I){return this.then(null,I)},u.prototype.then=function(I,J){if(typeof I!="function"&&this.state===m||typeof J!="function"&&this.state===d)return this;var G=new this.constructor(t);if(this.state!==c){var q=this.state===m?I:J;b(G,q,this.outcome)}else this.queue.push(new k(G,I,J));return G};function k(I,J,G){this.promise=I,typeof J=="function"&&(this.onFulfilled=J,this.callFulfilled=this.otherCallFulfilled),typeof G=="function"&&(this.onRejected=G,this.callRejected=this.otherCallRejected)}k.prototype.callFulfilled=function(I){s.resolve(this.promise,I)},k.prototype.otherCallFulfilled=function(I){b(this.promise,this.onFulfilled,I)},k.prototype.callRejected=function(I){s.reject(this.promise,I)},k.prototype.otherCallRejected=function(I){b(this.promise,this.onRejected,I)};function b(I,J,G){o(function(){var q;try{q=J(G)}catch(Q){return s.reject(I,Q)}q===I?s.reject(I,new TypeError("Cannot resolve promise with itself")):s.resolve(I,q)})}s.resolve=function(I,J){var G=M(w,J);if(G.status==="error")return s.reject(I,G.value);var q=G.value;if(q)L(I,q);else{I.state=m,I.outcome=J;for(var Q=-1,ie=I.queue.length;++Q<ie;)I.queue[Q].callFulfilled(J)}return I},s.reject=function(I,J){I.state=d,I.outcome=J;for(var G=-1,q=I.queue.length;++G<q;)I.queue[G].callRejected(J);return I};function w(I){var J=I&&I.then;if(I&&(typeof I=="object"||typeof I=="function")&&typeof J=="function")return function(){J.apply(I,arguments)}}function L(I,J){var G=!1;function q(W){G||(G=!0,s.reject(I,W))}function Q(W){G||(G=!0,s.resolve(I,W))}function ie(){J(Q,q)}var oe=M(ie);oe.status==="error"&&q(oe.value)}function M(I,J){var G={};try{G.value=I(J),G.status="success"}catch(q){G.status="error",G.value=q}return G}u.resolve=K;function K(I){return I instanceof this?I:s.resolve(new this(t),I)}u.reject=F;function F(I){var J=new this(t);return s.reject(J,I)}u.all=U;function U(I){var J=this;if(Object.prototype.toString.call(I)!=="[object Array]")return this.reject(new TypeError("must be an array"));var G=I.length,q=!1;if(!G)return this.resolve([]);for(var Q=new Array(G),ie=0,oe=-1,W=new this(t);++oe<G;)me(I[oe],oe);return W;function me(Re,ka){J.resolve(Re).then(Pe,function(fe){q||(q=!0,s.reject(W,fe))});function Pe(fe){Q[ka]=fe,++ie===G&&!q&&(q=!0,s.resolve(W,Q))}}}u.race=ne;function ne(I){var J=this;if(Object.prototype.toString.call(I)!=="[object Array]")return this.reject(new TypeError("must be an array"));var G=I.length,q=!1;if(!G)return this.resolve([]);for(var Q=-1,ie=new this(t);++Q<G;)oe(I[Q]);return ie;function oe(W){J.resolve(W).then(function(me){q||(q=!0,s.resolve(ie,me))},function(me){q||(q=!0,s.reject(ie,me))})}}},{1:1}],3:[function(n,i,r){(function(o){typeof o.Promise!="function"&&(o.Promise=n(2))}).call(this,typeof rr<"u"?rr:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(n,i,r){var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};function t(l,h){if(!(l instanceof h))throw new TypeError("Cannot call a class as a function")}function s(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var d=s();function m(){try{if(!d||!d.open)return!1;var l=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),h=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!l||h)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function c(l,h){l=l||[],h=h||{};try{return new Blob(l,h)}catch(g){if(g.name!=="TypeError")throw g;for(var _=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,y=new _,j=0;j<l.length;j+=1)y.append(l[j]);return y.getBlob(h.type)}}typeof Promise>"u"&&n(3);var u=Promise;function k(l,h){h&&l.then(function(_){h(null,_)},function(_){h(_)})}function b(l,h,_){typeof h=="function"&&l.then(h),typeof _=="function"&&l.catch(_)}function w(l){return typeof l!="string"&&(console.warn(l+" used as a key, but it is not a string."),l=String(l)),l}function L(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var M="local-forage-detect-blob-support",K=void 0,F={},U=Object.prototype.toString,ne="readonly",I="readwrite";function J(l){for(var h=l.length,_=new ArrayBuffer(h),y=new Uint8Array(_),j=0;j<h;j++)y[j]=l.charCodeAt(j);return _}function G(l){return new u(function(h){var _=l.transaction(M,I),y=c([""]);_.objectStore(M).put(y,"key"),_.onabort=function(j){j.preventDefault(),j.stopPropagation(),h(!1)},_.oncomplete=function(){var j=navigator.userAgent.match(/Chrome\/(\d+)/),g=navigator.userAgent.match(/Edge\//);h(g||!j||parseInt(j[1],10)>=43)}}).catch(function(){return!1})}function q(l){return typeof K=="boolean"?u.resolve(K):G(l).then(function(h){return K=h,K})}function Q(l){var h=F[l.name],_={};_.promise=new u(function(y,j){_.resolve=y,_.reject=j}),h.deferredOperations.push(_),h.dbReady?h.dbReady=h.dbReady.then(function(){return _.promise}):h.dbReady=_.promise}function ie(l){var h=F[l.name],_=h.deferredOperations.pop();if(_)return _.resolve(),_.promise}function oe(l,h){var _=F[l.name],y=_.deferredOperations.pop();if(y)return y.reject(h),y.promise}function W(l,h){return new u(function(_,y){if(F[l.name]=F[l.name]||Aa(),l.db)if(h)Q(l),l.db.close();else return _(l.db);var j=[l.name];h&&j.push(l.version);var g=d.open.apply(d,j);h&&(g.onupgradeneeded=function(x){var T=g.result;try{T.createObjectStore(l.storeName),x.oldVersion<=1&&T.createObjectStore(M)}catch(N){if(N.name==="ConstraintError")console.warn('The database "'+l.name+'" has been upgraded from version '+x.oldVersion+" to version "+x.newVersion+', but the storage "'+l.storeName+'" already exists.');else throw N}}),g.onerror=function(x){x.preventDefault(),y(g.error)},g.onsuccess=function(){var x=g.result;x.onversionchange=function(T){T.target.close()},_(x),ie(l)}})}function me(l){return W(l,!1)}function Re(l){return W(l,!0)}function ka(l,h){if(!l.db)return!0;var _=!l.db.objectStoreNames.contains(l.storeName),y=l.version<l.db.version,j=l.version>l.db.version;if(y&&(l.version!==h&&console.warn('The database "'+l.name+`" can't be downgraded from version `+l.db.version+" to version "+l.version+"."),l.version=l.db.version),j||_){if(_){var g=l.db.version+1;g>l.version&&(l.version=g)}return!0}return!1}function Pe(l){return new u(function(h,_){var y=new FileReader;y.onerror=_,y.onloadend=function(j){var g=btoa(j.target.result||"");h({__local_forage_encoded_blob:!0,data:g,type:l.type})},y.readAsBinaryString(l)})}function fe(l){var h=J(atob(l.data));return c([h],{type:l.type})}function ve(l){return l&&l.__local_forage_encoded_blob}function ca(l){var h=this,_=h._initReady().then(function(){var y=F[h._dbInfo.name];if(y&&y.dbReady)return y.dbReady});return b(_,l,l),_}function ii(l){Q(l);for(var h=F[l.name],_=h.forages,y=0;y<_.length;y++){var j=_[y];j._dbInfo.db&&(j._dbInfo.db.close(),j._dbInfo.db=null)}return l.db=null,me(l).then(function(g){return l.db=g,ka(l)?Re(l):g}).then(function(g){l.db=h.db=g;for(var x=0;x<_.length;x++)_[x]._dbInfo.db=g}).catch(function(g){throw oe(l,g),g})}function Ge(l,h,_,y){y===void 0&&(y=1);try{var j=l.db.transaction(l.storeName,h);_(null,j)}catch(g){if(y>0&&(!l.db||g.name==="InvalidStateError"||g.name==="NotFoundError"))return u.resolve().then(function(){if(!l.db||g.name==="NotFoundError"&&!l.db.objectStoreNames.contains(l.storeName)&&l.version<=l.db.version)return l.db&&(l.version=l.db.version+1),Re(l)}).then(function(){return ii(l).then(function(){Ge(l,h,_,y-1)})}).catch(_);_(g)}}function Aa(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Ca(l){var h=this,_={db:null};if(l)for(var y in l)_[y]=l[y];var j=F[_.name];j||(j=Aa(),F[_.name]=j),j.forages.push(h),h._initReady||(h._initReady=h.ready,h.ready=ca);var g=[];function x(){return u.resolve()}for(var T=0;T<j.forages.length;T++){var N=j.forages[T];N!==h&&g.push(N._initReady().catch(x))}var R=j.forages.slice(0);return u.all(g).then(function(){return _.db=j.db,me(_)}).then(function(D){return _.db=D,ka(_,h._defaultConfig.version)?Re(_):D}).then(function(D){_.db=j.db=D,h._dbInfo=_;for(var $=0;$<R.length;$++){var te=R[$];te!==h&&(te._dbInfo.db=_.db,te._dbInfo.version=_.version)}})}function Ki(l,h){var _=this;l=w(l);var y=new u(function(j,g){_.ready().then(function(){Ge(_._dbInfo,ne,function(x,T){if(x)return g(x);try{var N=T.objectStore(_._dbInfo.storeName),R=N.get(l);R.onsuccess=function(){var D=R.result;D===void 0&&(D=null),ve(D)&&(D=fe(D)),j(D)},R.onerror=function(){g(R.error)}}catch(D){g(D)}})}).catch(g)});return k(y,h),y}function Zr(l,h){var _=this,y=new u(function(j,g){_.ready().then(function(){Ge(_._dbInfo,ne,function(x,T){if(x)return g(x);try{var N=T.objectStore(_._dbInfo.storeName),R=N.openCursor(),D=1;R.onsuccess=function(){var $=R.result;if($){var te=$.value;ve(te)&&(te=fe(te));var ge=l(te,$.key,D++);ge!==void 0?j(ge):$.continue()}else j()},R.onerror=function(){g(R.error)}}catch($){g($)}})}).catch(g)});return k(y,h),y}function eo(l,h,_){var y=this;l=w(l);var j=new u(function(g,x){var T;y.ready().then(function(){return T=y._dbInfo,U.call(h)==="[object Blob]"?q(T.db).then(function(N){return N?h:Pe(h)}):h}).then(function(N){Ge(y._dbInfo,I,function(R,D){if(R)return x(R);try{var $=D.objectStore(y._dbInfo.storeName);N===null&&(N=void 0);var te=$.put(N,l);D.oncomplete=function(){N===void 0&&(N=null),g(N)},D.onabort=D.onerror=function(){var ge=te.error?te.error:te.transaction.error;x(ge)}}catch(ge){x(ge)}})}).catch(x)});return k(j,_),j}function pa(l,h){var _=this;l=w(l);var y=new u(function(j,g){_.ready().then(function(){Ge(_._dbInfo,I,function(x,T){if(x)return g(x);try{var N=T.objectStore(_._dbInfo.storeName),R=N.delete(l);T.oncomplete=function(){j()},T.onerror=function(){g(R.error)},T.onabort=function(){var D=R.error?R.error:R.transaction.error;g(D)}}catch(D){g(D)}})}).catch(g)});return k(y,h),y}function An(l){var h=this,_=new u(function(y,j){h.ready().then(function(){Ge(h._dbInfo,I,function(g,x){if(g)return j(g);try{var T=x.objectStore(h._dbInfo.storeName),N=T.clear();x.oncomplete=function(){y()},x.onabort=x.onerror=function(){var R=N.error?N.error:N.transaction.error;j(R)}}catch(R){j(R)}})}).catch(j)});return k(_,l),_}function Vi(l){var h=this,_=new u(function(y,j){h.ready().then(function(){Ge(h._dbInfo,ne,function(g,x){if(g)return j(g);try{var T=x.objectStore(h._dbInfo.storeName),N=T.count();N.onsuccess=function(){y(N.result)},N.onerror=function(){j(N.error)}}catch(R){j(R)}})}).catch(j)});return k(_,l),_}function Ha(l,h){var _=this,y=new u(function(j,g){if(l<0){j(null);return}_.ready().then(function(){Ge(_._dbInfo,ne,function(x,T){if(x)return g(x);try{var N=T.objectStore(_._dbInfo.storeName),R=!1,D=N.openKeyCursor();D.onsuccess=function(){var $=D.result;if(!$){j(null);return}l===0||R?j($.key):(R=!0,$.advance(l))},D.onerror=function(){g(D.error)}}catch($){g($)}})}).catch(g)});return k(y,h),y}function ri(l){var h=this,_=new u(function(y,j){h.ready().then(function(){Ge(h._dbInfo,ne,function(g,x){if(g)return j(g);try{var T=x.objectStore(h._dbInfo.storeName),N=T.openKeyCursor(),R=[];N.onsuccess=function(){var D=N.result;if(!D){y(R);return}R.push(D.key),D.continue()},N.onerror=function(){j(N.error)}}catch(D){j(D)}})}).catch(j)});return k(_,l),_}function oi(l,h){h=L.apply(this,arguments);var _=this.config();l=typeof l!="function"&&l||{},l.name||(l.name=l.name||_.name,l.storeName=l.storeName||_.storeName);var y=this,j;if(!l.name)j=u.reject("Invalid arguments");else{var g=l.name===_.name&&y._dbInfo.db,x=g?u.resolve(y._dbInfo.db):me(l).then(function(T){var N=F[l.name],R=N.forages;N.db=T;for(var D=0;D<R.length;D++)R[D]._dbInfo.db=T;return T});l.storeName?j=x.then(function(T){if(!!T.objectStoreNames.contains(l.storeName)){var N=T.version+1;Q(l);var R=F[l.name],D=R.forages;T.close();for(var $=0;$<D.length;$++){var te=D[$];te._dbInfo.db=null,te._dbInfo.version=N}var ge=new u(function(je,Le){var De=d.open(l.name,N);De.onerror=function(da){var mi=De.result;mi.close(),Le(da)},De.onupgradeneeded=function(){var da=De.result;da.deleteObjectStore(l.storeName)},De.onsuccess=function(){var da=De.result;da.close(),je(da)}});return ge.then(function(je){R.db=je;for(var Le=0;Le<D.length;Le++){var De=D[Le];De._dbInfo.db=je,ie(De._dbInfo)}}).catch(function(je){throw(oe(l,je)||u.resolve()).catch(function(){}),je})}}):j=x.then(function(T){Q(l);var N=F[l.name],R=N.forages;T.close();for(var D=0;D<R.length;D++){var $=R[D];$._dbInfo.db=null}var te=new u(function(ge,je){var Le=d.deleteDatabase(l.name);Le.onerror=function(){var De=Le.result;De&&De.close(),je(Le.error)},Le.onblocked=function(){console.warn('dropInstance blocked for database "'+l.name+'" until all open connections are closed')},Le.onsuccess=function(){var De=Le.result;De&&De.close(),ge(De)}});return te.then(function(ge){N.db=ge;for(var je=0;je<R.length;je++){var Le=R[je];ie(Le._dbInfo)}}).catch(function(ge){throw(oe(l,ge)||u.resolve()).catch(function(){}),ge})})}return k(j,h),j}var p={_driver:"asyncStorage",_initStorage:Ca,_support:m(),iterate:Zr,getItem:Ki,setItem:eo,removeItem:pa,clear:An,length:Vi,key:Ha,keys:ri,dropInstance:oi};function f(){return typeof openDatabase=="function"}var v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",E="~~local_forage_type~",C=/^~~local_forage_type~([^~]+)~/,z="__lfsc__:",B=z.length,A="arbf",O="blob",S="si08",V="ui08",H="uic8",Y="si16",ee="si32",ue="ur16",pe="ui32",he="fl32",we="fl64",ea=B+A.length,za=Object.prototype.toString;function ti(l){var h=l.length*.75,_=l.length,y,j=0,g,x,T,N;l[l.length-1]==="="&&(h--,l[l.length-2]==="="&&h--);var R=new ArrayBuffer(h),D=new Uint8Array(R);for(y=0;y<_;y+=4)g=v.indexOf(l[y]),x=v.indexOf(l[y+1]),T=v.indexOf(l[y+2]),N=v.indexOf(l[y+3]),D[j++]=g<<2|x>>4,D[j++]=(x&15)<<4|T>>2,D[j++]=(T&3)<<6|N&63;return R}function Pa(l){var h=new Uint8Array(l),_="",y;for(y=0;y<h.length;y+=3)_+=v[h[y]>>2],_+=v[(h[y]&3)<<4|h[y+1]>>4],_+=v[(h[y+1]&15)<<2|h[y+2]>>6],_+=v[h[y+2]&63];return h.length%3===2?_=_.substring(0,_.length-1)+"=":h.length%3===1&&(_=_.substring(0,_.length-2)+"=="),_}function Yi(l,h){var _="";if(l&&(_=za.call(l)),l&&(_==="[object ArrayBuffer]"||l.buffer&&za.call(l.buffer)==="[object ArrayBuffer]")){var y,j=z;l instanceof ArrayBuffer?(y=l,j+=A):(y=l.buffer,_==="[object Int8Array]"?j+=S:_==="[object Uint8Array]"?j+=V:_==="[object Uint8ClampedArray]"?j+=H:_==="[object Int16Array]"?j+=Y:_==="[object Uint16Array]"?j+=ue:_==="[object Int32Array]"?j+=ee:_==="[object Uint32Array]"?j+=pe:_==="[object Float32Array]"?j+=he:_==="[object Float64Array]"?j+=we:h(new Error("Failed to get type for BinaryArray"))),h(j+Pa(y))}else if(_==="[object Blob]"){var g=new FileReader;g.onload=function(){var x=E+l.type+"~"+Pa(this.result);h(z+O+x)},g.readAsArrayBuffer(l)}else try{h(JSON.stringify(l))}catch(x){console.error("Couldn't convert value into a JSON string: ",l),h(null,x)}}function Je(l){if(l.substring(0,B)!==z)return JSON.parse(l);var h=l.substring(ea),_=l.substring(B,ea),y;if(_===O&&C.test(h)){var j=h.match(C);y=j[1],h=h.substring(j[0].length)}var g=ti(h);switch(_){case A:return g;case O:return c([g],{type:y});case S:return new Int8Array(g);case V:return new Uint8Array(g);case H:return new Uint8ClampedArray(g);case Y:return new Int16Array(g);case ue:return new Uint16Array(g);case ee:return new Int32Array(g);case pe:return new Uint32Array(g);case he:return new Float32Array(g);case we:return new Float64Array(g);default:throw new Error("Unkown type: "+_)}}var aa={serialize:Yi,deserialize:Je,stringToBuffer:ti,bufferToString:Pa};function si(l,h,_,y){l.executeSql("CREATE TABLE IF NOT EXISTS "+h.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],_,y)}function fl(l){var h=this,_={db:null};if(l)for(var y in l)_[y]=typeof l[y]!="string"?l[y].toString():l[y];var j=new u(function(g,x){try{_.db=openDatabase(_.name,String(_.version),_.description,_.size)}catch(T){return x(T)}_.db.transaction(function(T){si(T,_,function(){h._dbInfo=_,g()},function(N,R){x(R)})},x)});return _.serializer=aa,j}function $a(l,h,_,y,j,g){l.executeSql(_,y,j,function(x,T){T.code===T.SYNTAX_ERR?x.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[h.storeName],function(N,R){R.rows.length?g(N,T):si(N,h,function(){N.executeSql(_,y,j,g)},g)},g):g(x,T)},g)}function jl(l,h){var _=this;l=w(l);var y=new u(function(j,g){_.ready().then(function(){var x=_._dbInfo;x.db.transaction(function(T){$a(T,x,"SELECT * FROM "+x.storeName+" WHERE key = ? LIMIT 1",[l],function(N,R){var D=R.rows.length?R.rows.item(0).value:null;D&&(D=x.serializer.deserialize(D)),j(D)},function(N,R){g(R)})})}).catch(g)});return k(y,h),y}function bl(l,h){var _=this,y=new u(function(j,g){_.ready().then(function(){var x=_._dbInfo;x.db.transaction(function(T){$a(T,x,"SELECT * FROM "+x.storeName,[],function(N,R){for(var D=R.rows,$=D.length,te=0;te<$;te++){var ge=D.item(te),je=ge.value;if(je&&(je=x.serializer.deserialize(je)),je=l(je,ge.key,te+1),je!==void 0){j(je);return}}j()},function(N,R){g(R)})})}).catch(g)});return k(y,h),y}function ls(l,h,_,y){var j=this;l=w(l);var g=new u(function(x,T){j.ready().then(function(){h===void 0&&(h=null);var N=h,R=j._dbInfo;R.serializer.serialize(h,function(D,$){$?T($):R.db.transaction(function(te){$a(te,R,"INSERT OR REPLACE INTO "+R.storeName+" (key, value) VALUES (?, ?)",[l,D],function(){x(N)},function(ge,je){T(je)})},function(te){if(te.code===te.QUOTA_ERR){if(y>0){x(ls.apply(j,[l,N,_,y-1]));return}T(te)}})})}).catch(T)});return k(g,_),g}function vl(l,h,_){return ls.apply(this,[l,h,_,1])}function wl(l,h){var _=this;l=w(l);var y=new u(function(j,g){_.ready().then(function(){var x=_._dbInfo;x.db.transaction(function(T){$a(T,x,"DELETE FROM "+x.storeName+" WHERE key = ?",[l],function(){j()},function(N,R){g(R)})})}).catch(g)});return k(y,h),y}function xl(l){var h=this,_=new u(function(y,j){h.ready().then(function(){var g=h._dbInfo;g.db.transaction(function(x){$a(x,g,"DELETE FROM "+g.storeName,[],function(){y()},function(T,N){j(N)})})}).catch(j)});return k(_,l),_}function Cl(l){var h=this,_=new u(function(y,j){h.ready().then(function(){var g=h._dbInfo;g.db.transaction(function(x){$a(x,g,"SELECT COUNT(key) as c FROM "+g.storeName,[],function(T,N){var R=N.rows.item(0).c;y(R)},function(T,N){j(N)})})}).catch(j)});return k(_,l),_}function El(l,h){var _=this,y=new u(function(j,g){_.ready().then(function(){var x=_._dbInfo;x.db.transaction(function(T){$a(T,x,"SELECT key FROM "+x.storeName+" WHERE id = ? LIMIT 1",[l+1],function(N,R){var D=R.rows.length?R.rows.item(0).key:null;j(D)},function(N,R){g(R)})})}).catch(g)});return k(y,h),y}function Il(l){var h=this,_=new u(function(y,j){h.ready().then(function(){var g=h._dbInfo;g.db.transaction(function(x){$a(x,g,"SELECT key FROM "+g.storeName,[],function(T,N){for(var R=[],D=0;D<N.rows.length;D++)R.push(N.rows.item(D).key);y(R)},function(T,N){j(N)})})}).catch(j)});return k(_,l),_}function Tl(l){return new u(function(h,_){l.transaction(function(y){y.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(j,g){for(var x=[],T=0;T<g.rows.length;T++)x.push(g.rows.item(T).name);h({db:l,storeNames:x})},function(j,g){_(g)})},function(y){_(y)})})}function Sl(l,h){h=L.apply(this,arguments);var _=this.config();l=typeof l!="function"&&l||{},l.name||(l.name=l.name||_.name,l.storeName=l.storeName||_.storeName);var y=this,j;return l.name?j=new u(function(g){var x;l.name===_.name?x=y._dbInfo.db:x=openDatabase(l.name,"","",0),l.storeName?g({db:x,storeNames:[l.storeName]}):g(Tl(x))}).then(function(g){return new u(function(x,T){g.db.transaction(function(N){function R(ge){return new u(function(je,Le){N.executeSql("DROP TABLE IF EXISTS "+ge,[],function(){je()},function(De,da){Le(da)})})}for(var D=[],$=0,te=g.storeNames.length;$<te;$++)D.push(R(g.storeNames[$]));u.all(D).then(function(){x()}).catch(function(ge){T(ge)})},function(N){T(N)})})}):j=u.reject("Invalid arguments"),k(j,h),j}var Nl={_driver:"webSQLStorage",_initStorage:fl,_support:f(),iterate:bl,getItem:jl,setItem:vl,removeItem:wl,clear:xl,length:Cl,key:El,keys:Il,dropInstance:Sl};function Rl(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function _s(l,h){var _=l.name+"/";return l.storeName!==h.storeName&&(_+=l.storeName+"/"),_}function Al(){var l="_localforage_support_test";try{return localStorage.setItem(l,!0),localStorage.removeItem(l),!1}catch{return!0}}function zl(){return!Al()||localStorage.length>0}function Pl(l){var h=this,_={};if(l)for(var y in l)_[y]=l[y];return _.keyPrefix=_s(l,h._defaultConfig),zl()?(h._dbInfo=_,_.serializer=aa,u.resolve()):u.reject()}function Dl(l){var h=this,_=h.ready().then(function(){for(var y=h._dbInfo.keyPrefix,j=localStorage.length-1;j>=0;j--){var g=localStorage.key(j);g.indexOf(y)===0&&localStorage.removeItem(g)}});return k(_,l),_}function Ol(l,h){var _=this;l=w(l);var y=_.ready().then(function(){var j=_._dbInfo,g=localStorage.getItem(j.keyPrefix+l);return g&&(g=j.serializer.deserialize(g)),g});return k(y,h),y}function Ml(l,h){var _=this,y=_.ready().then(function(){for(var j=_._dbInfo,g=j.keyPrefix,x=g.length,T=localStorage.length,N=1,R=0;R<T;R++){var D=localStorage.key(R);if(D.indexOf(g)===0){var $=localStorage.getItem(D);if($&&($=j.serializer.deserialize($)),$=l($,D.substring(x),N++),$!==void 0)return $}}});return k(y,h),y}function Ll(l,h){var _=this,y=_.ready().then(function(){var j=_._dbInfo,g;try{g=localStorage.key(l)}catch{g=null}return g&&(g=g.substring(j.keyPrefix.length)),g});return k(y,h),y}function Fl(l){var h=this,_=h.ready().then(function(){for(var y=h._dbInfo,j=localStorage.length,g=[],x=0;x<j;x++){var T=localStorage.key(x);T.indexOf(y.keyPrefix)===0&&g.push(T.substring(y.keyPrefix.length))}return g});return k(_,l),_}function Bl(l){var h=this,_=h.keys().then(function(y){return y.length});return k(_,l),_}function ql(l,h){var _=this;l=w(l);var y=_.ready().then(function(){var j=_._dbInfo;localStorage.removeItem(j.keyPrefix+l)});return k(y,h),y}function Wl(l,h,_){var y=this;l=w(l);var j=y.ready().then(function(){h===void 0&&(h=null);var g=h;return new u(function(x,T){var N=y._dbInfo;N.serializer.serialize(h,function(R,D){if(D)T(D);else try{localStorage.setItem(N.keyPrefix+l,R),x(g)}catch($){($.name==="QuotaExceededError"||$.name==="NS_ERROR_DOM_QUOTA_REACHED")&&T($),T($)}})})});return k(j,_),j}function Hl(l,h){if(h=L.apply(this,arguments),l=typeof l!="function"&&l||{},!l.name){var _=this.config();l.name=l.name||_.name,l.storeName=l.storeName||_.storeName}var y=this,j;return l.name?j=new u(function(g){l.storeName?g(_s(l,y._defaultConfig)):g(l.name+"/")}).then(function(g){for(var x=localStorage.length-1;x>=0;x--){var T=localStorage.key(x);T.indexOf(g)===0&&localStorage.removeItem(T)}}):j=u.reject("Invalid arguments"),k(j,h),j}var $l={_driver:"localStorageWrapper",_initStorage:Pl,_support:Rl(),iterate:Ml,getItem:Ol,setItem:Wl,removeItem:ql,clear:Dl,length:Bl,key:Ll,keys:Fl,dropInstance:Hl},Ul=function(h,_){return h===_||typeof h=="number"&&typeof _=="number"&&isNaN(h)&&isNaN(_)},Kl=function(h,_){for(var y=h.length,j=0;j<y;){if(Ul(h[j],_))return!0;j++}return!1},ks=Array.isArray||function(l){return Object.prototype.toString.call(l)==="[object Array]"},di={},cs={},zn={INDEXEDDB:p,WEBSQL:Nl,LOCALSTORAGE:$l},Vl=[zn.INDEXEDDB._driver,zn.WEBSQL._driver,zn.LOCALSTORAGE._driver],Gi=["dropInstance"],ao=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Gi),Yl={description:"",driver:Vl.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Gl(l,h){l[h]=function(){var _=arguments;return l.ready().then(function(){return l[h].apply(l,_)})}}function no(){for(var l=1;l<arguments.length;l++){var h=arguments[l];if(h)for(var _ in h)h.hasOwnProperty(_)&&(ks(h[_])?arguments[0][_]=h[_].slice():arguments[0][_]=h[_])}return arguments[0]}var Jl=function(){function l(h){t(this,l);for(var _ in zn)if(zn.hasOwnProperty(_)){var y=zn[_],j=y._driver;this[_]=j,di[j]||this.defineDriver(y)}this._defaultConfig=no({},Yl),this._config=no({},this._defaultConfig,h),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return l.prototype.config=function(_){if((typeof _>"u"?"undefined":o(_))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var y in _){if(y==="storeName"&&(_[y]=_[y].replace(/\W/g,"_")),y==="version"&&typeof _[y]!="number")return new Error("Database version must be a number.");this._config[y]=_[y]}return"driver"in _&&_.driver?this.setDriver(this._config.driver):!0}else return typeof _=="string"?this._config[_]:this._config},l.prototype.defineDriver=function(_,y,j){var g=new u(function(x,T){try{var N=_._driver,R=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!_._driver){T(R);return}for(var D=ao.concat("_initStorage"),$=0,te=D.length;$<te;$++){var ge=D[$],je=!Kl(Gi,ge);if((je||_[ge])&&typeof _[ge]!="function"){T(R);return}}var Le=function(){for(var mi=function(Zl){return function(){var e_=new Error("Method "+Zl+" is not implemented by the current driver"),ps=u.reject(e_);return k(ps,arguments[arguments.length-1]),ps}},io=0,Xl=Gi.length;io<Xl;io++){var ro=Gi[io];_[ro]||(_[ro]=mi(ro))}};Le();var De=function(mi){di[N]&&console.info("Redefining LocalForage driver: "+N),di[N]=_,cs[N]=mi,x()};"_support"in _?_._support&&typeof _._support=="function"?_._support().then(De,T):De(!!_._support):De(!0)}catch(da){T(da)}});return b(g,y,j),g},l.prototype.driver=function(){return this._driver||null},l.prototype.getDriver=function(_,y,j){var g=di[_]?u.resolve(di[_]):u.reject(new Error("Driver not found."));return b(g,y,j),g},l.prototype.getSerializer=function(_){var y=u.resolve(aa);return b(y,_),y},l.prototype.ready=function(_){var y=this,j=y._driverSet.then(function(){return y._ready===null&&(y._ready=y._initDriver()),y._ready});return b(j,_,_),j},l.prototype.setDriver=function(_,y,j){var g=this;ks(_)||(_=[_]);var x=this._getSupportedDrivers(_);function T(){g._config.driver=g.driver()}function N($){return g._extend($),T(),g._ready=g._initStorage(g._config),g._ready}function R($){return function(){var te=0;function ge(){for(;te<$.length;){var je=$[te];return te++,g._dbInfo=null,g._ready=null,g.getDriver(je).then(N).catch(ge)}T();var Le=new Error("No available storage method found.");return g._driverSet=u.reject(Le),g._driverSet}return ge()}}var D=this._driverSet!==null?this._driverSet.catch(function(){return u.resolve()}):u.resolve();return this._driverSet=D.then(function(){var $=x[0];return g._dbInfo=null,g._ready=null,g.getDriver($).then(function(te){g._driver=te._driver,T(),g._wrapLibraryMethodsWithReady(),g._initDriver=R(x)})}).catch(function(){T();var $=new Error("No available storage method found.");return g._driverSet=u.reject($),g._driverSet}),b(this._driverSet,y,j),this._driverSet},l.prototype.supports=function(_){return!!cs[_]},l.prototype._extend=function(_){no(this,_)},l.prototype._getSupportedDrivers=function(_){for(var y=[],j=0,g=_.length;j<g;j++){var x=_[j];this.supports(x)&&y.push(x)}return y},l.prototype._wrapLibraryMethodsWithReady=function(){for(var _=0,y=ao.length;_<y;_++)Gl(this,ao[_])},l.prototype.createInstance=function(_){return new l(_)},l}(),Ql=new Jl;i.exports=Ql},{3:3}]},{},[4])(4)})})(yl);const Wd=yl.exports;const us=a=>(wt("data-v-0d825245"),a=a(),xt(),a),Uf={class:"grid"},Kf={class:"word"},Vf={class:"kanji"},Yf=us(()=>X("span",{class:"label"},"Kanji: ",-1)),Gf={key:0},Jf={class:"kana"},Qf=us(()=>X("span",{class:"label"},"Kana: ",-1)),Xf={key:0},Zf={class:"meaning"},ej=us(()=>X("span",{class:"label"},"Meaning: ",-1)),aj={class:"meaning-text"},nj={__name:"Words",async setup(a){let e,n,i,r=[];if([e,n]=Ms(()=>Wd.getItem("local_jisho").then(o=>{i=o,console.log(i)}).catch(function(o){console.log(o)})),await e,n(),console.log(i),i===null&&([e,n]=Ms(()=>sf(yj).then(o=>{o.exists()&&(i=o.val(),Wd.setItem("local_jisho",i).then(t=>{console.log(t)}).catch(t=>{console.log(t)}))}).catch(o=>{console.error(o)})),await e,n()),Ae[2].visible){let o=0;r=[];for(let t=0;t<i.words.length;t++)i.words[t].sense[0].gloss[0].text===va.search&&(r[o]=i.words[t],o++)}for(let o=0;o<Ma.length;o++)if(Ma[o].visible){let t=0;r=[];for(let s=Ma[o].start;s<Ma[o].end;s++)r[t]=i.words[s],t++}return console.log(r),(o,t)=>(ke(),ye("div",Uf,[(ke(!0),ye(Me,null,yn(Se(r),s=>(ke(),ye("div",Kf,[X("div",Vf,[Yf,(ke(!0),ye(Me,null,yn(s.kanji,(d,m)=>(ke(),ye("div",null,[m===0?(ke(),ye("span",Gf,ua(d.text),1)):Ta("",!0)]))),256))]),X("div",Jf,[Qf,(ke(!0),ye(Me,null,yn(s.kana,(d,m)=>(ke(),ye("div",null,[m===0?(ke(),ye("span",Xf,ua(d.text),1)):Ta("",!0)]))),256))]),X("div",Zf,[ej,(ke(!0),ye(Me,null,yn(s.sense,d=>(ke(),ye("div",null,[(ke(!0),ye(Me,null,yn(d.gloss,m=>(ke(),ye("div",null,[X("span",aj,ua(m.text)+", ",1)]))),256))]))),256))])]))),256))]))}},ij=mn(nj,[["__scopeId","data-v-0d825245"]]);const rj=a=>(wt("data-v-675564ab"),a=a(),xt(),a),oj={class:"header"},tj={class:"grid"},sj={key:0},dj={key:1},mj={key:2},uj={key:3},lj={key:4},_j={key:5},kj={key:6},cj=rj(()=>X("span",{class:"loading"},"loading...",-1)),pj={__name:"App",setup(a){function e(){Ae[0].visible=!Ae[0].visible}return(n,i)=>(ke(),ye(Me,null,[Oe(bf),X("div",oj,[X("span",{class:"burger",onClick:e},ua(Se(Ae)[0].visible?"\u292B":"="),1),X("span",null,ua(Se(va).title),1)]),X("div",tj,[Se(Ae)[1].visible?(ke(),ye("div",sj,[Oe(wf)])):Ta("",!0),Se(Ae)[2].visible?(ke(),ye("div",dj,[Oe(Ef)])):Ta("",!0),Se(Ae)[3].visible?(ke(),ye("div",mj,[Oe(Tf)])):Ta("",!0),Se(Ae)[4].visible?(ke(),ye("div",uj,[Oe(zf)])):Ta("",!0),Se(Ae)[5].visible?(ke(),ye("div",lj,[Oe($f)])):Ta("",!0),Se(Ae)[6].visible?(ke(),ye("div",_j)):Ta("",!0),Se(va).words?(ke(),ye("div",kj,[(ke(),St(rk,null,{fallback:pr(()=>[cj]),default:pr(()=>[Oe(ij)]),_:1}))])):Ta("",!0)])],64))}},hj=mn(pj,[["__scopeId","data-v-675564ab"]]),gj={apiKey:"AIzaSyC_nmckRuqsvaOyYwu-RwP82q8f5vFpqLE",authDomain:"japanesejisho.firebaseapp.com",databaseURL:"https://japanesejisho-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"japanesejisho",storageBucket:"japanesejisho.appspot.com",messagingSenderId:"255107822451",appId:"1:255107822451:web:5f719e8be86c97d0478b06"};Kp(gj);const yj=tf(cf());Rc(hj).mount("#app");